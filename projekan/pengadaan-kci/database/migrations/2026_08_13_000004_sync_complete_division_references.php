<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        $divisions = [
            'CUS' => 'CORPORATE SECRETARY',
            'CUL' => 'GRC AND LEGAL',
            'CUG' => 'LOGISTIC',
            'CUI' => 'INTERNAL AUDIT',
            'CUP' => 'STRATEGIC PLANNING',
            'COS' => 'HSE AND SECURITY',
            'COC' => 'COMMERCIAL',
            'COH' => 'TRAIN SERVICES FACILITIES AND CUSTOMER CARE',
            'COLA' => 'LOCAL TRAIN',
            'COLB' => 'AREA II BANDUNG',
            'COLS' => 'AREA VIII SURABAYA',
            'CTI' => 'INFORMATION TECHNOLOGY',
            'CTP' => 'MAINTENANCE PLANNING AND EVALUATING',
            'CTR' => 'ROLLING STOCK',
            'CTS' => 'INFRASTRUCTURE',
            'COCB' => 'BASOETTA DEPARTMENT',
            'CARM' => 'RISK MANAGEMENT',
            'CUT' => 'TESTING COMMITEE',
            'CAF' => 'FINANCE',
            'CAA' => 'BUDGETING AND ACCOUNTING',
            'CAH' => 'HUMAN CAPITAL',
            'CAP' => 'PSO AND TAC',
        ];

        DB::table('master_references')->where('category', 'unit-kerja')->delete();

        foreach ($divisions as $code => $name) {
            $item = ['id' => 'UK-'.$code, 'nama' => $code.' - '.$name, 'kode' => $code];
            DB::table('master_references')->insert([
                'category' => 'unit-kerja',
                'reference_id' => $item['id'],
                'data' => json_encode($item, JSON_UNESCAPED_UNICODE),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    public function down(): void
    {
        // Daftar divisi lengkap dipertahankan karena telah menjadi sumber form.
    }
};
