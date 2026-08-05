// ─── User App Screens ────────────────────────────────────────────────────────
export type Screen =
  | "dashboard"
  | "rup-list"
  | "daftar-pengadaan"
  | "pd-detail"
  | "pr-detail"
  | "template-dokumen"
  | "profile"
  | "purchase-requisition"
  | "daftar-pengujian"
  | "pembayaran-outsource"
  | "pembayaran-non-outsource"
  | "pembayaran-payment-request"
  | "pembayaran-umd";

// ─── Admin App Screens ────────────────────────────────────────────────────────
export type AdminScreen =
  | "admin-dashboard"
  | "user-management"
  | "role-management"
  | "verif-pengajuan-dana"
  | "verif-pengadaan"
  | "verif-pengujian"
  | "verif-pembayaran"
  | "template-dokumen-admin"
  | "master-data";

// ─── Pengadaan Steps ─────────────────────────────────────────────────────────
export type ParkStep =
  | "npp"
  | "pengajuan-dana"
  | "sp3"
  | "pbj"
  | "contract"
  | "pengujian"
  | "pembayaran";

export interface PengadaanItem {
  id: string;
  nama: string;
  departemen: string;
  nominal: string;
  tanggal: string;
  status: string;
  currentStep: ParkStep;
  completedSteps: ParkStep[];
  createdBy?: string; // user id who created this
  verificationStatus?: Record<string, VerifStatus>; // stepId → status
  revisiNote?: Record<string, string>; // stepId → note from admin
  formData?: Record<string, any>; // Add form data mapping
}

export type VerifStatus = "pending" | "approved" | "revisi" | "rejected";

export interface SubStep { id: string; label: string; }
export interface MainStep { id: ParkStep; label: string; subSteps: SubStep[]; }

// ─── Permission & Role ────────────────────────────────────────────────────────
export type AccessLevel = "editor" | "viewer" | "no-access";

export interface RolePermissions {
  pengajuanDana: AccessLevel;
  pengadaan: AccessLevel;
  pengujian: AccessLevel;
  pembayaran: AccessLevel;
  templateDokumen: AccessLevel;
  masterData: AccessLevel;
  userManagement: AccessLevel;
  roleManagement: AccessLevel;
  dashboard: AccessLevel;
}

export interface AppRole {
  id: string;
  name: string;
  description: string;
  roleType: "admin" | "user"; // "admin" = Has access to Admin Website, "user" = Normal User Website
  permissions: RolePermissions;
  createdAt: string;
  isSystem: boolean; // system roles (Admin, User) can't be deleted
  color: string; // badge color
  active?: boolean;
  userCount?: number;
  updatedAt?: string;
}

// ─── User ─────────────────────────────────────────────────────────────────────
export interface AppUser {
  id: string;
  username?: string;
  email: string;
  name: string;
  password: string; // plain text for demo (localStorage)
  roleId: string;
  departemen: string;
  isActive: boolean;
  isAdmin: boolean;
  accountType?: "admin" | "user";
  createdAt: string;
  updatedAt?: string;
  lastLogin?: string;
  mustResetPassword?: boolean;
}

// ─── Auth Context ─────────────────────────────────────────────────────────────
export interface AuthContextType {
  currentUser: AppUser | null;
  currentRole: AppRole | null;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  hasPermission: (module: keyof RolePermissions, level: AccessLevel) => boolean;
}

// ─── Vendor (Master Data) ─────────────────────────────────────────────────────
export interface Vendor {
  id: string;
  nama: string;
  npwp: string;
  alamat: string;
  kontakPerson: string;
  telepon: string;
  email: string;
  kategori: string;
  status: "aktif" | "blacklist" | "non-aktif";
  createdAt: string;
}

// ─── Harga Satuan ─────────────────────────────────────────────────────────────
export interface HargaSatuan {
  id: string;
  namaBarang: string;
  satuan: string;
  harga: number;
  kategori: string;
  tahun: string;
  updatedAt: string;
}

// ─── Template Dokumen ─────────────────────────────────────────────────────────
export interface TemplateDokumen {
  id: string;
  nama: string;
  kategori: string;
  tipe: string;
  ukuran: string;
  deskripsi: string;
  uploadedBy: string;
  uploadedAt: string;
}

// ─── RUP ──────────────────────────────────────────────────────────────────────
export interface RupItem {
  id: string;
  nama: string;
  jenis: string;
  metode: string;
  nilai: string;
  status: VerifStatus | "draft";
  progress: string;
  departemen: string;
  createdBy: string;
  createdAt: string;
  pilihanRup?: string;
  namaPaket?: string;
  opexCapex?: string;
  uraian?: string;
  kategoriAnggaran?: string;
  tahunAnggaran?: string;
  tahunRup?: string;
  tipeKontrak?: string;
  pbj?: string;
  nilaiSebelumPajak?: string;
  rkip?: string;
  tipePajak?: string;
  nilaiTax?: string;
  targetLogistik?: string;
  perkiraanWaktu?: string;
  lokasi?: string;
  volume?: string;
  penyesuaian?: string;
  catatanAdmin?: string;
}

// ─── Verification Records ─────────────────────────────────────────────────────
export interface VerifRecord {
  id: string;
  pengadaanId: string;
  pengadaanNama: string;
  departemen: string;
  nominal: string;
  tipe: string; // 'park-dokumen' | 'purchase-requisition' | 'timeline' | dll
  submitBy: string;
  submitAt: string;
  status: VerifStatus;
  catatanAdmin?: string;
  verifiedBy?: string;
  verifiedAt?: string;
}
