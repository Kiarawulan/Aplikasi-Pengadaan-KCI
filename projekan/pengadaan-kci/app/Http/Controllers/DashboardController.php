<?php

namespace App\Http\Controllers;

use App\Models\Pengadaan;
use App\Models\Pengujian;
use App\Models\Rup;
use App\Models\Verifikasi;
use App\Models\ProcessHistory;
use App\Models\Payment;
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
        $payment = Payment::query()->when(! $user->is_admin, function ($query) use ($user) {
            $query->whereIn('pengadaan_id', Pengadaan::where('departemen', $user->departemen)->select('id'));
        });

        foreach ([$pengadaan, $verifikasi, $pengujian, $rup, $payment] as $query) {
            $query->whereYear('created_at', $year);
            if ($month && $month !== 'all') $query->whereMonth('created_at', (int) $month);
        }

        $records = (clone $pengadaan)->get();
        $pengadaanRecords = $records->where('flow_type', 'pr');
        $pengajuanDanaRecords = $records->where('flow_type', 'pd');
        $pengujianRecords = (clone $pengujian)->get();
        $paymentRecords = (clone $payment)->get();
        $isCompleted = fn ($record) => in_array(strtolower((string) $record->status), [
            'selesai', 'approved', 'sudah diverifikasi', 'paid', 'dibayar', 'completed',
        ], true);
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

        // Riwayat proses mencatat aksi submit/revisi/approval aktual dari User
        // maupun Admin, sehingga dashboard tidak menggunakan aktivitas dummy.
        $activities = ProcessHistory::query()
            ->when(! $user->is_admin, function ($query) use ($user) {
                $query->whereIn('pengadaan_id', Pengadaan::where('departemen', $user->departemen)->select('id'));
            })
            ->latest()
            ->take(10)
            ->get()
            ->map(function ($history) {
                $record = Pengadaan::find($history->pengadaan_id);
                return [
                    'title' => $record?->nama ?: $history->pengadaan_id,
                    'meta' => ($history->actor_name ?: 'Pengguna') . ' - ' . $history->created_at->diffForHumans(),
                    'status' => $history->to_status,
                    'type' => $history->step_id,
                    'action' => $history->action,
                    'created_at' => $history->created_at,
                ];
            });

        return response()->json([
            'records' => [
                'pengadaan' => $records->map(fn ($record) => [
                    'id' => $record->id, 'nama' => $record->nama, 'departemen' => $record->departemen,
                    'tanggal' => $record->tanggal, 'status' => $record->status, 'flowType' => $record->flow_type,
                    'currentStep' => $record->current_step, 'formData' => $record->form_data ?? [],
                    'created_at' => $record->created_at,
                ])->values(),
                'pengujian' => $pengujianRecords->values(),
                'pembayaran' => $paymentRecords->values(),
                'verifikasi' => (clone $verifikasi)->get()->values(),
            ],
            'summary' => [
                'totalPengadaan' => $records->count(),
                'dalamProses' => $statusDistribution[1]['value'],
                'pengujianSelesai' => (clone $pengujian)->whereIn('status', ['Selesai', 'selesai', 'approved'])->count(),
                'totalPengujian' => (clone $pengujian)->count(),
                'totalRup' => (clone $rup)->count(),
                'perluVerifikasi' => (clone $verifikasi)->where('status', 'pending')->count(),
                'pengadaan' => [
                    'total' => $pengadaanRecords->count(),
                    'inProgress' => $pengadaanRecords->reject($isCompleted)->count(),
                    'completed' => $pengadaanRecords->filter($isCompleted)->count(),
                ],
                'pengajuanDana' => [
                    'total' => $pengajuanDanaRecords->count(),
                    'inProgress' => $pengajuanDanaRecords->reject($isCompleted)->count(),
                    'completed' => $pengajuanDanaRecords->filter($isCompleted)->count(),
                ],
                'pengujian' => [
                    'total' => $pengujianRecords->count(),
                    'inProgress' => $pengujianRecords->reject($isCompleted)->count(),
                    'completed' => $pengujianRecords->filter($isCompleted)->count(),
                ],
                'pembayaran' => [
                    'total' => $paymentRecords->count(),
                    'inProgress' => $paymentRecords->reject($isCompleted)->count(),
                    'completed' => $paymentRecords->filter($isCompleted)->count(),
                ],
            ],
            'monthly' => $monthly,
            'statusDistribution' => $statusDistribution,
            'recentActivity' => $activities,
        ]);
    }
}
