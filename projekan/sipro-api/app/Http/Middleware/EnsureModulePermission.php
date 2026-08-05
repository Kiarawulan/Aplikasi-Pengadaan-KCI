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

        $level = $user->loadMissing('role.permissions')->role?->permissions
            ->firstWhere('module', $module)?->access_level;

        return $required === 'editor'
            ? $level === 'editor'
            : in_array($level, ['viewer', 'editor'], true);
    }
}
