import React, { useState } from 'react';
import { DetailDocumentView, DetailDocumentField, DetailDocumentFile } from '@/components/user/pengadaan/DetailDocumentView';

interface Sp3DetailViewProps {
  item?: any;
  onClose?: () => void;
  onApprove?: () => void;
  onRevisi?: (catatan?: string) => void;
  onReject?: (catatan?: string) => void;
  onBack?: () => void;
  showActions?: boolean;
}

export const Sp3DetailView: React.FC<Sp3DetailViewProps> = ({
  item,
  onApprove,
  onRevisi,
  onReject,
  onBack,
  showActions = true,
}) => {
  const [activeTab, setActiveTab] = useState<'information' | 'evaluasi'>('information');

  // Interactive state for Evaluasi table
  const [evaluasiRows, setEvaluasiRows] = useState([
    {
      no: 1,
      uraian: 'MI Permohonan Pengadaan dari User',
      nomor: item?.miNo || '8/MI/CUGP/KCI/XI/2022',
      tanggal: item?.miDate || '2023-09-18',
      pemenuhan: 'ya',
      keterangan: '',
    },
    {
      no: 2,
      uraian: 'NPD',
      nomor: item?.prNo || '210000002',
      tanggal: item?.prDate || '',
      pemenuhan: null,
      keterangan: '',
    },
    {
      no: 3,
      uraian: 'Permohonan Dana dari User (NPD)',
      nomor: item?.prNo || '210000002',
      tanggal: item?.prDate || '',
      pemenuhan: null,
      keterangan: '',
    },
    {
      no: 4,
      uraian: 'No RAB, Tanggal RAB dan Judul Pengadaan di RAB',
      nomor: item?.rabNo || '105/RAB/COTC/KCI/X/2022',
      tanggal: item?.rabDate || '2023-09-01',
      pemenuhan: null,
      keterangan: '',
    },
    {
      no: 5,
      uraian: 'No Justifikasi, Tanggal Justifikasi dan Judul Pengadaan di Justifikasi',
      nomor: item?.justifikasiNo || '95/JUST/COTC/KCI/X/2022',
      tanggal: item?.justifikasiDate || '2023-09-11',
      pemenuhan: null,
      keterangan: '',
    },
    {
      no: 6,
      uraian: 'No KAK/TOR, Tanggal KAK/TOR dan Judul Pengadaan di KAK/TOR',
      nomor: item?.kakNo || '020/TOR/COTC/KCI/X/2022',
      tanggal: item?.kakDate || '2022-11-14',
      pemenuhan: null,
      keterangan: '',
    },
  ]);

  const handlePemenuhanChange = (index: number, val: 'ya' | 'tidak') => {
    setEvaluasiRows((prev) =>
      prev.map((r, i) => (i === index ? { ...r, pemenuhan: val } : r))
    );
  };

  const handleKeteranganChange = (index: number, text: string) => {
    setEvaluasiRows((prev) =>
      prev.map((r, i) => (i === index ? { ...r, keterangan: text } : r))
    );
  };

  const infoData = {
    nppNo: item?.nppNo || item?.sp3 || item?.id || '6/REN-LOG/KCI/XI/2022',
    title: item?.title || item?.judul || item?.nama || 'Rapat Kinerja dan Evaluasi ASP Semester II',
    rkapValue: item?.rkap || item?.nilaiRkap || 'Rp. 648.303.240,00',
    vendorName: item?.vendor || 'PT Software Nusantara',
    department: item?.dept || item?.departemen || 'COTC',
    division: item?.division || 'COT',
    status: item?.status || 'Submitted SP3',
    taxType: item?.taxType || 'Pajak Dipungut',
    taxValue: item?.tax || item?.nilaiTax || 'Rp. 713.133.564,00',
    tipePemilihan: item?.tipePemilihan || 'Lelang Terbuka',
    rabNo: item?.rabNo || '105/RAB/COTC/KCI/X/2022',
    rabDate: item?.rabDate || '01 Sep 2023',
    kakNo: item?.kakNo || '020/TOR/COTC/KCI/X/2022',
    kakDate: item?.kakDate || '14 Nov 2022',

    prNo: item?.prNo || '210000002',
    prDate: item?.prDate || '2023-09-01',
    justifikasiBrgNo: item?.justifikasiBrgNo || '95/JUST/COTC/KCI/X/2022',
    justifikasiBrgDate: item?.justifikasiBrgDate || '11 Sep 2023',
    miNo: item?.miNo || '8/MI/CUGP/KCI/XI/2022',
    miDate: item?.miDate || '18 Sep 2023',
    miPerihal: item?.miPerihal || 'MI Permohonan Proses Lelang',

    // Files
    filePr: item?.filePr || 'PR-DOC-2022-11-14-04-22-30.pdf',
    fileRab: item?.fileRab || 'PR-RAB-2022-11-14-04-22-30.pdf',
    fileJustifikasiBrg: item?.fileJustifikasiBrg || 'PR-JUSTIFIKASI-BRG-2022.pdf',
    fileKak: item?.fileKak || 'DOC-KAK-2022-11-14-04-22-30.pdf',
    fileMi: item?.fileMi || 'DOC-MI-2022-11-14-04-22-30.pdf',
  };

  const infoFields: DetailDocumentField[] = [
    { label: "No. NPP", value: infoData.nppNo },
    { label: "Procurement Title", value: infoData.title },
    { label: "RKAP Value", value: infoData.rkapValue },
    { label: "Vendor Name", value: infoData.vendorName },
    { label: "Divisi", value: infoData.department },
    { label: "Division", value: infoData.division },
    { label: "Tax Type", value: infoData.taxType },
    { label: "Tax Value", value: infoData.taxValue },
    { label: "Tipe Pemilihan", value: infoData.tipePemilihan },
    { label: "No. RAB", value: infoData.rabNo },
    { label: "RAB Date", value: infoData.rabDate },
    { label: "No KAK", value: infoData.kakNo },
    { label: "Tanggal KAK", value: infoData.kakDate },
    { label: "No PR", value: infoData.prNo },
    { label: "Tanggal PR", value: infoData.prDate },
    { label: "No Justifikasi Kebutuhan Barang", value: infoData.justifikasiBrgNo },
    { label: "Tanggal Justifikasi Kebutuhan Barang", value: infoData.justifikasiBrgDate },
    { label: "No Memo Internal (MI)", value: infoData.miNo },
    { label: "Tanggal MI", value: infoData.miDate },
    { label: "Perihal MI", value: infoData.miPerihal },
  ];

  const files: DetailDocumentFile[] = [
    { label: "Checklist PR / SP3", fileName: infoData.filePr, size: "1.2 MB", isMandatory: true, status: "Selesai" },
    { label: "Dokumen RAB", fileName: infoData.fileRab, size: "2.5 MB", isMandatory: true, status: "Selesai" },
    { label: "Justifikasi Kebutuhan Barang", fileName: infoData.fileJustifikasiBrg, size: "1.9 MB", isMandatory: true, status: "Selesai" },
    { label: "Dokumen KAK / TOR", fileName: infoData.fileKak, size: "1.5 MB", isMandatory: true, status: "Selesai" },
    { label: "Memo Internal (MI)", fileName: infoData.fileMi, size: "1.1 MB", isMandatory: true, status: "Selesai" },
  ];

  const tabsNav = (
    <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
      <button
        type="button"
        onClick={() => setActiveTab('information')}
        className={`px-4 py-2 text-[12.5px] font-bold rounded-lg transition-all cursor-pointer ${
          activeTab === 'information'
            ? 'bg-[#252271] text-white shadow-xs'
            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
        }`}
      >
        Information
      </button>
      <button
        type="button"
        onClick={() => setActiveTab('evaluasi')}
        className={`px-4 py-2 text-[12.5px] font-bold rounded-lg transition-all cursor-pointer ${
          activeTab === 'evaluasi'
            ? 'bg-[#252271] text-white shadow-xs'
            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
        }`}
      >
        Evaluasi
      </button>
    </div>
  );

  if (activeTab === 'evaluasi') {
    return (
      <div className="w-full bg-[#f8fafc] min-h-screen p-6 font-sans">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#252271] text-[18px] font-bold">Detail Berkas Permohonan SP3 - Evaluasi</h2>
        </div>
        {tabsNav}
        <div className="mt-4 bg-white rounded-xl border border-gray-200 p-5 shadow-2xs">
          <table className="w-full text-[11.5px]">
            <thead>
              <tr className="bg-[#252271] text-white font-bold text-left">
                <th className="p-3 w-10 text-center">NO</th>
                <th className="p-3">URAIAN DOKUMEN</th>
                <th className="p-3">NOMOR DOKUMEN</th>
                <th className="p-3 w-28">TANGGAL</th>
                <th className="p-3 w-28 text-center">PEMENUHAN</th>
                <th className="p-3">KETERANGAN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {evaluasiRows.map((row, idx) => (
                <tr key={row.no} className="hover:bg-gray-50/70 transition-colors">
                  <td className="p-3 text-center font-semibold text-gray-600">{row.no}</td>
                  <td className="p-3 font-medium text-gray-800">{row.uraian}</td>
                  <td className="p-3 font-mono text-gray-700">{row.nomor || '-'}</td>
                  <td className="p-3 text-gray-600">{row.tanggal || '-'}</td>
                  <td className="p-3">
                    <div className="flex items-center justify-center gap-3">
                      <label className="flex items-center gap-1 cursor-pointer font-medium text-[11px]">
                        <input
                          type="radio"
                          name={`pemenuhan-${idx}`}
                          checked={row.pemenuhan === 'ya'}
                          onChange={() => handlePemenuhanChange(idx, 'ya')}
                          className="accent-green-600"
                        />
                        <span>Ya</span>
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer font-medium text-[11px]">
                        <input
                          type="radio"
                          name={`pemenuhan-${idx}`}
                          checked={row.pemenuhan === 'tidak'}
                          onChange={() => handlePemenuhanChange(idx, 'tidak')}
                          className="accent-[#cc0000]"
                        />
                        <span>Tidak</span>
                      </label>
                    </div>
                  </td>
                  <td className="p-3">
                    <input
                      type="text"
                      value={row.keterangan}
                      onChange={(e) => handleKeteranganChange(idx, e.target.value)}
                      placeholder="Catatan..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-2 py-1 text-[11px] focus:bg-white focus:border-[#252271] outline-none"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <DetailDocumentView
      title="Detail SP3 (Surat Permohonan Proses Pengadaan)"
      subtitle={`SP3 - ${infoData.nppNo}`}
      status={infoData.status}
      infoFields={infoFields}
      files={files}
      extraTabs={tabsNav}
      onBack={onBack}
      onApprove={onApprove}
      onRevisi={onRevisi}
      onReject={onReject}
      showActions={showActions}
    />
  );
};
