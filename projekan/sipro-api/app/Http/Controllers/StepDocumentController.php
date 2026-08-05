<?php

namespace App\Http\Controllers;

use App\Models\Npp;
use App\Models\Sp3;
use App\Models\Contract;
use App\Models\Pbj;
use App\Models\ParkDocument;
use App\Models\PurchaseRequisition;
use App\Models\Pengadaan;
use App\Models\Verifikasi;
use Illuminate\Http\Request;

/**
 * Controller untuk menangani dokumen tahapan pengadaan: NPP, SP3, dan Contract/Kontrak.
 * Setiap dokumen disimpan ke tabel khusus di database, dan otomatis membuat
 * record verifikasi (tipe = npp / sp3 / contract) agar muncul di halaman admin.
 */
class StepDocumentController extends Controller
{
protected function modelFor(string $type)
    {
        return match ($type) {
            'npp' => Npp::class,
            'sp3' => Sp3::class,
            'contract' => Contract::class,
            'pbj', 'pbj-barang-jasa' => Pbj::class,
            'park-dokumen', 'park-document' => ParkDocument::class,
            'purchase-requisition', 'pengajuan-dana' => PurchaseRequisition::class,
            default => null,
        };
    }

    protected function prefixFor(string $type)
    {
        return match ($type) {
            'npp' => 'NPP',
            'sp3' => 'SP3',
            'contract' => 'CTR',
            'pbj', 'pbj-barang-jasa' => 'PBJ',
            'park-dokumen', 'park-document' => 'PD',
            'purchase-requisition', 'pengajuan-dana' => 'PR',
            default => 'DOC',
        };
    }

    protected function verifTipeFor(string $type)
    {
        // tipe verifikasi yang sama dengan yang dipakai di dashboard admin
        return $type;
    }

    public function index(Request $request, string $type)
    {
        $modelClass = $this->modelFor($type);
        if (! $modelClass) {
            return response()->json(['message' => 'Jenis dokumen tidak valid.'], 422);
        }
        $query = $modelClass::query();
        if (! $request->user()->is_admin) {
            $query->whereIn('pengadaan_id', Pengadaan::where('created_by', $request->user()->id)->pluck('id'));
        }
        return response()->json($query->latest()->get());
    }

    public function show(Request $request, string $type, string $id)
    {
        $modelClass = $this->modelFor($type);
        if (! $modelClass) {
            return response()->json(['message' => 'Jenis dokumen tidak valid.'], 422);
        }
        $doc = $modelClass::find($id);
        if (! $doc) {
            return response()->json(['message' => 'Dokumen tidak ditemukan.'], 404);
        }
        $this->authorizeDocument($request, $doc);
        return response()->json($doc);
    }

