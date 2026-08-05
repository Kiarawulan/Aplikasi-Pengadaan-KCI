import { useEffect, useState } from "react";
import { Search, Download } from "lucide-react";
import { TopBar } from "@/components/user/layout/TopBar";
import { api } from "@/services/api";
import type { TemplateDokumen } from "@/types";


export function TemplateDokumenScreen() {
  const [docs, setDocs] = useState<TemplateDokumen[]>([]);

  useEffect(() => {
    api.get("/templates")
      .then((response) => setDocs(response.data.map((item: any) => ({
        id: item.id,
        nama: item.nama,
        kategori: item.kategori,
        tipe: item.tipe,
        ukuran: item.ukuran,
        deskripsi: item.deskripsi,
        uploadedBy: item.uploaded_by,
        uploadedAt: item.uploaded_at,
      }))))
      .catch((error) => console.error("Gagal mengambil template dokumen:", error));
  }, []);

  return (
    <div>
      <TopBar title="Template Dokumen" />
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="bg-[#252271] px-5 py-4 flex items-center justify-between">
          <div><p className="text-white font-semibold text-[13px]">Daftar Template Dokumen</p><p className="text-white/50 text-[10.5px]">{docs.length} template tersedia</p></div>
          <div className="relative"><Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" /><input className="bg-white/10 border border-white/20 pl-8 pr-3 py-1.5 rounded-xl text-[11px] focus:outline-none w-40 text-white placeholder-white/50" placeholder="Pencarian" /></div>
        </div>
        <table className="w-full">
          <thead><tr className="bg-gray-50/80">{["No", "Nama Template", "Kategori", "Tipe", "Ukuran", "Aksi"].map((h) => <th key={h} className="text-left px-4 py-3 text-[10.5px] font-medium text-gray-500">{h}</th>)}</tr></thead>
          <tbody className="divide-y divide-gray-50">
            {docs.map((d, i) => (
              <tr key={d.id} className={i % 2 === 1 ? "bg-gray-50/40" : ""}>
                <td className="px-4 py-3.5 text-[11px] text-gray-500">{i + 1}</td>
                <td className="px-4 py-3.5">
                  <p className="text-[11px] font-medium text-gray-800">{d.nama}</p>
                  {d.deskripsi && <p className="text-gray-400 text-[9.5px]">{d.deskripsi}</p>}
                </td>
                <td className="px-4 py-3.5"><span className="bg-gray-100 text-gray-600 text-[10px] font-medium px-1.5 py-0.5 rounded-full">{d.kategori}</span></td>
                <td className="px-4 py-3.5"><span className="bg-blue-50 text-blue-600 text-[9.5px] font-medium px-2 py-0.5 rounded">{d.tipe}</span></td>
                <td className="px-4 py-3.5 text-[11px] text-gray-500">{d.ukuran}</td>
                <td className="px-4 py-3.5">
                  <button className="flex items-center gap-1 text-[11px] text-[#e6251c] font-medium hover:underline">
                    <Download size={11} /> Unduh
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
