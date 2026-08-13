<?php

namespace App\Http\Controllers;

use App\Models\ProcessHistory;
use App\Models\Rup;
use App\Models\Verifikasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RupController extends Controller
{
    public function index(Request $request)
    {
        // RUP adalah referensi bersama. User berhak membaca RUP yang dibuat
        // Admin maupun user lain, tetapi perubahan tetap dibatasi pemilik/admin.
        return response()->json(Rup::query()->latest()->get());
    }

    public function show(Request $request, Rup $rup)
    {
        return response()->json($rup);
    }

    public function store(Request $request)
    {
        $data = $request->validate(['id' => 'nullable|string|max:100', 'nama' => 'nullable|string|max:255', 'judul' => 'nullable|string|max:255', 'namaPaket' => 'nullable|string|max:255', 'jenis' => 'nullable|string|max:100', 'jenisPengadaan' => 'nullable|string|max:100', 'metode' => 'nullable|string|max:100', 'nilai' => 'nullable|string|max:100', 'status' => 'nullable|string|max:50', 'details' => 'nullable|array']);
        $nama = $data['nama'] ?? $data['namaPaket'] ?? $data['judul'] ?? null;
        abort_unless($nama, 422, 'Judul RUP wajib diisi.');

        // Validasi judul RUP tidak boleh double
        abort_if(Rup::whereRaw('LOWER(nama) = ?', [strtolower(trim($nama))])->exists(), 422, 'Judul RUP sudah digunakan. Mohon gunakan judul RUP yang unik.');

        // Validasi nominal > 0
        $rawNilai = (int) preg_replace('/\D/', '', (string) ($data['nilai'] ?? $request->input('nilaiSebelumPajak', '0')));
        abort_if($rawNilai <= 0, 422, 'Nominal RUP tidak boleh 0 rupiah.');

        // Validasi kesesuaian skala (> 500 Juta vs < 500 Juta)
        $pilihanRup = $request->input('pilihanRup') ?? ($data['details']['pilihanRup'] ?? null);
        if ($pilihanRup) {
            if (str_contains($pilihanRup, 'Lebih') || str_contains($pilihanRup, '>')) {
                abort_if($rawNilai <= 500000000, 422, 'Nominal anggaran harus lebih dari Rp 500.000.000 untuk kategori skala Lebih 500 Juta.');
            } elseif (str_contains($pilihanRup, 'Kurang') || str_contains($pilihanRup, '<')) {
                abort_if($rawNilai > 500000000, 422, 'Nominal anggaran tidak boleh melebihi Rp 500.000.000 untuk kategori skala Kurang 500 Juta.');
            }
        }

        $id = $data['id'] ?? null;
        if ($id) {
            abort_unless((bool) preg_match('/^RUP-[A-Za-z0-9-]+$/', $id), 422, 'Format ID RUP tidak valid.');
            abort_if(Rup::whereKey($id)->exists(), 422, 'ID RUP sudah digunakan.');
        } else {
            $next = (int) Rup::where('id', 'like', 'RUP-%')->lockForUpdate()->count() + 1;
            do { $id = 'RUP-' . str_pad((string) $next++, 3, '0', STR_PAD_LEFT); } while (Rup::whereKey($id)->exists());
        }

        $shouldSubmit = ($data['status'] ?? null) === 'pending';
        $rup = Rup::create(['id' => $id, 'nama' => $nama, 'jenis' => $data['jenis'] ?? $data['jenisPengadaan'] ?? 'Barang', 'metode' => $data['metode'] ?? 'Tender', 'nilai' => $data['nilai'] ?? 'Rp 0', 'status' => $shouldSubmit ? 'waiting_approval' : 'draft', 'progress' => '0/14', 'departemen' => $request->user()->departemen, 'created_by' => $request->user()->id, 'updated_by' => $request->user()->id, 'details' => $data['details'] ?? $request->except(['id', 'nama', 'judul', 'namaPaket', 'jenis', 'jenisPengadaan', 'metode', 'nilai', 'status'])]);
        if ($shouldSubmit) $this->queueForApproval($request, $rup, 'draft');
        return response()->json($rup->fresh(), 201);
    }

    public function update(Request $request, Rup $rup)
    {
        $this->assertOwner($request, $rup);
        $isResubmission = $request->input('status') === 'pending';
        if (! $isResubmission && ! in_array($rup->status, ['draft', 'revision_required'], true)) return response()->json(['message' => 'RUP hanya dapat diubah saat draft atau revisi.'], 422);
        $data = $request->validate(['nama' => 'sometimes|string|max:255', 'jenis' => 'sometimes|string|max:100', 'metode' => 'sometimes|string|max:100', 'nilai' => 'sometimes|string|max:100', 'details' => 'sometimes|array']);
        $before = ['nama' => $rup->nama, 'jenis' => $rup->jenis, 'metode' => $rup->metode, 'nilai' => preg_replace('/\D/', '', (string) $rup->nilai), 'details' => $rup->details ?? []];
        
        if (array_key_exists('nama', $data)) {
            abort_if(Rup::where('id', '!=', $rup->id)->whereRaw('LOWER(nama) = ?', [strtolower(trim($data['nama']))])->exists(), 422, 'Judul RUP sudah digunakan. Mohon gunakan judul RUP yang unik.');
        }

        if (array_key_exists('nilai', $data)) {
            $rawNilai = (int) preg_replace('/\D/', '', (string) $data['nilai']);
            abort_if($rawNilai <= 0, 422, 'Nominal RUP tidak boleh 0 rupiah.');

            $pilihanRup = $request->input('pilihanRup') ?? ($data['details']['pilihanRup'] ?? ($rup->details['pilihanRup'] ?? null));
            if ($pilihanRup) {
                if (str_contains($pilihanRup, 'Lebih') || str_contains($pilihanRup, '>')) {
                    abort_if($rawNilai <= 500000000, 422, 'Nominal anggaran harus lebih dari Rp 500.000.000 untuk kategori skala Lebih 500 Juta.');
                } elseif (str_contains($pilihanRup, 'Kurang') || str_contains($pilihanRup, '<')) {
                    abort_if($rawNilai > 500000000, 422, 'Nominal anggaran tidak boleh melebihi Rp 500.000.000 untuk kategori skala Kurang 500 Juta.');
                }
            }
        }

        $rup->fill($data);
        if (array_key_exists('details', $data)) $rup->details = array_merge($rup->details ?? [], $data['details']);
        $after = ['nama' => $rup->nama, 'jenis' => $rup->jenis, 'metode' => $rup->metode, 'nilai' => preg_replace('/\D/', '', (string) $rup->nilai), 'details' => $rup->details ?? []];
        if ($isResubmission && $rup->getOriginal('status') === 'revision_required') {
            abort_if($before == $after, 422, 'Belum ada perubahan. Ubah data RUP sesuai catatan revisi sebelum mengirim ulang.');
        }
        $rup->updated_by = $request->user()->id;
        $rup->save();
        if ($isResubmission) $this->queueForApproval($request, $rup, $rup->getOriginal('status'));
        return response()->json($rup->fresh());
    }

    public function submit(Request $request, Rup $rup)
    {
        $this->assertOwner($request, $rup);
        if (! in_array($rup->status, ['draft', 'revision_required'], true)) return response()->json(['success' => false, 'message' => 'RUP tidak dapat dikirim pada status saat ini.'], 422);
        $this->queueForApproval($request, $rup, $rup->status);
        return response()->json($rup->fresh());
    }

    public function destroy(Request $request, Rup $rup)
    {
        $this->assertOwner($request, $rup);
        if (! in_array($rup->status, ['draft', 'revision_required'], true)) return response()->json(['success' => false, 'message' => 'Hanya RUP draft atau revisi yang dapat dihapus.'], 422);
        DB::transaction(function () use ($rup) { Verifikasi::where('pengadaan_id', $rup->id)->where('tipe', 'rup')->delete(); ProcessHistory::where('pengadaan_id', $rup->id)->delete(); $rup->delete(); });
        return response()->json(['success' => true, 'message' => 'RUP berhasil dihapus.']);
    }

    private function assertOwner(Request $request, Rup $rup): void
    {
        abort_unless($request->user()->is_admin || $rup->created_by === $request->user()->id, 403, 'Anda tidak memiliki akses ke RUP ini.');
    }

    private function queueForApproval(Request $request, Rup $rup, string $fromStatus): void
    {
        $rup->status = 'waiting_approval';
        $rup->submitted_at = now();
        $rup->updated_by = $request->user()->id;
        $rup->save();

        $verifikasi = Verifikasi::firstOrNew(['pengadaan_id' => $rup->id, 'tipe' => 'rup']);
        $verifikasi->id ??= 'VR-RUP-' . $rup->id;
        $verifikasi->pengadaan_nama = $rup->nama;
        $verifikasi->departemen = $rup->departemen;
        $verifikasi->nominal = $rup->nilai;
        $verifikasi->submit_by = $request->user()->name;
        $verifikasi->submit_at = now();
        $verifikasi->status = 'pending';
        $verifikasi->catatan_admin = null;
        $verifikasi->save();

        ProcessHistory::create(['pengadaan_id' => $rup->id, 'verifikasi_id' => $verifikasi->id, 'step_id' => 'rup', 'actor_id' => $request->user()->id, 'actor_name' => $request->user()->name, 'action' => $fromStatus === 'revision_required' ? 'resubmitted' : 'submitted', 'from_status' => $fromStatus, 'to_status' => 'waiting_approval']);
    }
}
