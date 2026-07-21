<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pengadaan', function (Blueprint $table) {
            $table->string('id')->primary(); // e.g. PD-001
            $table->string('nama');
            $table->string('departemen');
            $table->string('nominal')->nullable();
            $table->string('tanggal');
            $table->string('status')->default('Park Dokumen'); // Park Dokumen, Menunggu Verifikasi, Step Approved, Revisi, Selesai
            $table->string('current_step')->default('npp'); // npp, pengajuan-dana, sp3, pbj, contract, pengujian, pembayaran
            $table->string('created_by')->nullable();
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null');
            $table->timestamps();
        });

        Schema::create('pengadaan_completed_steps', function (Blueprint $table) {
            $table->id();
            $table->string('pengadaan_id');
            $table->foreign('pengadaan_id')->references('id')->on('pengadaan')->onDelete('cascade');
            $table->string('step_id');
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();
        });

        Schema::create('verifikasi', function (Blueprint $table) {
            $table->string('id')->primary(); // e.g. VR-001
            $table->string('pengadaan_id');
            $table->foreign('pengadaan_id')->references('id')->on('pengadaan')->onDelete('cascade');
            $table->string('pengadaan_nama');
            $table->string('departemen');
            $table->string('nominal')->nullable();
            $table->string('tipe'); // park-dokumen, purchase-requisition, timeline, npp, sp3, pbj, contract, umd, outsource, non-outsource
            $table->string('submit_by');
            $table->timestamp('submit_at');
            $table->enum('status', ['pending', 'approved', 'revisi', 'rejected'])->default('pending');
            $table->text('catatan_admin')->nullable();
            $table->string('verified_by')->nullable();
            $table->timestamp('verified_at')->nullable();
            $table->timestamps();
        });

        Schema::create('template_dokumen', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nama');
            $table->string('kategori'); // NPP, SP3, Contract, PBJ, Pengujian, Pengajuan Dana, Pembayaran, Umum
            $table->string('tipe'); // DOCX, PDF, XLSX, PPTX
            $table->string('ukuran')->default('—');
            $table->text('deskripsi')->nullable();
            $table->string('uploaded_by')->nullable();
            $table->string('uploaded_at');
            $table->timestamps();
        });

        Schema::create('vendors', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nama');
            $table->string('npwp')->nullable();
            $table->text('alamat')->nullable();
            $table->string('kontak_person')->nullable();
            $table->string('telepon')->nullable();
            $table->string('email')->nullable();
            $table->string('kategori')->default('General');
            $table->enum('status', ['aktif', 'blacklist', 'non-aktif'])->default('aktif');
            $table->string('created_at_date');
            $table->timestamps();
        });

        Schema::create('harga_satuan', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nama_barang');
            $table->string('satuan');
            $table->bigInteger('harga');
            $table->string('kategori');
            $table->string('tahun');
            $table->timestamps();
        });

        Schema::create('pengujian', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nama');
            $table->string('pemohon');
            $table->string('departemen');
            $table->string('tanggal');
            $table->string('status')->default('pending'); // pending, proses, selesai, ditolak
            $table->text('catatan')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pengujian');
        Schema::dropIfExists('harga_satuan');
        Schema::dropIfExists('vendors');
        Schema::dropIfExists('template_dokumen');
        Schema::dropIfExists('verifikasi');
        Schema::dropIfExists('pengadaan_completed_steps');
        Schema::dropIfExists('pengadaan');
    }
};
