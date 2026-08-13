<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('master_reference_categories', function (Blueprint $table) {
            $table->string('category')->primary();
            $table->timestamps();
        });
        Schema::create('master_references', function (Blueprint $table) {
            $table->id();
            $table->string('category');
            $table->string('reference_id');
            $table->json('data');
            $table->timestamps();
            $table->unique(['category', 'reference_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('master_references');
        Schema::dropIfExists('master_reference_categories');
    }
};
