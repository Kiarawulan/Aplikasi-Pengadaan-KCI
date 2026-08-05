<?php

namespace App\Http\Controllers;

use App\Models\Pengadaan;
use App\Models\PengadaanCompletedStep;
use App\Models\Verifikasi;
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
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PengadaanController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $query = Pengadaan::with(['completedSteps', 'verifikasiRecords']);

        if ($request->filled('flow')) {
            abort_unless(in_array($request->query('flow'), ['pr', 'pd'], true), 422, 'Jenis alur pengadaan tidak valid.');
            $query->where('flow_type', $request->query('flow'));
        }

        // User hanya boleh membaca record yang dibuatnya sendiri.
        if (! $user->is_admin) {
            $query->where('created_by', $user->id);
        }

        $pengadaan = $query->get()->map(fn (Pengadaan $item) => $this->present($item));

        return response()->json($pengadaan);
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'nama'       => 'required|string',
                'departemen' => 'nullable|string',
                'nominal'    => 'nullable|string',
                'flow'       => 'required|in:pr,pd',
            ]);

            $flow = $request->flow;
            $status = 'draft';

            $prefix = $flow === 'pr' ? 'PR-' : 'PD-';
            // LIKE keeps generated ids portable for both MySQL production and
            // SQLite-based authorization tests.
            $last = Pengadaan::where('id', 'like', $prefix . '%')->orderBy('id', 'desc')->first();
            $next = $last ? intval(substr($last->id, 3)) + 1 : 1;
            $id = $prefix . str_pad($next, 3, '0', STR_PAD_LEFT);

            $formData = $this->normalizeFormData($flow, $request->form_data);
            $pengadaan = Pengadaan::create([
                'id'           => $id,
                'nama'         => $request->nama,
                'flow_type'    => $flow,
                'departemen'   => $request->user()->departemen,
                'nominal'      => $request->nominal ?? '—',
                'tanggal'      => now()->toDateString(),
                'status'       => $status,
                'current_step' => $flow === 'pr' ? 'npp' : 'pengajuan-dana',
                'created_by'   => $request->user()->id,
                'updated_by'   => $request->user()->id,
                'form_data'    => $formData,
            ]);

            return response()->json($this->present($pengadaan), 201);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage(), 'trace' => $e->getTraceAsString()], 500);
        }
    }

    public function show(Request $request, Pengadaan $pengadaan)
    {
        $user = $request->user();
        if (!$user->is_admin && $pengadaan->created_by !== $user->id) {
            return response()->json(['message' => 'Unauthorized access to this division data.'], 403);
        }

        $pengadaan->load(['completedSteps', 'verifikasiRecords']);

        return response()->json($this->present($pengadaan, true));
    }

    private function present(Pengadaan $pengadaan, bool $includeHistory = false): array
    {
        $data = [
            'id'             => $pengadaan->id,
            'flowType'       => $pengadaan->flow_type,
            'nama'           => $pengadaan->nama,
            'departemen'     => $pengadaan->departemen,
            'nominal'        => $pengadaan->nominal,
            'tanggal'        => $pengadaan->tanggal,
            'status'         => $pengadaan->status,
            'currentStep'    => $pengadaan->current_step,
            'createdBy'      => $pengadaan->created_by,
            'completedSteps' => $pengadaan->completedSteps->pluck('step_id'),
            'formData'       => $pengadaan->form_data ?? [],
        ];

        if ($includeHistory) {
            $data['verifikasi'] = $pengadaan->verifikasiRecords;
            $data['history'] = ProcessHistory::where('pengadaan_id', $pengadaan->id)->latest()->get();
        }

        return $data;
    }

    public function updateFormData(Request $request, Pengadaan $pengadaan)
    {
        $user = $request->user();
        if (!$user->is_admin && $pengadaan->created_by !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        if (! $user->is_admin && ! in_array($pengadaan->status, ['draft', 'revision_required', 'rejected'], true)) {
            return response()->json(['message' => 'Pengadaan tidak dapat diubah pada status saat ini.'], 422);
        }
        $pengadaan->form_data = $this->normalizeFormData($pengadaan->flow_type, $request->input('form_data', $request->all()));
        $pengadaan->updated_by = $user->id;
        $pengadaan->save();

        return response()->json(['message' => 'Form data updated']);
    }

public function submitStep(Request $request, Pengadaan $pengadaan)
    {
        $user = $request->user();
        if (!$user->is_admin && $pengadaan->created_by !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $request->validate([
            'stepId' => 'required|string',
            'tipe'   => 'nullable|string',
            'form_data' => 'nullable|array',
        ]);

        $stepId = $request->stepId;
        $tipe = $request->tipe ?? ($pengadaan->flow_type === 'pd' && $stepId === 'pengajuan-dana' ? 'park-dokumen' : $stepId);

        $userSteps = $pengadaan->flow_type === 'pr' ? ['npp', 'pengajuan-dana', 'pengujian', 'pembayaran'] : ['pengajuan-dana', 'pengujian', 'pembayaran'];
        $adminSteps = ['sp3', 'pbj', 'contract'];
        if (! $user->is_admin && ! in_array($stepId, $userSteps, true)) {
            return response()->json(['message' => 'Tahap ini hanya dapat diproses oleh admin.'], 403);
        }
        if ($user->is_admin && ! in_array($stepId, $adminSteps, true)) {
            return response()->json(['message' => 'Admin memproses tahapan internal SP3, PBJ, dan Kontrak melalui antrean ini.'], 422);
        }
        if ($stepId !== $pengadaan->current_step) {
            return response()->json(['message' => 'Tahap belum dapat diproses. Selesaikan tahapan sebelumnya terlebih dahulu.'], 422);
        }

        // Simpan payload yang sama sebelum membuat antrean verifikasi. Dengan
        // begitu admin selalu membaca detail yang identik dengan input user.
        if ($request->has('form_data')) {
            $pengadaan->form_data = $this->normalizeFormData($pengadaan->flow_type, $request->form_data);
            $pengadaan->save();
        }

        // Simpan data form tahapan ke tabel khusus (npp / sp3 / contract)
        $this->persistStepDocument($request, $pengadaan, $stepId);

        // Check existing verif record for this step
        $existing = Verifikasi::where('pengadaan_id', $pengadaan->id)
            ->where('tipe', $tipe)
            ->latest()
            ->first();

        if ($existing) {
            $oldStatus = $existing->status;
            $existing->status = 'pending';
            $existing->catatan_admin = null;
            $existing->submit_by = $request->user()->name;
            $existing->submit_at = now();
            $existing->save();

            $pengadaan->status = 'waiting_approval';
            $pengadaan->submitted_at = now();
            $pengadaan->save();

            $this->recordHistory($request, $pengadaan, $existing, 'resubmitted', $oldStatus, 'pending');

            return response()->json([
                'message' => 'Pengajuan verifikasi berhasil diperbarui.',
                'verifikasi' => $existing,
            ]);
        }

        // Create new verif record if no existing record
        $lastVerif = Verifikasi::where('id', 'regexp', '^VR-[0-9]+$')->orderBy('id', 'desc')->first();
        $nextVerif = $lastVerif ? intval(substr($lastVerif->id, 3)) + 1 : Verifikasi::count() + 1;
        $verifId = 'VR-' . str_pad($nextVerif, 3, '0', STR_PAD_LEFT);
        
        $verif = Verifikasi::create([
            'id'             => $verifId,
            'pengadaan_id'   => $pengadaan->id,
            'pengadaan_nama' => $pengadaan->nama,
            'departemen'     => $pengadaan->departemen,
            'nominal'        => $pengadaan->nominal,
            'tipe'           => $tipe,
            'submit_by'      => $request->user()->name,
            'submit_at'      => now(),
            'status'         => 'pending',
        ]);

        $pengadaan->status = 'waiting_approval';
        $pengadaan->submitted_at = now();
        $pengadaan->save();

        $this->recordHistory($request, $pengadaan, $verif, 'submitted', null, 'pending');

        return response()->json([
            'message'    => 'Pengajuan verifikasi berhasil dikirim. Menunggu persetujuan admin.',
            'verifikasi' => $verif,
            'pengadaan'  => $pengadaan,
        ]);
    }



    public function stepStatus(Request $request, Pengadaan $pengadaan)
    {
        $user = $request->user();
        if (!$user->is_admin && $user->departemen !== $pengadaan->departemen && $pengadaan->created_by !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $stepId = $request->query('stepId', $pengadaan->current_step);

        // Map frontend step IDs to the actual verifikasi 'tipe' values stored in DB
        $tipeMap = [
            'pengajuan-dana' => ['pengajuan-dana', 'park-dokumen', 'purchase-requisition'],
            'npp'            => ['npp'],
            'sp3'            => ['sp3'],
            'rup'            => ['rup'],
            'pembayaran'     => ['pembayaran', 'umd', 'outsource', 'non-outsource', 'payment-request'],
        ];
        $tipes = $tipeMap[$stepId] ?? [$stepId];

        $latestVerif = Verifikasi::where('pengadaan_id', $pengadaan->id)
            ->whereIn('tipe', $tipes)
            ->latest()
            ->first();

        if (! $latestVerif) {
            return response()->json([
                'stepId'        => $stepId,
                'status'        => 'not_submitted',
                'canProceed'    => $stepId === $pengadaan->current_step,
                'message'       => 'Tahap ini belum diajukan verifikasi.',
            ]);
        }

        $canProceed = ($latestVerif->status === 'approved');

        return response()->json([
            'stepId'        => $stepId,
            'status'        => $latestVerif->status,
            'canProceed'    => $canProceed,
            'catatanAdmin'  => $latestVerif->catatan_admin,
            'verifiedBy'    => $latestVerif->verified_by,
            'verifiedAt'    => $latestVerif->verified_at?->toDateTimeString(),
            'verifikasi'    => $latestVerif,
        ]);
    }

    public function update(Request $request, Pengadaan $pengadaan)
    {
        $user = $request->user();
        if (!$user->is_admin && $pengadaan->created_by !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $request->validate([
            'nama'        => 'sometimes|string',
            'departemen'  => 'sometimes|string',
            'nominal'     => 'sometimes|string',
            'currentStep' => 'sometimes|string',
            'status'      => 'sometimes|string',
        ]);

        if (! $user->is_admin && ! in_array($pengadaan->status, ['draft', 'revision_required', 'rejected'], true)) return response()->json(['message' => 'Pengadaan tidak dapat diubah pada status saat ini.'], 422);
        if ($request->has('nama')) $pengadaan->nama = $request->nama;
        if ($request->has('departemen')) $pengadaan->departemen = $request->departemen;
        if ($request->has('nominal')) $pengadaan->nominal = $request->nominal;
        if ($user->is_admin && $request->has('currentStep')) {
            $pengadaan->current_step = $request->currentStep;
        }
        if ($user->is_admin && $request->has('completedStepId')) {
            // Record completed step
            PengadaanCompletedStep::firstOrCreate([
                'pengadaan_id' => $pengadaan->id,
                'step_id'      => $request->completedStepId,
            ], [
                'completed_at' => now(),
            ]);
        }
        if ($request->has('form_data')) $pengadaan->form_data = $this->normalizeFormData($pengadaan->flow_type, $request->form_data);
        if ($user->is_admin && $request->has('status')) $pengadaan->status = $request->status;
        $pengadaan->updated_by = $user->id;

        $pengadaan->save();

        return response()->json($this->present($pengadaan->fresh(['completedSteps', 'verifikasiRecords'])));
    }

    public function destroy(Request $request, Pengadaan $pengadaan)
    {
        $user = $request->user();
        if (!$user->is_admin && $pengadaan->created_by !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        if (! $user->is_admin && ! in_array($pengadaan->status, ['draft', 'revision_required'], true)) {
            return response()->json(['message' => 'Hanya draft atau pengajuan revisi yang dapat dihapus.'], 422);
        }
        // Foreign key lama pada verifikasi sudah dilepas, jadi data terkait harus
        // dibersihkan secara eksplisit agar tidak menjadi data yatim.
        Npp::where('pengadaan_id', $pengadaan->id)->delete();
        Sp3::where('pengadaan_id', $pengadaan->id)->delete();
        Contract::where('pengadaan_id', $pengadaan->id)->delete();
        Pbj::where('pengadaan_id', $pengadaan->id)->delete();
        ParkDocument::where('pengadaan_id', $pengadaan->id)->delete();
        PurchaseRequisition::where('pengadaan_id', $pengadaan->id)->delete();
        Payment::where('pengadaan_id', $pengadaan->id)->delete();
        Pengujian::where('pengadaan_id', $pengadaan->id)->delete();
        UploadedDocument::where('pengadaan_id', $pengadaan->id)->delete();
        ProcessHistory::where('pengadaan_id', $pengadaan->id)->delete();
        Verifikasi::where('pengadaan_id', $pengadaan->id)->delete();
        $pengadaan->delete();
        return response()->json(['message' => 'Pengadaan berhasil dihapus']);
    }

    /**
     * Menyimpan data form tahapan pengadaan (NPP / SP3 / Contract) ke tabel khusus.
     * Dipanggil dari submitStep agar data yang diinput user tersimpan terstruktur
     * di database dan otomatis muncul sebagai record verifikasi di halaman admin.
     */
    protected function persistStepDocument(Request $request, Pengadaan $pengadaan, string $stepId)
    {
// Peta langkah frontend -> tabel/model dokumen
        $map = [
            'npp'            => Npp::class,
            'sp3'            => Sp3::class,
            'contract'       => Contract::class,
            'pbj'            => Pbj::class,
            'pengajuan-dana' => PurchaseRequisition::class,
            'park-dokumen'   => ParkDocument::class,
            'buat-pd'        => ParkDocument::class,
            'detail-pd'      => ParkDocument::class,
        ];

        $modelClass = $map[$stepId] ?? null;
        if ($stepId === 'pengajuan-dana' && $pengadaan->flow_type === 'pd') {
            $modelClass = ParkDocument::class;
        }
        if (! $modelClass) {
            return; // bukan tahapan yang punya tabel khusus
        }

        $formData = $this->normalizeFormData($pengadaan->flow_type, $request->form_data ?? $request->all());
        // Ambil data form yang relevan dari form_data pengadaan bila dikirim terpisah
        if (empty($formData) && $pengadaan->form_data) {
            $formData = $pengadaan->form_data;
        }

        $prefix = match ($stepId) {
            'npp'            => 'NPP',
            'sp3'            => 'SP3',
            'contract'       => 'CTR',
            'pbj'            => 'PBJ',
            'pengajuan-dana' => 'PR',
            'park-dokumen'   => 'PD',
            'buat-pd'        => 'PD',
            'detail-pd'      => 'PD',
            default => 'DOC',
        };
        if ($stepId === 'pengajuan-dana' && $pengadaan->flow_type === 'pd') {
            $prefix = 'PD';
        }

        $document = $modelClass::where('pengadaan_id', $pengadaan->id)->latest()->first();
        if ($document) {
            $id = $document->id;
        } else {
            $last = $modelClass::where('id', 'regexp', '^' . $prefix . '-[0-9]+$')->orderBy('id', 'desc')->first();
            $next = $last ? intval(substr($last->id, strlen($prefix) + 1)) + 1 : 1;
            $id = $prefix . '-' . str_pad($next, 3, '0', STR_PAD_LEFT);
        }

        $subFd = is_array($formData) ? ($formData['buat-npp'] ?? $formData['npp'] ?? $formData['buat-pr'] ?? $formData['sp3'] ?? $formData['buat-pd'] ?? $formData) : [];

        $data = [
            'id'             => $id,
            'pengadaan_id'   => $pengadaan->id,
            'status'         => 'pending',
            'submitted_by'   => $request->user()->name ?? 'User',
            'form_data'      => $formData,
        ];

        if ($stepId === 'npp') {
            $data['no_npp']       = $request->no_npp ?? $subFd['noNpp'] ?? null;
            $data['judul']        = $request->judul ?? $subFd['judulPermohonan'] ?? $subFd['judul'] ?? $pengadaan->nama;
            $data['vendor']       = $request->vendor ?? $subFd['vendor'] ?? null;
            $data['nilai_pr']     = $request->nilai_pr ?? $subFd['nilaiPr'] ?? $pengadaan->nominal;
            $data['coa']          = $request->coa ?? $subFd['coa'] ?? null;
            $data['jenis_barang'] = $request->jenis_barang ?? $subFd['jenisBarang'] ?? null;
            $data['kurs']         = $request->kurs ?? $subFd['kurs'] ?? null;
            $data['metode']       = $request->metode ?? $subFd['metode'] ?? null;
            $data['realisasi']    = $request->realisasi ?? $subFd['realisasi'] ?? null;
            $data['keterangan']   = $request->keterangan ?? $subFd['keterangan'] ?? null;
        } elseif ($stepId === 'sp3') {
            $data['no_sp3']         = $request->no_sp3 ?? $subFd['noSp3'] ?? null;
            $data['judul']          = $request->judul ?? $subFd['judulPermohonan'] ?? $subFd['judul'] ?? $pengadaan->nama;
            $data['departemen']     = $request->departemen ?? $subFd['subUnit'] ?? $subFd['divisi'] ?? $pengadaan->departemen;
            $data['rkap']           = $request->rkap ?? $subFd['nilaiPr'] ?? $subFd['nilaiPermohonan'] ?? $pengadaan->nominal;
            $data['tax']            = $request->tax ?? $subFd['nilaiTax'] ?? null;
            $data['realisasi']      = $request->realisasi ?? $subFd['realisasi'] ?? null;
            $data['vendor']         = $request->vendor ?? $subFd['vendor'] ?? null;
            $data['pr_no']          = $request->pr_no ?? $subFd['noPR'] ?? $subFd['prNo'] ?? null;
            $data['rab_no']         = $request->rab_no ?? $subFd['noRAB'] ?? $subFd['rabNo'] ?? null;
            $data['kak_no']         = $request->kak_no ?? $subFd['noKAK'] ?? $subFd['kakNo'] ?? null;
            $data['mi_no']          = $request->mi_no ?? $subFd['noMI'] ?? $subFd['miNo'] ?? null;
            $data['tipe_pemilihan'] = $request->tipe_pemilihan ?? $subFd['metode'] ?? null;
        } elseif ($stepId === 'contract') {
            $data['no_kontrak']       = $request->no_kontrak ?? $subFd['noKontrak'] ?? null;
            $data['paket']            = $request->paket ?? $subFd['judulPermohonan'] ?? $subFd['paket'] ?? $pengadaan->nama;
            $data['nilai']            = $request->nilai ?? $subFd['nilaiKontrak'] ?? $subFd['nilaiPr'] ?? $pengadaan->nominal;
            $data['departemen']       = $request->departemen ?? $subFd['subUnit'] ?? $subFd['divisi'] ?? $pengadaan->departemen;
            $data['pbj']              = $request->pbj ?? $subFd['pbj'] ?? null;
            $data['vendor']           = $request->vendor ?? $subFd['vendor'] ?? $subFd['pemenang'] ?? null;
            $data['performance_bond'] = $request->performance_bond ?? $subFd['performanceBond'] ?? null;
            $data['start_date']       = $request->start_date ?? $subFd['targetLogistik'] ?? $subFd['startDate'] ?? null;
            $data['end_date']         = $request->end_date ?? $subFd['perkiraanWaktu'] ?? $subFd['endDate'] ?? null;
        } elseif ($stepId === 'pbj') {
            $data['no_pbj']     = $request->no_pbj ?? $subFd['noPbj'] ?? null;
            $data['nama_paket'] = $request->nama_paket ?? $subFd['judulPermohonan'] ?? $subFd['namaPaket'] ?? $pengadaan->nama;
            $data['departemen'] = $request->departemen ?? $subFd['subUnit'] ?? $subFd['divisi'] ?? $pengadaan->departemen;
            $data['nilai']      = $request->nilai ?? $subFd['nilaiPr'] ?? $subFd['nilai'] ?? $pengadaan->nominal;
            $data['metode']     = $request->metode ?? $subFd['metode'] ?? null;
            $data['vendor']     = $request->vendor ?? $subFd['vendor'] ?? $subFd['pemenang'] ?? null;
            $data['tgl_awal']   = $request->tgl_awal ?? $subFd['tglAwal'] ?? $subFd['targetLogistik'] ?? null;
            $data['tgl_akhir']  = $request->tgl_akhir ?? $subFd['tglAkhir'] ?? $subFd['perkiraanWaktu'] ?? null;
            $data['keterangan'] = $request->keterangan ?? $subFd['keterangan'] ?? null;
        } elseif ($stepId === 'pengajuan-dana') {
            $data['no_pr']            = $request->no_pr ?? $subFd['noPr'] ?? null;
            $data['judul']            = $request->judul ?? $subFd['judulPermohonan'] ?? $subFd['judul'] ?? $pengadaan->nama;
            $data['departemen']       = $request->departemen ?? $subFd['subUnit'] ?? $subFd['divisi'] ?? $pengadaan->departemen;
            $data['sub_unit']         = $request->sub_unit ?? $subFd['subUnit'] ?? null;
            $data['jenis_permohonan'] = $request->jenis_permohonan ?? $subFd['jenisPermohonan'] ?? null;
            $data['nominal']          = $request->nominal ?? $subFd['nominalPermohonan'] ?? $subFd['nominal'] ?? $pengadaan->nominal;
} elseif (($stepId === 'pengajuan-dana' && $pengadaan->flow_type === 'pd') || $stepId === 'park-dokumen' || $stepId === 'buat-pd' || $stepId === 'detail-pd') {
            $data['no_dokumen'] = $request->no_dokumen ?? $subFd['noDokumen'] ?? null;
            $data['judul']      = $request->judul ?? $subFd['judulPermohonan'] ?? $subFd['judul'] ?? $pengadaan->nama;
            $data['departemen'] = $request->departemen ?? $subFd['subUnit'] ?? $subFd['divisi'] ?? $pengadaan->departemen;
            $data['kategori']   = $request->kategori ?? $subFd['jenisPermohonan'] ?? $subFd['kategori'] ?? null;
            $data['nominal']    = $request->nominal ?? $subFd['nominalPermohonan'] ?? $subFd['nominal'] ?? $pengadaan->nominal;
        }

        try {
            if ($document) {
                unset($data['id']);
                $document->fill($data);
                $document->save();
            } else {
                $modelClass::create($data);
            }
        } catch (\Throwable $e) {
            \Log::error('Gagal simpan dokumen ' . $stepId . ': ' . $e->getMessage());
        }
    }

    protected function recordHistory(Request $request, Pengadaan $pengadaan, Verifikasi $verifikasi, string $action, ?string $fromStatus, ?string $toStatus): void
    {
        ProcessHistory::create([
            'pengadaan_id'  => $pengadaan->id,
            'verifikasi_id' => $verifikasi->id,
            'step_id'       => $verifikasi->tipe,
            'actor_id'      => $request->user()?->id,
            'actor_name'    => $request->user()?->name,
            'action'        => $action,
            'from_status'   => $fromStatus,
            'to_status'     => $toStatus,
        ]);
    }

    /** Park Document berdiri sendiri dan tidak menyimpan referensi RUP. */
    private function normalizeFormData(string $flowType, mixed $formData): mixed
    {
        if ($flowType !== 'pd' || ! is_array($formData)) {
            return $formData;
        }

        $rupKeys = ['rupids', 'rupid', 'rup_ids', 'rup_id', 'idrup'];
        $normalized = [];
        foreach ($formData as $key => $value) {
            if (in_array(strtolower((string) $key), $rupKeys, true)) {
                continue;
            }
            $normalized[$key] = is_array($value) ? $this->normalizeFormData('pd', $value) : $value;
        }
        return $normalized;
    }
}
