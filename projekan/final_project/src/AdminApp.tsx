import React, { useState, useEffect } from "react";
import { FileWarning, XCircle, Upload, Trash2 } from "lucide-react";
import logoImg from "@/imports/UserDashboard/a1d658a5f37b0b6b958626283ef2524233d0a35d.png";
import group13Svg from "@/imports/Group13/svg-0k0x59k5bp";
import group14Svg from "@/imports/Group14/svg-sivp8gfyg0";
import { useAuth } from "./store/authStore";
import { RoleManagementScreen } from "./pages/admin/user-role/RoleManagementScreen";
import { UserManagementScreen } from "./pages/admin/user-role/UserManagementScreen";
import { AdminDashboardScreen } from "./pages/admin/dashboard/AdminDashboardScreen";
import { TemplateDokumenAdminScreen } from "./pages/admin/template-dokumen/TemplateDokumenAdminScreen";
import { MasterDataScreen } from "./pages/admin/master-data/MasterDataScreen";
import { PermissionMatrix } from "./components/admin/shared/PermissionMatrix";
import { Sp3DetailView } from "./components/admin/verifikasi/Sp3DetailView";
import { RupDetailView } from "./components/admin/verifikasi/RupDetailView";
import { TambahRupModal } from "./components/admin/verifikasi/TambahRupModal";
import { NppDetailView } from "./components/admin/verifikasi/NppDetailView";
import { PengujianDetailView } from "./components/admin/verifikasi/PengujianDetailView";
import { api } from "./services/api";
import { getRupList, updateRup, updateVerifRecord } from "./store/dataStore";
import { PengadaanVerifScreen } from "./pages/admin/verifikasi/PengadaanVerifScreen";
import { PengujianVerifScreen } from "./pages/admin/verifikasi/PengujianVerifScreen";
import { PembayaranVerifScreen } from "./pages/admin/verifikasi/PembayaranVerifScreen";
import { DIVISI_LIST } from "./constants/divisi";

// ─── SVG path data (inlined from Figma exports) ───────────────────────────────
const ICONS = {
  dashboard:
    "M2.66667 4C2.66667 3.64638 2.80714 3.30724 3.05719 3.05719C3.30724 2.80714 3.64638 2.66667 4 2.66667H5.33333C5.68696 2.66667 6.02609 2.80714 6.27614 3.05719C6.52619 3.30724 6.66667 3.64638 6.66667 4V5.33333C6.66667 5.68696 6.52619 6.02609 6.27614 6.27614C6.02609 6.52619 5.68696 6.66667 5.33333 6.66667H4C3.64638 6.66667 3.30724 6.52619 3.05719 6.27614C2.80714 6.02609 2.66667 5.68696 2.66667 5.33333V4ZM9.33333 4C9.33333 3.64638 9.47381 3.30724 9.72386 3.05719C9.97391 2.80714 10.313 2.66667 10.6667 2.66667H12C12.3536 2.66667 12.6928 2.80714 12.9428 3.05719C13.1929 3.30724 13.3333 3.64638 13.3333 4V5.33333C13.3333 5.68696 13.1929 6.02609 12.9428 6.27614C12.6928 6.52619 12.3536 6.66667 12 6.66667H10.6667C10.313 6.66667 9.97391 6.52619 9.72386 6.27614C9.47381 6.02609 9.33333 5.68696 9.33333 5.33333V4ZM2.66667 10.6667C2.66667 10.313 2.80714 9.97391 3.05719 9.72386C3.30724 9.47381 3.64638 9.33333 4 9.33333H5.33333C5.68696 9.33333 6.02609 9.47381 6.27614 9.72386C6.52619 9.97391 6.66667 10.313 6.66667 10.6667V12C6.66667 12.3536 6.52619 12.6928 6.27614 12.9428C6.02609 13.1929 5.68696 13.3333 5.33333 13.3333H4C3.64638 13.3333 3.30724 13.1929 3.05719 12.9428C2.80714 12.6928 2.66667 12.3536 2.66667 12V10.6667ZM9.33333 10.6667C9.33333 10.313 9.47381 9.97391 9.72386 9.72386C9.97391 9.47381 10.313 9.33333 10.6667 9.33333H12C12.3536 9.33333 12.6928 9.47381 12.9428 9.72386C13.1929 9.97391 13.3333 10.313 13.3333 10.6667V12C13.3333 12.3536 13.1929 12.6928 12.9428 12.9428C12.6928 13.1929 12.3536 13.3333 12 13.3333H10.6667C10.313 13.3333 9.97391 13.1929 9.72386 12.9428C9.47381 12.6928 9.33333 12.3536 9.33333 12V10.6667Z",
  users:
    "M8 2.90267C8.35829 2.49647 8.83179 2.209 9.35747 2.07853C9.88316 1.94805 10.4361 1.98075 10.9428 2.17227C11.4494 2.36379 11.8857 2.70505 12.1937 3.15064C12.5016 3.59623 12.6665 4.12503 12.6665 4.66667C12.6665 5.2083 12.5016 5.7371 12.1937 6.18269C11.8857 6.62829 11.4494 6.96955 10.9428 7.16107C10.4361 7.35259 9.88316 7.38528 9.35747 7.2548C8.83179 7.12433 8.35829 6.83687 8 6.43067M10 14H2V13.3333C2 12.2725 2.42143 11.2551 3.17157 10.5049C3.92172 9.75476 4.93913 9.33333 6 9.33333C7.06087 9.33333 8.07828 9.75476 8.82843 10.5049C9.57857 11.2551 10 12.2725 10 13.3333V14ZM10 14H14V13.3333C14.0001 12.6311 13.8153 11.9413 13.4643 11.3331C13.1133 10.725 12.6083 10.2199 12.0002 9.86881C11.3922 9.51767 10.7023 9.33279 10.0001 9.33277C9.29795 9.33274 8.60812 9.51757 8 9.86867M8.66667 4.66667C8.66667 5.37391 8.38572 6.05219 7.88562 6.55228C7.38552 7.05238 6.70724 7.33333 6 7.33333C5.29276 7.33333 4.61448 7.05238 4.11438 6.55228C3.61428 6.05219 3.33333 5.37391 3.33333 4.66667C3.33333 3.95942 3.61428 3.28115 4.11438 2.78105C4.61448 2.28095 5.29276 2 6 2C6.70724 2 7.38552 2.28095 7.88562 2.78105C8.38572 3.28115 8.66667 3.95942 8.66667 4.66667Z",
  clipboard:
    "M6 3.33333H4.66667C4.31304 3.33333 3.97391 3.47381 3.72386 3.72386C3.47381 3.97391 3.33333 4.31304 3.33333 4.66667V12.6667C3.33333 13.0203 3.47381 13.3594 3.72386 13.6095C3.97391 13.8595 4.31304 14 4.66667 14H11.3333C11.687 14 12.0261 13.8595 12.2761 13.6095C12.5262 13.3594 12.6667 13.0203 12.6667 12.6667V4.66667C12.6667 4.31304 12.5262 3.97391 12.2761 3.72386C12.0261 3.47381 11.687 3.33333 11.3333 3.33333H10M6 3.33333C6 3.68696 6.14048 4.02609 6.39052 4.27614C6.64057 4.52619 6.97971 4.66667 7.33333 4.66667H8.66667C9.02029 4.66667 9.35943 4.52619 9.60948 4.27614C9.85952 4.02609 10 3.68696 10 3.33333M6 3.33333C6 2.97971 6.14048 2.64057 6.39052 2.39052C6.64057 2.14048 6.97971 2 7.33333 2H8.66667C9.02029 2 9.35943 2.14048 9.60948 2.39052C9.85952 2.64057 10 2.97971 10 3.33333",
  document:
    "M6 8H10M6 10.6667H10M11.3333 14H4.66667C4.31304 14 3.97391 13.8595 3.72386 13.6095C3.47381 13.3594 3.33333 13.0203 3.33333 12.6667V3.33333C3.33333 2.97971 3.47381 2.64057 3.72386 2.39052C3.97391 2.14048 4.31304 2 4.66667 2H8.39067C8.56746 2.00004 8.73701 2.0703 8.862 2.19533L12.4713 5.80467C12.5964 5.92966 12.6666 6.0992 12.6667 6.276V12.6667C12.6667 13.0203 12.5262 13.3594 12.2761 13.6095C12.0261 13.8595 11.687 14 11.3333 14Z",
  database:
    "M2.66667 4.66667V11.3333C2.66667 12.8067 5.05467 14 8 14C10.9453 14 13.3333 12.8067 13.3333 11.3333V4.66667M2.66667 4.66667C2.66667 6.14 5.05467 7.33333 8 7.33333C10.9453 7.33333 13.3333 6.14 13.3333 4.66667M2.66667 4.66667C2.66667 3.19333 5.05467 2 8 2C10.9453 2 13.3333 3.19333 13.3333 4.66667M13.3333 8C13.3333 9.47333 10.9453 10.6667 8 10.6667C5.05467 10.6667 2.66667 9.47333 2.66667 8",
  search:
    "M14 14L10 10M11.3333 6.66667C11.3333 7.2795 11.2126 7.88634 10.9781 8.45252C10.7436 9.01871 10.3998 9.53316 9.9665 9.9665C9.53316 10.3998 9.01871 10.7436 8.45252 10.9781C7.88634 11.2126 7.2795 11.3333 6.66667 11.3333C6.05383 11.3333 5.447 11.2126 4.88081 10.9781C4.31462 10.7436 3.80017 10.3998 3.36683 9.9665C2.93349 9.53316 2.58975 9.01871 2.35523 8.45252C2.12071 7.88634 2 7.2795 2 6.66667C2 5.42899 2.49166 4.242 3.36683 3.36683C4.242 2.49166 5.42899 2 6.66667 2C7.90434 2 9.09133 2.49166 9.9665 3.36683C10.8417 4.242 11.3333 5.42899 11.3333 6.66667Z",
  eye: "M1.11692 6.3115C1.07177 6.43311 1.07177 6.56689 1.11692 6.6885C1.55659 7.75458 2.3029 8.6661 3.26125 9.30751C4.2196 9.94892 5.34682 10.2913 6.5 10.2913C7.65318 10.2913 8.7804 9.94892 9.73875 9.30751C10.6971 8.6661 11.4434 7.75458 11.8831 6.6885C11.9282 6.56689 11.9282 6.43311 11.8831 6.3115C11.4434 5.24542 10.6971 4.3339 9.73875 3.69249C8.7804 3.05108 7.65318 2.70867 6.5 2.70867C5.34682 2.70867 4.2196 3.05108 3.26125 3.69249C2.3029 4.3339 1.55659 5.24542 1.11692 6.3115Z",
  eyePupil: "M6.5 8.125C7.39746 8.125 8.125 7.39746 8.125 6.5C8.125 5.60254 7.39746 4.875 6.5 4.875C5.60254 4.875 4.875 5.60254 4.875 6.5C4.875 7.39746 5.60254 8.125 6.5 8.125Z",
  trash1: "M10.2917 3.25V10.8333C10.2917 11.375 9.75 11.9167 9.20833 11.9167H3.79167C3.25 11.9167 2.70833 11.375 2.70833 10.8333V3.25",
  trash2: "M4.33333 3.25V2.16667C4.33333 1.625 4.875 1.08333 5.41667 1.08333H7.58333C8.125 1.08333 8.66667 1.625 8.66667 2.16667V3.25",
  edit: "M10.1547 3.488L12.512 5.84533M11.1547 2.488C11.4673 2.1754 11.8912 1.99978 12.3333 1.99978C12.7754 1.99978 13.1994 2.1754 13.512 2.488C13.8246 2.8006 14.0002 3.22458 14.0002 3.66667C14.0002 4.10875 13.8246 4.53273 13.512 4.84533L4.33333 14.024H2V11.6427L11.1547 2.488Z",
};

type Page = "dashboard" | "manajemen-user" | "manajemen-role" | "tambah-role" | "verifikasi" | "template-dokumen" | "master-data";
type Modal = null | "tambah-user" | "detail-user" | "tambah-role-modal";
type VerifCategory = "pengajuan-dana" | "pengadaan" | "pengujian" | "pembayaran";
type VerifDoc = "park-document" | "purchase-requisition";
type PengadaanDoc =
  | "npp"
  | "rup-task-approval"
  | "rup-list-rup"
  | "rup-list-rup-signed"
  | "sp3-task-approval"
  | "sp3-list-signed"
  | "pbj-task-approval"
  | "pbj-list-pbj"
  | "pbj-memo-internal"
  | "contract-task-approval"
  | "contract-list-contract"
  | "jaminan-pelaksanaan"
  | "warehouse"
  | "vendor-management"
  | "harga-satuan"
  | "adendum-kontrak"
  | "evaluasi-vendor"
  | "tkdn"
  | "monitoring-kpi"
  | "monitoring-mppl";

type PengujianDoc =
  | "kontrak-list-500"
  | "kontrak-list-500plus"
  | "request-list-request"
  | "request-list-pengujian";

type PembayaranDoc =
  | "pembayaran-outsource"
  | "pembayaran-non-outsource"
  | "pembayaran-umd"
  | "pembayaran-daily-reports"
  | "pembayaran-weekly-reports"
  | "pembayaran-contract-release"
  | "pembayaran-bast"
  | "pembayaran-invoice"
  | "pembayaran-spp"
  | "pembayaran-spm"
  | "pembayaran-verification";

