import { useState, useEffect } from "react";
import { Search, Plus, Eye, Trash2, Clock, Edit2 } from "lucide-react";
import type { PengadaanItem } from "@/types";
import { TopBar } from "@/components/user/layout/TopBar";
import { StatusBadge } from "@/components/common/StatusBadge";
import { PembelianBaruPopup } from "@/components/user/pengadaan/PembelianBaruPopup";
import { api } from "@/services/api";
import { useAuth } from "@/store/authStore";


export function DaftarPengadaanScreen({ onSelectItem }: {
  onSelectItem: (item: PengadaanItem) => void;
}) {
  const { currentUser } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const [editingItem, setEditingItem] = useState<PengadaanItem | null>(null);
  const [items, setItems] = useState<PengadaanItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await api.get('/pengadaan?flow=pd');
      setItems(res.data);
    } catch (err) {
      console.error("Gagal mengambil data pengadaan:", err);
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
        await api.put(`/pengadaan/${editingItem.id}`, {
          nama: newItem.nama,
          departemen: newItem.departemen,
          nominal: newItem.nominal,
          status: "pending",
          form_data: {
            ...(editingItem.formData || {}),
            ...(newItem.formData || {})
          }
        });
        await fetchItems();
        setEditingItem(null);
        setShowPopup(false);
      } else {
        const res = await api.post('/pengadaan', {
          nama: newItem.nama,
          departemen: newItem.departemen,
          nominal: newItem.nominal,
          flow: 'pd',
          form_data: newItem.formData
        });
        // Refresh list
        await fetchItems();
        setShowPopup(false);
        // Auto open detail
        onSelectItem(res.data);
      }
    } catch (err: any) {
      console.error("Gagal membuat pengadaan baru:", err);
      const msg = err.response?.data?.message || err.message || "Unknown error";
      const errs = err.response?.data?.errors ? JSON.stringify(err.response.data.errors) : "";
      alert(`Gagal menyimpan pengadaan. Error: ${msg} ${errs}`);
    }
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm(`Yakin ingin menghapus paket pengadaan ${id}?`)) return;
    try {
      setDeletingId(id);
      await api.delete(`/pengadaan/${id}`);
      await fetchItems();
    } catch (err: any) {
      console.error("Gagal menghapus pengadaan:", err);
      alert(err.response?.data?.message || "Pengadaan gagal dihapus. Silakan coba lagi.");
    } finally {
      setDeletingId(null);
    }
  };

  const filteredItems = items.filter(
    (item) =>
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <TopBar title="Park Dokumen" subtitle="Daftar Pengadaan" />
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="px-5 py-4 flex items-center justify-between border-b border-gray-50 bg-[#1e1c56] text-white">
          <div>
            <p className="text-[#f3f4f6] font-semibold text-[13px]">Daftar Park Dokumen</p>
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
              <Plus size={12} /> Buat Park Document
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
                {["No", "Nama Pengadaan", "Divisi", "Nominal", "Status", "Aksi"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-[10.5px] font-medium text-gray-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-[12px] text-gray-400">Belum ada pengadaan. Klik "Buat Park Document" untuk memulai.</td>
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
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => onSelectItem(item)} className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center hover:bg-blue-100" title="Buka Detail">
                          <Eye size={11} className="text-blue-600" />
                        </button>
                        {item.createdBy === currentUser?.id && (item.status === "pending" || item.status === "revisi" || item.status === "Perlu Revisi" || item.status === "draft" || item.status === "Draft") && (
                          <button onClick={() => { setEditingItem(item); setShowPopup(true); }} className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center hover:bg-amber-100" title="Edit & Kirim Revisi">
                            <Edit2 size={11} className="text-amber-600" />
                          </button>
                        )}
                        {item.createdBy === currentUser?.id && <button disabled={deletingId === item.id} onClick={(e) => handleDelete(item.id, e)} className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center hover:bg-red-100 disabled:opacity-40 disabled:cursor-not-allowed" title="Hapus">
                          <Trash2 size={11} className="text-red-500" />
                        </button>}
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
          title={editingItem ? "Edit Park Document" : "Park Document Baru"}
          submitLabel={editingItem ? "Simpan Perubahan" : "Buat Park Document →"}
          initialData={editingItem?.formData}
          initialStep={editingItem ? "pengajuan-dana" : "pengajuan-dana"}
          requiresRup={false}
          existingItems={items}
          editingId={editingItem?.id}
          onClose={() => { setShowPopup(false); setEditingItem(null); }}
          onSubmit={handleCreate}
        />
      )}
    </div>
  );
}
