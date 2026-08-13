<?php

namespace App\Http\Controllers;

use App\Models\Pengadaan;
use App\Models\Pengujian;
use App\Models\Rup;
use App\Models\UploadedDocument;
use App\Models\Verifikasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadedDocumentController extends Controller
{
    public function rupIndex(Request $request)
    {
        abort_unless($request->user()->is_admin, 403, 'Hanya admin yang dapat melihat seluruh RUP signed.');
        return response()->json(['success' => true, 'data' => UploadedDocument::where('stage', 'rup-signed')->latest()->get()]);
    }

    public function rupStore(Request $request, Rup $rup)
    {
        $this->authorizeRupAccess($request, $rup);
        $request->validate(['file' => 'required|file|mimes:pdf,doc,docx|max:20480']);
        $file = $request->file('file');
        $path = $file->store("rup/{$rup->id}", 'public');
        $document = UploadedDocument::create([
            'pengadaan_id' => $rup->id,
            'stage' => 'rup-signed',
            'original_name' => $file->getClientOriginalName(),
            'path' => $path,
            'mime_type' => $file->getMimeType(),
            'size' => $file->getSize(),
            'uploaded_by' => $request->user()->id,
        ]);
        return response()->json(['success' => true, 'message' => 'RUP signed berhasil diunggah.', 'data' => $document], 201);
    }

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
        $fileName = $file->getClientOriginalName();
        $document = UploadedDocument::create(['pengadaan_id' => $pengadaanModel->id, 'stage' => $request->stage, 'original_name' => $fileName, 'path' => $path, 'mime_type' => $file->getMimeType(), 'size' => $file->getSize(), 'uploaded_by' => $request->user()->id]);

        // Automatically sync form_data so User & Admin views update seamlessly
        $formData = $pengadaanModel->form_data ?? [];
        if (in_array($request->stage, ['pelunasan-proof', 'pengembalian-dana', 'bukti-pengembalian'], true)) {
            if (!isset($formData['pengembalian-dana']) || !is_array($formData['pengembalian-dana'])) $formData['pengembalian-dana'] = [];
            $formData['pengembalian-dana']['filePengembalian'] = $fileName;
            $formData['pengembalian-dana']['fileBuktiTransfer'] = $fileName;
            $formData['pengembalian-dana']['fileBuktiPelunasan'] = $fileName;

            if (!isset($formData['umdData']) || !is_array($formData['umdData'])) $formData['umdData'] = [];
            $formData['umdData']['fileBuktiTransfer'] = $fileName;
            $formData['umdData']['fileBuktiPelunasan'] = $fileName;
            $formData['umdData']['filePengembalian'] = $fileName;

            if (!isset($formData['pelunasan']) || !is_array($formData['pelunasan'])) $formData['pelunasan'] = [];
            $formData['pelunasan']['filePelunasan'] = $fileName;
            $formData['pelunasan']['filePengembalian'] = $fileName;
            $formData['pelunasan']['fileBuktiTransfer'] = $fileName;

            $formData['fileBuktiTransfer'] = $fileName;
            $formData['filePengembalian'] = $fileName;
            $formData['fileBuktiPelunasan'] = $fileName;
            $pengadaanModel->form_data = $formData;
            $pengadaanModel->save();
        } elseif ($request->stage === 'bahp-signed') {
            if (!isset($formData['pengujian']) || !is_array($formData['pengujian'])) $formData['pengujian'] = [];
            $formData['pengujian']['fileBahpSigned'] = $fileName;
            $formData['pengujian']['fileBahp'] = $fileName;
            $formData['fileBahp'] = $fileName;
            $pengadaanModel->form_data = $formData;
            $pengadaanModel->save();

            if ($pengujian = Pengujian::where('pengadaan_id', $pengadaanModel->id)->first()) {
                $pengujian->bahp_path = $path;
                $pengujian->save();
            }
        }

        return response()->json(['success' => true, 'message' => 'Dokumen berhasil diunggah.', 'data' => $document], 201);
    }

    public function download(Request $request, UploadedDocument $document)
    {
        if ($document->stage === 'rup-signed') {
            $this->authorizeRupReadAccess($request, Rup::findOrFail($document->pengadaan_id));
        } else {
            $this->authorizeReadAccess($request, Pengadaan::findOrFail($document->pengadaan_id));
        }
        return Storage::disk('public')->download($document->path, $document->original_name);
    }

    public function destroy(Request $request, UploadedDocument $document)
    {
        if ($document->stage === 'rup-signed') {
            $this->authorizeRupAccess($request, Rup::findOrFail($document->pengadaan_id));
        } else {
            $this->authorizeAccess($request, Pengadaan::findOrFail($document->pengadaan_id));
        }
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

    private function authorizeRupAccess(Request $request, Rup $rup): void
    {
        abort_unless($request->user()->is_admin || $rup->created_by === $request->user()->id, 403, 'Anda tidak memiliki akses ke RUP ini.');
    }

    private function authorizeRupReadAccess(Request $request, Rup $rup): void
    {
        abort_unless($request->user()->is_admin || $rup->departemen === $request->user()->departemen || $rup->created_by === $request->user()->id, 403, 'Anda tidak memiliki akses ke RUP ini.');
    }
}
