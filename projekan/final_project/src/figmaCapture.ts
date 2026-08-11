import type { PengadaanItem, Screen } from "./types";

export type FigmaCaptureConfig = {
  name?: string;
  role?: "admin" | "user";
  userScreen?: Screen;
  selectedItem?: PengadaanItem;
  sidebarCollapsed?: boolean;
  adminPage?: "dashboard" | "manajemen-user" | "manajemen-role" | "tambah-role" | "verifikasi" | "template-dokumen" | "master-data";
  verifCategory?: "pengajuan-dana" | "pengadaan" | "pengujian" | "pembayaran";
  verifDoc?: "park-document" | "purchase-requisition";
  pengadaanDoc?: string;
  pengujianDoc?: string;
  pembayaranDoc?: string;
  dashboardTab?: "pengajuan-dana" | "pengujian" | "pengadaan" | "pembayaran";
  masterTab?: string;
  templateTab?: "Pengadaan" | "Pengajuan Dana" | "Pengujian" | "Pembayaran";
  loginError?: string;
};

declare global {
  interface Window {
    __FIGMA_CAPTURE__?: FigmaCaptureConfig;
  }
}

export function getFigmaCaptureConfig(): FigmaCaptureConfig | null {
  return typeof window !== "undefined" ? window.__FIGMA_CAPTURE__ || null : null;
}
