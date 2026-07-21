<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('verifikasi', function (Blueprint $table) {
            $table->dropForeign(['pengadaan_id']);
        });
    }

    public function down(): void
    {
        Schema::table('verifikasi', function (Blueprint $table) {
            $table->foreign('pengadaan_id')->references('id')->on('pengadaan')->onDelete('cascade');
        });
    }
};
