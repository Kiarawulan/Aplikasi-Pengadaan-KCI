import { useCallback, useEffect, useState } from "react";
import { Eye, Trash2, Upload } from "lucide-react";
import { api } from "@/services/api";

type Flow = "pd" | "pr";
type UploadedFile = { id: number; stage: string; original_name: string; created_at?: string };

const FILES: Record<Flow, Array<{ key: string; label: string }>> = {
  pd: [
    { key: "checklist-pd", label: "CHECKLIST PD *" },
    { key: "nota-permohonan-dana", label: "NOTA PERMOHONAN DANA *" },
    { key: "rab", label: "RAB *" },
    { key: "justifikasi", label: "JUSTIFIKASI *" },
    { key: "mi-permohonan-release", label: "MI PERMOHONAN RELEASE *" },
    { key: "dasar-harga", label: "DASAR HARGA *" },
    { key: "dokumen-pendukung-lainnya", label: "DOKUMEN PENDUKUNG LAINNYA ***" },
  ],
  pr: [
    { key: "checklist", label: "CHECKLIST *" },
    { key: "rab", label: "RAB *" },
    { key: "justifikasi", label: "JUSTIFIKASI *" },
    { key: "mi-permohonan-release", label: "MI PERMOHONAN RELEASE *" },
    { key: "dasar-harga", label: "DASAR HARGA *" },
    { key: "nota-permohonan-dana", label: "NOTA PERMOHONAN DANA *" },
    { key: "dokumen-pendukung-lainnya", label: "DOKUMEN PENDUKUNG LAINNYA ***" },
  ],
};

const stageFor = (flow: Flow, key: string) => `pengajuan-dana:${flow}:${key}`;

export function PengajuanDanaAttachments({ pengadaanId, flow }: { pengadaanId: string; flow: Flow }) {
  const [documents, setDocuments] = useState<UploadedFile[]>([]);
  const [busyKey, setBusyKey] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    const response = await api.get(`/pengadaan/${pengadaanId}/documents`);
    setDocuments(response.data?.data || []);
  }, [pengadaanId]);

  useEffect(() => { refresh().catch(() => setDocuments([])); }, [refresh]);

  const upload = async (key: string, file?: File) => {
    if (!file) return;
    setBusyKey(key);
    try {
      const payload = new FormData();
      payload.append("file", file);
      payload.append("stage", stageFor(flow, key));
      await api.post(`/pengadaan/${pengadaanId}/documents`, payload, { headers: { "Content-Type": "multipart/form-data" } });
      await refresh();
    } catch (error: any) {
      alert(error?.response?.data?.message || "Berkas gagal diunggah.");
    } finally {
      setBusyKey(null);
    }
  };

  const view = async (document: UploadedFile) => {
    const response = await api.get(`/documents/${document.id}/download`, { responseType: "blob" });
    const url = URL.createObjectURL(new Blob([response.data]));
    window.open(url, "_blank", "noopener,noreferrer");
    window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
  };

  const remove = async (document: UploadedFile) => {
    if (!window.confirm(`Hapus ${document.original_name}?`)) return;
    await api.delete(`/documents/${document.id}`);
    await refresh();
  };

  return (
    <div className="mt-6 border-t border-slate-200 pt-5">
      <h3 className="mb-4 text-[17px] font-bold text-slate-700">Berkas Pendukung</h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-[11px]">
          <thead><tr className="border-b border-slate-200 text-left font-bold text-slate-500"><th className="px-2 py-3">STATUS</th><th className="px-2 py-3">TANGGAL</th><th className="px-2 py-3">KETERANGAN</th><th className="px-2 py-3 text-center">BERKAS</th></tr></thead>
          <tbody>{FILES[flow].map((definition) => {
            const document = documents.find((entry) => entry.stage === stageFor(flow, definition.key));
            return <tr key={definition.key} className="border-b border-slate-200">
              <td className="px-2 py-3"><span className={`rounded px-2 py-1 text-[9px] font-bold ${document ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"}`}>{document ? "TERUPLOAD" : "BELUM UPLOAD"}</span></td>
              <td className="px-2 py-3 text-slate-500">{document?.created_at ? new Date(document.created_at).toLocaleString("id-ID") : new Date().toLocaleString("id-ID")}</td>
              <td className="px-2 py-3 font-medium text-slate-500">{definition.label}</td>
              <td className="px-2 py-3"><div className="flex justify-center gap-2">{document ? <><button type="button" onClick={() => view(document)} className="flex h-8 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white hover:bg-indigo-600" title="Lihat berkas"><Eye size={13} /></button><button type="button" onClick={() => remove(document).catch((error: any) => alert(error?.response?.data?.message || "Berkas gagal dihapus."))} className="flex h-8 w-12 items-center justify-center rounded-lg bg-rose-500 text-white hover:bg-rose-600" title="Hapus berkas"><Trash2 size={13} /></button></> : <label className={`flex h-8 w-14 items-center justify-center rounded-lg bg-[#ff6247] text-white hover:bg-[#e94f36] ${busyKey === definition.key ? "cursor-wait opacity-60" : "cursor-pointer"}`} title="Unggah berkas"><Upload size={13} /><input type="file" className="hidden" disabled={busyKey === definition.key} accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png" onChange={(event) => { const file = event.target.files?.[0]; upload(definition.key, file); event.target.value = ""; }} /></label>}</div></td>
            </tr>;
          })}</tbody>
        </table>
      </div>
    </div>
  );
}
