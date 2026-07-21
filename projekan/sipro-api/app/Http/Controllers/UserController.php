<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('role')->get()->map(function ($u) {
            return [
                'id'                  => $u->id,
                'name'                => $u->name,
                'email'               => $u->email,
                'roleId'              => $u->role_id,
                'roleName'            => $u->role?->name,
                'roleColor'           => $u->role?->color,
                'departemen'          => $u->departemen,
                'isActive'            => $u->is_active,
                'isAdmin'             => $u->is_admin,
                'mustResetPassword'   => $u->must_reset_password,
                'lastLogin'           => $u->last_login_at?->toDateTimeString(),
                'createdAt'           => $u->created_at?->toDateString(),
            ];
        });

        return response()->json($users);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'       => 'required|string',
            'email'      => 'required|email|unique:users,email',
            'roleId'     => 'required|exists:roles,id',
            'departemen' => 'required|string',
        ]);

        $pw = Str::random(10);

        $user = User::create([
            'id'                  => 'USR-' . strtoupper(Str::random(6)),
            'name'                => $request->name,
            'email'               => $request->email,
            'password'            => Hash::make($pw),
            'role_id'             => $request->roleId,
            'departemen'          => $request->departemen,
            'is_active'           => true,
            'is_admin'            => $request->roleId === 'role-admin',
            'must_reset_password' => true,
        ]);

        return response()->json([
            'user'             => $user->load('role'),
            'generatedPassword' => $pw,
        ], 201);
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'name'       => 'sometimes|string',
            'roleId'     => 'sometimes|exists:roles,id',
            'departemen' => 'sometimes|string',
            'isActive'   => 'sometimes|boolean',
        ]);

        if ($request->has('name')) $user->name = $request->name;
        if ($request->has('roleId')) {
            $user->role_id = $request->roleId;
            $user->is_admin = ($request->roleId === 'role-admin');
        }
        if ($request->has('departemen')) $user->departemen = $request->departemen;
        if ($request->has('isActive')) $user->is_active = $request->isActive;

        $user->save();

        return response()->json($user->load('role'));
    }

    public function destroy(User $user)
    {
        if ($user->id === auth()->id()) {
            return response()->json(['message' => 'Tidak dapat menghapus akun sendiri'], 422);
        }

        $user->delete();
        return response()->json(['message' => 'User berhasil dihapus']);
    }

    public function resetPassword(User $user)
    {
        $pw = Str::random(10);
        $user->password = Hash::make($pw);
        $user->must_reset_password = true;
        $user->save();

        return response()->json([
            'message'          => 'Password berhasil direset',
            'generatedPassword' => $pw,
        ]);
    }

    public function toggleActive(User $user)
    {
        if ($user->id === auth()->id()) {
            return response()->json(['message' => 'Tidak dapat mengubah status akun sendiri'], 422);
        }

        $user->is_active = ! $user->is_active;
        $user->save();

        return response()->json(['isActive' => $user->is_active]);
    }
}
