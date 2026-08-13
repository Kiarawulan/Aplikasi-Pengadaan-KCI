<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Pengadaan;
use App\Models\ProcessHistory;
use App\Models\Verifikasi;
use App\Models\UploadedDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PaymentController extends Controller
{
    public function index(Request $request)
    {
        $query = Payment::query();
        if ($request->filled('pengadaan_id')) $query->where('pengadaan_id', $request->pengadaan_id);
        if (! $request->user()->is_admin) {
            $query->whereHas('pengadaan', fn ($pengadaan) => $pengadaan->where('departemen', $request->user()->departemen));
        }
        return response()->json($query->latest()->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'pengadaan_id' => 'required|exists:pengadaan,id',
            'payment_type' => 'required|in:outsource,non-outsource,umd,payment-request',
            'form_data' => 'nullable|array',
            'submission_phase' => 'nullable|in:request,documents',
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

        $existingVerification = Verifikasi::where('pengadaan_id', $pengadaan->id)
            ->whereIn('tipe', ['pembayaran', 'umd', 'outsource', 'non-outsource', 'payment-request'])
            ->latest()
            ->first();
        if ($existingVerification
            && in_array(strtolower((string) $existingVerification->status), ['revisi', 'revision_required', 'perlu revisi'], true)
            && $this->canonicalize($this->revisionSnapshot($pengadaan, $data['form_data'] ?? null))
                === $this->canonicalize($existingVerification->revision_snapshot ?? [])) {
            return response()->json(['message' => 'Belum ada perubahan pada data atau berkas pembayaran.'], 422);
        }

        $pengadaanFormData = $pengadaan->form_data ?? [];
        $pengadaanFormData['pelunasan'] = array_merge(
            is_array($pengadaanFormData['pelunasan'] ?? null) ? $pengadaanFormData['pelunasan'] : [],
            ['jenis' => $data['payment_type']]
        );
        $deletedTypes = is_array($pengadaanFormData['deleted_payment_types'] ?? null)
            ? $pengadaanFormData['deleted_payment_types']
            : [];
        $pengadaanFormData['deleted_payment_types'] = array_values(array_filter(
            $deletedTypes,
            fn ($type) => $type !== $data['payment_type']
        ));
        $pengadaan->form_data = $pengadaanFormData;
        $pengadaan->save();

        // Pilihan pembayaran yang sebelumnya ditolak boleh diganti. Bersihkan
        // record lama agar tipe yang sudah dihapus Admin tidak mengarahkan User
        // kembali ke jalur pembayaran sebelumnya.
        Payment::where('pengadaan_id', $pengadaan->id)
            ->where('payment_type', '!=', $data['payment_type'])
            ->whereIn('status', ['rejected', 'draft', 'revision_required'])
            ->delete();

        $isUmdRequest = $data['payment_type'] === 'umd' && ($data['submission_phase'] ?? null) === 'request';
        $payment = Payment::firstOrCreate(
            ['pengadaan_id' => $pengadaan->id, 'payment_type' => $data['payment_type']],
            ['id' => 'PAY-' . strtoupper(Str::random(10)), 'status' => 'draft', 'requested_by' => $request->user()->id, 'form_data' => []],
        );
        if ($isUmdRequest && ! in_array($payment->status, ['draft', 'revision_required', 'rejected'], true)) {
            return response()->json($payment);
        }
        if ($data['payment_type'] === 'umd'
            && ($data['submission_phase'] ?? null) === 'documents'
            && $payment->status === 'awaiting_acceptance') {
            return response()->json(['message' => 'Ajuan Payment Request belum diterima Admin.'], 422);
        }
        if ($isUmdRequest && in_array($payment->status, ['draft', 'revision_required', 'rejected'], true)) {
            $payment->form_data = $data['form_data'] ?? $payment->form_data;
            $payment->status = 'awaiting_acceptance';
            $payment->requested_by = $request->user()->id;
            $payment->save();
        } elseif (in_array($payment->status, ['draft', 'revision_required', 'rejected', 'documents_required'], true)) {
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
        $verifikasi->revision_snapshot = null;
        $verifikasi->save();

        ProcessHistory::create(['pengadaan_id' => $pengadaan->id, 'verifikasi_id' => $verifikasi->id, 'actor_id' => $request->user()->id, 'actor_name' => $request->user()->name, 'step_id' => 'pembayaran', 'action' => 'submitted', 'from_status' => 'draft', 'to_status' => $payment->status]);
        return response()->json($payment, 201);
    }

    public function acceptSubmission(Request $request, Payment $payment)
    {
        abort_unless($request->user()->is_admin, 403, 'Hanya Admin yang dapat menerima ajuan pembayaran.');
        abort_unless($payment->payment_type === 'umd', 422, 'Penerimaan ajuan khusus untuk pembayaran UMD.');
        abort_unless($payment->status === 'awaiting_acceptance', 422, 'Ajuan pembayaran ini sudah diproses.');

        $payment->status = 'documents_required';
        $payment->processed_by = $request->user()->id;
        $payment->admin_note = null;
        $payment->save();

        $verifikasi = Verifikasi::where('pengadaan_id', $payment->pengadaan_id)
            ->where('tipe', 'umd')
            ->latest()
            ->first();
        if ($verifikasi) {
            $verifikasi->status = 'pending';
            $verifikasi->catatan_admin = null;
            $verifikasi->save();
        }

        ProcessHistory::create([
            'pengadaan_id' => $payment->pengadaan_id,
            'verifikasi_id' => $verifikasi?->id,
            'actor_id' => $request->user()->id,
            'actor_name' => $request->user()->name,
            'step_id' => 'pembayaran',
            'action' => 'payment_request_accepted',
            'from_status' => 'awaiting_acceptance',
            'to_status' => 'documents_required',
        ]);

        return response()->json($payment->fresh());
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

    private function revisionSnapshot(Pengadaan $pengadaan, ?array $formData = null): array
    {
        $data = $formData ?? ($pengadaan->form_data ?? []);
        unset($data['__meta']);
        return [
            'form_data' => $data,
            'documents' => UploadedDocument::where('pengadaan_id', $pengadaan->id)
                ->orderBy('id')->get(['stage', 'original_name', 'path', 'size'])
                ->map(fn (UploadedDocument $document) => $document->toArray())->values()->all(),
        ];
    }

    private function canonicalize(mixed $value): mixed
    {
        if (! is_array($value)) return $value;
        if (! array_is_list($value)) ksort($value);
        foreach ($value as $key => $nested) $value[$key] = $this->canonicalize($nested);
        return $value;
    }
}
