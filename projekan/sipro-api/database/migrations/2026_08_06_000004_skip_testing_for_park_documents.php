<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::table('pengadaan')
            ->where('flow_type', 'pd')
            ->where('current_step', 'pengujian')
            ->update([
                'current_step' => 'pembayaran',
                'status' => 'on_progress',
                'updated_at' => now(),
            ]);

        DB::table('pengadaan_completed_steps')
            ->where('step_id', 'pengujian')
            ->whereIn('pengadaan_id', DB::table('pengadaan')->where('flow_type', 'pd')->select('id'))
            ->delete();
    }

    public function down(): void
    {
        // Perubahan alur tidak dikembalikan karena status pembayaran dapat
        // berkembang setelah migrasi dijalankan.
    }
};
