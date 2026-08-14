<?php

namespace App\Http\Controllers;

use App\Models\Verifikasi;
use App\Models\Pengadaan;
use App\Models\PengadaanCompletedStep;
use App\Models\Rup;
use App\Models\Npp;
use App\Models\Sp3;
use App\Models\Contract;
use App\Models\Pbj;
use App\Models\ParkDocument;
use App\Models\PurchaseRequisition;
use App\Models\ProcessHistory;
use App\Models\Payment;
use App\Models\Pengujian;
use App\Models\UploadedDocument;
use App\Http\Middleware\EnsureModulePermission;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class VerifikasiController extends Controller
{
    public function index(Request $request)
    {
        $query = Verifikasi::query();

        if ($request->has('tipe')) {
            $types = explode(',', $request->tipe);
            foreach ($types as $type) $this->authorizeType($request, $type, 'viewer');
            $query->whereIn('tipe', $types);
        } else {
            $allowedTypes = collect($this->typeModules())
                ->filter(fn (string $module) => EnsureModulePermission::allows($request->user(), $module, 'viewer'))
                ->keys()->all();
            $query->whereIn('tipe', $allowedTypes ?: ['__no_access__']);
        }

        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        if ($request->has('pengadaan_id')) {
            $query->where('pengadaan_id', $request->pengadaan_id);
        }

        return response()->json($query->latest()->get()->map(function (Verifikasi $verifikasi) {
            $models = [
                'npp' => Npp::class,
                'sp3' => Sp3::class,
                'contract' => Contract::class,
                'pbj' => Pbj::class,
                'park-dokumen' => ParkDocument::class,
                'park-document' => ParkDocument::class,
                'purchase-requisition' => PurchaseRequisition::class,
                'pengajuan-dana' => PurchaseRequisition::class,
                'pengujian' => Pengujian::class,
                'outsource' => Payment::class,
                'non-outsource' => Payment::class,
                'umd' => Payment::class,
                'payment-request' => Payment::class,
            ];
            $model = $models[$verifikasi->tipe] ?? null;
            $document = $model ? $model::where('pengadaan_id', $verifikasi->pengadaan_id)->latest()->first() : null;
            $pengadaan = Pengadaan::find($verifikasi->pengadaan_id);

            $documentFormData = $document?->form_data ?? [];
            $pengadaanFormData = $pengadaan?->form_data ?? [];
            $effectiveFormData = array_replace_recursive(
                is_array($documentFormData) ? $documentFormData : [],
                is_array($pengadaanFormData) ? $pengadaanFormData : [],
            );

            $noNpp = null;
            if ($verifikasi->tipe === 'npp' || in_array($verifikasi->tipe, ['purchase-requisition', 'pengajuan-dana', 'sp3', 'pbj', 'contract', 'pengujian', 'outsource', 'non-outsource', 'umd', 'payment-request'])) {
                $noNpp = Npp::where('pengadaan_id', $verifikasi->pengadaan_id)->value('no_npp')
                    ?? ($pengadaan?->form_data['buat-npp']['noNpp'] ?? ($pengadaan?->form_data['noNpp'] ?? null));
            }

            return array_merge($verifikasi->toArray(), [
                'document' => $document,
                'document_form_data' => $documentFormData,
                'pengadaan_form_data' => $pengadaanFormData,
                // Pengadaan.form_data adalah sumber data terbaru karena selalu
                // ditulis ulang saat user mengirim revisi. Field ini mencegah
                // halaman Admin kembali memakai snapshot dokumen yang lama.
                'effective_form_data' => $effectiveFormData,
                'current_step' => $pengadaan?->current_step,
                'no_npp' => $noNpp,
                'noNpp' => $noNpp,
            ]);
        }));
    }

    public function store(Request $request)
    {
        $this->authorizeType($request, (string) $request->input('tipe'), 'editor');
        \Log::info('Verifikasi store request', $request->all());
        try {
            $request->validate([
                'pengadaanId'   => 'required',
                'pengadaanNama' => 'required',
                'departemen'    => 'required',
                'nominal'       => 'nullable',
                'tipe'          => 'required',
                'submitBy'      => 'required',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            \Log::error('Validation failed', $e->errors());
            throw $e;
        }

        $next = $this->nextVerificationNumber();
        $id = 'VR-' . str_pad($next, 3, '0', STR_PAD_LEFT);

        $verif = Verifikasi::create([
            'id'             => $id,
            'pengadaan_id'   => $request->pengadaanId,
            'pengadaan_nama' => $request->pengadaanNama,
            'departemen'     => $request->departemen,
            'nominal'        => $request->nominal ?? '—',
            'tipe'           => $request->tipe,
            'submit_by'      => $request->submitBy,
            'submit_at'      => now(),
            'status'         => 'pending',
        ]);

        return response()->json($verif, 201);
    }

    public function show(Verifikasi $verifikasi)
    {
        $this->authorizeType(request(), $verifikasi->tipe, 'viewer');
        return response()->json($verifikasi);
    }

    public function update(Request $request, Verifikasi $verifikasi)
    {
        $this->authorizeType($request, $verifikasi->tipe, 'editor');
        $request->validate([
            'status' => 'sometimes|in:pending,approved,revisi,rejected',
            'catatan_admin' => 'nullable|string',
        ]);

        $verifikasi->fill($request->only(['status', 'catatan_admin']));
        $verifikasi->save();

        return response()->json($verifikasi);
    }

    public function destroy(Request $request, Verifikasi $verifikasi)
    {
        $this->authorizeType($request, $verifikasi->tipe, 'editor');

        $paymentTypes = ['umd', 'outsource', 'non-outsource', 'payment-request', 'pembayaran'];
        if (in_array($verifikasi->tipe, $paymentTypes, true)) {
            $pengadaan = Pengadaan::find($verifikasi->pengadaan_id);
            if ($pengadaan) {
                $formData = $pengadaan->form_data ?? [];
                $deletedTypes = is_array($formData['deleted_payment_types'] ?? null)
                    ? $formData['deleted_payment_types']
                    : [];
                $deletedType = $verifikasi->tipe === 'pembayaran'
                    ? ($pengadaan->flow_type === 'pd' ? 'umd' : 'outsource')
                    : $verifikasi->tipe;
                $formData['deleted_payment_types'] = array_values(array_unique([...$deletedTypes, $deletedType]));
                $pengadaan->form_data = $formData;
                $pengadaan->save();
            }
        }

        if ($verifikasi->tipe === 'rup') {
            Rup::where('id', $verifikasi->pengadaan_id)->delete();
        } else {
            $this->deleteStageDocument($verifikasi);
        }

        ProcessHistory::where('verifikasi_id', $verifikasi->id)->delete();
        $verifikasi->delete();

        return response()->json(['message' => 'Data dan antrean verifikasi berhasil dihapus.']);
    }

    public function approve(Request $request, Verifikasi $verifikasi)
    {
        $this->authorizeType($request, $verifikasi->tipe, 'editor');
        $admin = $request->user();
        $oldStatus = $verifikasi->status;

        $verifikasi->status = 'approved';
        $verifikasi->verified_by = $admin->name;
        $verifikasi->verified_at = now();
        $verifikasi->save();
        $this->syncDocumentStatus($verifikasi, 'approved');
        $this->recordHistory($request, $verifikasi, 'approved', $oldStatus, 'approved');

        // Update corresponding Pengadaan/RUP status
        if ($verifikasi->tipe === 'rup') {
            $rup = Rup::find($verifikasi->pengadaan_id);
            if ($rup) {
                $rup->status = 'approved';
                $rup->updated_by = $admin->id;
                $rup->save();
            }
        } else {
            $pengadaan = Pengadaan::find($verifikasi->pengadaan_id);
            if ($pengadaan) {
                $pengadaan->status = 'approved';
                $pengadaan->updated_by = $admin->id;

                // Map verifikasi tipe to actual pengadaan step_id
                $tipeToStepMap = [
                    'park-dokumen'         => 'pengajuan-dana',
                    'purchase-requisition' => 'pengajuan-dana',
                    'umd'                  => 'pembayaran',
                    'outsource'            => 'pembayaran',
                    'non-outsource'        => 'pembayaran',
                    'payment-request'      => 'pembayaran',
                ];
                $stepId = $tipeToStepMap[$verifikasi->tipe] ?? $verifikasi->tipe;

                // Mark current step completed
                PengadaanCompletedStep::firstOrCreate([
                    'pengadaan_id' => $pengadaan->id,
                    'step_id'      => $stepId,
                ], [
                    'completed_at' => now(),
                ]);

                // Transisi PR dikendalikan oleh database. User hanya mengisi
                // NPP dan Pengajuan Dana; SP3, PBJ, dan Kontrak menjadi task
                // admin yang terlihat read-only oleh user.
                $nextPrStep = [
                    'npp' => 'pengajuan-dana',
                    'pengajuan-dana' => 'sp3',
                    'sp3' => 'pbj',
                    'pbj' => 'contract',
                    'contract' => 'pengujian',
                ][$verifikasi->tipe] ?? null;

                if (str_starts_with($pengadaan->id, 'PR-') && $nextPrStep) {
                    $pengadaan->current_step = $nextPrStep;
                    $pengadaan->status = $nextPrStep === 'pengujian' ? 'on_progress' : 'approved';

                    // Tahap internal admin otomatis dibuat setelah Pengajuan Dana,
                    // SP3, dan PBJ disetujui. Tidak ada duplikasi jika sudah ada.
                    $adminStage = [
                        'pengajuan-dana' => 'sp3',
                        'sp3' => 'pbj',
                        'pbj' => 'contract',
                    ][$verifikasi->tipe] ?? null;
                    if ($adminStage && ! Verifikasi::where('pengadaan_id', $pengadaan->id)->where('tipe', $adminStage)->exists()) {
                        $number = $this->nextVerificationNumber();
                        Verifikasi::create([
                            'id' => 'VR-' . str_pad($number, 3, '0', STR_PAD_LEFT),
                            'pengadaan_id' => $pengadaan->id,
                            'pengadaan_nama' => $pengadaan->nama,
                            'departemen' => $pengadaan->departemen,
                            'nominal' => $pengadaan->nominal,
                            'tipe' => $adminStage,
                            'submit_by' => $admin->name,
                            'submit_at' => now(),
                            'status' => 'pending',
                        ]);
                        $this->createInternalStageDocument($pengadaan, $adminStage, $admin->name);
                    }
                }

                // Park Document memiliki flow pendek: Pengajuan Dana → Pengujian → Pembayaran UMD.
                if ($pengadaan->flow_type === 'pd' && in_array($verifikasi->tipe, ['park-dokumen', 'pengajuan-dana'], true)) {
                    $pengadaan->current_step = 'pembayaran';
                    $pengadaan->status = 'on_progress';
                }

                if ($verifikasi->tipe === 'pengujian') {
                    // Persetujuan admin menutup tahap pengujian. Setelah itu
                    // User memilih Outsource/Non-Outsource untuk membuat pembayaran.
                    Pengujian::where('pengadaan_id', $pengadaan->id)->update(['status' => 'completed']);
                    $pengadaan->current_step = 'pembayaran';
                    $pengadaan->status = 'on_progress';
                }

                if (in_array($verifikasi->tipe, ['umd', 'outsource', 'non-outsource', 'payment-request', 'pembayaran'], true)) {
                    $payType = in_array($verifikasi->tipe, ['umd', 'outsource', 'non-outsource', 'payment-request'], true)
                        ? $verifikasi->tipe
                        : ($pengadaan->flow_type === 'pd' ? 'umd' : 'outsource');

                    $existingPayment = Payment::where('pengadaan_id', $pengadaan->id)->first();
                    if ($existingPayment) {
                        $existingPayment->status = 'approved';
                        $existingPayment->processed_by = $admin->id;
                        $existingPayment->save();
                    } else {
                        Payment::create([
                            'id' => 'PAY-' . strtoupper(Str::random(10)),
                            'pengadaan_id' => $pengadaan->id,
                            'payment_type' => $payType,
                            'status' => 'approved',
                            'processed_by' => $admin->id,
                        ]);
                    }
                    $pengadaan->status = 'Selesai';
                    $pengadaan->current_step = 'completed';
                }

                $pengadaan->save();
            }
        }

        return response()->json([
            'message'    => 'Pengajuan berhasil disetujui.',
            'verifikasi' => $verifikasi,
        ]);
    }

    public function revisi(Request $request, Verifikasi $verifikasi)
    {
        $request->validate([
            'catatan' => 'required|string',
        ]);

        $this->authorizeType($request, $verifikasi->tipe, 'editor');
        $admin = $request->user();
        $oldStatus = $verifikasi->status;

        if ($verifikasi->tipe !== 'rup') {
            $pengadaan = Pengadaan::find($verifikasi->pengadaan_id);
            if ($pengadaan) {
                $verifikasi->revision_snapshot = $this->revisionSnapshot($pengadaan);
            }
        }

        $verifikasi->status = 'revisi';
        $verifikasi->catatan_admin = $request->catatan;
        $verifikasi->verified_by = $admin->name;
        $verifikasi->verified_at = now();
        $verifikasi->save();
        $this->syncDocumentStatus($verifikasi, 'revisi');
        $this->recordHistory($request, $verifikasi, 'revisi', $oldStatus, 'revisi', $request->catatan);

        if ($verifikasi->tipe === 'rup') {
            $rup = Rup::find($verifikasi->pengadaan_id);
            if ($rup) {
                $rup->status = 'revision_required';
                $rup->catatan_admin = $request->catatan;
                $rup->save();
            }
        } else {
            $pengadaan = Pengadaan::find($verifikasi->pengadaan_id);
            if ($pengadaan) {
                $pengadaan->status = 'revision_required';
                $pengadaan->updated_by = $admin->id;
                $pengadaan->save();

                if (in_array($verifikasi->tipe, ['umd', 'outsource', 'non-outsource', 'payment-request', 'pembayaran'], true)) {
                    $payType = in_array($verifikasi->tipe, ['umd', 'outsource', 'non-outsource', 'payment-request'], true)
                        ? $verifikasi->tipe
                        : ($pengadaan->flow_type === 'pd' ? 'umd' : 'outsource');

                    $existingPayment = Payment::where('pengadaan_id', $pengadaan->id)->first();
                    if ($existingPayment) {
                        $existingPayment->status = 'revision_required';
                        $existingPayment->admin_note = $request->catatan;
                        $existingPayment->processed_by = $admin->id;
                        $existingPayment->save();
                    } else {
                        Payment::create([
                            'id' => 'PAY-' . strtoupper(Str::random(10)),
                            'pengadaan_id' => $pengadaan->id,
                            'payment_type' => $payType,
                            'status' => 'revision_required',
                            'admin_note' => $request->catatan,
                            'processed_by' => $admin->id,
                        ]);
                    }
                }
            }
        }

        return response()->json([
            'message'    => 'Status diubah menjadi Revisi.',
            'verifikasi' => $verifikasi,
        ]);
    }

    public function reject(Request $request, Verifikasi $verifikasi)
    {
        $request->validate([
            'catatan' => 'required|string',
        ]);

        $this->authorizeType($request, $verifikasi->tipe, 'editor');
        $admin = $request->user();
        $oldStatus = $verifikasi->status;

        $verifikasi->status = 'rejected';
        $verifikasi->catatan_admin = $request->catatan;
        $verifikasi->verified_by = $admin->name;
        $verifikasi->verified_at = now();
        $verifikasi->save();
        $this->syncDocumentStatus($verifikasi, 'rejected');
        $this->recordHistory($request, $verifikasi, 'rejected', $oldStatus, 'rejected', $request->catatan);

        if ($verifikasi->tipe === 'rup') {
            $rup = Rup::find($verifikasi->pengadaan_id);
            if ($rup) {
                $rup->status = 'rejected';
                $rup->catatan_admin = $request->catatan;
                $rup->save();
            }
        } else {
            $pengadaan = Pengadaan::find($verifikasi->pengadaan_id);
            if ($pengadaan) {
                $pengadaan->status = 'rejected';
                $pengadaan->updated_by = $admin->id;
                $pengadaan->save();

                if (in_array($verifikasi->tipe, ['umd', 'outsource', 'non-outsource', 'payment-request', 'pembayaran'], true)) {
                    $payType = in_array($verifikasi->tipe, ['umd', 'outsource', 'non-outsource', 'payment-request'], true)
                        ? $verifikasi->tipe
                        : ($pengadaan->flow_type === 'pd' ? 'umd' : 'outsource');

                    $existingPayment = Payment::where('pengadaan_id', $pengadaan->id)->first();
                    if ($existingPayment) {
                        $existingPayment->status = 'rejected';
                        $existingPayment->admin_note = $request->catatan;
                        $existingPayment->processed_by = $admin->id;
                        $existingPayment->save();
                    } else {
                        Payment::create([
                            'id' => 'PAY-' . strtoupper(Str::random(10)),
                            'pengadaan_id' => $pengadaan->id,
                            'payment_type' => $payType,
                            'status' => 'rejected',
                            'admin_note' => $request->catatan,
                            'processed_by' => $admin->id,
                        ]);
                    }
                }
            }
        }

        return response()->json([
            'message'    => 'Pengajuan berhasil ditolak.',
            'verifikasi' => $verifikasi,
        ]);
    }

    private function syncDocumentStatus(Verifikasi $verifikasi, string $status): void
    {
        $models = [
            'npp' => Npp::class,
            'sp3' => Sp3::class,
            'contract' => Contract::class,
            'pbj' => Pbj::class,
            'park-dokumen' => ParkDocument::class,
            'park-document' => ParkDocument::class,
            'purchase-requisition' => PurchaseRequisition::class,
            'pengajuan-dana' => PurchaseRequisition::class,
            'pengujian' => Pengujian::class,
            'umd' => Payment::class,
            'outsource' => Payment::class,
            'non-outsource' => Payment::class,
            'payment-request' => Payment::class,
            'pembayaran' => Payment::class,
        ];
        $model = $models[$verifikasi->tipe] ?? null;
        if ($model) {
            $model::where('pengadaan_id', $verifikasi->pengadaan_id)->latest()->first()?->update(['status' => $status]);
        }
    }

    private function revisionSnapshot(Pengadaan $pengadaan): array
    {
        $formData = $pengadaan->form_data ?? [];
        if (is_array($formData)) {
            unset($formData['__meta']);
        }

        return [
            'form_data' => $formData,
            'documents' => UploadedDocument::where('pengadaan_id', $pengadaan->id)
                ->orderBy('id')
                ->get(['stage', 'original_name', 'path', 'size'])
                ->map(fn (UploadedDocument $document) => $document->toArray())
                ->values()
                ->all(),
        ];
    }

    /**
     * Tahap SP3, PBJ, dan Kontrak dikerjakan internal oleh Admin. Saat antrean
     * dibuat, siapkan satu record dokumen nyata agar halaman Admin selalu
     * membaca detail yang sama dari database, bukan data contoh frontend.
     */
    private function createInternalStageDocument(Pengadaan $pengadaan, string $stage, string $submittedBy): void
    {
        $formData = array_merge($pengadaan->form_data ?? [], [
            'generated_stage' => $stage,
            'generated_at' => now()->toIso8601String(),
        ]);
        $safePengadaanId = preg_replace('/[^A-Za-z0-9]/', '', $pengadaan->id);

        if ($stage === 'sp3') {
            Sp3::firstOrCreate(
                ['pengadaan_id' => $pengadaan->id],
                [
                    'id' => 'SP3-' . $safePengadaanId,
                    'no_sp3' => 'SP3-' . $safePengadaanId,
                    'judul' => $pengadaan->nama,
                    'departemen' => $pengadaan->departemen,
                    'rkap' => $pengadaan->nominal,
                    'realisasi' => null,
                    'status' => 'pending',
                    'submitted_by' => $submittedBy,
                    'form_data' => $formData,
                ],
            );
            return;
        }

        if ($stage === 'pbj') {
            Pbj::firstOrCreate(
                ['pengadaan_id' => $pengadaan->id],
                [
                    'id' => 'PBJ-' . $safePengadaanId,
                    'no_pbj' => 'PBJ-' . $safePengadaanId,
                    'nama_paket' => $pengadaan->nama,
                    'departemen' => $pengadaan->departemen,
                    'nilai' => $pengadaan->nominal,
                    'status' => 'pending',
                    'submitted_by' => $submittedBy,
                    'form_data' => $formData,
                ],
            );
            return;
        }

        if ($stage === 'contract') {
            Contract::firstOrCreate(
                ['pengadaan_id' => $pengadaan->id],
                [
                    'id' => 'CTR-' . $safePengadaanId,
                    'no_kontrak' => 'CTR-' . $safePengadaanId,
                    'paket' => $pengadaan->nama,
                    'nilai' => $pengadaan->nominal,
                    'departemen' => $pengadaan->departemen,
                    'status' => 'pending',
                    'submitted_by' => $submittedBy,
                    'form_data' => $formData,
                ],
            );
        }
    }

    private function deleteStageDocument(Verifikasi $verifikasi): void
    {
        $models = [
            'npp' => Npp::class,
            'sp3' => Sp3::class,
            'contract' => Contract::class,
            'pbj' => Pbj::class,
            'park-dokumen' => ParkDocument::class,
            'park-document' => ParkDocument::class,
            'purchase-requisition' => PurchaseRequisition::class,
            'pengajuan-dana' => PurchaseRequisition::class,
            'pengujian' => Pengujian::class,
        ];
        $model = $models[$verifikasi->tipe] ?? null;
        if ($model) {
            $model::where('pengadaan_id', $verifikasi->pengadaan_id)->delete();
        }
    }

    private function recordHistory(Request $request, Verifikasi $verifikasi, string $action, ?string $fromStatus, ?string $toStatus, ?string $note = null): void
    {
        ProcessHistory::create([
            'pengadaan_id' => $verifikasi->pengadaan_id,
            'verifikasi_id' => $verifikasi->id,
            'step_id' => $verifikasi->tipe,
            'actor_id' => $request->user()?->id,
            'actor_name' => $request->user()?->name,
            'action' => $action,
            'from_status' => $fromStatus,
            'to_status' => $toStatus,
            'note' => $note,
        ]);
    }

    private function authorizeType(Request $request, string $type, string $level): void
    {
        $module = $this->typeModules()[$type] ?? 'pengadaan';
        abort_unless(
            EnsureModulePermission::allows($request->user(), $module, $level),
            403,
            'Anda tidak memiliki izin untuk mengakses verifikasi ini.'
        );
    }

    private function nextVerificationNumber(): int
    {
        return (Verifikasi::where('id', 'like', 'VR-%')->pluck('id')
            ->map(fn (string $id) => ctype_digit(substr($id, 3)) ? (int) substr($id, 3) : 0)
            ->max() ?? 0) + 1;
    }

    private function typeModules(): array
    {
        return [
            'rup' => 'pengadaan',
            'park-dokumen' => 'pengajuanDana',
            'park-document' => 'pengajuanDana',
            'purchase-requisition' => 'pengajuanDana',
            'pengajuan-dana' => 'pengajuanDana',
            'npp' => 'pengadaan',
            'sp3' => 'pengadaan',
            'pbj' => 'pengadaan',
            'contract' => 'pengadaan',
            'pengujian' => 'pengujian',
            'umd' => 'pembayaran',
            'outsource' => 'pembayaran',
            'non-outsource' => 'pembayaran',
            'payment-request' => 'pembayaran',
        ];
    }
}
