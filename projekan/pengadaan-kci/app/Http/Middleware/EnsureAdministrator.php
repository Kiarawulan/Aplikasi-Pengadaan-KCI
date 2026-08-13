<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EnsureAdministrator
{
    public function handle(Request $request, Closure $next)
    {
        $user = $request->user();
        $user?->loadMissing('role');
        if (! $user?->is_active || ($user->role && ! $user->role->is_active)) {
            return response()->json(['success' => false, 'message' => 'Akun atau role Anda sedang nonaktif. Akses ditolak.'], 403);
        }
        if (! $user->is_admin) {
            return response()->json(['success' => false, 'message' => 'Tindakan ini hanya tersedia untuk admin.'], 403);
        }

        return $next($request);
    }
}
