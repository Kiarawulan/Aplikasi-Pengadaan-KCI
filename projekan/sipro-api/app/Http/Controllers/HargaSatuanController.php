<?php

namespace App\Http\Controllers;

use App\Models\HargaSatuan;
use Illuminate\Http\Request;

class HargaSatuanController extends Controller
{
    public function index()
    {
        return response()->json(HargaSatuan::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'namaBarang' => 'required|string',
            'satuan'     => 'required|string',
            'harga'      => 'required|numeric',
            'kategori'   => 'required|string',
            'tahun'      => 'required|string',
        ]);

        $id = 'HS-' . str_pad(HargaSatuan::count() + 1, 3, '0', STR_PAD_LEFT);

        $hs = HargaSatuan::create([
            'id'          => $id,
            'nama_barang' => $request->namaBarang,
            'satuan'      => $request->satuan,
            'harga'       => $request->harga,
            'kategori'    => $request->kategori,
            'tahun'       => $request->tahun,
        ]);

        return response()->json($hs, 201);
    }

    public function show(HargaSatuan $hargaSatuan)
    {
        return response()->json($hargaSatuan);
    }

    public function update(Request $request, HargaSatuan $hargaSatuan)
    {
        $hargaSatuan->update([
            'nama_barang' => $request->input('namaBarang', $hargaSatuan->nama_barang),
            'satuan'      => $request->input('satuan', $hargaSatuan->satuan),
            'harga'       => $request->input('harga', $hargaSatuan->harga),
            'kategori'    => $request->input('kategori', $hargaSatuan->kategori),
            'tahun'       => $request->input('tahun', $hargaSatuan->tahun),
        ]);

        return response()->json($hargaSatuan);
    }

    public function destroy(HargaSatuan $hargaSatuan)
    {
        $hargaSatuan->delete();
        return response()->json(['message' => 'Harga satuan berhasil dihapus']);
    }
}
