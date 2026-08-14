<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;

class EnsureModulePermission
{
    public function handle(Request $request, Closure $next, string $module, string $required = 'viewer')
    {
        $user = $request->user();
        if (! $user) {
            return response()->json(['success' => false, 'message' => 'Unauthenticated.'], 401);
        }

        if (! self::allows($user, $module, $required)) {
            return response()->json(['success' => false, 'message' => 'Anda tidak memiliki izin untuk mengakses modul ini.'], 403);
        }

        return $next($request);
    }

    public static function allows(?User $user, string $module, string $required = 'viewer'): bool
    {
        if (! $user || ! $user->is_active) return false;

        $role = $user->loadMissing('role.permissions')->role;
        if ($role && ! $role->is_active) return false;

        // Built-in admin identities or any user marked as is_admin bypass the matrix.
        if (
            $user->is_admin ||
            $user->email === 'admin@sipro.com' ||
            $user->role_id === 'role-admin' ||
            in_array($user->role?->name, ['Super Admin', 'Admin Full Access', 'Admin'], true)
        ) {
            return true;
        }

        // User role default permission for core user workflow modules
        if (!$role || $role->role_type === 'user' || empty($role->role_type)) {
            if (in_array($module, ['pengadaan', 'pengajuanDana', 'pembayaran', 'pengujian', 'dashboard'], true)) {
                return true;
            }
        }

        // Module permission check with cross-module support for core workflow endpoints (e.g. document uploads/downloads for pengadaan)
        $modulesToCheck = ($module === 'pengadaan') ? ['pengadaan', 'pengujian', 'pengajuanDana', 'pembayaran'] : [$module];

        foreach ($modulesToCheck as $mod) {
            $permission = $role?->permissions->firstWhere('module', $mod);
            $level = $permission?->access_level;

            if ($required === 'editor' && $level === 'editor') {
                return true;
            }
            if ($required === 'viewer' && in_array($level, ['viewer', 'editor'], true)) {
                return true;
            }
        }

        // Default fallback for core user workflow modules if not explicitly set
        if ((!$role || $role->role_type === 'user' || empty($role->role_type))
            && in_array($module, ['pengadaan', 'pengajuanDana', 'pembayaran', 'pengujian', 'dashboard'], true)) {
            return true;
        }

        return false;
    }
}
