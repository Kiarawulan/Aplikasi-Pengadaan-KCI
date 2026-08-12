import { useCallback, useEffect, useState } from "react";
import { Eye, Trash2, Upload, AlertCircle, CheckCircle2 } from "lucide-react";
import { api } from "@/services/api";
import { WarningModal } from "@/components/common/WarningModal";

export type Flow = "pd" | "pr";
export type UploadedFile = { id: number; stage: string; original_name: string; created_at?: string };

export const FILES: Record<Flow, Array<{ key: string; label: string }>> = {
  pd: [
    { key: "checklist-pd", label: "CHECKLIST PD *" },
    { key: "nota-permohonan-dana", label: "NOTA PERMOHONAN DANA *" },
    { key: "rab", label: "RAB *" },
    { key: "justifikasi", label: "JUSTIFIKASI *" },
    { key: "mi-permohonan-release", label: "MI PERMOHONAN RELEASE *" },
    { key: "dasar-harga", label: "DASAR HARGA *" },
    { key: "dokumen-pendukung-lainnya", label: "DOKUMEN PENDUKUNG LAINNYA *" },
  ],
  pr: [
    { key: "checklist", label: "CHECKLIST *" },
    { key: "rab", label: "RAB *" },
    { key: "justifikasi", label: "JUSTIFIKASI *" },
    { key: "mi-permohonan-release", label: "MI PERMOHONAN RELEASE *" },
    { key: "dasar-harga", label: "DASAR HARGA *" },
    { key: "nota-permohonan-dana", label: "NOTA PERMOHONAN DANA *" },
    { key: "dokumen-pendukung-lainnya", label: "DOKUMEN PENDUKUNG LAINNYA *" },
  ],
};

export const stageFor = (flow: Flow, key: string) => `pengajuan-dana:${flow}:${key}`;

