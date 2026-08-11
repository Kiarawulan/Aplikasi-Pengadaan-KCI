<?php

use App\Models\Role;
use App\Models\RolePermission;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

return new class extends Migration
{
    public function up(): void
    {
        $roles = [
            [
                'id' => 'role-admin-pengadaan',
                'name' => 'Admin Pengadaan',
                'description' => 'Administrator Pengadaan yang bertugas memverifikasi NPP, menerbitkan SP3, PBJ, Kontrak, memverifikasi BAHP/pengujian, dan memverifikasi pembayaran.',
                'color' => '#e6251c',
                'role_type' => 'admin',
                'is_system' => true,
                'permissions' => [
                    'dashboard' => 'editor',
                    'pengajuanDana' => 'editor',
                    'pengadaan' => 'editor',
                    'pengujian' => 'editor',
                    'pembayaran' => 'editor',
                    'templateDokumen' => 'editor',
                    'masterData' => 'editor',
                    'userManagement' => 'editor',
                    'roleManagement' => 'no-access',
                ],
            ],
            [
                'id' => 'role-admin-logistik',
                'name' => 'Admin Logistik',
                'description' => 'Administrator pengelola logistik, warehouse, material, inventory, dan verifikasi alur logistik.',
                'color' => '#0284c7',
                'role_type' => 'admin',
                'is_system' => true,
                'permissions' => [
                    'dashboard' => 'editor',
                    'pengajuanDana' => 'viewer',
                    'pengadaan' => 'editor',
                    'pengujian' => 'editor',
                    'pembayaran' => 'viewer',
                    'templateDokumen' => 'editor',
                    'masterData' => 'editor',
                    'userManagement' => 'viewer',
                    'roleManagement' => 'no-access',
                ],
            ],
            [
                'id' => 'role-staff-pengadaan',
                'name' => 'Staff Pengadaan (user)',
                'description' => 'Staff pengguna/pemohon untuk membuat pengajuan Park Document (PD), Purchase Requisition (PR), mengajukan request pengujian, dan mengunggah dokumen pembayaran.',
                'color' => '#10b981',
                'role_type' => 'user',
                'is_system' => true,
                'permissions' => [
                    'dashboard' => 'editor',
                    'pengajuanDana' => 'editor',
                    'pengadaan' => 'editor',
                    'pengujian' => 'editor',
                    'pembayaran' => 'editor',
                    'templateDokumen' => 'viewer',
                    'masterData' => 'no-access',
                    'userManagement' => 'no-access',
                    'roleManagement' => 'no-access',
                ],
            ],
        ];

        foreach ($roles as $data) {
            $raw = DB::table('roles')
                ->where('id', $data['id'])
                ->orWhereRaw('LOWER(TRIM(name)) = ?', [strtolower(trim($data['name']))])
                ->first();

            if ($raw) {
                DB::table('roles')->where('id', $raw->id)->update([
                    'name' => $data['name'],
                    'description' => $data['description'],
                    'color' => $data['color'],
                    'role_type' => $data['role_type'],
                    'is_system' => $data['is_system'],
                    'updated_at' => now(),
                ]);
                $roleId = $raw->id;
            } else {
                DB::table('roles')->insert([
                    'id' => $data['id'],
                    'name' => $data['name'],
                    'description' => $data['description'],
                    'color' => $data['color'],
                    'role_type' => $data['role_type'],
                    'is_system' => $data['is_system'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
                $roleId = $data['id'];
            }

            foreach ($data['permissions'] as $module => $accessLevel) {
                RolePermission::updateOrCreate(
                    ['role_id' => $roleId, 'module' => $module],
                    ['access_level' => $accessLevel],
                );
            }
        }

        $users = [
            [
                'id' => 'user-admin-pengadaan',
                'name' => 'Admin Pengadaan',
                'username' => 'adminpengadaan',
                'email' => 'admin.pengadaan@sipro.com',
                'password' => 'pengadaan123',
                'role_name' => 'Admin Pengadaan',
                'default_role_id' => 'role-admin-pengadaan',
                'departemen' => 'Pengadaan',
                'is_admin' => true,
            ],
            [
                'id' => 'user-admin-logistik',
                'name' => 'Admin Logistik',
                'username' => 'adminlogistik',
                'email' => 'admin.logistik@sipro.com',
                'password' => 'logistik123',
                'role_name' => 'Admin Logistik',
                'default_role_id' => 'role-admin-logistik',
                'departemen' => 'Logistik',
                'is_admin' => true,
            ],
            [
                'id' => 'user-staff-pengadaan',
                'name' => 'Staff Pengadaan',
                'username' => 'staffpengadaan',
                'email' => 'staff.pengadaan@sipro.com',
                'password' => 'staff123',
                'role_name' => 'Staff Pengadaan (user)',
                'default_role_id' => 'role-staff-pengadaan',
                'departemen' => 'Pengadaan',
                'is_admin' => false,
            ],
        ];

        foreach ($users as $data) {
            $rawRole = DB::table('roles')
                ->whereRaw('LOWER(TRIM(name)) = ?', [strtolower(trim($data['role_name']))])
                ->first();
            $roleId = $rawRole ? $rawRole->id : $data['default_role_id'];

            $rawUser = DB::table('users')
                ->where('id', $data['id'])
                ->orWhere('email', $data['email'])
                ->orWhere('username', $data['username'])
                ->first();

            if ($rawUser) {
                DB::table('users')->where('id', $rawUser->id)->update([
                    'name' => $data['name'],
                    'username' => $data['username'],
                    'email' => $data['email'],
                    'role_id' => $roleId,
                    'departemen' => $data['departemen'],
                    'is_admin' => $data['is_admin'],
                    'is_active' => true,
                    'password' => Hash::make($data['password']),
                    'updated_at' => now(),
                ]);
            } else {
                DB::table('users')->insert([
                    'id' => $data['id'],
                    'name' => $data['name'],
                    'username' => $data['username'],
                    'email' => $data['email'],
                    'password' => Hash::make($data['password']),
                    'role_id' => $roleId,
                    'departemen' => $data['departemen'],
                    'is_admin' => $data['is_admin'],
                    'is_active' => true,
                    'must_reset_password' => false,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }

    public function down(): void
    {
    }
};
