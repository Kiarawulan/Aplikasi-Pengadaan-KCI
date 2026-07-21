import { useState } from "react";
import { Upload, Download, FileText } from "lucide-react";
import { AdminTopBar } from "../../components/admin/AdminTopBar";
import { VerifTable } from "../../components/admin/VerifTable";
import { AdminModal, ConfirmModal, ModalField, ModalInput, ModalSelect, ModalTextarea } from "../../components/admin/AdminModal";
import { getTemplates, addTemplate, updateTemplate, deleteTemplate, generateId } from "../../store/dataStore";
import type { TemplateDokumen } from "../../types";
import { useAuth } from "../../store/authStore";

const KATEGORI_OPTIONS = [
  { value: "NPP", label: "NPP" }, { value: "SP3", label: "SP3" }, { value: "Contract", label: "Contract" },
  { value: "PBJ", label: "PBJ" }, { value: "Pengujian", label: "Pengujian" },
  { value: "Pengajuan Dana", label: "Pengajuan Dana" }, { value: "Pembayaran", label: "Pembayaran" },
  { value: "Umum", label: "Umum" },
];
const TIPE_OPTIONS = [
  { value: "DOCX", label: "Word (.docx)" }, { value: "PDF", label: "PDF (.pdf)" },
  { value: "XLSX", label: "Excel (.xlsx)" }, { value: "PPTX", label: "PowerPoint (.pptx)" },
];

function TipeBadge({ tipe }: { tipe: string }) {
  const colors: Record<string, string> = { DOCX: "bg-blue-50 text-blue-600", PDF: "bg-red-50 text-red-600", XLSX: "bg-green-50 text-green-600", PPTX: "bg-orange-50 text-orange-600" };
  const c = colors[tipe] ?? "bg-gray-50 text-gray-600";
  return <span className={`text-[9.5px] font-semibold px-1.5 py-0.5 rounded ${c}`}>{tipe}</span>;
}

