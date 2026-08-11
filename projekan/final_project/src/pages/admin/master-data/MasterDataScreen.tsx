import { useState, useMemo, useEffect } from "react";
import { AdminTopBar } from "@/components/admin/layout/AdminTopBar";
import { Plus, Search, Edit3, Trash2, X, Database, Building2, Briefcase, Users, MapPin, Banknote, Tag, FileStack, CalendarDays, Percent, CreditCard, FlaskConical, PenTool, Activity } from "lucide-react";
import { api } from "@/services/api";
import { WarningModal, WarningVariant } from "@/components/common/WarningModal";
import { getFigmaCaptureConfig } from "@/figmaCapture";


// ─── Types ─────────────────────────────────────────────────────────────────────
interface MasterItem {
  id: string;
  [key: string]: any;
}

type TabId =
  | "vendor" | "unit-kerja" | "department" | "direktorat"
  | "jenis-pengadaan" | "metode-pengadaan" | "kategori-barang" | "jenis-kontrak"
  | "tahun-anggaran" | "mata-uang" | "pajak" | "bank"
  | "lokasi" | "penguji" | "jabatan-ttd" 
  | "status-pengadaan" | "status-pengujian" | "status-pembayaran";

interface TabDef {
  id: TabId;
  label: string;
  icon: any;
  group: string;
}

// ─── Tab Definitions ───────────────────────────────────────────────────────────
const TABS: TabDef[] = [
  { id: "vendor", label: "Vendor", icon: Building2, group: "Umum" },
  { id: "unit-kerja", label: "Divisi", icon: Users, group: "Umum" },
  { id: "department", label: "Detail Divisi", icon: Briefcase, group: "Umum" },
  { id: "direktorat", label: "Direktorat", icon: Building2, group: "Umum" },
  { id: "jenis-pengadaan", label: "Jenis Pengadaan", icon: Tag, group: "Pengadaan" },
  { id: "metode-pengadaan", label: "Metode Pengadaan", icon: FileStack, group: "Pengadaan" },
  { id: "kategori-barang", label: "Kategori Barang/Jasa", icon: Database, group: "Pengadaan" },
  { id: "jenis-kontrak", label: "Jenis Kontrak", icon: Briefcase, group: "Pengadaan" },
  { id: "tahun-anggaran", label: "Tahun Anggaran", icon: CalendarDays, group: "Keuangan" },
  { id: "mata-uang", label: "Mata Uang", icon: Banknote, group: "Keuangan" },
  { id: "pajak", label: "Pajak", icon: Percent, group: "Keuangan" },
  { id: "bank", label: "Bank", icon: CreditCard, group: "Keuangan" },
  { id: "lokasi", label: "Lokasi", icon: MapPin, group: "Referensi" },
  { id: "penguji", label: "Penguji", icon: FlaskConical, group: "Referensi" },
  { id: "jabatan-ttd", label: "Jabatan Penandatangan", icon: PenTool, group: "Referensi" },
  { id: "status-pengadaan", label: "Status Pengadaan", icon: Activity, group: "Status" },
  { id: "status-pengujian", label: "Status Pengujian", icon: Activity, group: "Status" },
  { id: "status-pembayaran", label: "Status Pembayaran", icon: Activity, group: "Status" },
];

const TAB_GROUPS = ["Umum", "Pengadaan", "Keuangan", "Referensi", "Status"];

