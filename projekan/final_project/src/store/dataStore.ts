import type { PengadaanItem, VerifRecord, TemplateDokumen, Vendor, HargaSatuan, VerifStatus, RupItem } from "../types";
import { api } from "../services/api";

const LS_PENGADAAN = "sipro_pengadaan";
const LS_VERIF = "sipro_verif_records";
const LS_TEMPLATES = "sipro_templates";
const LS_VENDORS = "sipro_vendors";
const LS_HARGA = "sipro_harga_satuan";
const LS_PENGUJIAN = "sipro_pengujian";
const LS_RUP = "sipro_rup";

// ─── Default Data ─────────────────────────────────────────────────────────────
const DEFAULT_PENGADAAN: PengadaanItem[] = [
  {
    id: "PD-001",
    nama: "Pengadaan Laptop Dell Latitude 5540",
    departemen: "CTIT",
    nominal: "Rp 75.000.000",
    tanggal: "01/02/2024",
    status: "Proses",
    currentStep: "pengajuan-dana",
    completedSteps: [],
    createdBy: "user-it",
    verificationStatus: { "pengajuan-dana": "pending" },
  },
  {
    id: "PD-002",
    nama: "Pengadaan AC Split 2PK Office",
    departemen: "Logistik",
    nominal: "Rp 25.000.000",
    tanggal: "05/02/2024",
    status: "Proses",
    currentStep: "sp3",
    completedSteps: ["npp", "pengajuan-dana"],
    createdBy: "user-logistik",
    verificationStatus: { "pengajuan-dana": "approved", "sp3": "pending" },
  },
];

const DEFAULT_VERIF: VerifRecord[] = [
  {
    id: "VR-001",
    pengadaanId: "PD-001",
    pengadaanNama: "Pengadaan Laptop Dell Latitude 5540",
    departemen: "CTIT",
    nominal: "Rp 75.000.000",
    tipe: "park-dokumen",
    submitBy: "Andi Wijaya",
    submitAt: "2024-02-01T09:00:00",
    status: "pending",
  },
];

const DEFAULT_TEMPLATES: TemplateDokumen[] = [
  { id: "TPL-001", nama: "Template NPP - Barang", kategori: "NPP", tipe: "DOCX", ukuran: "245 KB", deskripsi: "Template NPP untuk pengadaan barang", uploadedBy: "Super Admin", uploadedAt: "2024-01-10" },
  { id: "TPL-002", nama: "Template SP3 - Jasa", kategori: "SP3", tipe: "DOCX", ukuran: "189 KB", deskripsi: "Template SP3 untuk pengadaan jasa", uploadedBy: "Super Admin", uploadedAt: "2024-01-10" },
  { id: "TPL-003", nama: "Template Kontrak - Barang", kategori: "Contract", tipe: "PDF", ukuran: "1.2 MB", deskripsi: "Template kontrak standard untuk barang", uploadedBy: "Super Admin", uploadedAt: "2024-01-12" },
];

const DEFAULT_VENDORS: Vendor[] = [
  { id: "VND-001", nama: "PT Maju Bersama Teknologi", npwp: "01.234.567.8-001.000", alamat: "Jl. Sudirman No. 45, Jakarta", kontakPerson: "Hendra K.", telepon: "021-5551234", email: "info@majubersama.co.id", kategori: "Teknologi", status: "aktif", createdAt: "2024-01-05" },
];

const DEFAULT_HARGA: HargaSatuan[] = [
  { id: "HS-001", namaBarang: "Laptop Dell Latitude 5540", satuan: "Unit", harga: 18500000, kategori: "IT Hardware", tahun: "2024", updatedAt: "2024-01-10" },
];

const DEFAULT_PENGUJIAN = [
  { id: "PUJ-001", nama: "Laptop Dell Latitude 5540", pemohon: "Andi Wijaya", departemen: "CTIT", tanggal: "2024-03-01", status: "pending", catatan: "" },
];

const DEFAULT_RUP: RupItem[] = [
  { id: "RUP-001", nama: "Pengadaan Server Data Center", jenis: "Barang", metode: "Tender", nilai: "Rp 800.000.000", status: "approved", progress: "9/14", departemen: "CTIT", createdBy: "user-it", createdAt: "2024-01-10" },
  { id: "RUP-002", nama: "Jasa Maintenance AC Gedung", jenis: "Jasa", metode: "Seleksi Langsung", nilai: "Rp 120.000.000", status: "pending", progress: "0/14", departemen: "Logistik", createdBy: "user-logistik", createdAt: "2024-02-05" },
];