export function TemplateDokumenAdminScreen() {
  const { currentUser } = useAuth();
  const [templates, setTemplates] = useState<TemplateDokumen[]>(() => getTemplates());
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<TemplateDokumen | null>(null);
  const [showDetail, setShowDetail] = useState<TemplateDokumen | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const emptyForm = (): Omit<TemplateDokumen, "id" | "uploadedBy" | "uploadedAt"> => ({
    nama: "", kategori: "NPP", tipe: "DOCX", ukuran: "—", deskripsi: "",
  });
  const [addForm, setAddForm] = useState(emptyForm());
  const [editForm, setEditForm] = useState<TemplateDokumen | null>(null);

  const refresh = () => setTemplates(getTemplates());

  const handleAdd = () => {
    if (!addForm.nama) return;
    addTemplate({
      id: generateId("TPL"),
      ...addForm,
      uploadedBy: currentUser?.name ?? "Admin",
      uploadedAt: new Date().toISOString().split("T")[0],
    });
    setShowAdd(false);
    setAddForm(emptyForm());
    refresh();
  };

  const handleEdit = () => {
    if (!editForm) return;
    updateTemplate(editForm);
    setShowEdit(null);
    setEditForm(null);
    refresh();
  };

  const handleDelete = () => {
    if (!deleteId) return;
    deleteTemplate(deleteId);
    setDeleteId(null);
    refresh();
  };

  const columns = [
    {
      key: "nama", label: "Nama Template", render: (t: TemplateDokumen) => (
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
            <FileText size={13} className="text-gray-500" />
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-[12px]">{t.nama}</p>
            <p className="text-gray-400 text-[10px]">{t.deskripsi}</p>
          </div>
        </div>
      )
    },
    { key: "kategori", label: "Kategori", render: (t: TemplateDokumen) => (
      <span className="bg-gray-100 text-gray-600 text-[10.5px] font-medium px-2 py-0.5 rounded-full">{t.kategori}</span>
    )},
    { key: "tipe", label: "Tipe", render: (t: TemplateDokumen) => <TipeBadge tipe={t.tipe} /> },
    { key: "ukuran", label: "Ukuran", render: (t: TemplateDokumen) => <span className="text-[11.5px] text-gray-500">{t.ukuran}</span> },
    { key: "upload", label: "Di-upload", render: (t: TemplateDokumen) => (
      <div>
        <p className="text-[11.5px] text-gray-600">{t.uploadedBy}</p>
        <p className="text-gray-400 text-[10px]">{t.uploadedAt}</p>
      </div>
    )},
    { key: "download", label: "Download", render: (_: TemplateDokumen) => (
      <button className="flex items-center gap-1 text-[11px] text-[#252271] font-medium hover:underline">
        <Download size={11} /> Unduh
      </button>
    )},
  ];

  return (
    <div>
      <AdminTopBar title="Template Dokumen" />

      {/* Summary bar */}
      <div className="mb-5 grid grid-cols-4 gap-3">
        {[
          { label: "Total Template", value: templates.length, color: "#252271" },
          ...["NPP", "SP3", "Contract", "PBJ"].map(k => ({
            label: k, value: templates.filter(t => t.kategori === k).length, color: "#64748b"
          })).slice(0, 3),
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-[15px]" style={{ background: s.color }}>
              {s.value}
            </div>
            <p className="text-gray-500 text-[11px]">{s.label}</p>
          </div>
        ))}
      </div>

      <VerifTable
        columns={columns}
        data={templates}
        searchKeys={["nama", "kategori", "deskripsi"]}
        onView={(t) => setShowDetail(t)}
        onEdit={(t) => { setEditForm({ ...t }); setShowEdit(t); }}
        onDelete={(t) => setDeleteId(t.id)}
        onAdd={() => { setAddForm(emptyForm()); setShowAdd(true); }}
        addLabel="Upload Template"
        showCrudActions={true}
        filterOptions={[
          { key: "kategori", label: "Kategori", options: KATEGORI_OPTIONS },
          { key: "tipe", label: "Tipe", options: TIPE_OPTIONS },
        ]}
        emptyMessage="Belum ada template dokumen"
      />

      {/* Add Modal */}
      {showAdd && (
        <AdminModal title="Upload Template Baru" onClose={() => setShowAdd(false)} onSubmit={handleAdd} submitLabel="Simpan Template" width="max-w-lg">
          <div className="space-y-3">
            <ModalField label="Nama Template" required>
              <ModalInput value={addForm.nama} onChange={v => setAddForm(p => ({ ...p, nama: v }))} placeholder="Nama template..." />
            </ModalField>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Kategori">
                <ModalSelect value={addForm.kategori} onChange={v => setAddForm(p => ({ ...p, kategori: v }))} options={KATEGORI_OPTIONS} />
              </ModalField>
              <ModalField label="Tipe File">
                <ModalSelect value={addForm.tipe} onChange={v => setAddForm(p => ({ ...p, tipe: v }))} options={TIPE_OPTIONS} />
              </ModalField>
            </div>
            <ModalField label="Deskripsi">
              <ModalInput value={addForm.deskripsi} onChange={v => setAddForm(p => ({ ...p, deskripsi: v }))} placeholder="Deskripsi singkat..." />
            </ModalField>
            <ModalField label="Ukuran File">
              <ModalInput value={addForm.ukuran} onChange={v => setAddForm(p => ({ ...p, ukuran: v }))} placeholder="contoh: 245 KB" />
            </ModalField>
            {/* Upload area (simulated) */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
              <Upload size={24} className="mx-auto text-gray-300 mb-2" />
              <p className="text-[12px] text-gray-400">Simulasi upload — klik untuk memilih file</p>
              <p className="text-[10.5px] text-gray-300 mt-1">DOCX, PDF, XLSX, PPTX maks 10MB</p>
            </div>
          </div>
        </AdminModal>
      )}

      {/* Edit Modal */}
      {showEdit && editForm && (
        <AdminModal title="Edit Template" onClose={() => { setShowEdit(null); setEditForm(null); }} onSubmit={handleEdit} submitLabel="Simpan" width="max-w-lg">
          <div className="space-y-3">
            <ModalField label="Nama Template">
              <ModalInput value={editForm.nama} onChange={v => setEditForm(p => p ? { ...p, nama: v } : p)} />
            </ModalField>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Kategori">
                <ModalSelect value={editForm.kategori} onChange={v => setEditForm(p => p ? { ...p, kategori: v } : p)} options={KATEGORI_OPTIONS} />
              </ModalField>
              <ModalField label="Tipe File">
                <ModalSelect value={editForm.tipe} onChange={v => setEditForm(p => p ? { ...p, tipe: v } : p)} options={TIPE_OPTIONS} />
              </ModalField>
            </div>
            <ModalField label="Deskripsi">
              <ModalInput value={editForm.deskripsi} onChange={v => setEditForm(p => p ? { ...p, deskripsi: v } : p)} />
            </ModalField>
          </div>
        </AdminModal>
      )}

      {/* Detail Modal */}
      {showDetail && (
        <AdminModal title="Detail Template" onClose={() => setShowDetail(null)} width="max-w-md" hideFooter>
          <div className="space-y-3">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <FileText size={22} className="text-gray-500" />
              </div>
              <div>
                <p className="font-bold text-gray-800">{showDetail.nama}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <TipeBadge tipe={showDetail.tipe} />
                  <span className="text-[10.5px] text-gray-400">{showDetail.ukuran}</span>
                </div>
              </div>
            </div>
            {[
              { l: "Kategori", v: showDetail.kategori },
              { l: "Deskripsi", v: showDetail.deskripsi || "—" },
              { l: "Di-upload oleh", v: showDetail.uploadedBy },
              { l: "Tanggal upload", v: showDetail.uploadedAt },
            ].map(f => (
              <div key={f.l}><p className="text-[10px] text-gray-400">{f.l}</p><p className="text-[12.5px] text-gray-700">{f.v}</p></div>
            ))}
            <button className="w-full h-9 rounded-xl bg-[#252271] text-white text-[12.5px] font-semibold flex items-center justify-center gap-2">
              <Download size={14} /> Download Template
            </button>
          </div>
        </AdminModal>
      )}

      {/* Confirm Delete */}
      {deleteId && (
        <ConfirmModal
          title="Hapus Template"
          message="Yakin ingin menghapus template ini? Dokumen tidak bisa dipulihkan."
          onConfirm={handleDelete}
          onClose={() => setDeleteId(null)}
          confirmLabel="Ya, Hapus"
          destructive
        />
      )}
    </div>
  );
}
