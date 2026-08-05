<?php

namespace App\Http\Controllers;

use App\Models\Pengadaan;
use App\Models\Pengujian;
use App\Models\ProcessHistory;
use App\Models\Verifikasi;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PengujianController extends Controller
{
    public function index(Request $request)
    {
        $query = Pengujian::query();
        if (! $request->user()->is_admin) $query->where('requested_by', $request->user()->id);
        return response()->json($query->latest()->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate(['pengadaan_id' => 'nullable|exists:pengadaan,id', 'nama' => 'nullable|string|max:255', 'tanggal' => 'nullable|date', 'catatan' => 'nullable|string', 'details' => 'nullable|array']);
        $pengadaan = isset($data['pengadaan_id'])
            ? Pengadaan::findOrFail($data['pengadaan_id'])
            : Pengadaan::where('nama', $data['nama'] ?? '')->where('created_by', $request->user()->id)->latest()->first();
        abort_unless($pengadaan, 422, 'Pengadaan untuk request pengujian tidak ditemukan.');
        abort_unless($request->user()->is_admin || $pengadaan->created_by === $request->user()->id, 403, 'Anda tidak memiliki akses ke pengadaan ini.');
        if ($pengadaan->current_step !== 'pengujian') return response()->json(['success' => false, 'message' => 'Request pengujian belum dapat dibuat pada tahapan ini.'], 422);
        if (Pengujian::where('pengadaan_id', $pengadaan->id)->exists()) return response()->json(['success' => false, 'message' => 'Pengadaan ini sudah memiliki proses pengujian aktif.'], 422);

        $pengujian = Pengujian::create(['id' => 'PUJ-' . strtoupper(Str::random(10)), 'pengadaan_id' => $pengadaan->id, 'nama' => $pengadaan->nama, 'pemohon' => $request->user()->name, 'requested_by' => $request->user()->id, 'departemen' => $pengadaan->departemen, 'tanggal' => $data['tanggal'] ?? now()->toDateString(), 'status' => 'waiting_approval', 'catatan' => $data['catatan'] ?? null, 'details' => $data['details'] ?? []]);
        $verif = Verifikasi::create(['id' => 'VR-PUJ-' . $pengujian->id, 'pengadaan_id' => $pengadaan->id, 'pengadaan_nama' => $pengadaan->nama, 'departemen' => $pengadaan->departemen, 'nominal' => $pengadaan->nominal, 'tipe' => 'pengujian', 'submit_by' => $request->user()->name, 'submit_at' => now(), 'status' => 'pending']);
        $pengadaan->status = 'waiting_approval';
        $pengadaan->save();
        ProcessHistory::create(['pengadaan_id' => $pengadaan->id, 'verifikasi_id' => $verif->id, 'step_id' => 'pengujian', 'actor_id' => $request->user()->id, 'actor_name' => $request->user()->name, 'action' => 'submitted', 'from_status' => 'on_progress', 'to_status' => 'waiting_approval']);
        return response()->json($pengujian, 201);
    }

    public function show(Request $request, Pengujian $pengujian)
    {
        abort_unless($request->user()->is_admin || $pengujian->requested_by === $request->user()->id, 403, 'Anda tidak memiliki akses ke pengujian ini.');
        return response()->json($pengujian);
    }

    public function update(Request $request, Pengujian $pengujian)
    {
        $data = $request->validate(['scheduled_at' => 'nullable|date', 'catatan' => 'nullable|string', 'details' => 'nullable|array']);
        $pengujian->fill($data);
        if (array_key_exists('scheduled_at', $data)) $pengujian->scheduled_by = $request->user()->id;
        $pengujian->save();
        return response()->json($pengujian);
    }

    public function destroy(Pengujian $pengujian)
    {
        if (! in_array($pengujian->status, ['draft', 'revision_required', 'rejected'], true)) return response()->json(['success' => false, 'message' => 'Pengujian aktif tidak dapat dihapus.'], 422);
        $pengujian->delete();
        return response()->json(['success' => true, 'message' => 'Data pengujian berhasil dihapus.']);
    }

    public function advanceStatus(Request $request, Pengujian $pengujian)
    {
        $data = $request->validate(['status' => 'required|in:approved,on_progress,completed,rejected,revision_required', 'catatan' => 'nullable|string']);
        $from = $pengujian->status;
        $pengujian->status = $data['status'];
        if (isset($data['catatan'])) $pengujian->catatan = $data['catatan'];
        $pengujian->save();
        $pengadaan = Pengadaan::findOrFail($pengujian->pengadaan_id);
        if ($data['status'] === 'completed') { $pengadaan->current_step = 'pembayaran'; $pengadaan->status = 'on_progress'; $pengadaan->save(); }
        if ($data['status'] === 'revision_required') { $pengadaan->status = 'revision_required'; $pengadaan->save(); }
        ProcessHistory::create(['pengadaan_id' => $pengadaan->id, 'step_id' => 'pengujian', 'actor_id' => $request->user()->id, 'actor_name' => $request->user()->name, 'action' => 'processed', 'from_status' => $from, 'to_status' => $data['status'], 'note' => $data['catatan'] ?? null]);
        return response()->json($pengujian);
    }
}
