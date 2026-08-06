import React from 'react';
import { DetailDocumentView, DetailDocumentField } from './DetailDocumentView';

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

  const catatanNote = item?.catatanAdmin || item?.catatan_admin || d?.catatanAdmin || d?.catatan_admin;

  return (
    <div className="h-full max-h-screen overflow-y-auto p-2">
      {catatanNote && (
        <div className="mb-4 p-3.5 bg-amber-50 border-2 border-amber-400 rounded-xl shadow-xs animate-in fade-in-50">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-[12px] mb-1">
            <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
            Catatan Revisi / Penolakan Admin:
          </div>
          <p className="text-[12px] text-amber-950 font-medium pl-4 bg-white/70 p-2 rounded-md border border-amber-200">
            "{catatanNote}"
          </p>
        </div>
      )}
      <DetailDocumentView
        title="Detail RUP (Rencana Umum Pengadaan)"
        subtitle={`RUP - ${item?.id || item?.noTimeline || ''}`}
        status={item?.status || "Submitted Timeline"}
        infoFields={infoFields}
        files={[]}
        onBack={onBack}
        onApprove={onApprove}
        onRevisi={onRevisi}
        onReject={onReject}
        showActions={showActions}
      />
    </div>
  );
};
