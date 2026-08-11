<?php

namespace App\Http\Controllers;

use App\Models\Vendor;
use Illuminate\Http\Request;

class VendorController extends Controller
{
    public function index()
    {
        return response()->json(Vendor::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama'         => 'required|string',
            'npwp'         => 'nullable|string',
            'alamat'       => 'nullable|string',
            'kontakPerson' => 'nullable|string',
            'telepon'      => 'nullable|string',
            'email'        => 'nullable|email',
            'kategori'     => 'required|string',
            'status'       => 'required|in:aktif,blacklist,non-aktif',
        ]);

        $trimmedName = trim($request->nama);
        if (Vendor::whereRaw('LOWER(nama) = ?', [strtolower($trimmedName)])->exists()) {
            return response()->json(['message' => 'Vendor dengan nama tersebut sudah terdaftar di Master Data.'], 422);
        }

        $id = 'VND-' . str_pad(Vendor::count() + 1, 3, '0', STR_PAD_LEFT);

        $vendor = Vendor::create([
            'id'              => $id,
            'nama'            => $trimmedName,
            'npwp'            => $request->npwp,
            'alamat'          => $request->alamat,
            'kontak_person'   => $request->kontakPerson,
            'telepon'         => $request->telepon,
            'email'           => $request->email,
            'kategori'        => $request->kategori,
            'status'          => $request->status,
            'created_at_date' => now()->toDateString(),
        ]);

        return response()->json($vendor, 201);
    }

    public function show(Vendor $vendor)
    {
        return response()->json($vendor);
    }

    public function update(Request $request, Vendor $vendor)
    {
        if ($request->has('nama')) {
            $trimmedName = trim($request->nama);
            if (Vendor::where('id', '!=', $vendor->id)->whereRaw('LOWER(nama) = ?', [strtolower($trimmedName)])->exists()) {
                return response()->json(['message' => 'Vendor dengan nama tersebut sudah terdaftar di Master Data.'], 422);
            }
        }

        $vendor->update([
            'nama'          => $request->input('nama', $vendor->nama),
            'npwp'          => $request->input('npwp', $vendor->npwp),
            'alamat'        => $request->input('alamat', $vendor->alamat),
            'kontak_person' => $request->input('kontakPerson', $vendor->kontak_person),
            'telepon'       => $request->input('telepon', $vendor->telepon),
            'email'           => $request->input('email', $vendor->email),
            'kategori'      => $request->input('kategori', $vendor->kategori),
            'status'        => $request->input('status', $vendor->status),
        ]);

        return response()->json($vendor);
    }

    public function destroy(Vendor $vendor)
    {
        $vendor->delete();
        return response()->json(['message' => 'Vendor berhasil dihapus']);
    }
}
