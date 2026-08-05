import { useEffect, useState } from "react";
import { Download, Eye, FileText } from "lucide-react";
import { api } from "@/services/api";

export function Sp3DetailView({ item }: { item?: any }) {
  const [sp3, setSp3] = useState<any>(null);
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!item?.id) return;
    let active = true;
    Promise.all([
      api.get("/step-documents/sp3"),
      api.get(`/pengadaan/${item.id}/documents`),
    ]).then(([sp3Response, documentResponse]) => {
      if (!active) return;
      setSp3((sp3Response.data || []).find((entry: any) => entry.pengadaan_id === item.id) || null);
      setFiles((documentResponse.data?.data || []).filter((entry: any) => String(entry.stage || "").toLowerCase().startsWith("sp3")));
    }).catch(() => active && setFiles([])).finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [item?.id]);

  const download = async (file: any) => {
    const response = await api.get(`/documents/${file.id}/download`, { responseType: "blob" });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = window.document.createElement("a");
    link.href = url;
    link.download = file.original_name;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const title = sp3?.judul || item?.nama || "Surat SP3";
  const number = sp3?.no_sp3 || sp3?.id || "SP3 sedang diproses";

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div><p className="text-[12px] font-bold text-[#252271]">Surat SP3</p><p className="text-[10.5px] text-slate-500">{number}</p></div>
        <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-[#252271] text-[10px] font-bold">View Only</span>
      </div>
      {loading ? <p className="text-[11.5px] text-slate-500">Memuat surat SP3...</p> : files.length === 0 ? <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-5 text-center"><FileText size={22} className="mx-auto text-slate-400 mb-2" /><p className="text-[11.5px] font-semibold text-slate-600">Surat SP3 belum diunggah oleh Admin.</p><p className="text-[10.5px] text-slate-500 mt-1">Saat tersedia, file surat SP3 akan muncul di sini untuk dilihat atau diunduh.</p></div> : <div className="space-y-2">{files.map((file: any) => <div key={file.id} className="flex items-center justify-between gap-3 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5"><div className="flex items-center min-w-0 gap-2"><FileText size={17} className="text-[#252271] shrink-0" /><div className="min-w-0"><p className="text-[11.5px] font-bold text-slate-800 truncate">{file.original_name}</p><p className="text-[10px] text-slate-500">{title}</p></div></div><button onClick={() => download(file)} className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#252271] text-white text-[10.5px] font-bold hover:bg-[#1a1753]"><Eye size={11} /> View File <Download size={11} /></button></div>)}</div>}
    </div>
  );
}
