<?php

namespace App\Http\Controllers;

use App\Models\Pengadaan;
use App\Models\Pengujian;
use App\Models\Rup;
use App\Models\Verifikasi;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $year = (int) $request->query('year', now()->year);
        $month = $request->query('month');

        $pengadaan = Pengadaan::query()->when(! $user->is_admin, fn ($q) => $q->where('departemen', $user->departemen));
        $verifikasi = Verifikasi::query()->when(! $user->is_admin, fn ($q) => $q->where('departemen', $user->departemen));
        $pengujian = Pengujian::query()->when(! $user->is_admin, fn ($q) => $q->where('departemen', $user->departemen));
        $rup = Rup::query()->when(! $user->is_admin, fn ($q) => $q->where('departemen', $user->departemen));

        foreach ([$pengadaan, $verifikasi, $pengujian, $rup] as $query) {
            $query->whereYear('created_at', $year);
            if ($month && $month !== 'all') $query->whereMonth('created_at', (int) $month);
        }

        $records = (clone $pengadaan)->get();
        $statusDistribution = [
            ['name' => 'Selesai', 'value' => $records->filter(fn ($r) => in_array(strtolower($r->status), ['selesai', 'approved', 'sudah diverifikasi']))->count(), 'color' => '#16a34a'],
            ['name' => 'Berjalan', 'value' => $records->filter(fn ($r) => ! in_array(strtolower($r->status), ['selesai', 'approved', 'sudah diverifikasi', 'rejected', 'ditolak']))->count(), 'color' => '#d97706'],
            ['name' => 'Perlu tindakan', 'value' => $records->filter(fn ($r) => in_array(strtolower($r->status), ['revisi', 'rejected', 'ditolak']))->count(), 'color' => '#dc2626'],
        ];

        $monthly = collect(range(1, 12))->map(function ($number) use ($records) {
            $items = $records->filter(fn ($r) => optional($r->created_at)->month === $number);
            return [
                'month' => now()->month($number)->translatedFormat('M'),
                'pengadaan' => $items->count(),
                'selesai' => $items->filter(fn ($r) => in_array(strtolower($r->status), ['selesai', 'approved', 'sudah diverifikasi']))->count(),
                'monthNumber' => $number,
            ];
        });

        $activities = (clone $verifikasi)->latest('submit_at')->take(5)->get()->map(fn ($v) => [
            'title' => $v->pengadaan_nama,
            'meta' => ($v->submit_by ?: 'Pengguna') . ' · ' . optional($v->submit_at)->diffForHumans(),
            'status' => $v->status,
            'type' => $v->tipe,
        ]);

        return response()->json([
            'summary' => [
                'totalPengadaan' => $records->count(),
                'dalamProses' => $statusDistribution[1]['value'],
                'pengujianSelesai' => (clone $pengujian)->whereIn('status', ['Selesai', 'selesai', 'approved'])->count(),
                'totalPengujian' => (clone $pengujian)->count(),
                'totalRup' => (clone $rup)->count(),
                'perluVerifikasi' => (clone $verifikasi)->where('status', 'pending')->count(),
            ],
            'monthly' => $monthly,
            'statusDistribution' => $statusDistribution,
            'recentActivity' => $activities,
        ]);
    }
}