    public function store(Request $request, string $type)
    {
        $modelClass = $this->modelFor($type);
        if (! $modelClass) {
            return response()->json(['message' => 'Jenis dokumen tidak valid.'], 422);
        }

        $pengadaanId = $request->pengadaan_id ?? $request->pengadaanId;
        if (! $request->user()->is_admin) {
            abort_unless(in_array($type, ['npp', 'purchase-requisition', 'pengajuan-dana', 'park-dokumen', 'park-document'], true), 403, 'Tahap ini hanya dapat diproses oleh admin.');
            abort_unless($pengadaanId && Pengadaan::where('id', $pengadaanId)->where('created_by', $request->user()->id)->exists(), 403, 'Anda tidak memiliki akses ke pengadaan ini.');
        }

        $prefix = $this->prefixFor($type);
        $last = $modelClass::where('id', 'regexp', '^' . $prefix . '-[0-9]+$')->orderBy('id', 'desc')->first();
        $next = $last ? intval(substr($last->id, strlen($prefix) + 1)) + 1 : 1;
        $id = $prefix . '-' . str_pad($next, 3, '0', STR_PAD_LEFT);

        $formData = $request->form_data ?? $request->all();

        $data = $this->mapFormToColumns($type, $request, $formData);
        $data['id'] = $id;
        $data['pengadaan_id'] = $request->pengadaan_id ?? $request->pengadaanId ?? null;
        $data['status'] = $request->status ?? 'pending';
        $data['submitted_by'] = $request->submitted_by ?? $request->submittedBy ?? $request->user()->name ?? null;
        $data['form_data'] = $formData;

        $doc = $modelClass::create($data);

        // Auto-create verifikasi record for admin panel
        try {
            $lastVerif = Verifikasi::where('id', 'regexp', '^VR-[0-9]+$')->orderBy('id', 'desc')->first();
            $nextVerif = $lastVerif ? intval(substr($lastVerif->id, 3)) + 1 : Verifikasi::count() + 1;
            $verifId = 'VR-' . str_pad($nextVerif, 3, '0', STR_PAD_LEFT);

            Verifikasi::create([
                'id'             => $verifId,
                'pengadaan_id'   => $data['pengadaan_id'] ?? $id,
                'pengadaan_nama' => $request->judul ?? $request->paket ?? $request->nama ?? $doc->{$this->titleField($type)} ?? ucfirst($type),
                'departemen'     => $request->departemen ?? $request->dept ?? 'Umum',
                'nominal'        => $request->nilai_pr ?? $request->rkap ?? $request->nilai ?? '—',
                'tipe'           => $this->verifTipeFor($type),
                'submit_by'      => $data['submitted_by'] ?? 'User',
                'submit_at'      => now(),
                'status'         => 'pending',
            ]);
        } catch (\Throwable $e) {
            // Jangan gagalkan penyimpanan dokumen jika auto-verifikasi error
            \Log::error('Auto verifikasi gagal: ' . $e->getMessage());
        }

        return response()->json($doc, 201);
    }

    public function update(Request $request, string $type, string $id)
    {
        $modelClass = $this->modelFor($type);
        if (! $modelClass) {
            return response()->json(['message' => 'Jenis dokumen tidak valid.'], 422);
        }
        $doc = $modelClass::find($id);
        if (! $doc) {
            return response()->json(['message' => 'Dokumen tidak ditemukan.'], 404);
        }
        $this->authorizeDocument($request, $doc);
        if (! $request->user()->is_admin) {
            abort_unless(in_array($doc->status, ['draft', 'revisi', 'revision_required', 'rejected'], true), 422, 'Dokumen yang telah dikirim tidak dapat diubah.');
        }

        $doc->fill($request->except(['id', '_method', '_token']));
        if ($request->has('form_data')) {
            $doc->form_data = $request->form_data;
        }
        $doc->save();

        // Sinkronkan status verifikasi dengan tabel verifikasi
        if ($request->has('status')) {
            $verif = Verifikasi::where('pengadaan_id', $doc->pengadaan_id ?? $id)
                ->where('tipe', $this->verifTipeFor($type))
                ->latest()
                ->first();
            if ($verif) {
                $verif->status = $request->status;
                $verif->save();
            }
        }

        return response()->json($doc);
    }

    public function destroy(Request $request, string $type, string $id)
    {
        $modelClass = $this->modelFor($type);
        if (! $modelClass) {
            return response()->json(['message' => 'Jenis dokumen tidak valid.'], 422);
        }
        $doc = $modelClass::find($id);
        if (! $doc) {
            return response()->json(['message' => 'Dokumen tidak ditemukan.'], 404);
        }
        $this->authorizeDocument($request, $doc);
        if (! $request->user()->is_admin) {
            abort_unless(in_array($doc->status, ['draft', 'revisi', 'revision_required', 'rejected'], true), 422, 'Dokumen aktif tidak dapat dihapus.');
        }
        $doc->delete();
        return response()->json(['message' => 'Dokumen berhasil dihapus']);
    }

