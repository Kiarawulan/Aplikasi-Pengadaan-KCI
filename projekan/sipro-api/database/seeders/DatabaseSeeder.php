<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\RolePermission;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed only the two accounts required to operate a clean SIPRO installation.
     * Procurement, master-data, and verification records must always be created
     * through the application so the user/admin workflow uses the same database.
     */
    public function run(): void
    {
        $roles = [
            [
                'id' => 'role-admin',
                'name' => 'Super Admin',
                'description' => 'Akses penuh ke seluruh modul dan verifikasi.',
                'color' => '#e6251c',
                'role_type' => 'admin',
                'is_system' => true,
                'permissions' => [
                    'dashboard' => 'editor', 'pengajuanDana' => 'editor', 'pengadaan' => 'editor',
                    'pengujian' => 'editor', 'pembayaran' => 'editor', 'templateDokumen' => 'editor',
                    'masterData' => 'editor', 'userManagement' => 'editor',
                ],
            ],
            [
                'id' => 'role-it',
                'name' => 'User IT',
                'description' => 'Pengguna CTIT untuk membuat dan memantau pengajuan.',
                'color' => '#7c3aed',
                'role_type' => 'user',
                'is_system' => true,
                'permissions' => [
                    'dashboard' => 'viewer', 'pengajuanDana' => 'editor', 'pengadaan' => 'editor',
                    'pengujian' => 'editor', 'pembayaran' => 'editor', 'templateDokumen' => 'viewer',
                    'masterData' => 'no-access', 'userManagement' => 'no-access',
                ],
            ],
        ];

        foreach ($roles as $data) {
            $role = Role::updateOrCreate(
                ['id' => $data['id']],
                collect($data)->except('permissions')->all(),
            );

            foreach ($data['permissions'] as $module => $accessLevel) {
                RolePermission::updateOrCreate(
                    ['role_id' => $role->id, 'module' => $module],
                    ['access_level' => $accessLevel],
                );
            }
        }

        $users = [
            [
                'id' => 'user-admin',
                'name' => 'Super Admin',
                'email' => 'admin@sipro.com',
                'password' => 'admin123',
                'role_id' => 'role-admin',
                'departemen' => 'Management',
                'is_admin' => true,
            ],
            [
                'id' => 'user-it',
                'name' => 'User IT',
                'email' => 'it@sipro.com',
                'password' => 'it123',
                'role_id' => 'role-it',
                'departemen' => 'CTIT',
                'is_admin' => false,
            ],
        ];

        foreach ($users as $data) {
            User::updateOrCreate(
                ['id' => $data['id']],
                [
                    ...$data,
                    'password' => Hash::make($data['password']),
                    'is_active' => true,
                    'must_reset_password' => false,
                ],
            );
        }
    }
}
