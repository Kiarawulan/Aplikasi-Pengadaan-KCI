<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('pengadaan', function (Blueprint $table) {
            $table->string('flow_type')->default('pd')->index()->after('id');
            $table->timestamp('submitted_at')->nullable()->after('tanggal');
            $table->string('updated_by')->nullable()->after('created_by');
        });

        Schema::table('rups', function (Blueprint $table) {
            $table->timestamp('submitted_at')->nullable()->after('catatan_admin');
            $table->string('updated_by')->nullable()->after('created_by');
        });

        Schema::table('pengujian', function (Blueprint $table) {
            $table->string('pengadaan_id')->nullable()->unique()->after('id');
            $table->string('requested_by')->nullable()->after('pemohon');
            $table->timestamp('scheduled_at')->nullable()->after('tanggal');
            $table->string('scheduled_by')->nullable()->after('scheduled_at');
            $table->string('bahp_path')->nullable()->after('catatan');
            $table->json('details')->nullable()->after('bahp_path');
        });

        Schema::create('payments', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('pengadaan_id')->index();
            $table->string('payment_type'); // outsource | non-outsource | umd
            $table->string('status')->default('draft');
            $table->string('requested_by')->nullable();
            $table->string('processed_by')->nullable();
            $table->text('admin_note')->nullable();
            $table->json('form_data')->nullable();
            $table->timestamps();
            $table->unique(['pengadaan_id', 'payment_type']);
        });

        Schema::create('uploaded_documents', function (Blueprint $table) {
            $table->id();
            $table->string('pengadaan_id')->index();
            $table->string('stage')->nullable();
            $table->string('original_name');
            $table->string('path');
            $table->string('mime_type', 100);
            $table->unsignedBigInteger('size');
            $table->string('uploaded_by');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('uploaded_documents');
        Schema::dropIfExists('payments');
        Schema::table('pengujian', function (Blueprint $table) { $table->dropColumn(['pengadaan_id', 'requested_by', 'scheduled_at', 'scheduled_by', 'bahp_path', 'details']); });
        Schema::table('rups', function (Blueprint $table) { $table->dropColumn(['submitted_at', 'updated_by']); });
        Schema::table('pengadaan', function (Blueprint $table) { $table->dropColumn(['flow_type', 'submitted_at', 'updated_by']); });
    }
};
