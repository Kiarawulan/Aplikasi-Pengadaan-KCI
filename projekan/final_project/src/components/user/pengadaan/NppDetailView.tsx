import React from 'react';
import { DetailDocumentView, DetailDocumentField, DetailDocumentFile } from './DetailDocumentView';

interface NppDetailViewProps {
  item?: any;
  onApprove?: () => void;
  onRevisi?: () => void;
  onReject?: () => void;
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
    { label: "No. NPP", value: item?.noNpp || item?.id || '-' },
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
  const files: DetailDocumentFile[] = [
    { label: "Lampiran Dokumen PR", fileName: item?.filePr || "PR-DOC-2024-001.pdf", size: "1.2 MB", isMandatory: true, status: "Selesai" },
    { label: "Lampiran Dokumen RAB", fileName: item?.fileRab || "RAB-DOC-2024-001.pdf", size: "2.5 MB", isMandatory: true, status: "Selesai" },
    { label: "Lampiran Dokumen KAK / MI", fileName: item?.fileMi || "DOC-MI-2024-001.pdf", size: "1.8 MB", isMandatory: true, status: "Selesai" },
  ];

  return (
    <DetailDocumentView
      title="Detail NPP (Nota Permohonan Pengadaan)"
      subtitle={`NPP - ${item?.noNpp || item?.id || 'NPP-2024-001'}`}
      status={item?.status || "Submitted"}
      infoFields={infoFields}
      files={files}
      onBack={onBack}
      onApprove={onApprove}
      onRevisi={onRevisi}
      onReject={onReject}
      showActions={showActions}
    />
  );
};
