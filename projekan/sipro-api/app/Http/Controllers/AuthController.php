<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required|string',
        ]);

        $user = User::with('role.permissions')->where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Email atau password salah.'],
            ]);
        }

        if (! $user->is_active) {
            throw ValidationException::withMessages([
                'email' => ['Akun Anda tidak aktif. Hubungi administrator.'],
            ]);
        }

        $user->last_login_at = now();
        $user->save();

        $user->tokens()->delete();

        $token = $user->createToken('sipro-token')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user'  => $this->formatUser($user),
        ]);
    }

    public function me(Request $request)
    {
        $user = $request->user()->load('role.permissions');
        return response()->json($this->formatUser($user));
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    }

    public function changePassword(Request $request)
    {
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|min:6',
        ]);

        $user = $request->user();

        if (! Hash::check($request->old_password, $user->password)) {
            return response()->json(['message' => 'Password lama tidak sesuai'], 422);
        }

        $user->password = Hash::make($request->new_password);
        $user->must_reset_password = false;
        $user->save();

        return response()->json(['message' => 'Password berhasil diubah']);
    }

    private function formatUser(User $user): array
    {
        $role = $user->role;
        $permissions = [];

        if ($role) {
            foreach ($role->permissions as $perm) {
                $permissions[$perm->module] = $perm->access_level;
            }
        }

        return [
            'id'                  => $user->id,
            'name'                => $user->name,
            'email'               => $user->email,
            'role_id'             => $user->role_id,
            'role_name'           => $role?->name,
            'role_color'          => $role?->color,
            'departemen'          => $user->departemen,
            'is_active'           => $user->is_active,
            'is_admin'            => $user->is_admin,
            'must_reset_password' => $user->must_reset_password,
            'last_login_at'       => $user->last_login_at?->toDateTimeString(),
            'permissions'         => $permissions,
        ];
    }
}
