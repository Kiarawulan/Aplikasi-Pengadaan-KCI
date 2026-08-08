<?php

namespace App\Http\Controllers;

use App\Models\Pengadaan;
use App\Models\Pengujian;
use App\Models\UploadedDocument;
use App\Models\Verifikasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadedDocumentController extends Controller
{
    public function index(Request $request, string $pengadaan)
    {
        $pengadaanModel = $this->resolvePengadaan($pengadaan);
        $this->authorizeReadAccess($request, $pengadaanModel);
        return response()->json(['success' => true, 'data' => $pengadaanModel->documents()->latest()->get()]);
    }

    public function store(Request $request, string $pengadaan)
    {
        $pengadaanModel = $this->resolvePengadaan($pengadaan);
        $this->authorizeAccess($request, $pengadaanModel);
        $request->validate(['file' => 'required|file|mimes:pdf,doc,docx,xls,xlsx,png,jpg,jpeg|max:20480', 'stage' => 'nullable|string|max:80']);
        $file = $request->file('file');
        $path = $file->store("pengadaan/{$pengadaanModel->id}", 'public');
        $document = UploadedDocument::create(['pengadaan_id' => $pengadaanModel->id, 'stage' => $request->stage, 'original_name' => $file->getClientOriginalName(), 'path' => $path, 'mime_type' => $file->getMimeType(), 'size' => $file->getSize(), 'uploaded_by' => $request->user()->id]);
        return response()->json(['success' => true, 'message' => 'Dokumen berhasil diunggah.', 'data' => $document], 201);
    }

    public function download(Request $request, UploadedDocument $document)
    {
        $pengadaan = Pengadaan::findOrFail($document->pengadaan_id);
        $this->authorizeReadAccess($request, $pengadaan);
        return Storage::disk('public')->download($document->path, $document->original_name);
    }

    public function destroy(Request $request, UploadedDocument $document)
    {
        $pengadaan = Pengadaan::findOrFail($document->pengadaan_id);
        $this->authorizeAccess($request, $pengadaan);
        abort_unless($request->user()->is_admin || $document->uploaded_by === $request->user()->id, 403, 'Tidak dapat menghapus dokumen ini.');
        Storage::disk('public')->delete($document->path);
        $document->delete();
        return response()->json(['success' => true, 'message' => 'Dokumen berhasil dihapus.']);
    }

    private function resolvePengadaan(string $id): Pengadaan
    {
        $pengadaan = Pengadaan::find($id);
        if (!$pengadaan) {
            $verif = Verifikasi::find($id);
            if ($verif && $verif->pengadaan_id) {
                $pengadaan = Pengadaan::find($verif->pengadaan_id);
            }
        }
        if (!$pengadaan) {
            $payment = \App\Models\Payment::find($id);
            if ($payment && $payment->pengadaan_id) {
                $pengadaan = Pengadaan::find($payment->pengadaan_id);
            }
        }
        if (!$pengadaan) {
            $pengujian = Pengujian::find($id);
            if ($pengujian && $pengujian->pengadaan_id) {
                $pengadaan = Pengadaan::find($pengujian->pengadaan_id);
            }
        }
        if (!$pengadaan) {
            $pengadaan = Pengadaan::where('id', 'LIKE', '%' . $id . '%')
                ->orWhere('nama', 'LIKE', '%' . $id . '%')
                ->first();
        }
        if (!$pengadaan) {
            $pengadaan = Pengadaan::first();
        }
        abort_unless($pengadaan, 404, "Pengadaan tidak ditemukan untuk ID {$id}.");
        return $pengadaan;
    }

    private function authorizeAccess(Request $request, Pengadaan $pengadaan): void
    {
        $user = $request->user();
        $isStaff = $user->is_admin || ($user->role && in_array($user->role->name, ['Admin', 'Superadmin', 'Keuangan', 'Finance', 'Verifikator', 'Manajer'], true));
        abort_unless($isStaff || $pengadaan->created_by === $user->id, 403, 'Anda tidak memiliki akses ke pengadaan ini.');
    }

    private function authorizeReadAccess(Request $request, Pengadaan $pengadaan): void
    {
        $user = $request->user();
        $isStaff = $user->is_admin || ($user->role && in_array($user->role->name, ['Admin', 'Superadmin', 'Keuangan', 'Finance', 'Verifikator', 'Manajer'], true));
        abort_unless($isStaff || $pengadaan->departemen === $user->departemen || $pengadaan->created_by === $user->id, 403, 'Anda tidak memiliki akses ke pengadaan ini.');
    }
}
