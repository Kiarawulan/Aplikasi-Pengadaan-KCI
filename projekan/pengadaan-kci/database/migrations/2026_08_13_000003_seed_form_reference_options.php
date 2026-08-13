<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        $references = [
            'unit-kerja' => [
                ['id' => 'UK-001', 'nama' => 'CTIT', 'kode' => 'CTIT'],
                ['id' => 'UK-002', 'nama' => 'Logistik', 'kode' => 'LOG'],
                ['id' => 'UK-003', 'nama' => 'Keuangan', 'kode' => 'KEU'],
                ['id' => 'UK-004', 'nama' => 'Operasional', 'kode' => 'OPS'],
                ['id' => 'UK-005', 'nama' => 'HC', 'kode' => 'HC'],
            ],
            'jenis-pengadaan' => [
                ['id' => 'JP-001', 'nama' => 'Barang', 'kode' => 'BARANG'],
                ['id' => 'JP-002', 'nama' => 'Jasa', 'kode' => 'JASA'],
                ['id' => 'JP-003', 'nama' => 'Konstruksi', 'kode' => 'KONSTRUKSI'],
                ['id' => 'JP-004', 'nama' => 'Konsultansi', 'kode' => 'KONSULTANSI'],
            ],
            'metode-pengadaan' => [
                ['id' => 'MP-001', 'nama' => 'Penunjukan Langsung', 'kode' => 'PL'],
                ['id' => 'MP-002', 'nama' => 'Pelelangan Umum', 'kode' => 'PU'],
                ['id' => 'MP-003', 'nama' => 'Pemilihan Langsung', 'kode' => 'PML'],
                ['id' => 'MP-004', 'nama' => 'Pengadaan Langsung', 'kode' => 'PGL'],
            ],
            'kategori-barang' => [
                ['id' => 'KB-001', 'nama' => 'IT Hardware', 'kode' => 'ITH'],
                ['id' => 'KB-002', 'nama' => 'IT Software', 'kode' => 'ITS'],
                ['id' => 'KB-003', 'nama' => 'Elektronik', 'kode' => 'ELK'],
                ['id' => 'KB-004', 'nama' => 'ATK', 'kode' => 'ATK'],
                ['id' => 'KB-005', 'nama' => 'Furnitur', 'kode' => 'FRN'],
                ['id' => 'KB-006', 'nama' => 'Jasa Outsource', 'kode' => 'JOS'],
                ['id' => 'KB-007', 'nama' => 'Jasa Konstruksi', 'kode' => 'JKS'],
            ],
            'jenis-kontrak' => [
                ['id' => 'JK-001', 'nama' => 'Single Year', 'kode' => 'SY'],
                ['id' => 'JK-002', 'nama' => 'Multi Years', 'kode' => 'MY'],
                ['id' => 'JK-003', 'nama' => 'Lump Sum', 'kode' => 'LS'],
                ['id' => 'JK-004', 'nama' => 'Harga Satuan', 'kode' => 'HS'],
            ],
            'tahun-anggaran' => array_map(
                fn (int $year) => ['id' => 'TA-'.$year, 'nama' => (string) $year, 'tahun' => (string) $year, 'status' => $year === (int) date('Y') ? 'Aktif' : 'Perencanaan'],
                range((int) date('Y') - 2, (int) date('Y') + 3),
            ),
            'mata-uang' => [
                ['id' => 'CUR-IDR', 'nama' => 'Rupiah', 'kode' => 'IDR', 'simbol' => 'Rp'],
                ['id' => 'CUR-USD', 'nama' => 'US Dollar', 'kode' => 'USD', 'simbol' => '$'],
                ['id' => 'CUR-JPY', 'nama' => 'Japanese Yen', 'kode' => 'JPY', 'simbol' => '¥'],
                ['id' => 'CUR-KRW', 'nama' => 'Korean Won', 'kode' => 'KRW', 'simbol' => '₩'],
                ['id' => 'CUR-EUR', 'nama' => 'Euro', 'kode' => 'EUR', 'simbol' => '€'],
            ],
            'pajak' => [
                ['id' => 'TAX-001', 'nama' => 'PPN 11%', 'kode' => 'PPN11', 'persentase' => '11%'],
                ['id' => 'TAX-002', 'nama' => 'PPN 12%', 'kode' => 'PPN12', 'persentase' => '12%'],
                ['id' => 'TAX-003', 'nama' => 'Pajak Dipungut', 'kode' => 'DIPUNGUT'],
                ['id' => 'TAX-004', 'nama' => 'Pajak Tidak Dipungut', 'kode' => 'TIDAK-DIPUNGUT'],
                ['id' => 'TAX-005', 'nama' => 'PPh 21', 'kode' => 'PPH21'],
                ['id' => 'TAX-006', 'nama' => 'PPh 22', 'kode' => 'PPH22'],
                ['id' => 'TAX-007', 'nama' => 'PPh 23', 'kode' => 'PPH23'],
            ],
            'bank' => [
                ['id' => 'BNK-001', 'nama' => 'Bank BNI', 'kode' => '009'],
                ['id' => 'BNK-002', 'nama' => 'Bank BRI', 'kode' => '002'],
                ['id' => 'BNK-003', 'nama' => 'Bank Mandiri', 'kode' => '008'],
                ['id' => 'BNK-004', 'nama' => 'Bank BCA', 'kode' => '014'],
                ['id' => 'BNK-005', 'nama' => 'Bank BTN', 'kode' => '200'],
            ],
            'lokasi' => [
                ['id' => 'LOK-001', 'nama' => 'Kantor Pusat Jakarta', 'kode' => 'JKT-01'],
                ['id' => 'LOK-002', 'nama' => 'Depo Manggarai', 'kode' => 'MRI-01'],
                ['id' => 'LOK-003', 'nama' => 'Stasiun Bogor', 'kode' => 'BGR-01'],
                ['id' => 'LOK-004', 'nama' => 'Depo Depok', 'kode' => 'DPK-01'],
            ],
            'jabatan-ttd' => [
                ['id' => 'JBT-001', 'nama' => 'Direktur Utama', 'kode' => 'DIRUT', 'level' => 'Direksi'],
                ['id' => 'JBT-002', 'nama' => 'Direktur Keuangan', 'kode' => 'DIRKEU', 'level' => 'Direksi'],
                ['id' => 'JBT-003', 'nama' => 'VP Pengadaan', 'kode' => 'VP-PGD', 'level' => 'Vice President'],
                ['id' => 'JBT-004', 'nama' => 'Manager Logistik', 'kode' => 'MGR-LOG', 'level' => 'Manager'],
                ['id' => 'JBT-005', 'nama' => 'Kepala Divisi', 'kode' => 'KADIV', 'level' => 'Kepala Divisi'],
            ],
        ];

        foreach ($references as $category => $items) {
            foreach ($items as $item) {
                DB::table('master_references')->updateOrInsert(
                    ['category' => $category, 'reference_id' => $item['id']],
                    ['data' => json_encode($item, JSON_UNESCAPED_UNICODE), 'updated_at' => now(), 'created_at' => now()],
                );
            }
        }
    }

    public function down(): void
    {
        // Nilai referensi dapat telah dipakai form, sehingga tidak dihapus saat rollback.
    }
};
