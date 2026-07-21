<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\RolePermission;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::with('permissions')->get()->map(function ($r) {
            $perms = [];
            foreach ($r->permissions as $p) {
                $perms[$p->module] = $p->access_level;
            }

            return [
                'id'          => $r->id,
                'name'        => $r->name,
                'description' => $r->description,
                'roleType'    => $r->role_type ?? ($r->id === 'role-admin' ? 'admin' : 'user'),
                'color'       => $r->color,
                'isSystem'    => $r->is_system,
                'permissions' => $perms,
                'createdAt'   => $r->created_at?->toDateString(),
            ];
        });

        return response()->json($roles);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'        => 'required|string',
            'description' => 'nullable|string',
            'roleType'    => 'required|in:admin,user',
            'color'       => 'required|string',
            'permissions' => 'required|array',
        ]);

        $roleId = 'ROLE-' . strtoupper(Str::random(6));

        $role = Role::create([
            'id'          => $roleId,
            'name'        => $request->name,
            'description' => $request->description,
            'role_type'   => $request->roleType,
            'color'       => $request->color,
            'is_system'   => false,
        ]);

        foreach ($request->permissions as $module => $level) {
            RolePermission::create([
                'role_id'      => $role->id,
                'module'       => $module,
                'access_level' => $level,
            ]);
        }

        return response()->json($role->load('permissions'), 201);
    }

    public function update(Request $request, Role $role)
    {
        $request->validate([
            'name'        => 'sometimes|string',
            'description' => 'nullable|string',
            'roleType'    => 'sometimes|in:admin,user',
            'color'       => 'sometimes|string',
            'permissions' => 'sometimes|array',
        ]);

        if (! $role->is_system && $request->has('name')) {
            $role->name = $request->name;
        }

        if ($request->has('description')) $role->description = $request->description;
        if ($request->has('roleType')) $role->role_type = $request->roleType;
        if ($request->has('color')) $role->color = $request->color;
        $role->save();

        if ($request->has('permissions')) {
            RolePermission::where('role_id', $role->id)->delete();
            foreach ($request->permissions as $module => $level) {
                RolePermission::create([
                    'role_id'      => $role->id,
                    'module'       => $module,
                    'access_level' => $level,
                ]);
            }
        }

        return response()->json($role->load('permissions'));
    }

    public function destroy(Role $role)
    {
        if ($role->is_system) {
            return response()->json(['message' => 'Role sistem tidak dapat dihapus'], 422);
        }

        $role->delete();
        return response()->json(['message' => 'Role berhasil dihapus']);
    }
}
