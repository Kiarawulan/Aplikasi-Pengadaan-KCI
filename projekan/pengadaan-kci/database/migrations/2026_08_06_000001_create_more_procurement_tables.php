<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Membuat tabel khusus dokumen tambahan pengadaan: `pbj`, `park_document`,
     * dan `purchase_requisition`.
     *
     * Mengikuti pola tabel `npp`, `sp3`, `contract` yaitu menyimpan data form
     * yang diinput user per tahapan secara terstruktur di database, sehingga
     * mudah dibaca/di-verifikasi oleh admin.
     */
    public function up(): void
    {
        // ─── PBJ (Pejabat Pembuat Komitmen / Pemilihan Barang & Jasa) ──────
        Schema::create('pbj', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('pengadaan_id')->nullable();
            $table->string('no_pbj')->nullable();
            $table->string('nama_paket')->nullable();
            $table->string('departemen')->nullable();
            $table->string('nilai')->nullable();
            $table->string('metode')->nullable();
            $table->string('vendor')->nullable();
            $table->string('tgl_awal')->nullable();
            $table->string('tgl_akhir')->nullable();
            $table->text('keterangan')->nullable();
            $table->string('status')->default('pending'); // pending, approved, revisi, rejected
            $table->string('submitted_by')->nullable();
            $table->json('form_data')->nullable();
            $table->timestamps();
        });

        // ─── PARK DOCUMENT ──────────────────────────────────────────────────
        Schema::create('park_document', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('pengadaan_id')->nullable();
            $table->string('no_dokumen')->nullable();
            $table->string('judul')->nullable();
            $table->string('departemen')->nullable();
            $table->string('kategori')->nullable(); // Barang, Jasa, Barang & Jasa
            $table->string('nominal')->nullable();
            $table->string('status')->default('pending'); // pending, approved, revisi, rejected
            $table->string('submitted_by')->nullable();
            $table->json('form_data')->nullable();
            $table->timestamps();
        });

        // ─── PURCHASE REQUISITION (Pengajuan Dana / PR) ────────────────────
        Schema::create('purchase_requisition', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('pengadaan_id')->nullable();
            $table->string('no_pr')->nullable();
            $table->string('judul')->nullable();
            $table->string('departemen')->nullable();
            $table->string('sub_unit')->nullable();
            $table->string('jenis_permohonan')->nullable(); // Barang, Jasa, Barang & Jasa
            $table->string('nominal')->nullable();
            $table->string('status')->default('pending'); // pending, approved, revisi, rejected
            $table->string('submitted_by')->nullable();
            $table->json('form_data')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('purchase_requisition');
        Schema::dropIfExists('park_document');
        Schema::dropIfExists('pbj');
    }
};
