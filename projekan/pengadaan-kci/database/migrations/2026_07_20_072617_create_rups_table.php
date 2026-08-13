<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Menambahkan kolom-kolom detail RUP yang dibutuhkan oleh form
     * TambahRupModal, tapi belum ada di tabel `rup` saat ini.
     *
     * Kolom yang SUDAH ADA dan dipakai ulang (tidak perlu ditambah):
     *   - nama          -> diisi dari form.namaPaket
     *   - jenis         -> diisi dari form.jenisPengadaan
     *   - metode        -> diisi dari form.metode
     *   - nilai          -> diisi dari form.nilaiSebelumPajak
     *   - status, progress, departemen, created_by -> diisi otomatis oleh backend
     */
    public function up(): void
    {
        if (Schema::hasTable('rups')) {
            Schema::table('rups', function (Blueprint $table) {
                if (!Schema::hasColumn('rups', 'details')) $table->json('details')->nullable();
                if (!Schema::hasColumn('rups', 'catatan_admin')) $table->text('catatan_admin')->nullable();
            });
        } else {
            Schema::create('rups', function (Blueprint $table) {
                $table->string('id')->primary();
                $table->string('nama');
                $table->string('jenis');
                $table->string('metode');
                $table->string('nilai');
                $table->string('status')->default('pending');
                $table->string('progress')->default('0/14');
                $table->string('departemen');
                $table->string('created_by');
                $table->json('details')->nullable();
                $table->text('catatan_admin')->nullable();
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('rup', function (Blueprint $table) {
            $table->dropColumn([
                'pilihan_rup',
                'uraian',
                'opex_capex',
                'kategori_anggaran',
                'tahun_anggaran',
                'tahun_rup',
                'tipe_kontrak',
                'pbj',
                'rkip',
                'tipe_pajak',
                'nilai_tax',
                'target_logistik',
                'perkiraan_waktu',
                'lokasi',
                'volume',
                'penyesuaian',
            ]);
        });
    }
};