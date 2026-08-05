<?php

namespace App\Http\Controllers;

use App\Models\AuditLog;
use App\Http\Middleware\EnsureModulePermission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(User::with('role')->latest()->get()->map(fn (User $user) => $this->present($user)));
    }

    public function show(User $user)
    {
        return response()->json($this->present($user->load('role')));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'       => ['required', 'string', 'max:255'],
            'username'   => ['required', 'string', 'min:3', 'max:100', 'alpha_dash', 'unique:users,username'],
            'email'      => ['required', 'email', 'max:255', 'unique:users,email'],
            'password'   => ['required', 'string', 'min:6'],
            'roleId'     => ['required', 'exists:roles,id'],
            'departemen' => ['required', 'string', 'max:255'],
        ]);

        $user = DB::transaction(function () use ($data, $request) {
            $role = Role::findOrFail($data['roleId']);
            $this->assertRoleCanBeAssigned($request, $role);
            $user = User::create([
                'id'                  => 'USR-' . strtoupper(Str::random(8)),
                'name'                => $data['name'],
                'username'            => $data['username'],
                'email'               => $data['email'],
                'password'            => Hash::make($data['password']),
                'role_id'             => $role->id,
                'departemen'          => $data['departemen'],
                'is_active'           => true,
                'is_admin'            => $role->role_type === 'admin',
                'must_reset_password' => false,
            ]);

            $this->audit($request, 'user.created', $user, null, $this->auditSnapshot($user));
            return $user;
        });

        return response()->json(['user' => $this->present($user->load('role'))], 201);
    }

    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name'       => ['sometimes', 'string', 'max:255'],
            'username'   => ['sometimes', 'string', 'min:3', 'max:100', 'alpha_dash', Rule::unique('users', 'username')->ignore($user->id, 'id')],
            'email'      => ['sometimes', 'email', 'max:255', Rule::unique('users', 'email')->ignore($user->id, 'id')],
            'roleId'     => ['sometimes', 'exists:roles,id'],
            'departemen' => ['sometimes', 'string', 'max:255'],
            'isActive'   => ['sometimes', 'boolean'],
            'password'   => ['sometimes', 'nullable', 'string', 'min:6'],
        ]);

        $updated = DB::transaction(function () use ($data, $request, $user) {
            $user->load('role');
            $before = $this->auditSnapshot($user);
            $nextRole = isset($data['roleId']) ? Role::findOrFail($data['roleId']) : $user->role;
            $this->assertRoleCanBeAssigned($request, $nextRole);
            $nextActive = array_key_exists('isActive', $data) ? (bool) $data['isActive'] : $user->is_active;

            if ($user->id === $request->user()->id && ! $nextActive) {
                abort(422, 'Anda tidak dapat menonaktifkan akun sendiri.');
            }
            $this->assertAdminRemains($user, $nextRole, $nextActive);

            foreach (['name' => 'name', 'username' => 'username', 'email' => 'email', 'departemen' => 'departemen'] as $input => $column) {
                if (array_key_exists($input, $data)) $user->{$column} = $data[$input];
            }
            if (isset($data['roleId'])) {
                $user->role_id = $nextRole->id;
                $user->is_admin = $nextRole->role_type === 'admin';
            }
            if (array_key_exists('isActive', $data)) $user->is_active = $nextActive;
            if (! empty($data['password'])) $user->password = Hash::make($data['password']);
            $user->save();

            $this->audit($request, 'user.updated', $user, $before, $this->auditSnapshot($user));
            return $user->fresh('role');
        });

        return response()->json($this->present($updated));
    }

    public function destroy(Request $request, User $user)
    {
        if ($user->id === $request->user()->id) {
            return response()->json(['message' => 'Tidak dapat menghapus akun sendiri'], 422);
        }

        DB::transaction(function () use ($request, $user) {
            $user->load('role');
            $this->assertAdminRemains($user, null, false);
            $before = $this->auditSnapshot($user);
            $this->audit($request, 'user.deleted', $user, $before, null);
            $user->tokens()->delete();
            $user->delete();
        });

        return response()->json(['message' => 'User berhasil dihapus']);
    }

    public function resetPassword(Request $request, User $user)
    {
        $data = $request->validate(['password' => ['nullable', 'string', 'min:6']]);
        $password = $data['password'] ?? Str::password(12);
        $before = $this->auditSnapshot($user);
        $user->password = Hash::make($password);
        $user->must_reset_password = true;
        $user->tokens()->delete();
        $user->save();
        $this->audit($request, 'user.password_reset', $user, $before, $this->auditSnapshot($user));

        return response()->json([
            'message' => 'Password berhasil direset',
            'generatedPassword' => $data['password'] ? null : $password,
        ]);
    }

    public function toggleActive(Request $request, User $user)
    {
        if ($user->id === $request->user()->id) {
            return response()->json(['message' => 'Tidak dapat mengubah status akun sendiri'], 422);
        }

        $user->load('role');
        $before = $this->auditSnapshot($user);
        $nextActive = ! $user->is_active;
        $this->assertAdminRemains($user, $user->role, $nextActive);
        $user->is_active = $nextActive;
        if (! $nextActive) $user->tokens()->delete();
        $user->save();
        $this->audit($request, $nextActive ? 'user.activated' : 'user.deactivated', $user, $before, $this->auditSnapshot($user));

        return response()->json(['isActive' => $user->is_active]);
    }

    private function assertAdminRemains(User $user, ?Role $nextRole, bool $nextActive): void
    {
        $user->loadMissing('role');
        $isCurrentAdmin = $user->is_active && ($user->role?->role_type === 'admin' || $user->is_admin);
        $willRemainAdmin = $nextActive && ($nextRole?->role_type === 'admin');

        if ($isCurrentAdmin && ! $willRemainAdmin && User::where('is_active', true)->where('is_admin', true)->count() <= 1) {
            abort(422, 'Admin aktif terakhir tidak dapat dihapus, dinonaktifkan, atau dipindahkan rolenya.');
        }
    }

    private function assertRoleCanBeAssigned(Request $request, Role $role): void
    {
        // Managing user accounts alone never permits granting an Admin role.
        // That action additionally requires Role Management edit permission.
        if ($role->role_type === 'admin' && ! EnsureModulePermission::allows($request->user(), 'roleManagement', 'editor')) {
            abort(403, 'Anda tidak memiliki izin untuk memberikan role Admin.');
        }
    }

    private function present(User $user): array
    {
        return [
            'id'                => $user->id,
            'name'              => $user->name,
            'username'          => $user->username,
            'email'             => $user->email,
            'roleId'            => $user->role_id,
            'roleName'          => $user->role?->name,
            'roleColor'         => $user->role?->color,
            'accountType'       => $user->role?->role_type ?? ($user->is_admin ? 'admin' : 'user'),
            'departemen'        => $user->departemen,
            'isActive'          => $user->is_active,
            'isAdmin'           => $user->role ? $user->role->role_type === 'admin' : $user->is_admin,
            'mustResetPassword' => $user->must_reset_password,
            'lastLogin'         => $user->last_login_at?->toDateTimeString(),
            'createdAt'         => $user->created_at?->toDateTimeString(),
            'updatedAt'         => $user->updated_at?->toDateTimeString(),
        ];
    }

    private function audit(Request $request, string $action, User $user, ?array $old, ?array $new): void
    {
        AuditLog::create([
            'actor_id' => $request->user()?->id,
            'action' => $action,
            'target_type' => 'user',
            'target_id' => $user->id,
            'old_data' => $old,
            'new_data' => $new,
        ]);
    }

    private function auditSnapshot(User $user): array
    {
        return [
            'name' => $user->name,
            'username' => $user->username,
            'email' => $user->email,
            'role_id' => $user->role_id,
            'is_active' => $user->is_active,
            'departemen' => $user->departemen,
        ];
    }
}