// ─── Mock Data for each tab ────────────────────────────────────────────────────
const MOCK_DATA: Record<TabId, MasterItem[]> = {
  vendor: [
    { id: "VND-001", nama: "PT Maju Bersama Teknologi", npwp: "01.234.567.8-901.234", kategori: "Teknologi", status: "Aktif", kontak: "Budi Santoso", telepon: "021-5551234" },
    { id: "VND-002", nama: "CV Solusi Elektronik", npwp: "02.345.678.9-012.345", kategori: "Elektronik", status: "Aktif", kontak: "Andi Wijaya", telepon: "021-5552345" },
    { id: "VND-003", nama: "PT Infrastruktur Nusantara", npwp: "03.456.789.0-123.456", kategori: "Konstruksi", status: "Aktif", kontak: "Siti Rahmawati", telepon: "021-5553456" },
    { id: "VND-004", nama: "CV Jaya Abadi", npwp: "04.567.890.1-234.567", kategori: "General", status: "Non-Aktif", kontak: "Doni Prasetya", telepon: "021-5554567" },
  ],
  "unit-kerja": [
    { id: "UK-001", nama: "Divisi CTIT", kode: "DIV-CTIT", kepala: "Ir. Ahmad Fauzi" },
    { id: "UK-002", nama: "Divisi Logistik", kode: "DIV-LOG", kepala: "Drs. Budi Hartono" },
    { id: "UK-003", nama: "Divisi Keuangan", kode: "DIV-KEU", kepala: "Citra Dewi, SE" },
    { id: "UK-004", nama: "Divisi Operasional", kode: "DIV-OPS", kepala: "Doni Prasetya, MT" },
    { id: "UK-005", nama: "Divisi SDM", kode: "DIV-SDM", kepala: "Eka Putri, MPsi" },
  ],
  department: [
    { id: "DEPT-001", nama: "Dept. Pengadaan", kode: "PGD", divisi: "Logistik" },
    { id: "DEPT-002", nama: "Dept. IT Infrastructure", kode: "ITIF", divisi: "CTIT" },
    { id: "DEPT-003", nama: "Dept. Akuntansi", kode: "AKT", divisi: "Keuangan" },
    { id: "DEPT-004", nama: "Dept. Perawatan", kode: "PRW", divisi: "Operasional" },
  ],
  direktorat: [
    { id: "DIR-001", nama: "Direktorat Utama", kode: "DIRUTAMA" },
    { id: "DIR-002", nama: "Direktorat Keuangan", kode: "DIRKEU" },
    { id: "DIR-003", nama: "Direktorat Operasional", kode: "DIROPS" },
    { id: "DIR-004", nama: "Direktorat Teknik", kode: "DIRTEK" },
  ],
  "jenis-pengadaan": [
    { id: "JP-001", nama: "Pengadaan Barang", kode: "PB", keterangan: "Pengadaan barang fisik" },
    { id: "JP-002", nama: "Pengadaan Jasa", kode: "PJ", keterangan: "Pengadaan jasa layanan" },
    { id: "JP-003", nama: "Pengadaan Konstruksi", kode: "PK", keterangan: "Pengadaan pekerjaan konstruksi" },
    { id: "JP-004", nama: "Pengadaan Jasa Konsultansi", kode: "PJK", keterangan: "Pengadaan jasa konsultan" },
  ],
  "metode-pengadaan": [
    { id: "MP-001", nama: "Penunjukan Langsung", kode: "PL", batasNilai: "≤ 200 Juta" },
    { id: "MP-002", nama: "Pemilihan Langsung", kode: "PML", batasNilai: "200 Juta - 5 Milyar" },
    { id: "MP-003", nama: "Tender Terbuka", kode: "TT", batasNilai: "> 5 Milyar" },
    { id: "MP-004", nama: "E-Purchasing", kode: "EP", batasNilai: "Sesuai Katalog" },
  ],
  "kategori-barang": [
    { id: "KB-001", nama: "IT Hardware", kode: "ITH" },
    { id: "KB-002", nama: "IT Software", kode: "ITS" },
    { id: "KB-003", nama: "Elektronik", kode: "ELK" },
    { id: "KB-004", nama: "ATK", kode: "ATK" },
    { id: "KB-005", nama: "Furnitur", kode: "FRN" },
    { id: "KB-006", nama: "Jasa Outsource", kode: "JOS" },
    { id: "KB-007", nama: "Jasa Konstruksi", kode: "JKS" },
  ],
  "jenis-kontrak": [
    { id: "JK-001", nama: "Kontrak Lump Sum", kode: "LS", keterangan: "Harga tetap" },
    { id: "JK-002", nama: "Kontrak Harga Satuan", kode: "HS", keterangan: "Berdasarkan volume" },
    { id: "JK-003", nama: "Kontrak Gabungan", kode: "GB", keterangan: "Kombinasi lump sum & satuan" },
    { id: "JK-004", nama: "Kontrak Terima Jadi", kode: "TJ", keterangan: "Turnkey" },
  ],
  "tahun-anggaran": [
    { id: "TA-001", nama: "Tahun Anggaran 2023", tahun: "2023", status: "Selesai" },
    { id: "TA-002", nama: "Tahun Anggaran 2024", tahun: "2024", status: "Aktif" },
    { id: "TA-003", nama: "Tahun Anggaran 2025", tahun: "2025", status: "Perencanaan" },
  ],
  "mata-uang": [
    { id: "CUR-001", nama: "Rupiah", kode: "IDR", simbol: "Rp" },
    { id: "CUR-002", nama: "US Dollar", kode: "USD", simbol: "$" },
    { id: "CUR-003", nama: "Euro", kode: "EUR", simbol: "€" },
    { id: "CUR-004", nama: "Japanese Yen", kode: "JPY", simbol: "¥" },
  ],
  pajak: [
    { id: "TAX-001", nama: "PPN 11%", kode: "PPN11", persentase: "11%", keterangan: "Pajak Pertambahan Nilai" },
    { id: "TAX-002", nama: "PPh 21", kode: "PPH21", persentase: "5-30%", keterangan: "Pajak Penghasilan Orang Pribadi" },
    { id: "TAX-003", nama: "PPh 22", kode: "PPH22", persentase: "1.5%", keterangan: "Pajak Impor/Pengadaan" },
    { id: "TAX-004", nama: "PPh 23", kode: "PPH23", persentase: "2%", keterangan: "Pajak Jasa & Sewa" },
    { id: "TAX-005", nama: "PPh Final 4(2)", kode: "PPHF", persentase: "2-10%", keterangan: "Pajak Final Konstruksi" },
  ],
  bank: [
    { id: "BNK-001", nama: "Bank BNI", kode: "009", alamat: "Jl. Jend. Sudirman Kav. 1, Jakarta" },
    { id: "BNK-002", nama: "Bank BRI", kode: "002", alamat: "Jl. Jend. Sudirman No. 44-46, Jakarta" },
    { id: "BNK-003", nama: "Bank Mandiri", kode: "008", alamat: "Jl. Jend. Gatot Subroto Kav. 36-38, Jakarta" },
    { id: "BNK-004", nama: "Bank BCA", kode: "014", alamat: "Menara BCA, Jl. M.H. Thamrin No. 1, Jakarta" },
  ],
  lokasi: [
    { id: "LOK-001", nama: "Kantor Pusat Jakarta", kode: "JKT-01", alamat: "Jl. Juanda No. 1, Jakarta Pusat" },
    { id: "LOK-002", nama: "Depo Manggarai", kode: "MRI-01", alamat: "Jl. Manggarai Utara, Jakarta Selatan" },
    { id: "LOK-003", nama: "Stasiun Bogor", kode: "BGR-01", alamat: "Jl. Mayor Oking, Bogor" },
    { id: "LOK-004", nama: "Depo Depok", kode: "DPK-01", alamat: "Jl. Margonda Raya, Depok" },
  ],
  penguji: [
    { id: "PGJ-001", nama: "Ir. Rudi Hartono", nip: "198501012010011001", bidang: "Elektrikal", sertifikasi: "Ahli Muda" },
    { id: "PGJ-002", nama: "Dr. Sari Wulandari", nip: "198706152012012002", bidang: "Mekanikal", sertifikasi: "Ahli Madya" },
    { id: "PGJ-003", nama: "Agus Setiawan, ST", nip: "199003202015011003", bidang: "IT", sertifikasi: "Ahli Muda" },
  ],
  "jabatan-ttd": [
    { id: "JBT-001", nama: "Direktur Utama", kode: "DIRUT", level: "Direksi" },
    { id: "JBT-002", nama: "Direktur Keuangan", kode: "DIRKEU", level: "Direksi" },
    { id: "JBT-003", nama: "VP Pengadaan", kode: "VP-PGD", level: "Vice President" },
    { id: "JBT-004", nama: "Manager Logistik", kode: "MGR-LOG", level: "Manager" },
    { id: "JBT-005", nama: "Kepala Divisi CTIT", kode: "KADIV-CTIT", level: "Kepala Divisi" },
  ],
  "status-pengadaan": [
    { id: "SP-001", nama: "Draft", kode: "DRAFT", warna: "#94a3b8", urutan: 1 },
    { id: "SP-002", nama: "Diajukan", kode: "SUBMITTED", warna: "#f59e0b", urutan: 2 },
    { id: "SP-003", nama: "Verifikasi", kode: "VERIFYING", warna: "#3b82f6", urutan: 3 },
    { id: "SP-004", nama: "Disetujui", kode: "APPROVED", warna: "#22c55e", urutan: 4 },
    { id: "SP-005", nama: "Ditolak", kode: "REJECTED", warna: "#ef4444", urutan: 5 },
    { id: "SP-006", nama: "Revisi", kode: "REVISION", warna: "#8b5cf6", urutan: 6 },
  ],
  "status-pengujian": [
    { id: "ST-001", nama: "Request", kode: "REQ", warna: "#94a3b8", urutan: 1 },
    { id: "ST-002", nama: "Pelaksanaan", kode: "EXEC", warna: "#f59e0b", urutan: 2 },
    { id: "ST-003", nama: "Upload BAHP", kode: "BAHP", warna: "#3b82f6", urutan: 3 },
    { id: "ST-004", nama: "Selesai", kode: "DONE", warna: "#22c55e", urutan: 4 },
  ],
  "status-pembayaran": [
    { id: "SB-001", nama: "Belum Verifikasi", kode: "UNVERIFIED", warna: "#94a3b8", urutan: 1 },
    { id: "SB-002", nama: "Sudah Verifikasi", kode: "VERIFIED", warna: "#3b82f6", urutan: 2 },
    { id: "SB-003", nama: "Siap Bayar", kode: "READY", warna: "#f59e0b", urutan: 3 },
    { id: "SB-004", nama: "Terbayar", kode: "PAID", warna: "#22c55e", urutan: 4 },
  ],
};

