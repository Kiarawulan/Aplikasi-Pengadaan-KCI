const pengadaan = [
  { id: "PD-2026-001", nama: "Park Document Pemeliharaan Stasiun", departemen: "CTIT", nominal: "Rp 125.000.000", tanggal: "2026-08-01", status: "pending", currentStep: "pengajuan-dana", current_step: "pengajuan-dana", flowType: "pd", flow_type: "pd", createdBy: "figma-user", created_by: "figma-user", formData: { emailPic: "user@kci.id", divisi: "CTIT" }, form_data: { emailPic: "user@kci.id", divisi: "CTIT" } },
  { id: "PR-2026-001", nama: "Pengadaan Perangkat Teknologi KCI", departemen: "CTIT", nominal: "Rp 250.000.000", tanggal: "2026-08-03", status: "revisi", currentStep: "npp", current_step: "npp", flowType: "pr", flow_type: "pr", createdBy: "figma-user", created_by: "figma-user", formData: { vendor: "PT Maju Bersama Teknologi", kurs: "IDR" }, form_data: { vendor: "PT Maju Bersama Teknologi", kurs: "IDR" } },
  { id: "PR-2026-002", nama: "Pengadaan Sistem Informasi Operasional", departemen: "Logistik", nominal: "Rp 480.000.000", tanggal: "2026-08-05", status: "approved", currentStep: "pembayaran", current_step: "pembayaran", flowType: "pr", flow_type: "pr", createdBy: "figma-user", created_by: "figma-user", formData: { vendor: "PT Nusantara Digital", kurs: "IDR" }, form_data: { vendor: "PT Nusantara Digital", kurs: "IDR" } },
];

const verifikasi = [
  { id: 101, pengadaan_id: "PD-2026-001", tipe: "park-document", status: "pending", departemen: "CTIT", submit_at: "2026-08-01", catatan: "" },
  { id: 102, pengadaan_id: "PR-2026-001", tipe: "npp", status: "revisi", departemen: "CTIT", submit_at: "2026-08-03", catatan: "Mohon lengkapi dokumen pendukung." },
  { id: 103, pengadaan_id: "PR-2026-002", tipe: "pembayaran", status: "approved", departemen: "Logistik", submit_at: "2026-08-05", catatan: "" },
];

const rup = [
  { id: "RUP-2026-001", no_rup: "RUP-2026-001", nama: "Pengadaan Infrastruktur Teknologi", jenis: "Barang", metode: "Tender Terbuka", nilai: "Rp 800.000.000", status: "pending", progress: "4/14", departemen: "CTIT", createdBy: "figma-user", created_at: "2026-01-10" },
  { id: "RUP-2026-002", no_rup: "RUP-2026-002", nama: "Jasa Pemeliharaan Sarana", jenis: "Jasa", metode: "Pemilihan Langsung", nilai: "Rp 320.000.000", status: "approved", progress: "14/14", departemen: "Logistik", createdBy: "figma-user", created_at: "2026-02-14" },
];

const vendors = [
  { id: "VND-001", nama: "PT Maju Bersama Teknologi", npwp: "01.234.567.8-001.000", alamat: "Jl. Sudirman No. 45, Jakarta", kontak_person: "Hendra K.", telepon: "021-5551234", email: "info@majubersama.co.id", kategori: "Teknologi", status: "aktif" },
  { id: "VND-002", nama: "PT Nusantara Digital", npwp: "02.345.678.9-002.000", alamat: "Jl. Gatot Subroto, Jakarta", kontak_person: "Sinta Dewi", telepon: "021-5559876", email: "procurement@nusantaradigital.id", kategori: "Jasa", status: "aktif" },
];

const roles = [
  { id: "role-admin", name: "Super Admin", description: "Akses penuh", role_type: "admin", color: "#cc0000", active: true, permissions: {} },
  { id: "role-user", name: "User CTIT", description: "Akses pengguna", role_type: "user", color: "#252271", active: true, permissions: {} },
];

const users = [
  { id: "USR-001", name: "Administrator KCI", username: "admin.kci", email: "admin@sipro.com", role_id: "role-admin", departemen: "CTIT", is_active: true, is_admin: true, account_type: "admin" },
  { id: "USR-002", name: "Pengguna CTIT", username: "user.ctit", email: "user@kci.id", role_id: "role-user", departemen: "CTIT", is_active: true, is_admin: false, account_type: "user" },
];

const templates = [
  { id: "TPL-001", nama: "Template RUP", kategori: "Pengadaan|RUP", tipe: "DOCX", ukuran: "245 KB", deskripsi: "Template resmi RUP", uploaded_by: "Administrator KCI", uploaded_at: "2026-01-10" },
  { id: "TPL-002", nama: "Template BAHP", kategori: "Pengujian|BAHP", tipe: "PDF", ukuran: "189 KB", deskripsi: "Template BAHP", uploaded_by: "Administrator KCI", uploaded_at: "2026-02-11" },
];

const pengujian = [
  { id: "PUJ-001", pengadaan_id: "PR-2026-002", nama: "Pengujian Sistem Informasi", pemohon: "Pengguna CTIT", departemen: "CTIT", tanggal: "2026-08-06", status: "diproses", catatan: "Pengujian fungsional" },
];

const payments = [
  { id: "PAY-001", pengadaan_id: "PR-2026-002", no_sp3: "SP3-2026-001", no_kontrak: "KTR-2026-001", nama: "Pembayaran Sistem Informasi", nominal: "Rp 250.000.000", nama_vendor: "PT Nusantara Digital", departemen: "CTIT", tanggal: "2026-08-08", tipe: "outsource", status: "pending" },
];

export function getFigmaMockResponse(rawUrl = "") {
  const url = rawUrl.split("?")[0];
  if (url === "/pengadaan") {
    if (rawUrl.includes("flow=pd")) return pengadaan.filter((item) => item.flow_type === "pd");
    if (rawUrl.includes("flow=pr")) return pengadaan.filter((item) => item.flow_type === "pr");
    return pengadaan;
  }
  if (/^\/pengadaan\/[^/]+$/.test(url)) return pengadaan.find((item) => item.id === url.split("/")[2]) || pengadaan[1];
  if (url.includes("/step-status")) return { status: "pending", canProceed: false, catatan: "Menunggu verifikasi admin" };
  if (url.includes("/documents")) return { data: [] };
  if (url === "/verifikasi") return verifikasi;
  if (url === "/rup") return rup;
  if (url === "/vendors") return vendors;
  if (url === "/roles") return roles;
  if (url === "/users") return users;
  if (url === "/templates") return templates;
  if (url === "/pengujian") return pengujian;
  if (url === "/payments") return payments;
  if (url.startsWith("/step-documents/")) return { document: null, uploads: [] };
  if (url === "/dashboard") return null;
  return [];
}