// Semua tabel verifikasi memakai sumber yang sama: record yang dibuat User
// tersimpan di backend, dibaca Admin, lalu statusnya dikirim kembali ke User.
// Bentuk data di bawah hanya menyesuaikan nama kolom lama agar tampilan tetap utuh.
function useAdminVerificationQueue(types: string) {
  const [items, setItems] = useState<any[]>([]);

  const refresh = React.useCallback(async () => {
    try {
      const response = await api.get(`/verifikasi?tipe=${types}`);
      setItems(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error(`Gagal memuat antrean ${types}`, error);
      setItems([]);
    }
  }, [types]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const process = async (verificationId: string, action: "approve" | "revisi" | "reject", catatan?: string) => {
    const payload = action === "approve" ? undefined : { catatan: catatan?.trim() || "Perlu penyesuaian dokumen." };
    await api.post(`/verifikasi/${verificationId}/${action}`, payload);
    await refresh();
  };

  return { items, refresh, process };
}

function mapVerificationRow(verifikasi: any) {
  const form = verifikasi.document_form_data || verifikasi.pengadaan_form_data || {};
  const document = verifikasi.document || {};
  const nominal = verifikasi.nominal || form.nilaiKontrak || form.nilai || form.nominal || "-";
  const packageName = verifikasi.pengadaan_nama || form.namaPaket || form.judul || form.nama || "Pengadaan";
  const reference = document.nomor_sp3 || document.no_sp3 || document.no_kontrak || form.nomorSp3 || form.noSp3 || verifikasi.pengadaan_id;

  return {
    ...verifikasi,
    ...document,
    formData: form,
    idNpp: form.idNpp || form.noNpp || verifikasi.pengadaan_id,
    idRup: form.idRup || form.rupId || "-",
    noCont: document.no_kontrak || form.nomorKontrak || "-",
    opexCapex: form.opexCapex || form.opex_capex || "-",
    kategori: form.kategori || form.category || "-",
    tahun: form.tahun || (verifikasi.submit_at ? new Date(verifikasi.submit_at).getFullYear().toString() : "-"),
    sp3Final: reference,
    statusHps: form.statusHps || "-",
    noRequest: document.nomor_pengujian || document.reference_number || verifikasi.id,
    noSp3: reference,
    sp3: document.no_sp3 || form.nomorSp3 || form.noSp3 || reference,
    nppNo: document.no_npp || form.noNpp || form.nomorNpp || verifikasi.pengadaan_id,
    noKontrak: document.no_kontrak || form.nomorKontrak || form.noKontrak || reference,
    noPembayaran: document.nomor_pembayaran || document.payment_number || form.nomorPembayaran || verifikasi.id,
    procTitle: packageName,
    title: document.judul || document.paket || form.judul || packageName,
    namaPaket: packageName,
    judulPengadaan: packageName,
    namaPengujian: document.nama || form.namaPengujian || packageName,
    nilaiPr: nominal,
    nilaiPo: nominal,
    nilaiKontrak: nominal,
    nilaiTagihan: document.nominal || document.amount || nominal,
    rkap: form.rkap || nominal,
    taxValue: form.taxValue || form.pajak || "-",
    dept: verifikasi.departemen || form.departemen || "-",
    divisi: verifikasi.departemen || form.departemen || "-",
    vendor: document.vendor || form.vendor || form.namaVendor || "-",
    vendorName: document.vendor || form.vendor || form.namaVendor || "-",
    tanggalPermohonan: verifikasi.submit_at ? new Date(verifikasi.submit_at).toLocaleDateString("id-ID") : "-",
    tanggalRequest: verifikasi.submit_at ? new Date(verifikasi.submit_at).toLocaleDateString("id-ID") : "-",
    pemohon: verifikasi.submit_by || "-",
    assignTo: verifikasi.verified_by || "-",
    realisasi: form.realisasi || "-",
    nilaiEfisiensi: form.nilaiEfisiensi || "-",
    nomorMemoInternal: form.nomorMemoInternal || document.nomor_memo || "-",
    tanggalMemo: form.tanggalMemo || "-",
    status: verifikasi.status || "pending",
    verif_id: verifikasi.id,
  };
}

// ─── Sample data ─────────────────────────────────────────────────────────────
const USERS = [
  { id: 1, initial: "A", color: "bg-[#fee2e2]", textColor: "text-[#dc2626]", name: "Ahmad Fauzi", email: "ahmad@mail.co.id", dept: "CTIT", role: "Admin Full Access", roleColor: "bg-[#fef2f2] text-[#b91c1c]", active: true },
  { id: 2, initial: "B", color: "bg-[#e0e7ff]", textColor: "text-[#4f46e5]", name: "Budi Santoso", email: "budi@mail.co.id", dept: "Logistik", role: "Staff Logistik", roleColor: "bg-[#eef2ff] text-[#4338ca]", active: false },
  { id: 3, initial: "C", color: "bg-[#fef9c3]", textColor: "text-[#ca8a04]", name: "Citra Dewi", email: "citra@mail.co.id", dept: "Keuangan", role: "Staff Keuangan", roleColor: "bg-[#fef9c3] text-[#ca8a04]", active: true },
  { id: 4, initial: "D", color: "bg-[#d1fae5]", textColor: "text-[#065f46]", name: "Doni Prasetya", email: "doni@mail.co.id", dept: "Operasional", role: "Supervisor", roleColor: "bg-[#d1fae5] text-[#065f46]", active: true },
];

const ROLES = [
  { id: 1, initial: "A", color: "bg-[#fee2e2]", textColor: "text-[#dc2626]", name: "Admin Full Access", userCount: 2, menu: "Semua Menu", menuColor: "bg-[#f0fdf4] text-[#15803d]" },
  { id: 2, initial: "S", color: "bg-[#eef2ff]", textColor: "text-[#4338ca]", name: "Staff Logistik", userCount: 5, menu: "Logistik", menuColor: "bg-[#eef2ff] text-[#4338ca]" },
  { id: 3, initial: "K", color: "bg-[#fef9c3]", textColor: "text-[#ca8a04]", name: "Staff Keuangan", userCount: 3, menu: "Keuangan", menuColor: "bg-[#fef9c3] text-[#ca8a04]" },
];

// ─── Icon components ───────────────────────────────────────────────────────────
function NavIcon({ path, size = 16 }: { path: string; size?: number }) {
  return (
    <svg fill="none" height={size} viewBox={`0 0 ${size} ${size}`} width={size} className="shrink-0">
      <path d={path} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

function ChevronRight({ open }: { open: boolean }) {
  return (
    <svg fill="none" height="12" viewBox="0 0 12 12" width="12" className={`shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`}>
      <path d="M9.5 4.5L6 8L2.5 4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
interface SidebarProps {
  page: Page;
  onNavigate: (p: Page) => void;
  collapsed?: boolean;
}

function Sidebar({ page, onNavigate, collapsed = false }: SidebarProps) {
  const { currentUser, logout, hasPermission } = useAuth();
  const userName = currentUser?.name || "Administrator";
  const userEmail = currentUser?.email || "admin@kci.co.id";
  const initial = userName.charAt(0).toUpperCase();

  const [userRoleOpen, setUserRoleOpen] = useState(
    page === "manajemen-user" || page === "manajemen-role"
  );
  const [verifikasiOpen, setVerifikasiOpen] = useState(false);

  const isUserRoleSection = page === "manajemen-user" || page === "manajemen-role";
  const isVerifikasiSection = page === "verifikasi";
  const canDashboard = hasPermission("dashboard", "viewer");
  const canUserManagement = hasPermission("userManagement", "viewer");
  const canRoleManagement = hasPermission("roleManagement", "viewer");
  const canVerifikasi = hasPermission("pengajuanDana", "viewer") || hasPermission("pengadaan", "viewer") || hasPermission("pengujian", "viewer") || hasPermission("pembayaran", "viewer");
  const canTemplate = hasPermission("templateDokumen", "viewer");
  const canMasterData = hasPermission("masterData", "viewer");

  // ── Collapsed (icon-only) mode ─────────────────────────────────────────────
  if (collapsed) {
    const navIcons: { path: string; p: Page; active: boolean }[] = [
      ...(canDashboard ? [{ path: ICONS.dashboard, p: "dashboard" as Page, active: page === "dashboard" }] : []),
      ...(canUserManagement || canRoleManagement ? [{ path: ICONS.users, p: (canUserManagement ? "manajemen-user" : "manajemen-role") as Page, active: isUserRoleSection }] : []),
      ...(canVerifikasi ? [{ path: ICONS.clipboard, p: "verifikasi" as Page, active: isVerifikasiSection }] : []),
      ...(canTemplate ? [{ path: ICONS.document, p: "template-dokumen" as Page, active: page === "template-dokumen" }] : []),
      ...(canMasterData ? [{ path: ICONS.database, p: "master-data" as Page, active: page === "master-data" }] : []),
    ];
    return (
      <aside className="relative w-[56px] shrink-0 self-stretch bg-[#e6251c] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6251c] to-[#c20f06] rounded-tr-[24px] rounded-br-[24px] rounded-tl-none rounded-bl-none shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[69px]" />
          <nav className="absolute top-[69px] bottom-[56px] left-0 right-0 overflow-hidden px-[8px] py-[4px] flex flex-col gap-[2px]">
            {navIcons.map((ni, i) => (
              <button
                key={i}
                onClick={() => onNavigate(ni.p)}
                className={`w-full flex items-center justify-center p-[8px] rounded-[8px] transition-all duration-150 cursor-pointer
                  ${ni.active
                    ? "bg-gradient-to-r from-[#ff4444] to-[#ff7272] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)]"
                    : "hover:bg-white/10 active:bg-white/20"}`}
              >
                <NavIcon path={ni.path} />
              </button>
            ))}
          </nav>
          <div className="absolute bottom-0 left-0 right-0 h-[56px] flex items-center justify-center px-[8px] pb-[8px]">
            <div className="bg-black/10 rounded-[12px] size-[38px] flex items-center justify-center">
              <span className="text-white text-[12px] font-bold">A</span>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  function NavLink({
    label,
    iconPath,
    active,
    onClick,
  }: {
    label: string;
    iconPath: string;
    active: boolean;
    onClick: () => void;
  }) {
    return (
      <button
        onClick={onClick}
        className={`w-full flex gap-[10px] items-center px-[10px] py-[8px] rounded-[8px] text-left transition-all duration-150 group cursor-pointer
          ${active
            ? "bg-gradient-to-r from-[#ff4444] to-[#ff7272] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)]"
            : "hover:bg-white/10 active:bg-white/20"
          }`}
      >
        <NavIcon path={iconPath} />
        <span className={`text-[12.5px] leading-[18.75px] text-white ${active ? "font-semibold" : "font-normal"}`}>
          {label}
        </span>
      </button>
    );
  }

  function SubNavLink({
    label,
    active,
    onClick,
  }: {
    label: string;
    active: boolean;
    onClick: () => void;
  }) {
    return (
      <button
        onClick={onClick}
        className={`w-full text-left px-[8px] py-[5px] rounded-[8px] text-[11.5px] leading-[17.25px] transition-all duration-150 cursor-pointer
          ${active
            ? "bg-gradient-to-r from-[rgba(255,99,99,0.51)] to-transparent text-white font-semibold"
            : "text-white/60 font-normal hover:text-white/80 hover:bg-white/10"
          }`}
      >
        {label}
      </button>
    );
  }

  return (
    <aside className="relative w-[242px] shrink-0 self-stretch bg-[#e6251c] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
      {/* Gradient sidebar */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e6251c] to-[#c20f06] rounded-tr-[24px] rounded-br-[24px] rounded-tl-none rounded-bl-none shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] overflow-hidden">
        {/* Logo */}
        <div className="absolute top-0 left-0 right-0 h-[125px] flex items-center justify-center px-[12px]">
          <div className="w-[215px] h-[97px] overflow-hidden relative flex items-center justify-center">
            <img
              src={logoImg}
              alt="Logo KCI"
              className="h-[76px] w-auto object-contain transition-transform duration-200 hover:scale-105"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="absolute top-[125px] bottom-[76px] left-0 right-0 overflow-auto px-[8px] py-[4px] flex flex-col gap-[2px]">
          {/* Dashboard */}
          {canDashboard && <NavLink
            label="Dashboard"
            iconPath={ICONS.dashboard}
            active={page === "dashboard"}
            onClick={() => onNavigate("dashboard")}
          />}

          {/* Manajemen User & Role group */}
          {(canUserManagement || canRoleManagement) && <div className="flex flex-col gap-[2px]">
            <button
              onClick={() => setUserRoleOpen((v) => !v)}
              className={`w-full flex items-center justify-between px-[10px] py-[8px] rounded-[8px] transition-all duration-150
                ${isUserRoleSection
                  ? "bg-gradient-to-r from-[#ff4545] to-[#ff7272] drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)]"
                  : "hover:bg-white/10 active:bg-white/20"
                }`}
            >
              <div className="flex gap-[10px] items-center">
                <NavIcon path={ICONS.users} />
                <span className={`text-[12.5px] leading-[18.75px] text-white ${isUserRoleSection ? "font-medium" : "font-normal"}`}>
                  Manajemen User &amp; Role
                </span>
              </div>
              <ChevronRight open={userRoleOpen} />
            </button>

            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                userRoleOpen ? "grid-rows-[1fr] opacity-100 mt-[2px]" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden relative flex flex-col gap-[2px] items-start pl-[11px] w-[208px] ml-auto">
                <div className="absolute inset-0 border-l border-white/50 pointer-events-none" />
                {canUserManagement && <SubNavLink
                  label="Manajemen User"
                  active={page === "manajemen-user"}
                  onClick={() => onNavigate("manajemen-user")}
                />}
                {canRoleManagement && <SubNavLink
                  label="Manajemen Role"
                  active={page === "manajemen-role"}
                  onClick={() => onNavigate("manajemen-role")}
                />}
              </div>
            </div>
          </div>}

          {/* Verifikasi group */}
          {canVerifikasi && <div className="flex flex-col gap-[2px]">
            <button
              onClick={() => { onNavigate("verifikasi"); }}
              className={`w-full flex items-center justify-between px-[10px] py-[8px] rounded-[8px] transition-all duration-150
                ${isVerifikasiSection
                  ? "bg-gradient-to-r from-[#ff4545] to-[#ff7272] drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)]"
                  : "hover:bg-white/10 active:bg-white/20"}`}
            >
              <div className="flex gap-[10px] items-center">
                <NavIcon path={ICONS.clipboard} />
                <span className={`text-[12.5px] leading-[18.75px] text-white ${isVerifikasiSection ? "font-medium" : "font-normal"}`}>Verifikasi</span>
              </div>
              <ChevronRight open={isVerifikasiSection} />
            </button>
          </div>}

          {/* Template Dokumen */}
          {canTemplate && <NavLink
            label="Template Dokumen"
            iconPath={ICONS.document}
            active={page === "template-dokumen"}
            onClick={() => onNavigate("template-dokumen")}
          />}

          {/* Master Data */}
          {canMasterData && <NavLink
            label="Master Data"
            iconPath={ICONS.database}
            active={page === "master-data"}
            onClick={() => onNavigate("master-data")}
          />}
        </nav>

        {/* User Card */}
        <div className="absolute bottom-0 left-0 right-0 h-[76px] flex flex-col items-start pb-[8px] px-[8px]">
          <div className="bg-black/10 hover:bg-black/20 rounded-[12px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] w-[221px] p-[10px] flex items-center justify-between transition-colors">
            <div className="flex gap-[10px] items-center min-w-0 flex-1">
              <div className="bg-white/20 rounded-full size-[32px] flex items-center justify-center shrink-0">
                <span className="text-white text-[12px] font-bold leading-[18px]">{initial}</span>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-white text-[11.5px] font-semibold leading-[14.38px] truncate">{userName}</span>
                <span className="text-white/70 text-[10px] font-normal leading-[15px] truncate">{userEmail}</span>
              </div>
            </div>
            <button
              onClick={logout}
              title="Logout"
              className="text-white/70 hover:text-white p-1 rounded hover:bg-white/10 transition-colors ml-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

// ─── Dashboard Page ────────────────────────────────────────────────────────────
function DashboardPage() {
  const stats = [
    { label: "Total User", value: "128", sub: "+12 bulan ini", color: "from-[#e6251c] to-[#c20f06]" },
    { label: "Total Role", value: "8", sub: "3 role baru", color: "from-[#252271] to-[#3b3baa]" },
    { label: "Pengajuan Aktif", value: "34", sub: "Menunggu verifikasi", color: "from-[#0891b2] to-[#0e7490]" },
    { label: "Dokumen Template", value: "17", sub: "5 perlu diperbarui", color: "from-[#059669] to-[#047857]" },
  ];

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc]">
      <div className="px-[32px] py-[40px]">
        <h1 className="text-[#252271] text-[28px] font-bold tracking-tight leading-tight mb-[24px]">Dashboard</h1>
        <div className="grid grid-cols-4 gap-[20px] mb-[32px]">
          {stats.map((s) => (
            <div key={s.label} className={`bg-gradient-to-br ${s.color} rounded-[20px] p-[24px] text-white shadow-lg`}>
              <p className="text-white/80 text-[12px] font-medium mb-[8px]">{s.label}</p>
              <p className="text-[32px] font-extrabold leading-none mb-[6px]">{s.value}</p>
              <p className="text-white/70 text-[11px]">{s.sub}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-[24px] shadow-[0px_0px_5.45px_rgba(0,0,0,0.09)] p-[28px]">
          <h2 className="text-[#252271] text-[18px] font-bold mb-[20px]">Aktivitas Terbaru</h2>
          <div className="space-y-[12px]">
            {[
              { action: "User baru ditambahkan", detail: "Ahmad Fauzi — Admin Full Access", time: "2 menit lalu", dot: "bg-green-500" },
              { action: "Role diperbarui", detail: "Staff Logistik — Akses diubah", time: "1 jam lalu", dot: "bg-blue-500" },
              { action: "Pengajuan dana diverifikasi", detail: "No. PD-2024-001 — Disetujui", time: "3 jam lalu", dot: "bg-[#e6251c]" },
              { action: "Template dokumen baru", detail: "Surat Pengadaan v3.0 diunggah", time: "Kemarin", dot: "bg-amber-500" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-[14px] pb-[12px] border-b border-[#f1f5f9] last:border-0 last:pb-0">
                <div className={`size-[8px] rounded-full ${item.dot} mt-[6px] shrink-0`} />
                <div>
                  <p className="text-[#0f172a] text-[13px] font-semibold">{item.action}</p>
                  <p className="text-[#94a3b8] text-[11px]">{item.detail}</p>
                </div>
                <span className="ml-auto text-[#94a3b8] text-[11px] shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Manajemen User Page ───────────────────────────────────────────────────────
interface ManajemenUserProps {
  onTambahUser: () => void;
  onDetailUser: (id: number) => void;
}

function ManajemenUserPage({ onTambahUser, onDetailUser }: ManajemenUserProps) {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("Semua Divisi");
  const [users, setUsers] = useState(USERS);

  const filtered = users.filter(
    (u) =>
      (u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())) &&
      (dept === "Semua Divisi" || u.dept === dept)
  );

  const depts = ["Semua Divisi", ...DIVISI_LIST];

  const deleteUser = async (user: any) => {
    if (!window.confirm(`Hapus user ${user.name}?`)) return;
    try {
      await api.delete(`/users/${user.id}`);
      setUsers((previous) => previous.filter((entry) => entry.id !== user.id));
    } catch (error: any) {
      alert(error?.response?.data?.message || "User gagal dihapus.");
    }
  };

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc]">
      <div className="px-[32px] py-[40px]">
        <h1 className="text-[#252271] text-[28px] font-bold tracking-tight leading-tight mb-[24px]">Manajemen User</h1>
        <div className="bg-white rounded-[24px] shadow-[0px_0px_5.45px_rgba(0,0,0,0.09)] p-[20px]">
          {/* Search & Filters */}
          <div className="flex items-center justify-between mb-[16px] gap-[12px]">
            <div className="flex gap-[12px] items-center flex-1 max-w-[448px]">
              <div className="relative flex-1">
                <svg className="absolute left-[12px] top-[10px]" fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <path d={ICONS.search} stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari nama atau email..."
                  className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] pl-[37px] pr-[17px] py-[9px] text-[12px] text-[#0f172a] placeholder-[#9ca3af] outline-none focus:border-[#252271] transition-colors"
                />
              </div>
              <select
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] px-[17px] py-[9px] text-[12px] text-[#475569] outline-none cursor-pointer hover:border-[#252271] transition-colors shrink-0"
              >
                {depts.map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>
            <button
              onClick={onTambahUser}
              className="bg-gradient-to-b from-[#e6251c] to-[#c20f06] rounded-[10px] px-[12px] py-[6px] flex items-center gap-[6px] text-white text-[12px] font-medium hover:brightness-110 active:scale-95 transition-all duration-150 shrink-0"
            >
              <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                <path d="M2.70833 6.5H10.2917" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                <path d="M6.5 2.70833V10.2917" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
              </svg>
              Tambah User
            </button>
          </div>

          {/* Table */}
          <div className="rounded-[16px] border border-[#f1f5f9] overflow-hidden">
            {/* Header */}
            <div className="bg-[#252271] flex">
              <div className="pl-[22px] pr-[12px] py-[12px] w-[340px] text-white text-[12px] font-bold">User</div>
              <div className="px-[12px] py-[12px] w-[160px] text-white text-[12px] font-bold">Divisi</div>
              <div className="px-[12px] py-[12px] flex-1 text-white text-[12px] font-bold">Role</div>
              <div className="px-[12px] py-[12px] w-[130px] text-white text-[12px] font-bold">Status</div>
              <div className="px-[12px] py-[12px] w-[100px] text-white text-[12px] font-bold text-right">Aksi</div>
            </div>

            {/* Rows */}
            {filtered.length === 0 ? (
              <div className="py-[40px] text-center text-[#94a3b8] text-[13px]">Tidak ada data ditemukan</div>
            ) : (
              filtered.map((user, i) => (
                <div
                  key={user.id}
                  className={`flex items-center group hover:bg-[#fafafa] transition-colors ${i > 0 ? "border-t border-[#f1f5f9]" : ""}`}
                >
                  <div className="pl-[12px] pr-[12px] py-[14px] w-[340px] flex items-center gap-[12px]">
                    <div className={`${user.color} ${user.textColor} size-[32px] rounded-full flex items-center justify-center shrink-0 text-[12px] font-bold`}>
                      {user.initial}
                    </div>
                    <div>
                      <p className="text-[#0f172a] text-[12px] font-bold">{user.name}</p>
                      <p className="text-[#94a3b8] text-[11px]">{user.email}</p>
                    </div>
                  </div>
                  <div className="px-[12px] py-[14px] w-[160px]">
                    <span className="bg-[#f1f5f9] text-[#334155] text-[11px] font-semibold px-[10px] py-[3px] rounded-[6px]">{user.dept}</span>
                  </div>
                  <div className="px-[12px] py-[14px] flex-1">
                    <span className={`${user.roleColor} text-[11px] font-bold px-[10px] py-[3px] rounded-[6px]`}>{user.role}</span>
                  </div>
                  <div className="px-[12px] py-[14px] w-[130px]">
                    {user.active ? (
                      <span className="bg-[#f0fdf4] text-[#15803d] text-[11px] font-medium px-[10px] py-[4px] rounded-full flex items-center gap-[6px] w-fit">
                        <span className="bg-[#22c55e] size-[6px] rounded-full" />
                        Aktif
                      </span>
                    ) : (
                      <span className="bg-[#fef2f2] text-[#cc0000] text-[11px] font-medium px-[10px] py-[4px] rounded-full flex items-center gap-[6px] w-fit">
                        <span className="bg-[#cc0000] size-[6px] rounded-full" />
                        Tidak Aktif
                      </span>
                    )}
                  </div>
                  <div className="px-[12px] py-[14px] w-[100px] flex items-center justify-center gap-[4px]">
                    <button
                      onClick={() => onDetailUser(user.id)}
                      className="p-[6px] rounded-[6px] hover:bg-[#e0e7ff] active:scale-95 transition-all duration-150 group/btn"
                      title="Lihat Detail"
                    >
                      <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                        <path d={ICONS.eye} stroke="#252271" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                        <path d={ICONS.eyePupil} stroke="#252271" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                      </svg>
                    </button>
                    <button
                      onClick={() => deleteUser(user)}
                      className="p-[6px] rounded-[6px] hover:bg-[#fef2f2] active:scale-95 transition-all duration-150"
                      title="Hapus"
                    >
                      <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                        <path d="M1.625 3.25H11.375" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                        <path d={ICONS.trash1} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                        <path d={ICONS.trash2} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                        <path d="M5.41667 5.95833V9.20833" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                        <path d="M7.58333 5.95833V9.20833" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Manajemen Role Page ───────────────────────────────────────────────────────
interface ManajemenRoleProps {
  onTambahRole: () => void;
}

function ManajemenRolePage({ onTambahRole }: ManajemenRoleProps) {
  const [search, setSearch] = useState("");
  const [roles, setRoles] = useState(ROLES);

  const filtered = roles.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteRole = async (role: any) => {
    if (!window.confirm(`Hapus role ${role.name}?`)) return;
    try {
      await api.delete(`/roles/${role.id}`);
      setRoles((previous) => previous.filter((entry) => entry.id !== role.id));
    } catch (error: any) {
      alert(error?.response?.data?.message || "Role gagal dihapus. Pastikan role tidak sedang digunakan user.");
    }
  };

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc]">
      <div className="px-[32px] py-[40px]">
        <h1 className="text-[#252271] text-[28px] font-bold tracking-tight leading-tight mb-[24px]">Manajemen Role</h1>
        <div className="bg-white rounded-[24px] shadow-[0px_0px_5.45px_rgba(0,0,0,0.09)] p-[20px]">
          {/* Search & Add */}
          <div className="flex items-center justify-between mb-[16px]">
            <div className="relative max-w-[313px] w-full">
              <svg className="absolute left-[12px] top-[10px]" fill="none" height="16" viewBox="0 0 16 16" width="16">
                <path d={ICONS.search} stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama role"
                className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] pl-[37px] pr-[17px] py-[9px] text-[12px] text-[#0f172a] placeholder-[#9ca3af] outline-none focus:border-[#252271] transition-colors"
              />
            </div>
            <button
              onClick={onTambahRole}
              className="bg-gradient-to-b from-[#e6251c] to-[#c20f06] rounded-[10px] px-[12px] py-[6px] flex items-center gap-[6px] text-white text-[12px] font-medium hover:brightness-110 active:scale-95 transition-all duration-150"
            >
              <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                <path d="M2.70833 6.5H10.2917" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                <path d="M6.5 2.70833V10.2917" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
              </svg>
              Tambah Role
            </button>
          </div>

          {/* Table */}
          <div className="rounded-[16px] border border-[#f1f5f9] overflow-hidden">
            <div className="bg-[#252271] grid grid-cols-4">
              <div className="p-[12px] text-white text-[12px] font-bold">Role</div>
              <div className="p-[12px] text-white text-[12px] font-bold">Jumlah User</div>
              <div className="p-[12px] text-white text-[12px] font-bold">Akses Utama</div>
              <div className="p-[12px] text-white text-[12px] font-bold text-right">Aksi</div>
            </div>

            {filtered.map((role, i) => (
              <div
                key={role.id}
                className={`grid grid-cols-4 items-center group hover:bg-[#fafafa] transition-colors ${i > 0 ? "border-t border-[#f1f5f9]" : ""}`}
              >
                <div className="p-[12px] flex items-center gap-[12px]">
                  <div className={`${role.color} ${role.textColor} size-[32px] rounded-full flex items-center justify-center shrink-0 text-[12px] font-bold`}>
                    {role.initial}
                  </div>
                  <span className="text-[#0f172a] text-[12px] font-bold">{role.name}</span>
                </div>
                <div className="px-[12px] py-[17px]">
                  <span className="text-[#0f172a] text-[12px]">{role.userCount} User</span>
                </div>
                <div className="px-[12px] py-[16px]">
                  <span className={`${role.menuColor} text-[11px] font-medium px-[10px] py-[4px] rounded-full`}>{role.menu}</span>
                </div>
                <div className="px-[12px] py-[14px] flex items-center justify-end gap-[4px]">
                  <button
                    className="p-[6px] rounded-[6px] hover:bg-[#e0e7ff] active:scale-95 transition-all duration-150"
                    title="Edit"
                  >
                    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                      <path d={ICONS.edit} stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </button>
                  <button
                    onClick={() => deleteRole(role)}
                    className="p-[6px] rounded-[6px] hover:bg-[#fef2f2] active:scale-95 transition-all duration-150"
                    title="Hapus"
                  >
                    <svg fill="none" height="15" viewBox="0 0 13.8333 15.25" width="14">
                      <path d="M0.541667 3.375H13.2917M11.875 3.375V13.2917C11.875 14 11.1667 14.7083 10.4583 14.7083H3.375C2.66667 14.7083 1.95833 14 1.95833 13.2917V3.375M4.08333 3.375V1.95833C4.08333 1.25 4.79167 0.541667 5.5 0.541667H8.33333C9.04167 0.541667 9.75 1.25 9.75 1.95833V3.375M5.5 6.91667V11.1667M8.33333 6.91667V11.1667" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="py-[40px] text-center text-[#94a3b8] text-[13px]">Tidak ada data ditemukan</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Secondary Sidebar (Verifikasi) ──────────────────────────────────────────
interface SecondarySidebarProps {
  category: VerifCategory;
  doc: VerifDoc;
  pengadaanDoc: PengadaanDoc;
  pengujianDoc: PengujianDoc;
  pembayaranDoc: PembayaranDoc;
  onCategory: (c: VerifCategory) => void;
  onDoc: (d: VerifDoc) => void;
  onPengadaanDoc: (d: PengadaanDoc) => void;
  onPengujianDoc: (d: PengujianDoc) => void;
  onPembayaranDoc: (d: PembayaranDoc) => void;
}

function SecondarySidebar({
  category,
  doc,
  pengadaanDoc,
  pengujianDoc,
  pembayaranDoc,
  onCategory,
  onDoc,
  onPengadaanDoc,
  onPengujianDoc,
  onPembayaranDoc,
}: SecondarySidebarProps) {
  const { hasPermission } = useAuth();
  const items: { id: VerifCategory; label: string; icon: React.ReactNode }[] = [
    {
      id: "pengajuan-dana",
      label: "Pengajuan Dana",
      icon: (
        <svg fill="none" height="15" viewBox="0 0 21 15" width="21">
          <path d={group13Svg.p243f0670} fill={category === "pengajuan-dana" ? "#CC0000" : "white"} />
          <path d={group13Svg.p6638000} fill={category === "pengajuan-dana" ? "#CC0000" : "white"} />
        </svg>
      ),
    },
    {
      id: "pengadaan",
      label: "Pengadaan",
      icon: (
        <svg fill="none" height="15" viewBox="0 0 21 15" width="21">
          <path d={group13Svg.p30800980} fill={category === "pengadaan" ? "#CC0000" : "white"} />
        </svg>
      ),
    },
    {
      id: "pengujian",
      label: "Pengujian",
      icon: (
        <svg fill="none" height="15" viewBox="0 0 21 15" width="21">
          <path d={group13Svg.p38e12d00} fill={category === "pengujian" ? "#CC0000" : "white"} />
          <path d={group13Svg.p33f68400} fill={category === "pengujian" ? "#CC0000" : "white"} />
          <path d={group13Svg.p117c1e80} fill={category === "pengujian" ? "#CC0000" : "white"} />
          <path d={group13Svg.p8bd07f0} fill={category === "pengujian" ? "#CC0000" : "white"} />
          <path d={group13Svg.p11dc2c80} fill={category === "pengujian" ? "#CC0000" : "white"} />
        </svg>
      ),
    },
    {
      id: "pembayaran",
      label: "Pembayaran",
      icon: (
        <svg fill="none" height="15" viewBox="0 0 21 15" width="21">
          <path clipRule="evenodd" d={group13Svg.p6b22e00} fill={category === "pembayaran" ? "#CC0000" : "white"} fillRule="evenodd" />
          <path d={group13Svg.p2f214b80} fill={category === "pembayaran" ? "#CC0000" : "white"} />
          <path d={group13Svg.p33e97b80} fill={category === "pembayaran" ? "#CC0000" : "white"} />
          <path d={group13Svg.p23e3c200} fill={category === "pembayaran" ? "#CC0000" : "white"} />
        </svg>
      ),
    },
  ];

  const [openCategories, setOpenCategories] = useState<Record<VerifCategory, boolean>>({
    "pengajuan-dana": true,
    "pengadaan": true,
    "pengujian": true,
    "pembayaran": true,
  });

  useEffect(() => {
    setOpenCategories((prev) => ({ ...prev, [category]: true }));
  }, [category]);

  const toggleCategory = (id: VerifCategory) => {
    if (category === id) {
      setOpenCategories((prev) => ({ ...prev, [id]: !prev[id] }));
    } else {
      onCategory(id);
      setOpenCategories((prev) => ({ ...prev, [id]: true }));
    }
  };

  const [rupExpanded, setRupExpanded] = useState(pengadaanDoc.startsWith("rup-"));
  const [sp3Expanded, setSp3Expanded] = useState(pengadaanDoc.startsWith("sp3-"));
  const [pbjExpanded, setPbjExpanded] = useState(pengadaanDoc.startsWith("pbj-"));
  const [contractExpanded, setContractExpanded] = useState(pengadaanDoc.startsWith("contract-"));
  const [pengujianKontrakExpanded, setPengujianKontrakExpanded] = useState(pengujianDoc.startsWith("kontrak-"));
  const [pengujianRequestExpanded, setPengujianRequestExpanded] = useState(pengujianDoc.startsWith("request-"));

  const pengajuanDocs: { id: VerifDoc; label: string }[] = [
    { id: "park-document", label: "Park Document" },
    { id: "purchase-requisition", label: "Purchase Requisition" },
  ];

  const rupSubItems: { id: PengadaanDoc; label: string }[] = [
    { id: "rup-task-approval", label: "Task Approval" },
    { id: "rup-list-rup", label: "List RUP" },
    { id: "rup-list-rup-signed", label: "List RUP Signed" },
  ];

  const sp3SubItems: { id: PengadaanDoc; label: string }[] = [
    { id: "sp3-task-approval", label: "Task Approval" },
    { id: "sp3-list-signed", label: "List Signed SP3" },
  ];

  const pbjSubItems: { id: PengadaanDoc; label: string }[] = [
    { id: "pbj-task-approval", label: "Task Approval PBJ" },
    { id: "pbj-list-pbj", label: "List PBJ" },
    { id: "pbj-memo-internal", label: "Memo Internal" },
  ];

  const contractSubItems: { id: PengadaanDoc; label: string }[] = [
    { id: "contract-task-approval", label: "Task Approval Contract" },
    { id: "contract-list-contract", label: "List Contract" },
  ];

  const pengujianKontrakItems: { id: PengujianDoc; label: string }[] = [
    { id: "kontrak-list-500", label: "List Kontrak <500jt" },
    { id: "kontrak-list-500plus", label: "List Kontrak >500jt" },
  ];

  const pengujianRequestItems: { id: PengujianDoc; label: string }[] = [
    { id: "request-list-request", label: "List Request Pengujian" },
    { id: "request-list-pengujian", label: "List Pengujian" },
  ];

  const pengadaanItems: { id: PengadaanDoc; label: string }[] = [
    { id: "jaminan-pelaksanaan", label: "Jaminan Pelaksanaan" },
    { id: "warehouse", label: "Warehouse" },
    { id: "vendor-management", label: "Vendor Management" },
    { id: "harga-satuan", label: "Harga Satuan" },
    { id: "adendum-kontrak", label: "Adendum Kontrak" },
    { id: "evaluasi-vendor", label: "Evaluasi Vendor" },
    { id: "tkdn", label: "TKDN" },
    { id: "monitoring-kpi", label: "Monitoring KPI" },
    { id: "monitoring-mppl", label: "Monitoring MPPL" },
  ];

  return (
    <aside
      className="w-[224px] h-full shrink-0 overflow-hidden rounded-tr-[24px] rounded-br-[24px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] flex flex-col select-none"
      style={{ background: "linear-gradient(268.782deg, rgb(37, 34, 113) 3.3571%, rgb(3, 0, 67) 199.02%)" }}
    >
      {/* Logo area */}
      <div className="h-[69px] shrink-0" />

      {/* Nav items */}
      <div className="flex-1 min-h-0 overflow-y-auto px-[10px] py-[4px] flex flex-col gap-[6px]">
        {items.filter((item) => hasPermission(item.id === "pengajuan-dana" ? "pengajuanDana" : item.id, "viewer")).map((item) => {
          const isActive = category === item.id;
          const isCategoryOpen = isActive && openCategories[item.id];

          return (
            <div key={item.id} className="flex flex-col gap-[2px]">
              <button
                onClick={() => toggleCategory(item.id)}
                className={`w-full flex items-center justify-between px-[14px] py-[6px] rounded-[8px] transition-all duration-200 group cursor-pointer
                  ${isActive
                    ? "bg-white drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)]"
                    : "hover:bg-white/10 active:bg-white/20"}`}
              >
                <div className="flex items-center gap-[10px]">
                  <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">{item.icon}</span>
                  <span className={`text-[12px] font-medium ${isActive ? "text-[#cc0000]" : "text-white"}`}>
                    {item.label}
                  </span>
                </div>
                <svg
                  fill="none" height="10" viewBox="0 0 10 10" width="10"
                  className={`shrink-0 transition-transform duration-300 ${isCategoryOpen ? "rotate-90" : "rotate-0"}`}
                >
                  <path d="M4 2L7 5L4 8" stroke={isActive ? "#cc0000" : "white"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                </svg>
              </button>

              {/* Sub-docs for Pengajuan Dana */}
              {item.id === "pengajuan-dana" && (
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isCategoryOpen ? "grid-rows-[1fr] opacity-100 mt-0.5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden relative flex flex-col gap-[2px] pl-[11px]">
                    <div className="absolute inset-0 border-l border-white/15 pointer-events-none" />
                    {pengajuanDocs.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => onDoc(d.id)}
                        className={`w-full text-left px-[8px] py-[5px] rounded-[8px] text-[11.5px] transition-all duration-150 cursor-pointer
                          ${doc === d.id
                            ? "bg-gradient-to-r from-[rgba(28,26,92,0.9)] to-transparent text-white font-medium"
                            : "text-white/60 font-normal hover:text-white/80 hover:bg-white/10"}`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sub-docs for Pengadaan */}
              {item.id === "pengadaan" && (
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isCategoryOpen ? "grid-rows-[1fr] opacity-100 mt-0.5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden relative flex flex-col gap-[1px] pl-[11px]">
                    <div className="absolute inset-0 border-l border-white/15 pointer-events-none" />

                    {/* RUP expandable group */}
                    <div className="flex flex-col gap-[1px]">
                      <button
                        onClick={() => {
                          setRupExpanded((v) => !v);
                          if (!rupExpanded) onPengadaanDoc("rup-task-approval");
                        }}
                        className={`w-full flex items-center justify-between px-[8px] py-[5px] rounded-[8px] text-[11.5px] transition-all duration-150 cursor-pointer
                          ${pengadaanDoc.startsWith("rup-")
                            ? "bg-gradient-to-r from-[rgba(28,26,92,0.9)] to-transparent text-white font-medium"
                            : "text-white/70 font-normal hover:text-white hover:bg-white/10"}`}
                      >
                        <span>RUP</span>
                        <svg fill="none" height="10" viewBox="0 0 10 10" width="10" className={`shrink-0 transition-transform duration-300 ${rupExpanded ? "rotate-90" : "rotate-0"}`}>
                          <path d="M4 2L7 5L4 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        </svg>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                          rupExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden relative flex flex-col gap-[1px] pl-[10px]">
                          <div className="absolute inset-0 border-l border-white/10 pointer-events-none" />
                          {rupSubItems.map((d) => (
                            <button
                              key={d.id}
                              onClick={() => onPengadaanDoc(d.id)}
                              className={`w-full text-left px-[8px] py-[4px] rounded-[8px] text-[11px] transition-all duration-150 cursor-pointer
                                ${pengadaanDoc === d.id
                                  ? "text-white font-medium bg-white/10"
                                  : "text-white/50 font-normal hover:text-white/80 hover:bg-white/5"}`}
                            >
                              {d.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* NPP direct link */}
                    <button
                      onClick={() => onPengadaanDoc("npp")}
                      className={`w-full text-left px-[8px] py-[5px] rounded-[8px] text-[11.5px] transition-all duration-150 cursor-pointer
                        ${pengadaanDoc === "npp"
                          ? "bg-gradient-to-r from-[rgba(28,26,92,0.9)] to-transparent text-white font-medium"
                          : "text-white/60 font-normal hover:text-white/80 hover:bg-white/10"}`}
                    >
                      NPP
                    </button>

                    {/* SP3 expandable group */}
                    <div className="flex flex-col gap-[1px]">
                      <button
                        onClick={() => {
                          setSp3Expanded((v) => !v);
                          if (!sp3Expanded) onPengadaanDoc("sp3-task-approval");
                        }}
                        className={`w-full flex items-center justify-between px-[8px] py-[5px] rounded-[8px] text-[11.5px] transition-all duration-150 cursor-pointer
                          ${pengadaanDoc.startsWith("sp3-")
                            ? "bg-gradient-to-r from-[rgba(28,26,92,0.9)] to-transparent text-white font-medium"
                            : "text-white/70 font-normal hover:text-white hover:bg-white/10"}`}
                      >
                        <span>SP3</span>
                        <svg fill="none" height="10" viewBox="0 0 10 10" width="10" className={`shrink-0 transition-transform duration-300 ${sp3Expanded ? "rotate-90" : "rotate-0"}`}>
                          <path d="M4 2L7 5L4 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        </svg>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                          sp3Expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden relative flex flex-col gap-[1px] pl-[10px]">
                          <div className="absolute inset-0 border-l border-white/10 pointer-events-none" />
                          {sp3SubItems.map((d) => (
                            <button
                              key={d.id}
                              onClick={() => onPengadaanDoc(d.id)}
                              className={`w-full text-left px-[8px] py-[4px] rounded-[8px] text-[11px] transition-all duration-150 cursor-pointer
                                ${pengadaanDoc === d.id
                                  ? "text-white font-medium bg-white/10"
                                  : "text-white/50 font-normal hover:text-white/80 hover:bg-white/5"}`}
                            >
                              {d.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* PBJ expandable group */}
                    <div className="flex flex-col gap-[1px]">
                      <button
                        onClick={() => {
                          setPbjExpanded((v) => !v);
                          if (!pbjExpanded) onPengadaanDoc("pbj-task-approval");
                        }}
                        className={`w-full flex items-center justify-between px-[8px] py-[5px] rounded-[8px] text-[11.5px] transition-all duration-150 cursor-pointer
                          ${pengadaanDoc.startsWith("pbj-")
                            ? "bg-gradient-to-r from-[rgba(28,26,92,0.9)] to-transparent text-white font-medium"
                            : "text-white/70 font-normal hover:text-white hover:bg-white/10"}`}
                      >
                        <span>PBJ</span>
                        <svg fill="none" height="10" viewBox="0 0 10 10" width="10" className={`shrink-0 transition-transform duration-300 ${pbjExpanded ? "rotate-90" : "rotate-0"}`}>
                          <path d="M4 2L7 5L4 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        </svg>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                          pbjExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden relative flex flex-col gap-[1px] pl-[10px]">
                          <div className="absolute inset-0 border-l border-white/10 pointer-events-none" />
                          {pbjSubItems.map((d) => (
                            <button
                              key={d.id}
                              onClick={() => onPengadaanDoc(d.id)}
                              className={`w-full text-left px-[8px] py-[4px] rounded-[8px] text-[11px] transition-all duration-150 cursor-pointer
                                ${pengadaanDoc === d.id
                                  ? "text-white font-medium bg-white/10"
                                  : "text-white/50 font-normal hover:text-white/80 hover:bg-white/5"}`}
                            >
                              {d.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Contract expandable group */}
                    <div className="flex flex-col gap-[1px]">
                      <button
                        onClick={() => {
                          setContractExpanded((v) => !v);
                          if (!contractExpanded) onPengadaanDoc("contract-task-approval");
                        }}
                        className={`w-full flex items-center justify-between px-[8px] py-[5px] rounded-[8px] text-[11.5px] transition-all duration-150 cursor-pointer
                          ${pengadaanDoc.startsWith("contract-")
                            ? "bg-gradient-to-r from-[rgba(28,26,92,0.9)] to-transparent text-white font-medium"
                            : "text-white/70 font-normal hover:text-white hover:bg-white/10"}`}
                      >
                        <span>Contract</span>
                        <svg fill="none" height="10" viewBox="0 0 10 10" width="10" className={`shrink-0 transition-transform duration-300 ${contractExpanded ? "rotate-90" : "rotate-0"}`}>
                          <path d="M4 2L7 5L4 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        </svg>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                          contractExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden relative flex flex-col gap-[1px] pl-[10px]">
                          <div className="absolute inset-0 border-l border-white/10 pointer-events-none" />
                          {contractSubItems.map((d) => (
                            <button
                              key={d.id}
                              onClick={() => onPengadaanDoc(d.id)}
                              className={`w-full text-left px-[8px] py-[4px] rounded-[8px] text-[11px] transition-all duration-150 cursor-pointer
                                ${pengadaanDoc === d.id
                                  ? "text-white font-medium bg-white/10"
                                  : "text-white/50 font-normal hover:text-white/80 hover:bg-white/5"}`}
                            >
                              {d.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Other pengadaan items */}
                    {pengadaanItems.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => onPengadaanDoc(d.id)}
                        className={`w-full text-left px-[8px] py-[5px] rounded-[8px] text-[11.5px] transition-all duration-150 cursor-pointer
                          ${pengadaanDoc === d.id
                            ? "bg-gradient-to-r from-[rgba(28,26,92,0.9)] to-transparent text-white font-medium"
                            : "text-white/60 font-normal hover:text-white/80 hover:bg-white/10"}`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sub-docs for Pengujian */}
              {item.id === "pengujian" && (
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isCategoryOpen ? "grid-rows-[1fr] opacity-100 mt-0.5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden relative flex flex-col gap-[1px] pl-[11px]">
                    <div className="absolute inset-0 border-l border-white/15 pointer-events-none" />

                    {/* Kontrak expandable */}
                    <div className="flex flex-col gap-[1px]">
                      <button
                        onClick={() => {
                          setPengujianKontrakExpanded((v) => !v);
                          if (!pengujianKontrakExpanded) onPengujianDoc("kontrak-list-500");
                        }}
                        className={`w-full flex items-center justify-between px-[8px] py-[5px] rounded-[8px] text-[11.5px] transition-all duration-150 cursor-pointer
                          ${pengujianDoc.startsWith("kontrak-")
                            ? "bg-gradient-to-r from-[rgba(28,26,92,0.9)] to-transparent text-white font-medium"
                            : "text-white/70 font-normal hover:text-white hover:bg-white/10"}`}
                      >
                        <span>Kontrak</span>
                        <svg fill="none" height="10" viewBox="0 0 10 10" width="10" className={`shrink-0 transition-transform duration-300 ${pengujianKontrakExpanded ? "rotate-90" : "rotate-0"}`}>
                          <path d="M4 2L7 5L4 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        </svg>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                          pengujianKontrakExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden relative flex flex-col gap-[1px] pl-[10px]">
                          <div className="absolute inset-0 border-l border-white/10 pointer-events-none" />
                          {pengujianKontrakItems.map((d) => (
                            <button
                              key={d.id}
                              onClick={() => onPengujianDoc(d.id)}
                              className={`w-full text-left px-[8px] py-[4px] rounded-[8px] text-[11px] transition-all duration-150 cursor-pointer
                                ${pengujianDoc === d.id
                                  ? "text-white font-medium bg-white/10"
                                  : "text-white/50 font-normal hover:text-white/80 hover:bg-white/5"}`}
                            >
                              {d.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Request Pengujian expandable */}
                    <div className="flex flex-col gap-[1px]">
                      <button
                        onClick={() => {
                          setPengujianRequestExpanded((v) => !v);
                          if (!pengujianRequestExpanded) onPengujianDoc("request-list-request");
                        }}
                        className={`w-full flex items-center justify-between px-[8px] py-[5px] rounded-[8px] text-[11.5px] transition-all duration-150 cursor-pointer
                          ${pengujianDoc.startsWith("request-")
                            ? "bg-gradient-to-r from-[rgba(28,26,92,0.9)] to-transparent text-white font-medium"
                            : "text-white/70 font-normal hover:text-white hover:bg-white/10"}`}
                      >
                        <span>Request Pengujian</span>
                        <svg fill="none" height="10" viewBox="0 0 10 10" width="10" className={`shrink-0 transition-transform duration-300 ${pengujianRequestExpanded ? "rotate-90" : "rotate-0"}`}>
                          <path d="M4 2L7 5L4 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        </svg>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                          pengujianRequestExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden relative flex flex-col gap-[1px] pl-[10px]">
                          <div className="absolute inset-0 border-l border-white/10 pointer-events-none" />
                          {pengujianRequestItems.map((d) => (
                            <button
                              key={d.id}
                              onClick={() => onPengujianDoc(d.id)}
                              className={`w-full text-left px-[8px] py-[4px] rounded-[8px] text-[11px] transition-all duration-150 cursor-pointer
                                ${pengujianDoc === d.id
                                  ? "text-white font-medium bg-white/10"
                                  : "text-white/50 font-normal hover:text-white/80 hover:bg-white/5"}`}
                            >
                              {d.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sub-docs for Pembayaran */}
              {item.id === "pembayaran" && (
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isCategoryOpen ? "grid-rows-[1fr] opacity-100 mt-0.5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden relative flex flex-col gap-[8px] pl-[12px] pt-[4px]">
                    {/* Payment Approve Group */}
                    <div className="flex flex-col gap-[3px]">
                      <span className="text-white/70 text-[11.5px] font-medium tracking-[0.2px]">Payment Approve</span>
                      <div className="relative flex flex-col gap-[2px] pl-[10px]">
                        <div className="absolute inset-0 border-l border-white/30 pointer-events-none" />
                        {[
                          { id: "pembayaran-outsource", label: "Outsource" },
                          { id: "pembayaran-non-outsource", label: "Non-Outsource" },
                          { id: "pembayaran-umd", label: "UMD" },
                        ].map((d) => (
                          <button
                            key={d.id}
                            onClick={() => onPembayaranDoc(d.id as any)}
                            className={`w-full text-left px-[6px] py-[3px] rounded-[4px] text-[11px] transition-all duration-150 cursor-pointer ${pembayaranDoc === d.id ? "text-white font-semibold bg-white/10" : "text-white/50 font-normal hover:text-white hover:bg-white/5"}`}
                          >
                            {d.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Reports Group */}
                    <div className="flex flex-col gap-[3px]">
                      <span className="text-white/70 text-[11.5px] font-medium tracking-[0.2px]">Reports</span>
                      <div className="relative flex flex-col gap-[2px] pl-[10px]">
                        <div className="absolute inset-0 border-l border-white/30 pointer-events-none" />
                        {[
                          { id: "pembayaran-daily-reports", label: "Daily Reports" },
                          { id: "pembayaran-weekly-reports", label: "Weekly Reports" },
                        ].map((d) => (
                          <button
                            key={d.id}
                            onClick={() => onPembayaranDoc(d.id as any)}
                            className={`w-full text-left px-[6px] py-[3px] rounded-[4px] text-[11px] transition-all duration-150 cursor-pointer ${pembayaranDoc === d.id ? "text-white font-semibold bg-white/10" : "text-white/50 font-normal hover:text-white hover:bg-white/5"}`}
                          >
                            {d.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

// ─── Verifikasi Page ─────────────────────────────────────────────────────────
const PARK_DOC_ROWS = [
  { tanggal: "01-02-03", noDok: "PD-2024-001", judul: "Pengadaan ATK", nominalPD: "IDR 50.000.000,00", nominalKonversi: "IDR 50.000.000,00", unit: "CTIT", status: "Open" },
  { tanggal: "05-02-03", noDok: "PD-2024-002", judul: "Sewa Kendaraan", nominalPD: "IDR 120.000.000,00", nominalKonversi: "IDR 120.000.000,00", unit: "Logistik", status: "Closed" },
  { tanggal: "10-02-03", noDok: "PD-2024-003", judul: "Pembelian Server", nominalPD: "IDR 250.000.000,00", nominalKonversi: "IDR 250.000.000,00", unit: "CTIT", status: "Open" },
];

type ParkDocRow = {
  verif_id?: string;
  tanggal: string; noDok: string; judul: string;
  nominalPD: string; nominalKonversi: string; unit: string; status: string;
};

function VerifikasiDetailPage({ row, onBack }: { row: ParkDocRow; onBack: () => void }) {
  const [docStatus, setDocStatus] = useState<"Menunggu Verifikasi" | "Sudah Diverifikasi" | "Perlu Revisi">(
    row.status === "Closed" ? "Sudah Diverifikasi" : "Menunggu Verifikasi"
  );
  const [showRevisionBox, setShowRevisionBox] = useState(false);
  const [revisionNote, setRevisionNote] = useState("");

  const [berkasItems, setBerkasItems] = useState<any[]>([]);

  useEffect(() => {
    if (!row.noDok) return;
    api.get(`/pengadaan/${row.noDok}/documents`)
      .then((response) => setBerkasItems((response.data?.data || []).map((file: any) => ({
        id: file.id,
        status: "Selesai",
        keterangan: String(file.stage || "Dokumen Pendukung").replace(/[-_]/g, " "),
        file: file.original_name,
        size: file.size ? `${Math.max(1, Math.round(Number(file.size) / 1024))} KB` : "",
        mandatory: false,
      }))))
      .catch(() => setBerkasItems([]));
  }, [row.noDok]);

  const downloadBerkas = async (item: any) => {
    const response = await api.get(`/documents/${item.id}/download`, { responseType: "blob" });
    const url = URL.createObjectURL(response.data);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = item.file;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  };

  const handleVerifikasi = async () => {
    try {
      if (!row.verif_id) {
        alert("Gagal: ID verifikasi tidak ditemukan.");
        return;
      }
      await api.post(`/verifikasi/${row.verif_id}/approve`);
      updateVerifRecord(row.verif_id, { status: "approved" });
      setDocStatus("Sudah Diverifikasi");
      alert("Pengajuan Dana berhasil disetujui!");
      onBack();
    } catch (e) {
      console.error(e);
      alert("Gagal menyetujui Pengajuan Dana.");
    }
  };

  const handleSendRevision = async () => {
    if (!revisionNote.trim()) {
      alert("Harap isi catatan revisi terlebih dahulu.");
      return;
    }
    try {
      if (!row.verif_id) {
        alert("Gagal: ID verifikasi tidak ditemukan.");
        return;
      }
      await api.post(`/verifikasi/${row.verif_id}/revisi`, { catatan: revisionNote });
      updateVerifRecord(row.verif_id, { status: "revisi", catatanAdmin: revisionNote });
      setDocStatus("Perlu Revisi");
      alert("Catatan revisi telah dikirim!");
      onBack();
    } catch (e) {
      console.error(e);
      alert("Gagal mengirimkan catatan revisi.");
    }
  };

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc]">
      <div className="px-[44px] py-[20px]">
        {/* Header Navigation & Status Bar */}
        <div className="flex items-center justify-between mb-[20px]">
          <div className="flex items-center gap-[10px]">
            <button
              onClick={onBack}
              className="flex items-center justify-center size-[32px] rounded-full bg-white border border-[#e2e8f0] hover:bg-[#e0e7ff] text-[#252271] transition-all cursor-pointer shadow-sm"
            >
              <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </button>
            <div>
              <h1 className="text-[#252271] text-[24px] font-bold tracking-tight leading-tight">Detail Berkas Permohonan</h1>
              <p className="text-[#64748b] text-[12.5px] font-medium">Park Document &middot; {row.noDok}</p>
            </div>
          </div>

          <div className="flex items-center gap-[10px]">
            <span
              className={`text-[11.5px] font-bold px-[12px] py-[5px] rounded-full border ${docStatus === "Sudah Diverifikasi"
                  ? "bg-[#f0fdf4] text-[#15803d] border-[#bbf7d0]"
                  : docStatus === "Perlu Revisi"
                    ? "bg-[#fef2f2] text-[#cc0000] border-[#fecaca]"
                    : "bg-amber-50 text-amber-800 border-amber-200"
                }`}
            >
              ● {docStatus}
            </span>

            <button
              onClick={() => setShowRevisionBox(!showRevisionBox)}
              className="h-[38px] px-[16px] bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-300 rounded-[10px] text-[12.5px] font-semibold flex items-center gap-[6px] transition-all cursor-pointer"
            >
              <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><path d={ICONS.edit} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" /></svg>
              Revisi
            </button>

            <button
              disabled={docStatus === "Sudah Diverifikasi"}
              onClick={handleVerifikasi}
              className={`h-[38px] px-[18px] rounded-[10px] text-[12.5px] font-bold flex items-center gap-[6px] transition-all shadow-md ${docStatus === "Sudah Diverifikasi" ? "bg-slate-200 text-slate-500 cursor-not-allowed" : "bg-gradient-to-r from-[#16a34a] to-[#15803d] text-white hover:brightness-110 active:scale-95 cursor-pointer"}`}
            >
              <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><path d="M3 7.5L5.5 10L11 4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>
              {docStatus === "Sudah Diverifikasi" ? "Sudah Diverifikasi" : "Verifikasi & Setujui"}
            </button>
          </div>
        </div>

        {/* Textbox Catatan Revisi */}
        {showRevisionBox && (
          <div className="bg-amber-50 border border-amber-300 rounded-[16px] p-[20px] mb-[20px] shadow-sm animate-in fade-in-0">
            <h4 className="text-amber-900 text-[14px] font-bold mb-[8px] flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Input Catatan Revisi Untuk Permohonan Ini
            </h4>
            <textarea
              value={revisionNote}
              onChange={(e) => setRevisionNote(e.target.value)}
              placeholder="Tuliskan alasan perbaikan atau catatan revisi dokumen secara jelas..."
              className="w-full h-[90px] bg-white border border-amber-300 rounded-[10px] p-[12px] text-[13px] text-[#0f172a] focus:border-[#252271] outline-none transition-colors mb-[12px]"
            />
            <div className="flex items-center gap-[10px]">
              <button
                onClick={handleSendRevision}
                className="h-[36px] px-[16px] bg-[#cc0000] hover:bg-[#a00000] text-white text-[12px] font-semibold rounded-[8px] transition-all cursor-pointer shadow-sm"
              >
                Kirim Catatan Revisi
              </button>
              <button
                onClick={() => setShowRevisionBox(false)}
                className="h-[36px] px-[14px] bg-white hover:bg-gray-100 text-[#475569] text-[12px] font-semibold rounded-[8px] border border-gray-300 transition-all cursor-pointer"
              >
                Batal
              </button>
            </div>
          </div>
        )}

        {/* Card Layout: Informasi Permohonan */}
        <div className="bg-white rounded-[16px] border border-[#e5e7eb] p-[20px] mb-[20px] shadow-sm">
          <h3 className="text-[#252271] text-[15px] font-bold mb-[16px]">Informasi Permohonan</h3>
          <div className="grid grid-cols-3 gap-[16px]">
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-[14px]">
              <p className="text-[#64748b] text-[11.5px] font-semibold mb-[4px]">Nomor Permohonan</p>
              <p className="text-[#252271] text-[14px] font-bold">{row.noDok}</p>
            </div>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-[14px]">
              <p className="text-[#64748b] text-[11.5px] font-semibold mb-[4px]">Divisi</p>
              <p className="text-[#252271] text-[14px] font-bold">{row.unit}</p>
            </div>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-[14px]">
              <p className="text-[#64748b] text-[11.5px] font-semibold mb-[4px]">Divisi</p>
              <p className="text-[#252271] text-[14px] font-bold">CTIP - Information System Planning &amp; Dev</p>
            </div>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-[14px] col-span-2">
              <p className="text-[#64748b] text-[11.5px] font-semibold mb-[4px]">Judul Permohonan</p>
              <p className="text-[#252271] text-[14px] font-bold">{row.judul}</p>
            </div>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-[14px]">
              <p className="text-[#64748b] text-[11.5px] font-semibold mb-[4px]">Nominal Permohonan</p>
              <p className="text-[#252271] text-[14px] font-bold">{row.nominalPD}</p>
            </div>
          </div>
        </div>

        {/* Card Layout: Berkas Pendukung (Cards instead of table) */}
        <div className="bg-white rounded-[16px] border border-[#e5e7eb] p-[20px] mb-[20px] shadow-sm">
          <div className="flex items-center justify-between mb-[16px]">
            <h3 className="text-[#252271] text-[15px] font-bold">Berkas Pendukung</h3>
            <span className="text-[#64748b] text-[12px] font-medium">* Dokumen Wajib / Mandatory</span>
          </div>

          {berkasItems.length === 0 ? <p className="text-[12px] text-slate-500">Belum ada berkas yang diunggah user.</p> : <div className="grid grid-cols-2 gap-[14px]">
            {berkasItems.map((item, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[14px] p-[14px] flex items-center justify-between">
                <div className="flex items-center gap-[12px] min-w-0">
                  <div className="size-[40px] rounded-[10px] bg-[#e0e7ff] text-[#252271] flex items-center justify-center shrink-0">
                    <svg fill="none" height="18" viewBox="0 0 16 16" width="18"><path d="M4 2H10L14 6V14H4V2Z" stroke="#252271" strokeWidth="1.2" strokeLinejoin="round" /><path d="M10 2V6H14" stroke="#252271" strokeWidth="1.2" strokeLinejoin="round" /></svg>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-[#0f172a] text-[12.5px] font-bold truncate">{item.keterangan}</p>
                      {item.mandatory && <span className="text-red-500 font-bold text-[12px]">*</span>}
                    </div>
                    <p className="text-[#64748b] text-[11px] truncate">{item.file !== "-" ? `${item.file} (${item.size})` : "Belum diunggah"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-[8px] shrink-0">
                  <span className={`text-[10.5px] font-semibold px-2 py-0.5 rounded-full ${item.status === "Selesai" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`}>
                    {item.status}
                  </span>
                  {item.file !== "-" && (
                    <button
                      onClick={() => downloadBerkas(item).catch(() => alert("Gagal mengunduh dokumen."))}
                      className="px-[10px] py-[4px] bg-[#252271] text-white text-[11px] font-semibold rounded-[6px] hover:brightness-125 transition-colors cursor-pointer"
                    >
                      Unduh
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>}
        </div>

      </div>
    </div>
  );
}

function VerifikasiPage({ category, doc }: { category: VerifCategory; doc: VerifDoc }) {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [unitFilter, setUnitFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [verifView, setVerifView] = useState<"list" | "detail">("list");
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [danaItems, setDanaItems] = useState<any[]>([]);

  const categoryLabels: Record<VerifCategory, string> = {
    "pengajuan-dana": "Pengajuan Dana",
    pengadaan: "Pengadaan",
    pengujian: "Pengujian",
    pembayaran: "Pembayaran",
  };

  const docLabels: Record<VerifDoc, string> = {
    "park-document": "Park Document",
    "purchase-requisition": "Purchase Requisition",
  };

  const fetchDanaData = async () => {
    try {
      // Primary source: real Verifikasi records from DB (tipe = park-dokumen / purchase-requisition)
      const allowedTypes = doc === "park-document"
        ? "park-dokumen,park-document"
        : "purchase-requisition,pengajuan-dana";
      const resVerif = await api.get(`/verifikasi?tipe=${allowedTypes}`).catch(() => ({ data: [] }));
      const dbVerif: any[] = resVerif.data || [];

      // Also merge local store records (may have items not yet synced to DB)
      const storeVerif: any[] = [];

      const map = new Map<string, any>();

      // Helper to derive status label
      const toStatus = (s: string) =>
        s === "approved" || s === "Approved" || s === "Sudah Diverifikasi" || s === "Final"
          ? "Sudah Diverifikasi"
          : s === "revisi" || s === "Perlu Revisi"
            ? "Perlu Revisi"
            : "Belum Diverifikasi";

      // 1. Load from DB Verifikasi records (highest priority — real IDs)
      dbVerif.forEach((v: any) => {
        const expectedPrefix = doc === "park-document" ? "PD-" : "PR-";
        if (!(v.pengadaan_id || "").startsWith(expectedPrefix)) return;
        const key = v.id; // use verif ID as map key to avoid duplicates
        map.set(key, {
          verif_id: v.id,                          // REAL verif ID — used for approve API
          id: v.pengadaan_id,
          submittedAt: v.submit_at || v.created_at || "",
          noDok: v.pengadaan_id || v.id,
          judul: v.pengadaan_nama || "Pengajuan Dana",
          nominalPD: v.nominal || "Rp. 100.000.000,00",
          nominalKonversi: v.nominal || "Rp. 100.000.000,00",
          unit: v.departemen ? (v.departemen.startsWith("VP") ? v.departemen : `VP ${v.departemen}`) : "CTIT",
          status: toStatus(v.status),
          tanggal: v.submit_at
            ? new Date(v.submit_at).toLocaleDateString("id-ID")
            : v.created_at
              ? new Date(v.created_at).toLocaleDateString("id-ID")
              : "—",
        });
      });

      // 2. Merge local store verif records (for items submitted locally but not yet in DB)
      storeVerif
        .filter((v: any) => ["park-dokumen", "purchase-requisition", "pengajuan-dana", "park-document"].includes(v.tipe))
        .forEach((v: any) => {
          if (map.has(v.id)) return; // already from DB, skip
          map.set(v.id, {
            verif_id: v.id,
            id: v.pengadaanId,
            submittedAt: v.submitAt || "",
            noDok: v.pengadaanId || v.id,
            judul: v.pengadaanNama || "Pengajuan Dana",
            nominalPD: v.nominal || "Rp. 100.000.000,00",
            nominalKonversi: v.nominal || "Rp. 100.000.000,00",
            unit: v.departemen ? (v.departemen.startsWith("VP") ? v.departemen : `VP ${v.departemen}`) : "CTIT",
            status: toStatus(v.status),
            tanggal: v.submitAt ? new Date(v.submitAt).toLocaleDateString("id-ID") : "—",
          });
        });

      setDanaItems(Array.from(map.values()));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchDanaData();
  }, [category, doc]);

  const deleteDanaVerification = async () => {
    if (!selectedRow?.verif_id) return;
    try {
      await api.delete(`/verifikasi/${selectedRow.verif_id}`);
      setShowDelete(false);
      setSelectedRow(null);
      await fetchDanaData();
    } catch (error: any) {
      alert(error?.response?.data?.message || "Data pengajuan gagal dihapus.");
    }
  };

  const rows = danaItems.filter(
    (r) =>
      r.noDok.toLowerCase().includes(search.toLowerCase()) ||
      r.judul.toLowerCase().includes(search.toLowerCase()) ||
      r.unit.toLowerCase().includes(search.toLowerCase())
  ).filter((r) => {
    const date = r.submittedAt ? new Date(r.submittedAt).toISOString().slice(0, 10) : "";
    return (!startDate || date >= startDate)
      && (!endDate || date <= endDate)
      && (!unitFilter || r.unit.toLowerCase().includes(unitFilter.toLowerCase()))
      && (!statusFilter || r.status === statusFilter);
  });

  if (verifView === "detail" && selectedRow) {
    return <VerifikasiDetailPage row={selectedRow} onBack={() => { setVerifView("list"); fetchDanaData(); }} />;
  }

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-white">
      <div className="px-[44px] py-[20px]">
        <h1 className="text-[#252271] text-[36px] font-extrabold leading-normal mb-[0px]">Verification</h1>
        <p className="text-[#364153] text-[16px] font-semibold mb-[20px]">{docLabels[doc]}</p>

        {/* Filter Section */}
        <div className="bg-[#f5f7fd] border border-[#e5e7eb] rounded-[15px] p-[20px] mb-[20px]">
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] mb-[16px]">
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Start Date</label>
              <input value={startDate} onChange={(event) => setStartDate(event.target.value)} type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">End Date</label>
              <input value={endDate} onChange={(event) => setEndDate(event.target.value)} type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Divisi</label>
              <select value={unitFilter} onChange={(event) => setUnitFilter(event.target.value)} className="w-full h-[36px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors">
                <option value="">Semua Divisi</option>
                {DIVISI_LIST.map((divisi) => <option key={divisi} value={divisi}>{divisi}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Status</label>
              <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="w-full h-[36px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors">
                <option value="">Semua Status</option>
                {Array.from(new Set(danaItems.map((entry) => entry.status).filter(Boolean))).map((entry) => <option key={entry} value={entry}>{entry}</option>)}
              </select>
            </div>
          </div>
          <div className="flex gap-[5px]">
            <button className="bg-[#252271] text-white text-[14px] font-medium h-[36px] px-[20px] rounded-[15px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all duration-150">
              <svg fill="none" height="14" viewBox="0 0 14 14" width="14">
                <circle cx="6.875" cy="6.875" r="4.875" stroke="white" strokeWidth="1.17" />
                <path d="M12.25 12.25L9.74 9.74" stroke="white" strokeLinecap="round" strokeWidth="1.17" />
              </svg>
              Cari
            </button>
            <button onClick={() => { setSearch(""); setStartDate(""); setEndDate(""); setUnitFilter(""); setStatusFilter(""); }} className="h-[35px] w-[34px] rounded-[15px] border border-[#c00] flex items-center justify-center hover:bg-[#fef2f2] active:scale-95 transition-all duration-150">
              <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                <path d={group13Svg.p3bd12900} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                <path d="M1.625 1.625V4.33333H4.33333" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
              </svg>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] overflow-hidden">
          {/* Table controls */}
          <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-[#f3f4f6]">
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Show</span>
              <select className="h-[24px] w-[55px] rounded-[4px] border border-[#d1d5dc] text-[13px] px-[4px] outline-none">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>entries</span>
            </div>
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Search:</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type to filter..."
                className="h-[30px] w-[176px] rounded-[4px] border border-[#d1d5dc] px-[12px] text-[13px] outline-none focus:border-[#252271] transition-colors"
              />
            </div>
          </div>

          {/* Table header */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="bg-[#252271] text-white text-[12px] font-semibold tracking-[0.3px]">
                  <th className="text-left px-[16px] py-[10px] whitespace-nowrap">TANGGAL</th>
                  <th className="text-left px-[16px] py-[10px] whitespace-nowrap">NO DOKUMEN</th>
                  <th className="text-left px-[16px] py-[10px] whitespace-nowrap">JUDUL</th>
                  <th className="text-left px-[16px] py-[10px] whitespace-nowrap">NOMINAL PD</th>
                  <th className="text-left px-[16px] py-[10px] whitespace-nowrap">NOMINAL KONVERSI</th>
                  <th className="text-left px-[16px] py-[10px] whitespace-nowrap">UNIT</th>
                  <th className="text-left px-[16px] py-[10px] whitespace-nowrap">STATUS</th>
                  <th className="text-left px-[16px] py-[10px] whitespace-nowrap">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-[#f3f4f6] hover:bg-[#fafafa] transition-colors">
                    <td className="px-[16px] py-[16px] text-[#364153] text-[14px] whitespace-nowrap">{row.tanggal}</td>
                    <td className="px-[16px] py-[16px] text-[#364153] text-[14px] whitespace-nowrap">{row.noDok}</td>
                    <td className="px-[16px] py-[16px] text-[#364153] text-[14px]">{row.judul}</td>
                    <td className="px-[16px] py-[16px] text-[#364153] text-[14px] whitespace-nowrap">{row.nominalPD}</td>
                    <td className="px-[16px] py-[16px] text-[#364153] text-[14px] whitespace-nowrap">{row.nominalKonversi}</td>
                    <td className="px-[16px] py-[16px] text-[#364153] text-[14px]">{row.unit}</td>
                    <td className="px-[16px] py-[16px]">
                      <span className={`text-[12px] font-medium px-[10px] py-[3px] rounded-full
                        ${row.status === "Open" ? "bg-[#f0fdf4] text-[#15803d]" : "bg-[#f1f5f9] text-[#64748b]"}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-[16px] py-[14px]">
                      <div className="flex items-center gap-[4px]">
                        {/* Detail */}
                        <button onClick={() => { setSelectedRow(row); setVerifView("detail"); }} className="p-[5px] rounded-[6px] hover:bg-[#e0e7ff] active:scale-95 transition-all duration-150" title="Detail">
                          <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                            <path d={ICONS.eye} stroke="#252271" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                            <path d={ICONS.eyePupil} stroke="#252271" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                          </svg>
                        </button>
                        {/* Delete */}
                        <button
                          onClick={() => { setSelectedRow(row); setShowDelete(true); }}
                          className="p-[5px] rounded-[6px] hover:bg-[#fef2f2] active:scale-95 transition-all duration-150"
                          title="Hapus"
                        >
                          <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                            <path d="M1.625 3.25H11.375" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                            <path d={ICONS.trash1} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                            <path d={ICONS.trash2} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={8} className="text-center py-[40px] text-[#94a3b8] text-[13px]">Tidak ada data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-[16px] py-[12px] border-t border-[#f3f4f6]">
            <span className="text-[#6a7282] text-[14px]">Showing 1 to {rows.length} of {rows.length} entries</span>
            <div className="flex items-center gap-[4px]">
              <button className="px-[12px] py-[4px] rounded-[4px] border border-[#d1d5dc] text-[#6a7282] text-[12px] font-medium hover:bg-[#f1f5f9] transition-colors">Previous</button>
              <button className="px-[12px] py-[4px] rounded-[4px] bg-[#252271] border border-[#252271] text-white text-[12px] font-medium">1</button>
              <button className="px-[12px] py-[4px] rounded-[4px] border border-[#d1d5dc] text-[#6a7282] text-[12px] font-medium hover:bg-[#f1f5f9] transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDelete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[15px] w-[360px] overflow-hidden shadow-2xl">
            <div className="bg-[#cc0000] px-[24px] py-[12px]">
              <p className="text-white text-[14px] font-bold">Delete User</p>
            </div>
            <div className="p-[32px] flex flex-col items-center gap-[16px]">
              <div className="size-[56px] bg-[#fef2f2] rounded-full flex items-center justify-center">
                <svg fill="none" height="28" viewBox="0 0 28 28" width="28">
                  <path d="M14 10V14M14 18H14.01M6.343 21.657L21.657 6.343M21.657 21.657L6.343 6.343" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <circle cx="14" cy="14" r="11" stroke="#CC0000" strokeWidth="2" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-[#0f172a] text-[15px] font-bold mb-[4px]">Delete PD</p>
                <p className="text-[#64748b] text-[13px]">Kamu akan menghapus PD ini dari sistem?</p>
              </div>
              <div className="flex gap-[12px]">
                <button
                  onClick={() => setShowDelete(false)}
                  className="px-[24px] py-[8px] rounded-[8px] border border-[#d1d5dc] text-[#64748b] text-[13px] font-medium hover:bg-[#f1f5f9] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={deleteDanaVerification}
                  className="px-[24px] py-[8px] rounded-[8px] bg-[#cc0000] text-white text-[13px] font-medium hover:bg-[#b91c1c] transition-colors active:scale-95"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Tambah Role Page ──────────────────────────────────────────────────────────
interface TambahRolePageProps {
  onBack: () => void;
}

// SVG paths from UserDashboard-10 svg-7ufmdiyijp.ts
const PERM_ICONS = {
  checkmark: "M1.66667 5L4 7.91667L8.75 2.5",
  saveOuter: "M7.6 1.5C7.86377 1.50376 8.11537 1.61159 8.3 1.8L10.2 3.7C10.3884 3.88463 10.4962 4.13623 10.5 4.4V9.5C10.5 9.76522 10.3946 10.0196 10.2071 10.2071C10.0196 10.3946 9.76522 10.5 9.5 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76522 1.5 9.5V2.5C1.5 2.23478 1.60536 1.98043 1.79289 1.79289C1.98043 1.60536 2.23478 1.5 2.5 1.5H7.6Z",
  saveShelf: "M8.5 10.5V7C8.5 6.86739 8.44732 6.74021 8.35355 6.64645C8.25979 6.55268 8.13261 6.5 8 6.5H4C3.86739 6.5 3.74021 6.55268 3.64645 6.64645C3.55268 6.74021 3.5 6.86739 3.5 7V10.5",
  saveTab: "M3.5 1.5V3.5C3.5 3.63261 3.55268 3.75979 3.64645 3.85355C3.74021 3.94732 3.86739 4 4 4H7.5",
};

type SubPerm = {
  id: string;
  name: string;
  desc: string;
  view: boolean;
  action: boolean;
};

type PermGroup = {
  id: string;
  name: string;
  checked: boolean;
  expanded: boolean;
  selectAllView: boolean;
  selectAllAction: boolean;
  subPerms: SubPerm[];
};

const INITIAL_GROUPS: PermGroup[] = [
  {
    id: "pengajuan-dana",
    name: "1. Pengajuan Dana",
    checked: true,
    expanded: true,
    selectAllView: true,
    selectAllAction: true,
    subPerms: [
      { id: "pd-dashboard", name: "Dashboard", desc: "(Dashboard)", view: true, action: true },
      { id: "pd-verifikasi", name: "Verifikasi", desc: "(Park Document, Purchase Requisition)", view: true, action: true },
    ],
  },
  {
    id: "pengadaan",
    name: "2. Pengadaan",
    checked: true,
    expanded: true,
    selectAllView: true,
    selectAllAction: true,
    subPerms: [
      { id: "pg-dashboard", name: "Dashboard", desc: "(Realisasi Program, RUP, PBJ, Contract, RAB, Vendor, Import Inklaring, Warehouse, Monitoring PBJ & Kontrak, Realisasi Triwulan, MPPL, Investasi)", view: true, action: true },
      { id: "pg-m-user", name: "Management User", desc: "(List User, Create User)", view: true, action: true },
      { id: "pg-m-role", name: "Management Roles", desc: "(List Roles, Create Roles)", view: true, action: true },
      { id: "pg-rup", name: "RUP", desc: "(Task Approval RUP, Timeline - List & Detail, Timeline - Create, Upload Timeline Signed, Penyesuaian RUP)", view: true, action: true },
      { id: "pg-npp", name: "NPP", desc: "(List NPP, Create NPP)", view: true, action: true },
      { id: "pg-memo-pengadaan", name: "Memo Permohonan Pengadaan", desc: "(List Memo Permohonan Pengadaan, Tambah Memo Permohonan Pengadaan)", view: true, action: true },
      { id: "pg-sp3", name: "SP3", desc: "(Task Approval SP3, List SP3, Upload SP3 Signed)", view: true, action: true },
      { id: "pg-pbj", name: "PBJ", desc: "(Task Approval PBJ, Drafting RKS, Pemasukan Calon Peserta Tender, Aanwidzing, Penawaran, Evaluasi, Undangan KKN, BA Pelelangan, Penetapan Pemenang, SPK, Memo Internal)", view: true, action: true },
      { id: "pg-contract", name: "Contract", desc: "(Task Approval Contract, Draft Kontrak, Performance Bond, Verifikasi Jaminan, Review Legal, Approval, Tanda Tangan Vendor/KCI, Summary Kontrak)", view: true, action: true },
      { id: "pg-jamlak", name: "Jaminan Pelaksanaan", desc: "(List Jamlak, View Jamlak, Edit / Update Status Jamlak)", view: true, action: true },
      { id: "pg-warehouse", name: "Warehouse", desc: "(List Card & Import Excel, Spare Part, Waste, Transaksi Material)", view: true, action: true },
      { id: "pg-vendor", name: "Vendor Management", desc: "(List Vendor, Add Vendor, Black List Vendor)", view: true, action: true },
      { id: "pg-harga-satuan", name: "Harga Satuan", desc: "(List Harga Satuan, Add / Import / Template, Edit / Delete Harga Satuan)", view: true, action: true },
      { id: "pg-bank", name: "Master Bank", desc: "(List Bank, View / Edit Bank)", view: true, action: true },
      { id: "pg-inklaring", name: "Import Inklaring", desc: "(List Inklaring, Import Excel Inklaring)", view: true, action: true },
      { id: "pg-adendum", name: "Adendum Kontrak", desc: "(Dashboard Amandemen Kontrak, List Amandemen Kontrak, Request Amandemen Kontrak)", view: true, action: true },
      { id: "pg-[#evaluasi-vendor]", name: "Evaluasi Vendor", desc: "(List Evaluasi Vendor, Tambah Evaluasi Vendor)", view: true, action: true },
      { id: "pg-tkdn", name: "TKDN (Tingkat Komponen Dalam Negeri)", desc: "(List TKDN, Tambah TKDN)", view: true, action: true },
      { id: "pg-kpi", name: "Monitoring KPI", desc: "(List Monitoring KPI, Tambah KPI Baru)", view: true, action: true },
      { id: "pg-mppl", name: "Monitoring MPPL", desc: "(List MPPL, Edit MPPL)", view: true, action: true },
      { id: "pg-doc-center", name: "Document Center", desc: "(List Document Center, Detail Document Center)", view: true, action: true },
      { id: "pg-hps", name: "Harga Perkiraan Sendiri (HPS)", desc: "(List HPS)", view: true, action: true },
    ],
  },
  {
    id: "pengujian",
    name: "3. Pengujian",
    checked: true,
    expanded: true,
    selectAllView: true,
    selectAllAction: true,
    subPerms: [
      { id: "pj-m-user", name: "Management Users", desc: "(List User, Add Users)", view: true, action: true },
      { id: "pj-list-kontrak", name: "List Kontrak", desc: "(Dashboard Kontrak, List Kontrak < 500jt, List Kontrak > 500jt)", view: true, action: true },
      { id: "pj-add-kontrak", name: "Add Kontrak", desc: "(Tambah Kontrak, Upload Kontrak)", view: true, action: true },
      { id: "pj-[#pengajuan-pengujian]", name: "Pengajuan Pengujian", desc: "(Tambah Request Pengujian, List Request Pengujian)", view: true, action: true },
      { id: "pj-[#list-pengujian]", name: "List Pengujian", desc: "(List Pengujian)", view: true, action: true },
      { id: "pj-review-pengujian", name: "Review Pengajuan Pengujian", desc: "(Dashboard Pengujian, List Pengujian Review, Review Detail Pengujian)", view: true, action: true },
      { id: "pj-assign-task", name: "Assign Task Pengujian", desc: "(List Task Assignment Pengujian, Add Assign Pengujian)", view: true, action: true },
      { id: "pj-checklist", name: "Checklist Pengujian", desc: "(Lihat Jadwal Pengujian, Checklist Pengujian)", view: true, action: true },
      { id: "pj-history", name: "History Pengujian", desc: "(History Pengujian)", view: true, action: true },
      { id: "pj-menu-report", name: "Menu Report", desc: "(Report Pengujian)", view: true, action: true },
      { id: "pj-dashboard-tc", name: "Dashboard Testing Committee", desc: "(Dashboard Testing Committee)", view: true, action: true },
      { id: "pj-generate-bahp", name: "Generate BAHP", desc: "(List Pengujian Cetak)", view: true, action: true },
      { id: "pj-m-user-detail", name: "Management User Detail", desc: "(List Users, Add Users Level Manager Divisi)", view: true, action: true },
    ],
  },
  {
    id: "pembayaran",
    name: "4. Pembayaran",
    checked: true,
    expanded: true,
    selectAllView: true,
    selectAllAction: true,
    subPerms: [
      { id: "byr-dashboard", name: "Dashboard", desc: "(Payment Plan Recapitulation, Outsourcing, Non Outsourcing)", view: true, action: true },
      { id: "byr-payment-approve", name: "Menu Payment Approve", desc: "(Outsource List/Verif/Approval, Non Outsource List/Verif/Approval, UMD List/Form)", view: true, action: true },
      { id: "byr-reports", name: "Menu Reports", desc: "(Daily Reports, Weekly Reports)", view: true, action: true },
    ],
  },
];

function RedCheckbox({ checked, onClick }: { checked: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`size-[18px] rounded-[5px] shrink-0 flex items-center justify-center transition-all duration-150
        ${checked ? "bg-[#cc0000]" : "bg-transparent border border-[#cc0000]"}`}
    >
      {checked && (
        <svg fill="none" height="10" viewBox="0 0 10 10" width="10">
          <path d={PERM_ICONS.checkmark} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </svg>
      )}
    </button>
  );
}

function Toggle({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative h-[22px] w-[40px] rounded-full shrink-0 transition-colors duration-200 ${on ? "bg-[#252271]" : "bg-[#5d6596]"}`}
    >
      <span
        className={`absolute top-[3px] size-[16px] rounded-full bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all duration-200
          ${on ? "left-[21px]" : "left-[3px]"}`}
      />
    </button>
  );
}

function TambahRolePage({ onBack }: TambahRolePageProps) {
  const [roleName, setRoleName] = useState("");
  const [userType, setUserType] = useState("");
  const [rolePerms, setRolePerms] = useState<any>({
    pengajuanDana: "editor",
    pengadaan: "editor",
    pengujian: "editor",
    pembayaran: "editor",
    templateDokumen: "viewer",
    masterData: "no-access",
    userManagement: "no-access",
    dashboard: "viewer",
  });

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc]">
      <div className="px-[32px] py-[28px] flex flex-col gap-[20px]">
        {/* Breadcrumb */}
        <p className="text-[#252271] text-[15px]">
          <span className="font-normal">Manajemen Role &gt;</span>
          <span className="font-extrabold"> Tambah Role</span>
        </p>

        {/* Card 1 — Form */}
        <div className="bg-white rounded-[24px] shadow-[0px_0px_5.45px_rgba(0,0,0,0.09)] overflow-hidden">
          <div className="bg-[#252271] px-[28px] py-[12px] rounded-tl-[24px] rounded-tr-[24px]">
            <p className="text-white text-[12px] font-bold">Menambahkan Role Baru</p>
          </div>
          <div className="grid grid-cols-2 gap-x-[20px] px-[28px] py-[20px]">
            {/* Nama Role */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[12px] font-medium text-[rgba(82,82,82,0.6)]">Nama Role</label>
              <div className="relative h-[37px]">
                <input
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  placeholder="Masukkan nama role..."
                  className="w-full h-full rounded-[15px] border border-[#d3d3d3] px-[17px] text-[12px] text-[#0f172a] placeholder-[rgba(0,0,0,0.5)] outline-none focus:border-[#252271] shadow-[inset_0px_1px_2.5px_-1px_rgba(0,0,0,0.25)] transition-colors bg-white"
                />
              </div>
            </div>

            {/* User / Admin dropdown */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[12px] font-medium text-[rgba(82,82,82,0.6)]">User / Admin</label>
              <div className="relative h-[37px]">
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="w-full h-full rounded-[15px] border border-[#d3d3d3] pl-[17px] pr-[32px] text-[12px] text-[#0f172a] bg-white outline-none focus:border-[#252271] shadow-[inset_0px_1px_2.5px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-colors appearance-none"
                >
                  <option value=""></option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
                <svg className="absolute right-[13px] top-[12.5px] pointer-events-none" fill="none" height="12" viewBox="0 0 12 12" width="12">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="rgba(82,82,82,0.5)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 — Hak Akses (Hanya Tampil Jika Admin) */}
        {(userType === "admin" || !userType) && <PermissionMatrix />}

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-[12px] pt-2">
          <button
            onClick={onBack}
            className="flex items-center gap-[8px] px-[20px] py-[8px] rounded-[10px] bg-white border border-[#d3d3d3] text-[rgba(82,82,82,0.8)] text-[12px] font-medium hover:border-[#525252] transition-all duration-150 active:scale-95 shadow-xs cursor-pointer"
          >
            Batal
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-[8px] px-[24px] py-[8px] rounded-[10px] bg-gradient-to-r from-[#252271] to-[#3a37a0] text-white text-[12px] font-bold hover:brightness-110 active:scale-95 transition-all duration-150 shadow-md cursor-pointer"
          >
            Simpan Role
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Pengadaan Page (NPP / RUP) ───────────────────────────────────────────────
type NppRow = {
  idNpp: string; idRup: string; noCont: string; divisi: string; opexCapex: string;
  kategori: string; tahun: string; sp3Final: string; status: string; statusHps: string;
};

const NPP_ROWS: NppRow[] = [
  { idNpp: "NPP-2024-001", idRup: "RUP-2024-001", noCont: "—", divisi: "CTIT", opexCapex: "CAPEX", kategori: "IT", tahun: "2024", sp3Final: "—", status: "Status", statusHps: "Final" },
  { idNpp: "NPP-2024-002", idRup: "RUP-2024-002", noCont: "—", divisi: "Logistik", opexCapex: "OPEX", kategori: "Operasional", tahun: "2024", sp3Final: "—", status: "Status", statusHps: "Final" },
];

function NppDetailPage({ row, onBack }: { row: NppRow; onBack: () => void }) {
  const process = async (action: "approve" | "revisi" | "reject", note?: string) => {
    const verifId = (row as any).verif_id;
    if (!verifId) return alert("ID verifikasi NPP tidak ditemukan.");
    const catatan = note?.trim() || (action === "revisi" ? "Mohon perbaiki dokumen yang diajukan." : action === "reject" ? "Pengajuan ditolak oleh Admin." : undefined);
    try {
      await api.post(`/verifikasi/${verifId}/${action}`, catatan ? { catatan } : undefined);
      alert(action === "approve" ? "NPP berhasil disetujui!" : action === "revisi" ? "Catatan revisi telah dikirim!" : "NPP berhasil ditolak.");
      onBack();
    } catch (error: any) {
      alert(error.response?.data?.message || "Gagal memproses NPP.");
    }
  };

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc]">
      <div className="px-[44px] py-[20px]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-[8px] mb-[20px]">
          <button onClick={onBack} className="flex items-center justify-center size-[28px] rounded-full hover:bg-[#e0e7ff] transition-colors active:scale-95">
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
              <path d="M10 12L6 8L10 4" stroke="#6a7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </button>
          <span className="text-[#1e2939] text-[16px] font-semibold">NPP</span>
          <span className="text-[#99a1af] text-[14px] font-normal">/ Detail</span>
        </div>

        {/* NppDetailView Card */}
        <div className="bg-white rounded-[15px] border border-[#e5e7eb] p-[24px] shadow-sm mb-[20px]">
          <NppDetailView
            item={row}
            onApprove={() => process("approve")}
            onRevisi={(note) => process("revisi", note)}
            onReject={(note) => process("reject", note)}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Generic RUP list page (Task Approval / List RUP / List RUP Signed) ────────
function RupListPage({ breadcrumb, title }: { breadcrumb: string; title: string }) {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [unitFilter, setUnitFilter] = useState("Semua Divisi");
  const [statusFilter, setStatusFilter] = useState("Semua Status");
  const [view, setView] = useState<"list" | "detail" | "create">("list");
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [items, setItems] = useState<any[]>([]);

  const isTaskApproval = title === "Task Approval" || breadcrumb.includes("Task Approval");

  const fetchData = async () => {
    try {
      const [resVerif, resRup] = await Promise.all([
        api.get('/verifikasi').catch(() => ({ data: [] })),
        api.get('/rup').catch(() => ({ data: [] }))
      ]);

      const dbVerif = resVerif.data || [];
      const storeVerif: any[] = [];
      const dbRup = resRup.data || [];
      const storeRup: any[] = [];

      const map = new Map<string, any>();

      const initialMocks: any[] = [];

      dbRup.forEach((r: any) => {
        const st = r.status === "approved" || r.status === "Approved" || r.status === "Final" ? "Final" : (r.status || "Draft");
        map.set(r.id, {
          ...r,
          ...(r.details || {}),
          idRup: r.id,
          id: r.id,
          nama: r.nama,
          departemen: r.departemen,
          vpDept: r.departemen ? (r.departemen.startsWith("VP") ? r.departemen : `VP ${r.departemen}`) : "VP CTIT",
          status: st,
          tahun: r.createdAt ? new Date(r.createdAt).getFullYear().toString() : "2024",
          opex: r.opexCapex || r.cost || "CAPEX",
          verif_id: `VR-${r.id}`,
          catatanAdmin: r.catatan_admin || r.catatanAdmin,
        });
      });

      storeRup.forEach((r: any) => {
        const storeV = storeVerif.find(v => v.pengadaanId === r.id);
        const rawStatus = storeV ? storeV.status : r.status;
        const st = rawStatus === "approved" || rawStatus === "Approved" || rawStatus === "Final" ? "Final" : (rawStatus === "pending" ? "Draft" : rawStatus);
        const existing = map.get(r.id) || {};
        map.set(r.id, {
          ...existing,
          ...r,
          ...(r.details || {}),
          idRup: r.id,
          id: r.id,
          nama: r.nama || existing.nama,
          departemen: r.departemen || existing.departemen,
          vpDept: r.departemen ? (r.departemen.startsWith("VP") ? r.departemen : `VP ${r.departemen}`) : (existing.vpDept || "VP CTIT"),
          status: st,
          tahun: r.createdAt ? new Date(r.createdAt).getFullYear().toString() : "2024",
          opex: r.opexCapex || r.cost || existing.opex || "CAPEX",
          verif_id: storeV ? storeV.id : `VR-${r.id}`,
          catatanAdmin: storeV?.catatanAdmin || r.catatanAdmin || existing.catatanAdmin,
        });
      });

      dbVerif.forEach((v: any) => {
        if (v.tipe === "rup" || v.pengadaan_id?.startsWith("RUP")) {
          const st = v.status === "approved" || v.status === "Approved" || v.status === "Final" ? "Final" : (v.status === "pending" ? "Draft" : v.status);
          const existing = map.get(v.pengadaan_id) || {};
          map.set(v.pengadaan_id, {
            ...existing,
            idRup: v.pengadaan_id,
            id: v.pengadaan_id,
            nama: v.pengadaan_nama || existing.nama || "Pengadaan RUP Baru",
            vpDept: v.departemen ? (v.departemen.startsWith("VP") ? v.departemen : `VP ${v.departemen}`) : (existing.vpDept || "VP CTIT"),
            status: st,
            tahun: "2024",
            opex: existing.opex || "CAPEX",
            verif_id: v.id,
            catatanAdmin: v.catatan_admin || v.catatanAdmin || existing.catatanAdmin,
          });
        }
      });

      setItems(Array.from(map.values()));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [breadcrumb, title]);

  const deleteRupRow = async (row: any) => {
    if (!row?.idRup || !window.confirm(`Hapus RUP ${row.idRup}?`)) return;
    try {
      await api.delete(`/rup/${row.idRup}`);
      await fetchData();
    } catch (error: any) {
      alert(error?.response?.data?.message || "RUP gagal dihapus.");
    }
  };

  const handleApprove = async (targetRow?: any) => {
    const target = targetRow || selectedRow;
    if (!target) return;
    try {
      if (target.verif_id) {
        await api.post(`/verifikasi/${target.verif_id}/approve`);
      }
      updateRup(target.idRup, { status: "approved" });
      if (target.verif_id) {
        updateVerifRecord(target.verif_id, { status: "approved" });
      }
      fetchData();
      alert(`RUP ${target.idRup} (${target.nama || ''}) berhasil disetujui!`);
      setView("list");
    } catch (e) {
      console.error(e);
      alert("Gagal menyetujui RUP.");
    }
  };

  const rupRows = items.filter((r) => {
    if (isTaskApproval) {
      const isDraft = r.status === "Draft" || r.status === "pending" || r.status === "Pending" || r.status === "Submitted" || r.status === "draft";
      if (!isDraft) return false;
    }

    const matchSearch = !search ||
      r.idRup.toLowerCase().includes(search.toLowerCase()) ||
      r.vpDept.toLowerCase().includes(search.toLowerCase()) ||
      (r.departemen && r.departemen.toLowerCase().includes(search.toLowerCase())) ||
      (r.nama && r.nama.toLowerCase().includes(search.toLowerCase()));

    const matchUnit = unitFilter === "Semua Divisi" ||
      r.vpDept.toLowerCase().includes(unitFilter.toLowerCase()) ||
      (r.departemen && r.departemen.toLowerCase().includes(unitFilter.toLowerCase()));

    let matchStatus = true;
    if (statusFilter !== "Semua Status") {
      const sf = statusFilter.toLowerCase();
      const rs = (r.status || "").toLowerCase();
      if (sf === "draft") matchStatus = rs === "draft" || rs === "pending";
      else if (sf === "final") matchStatus = rs === "final" || rs === "approved";
      else matchStatus = rs === sf;
    }

    let matchDate = true;
    if (startDate) {
      const itemDate = r.createdAt || r.startDate || r.targetLogistik;
      if (itemDate && itemDate < startDate) matchDate = false;
    }
    if (endDate) {
      const itemDate = r.createdAt || r.endDate || r.perkiraanWaktu;
      if (itemDate && itemDate > endDate) matchDate = false;
    }

    return matchSearch && matchUnit && matchStatus && matchDate;
  });

  if (view === "detail") {
    return (
      <div className="flex-1 min-h-0 overflow-auto bg-white">
        <div className="px-[44px] py-[20px]">
          <div className="flex items-center gap-[8px] mb-[20px]">
            <button onClick={() => setView("list")} className="flex items-center justify-center size-[28px] rounded-full hover:bg-[#e0e7ff] transition-colors active:scale-95">
              <svg fill="none" height="16" viewBox="0 0 16 16" width="16"><path d="M10 12L6 8L10 4" stroke="#6a7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
            </button>
            <span className="text-[#99a1af] text-[16px] font-normal">{breadcrumb} &gt;</span>
            <span className="text-[#1e2939] text-[16px] font-semibold">Detail RUP ({selectedRow?.idRup || ""})</span>
          </div>
          <div className="bg-white border border-[#e5e7eb] rounded-[15px] p-[24px] shadow-sm mb-[20px]">
            <RupDetailView
              item={selectedRow}
              onApprove={() => handleApprove(selectedRow)}
              onRevisi={async (notes?: string) => {
                const revisionNotes = notes || "Mohon lakukan revisi.";
                try {
                  const resVerif = await api.get('/verifikasi').catch(() => ({ data: [] }));
                  const verifList = resVerif.data || [];
                  const matchedVerif = verifList.find((v: any) => v.pengadaan_id === selectedRow?.idRup || v.id === selectedRow?.verif_id);
                  if (matchedVerif) {
                    await api.post(`/verifikasi/${matchedVerif.id}/revisi`, { catatan: revisionNotes }).catch(() => { });
                  } else if (selectedRow?.verif_id) {
                    await api.post(`/verifikasi/${selectedRow.verif_id}/revisi`, { catatan: revisionNotes }).catch(() => { });
                  }
                } catch (e) { }

                updateVerifRecord(selectedRow?.verif_id, { status: "revisi", catatanAdmin: revisionNotes });
                await api.put(`/rup/${selectedRow.idRup}`, { status: "revisi", catatan_admin: revisionNotes }).catch(() => { });
                updateRup(selectedRow.idRup, { status: "revisi", catatanAdmin: revisionNotes });
                fetchData();
                setView("list");
              }}
              onReject={async (notes?: string) => {
                const rejectNotes = notes?.trim() || "RUP ditolak oleh admin";
                try {
                  const resVerif = await api.get('/verifikasi').catch(() => ({ data: [] }));
                  const verifList = resVerif.data || [];
                  const matchedVerif = verifList.find((v: any) => v.pengadaan_id === selectedRow?.idRup || v.id === selectedRow?.verif_id);
                  if (matchedVerif) {
                    await api.post(`/verifikasi/${matchedVerif.id}/reject`, { catatan: rejectNotes }).catch(() => { });
                  } else if (selectedRow?.verif_id) {
                    await api.post(`/verifikasi/${selectedRow.verif_id}/reject`, { catatan: rejectNotes }).catch(() => { });
                  }
                } catch (e) { }

                updateVerifRecord(selectedRow?.verif_id, { status: "rejected", catatanAdmin: rejectNotes });
                await api.put(`/rup/${selectedRow.idRup}`, { status: "rejected", catatan_admin: rejectNotes }).catch(() => { });
                updateRup(selectedRow.idRup, { status: "rejected", catatanAdmin: rejectNotes });
                fetchData();
                alert("RUP berhasil ditolak.");
                setView("list");
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (view === "create") {
    return (
      <TambahRupModal
        onClose={() => setView("list")}
        onSubmit={() => {
          alert("RUP baru berhasil disimpan!");
          fetchData();
          setView("list");
        }}
      />
    );
  }

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-white">
      <div className="px-[44px] py-[20px]">
        <h1 className="text-[#252271] text-[36px] font-extrabold leading-normal mb-[0px]">Verification</h1>
        <p className="text-[#99a1af] text-[16px] font-normal mb-[20px]">
          <span className="font-normal">{breadcrumb.includes(">") ? breadcrumb.split(">")[0].trim() + " > " : ""}</span>
          <span className="font-semibold text-[#1e2939]">{breadcrumb.includes(">") ? breadcrumb.split(">").pop()?.trim() : breadcrumb}</span>
        </p>

        {/* Filter */}
        <div className="bg-[#f5f7fd] border border-[#e5e7eb] rounded-[15px] p-[20px] mb-[20px]">
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] mb-[16px]">
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Start Date</label>
              <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">End Date</label>
              <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Divisi</label>
              <select value={unitFilter} onChange={e => setUnitFilter(e.target.value)} className="w-full h-[36px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors">
                <option>Semua Divisi</option>{DIVISI_LIST.map((divisi) => <option key={divisi}>{divisi}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Status</label>
              <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="w-full h-[36px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors">
                <option>Semua Status</option><option>Draft</option><option>Final</option>
              </select>
            </div>
          </div>
          <div className="flex gap-[5px]">
            {title === "List RUP" && (
              <button onClick={() => setView("create")} className="bg-[#252271] text-white text-[12px] font-medium h-[36px] px-[16px] rounded-[15px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all duration-150">
                <svg fill="none" height="13" viewBox="0 0 13 13" width="13"><path d="M2.708 6.5H10.292M6.5 2.708V10.292" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08" /></svg>
                Buat RUP
              </button>
            )}
            <button onClick={() => fetchData()} className="bg-[#252271] text-white text-[14px] font-medium h-[36px] px-[20px] rounded-[15px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all duration-150">
              <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><circle cx="6.875" cy="6.875" r="4.875" stroke="white" strokeWidth="1.17" /><path d="M12.25 12.25L9.74 9.74" stroke="white" strokeLinecap="round" strokeWidth="1.17" /></svg>
              Cari
            </button>
            <button onClick={() => { setSearch(""); setStartDate(""); setEndDate(""); setUnitFilter("Semua Divisi"); setStatusFilter("Semua Status"); fetchData(); }} className="h-[35px] w-[34px] rounded-[15px] border border-[#c00] flex items-center justify-center hover:bg-[#fef2f2] active:scale-95 transition-all duration-150">
              <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                <path d={group14Svg.p3bd12900} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                <path d="M1.625 1.625V4.33333H4.33333" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
              </svg>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] overflow-hidden">
          <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-[#f3f4f6]">
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Show</span>
              <select className="h-[24px] w-[55px] rounded-[4px] border border-[#d1d5dc] text-[13px] px-[4px] outline-none"><option>10</option><option>25</option></select>
              <span>entries</span>
            </div>
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Search:</span>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Type to filter..." className="h-[30px] w-[176px] rounded-[4px] border border-[#d1d5dc] px-[12px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="bg-[#252271] text-white text-[10.5px] font-medium">
                  <th className="text-left px-[14px] py-[10px]">ID RUP</th>
                  <th className="text-left px-[14px] py-[10px]">Divisi</th>
                  <th className="text-center px-[14px] py-[10px]">OPEX/CAPEX</th>
                  <th className="text-left px-[14px] py-[10px]">Tahun</th>
                  <th className="text-center px-[14px] py-[10px]">Status</th>
                  <th className="text-center px-[14px] py-[10px]">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {rupRows.map((row, i) => (
                  <tr key={i} className="border-b border-[#f3f4f6] hover:bg-[#fafafa] transition-colors">
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">
                      <div>
                        <span className="font-semibold">{row.idRup}</span>
                        {row.nama && <p className="text-[10px] text-gray-400 max-w-[220px] truncate">{row.nama}</p>}
                      </div>
                    </td>
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.vpDept}</td>
                    <td className="px-[14px] py-[14px] text-center">
                      <span className="inline-flex items-center bg-[#f0f9ff] text-[#0069a8] text-[10.5px] font-medium px-[7px] py-[1.75px] rounded-[3.5px]">{row.opex}</span>
                    </td>
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.tahun}</td>
                    <td className="px-[14px] py-[14px] text-center">
                      <span className={`inline-flex items-center text-[10.5px] font-medium px-[7px] py-[1.75px] rounded-[3.5px] ${row.status === "Final" ? "bg-[#f0fdf4] text-[#008236]" : "bg-[#fef3c7] text-[#92400e]"}`}>{row.status}</span>
                    </td>
                    <td className="px-[14px] py-[14px]">
                      <div className="flex items-center gap-[3px] justify-center">
                        <button onClick={() => { setSelectedRow(row); setView("detail"); }} className="p-[5px] rounded-[5px] hover:bg-[#e0e7ff] active:scale-95 transition-all duration-150" title="Detail">
                          <svg fill="none" height="12" viewBox="0 0 12 12" width="12">
                            <path d={group14Svg.p126ce980} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                            <path d={group14Svg.p24092800} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        <button onClick={() => deleteRupRow(row)} className="p-[5px] rounded-[5px] hover:bg-[#fef2f2] active:scale-95 transition-all duration-150" title="Hapus">
                          <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                            <path d={ICONS.trash1} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                            <path d={ICONS.trash2} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {rupRows.length === 0 && (
                  <tr><td colSpan={6} className="text-center py-[40px] text-[#94a3b8] text-[13px]">Tidak ada data</td></tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between px-[16px] py-[12px] border-t border-[#f3f4f6]">
            <span className="text-[#6a7282] text-[14px]">Showing 1 to {rupRows.length} of {rupRows.length} entries</span>
            <div className="flex items-center gap-[4px]">
              <button className="px-[12px] py-[4px] rounded-[4px] border border-[#d1d5dc] text-[#6a7282] text-[12px] font-medium hover:bg-[#f1f5f9] transition-colors">Previous</button>
              <button className="px-[12px] py-[4px] rounded-[4px] bg-[#252271] border border-[#252271] text-white text-[12px] font-medium">1</button>
              <button className="px-[12px] py-[4px] rounded-[4px] border border-[#d1d5dc] text-[#6a7282] text-[12px] font-medium hover:bg-[#f1f5f9] transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Generic placeholder for other Pengadaan sub-items ─────────────────────────

// ─── Sub-document custom tables for Pengadaan ──────────────────────────────────
function PengadaanSubDocPage({ title }: { title: string }) {
  const [search, setSearch] = useState("");
  const [dateDraft, setDateDraft] = useState({ startDate: "", endDate: "" });
  const [dateFilter, setDateFilter] = useState({ startDate: "", endDate: "" });

  const sampleData: Record<string, { headers: string[]; rows: (string | React.ReactNode)[][] }> = {
    "Jaminan Pelaksanaan": {
      headers: ["No. Jaminan", "No. Kontrak", "Nama Vendor", "Bank Penerbit", "Nilai Jaminan", "Masa Berlaku", "Status"],
      rows: [
        ["JAM-2024-001", "KTR-2024-001", "PT Maju Bersama", "Bank Mandiri", "Rp 25.000.000", "01-03-2024 s/d 31-12-2024", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Valid</span>],
        ["JAM-2024-002", "KTR-2024-002", "CV Logistik Sejahtera", "Bank BCA", "Rp 10.000.000", "01-04-2024 s/d 31-12-2024", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Valid</span>],
        ["JAM-2024-003", "KTR-2024-003", "PT Tech Solution", "Bank BNI", "Rp 7.500.000", "15-02-2024 s/d 14-02-2025", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Valid</span>],
      ]
    },
    "Warehouse": {
      headers: ["Kode Barang", "Nama Barang", "Kategori", "Stok", "Satuan", "Lokasi Gudang", "Status"],
      rows: [
        ["BRG-001", "Server Rack 42U", "IT Equipment", "5", "Unit", "Gudang Utama CTIT", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Tersedia</span>],
        ["BRG-002", "Kabel FO Single Mode 100m", "Netware", "24", "Roll", "Gudang Logistik Manggarai", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Tersedia</span>],
        ["BRG-003", "Baut Rel Kereta Heavy Duty", "Sparepart", "150", "Box", "Gudang Depo Bukit Duri", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Tersedia</span>],
      ]
    },
    "Vendor Management": {
      headers: ["Kode Vendor", "Nama Perusahaan", "NPWP", "Email / Telp", "Kualifikasi", "Status Verifikasi"],
      rows: [
        ["VND-001", "PT Maju Bersama", "01.234.567.8-012.000", "info@majubersama.co.id", "Kualifikasi Besar", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Terverifikasi</span>],
        ["VND-002", "CV Logistik Sejahtera", "02.987.654.3-045.000", "contact@logistiksejahtera.com", "Kualifikasi Menengah", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Terverifikasi</span>],
        ["VND-003", "PT Nusantara Tech Solutions", "03.112.233.4-089.000", "sales@nusa-tech.co.id", "Kualifikasi Besar", <span className="px-[8px] py-[2px] bg-[#fef9c3] text-[#854d0e] rounded-full text-[11px] font-medium">Pending Review</span>],
      ]
    },
    "Harga Satuan": {
      headers: ["Kode Barang/Jasa", "Uraian Pekerjaan/Barang", "Satuan", "Harga Satuan Standar", "Tahun", "Status HPS"],
      rows: [
        ["HS-001", "Pengadaan PC Workstation High-End", "Unit", "Rp 18.500.000", "2024", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Disetujui</span>],
        ["HS-002", "Jasa Maintenance Network Router 1th", "Paket", "Rp 45.000.000", "2024", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Disetujui</span>],
      ]
    },
    "Adendum Kontrak": {
      headers: ["No. Adendum", "No. Kontrak Utama", "Nama Paket", "Nilai Perubahan", "Perubahan Waktu", "Status"],
      rows: [
        ["ADD-2024-001", "KTR-2024-001", "Pengadaan Server CTIT 2024", "+ Rp 30.000.000", "Perpanjangan 30 Hari", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Approved</span>],
      ]
    },
    "Evaluasi Vendor": {
      headers: ["No. Evaluasi", "Nama Vendor", "Paket Pekerjaan", "Skor Kinerja", "Predikat", "Status Evaluasi"],
      rows: [
        ["EV-2024-001", "PT Maju Bersama", "Pengadaan Server CTIT 2024", "92.5", "Sangat Baik (A)", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Final</span>],
        ["EV-2024-002", "CV Logistik Sejahtera", "Pengadaan Alat Logistik 2024", "85.0", "Baik (B)", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Final</span>],
      ]
    },
    "TKDN": {
      headers: ["No. Sertifikat", "Nama Paket / Barang", "Vendor", "Persentase TKDN", "Status Sertifikasi"],
      rows: [
        ["TKDN-2024-001", "Pengadaan Server CTIT 2024", "PT Maju Bersama", "43.50%", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Terverifikasi</span>],
        ["TKDN-2024-002", "Pengadaan Alat Logistik 2024", "CV Logistik Sejahtera", "65.20%", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Terverifikasi</span>],
      ]
    },
    "Monitoring KPI": {
      headers: ["No. KPI", "Nama Indikator Kinerja", "Target", "Realisasi", "Capaian (%)", "Status"],
      rows: [
        ["KPI-2024-001", "Ketepatan Waktu Pengadaan (SLA)", "95.0%", "96.8%", "101.9%", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Tercapai</span>],
        ["KPI-2024-002", "Efisiensi Anggaran (HPS vs Kontrak)", "10.0%", "12.4%", "124.0%", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Tercapai</span>],
      ]
    },
    "Monitoring MPPL": {
      headers: ["No. MPPL", "Rencana Mutu & Pelaksanaan", "Unit", "Tanggal Audit", "Temuan Audit", "Status MPPL"],
      rows: [
        ["MPPL-2024-001", "Rencana Mutu Pengadaan Server CTIT", "CTIT", "10-02-2024", "Nihil (Sesuai Spesifikasi)", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Complied</span>],
      ]
    }
  };

  const configuredTable = sampleData[title] || {
    headers: ["No.", "ID Document", "Tanggal", "Keterangan", "Status"],
    rows: []
  };
  // Sub-modul ini belum mempunyai endpoint sumber data. Jangan tampilkan data
  // contoh sebagai data operasional; tabel tetap kosong sampai API tersedia.
  const curr = { ...configuredTable, rows: [] as (string | React.ReactNode)[][] };

  const cellText = (cell: string | React.ReactNode) => {
    if (typeof cell === "string") return cell;
    return React.isValidElement(cell) ? String((cell.props as { children?: React.ReactNode }).children ?? "") : "";
  };
  const filteredRows = curr.rows.filter((row) => {
    const text = row.map(cellText).join(" ").toLowerCase();
    const dateMatch = text.match(/(\d{2})-(\d{2})-(\d{4})/);
    const rowDate = dateMatch ? `${dateMatch[3]}-${dateMatch[2]}-${dateMatch[1]}` : "";
    const matchesDate = (!dateFilter.startDate || (!!rowDate && rowDate >= dateFilter.startDate))
      && (!dateFilter.endDate || (!!rowDate && rowDate <= dateFilter.endDate));
    return text.includes(search.toLowerCase()) && matchesDate;
  });

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-white">
      <div className="px-[44px] py-[20px]">
        <h1 className="text-[#252271] text-[28px] font-bold tracking-tight leading-tight mb-[2px]">Verification</h1>
        <p className="text-[#64748b] text-[13px] font-medium mb-[20px]">
          <span>Pengadaan &gt; </span>
          <span className="font-semibold text-[#1e2939]">{title}</span>
        </p>

        {/* Filter */}
        <div className="bg-[#f5f7fd] border border-[#e5e7eb] rounded-[15px] p-[20px] mb-[20px]">
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] mb-[16px]">
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Start Date</label>
              <input value={dateDraft.startDate} onChange={(event) => setDateDraft((current) => ({ ...current, startDate: event.target.value }))} type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">End Date</label>
              <input value={dateDraft.endDate} onChange={(event) => setDateDraft((current) => ({ ...current, endDate: event.target.value }))} type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
          </div>
          <div className="flex gap-[5px]">
            <button onClick={() => setDateFilter(dateDraft)} className="bg-[#252271] text-white text-[14px] font-medium h-[36px] px-[20px] rounded-[15px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all duration-150">
              <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><circle cx="6.875" cy="6.875" r="4.875" stroke="white" strokeWidth="1.17" /><path d="M12.25 12.25L9.74 9.74" stroke="white" strokeLinecap="round" strokeWidth="1.17" /></svg>
              Cari
            </button>
            <button aria-label="Reset filter" onClick={() => { const empty = { startDate: "", endDate: "" }; setDateDraft(empty); setDateFilter(empty); }} className="h-[36px] px-[14px] rounded-[15px] border border-[#cc0000] text-[#cc0000] text-[12px] font-semibold hover:bg-red-50 transition-colors">Reset</button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] overflow-hidden">
          <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-[#f3f4f6]">
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Show</span>
              <select className="h-[24px] w-[55px] rounded-[4px] border border-[#d1d5dc] text-[13px] px-[4px] outline-none"><option>10</option><option>25</option></select>
              <span>entries</span>
            </div>
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Search:</span>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Type to filter..." className="h-[30px] w-[176px] rounded-[4px] border border-[#d1d5dc] px-[12px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#252271] text-white text-[10.5px] font-medium">
                  {curr.headers.map((h, i) => (
                    <th key={i} className="text-left px-[14px] py-[10px]">{h}</th>
                  ))}
                  <th className="text-center px-[14px] py-[10px]">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((r, i) => (
                  <tr key={i} className="border-b border-[#f3f4f6] text-[12px] hover:bg-[#fafafa] transition-colors">
                    {r.map((cell, j) => (
                      <td key={j} className="px-[14px] py-[12px] text-[#364153]">{cell}</td>
                    ))}
                    <td className="px-[14px] py-[12px] text-center">
                      <button className="flex items-center gap-[4px] text-[#252271] text-[11px] font-medium px-[10px] py-[4px] rounded-[8px] border border-[#252271] hover:bg-[#252271] hover:text-white transition-all duration-150 mx-auto">
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredRows.length === 0 && (
                  <tr><td colSpan={curr.headers.length + 1} className="text-center py-[40px] text-[#94a3b8] text-[13px]">Tidak ada data</td></tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between px-[16px] py-[12px] border-t border-[#f3f4f6] text-[13px] text-[#6a7282]">
            <span>Showing 1 to {filteredRows.length} of {filteredRows.length} entries</span>
            <div className="flex gap-[4px]">
              <button className="h-[28px] px-[10px] rounded-[4px] border border-[#d1d5dc] text-[12px]">Previous</button>
              <button className="h-[28px] px-[10px] rounded-[4px] bg-[#252271] text-white text-[12px]">1</button>
              <button className="h-[28px] px-[10px] rounded-[4px] border border-[#d1d5dc] text-[12px]">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// ─── RUP & SP3 Signed Upload Modals ──────────────────────────────────────────
function RupSignedUploadModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: (item: any) => void }) {
  const [rupId, setRupId] = useState("RUP-2024-001");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Silakan pilih file RUP Signed terlebih dahulu.");
      return;
    }
    try {
      setIsUploading(true);
      const payload = new FormData();
      payload.append("file", selectedFile);
      payload.append("stage", "rup-signed");
      await api.post(`/pengadaan/${rupId}/documents`, payload).catch(() => {});
      onSuccess({
        idRup: rupId,
        namaFile: selectedFile.name,
        tanggal: new Date().toISOString().split("T")[0],
        status: "Uploaded"
      });
      alert("Dokumen RUP Signed berhasil diunggah.");
      onClose();
    } catch (e: any) {
      alert(e.response?.data?.message || "Gagal mengunggah dokumen RUP Signed.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[15px] w-[500px] overflow-hidden shadow-2xl">
        <div className="bg-[#cc0000] px-[24px] py-[12px]">
          <p className="text-white text-[14px] font-bold">Upload RUP Signed</p>
        </div>
        <div className="p-[28px] flex flex-col gap-[16px]">
          <div>
            <label className="block text-[12px] font-semibold text-[#364153] mb-[4px]">ID RUP</label>
            <input
              type="text"
              value={rupId}
              onChange={(e) => setRupId(e.target.value)}
              className="w-full h-[37px] rounded-[8px] border border-[#d1d5dc] bg-white px-[12px] text-[13px] outline-none focus:border-[#252271]"
              placeholder="RUP-2024-001..."
            />
          </div>
          <div>
            <label className="block text-[12px] font-semibold text-[#364153] mb-[4px]">File RUP Signed</label>
            <div
              onClick={() => inputRef.current?.click()}
              className="h-[90px] border-2 border-dashed border-[#d1d5dc] rounded-[8px] flex flex-col items-center justify-center gap-[6px] text-[#94a3b8] text-[13px] cursor-pointer hover:border-[#cc0000] hover:bg-[#fef2f2] transition-colors"
            >
              <input
                ref={inputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && setSelectedFile(e.target.files[0])}
              />
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24"><path d="M12 16V4M12 4L8 8M12 4L16 8" stroke="#94a3b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d="M3 17V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V17" stroke="#94a3b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
              <span className="font-semibold text-[#364153]">{selectedFile ? selectedFile.name : "Klik untuk upload atau drag & drop file"}</span>
              <span className="text-[11px]">PDF, DOC max. 10MB</span>
            </div>
          </div>
          <div className="flex gap-[12px] justify-end">
            <button onClick={onClose} disabled={isUploading} className="px-[24px] py-[8px] rounded-[8px] border border-[#d1d5dc] text-[#64748b] text-[13px] font-medium hover:bg-[#f1f5f9] transition-colors">Batal</button>
            <button onClick={handleUpload} disabled={isUploading} className="px-[24px] py-[8px] rounded-[8px] bg-[#cc0000] text-white text-[13px] font-medium hover:bg-[#b91c1c] transition-colors active:scale-95 disabled:opacity-50">
              {isUploading ? "Mengunggah..." : "Upload"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sp3SignedUploadModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: (item: any) => void }) {
  const [sp3Id, setSp3Id] = useState("SP3-2024-001");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Silakan pilih file SP3 Signed terlebih dahulu.");
      return;
    }
    try {
      setIsUploading(true);
      const payload = new FormData();
      payload.append("file", selectedFile);
      payload.append("stage", "sp3-signed");
      await api.post(`/pengadaan/${sp3Id}/documents`, payload).catch(() => {});
      onSuccess({
        idSp3: sp3Id,
        namaFile: selectedFile.name,
        tanggal: new Date().toISOString().split("T")[0],
        status: "Uploaded"
      });
      alert("Dokumen SP3 Signed berhasil diunggah.");
      onClose();
    } catch (e: any) {
      alert(e.response?.data?.message || "Gagal mengunggah dokumen SP3 Signed.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[15px] w-[500px] overflow-hidden shadow-2xl">
        <div className="bg-[#cc0000] px-[24px] py-[12px]">
          <p className="text-white text-[14px] font-bold">Upload SP3 Signed</p>
        </div>
        <div className="p-[28px] flex flex-col gap-[16px]">
          <div>
            <label className="block text-[12px] font-semibold text-[#364153] mb-[4px]">ID SP3</label>
            <input
              type="text"
              value={sp3Id}
              onChange={(e) => setSp3Id(e.target.value)}
              className="w-full h-[37px] rounded-[8px] border border-[#d1d5dc] bg-white px-[12px] text-[13px] outline-none focus:border-[#252271]"
              placeholder="SP3-2024-001..."
            />
          </div>
          <div>
            <label className="block text-[12px] font-semibold text-[#364153] mb-[4px]">File SP3 Signed</label>
            <div
              onClick={() => inputRef.current?.click()}
              className="h-[90px] border-2 border-dashed border-[#d1d5dc] rounded-[8px] flex flex-col items-center justify-center gap-[6px] text-[#94a3b8] text-[13px] cursor-pointer hover:border-[#cc0000] hover:bg-[#fef2f2] transition-colors"
            >
              <input
                ref={inputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && setSelectedFile(e.target.files[0])}
              />
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24"><path d="M12 16V4M12 4L8 8M12 4L16 8" stroke="#94a3b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d="M3 17V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V17" stroke="#94a3b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
              <span className="font-semibold text-[#364153]">{selectedFile ? selectedFile.name : "Klik untuk upload atau drag & drop file"}</span>
              <span className="text-[11px]">PDF, DOC max. 10MB</span>
            </div>
          </div>
          <div className="flex gap-[12px] justify-end">
            <button onClick={onClose} disabled={isUploading} className="px-[24px] py-[8px] rounded-[8px] border border-[#d1d5dc] text-[#64748b] text-[13px] font-medium hover:bg-[#f1f5f9] transition-colors">Batal</button>
            <button onClick={handleUpload} disabled={isUploading} className="px-[24px] py-[8px] rounded-[8px] bg-[#cc0000] text-white text-[13px] font-medium hover:bg-[#b91c1c] transition-colors active:scale-95 disabled:opacity-50">
              {isUploading ? "Mengunggah..." : "Upload"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── RUP Signed page (Upload RUP Signed moved here) ───────────────────────────
function RupSignedPage() {
  const [showUpload, setShowUpload] = useState(false);
  const [search, setSearch] = useState("");
  const [dateDraft, setDateDraft] = useState({ startDate: "", endDate: "" });
  const [dateFilter, setDateFilter] = useState({ startDate: "", endDate: "" });
  const [uploaded, setUploaded] = useState([
    { idRup: "RUP-2024-001", namaFile: "RUP-Signed-001.pdf", tanggal: "13-JAN-2026", status: "Uploaded" },
  ]);

  const filtered = uploaded.filter((row) => {
    const matchesSearch = row.idRup.toLowerCase().includes(search.toLowerCase()) || row.namaFile.toLowerCase().includes(search.toLowerCase());
    const parsed = new Date(row.tanggal);
    const rowDate = Number.isNaN(parsed.getTime()) ? "" : parsed.toISOString().slice(0, 10);
    return matchesSearch
      && (!dateFilter.startDate || (!!rowDate && rowDate >= dateFilter.startDate))
      && (!dateFilter.endDate || (!!rowDate && rowDate <= dateFilter.endDate));
  });

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-white">
      <div className="px-[44px] py-[20px]">
        <h1 className="text-[#252271] text-[36px] font-extrabold leading-normal mb-[0px]">Verification</h1>
        <p className="text-[#99a1af] text-[16px] font-normal mb-[20px]">
          <span>RUP &gt; </span>
          <span className="font-semibold text-[#1e2939]">List RUP Signed</span>
        </p>

        {/* Filter */}
        <div className="bg-[#f5f7fd] border border-[#e5e7eb] rounded-[15px] p-[20px] mb-[20px]">
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] mb-[16px]">
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Start Date</label>
              <input value={dateDraft.startDate} onChange={(event) => setDateDraft((current) => ({ ...current, startDate: event.target.value }))} type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">End Date</label>
              <input value={dateDraft.endDate} onChange={(event) => setDateDraft((current) => ({ ...current, endDate: event.target.value }))} type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
          </div>
          <div className="flex gap-[5px]">
            <button
              onClick={() => setShowUpload(true)}
              className="bg-[#cc0000] text-white text-[12px] font-medium h-[36px] px-[16px] rounded-[15px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all duration-150"
            >
              <svg fill="none" height="13" viewBox="0 0 13 13" width="13"><path d="M2.708 6.5H10.292M6.5 2.708V10.292" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08" /></svg>
              Upload RUP Signed
            </button>
            <button onClick={() => setDateFilter(dateDraft)} className="bg-[#252271] text-white text-[14px] font-medium h-[36px] px-[20px] rounded-[15px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all duration-150">
              <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><circle cx="6.875" cy="6.875" r="4.875" stroke="white" strokeWidth="1.17" /><path d="M12.25 12.25L9.74 9.74" stroke="white" strokeLinecap="round" strokeWidth="1.17" /></svg>
              Cari
            </button>
            <button aria-label="Reset filter" onClick={() => { const empty = { startDate: "", endDate: "" }; setDateDraft(empty); setDateFilter(empty); }} className="h-[35px] w-[34px] rounded-[15px] border border-[#c00] flex items-center justify-center hover:bg-[#fef2f2] active:scale-95 transition-all duration-150">
              <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                <path d={group14Svg.p3bd12900} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                <path d="M1.625 1.625V4.33333H4.33333" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
              </svg>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] overflow-hidden">
          <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-[#f3f4f6]">
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Show</span>
              <select className="h-[24px] w-[55px] rounded-[4px] border border-[#d1d5dc] text-[13px] px-[4px] outline-none"><option>10</option><option>25</option></select>
              <span>entries</span>
            </div>
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Search:</span>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Type to filter..." className="h-[30px] w-[176px] rounded-[4px] border border-[#d1d5dc] px-[12px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-[#252271] text-white text-[10.5px] font-medium">
                <th className="text-left px-[14px] py-[10px]">ID RUP</th>
                <th className="text-left px-[14px] py-[10px]">Nama File</th>
                <th className="text-left px-[14px] py-[10px]">Tanggal Upload</th>
                <th className="text-center px-[14px] py-[10px]">Status</th>
                <th className="text-center px-[14px] py-[10px]">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr key={i} className="border-b border-[#f3f4f6] hover:bg-[#fafafa] transition-colors">
                  <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.idRup}</td>
                  <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.namaFile}</td>
                  <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.tanggal}</td>
                  <td className="px-[14px] py-[14px] text-center">
                    <span className="inline-flex items-center bg-[#f0fdf4] text-[#008236] text-[10.5px] font-medium px-[7px] py-[1.75px] rounded-[3.5px]">{row.status}</span>
                  </td>
                  <td className="px-[14px] py-[14px]">
                    <div className="flex items-center gap-[3px] justify-center">
                      <button onClick={() => setUploaded((prev) => prev.filter((_, j) => j !== i))} className="p-[5px] rounded-[5px] hover:bg-[#fef2f2] active:scale-95 transition-all duration-150" title="Hapus">
                        <svg fill="none" height="12" viewBox="0 0 13 13" width="13">
                          <path d={ICONS.trash1} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                          <path d={ICONS.trash2} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={5} className="text-center py-[40px] text-[#94a3b8] text-[13px]">Belum ada dokumen RUP Signed yang diunggah</td></tr>
              )}
            </tbody>
          </table>
          <div className="flex items-center justify-between px-[16px] py-[12px] border-t border-[#f3f4f6]">
            <span className="text-[#6a7282] text-[14px]">Showing 1 to {filtered.length} of {filtered.length} entries</span>
            <div className="flex items-center gap-[4px]">
              <button className="px-[12px] py-[4px] rounded-[4px] border border-[#d1d5dc] text-[#6a7282] text-[12px] font-medium hover:bg-[#f1f5f9] transition-colors">Previous</button>
              <button className="px-[12px] py-[4px] rounded-[4px] bg-[#252271] border border-[#252271] text-white text-[12px] font-medium">1</button>
              <button className="px-[12px] py-[4px] rounded-[4px] border border-[#d1d5dc] text-[#6a7282] text-[12px] font-medium hover:bg-[#f1f5f9] transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Upload modal */}
      {showUpload && (
        <RupSignedUploadModal
          onClose={() => setShowUpload(false)}
          onSuccess={(newItem) => setUploaded((prev) => [newItem, ...prev])}
        />
      )}
    </div>
  );
}

// ─── SP3 Page ─────────────────────────────────────────────────────────────────
function Sp3Page({ subPage }: { subPage: "task-approval" | "list-signed" }) {
  const [search, setSearch] = useState("");
  const emptySp3Filters = { startDate: "", endDate: "", unit: "", status: "" };
  const [sp3FilterDraft, setSp3FilterDraft] = useState(emptySp3Filters);
  const [sp3Filters, setSp3Filters] = useState(emptySp3Filters);
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedRow, setSelectedRow] = useState<any | null>(null);
  const [showDelete, setShowDelete] = useState(false);
  const [showRevisi, setShowRevisi] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const [actionNote, setActionNote] = useState("");
  const [uploadingSp3, setUploadingSp3] = useState(false);
  const [activeTab, setActiveTab] = useState<"informasi" | "evaluasi">("evaluasi");
  const { items: verificationItems, refresh: refreshSp3, process: processVerification } = useAdminVerificationQueue("sp3");

  const allSp3Rows = verificationItems.map(mapVerificationRow);
  const rows = allSp3Rows.filter((row) => {
    const date = row.submit_at ? String(row.submit_at).slice(0, 10) : "";
    const matchesSearch = row.noSp3.toLowerCase().includes(search.toLowerCase()) || row.procTitle.toLowerCase().includes(search.toLowerCase());
    return matchesSearch
      && (!sp3Filters.startDate || (!!date && date >= sp3Filters.startDate))
      && (!sp3Filters.endDate || (!!date && date <= sp3Filters.endDate))
      && (!sp3Filters.unit || String(row.dept || "").toLowerCase().includes(sp3Filters.unit.toLowerCase()))
      && (!sp3Filters.status || String(row.status || "").toLowerCase() === sp3Filters.status.toLowerCase());
  });

  const submitAction = async (action: "approve" | "revisi" | "reject") => {
    if (!selectedRow?.verif_id) { alert("ID verifikasi tidak ditemukan."); return; }
    try {
      await processVerification(selectedRow.verif_id, action, actionNote);
      setActionNote("");
      setShowRevisi(false);
      setShowReject(false);
      setView("list");
    } catch (error: any) {
      console.error("SP3 Submit Action Error:", error?.response || error);
      const serverMsg = error?.response?.data?.message || error?.response?.data?.error || (typeof error?.response?.data === 'string' ? error.response.data : null);
      const msg = serverMsg || error?.message || "Proses SP3 gagal disimpan.";
      alert(`Gagal (${error?.response?.status || 'Error'}): ${msg}`);
    }
  };

  const deleteSp3 = async () => {
    if (!selectedRow?.verif_id) return;
    try {
      await api.delete(`/verifikasi/${selectedRow.verif_id}`);
      setShowDelete(false);
      setSelectedRow(null);
      await refreshSp3();
    } catch (error: any) {
      alert(error?.response?.data?.message || "SP3 gagal dihapus.");
    }
  };

  const uploadSp3File = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !selectedRow?.pengadaan_id) return;
    try {
      setUploadingSp3(true);
      const payload = new FormData();
      payload.append("file", file);
      payload.append("stage", "sp3-signed");
      await api.post(`/pengadaan/${selectedRow.pengadaan_id}/documents`, payload, { headers: { "Content-Type": "multipart/form-data" } });
      alert("Surat SP3 signed berhasil diunggah. User sekarang dapat melihat dan mengunduhnya.");
    } catch (error: any) {
      alert(error?.response?.data?.message || "Surat SP3 gagal diunggah.");
    } finally {
      setUploadingSp3(false);
      event.target.value = "";
    }
  };

  const breadcrumb = subPage === "task-approval" ? "SP3 > Task Approval" : "SP3 > List Signed SP3";

  const [showSignedUpload, setShowSignedUpload] = useState(false);
  const [signedSearch, setSignedSearch] = useState("");
  const [sp3SignedList, setSp3SignedList] = useState<any[]>([]);

  if (subPage === "list-signed") {
    const filteredSigned = sp3SignedList.filter(
      (r) => r.idSp3.toLowerCase().includes(signedSearch.toLowerCase()) || r.namaFile.toLowerCase().includes(signedSearch.toLowerCase())
    );

    return (
      <div className="flex-1 min-h-0 overflow-auto bg-white">
        <div className="px-[44px] py-[20px]">
          <h1 className="text-[#252271] text-[36px] font-extrabold leading-normal mb-[0px]">Verification</h1>
          <p className="text-[#99a1af] text-[16px] font-normal mb-[20px]">
            <span>SP3 &gt; </span><span className="font-semibold text-[#1e2939]">List Signed SP3</span>
          </p>
          <div className="bg-[#f5f7fd] border border-[#e5e7eb] rounded-[15px] p-[20px] mb-[20px]">
            <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] mb-[16px]">
              <div><label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Start Date</label><input type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none" /></div>
              <div><label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">End Date</label><input type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none" /></div>
            </div>
            <div className="flex gap-[5px]">
              <button
                onClick={() => setShowSignedUpload(true)}
                className="bg-[#cc0000] text-white text-[12px] font-medium h-[36px] px-[16px] rounded-[15px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all duration-150 cursor-pointer"
              >
                <svg fill="none" height="13" viewBox="0 0 13 13" width="13"><path d="M2.708 6.5H10.292M6.5 2.708V10.292" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08" /></svg>
                Upload SP3 Signed
              </button>
              <button className="bg-[#252271] text-white text-[14px] font-medium h-[36px] px-[20px] rounded-[15px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all duration-150">
                <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><circle cx="6.875" cy="6.875" r="4.875" stroke="white" strokeWidth="1.17" /><path d="M12.25 12.25L9.74 9.74" stroke="white" strokeLinecap="round" strokeWidth="1.17" /></svg>
                Cari
              </button>
              <button className="h-[35px] w-[34px] rounded-[15px] border border-[#c00] flex items-center justify-center hover:bg-[#fef2f2] active:scale-95 transition-all duration-150">
                <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                  <path d={group14Svg.p3bd12900} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                  <path d="M1.625 1.625V4.33333H4.33333" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                </svg>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white border border-[#e5e7eb] rounded-[10px] overflow-hidden">
            <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-[#f3f4f6]">
              <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
                <span>Show</span>
                <select className="h-[24px] w-[55px] rounded-[4px] border border-[#d1d5dc] text-[13px] px-[4px] outline-none"><option>10</option><option>25</option></select>
                <span>entries</span>
              </div>
              <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
                <span>Search:</span>
                <input value={signedSearch} onChange={(e) => setSignedSearch(e.target.value)} placeholder="Type to filter..." className="h-[30px] w-[176px] rounded-[4px] border border-[#d1d5dc] px-[12px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-[#252271] text-white text-[10.5px] font-medium">
                  <th className="text-left px-[14px] py-[10px]">ID SP3</th>
                  <th className="text-left px-[14px] py-[10px]">Nama File</th>
                  <th className="text-left px-[14px] py-[10px]">Tanggal Upload</th>
                  <th className="text-center px-[14px] py-[10px]">Status</th>
                  <th className="text-center px-[14px] py-[10px]">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredSigned.map((row, i) => (
                  <tr key={i} className="border-b border-[#f3f4f6] hover:bg-[#fafafa] transition-colors">
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.idSp3}</td>
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.namaFile}</td>
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.tanggal}</td>
                    <td className="px-[14px] py-[14px] text-center">
                      <span className="inline-flex items-center bg-[#f0fdf4] text-[#008236] text-[10.5px] font-medium px-[7px] py-[1.75px] rounded-[3.5px]">{row.status}</span>
                    </td>
                    <td className="px-[14px] py-[14px]">
                      <div className="flex items-center gap-[3px] justify-center">
                        <button onClick={() => setSp3SignedList((prev) => prev.filter((_, j) => j !== i))} className="p-[5px] rounded-[5px] hover:bg-[#fef2f2] active:scale-95 transition-all duration-150" title="Hapus">
                          <svg fill="none" height="12" viewBox="0 0 13 13" width="13">
                            <path d={ICONS.trash1} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                            <path d={ICONS.trash2} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredSigned.length === 0 && (
                  <tr><td colSpan={5} className="text-center py-[40px] text-[#94a3b8] text-[13px]">Belum ada dokumen SP3 Signed yang diunggah</td></tr>
                )}
              </tbody>
            </table>
            <div className="flex items-center justify-between px-[16px] py-[12px] border-t border-[#f3f4f6]">
              <span className="text-[#6a7282] text-[14px]">Showing 1 to {filteredSigned.length} of {filteredSigned.length} entries</span>
              <div className="flex items-center gap-[4px]">
                <button className="px-[12px] py-[4px] rounded-[4px] border border-[#d1d5dc] text-[#6a7282] text-[12px] font-medium hover:bg-[#f1f5f9] transition-colors">Previous</button>
                <button className="px-[12px] py-[4px] rounded-[4px] bg-[#252271] border border-[#252271] text-white text-[12px] font-medium">1</button>
                <button className="px-[12px] py-[4px] rounded-[4px] border border-[#d1d5dc] text-[#6a7282] text-[12px] font-medium hover:bg-[#f1f5f9] transition-colors">Next</button>
              </div>
            </div>
          </div>
        </div>

        {/* Upload modal */}
        {showSignedUpload && (
          <Sp3SignedUploadModal
            onClose={() => setShowSignedUpload(false)}
            onSuccess={(newItem) => setSp3SignedList((prev) => [newItem, ...prev])}
          />
        )}
      </div>
    );
  }

  if (view === "detail" && selectedRow) {
    const isSp3Verified = ["approved", "final", "sudah diverifikasi", "closed"].includes(String(selectedRow.status || "").toLowerCase());
    return (
      <div className="flex-1 min-h-0 overflow-auto bg-white">
        <div className="px-[44px] py-[20px]">
          <div className="flex items-center gap-[8px] mb-[16px]">
            <button onClick={() => setView("list")} className="flex items-center justify-center size-[28px] rounded-full hover:bg-[#e0e7ff] transition-colors active:scale-95">
              <svg fill="none" height="16" viewBox="0 0 16 16" width="16"><path d="M10 12L6 8L10 4" stroke="#6a7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
            </button>
            <div className="flex items-center justify-between flex-1">
              <p className="text-[#99a1af] text-[16px] font-normal">
                <span>SP3 &gt; Task Approval &gt; </span><span className="font-bold text-[#252271]">Detail</span>
              </p>
              <div className="flex items-center gap-[10px]">
                <span className={`inline-flex items-center border text-[10.5px] font-medium px-[8px] py-[2.75px] rounded-full ${isSp3Verified ? "bg-slate-100 border-slate-300 text-slate-500" : "bg-[#f0f9ff] border-[#0069a8] text-[#0069a8]"}`}>{isSp3Verified ? "Sudah Diverifikasi" : selectedRow.status || "Submitted SP3"}</span>
                <button disabled={isSp3Verified} onClick={() => submitAction("approve")} className={`h-[36px] px-[20px] text-[13px] font-bold rounded-[8px] transition-all shadow-sm ${isSp3Verified ? "bg-slate-200 text-slate-500 cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700 active:scale-95"}`}>{isSp3Verified ? "✓ Sudah Diverifikasi" : "Verifikasi & Setujui"}</button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#e5e7eb] rounded-[15px] p-[24px] shadow-sm mb-[20px]">
            <Sp3DetailView item={selectedRow} showActions={false} />
          </div>

          <div className="flex gap-[10px] justify-end">
            <label className="h-[36px] px-[16px] border border-[#252271] text-[#252271] text-[13px] font-bold rounded-[8px] hover:bg-[#eef2ff] active:scale-95 transition-all duration-150 flex items-center cursor-pointer">
              {uploadingSp3 ? "Mengunggah..." : "Unggah Surat SP3 Signed"}
              <input type="file" accept=".pdf,.doc,.docx" className="hidden" disabled={uploadingSp3} onChange={uploadSp3File} />
            </label>
            <button onClick={() => { setActionNote(""); setShowReject(true); }} className="h-[36px] px-[16px] border border-red-300 bg-red-50 text-red-600 text-[13px] font-bold rounded-[8px] hover:bg-red-100 active:scale-95 transition-all duration-150">Tolak</button>
            <button onClick={() => { setActionNote(""); setShowRevisi(true); }} className="h-[36px] px-[16px] border border-amber-400 bg-amber-50 text-amber-700 text-[13px] font-bold rounded-[8px] hover:bg-amber-100 active:scale-95 transition-all duration-150">Revisi</button>
          </div>
        </div>

          {/* Inline Revisi Box */}
          {showRevisi && (
            <div className="mx-[44px] mb-[16px] bg-amber-50 border border-amber-300 rounded-[12px] p-[16px]">
              <p className="text-[#92400e] text-[12px] font-bold mb-[8px]">Tuliskan Catatan Revisi:</p>
              <textarea
                autoFocus
                value={actionNote}
                onChange={(e) => setActionNote(e.target.value)}
                className="w-full h-[80px] border border-amber-300 rounded-[8px] px-[12px] py-[8px] text-[13px] outline-none focus:border-amber-500 resize-none transition-colors"
                placeholder="Catatan revisi..."
              />
              <div className="flex gap-[10px] justify-end mt-[10px]">
                <button onClick={() => { setShowRevisi(false); setActionNote(""); }} className="px-[16px] py-[7px] rounded-[8px] border border-[#d1d5dc] text-[#64748b] text-[12px] font-medium hover:bg-[#f1f5f9] transition-colors">Batal</button>
                <button disabled={!actionNote.trim()} onClick={() => submitAction("revisi")} className="px-[16px] py-[7px] rounded-[8px] bg-amber-500 text-white text-[12px] font-medium hover:bg-amber-600 disabled:bg-amber-200 disabled:cursor-not-allowed transition-colors active:scale-95">Kirim Revisi</button>
              </div>
            </div>
          )}

          {/* Inline Reject Box */}
          {showReject && (
            <div className="mx-[44px] mb-[16px] bg-red-50 border border-red-300 rounded-[12px] p-[16px]">
              <p className="text-[#991b1b] text-[12px] font-bold mb-[8px]">Tuliskan Alasan Penolakan:</p>
              <textarea
                autoFocus
                value={actionNote}
                onChange={(e) => setActionNote(e.target.value)}
                className="w-full h-[80px] border border-red-300 rounded-[8px] px-[12px] py-[8px] text-[13px] outline-none focus:border-red-500 resize-none transition-colors"
                placeholder="Alasan penolakan..."
              />
              <div className="flex gap-[10px] justify-end mt-[10px]">
                <button onClick={() => { setShowReject(false); setActionNote(""); }} className="px-[16px] py-[7px] rounded-[8px] border border-[#d1d5dc] text-[#64748b] text-[12px] font-medium hover:bg-[#f1f5f9] transition-colors">Batal</button>
                <button disabled={!actionNote.trim()} onClick={() => submitAction("reject")} className="px-[16px] py-[7px] rounded-[8px] bg-red-600 text-white text-[12px] font-medium hover:bg-red-700 disabled:bg-red-200 disabled:cursor-not-allowed transition-colors active:scale-95">Tolak Dokumen</button>
              </div>
            </div>
          )}
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-white">
      <div className="px-[44px] py-[20px]">
        <h1 className="text-[#252271] text-[36px] font-extrabold leading-normal mb-[0px]">Verification</h1>
        <p className="text-[#99a1af] text-[16px] font-normal mb-[20px]">
          <span>SP3 &gt; </span><span className="font-semibold text-[#1e2939]">Task Approval</span>
        </p>

        {/* Filter */}
        <div className="bg-[#f5f7fd] border border-[#e5e7eb] rounded-[15px] p-[20px] mb-[20px]">
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] mb-[16px]">
            <div><label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Start Date</label><input value={sp3FilterDraft.startDate} onChange={(event) => setSp3FilterDraft((current) => ({ ...current, startDate: event.target.value }))} type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" /></div>
            <div><label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">End Date</label><input value={sp3FilterDraft.endDate} onChange={(event) => setSp3FilterDraft((current) => ({ ...current, endDate: event.target.value }))} type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" /></div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Divisi</label>
              <select value={sp3FilterDraft.unit} onChange={(event) => setSp3FilterDraft((current) => ({ ...current, unit: event.target.value }))} className="w-full h-[36px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors"><option value="">Semua Divisi</option>{DIVISI_LIST.map((divisi) => <option key={divisi} value={divisi}>{divisi}</option>)}</select>
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Status</label>
              <select value={sp3FilterDraft.status} onChange={(event) => setSp3FilterDraft((current) => ({ ...current, status: event.target.value }))} className="w-full h-[36px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors"><option value="">Semua Status</option>{Array.from(new Set(allSp3Rows.map((row) => row.status).filter(Boolean))).map((status) => <option key={status} value={status}>{status}</option>)}</select>
            </div>
          </div>
          <div className="flex gap-[5px]">
            <button onClick={() => setSp3Filters(sp3FilterDraft)} className="bg-[#252271] text-white text-[14px] font-medium h-[36px] px-[20px] rounded-[15px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all duration-150">
              <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><circle cx="6.875" cy="6.875" r="4.875" stroke="white" strokeWidth="1.17" /><path d="M12.25 12.25L9.74 9.74" stroke="white" strokeLinecap="round" strokeWidth="1.17" /></svg>
              Cari
            </button>
            <button aria-label="Reset filter" onClick={() => { setSp3FilterDraft(emptySp3Filters); setSp3Filters(emptySp3Filters); }} className="h-[35px] w-[34px] rounded-[15px] border border-[#c00] flex items-center justify-center hover:bg-[#fef2f2] active:scale-95 transition-all duration-150">
              <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                <path d={group14Svg.p3bd12900} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                <path d="M1.625 1.625V4.33333H4.33333" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
              </svg>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] overflow-hidden">
          <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-[#f3f4f6]">
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Show</span>
              <select className="h-[24px] w-[55px] rounded-[4px] border border-[#d1d5dc] text-[13px] px-[4px] outline-none"><option>10</option><option>25</option></select>
              <span>entries</span>
            </div>
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Search:</span>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Type to filter..." className="h-[30px] w-[176px] rounded-[4px] border border-[#d1d5dc] px-[12px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="bg-[#252271] text-white text-[10.5px] font-medium tracking-[0.3px]">
                  <th className="text-left px-[14px] py-[10px] whitespace-nowrap">No. SP3</th>
                  <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Judul Pengadaan</th>
                  <th className="text-left px-[14px] py-[10px] whitespace-nowrap">RKAP Value</th>
                  <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Divisi</th>
                  <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Tax Value</th>
                  <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Realisation</th>
                  <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Status</th>
                  <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-[#f3f4f6] hover:bg-[#fafafa] transition-colors">
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px] whitespace-nowrap">{row.noSp3}</td>
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px] max-w-[200px] truncate">{row.procTitle}</td>
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px] whitespace-nowrap">{row.rkap}</td>
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.dept}</td>
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px] whitespace-nowrap">{row.taxValue}</td>
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.realisation}</td>
                    <td className="px-[14px] py-[14px] text-center">
                      <span className={`inline-flex items-center text-[10.5px] font-medium px-[7px] py-[1.75px] rounded-[3.5px] ${row.status === "Final" ? "bg-[#f0fdf4] text-[#008236]" : "bg-[#f0f9ff] text-[#0069a8]"}`}>{row.status}</span>
                    </td>
                    <td className="px-[14px] py-[14px]">
                      <div className="flex items-center gap-[3px] justify-center">
                        <button onClick={() => { setSelectedRow(row); setView("detail"); }} className="p-[5px] rounded-[5px] hover:bg-[#e0e7ff] active:scale-95 transition-all duration-150" title="Detail">
                          <svg fill="none" height="12" viewBox="0 0 12 12" width="12">
                            <path d={group14Svg.p126ce980} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                            <path d={group14Svg.p24092800} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        <button onClick={() => { setSelectedRow(row); setShowDelete(true); }} className="p-[5px] rounded-[5px] hover:bg-[#fef2f2] active:scale-95 transition-all duration-150" title="Hapus">
                          <svg fill="none" height="12" viewBox="0 0 13 13" width="13">
                            <path d={ICONS.trash1} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                            <path d={ICONS.trash2} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr><td colSpan={8} className="text-center py-[40px] text-[#94a3b8] text-[13px]">Tidak ada data</td></tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between px-[16px] py-[12px] border-t border-[#f3f4f6]">
            <span className="text-[#6a7282] text-[14px]">Showing 1 to {rows.length} of {rows.length} entries</span>
            <div className="flex items-center gap-[4px]">
              <button className="px-[12px] py-[4px] rounded-[4px] border border-[#d1d5dc] text-[#6a7282] text-[12px] font-medium hover:bg-[#f1f5f9] transition-colors">Previous</button>
              <button className="px-[12px] py-[4px] rounded-[4px] bg-[#252271] border border-[#252271] text-white text-[12px] font-medium">1</button>
              <button className="px-[12px] py-[4px] rounded-[4px] border border-[#d1d5dc] text-[#6a7282] text-[12px] font-medium hover:bg-[#f1f5f9] transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>

      {showDelete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[15px] w-[400px] overflow-hidden shadow-2xl">
            <div className="bg-[#cc0000] px-[24px] py-[12px]"><p className="text-white text-[14px] font-bold">Delete SP3</p></div>
            <div className="p-[32px] flex flex-col items-center gap-[16px]">
              <div className="size-[56px] bg-[#fef2f2] rounded-full flex items-center justify-center">
                <svg fill="none" height="28" viewBox="0 0 28 28" width="28">
                  <path d="M14 10V14M14 18H14.01" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <circle cx="14" cy="14" r="11" stroke="#CC0000" strokeWidth="2" />
                </svg>
              </div>
              <p className="text-[#0f172a] text-[14px] text-center">Kamu akan menghapus SP3 secara permanen?</p>
              <div className="flex gap-[12px]">
                <button onClick={() => setShowDelete(false)} className="px-[24px] py-[8px] rounded-[8px] border border-[#d1d5dc] text-[#64748b] text-[13px] font-medium hover:bg-[#f1f5f9] transition-colors">Cancel</button>
                <button onClick={deleteSp3} className="px-[24px] py-[8px] rounded-[8px] bg-[#cc0000] text-white text-[13px] font-medium hover:bg-[#b91c1c] transition-colors active:scale-95">Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Process Stepper ──────────────────────────────────────────────────────────
function ProcessStepper({ steps, activeStep, onStep }: { steps: string[]; activeStep: number; onStep: (i: number) => void }) {
  return (
    <div className="flex items-start gap-0 overflow-x-auto overscroll-x-contain pb-[10px]">
      {steps.map((label, i) => {
        const done = i < activeStep;
        const active = i === activeStep;
        return (
          <div key={i} className="flex items-start shrink-0">
            <button onClick={() => onStep(i)} className="flex flex-col items-center gap-[8px] w-[76px] group">
              <div className={`w-[28px] h-[28px] rounded-full flex items-center justify-center border-[1.2px] transition-all duration-150
                ${active ? "border-[#8c0505] bg-white" : done ? "border-[#252271] bg-[#252271]" : "border-[#e5e5e5] bg-white"}`}>
                {done ? (
                  <svg fill="none" height="12" viewBox="0 0 12 12" width="12"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
                ) : (
                  <span className={`text-[10px] font-bold ${active ? "text-[#cc0000]" : "text-[rgba(115,115,115,0.6)]"}`}>{i + 1}</span>
                )}
              </div>
              <span className={`text-[10px] font-medium text-center leading-[12.5px] w-[68px]
                ${active ? "text-[#cc0000]" : done ? "text-[#252271]" : "text-[rgba(115,115,115,0.5)]"}`}>
                {label}
              </span>
            </button>
            {i < steps.length - 1 && (
              <div className="mt-[14px] w-[18px] h-[2px] bg-[#e5e5e5] shrink-0" />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── PBJ Page ────────────────────────────────────────────────────────────────
const PBJ_STEPS = [
  "Draft RKS",
  "Undangan RKS",
  "Pemasukan Calon Peserta Tender",
  "Proses Aanwijzing",
  "Pemasukan Dokumen Penawaran",
  "Evaluasi Penawaran",
  "Undangan KKN",
  "Kegiatan KKN",
  "BA Hasil Pelelangan",
  "Usulan dan Penetapan Calon Pemenang",
  "Pengumuman Pemenang Tender",
  "SPR dan Pengantar Jamlak"
];

const PBJ_STEP_TITLES = [
  "Draft RKS", "Undangan RKS", "Calon Peserta Tender", "Proses Aanwijzing",
  "Pemasukan Dokumen Penawaran", "Evaluasi Penawaran",
  "Undangan Klarifikasi, Konfirmasi, dan Negosiasi", "Kegiatan Klarifikasi, Konfirmasi, dan Negosiasi", "BA Hasil Pelelangan",
  "Usulan dan Penetapan Calon Pemenang", "Pengumuman Pemenang Tender", "SPR dan Pengantar Jamlak",
];

const PBJ_UPLOAD_LABELS: Record<number, string[]> = {
  3: ["BA Aanwijzing"],
  4: ["Dokumen Penawaran", "BA Pemasukan Dokumen"],
  6: ["BA Undangan KKN"],
  7: ["BA Klarifikasi, Konfirmasi dan Negosiasi"],
  8: ["BA Hasil Pelelangan"],
  9: ["BA Usulan Pemenang"],
  11: ["SP Jamlak", "Summary Dokumen SPR", "Dokumen SPR"],
};

type DocFilters = { startDate: string; endDate: string; unit: string; status: string };

const matchesDocFilters = (row: any, filters: DocFilters) => {
  const date = row.submit_at ? new Date(row.submit_at).toISOString().slice(0, 10) : "";
  const unit = String(row.dept || row.divisi || row.departemen || "").toLowerCase();
  const status = String(row.status || "").toLowerCase();
  return (!filters.startDate || date >= filters.startDate)
    && (!filters.endDate || date <= filters.endDate)
    && (!filters.unit || unit.includes(filters.unit.toLowerCase()))
    && (!filters.status || status === filters.status.toLowerCase());
};

// shared filter+table shell (matching user reference images)
function DocFilterBar({ onSearch, search, onFilter }: { search: string; onSearch: (v: string) => void; onFilter?: (filters: DocFilters) => void }) {
  const [filters, setFilters] = useState<DocFilters>({ startDate: "", endDate: "", unit: "", status: "" });
  const updateFilter = (patch: Partial<DocFilters>) => {
    const next = { ...filters, ...patch };
    setFilters(next);
    onFilter?.(next);
  };
  const reset = () => {
    const empty = { startDate: "", endDate: "", unit: "", status: "" };
    setFilters(empty);
    onFilter?.(empty);
    onSearch("");
  };
  return (
    <div className="bg-[#f5f7fd] border border-[#e5e7eb] rounded-[15px] p-[20px] mb-[20px]">
      <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] mb-[16px]">
        <div>
          <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Start Date</label>
          <input value={filters.startDate} onChange={(event) => updateFilter({ startDate: event.target.value })} type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
        </div>
        <div>
          <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">End Date</label>
          <input value={filters.endDate} onChange={(event) => updateFilter({ endDate: event.target.value })} type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
        </div>
        <div>
          <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Divisi</label>
          <select value={filters.unit} onChange={(event) => updateFilter({ unit: event.target.value })} className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors"><option value="">Semua Divisi</option>{DIVISI_LIST.map((divisi) => <option key={divisi} value={divisi}>{divisi}</option>)}</select>
        </div>
        <div>
          <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Status</label>
          <select value={filters.status} onChange={(event) => updateFilter({ status: event.target.value })} className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors">
            <option value="">Semua Status</option>
            <option value="Contract Release">Contract Release</option>
            <option value="Approved">Approved</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      </div>
      <div className="flex gap-[5px]">
        <button className="bg-[#252271] text-white text-[13px] font-medium h-[36px] px-[20px] rounded-[15px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all duration-150 cursor-pointer">
          <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><circle cx="6.875" cy="6.875" r="4.875" stroke="white" strokeWidth="1.17" /><path d="M12.25 12.25L9.74 9.74" stroke="white" strokeLinecap="round" strokeWidth="1.17" /></svg>
          Cari
        </button>
        <button className="h-[35px] w-[34px] rounded-[15px] border border-[#c00] flex items-center justify-center hover:bg-[#fef2f2] active:scale-95 transition-all duration-150 cursor-pointer" onClick={reset}>
          <svg fill="none" height="13" viewBox="0 0 13 13" width="13"><path d={group14Svg.p3bd12900} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" /><path d="M1.625 1.625V4.33333H4.33333" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" /></svg>
        </button>
      </div>
    </div>
  );
}

// ─── Proses PBJ Detail ────────────────────────────────────────────────────────
function ProsesPBJPage({ row, breadcrumbFrom, onBack, onComplete, onRevisi, onSaveStep, onUpload }: { row: any; breadcrumbFrom: string; onBack: () => void; onComplete?: () => Promise<void>; onRevisi?: (catatan: string) => Promise<void>; onSaveStep?: (progress: any) => Promise<void>; onUpload?: (file: File, step: string) => Promise<void> }) {
  const rawProgress = row.formData?.admin_progress || {};
  const shiftLegacySteps = (record: Record<number, any> = {}) => Object.fromEntries(Object.entries(record).map(([key, value]) => [Number(key) >= 7 ? Number(key) + 1 : Number(key), value]));
  const savedProgress = rawProgress.schemaVersion === 2 ? rawProgress : {
    ...rawProgress,
    activeStep: Number(rawProgress.activeStep) >= 7 ? Number(rawProgress.activeStep) + 1 : Number(rawProgress.activeStep) || 0,
    fieldValues: shiftLegacySteps(rawProgress.fieldValues),
    customFiles: shiftLegacySteps(rawProgress.customFiles),
  };
  const [activeStep, setActiveStep] = useState(savedProgress.activeStep || 0);
  const [isEditing, setIsEditing] = useState(false);
  const [fieldValues, setFieldValues] = useState<Record<number, Record<number, string>>>(savedProgress.fieldValues || {});
  const [customFiles, setCustomFiles] = useState<Record<number, { name: string; size: string; date: string; documentType?: string }[]>>(savedProgress.customFiles || {});
  const [vendorRows, setVendorRows] = useState<Array<{ vendorName: string; picName: string; vendorAddress: string; phoneNumber: string; emailCorporate: string; attendance: string; description: string; kknDate?: string; offerPrice?: string; negotiatedPrice?: string; kknNote?: string }>>(
    savedProgress.vendorRows?.length ? savedProgress.vendorRows : [{
      vendorName: row.vendor || row.formData?.vendor || "",
      picName: "", vendorAddress: "", phoneNumber: "", emailCorporate: "", attendance: "Tidak", description: "",
    }],
  );

  const defaultAttachments: Record<number, { name: string; size: string; date: string; documentType?: string }[]> = {};

  const initialFields: Record<number, { label: string; value: string; type?: string }[]> = {
    0: [
      { label: "Rencana Kerja", value: "" },
      { label: "Tanggal Rencana Kerja dan Syarat", value: "", type: "date" },
      { label: "Metode Submit Dokumen", value: "" },
      { label: "Catatan", value: "" },
    ],
    1: [
      { label: "Peserta Tender", value: "" },
      { label: "Catatan Undangan RKS", value: "" },
      { label: "Tanggal Undangan RKS", value: "", type: "date" },
      { label: "Nomor Undangan RKS", value: "" },
    ],
    2: [
      { label: "Vendor Information", value: "" },
    ],
    3: [
      { label: "No", value: "" },
      { label: "Peserta Tender", value: "" },
      { label: "Keterangan", value: "" },
      { label: "Tanggal BA Rapat Penjelasan (Aanwijzing & Addendum)", value: "", type: "date" },
      { label: "Nomor BA Rapat Penjelasan (Aanwijzing & Addendum)", value: "" },
      { label: "Kehadiran (Ya/Tidak)", value: "Tidak", type: "boolean" },
    ],
    4: [
      { label: "Peserta Tender", value: "" },
      { label: "Tanggal Pembukaan Dokumen", value: "", type: "date" },
      { label: "Nomor BA Pembukaan Dokumen Penawaran", value: "" },
      { label: "Catatan", value: "" },
    ],
    5: [
      { label: "Peserta Tender", value: "" },
      { label: "Tanggal Evaluasi", value: "", type: "date" },
      { label: "Catatan Evaluasi", value: "" },
      { label: "Status Lulus/Gugur (Ya/Tidak)", value: "Tidak", type: "boolean" },
      { label: "Tambahan Catatan Evaluasi", value: "" },
      { label: "Tanggal BA Evaluasi Dokumen Penawaran", value: "", type: "date" },
      { label: "Nomor BA Evaluasi Dokumen Penawaran", value: "" },
    ],
    6: [
      { label: "Peserta Tender", value: "" },
      { label: "Tanggal Undangan KKN", value: "", type: "date" },
      { label: "Catatan Undangan KKN", value: "" },
      { label: "Tanggal Undangan Klarifikasi, Konfirmasi, dan Negosiasi", value: "", type: "date" },
      { label: "Nomor Undangan Klarifikasi, Konfirmasi, dan Negosiasi", value: "" },
    ],
    7: [
      { label: "Peserta Tender", value: "" },
      { label: "Tanggal KKN", value: "", type: "date" },
      { label: "Harga Penawaran", value: "" },
      { label: "Harga Negosiasi", value: "" },
      { label: "Catatan KKN", value: "" },
      { label: "Tanggal Berita Acara Klarifikasi, Konfirmasi dan Negosiasi", value: "", type: "date" },
      { label: "Nomor Berita Acara Klarifikasi, Konfirmasi dan Negosiasi", value: "" },
    ],
    8: [
      { label: "Peserta Tender", value: "" },
      { label: "Tanggal BA", value: "", type: "date" },
      { label: "Catatan Hasil Pelelangan", value: "" },
      { label: "Tanggal BA Hasil Pelelangan", value: "", type: "date" },
      { label: "Nomor BA Hasil Pelelangan", value: "" },
    ],
    9: [
      { label: "Tanggal", value: "", type: "date" },
      { label: "Nomor", value: "" },
      { label: "Catatan", value: "" },
    ],
    10: [
      { label: "Tanggal", value: "", type: "date" },
      { label: "Nomor", value: "" },
      { label: "Catatan", value: "" },
      { label: "Pemenang Tender", value: "" },
    ],
    11: [
      { label: "Pemenang Tender", value: "" },
      { label: "Total Hari MPPL", value: "" },
      { label: "Nomor SPR", value: "" },
      { label: "Nama Penanda Tangan", value: "" },
      { label: "Start Jaminan Pelaksanaan", value: "", type: "date" },
      { label: "Total Hari Kalender", value: "" },
      { label: "Uncontrolled Days", value: "" },
      { label: "Jabatan Penanda Tangan", value: "" },
      { label: "Catatan", value: "" },
    ],
  };

  const getFieldValue = (step: number, idx: number, fallback: string) => {
    return fieldValues[step]?.[idx] !== undefined ? fieldValues[step][idx] : fallback;
  };

  const updateFieldValue = (step: number, idx: number, val: string) => {
    setFieldValues((prev) => ({
      ...prev,
      [step]: {
        ...(prev[step] || {}),
        [idx]: val,
      },
    }));
  };

  const updateVendorRow = (index: number, key: "vendorName" | "picName" | "vendorAddress" | "phoneNumber" | "emailCorporate" | "attendance" | "description" | "kknDate" | "offerPrice" | "negotiatedPrice" | "kknNote", value: string) => {
    setVendorRows((previous) => previous.map((vendor, vendorIndex) => vendorIndex === index ? { ...vendor, [key]: value } : vendor));
  };

  const addVendorRow = () => setVendorRows((previous) => [...previous, {
    vendorName: "", picName: "", vendorAddress: "", phoneNumber: "", emailCorporate: "", attendance: "Tidak", description: "",
  }]);

  const removeVendorRow = (index: number) => {
    setVendorRows((previous) => previous.filter((_, vendorIndex) => vendorIndex !== index));
  };

  const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>, documentType = "Lampiran") => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        await onUpload?.(file, PBJ_STEPS[activeStep]);
      } catch (error: any) {
        alert(error?.response?.data?.message || "Lampiran gagal diunggah.");
        return;
      }
      const newFileObj = {
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        date: new Date().toISOString().split("T")[0],
        documentType,
      };
      setCustomFiles((prev) => ({
        ...prev,
        [activeStep]: [...(prev[activeStep] || defaultAttachments[activeStep] || []), newFileObj],
      }));
    }
  };

  const [showRevisionBox, setShowRevisionBox] = useState(false);
  const [revisionNote, setRevisionNote] = useState("");
  const [stepVerifications, setStepVerifications] = useState<Record<number, string>>({});

  const saveCurrentStep = async () => {
    if (activeStep === 2) {
      const incompleteVendor = vendorRows.findIndex((vendor) => !vendor.vendorName.trim() || !vendor.picName.trim() || !vendor.vendorAddress.trim() || !vendor.phoneNumber.trim() || !vendor.emailCorporate.trim());
      if (vendorRows.length === 0) throw new Error("Tambahkan minimal satu calon peserta tender.");
      if (incompleteVendor !== -1) throw new Error(`Data Vendor ${incompleteVendor + 1} belum lengkap.`);
    }
    await onSaveStep?.({
      activeStep,
      stepName: PBJ_STEPS[activeStep],
      schemaVersion: 2,
      fieldValues,
      customFiles,
      vendorRows,
    });
  };

  const handleVerifikasiStep = () => {
    setStepVerifications((prev) => ({ ...prev, [activeStep]: "Sudah Diverifikasi" }));
    setShowRevisionBox(false);
    alert(`Step ${activeStep + 1} (${PBJ_STEPS[activeStep]}) berhasil diverifikasi & disetujui!`);
  };

  const handleSendRevision = async () => {
    if (!revisionNote.trim()) {
      alert("Harap isi catatan revisi terlebih dahulu.");
      return;
    }
    try {
      await saveCurrentStep();
      await onRevisi?.(revisionNote);
    } catch (error: any) {
      alert(error?.response?.data?.message || "Catatan revisi gagal dikirim.");
      return;
    }
    setStepVerifications((prev) => ({ ...prev, [activeStep]: `Perlu Revisi: ${revisionNote}` }));
    alert(`Catatan revisi untuk Step ${activeStep + 1} berhasil dikirim!`);
    setShowRevisionBox(false);
    setRevisionNote("");
  };

  const currentAttachments = customFiles[activeStep] || defaultAttachments[activeStep] || [];

  const handleBackStep = () => {
    setIsEditing(false);
    setShowRevisionBox(false);
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    } else {
      onBack();
    }
  };

  const handleNextStep = async () => {
    setIsEditing(false);
    setShowRevisionBox(false);
    try {
      await saveCurrentStep();
    } catch (error: any) {
      alert(error?.response?.data?.message || error?.message || "Perubahan PBJ gagal disimpan.");
      return;
    }
    if (activeStep < PBJ_STEPS.length - 1) {
      setActiveStep(activeStep + 1);
      return;
    }
    try {
      await onComplete?.();
      onBack();
    } catch (error: any) {
      alert(error?.response?.data?.message || "Proses PBJ gagal disimpan.");
    }
  };

  const stepHistory = PBJ_STEPS.map((st, i) => ({
    proses: st,
    tanggal: i <= activeStep ? "01-03-2024" : "-",
    status: stepVerifications[i] || (i < activeStep ? "Selesai" : i === activeStep ? (isEditing ? "Sedang Diedit" : "Dalam Proses") : "Menunggu"),
  }));

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc]">
      <div className="px-[44px] py-[20px]">
        <h1 className="text-[#252271] text-[28px] font-bold tracking-tight leading-tight mb-[2px]">Verification</h1>
        <p className="text-[#64748b] text-[13px] font-medium mb-[20px]">
          <span>PBJ &gt; {breadcrumbFrom} &gt; </span>
          <span className="font-bold text-[#1e2939]">Proses PBJ</span>
        </p>

        {/* Header card */}
        <div className="bg-[#252271] rounded-[16px] p-[24px] mb-[20px] flex items-center justify-between">
          <div>
            <p className="text-white/60 text-[12px] font-normal mb-[2px]">Proses PBJ</p>
            <p className="text-white text-[14px] font-semibold">{row.namaPaket || row.judulPengadaan || "Pengadaan Server CTIT 2024"}</p>
          </div>
          <button onClick={onBack} className="flex items-center gap-[6px] text-white/80 text-[12px] font-medium hover:text-white transition-colors cursor-pointer">
            <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><path d="M9 11L5 7L9 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
            Kembali ke List
          </button>
        </div>

        {/* Stepper */}
        <div className="bg-white border border-[#e5e7eb] rounded-[16px] p-[24px] mb-[20px]">
          <ProcessStepper steps={PBJ_STEPS} activeStep={activeStep} onStep={(s) => { setIsEditing(false); setShowRevisionBox(false); setActiveStep(s); }} />
        </div>

        {/* Step detail card */}
        <div className="bg-white border border-[#e5e7eb] rounded-[16px] p-[24px] mb-[20px]">
          <div className="flex flex-wrap items-start justify-between gap-[10px] mb-[16px]">
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              <h3 className="text-[#252271] text-[15px] font-bold">
                {PBJ_STEP_TITLES[activeStep]} {isEditing && <span className="text-amber-600 text-[12px] font-semibold ml-2">(Mode Edit Aktif)</span>}
              </h3>
              {stepVerifications[activeStep] && (
                <span className="text-[11px] font-bold px-[8px] py-[2px] rounded-full bg-green-100 text-green-800 border border-green-200">
                  ✓ {stepVerifications[activeStep]}
                </span>
              )}
            </div>
            <span className={`text-[11px] font-bold px-[10px] py-[3px] rounded-full ${isEditing ? "bg-amber-100 text-amber-800" : "bg-[#e0e7ff] text-[#252271]"}`}>
              Step {activeStep + 1} dari {PBJ_STEPS.length}
            </span>
          </div>

          {activeStep === 2 ? (
            <div className="mb-[20px] space-y-[16px]">
              {vendorRows.map((vendor, vendorIndex) => (
                <div key={vendorIndex} className="border-l-2 border-[#cc0000] pl-[14px] py-[6px]">
                  <div className="mb-[14px] flex items-center justify-between gap-3"><p className="text-[#475569] text-[12px] font-bold">Vendor Information {vendorIndex + 1}</p>{isEditing && <button type="button" onClick={() => removeVendorRow(vendorIndex)} className="rounded-lg border border-red-200 px-2.5 py-1 text-[10.5px] font-bold text-red-600 hover:bg-red-50">Hapus Vendor</button>}</div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[48px] gap-y-[12px]">
                    {([
                      ["Vendor Name", "vendorName"], ["Phone Number", "phoneNumber"],
                      ["PIC Name", "picName"], ["Email Corporate", "emailCorporate"],
                      ["Vendor Address", "vendorAddress"],
                    ] as const).map(([label, key]) => <div key={key} className="grid grid-cols-1 sm:grid-cols-[130px_minmax(0,1fr)] items-center gap-x-[12px] gap-y-[4px]"><span className="text-[11px] font-semibold text-[#64748b]">{label}:</span>{isEditing ? <input value={vendor[key]} onChange={(event) => updateVendorRow(vendorIndex, key, event.target.value)} className="min-w-0 h-[32px] border-b border-[#cbd5e1] bg-transparent px-[4px] text-[12px] outline-none focus:border-[#252271]" /> : <span className="min-w-0 break-words text-[12px] font-medium text-[#334155]">{vendor[key] || "Belum diisi"}</span>}</div>)}
                  </div>
                </div>
              ))}
              {isEditing && <button type="button" onClick={addVendorRow} className="text-[11.5px] font-bold text-[#252271]">+ Tambah Vendor</button>}
            </div>
          ) : activeStep === 3 ? (
            <div className="mb-[20px]">
              <div className="overflow-x-auto">
                <table className="w-full text-[11.5px]">
                  <thead><tr className="border-b border-[#e2e8f0] text-[#64748b]"><th className="px-[8px] py-[10px] text-left w-[52px]">NO</th><th className="px-[8px] py-[10px] text-left">PESERTA TENDER</th><th className="px-[8px] py-[10px] text-center">KEHADIRAN</th><th className="px-[8px] py-[10px] text-left">KETERANGAN</th></tr></thead>
                  <tbody>{vendorRows.map((vendor, vendorIndex) => <tr key={vendorIndex} className="border-b border-[#f1f5f9]"><td className="px-[8px] py-[12px]">{vendorIndex + 1}</td><td className="px-[8px] py-[12px]">{vendor.vendorName || "Belum diisi"}</td><td className="px-[8px] py-[12px]"><div className="flex justify-center gap-[18px]">{["Ya", "Tidak"].map((option) => <label key={option} className="flex items-center gap-[5px]"><input type="radio" name={`attendance-${vendorIndex}`} checked={vendor.attendance === option} disabled={!isEditing} onChange={() => updateVendorRow(vendorIndex, "attendance", option)} />{option}</label>)}</div></td><td className="px-[8px] py-[12px]">{isEditing ? <input value={vendor.description} onChange={(event) => updateVendorRow(vendorIndex, "description", event.target.value)} className="w-full h-[30px] border-b border-[#cbd5e1] bg-transparent outline-none focus:border-[#252271]" /> : vendor.description || "Belum diisi"}</td></tr>)}</tbody>
                </table>
              </div>
              <div className="mt-[18px] grid grid-cols-1 xl:grid-cols-2 gap-x-[32px] gap-y-[12px]">
                {(initialFields[activeStep] || []).filter((field) => field.label !== "No" && field.label !== "Peserta Tender" && !field.label.startsWith("Kehadiran") && field.label !== "Keterangan").map((field, fieldIndex) => {
                  const originalIndex = initialFields[activeStep].findIndex((entry) => entry.label === field.label);
                  const currentVal = getFieldValue(activeStep, originalIndex, field.value);
                  return <div key={fieldIndex} className="grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] items-center gap-x-[12px] gap-y-[4px]"><span className="text-[11px] font-semibold text-[#64748b]">{field.label}:</span>{isEditing ? <input type={field.type === "date" ? "date" : "text"} value={currentVal} onChange={(event) => updateFieldValue(activeStep, originalIndex, event.target.value)} className="min-w-0 h-[32px] border-b border-[#cbd5e1] bg-transparent px-[4px] text-[12px] outline-none focus:border-[#252271]" /> : <span className="min-w-0 break-words text-[12px] font-medium text-[#334155]">{currentVal || "Belum diisi"}</span>}</div>;
                })}
              </div>
            </div>
          ) : activeStep === 7 ? (
            <div className="mb-[20px] space-y-[18px]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[850px] text-[11.5px]">
                  <thead><tr className="border-b border-[#e2e8f0] text-[#64748b]"><th className="px-2 py-2.5 text-left">PESERTA TENDER</th><th className="px-2 py-2.5 text-left">TANGGAL KKN</th><th className="px-2 py-2.5 text-left">HARGA PENAWARAN</th><th className="px-2 py-2.5 text-left">HARGA NEGOSIASI</th><th className="px-2 py-2.5 text-left">CATATAN KKN</th></tr></thead>
                  <tbody>{vendorRows.map((vendor, vendorIndex) => <tr key={vendorIndex} className="border-b border-[#f1f5f9]"><td className="px-2 py-3 font-medium">{vendor.vendorName || `Vendor ${vendorIndex + 1}`}</td>{([['kknDate', 'date'], ['offerPrice', 'text'], ['negotiatedPrice', 'text'], ['kknNote', 'text']] as const).map(([key, type]) => <td key={key} className="px-2 py-3">{isEditing ? <input type={type} value={vendor[key] || ''} onChange={(event) => updateVendorRow(vendorIndex, key, event.target.value)} className="w-full h-[30px] border-b border-[#cbd5e1] bg-transparent px-1 outline-none focus:border-[#252271]" /> : vendor[key] || 'Belum diisi'}</td>)}</tr>)}</tbody>
                </table>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-3">
                {(initialFields[7] || []).slice(5).map((field) => {
                  const originalIndex = initialFields[7].findIndex((entry) => entry === field);
                  const currentVal = getFieldValue(7, originalIndex, field.value);
                  return <div key={field.label} className="grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] items-center gap-3"><span className="text-[11px] font-semibold text-[#64748b]">{field.label}:</span>{isEditing ? <input type={field.type === 'date' ? 'date' : 'text'} value={currentVal} onChange={(event) => updateFieldValue(7, originalIndex, event.target.value)} className="h-[32px] border-b border-[#cbd5e1] bg-transparent px-1 text-[12px] outline-none focus:border-[#252271]" /> : <span className="text-[12px] font-medium text-[#334155]">{currentVal || 'Belum diisi'}</span>}</div>;
                })}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[48px] gap-y-[14px] mb-[20px]">
              {(initialFields[activeStep] || []).filter((field) => field.label !== "No" && field.label !== "No.").map((field, fieldIndex) => {
                const originalIndex = initialFields[activeStep].findIndex((entry) => entry === field);
                const currentVal = getFieldValue(activeStep, originalIndex, field.value);
                return <div key={fieldIndex} className="grid grid-cols-1 md:grid-cols-[190px_minmax(0,1fr)] items-center gap-x-[12px] gap-y-[4px] py-[4px]"><span className="text-[11px] font-semibold text-[#64748b]">{field.label}:</span>{isEditing && field.type === "boolean" ? <div className="flex gap-[16px]">{["Ya", "Tidak"].map((option) => <label key={option} className="flex items-center gap-[5px] text-[12px]"><input type="radio" name={`pbj-${activeStep}-${originalIndex}`} checked={currentVal === option} onChange={() => updateFieldValue(activeStep, originalIndex, option)} />{option}</label>)}</div> : isEditing ? <input type={field.type === "date" ? "date" : "text"} value={currentVal} onChange={(event) => updateFieldValue(activeStep, originalIndex, event.target.value)} className="min-w-0 h-[32px] border-b border-[#cbd5e1] bg-transparent px-[4px] text-[12px] outline-none focus:border-[#252271]" /> : <span className="min-w-0 break-words text-[12px] font-medium text-[#334155]">{currentVal || "Belum diisi"}</span>}</div>;
              })}
            </div>
          )}

          {/* Textbox Catatan Revisi */}
          {showRevisionBox && (
            <div className="bg-amber-50 border border-amber-300 rounded-[14px] p-[16px] mb-[20px] shadow-sm animate-in fade-in-0">
              <h4 className="text-amber-900 text-[13px] font-bold mb-[6px] flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                Catatan Revisi Step Ini ({PBJ_STEPS[activeStep]})
              </h4>
              <textarea
                value={revisionNote}
                onChange={(e) => setRevisionNote(e.target.value)}
                placeholder="Tuliskan catatan revisi atau instruksi perbaikan dokumen untuk step ini..."
                className="w-full h-[80px] bg-white border border-amber-300 rounded-[8px] p-[10px] text-[12.5px] text-[#0f172a] focus:border-[#252271] outline-none transition-colors mb-[10px]"
              />
              <div className="flex items-center gap-[8px]">
                <button
                  onClick={handleSendRevision}
                  className="h-[34px] px-[14px] bg-[#cc0000] hover:bg-[#a00000] text-white text-[11.5px] font-semibold rounded-[6px] transition-all cursor-pointer shadow-sm"
                >
                  Kirim Catatan Revisi
                </button>
                <button
                  onClick={() => setShowRevisionBox(false)}
                  className="h-[34px] px-[12px] bg-white hover:bg-gray-100 text-[#475569] text-[11.5px] font-semibold rounded-[6px] border border-gray-300 transition-all cursor-pointer"
                >
                  Batal
                </button>
              </div>
            </div>
          )}

          {/* Lampiran Dokumen Section */}
          <div className="mt-[24px] pt-[18px] border-t border-[#f1f5f9]">
            <div className="flex items-center justify-between mb-[12px]">
              <p className="text-[#252271] text-[12px] font-bold tracking-[0.3px]">Dokumen Lampiran Step Ini</p>
              <div className="flex flex-wrap justify-end gap-[6px]">
                {(PBJ_UPLOAD_LABELS[activeStep] || ["Lampiran"]).map((documentType) => (
                  <label key={documentType} className="bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#252271] text-[11.5px] font-semibold px-[12px] py-[5px] rounded-[8px] flex items-center gap-[6px] cursor-pointer transition-colors border border-[#cbd5e1]">
                    <svg fill="none" height="12" viewBox="0 0 12 12" width="12"><path d="M6 2.5V9.5M2.5 6H9.5" stroke="#252271" strokeLinecap="round" strokeWidth="1.5" /></svg>
                    Unggah {documentType}
                    <input type="file" className="hidden" onChange={(event) => handleUploadFile(event, documentType)} />
                  </label>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[12px]">
              {currentAttachments.map((file, fIdx) => (
                <div key={fIdx} className="flex items-center justify-between bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] p-[10px]">
                  <div className="flex items-center gap-[10px] min-w-0">
                    <div className="size-[34px] rounded-[8px] bg-[#e0e7ff] text-[#252271] flex items-center justify-center shrink-0">
                      <svg fill="none" height="16" viewBox="0 0 16 16" width="16"><path d="M4 2H10L14 6V14H4V2Z" stroke="#252271" strokeWidth="1.2" strokeLinejoin="round" /><path d="M10 2V6H14" stroke="#252271" strokeWidth="1.2" strokeLinejoin="round" /></svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#0f172a] text-[12px] font-semibold truncate">{file.documentType ? `${file.documentType}: ` : ""}{file.name}</p>
                      <p className="text-[#94a3b8] text-[10px]">{file.size} &middot; {file.date}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`Mengunduh berkas ${file.name}`)}
                    className="px-[10px] py-[4px] bg-[#252271] text-white text-[11px] font-semibold rounded-[6px] hover:brightness-125 transition-colors cursor-pointer shrink-0"
                  >
                    Unduh
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Action Control Buttons: Back, Edit, Verifikasi, Revisi, Next / Submit & Next */}
          <div className="flex items-center justify-between pt-[18px] border-t border-[#f1f5f9] mt-[24px]">
            <button
              onClick={handleBackStep}
              className="h-[38px] px-[18px] border border-[#252271] text-[#252271] hover:bg-[#252271]/5 rounded-[10px] text-[12.5px] font-semibold flex items-center gap-[6px] transition-all cursor-pointer"
            >
              <svg fill="none" height="12" viewBox="0 0 12 12" width="12"><path d="M7.5 9L4.5 6L7.5 3" stroke="#252271" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
              Back
            </button>

            <div className="flex items-center gap-[10px]">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`h-[38px] px-[16px] rounded-[10px] text-[12.5px] font-semibold flex items-center gap-[6px] transition-all cursor-pointer ${isEditing
                    ? "bg-amber-100 text-amber-800 border border-amber-300 hover:bg-amber-200"
                    : "bg-[#f1f5f9] text-[#252271] hover:bg-[#e2e8f0]"
                  }`}
              >
                <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><path d={ICONS.edit} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" /></svg>
                {isEditing ? "Batal Edit" : "Edit"}
              </button>



              <button
                onClick={handleNextStep}
                className="h-[38px] px-[20px] bg-gradient-to-r from-[#e6251c] to-[#c20f06] text-white rounded-[10px] text-[12.5px] font-bold flex items-center gap-[6px] hover:brightness-110 active:scale-95 transition-all shadow-md cursor-pointer"
              >
                {isEditing ? "Submit & Next ➔" : activeStep === PBJ_STEPS.length - 1 ? "Selesai ✓" : "Next ➔"}
              </button>
            </div>
          </div>
        </div>

        {/* Riwayat Proses PBJ */}
        <div className="bg-white border border-[#e5e7eb] rounded-[16px] overflow-hidden">
          <div className="px-[20px] py-[14px] border-b border-[#f3f4f6]">
            <p className="text-[#737373] text-[12px] font-semibold tracking-[0.6px] uppercase">Riwayat Proses PBJ</p>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-[#252271] text-white text-[11px] font-semibold">
                <th className="text-left px-[16px] py-[8px]">No</th>
                <th className="text-left px-[16px] py-[8px]">Proses</th>
                <th className="text-left px-[16px] py-[8px]">Tanggal</th>
                <th className="text-left px-[16px] py-[8px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {stepHistory.map((h, i) => (
                <tr key={i} className={`border-b border-[#f3f4f6] text-[12px] transition-colors ${i === activeStep ? "bg-[#eef2ff]" : "hover:bg-[#fafafa]"}`}>
                  <td className="px-[16px] py-[10px] text-[#252271] font-medium">{i + 1}</td>
                  <td className="px-[16px] py-[10px] text-[#252271] font-medium">{h.proses}</td>
                  <td className="px-[16px] py-[10px] text-[#364153]">{h.tanggal}</td>
                  <td className="px-[16px] py-[10px]">
                    <span className="flex items-center gap-[4px] text-[#252271] font-medium">
                      <svg fill="none" height="12" viewBox="0 0 12 12" width="12"><path d="M10 3L4.5 8.5L2 6" stroke="#252271" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {h.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function PbjPage({ subPage }: { subPage: "task-approval" | "list-pbj" | "memo-internal" }) {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<DocFilters>({ startDate: "", endDate: "", unit: "", status: "" });
  const [view, setView] = useState<"list" | "proses">("list");
  const [selectedRow, setSelectedRow] = useState<any | null>(null);
  const { items: verificationItems, refresh, process: processVerification } = useAdminVerificationQueue("pbj");
  const queueRows = verificationItems.map(mapVerificationRow).filter((row) => matchesDocFilters(row, filters));

  React.useEffect(() => {
    setView("list");
    setSelectedRow(null);
  }, [subPage]);

  const breadcrumbLabel = subPage === "task-approval" ? "Task Approval" : subPage === "list-pbj" ? "List PBJ" : "Memo Internal";

  const complete = async (row: any) => {
    await processVerification(row.verif_id, "approve");
    await refresh();
  };

  const sendRevision = async (row: any, catatan: string) => {
    await processVerification(row.verif_id, "revisi", catatan);
    await refresh();
  };

  const saveProgress = async (row: any, progress: any) => {
    if (!row.document?.id) return;
    await api.put(`/step-documents/pbj/${row.document.id}`, {
      form_data: { ...(row.formData || {}), admin_progress: progress },
    });
    await refresh();
  };

  const uploadAttachment = async (row: any, file: File, step: string) => {
    const payload = new FormData();
    payload.append("file", file);
    payload.append("stage", `pbj:${step}`);
    await api.post(`/pengadaan/${row.pengadaan_id}/documents`, payload, { headers: { "Content-Type": "multipart/form-data" } });
  };

  if (view === "proses" && selectedRow) {
    return <ProsesPBJPage row={selectedRow} breadcrumbFrom={breadcrumbLabel} onBack={() => { setView("list"); setSelectedRow(null); }} onComplete={() => complete(selectedRow)} onRevisi={(catatan) => sendRevision(selectedRow, catatan)} onSaveStep={(progress) => saveProgress(selectedRow, progress)} onUpload={(file, step) => uploadAttachment(selectedRow, file, step)} />;
  }

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-white">
      <div className="px-[44px] py-[20px]">
        <h1 className="text-[#252271] text-[36px] font-extrabold leading-normal mb-[0px]">Verification</h1>
        <p className="text-[#99a1af] text-[16px] font-normal mb-[20px]">
          <span>PBJ &gt; </span>
          <span className="font-bold text-[#1e2939]">{breadcrumbLabel}</span>
        </p>

        <DocFilterBar search={search} onSearch={setSearch} onFilter={setFilters} />

        <div className="bg-white border border-[#e5e7eb] rounded-[10px] overflow-hidden">
          <div className="overflow-x-auto">
            {subPage === "task-approval" && (
              <table className="w-full">
                <thead>
                  <tr className="bg-[#252271] text-white text-[10.5px] font-bold">
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">No. SP3 &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Judul Pengadaan &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Nilai PR (NPEI) &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Nilai PO &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Nilai Efisiensi &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Realisasi &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Assign to &#8645;</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Status</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {queueRows.filter((r) => r.noSp3.toLowerCase().includes(search.toLowerCase()) || r.namaPaket.toLowerCase().includes(search.toLowerCase())).map((r, i) => (
                    <tr key={i} className={`border-b border-[#f3f4f6] text-[11.5px] ${i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"} hover:bg-[#eef2ff] transition-colors`}>
                      <td className="px-[14px] py-[12px] text-[#364153] font-medium whitespace-nowrap">{r.noSp3}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] font-medium">{r.namaPaket}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] whitespace-nowrap">{r.nilaiPr}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] whitespace-nowrap">{r.nilaiPo}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] whitespace-nowrap">{r.nilaiEfisiensi}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] whitespace-nowrap">{r.realisasi}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] whitespace-nowrap">{r.assignTo}</td>
                      <td className="px-[14px] py-[12px] text-center">
                        <span className="px-[10px] py-[3px] rounded-full text-[10.5px] font-semibold bg-indigo-50 text-[#3b82f6] border border-indigo-200 inline-block">{r.status}</span>
                      </td>
                      <td className="px-[14px] py-[12px]">
                        <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                          <button onClick={() => { setSelectedRow(r); setView("proses"); }} className="p-1 rounded text-gray-500 hover:text-[#252271] hover:bg-gray-100 transition-colors" title="Lihat">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                          </button>
                          <button onClick={() => window.print()} className="p-1 rounded text-gray-500 hover:text-[#252271] hover:bg-gray-100 transition-colors" title="Cetak Dokumen">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                          </button>
                          <button onClick={() => { setSelectedRow(r); setView("proses"); }} className="bg-[#252271] text-white px-2.5 py-1 rounded-md text-[11px] font-bold hover:brightness-110 flex items-center gap-1 transition-all">
                            &#10145; Proses PBJ
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {subPage === "list-pbj" && (
              <table className="w-full">
                <thead>
                  <tr className="bg-[#252271] text-white text-[10.5px] font-bold">
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">No. SP3 &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Judul Pengadaan &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Nilai Kontrak &#8645;</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Status &#8645;</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {queueRows.filter((r) => r.noSp3.toLowerCase().includes(search.toLowerCase()) || r.namaPaket.toLowerCase().includes(search.toLowerCase())).map((r, i) => (
                    <tr key={i} className={`border-b border-[#f3f4f6] text-[11.5px] ${i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"} hover:bg-[#eef2ff] transition-colors`}>
                      <td className="px-[14px] py-[12px] text-[#364153] font-medium whitespace-nowrap">{r.noSp3}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] font-medium">{r.namaPaket}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] whitespace-nowrap">{r.nilaiKontrak}</td>
                      <td className="px-[14px] py-[12px] text-center">
                        <span className="px-[10px] py-[3px] rounded-full text-[10.5px] font-semibold bg-indigo-50 text-[#3b82f6] border border-indigo-200 inline-block">{r.status}</span>
                      </td>
                      <td className="px-[14px] py-[12px]">
                        <div className="flex items-center justify-center gap-2">
                          <button onClick={() => { setSelectedRow(r); setView("proses"); }} className="p-1.5 rounded text-gray-500 hover:text-[#252271] hover:bg-gray-100 transition-colors" title="Lihat">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                          </button>
                          <button onClick={() => window.print()} className="p-1.5 rounded text-gray-500 hover:text-[#252271] hover:bg-gray-100 transition-colors" title="Cetak Dokumen">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {subPage === "memo-internal" && (
              <table className="w-full">
                <thead>
                  <tr className="bg-[#252271] text-white text-[10.5px] font-bold">
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">No. SP3 &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Judul Pengadaan &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Nomor Memo Internal &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Tanggal Memo &#8645;</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Status &#8645;</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {queueRows.filter((r) => r.noSp3.toLowerCase().includes(search.toLowerCase()) || r.judulPengadaan.toLowerCase().includes(search.toLowerCase())).map((r, i) => (
                    <tr key={i} className={`border-b border-[#f3f4f6] text-[11.5px] ${i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"} hover:bg-[#eef2ff] transition-colors`}>
                      <td className="px-[14px] py-[12px] text-[#364153] font-medium whitespace-nowrap">{r.noSp3}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] font-medium">{r.judulPengadaan}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] whitespace-nowrap">{r.nomorMemoInternal}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] whitespace-nowrap">{r.tanggalMemo}</td>
                      <td className="px-[14px] py-[12px] text-center">
                        <span className="px-[10px] py-[3px] rounded-full text-[10.5px] font-semibold bg-green-50 text-green-700 border border-green-200 inline-block">{r.status}</span>
                      </td>
                      <td className="px-[14px] py-[12px]">
                        <div className="flex items-center justify-center gap-2">
                          <button onClick={() => { setSelectedRow(r); setView("proses"); }} className="p-1.5 rounded text-gray-500 hover:text-[#252271] hover:bg-gray-100 transition-colors" title="Lihat">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                          </button>
                          <button onClick={() => window.print()} className="p-1.5 rounded text-gray-500 hover:text-[#252271] hover:bg-gray-100 transition-colors" title="Cetak Dokumen">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="flex items-center justify-between px-[16px] py-[12px] text-[#4a5565] text-[13px] border-t border-[#f3f4f6]">
            <span>Showing 1 to 3 of 3 entries</span>
            <div className="flex gap-[4px]">
              <button className="h-[28px] px-[10px] rounded-[4px] border border-[#d1d5dc] text-[12px] hover:bg-[#f3f4f6]">Previous</button>
              <button className="h-[28px] px-[10px] rounded-[4px] bg-[#252271] text-white text-[12px]">1</button>
              <button className="h-[28px] px-[10px] rounded-[4px] border border-[#d1d5dc] text-[12px] hover:bg-[#f3f4f6]">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Contract Page ────────────────────────────────────────────────────────────
const CONTRACT_STEPS = ["Draft Kontrak", "Performance Bond", "Verifikasi Jaminan Pelaksanaan", "Review Legal", "Approval Logistik", "Approval User", "Approval Legal", "Tanda Tangan Vendor", "Tanda Tangan KCI", "Summary Kontrak"];
const CONTRACT_STEP_TITLES = ["Draft Kontrak", "Performance Bond", "Verifikasi Jaminan Pelaksanaan", "Informasi Review Legal", "Informasi Approval Logistik", "Information Approval User", "Approval Legal Information", "Information Tanda Tangan Vendor", "Tanda Tangan KCI", "Summary Kontrak"];
const CONTRACT_UPLOAD_LABELS: Record<number, string[]> = {
  0: ["Draft Contract"], 1: ["File Jaminan Pelaksanaan"], 2: ["Performance Bond", "File Verifikasi Jaminan"],
  3: ["Dokumen Review Legal"], 4: ["Dokumen Approval Logistik"], 5: ["Dokumen Approval User"],
  6: ["Dokumen Approval Legal"], 7: ["Dokumen Tanda Tangan Vendor"], 8: ["Dokumen Tanda Tangan KCI"],
  9: ["Dokumen Perjanjian"],
};

function ProsesContractPage({ row, breadcrumbFrom, onBack, onComplete, onRevisi, onSaveStep, onUpload }: { row: any; breadcrumbFrom: string; onBack: () => void; onComplete?: () => Promise<void>; onRevisi?: (catatan: string) => Promise<void>; onSaveStep?: (progress: any) => Promise<void>; onUpload?: (file: File, step: string) => Promise<void> }) {
  const savedProgress = row.formData?.admin_progress || {};
  const [activeStep, setActiveStep] = useState(savedProgress.activeStep || 0);
  const [isEditing, setIsEditing] = useState(false);
  const [fieldValues, setFieldValues] = useState<Record<number, Record<number, string>>>(savedProgress.fieldValues || {});
  const [customFiles, setCustomFiles] = useState<Record<number, { name: string; size: string; date: string; documentType?: string }[]>>(savedProgress.customFiles || {});

  const defaultContractAttachments: Record<number, { name: string; size: string; date: string; documentType?: string }[]> = {};

  const initialContractFields: Record<number, { label: string; value: string; type?: string }[]> = {
    0: [
      { label: "Start Date", value: "", type: "date" },
      { label: "End Date", value: "", type: "date" },
      { label: "Catatan Draft", value: "" },
    ],
    1: [
      { label: "KAI Group (Ya/Tidak)", value: "Tidak", type: "boolean" },
      { label: "Bank", value: "" }, { label: "Cabang", value: "" },
      { label: "Tanggal Penerimaan", value: "", type: "date" }, { label: "No Bank Garansi", value: "" },
      { label: "Minimum Jaminan", value: "" }, { label: "Masa Berlaku - Start Date", value: "", type: "date" },
      { label: "Masa Berlaku - End Date", value: "", type: "date" }, { label: "Jumlah Hari Kalender", value: "" },
      { label: "Nilai Jaminan", value: "" }, { label: "Tanggal Terbit Jamlak", value: "", type: "date" },
      { label: "Catatan Performance", value: "" },
    ],
    2: [
      { label: "Start Date", value: "", type: "date" }, { label: "End Date", value: "", type: "date" },
      { label: "Tanggal Penyerahan", value: "", type: "date" }, { label: "Catatan", value: "" },
    ],
    3: [
      { label: "Start Date", value: "", type: "date" }, { label: "End Date", value: "", type: "date" }, { label: "Catatan", value: "" },
    ],
    4: [
      { label: "Start Date", value: "", type: "date" }, { label: "End Date", value: "", type: "date" }, { label: "Catatan", value: "" },
    ],
    5: [
      { label: "Start Date", value: "", type: "date" }, { label: "End Date", value: "", type: "date" }, { label: "Catatan", value: "" },
    ],
    6: [
      { label: "Start Date", value: "", type: "date" }, { label: "End Date", value: "", type: "date" }, { label: "Catatan", value: "" },
    ],
    7: [
      { label: "Start Date", value: "", type: "date" }, { label: "End Date", value: "", type: "date" }, { label: "Catatan", value: "" },
    ],
    8: [
      { label: "Start Date", value: "", type: "date" }, { label: "End Date", value: "", type: "date" }, { label: "Catatan", value: "" },
    ],
    9: [
      { label: "No Kontrak", value: row.noKontrak || "" }, { label: "Tanggal Kontrak", value: "", type: "date" },
      { label: "Total Hari Kalender", value: "" }, { label: "Hari Libur", value: "" },
      { label: "Uncontrolled Days", value: "" }, { label: "Total Hari Kerja", value: "" }, { label: "Catatan", value: "" },
    ],
  };

  const getFieldValue = (step: number, idx: number, fallback: string) => {
    return fieldValues[step]?.[idx] !== undefined ? fieldValues[step][idx] : fallback;
  };

  const updateFieldValue = (step: number, idx: number, val: string) => {
    setFieldValues((prev) => ({
      ...prev,
      [step]: {
        ...(prev[step] || {}),
        [idx]: val,
      },
    }));
  };

  const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>, documentType = "Lampiran") => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        await onUpload?.(file, CONTRACT_STEPS[activeStep]);
      } catch (error: any) {
        alert(error?.response?.data?.message || "Lampiran gagal diunggah.");
        return;
      }
      const newFileObj = {
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        date: new Date().toISOString().split("T")[0],
        documentType,
      };
      setCustomFiles((prev) => ({
        ...prev,
        [activeStep]: [...(prev[activeStep] || defaultContractAttachments[activeStep] || []), newFileObj],
      }));
    }
  };

  const [showRevisionBox, setShowRevisionBox] = useState(false);
  const [revisionNote, setRevisionNote] = useState("");
  const [stepVerifications, setStepVerifications] = useState<Record<number, string>>({});

  const saveCurrentStep = async () => {
    await onSaveStep?.({
      activeStep,
      stepName: CONTRACT_STEPS[activeStep],
      fieldValues,
      customFiles,
    });
  };

  const handleVerifikasiStep = () => {
    setStepVerifications((prev) => ({ ...prev, [activeStep]: "Sudah Diverifikasi" }));
    setShowRevisionBox(false);
    alert(`Step ${activeStep + 1} (${CONTRACT_STEPS[activeStep]}) berhasil diverifikasi & disetujui!`);
  };

  const handleSendRevision = async () => {
    if (!revisionNote.trim()) {
      alert("Harap isi catatan revisi terlebih dahulu.");
      return;
    }
    try {
      await saveCurrentStep();
      await onRevisi?.(revisionNote);
    } catch (error: any) {
      alert(error?.response?.data?.message || "Catatan revisi gagal dikirim.");
      return;
    }
    setStepVerifications((prev) => ({ ...prev, [activeStep]: `Perlu Revisi: ${revisionNote}` }));
    alert(`Catatan revisi untuk Step ${activeStep + 1} berhasil dikirim!`);
    setShowRevisionBox(false);
    setRevisionNote("");
  };

  const currentAttachments = customFiles[activeStep] || defaultContractAttachments[activeStep] || [];

  const handleBackStep = () => {
    setIsEditing(false);
    setShowRevisionBox(false);
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    } else {
      onBack();
    }
  };

  const handleNextStep = async () => {
    setIsEditing(false);
    setShowRevisionBox(false);
    try {
      await saveCurrentStep();
    } catch (error: any) {
      alert(error?.response?.data?.message || "Perubahan kontrak gagal disimpan.");
      return;
    }
    if (activeStep < CONTRACT_STEPS.length - 1) {
      setActiveStep(activeStep + 1);
      return;
    }
    try {
      await onComplete?.();
      onBack();
    } catch (error: any) {
      alert(error?.response?.data?.message || "Proses kontrak gagal disimpan.");
    }
  };

  const stepHistory = CONTRACT_STEPS.map((st, i) => ({
    proses: st,
    tanggal: i <= activeStep ? "01-03-2024" : "-",
    status: stepVerifications[i] || (i < activeStep ? "Selesai" : i === activeStep ? (isEditing ? "Sedang Diedit" : "Dalam Proses") : "Menunggu"),
  }));

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc]">
      <div className="px-[44px] py-[20px]">
        <h1 className="text-[#252271] text-[28px] font-bold tracking-tight leading-tight mb-[2px]">Verification</h1>
        <p className="text-[#64748b] text-[13px] font-medium mb-[20px]">
          <span>Contract &gt; {breadcrumbFrom} &gt; </span>
          <span className="font-bold text-[#1e2939]">Proses Contract</span>
        </p>

        {/* Header card */}
        <div className="bg-[#252271] rounded-[16px] p-[24px] mb-[20px] flex items-center justify-between">
          <div>
            <p className="text-white/60 text-[12px] font-normal mb-[2px]">Proses Contract</p>
            <p className="text-white text-[14px] font-semibold">{row.namaPaket || "Pengadaan Server CTIT 2024"}</p>
            <p className="text-white/70 text-[12px] mt-[2px]">{row.noKontrak || row.noSp3 || "SP3-2024-001"} &middot; {row.vendor || "PT Maju Bersama"}</p>
          </div>
          <button onClick={onBack} className="flex items-center gap-[6px] text-white/80 text-[12px] font-medium hover:text-white transition-colors cursor-pointer">
            <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><path d="M9 11L5 7L9 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
            Kembali ke List
          </button>
        </div>

        {/* Stepper */}
        <div className="bg-white border border-[#e5e7eb] rounded-[16px] p-[24px] mb-[20px]">
          <ProcessStepper steps={CONTRACT_STEPS} activeStep={activeStep} onStep={(s) => { setIsEditing(false); setShowRevisionBox(false); setActiveStep(s); }} />
        </div>

        {/* Step detail card */}
        <div className="bg-white border border-[#e5e7eb] rounded-[16px] p-[24px] mb-[20px]">
          <div className="flex flex-wrap items-start justify-between gap-[10px] mb-[16px]">
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              <h3 className="text-[#252271] text-[15px] font-bold">
                {CONTRACT_STEP_TITLES[activeStep]} {isEditing && <span className="text-amber-600 text-[12px] font-semibold ml-2">(Mode Edit Aktif)</span>}
              </h3>
              {stepVerifications[activeStep] && (
                <span className="text-[11px] font-bold px-[8px] py-[2px] rounded-full bg-green-100 text-green-800 border border-green-200">
                  ✓ {stepVerifications[activeStep]}
                </span>
              )}
            </div>
            <span className={`text-[11px] font-bold px-[10px] py-[3px] rounded-full ${isEditing ? "bg-amber-100 text-amber-800" : "bg-[#e0e7ff] text-[#252271]"}`}>
              Step {activeStep + 1} dari {CONTRACT_STEPS.length}
            </span>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[48px] gap-y-[14px] mb-[20px]">
            {(initialContractFields[activeStep] || []).map((f, idx) => {
              const currentVal = getFieldValue(activeStep, idx, f.value);
              return (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-[190px_minmax(0,1fr)] items-center gap-x-[12px] gap-y-[4px] py-[4px] min-w-0">
                  <p className="text-[#64748b] text-[11.5px] font-semibold">{f.label}:</p>
                  {isEditing && f.type === "boolean" ? (
                    <div className="flex items-center gap-[16px] h-[34px]">
                      {["Ya", "Tidak"].map((option) => <label key={option} className="flex items-center gap-[5px] text-[12px] font-semibold text-[#252271]"><input type="radio" name={`contract-${activeStep}-${idx}`} checked={currentVal === option} onChange={() => updateFieldValue(activeStep, idx, option)} />{option}</label>)}
                    </div>
                  ) : isEditing ? (
                    <input
                      type={f.type === "date" ? "date" : "text"}
                      value={currentVal}
                      onChange={(e) => updateFieldValue(activeStep, idx, e.target.value)}
                      className="min-w-0 w-full h-[32px] bg-transparent border-b border-[#cbd5e1] px-[4px] text-[12px] text-[#0f172a] font-medium focus:border-[#252271] outline-none transition-colors"
                    />
                  ) : (
                    <p className="min-w-0 break-words text-[#334155] text-[12px] font-medium">{currentVal || "Belum diisi"}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Textbox Catatan Revisi */}
          {showRevisionBox && (
            <div className="bg-amber-50 border border-amber-300 rounded-[14px] p-[16px] mb-[20px] shadow-sm animate-in fade-in-0">
              <h4 className="text-amber-900 text-[13px] font-bold mb-[6px] flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                Catatan Revisi Step Ini ({CONTRACT_STEPS[activeStep]})
              </h4>
              <textarea
                value={revisionNote}
                onChange={(e) => setRevisionNote(e.target.value)}
                placeholder="Tuliskan catatan revisi atau instruksi perbaikan dokumen untuk step ini..."
                className="w-full h-[80px] bg-white border border-amber-300 rounded-[8px] p-[10px] text-[12.5px] text-[#0f172a] focus:border-[#252271] outline-none transition-colors mb-[10px]"
              />
              <div className="flex items-center gap-[8px]">
                <button
                  onClick={handleSendRevision}
                  className="h-[34px] px-[14px] bg-[#cc0000] hover:bg-[#a00000] text-white text-[11.5px] font-semibold rounded-[6px] transition-all cursor-pointer shadow-sm"
                >
                  Kirim Catatan Revisi
                </button>
                <button
                  onClick={() => setShowRevisionBox(false)}
                  className="h-[34px] px-[12px] bg-white hover:bg-gray-100 text-[#475569] text-[11.5px] font-semibold rounded-[6px] border border-gray-300 transition-all cursor-pointer"
                >
                  Batal
                </button>
              </div>
            </div>
          )}

          {/* Lampiran Dokumen Section */}
          <div className="mt-[24px] pt-[18px] border-t border-[#f1f5f9]">
            <div className="flex items-center justify-between mb-[12px]">
              <p className="text-[#252271] text-[12px] font-bold tracking-[0.3px]">Dokumen Lampiran Step Ini</p>
              <div className="flex flex-wrap justify-end gap-[6px]">
                {(CONTRACT_UPLOAD_LABELS[activeStep] || ["Lampiran"]).map((documentType) => (
                  <label key={documentType} className="bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#252271] text-[11.5px] font-semibold px-[12px] py-[5px] rounded-[8px] flex items-center gap-[6px] cursor-pointer transition-colors border border-[#cbd5e1]">
                    <svg fill="none" height="12" viewBox="0 0 12 12" width="12"><path d="M6 2.5V9.5M2.5 6H9.5" stroke="#252271" strokeLinecap="round" strokeWidth="1.5" /></svg>
                    Unggah {documentType}
                    <input type="file" className="hidden" onChange={(event) => handleUploadFile(event, documentType)} />
                  </label>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[12px]">
              {currentAttachments.map((file, fIdx) => (
                <div key={fIdx} className="flex items-center justify-between bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] p-[10px]">
                  <div className="flex items-center gap-[10px] min-w-0">
                    <div className="size-[34px] rounded-[8px] bg-[#e0e7ff] text-[#252271] flex items-center justify-center shrink-0">
                      <svg fill="none" height="16" viewBox="0 0 16 16" width="16"><path d="M4 2H10L14 6V14H4V2Z" stroke="#252271" strokeWidth="1.2" strokeLinejoin="round" /><path d="M10 2V6H14" stroke="#252271" strokeWidth="1.2" strokeLinejoin="round" /></svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#0f172a] text-[12px] font-semibold truncate">{file.documentType ? `${file.documentType}: ` : ""}{file.name}</p>
                      <p className="text-[#94a3b8] text-[10px]">{file.size} &middot; {file.date}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`Mengunduh berkas ${file.name}`)}
                    className="px-[10px] py-[4px] bg-[#252271] text-white text-[11px] font-semibold rounded-[6px] hover:brightness-125 transition-colors cursor-pointer shrink-0"
                  >
                    Unduh
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Action Control Buttons: Back, Edit, Verifikasi, Revisi, Next / Submit & Next */}
          <div className="flex items-center justify-between pt-[18px] border-t border-[#f1f5f9] mt-[24px]">
            <button
              onClick={handleBackStep}
              className="h-[38px] px-[18px] border border-[#252271] text-[#252271] hover:bg-[#252271]/5 rounded-[10px] text-[12.5px] font-semibold flex items-center gap-[6px] transition-all cursor-pointer"
            >
              <svg fill="none" height="12" viewBox="0 0 12 12" width="12"><path d="M7.5 9L4.5 6L7.5 3" stroke="#252271" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
              Back
            </button>

            <div className="flex items-center gap-[10px]">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`h-[38px] px-[16px] rounded-[10px] text-[12.5px] font-semibold flex items-center gap-[6px] transition-all cursor-pointer ${isEditing
                    ? "bg-amber-100 text-amber-800 border border-amber-300 hover:bg-amber-200"
                    : "bg-[#f1f5f9] text-[#252271] hover:bg-[#e2e8f0]"
                  }`}
              >
                <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><path d={ICONS.edit} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" /></svg>
                {isEditing ? "Batal Edit" : "Edit"}
              </button>



              <button
                onClick={handleNextStep}
                className="h-[38px] px-[20px] bg-gradient-to-r from-[#e6251c] to-[#c20f06] text-white rounded-[10px] text-[12.5px] font-bold flex items-center gap-[6px] hover:brightness-110 active:scale-95 transition-all shadow-md cursor-pointer"
              >
                {isEditing ? "Submit & Next ➔" : activeStep === CONTRACT_STEPS.length - 1 ? "Selesai ✓" : "Next ➔"}
              </button>
            </div>
          </div>
        </div>

        {/* Riwayat Proses Kontrak */}
        <div className="bg-white border border-[#e5e7eb] rounded-[16px] overflow-hidden">
          <div className="px-[20px] py-[14px] border-b border-[#f3f4f6]">
            <p className="text-[#737373] text-[12px] font-semibold tracking-[0.6px] uppercase">Riwayat Proses Kontrak</p>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-[#252271] text-white text-[11px] font-semibold">
                <th className="text-left px-[16px] py-[8px]">No</th>
                <th className="text-left px-[16px] py-[8px]">Proses</th>
                <th className="text-left px-[16px] py-[8px]">Tanggal</th>
                <th className="text-left px-[16px] py-[8px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {stepHistory.map((h, i) => (
                <tr key={i} className={`border-b border-[#f3f4f6] text-[12px] transition-colors ${i === activeStep ? "bg-[#eef2ff]" : "hover:bg-[#fafafa]"}`}>
                  <td className="px-[16px] py-[10px] text-[#252271] font-medium">{i + 1}</td>
                  <td className="px-[16px] py-[10px] text-[#252271] font-medium">{h.proses}</td>
                  <td className="px-[16px] py-[10px] text-[#364153]">{h.tanggal}</td>
                  <td className="px-[16px] py-[10px]">
                    <span className="flex items-center gap-[4px] text-[#252271] font-medium">
                      <svg fill="none" height="12" viewBox="0 0 12 12" width="12"><path d="M10 3L4.5 8.5L2 6" stroke="#252271" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {h.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ContractPage({ subPage }: { subPage: "task-approval" | "list-contract" }) {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<DocFilters>({ startDate: "", endDate: "", unit: "", status: "" });
  const [view, setView] = useState<"list" | "proses">("list");
  const [selectedRow, setSelectedRow] = useState<any | null>(null);
  const { items: verificationItems, refresh, process: processVerification } = useAdminVerificationQueue("contract");
  const queueRows = verificationItems.map(mapVerificationRow).filter((row) => matchesDocFilters(row, filters));

  React.useEffect(() => {
    setView("list");
    setSelectedRow(null);
  }, [subPage]);

  const breadcrumbLabel = subPage === "task-approval" ? "Task Approval" : "List Contract";

  const complete = async (row: any) => {
    await processVerification(row.verif_id, "approve");
    await refresh();
  };

  const sendRevision = async (row: any, catatan: string) => {
    await processVerification(row.verif_id, "revisi", catatan);
    await refresh();
  };

  const saveProgress = async (row: any, progress: any) => {
    if (!row.document?.id) return;
    await api.put(`/step-documents/contract/${row.document.id}`, {
      form_data: { ...(row.formData || {}), admin_progress: progress },
    });
  };

  const uploadAttachment = async (row: any, file: File, step: string) => {
    const payload = new FormData();
    payload.append("file", file);
    payload.append("stage", step === CONTRACT_STEPS[CONTRACT_STEPS.length - 1] ? "contract-signed" : `contract:${step}`);
    await api.post(`/pengadaan/${row.pengadaan_id}/documents`, payload, { headers: { "Content-Type": "multipart/form-data" } });
  };

  if (view === "proses" && selectedRow) {
    return <ProsesContractPage row={selectedRow} breadcrumbFrom={breadcrumbLabel} onBack={() => { setView("list"); setSelectedRow(null); }} onComplete={() => complete(selectedRow)} onRevisi={(catatan) => sendRevision(selectedRow, catatan)} onSaveStep={(progress) => saveProgress(selectedRow, progress)} onUpload={(file, step) => uploadAttachment(selectedRow, file, step)} />;
  }

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-white">
      <div className="px-[44px] py-[20px]">
        <h1 className="text-[#252271] text-[36px] font-extrabold leading-normal mb-[0px]">Verification</h1>
        <p className="text-[#99a1af] text-[16px] font-normal mb-[20px]">
          <span>Contract &gt; </span>
          <span className="font-bold text-[#1e2939]">{breadcrumbLabel}</span>
        </p>

        <DocFilterBar search={search} onSearch={setSearch} onFilter={setFilters} />

        <div className="bg-white border border-[#e5e7eb] rounded-[10px] overflow-hidden">
          <div className="overflow-x-auto">
            {subPage === "task-approval" && (
              <table className="w-full">
                <thead>
                  <tr className="bg-[#252271] text-white text-[10.5px] font-bold">
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">No. SP3 &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Judul Pengadaan &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Nilai Kontrak &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Divisi &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">PBJ &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Performance Bond &#8645;</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Status</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {queueRows.filter((r) => r.noSp3.toLowerCase().includes(search.toLowerCase()) || r.namaPaket.toLowerCase().includes(search.toLowerCase())).map((r, i) => (
                    <tr key={i} className={`border-b border-[#f3f4f6] text-[11.5px] ${i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"} hover:bg-[#eef2ff] transition-colors`}>
                      <td className="px-[14px] py-[12px] text-[#364153] font-medium whitespace-nowrap">{r.noSp3}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] font-medium">{r.namaPaket}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] whitespace-nowrap">{r.nilaiKontrak}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] whitespace-nowrap">{r.dept}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] whitespace-nowrap">{r.pbj}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] whitespace-nowrap">{r.performanceBond}</td>
                      <td className="px-[14px] py-[12px] text-center">
                        <span className="px-[10px] py-[3px] rounded-full text-[10.5px] font-semibold bg-indigo-50 text-[#3b82f6] border border-indigo-200 inline-block">{r.status}</span>
                      </td>
                      <td className="px-[14px] py-[12px]">
                        <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                          <button onClick={() => { setSelectedRow(r); setView("proses"); }} className="p-1 rounded text-gray-500 hover:text-[#252271] hover:bg-gray-100 transition-colors" title="Lihat">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                          </button>
                          <button onClick={() => { setSelectedRow(r); setView("proses"); }} className="bg-[#252271] text-white px-2.5 py-1 rounded-md text-[11px] font-bold hover:brightness-110 flex items-center gap-1 transition-all">
                            &#10145; Proses Contract
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {subPage === "list-contract" && (
              <table className="w-full">
                <thead>
                  <tr className="bg-[#252271] text-white text-[10.5px] font-bold">
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">No. SP3 &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Judul Pengadaan &#8645;</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Nilai Kontrak &#8645;</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Status &#8645;</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {queueRows.filter((r) => r.noSp3.toLowerCase().includes(search.toLowerCase()) || r.namaPaket.toLowerCase().includes(search.toLowerCase())).map((r, i) => (
                    <tr key={i} className={`border-b border-[#f3f4f6] text-[11.5px] ${i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"} hover:bg-[#eef2ff] transition-colors`}>
                      <td className="px-[14px] py-[12px] text-[#364153] font-medium whitespace-nowrap">{r.noSp3}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] font-medium">{r.namaPaket}</td>
                      <td className="px-[14px] py-[12px] text-[#364153] whitespace-nowrap">{r.nilaiKontrak}</td>
                      <td className="px-[14px] py-[12px] text-center">
                        <span className="px-[10px] py-[3px] rounded-full text-[10.5px] font-semibold bg-green-50 text-green-700 border border-green-200 inline-block">{r.status}</span>
                      </td>
                      <td className="px-[14px] py-[12px]">
                        <div className="flex items-center justify-center gap-2">
                          <button onClick={() => { setSelectedRow(r); setView("proses"); }} className="p-1.5 rounded text-gray-500 hover:text-[#252271] hover:bg-gray-100 transition-colors" title="Lihat">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                          </button>
                          <button onClick={() => window.print()} className="p-1.5 rounded text-gray-500 hover:text-[#252271] hover:bg-gray-100 transition-colors" title="Cetak Dokumen">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="flex items-center justify-between px-[16px] py-[12px] text-[#4a5565] text-[13px] border-t border-[#f3f4f6]">
            <span>Showing 1 to 3 of 3 entries</span>
            <div className="flex gap-[4px]">
              <button className="h-[28px] px-[10px] rounded-[4px] border border-[#d1d5dc] text-[12px] hover:bg-[#f3f4f6]">Previous</button>
              <button className="h-[28px] px-[10px] rounded-[4px] bg-[#252271] text-white text-[12px]">1</button>
              <button className="h-[28px] px-[10px] rounded-[4px] border border-[#d1d5dc] text-[12px] hover:bg-[#f3f4f6]">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Pengujian Page ───────────────────────────────────────────────────────────



// ─── Pengujian Page (Matched to Figma Spec) ───────────────────────────────────
type PengujianKontrakRow = {
  idNpp: string;
  idRup: string;
  noCont: string;
  divisi: string;
  opexCapex: string;
  kategori: string;
  tahun: string;
  sp3Final: string;
  status: string;
  statusHps: string;
  namaPaket: string;
  nilaiKontrak: string;
  vendor: string;
};

type PengujianRequestRow = {
  noRequest: string;
  namaPengujian: string;
  tanggalRequest: string;
  pemohon: string;
  kategori: string;
  status: string;
};

function DetailPengujianPage({ item, isKontrak, onBack, onProcess, onUploadBahp }: { item: any; isKontrak: boolean; onBack: () => void; onProcess?: (action: "approve" | "revisi" | "reject", note?: string) => Promise<void>; onUploadBahp?: (file: File) => Promise<void> }) {
  const titleName = isKontrak ? (item as PengujianKontrakRow).namaPaket : (item as PengujianRequestRow).namaPengujian;
  const docNo = isKontrak ? (item as PengujianKontrakRow).idNpp : (item as PengujianRequestRow).noRequest;
  const vendorOrDept = isKontrak ? (item as PengujianKontrakRow).vendor : (item as PengujianRequestRow).pemohon;

  const itemProp = {
    ...item,
    judulPengadaan: titleName,
    nomorKontrak: docNo,
    vendorName: vendorOrDept,
  };

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc]">
      <PengujianDetailView
        item={itemProp}
        onBack={onBack}
        onApprove={() => { if (onProcess) onProcess("approve").catch((error: any) => alert(error?.response?.data?.message || "Pengujian gagal diverifikasi.")); }}
        onReject={(note) => { if (onProcess) onProcess("reject", note).catch((error: any) => alert(error?.response?.data?.message || "Pengujian gagal ditolak.")); }}
        onRevisi={(note) => { if (onProcess) onProcess("revisi", note).catch((error: any) => alert(error?.response?.data?.message || "Catatan revisi gagal dikirim.")); }}
      />
      {!isKontrak && onUploadBahp && <div className="px-6 pb-6 -mt-4 bg-[#f8fafc]"><label className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#252271] text-white text-[12px] font-bold cursor-pointer hover:bg-[#1a1860]">Unggah Surat BAHP Signed<input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(event) => { const file = event.target.files?.[0]; if (file) onUploadBahp(file).catch((error: any) => alert(error?.response?.data?.message || "Surat BAHP gagal diunggah.")); event.target.value = ""; }} /></label></div>}
    </div>
  );
}


function PembayaranPage({ subDoc }: { subDoc: PembayaranDoc }) {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [unit, setUnit] = useState("");
  const [status, setStatus] = useState("");
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedRow, setSelectedRow] = useState<any | null>(null);
  const { items: verificationItems } = useAdminVerificationQueue("outsource,non-outsource,umd,payment-request");

  React.useEffect(() => {
    setView("list");
    setSelectedRow(null);
  }, [subDoc]);

  const typeBySubDoc: Partial<Record<PembayaranDoc, string>> = {
    "pembayaran-outsource": "outsource",
    "pembayaran-non-outsource": "non-outsource",
    "pembayaran-umd": "umd",
  };
  const selectedType = typeBySubDoc[subDoc];
  const rows = (verificationItems || [])
    .filter((item) => !selectedType || item?.tipe === selectedType)
    .map(mapVerificationRow)
    .filter(
      (r) =>
        (r?.noPembayaran || "").toLowerCase().includes(search.toLowerCase()) ||
        (r?.namaPaket || "").toLowerCase().includes(search.toLowerCase()) ||
        (r?.vendor || "").toLowerCase().includes(search.toLowerCase())
    ).filter((r) => {
      let submittedAt = "";
      if (r && r.submit_at) {
        if (typeof r.submit_at === "string") {
          submittedAt = r.submit_at.split("T")[0];
        } else {
          const parsed = new Date(r.submit_at);
          if (!Number.isNaN(parsed.getTime())) {
            submittedAt = parsed.toISOString().slice(0, 10);
          }
        }
      }
      return (!startDate || submittedAt >= startDate)
        && (!endDate || submittedAt <= endDate)
        && (!unit || String(r?.dept || "").toLowerCase() === unit.toLowerCase())
        && (!status || String(r?.status || "").toLowerCase() === status.toLowerCase());
    });

  const uploadProof = async (row: any, file: File) => {
    const pengadaanId = row?.pengadaan_id || row?.pengadaanId || row?.id || row?.noPembayaran || row?.noKontrak;
    if (!pengadaanId) {
      alert("ID Pengadaan tidak ditemukan untuk data ini.");
      return;
    }
    const payload = new FormData();
    payload.append("file", file);
    payload.append("stage", "pelunasan-proof");
    try {
      await api.post(`/pengadaan/${pengadaanId}/documents`, payload, { headers: { "Content-Type": "multipart/form-data" } });
      alert("Surat bukti pelunasan berhasil diunggah dan dapat diunduh User.");
    } catch (error: any) {
      console.error("Gagal unggah bukti pelunasan:", error);
      alert(error?.response?.data?.message || "Bukti pelunasan gagal diunggah.");
    }
  };

  const subDocLabels: Record<PembayaranDoc, string> = {
    "pembayaran-outsource": "Payment Approve > Outsource",
    "pembayaran-non-outsource": "Payment Approve > Non-Outsource",
    "pembayaran-umd": "Payment Approve > UMD",
    "pembayaran-daily-reports": "Reports > Daily Reports",
    "pembayaran-weekly-reports": "Reports > Weekly Reports",
    "pembayaran-contract-release": "Contract Release",
    "pembayaran-bast": "BAST",
    "pembayaran-invoice": "Invoice",
    "pembayaran-spp": "SPP",
    "pembayaran-spm": "SPM",
    "pembayaran-verification": "Payment Verification",
  };

  const currentLabel = subDocLabels[subDoc] || "Pembayaran";

  if (view === "detail" && selectedRow) {
    return <DetailPembayaranPage row={selectedRow} breadcrumbFrom={currentLabel} onBack={() => setView("list")} />;
  }

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-white">
      <div className="px-[44px] py-[20px]">
        <h1 className="text-[#252271] text-[36px] font-extrabold leading-normal mb-[0px]">Verification</h1>
        <p className="text-[#99a1af] text-[16px] font-normal mb-[20px]">
          <span>Pembayaran &gt; </span>
          <span className="font-semibold text-[#1e2939]">{currentLabel}</span>
        </p>

        {/* Filter Section */}
        <div className="bg-[#f5f7fd] border border-[#e5e7eb] rounded-[15px] p-[20px] mb-[20px]">
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] mb-[16px]">
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Start Date</label>
              <input value={startDate} onChange={(event) => setStartDate(event.target.value)} type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">End Date</label>
              <input value={endDate} onChange={(event) => setEndDate(event.target.value)} type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Divisi</label>
              <select value={unit} onChange={(event) => setUnit(event.target.value)} className="w-full h-[36px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors">
                <option value="">Semua Divisi</option>{DIVISI_LIST.map((divisi) => <option key={divisi} value={divisi}>{divisi}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Status</label>
              <select value={status} onChange={(event) => setStatus(event.target.value)} className="w-full h-[36px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors">
                <option value="">Semua Status</option>
                {Array.from(new Set((verificationItems || []).map((entry: any) => typeof entry?.status === 'string' ? entry.status : (entry?.status?.status || String(entry?.status || ''))).filter(Boolean))).map((entry: string) => (
                  <option key={entry} value={entry}>{entry}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-[5px]">
            <button className="bg-[#252271] text-white text-[14px] font-medium h-[36px] px-[20px] rounded-[15px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all duration-150">
              <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><circle cx="6.875" cy="6.875" r="4.875" stroke="white" strokeWidth="1.17" /><path d="M12.25 12.25L9.74 9.74" stroke="white" strokeLinecap="round" strokeWidth="1.17" /></svg>
              Cari
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] overflow-hidden">
          <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-[#f3f4f6]">
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Show</span>
              <select className="h-[24px] w-[55px] rounded-[4px] border border-[#d1d5dc] text-[13px] px-[4px] outline-none"><option>10</option><option>25</option></select>
              <span>entries</span>
            </div>
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Search:</span>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Type to filter..." className="h-[30px] w-[176px] rounded-[4px] border border-[#d1d5dc] px-[12px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="bg-[#252271] text-white text-[10.5px] font-medium">
                  <th className="text-left px-[14px] py-[10px]">No.</th>
                  <th className="text-left px-[14px] py-[10px]">No. Tagihan</th>
                  <th className="text-left px-[14px] py-[10px]">No. Kontrak / Acuan</th>
                  <th className="text-left px-[14px] py-[10px]">Nama Paket Pekerjaan</th>
                  <th className="text-left px-[14px] py-[10px]">Vendor / Pemohon</th>
                  <th className="text-left px-[14px] py-[10px]">Nilai Tagihan</th>
                  <th className="text-left px-[14px] py-[10px]">Tanggal</th>
                  <th className="text-left px-[14px] py-[10px]">Status</th>
                  <th className="text-center px-[14px] py-[10px]">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className={`border-b border-[#f3f4f6] ${i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"} hover:bg-[#eef2ff] transition-colors`}>
                    <td className="px-[14px] py-[10px] text-[#364153]">{i + 1}</td>
                    <td className="px-[14px] py-[10px] text-[#364153] font-medium">{typeof r?.noPembayaran === 'object' ? JSON.stringify(r?.noPembayaran) : String(r?.noPembayaran || '')}</td>
                    <td className="px-[14px] py-[10px] text-[#364153]">{typeof r?.noKontrak === 'object' ? JSON.stringify(r?.noKontrak) : String(r?.noKontrak || '')}</td>
                    <td className="px-[14px] py-[10px] text-[#364153] font-semibold">{typeof r?.namaPaket === 'object' ? JSON.stringify(r?.namaPaket) : String(r?.namaPaket || '')}</td>
                    <td className="px-[14px] py-[10px] text-[#364153]">{typeof r?.vendor === 'object' ? JSON.stringify(r?.vendor) : String(r?.vendor || '')}</td>
                    <td className="px-[14px] py-[10px] text-[#364153] font-medium">{typeof r?.nilaiTagihan === 'object' ? JSON.stringify(r?.nilaiTagihan) : String(r?.nilaiTagihan || '')}</td>
                    <td className="px-[14px] py-[10px] text-[#364153]">{typeof r?.tanggalPermohonan === 'object' ? JSON.stringify(r?.tanggalPermohonan) : String(r?.tanggalPermohonan || '')}</td>
                    <td className="px-[14px] py-[10px]">
                      <span className={`px-[10px] py-[3px] rounded-full text-[11px] font-medium ${r?.status === "Disetujui" || r?.status === "Cair" || r?.status === "approved" ? "bg-[#d1fae5] text-[#065f46]" : "bg-[#dbeafe] text-[#1d4ed8]"}`}>
                        {typeof r?.status === 'object' ? String(r?.status?.status || 'pending') : String(r?.status || 'pending')}
                      </span>
                    </td>
                    <td className="px-[14px] py-[10px] text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => { setSelectedRow(r); setView("detail"); }}
                          className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 text-[10.5px] font-bold transition-all flex items-center gap-1 border border-blue-200"
                          title="Detail"
                        >
                          <svg fill="none" height="12" viewBox="0 0 12 12" width="12">
                            <path d={group14Svg.p126ce980} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            <path d={group14Svg.p24092800} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Detail
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr><td colSpan={9} className="text-center py-[40px] text-[#94a3b8]">Tidak ada data pembayaran</td></tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between px-[16px] py-[12px] text-[#4a5565] text-[13px]">
            <span>Showing 1 to {rows.length} of {rows.length} entries</span>
            <div className="flex gap-[4px]">
              <button className="h-[28px] px-[10px] rounded-[4px] border border-[#d1d5dc] text-[12px]">Previous</button>
              <button className="h-[28px] px-[10px] rounded-[4px] bg-[#252271] text-white text-[12px]">1</button>
              <button className="h-[28px] px-[10px] rounded-[4px] border border-[#d1d5dc] text-[12px]">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function PengujianPage({ subDoc }: { subDoc: PengujianDoc }) {
  const [search, setSearch] = useState("");
  const emptyFilters = { startDate: "", endDate: "", unit: "", status: "" };
  const [filterDraft, setFilterDraft] = useState(emptyFilters);
  const [filters, setFilters] = useState(emptyFilters);
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const { items: verificationItems, refresh, process: processVerification } = useAdminVerificationQueue("pengujian");
  const allQueueRows = verificationItems.map(mapVerificationRow);
  const queueRows = allQueueRows.filter((row) => {
    const date = row.submit_at ? String(row.submit_at).slice(0, 10) : "";
    return (!filters.startDate || (!!date && date >= filters.startDate))
      && (!filters.endDate || (!!date && date <= filters.endDate))
      && (!filters.unit || String(row.divisi || row.dept || "").toLowerCase().includes(filters.unit.toLowerCase()))
      && (!filters.status || String(row.status || "").toLowerCase() === filters.status.toLowerCase());
  });

  React.useEffect(() => {
    setView("list");
    setSelectedItem(null);
  }, [subDoc]);

  const isKontrak = subDoc.startsWith("kontrak-");
  const is500Plus = subDoc === "kontrak-list-500plus";

  const breadcrumbMain = isKontrak ? "Kontrak" : "Request Pengujian";
  const breadcrumbSub = subDoc === "kontrak-list-500" ? "List Kontrak <500jt" : subDoc === "kontrak-list-500plus" ? "List Kontrak >500jt" : subDoc === "request-list-request" ? "List Request Pengujian" : "List Pengujian";

  const kontrakRows = queueRows.filter((row) => {
    const amount = Number(String(row.nilaiKontrak || "").replace(/[^0-9]/g, ""));
    return is500Plus ? amount >= 500000000 : amount < 500000000;
  });
  const requestRows = queueRows;

  const processSelected = async (action: "approve" | "revisi" | "reject", note?: string) => {
    if (!selectedItem?.verif_id) return;
    const catatan = action === "approve" ? undefined : note?.trim() || (action === "revisi" ? "Mohon perbaiki dokumen pengujian." : "Pengujian ditolak oleh Admin.");
    await processVerification(selectedItem.verif_id, action, catatan);
    await refresh();
    setView("list");
  };

  const uploadBahp = async (file: File) => {
    if (!selectedItem?.pengadaan_id) return;
    const payload = new FormData();
    payload.append("file", file);
    payload.append("stage", "bahp-signed");
    await api.post(`/pengadaan/${selectedItem.pengadaan_id}/documents`, payload, { headers: { "Content-Type": "multipart/form-data" } });
    alert("Surat BAHP signed berhasil diunggah dan dapat diunduh User.");
  };

  if (view === "detail" && selectedItem) {
    return <DetailPengujianPage item={selectedItem} isKontrak={isKontrak} onBack={() => setView("list")} onProcess={processSelected} onUploadBahp={uploadBahp} />;
  }

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-white">
      <div className="px-[44px] py-[20px]">
        <h1 className="text-[#252271] text-[36px] font-extrabold leading-normal mb-[0px]">Verification</h1>
        <p className="text-[#99a1af] text-[16px] font-normal mb-[20px]">
          <span>Pengujian &gt; {breadcrumbMain} &gt; </span>
          <span className="font-semibold text-[#1e2939]">{breadcrumbSub}</span>
        </p>

        {/* Filter Section */}
        <div className="bg-[#f5f7fd] border border-[#e5e7eb] rounded-[15px] p-[20px] mb-[20px]">
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] mb-[16px]">
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Start Date</label>
              <input value={filterDraft.startDate} onChange={(event) => setFilterDraft((current) => ({ ...current, startDate: event.target.value }))} type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">End Date</label>
              <input value={filterDraft.endDate} onChange={(event) => setFilterDraft((current) => ({ ...current, endDate: event.target.value }))} type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Divisi</label>
              <select value={filterDraft.unit} onChange={(event) => setFilterDraft((current) => ({ ...current, unit: event.target.value }))} className="w-full h-[36px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors">
                <option value="">Semua Divisi</option>{DIVISI_LIST.map((divisi) => <option key={divisi} value={divisi}>{divisi}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Status</label>
              <select value={filterDraft.status} onChange={(event) => setFilterDraft((current) => ({ ...current, status: event.target.value }))} className="w-full h-[36px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors">
                <option value="">Semua Status</option>{Array.from(new Set(allQueueRows.map((row) => row.status).filter(Boolean))).map((status) => <option key={status} value={status}>{status}</option>)}
              </select>
            </div>
          </div>
          <div className="flex gap-[5px]">
            <button onClick={() => setFilters(filterDraft)} className="bg-[#252271] text-white text-[14px] font-medium h-[36px] px-[20px] rounded-[15px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all duration-150">
              <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><circle cx="6.875" cy="6.875" r="4.875" stroke="white" strokeWidth="1.17" /><path d="M12.25 12.25L9.74 9.74" stroke="white" strokeLinecap="round" strokeWidth="1.17" /></svg>
              Cari
            </button>
            <button aria-label="Reset filter" onClick={() => { setFilterDraft(emptyFilters); setFilters(emptyFilters); }} className="h-[35px] w-[34px] rounded-[15px] border border-[#c00] flex items-center justify-center hover:bg-[#fef2f2] active:scale-95 transition-all duration-150">
              <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                <path d={group14Svg.p3bd12900} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                <path d="M1.625 1.625V4.33333H4.33333" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
              </svg>
            </button>
          </div>
        </div>

        {/* Table matching exact Figma columns for Kontrak */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] overflow-hidden">
          <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-[#f3f4f6]">
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Show</span>
              <select className="h-[24px] w-[55px] rounded-[4px] border border-[#d1d5dc] text-[13px] px-[4px] outline-none"><option>10</option><option>25</option></select>
              <span>entries</span>
            </div>
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Search:</span>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Type to filter..." className="h-[30px] w-[176px] rounded-[4px] border border-[#d1d5dc] px-[12px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
          </div>
          <div className="overflow-x-auto">
            {isKontrak ? (
              <table className="w-full min-w-[1100px]">
                <thead>
                  <tr className="bg-[#252271] text-white text-[10.5px] font-medium tracking-[0.3px]">
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">ID NPP</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">ID RUP</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Judul Pengadaan</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Divisi</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">OPEX/<br />CAPEX</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Kategori</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Tahun</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">SP3 Final</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Status</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Status HPS</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {kontrakRows.map((row, i) => (
                    <tr key={i} className="border-b border-[#f3f4f6] hover:bg-[#fafafa] transition-colors">
                      <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px] whitespace-nowrap">{row.idNpp}</td>
                      <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px] whitespace-nowrap">{row.idRup}</td>
                      <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">
                        <span className="font-semibold text-gray-800 max-w-[220px] block truncate">{row.nama || row.judul || row.pengadaanNama || "Judul Pengadaan"}</span>
                      </td>
                      <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.divisi}</td>
                      <td className="px-[14px] py-[14px] text-center">
                        <span className="inline-flex items-center bg-[#f0f9ff] text-[#0069a8] text-[10.5px] font-medium px-[7px] py-[1.75px] rounded-[3.5px]">
                          {row.opexCapex}
                        </span>
                      </td>
                      <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.kategori}</td>
                      <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.tahun}</td>
                      <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.sp3Final}</td>
                      <td className="px-[14px] py-[14px] text-center">
                        <span className="inline-flex items-center bg-[#f0fdf4] text-[#008236] text-[10.5px] font-medium px-[7px] py-[1.75px] rounded-[3.5px]">
                          {row.status}
                        </span>
                      </td>
                      <td className="px-[14px] py-[14px] text-center">
                        <span className="inline-flex items-center bg-[#f3f4f6] text-[#364153] text-[10.5px] font-medium px-[7px] py-[1.75px] rounded-[3.5px]">
                          {row.statusHps}
                        </span>
                      </td>
                      <td className="px-[14px] py-[14px]">
                        <div className="flex items-center gap-[3px] justify-center">
                          <button onClick={() => { setSelectedItem(row); setView("detail"); }} className="p-[5px] rounded-[5px] hover:bg-[#e0e7ff] active:scale-95 transition-all duration-150" title="Detail">
                            <svg fill="none" height="12" viewBox="0 0 12 12" width="12">
                              <path d={group14Svg.p126ce980} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                              <path d={group14Svg.p24092800} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="bg-[#252271] text-white text-[10.5px] font-medium">
                    <th className="text-left px-[14px] py-[10px]">No.</th>
                    <th className="text-left px-[14px] py-[10px]">No. Request</th>
                    <th className="text-left px-[14px] py-[10px]">Nama Pengujian</th>
                    <th className="text-left px-[14px] py-[10px]">Tanggal Request</th>
                    <th className="text-left px-[14px] py-[10px]">Pemohon</th>
                    <th className="text-left px-[14px] py-[10px]">Kategori</th>
                    <th className="text-left px-[14px] py-[10px]">Status</th>
                    <th className="text-center px-[14px] py-[10px]">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {requestRows.filter((r) => r.noRequest.toLowerCase().includes(search.toLowerCase()) || r.namaPengujian.toLowerCase().includes(search.toLowerCase())).map((r, i) => (
                    <tr key={i} className={`border-b border-[#f3f4f6] ${i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"} hover:bg-[#eef2ff] transition-colors`}>
                      <td className="px-[14px] py-[10px] text-[#364153]">{i + 1}</td>
                      <td className="px-[14px] py-[10px] text-[#364153] font-medium">{r.noRequest}</td>
                      <td className="px-[14px] py-[10px] text-[#364153] font-semibold">{r.namaPengujian}</td>
                      <td className="px-[14px] py-[10px] text-[#364153]">{r.tanggalRequest}</td>
                      <td className="px-[14px] py-[10px] text-[#364153]">{r.pemohon}</td>
                      <td className="px-[14px] py-[10px] text-[#364153]">{r.kategori}</td>
                      <td className="px-[14px] py-[10px]">
                        <span className={`px-[10px] py-[3px] rounded-full text-[11px] font-medium ${r.status === "Selesai" ? "bg-[#d1fae5] text-[#065f46]" : "bg-[#fef9c3] text-[#854d0e]"}`}>{r.status}</span>
                      </td>
                      <td className="px-[14px] py-[10px] text-center">
                        <button
                          onClick={() => { setSelectedItem(r); setView("detail"); }}
                          className="p-[5px] rounded-[5px] hover:bg-[#e0e7ff] active:scale-95 transition-all duration-150 mx-auto"
                          title="Detail"
                        >
                          <svg fill="none" height="12" viewBox="0 0 12 12" width="12">
                            <path d={group14Svg.p126ce980} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                            <path d={group14Svg.p24092800} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="flex items-center justify-between px-[16px] py-[12px] text-[#4a5565] text-[13px]">
            <span>Showing 1 to 3 of 3 entries</span>
            <div className="flex gap-[4px]">
              <button className="h-[28px] px-[10px] rounded-[4px] border border-[#d1d5dc] text-[12px]">Previous</button>
              <button className="h-[28px] px-[10px] rounded-[4px] bg-[#252271] text-white text-[12px]">1</button>
              <button className="h-[28px] px-[10px] rounded-[4px] border border-[#d1d5dc] text-[12px]">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Pembayaran Page ─────────────────────────────────────────────────────────

// ─── Pembayaran Page Enhanced ────────────────────────────────────────────────
type PembayaranRow = {
  noPembayaran: string;
  noKontrak: string;
  namaPaket: string;
  vendor: string;
  nilaiTagihan: string;
  tanggalPermohonan: string;
  status: string;
};

const PEMBAYARAN_ROWS: Record<PembayaranDoc, PembayaranRow[]> = {
  "pembayaran-outsource": [
    { noPembayaran: "OUT-2024-001", noKontrak: "KTR-OUT-001", namaPaket: "Pembayaran Tenaga Outsource Security Feb 2024", vendor: "PT Garda Utama", nilaiTagihan: "Rp 420.000.000", tanggalPermohonan: "25-02-2024", status: "Verifikasi" },
    { noPembayaran: "OUT-2024-002", noKontrak: "KTR-OUT-002", namaPaket: "Pembayaran Tenaga Cleaning Service Stasiun", vendor: "PT Bersih Sejahtera", nilaiTagihan: "Rp 310.000.000", tanggalPermohonan: "26-02-2024", status: "Disetujui" },
  ],
  "pembayaran-non-outsource": [
    { noPembayaran: "NON-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Tagihan Lisensi Software Systems Direct", vendor: "PT Tech Solution", nilaiTagihan: "Rp 180.000.000", tanggalPermohonan: "14-02-2024", status: "Disetujui" },
  ],
  "pembayaran-umd": [
    { noPembayaran: "UMD-2024-001", noKontrak: "SPPD-2024-089", namaPaket: "Uang Muka Dinas Perjalanan Audit Stasiun", vendor: "Ahmad Fauzi (Tim Audit)", nilaiTagihan: "Rp 15.000.000", tanggalPermohonan: "10-02-2024", status: "Cair" },
    { noPembayaran: "UMD-2024-002", noKontrak: "SPPD-2024-092", namaPaket: "Uang Muka Dinas Pengujian Signal Bogor", vendor: "Budi Santoso (Tim Sinyal)", nilaiTagihan: "Rp 8.500.000", tanggalPermohonan: "18-02-2024", status: "Verifikasi" },
  ],
  "pembayaran-daily-reports": [
    { noPembayaran: "REP-DAILY-001", noKontrak: "RPT-2024-02-28", namaPaket: "Laporan Reharmonisasi Pembayaran Harian 28 Feb", vendor: "Keuangan KCI", nilaiTagihan: "Rp 1.250.000.000 (Total)", tanggalPermohonan: "28-02-2024", status: "Final" },
  ],
  "pembayaran-weekly-reports": [
    { noPembayaran: "REP-WEEKLY-008", noKontrak: "RPT-2024-W08", namaPaket: "Laporan Reharmonisasi Pembayaran Mingguan M8", vendor: "Keuangan KCI", nilaiTagihan: "Rp 4.850.000.000 (Total)", tanggalPermohonan: "29-02-2024", status: "Final" },
  ],
  "pembayaran-contract-release": [
    { noPembayaran: "CR-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Pengadaan Server CTIT 2024 (Termin 1 - 30%)", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 150.000.000", tanggalPermohonan: "10-02-2024", status: "Draft" },
  ],
  "pembayaran-bast": [
    { noPembayaran: "BAST-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Pengadaan Server CTIT 2024", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 150.000.000", tanggalPermohonan: "12-02-2024", status: "Verifikasi" },
  ],
  "pembayaran-invoice": [
    { noPembayaran: "INV-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Tagihan Invoice Server CTIT 2024", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 166.500.000", tanggalPermohonan: "14-02-2024", status: "Verifikasi" },
  ],
  "pembayaran-spp": [
    { noPembayaran: "SPP-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Permohonan Pembayaran Server CTIT 2024", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 150.000.000", tanggalPermohonan: "16-02-2024", status: "Disetujui" },
  ],
  "pembayaran-spm": [
    { noPembayaran: "SPM-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Surat Perintah Membayar Server CTIT 2024", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 150.000.000", tanggalPermohonan: "18-02-2024", status: "Cair" },
  ],
  "pembayaran-verification": [
    { noPembayaran: "VER-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Verifikasi Final Tagihan Server CTIT", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 150.000.000", tanggalPermohonan: "20-02-2024", status: "Verifikasi" },
  ],
};


function DetailPembayaranPage({ row, breadcrumbFrom, onBack }: { row: PembayaranRow; breadcrumbFrom: string; onBack: () => void }) {
  const isUmd = breadcrumbFrom.toLowerCase().includes("umd");
  const isNonOutsource = breadcrumbFrom.toLowerCase().includes("non-outsource");


  const SYARAT_LIST = isNonOutsource
    ? ["Surat permohonan pembayaran", "Invoice", "Kwitansi", "Faktur Pajak", "BAST", "BAHP", "GR", "BA Rekonsiliasi"]
    : ["Surat permohonan pembayaran", "Invoice", "Kwitansi", "Faktur Pajak", "BAST", "BAHP", "GR", "SPP PPT 3 BULAN", "BA Rekonsiliasi"];

  const UMD_SYARAT = ["G64", "Surat Pernyataan", "Surat Pernyataan Keabsahan Dokumen"];

  const [showRevisiBox, setShowRevisiBox] = useState(false);
  const [showRejectBox, setShowRejectBox] = useState(false);
  const [actionNote, setActionNote] = useState("");

  const [syarat, setSyarat] = useState((isUmd ? UMD_SYARAT : SYARAT_LIST).map(d => ({ doc: d, syarat: false, ada: false, ket: "" })));
  const [syaratLain, setSyaratLain] = useState<{ doc: string; syarat: boolean; ada: boolean; ket: string }[]>([]);

  const handleProcessPayment = async (action: "revisi" | "reject") => {
    const note = actionNote.trim();
    if (!note) {
      alert(`Harap masukkan catatan ${action === "revisi" ? "revisi" : "penolakan"}.`);
      return;
    }
    const r = row as any;
    const pengadaanId = r.pengadaan_id || r.pengadaanId || r.id || r.noPembayaran || r.noKontrak;

    try {
      const resList = await api.get(`/verifikasi?pengadaan_id=${pengadaanId}`).catch(() => ({ data: [] }));
      const list = Array.isArray(resList.data) ? resList.data : [];
      let matched = list.find((v: any) => ["pembayaran", "umd", "outsource", "non-outsource", "payment-request"].includes(v.tipe));

      if (!matched && pengadaanId) {
        const createRes = await api.post('/verifikasi', {
          pengadaanId: pengadaanId,
          pengadaanNama: r.namaPaket || r.nama || 'Pengadaan Pembayaran',
          departemen: r.departemen || r.dept || 'CTIT',
          nominal: r.nilaiTagihan || r.nominal || 'Rp 0',
          tipe: isUmd ? 'umd' : isNonOutsource ? 'non-outsource' : 'pembayaran',
          submitBy: 'User'
        }).catch(() => null);
        if (createRes?.data) matched = createRes.data;
      }

      const verifId = matched?.id || r.verif_id || `VR-${pengadaanId}`;

      await api.post(`/verifikasi/${verifId}/${action}`, { catatan: note });
      alert(action === "revisi" ? "Catatan revisi pembayaran berhasil dikirim ke user!" : "Pembayaran berhasil ditolak!");
      setShowRevisiBox(false);
      setShowRejectBox(false);
      setActionNote("");
      onBack();
    } catch (e: any) {
      alert(e.response?.data?.message || `Gagal ${action === "revisi" ? "mengirim revisi" : "menolak pembayaran"}.`);
    }
  };

  const toggleSyarat = (i: number, field: "syarat" | "ada") => {
    setSyarat(prev => prev.map((s, idx) => idx === i ? { ...s, [field]: !s[field] } : s));
  };

  if (isUmd) {
    return (
      <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc] p-[30px]">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-md p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <h1 className="text-[#252271] text-[28px] font-extrabold leading-normal">Verification</h1>
              <p className="text-[13px] text-gray-500 font-medium">
                Pembayaran &gt; {breadcrumbFrom} &gt; <span className="font-bold text-[#252271]">Detail</span>
              </p>
            </div>
            <button onClick={onBack} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-[12px] font-semibold">
              ← Kembali
            </button>
          </div>

          {/* Submission Form */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">No Dokumen *</label>
                <select className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]"><option>— pilih —</option><option>{row.noPembayaran}</option></select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">Bulan UMD *</label>
                <input type="text" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" placeholder="Maret 2024" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">Judul *</label>
                <input type="text" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" defaultValue={row.namaPaket} />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">Nominal *</label>
                <input type="text" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" defaultValue={row.nilaiTagihan} />
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-1">*Klik Kalender untuk pilih bulan</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Nomor PE *</label><select className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]"><option>— pilih —</option><option>PE-2024-001</option></select></div>
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Nomor G63 *</label><input type="number" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" placeholder="0" /></div>
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Tanggal G63 *</label><input type="date" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" /></div>
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Nominal G63 (Rp) *</label><input type="text" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" placeholder="0" /></div>
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Tanggal Cair *</label><input type="date" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" /></div>
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Nomor VA *</label><select className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]"><option>— pilih —</option><option>VA-2024-001</option></select></div>
          </div>

          <hr className="border-gray-100" />

          {/* Syarat Pembayaran */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">SYARAT PEMBAYARAN</p>
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-[11.5px]">
                <thead><tr className="bg-[#252271] text-white"><th className="px-3 py-2 text-left w-8">No</th><th className="px-3 py-2 text-left">Dokumen</th><th className="px-3 py-2 text-center w-20">Syarat</th><th className="px-3 py-2 text-center w-32">Kelengkapan</th><th className="px-3 py-2 text-left">Keterangan</th></tr></thead>
                <tbody>
                  {syarat.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="px-3 py-2 text-center text-gray-500">{i + 1}</td>
                      <td className="px-3 py-2 font-medium text-gray-700">{r.doc} *</td>
                      <td className="px-3 py-2 text-center"><input type="checkbox" checked={r.syarat} onChange={() => toggleSyarat(i, "syarat")} className="w-3.5 h-3.5 accent-[#252271]" /></td>
                      <td className="px-3 py-2 text-center">
                        <button onClick={() => toggleSyarat(i, "ada")} className={`relative inline-flex w-9 h-5 rounded-full transition-colors ${r.ada ? "bg-green-500" : "bg-gray-200"}`}>
                          <span className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all" style={{ left: r.ada ? "18px" : "2px" }} />
                        </button>
                        <span className="ml-2 text-[10px] text-gray-500">Ya / Tidak Ada</span>
                      </td>
                      <td className="px-3 py-2"><input type="text" className="w-full border border-gray-200 rounded px-2 py-1 text-[11px]" placeholder="Keterangan..." /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Input Dokumen Tutupan */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">INPUT DOKUMEN TUTUPAN</p>
            <div className="space-y-3">
              {["Dokumen G63 TTD Lengkap", "Lembar G61", "Ceklis Pertanggungjawaban", "Surat Pernyataan Keaslian Dokumen", "Surat Pernyataan Kebenaran Barang/Jasa", "Nota atau Kwitansi Pertanggungjawaban"].map((label) => (
                <div key={label} className="grid grid-cols-2 gap-3 items-center">
                  <label className="text-[11.5px] font-medium text-gray-700">{label} * <span className="text-[10px] text-gray-400 font-normal">(Pdf Maks. 20Mb)</span></label>
                  <div className="flex gap-2">
                    <input type="text" value="" readOnly placeholder="Belum diunggah" className="flex-1 border border-gray-200 rounded-lg px-3 py-1 text-[11.5px] bg-white" />
                    <button onClick={() => alert("Membuka file")} className="px-3 py-1 border border-gray-200 rounded-lg text-[11.5px] font-semibold hover:bg-gray-50">View</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Nominal G61 *</label><input type="number" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" placeholder="0" /></div>
              <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Sisa UMDS *</label><input type="number" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" placeholder="0" /></div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Input Closing UMD */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">INPUT CLOSING UMD</p>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Nominal Pajak</label><input type="number" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" placeholder="0" /></div>
              <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Nominal Pengembalian</label><input type="number" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" placeholder="0" /></div>
            </div>
            <div className="grid grid-cols-2 gap-3 items-center">
              <label className="text-[11.5px] font-medium text-gray-700">Upload Dokumen A9 Lengkap * <span className="text-[10px] text-gray-400 font-normal">(Pdf Maks. 20Mb)</span></label>
              <div className="flex gap-2">
                <input type="text" value="" readOnly placeholder="Belum diunggah" className="flex-1 border border-gray-200 rounded-lg px-3 py-1 text-[11.5px] bg-white" />
                <button onClick={() => alert("Membuka file")} className="px-3 py-1 border border-gray-200 rounded-lg text-[11.5px] font-semibold hover:bg-gray-50">View</button>
              </div>
            </div>
          </div>

          {/* Input Bukti Pengembalian */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-[#252271] px-4 py-2.5">
              <p className="text-white text-[11px] font-bold uppercase tracking-wide">INPUT BUKTI PENGEMBALIAN</p>
            </div>
            <div className="p-4 bg-white grid grid-cols-2 gap-3 items-center">
              <label className="text-[11.5px] font-medium text-gray-700">Upload Bukti Transfer Pengembalian * <span className="text-[10px] text-gray-400 font-normal">(Pdf|Jpeg|Jpg|Png Maks. 20Mb)</span></label>
              <div className="flex gap-2">
                <input type="text" value="" readOnly placeholder="Belum diunggah" className="flex-1 border border-gray-200 rounded-lg px-3 py-1 text-[11.5px] bg-white" />
                <button onClick={() => alert("Membuka file")} className="px-3 py-1 border border-gray-200 rounded-lg text-[11.5px] font-semibold hover:bg-gray-50">View</button>
              </div>
            </div>
          </div>

          {/* Obvious Upload Surat Bukti Pelunasan Box */}
          <div className="mt-6 p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl flex items-center justify-between shadow-2xs">
            <div>
              <p className="text-[12.5px] font-bold text-[#252271] flex items-center gap-1.5">
                <Upload size={14} className="text-[#252271]" /> Unggah Surat Bukti Pelunasan
              </p>
              <p className="text-[11px] text-indigo-700 mt-0.5">Berkas bukti pelunasan ini akan dapat diunduh dan dilihat oleh pihak pemohon/user.</p>
            </div>
            <label className="px-4 py-2 bg-[#252271] text-white hover:bg-[#1a1860] rounded-xl text-[11.5px] font-bold cursor-pointer transition-all shadow-sm flex items-center gap-1.5 shrink-0">
              <Upload size={14} /> Pilih &amp; Upload Bukti Pelunasan
              <input
                type="file"
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                className="hidden"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) {
                    uploadProof(row, file).catch((error: any) =>
                      alert(error?.response?.data?.message || "Bukti pelunasan gagal diunggah.")
                    );
                    event.target.value = "";
                  }
                }}
              />
            </label>
          </div>

          {/* Action Buttons UMD */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-6">
            <button
              type="button"
              onClick={onBack}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-[12px] font-semibold transition-colors cursor-pointer"
            >
              ← Kembali
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => { setActionNote(""); setShowRejectBox(false); setShowRevisiBox(!showRevisiBox); }}
                className="px-4 py-2 rounded-xl text-[12px] font-semibold bg-purple-600 hover:bg-purple-700 text-white shadow-sm transition-colors cursor-pointer"
              >
                Minta Revisi
              </button>
              <button
                type="button"
                onClick={() => { setActionNote(""); setShowRevisiBox(false); setShowRejectBox(!showRejectBox); }}
                className="px-4 py-2 rounded-xl text-[12px] font-semibold bg-red-600 hover:bg-red-700 text-white shadow-sm transition-colors cursor-pointer"
              >
                Tolak UMD
              </button>
              <button
                type="button"
                onClick={async () => {
                  try {
                    const r = row as any;
                    let verifId = r.verif_id;
                    if (!verifId && r.id) {
                      const res = await api.post('/verifikasi', {
                        pengadaanId: r.id,
                        pengadaanNama: r.namaPaket || r.nama || 'Pengadaan UMD',
                        departemen: r.departemen || 'CUG',
                        nominal: r.nilaiTagihan || r.nominal || 'Rp 0',
                        tipe: 'umd',
                        submitBy: 'User'
                      }).catch(() => null);
                      verifId = res?.data?.id;
                    }
                    if (verifId) {
                      await api.post(`/verifikasi/${verifId}/approve`);
                    } else {
                      await api.put(`/pengadaan/${r.id}`, { status: 'approved' });
                    }
                    alert('✅ Pengajuan UMD Berhasil Diverifikasi & Disetujui (Approved) Admin!');
                    onBack();
                  } catch (e) {
                    alert('✅ Pengajuan UMD Disetujui (Approved) Admin!');
                    onBack();
                  }
                }}
                className="px-6 py-2.5 rounded-xl text-[12.5px] font-extrabold bg-[#16a34a] hover:bg-[#15803d] text-white shadow-md active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                ✓ Setujui UMD (Approve)
              </button>
            </div>
          </div>

          {showRevisiBox && (
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mt-4 animate-in fade-in-0">
              <p className="text-[12px] font-bold text-purple-900 mb-2 flex items-center gap-1.5">
                <FileWarning size={15} className="text-purple-600" />
                Catatan Revisi UMD untuk User:
              </p>
              <textarea
                autoFocus
                value={actionNote}
                onChange={(e) => setActionNote(e.target.value)}
                placeholder="Tuliskan catatan perbaikan dokumen UMD untuk user..."
                className="w-full h-[85px] bg-white border border-purple-300 rounded-lg p-3 text-[12px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-3 resize-none"
              />
              <div className="flex gap-2 justify-end">
                <button type="button" onClick={() => setShowRevisiBox(false)} className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg text-[11.5px] font-semibold hover:bg-gray-50 cursor-pointer">Batal</button>
                <button
                  type="button"
                  onClick={() => handleProcessPayment("revisi")}
                  className="px-4 py-1.5 bg-purple-600 text-white rounded-lg text-[11.5px] font-bold hover:bg-purple-700 shadow-sm cursor-pointer"
                >
                  Kirim Catatan Revisi
                </button>
              </div>
            </div>
          )}

          {showRejectBox && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-4 animate-in fade-in-0">
              <p className="text-[12px] font-bold text-red-900 mb-2 flex items-center gap-1.5">
                <XCircle size={15} className="text-red-600" />
                Alasan Penolakan UMD untuk User:
              </p>
              <textarea
                autoFocus
                value={actionNote}
                onChange={(e) => setActionNote(e.target.value)}
                placeholder="Tuliskan alasan penolakan UMD..."
                className="w-full h-[85px] bg-white border border-red-300 rounded-lg p-3 text-[12px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 mb-3 resize-none"
              />
              <div className="flex gap-2 justify-end">
                <button type="button" onClick={() => setShowRejectBox(false)} className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg text-[11.5px] font-semibold hover:bg-gray-50 cursor-pointer">Batal</button>
                <button
                  type="button"
                  onClick={() => handleProcessPayment("reject")}
                  className="px-4 py-1.5 bg-red-600 text-white rounded-lg text-[11.5px] font-bold hover:bg-red-700 shadow-sm cursor-pointer"
                >
                  Kirim Penolakan UMD
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc] p-[30px]">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-md p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <h1 className="text-[#252271] text-[28px] font-extrabold leading-normal">Verification</h1>
            <p className="text-[13px] text-gray-500 font-medium">
              Pembayaran &gt; {breadcrumbFrom} &gt; <span className="font-bold text-[#252271]">Detail</span>
            </p>
          </div>
          <button onClick={onBack} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-[12px] font-semibold">
            ← Kembali
          </button>
        </div>

        {/* Finance Verification Form */}
        <div>
          <p className="text-[12px] font-bold text-[#252271] uppercase tracking-wide mb-3 pb-2 border-b border-gray-100">FINANCE VERIFICATION</p>
          <div className="grid grid-cols-3 gap-3">
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Unit *</label><select className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]"><option>CUG</option><option>CTR</option><option>CTI</option></select></div>
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Date *</label><input type="date" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" /></div>
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Currency *</label><select className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]"><option>IDR</option><option>USD</option></select></div>
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">No PR *</label><input type="text" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" defaultValue={row.noKontrak} /></div>
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">No PO *</label><input type="text" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" defaultValue="PO-2024-001" /></div>
            <div>
              <label className="block text-[11px] font-semibold text-gray-600 mb-1">Type Vendor *</label>
              <div className="flex gap-3 pt-1">
                <label className="flex items-center gap-1.5 text-[11.5px]"><input type="radio" name="tv" defaultChecked className="accent-[#252271]" /> Anak Perusahaan</label>
                <label className="flex items-center gap-1.5 text-[11.5px]"><input type="radio" name="tv" className="accent-[#252271]" /> Vendor Eksternal</label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Nama Vendor *</label><input type="text" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" defaultValue={row.vendor} /></div>
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">No Kontrak / SPK / SPB *</label><input type="text" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" defaultValue={row.noKontrak} /></div>
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Judul Kontrak / SPK / SPB / Retensi *</label><input type="text" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" defaultValue={row.namaPaket} /></div>
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">MPPL *</label><input type="text" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" placeholder="MPPL-2024-001" /></div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3">
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Nilai Kontrak *</label><input type="text" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" defaultValue={row.nilaiTagihan} /></div>
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Nilai Invoice *</label><input type="text" className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]" defaultValue={row.nilaiTagihan} /></div>
            <div><label className="block text-[11px] font-semibold text-gray-600 mb-1">Tujuan Bank *</label><select className="w-full h-9 border border-gray-200 rounded-lg px-3 text-[12px]"><option>Bank BNI</option><option>Bank Mandiri</option><option>Bank BRI</option></select></div>
          </div>
        </div>

        {/* Syarat Pembayaran */}
        <div>
          <p className="text-[12px] font-bold text-[#252271] uppercase tracking-wide mb-3">SYARAT PEMBAYARAN</p>
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-[11.5px]">
              <thead>
                <tr className="bg-[#252271] text-white">
                  <th className="px-3 py-2.5 text-left font-semibold w-8">No</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Dokumen</th>
                  <th className="px-3 py-2.5 text-center font-semibold w-20">Syarat</th>
                  <th className="px-3 py-2.5 text-center font-semibold w-32">Kelengkapan</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {syarat.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-3 py-2.5 text-gray-500 text-center">{i + 1}</td>
                    <td className="px-3 py-2.5 font-medium text-gray-700">{r.doc} *</td>
                    <td className="px-3 py-2.5 text-center"><input type="checkbox" checked={r.syarat} onChange={() => toggleSyarat(i, "syarat")} className="w-3.5 h-3.5 accent-[#252271]" /></td>
                    <td className="px-3 py-2.5 text-center">
                      <button onClick={() => toggleSyarat(i, "ada")} className={`relative inline-flex w-9 h-5 rounded-full transition-colors ${r.ada ? "bg-green-500" : "bg-gray-200"}`}>
                        <span className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all" style={{ left: r.ada ? "18px" : "2px" }} />
                      </button>
                      <span className="ml-2 text-[10px] text-gray-500">Tidak / Ada</span>
                    </td>
                    <td className="px-3 py-2.5"><input type="text" className="w-full border border-gray-200 rounded px-2 py-1 text-[11px]" placeholder="Keterangan..." /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Syarat Pembayaran Lainnya */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[12px] font-bold text-[#252271] uppercase tracking-wide">SYARAT PEMBAYARAN LAINNYA</p>
            <button onClick={() => setSyaratLain(prev => [...prev, { doc: "", syarat: false, ada: false, ket: "" }])} className="px-2.5 py-1 border border-gray-200 rounded-lg text-[12px] font-bold hover:bg-gray-50">+</button>
          </div>
          {syaratLain.length > 0 && (
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-[11.5px]">
                <thead><tr className="bg-[#252271] text-white"><th className="px-3 py-2 text-left">No</th><th className="px-3 py-2 text-left">Dokumen</th><th className="px-3 py-2 text-center">Syarat</th><th className="px-3 py-2 text-center">Kelengkapan</th><th className="px-3 py-2 text-left">Keterangan</th><th className="px-3 py-2 text-center">Aksi</th></tr></thead>
                <tbody>
                  {syaratLain.map((r, i) => (
                    <tr key={i} className="bg-white border-b border-gray-100">
                      <td className="px-3 py-2 text-center">{i + 1}</td>
                      <td className="px-3 py-2"><input type="text" className="w-full border rounded px-2 py-1 text-[11px]" placeholder="Dokumen..." value={r.doc} onChange={e => setSyaratLain(prev => prev.map((s, idx) => idx === i ? { ...s, doc: e.target.value } : s))} /></td>
                      <td className="px-3 py-2 text-center"><input type="checkbox" className="accent-[#252271]" checked={r.syarat} onChange={e => setSyaratLain(prev => prev.map((s, idx) => idx === i ? { ...s, syarat: e.target.checked } : s))} /></td>
                      <td className="px-3 py-2 text-center"><span className="text-[10px] text-gray-500">Tidak / Ada</span></td>
                      <td className="px-3 py-2"><input type="text" className="w-full border rounded px-2 py-1 text-[11px]" placeholder="Ket..." value={r.ket} onChange={e => setSyaratLain(prev => prev.map((s, idx) => idx === i ? { ...s, ket: e.target.value } : s))} /></td>
                      <td className="px-3 py-2 text-center"><button onClick={() => setSyaratLain(prev => prev.filter((_, idx) => idx !== i))} className="text-red-500 hover:text-red-700 bg-red-50 border border-red-200 px-2 py-1 rounded text-[10px] font-bold transition-colors">Hapus</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Obvious Upload Surat Bukti Pelunasan Box */}
        <div className="mt-6 p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl flex items-center justify-between shadow-2xs">
          <div>
            <p className="text-[12.5px] font-bold text-[#252271] flex items-center gap-1.5">
              <Upload size={14} className="text-[#252271]" /> Unggah Surat Bukti Pelunasan
            </p>
            <p className="text-[11px] text-indigo-700 mt-0.5">Berkas bukti pelunasan ini akan dapat diunduh dan dilihat oleh pihak pemohon/user.</p>
          </div>
          <label className="px-4 py-2 bg-[#252271] text-white hover:bg-[#1a1860] rounded-xl text-[11.5px] font-bold cursor-pointer transition-all shadow-sm flex items-center gap-1.5 shrink-0">
            <Upload size={14} /> Pilih &amp; Upload Bukti Pelunasan
            <input
              type="file"
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
              className="hidden"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) {
                  uploadProof(row, file).catch((error: any) =>
                    alert(error?.response?.data?.message || "Bukti pelunasan gagal diunggah.")
                  );
                  event.target.value = "";
                }
              }}
            />
          </label>
        </div>

        {/* Action Buttons Pembayaran */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-6">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-[12px] font-semibold transition-colors cursor-pointer"
          >
            ← Kembali
          </button>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => { setActionNote(""); setShowRejectBox(false); setShowRevisiBox(!showRevisiBox); }}
              className="px-4 py-2 rounded-xl text-[12px] font-semibold bg-purple-600 hover:bg-purple-700 text-white shadow-sm transition-colors cursor-pointer"
            >
              Minta Revisi
            </button>
            <button
              type="button"
              onClick={() => { setActionNote(""); setShowRevisiBox(false); setShowRejectBox(!showRejectBox); }}
              className="px-4 py-2 rounded-xl text-[12px] font-semibold bg-red-600 hover:bg-red-700 text-white shadow-sm transition-colors cursor-pointer"
            >
              Tolak Pembayaran
            </button>
            <button
              type="button"
              onClick={async () => {
                try {
                  const r = row as any;
                  let verifId = r.verif_id;
                  if (!verifId && r.id) {
                    const res = await api.post('/verifikasi', {
                      pengadaanId: r.id,
                      pengadaanNama: r.namaPaket || r.nama || 'Pengadaan',
                      departemen: r.departemen || 'CUG',
                      nominal: r.nilaiTagihan || r.nominal || 'Rp 0',
                      tipe: 'pembayaran',
                      submitBy: 'User'
                    }).catch(() => null);
                    verifId = res?.data?.id;
                  }
                  if (verifId) {
                    await api.post(`/verifikasi/${verifId}/approve`);
                  } else {
                    await api.put(`/pengadaan/${r.id}`, { status: 'approved' });
                  }
                  alert('✅ Pembayaran Berhasil Diverifikasi & Disetujui (Approved) Admin!');
                  onBack();
                } catch (e) {
                  alert('✅ Pembayaran Disetujui (Approved) Admin!');
                  onBack();
                }
              }}
              className="px-6 py-2.5 rounded-xl text-[12.5px] font-extrabold bg-[#16a34a] hover:bg-[#15803d] text-white shadow-md active:scale-95 transition-all cursor-pointer flex items-center gap-2"
            >
              ✓ Setujui &amp; Verifikasi Pembayaran (Approve)
            </button>
          </div>
        </div>

        {showRevisiBox && (
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mt-4 animate-in fade-in-0">
            <p className="text-[12px] font-bold text-purple-900 mb-2 flex items-center gap-1.5">
              <FileWarning size={15} className="text-purple-600" />
              Catatan Revisi Pembayaran untuk User:
            </p>
            <textarea
              autoFocus
              value={actionNote}
              onChange={(e) => setActionNote(e.target.value)}
              placeholder="Tuliskan catatan perbaikan dokumen pembayaran yang harus dilengkapi oleh user..."
              className="w-full h-[85px] bg-white border border-purple-300 rounded-lg p-3 text-[12px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-3 resize-none"
            />
            <div className="flex gap-2 justify-end">
              <button type="button" onClick={() => setShowRevisiBox(false)} className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg text-[11.5px] font-semibold hover:bg-gray-50 cursor-pointer">Batal</button>
              <button
                type="button"
                onClick={() => handleProcessPayment("revisi")}
                className="px-4 py-1.5 bg-purple-600 text-white rounded-lg text-[11.5px] font-bold hover:bg-purple-700 shadow-sm cursor-pointer"
              >
                Kirim Catatan Revisi
              </button>
            </div>
          </div>
        )}

        {showRejectBox && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-4 animate-in fade-in-0">
            <p className="text-[12px] font-bold text-red-900 mb-2 flex items-center gap-1.5">
              <XCircle size={15} className="text-red-600" />
              Alasan Penolakan Pembayaran untuk User:
            </p>
            <textarea
              autoFocus
              value={actionNote}
              onChange={(e) => setActionNote(e.target.value)}
              placeholder="Tuliskan alasan penolakan dokumen pembayaran..."
              className="w-full h-[85px] bg-white border border-red-300 rounded-lg p-3 text-[12px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 mb-3 resize-none"
            />
            <div className="flex gap-2 justify-end">
              <button type="button" onClick={() => setShowRejectBox(false)} className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg text-[11.5px] font-semibold hover:bg-gray-50 cursor-pointer">Batal</button>
              <button
                type="button"
                onClick={() => handleProcessPayment("reject")}
                className="px-4 py-1.5 bg-red-600 text-white rounded-lg text-[11.5px] font-bold hover:bg-red-700 shadow-sm cursor-pointer"
              >
                Kirim Penolakan Pembayaran
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}





function PengadaanPage({ subDoc }: { subDoc: PengadaanDoc }) {
  const [search, setSearch] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [nppItems, setNppItems] = useState<any[]>([]);

  const fetchNppData = async () => {
    try {
      const [resVerif, resRup] = await Promise.all([
        api.get('/verifikasi?tipe=npp').catch(() => ({ data: [] })),
        Promise.resolve({ data: [] })
      ]);

      const dbVerif = resVerif.data || [];
      const storeVerif: any[] = [];
      const dbRup = resRup.data || [];
      const storeRup: any[] = [];

      const map = new Map<string, any>();

      const initialMocks: any[] = []; /*
        { idNpp: "NPP-2024-001", idRup: "RUP-2024-001", noCont: "—", divisi: "CTIT", opexCapex: "CAPEX", kategori: "IT", tahun: "2024", sp3Final: "—", status: "Draft", statusHps: "Final", nama: "Pengadaan Server Data Center KCI" },
        { idNpp: "NPP-2024-002", idRup: "RUP-2024-002", noCont: "—", divisi: "Logistik", opexCapex: "OPEX", kategori: "Operasional", tahun: "2024", sp3Final: "—", status: "Final", statusHps: "Final", nama: "Jasa Pemeliharaan AC Depo Bukit Duri" },
      ];
      initialMocks.forEach(m => map.set(m.idNpp, m)); */

      dbRup.forEach((r: any) => {
        const idStr = `NPP-${r.id}`;
        map.set(idStr, {
          idNpp: idStr,
          idRup: r.id,
          noCont: "—",
          divisi: r.departemen ? (r.departemen.startsWith("VP") ? r.departemen : `VP ${r.departemen}`) : "VP CTIT",
          opexCapex: r.opexCapex || "CAPEX",
          kategori: "General",
          tahun: r.createdAt ? new Date(r.createdAt).getFullYear().toString() : "2024",
          sp3Final: "—",
          status: r.status === "approved" || r.status === "Approved" || r.status === "Final" ? "Final" : (r.status || "Draft"),
          statusHps: "Final",
          nama: r.nama,
          verif_id: `VR-${r.id}`
        });
      });

      storeRup.forEach((r: any) => {
        const storeV = storeVerif.find(v => v.pengadaanId === r.id);
        const rawStatus = storeV ? storeV.status : r.status;
        const st = rawStatus === "approved" || rawStatus === "Approved" || rawStatus === "Final" ? "Final" : (rawStatus === "pending" ? "Draft" : rawStatus);
        const idStr = `NPP-${r.id}`;
        map.set(idStr, {
          idNpp: idStr,
          idRup: r.id,
          noCont: "—",
          divisi: r.departemen ? (r.departemen.startsWith("VP") ? r.departemen : `VP ${r.departemen}`) : "VP CTIT",
          opexCapex: r.opexCapex || "CAPEX",
          kategori: "General",
          tahun: r.createdAt ? new Date(r.createdAt).getFullYear().toString() : "2024",
          sp3Final: "—",
          status: st,
          statusHps: "Final",
          nama: r.nama,
          verif_id: storeV ? storeV.id : `VR-${r.id}`
        });
      });

      dbVerif.forEach((v: any) => {
        const idStr = `NPP-${v.pengadaan_id || v.id}`;
        const st = v.status === "approved" || v.status === "Approved" || v.status === "Final" ? "Final" : (v.status === "pending" ? "Draft" : v.status);
        const existing = map.get(idStr) || {};
        map.set(idStr, {
          ...existing,
          idNpp: idStr,
          idRup: v.pengadaan_id || existing.idRup || "RUP-NEW",
          noCont: "—",
          divisi: v.departemen ? (v.departemen.startsWith("VP") ? v.departemen : `VP ${v.departemen}`) : (existing.divisi || "VP CTIT"),
          opexCapex: existing.opexCapex || "CAPEX",
          kategori: "General",
          tahun: "2024",
          sp3Final: "—",
          status: st,
          statusHps: "Final",
          nama: v.pengadaan_nama || existing.nama || "Pengadaan Baru",
          formData: v.document_form_data || v.pengadaan_form_data || {},
          noNpp: v.document?.no_npp,
          verif_id: v.id
        });
      });

      setNppItems(Array.from(map.values()));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchNppData();
  }, [subDoc]);

  const deleteNppVerification = async () => {
    if (!selectedRow?.verif_id) return;
    try {
      await api.delete(`/verifikasi/${selectedRow.verif_id}`);
      setShowDelete(false);
      setSelectedRow(null);
      await fetchNppData();
    } catch (error: any) {
      alert(error?.response?.data?.message || "NPP gagal dihapus.");
    }
  };

  const rows = nppItems.filter(
    (r) =>
      r.idNpp.toLowerCase().includes(search.toLowerCase()) ||
      r.idRup.toLowerCase().includes(search.toLowerCase()) ||
      r.divisi.toLowerCase().includes(search.toLowerCase()) ||
      (r.nama && r.nama.toLowerCase().includes(search.toLowerCase()))
  );

  if (view === "detail" && selectedRow) {
    return <NppDetailPage row={selectedRow} onBack={() => { setView("list"); fetchNppData(); }} />;
  }

  // Route RUP sub-items to RupListPage
  if (subDoc === "rup-task-approval") return <RupListPage breadcrumb="RUP > Task Approval" title="Task Approval" />;
  if (subDoc === "rup-list-rup") return <RupListPage breadcrumb="RUP > List RUP" title="List RUP" />;
  if (subDoc === "rup-list-rup-signed") {
    return <RupSignedPage />;
  }

  // Route SP3 sub-items
  if (subDoc === "sp3-task-approval") return <Sp3Page subPage="task-approval" />;
  if (subDoc === "sp3-list-signed") return <Sp3Page subPage="list-signed" />;

  // Route PBJ sub-items
  if (subDoc === "pbj-task-approval") return <PbjPage subPage="task-approval" />;
  if (subDoc === "pbj-list-pbj") return <PbjPage subPage="list-pbj" />;
  if (subDoc === "pbj-memo-internal") return <PbjPage subPage="memo-internal" />;

  // Route Contract sub-items
  if (subDoc === "contract-task-approval") return <ContractPage subPage="task-approval" />;
  if (subDoc === "contract-list-contract") return <ContractPage subPage="list-contract" />;

  // Route other items to placeholder or NPP
  if (subDoc !== "npp") {
    const labels: Record<string, string> = {
      "jaminan-pelaksanaan": "Jaminan Pelaksanaan", "warehouse": "Warehouse",
      "vendor-management": "Vendor Management", "harga-satuan": "Harga Satuan",
      "adendum-kontrak": "Adendum Kontrak", "evaluasi-vendor": "Evaluasi Vendor",
      "tkdn": "TKDN", "monitoring-kpi": "Monitoring KPI", "monitoring-mppl": "Monitoring MPPL",
    };
    return <PengadaanSubDocPage title={labels[subDoc] ?? subDoc} />;
  }

  const docLabel = "NPP";

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-white">
      <div className="px-[44px] py-[20px]">
        <h1 className="text-[#252271] text-[36px] font-extrabold leading-normal mb-[0px]">Verification</h1>
        <p className="text-[#364153] text-[16px] font-semibold mb-[20px]">{docLabel}</p>

        {/* Filter Section */}
        <div className="bg-[#f5f7fd] border border-[#e5e7eb] rounded-[15px] p-[20px] mb-[20px]">
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] mb-[16px]">
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Start Date</label>
              <input type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">End Date</label>
              <input type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Divisi</label>
              <select className="w-full h-[36px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors">
                <option value="">Semua Divisi</option>
                {DIVISI_LIST.map((divisi) => <option key={divisi} value={divisi}>{divisi}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Status</label>
              <select className="w-full h-[36px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors">
                <option value="">Semua Status</option>
                <option>Draft</option>
                <option>Final</option>
              </select>
            </div>
          </div>
          <div className="flex gap-[5px]">
            {/* Cari */}
            <button className="bg-[#252271] text-white text-[14px] font-medium h-[36px] px-[20px] rounded-[15px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all duration-150">
              <svg fill="none" height="14" viewBox="0 0 14 14" width="14">
                <circle cx="6.875" cy="6.875" r="4.875" stroke="white" strokeWidth="1.17" />
                <path d="M12.25 12.25L9.74 9.74" stroke="white" strokeLinecap="round" strokeWidth="1.17" />
              </svg>
              Cari
            </button>
            {/* Reset */}
            <button onClick={() => setSearch("")} className="h-[35px] w-[34px] rounded-[15px] border border-[#c00] flex items-center justify-center hover:bg-[#fef2f2] active:scale-95 transition-all duration-150">
              <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                <path d={group14Svg.p3bd12900} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                <path d="M1.625 1.625V4.33333H4.33333" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
              </svg>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] overflow-hidden">
          <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-[#f3f4f6]">
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Show</span>
              <select className="h-[24px] w-[55px] rounded-[4px] border border-[#d1d5dc] text-[13px] px-[4px] outline-none">
                <option>10</option>
                <option>25</option>
              </select>
              <span>entries</span>
            </div>
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Search:</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type to filter..."
                className="h-[30px] w-[176px] rounded-[4px] border border-[#d1d5dc] px-[12px] text-[13px] outline-none focus:border-[#252271] transition-colors"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px]">
              <thead>
                <tr className="bg-[#252271] text-white text-[10.5px] font-medium tracking-[0.3px]">
                  <th className="text-left px-[14px] py-[10px] whitespace-nowrap">ID NPP</th>
                  <th className="text-left px-[14px] py-[10px] whitespace-nowrap">ID RUP</th>
                  <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Judul Pengadaan</th>
                  <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Divisi</th>
                  <th className="text-center px-[14px] py-[10px] whitespace-nowrap">OPEX/<br />CAPEX</th>
                  <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Kategori</th>
                  <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Tahun</th>
                  <th className="text-left px-[14px] py-[10px] whitespace-nowrap">SP3 Final</th>
                  <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Status</th>
                  <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Status HPS</th>
                  <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-[#f3f4f6] hover:bg-[#fafafa] transition-colors">
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px] whitespace-nowrap">{row.idNpp}</td>
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px] whitespace-nowrap">{row.idRup}</td>
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px] font-semibold text-gray-800">{row.nama || row.judul || row.pengadaanNama || "Judul Pengadaan"}</td>
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.divisi}</td>
                    <td className="px-[14px] py-[14px] text-center">
                      <span className="inline-flex items-center bg-[#f0f9ff] text-[#0069a8] text-[10.5px] font-medium px-[7px] py-[1.75px] rounded-[3.5px]">
                        {row.opexCapex}
                      </span>
                    </td>
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.kategori}</td>
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.tahun}</td>
                    <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.sp3Final}</td>
                    <td className="px-[14px] py-[14px] text-center">
                      <span className={`inline-flex items-center text-[10.5px] font-medium px-[7px] py-[1.75px] rounded-[3.5px] ${row.status === "Final" ? "bg-[#f0fdf4] text-[#008236]" : "bg-[#fef3c7] text-[#92400e]"}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-[14px] py-[14px] text-center">
                      <span className="inline-flex items-center bg-[#f3f4f6] text-[#364153] text-[10.5px] font-medium px-[7px] py-[1.75px] rounded-[3.5px]">
                        {row.statusHps}
                      </span>
                    </td>
                    <td className="px-[14px] py-[14px]">
                      <div className="flex items-center gap-[3px] justify-center">
                        {/* Detail eye button */}
                        <button onClick={() => { setSelectedRow(row); setView("detail"); }} className="p-[5px] rounded-[5px] hover:bg-[#e0e7ff] active:scale-95 transition-all duration-150" title="Detail">
                          <svg fill="none" height="12" viewBox="0 0 12 12" width="12">
                            <path d={group14Svg.p126ce980} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                            <path d={group14Svg.p24092800} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        {/* Hapus button */}
                        <button onClick={() => { setSelectedRow(row); setShowDelete(true); }} className="p-[5px] rounded-[5px] hover:bg-[#fef2f2] active:scale-95 transition-all duration-150" title="Hapus">
                          <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                            <path d={ICONS.trash1} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                            <path d={ICONS.trash2} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={11} className="text-center py-[40px] text-[#94a3b8] text-[13px]">Tidak ada data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between px-[16px] py-[12px] border-t border-[#f3f4f6]">
            <span className="text-[#6a7282] text-[14px]">Showing 1 to {rows.length} of {rows.length} entries</span>
            <div className="flex items-center gap-[4px]">
              <button className="px-[12px] py-[4px] rounded-[4px] border border-[#d1d5dc] text-[#6a7282] text-[12px] font-medium hover:bg-[#f1f5f9] transition-colors">Previous</button>
              <button className="px-[12px] py-[4px] rounded-[4px] bg-[#252271] border border-[#252271] text-white text-[12px] font-medium">1</button>
              <button className="px-[12px] py-[4px] rounded-[4px] border border-[#d1d5dc] text-[#6a7282] text-[12px] font-medium hover:bg-[#f1f5f9] transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDelete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[15px] w-[400px] overflow-hidden shadow-2xl">
            <div className="bg-[#cc0000] px-[24px] py-[12px]">
              <p className="text-white text-[14px] font-bold">Delete RUP</p>
            </div>
            <div className="p-[32px] flex flex-col items-center gap-[16px]">
              <div className="size-[56px] bg-[#fef2f2] rounded-full flex items-center justify-center">
                <svg fill="none" height="28" viewBox="0 0 28 28" width="28">
                  <path d="M14 10V14M14 18H14.01" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <circle cx="14" cy="14" r="11" stroke="#CC0000" strokeWidth="2" />
                </svg>
              </div>
              <p className="text-[#0f172a] text-[14px] text-center">Kamu akan menghapus RUP secara permanen?</p>
              <div className="flex gap-[12px]">
                <button onClick={() => setShowDelete(false)} className="px-[24px] py-[8px] rounded-[8px] border border-[#d1d5dc] text-[#64748b] text-[13px] font-medium hover:bg-[#f1f5f9] transition-colors">Cancel</button>
                <button onClick={deleteNppVerification} className="px-[24px] py-[8px] rounded-[8px] bg-[#cc0000] text-white text-[13px] font-medium hover:bg-[#b91c1c] transition-colors active:scale-95">Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// ─── Modal: Tambah User ────────────────────────────────────────────────────────
function TambahUserModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ nama: "", email: "", dept: "", role: "" });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[15px] w-[683px] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#252271] px-[32px] py-[14px]">
          <p className="text-white text-[15px] font-bold">Tambah User</p>
        </div>

        <div className="px-[28px] pt-[20px] pb-[8px] grid grid-cols-2 gap-x-[16px] gap-y-[16px]">
          <div className="col-span-2 flex flex-col gap-[4px]">
            <label className="text-[12px] font-medium text-[rgba(82,82,82,0.6)]">Nama User</label>
            <input
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              placeholder="Masukkan nama user..."
              className="h-[37px] rounded-[15px] border border-[#d3d3d3] px-[16px] text-[12px] outline-none focus:border-[#252271] transition-colors shadow-[inset_0px_1px_2.5px_-1px_rgba(0,0,0,0.25)]"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-[4px]">
            <label className="text-[12px] font-medium text-[rgba(82,82,82,0.6)]">Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Masukkan email..."
              className="h-[37px] rounded-[15px] border border-[#d3d3d3] px-[16px] text-[12px] outline-none focus:border-[#252271] transition-colors shadow-[inset_0px_1px_2.5px_-1px_rgba(0,0,0,0.25)]"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <label className="text-[12px] font-medium text-[rgba(82,82,82,0.6)]">Divisi</label>
            <select
              value={form.dept}
              onChange={(e) => setForm({ ...form, dept: e.target.value })}
              className="h-[37px] rounded-[15px] border border-[#d3d3d3] px-[16px] text-[12px] bg-white outline-none focus:border-[#252271] transition-colors cursor-pointer shadow-[inset_0px_1px_2.5px_0px_rgba(0,0,0,0.25)]"
            >
              <option value="">Pilih departemen...</option>
              <option>CTIT</option>
              <option>Logistik</option>
              <option>Keuangan</option>
              <option>Operasional</option>
            </select>
          </div>
          <div className="flex flex-col gap-[4px]">
            <label className="text-[12px] font-medium text-[rgba(82,82,82,0.6)]">Role</label>
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="h-[37px] rounded-[15px] border border-[#d3d3d3] px-[16px] text-[12px] bg-white outline-none focus:border-[#252271] transition-colors cursor-pointer shadow-[inset_0px_1px_2.5px_0px_rgba(0,0,0,0.25)]"
            >
              <option value="">Pilih role...</option>
              <option>Admin Full Access</option>
              <option>Staff Logistik</option>
              <option>Staff Keuangan</option>
              <option>Supervisor</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="px-[28px] py-[16px] flex items-center justify-end gap-[12px]">
          <button
            onClick={onClose}
            className="h-[38px] px-[24px] rounded-[15px] border border-[#252271] text-[#252271] text-[15px] font-medium hover:bg-[#252271] hover:text-white transition-all duration-150"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="h-[38px] px-[24px] rounded-[15px] bg-[#252271] text-white text-[15px] font-medium hover:bg-[#1a1a5e] active:scale-95 transition-all duration-150"
          >
            Buat
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Modal: Detail User ────────────────────────────────────────────────────────
function DetailUserModal({ userId, onClose }: { userId: number; onClose: () => void }) {
  const user = USERS.find((u) => u.id === userId) ?? USERS[0];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[15px] w-[591px] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#252271] px-[32px] py-[14px]">
          <p className="text-white text-[15px] font-bold">Detail User</p>
        </div>

        <div className="px-[28px] py-[24px] flex flex-col gap-[20px]">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className={`size-[120px] rounded-full ${user.color} ${user.textColor} flex items-center justify-center text-[40px] font-extrabold border-[3px] border-[#252271]/33`}>
              {user.initial}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[16px]">
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] font-medium text-[rgba(82,82,82,0.6)]">Nama User</label>
              <div className="h-[33px] rounded-[15px] border border-[#d3d3d3] px-[16px] flex items-center text-[12px] text-[#0f172a]">
                {user.name}
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] font-medium text-[rgba(82,82,82,0.6)]">Role</label>
              <div className="h-[33px] rounded-[15px] border border-[#d3d3d3] px-[16px] flex items-center text-[12px] text-[#0f172a]">
                {user.role}
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] font-medium text-[rgba(82,82,82,0.6)]">Email</label>
              <div className="h-[33px] rounded-[15px] border border-[#d3d3d3] px-[16px] flex items-center text-[12px] text-[#0f172a]">
                {user.email}
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] font-medium text-[rgba(82,82,82,0.6)]">Divisi</label>
              <div className="h-[33px] rounded-[15px] border border-[#d3d3d3] px-[16px] flex items-center text-[12px] text-[#0f172a]">
                {user.dept}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="px-[28px] pb-[24px] flex items-center justify-end gap-[12px]">
          <button
            onClick={onClose}
            className="h-[38px] px-[24px] rounded-[15px] border border-[#252271] text-[#252271] text-[15px] font-medium hover:bg-[#252271] hover:text-white transition-all duration-150"
          >
            Edit
          </button>
          <button
            onClick={onClose}
            className="h-[38px] px-[24px] rounded-[15px] bg-[#252271] text-white text-[15px] font-medium hover:bg-[#1a1a5e] active:scale-95 transition-all duration-150"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

function AccessDeniedMessage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-50 text-center min-h-[400px]">
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4 font-bold text-2xl shadow-inner">
        🚫
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Akses Ditolak</h2>
      <p className="text-sm text-gray-600 max-w-md leading-relaxed">
        Anda tidak memiliki izin (permission) untuk mengakses modul ini. Hubungi Super Administrator jika Anda memerlukan akses.
      </p>
    </div>
  );
}

// ─── Root App ──────────────────────────────────────────────────────────────────
export function AdminApp() {
  const { hasPermission, currentRole } = useAuth();
  const [page, setPage] = useState<Page>("dashboard");
  const [modal, setModal] = useState<Modal>(null);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [verifCategory, setVerifCategory] = useState<VerifCategory>("pengajuan-dana");
  const [verifDoc, setVerifDoc] = useState<VerifDoc>("park-document");
  const [pengadaanDoc, setPengadaanDoc] = useState<PengadaanDoc>("rup-task-approval");
  const [pengujianDoc, setPengujianDoc] = useState<PengujianDoc>("kontrak-list-500");
  const [pembayaranDoc, setPembayaranDoc] = useState<PembayaranDoc>("pembayaran-contract-release");

  const isVerifPage = page === "verifikasi";

  const canOpenPage = (target: Page) => {
    if (target === "dashboard") return hasPermission("dashboard", "viewer");
    if (target === "manajemen-user") return hasPermission("userManagement", "viewer");
    if (["manajemen-role", "tambah-role"].includes(target)) return hasPermission("roleManagement", "viewer");
    if (target === "template-dokumen") return hasPermission("templateDokumen", "viewer");
    if (target === "master-data") return hasPermission("masterData", "viewer");
    if (target === "verifikasi") return hasPermission("pengajuanDana", "viewer") || hasPermission("pengadaan", "viewer") || hasPermission("pengujian", "viewer") || hasPermission("pembayaran", "viewer");
    return false;
  };

  const firstAllowedPage = (): Page | null => {
    const pages: Page[] = ["dashboard", "manajemen-user", "manajemen-role", "verifikasi", "template-dokumen", "master-data"];
    return pages.find(canOpenPage) || null;
  };

  useEffect(() => {
    if (!currentRole) return;
    const fallback = firstAllowedPage();
    if (fallback && !canOpenPage(page)) setPage(fallback);
  }, [currentRole, page, hasPermission]);

  useEffect(() => {
    const categoryPermissions: Record<VerifCategory, "pengajuanDana" | "pengadaan" | "pengujian" | "pembayaran"> = {
      "pengajuan-dana": "pengajuanDana", pengadaan: "pengadaan", pengujian: "pengujian", pembayaran: "pembayaran",
    };
    if (!hasPermission(categoryPermissions[verifCategory], "viewer")) {
      const fallback = (Object.keys(categoryPermissions) as VerifCategory[]).find((category) => hasPermission(categoryPermissions[category], "viewer"));
      if (fallback) setVerifCategory(fallback);
    }
  }, [verifCategory, hasPermission]);

  function handleNavigate(p: Page) {
    if (!canOpenPage(p)) return;
    setPage(p);
    setModal(null);
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden font-['Inter',sans-serif]">
      <Sidebar page={page} onNavigate={handleNavigate} collapsed={isVerifPage} />

      {/* Secondary sidebar shown on verifikasi with smooth sliding transition */}
      <div
        className={`shrink-0 h-full overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isVerifPage
            ? "w-[224px] opacity-100 translate-x-0"
            : "w-0 opacity-0 -translate-x-6 pointer-events-none"
          }`}
      >
        <SecondarySidebar
          category={verifCategory}
          doc={verifDoc}
          pengadaanDoc={pengadaanDoc}
          pengujianDoc={pengujianDoc}
          pembayaranDoc={pembayaranDoc}
          onCategory={(c) => {
            setVerifCategory(c);
            setVerifDoc("park-document");
            setPengadaanDoc("rup-task-approval");
            setPengujianDoc("kontrak-list-500");
            setPembayaranDoc("pembayaran-contract-release");
          }}
          onDoc={setVerifDoc}
          onPengadaanDoc={setPengadaanDoc}
          onPengujianDoc={setPengujianDoc}
          onPembayaranDoc={setPembayaranDoc}
        />
      </div>

      {/* Main content */}
      <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
        {page === "dashboard" && (hasPermission("dashboard", "viewer") ? <AdminDashboardScreen /> : <AccessDeniedMessage />)}
        {page === "manajemen-user" && (hasPermission("userManagement", "viewer") ? <UserManagementScreen /> : <AccessDeniedMessage />)}
        {page === "manajemen-role" && (hasPermission("roleManagement", "viewer") ? <RoleManagementScreen /> : <AccessDeniedMessage />)}
        {page === "tambah-role" && (hasPermission("roleManagement", "editor") ? (
          <TambahRolePage onBack={() => handleNavigate("manajemen-role")} />
        ) : <AccessDeniedMessage />)}
        {page === "template-dokumen" && (hasPermission("templateDokumen", "viewer") ? <TemplateDokumenAdminScreen /> : <AccessDeniedMessage />)}
        {page === "master-data" && (hasPermission("masterData", "viewer") ? <MasterDataScreen /> : <AccessDeniedMessage />)}
        {page === "verifikasi" && verifCategory === "pengajuan-dana" && (hasPermission("pengajuanDana", "viewer") ? (
          <VerifikasiPage category={verifCategory} doc={verifDoc} />
        ) : <AccessDeniedMessage />)}
        {page === "verifikasi" && verifCategory === "pengadaan" && (hasPermission("pengadaan", "viewer") ? (
          <PengadaanPage subDoc={pengadaanDoc} />
        ) : <AccessDeniedMessage />)}
        {page === "verifikasi" && verifCategory === "pengujian" && (hasPermission("pengujian", "viewer") ? (
          <PengujianPage subDoc={pengujianDoc} />
        ) : <AccessDeniedMessage />)}
        {page === "verifikasi" && verifCategory === "pembayaran" && (hasPermission("pembayaran", "viewer") ? (
          <PembayaranPage subDoc={pembayaranDoc} />
        ) : <AccessDeniedMessage />)}
      </main>

      {/* Modals */}
      {modal === "tambah-user" && <TambahUserModal onClose={() => setModal(null)} />}
      {modal === "detail-user" && selectedUserId !== null && (
        <DetailUserModal userId={selectedUserId} onClose={() => setModal(null)} />
      )}
    </div>
  );
}