    private function authorizeDocument(Request $request, $doc): void
    {
        if ($request->user()->is_admin) {
            return;
        }
        abort_unless(
            $doc->pengadaan_id && Pengadaan::where('id', $doc->pengadaan_id)->where('created_by', $request->user()->id)->exists(),
            403,
            'Anda tidak memiliki akses ke dokumen ini.',
        );
    }

protected function titleField(string $type)
    {
        return match ($type) {
            'npp' => 'judul',
            'sp3' => 'judul',
            'contract' => 'paket',
            'pbj', 'pbj-barang-jasa' => 'nama_paket',
            'park-dokumen', 'park-document' => 'judul',
            'purchase-requisition', 'pengajuan-dana' => 'judul',
            default => 'id',
        };
    }

    protected function mapFormToColumns(string $type, Request $request, array $formData)
    {
        $fd = $formData;
        $data = $request->all();

        if ($type === 'npp') {
            return [
                'no_npp'       => $data['no_npp'] ?? $data['noNpp'] ?? $fd['noNpp'] ?? null,
                'judul'        => $data['judul'] ?? $fd['judulPermohonan'] ?? $fd['judul'] ?? null,
                'vendor'       => $data['vendor'] ?? $fd['vendor'] ?? null,
                'nilai_pr'     => $data['nilai_pr'] ?? $data['nilaiPr'] ?? $fd['nilaiPr'] ?? null,
                'coa'          => $data['coa'] ?? $fd['coa'] ?? null,
                'jenis_barang' => $data['jenis_barang'] ?? $data['jenisBarang'] ?? $fd['jenisBarang'] ?? null,
                'kurs'         => $data['kurs'] ?? $fd['kurs'] ?? null,
                'metode'       => $data['metode'] ?? $fd['metode'] ?? null,
                'realisasi'    => $data['realisasi'] ?? $fd['realisasi'] ?? null,
                'keterangan'   => $data['keterangan'] ?? $fd['keterangan'] ?? null,
            ];
        }

        if ($type === 'sp3') {
            return [
                'no_sp3'         => $data['no_sp3'] ?? $data['noSp3'] ?? $data['sp3'] ?? null,
                'judul'          => $data['judul'] ?? $data['title'] ?? $fd['judulPermohonan'] ?? $fd['judul'] ?? null,
                'departemen'     => $data['departemen'] ?? $data['dept'] ?? $fd['subUnit'] ?? $fd['divisi'] ?? null,
                'rkap'           => $data['rkap'] ?? $data['nilaiRkap'] ?? $fd['nilaiPr'] ?? $fd['nilaiPermohonan'] ?? null,
                'tax'            => $data['tax'] ?? $data['nilaiTax'] ?? $fd['nilaiTax'] ?? null,
                'realisasi'      => $data['realisasi'] ?? $fd['realisasi'] ?? null,
                'vendor'         => $data['vendor'] ?? $fd['vendor'] ?? null,
                'pr_no'          => $data['pr_no'] ?? $data['prNo'] ?? $fd['noPR'] ?? $fd['prNo'] ?? null,
                'rab_no'         => $data['rab_no'] ?? $data['rabNo'] ?? $fd['noRAB'] ?? $fd['rabNo'] ?? null,
                'kak_no'         => $data['kak_no'] ?? $data['kakNo'] ?? $fd['noKAK'] ?? $fd['kakNo'] ?? null,
                'mi_no'          => $data['mi_no'] ?? $data['miNo'] ?? $fd['noMI'] ?? $fd['miNo'] ?? null,
                'tipe_pemilihan' => $data['tipe_pemilihan'] ?? $data['tipePemilihan'] ?? $fd['metode'] ?? null,
            ];
        }

if ($type === 'contract') {
            return [
                'no_kontrak'      => $data['no_kontrak'] ?? $data['noKontrak'] ?? null,
                'paket'           => $data['paket'] ?? $data['judul'] ?? $fd['judulPermohonan'] ?? $fd['paket'] ?? null,
                'nilai'           => $data['nilai'] ?? $data['nilaiKontrak'] ?? $fd['nilaiKontrak'] ?? $fd['nilaiPr'] ?? null,
                'departemen'      => $data['departemen'] ?? $data['dept'] ?? $fd['subUnit'] ?? $fd['divisi'] ?? null,
                'pbj'             => $data['pbj'] ?? $fd['pbj'] ?? null,
                'vendor'          => $data['vendor'] ?? $fd['vendor'] ?? $fd['pemenang'] ?? null,
                'performance_bond'=> $data['performance_bond'] ?? $data['performanceBond'] ?? $fd['performanceBond'] ?? null,
                'start_date'      => $data['start_date'] ?? $data['startDate'] ?? $fd['targetLogistik'] ?? $fd['startDate'] ?? null,
                'end_date'        => $data['end_date'] ?? $data['endDate'] ?? $fd['perkiraanWaktu'] ?? $fd['endDate'] ?? null,
            ];
        }

        if ($type === 'pbj' || $type === 'pbj-barang-jasa') {
            return [
                'no_pbj'       => $data['no_pbj'] ?? $data['noPbj'] ?? $fd['noPbj'] ?? null,
                'nama_paket'   => $data['nama_paket'] ?? $data['namaPaket'] ?? $fd['judulPermohonan'] ?? $fd['namaPaket'] ?? $fd['paket'] ?? null,
                'departemen'   => $data['departemen'] ?? $data['dept'] ?? $fd['subUnit'] ?? $fd['divisi'] ?? null,
                'nilai'        => $data['nilai'] ?? $data['nilaiPbj'] ?? $fd['nilaiPr'] ?? $fd['nilai'] ?? null,
                'metode'       => $data['metode'] ?? $fd['metode'] ?? null,
                'vendor'       => $data['vendor'] ?? $fd['vendor'] ?? $fd['pemenang'] ?? null,
                'tgl_awal'     => $data['tgl_awal'] ?? $data['tglAwal'] ?? $fd['tglAwal'] ?? $fd['targetLogistik'] ?? null,
                'tgl_akhir'    => $data['tgl_akhir'] ?? $data['tglAkhir'] ?? $fd['tglAkhir'] ?? $fd['perkiraanWaktu'] ?? null,
                'keterangan'   => $data['keterangan'] ?? $fd['keterangan'] ?? null,
            ];
        }

        if ($type === 'park-dokumen' || $type === 'park-document') {
            return [
                'no_dokumen' => $data['no_dokumen'] ?? $data['noDokumen'] ?? $fd['noDokumen'] ?? null,
                'judul'      => $data['judul'] ?? $data['nama'] ?? $fd['judulPermohonan'] ?? $fd['judul'] ?? null,
                'departemen' => $data['departemen'] ?? $data['dept'] ?? $fd['subUnit'] ?? $fd['divisi'] ?? null,
                'kategori'   => $data['kategori'] ?? $data['jenisPermohonan'] ?? $fd['jenisPermohonan'] ?? $fd['kategori'] ?? null,
                'nominal'    => $data['nominal'] ?? $data['nilai'] ?? $fd['nominalPermohonan'] ?? $fd['nominal'] ?? null,
            ];
        }

        if ($type === 'purchase-requisition' || $type === 'pengajuan-dana') {
            return [
                'no_pr'             => $data['no_pr'] ?? $data['noPr'] ?? $fd['noPr'] ?? null,
                'judul'             => $data['judul'] ?? $data['nama'] ?? $fd['judulPermohonan'] ?? $fd['judul'] ?? null,
                'departemen'        => $data['departemen'] ?? $data['dept'] ?? $fd['subUnit'] ?? $fd['divisi'] ?? null,
                'sub_unit'          => $data['sub_unit'] ?? $data['subUnit'] ?? $fd['subUnit'] ?? null,
                'jenis_permohonan'  => $data['jenis_permohonan'] ?? $data['jenisPermohonan'] ?? $fd['jenisPermohonan'] ?? null,
                'nominal'           => $data['nominal'] ?? $data['nilai'] ?? $fd['nominalPermohonan'] ?? $fd['nominal'] ?? null,
            ];
        }

        return [];
    }
}
