<?php

use App\Models\RolePermission;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

return new class extends Migration
{
    public function up(): void
    {
        $modules = ['dashboard', 'pengajuanDana', 'pengadaan', 'pengujian', 'pembayaran', 'templateDokumen', 'masterData', 'userManagement', 'roleManagement'];
        $definitions = [
            ['id' => 'role-admin-anggaran', 'name' => 'Admin Anggaran', 'email' => 'admin.anggaran@kci.com', 'username' => 'adminanggaran', 'module' => 'pengajuanDana', 'department' => 'Anggaran', 'color' => '#7c3aed'],
            ['id' => 'role-admin-logistik', 'name' => 'Admin Logistik', 'email' => 'admin.logistik@kci.com', 'username' => 'adminlogistik.kci', 'module' => 'pengadaan', 'department' => 'Logistik', 'color' => '#0284c7'],
            ['id' => 'role-admin-penguji', 'name' => 'Admin Penguji', 'email' => 'admin.penguji@kci.com', 'username' => 'adminpenguji', 'module' => 'pengujian', 'department' => 'Pengujian', 'color' => '#059669'],
            ['id' => 'role-admin-keuangan', 'name' => 'Admin Keuangan', 'email' => 'admin.keuangan@kci.com', 'username' => 'adminkeuangan', 'module' => 'pembayaran', 'department' => 'Keuangan', 'color' => '#d97706'],
        ];

        foreach ($definitions as $definition) {
            $existingRole = DB::table('roles')->where('id', $definition['id'])->orWhere('name', $definition['name'])->first();
            $roleId = $existingRole?->id ?? $definition['id'];
            DB::table('roles')->updateOrInsert(['id' => $roleId], [
                'name' => $definition['name'],
                'description' => "Administrator khusus modul {$definition['module']}.",
                'color' => $definition['color'],
                'role_type' => 'admin',
                'is_system' => true,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
            foreach ($modules as $module) {
                RolePermission::updateOrCreate(
                    ['role_id' => $roleId, 'module' => $module],
                    ['access_level' => $module === $definition['module'] ? 'editor' : ($module === 'dashboard' ? 'viewer' : 'no-access')],
                );
            }
            DB::table('users')->updateOrInsert(['email' => $definition['email']], [
                'id' => 'user-kci-' . str_replace('role-', '', $definition['id']),
                'name' => $definition['name'],
                'username' => $definition['username'],
                'password' => Hash::make('Kci@2026!'),
                'role_id' => $roleId,
                'departemen' => $definition['department'],
                'is_active' => true,
                'is_admin' => true,
                'must_reset_password' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    public function down(): void
    {
        DB::table('users')->whereIn('email', ['admin.anggaran@kci.com', 'admin.logistik@kci.com', 'admin.penguji@kci.com', 'admin.keuangan@kci.com'])->delete();
        DB::table('roles')->whereIn('id', ['role-admin-anggaran', 'role-admin-penguji', 'role-admin-keuangan'])->delete();
    }
};
