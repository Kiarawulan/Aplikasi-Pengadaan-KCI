import { useEffect, useState } from "react";
import { Search, Download } from "lucide-react";
import { TopBar } from "@/components/user/layout/TopBar";
import { api } from "@/services/api";
import type { TemplateDokumen } from "@/types";


export function TemplateDokumenScreen() {
  const [docs, setDocs] = useState<TemplateDokumen[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/templates")
      .then((response) => setDocs(response.data.map((item: any) => {
        const [kategoriUtama, subkategori] = String(item.kategori || "Pengadaan|RUP").split("|");
        return {
          id: item.id,
          nama: item.nama,
          kategori: subkategori ? `${kategoriUtama} • ${subkategori}` : kategoriUtama,
          tipe: item.tipe || "DOCX",
          ukuran: item.ukuran || "180 KB",
          deskripsi: item.deskripsi || "",
          uploadedBy: item.uploaded_by || "Admin",
          uploadedAt: item.uploaded_at || "—",
        };
      })))
      .catch((error) => console.error("Gagal mengambil template dokumen:", error));
  }, []);

  const handleDownload = (doc: TemplateDokumen) => {
    const content = `PT KERETA COMMUTER INDONESIA (KCI)\nTEMPLATE DOKUMEN SISTEM\n=========================================\nNama Template   : ${doc.nama}\nKategori        : ${doc.kategori}\nTipe File       : ${doc.tipe}\nUkuran Berkas   : ${doc.ukuran}\nDeskripsi       : ${doc.deskripsi || "Dokumen template resmi KCI."}\n=========================================\nDokumen ini adalah template resmi KCI untuk panduan pengisian form/dokumen pengajuan.`;
    const ext = (doc.tipe || "DOCX").toLowerCase();
    const blob = new Blob([content], { type: "application/octet-stream;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const cleanTitle = doc.nama.replace(/[^a-zA-Z0-9_-]/g, "_");
    a.download = `${cleanTitle}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc] p-6">
      <TopBar title="Template Dokumen" />
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mt-4">
        <div className="bg-[#252271] px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-[14px]">Daftar Template Dokumen</p>
            <p className="text-white/60 text-[11px]">{docs.length} template resmi tersedia untuk diunduh</p>
          </div>
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="bg-white/10 border border-white/20 pl-8 pr-3 py-1.5 rounded-xl text-[11px] focus:outline-none w-48 text-white placeholder-white/50"
              placeholder="Cari template dokumen..."
            />
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50/80 border-b border-gray-100">
              {["No", "Nama Template", "Kategori", "Tipe", "Ukuran", "Aksi"].map((h) => (
                <th key={h} className="text-left px-5 py-3 text-[11px] font-bold text-[#252271] uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {docs.filter((document) => `${document.nama} ${document.kategori} ${document.deskripsi || ""}`.toLowerCase().includes(search.toLowerCase())).map((d, i) => (
              <tr key={d.id} className="hover:bg-blue-50/30 transition-colors">
                <td className="px-5 py-3.5 text-[11.5px] font-medium text-gray-500">{i + 1}</td>
                <td className="px-5 py-3.5">
                  <p className="text-[12.5px] font-bold text-gray-800">{d.nama}</p>
                  {d.deskripsi && <p className="text-gray-400 text-[10.5px] mt-0.5">{d.deskripsi}</p>}
                </td>
                <td className="px-5 py-3.5">
                  <span className="bg-slate-100 text-slate-700 text-[10.5px] font-semibold px-2.5 py-1 rounded-full border border-slate-200/60">{d.kategori}</span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="bg-blue-50 text-blue-600 border border-blue-200/60 text-[10px] font-bold px-2 py-0.5 rounded">{d.tipe}</span>
                </td>
                <td className="px-5 py-3.5 text-[11.5px] text-gray-500">{d.ukuran}</td>
                <td className="px-5 py-3.5">
                  <button
                    onClick={() => handleDownload(d)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#252271] text-white text-[11px] font-bold hover:bg-[#1a1754] active:scale-95 transition-all cursor-pointer shadow-sm"
                    title="Unduh Template Dokumen"
                  >
                    <Download size={13} />
                    <span>Unduh Template</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
