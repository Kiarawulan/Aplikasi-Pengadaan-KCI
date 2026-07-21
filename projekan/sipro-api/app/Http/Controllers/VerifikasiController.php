<?php

namespace App\Http\Controllers;

use App\Models\Verifikasi;
use App\Models\Pengadaan;
use App\Models\PengadaanCompletedStep;
use App\Models\Rup;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class VerifikasiController extends Controller
{
    public function index(Request $request)
    {
        $query = Verifikasi::query();

        if ($request->has('tipe')) {
            $types = explode(',', $request->tipe);
            $query->whereIn('tipe', $types);
        }

        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        if ($request->has('pengadaan_id')) {
            $query->where('pengadaan_id', $request->pengadaan_id);
        }

        return response()->json($query->latest()->get());
    }

    public function store(Request $request)
    {
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

        $last = Verifikasi::where('id', 'regexp', '^VR-[0-9]+$')->orderBy('id', 'desc')->first();
        $next = $last ? intval(substr($last->id, 3)) + 1 : Verifikasi::count() + 1;
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
        return response()->json($verifikasi);
    }

    public function approve(Request $request, Verifikasi $verifikasi)
    {
        $admin = $request->user();

        $verifikasi->status = 'approved';
        $verifikasi->verified_by = $admin->name;
        $verifikasi->verified_at = now();
        $verifikasi->save();

        // Update corresponding Pengadaan/RUP status
        if ($verifikasi->tipe === 'rup') {
            $rup = Rup::find($verifikasi->pengadaan_id);
            if ($rup) {
                $rup->status = 'approved';
                $rup->save();
            }
        } else {
            $pengadaan = Pengadaan::find($verifikasi->pengadaan_id);
            if ($pengadaan) {
                $pengadaan->status = 'Disetujui Admin (' . strtoupper($verifikasi->tipe) . ')';

                // Mark current step completed
                PengadaanCompletedStep::firstOrCreate([
                    'pengadaan_id' => $pengadaan->id,
                    'step_id'      => $verifikasi->tipe,
                ], [
                    'completed_at' => now(),
                ]);

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

        $admin = $request->user();

        $verifikasi->status = 'revisi';
        $verifikasi->catatan_admin = $request->catatan;
        $verifikasi->verified_by = $admin->name;
        $verifikasi->verified_at = now();
        $verifikasi->save();

        if ($verifikasi->tipe === 'rup') {
            $rup = Rup::find($verifikasi->pengadaan_id);
            if ($rup) {
                $rup->status = 'revisi';
                $rup->save();
            }
        } else {
            $pengadaan = Pengadaan::find($verifikasi->pengadaan_id);
            if ($pengadaan) {
                $pengadaan->status = 'Perlu Revisi';
                $pengadaan->save();
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

        $admin = $request->user();

        $verifikasi->status = 'rejected';
        $verifikasi->catatan_admin = $request->catatan;
        $verifikasi->verified_by = $admin->name;
        $verifikasi->verified_at = now();
        $verifikasi->save();

        if ($verifikasi->tipe === 'rup') {
            $rup = Rup::find($verifikasi->pengadaan_id);
            if ($rup) {
                $rup->status = 'rejected';
                $rup->save();
            }
        } else {
            $pengadaan = Pengadaan::find($verifikasi->pengadaan_id);
            if ($pengadaan) {
                $pengadaan->status = 'Ditolak Admin';
                $pengadaan->save();
            }
        }

        return response()->json([
            'message'    => 'Pengajuan berhasil ditolak.',
            'verifikasi' => $verifikasi,
        ]);
    }
}
