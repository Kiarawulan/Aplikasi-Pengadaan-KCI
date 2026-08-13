<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        $tables = [
            'process_histories', 'uploaded_documents', 'payments', 'pengujian',
            'npp', 'sp3', 'contract', 'pbj', 'park_document',
            'purchase_requisition', 'verifikasi', 'pengadaan_completed_steps',
        ];

        foreach ($tables as $table) {
            if (! Schema::hasTable($table) || ! Schema::hasColumn($table, 'pengadaan_id')) continue;
            DB::table($table)->whereNotExists(function ($query) use ($table) {
                $query->selectRaw('1')->from('pengadaan')->whereColumn('pengadaan.id', "{$table}.pengadaan_id");
            })->delete();
        }
    }

    public function down(): void
    {
        // Data yatim yang sudah dibersihkan tidak aman untuk direkonstruksi.
    }
};
