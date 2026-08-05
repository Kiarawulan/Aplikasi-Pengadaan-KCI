<?php

namespace App\Http\Controllers;

use App\Models\Rup;
use Illuminate\Http\Request;

class RupController extends Controller
{
    public function index()
    {
        return response()->json(Rup::latest()->get());
    }

    public function show(Rup $rup)
    {
        return response()->json($rup);
    }

    public function store(Request $request)
    {
        $request->validate([
            'id' => 'required|string',
            'nama' => 'required|string',
            'jenis' => 'nullable|string',
            'metode' => 'nullable|string',
            'nilai' => 'nullable|string',
            'departemen' => 'nullable|string',
            'createdBy' => 'nullable|string',
            'status' => 'nullable|string',
            'progress' => 'nullable|string',
        ]);

        $rup = Rup::create([
            'id' => $request->id,
            'nama' => $request->nama,
            'jenis' => $request->jenis ?? 'Barang',
            'metode' => $request->metode ?? 'Tender',
            'nilai' => $request->nilai ?? 'Rp 0',
            'departemen' => $request->departemen ?? 'Umum',
            'created_by' => $request->createdBy ?? 'user',
            'status' => $request->status ?? 'pending',
            'progress' => $request->progress ?? '0/14',
            'details' => $request->details ?? $request->all(),
            'catatan_admin' => $request->catatan_admin ?? null,
            'created_at' => $request->createdAt ?? now(),
        ]);

        return response()->json($rup, 201);
    }

    public function update(Request $request, Rup $rup)
    {
        if ($request->has('nama')) $rup->nama = $request->nama;
        if ($request->has('jenis')) $rup->jenis = $request->jenis;
        if ($request->has('metode')) $rup->metode = $request->metode;
        if ($request->has('nilai')) $rup->nilai = $request->nilai;
        if ($request->has('departemen')) $rup->departemen = $request->departemen;
        if ($request->has('status')) $rup->status = $request->status;
        if ($request->has('progress')) $rup->progress = $request->progress;
        if ($request->has('catatan_admin')) $rup->catatan_admin = $request->catatan_admin;
        if ($request->has('details')) {
            $rup->details = array_merge((array)$rup->details, (array)$request->details);
        } else {
            $rup->details = array_merge((array)$rup->details, $request->except(['_method', '_token']));
        }

        $rup->save();
        return response()->json($rup);
    }

    public function destroy(Rup $rup)
    {
        $rup->delete();
        return response()->json(['message' => 'RUP berhasil dihapus']);
    }
}