function getOrInit<T>(key: string, defaults: T[]): T[] {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
    localStorage.setItem(key, JSON.stringify(defaults));
    return defaults;
  } catch { return defaults; }
}

function save<T>(key: string, data: T[]) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ─── Synchronous local getters & setters ──────────────────────────────────────
export function getPengadaan(): PengadaanItem[] { return getOrInit<PengadaanItem>(LS_PENGADAAN, DEFAULT_PENGADAAN); }
export function savePengadaan(items: PengadaanItem[]) { save(LS_PENGADAAN, items); }
export function addPengadaan(item: PengadaanItem) { savePengadaan([...getPengadaan(), item]); }
export function updatePengadaanItem(updated: PengadaanItem) {
  savePengadaan(getPengadaan().map(p => p.id === updated.id ? updated : p));
}

export function getVerifRecords(): VerifRecord[] { return getOrInit(LS_VERIF, DEFAULT_VERIF); }
export function saveVerifRecords(items: VerifRecord[]) { save(LS_VERIF, items); }
export function addVerifRecord(item: VerifRecord) { 
  api.post('/verifikasi', {
    pengadaanId: item.pengadaanId,
    pengadaanNama: item.pengadaanNama,
    departemen: item.departemen || 'Umum',
    nominal: item.nominal || 'Rp 0',
    tipe: item.tipe,
    submitBy: item.submitBy || 'User'
  })
  .then(res => console.log('Successfully saved Verifikasi record to MySQL DB:', res.data))
  .catch(err => console.error('Error saving Verifikasi record to MySQL DB:', err?.response?.data || err));

  saveVerifRecords([...getVerifRecords(), item]); 
}
export function updateVerifRecord(id: string, patch: Partial<VerifRecord>) {
  saveVerifRecords(getVerifRecords().map(r => r.id === id ? { ...r, ...patch } : r));
}

export function approveVerif(id: string, adminName: string) {
  api.post(`/verifikasi/${id}/approve`).catch(() => {});
  const records = getVerifRecords();
  const record = records.find(r => r.id === id);
  updateVerifRecord(id, { status: "approved", verifiedBy: adminName, verifiedAt: new Date().toISOString() });
  
  if (record && record.tipe === "rup") {
    updateRup(record.pengadaanId, { status: "approved" });
  }
}

export function revisiVerif(id: string, adminName: string, catatan: string) {
  api.post(`/verifikasi/${id}/revisi`, { catatan }).catch(() => {});
  const records = getVerifRecords();
  const record = records.find(r => r.id === id);
  updateVerifRecord(id, { status: "revisi", verifiedBy: adminName, verifiedAt: new Date().toISOString(), catatanAdmin: catatan });

  if (record && record.tipe === "rup") {
    updateRup(record.pengadaanId, { status: "revisi" });
  }
}

export function rejectVerif(id: string, adminName: string, catatan: string) {
  api.post(`/verifikasi/${id}/reject`, { catatan }).catch(() => {});
  const records = getVerifRecords();
  const record = records.find(r => r.id === id);
  updateVerifRecord(id, { status: "rejected", verifiedBy: adminName, verifiedAt: new Date().toISOString(), catatanAdmin: catatan });

  if (record && record.tipe === "rup") {
    updateRup(record.pengadaanId, { status: "rejected" });
  }
}

export function getTemplates(): TemplateDokumen[] { return getOrInit(LS_TEMPLATES, DEFAULT_TEMPLATES); }
export function saveTemplates(items: TemplateDokumen[]) { save(LS_TEMPLATES, items); }
export function addTemplate(item: TemplateDokumen) {
  api.post('/templates', item).catch(() => {});
  saveTemplates([...getTemplates(), item]);
}
export function deleteTemplate(id: string) {
  api.delete(`/templates/${id}`).catch(() => {});
  saveTemplates(getTemplates().filter(t => t.id !== id));
}
export function updateTemplate(updated: TemplateDokumen) {
  api.put(`/templates/${updated.id}`, updated).catch(() => {});
  saveTemplates(getTemplates().map(t => t.id === updated.id ? updated : t));
}

