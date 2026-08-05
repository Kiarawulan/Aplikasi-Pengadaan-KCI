import React from 'react';
import { DetailDocumentView, DetailDocumentField, DetailDocumentFile } from '@/components/user/pengadaan/DetailDocumentView';

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
  // Authentic NPP fields
  const infoFields: DetailDocumentField[] = [
    { label: "No. NPP", value: item?.noNpp || item?.id || 'NPP-2024-001' },
    { label: "Procurement Title", value: item?.procTitle || item?.judul || item?.nama || 'Pengadaan Lisensi OS Server' },
    { label: "Vendor Name", value: item?.vendorName || item?.vendor || 'PT Software Nusantara' },
    { label: "Nilai PR", value: item?.prVal || item?.rkap || item?.nilai || 'Rp. 150.000.000,00' },
    { label: "Department", value: item?.dept || item?.divisi || item?.departemen || 'CTIT' },
    { label: "Kode COA", value: item?.coa || '5211101' },
    { label: "Jenis Barang", value: item?.jenisBarang || item?.kategori || 'IT Software' },
    { label: "Kurs", value: item?.kurs || 'IDR' },
    { label: "Realisasi", value: item?.realisasi || item?.realisation || 'Timeline' },
    { label: "Tax", value: item?.tax || item?.taxValue || 'Rp. 16.500.000,00' },
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
