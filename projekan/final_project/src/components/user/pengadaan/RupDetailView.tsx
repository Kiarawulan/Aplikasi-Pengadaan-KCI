import React from 'react';
import { DetailDocumentView, DetailDocumentField } from './DetailDocumentView';

interface RupDetailViewProps {
  item?: any;
  onApprove?: () => void;
  onRevisi?: () => void;
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
  // Original authentic RUP Information fields
  const infoFields: DetailDocumentField[] = [
    { label: "No. Timeline", value: item?.noTimeline || item?.id || 'OPICTI/2022/23' },
    { label: "Procurement Title", value: item?.procurementTitle || item?.judul || item?.nama || 'Pengadaan Outsource IT Helpdesk' },
    { label: "RKAP Value", value: item?.rkapValue || item?.nilaiRkap || item?.nilai || 'Rp. 800.000.000,00' },
    { label: "Department", value: item?.dept || item?.departemen || 'CTIO' },
    { label: "PBJ", value: item?.pbj || 'Non Sarana' },
    { label: "Cost", value: item?.cost || item?.capexOpex || 'OPEX' },
    { label: "Directorate", value: item?.directorate || 'CT' },
    { label: "Division", value: item?.division || 'CTI' },
    { label: "Source of funds :", value: item?.sumberDana || item?.sourceOfFunds || 'RKAP 2023' },
    { label: "Tax type", value: item?.taxType || item?.typeTax || 'Pajak Tidak Dipungut' },
    { label: "Tax Value", value: item?.taxValue || item?.nilaiTax || 'Rp. 0,00' },
    { label: "Start Date Procurement :", value: item?.startDate || item?.targetLogistik || '20 Nov 2023' },
    { label: "End Date Procurement :", value: item?.endDate || item?.perkiraanWaktu || '31 Dec 2023' },
  ];

  return (
    <DetailDocumentView
      title="Detail RUP (Rencana Umum Pengadaan)"
      subtitle={`RUP - ${item?.noTimeline || item?.id || 'OPICTI/2022/23'}`}
      status={item?.status || "Submitted Timeline"}
      infoFields={infoFields}
      files={[]} // RUP does not have file attachments, so no Berkas Pendukung section rendered!
      onBack={onBack}
      onApprove={onApprove}
      onRevisi={onRevisi}
      onReject={onReject}
      showActions={showActions}
    />
  );
};
