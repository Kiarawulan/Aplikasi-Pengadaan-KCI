<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Membuat tabel khusus dokumen tahapan pengadaan: `npp`, `sp3`, dan `contract`.
     * Tabel ini menyimpan data form yang diinput user per tahapan, sehingga data
     * tersimpan terstruktur di database (bukan hanya JSON di form_data) dan mudah
     * dibaca/di-verifikasi oleh admin.
     */
    public function up(): void
    {
        // ─── NPP (Nota Permintaan Pengadaan) ────────────────────────────────
        Schema::create('npp', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('pengadaan_id')->nullable();
            $table->string('no_npp')->nullable();
            $table->string('judul')->nullable();
            $table->string('vendor')->nullable();
            $table->string('nilai_pr')->nullable();
            $table->string('coa')->nullable();
            $table->string('jenis_barang')->nullable();
            $table->string('kurs')->nullable();
            $table->string('metode')->nullable();
            $table->string('realisasi')->nullable();
            $table->text('keterangan')->nullable();
            $table->string('status')->default('pending'); // pending, approved, revisi, rejected
            $table->string('submitted_by')->nullable();
            $table->json('form_data')->nullable();
            $table->timestamps();
        });

        // ─── SP3 (Surat Permintaan Proses Pengadaan) ───────────────────────
        Schema::create('sp3', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('pengadaan_id')->nullable();
            $table->string('no_sp3')->nullable();
            $table->string('judul')->nullable();
            $table->string('departemen')->nullable();
            $table->string('rkap')->nullable();
            $table->string('tax')->nullable();
            $table->string('realisasi')->nullable();
            $table->string('vendor')->nullable();
            $table->string('pr_no')->nullable();
            $table->string('rab_no')->nullable();
            $table->string('kak_no')->nullable();
            $table->string('mi_no')->nullable();
            $table->string('tipe_pemilihan')->nullable();
            $table->string('status')->default('pending'); // pending, approved, revisi, rejected
            $table->string('submitted_by')->nullable();
            $table->json('form_data')->nullable();
            $table->timestamps();
        });

        // ─── CONTRACT / KONTRAK ────────────────────────────────────────────
        Schema::create('contract', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('pengadaan_id')->nullable();
            $table->string('no_kontrak')->nullable();
            $table->string('paket')->nullable();
            $table->string('nilai')->nullable();
            $table->string('departemen')->nullable();
            $table->string('pbj')->nullable();
            $table->string('vendor')->nullable();
            $table->string('performance_bond')->nullable();
            $table->string('start_date')->nullable();
            $table->string('end_date')->nullable();
            $table->string('status')->default('pending'); // pending, approved, revisi, rejected
            $table->string('submitted_by')->nullable();
            $table->json('form_data')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contract');
        Schema::dropIfExists('sp3');
        Schema::dropIfExists('npp');
    }
};
