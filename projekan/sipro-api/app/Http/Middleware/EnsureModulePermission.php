<?php

namespace App\Http\Middleware;

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

        if ($user->is_admin) {
            return $next($request);
        }

        $level = $user->loadMissing('role.permissions')->role?->permissions
            ->firstWhere('module', $module)?->access_level;
        $allowed = $required === 'editor' ? $level === 'editor' : in_array($level, ['viewer', 'editor'], true);

        if (! $allowed) {
            return response()->json(['success' => false, 'message' => 'Anda tidak memiliki izin untuk mengakses modul ini.'], 403);
        }

        return $next($request);
    }
}
