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

