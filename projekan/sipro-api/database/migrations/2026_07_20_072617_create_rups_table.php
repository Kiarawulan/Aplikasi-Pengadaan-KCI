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
        Schema::table('rup', function (Blueprint $table) {
            // Kategori skala RUP: "Lebih 500 Juta" / "Kurang 500 Juta"
            $table->string('pilihan_rup')->nullable()->after('nama');

            // Uraian singkat pengadaan
            $table->text('uraian')->nullable()->after('jenis');

            // Opex / Capex
            $table->string('opex_capex')->nullable()->after('metode');

            // Kategori Anggaran: Investasi / Eksploitasi / Pemeliharaan
            $table->string('kategori_anggaran')->nullable()->after('opex_capex');

            // Tahun Anggaran & Tahun RUP
            $table->string('tahun_anggaran', 4)->nullable()->after('kategori_anggaran');
            $table->string('tahun_rup', 4)->nullable()->after('tahun_anggaran');

            // Tipe Kontrak: Single Year / Multi Year
            $table->string('tipe_kontrak')->nullable()->after('tahun_rup');

            // PBJ: Sarana / Non-Sarana
            $table->string('pbj')->nullable()->after('tipe_kontrak');

            // RKIP: Yes / No
            $table->string('rkip')->nullable()->after('pbj');

            // Tipe Pajak & Nilai Tax
            $table->string('tipe_pajak')->nullable()->after('rkip');
            $table->string('nilai_tax')->nullable()->after('tipe_pajak');

            // Jadwal Logistik
            $table->date('target_logistik')->nullable()->after('nilai_tax');
            $table->date('perkiraan_waktu')->nullable()->after('target_logistik');

            // Lokasi & Volume
            $table->string('lokasi')->nullable()->after('perkiraan_waktu');
            $table->string('volume')->nullable()->after('lokasi');

            // Penyesuaian RUP: Ya / Tidak
            $table->string('penyesuaian')->nullable()->after('volume');
        });
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