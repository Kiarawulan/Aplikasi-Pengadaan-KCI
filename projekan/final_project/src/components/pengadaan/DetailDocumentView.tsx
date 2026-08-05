import React, { useState } from 'react';
import { ArrowLeft, Check, Edit3, X, FileText, Download } from 'lucide-react';

export interface DetailDocumentField {
  label: string;
  value: string | React.ReactNode;
  colSpan?: string;
}

export interface DetailDocumentFile {
  label: string;
  fileName: string;
  size?: string;
  isMandatory?: boolean;
  status?: 'Selesai' | 'Belum Upload' | string;
}

export interface DetailDocumentTracking {
  action: string;
  timestamp: string;
}

export interface DetailDocumentViewProps {
  title?: string;
  subtitle?: string;
  status?: string;
  infoTitle?: string;
  infoFields: DetailDocumentField[];
  files?: DetailDocumentFile[];
  tracking?: DetailDocumentTracking[];
  onBack?: () => void;
  onApprove?: () => void;
  onRevisi?: (catatan?: string) => void;
  onReject?: () => void;
  showActions?: boolean;
  extraTabs?: React.ReactNode;
}

export const DetailDocumentView: React.FC<DetailDocumentViewProps> = ({
  title = "Detail Berkas Permohonan",
  subtitle = "Permohonan Pengadaan",
  status = "Menunggu Verifikasi",
  infoTitle = "Informasi Permohonan",
  infoFields,
  files = [],
  tracking = [],
  onBack,
  onApprove,
  onRevisi,
  onReject,
  showActions = true,
  extraTabs,
}) => {
  const [showRevisionBox, setShowRevisionBox] = useState(false);
  const [revisionNote, setRevisionNote] = useState("");

  const defaultTracking: DetailDocumentTracking[] = tracking.length > 0 ? tracking : [
    { action: "USER MELAKUKAN UPDATE PERMINTAAN NPD", timestamp: "13-JAN-2024 14:00:41" },
    { action: "USER MELAKUKAN UPDATE PERMINTAAN NPD", timestamp: "12-JAN-2024 16:00:18" },
    { action: "USER MELAKUKAN PEMBUATAN PERMINTAAN NPD", timestamp: "12-JAN-2024 10:24:52" },
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-gray-800 font-sans min-h-screen p-6">
      
      {/* ─── Top Header Bar ─── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
            >
              <ArrowLeft size={16} />
            </button>
          )}
          <div>
            <h2 className="text-[#252271] text-[18px] font-bold tracking-tight">{title}</h2>
            <p className="text-[#94a3b8] text-[12px] font-medium">{subtitle}</p>
          </div>
        </div>

        {/* Header Right Action Buttons & Status Badge */}
        {showActions && (
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Status Badge */}
            <span className="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#b45309] text-[11.5px] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              {status}
            </span>

            {/* Revisi Button */}
            <button
              type="button"
              onClick={() => setShowRevisionBox(!showRevisionBox)}
              className="px-3.5 py-1.5 rounded-lg border border-amber-500 bg-amber-50/60 text-[#d97706] hover:bg-amber-100 text-[12px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Edit3 size={14} />
              Revisi
            </button>

            {/* Reject Button (Optional) */}
            {onReject && (
              <button
                type="button"
                onClick={onReject}
                className="px-3.5 py-1.5 rounded-lg border border-red-300 bg-red-50 text-[#dc2626] hover:bg-red-100 text-[12px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <X size={14} />
                Tolak
              </button>
            )}

            {/* Approve Button */}
            <button
              type="button"
              onClick={onApprove}
              className="px-4 py-1.5 rounded-lg bg-[#16a34a] hover:bg-[#15803d] text-white text-[12px] font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer active:scale-95"
            >
              <Check size={15} />
              Verifikasi &amp; Setujui
            </button>
          </div>
        )}
      </div>

      {/* Catatan Revisi Textarea Drawer */}
      {showRevisionBox && (
        <div className="mb-6 bg-amber-50/90 border border-amber-300 rounded-xl p-4 animate-in fade-in-0 duration-150">
          <p className="text-[#92400e] text-[12px] font-bold mb-1.5 flex items-center gap-1.5">
            <Edit3 size={14} className="text-[#b45309]" />
            Tuliskan Catatan Revisi Dokumen Ini:
          </p>
          <textarea
            value={revisionNote}
            onChange={(e) => setRevisionNote(e.target.value)}
            placeholder="Tuliskan catatan perbaikan atau alasan revisi di sini..."
            className="w-full h-[70px] bg-white border border-amber-300 rounded-lg p-2.5 text-[12px] text-gray-800 focus:border-[#252271] outline-none mb-2.5"
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setShowRevisionBox(false)}
              className="px-3 py-1.5 bg-white border border-gray-300 text-gray-600 rounded-lg text-[11px] font-semibold hover:bg-gray-50 cursor-pointer"
            >
              Batal
            </button>
            <button
              onClick={() => {
                if (!revisionNote.trim()) { alert("Harap isi catatan revisi."); return; }
                if (onRevisi) onRevisi(revisionNote);
                alert("Catatan revisi berhasil dikirim!");
                setShowRevisionBox(false);
                setRevisionNote("");
              }}
              className="px-3.5 py-1.5 bg-[#d97706] text-white rounded-lg text-[11px] font-bold hover:bg-[#b45309] cursor-pointer"
            >
              Kirim Revisi
            </button>
          </div>
        </div>
      )}

      {extraTabs && <div className="mb-6">{extraTabs}</div>}

      {/* ─── SECTION 1: Informasi Permohonan (Single Card Box with 2-Column Key-Value List) ─── */}
      <div className="mb-6">
        <h3 className="text-[#64748b] text-[13px] font-bold mb-3">{infoTitle}</h3>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3.5 text-[12px]">
            {infoFields.map((field, idx) => (
              <div key={idx} className="flex items-start justify-between py-1 border-b border-gray-100 last:border-0">
                <span className="text-[#64748b] font-semibold w-1/3 shrink-0">{field.label}</span>
                <span className="text-gray-400 font-bold px-1.5">:</span>
                <span className="text-[#1e2939] font-bold w-2/3 break-words">
                  {typeof field.value === 'string' ? (field.value || '-') : field.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SECTION 2: Berkas Pendukung (Only rendered if files exist) ─── */}
      {files && files.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#64748b] text-[13px] font-bold">Berkas Pendukung</h3>
            <span className="text-[#94a3b8] text-[11px] font-medium">* Dokumen Wajib / Mandatory</span>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-2xs space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {files.map((file, idx) => {
                const isDone = file.status === 'Selesai' || !file.status;
                return (
                  <div
                    key={idx}
                    className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-3.5 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#252271] shrink-0">
                        <FileText size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[#1e2939] text-[12px] font-bold truncate">
                          {file.label} {file.isMandatory && <span className="text-red-500">*</span>}
                        </p>
                        <p className="text-[#94a3b8] text-[10.5px] truncate">
                          {file.fileName} {file.size ? `(${file.size})` : ''}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {isDone ? (
                        <>
                          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded text-[10px] font-bold">
                            Selesai
                          </span>
                          <button
                            type="button"
                            onClick={() => alert(`Mendownload ${file.fileName}`)}
                            className="px-3 py-1 bg-[#252271] hover:bg-[#1a1753] text-white text-[11px] font-bold rounded-md flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <Download size={11} />
                            Unduh
                          </button>
                        </>
                      ) : (
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-500 text-[10.5px] font-medium rounded-md">
                          Belum Upload
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ─── SECTION 3: Riwayat Tracking Permohonan ─── */}
      <div>
        <h3 className="text-[#64748b] text-[13px] font-bold mb-3">Riwayat Tracking Permohonan</h3>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-2xs space-y-2.5">
          {defaultTracking.map((track, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg px-4 py-3 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#252271] shrink-0" />
              <div className="min-w-0">
                <p className="text-[#1e2939] text-[11px] font-bold tracking-wide uppercase">
                  {track.action}
                </p>
                <p className="text-[#94a3b8] text-[10px] font-medium mt-0.5">
                  {track.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
