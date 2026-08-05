<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('username')->nullable()->unique()->after('name');
        });

        // Existing installations predate username. Use the stable user id as a
        // safe unique fallback; new users must provide a real username.
        DB::table('users')->whereNull('username')->orderBy('id')->each(function ($user) {
            DB::table('users')->where('id', $user->id)->update(['username' => strtolower(str_replace(' ', '-', $user->id))]);
        });

        Schema::table('roles', function (Blueprint $table) {
            $table->unique('name');
        });

        Schema::table('role_permissions', function (Blueprint $table) {
            $table->unique(['role_id', 'module']);
        });

        Schema::create('audit_logs', function (Blueprint $table) {
            $table->id();
            $table->string('actor_id')->nullable();
            $table->string('action');
            $table->string('target_type');
            $table->string('target_id');
            $table->json('old_data')->nullable();
            $table->json('new_data')->nullable();
            $table->timestamps();

            $table->foreign('actor_id')->references('id')->on('users')->nullOnDelete();
            $table->index(['target_type', 'target_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('audit_logs');
        Schema::table('role_permissions', function (Blueprint $table) {
            $table->dropUnique(['role_id', 'module']);
        });
        Schema::table('roles', function (Blueprint $table) {
            $table->dropUnique(['name']);
        });
        Schema::table('users', function (Blueprint $table) {
            $table->dropUnique(['username']);
            $table->dropColumn('username');
        });
    }
};
