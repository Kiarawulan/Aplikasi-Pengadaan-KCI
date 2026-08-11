import React, { useState } from 'react';
import { DetailDocumentView, DetailDocumentField, DetailDocumentFile } from '@/components/user/pengadaan/DetailDocumentView';
import { FileUploadInput } from '@/components/common/FileUploadInput';

interface PengujianDetailViewProps {
  item?: any;
  onApprove?: () => void;
  onRevisi?: (catatan?: string) => void;
  onReject?: (catatan?: string) => void;
  onBack?: () => void;
  showActions?: boolean;
}

export const PengujianDetailView: React.FC<PengujianDetailViewProps> = ({
  item,
  onApprove,
  onRevisi,
  onReject,
  onBack,
  showActions = true,
}) => {
  const [activeTab, setActiveTab] = useState<'informasi' | 'checklist'>('informasi');
  const [bahpFile, setBahpFile] = useState("");

  // Interactive Checklist rows state
  const [checklistRows, setChecklistRows] = useState([
    { id: 1, item: "Surat Permohonan Pengujian & Dokumentasi MI", status: "Lengkap", note: "Dokumen telah diverifikasi" },
    { id: 2, item: "Spesifikasi Teknis (KAK) & Gambar Kerja", status: "Lengkap", note: "Sesuai standar KCI" },
    { id: 3, item: "Berita Acara Hasil Pengujian (BAHP)", status: "Pending", note: "Menunggu pelaksanaan fisik" },
    { id: 4, item: "Sertifikat Garansi & Jamlak", status: "Lengkap", note: "Bank Mandiri BG-2024" },
    { id: 5, item: "Uji Fungsi & Trial Run CCTV Analytics", status: "Proses", note: "Dalam tahap pengujian" },
  ]);

  const toggleChecklist = (id: number) => {
    setChecklistRows(prev =>
      prev.map(r => (r.id === id ? { ...r, status: r.status === "Lengkap" ? "Pending" : "Lengkap" } : r))
    );
  };

  // Extract authentic fields from the Pengujian screenshot
  const infoFields: DetailDocumentField[] = [
    { label: "Nomor Kontrak", value: item?.nomorKontrak || item?.noSp3 || item?.id || '221/REN-LOG/KCI/X/2022' },
    { label: "Tanggal SPR", value: item?.tanggalSpr || '13 Sep 2023' },
    { label: "Total Hari MPPL", value: item?.totalHariMppl || '-' },
    { label: "Start Date MPPL", value: item?.startDateMppl || '-' },
    { label: "No PR", value: item?.noPr || '-' },
    { label: "No Jamlak", value: item?.noJamlak || '-' },
    { label: "Nomor Contract", value: item?.nomorContract || '-' },
    { label: "Tanggal Contract", value: item?.tanggalContract || '-' },
    { label: "Judul Pengadaan", value: item?.judulPengadaan || item?.judul || item?.nama || 'Pengadaan CCTV Analytics' },
    { label: "Vendor Name", value: item?.vendorName || item?.vendor || '-' },
    { label: "Metode", value: item?.metode || 'Tender Terbuka' },
    { label: "Jenis Barang", value: item?.jenisBarang || 'Non-Import' },
    { label: "Nilai Kontrak", value: item?.nilaiKontrak || item?.nilai || 'Rp. 450,000,000.00' },
    { label: "Status Kontrak", value: item?.statusKontrak || '-' },
    { label: "No KAK", value: item?.noKak || 'NO/KAK/IP003' },
    { label: "Tanggal KAK", value: item?.tanggalKak || '-' },
    { label: "Tanggal Permohonan Pengujian", value: item?.tanggalPermohonanPengujian || '2023-10-27 08:51:34' },
    { label: "Nomor MI Pengujian", value: item?.nomorMiPengujian || 'NO/MI/IP003' },
    { label: "PIC Penguji", value: item?.picPenguji || 'Organization Planning and Development Manager', colSpan: 'col-span-2' },
    { label: "Catatan Hasil Pengujian", value: item?.catatanHasilPengujian || '-' },
    { label: "Nomor Dokumen Pengujian", value: item?.nomorDokumenPengujian || '-' },
    { label: "Tanggal Pengujian", value: item?.tanggalPengujian || 'Belum ada tanggal pengujian' },
  ];

  // Authentic document files from the Pengujian screenshot
  const files: DetailDocumentFile[] = [];

  const tabsNav = (
    <div className="flex flex-col gap-3 border-b border-gray-200 pb-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('informasi')}
          className={`px-4 py-2 text-[12.5px] font-bold rounded-lg transition-all cursor-pointer ${
            activeTab === 'informasi'
              ? 'bg-[#252271] text-white shadow-xs'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          Informasi Pengujian
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('checklist')}
          className={`px-4 py-2 text-[12.5px] font-bold rounded-lg transition-all cursor-pointer ${
            activeTab === 'checklist'
              ? 'bg-[#252271] text-white shadow-xs'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          Checklist
        </button>
      </div>

      <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3.5 mt-1">
        <p className="text-[12px] font-bold text-[#252271] mb-1.5 flex items-center gap-1.5">
          <span>📄</span> Upload Surat BAHP Signed (Admin)
        </p>
        <FileUploadInput
          label="Dokumen Surat BAHP Signed"
          required
          pengadaanId={item?.pengadaan_id || item?.pengadaanId || item?.id}
          stage="bahp-signed"
          value={bahpFile}
          onChange={(v) => setBahpFile(v)}
          adminStyle
        />
      </div>
    </div>
  );

  if (activeTab === 'checklist') {
    return (
      <div className="w-full bg-[#f8fafc] min-h-screen p-6 font-sans">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#252271] text-[18px] font-bold">Detail Berkas Permohonan Pengujian - Checklist</h2>
        </div>
        {tabsNav}
        <div className="mt-4 bg-white rounded-xl border border-gray-200 p-5 shadow-2xs">
          <table className="w-full text-[11.5px]">
            <thead>
              <tr className="bg-[#252271] text-white font-bold text-left">
                <th className="p-3 w-12 text-center">NO</th>
                <th className="p-3">ITEM DOKUMEN / KELENGKAPAN</th>
                <th className="p-3 w-32 text-center">STATUS</th>
                <th className="p-3">CATATAN PENGUJI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {checklistRows.map((r, idx) => (
                <tr key={r.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="p-3 text-center font-bold text-gray-500">{idx + 1}</td>
                  <td className="p-3 font-semibold text-gray-800">{r.item}</td>
                  <td className="p-3 text-center">
                    <button
                      type="button"
                      onClick={() => toggleChecklist(r.id)}
                      className={`px-3 py-1 rounded-full text-[10.5px] font-bold transition-all cursor-pointer ${
                        r.status === 'Lengkap'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : r.status === 'Proses'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {r.status}
                    </button>
                  </td>
                  <td className="p-3 text-gray-600 font-medium">{r.note}</td>
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
      title="Detail Berkas Permohonan Pengujian"
      subtitle={`Pengujian - ${item?.nomorKontrak || item?.noSp3 || item?.id || '221/REN-LOG/KCI/X/2022'}`}
      status={item?.statusPengujian || item?.status || "Request Pengujian"}
      infoFields={infoFields}
      files={files}
      pengadaanId={item?.pengadaan_id || item?.pengadaanId || item?.id}
      extraTabs={tabsNav}
      onBack={onBack}
      onApprove={onApprove}
      onRevisi={onRevisi}
      onReject={onReject}
      showActions={showActions}
      adminActions
    />
  );
};
