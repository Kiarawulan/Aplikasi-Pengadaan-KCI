<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('verifikasi', function (Blueprint $table) {
            $table->json('revision_snapshot')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('verifikasi', function (Blueprint $table) {
            $table->dropColumn('revision_snapshot');
        });
    }
};
