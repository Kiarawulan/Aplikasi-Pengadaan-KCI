<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Pengadaan;
use App\Models\ProcessHistory;
use App\Models\Verifikasi;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PaymentController extends Controller
{
    public function index(Request $request)
    {
        $query = Payment::query();
        if ($request->filled('pengadaan_id')) $query->where('pengadaan_id', $request->pengadaan_id);
        if (! $request->user()->is_admin) $query->where('requested_by', $request->user()->id);
        return response()->json($query->latest()->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'pengadaan_id' => 'required|exists:pengadaan,id',
            'payment_type' => 'required|in:outsource,non-outsource,umd,payment-request',
            'form_data' => 'nullable|array',
        ]);
        $pengadaan = Pengadaan::findOrFail($data['pengadaan_id']);
        $this->assertOwner($request, $pengadaan);

        if ($pengadaan->flow_type === 'pd' && $data['payment_type'] !== 'umd') {
            return response()->json(['success' => false, 'message' => 'Park Document hanya dapat menggunakan pembayaran UMD.'], 422);
        }
        if ($pengadaan->flow_type === 'pr' && $data['payment_type'] === 'umd') {
            return response()->json(['success' => false, 'message' => 'Purchase Requisition menggunakan Outsource atau Non Outsource.'], 422);
        }
        if ($pengadaan->current_step !== 'pembayaran') {
            return response()->json(['success' => false, 'message' => 'Pembayaran belum dapat diajukan sebelum tahapan sebelumnya selesai.'], 422);
        }

        $pengadaanFormData = $pengadaan->form_data ?? [];
        $pengadaanFormData['pelunasan'] = array_merge(
            is_array($pengadaanFormData['pelunasan'] ?? null) ? $pengadaanFormData['pelunasan'] : [],
            ['jenis' => $data['payment_type']]
        );
        $pengadaan->form_data = $pengadaanFormData;
        $pengadaan->save();

        $payment = Payment::firstOrCreate(
            ['pengadaan_id' => $pengadaan->id, 'payment_type' => $data['payment_type']],
            ['id' => 'PAY-' . strtoupper(Str::random(10)), 'status' => 'draft', 'requested_by' => $request->user()->id, 'form_data' => []],
        );
        if ($payment->status === 'draft' || $payment->status === 'revision_required') {
            $payment->form_data = $data['form_data'] ?? $payment->form_data;
            $payment->status = 'waiting_approval';
            $payment->requested_by = $request->user()->id;
            $payment->save();
        }

        $verifikasi = Verifikasi::firstOrNew([
            'pengadaan_id' => $pengadaan->id,
            'tipe' => $data['payment_type'],
        ]);
        $verifikasi->id ??= 'VR-PAY-' . $payment->id;
        $verifikasi->pengadaan_nama = $pengadaan->nama;
        $verifikasi->departemen = $pengadaan->departemen;
        $verifikasi->nominal = $pengadaan->nominal;
        $verifikasi->submit_by = $request->user()->name;
        $verifikasi->submit_at = now();
        $verifikasi->status = 'pending';
        $verifikasi->catatan_admin = null;
        $verifikasi->save();

        ProcessHistory::create(['pengadaan_id' => $pengadaan->id, 'verifikasi_id' => $verifikasi->id, 'actor_id' => $request->user()->id, 'actor_name' => $request->user()->name, 'step_id' => 'pembayaran', 'action' => 'submitted', 'from_status' => 'draft', 'to_status' => $payment->status]);
        return response()->json($payment, 201);
    }

    public function update(Request $request, Payment $payment)
    {
        $pengadaan = Pengadaan::findOrFail($payment->pengadaan_id);
        $this->assertOwner($request, $pengadaan);
        if (! in_array($payment->status, ['draft', 'revision_required'], true)) {
            return response()->json(['success' => false, 'message' => 'Pembayaran tidak dapat diubah pada status saat ini.'], 422);
        }
        $request->validate(['form_data' => 'required|array']);
        $payment->form_data = $request->form_data;
        $payment->save();
        return response()->json($payment);
    }

    public function process(Request $request, Payment $payment)
    {
        $data = $request->validate(['status' => 'required|in:approved,rejected,revision_required', 'note' => 'nullable|string']);
        $from = $payment->status;
        $payment->status = $data['status'];
        $payment->processed_by = $request->user()->id;
        $payment->admin_note = $data['note'] ?? null;
        $payment->save();
        $pengadaan = Pengadaan::findOrFail($payment->pengadaan_id);
        if ($data['status'] === 'approved') { $pengadaan->status = 'completed'; $pengadaan->current_step = 'completed'; $pengadaan->save(); }
        ProcessHistory::create(['pengadaan_id' => $pengadaan->id, 'actor_id' => $request->user()->id, 'actor_name' => $request->user()->name, 'step_id' => 'pembayaran', 'action' => 'processed', 'from_status' => $from, 'to_status' => $data['status'], 'note' => $data['note'] ?? null]);
        return response()->json($payment);
    }

    private function assertOwner(Request $request, Pengadaan $pengadaan): void
    {
        abort_unless($request->user()->is_admin || $pengadaan->created_by === $request->user()->id, 403, 'Anda tidak memiliki akses ke pengadaan ini.');
    }
}
