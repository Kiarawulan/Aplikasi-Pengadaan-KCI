import type { ParkStep, MainStep } from "../types";

export const PARK_STEPS: { id: ParkStep; label: string }[] = [
  { id: "npp", label: "NPP" },
  { id: "pengajuan-dana", label: "Pengajuan Dana" },
  { id: "sp3", label: "SP3" },
  { id: "pbj", label: "PBJ" },
  { id: "contract", label: "Contract" },
  { id: "pengujian", label: "Pengujian" },
  { id: "pembayaran", label: "Pembayaran" },
];

export const PD_MAIN_STEPS: MainStep[] = [
  {
    id: "pengajuan-dana",
    label: "Pengajuan Dana",
    subSteps: [
      { id: "buat-pd", label: "Buat Park Document" },
      { id: "detail-pd", label: "Detail Park Document" },
    ],
  },
  {
    id: "pembayaran",
    label: "Pembayaran",
    subSteps: [
      { id: "payment-request", label: "Payment Request" },
      { id: "nota-dokumen", label: "Nota Dokumen" },
      { id: "dokumen-tutupan", label: "Dokumen Tutupan" },
      { id: "pengembalian-dana", label: "Pengembalian Dana" },
    ],
  },
];

export const PR_MAIN_STEPS: MainStep[] = [
  { id: "npp", label: "NPP", subSteps: [{ id: "buat-npp", label: "Buat NPP" }, { id: "detail-npp", label: "Detail NPP" }] },
  { id: "pengajuan-dana", label: "Pengajuan Dana", subSteps: [{ id: "buat-pr", label: "Buat Purchase Requisition" }, { id: "detail-pr", label: "Detail Purchase Requisition" }] },
  { id: "sp3", label: "SP3", subSteps: [] },
  { id: "pbj", label: "PBJ", subSteps: [] },
  { id: "contract", label: "Contract", subSteps: [] },
  { id: "pengujian", label: "Pengujian", subSteps: [{ id: "request-pengujian", label: "Request Pengujian" }, { id: "proses-pengujian", label: "Proses Pengujian" }, { id: "bahp", label: "Berita Acara Hasil Pengujian" }] },
  { id: "pembayaran", label: "Pembayaran", subSteps: [{ id: "pelunasan", label: "Pelunasan" }, { id: "payment-request", label: "Payment Request" }, { id: "proses-selesai", label: "Proses Selesai" }] },
];
