<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Role;
use App\Models\RolePermission;
use App\Models\User;
use App\Models\Pengadaan;
use App\Models\PengadaanCompletedStep;
use App\Models\Verifikasi;
use App\Models\TemplateDokumen;
use App\Models\Vendor;
use App\Models\HargaSatuan;
use App\Models\Pengujian;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // ─── 1. Roles & Permissions ──────────────────────────────────────────────
        $rolesData = [
            [
                'id' => 'role-admin',
                'name' => 'Super Admin',
                'description' => 'Akses penuh ke seluruh sistem dan modul',
                'color' => '#e6251c',
                'role_type' => 'admin',
                'is_system' => true,
                'perms' => [
                    'dashboard' => 'editor', 'pengajuanDana' => 'editor', 'pengadaan' => 'editor',
                    'pengujian' => 'editor', 'pembayaran' => 'editor', 'templateDokumen' => 'editor',
                    'masterData' => 'editor', 'userManagement' => 'editor',
                ]
            ],
            [
                'id' => 'role-logistik',
                'name' => 'Logistik Admin',
                'description' => 'Akses verifikasi pengadaan, RUP, dan warehouse',
                'color' => '#252271',
                'role_type' => 'admin',
                'is_system' => true,
                'perms' => [
                    'dashboard' => 'editor', 'pengajuanDana' => 'editor', 'pengadaan' => 'editor',
                    'pengujian' => 'viewer', 'pembayaran' => 'viewer', 'templateDokumen' => 'editor',
                    'masterData' => 'editor', 'userManagement' => 'no-access',
                ]
            ],
            [
                'id' => 'role-finance',
                'name' => 'Finance Admin',
                'description' => 'Akses verifikasi pengajuan dana dan pembayaran',
                'color' => '#d97706',
                'role_type' => 'admin',
                'is_system' => true,
                'perms' => [
                    'dashboard' => 'editor', 'pengajuanDana' => 'editor', 'pengadaan' => 'viewer',
                    'pengujian' => 'no-access', 'pembayaran' => 'editor', 'templateDokumen' => 'viewer',
                    'masterData' => 'viewer', 'userManagement' => 'no-access',
                ]
            ],
            [
                'id' => 'role-pbj',
                'name' => 'PBJ Officer',
                'description' => 'Pengadaan Barang & Jasa, evaluasi tender',
                'color' => '#16a34a',
                'role_type' => 'admin',
                'is_system' => true,
                'perms' => [
                    'dashboard' => 'editor', 'pengajuanDana' => 'viewer', 'pengadaan' => 'editor',
                    'pengujian' => 'editor', 'pembayaran' => 'no-access', 'templateDokumen' => 'editor',
                    'masterData' => 'editor', 'userManagement' => 'no-access',
                ]
            ],
            [
                'id' => 'role-it',
                'name' => 'IT Specialist',
                'description' => 'User departemen IT (CTIT) untuk mengajukan pengadaan',
                'color' => '#7c3aed',
                'role_type' => 'user',
                'is_system' => false,
                'perms' => [
                    'dashboard' => 'viewer', 'pengajuanDana' => 'viewer', 'pengadaan' => 'viewer',
                    'pengujian' => 'viewer', 'pembayaran' => 'no-access', 'templateDokumen' => 'viewer',
                    'masterData' => 'no-access', 'userManagement' => 'no-access',
                ]
            ],
        ];

        foreach ($rolesData as $rd) {
            $role = Role::updateOrCreate(
                ['id' => $rd['id']],
                [
                    'name' => $rd['name'],
                    'description' => $rd['description'],
                    'color' => $rd['color'],
                    'role_type' => $rd['role_type'],
                    'is_system' => $rd['is_system'],
                ]
            );

            foreach ($rd['perms'] as $module => $level) {
                RolePermission::updateOrCreate(
                    ['role_id' => $role->id, 'module' => $module],
                    ['access_level' => $level]
                );
            }
        }

        // ─── 2. Default Users ────────────────────────────────────────────────────
        $usersData = [
            ['id' => 'USR-001', 'name' => 'Super Admin', 'email' => 'admin@sipro.com', 'password' => 'admin123', 'role_id' => 'role-admin', 'departemen' => 'Management', 'is_admin' => true],
            ['id' => 'USR-002', 'name' => 'Budi Logistik', 'email' => 'logistik@sipro.com', 'password' => 'logistik123', 'role_id' => 'role-logistik', 'departemen' => 'Logistik', 'is_admin' => false],
            ['id' => 'USR-003', 'name' => 'Siti Finance', 'email' => 'finance@sipro.com', 'password' => 'finance123', 'role_id' => 'role-finance', 'departemen' => 'Finance', 'is_admin' => false],
            ['id' => 'USR-004', 'name' => 'Rudi PBJ', 'email' => 'pbj@sipro.com', 'password' => 'pbj123', 'role_id' => 'role-pbj', 'departemen' => 'PBJ', 'is_admin' => false],
            ['id' => 'USR-005', 'name' => 'Andi IT', 'email' => 'it@sipro.com', 'password' => 'it123', 'role_id' => 'role-it', 'departemen' => 'CTIT', 'is_admin' => false],
        ];

        foreach ($usersData as $ud) {
            User::updateOrCreate(
                ['id' => $ud['id']],
                [
                    'name' => $ud['name'],
                    'email' => $ud['email'],
                    'password' => Hash::make($ud['password']),
                    'role_id' => $ud['role_id'],
                    'departemen' => $ud['departemen'],
                    'is_active' => true,
                    'is_admin' => $ud['is_admin'],
                    'must_reset_password' => false,
                ]
            );
        }

        // ─── 3. Initial Pengadaan ────────────────────────────────────────────────
        $p1 = Pengadaan::updateOrCreate(
            ['id' => 'PD-001'],
            [
                'nama' => 'Pengadaan Laptop Dell Latitude 5540',
                'departemen' => 'CTIT',
                'nominal' => 'Rp 150.000.000',
                'tanggal' => '2024-01-15',
                'status' => 'Park Dokumen',
                'current_step' => 'npp',
                'created_by' => 'USR-005',
            ]
        );

        $p2 = Pengadaan::updateOrCreate(
            ['id' => 'PD-002'],
            [
                'nama' => 'Pengadaan AC Split 2PK Office',
                'departemen' => 'Logistik',
                'nominal' => 'Rp 45.000.000',
                'tanggal' => '2024-01-20',
                'status' => 'Park Dokumen',
                'current_step' => 'npp',
                'created_by' => 'USR-002',
            ]
        );

        // ─── 4. Initial Verifikasi ───────────────────────────────────────────────
        Verifikasi::updateOrCreate(
            ['id' => 'VR-001'],
            [
                'pengadaan_id' => 'PD-001',
                'pengadaan_nama' => 'Pengadaan Laptop Dell Latitude 5540',
                'departemen' => 'CTIT',
                'nominal' => 'Rp 150.000.000',
                'tipe' => 'park-dokumen',
                'submit_by' => 'Andi IT',
                'submit_at' => now()->subDays(2),
                'status' => 'pending',
            ]
        );

        // ─── 5. Initial Template Dokumen ────────────────────────────────────────
        $templates = [
            ['id' => 'TPL-001', 'nama' => 'Template NPP - Barang', 'kategori' => 'NPP', 'tipe' => 'DOCX', 'ukuran' => '245 KB', 'deskripsi' => 'Format standar Nota Permintaan Pengadaan Barang', 'uploaded_by' => 'Super Admin', 'uploaded_at' => '2024-01-10'],
            ['id' => 'TPL-002', 'nama' => 'Template SP3 - Jasa', 'kategori' => 'SP3', 'tipe' => 'DOCX', 'ukuran' => '189 KB', 'deskripsi' => 'Surat Perintah Pengadaan untuk kategori Jasa', 'uploaded_by' => 'Super Admin', 'uploaded_at' => '2024-01-12'],
            ['id' => 'TPL-003', 'nama' => 'Template Kontrak - Barang', 'kategori' => 'Contract', 'tipe' => 'PDF', 'ukuran' => '1.2 MB', 'deskripsi' => 'Draft perjanjian kerja sama pengadaan barang', 'uploaded_by' => 'Super Admin', 'uploaded_at' => '2024-01-15'],
            ['id' => 'TPL-004', 'nama' => 'Template BAST', 'kategori' => 'Pengujian', 'tipe' => 'DOCX', 'ukuran' => '312 KB', 'deskripsi' => 'Berita Acara Serah Terima Barang/Jasa', 'uploaded_by' => 'Super Admin', 'uploaded_at' => '2024-01-18'],
        ];

        foreach ($templates as $t) {
            TemplateDokumen::updateOrCreate(['id' => $t['id']], $t);
        }

        // ─── 6. Initial Vendors ──────────────────────────────────────────────────
        $vendors = [
            ['id' => 'VND-001', 'nama' => 'PT Maju Bersama Teknologi', 'npwp' => '01.234.567.8-012.000', 'alamat' => 'Jl. Sudirman No. 45, Jakarta', 'kontak_person' => 'Budi Santoso', 'telepon' => '021-5551234', 'email' => 'info@majubersama.com', 'kategori' => 'Teknologi', 'status' => 'aktif', 'created_at_date' => '2024-01-05'],
            ['id' => 'VND-002', 'nama' => 'CV Solusi Elektronik', 'npwp' => '02.345.678.9-013.000', 'alamat' => 'Jl. Gatot Subroto No. 12, Bandung', 'kontak_person' => 'Siti Rahma', 'telepon' => '022-4445678', 'email' => 'contact@solusielektronik.co.id', 'kategori' => 'Elektronik', 'status' => 'aktif', 'created_at_date' => '2024-01-08'],
        ];

        foreach ($vendors as $v) {
            Vendor::updateOrCreate(['id' => $v['id']], $v);
        }

        // ─── 7. Initial Harga Satuan ──────────────────────────────────────────────
        $harga = [
            ['id' => 'HS-001', 'nama_barang' => 'Laptop Core i7 16GB', 'satuan' => 'Unit', 'harga' => 15000000, 'kategori' => 'IT Hardware', 'tahun' => '2024'],
            ['id' => 'HS-002', 'nama_barang' => 'Monitor 24 Inch IPS', 'satuan' => 'Unit', 'harga' => 2500000, 'kategori' => 'IT Hardware', 'tahun' => '2024'],
            ['id' => 'HS-003', 'nama_barang' => 'AC Split 2PK Inverter', 'satuan' => 'Unit', 'harga' => 6500000, 'kategori' => 'Elektronik', 'tahun' => '2024'],
        ];

        foreach ($harga as $h) {
            HargaSatuan::updateOrCreate(['id' => $h['id']], $h);
        }

        // ─── 8. Initial Pengujian ────────────────────────────────────────────────
        $pengujian = [
            ['id' => 'PUJ-001', 'nama' => 'Pengujian Ketahanan Batterai Server UPS', 'pemohon' => 'Andi IT', 'departemen' => 'CTIT', 'tanggal' => '2024-02-01', 'status' => 'pending', 'catatan' => 'Pengujian 24 jam non-stop'],
            ['id' => 'PUJ-002', 'nama' => 'Pengujian AC Inverter Low Watt', 'pemohon' => 'Budi Logistik', 'departemen' => 'Logistik', 'tanggal' => '2024-02-05', 'status' => 'proses', 'catatan' => 'Uji suhu dan daya listrik'],
        ];

        foreach ($pengujian as $pj) {
            Pengujian::updateOrCreate(['id' => $pj['id']], $pj);
        }
    }
}
