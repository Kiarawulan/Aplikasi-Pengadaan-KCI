<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        $references = [
            'opex-capex' => [
                ['id' => 'OC-001', 'nama' => 'Capex', 'kode' => 'CAPEX'],
                ['id' => 'OC-002', 'nama' => 'Opex', 'kode' => 'OPEX'],
            ],
            'kategori-anggaran' => [
                ['id' => 'KA-001', 'nama' => 'Investasi', 'kode' => 'INVESTASI'],
                ['id' => 'KA-002', 'nama' => 'Eksploitasi', 'kode' => 'EKSPLOITASI'],
                ['id' => 'KA-003', 'nama' => 'Pemeliharaan', 'kode' => 'PEMELIHARAAN'],
            ],
            'penguji' => [
                ['id' => 'PGJ-001', 'nama' => 'Penguji 1 C-CUT', 'kode' => 'CUT-01', 'bidang' => 'Umum'],
                ['id' => 'PGJ-002', 'nama' => 'Penguji 2 C-CUT', 'kode' => 'CUT-02', 'bidang' => 'Umum'],
            ],
        ];

        foreach ($references as $category => $items) {
            foreach ($items as $item) {
                DB::table('master_references')->updateOrInsert(
                    ['category' => $category, 'reference_id' => $item['id']],
                    ['data' => json_encode($item, JSON_UNESCAPED_UNICODE), 'created_at' => now(), 'updated_at' => now()],
                );
            }
        }
    }

    public function down(): void
    {
        // Referensi dipertahankan karena dapat telah digunakan pada dokumen.
    }
};
