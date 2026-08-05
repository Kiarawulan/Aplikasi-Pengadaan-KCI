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
    Route::get('/rup', [RupController::class, 'index']);
    Route::post('/rup', [RupController::class, 'store']);
    Route::get('/rup/{rup}', [RupController::class, 'show']);
    Route::put('/rup/{rup}', [RupController::class, 'update']);
    Route::delete('/rup/{rup}', [RupController::class, 'destroy']);

    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index']);

    // Users
    Route::get('/users', [UserController::class, 'index']);
    Route::post('/users', [UserController::class, 'store']);
    Route::put('/users/{user}', [UserController::class, 'update']);
    Route::delete('/users/{user}', [UserController::class, 'destroy']);

    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::post('/users/{user}/reset-password', [UserController::class, 'resetPassword']);
    Route::post('/users/{user}/toggle-active', [UserController::class, 'toggleActive']);

    // Roles
    Route::get('/roles', [RoleController::class, 'index']);
    Route::post('/roles', [RoleController::class, 'store']);
    Route::put('/roles/{role}', [RoleController::class, 'update']);
    Route::delete('/roles/{role}', [RoleController::class, 'destroy']);

    // Pengadaan
    Route::get('/pengadaan', [PengadaanController::class, 'index']);
    Route::post('/pengadaan', [PengadaanController::class, 'store']);
    Route::get('/pengadaan/{pengadaan}', [PengadaanController::class, 'show']);
    Route::put('/pengadaan/{pengadaan}', [PengadaanController::class, 'update']);
    Route::put('/pengadaan/{pengadaan}/form-data', [PengadaanController::class, 'updateFormData']);
    Route::delete('/pengadaan/{pengadaan}', [PengadaanController::class, 'destroy']);
    Route::post('/pengadaan/{pengadaan}/submit-step', [PengadaanController::class, 'submitStep']);
    Route::get('/pengadaan/{pengadaan}/step-status', [PengadaanController::class, 'stepStatus']);

    // Verifikasi
    Route::get('/verifikasi', [VerifikasiController::class, 'index']);
    Route::post('/verifikasi', [VerifikasiController::class, 'store']);
    Route::get('/verifikasi/{verifikasi}', [VerifikasiController::class, 'show']);
    Route::put('/verifikasi/{verifikasi}', [VerifikasiController::class, 'update']);
    Route::post('/verifikasi/{verifikasi}/approve', [VerifikasiController::class, 'approve']);
    Route::post('/verifikasi/{verifikasi}/revisi', [VerifikasiController::class, 'revisi']);
    Route::post('/verifikasi/{verifikasi}/reject', [VerifikasiController::class, 'reject']);

    // Template Dokumen
    Route::apiResource('/templates', TemplateDokumenController::class);

    // Vendors
    Route::apiResource('/vendors', VendorController::class);

    // Harga Satuan
    Route::apiResource('/harga-satuan', HargaSatuanController::class);

    // Pengujian
    Route::apiResource('/pengujian', PengujianController::class);
    Route::post('/pengujian/{pengujian}/advance-status', [PengujianController::class, 'advanceStatus']);
});
