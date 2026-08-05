<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Menambahkan kolom `details` dan `catatan_admin` ke tabel `rups`.
     * Kolom ini dibutuhkan oleh RupController (menyimpan payload form RUP
     * lengkap) dan tampilan RupDetailView di frontend yang membaca item.details.
     */
    public function up(): void
    {
        if (Schema::hasTable('rups')) {
            Schema::table('rups', function (Blueprint $table) {
                if (!Schema::hasColumn('rups', 'details')) {
                    $table->json('details')->nullable();
                }
                if (!Schema::hasColumn('rups', 'catatan_admin')) {
                    $table->text('catatan_admin')->nullable();
                }
            });
        }
    }

    public function down(): void
    {
        Schema::table('rups', function (Blueprint $table) {
            if (Schema::hasColumn('rups', 'details')) {
                $table->dropColumn('details');
            }
            if (Schema::hasColumn('rups', 'catatan_admin')) {
                $table->dropColumn('catatan_admin');
            }
        });
    }
};
