import React from 'react';
import { DetailDocumentView, DetailDocumentField } from '@/components/user/pengadaan/DetailDocumentView';

interface RupDetailViewProps {
  item?: any;
  onApprove?: () => void;
  onRevisi?: (catatan?: string) => void;
  onReject?: () => void;
  onBack?: () => void;
  showActions?: boolean;
}

export const RupDetailView: React.FC<RupDetailViewProps> = ({
  item,
  onApprove,
  onRevisi,
  onReject,
  onBack,
  showActions = true,
}) => {
  const d = item?.details || item || {};

  const infoFields: DetailDocumentField[] = [
    { label: "No. Timeline", value: item?.noTimeline || item?.id || '-' },
    { label: "Procurement Title", value: d.namaPaket || item?.procurementTitle || item?.judul || item?.nama || '-' },
    { label: "RKAP Value", value: d.nilaiSebelumPajak || item?.rkapValue || item?.nilaiRkap || item?.nilai || '-' },
    { label: "Divisi", value: d.departemen || item?.dept || item?.departemen || '-' },
    { label: "PBJ", value: d.pbj || item?.pbj || '-' },
    { label: "Cost", value: d.opexCapex || item?.cost || item?.capexOpex || item?.opex || '-' },
    { label: "Directorate", value: item?.directorate || item?.direktorat || '-' },
    { label: "Division", value: item?.division || item?.divisi || item?.departemen || '-' },
    { label: "Source of funds :", value: d.sumberDana || d.kategoriAnggaran || item?.sumberDana || item?.sourceOfFunds || '-' },
    { label: "Tax type", value: d.tipePajak || item?.taxType || item?.typeTax || '-' },
    { label: "Tax Value", value: d.nilaiTax || item?.taxValue || item?.nilaiTax || '-' },
    { label: "Start Date Procurement :", value: d.targetLogistik || item?.startDate || item?.targetLogistik || '-' },
    { label: "End Date Procurement :", value: d.perkiraanWaktu || item?.endDate || item?.perkiraanWaktu || '-' },
  ];

  return (
    <div>
      {(item?.catatanAdmin || item?.catatan_admin) && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-300 rounded-lg">
          <p className="text-[12px] font-bold text-amber-800">Catatan Admin:</p>
          <p className="text-[12px] text-amber-900">{item.catatanAdmin || item.catatan_admin}</p>
        </div>
      )}
      <DetailDocumentView
        title="Detail RUP (Rencana Umum Pengadaan)"
        subtitle={`RUP - ${item?.id || item?.noTimeline || ''}`}
        status={item?.status || "Submitted Timeline"}
        infoFields={infoFields}
        files={[]}
        pengadaanId={item?.pengadaan_id || item?.pengadaanId || item?.id}
        onBack={onBack}
        onApprove={onApprove}
        onRevisi={onRevisi}
        onReject={onReject}
        showActions={showActions}
      />
    </div>
  );
};
