<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PengadaanController;
use App\Http\Controllers\VerifikasiController;
use App\Http\Controllers\TemplateDokumenController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\HargaSatuanController;
use App\Http\Controllers\PengujianController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\RupController;
use App\Http\Controllers\StepDocumentController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\UploadedDocumentController;

// ─── Public Routes ────────────────────────────────────────────────────────────
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);

// ─── Protected Routes (Sanctum Token) ─────────────────────────────────────────
Route::middleware('auth:sanctum')->group(function () {

    // Auth
    Route::get('/auth/me', [AuthController::class, 'me']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::post('/auth/change-password', [AuthController::class, 'changePassword']);

// RUP
    Route::get('/rup', [RupController::class, 'index'])->middleware('module.permission:pengadaan,viewer');
    Route::post('/rup', [RupController::class, 'store'])->middleware('module.permission:pengadaan,editor');
    Route::get('/rup/{rup}', [RupController::class, 'show'])->middleware('module.permission:pengadaan,viewer');
    Route::put('/rup/{rup}', [RupController::class, 'update'])->middleware('module.permission:pengadaan,editor');
    Route::delete('/rup/{rup}', [RupController::class, 'destroy'])->middleware('module.permission:pengadaan,editor');
    Route::post('/rup/{rup}/submit', [RupController::class, 'submit'])->middleware('module.permission:pengadaan,editor');

    // Dokumen Tahapan Pengadaan (NPP, SP3, Contract)
    Route::get('/step-documents/{type}', [StepDocumentController::class, 'index'])->middleware('module.permission:pengadaan,viewer');
    Route::post('/step-documents/{type}', [StepDocumentController::class, 'store'])->middleware('module.permission:pengadaan,editor');
    Route::get('/step-documents/{type}/{id}', [StepDocumentController::class, 'show'])->middleware('module.permission:pengadaan,viewer');
    Route::put('/step-documents/{type}/{id}', [StepDocumentController::class, 'update'])->middleware('module.permission:pengadaan,editor');
    Route::delete('/step-documents/{type}/{id}', [StepDocumentController::class, 'destroy'])->middleware('module.permission:pengadaan,editor');

    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->middleware('module.permission:dashboard,viewer');

    // Users
    Route::get('/users', [UserController::class, 'index'])->middleware('admin.only');
    Route::post('/users', [UserController::class, 'store'])->middleware('admin.only');
    Route::put('/users/{user}', [UserController::class, 'update'])->middleware('admin.only');
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->middleware('admin.only');

    // Dashboard
    Route::post('/users/{user}/reset-password', [UserController::class, 'resetPassword'])->middleware('admin.only');
    Route::post('/users/{user}/toggle-active', [UserController::class, 'toggleActive'])->middleware('admin.only');

    // Roles
    Route::get('/roles', [RoleController::class, 'index'])->middleware('admin.only');
    Route::post('/roles', [RoleController::class, 'store'])->middleware('admin.only');
    Route::put('/roles/{role}', [RoleController::class, 'update'])->middleware('admin.only');
    Route::delete('/roles/{role}', [RoleController::class, 'destroy'])->middleware('admin.only');

    // Pengadaan
    Route::get('/pengadaan', [PengadaanController::class, 'index'])->middleware('module.permission:pengadaan,viewer');
    Route::post('/pengadaan', [PengadaanController::class, 'store'])->middleware('module.permission:pengadaan,editor');
    Route::get('/pengadaan/{pengadaan}', [PengadaanController::class, 'show'])->middleware('module.permission:pengadaan,viewer');
    Route::put('/pengadaan/{pengadaan}', [PengadaanController::class, 'update'])->middleware('module.permission:pengadaan,editor');
    Route::put('/pengadaan/{pengadaan}/form-data', [PengadaanController::class, 'updateFormData'])->middleware('module.permission:pengadaan,editor');
    Route::delete('/pengadaan/{pengadaan}', [PengadaanController::class, 'destroy'])->middleware('module.permission:pengadaan,editor');
    Route::post('/pengadaan/{pengadaan}/submit-step', [PengadaanController::class, 'submitStep'])->middleware('module.permission:pengadaan,editor');
    Route::get('/pengadaan/{pengadaan}/step-status', [PengadaanController::class, 'stepStatus'])->middleware('module.permission:pengadaan,viewer');
    Route::get('/pengadaan/{pengadaan}/documents', [UploadedDocumentController::class, 'index'])->middleware('module.permission:pengadaan,viewer');
    Route::post('/pengadaan/{pengadaan}/documents', [UploadedDocumentController::class, 'store'])->middleware('module.permission:pengadaan,editor');

    // Verifikasi
    Route::get('/verifikasi', [VerifikasiController::class, 'index'])->middleware('admin.only');
    Route::post('/verifikasi', [VerifikasiController::class, 'store'])->middleware('admin.only');
    Route::get('/verifikasi/{verifikasi}', [VerifikasiController::class, 'show'])->middleware('admin.only');
    Route::put('/verifikasi/{verifikasi}', [VerifikasiController::class, 'update'])->middleware('admin.only');
    Route::delete('/verifikasi/{verifikasi}', [VerifikasiController::class, 'destroy'])->middleware('admin.only');
    Route::post('/verifikasi/{verifikasi}/approve', [VerifikasiController::class, 'approve'])->middleware('admin.only');
    Route::post('/verifikasi/{verifikasi}/revisi', [VerifikasiController::class, 'revisi'])->middleware('admin.only');
    Route::post('/verifikasi/{verifikasi}/reject', [VerifikasiController::class, 'reject'])->middleware('admin.only');

    // Template Dokumen
    Route::get('/templates', [TemplateDokumenController::class, 'index'])->middleware('module.permission:templateDokumen,viewer');
    Route::get('/templates/{template}', [TemplateDokumenController::class, 'show'])->middleware('module.permission:templateDokumen,viewer');
    Route::post('/templates', [TemplateDokumenController::class, 'store'])->middleware('admin.only');
    Route::put('/templates/{template}', [TemplateDokumenController::class, 'update'])->middleware('admin.only');
    Route::delete('/templates/{template}', [TemplateDokumenController::class, 'destroy'])->middleware('admin.only');

    // Opsi vendor diperlukan oleh form NPP User; perubahan master tetap khusus Admin.
    Route::get('/vendors/options', [VendorController::class, 'index'])->middleware('module.permission:pengadaan,viewer');

    // Vendors
    Route::apiResource('/vendors', VendorController::class)->middleware('module.permission:masterData,editor');

    // Harga Satuan
    Route::apiResource('/harga-satuan', HargaSatuanController::class)->middleware('module.permission:masterData,editor');

    // Pengujian
    Route::get('/pengujian', [PengujianController::class, 'index'])->middleware('module.permission:pengujian,viewer');
    Route::post('/pengujian', [PengujianController::class, 'store'])->middleware('module.permission:pengujian,editor');
    Route::get('/pengujian/{pengujian}', [PengujianController::class, 'show'])->middleware('module.permission:pengujian,viewer');
    Route::put('/pengujian/{pengujian}', [PengujianController::class, 'update'])->middleware('admin.only');
    Route::delete('/pengujian/{pengujian}', [PengujianController::class, 'destroy'])->middleware('admin.only');
    Route::post('/pengujian/{pengujian}/advance-status', [PengujianController::class, 'advanceStatus'])->middleware('admin.only');

    Route::get('/payments', [PaymentController::class, 'index'])->middleware('module.permission:pembayaran,viewer');
    Route::post('/payments', [PaymentController::class, 'store'])->middleware('module.permission:pembayaran,editor');
    Route::put('/payments/{payment}', [PaymentController::class, 'update'])->middleware('module.permission:pembayaran,editor');
    Route::post('/payments/{payment}/process', [PaymentController::class, 'process'])->middleware('admin.only');
    Route::get('/documents/{document}/download', [UploadedDocumentController::class, 'download'])->middleware('module.permission:pengadaan,viewer');
    Route::delete('/documents/{document}', [UploadedDocumentController::class, 'destroy'])->middleware('module.permission:pengadaan,editor');
});
