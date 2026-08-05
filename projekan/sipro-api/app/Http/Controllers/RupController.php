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

    public function store(Request $request)
    {
        $request->validate([
            'id' => 'required|string',
            'nama' => 'required|string',
            'jenis' => 'required|string',
            'metode' => 'required|string',
            'nilai' => 'required|string',
            'departemen' => 'required|string',
            'createdBy' => 'required|string',
            'status' => 'required|string',
            'progress' => 'required|string',
            'createdAt' => 'required|string',
        ]);

        $rup = Rup::create([
            'id' => $request->id,
            'nama' => $request->nama,
            'jenis' => $request->jenis,
            'metode' => $request->metode,
            'nilai' => $request->nilai,
            'departemen' => $request->departemen,
            'created_by' => $request->createdBy,
            'status' => $request->status,
            'progress' => $request->progress,
            'created_at' => $request->createdAt,
        ]);

        return response()->json($rup, 201);
    }

    public function update(Request $request, Rup $rup)
    {
        $request->validate([
            'nama' => 'sometimes|string',
            'jenis' => 'sometimes|string',
            'metode' => 'sometimes|string',
            'nilai' => 'sometimes|string',
            'departemen' => 'sometimes|string',
            'status' => 'sometimes|string',
            'progress' => 'sometimes|string',
        ]);

        $rup->fill($request->only([
            'nama', 'jenis', 'metode', 'nilai', 'departemen', 'status', 'progress',
        ]));
        $rup->save();

        return response()->json($rup);
    }

    public function destroy(Rup $rup)
    {
        $rup->delete();

        return response()->json(['message' => 'RUP berhasil dihapus']);
    }
}