// ─── Column definitions per tab ────────────────────────────────────────────────
interface ColDef {
  key: string;
  label: string;
  render?: (item: MasterItem) => React.ReactNode;
}

function getColumns(tab: TabId): ColDef[] {
  const statusBadge = (val: string) => {
    const colors: Record<string, string> = { Aktif: "bg-green-50 text-green-600", "Non-Aktif": "bg-gray-100 text-gray-500", Selesai: "bg-blue-50 text-blue-600", Perencanaan: "bg-amber-50 text-amber-600" };
    return <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-medium ${colors[val] || "bg-gray-100 text-gray-600"}`}>{val}</span>;
  };

  switch (tab) {
    case "vendor":
      return [
        { key: "nama", label: "Nama Vendor", render: (v) => <div><p className="font-semibold text-gray-800 text-[12px]">{v.nama}</p><p className="text-gray-400 text-[10px]">NPWP: {v.npwp}</p></div> },
        { key: "kontak", label: "Kontak", render: (v) => <div><p className="text-[11.5px] text-gray-700">{v.kontak}</p><p className="text-gray-400 text-[10px]">{v.telepon}</p></div> },
        { key: "kategori", label: "Kategori", render: (v) => <span className="bg-gray-100 text-gray-600 text-[10.5px] font-medium px-2 py-0.5 rounded-full">{v.kategori}</span> },
        { key: "status", label: "Status", render: (v) => statusBadge(v.status) },
      ];
    case "unit-kerja":
      return [
        { key: "kode", label: "Kode", render: (v) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{v.kode}</span> },
        { key: "nama", label: "Nama Divisi", render: (v) => <span className="font-semibold text-gray-800 text-[12px]">{v.nama}</span> },
        { key: "kepala", label: "Kepala", render: (v) => <span className="text-[11.5px] text-gray-600">{v.kepala}</span> },
      ];
    case "department":
      return [
        { key: "kode", label: "Kode", render: (v) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{v.kode}</span> },
        { key: "nama", label: "Nama Divisi", render: (v) => <span className="font-semibold text-gray-800 text-[12px]">{v.nama}</span> },
        { key: "divisi", label: "Divisi", render: (v) => <span className="bg-indigo-50 text-indigo-600 text-[10.5px] font-medium px-2 py-0.5 rounded-full">{v.divisi}</span> },
      ];
    case "direktorat":
      return [
        { key: "kode", label: "Kode", render: (v) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{v.kode}</span> },
        { key: "nama", label: "Nama Direktorat", render: (v) => <span className="font-semibold text-gray-800 text-[12px]">{v.nama}</span> },
      ];
    case "jenis-pengadaan":
    case "jenis-kontrak":
      return [
        { key: "kode", label: "Kode", render: (v) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{v.kode}</span> },
        { key: "nama", label: "Nama", render: (v) => <span className="font-semibold text-gray-800 text-[12px]">{v.nama}</span> },
        { key: "keterangan", label: "Keterangan", render: (v) => <span className="text-[11.5px] text-gray-500">{v.keterangan}</span> },
      ];
    case "metode-pengadaan":
      return [
        { key: "kode", label: "Kode", render: (v) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{v.kode}</span> },
        { key: "nama", label: "Nama Metode", render: (v) => <span className="font-semibold text-gray-800 text-[12px]">{v.nama}</span> },
        { key: "batasNilai", label: "Batas Nilai", render: (v) => <span className="bg-amber-50 text-amber-700 text-[10.5px] font-semibold px-2 py-0.5 rounded-full">{v.batasNilai}</span> },
      ];
    case "kategori-barang":
      return [
        { key: "kode", label: "Kode", render: (v) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{v.kode}</span> },
        { key: "nama", label: "Nama Kategori", render: (v) => <span className="font-semibold text-gray-800 text-[12px]">{v.nama}</span> },
      ];
    case "tahun-anggaran":
      return [
        { key: "tahun", label: "Tahun", render: (v) => <span className="font-bold text-[#252271] text-[14px]">{v.tahun}</span> },
        { key: "nama", label: "Nama", render: (v) => <span className="font-semibold text-gray-800 text-[12px]">{v.nama}</span> },
        { key: "status", label: "Status", render: (v) => statusBadge(v.status) },
      ];
    case "mata-uang":
      return [
        { key: "kode", label: "Kode", render: (v) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{v.kode}</span> },
        { key: "nama", label: "Nama", render: (v) => <span className="font-semibold text-gray-800 text-[12px]">{v.nama}</span> },
        { key: "simbol", label: "Simbol", render: (v) => <span className="text-[14px] font-bold text-gray-700">{v.simbol}</span> },
      ];
    case "pajak":
      return [
        { key: "kode", label: "Kode", render: (v) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{v.kode}</span> },
        { key: "nama", label: "Nama Pajak", render: (v) => <span className="font-semibold text-gray-800 text-[12px]">{v.nama}</span> },
        { key: "persentase", label: "Persentase", render: (v) => <span className="bg-red-50 text-red-600 text-[11px] font-bold px-2 py-0.5 rounded-full">{v.persentase}</span> },
        { key: "keterangan", label: "Keterangan", render: (v) => <span className="text-[11.5px] text-gray-500">{v.keterangan}</span> },
      ];
    case "bank":
      return [
        { key: "kode", label: "Kode Bank", render: (v) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{v.kode}</span> },
        { key: "nama", label: "Nama Bank", render: (v) => <span className="font-semibold text-gray-800 text-[12px]">{v.nama}</span> },
        { key: "alamat", label: "Alamat", render: (v) => <span className="text-[11.5px] text-gray-500">{v.alamat}</span> },
      ];
    case "lokasi":
      return [
        { key: "kode", label: "Kode", render: (v) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{v.kode}</span> },
        { key: "nama", label: "Nama Lokasi", render: (v) => <span className="font-semibold text-gray-800 text-[12px]">{v.nama}</span> },
        { key: "alamat", label: "Alamat", render: (v) => <span className="text-[11.5px] text-gray-500">{v.alamat}</span> },
      ];
    case "penguji":
      return [
        { key: "nip", label: "NIP", render: (v) => <span className="font-mono text-[11px] text-gray-500">{v.nip}</span> },
        { key: "nama", label: "Nama Penguji", render: (v) => <span className="font-semibold text-gray-800 text-[12px]">{v.nama}</span> },
        { key: "bidang", label: "Bidang", render: (v) => <span className="bg-teal-50 text-teal-600 text-[10.5px] font-medium px-2 py-0.5 rounded-full">{v.bidang}</span> },
        { key: "sertifikasi", label: "Sertifikasi", render: (v) => <span className="bg-purple-50 text-purple-600 text-[10.5px] font-medium px-2 py-0.5 rounded-full">{v.sertifikasi}</span> },
      ];
    case "jabatan-ttd":
      return [
        { key: "kode", label: "Kode", render: (v) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{v.kode}</span> },
        { key: "nama", label: "Jabatan", render: (v) => <span className="font-semibold text-gray-800 text-[12px]">{v.nama}</span> },
        { key: "level", label: "Level", render: (v) => <span className="bg-blue-50 text-blue-600 text-[10.5px] font-medium px-2 py-0.5 rounded-full">{v.level}</span> },
      ];
    case "status-pengadaan":
    case "status-pengujian":
    case "status-pembayaran":
      return [
        { key: "kode", label: "Kode", render: (v) => <span className="font-mono font-bold text-[11.5px]" style={{ color: v.warna }}>{v.kode}</span> },
        { key: "nama", label: "Nama Status", render: (v) => (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: v.warna }} />
            <span className="font-semibold text-gray-800 text-[12px]">{v.nama}</span>
          </div>
        )},
        { key: "urutan", label: "Urutan", render: (v) => <span className="bg-gray-100 text-gray-600 text-[11px] font-bold px-2.5 py-0.5 rounded-full">{v.urutan}</span> },
      ];
    default:
      return [
        { key: "nama", label: "Nama", render: (v) => <span className="text-[12px]">{v.nama}</span> },
      ];
  }
}

// ─── Form fields per tab ───────────────────────────────────────────────────────
function getFormFields(tab: TabId): { key: string; label: string; type?: string; required?: boolean; options?: string[] }[] {
  switch (tab) {
    case "vendor":
      return [
        { key: "nama", label: "Nama Vendor", required: true },
        { key: "npwp", label: "NPWP" },
        { key: "kategori", label: "Kategori", options: ["Teknologi", "Elektronik", "Furnitur", "General", "Jasa", "Konstruksi"] },
        { key: "status", label: "Status", options: ["Aktif", "Non-Aktif", "Blacklist"] },
        { key: "kontak", label: "Kontak Person" },
        { key: "telepon", label: "Telepon" },
      ];
    case "unit-kerja":
      return [{ key: "nama", label: "Nama Divisi", required: true }, { key: "kode", label: "Kode", required: true }, { key: "kepala", label: "Kepala" }];
    case "department":
      return [{ key: "nama", label: "Nama Divisi", required: true }, { key: "kode", label: "Kode", required: true }, { key: "divisi", label: "Divisi Induk" }];
    case "direktorat":
      return [{ key: "nama", label: "Nama Direktorat", required: true }, { key: "kode", label: "Kode", required: true }];
    case "jenis-pengadaan":
    case "jenis-kontrak":
      return [{ key: "nama", label: "Nama", required: true }, { key: "kode", label: "Kode", required: true }, { key: "keterangan", label: "Keterangan" }];
    case "metode-pengadaan":
      return [{ key: "nama", label: "Nama Metode", required: true }, { key: "kode", label: "Kode", required: true }, { key: "batasNilai", label: "Batas Nilai" }];
    case "kategori-barang":
      return [{ key: "nama", label: "Nama Kategori", required: true }, { key: "kode", label: "Kode", required: true }];
    case "tahun-anggaran":
      return [{ key: "nama", label: "Nama", required: true }, { key: "tahun", label: "Tahun", required: true }, { key: "status", label: "Status", options: ["Aktif", "Perencanaan", "Selesai"] }];
    case "mata-uang":
      return [{ key: "nama", label: "Nama Mata Uang", required: true }, { key: "kode", label: "Kode", required: true }, { key: "simbol", label: "Simbol", required: true }];
    case "pajak":
      return [{ key: "nama", label: "Nama Pajak", required: true }, { key: "kode", label: "Kode", required: true }, { key: "persentase", label: "Persentase" }, { key: "keterangan", label: "Keterangan" }];
    case "bank":
      return [{ key: "nama", label: "Nama Bank", required: true }, { key: "kode", label: "Kode Bank", required: true }, { key: "alamat", label: "Alamat" }];
    case "lokasi":
      return [{ key: "nama", label: "Nama Lokasi", required: true }, { key: "kode", label: "Kode", required: true }, { key: "alamat", label: "Alamat" }];
    case "penguji":
      return [{ key: "nama", label: "Nama Penguji", required: true }, { key: "nip", label: "NIP" }, { key: "bidang", label: "Bidang" }, { key: "sertifikasi", label: "Sertifikasi" }];
    case "jabatan-ttd":
      return [{ key: "nama", label: "Nama Jabatan", required: true }, { key: "kode", label: "Kode", required: true }, { key: "level", label: "Level", options: ["Direksi", "Vice President", "Kepala Divisi", "Manager", "Staff"] }];
    case "status-pengadaan":
    case "status-pengujian":
    case "status-pembayaran":
      return [{ key: "nama", label: "Nama Status", required: true }, { key: "kode", label: "Kode", required: true }, { key: "warna", label: "Warna (hex)" }, { key: "urutan", label: "Urutan", type: "number" }];
    default:
      return [{ key: "nama", label: "Nama", required: true }];
  }
}

// ─── Generic Add/Edit Modal ────────────────────────────────────────────────────
function MasterModal({ title, fields, initial, onSave, onClose }: {
  title: string;
  fields: ReturnType<typeof getFormFields>;
  initial?: MasterItem;
  onSave: (data: Record<string, any>) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState<Record<string, any>>(() => {
    const init: Record<string, any> = {};
    fields.forEach(f => { init[f.key] = initial?.[f.key] ?? f.options?.[0] ?? ""; });
    return init;
  });

  const canSubmit = fields.filter(f => f.required).every(f => form[f.key]?.toString().trim());

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <h3 className="text-[18px] font-bold text-[#252271]">{title}</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <X size={16} className="text-gray-400" />
          </button>
        </div>
        <div className="px-6 py-5 space-y-3.5 max-h-[60vh] overflow-y-auto">
          {fields.map(f => (
            <div key={f.key}>
              <label className="text-[11.5px] font-semibold text-gray-500 mb-1 block">
                {f.label} {f.required && <span className="text-red-400">*</span>}
              </label>
              {f.options ? (
                <select
                  value={form[f.key]}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  className="w-full h-10 rounded-xl border border-gray-200 px-4 text-[12.5px] text-gray-800 outline-none focus:border-[#252271] cursor-pointer"
                >
                  {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input
                  type={f.type || "text"}
                  value={form[f.key]}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  className="w-full h-10 rounded-xl border border-gray-200 px-4 text-[12.5px] text-gray-800 outline-none focus:border-[#252271]"
                  placeholder={`Masukkan ${f.label.toLowerCase()}...`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="px-6 pb-6 pt-3 flex justify-end gap-3 border-t border-gray-100">
          <button onClick={onClose} className="px-5 py-2.5 rounded-xl text-[12.5px] font-medium text-gray-500 hover:bg-gray-100">Batal</button>
          <button
            onClick={() => onSave(form)}
            disabled={!canSubmit}
            className="px-6 py-2.5 rounded-xl text-[12.5px] font-semibold text-white bg-gradient-to-b from-[#e6251c] to-[#c20f06] hover:brightness-110 active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Confirm Delete ────────────────────────────────────────────────────────────
function ConfirmDeleteModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl p-6 text-center" onClick={e => e.stopPropagation()}>
        <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
          <Trash2 size={24} className="text-red-500" />
        </div>
        <h3 className="text-[16px] font-bold text-gray-800 mb-1">Hapus Data?</h3>
        <p className="text-[12px] text-gray-400 mb-5">Data yang dihapus tidak bisa dipulihkan.</p>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 h-10 rounded-xl border border-gray-200 text-gray-500 text-[12.5px] font-medium hover:bg-gray-50">Batal</button>
          <button onClick={onConfirm} className="flex-1 h-10 rounded-xl bg-red-500 text-white text-[12.5px] font-semibold hover:bg-red-600">Ya, Hapus</button>
        </div>
      </div>
    </div>
  );
}

// ─── Master Data Screen ────────────────────────────────────────────────────────
export function MasterDataScreen() {
  const [activeTab, setActiveTab] = useState<TabId>((getFigmaCaptureConfig()?.masterTab as TabId) || "vendor");
  const [allData, setAllData] = useState<Record<TabId, MasterItem[]>>(MOCK_DATA);
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<MasterItem | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [warning, setWarning] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    detail?: string;
    variant: WarningVariant;
  }>({
    isOpen: false,
    title: "",
    message: "",
    variant: "warning",
  });

  const loadVendors = async () => {
    const response = await api.get("/vendors");
    const vendors = (response.data || []).map((vendor: any) => ({
      id: vendor.id,
      nama: vendor.nama,
      npwp: vendor.npwp || "—",
      kategori: vendor.kategori,
      status: String(vendor.status || "").replace(/^./, (letter) => letter.toUpperCase()),
      kontak: vendor.kontak_person || "—",
      telepon: vendor.telepon || "—",
    }));
    setAllData((previous) => ({ ...previous, vendor: vendors }));
  };

  useEffect(() => { loadVendors().catch((error) => console.error("Gagal memuat master vendor:", error)); }, []);

  const currentTabDef = TABS.find(t => t.id === activeTab)!;
  const columns = useMemo(() => getColumns(activeTab), [activeTab]);
  const formFields = useMemo(() => getFormFields(activeTab), [activeTab]);
  const data = allData[activeTab] || [];

  const filtered = useMemo(() => {
    if (!search) return data;
    const q = search.toLowerCase();
    return data.filter(item => Object.values(item).some(v => String(v).toLowerCase().includes(q)));
  }, [data, search]);

  const checkIsDuplicate = (formData: Record<string, any>, excludeId?: string) => {
    const currentList = allData[activeTab] || [];
    const newName = (formData.nama || formData.tahun || "").toString().trim().toLowerCase();
    const newKode = (formData.kode || "").toString().trim().toLowerCase();

    return currentList.find((item) => {
      if (excludeId && item.id === excludeId) return false;
      const itemName = (item.nama || item.tahun || "").toString().trim().toLowerCase();
      if (newName && itemName && newName === itemName) return true;
      if (newKode && item.kode) {
        const itemKode = item.kode.toString().trim().toLowerCase();
        if (newKode === itemKode) return true;
      }
      return false;
    });
  };

  const handleAdd = async (formData: Record<string, any>) => {
    const duplicate = checkIsDuplicate(formData);
    if (duplicate) {
      setWarning({
        isOpen: true,
        title: "Data Duplikat Terdeteksi",
        message: `Data dengan nama atau kode "${formData.nama || formData.kode || 'tersebut'}" sudah terdaftar pada Master Data ${currentTabDef.label}. Tidak diperbolehkan menginputkan data ganda.`,
        variant: "duplicate",
      });
      return;
    }

    if (activeTab === "vendor") {
      try {
        await api.post("/vendors", { ...formData, kontakPerson: formData.kontak, status: String(formData.status || "aktif").toLowerCase() });
        await loadVendors();
        setShowAdd(false);
      } catch (err: any) {
        setWarning({
          isOpen: true,
          title: "Gagal Menambahkan Vendor",
          message: err.response?.data?.message || "Nama vendor sudah ada atau data tidak valid.",
          variant: "error",
        });
      }
      return;
    }
    const prefix = activeTab.split("-").map(w => w[0].toUpperCase()).join("");
    const newItem: MasterItem = {
      id: `${prefix}-${String(data.length + 1).padStart(3, "0")}`,
      ...formData,
    };
    setAllData(prev => ({ ...prev, [activeTab]: [newItem, ...prev[activeTab]] }));
    setShowAdd(false);
  };

  const handleEdit = async (formData: Record<string, any>) => {
    if (!showEdit) return;

    const duplicate = checkIsDuplicate(formData, showEdit.id);
    if (duplicate) {
      setWarning({
        isOpen: true,
        title: "Data Duplikat Terdeteksi",
        message: `Data dengan nama atau kode "${formData.nama || formData.kode || 'tersebut'}" sudah terdaftar pada Master Data ${currentTabDef.label}. Tidak diperbolehkan mengubah ke data yang sudah ada.`,
        variant: "duplicate",
      });
      return;
    }

    if (activeTab === "vendor") {
      try {
        await api.put(`/vendors/${showEdit.id}`, { ...formData, kontakPerson: formData.kontak, status: String(formData.status || "aktif").toLowerCase() });
        await loadVendors();
        setShowEdit(null);
      } catch (err: any) {
        setWarning({
          isOpen: true,
          title: "Gagal Mengubah Vendor",
          message: err.response?.data?.message || "Nama vendor sudah ada atau data tidak valid.",
          variant: "error",
        });
      }
      return;
    }
    setAllData(prev => ({
      ...prev,
      [activeTab]: prev[activeTab].map(item => item.id === showEdit.id ? { ...item, ...formData } : item),
    }));
    setShowEdit(null);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    if (activeTab === "vendor") {
      await api.delete(`/vendors/${deleteId}`);
      await loadVendors();
      setDeleteId(null);
      return;
    }
    setAllData(prev => ({
      ...prev,
      [activeTab]: prev[activeTab].filter(item => item.id !== deleteId),
    }));
    setDeleteId(null);
  };

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc] select-none">
      <div className="max-w-[1280px] mx-auto px-6 py-6">
        <AdminTopBar title="Master Data" subtitle="Kelola data referensi sistem" />

        {/* Tab Groups */}
        <div className="space-y-3 mb-6">
          {TAB_GROUPS.map(group => {
            const groupTabs = TABS.filter(t => t.group === group);
            return (
              <div key={group}>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 pl-1">{group}</p>
                <div className="flex gap-2 flex-wrap">
                  {groupTabs.map(t => {
                    const Icon = t.icon;
                    const isActive = activeTab === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => { setActiveTab(t.id); setSearch(""); }}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[11.5px] font-medium transition-all ${
                          isActive
                            ? "text-white shadow-md"
                            : "text-gray-500 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                        }`}
                        style={isActive ? { background: "linear-gradient(75deg, #e6251c, #ff7676)" } : {}}
                      >
                        <Icon size={13} className={isActive ? "text-white" : "text-gray-400"} />
                        {t.label}
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ml-0.5 ${
                          isActive ? "bg-white/25 text-white" : "bg-gray-100 text-gray-500"
                        }`}>
                          {(allData[t.id] || []).length}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Search + Add */}
        <div className="flex items-center justify-between mb-4">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              className="h-9 pl-9 pr-4 rounded-xl border border-gray-200 bg-white text-[12px] text-gray-700 outline-none focus:border-[#252271] w-64"
              placeholder={`Cari ${currentTabDef.label.toLowerCase()}...`}
            />
          </div>
          <button
            onClick={() => setShowAdd(true)}
            className="h-9 px-4 rounded-xl text-[12px] font-semibold text-white bg-gradient-to-b from-[#e6251c] to-[#c20f06] flex items-center gap-1.5 hover:brightness-110 active:scale-95 shrink-0"
          >
            <Plus size={14} /> Tambah {currentTabDef.label}
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-[#252271] flex text-[11px] font-bold text-white uppercase tracking-wider">
            {columns.map(col => (
              <div key={col.key} className="flex-1 px-5 py-3">{col.label}</div>
            ))}
            <div className="w-28 px-3 py-3 text-right">Aksi</div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <Database size={40} className="mx-auto text-gray-200 mb-3" />
              <p className="text-[13px] text-gray-400">Tidak ada data ditemukan</p>
            </div>
          ) : (
            filtered.map((item, i) => (
              <div key={item.id} className={`flex items-center hover:bg-[#fafbff] transition-colors group ${i > 0 ? "border-t border-gray-100" : ""}`}>
                {columns.map(col => (
                  <div key={col.key} className="flex-1 px-5 py-3">
                    {col.render ? col.render(item) : <span className="text-[12px] text-gray-700">{item[col.key]}</span>}
                  </div>
                ))}
                <div className="w-28 px-3 py-3 flex items-center justify-end gap-1">
                  <button onClick={() => setShowEdit(item)} className="p-1.5 rounded-lg hover:bg-indigo-50 transition-colors" title="Edit">
                    <Edit3 size={14} className="text-indigo-500" />
                  </button>
                  <button onClick={() => setDeleteId(item.id)} className="p-1.5 rounded-lg hover:bg-red-50 transition-colors" title="Hapus">
                    <Trash2 size={14} className="text-red-400" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modals */}
      {showAdd && (
        <MasterModal
          title={`Tambah ${currentTabDef.label}`}
          fields={formFields}
          onSave={handleAdd}
          onClose={() => setShowAdd(false)}
        />
      )}
      {showEdit && (
        <MasterModal
          title={`Edit ${currentTabDef.label}`}
          fields={formFields}
          initial={showEdit}
          onSave={handleEdit}
          onClose={() => setShowEdit(null)}
        />
      )}
      {deleteId && <ConfirmDeleteModal onConfirm={handleDelete} onClose={() => setDeleteId(null)} />}

      <WarningModal
        isOpen={warning.isOpen}
        onClose={() => setWarning(prev => ({ ...prev, isOpen: false }))}
        title={warning.title}
        message={warning.message}
        detail={warning.detail}
        variant={warning.variant}
      />
    </div>
  );
}
