import React, { useEffect, useState } from 'react';
import { Save } from 'lucide-react';
import { DetailDocumentView, DetailDocumentField, DetailDocumentFile } from '@/components/user/pengadaan/DetailDocumentView';
import { api } from '@/services/api';
import { showFeedback } from '@/components/common/GlobalFeedback';

interface NppDetailViewProps {
  item?: any;
  onApprove?: () => void;
  onRevisi?: (catatan?: string) => void;
  onReject?: (catatan?: string) => void;
  onBack?: () => void;
  showActions?: boolean;
}

export const NppDetailView: React.FC<NppDetailViewProps> = ({
  item,
  onApprove,
  onRevisi,
  onReject,
  onBack,
  showActions = true,
}) => {
  const fd = item?.formData ? (typeof item.formData === 'string' ? JSON.parse(item.formData) : item.formData) : {};
  const nppFd = fd['buat-npp'] || fd['npp'] || fd;
  const [noNpp, setNoNpp] = useState(item?.noNpp || item?.no_npp || "");
  const [savingNumber, setSavingNumber] = useState(false);
  const pengadaanId = item?.pengadaan_id || item?.pengadaanId || item?.id;
  useEffect(() => setNoNpp(item?.noNpp || item?.no_npp || ""), [item?.id, item?.noNpp, item?.no_npp]);

  const saveNppNumber = async () => {
    if (!pengadaanId) return showFeedback("Data pengadaan tidak ditemukan. Muat ulang data lalu coba kembali.", "Gagal Menyimpan", "error");
    if (!noNpp.trim()) return showFeedback("No. NPP wajib diisi sebelum dirilis.", "Data Belum Lengkap", "error");
    setSavingNumber(true);
    try {
      await api.post(`/pengadaan/${pengadaanId}/release-npp-number`, { no_npp: noNpp.trim() });
      showFeedback("No. NPP berhasil dirilis dan tersedia untuk form pengadaan berikutnya.", "No. NPP Tersimpan", "success");
    } catch (error: any) {
      showFeedback(error?.response?.data?.message || "No. NPP gagal disimpan.", "Gagal Menyimpan", "error");
    } finally {
      setSavingNumber(false);
    }
  };

  // Authentic NPP fields
  const infoFields: DetailDocumentField[] = [
    { label: "No. NPP", value: (
      <div className="flex items-center gap-2">
        <input value={noNpp} onChange={event => setNoNpp(event.target.value)} placeholder="Masukkan No. NPP" className="h-8 min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 text-[11.5px] font-semibold text-slate-700 outline-none focus:border-[#252271] focus:ring-2 focus:ring-[#252271]/10" />
        <button type="button" onClick={saveNppNumber} disabled={savingNumber} className="flex h-8 shrink-0 items-center gap-1.5 rounded-lg bg-[#252271] px-3 text-[10.5px] font-bold text-white hover:bg-[#1b1854] disabled:opacity-50"><Save size={11} />{savingNumber ? "Menyimpan..." : "Simpan & Rilis"}</button>
      </div>
    ) },
    { label: "Procurement Title", value: nppFd?.judulPermohonan || item?.procTitle || item?.judul || item?.nama || '-' },
    { label: "Vendor Name", value: nppFd?.vendor || item?.vendorName || item?.vendor || '-' },
    { label: "Nilai PR", value: nppFd?.nilaiPr ? (String(nppFd.nilaiPr).startsWith("Rp") ? nppFd.nilaiPr : `Rp ${Number(nppFd.nilaiPr).toLocaleString("id-ID")}`) : (item?.prVal || item?.rkap || item?.nilai || '-') },
    { label: "Divisi", value: nppFd?.subUnit || nppFd?.divisi || item?.dept || item?.divisi || item?.departemen || '-' },
    { label: "Kode COA", value: nppFd?.coa || item?.coa || '-' },
    { label: "Jenis Barang", value: nppFd?.jenisBarang || item?.jenisBarang || item?.kategori || '-' },
    { label: "Kurs", value: nppFd?.kurs || item?.kurs || '-' },
    { label: "Realisasi", value: nppFd?.realisasi === "true" ? "Timeline" : (nppFd?.realisasi || item?.realisasi || item?.realisation || '-') },
    { label: "Metode", value: nppFd?.metode || item?.metode || '-' },
    { label: "Keterangan", value: nppFd?.keterangan || item?.keterangan || '—' },
  ];

  // Authentic NPP document attachments
  const files: DetailDocumentFile[] = [];

  return (
    <DetailDocumentView
      title="Detail NPP (Nota Permohonan Pengadaan)"
      subtitle={`NPP - ${noNpp || 'Belum dirilis'}`}
      status={item?.status || "Submitted"}
      infoFields={infoFields}
      files={files}
      pengadaanId={item?.pengadaan_id || item?.pengadaanId || item?.id}
      onBack={onBack}
      onApprove={onApprove}
      onRevisi={onRevisi}
      onReject={onReject}
      showActions={showActions}
      adminActions
    />
  );
};
