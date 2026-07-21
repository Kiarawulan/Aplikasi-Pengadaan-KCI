<?php

namespace App\Http\Controllers;

use App\Models\Pengadaan;
use App\Models\Verifikasi;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        $pengadaanQuery = Pengadaan::query();
        if (! $user->is_admin) {
            $pengadaanQuery->where('departemen', $user->departemen);
        }

        $totalPengadaan = $pengadaanQuery->count();
        $sedangBerjalan = (clone $pengadaanQuery)->where('status', '!=', 'Selesai')->count();
        $selesai        = (clone $pengadaanQuery)->where('status', 'Selesai')->count();
        $perluVerifikasi = Verifikasi::where('status', 'pending')->count();

        $recentVerifikasi = Verifikasi::latest()->take(5)->get();

        return response()->json([
            'totalPengadaan'  => $totalPengadaan,
            'sedangBerjalan'  => $sedangBerjalan,
            'selesai'         => $selesai,
            'perluVerifikasi' => $perluVerifikasi,
            'recentActivity'  => $recentVerifikasi,
        ]);
    }
}
