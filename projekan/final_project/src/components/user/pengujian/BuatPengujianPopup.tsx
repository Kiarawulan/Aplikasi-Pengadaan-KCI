import { useState, useEffect } from "react";
import { X, Search } from "lucide-react";
import type { PengadaanItem } from "@/types";
import { api } from "@/services/api";


export function BuatPengujianPopup({ onClose, onSuccess }: {
  onClose: () => void;
  onSuccess: (item: PengadaanItem) => void;
}) {
  const [items, setItems] = useState<PengadaanItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    Promise.all([api.get("/pengadaan"), api.get("/pengujian")])
      .then(([pengadaanResponse, pengujianResponse]) => {
        const requestedIds = new Set(pengujianResponse.data.map((item: any) => item.pengadaan_id));
        setItems(pengadaanResponse.data.filter((item: PengadaanItem) => item.flowType === "pr" && item.currentStep === "pengujian" && !requestedIds.has(item.id)));
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = items.filter(
    (item) => item.nama.toLowerCase().includes(search.toLowerCase()) || item.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = async () => {
    if (!selectedId) {
      alert("Pilih pengadaan terlebih dahulu sebelum membuat pengujian.");
      return;
    }
    setSubmitting(true);
    try {
      await api.post("/pengujian", { pengadaan_id: selectedId });
      onSuccess(items.find((item) => item.id === selectedId)!);
    } catch (err) {
      console.error(err);
      alert("Gagal membuat pengujian.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-[500px] shadow-2xl flex flex-col max-h-[80vh]">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-[#252271] text-lg font-extrabold">Buat Pengujian Baru</h2>
          <button onClick={onClose} className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <X size={14} className="text-gray-600" />
          </button>
        </div>

        <p className="text-[11.5px] text-gray-500 mb-4">
          Pilih pengadaan yang telah selesai kontrak untuk dilanjutkan ke tahap Pengujian.
        </p>

        <div className="relative mb-4">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 text-gray-800 pl-8 pr-3 py-2 rounded-xl text-[11.5px] focus:outline-none focus:border-[#252271]"
            placeholder="Cari ID atau nama pengadaan..."
          />
        </div>

        <div className="flex-1 overflow-y-auto min-h-[200px] border border-gray-100 rounded-xl">
          {loading ? (
            <div className="p-8 text-center text-gray-500 text-[11px]">Memuat data...</div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-gray-500 text-[11px]">
              {search ? "Tidak ada pengadaan yang cocok." : "Tidak ada pengadaan yang selesai."}
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {filtered.map(item => (
                <label key={item.id} className={`flex items-start gap-3 p-3 cursor-pointer hover:bg-gray-50 transition-colors ${selectedId === item.id ? "bg-blue-50/50" : ""}`}>
                  <input 
                    type="radio" 
                    name="pengadaan" 
                    className="mt-1"
                    checked={selectedId === item.id}
                    onChange={() => setSelectedId(item.id)}
                  />
                  <div>
                    <p className="text-[11.5px] font-semibold text-gray-800">{item.nama}</p>
                    <p className="text-[10px] text-gray-500">{item.id} • {item.nominal}</p>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-gray-100">
          <button onClick={onClose} className="px-5 py-2 rounded-xl border border-gray-200 text-[11.5px] font-medium text-gray-600 hover:bg-gray-50 transition-colors">Batal</button>
          <button 
            onClick={handleSubmit} 
            disabled={!selectedId || submitting}
            className="px-5 py-2 rounded-xl text-[11.5px] font-bold text-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity" 
            style={{ background: "linear-gradient(75deg, #e6251c, #ff7676)" }}
          >
            {submitting ? "Memproses..." : "Buat Pengujian"}
          </button>
        </div>
      </div>
    </div>
  );
}
