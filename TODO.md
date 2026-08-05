# TODO: Restrukturisasi Folder Project SIPRO

## Tujuan
Merapikan struktur folder frontend `final_project/src` agar terorganisir berdasarkan **role → menu → fitur → detail**, tanpa duplikasi file/folder, konsisten antara role admin & user, dan mudah dikembangkan.

## Langkah-langkah

### 1. Analisis & Persiapan
- [x] Identifikasi seluruh file duplikat (komponen pengadaan, layout admin, halaman admin)
- [x] Konfirmasi rencana restrukturisasi dengan user

### 2. Restrukturisasi Komponen Pengadaan
- [ ] Pindahkan komponen pengadaan versi admin ke `components/admin/pengadaan/`
  - Sp3DetailView, RupDetailView, TambahRupModal, NppDetailView, PengujianDetailView
- [ ] Hapus folder `components/pengadaan/` (file yang tersisa adalah duplikat dari versi user)
- [ ] Update import di `AdminApp.tsx` dan `pages/admin/verifikasi/PengadaanVerifScreen.tsx`

### 3. Konsolidasi Komponen Layout Admin
- [ ] Tentukan versi yang dipakai untuk AdminSidebar & AdminTopBar
- [ ] Hapus duplikat, pertahankan satu versi di `components/layout/admin/`
- [ ] Update import yang merujuk path lama

### 4. Rapikan Halaman Admin
- [ ] Pertahankan versi subfolder (`dashboard/`, `user-role/`, `master-data/`, `template-dokumen/`)
- [ ] Hapus file duplikat di root `pages/admin/`
- [ ] Update import di `AdminApp.tsx`

### 5. Penataan Komponen Admin Lainnya
- [ ] Rapikan `components/admin/` (AdminModal, PermissionMatrix, VerifTable)

### 6. Verifikasi Build
- [ ] Jalankan `npm run build` untuk memastikan tidak ada error import
- [ ] Perbaiki error yang muncul

### 7. Dokumentasi Struktur Baru
- [ ] Buat ringkasan struktur folder akhir

---

# Kelengkapan Tabel Database (Selesai)

## Tujuan
Melengkapi tabel database `sipro` agar data yang diinput user benar-benar tersimpan di database dan muncul di tabel admin (NPP, SP3, Contract).

## Yang Sudah Dikerjakan

### Migration
- [x] `2026_08_05_000001_add_details_to_rups_table.php` — tambah kolom `details` (JSON) & `catatan_admin` ke tabel `rups`
- [x] `2026_08_05_000002_create_step_document_tables.php` — buat 3 tabel khusus dokumen tahapan:
  - `npp` — Nota Permintaan Pengadaan
  - `sp3` — Surat Permintaan Proses Pengadaan
  - `contract` — Kontrak

### Model
- [x] `app/Models/Npp.php` — model tabel `npp`
- [x] `app/Models/Sp3.php` — model tabel `sp3`
- [x] `app/Models/Contract.php` — model tabel `contract`
- [x] `app/Models/Rup.php` — tambah cast JSON `details` & `catatan_admin` ke fillable

### Controller & Routes
- [x] `app/Http/Controllers/StepDocumentController.php` — CRUD untuk npp/sp3/contract + auto-create verifikasi record
- [x] `routes/api.php` — tambah route `/api/step-documents/{type}` (npp, sp3, contract)
- [x] `app/Http/Controllers/PengadaanController.php` — tambah method `persistStepDocument()` yang dipanggil dari `submitStep()` untuk menyimpan data form tahapan ke tabel khusus

### Frontend (data flow, tanpa ubah tampilan)
- [x] `src/pages/user/pengadaan/PrDetailScreen.tsx` — kirim `form_data` pada request `submit-step` agar data form tahapan tersimpan ke database

## Status Database Akhir
- Tabel `pengadaan` (11), `pengadaan_completed_steps` (37), `pengujian` (4), `rups` (4), `verifikasi` (31) → terisi
- Tabel baru `npp`, `sp3`, `contract` → siap diisi otomatis saat user submit tahapan
- Alur terverifikasi: submit NPP → otomatis buat record verifikasi (tipe=npp) + simpan ke tabel `npp`
