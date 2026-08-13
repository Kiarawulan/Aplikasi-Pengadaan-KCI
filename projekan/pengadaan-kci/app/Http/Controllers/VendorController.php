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

    public function options()
    {
        return response()->json(
            Vendor::query()
                ->whereRaw('LOWER(status) = ?', ['aktif'])
                ->orderBy('nama')
                ->get()
        );
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
            'kategori'     => 'nullable|string',
            'status'       => 'nullable|string',
        ]);

        $trimmedName = trim($request->nama);
        if (Vendor::whereRaw('LOWER(nama) = ?', [strtolower($trimmedName)])->exists()) {
            return response()->json(['message' => 'Vendor dengan nama tersebut sudah terdaftar di Master Data.'], 422);
        }

        $maxId = 0;
        foreach (Vendor::all() as $v) {
            if (preg_match('/VND-(\d+)/i', $v->id, $m)) {
                $num = (int)$m[1];
                if ($num > $maxId) {
                    $maxId = $num;
                }
            }
        }
        $id = 'VND-' . str_pad($maxId + 1, 3, '0', STR_PAD_LEFT);

        $kategori = !empty($request->kategori) ? trim($request->kategori) : 'General';
        $status = !empty($request->status) ? strtolower(trim($request->status)) : 'aktif';
        if (!in_array($status, ['aktif', 'blacklist', 'non-aktif'])) {
            $status = 'aktif';
        }

        $vendor = Vendor::create([
            'id'              => $id,
            'nama'            => $trimmedName,
            'npwp'            => $request->npwp,
            'alamat'          => $request->alamat,
            'kontak_person'   => $request->kontakPerson ?? $request->kontak,
            'telepon'         => $request->telepon,
            'email'           => $request->email,
            'kategori'        => $kategori,
            'status'          => $status,
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
        $request->validate([
            'nama' => 'sometimes|required|string',
            'email' => 'sometimes|nullable|email',
            'status' => 'sometimes|required|in:aktif,non-aktif,blacklist,Aktif,Non-Aktif,Blacklist',
        ]);
        if ($request->has('nama')) {
            $trimmedName = trim($request->nama);
            if (Vendor::where('id', '!=', $vendor->id)->whereRaw('LOWER(nama) = ?', [strtolower($trimmedName)])->exists()) {
                return response()->json(['message' => 'Vendor dengan nama tersebut sudah terdaftar di Master Data.'], 422);
            }
        }

        $kategori = $request->has('kategori') ? (!empty($request->kategori) ? trim($request->kategori) : $vendor->kategori) : $vendor->kategori;
        $status = $request->has('status') ? (!empty($request->status) ? strtolower(trim($request->status)) : $vendor->status) : $vendor->status;

        $vendor->update([
            'nama'          => $request->input('nama', $vendor->nama),
            'npwp'          => $request->input('npwp', $vendor->npwp),
            'alamat'        => $request->input('alamat', $vendor->alamat),
            'kontak_person' => $request->input('kontakPerson', $request->input('kontak', $vendor->kontak_person)),
            'telepon'       => $request->input('telepon', $vendor->telepon),
            'email'         => $request->input('email', $vendor->email),
            'kategori'      => $kategori,
            'status'        => $status,
        ]);

        return response()->json($vendor);
    }

    public function destroy(Vendor $vendor)
    {
        $vendor->delete();
        return response()->json(['message' => 'Vendor berhasil dihapus']);
    }
}
