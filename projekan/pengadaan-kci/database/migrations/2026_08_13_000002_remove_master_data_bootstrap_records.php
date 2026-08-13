<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        // Seluruh master_references sebelumnya berasal dari bootstrap MOCK_DATA.
        DB::table('master_references')->delete();
        DB::table('master_reference_categories')->delete();

        // Hapus vendor contoh bawaan saja; vendor yang dibuat pengguna dipertahankan.
        DB::table('vendors')->whereIn('id', ['VND-001', 'VND-002', 'VND-003', 'VND-004'])
            ->whereIn('nama', [
                'PT Maju Bersama Teknologi',
                'CV Solusi Elektronik',
                'PT Infrastruktur Nusantara',
                'CV Jaya Abadi',
            ])
            ->delete();
    }

    public function down(): void
    {
        // Data contoh sengaja tidak dikembalikan.
    }
};
