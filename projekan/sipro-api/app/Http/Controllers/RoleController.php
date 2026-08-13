<?php

namespace App\Http\Controllers;

use App\Models\AuditLog;
use App\Http\Middleware\EnsureModulePermission;
use App\Models\Role;
use App\Models\RolePermission;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

use Illuminate\Support\Facades\Schema;

class RoleController extends Controller
{
    public function index(Request $request)
    {
        $canManageRoles = EnsureModulePermission::allows($request->user(), 'roleManagement', 'viewer');
        abort_unless(
            $canManageRoles || EnsureModulePermission::allows($request->user(), 'userManagement', 'viewer'),
            403,
            'Anda tidak memiliki izin untuk melihat daftar role.'
        );

        $roles = Role::with('permissions')->withCount('users')->orderBy('name');
        // A user manager who cannot manage roles may only assign regular User
        // roles. This prevents using the user form to grant administrator access.
        if (! $canManageRoles) $roles->where('role_type', 'user');

        return response()->json($roles->get()->map(fn (Role $role) => $this->present($role)));
    }

    public function show(Role $role)
    {
        return response()->json($this->present($role->load('permissions')->loadCount('users')));
    }

    public function store(Request $request)
    {
        $data = $this->validateRole($request);
        $role = DB::transaction(function () use ($data, $request) {
            $role = Role::create([
                'id' => 'ROLE-' . strtoupper(Str::random(8)),
                'name' => $data['name'],
                'description' => $data['description'] ?? null,
                'role_type' => $data['roleType'],
                'color' => $data['color'],
                'is_system' => false,
                'is_active' => true,
            ]);
            $this->replacePermissions($role, $data['permissions']);
            $this->audit($request, 'role.created', $role, null, $this->snapshot($role));
            return $role;
        });

        return response()->json($this->present($role->load('permissions')->loadCount('users')), 201);
    }

    public function update(Request $request, Role $role)
    {
        $data = $this->validateRole($request, $role);
        $updated = DB::transaction(function () use ($data, $request, $role) {
            $role->load('permissions');
            $before = $this->snapshot($role);

            $nextRoleType = $data['roleType'] ?? $role->role_type;
            $nextActive = $data['active'] ?? $role->is_active;
            if ($role->role_type === 'admin' && ! $nextActive) {
                $activeAdmins = User::where('is_active', true)->where('is_admin', true)->count();
                $affectedAdmins = User::where('is_active', true)->where('role_id', $role->id)->count();
                abort_if($activeAdmins <= $affectedAdmins, 422, 'Role ini masih memegang akses admin aktif terakhir dan tidak dapat dinonaktifkan.');
            }
            if ($role->role_type === 'admin' && $nextRoleType !== 'admin') {
                $activeAdmins = User::where('is_active', true)->where('is_admin', true)->count();
                $affectedAdmins = User::where('is_active', true)->where('role_id', $role->id)->count();
                abort_if($activeAdmins <= $affectedAdmins, 422, 'Role ini masih memegang akses admin aktif terakhir.');
            }

            if (! $role->is_system && array_key_exists('name', $data)) $role->name = $data['name'];
            if (array_key_exists('description', $data)) $role->description = $data['description'];
            if (array_key_exists('color', $data)) $role->color = $data['color'];
            if (array_key_exists('roleType', $data)) $role->role_type = $nextRoleType;
            if (array_key_exists('active', $data)) $role->is_active = $nextActive;
            $role->save();

            if (array_key_exists('permissions', $data)) $this->replacePermissions($role, $data['permissions']);

            // Account context must follow role type for every assigned user.
            $assignedUsers = User::where('role_id', $role->id)->get();
            foreach ($assignedUsers as $assignedUser) {
                $assignedUser->is_admin = $role->role_type === 'admin';
                $assignedUser->save();
                // Authorization is read from the database on every API request.
                // Revoking old tokens also refreshes the sidebar/context at login.
                $assignedUser->tokens()->delete();
            }
            $role->load('permissions');
            $this->audit($request, 'role.updated', $role, $before, $this->snapshot($role));
            return $role;
        });

        return response()->json($this->present($updated->loadCount('users')));
    }

    public function destroy(Request $request, Role $role)
    {
        if ($role->is_system) {
            return response()->json(['message' => 'Role sistem tidak dapat dihapus'], 422);
        }
        if ($role->users()->exists()) {
            return response()->json(['message' => 'Role masih digunakan oleh user dan tidak dapat dihapus.'], 422);
        }

        DB::transaction(function () use ($request, $role) {
            $role->load('permissions');
            $before = $this->snapshot($role);
            $this->audit($request, 'role.deleted', $role, $before, null);
            $role->delete();
        });

        return response()->json(['message' => 'Role berhasil dihapus']);
    }

    private function validateRole(Request $request, ?Role $role = null): array
    {
        $nameRule = Rule::unique('roles', 'name');
        if ($role) $nameRule = $nameRule->ignore($role->id, 'id');

        $data = $request->validate([
            'name' => [$role ? 'sometimes' : 'required', 'string', 'max:100', $nameRule],
            'description' => ['sometimes', 'nullable', 'string', 'max:1000'],
            'roleType' => [$role ? 'sometimes' : 'required', 'in:admin,user'],
            'color' => [$role ? 'sometimes' : 'required', 'string', 'max:30'],
            'permissions' => [$role ? 'sometimes' : 'required', 'array'],
            'permissions.*' => ['required', 'in:viewer,editor,no-access'],
            'active' => ['sometimes', 'boolean'],
        ]);

        $roleType = $data['roleType'] ?? $role?->role_type;
        if ($roleType === 'user' && isset($data['permissions'])) {
            foreach (['userManagement', 'roleManagement'] as $adminModule) {
                $data['permissions'][$adminModule] = 'no-access';
            }
        }

        return $data;
    }

    private function replacePermissions(Role $role, array $permissions): void
    {
        RolePermission::where('role_id', $role->id)->delete();
        foreach ($permissions as $module => $level) {
            RolePermission::create([
                'role_id' => $role->id,
                'module' => $module,
                'access_level' => $level,
            ]);
        }
    }

    private function present(Role $role): array
    {
        return [
            'id' => $role->id,
            'name' => $role->name,
            'description' => $role->description,
            'roleType' => $role->role_type,
            'color' => $role->color,
            'isSystem' => $role->is_system,
            'active' => $role->is_active,
            'permissions' => $role->permissions->mapWithKeys(fn (RolePermission $permission) => [$permission->module => $permission->access_level])->all(),
            'userCount' => $role->users_count ?? $role->users()->count(),
            'createdAt' => $role->created_at?->toDateTimeString(),
            'updatedAt' => $role->updated_at?->toDateTimeString(),
        ];
    }

    private function audit(Request $request, string $action, Role $role, ?array $old, ?array $new): void
    {
        if (Schema::hasTable('audit_logs')) {
            try {
                AuditLog::create([
                    'actor_id' => $request->user()?->id,
                    'action' => $action,
                    'target_type' => 'role',
                    'target_id' => $role->id,
                    'old_data' => $old,
                    'new_data' => $new,
                ]);
            } catch (\Throwable $e) {}
        }
    }

    private function snapshot(Role $role): array
    {
        return [
            'name' => $role->name,
            'role_type' => $role->role_type,
            'description' => $role->description,
            'is_active' => $role->is_active,
            'permissions' => $role->permissions->mapWithKeys(fn (RolePermission $permission) => [$permission->module => $permission->access_level])->all(),
        ];
    }
}
