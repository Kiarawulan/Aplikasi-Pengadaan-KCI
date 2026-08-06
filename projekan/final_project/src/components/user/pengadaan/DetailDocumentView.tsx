import React, { useEffect, useState } from 'react';
import { ArrowLeft, Check, Edit3, X, FileText, Download } from 'lucide-react';
import { api } from '@/services/api';

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
  documentId?: string | number;
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
  onRevisi?: (note?: string) => void;
  onReject?: (note?: string) => void;
  showActions?: boolean;
  extraTabs?: React.ReactNode;
  pengadaanId?: string;
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
  pengadaanId,
}) => {
  const [showRevisionBox, setShowRevisionBox] = useState(false);
  const [revisionNote, setRevisionNote] = useState("");
  const [showRejectBox, setShowRejectBox] = useState(false);
  const [rejectNote, setRejectNote] = useState("");

  const actualTracking: DetailDocumentTracking[] = tracking;
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);

  useEffect(() => {
    if (!pengadaanId) {
      setUploadedFiles([]);
      return;
    }
    api.get(`/pengadaan/${pengadaanId}/documents`)
      .then((response) => setUploadedFiles(Array.isArray(response.data?.data) ? response.data.data : []))
      .catch((error) => {
        console.error('Gagal memuat berkas pendukung:', error);
        setUploadedFiles([]);
      });
  }, [pengadaanId]);

  const actualFiles: DetailDocumentFile[] = pengadaanId
    ? uploadedFiles.map((file) => ({
        label: String(file.stage || 'Dokumen Pendukung').replace(/[-_]/g, ' '),
        fileName: file.original_name,
        size: file.size ? `${Math.max(1, Math.round(Number(file.size) / 1024))} KB` : undefined,
        status: 'Selesai',
        documentId: file.id,
      }))
    : files;

  const downloadUploadedFile = async (file: DetailDocumentFile) => {
    if (!file.documentId) return;
    const response = await api.get(`/documents/${file.documentId}/download`, { responseType: 'blob' });
    const url = URL.createObjectURL(response.data);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = file.fileName;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full bg-[#f8fafc] text-gray-800 font-sans p-4">
      
      {/* ─── Top Header Bar ─── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
            >
              <ArrowLeft size={14} />
            </button>
          )}
          <div>
            <h2 className="text-[#252271] text-[15px] font-bold tracking-tight">{title}</h2>
            <p className="text-[#94a3b8] text-[11px] font-medium">{subtitle}</p>
          </div>
        </div>

        {/* Header Right Action Buttons & Status Badge */}
        {showActions && (
          <div className="flex flex-wrap items-center gap-2">
            {/* Status Badge */}
            <span className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#b45309] text-[10.5px] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              {status}
            </span>

            {/* Revisi Button */}
            <button
              type="button"
              onClick={() => { setShowRevisionBox(!showRevisionBox); setShowRejectBox(false); }}
              className="px-3 py-1 rounded-lg border border-amber-500 bg-amber-50/60 text-[#d97706] hover:bg-amber-100 text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Edit3 size={12} />
              Revisi
            </button>

            {/* Reject Button (Optional) */}
            {onReject && (
              <button
                type="button"
                onClick={() => { setShowRejectBox(!showRejectBox); setShowRevisionBox(false); }}
                className="px-3 py-1 rounded-lg border border-red-300 bg-red-50 text-[#dc2626] hover:bg-red-100 text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <X size={12} />
                Tolak
              </button>
            )}

            {/* Approve Button */}
            <button
              type="button"
              onClick={onApprove}
              className="px-3.5 py-1 rounded-lg bg-[#16a34a] hover:bg-[#15803d] text-white text-[11px] font-bold flex items-center gap-1 shadow-sm transition-all cursor-pointer active:scale-95"
            >
              <Check size={13} />
              Verifikasi &amp; Setujui
            </button>
          </div>
        )}
      </div>

      {/* Catatan Revisi Textarea Drawer */}
      {showRevisionBox && (
        <div className="mb-4 bg-amber-50/90 border border-amber-300 rounded-lg p-3 animate-in fade-in-0 duration-150">
          <p className="text-[#92400e] text-[11px] font-bold mb-1.5 flex items-center gap-1.5">
            <Edit3 size={12} className="text-[#b45309]" />
            Tuliskan Catatan Revisi Dokumen Ini:
          </p>
          <textarea
            autoFocus
            value={revisionNote}
            onChange={(e) => setRevisionNote(e.target.value)}
            placeholder="Tuliskan catatan perbaikan atau alasan revisi di sini..."
            className="w-full h-[55px] bg-white border border-amber-300 rounded-lg p-2 text-[11px] text-gray-800 focus:border-[#252271] outline-none mb-2"
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => { setShowRevisionBox(false); setRevisionNote(""); }}
              className="px-2.5 py-1 bg-white border border-gray-300 text-gray-600 rounded-lg text-[10.5px] font-semibold hover:bg-gray-50 cursor-pointer"
            >
              Batal
            </button>
            <button
              onClick={() => {
                if (!revisionNote.trim()) { alert("Harap isi catatan revisi."); return; }
                if (onRevisi) onRevisi(revisionNote);
                setShowRevisionBox(false);
                setRevisionNote("");
              }}
              className="px-3 py-1 bg-[#d97706] text-white rounded-lg text-[10.5px] font-bold hover:bg-[#b45309] cursor-pointer"
            >
              Kirim Revisi
            </button>
          </div>
        </div>
      )}

      {/* Catatan Penolakan Textarea Drawer */}
      {showRejectBox && (
        <div className="mb-4 bg-red-50/90 border border-red-300 rounded-lg p-3 animate-in fade-in-0 duration-150">
          <p className="text-[#991b1b] text-[11px] font-bold mb-1.5 flex items-center gap-1.5">
            <X size={12} className="text-red-500" />
            Tuliskan Alasan Penolakan Dokumen Ini:
          </p>
          <textarea
            autoFocus
            value={rejectNote}
            onChange={(e) => setRejectNote(e.target.value)}
            placeholder="Tuliskan alasan penolakan di sini..."
            className="w-full h-[55px] bg-white border border-red-300 rounded-lg p-2 text-[11px] text-gray-800 focus:border-red-500 outline-none mb-2"
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => { setShowRejectBox(false); setRejectNote(""); }}
              className="px-2.5 py-1 bg-white border border-gray-300 text-gray-600 rounded-lg text-[10.5px] font-semibold hover:bg-gray-50 cursor-pointer"
            >
              Batal
            </button>
            <button
              onClick={() => {
                if (!rejectNote.trim()) { alert("Harap isi alasan penolakan."); return; }
                if (onReject) onReject(rejectNote);
                setShowRejectBox(false);
                setRejectNote("");
              }}
              className="px-3 py-1 bg-red-500 text-white rounded-lg text-[10.5px] font-bold hover:bg-red-700 cursor-pointer"
            >
              Tolak Dokumen
            </button>
          </div>
        </div>
      )}

      {extraTabs && <div className="mb-4">{extraTabs}</div>}

      {/* ─── SECTION 1: Informasi Permohonan ─── */}
      <div className="mb-4">
        <h3 className="text-[#64748b] text-[12px] font-bold mb-2">{infoTitle}</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-3.5 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 text-[11px]">
            {infoFields.map((field, idx) => (
              <div key={idx} className="flex items-start justify-between py-0.5 border-b border-gray-100 last:border-0">
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

      {/* ─── SECTION 2: Berkas Pendukung ─── */}
      {actualFiles.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[#64748b] text-[12px] font-bold">Berkas Pendukung</h3>
            <span className="text-[#94a3b8] text-[10px] font-medium">* Dokumen Wajib / Mandatory</span>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-3.5 shadow-2xs space-y-2.5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {actualFiles.map((file, idx) => {
                const isDone = file.status === 'Selesai' || !file.status;
                return (
                  <div
                    key={idx}
                    className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-2.5 flex items-center justify-between gap-2.5"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#252271] shrink-0">
                        <FileText size={15} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[#1e2939] text-[11px] font-bold truncate">
                          {file.label} {file.isMandatory && <span className="text-red-500">*</span>}
                        </p>
                        <p className="text-[#94a3b8] text-[10px] truncate">
                          {file.fileName} {file.size ? `(${file.size})` : ''}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {isDone ? (
                        <>
                          <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded text-[9.5px] font-bold">
                            Selesai
                          </span>
                          <button
                            type="button"
                            onClick={() => downloadUploadedFile(file).catch(() => alert('Gagal mengunduh dokumen.'))}
                            disabled={!file.documentId && !!pengadaanId}
                            className="px-2.5 py-1 bg-[#252271] hover:bg-[#1a1753] text-white text-[10px] font-bold rounded-md flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <Download size={10} />
                            Unduh
                          </button>
                        </>
                      ) : (
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-medium rounded-md">
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
      {actualTracking.length > 0 && <div>
        <h3 className="text-[#64748b] text-[12px] font-bold mb-2">Riwayat Tracking Permohonan</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-3.5 shadow-2xs space-y-2">
          {actualTracking.map((track, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg px-3 py-2 flex items-center gap-2.5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#252271] shrink-0" />
              <div className="min-w-0">
                <p className="text-[#1e2939] text-[10.5px] font-bold tracking-wide uppercase">
                  {track.action}
                </p>
                <p className="text-[#94a3b8] text-[9.5px] font-medium mt-0.5">
                  {track.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>}

    </div>
  );
};
