<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EnsureAdministrator
{
    public function handle(Request $request, Closure $next)
    {
        if (! $request->user()?->is_admin) {
            return response()->json(['success' => false, 'message' => 'Tindakan ini hanya tersedia untuk admin.'], 403);
        }

        return $next($request);
    }
}
