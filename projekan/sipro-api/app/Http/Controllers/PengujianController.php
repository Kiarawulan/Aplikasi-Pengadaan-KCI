<?php

namespace App\Http\Controllers;

use App\Models\Pengujian;
use Illuminate\Http\Request;

class PengujianController extends Controller
{
    public function index()
    {
        return response()->json(Pengujian::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama'       => 'required|string',
            'pemohon'    => 'required|string',
            'departemen' => 'required|string',
            'tanggal'    => 'required|string',
            'catatan'    => 'nullable|string',
        ]);

        $id = 'PUJ-' . str_pad(Pengujian::count() + 1, 3, '0', STR_PAD_LEFT);

        $puj = Pengujian::create([
            'id'         => $id,
            'nama'       => $request->nama,
            'pemohon'    => $request->pemohon,
            'departemen' => $request->departemen,
            'tanggal'    => $request->tanggal,
            'status'     => 'pending',
            'catatan'    => $request->catatan,
        ]);

        return response()->json($puj, 201);
    }

    public function show(Pengujian $pengujian)
    {
        return response()->json($pengujian);
    }

    public function update(Request $request, Pengujian $pengujian)
    {
        $pengujian->update($request->all());
        return response()->json($pengujian);
    }

    public function destroy(Pengujian $pengujian)
    {
        $pengujian->delete();
        return response()->json(['message' => 'Data pengujian berhasil dihapus']);
    }

    public function advanceStatus(Request $request, Pengujian $pengujian)
    {
        $request->validate([
            'status' => 'required|in:pending,proses,selesai,ditolak',
        ]);

        $pengujian->status = $request->status;
        $pengujian->save();

        return response()->json($pengujian);
    }
}
