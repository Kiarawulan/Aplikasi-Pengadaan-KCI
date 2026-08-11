import React from 'react';
import { DetailDocumentView, DetailDocumentField, DetailDocumentFile } from '@/components/user/pengadaan/DetailDocumentView';

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

  // Authentic NPP fields
  const infoFields: DetailDocumentField[] = [
    { label: "No. NPP", value: item?.noNpp || item?.id || 'NPP-2024-001' },
    { label: "Procurement Title", value: nppFd?.judulPermohonan || item?.procTitle || item?.judul || item?.nama || 'Pengadaan Lisensi OS Server' },
    { label: "Vendor Name", value: nppFd?.vendor || item?.vendorName || item?.vendor || 'PT Software Nusantara' },
    { label: "Nilai PR", value: nppFd?.nilaiPr ? (String(nppFd.nilaiPr).startsWith("Rp") ? nppFd.nilaiPr : `Rp ${Number(nppFd.nilaiPr).toLocaleString("id-ID")}`) : (item?.prVal || item?.rkap || item?.nilai || 'Rp 150.000.000') },
    { label: "Divisi", value: nppFd?.subUnit || nppFd?.divisi || item?.dept || item?.divisi || item?.departemen || 'CTIT' },
    { label: "Kode COA", value: nppFd?.coa || item?.coa || '5211101' },
    { label: "Jenis Barang", value: nppFd?.jenisBarang || item?.jenisBarang || item?.kategori || 'IT Software' },
    { label: "Kurs", value: nppFd?.kurs || item?.kurs || 'IDR' },
    { label: "Realisasi", value: nppFd?.realisasi === "true" ? "Timeline" : (nppFd?.realisasi || item?.realisasi || item?.realisation || 'Timeline') },
    { label: "Metode", value: nppFd?.metode || item?.metode || 'Pengadaan Langsung' },
    { label: "Keterangan", value: nppFd?.keterangan || item?.keterangan || '—' },
  ];

  // Authentic NPP document attachments
  const files: DetailDocumentFile[] = [];

  return (
    <DetailDocumentView
      title="Detail NPP (Nota Permohonan Pengadaan)"
      subtitle={`NPP - ${item?.noNpp || item?.id || 'NPP-2024-001'}`}
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