export function PengajuanDanaAttachments({
  pengadaanId,
  flow,
  onDocumentsChange,
}: {
  pengadaanId: string;
  flow: Flow;
  onDocumentsChange?: (docs: UploadedFile[]) => void;
}) {
  const [documents, setDocuments] = useState<UploadedFile[]>([]);
  const [busyKey, setBusyKey] = useState<string | null>(null);
  const [notifyModal, setNotifyModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    variant: "warning" | "error" | "info" | "duplicate";
  }>({
    isOpen: false,
    title: "",
    message: "",
    variant: "info",
  });

  const refresh = useCallback(async () => {
    try {
      const response = await api.get(`/pengadaan/${pengadaanId}/documents`);
      const list = response.data?.data || [];
      setDocuments(list);
      if (onDocumentsChange) onDocumentsChange(list);
    } catch {
      setDocuments([]);
      if (onDocumentsChange) onDocumentsChange([]);
    }
  }, [pengadaanId, onDocumentsChange]);

  useEffect(() => {
    refresh().catch(() => setDocuments([]));
  }, [refresh]);

  const upload = async (key: string, file?: File) => {
    if (!file) return;
    setBusyKey(key);
    try {
      const payload = new FormData();
      payload.append("file", file);
      payload.append("stage", stageFor(flow, key));
      await api.post(`/pengadaan/${pengadaanId}/documents`, payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      await refresh();
    } catch (error: any) {
      setNotifyModal({
        isOpen: true,
        title: "Gagal Mengunggah",
        message: error?.response?.data?.message || "Berkas pendukung gagal diunggah.",
        variant: "error",
      });
    } finally {
      setBusyKey(null);
    }
  };

  const view = async (document: UploadedFile) => {
    const response = await api.get(`/documents/${document.id}/download`, {
      responseType: "blob",
    });
    const url = URL.createObjectURL(new Blob([response.data]));
    window.open(url, "_blank", "noopener,noreferrer");
    window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
  };

  const remove = async (document: UploadedFile) => {
    if (!window.confirm(`Hapus ${document.original_name}?`)) return;
    try {
      await api.delete(`/documents/${document.id}`);
      await refresh();
    } catch (error: any) {
      setNotifyModal({
        isOpen: true,
        title: "Gagal Menghapus",
        message: error?.response?.data?.message || "Berkas gagal dihapus.",
        variant: "error",
      });
    }
  };

  const requiredList = FILES[flow];
  const uploadedCount = requiredList.filter((def) =>
    documents.some((d) => d.stage === stageFor(flow, def.key))
  ).length;
  const isAllUploaded = uploadedCount === requiredList.length;

  return (
    <div className="mt-6 border-t border-slate-200 pt-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[16px] font-bold text-slate-800">Berkas Pendukung Wajib</h3>
        <span
          className={`px-3 py-1 rounded-full text-[11px] font-bold ${
            isAllUploaded ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-800"
          }`}
        >
          {uploadedCount} / {requiredList.length} Terunggah
        </span>
      </div>

      {!isAllUploaded ? (
        <div className="mb-4 bg-amber-50/80 border border-amber-200 rounded-xl p-3 flex items-start gap-2.5">
          <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-[11.5px] text-amber-800 font-medium">
            <strong>Perhatian:</strong> Seluruh berkas pendukung dengan tanda (*) wajib diunggah. Tombol <em>Lanjut</em> dan <em>Submit</em> tidak dapat digunakan sebelum semua dokumen di bawah ini terisi.
          </p>
        </div>
      ) : (
        <div className="mb-4 bg-emerald-50/80 border border-emerald-200 rounded-xl p-3 flex items-center gap-2.5">
          <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
          <p className="text-[11.5px] text-emerald-800 font-semibold">
            Semua berkas pendukung wajib telah lengkap terunggah ({uploadedCount}/{requiredList.length}). Anda dapat melanjutkan proses pengajuan.
          </p>
        </div>
      )}

      <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-2xs">
        <table className="w-full min-w-[680px] text-[11px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-left font-bold text-slate-600">
              <th className="px-3 py-2.5">STATUS</th>
              <th className="px-3 py-2.5">TANGGAL</th>
              <th className="px-3 py-2.5">KETERANGAN</th>
              <th className="px-3 py-2.5 text-center">BERKAS</th>
            </tr>
          </thead>
          <tbody>
            {requiredList.map((definition) => {
              const document = documents.find(
                (entry) => entry.stage === stageFor(flow, definition.key)
              );
              return (
                <tr key={definition.key} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                  <td className="px-3 py-2.5">
                    <span
                      className={`rounded-md px-2 py-1 text-[9.5px] font-extrabold ${
                        document ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {document ? "TERUPLOAD" : "BELUM UPLOAD"}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-slate-500 font-medium">
                    {document?.created_at
                      ? new Date(document.created_at).toLocaleString("id-ID")
                      : "-"}
                  </td>
                  <td className="px-3 py-2.5 font-semibold text-slate-700">
                    {definition.label}
                  </td>
                  <td className="px-3 py-2.5">
                    <div className="flex justify-center gap-2">
                      {document ? (
                        <>
                          <button
                            type="button"
                            onClick={() => view(document)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 cursor-pointer transition-colors"
                            title="Lihat berkas"
                            aria-label="Lihat berkas"
                          >
                            <Eye size={12} />
                          </button>
                          <button
                            type="button"
                            onClick={() => remove(document)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 cursor-pointer transition-colors"
                            title="Hapus berkas"
                            aria-label="Hapus berkas"
                          >
                            <Trash2 size={12} />
                          </button>
                        </>
                      ) : (
                        <label
                          className={`flex h-7 px-3 items-center gap-1 rounded-lg bg-[#252271] text-white hover:bg-[#1a1860] text-[10.5px] font-bold transition-all shadow-2xs ${
                            busyKey === definition.key ? "cursor-wait opacity-60" : "cursor-pointer active:scale-95"
                          }`}
                          title="Unggah berkas"
                        >
                          <Upload size={12} /> Upload
                          <input
                            type="file"
                            className="hidden"
                            disabled={busyKey === definition.key}
                            accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                            onChange={(event) => {
                              const file = event.target.files?.[0];
                              upload(definition.key, file);
                              event.target.value = "";
                            }}
                          />
                        </label>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <WarningModal
        isOpen={notifyModal.isOpen}
        title={notifyModal.title}
        message={notifyModal.message}
        variant={notifyModal.variant}
        onClose={() => setNotifyModal((p) => ({ ...p, isOpen: false }))}
      />
    </div>
  );
}
