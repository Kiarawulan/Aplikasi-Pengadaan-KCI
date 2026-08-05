import { useState, useEffect } from "react";
import { Search, Plus, Eye, Trash2, Clock, Edit2 } from "lucide-react";
import type { PengadaanItem } from "@/types";
import { PARK_STEPS } from "@/constants/steps";
import { TopBar } from "@/components/user/layout/TopBar";
import { StatusBadge } from "@/components/common/StatusBadge";
import { PembelianBaruPopup } from "@/components/user/pengadaan/PembelianBaruPopup";
import { api } from "@/services/api";


export function PurchaseRequestionScreen({ onSelectItem }: {
  onSelectItem: (item: PengadaanItem) => void;
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [editingItem, setEditingItem] = useState<PengadaanItem | null>(null);
  const [items, setItems] = useState<PengadaanItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await api.get('/pengadaan');
      const prItems = res.data.filter((item: any) => item.id.startsWith('PR-'));
      setItems(prItems);
    } catch (err) {
      console.error("Gagal mengambil data PR:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleCreate = async (newItem: any) => {
    try {
      if (editingItem) {
        // Update
        await api.put(`/pengadaan/${editingItem.id}`, {
          nama: newItem.nama,
          departemen: newItem.departemen,
          nominal: newItem.nominal,
          flow: 'pr',
          form_data: newItem.formData
        });
        await fetchItems();
        setEditingItem(null);
      } else {
        // Create
        const res = await api.post('/pengadaan', {
          nama: newItem.nama,
          departemen: newItem.departemen,
          nominal: newItem.nominal,
          flow: 'pr',
          form_data: newItem.formData
        });
        await fetchItems();
        setShowPopup(false);
        onSelectItem(res.data);
      }
    } catch (err) {
      console.error("Gagal menyimpan PR:", err);
      alert("Gagal menyimpan PR. Coba lagi.");
    }
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm(`Yakin ingin menghapus PR ${id}?`)) return;
    try {
      await api.delete(`/pengadaan/${id}`);
      fetchItems();
    } catch (err) {
      console.error("Gagal menghapus PR:", err);
    }
  };

  const filteredItems = items.filter(
    (item) =>
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <TopBar title="Purchase Requisition" subtitle="Daftar Pengadaan" />
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="px-5 py-4 flex items-center justify-between border-b border-gray-50">
          <div>
            <p className="text-[#1e2939] font-semibold text-[13px]">Daftar Purchase Requisition</p>
            <p className="text-[#99a1af] text-[10.5px]">{filteredItems.length} pengadaan terdata</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#99a1af]" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-[#f3f4f6] pl-8 pr-3 py-1.5 rounded-xl text-[11px] focus:outline-none w-40"
                placeholder="Pencarian..."
              />
            </div>
            <button onClick={() => setShowPopup(true)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-medium text-white" style={{ background: "linear-gradient(75deg, #e6251c, #ff7676)" }}>
              <Plus size={12} /> Pengadaan Baru
            </button>
          </div>
        </div>

        {loading ? (
          <div className="p-8 text-center text-gray-500 text-[12px] flex flex-col items-center gap-2">
            <Clock size={20} className="animate-spin text-[#e6251c]" />
            Loading data dari database MySQL...
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/80">
                {["No", "Nama Pengadaan", "Departemen", "Nominal", "Status", "Progres", "Aksi"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-[10.5px] font-medium text-gray-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-[12px] text-gray-400">Belum ada data. Klik "Pengadaan Baru" untuk memulai.</td>
                </tr>
              ) : (
                filteredItems.map((item, i) => (
                  <tr key={item.id} className={i % 2 === 1 ? "bg-gray-50/40" : ""}>
                    <td className="px-4 py-3.5 text-[11px] text-gray-500">{i + 1}</td>
                    <td className="px-4 py-3.5">
                      <p className="font-semibold text-gray-800 text-[11px]">{item.nama}</p>
                      <p className="text-gray-400 text-[9.5px]">{item.id}</p>
                    </td>
                    <td className="px-4 py-3.5 text-[11px] text-gray-600">{item.departemen}</td>
                    <td className="px-4 py-3.5 text-[11px] font-medium text-gray-700">{item.nominal}</td>
                    <td className="px-4 py-3.5"><StatusBadge status={item.status} /></td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-0.5">
                        {PARK_STEPS.map((s) => (
                          <div
                            key={s.id}
                            title={s.label}
                            className={`w-3 h-3 rounded-full ${
                              (item.completedSteps || []).includes(s.id)
                                ? "bg-[#e6251c]"
                                : item.currentStep === s.id
                                ? "bg-[#252271]"
                                : "bg-gray-100 border border-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => onSelectItem(item)} className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center hover:bg-blue-100" title="Buka Detail">
                          <Eye size={11} className="text-blue-600" />
                        </button>
                        {(item.status === "pending" || item.status === "revisi") && (
                          <button onClick={() => { setEditingItem(item); setShowPopup(true); }} className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center hover:bg-amber-100" title="Edit PR">
                            <Edit2 size={11} className="text-amber-600" />
                          </button>
                        )}
                        <button onClick={(e) => handleDelete(item.id, e)} className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center hover:bg-red-100" title="Hapus">
                          <Trash2 size={11} className="text-red-500" />
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
      {showPopup && (
        <PembelianBaruPopup
          title={editingItem ? "Edit Pengadaan" : "Pengadaan Baru"}
          submitLabel={editingItem ? "Simpan Perubahan" : "Buat Pengadaan →"}
          initialData={editingItem?.formData}
          onClose={() => { setShowPopup(false); setEditingItem(null); }}
          onSubmit={handleCreate}
        />
      )}
    </div>
  );
}
