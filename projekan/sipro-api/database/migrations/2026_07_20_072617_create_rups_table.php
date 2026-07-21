<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('rups', function (Blueprint $table) {
            $table->string('id')->primary(); // RUP-XXX
            $table->string('nama');
            $table->string('jenis');
            $table->string('metode');
            $table->string('nilai');
            $table->string('status')->default('pending');
            $table->string('progress')->default('0/14');
            $table->string('departemen');
            $table->string('created_by');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('rups');
    }
};
