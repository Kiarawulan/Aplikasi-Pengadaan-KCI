import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { AdminTopBar } from "../../../components/admin/AdminTopBar";
import { VerifTable } from "../../../components/admin/VerifTable";
import { AdminModal, ModalField, ModalInput, ModalSelect, ModalTextarea } from "../../../components/admin/AdminModal";
import { getPengujianList, savePengujianList, generateId } from "../../../store/dataStore";

type PengujianItem = {
  id: string;
  nama: string;
  pemohon: string;
  departemen: string;
  tanggal: string;
  status: string;
  catatan: string;
};

const STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "proses", label: "Proses" },
  { value: "selesai", label: "Selesai" },
  { value: "ditolak", label: "Ditolak" },
];

const DEPT_OPTIONS = [
  { value: "CTIT", label: "CTIT" }, { value: "Logistik", label: "Logistik" },
  { value: "Finance", label: "Finance" }, { value: "HRD", label: "HRD" },
  { value: "PBJ", label: "PBJ" }, { value: "Warehouse", label: "Warehouse" },
];

function StatusPengujianBadge({ status }: { status: string }) {
  const cfg: Record<string, { bg: string; text: string }> = {
    pending: { bg: "bg-amber-50", text: "text-amber-600" },
    proses: { bg: "bg-blue-50", text: "text-blue-600" },
    selesai: { bg: "bg-green-50", text: "text-green-600" },
    ditolak: { bg: "bg-red-50", text: "text-red-600" },
  };
  const c = cfg[status] ?? { bg: "bg-gray-50", text: "text-gray-600" };
  const label = status.charAt(0).toUpperCase() + status.slice(1);
  return <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-medium ${c.bg} ${c.text}`}>{label}</span>;
}

export function PengujianVerifScreen() {
  const [items, setItems] = useState<PengujianItem[]>(() => getPengujianList());
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<PengujianItem | null>(null);
  const [showDetail, setShowDetail] = useState<PengujianItem | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const empty = (): PengujianItem => ({
    id: generateId("PUJ"), nama: "", pemohon: "", departemen: "", tanggal: new Date().toISOString().split("T")[0], status: "pending", catatan: "",
  });
  const [form, setForm] = useState<PengujianItem>(empty());
  const [editForm, setEditForm] = useState<PengujianItem>(empty());

  const refresh = () => {
    api.get("/pengujian").then(res => setItems(res.data)).catch(() => setItems(getPengujianList()));
  };

  useEffect(() => {
    refresh();
  }, []);

  const handleAdd = () => {
    if (!form.nama) return;
    api.post("/pengujian", form).then(() => refresh()).catch(() => {
      const updated = [...getPengujianList(), form];
      savePengujianList(updated);
      refresh();
    });
    setShowAdd(false);
    setForm(empty());
  };

  const handleEdit = () => {
    api.put(`/pengujian/${editForm.id}`, editForm).then(() => refresh()).catch(() => {
      const updated = getPengujianList().map(i => i.id === editForm.id ? editForm : i);
      savePengujianList(updated);
      refresh();
    });
    setShowEdit(null);
  };

  const handleDelete = () => {
    if (!deleteId) return;
    api.delete(`/pengujian/${deleteId}`).then(() => refresh()).catch(() => {
      const updated = getPengujianList().filter(i => i.id !== deleteId);
      savePengujianList(updated);
      refresh();
    });
    setDeleteId(null);
  };

  const handleStatusChange = (item: PengujianItem, newStatus: string) => {
    api.post(`/pengujian/${item.id}/advance-status`, { status: newStatus }).then(() => refresh()).catch(() => {
      const updated = getPengujianList().map(i => i.id === item.id ? { ...i, status: newStatus } : i);
      savePengujianList(updated);
      refresh();
    });
  };

  const columns = [
    { key: "nama", label: "Nama Barang/Jasa", render: (r: PengujianItem) => (
      <div><p className="font-semibold text-gray-800 text-[12px]">{r.nama}</p><p className="text-gray-400 text-[10px]">{r.id}</p></div>
    )},
    { key: "pemohon", label: "Pemohon", render: (r: PengujianItem) => <span className="text-[11.5px] text-gray-700">{r.pemohon}</span> },
    { key: "dept", label: "Departemen", render: (r: PengujianItem) => <span className="text-[11.5px] text-gray-600">{r.departemen}</span> },
    { key: "tanggal", label: "Tanggal", render: (r: PengujianItem) => (
      <span className="text-[11.5px] text-gray-500">{new Date(r.tanggal).toLocaleDateString("id-ID")}</span>
    )},
    { key: "status", label: "Status", render: (r: PengujianItem) => (
      <div className="flex items-center gap-2">
        <StatusPengujianBadge status={r.status} />
        {r.status === "pending" && (
          <button onClick={() => handleStatusChange(r, "proses")}
            className="text-[10px] text-blue-600 hover:underline font-medium">→ Proses</button>
        )}
        {r.status === "proses" && (
          <button onClick={() => handleStatusChange(r, "selesai")}
            className="text-[10px] text-green-600 hover:underline font-medium">→ Selesai</button>
        )}
      </div>
    )},
    { key: "catatan", label: "Catatan", render: (r: PengujianItem) => (
      <span className="text-[11px] text-gray-500 truncate max-w-32 block">{r.catatan || "—"}</span>
    )},
  ];

  // Stats
  const stats = {
    total: items.length,
    pending: items.filter(i => i.status === "pending").length,
    proses: items.filter(i => i.status === "proses").length,
    selesai: items.filter(i => i.status === "selesai").length,
  };

  return (
    <div>
      <AdminTopBar title="Verifikasi Pengujian" subtitle="Verifikasi" />

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        {[
          { label: "Total", value: stats.total, color: "#252271" },
          { label: "Pending", value: stats.pending, color: "#d97706" },
          { label: "Proses", value: stats.proses, color: "#2563eb" },
          { label: "Selesai", value: stats.selesai, color: "#16a34a" },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-[16px]" style={{ background: s.color }}>
              {s.value}
            </div>
            <p className="text-gray-500 text-[11px]">{s.label}</p>
          </div>
        ))}
      </div>

      <VerifTable
        columns={columns}
        data={items}
        searchKeys={["nama", "pemohon", "departemen"]}
        onView={(r) => setShowDetail(r)}
        onEdit={(r) => { setEditForm({ ...r }); setShowEdit(r); }}
        onDelete={(r) => setDeleteId(r.id)}
        onAdd={() => { setForm(empty()); setShowAdd(true); }}
        addLabel="Tambah Pengujian"
        showCrudActions={true}
        filterOptions={[
          { key: "status", label: "Status", options: STATUS_OPTIONS },
          { key: "departemen", label: "Dept", options: DEPT_OPTIONS },
        ]}
        emptyMessage="Tidak ada data pengujian"
      />

      {/* Add Modal */}
      {showAdd && (
        <AdminModal title="Tambah Pengujian" onClose={() => setShowAdd(false)} onSubmit={handleAdd} submitLabel="Tambah" width="max-w-md">
          <div className="space-y-3">
            <ModalField label="Nama Barang/Jasa" required>
              <ModalInput value={form.nama} onChange={v => setForm(p => ({ ...p, nama: v }))} placeholder="Nama barang/jasa yang diuji..." />
            </ModalField>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Pemohon">
                <ModalInput value={form.pemohon} onChange={v => setForm(p => ({ ...p, pemohon: v }))} placeholder="Nama pemohon..." />
              </ModalField>
              <ModalField label="Departemen">
                <ModalSelect value={form.departemen} onChange={v => setForm(p => ({ ...p, departemen: v }))} options={DEPT_OPTIONS} placeholder="Pilih..." />
              </ModalField>
            </div>
            <ModalField label="Tanggal Pengujian">
              <ModalInput type="date" value={form.tanggal} onChange={v => setForm(p => ({ ...p, tanggal: v }))} />
            </ModalField>
            <ModalField label="Catatan">
              <ModalTextarea value={form.catatan} onChange={v => setForm(p => ({ ...p, catatan: v }))} placeholder="Catatan tambahan..." rows={3} />
            </ModalField>
          </div>
        </AdminModal>
      )}

      {/* Edit Modal */}
      {showEdit && (
        <AdminModal title="Edit Pengujian" onClose={() => setShowEdit(null)} onSubmit={handleEdit} submitLabel="Simpan" width="max-w-md">
          <div className="space-y-3">
            <ModalField label="Nama Barang/Jasa">
              <ModalInput value={editForm.nama} onChange={v => setEditForm(p => ({ ...p, nama: v }))} />
            </ModalField>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Pemohon">
                <ModalInput value={editForm.pemohon} onChange={v => setEditForm(p => ({ ...p, pemohon: v }))} />
              </ModalField>
              <ModalField label="Departemen">
                <ModalSelect value={editForm.departemen} onChange={v => setEditForm(p => ({ ...p, departemen: v }))} options={DEPT_OPTIONS} />
              </ModalField>
            </div>
            <ModalField label="Status">
              <ModalSelect value={editForm.status} onChange={v => setEditForm(p => ({ ...p, status: v }))} options={STATUS_OPTIONS} />
            </ModalField>
            <ModalField label="Catatan">
              <ModalTextarea value={editForm.catatan} onChange={v => setEditForm(p => ({ ...p, catatan: v }))} rows={3} />
            </ModalField>
          </div>
        </AdminModal>
      )}

      {/* Detail Modal */}
      {showDetail && (
        <AdminModal title="Detail Pengujian" onClose={() => setShowDetail(null)} width="max-w-sm" hideFooter>
          <div className="space-y-3">
            {[
              { l: "Nama", v: showDetail.nama }, { l: "Pemohon", v: showDetail.pemohon },
              { l: "Departemen", v: showDetail.departemen }, { l: "Tanggal", v: new Date(showDetail.tanggal).toLocaleDateString("id-ID") },
            ].map(f => (
              <div key={f.l}><p className="text-[10px] text-gray-400">{f.l}</p><p className="text-[12.5px] font-semibold text-gray-700">{f.v}</p></div>
            ))}
            <div><p className="text-[10px] text-gray-400">Status</p><StatusPengujianBadge status={showDetail.status} /></div>
            {showDetail.catatan && <div><p className="text-[10px] text-gray-400">Catatan</p><p className="text-[12px] text-gray-700">{showDetail.catatan}</p></div>}
          </div>
        </AdminModal>
      )}

      {/* Confirm delete */}
      {deleteId && (
        <AdminModal title="Hapus Pengujian" onClose={() => setDeleteId(null)} onSubmit={handleDelete} submitLabel="Ya, Hapus" submitDestructive width="max-w-sm">
          <p className="text-[13px] text-gray-600">Yakin ingin menghapus data pengujian ini?</p>
        </AdminModal>
      )}
    </div>
  );
}
