<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\RolePermission;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
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
                    'roleManagement' => 'editor',
                ],
            ],
            [
                'id' => 'role-admin-pengadaan',
                'name' => 'Admin Pengadaan',
                'description' => 'Administrator Pengadaan yang bertugas memverifikasi NPP, menerbitkan SP3, PBJ, Kontrak, memverifikasi BAHP/pengujian, dan memverifikasi pembayaran.',
                'color' => '#e6251c',
                'role_type' => 'admin',
                'is_system' => true,
                'permissions' => [
                    'dashboard' => 'editor', 'pengajuanDana' => 'editor', 'pengadaan' => 'editor',
                    'pengujian' => 'editor', 'pembayaran' => 'editor', 'templateDokumen' => 'editor',
                    'masterData' => 'editor', 'userManagement' => 'editor',
                    'roleManagement' => 'no-access',
                ],
            ],
            [
                'id' => 'role-admin-logistik',
                'name' => 'Admin Logistik',
                'description' => 'Administrator khusus modul Pengadaan.',
                'color' => '#0284c7',
                'role_type' => 'admin',
                'is_system' => true,
                'permissions' => [
                    'dashboard' => 'viewer', 'pengajuanDana' => 'no-access', 'pengadaan' => 'editor',
                    'pengujian' => 'no-access', 'pembayaran' => 'no-access', 'templateDokumen' => 'no-access',
                    'masterData' => 'no-access', 'userManagement' => 'no-access',
                    'roleManagement' => 'no-access',
                ],
            ],
            [
                'id' => 'role-admin-anggaran', 'name' => 'Admin Anggaran', 'description' => 'Administrator khusus modul Pengajuan Dana.',
                'color' => '#7c3aed', 'role_type' => 'admin', 'is_system' => true,
                'permissions' => ['dashboard' => 'viewer', 'pengajuanDana' => 'editor', 'pengadaan' => 'no-access', 'pengujian' => 'no-access', 'pembayaran' => 'no-access', 'templateDokumen' => 'editor', 'masterData' => 'editor', 'userManagement' => 'no-access', 'roleManagement' => 'no-access'],
            ],
            [
                'id' => 'role-admin-penguji', 'name' => 'Admin Penguji', 'description' => 'Administrator khusus modul Pengujian.',
                'color' => '#059669', 'role_type' => 'admin', 'is_system' => true,
                'permissions' => ['dashboard' => 'viewer', 'pengajuanDana' => 'no-access', 'pengadaan' => 'no-access', 'pengujian' => 'editor', 'pembayaran' => 'no-access', 'templateDokumen' => 'editor', 'masterData' => 'editor', 'userManagement' => 'no-access', 'roleManagement' => 'no-access'],
            ],
            [
                'id' => 'role-admin-keuangan', 'name' => 'Admin Keuangan', 'description' => 'Administrator khusus modul Pembayaran.',
                'color' => '#d97706', 'role_type' => 'admin', 'is_system' => true,
                'permissions' => ['dashboard' => 'viewer', 'pengajuanDana' => 'no-access', 'pengadaan' => 'no-access', 'pengujian' => 'no-access', 'pembayaran' => 'editor', 'templateDokumen' => 'editor', 'masterData' => 'editor', 'userManagement' => 'no-access', 'roleManagement' => 'no-access'],
            ],
            [
                'id' => 'role-staff-pengadaan',
                'name' => 'Staff Pengadaan (user)',
                'description' => 'Staff pengguna/pemohon untuk membuat pengajuan Park Document (PD), Purchase Requisition (PR), mengajukan request pengujian, dan mengunggah dokumen pembayaran.',
                'color' => '#10b981',
                'role_type' => 'user',
                'is_system' => true,
                'permissions' => [
                    'dashboard' => 'editor', 'pengajuanDana' => 'editor', 'pengadaan' => 'editor',
                    'pengujian' => 'editor', 'pembayaran' => 'editor', 'templateDokumen' => 'viewer',
                    'masterData' => 'no-access', 'userManagement' => 'no-access',
                    'roleManagement' => 'no-access',
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
                    'is_active' => true,
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
                    'is_active' => true,
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
                'id' => 'user-admin',
                'name' => 'Super Admin',
                'username' => 'superadmin',
                'email' => 'admin@sipro.com',
                'password' => 'admin123',
                'role_name' => 'Super Admin',
                'default_role_id' => 'role-admin',
                'departemen' => 'Management',
                'is_admin' => true,
            ],
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
            [
                'id' => 'user-it',
                'name' => 'User IT',
                'username' => 'userit',
                'email' => 'it@sipro.com',
                'password' => 'it123',
                'role_name' => 'User IT',
                'default_role_id' => 'role-it',
                'departemen' => 'CTIT',
                'is_admin' => false,
            ],
            [
                'id' => 'user-kci-admin-anggaran', 'name' => 'Admin Anggaran', 'username' => 'adminanggaran', 'email' => 'admin.anggaran@kci.com', 'password' => 'Kci@2026!',
                'role_name' => 'Admin Anggaran', 'default_role_id' => 'role-admin-anggaran', 'departemen' => 'Anggaran', 'is_admin' => true,
            ],
            [
                'id' => 'user-kci-admin-logistik', 'name' => 'Admin Logistik', 'username' => 'adminlogistik.kci', 'email' => 'admin.logistik@kci.com', 'password' => 'Kci@2026!',
                'role_name' => 'Admin Logistik', 'default_role_id' => 'role-admin-logistik', 'departemen' => 'Logistik', 'is_admin' => true,
            ],
            [
                'id' => 'user-kci-admin-penguji', 'name' => 'Admin Penguji', 'username' => 'adminpenguji', 'email' => 'admin.penguji@kci.com', 'password' => 'Kci@2026!',
                'role_name' => 'Admin Penguji', 'default_role_id' => 'role-admin-penguji', 'departemen' => 'Pengujian', 'is_admin' => true,
            ],
            [
                'id' => 'user-kci-admin-keuangan', 'name' => 'Admin Keuangan', 'username' => 'adminkeuangan', 'email' => 'admin.keuangan@kci.com', 'password' => 'Kci@2026!',
                'role_name' => 'Admin Keuangan', 'default_role_id' => 'role-admin-keuangan', 'departemen' => 'Keuangan', 'is_admin' => true,
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
                    'must_reset_password' => str_ends_with($data['email'], '@kci.com'),
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
                    'must_reset_password' => str_ends_with($data['email'], '@kci.com'),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }

        // Seed Sample RUP Data (Commented out to start with a clean database with no dummy data)
        /*
        $sampleRups = [
            [
                'id' => 'RUP-2024-001',
                'nama' => 'Pengadaan Server & Infrastructure Cloud IT',
                'jenis' => 'Barang',
                'metode' => 'Penunjukan Langsung',
                'nilai' => '750000000',
                'status' => 'Approved',
                'progress' => '0/14',
                'departemen' => 'CTIT',
                'created_by' => 'User IT',
                'details' => [
                    'pilihanRup' => 'Lebih 500 Juta',
                    'namaPaket' => 'Pengadaan Server & Infrastructure Cloud IT',
                    'opexCapex' => 'Capex',
                    'uraian' => 'Pengadaan server cloud untuk sistem pengadaan KCI',
                    'metode' => 'Penunjukan Langsung',
                    'jenisPengadaan' => 'Barang',
                    'kategoriAnggaran' => 'RKAP',
                    'tahunAnggaran' => '2024',
                    'tahunRup' => '2024',
                    'tipeKontrak' => 'Single Year',
                    'pbj' => 'Sarana',
                    'nilaiSebelumPajak' => '750.000.000',
                    'tipePajak' => 'PPN 11%',
                    'nilaiTax' => 'Rp 832.500.000',
                ],
            ],
            [
                'id' => 'RUP-2024-002',
                'nama' => 'Pengadaan Lisensi Software & Firewall',
                'jenis' => 'Barang',
                'metode' => 'Pengadaan Langsung',
                'nilai' => '350000000',
                'status' => 'Approved',
                'progress' => '0/14',
                'departemen' => 'CTIT',
                'created_by' => 'User IT',
                'details' => [
                    'pilihanRup' => 'Kurang 500 Juta',
                    'namaPaket' => 'Pengadaan Lisensi Software & Firewall',
                    'opexCapex' => 'Opex',
                    'uraian' => 'Pembaruan lisensi antivirus & firewall tahunan',
                    'metode' => 'Pengadaan Langsung',
                    'jenisPengadaan' => 'Barang',
                    'kategoriAnggaran' => 'RKAP',
                    'tahunAnggaran' => '2024',
                    'tahunRup' => '2024',
                    'tipeKontrak' => 'Single Year',
                    'pbj' => 'Non-Sarana',
                    'nilaiSebelumPajak' => '350.000.000',
                    'tipePajak' => 'PPN 11%',
                    'nilaiTax' => 'Rp 388.500.000',
                ],
            ],
        ];

        foreach ($sampleRups as $rup) {
            DB::table('rups')->updateOrInsert(
                ['id' => $rup['id']],
                [
                    'nama' => $rup['nama'],
                    'jenis' => $rup['jenis'],
                    'metode' => $rup['metode'],
                    'nilai' => $rup['nilai'],
                    'status' => $rup['status'],
                    'progress' => $rup['progress'],
                    'departemen' => $rup['departemen'],
                    'created_by' => $rup['created_by'],
                    'details' => json_encode($rup['details'], JSON_UNESCAPED_UNICODE),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );
        }
        */
    }
}
