<?php

namespace App\Http\Controllers;

use App\Models\TemplateDokumen;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TemplateDokumenController extends Controller
{
    public function index()
    {
        return response()->json(TemplateDokumen::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama'      => 'required|string',
            'kategori'  => 'required|string',
            'tipe'      => 'required|string',
            'ukuran'    => 'nullable|string',
            'deskripsi' => 'nullable|string',
        ]);

        $id = 'TPL-' . str_pad(TemplateDokumen::count() + 1, 3, '0', STR_PAD_LEFT);

        $template = TemplateDokumen::create([
            'id'          => $id,
            'nama'        => $request->nama,
            'kategori'    => $request->kategori,
            'tipe'        => $request->tipe,
            'ukuran'      => $request->ukuran ?? '—',
            'deskripsi'   => $request->deskripsi,
            'uploaded_by' => $request->user()->name,
            'uploaded_at' => now()->toDateString(),
        ]);

        return response()->json($template, 201);
    }

    public function show(TemplateDokumen $template)
    {
        return response()->json($template);
    }

    public function update(Request $request, TemplateDokumen $template)
    {
        $request->validate([
            'nama'      => 'sometimes|string',
            'kategori'  => 'sometimes|string',
            'tipe'      => 'sometimes|string',
            'ukuran'    => 'sometimes|string',
            'deskripsi' => 'nullable|string',
        ]);

        $template->update($request->all());
        return response()->json($template);
    }

    public function destroy(TemplateDokumen $template)
    {
        $template->delete();
        return response()->json(['message' => 'Template berhasil dihapus']);
    }
}
