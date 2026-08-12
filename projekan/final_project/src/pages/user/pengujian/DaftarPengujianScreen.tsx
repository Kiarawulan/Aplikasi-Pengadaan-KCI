import { useState, useEffect } from "react";
import { Search, Eye, Clock } from "lucide-react";
import type { PengadaanItem } from "@/types";
import { PARK_STEPS } from "@/constants/steps";
import { TopBar } from "@/components/user/layout/TopBar";
import { StatusBadge } from "@/components/common/StatusBadge";
import { api } from "@/services/api";
import { Plus } from "lucide-react";
import { BuatPengujianPopup } from "@/components/user/pengujian/BuatPengujianPopup";


export function DaftarPengujianScreen({ onSelectItem }: {
  onSelectItem: (item: PengadaanItem) => void;
}) {
  const [items, setItems] = useState<PengadaanItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await api.get('/pengadaan');
      // Pengujian baru boleh diakses setelah surat kontrak resmi dirilis.
      const pengujianItems = res.data.filter((item: PengadaanItem) => {
        const completed = item.completedSteps || [];
        return item.flowType === "pr" && completed.includes("contract");
      });
      setItems(pengujianItems);
    } catch (err) {
      console.error("Gagal mengambil data pengujian:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const filteredItems = items.filter(
    (item) =>
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.departemen.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <TopBar title="Daftar Pengujian" subtitle="Proses pengadaan yang sedang berlangsung pada tahap Pengujian" />

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mt-5">
        <div className="px-5 py-4 flex items-center justify-between border-b border-gray-50 bg-[#1e1c56] text-white">
          <div>
            <p className="font-semibold text-[13px]">Daftar Pengadaan dalam Pengujian</p>
            <p className="text-white/60 text-[10.5px]">{filteredItems.length} pengadaan berlangsung</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white/95 text-gray-800 pl-8 pr-3 py-1.5 rounded-xl text-[11px] focus:outline-none w-40 sm:w-56 placeholder-gray-400"
                placeholder="Pencarian..."
              />
            </div>
            <button onClick={() => setShowPopup(true)} className="flex items-center gap-1.5 bg-[#e6251c] hover:bg-[#c91e16] text-white px-4 py-1.5 rounded-xl text-[11px] font-semibold shadow-sm transition-colors">
              <Plus size={14} /> Buat Pengujian
            </button>
          </div>
        </div>

        {showPopup && (
          <BuatPengujianPopup 
            onClose={() => setShowPopup(false)} 
            onSuccess={() => {
              setShowPopup(false);
              fetchItems();
            }}
          />
        )}

        {loading ? (
          <div className="p-8 text-center text-gray-500 text-[12px] flex flex-col items-center gap-2">
            <Clock size={20} className="animate-spin text-[#e6251c]" />
            Loading data...
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/80">
                {["No. Dokumen", "Judul Pengadaan", "Nilai", "Divisi", "Status", "Tahap & Progres", "Aksi"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-[10.5px] font-medium text-gray-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-[12px] text-gray-400">
                    Tidak ada proses pengadaan yang sedang berlangsung di tahap Pengujian.
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/40 transition-colors">
                    <td className="px-4 py-3.5 text-[11px] font-semibold text-gray-700">{item.id}</td>
                    <td className="px-4 py-3.5">
                      <p className="font-semibold text-gray-800 text-[11px]">{item.nama}</p>
                      <p className="text-gray-400 text-[9.5px]">{item.id}</p>
                    </td>
                    <td className="px-4 py-3.5 text-[11px] font-medium text-gray-700">{item.nominal}</td>
                    <td className="px-4 py-3.5 text-[11px] text-gray-600">{item.departemen}</td>
                    <td className="px-4 py-3.5"><StatusBadge status={item.status} /></td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-0.5">
                        {PARK_STEPS.map((s) => {
                          const isAllDone = item.status === "Selesai" || item.status === "approved" || item.status === "completed" || item.currentStep === "completed" || (item.completedSteps || []).length >= PARK_STEPS.length;
                          const isCompleted = isAllDone || (item.completedSteps || []).includes(s.id);
                          return (
                            <div
                              key={s.id}
                              title={s.label}
                              className={`w-3 h-3 rounded-full ${
                                isCompleted
                                  ? "bg-[#4ACE22]"
                                  : item.currentStep === s.id
                                  ? "bg-[#252271]"
                                  : "bg-gray-100 border border-gray-200"
                              }`}
                            />
                          );
                        })}
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => onSelectItem(item)} className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center hover:bg-blue-100" title="Buka Detail">
                          <Eye size={11} className="text-blue-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