export function getVendors(): Vendor[] { return getOrInit(LS_VENDORS, DEFAULT_VENDORS); }
export function saveVendors(items: Vendor[]) { save(LS_VENDORS, items); }
export function addVendor(item: Vendor) {
  api.post('/vendors', item).catch(() => {});
  saveVendors([...getVendors(), item]);
}
export function deleteVendor(id: string) {
  api.delete(`/vendors/${id}`).catch(() => {});
  saveVendors(getVendors().filter(v => v.id !== id));
}
export function updateVendor(updated: Vendor) {
  api.put(`/vendors/${updated.id}`, updated).catch(() => {});
  saveVendors(getVendors().map(v => v.id === updated.id ? updated : v));
}

export function getHargaSatuan(): HargaSatuan[] { return getOrInit(LS_HARGA, DEFAULT_HARGA); }
export function saveHargaSatuan(items: HargaSatuan[]) { save(LS_HARGA, items); }
export function addHargaSatuan(item: HargaSatuan) {
  api.post('/harga-satuan', item).catch(() => {});
  saveHargaSatuan([...getHargaSatuan(), item]);
}
export function deleteHargaSatuan(id: string) {
  api.delete(`/harga-satuan/${id}`).catch(() => {});
  saveHargaSatuan(getHargaSatuan().filter(h => h.id !== id));
}
export function updateHargaSatuan(updated: HargaSatuan) {
  api.put(`/harga-satuan/${updated.id}`, updated).catch(() => {});
  saveHargaSatuan(getHargaSatuan().map(h => h.id === updated.id ? updated : h));
}

export function getPengujianList(): typeof DEFAULT_PENGUJIAN { return getOrInit(LS_PENGUJIAN, DEFAULT_PENGUJIAN); }
export function savePengujianList(items: typeof DEFAULT_PENGUJIAN) { save(LS_PENGUJIAN, items); }

export function getRupList(): RupItem[] { return getOrInit(LS_RUP, DEFAULT_RUP); }
export function saveRupList(items: RupItem[]) { save(LS_RUP, items); }
export function addRup(item: RupItem) { 
  const payload = {
    id: item.id,
    nama: item.nama,
    jenis: item.jenis || 'Barang',
    metode: item.metode || 'Tender',
    nilai: item.nilai || 'Rp 0',
    departemen: item.departemen || 'Umum',
    createdBy: item.createdBy || 'user-admin',
    status: item.status || 'pending',
    progress: item.progress || '0/14',
    createdAt: item.createdAt || new Date().toISOString().split('T')[0]
  };
  
  api.post('/rup', payload)
    .then(res => console.log('Successfully saved RUP to MySQL DB:', res.data))
    .catch(err => console.error('Error saving RUP to MySQL DB:', err?.response?.data || err));

  // Automatically create verification record for Admin panel
  addVerifRecord({
    id: generateId("VR"),
    pengadaanId: item.id,
    pengadaanNama: item.nama,
    departemen: item.departemen || 'Umum',
    nominal: item.nilai,
    tipe: "rup",
    submitBy: item.createdBy || "User",
    submitAt: new Date().toISOString(),
    status: "pending",
  });

  saveRupList([...getRupList(), item]); 
}

export function updateRup(id: string, patch: Partial<RupItem>) {
  api.put(`/rup/${id}`, patch).catch(err => console.error('Error updating RUP:', err));
  saveRupList(getRupList().map(r => r.id === id ? { ...r, ...patch } : r));
  const records = getVerifRecords();
  const updatedRecords = records.map(v => {
    if (v.pengadaanId === id) {
      return {
        ...v,
        status: (patch.status ? patch.status : v.status) as VerifStatus,
        catatanAdmin: patch.catatanAdmin !== undefined ? patch.catatanAdmin : v.catatanAdmin,
      };
    }
    return v;
  });
  saveVerifRecords(updatedRecords);
}

export function isStepVerified(pengadaanId: string, step: string): boolean {
  const pengadaan = getPengadaan().find(p => p.id === pengadaanId);
  if (!pengadaan?.verificationStatus) return false;
  return pengadaan.verificationStatus[step] === "approved";
}

export function getVerifStatusForStep(pengadaanId: string, step: string): VerifStatus | undefined {
  const pengadaan = getPengadaan().find(p => p.id === pengadaanId);
  return pengadaan?.verificationStatus?.[step];
}

export function formatCurrency(num: number): string {
  return "Rp " + num.toLocaleString("id-ID");
}

export function generateId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36).toUpperCase()}`;
}
