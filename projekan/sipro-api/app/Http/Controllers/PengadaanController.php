<?php

namespace App\Http\Controllers;

use App\Models\Pengadaan;
use App\Models\PengadaanCompletedStep;
use App\Models\Verifikasi;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PengadaanController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $query = Pengadaan::with(['completedSteps', 'verifikasiRecords']);

        // Non-admin filter by creator / department
        if (! $user->is_admin) {
            $query->where(function ($q) use ($user) {
                $q->where('created_by', $user->id)
                  ->orWhere('departemen', $user->departemen);
            });
        }

        $pengadaan = $query->get()->map(function ($p) {
            return [
                'id'             => $p->id,
                'nama'           => $p->nama,
                'departemen'     => $p->departemen,
                'nominal'        => $p->nominal,
                'tanggal'        => $p->tanggal,
                'status'         => $p->status,
                'currentStep'    => $p->current_step,
                'createdBy'      => $p->created_by,
                'completedSteps' => $p->completedSteps->pluck('step_id'),
                'formData'       => $p->form_data ?? [],
            ];
        });

        return response()->json($pengadaan);
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'nama'       => 'required|string',
                'departemen' => 'required|string',
                'nominal'    => 'nullable|string',
                'flow'       => 'nullable|string',
            ]);

            $flow = $request->flow ?? 'pd';
            $status = 'Menunggu Verifikasi Admin';

            $prefix = $flow === 'pr' ? 'PR-' : 'PD-';
            $last = Pengadaan::where('id', 'regexp', '^' . $prefix . '[0-9]+$')->orderBy('id', 'desc')->first();
            $next = $last ? intval(substr($last->id, 3)) + 1 : 1;
            $id = $prefix . str_pad($next, 3, '0', STR_PAD_LEFT);

            $pengadaan = Pengadaan::create([
                'id'           => $id,
                'nama'         => $request->nama,
                'departemen'   => $request->departemen,
                'nominal'      => $request->nominal ?? '—',
                'tanggal'      => now()->toDateString(),
                'status'       => $status,
                'current_step' => $flow === 'pr' ? 'npp' : 'memo-internal',
                'created_by'   => $request->user()->id,
                'form_data'    => $request->form_data,
            ]);

            if ($flow === 'pd' || $flow === 'pr') {
                // Auto create verifikasi record
                $lastVerif = Verifikasi::where('id', 'regexp', '^VR-[0-9]+$')->orderBy('id', 'desc')->first();
                $nextVerif = $lastVerif ? intval(substr($lastVerif->id, 3)) + 1 : Verifikasi::count() + 1;
                $verifId = 'VR-' . str_pad($nextVerif, 3, '0', STR_PAD_LEFT);
                Verifikasi::create([
                    'id'             => $verifId,
                    'pengadaan_id'   => $pengadaan->id,
                    'pengadaan_nama' => $pengadaan->nama,
                    'departemen'     => $pengadaan->departemen,
                    'nominal'        => $pengadaan->nominal,
                    'tipe'           => $flow === 'pr' ? 'purchase-requisition' : 'park-dokumen',
                    'submit_by'      => $request->user()->name,
                    'submit_at'      => now(),
                    'status'         => 'pending',
                ]);
            }

            return response()->json($pengadaan, 201);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage(), 'trace' => $e->getTraceAsString()], 500);
        }
    }

    public function show(Request $request, Pengadaan $pengadaan)
    {
        $user = $request->user();
        if (!$user->is_admin && $user->departemen !== $pengadaan->departemen && $pengadaan->created_by !== $user->id) {
            return response()->json(['message' => 'Unauthorized access to this division data.'], 403);
        }

        $pengadaan->load(['completedSteps', 'verifikasiRecords']);

        return response()->json([
            'id'             => $pengadaan->id,
            'nama'           => $pengadaan->nama,
            'departemen'     => $pengadaan->departemen,
            'nominal'        => $pengadaan->nominal,
            'tanggal'        => $pengadaan->tanggal,
            'status'         => $pengadaan->status,
            'currentStep'    => $pengadaan->current_step,
            'createdBy'      => $pengadaan->created_by,
            'completedSteps' => $pengadaan->completedSteps->pluck('step_id'),
            'verifikasi'     => $pengadaan->verifikasiRecords,
            'formData'       => $pengadaan->form_data ?? [],
        ]);
    }

    public function updateFormData(Request $request, Pengadaan $pengadaan)
    {
        $user = $request->user();
        if (!$user->is_admin && $user->departemen !== $pengadaan->departemen && $pengadaan->created_by !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $pengadaan->form_data = $request->all();
        $pengadaan->save();

        return response()->json(['message' => 'Form data updated']);
    }

    public function submitStep(Request $request, Pengadaan $pengadaan)
    {
        $user = $request->user();
        if (!$user->is_admin && $user->departemen !== $pengadaan->departemen && $pengadaan->created_by !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $request->validate([
            'stepId' => 'required|string',
            'tipe'   => 'nullable|string',
        ]);

        $stepId = $request->stepId;
        $tipe = $request->tipe ?? $stepId;

        // Check existing pending verif for this step
        $existing = Verifikasi::where('pengadaan_id', $pengadaan->id)
            ->where('tipe', $tipe)
            ->where('status', 'pending')
            ->first();

        if ($existing) {
            return response()->json([
                'message' => 'Sudah ada pengajuan verifikasi yang masih pending untuk tahap ini.',
                'verifikasi' => $existing,
            ], 422);
        }

        // Create new verif record
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

        $pengadaan->status = 'Menunggu Verifikasi Admin';
        $pengadaan->save();

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
                'canProceed'    => true,
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
        if (!$user->is_admin && $user->departemen !== $pengadaan->departemen && $pengadaan->created_by !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $request->validate([
            'nama'        => 'sometimes|string',
            'departemen'  => 'sometimes|string',
            'nominal'     => 'sometimes|string',
            'currentStep' => 'sometimes|string',
            'status'      => 'sometimes|string',
        ]);

        if ($request->has('nama')) $pengadaan->nama = $request->nama;
        if ($request->has('departemen')) $pengadaan->departemen = $request->departemen;
        if ($request->has('nominal')) $pengadaan->nominal = $request->nominal;
        if ($request->has('currentStep')) {
            $pengadaan->current_step = $request->currentStep;
        }
        if ($request->has('completedStepId')) {
            // Record completed step
            PengadaanCompletedStep::firstOrCreate([
                'pengadaan_id' => $pengadaan->id,
                'step_id'      => $request->completedStepId,
            ], [
                'completed_at' => now(),
            ]);
        }
        if ($request->has('status')) $pengadaan->status = $request->status;

        $pengadaan->save();

        return response()->json($pengadaan);
    }

    public function destroy(Request $request, Pengadaan $pengadaan)
    {
        $user = $request->user();
        if (!$user->is_admin && $user->departemen !== $pengadaan->departemen && $pengadaan->created_by !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $pengadaan->delete();
        return response()->json(['message' => 'Pengadaan berhasil dihapus']);
    }
}
