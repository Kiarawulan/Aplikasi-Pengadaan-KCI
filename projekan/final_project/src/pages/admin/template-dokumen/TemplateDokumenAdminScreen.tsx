import { useState, useMemo, useEffect, useRef } from "react";
import { Upload, Download, FileText, Trash2, Edit3, Eye, Plus, Search, X } from "lucide-react";
import { AdminTopBar } from "@/components/admin/layout/AdminTopBar";
import { AdminUploadBar } from "@/components/admin/shared/AdminUploadBar";
import { useAuth } from "@/store/authStore";
import { api } from "@/services/api";
import { WarningModal, WarningVariant } from "@/components/common/WarningModal";
import { getFigmaCaptureConfig } from "@/figmaCapture";


// ─── Types ─────────────────────────────────────────────────────────────────────
interface Template {
  id: string;
  judul: string;
  kategoriUtama: "Pengadaan" | "Pengajuan Dana" | "Pengujian" | "Pembayaran";
  subkategori: string;
  tipeFile: string;
  ukuran: string;
  uploadedBy: string;
  uploadedAt: string;
  deskripsi: string;
}

type KategoriUtama = "Pengadaan" | "Pengajuan Dana" | "Pengujian" | "Pembayaran";

const SUBKATEGORI_MAP: Record<KategoriUtama, string[]> = {
  Pengadaan: ["RUP", "NPP", "SP3", "PBJ", "Kontrak"],
  "Pengajuan Dana": ["Park Document", "Purchase Requisition"],
  Pengujian: ["Request Pengujian", "BAHP"],
  Pembayaran: ["Outsource", "Non Outsource", "UMD"],
};

const TIPE_OPTIONS = ["DOCX", "PDF", "XLSX", "PPTX"];

function downloadTemplate(t: Template) {
  const content = `PT KERETA COMMUTER INDONESIA (KCI)\nTEMPLATE DOKUMEN SISTEM\n=========================================\nJudul Template  : ${t.judul}\nKategori Utama  : ${t.kategoriUtama}\nSubkategori     : ${t.subkategori}\nTipe File       : ${t.tipeFile}\nUkuran Berkas   : ${t.ukuran}\nDi-upload Oleh  : ${t.uploadedBy}\nTanggal Upload  : ${t.uploadedAt}\nDeskripsi       : ${t.deskripsi || "Dokumen template resmi KCI."}\n=========================================\nDokumen ini adalah template resmi untuk simulasi pengajuan.`;
  const ext = t.tipeFile.toLowerCase();
  const blob = new Blob([content], { type: "application/octet-stream;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const cleanTitle = t.judul.replace(/[^a-zA-Z0-9_-]/g, "_");
  a.download = `${cleanTitle}.${ext}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ─── Mock Templates ────────────────────────────────────────────────────────────
const INITIAL_TEMPLATES: Template[] = [
  { id: "TPL-001", judul: "Template RUP Pengadaan Barang", kategoriUtama: "Pengadaan", subkategori: "RUP", tipeFile: "DOCX", ukuran: "245 KB", uploadedBy: "Admin", uploadedAt: "2024-07-15", deskripsi: "Template standar untuk pengajuan RUP" },
  { id: "TPL-002", judul: "Form NPP Pengadaan IT", kategoriUtama: "Pengadaan", subkategori: "NPP", tipeFile: "DOCX", ukuran: "180 KB", uploadedBy: "Admin", uploadedAt: "2024-07-10", deskripsi: "Form Nota Permintaan Pengadaan" },
  { id: "TPL-003", judul: "Template Pengajuan Dana", kategoriUtama: "Pengajuan Dana", subkategori: "Purchase Requisition", tipeFile: "XLSX", ukuran: "120 KB", uploadedBy: "Admin", uploadedAt: "2024-06-20", deskripsi: "Template pengajuan dana operasional" },
  { id: "TPL-004", judul: "Surat Perintah Pekerjaan (SP3)", kategoriUtama: "Pengadaan", subkategori: "SP3", tipeFile: "DOCX", ukuran: "95 KB", uploadedBy: "Admin", uploadedAt: "2024-06-18", deskripsi: "Template SP3" },
  { id: "TPL-005", judul: "Form PBJ", kategoriUtama: "Pengadaan", subkategori: "PBJ", tipeFile: "DOCX", ukuran: "210 KB", uploadedBy: "Admin", uploadedAt: "2024-06-15", deskripsi: "Template Pejabat Bersertifikat Jasa" },
  { id: "TPL-006", judul: "Draft Kontrak Pengadaan", kategoriUtama: "Pengadaan", subkategori: "Kontrak", tipeFile: "DOCX", ukuran: "380 KB", uploadedBy: "Admin", uploadedAt: "2024-05-22", deskripsi: "Template kontrak standar pengadaan" },
  { id: "TPL-007", judul: "Form Request Pengujian", kategoriUtama: "Pengujian", subkategori: "Request Pengujian", tipeFile: "DOCX", ukuran: "150 KB", uploadedBy: "Admin", uploadedAt: "2024-07-01", deskripsi: "Form permintaan pengujian barang" },
  { id: "TPL-008", judul: "Template BAHP", kategoriUtama: "Pengujian", subkategori: "BAHP", tipeFile: "PDF", ukuran: "290 KB", uploadedBy: "Admin", uploadedAt: "2024-06-28", deskripsi: "Berita Acara Hasil Pengujian" },
  { id: "TPL-009", judul: "Invoice Outsource", kategoriUtama: "Pembayaran", subkategori: "Outsource", tipeFile: "XLSX", ukuran: "100 KB", uploadedBy: "Admin", uploadedAt: "2024-07-05", deskripsi: "Template invoice pembayaran outsource" },
  { id: "TPL-010", judul: "Invoice Non Outsource", kategoriUtama: "Pembayaran", subkategori: "Non Outsource", tipeFile: "XLSX", ukuran: "95 KB", uploadedBy: "Admin", uploadedAt: "2024-07-03", deskripsi: "Template invoice non-outsource" },
  { id: "TPL-011", judul: "Form UMD", kategoriUtama: "Pembayaran", subkategori: "UMD", tipeFile: "DOCX", ukuran: "78 KB", uploadedBy: "Admin", uploadedAt: "2024-06-25", deskripsi: "Template Uang Muka Dinas" },
];

// ─── Badge Components ──────────────────────────────────────────────────────────
const TIPE_BADGE_COLORS: Record<string, string> = {
  DOCX: "bg-blue-50 text-blue-600 border-blue-200",
  PDF: "bg-red-50 text-red-600 border-red-200",
  XLSX: "bg-green-50 text-green-600 border-green-200",
  PPTX: "bg-orange-50 text-orange-600 border-orange-200",
};

const KATEGORI_TAB_COLORS: Record<KategoriUtama, { active: string; count: string }> = {
  Pengadaan: { active: "from-[#e6251c] to-[#7a1210]", count: "bg-red-100 text-red-700" },
  "Pengajuan Dana": { active: "from-[#e6251c] to-[#7a1210]", count: "bg-violet-100 text-violet-700" },
  Pengujian: { active: "from-[#e6251c] to-[#7a1210]", count: "bg-teal-100 text-teal-700" },
  Pembayaran: { active: "from-[#e6251c] to-[#7a1210]", count: "bg-amber-100 text-amber-700" },
};

const SUB_BADGE_COLORS: Record<string, string> = {
  RUP: "bg-blue-50 text-blue-700", NPP: "bg-purple-50 text-purple-700", "Pengajuan Dana": "bg-amber-50 text-amber-700",
  SP3: "bg-rose-50 text-rose-700", PBJ: "bg-indigo-50 text-indigo-700", Kontrak: "bg-teal-50 text-teal-700",
  "Request Pengujian": "bg-cyan-50 text-cyan-700", BAHP: "bg-emerald-50 text-emerald-700",
  Outsource: "bg-lime-50 text-lime-700", "Non Outsource": "bg-orange-50 text-orange-700", UMD: "bg-fuchsia-50 text-fuchsia-700",
};

// ─── Add/Edit Modal ────────────────────────────────────────────────────────────
function TemplateModal({ title, initial, existingTemplates = [], onSave, onClose }: {
  title: string;
  initial?: Template;
  existingTemplates?: Template[];
  onSave: (data: Omit<Template, "id" | "uploadedBy" | "uploadedAt">) => void;
  onClose: () => void;
}) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [judul, setJudul] = useState(initial?.judul || "");
  const [kategoriUtama, setKategoriUtama] = useState<KategoriUtama>(initial?.kategoriUtama || "Pengadaan");
  const [subkategori, setSubkategori] = useState(initial?.subkategori || SUBKATEGORI_MAP["Pengadaan"][0]);
  const [tipeFile, setTipeFile] = useState(initial?.tipeFile || "DOCX");
  const [ukuran, setUkuran] = useState(initial?.ukuran || "—");
  const [deskripsi, setDeskripsi] = useState(initial?.deskripsi || "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [warning, setWarning] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    detail?: string;
    variant: WarningVariant;
  }>({
    isOpen: false,
    title: "",
    message: "",
    variant: "warning",
  });

  const handleKategoriChange = (k: KategoriUtama) => {
    setKategoriUtama(k);
    setSubkategori(SUBKATEGORI_MAP[k][0]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);

    const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf(".")) || file.name;
    if (!judul) setJudul(nameWithoutExt);

    const ext = file.name.split(".").pop()?.toUpperCase() || "DOCX";
    if (TIPE_OPTIONS.includes(ext)) {
      setTipeFile(ext);
    }

    const sizeKB = (file.size / 1024).toFixed(0);
    const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
    setUkuran(file.size > 1024 * 1024 ? `${sizeMB} MB` : `${sizeKB} KB`);
  };

  const handleFormSubmit = () => {
    const trimmedTitle = judul.trim();
    if (!trimmedTitle) return;

    const isDuplicate = existingTemplates.some(t => {
      if (initial?.id && t.id === initial.id) return false;
      return t.judul.trim().toLowerCase() === trimmedTitle.toLowerCase();
    });

    if (isDuplicate) {
      setWarning({
        isOpen: true,
        title: "Judul Template Sudah Digunakan",
        message: `Template dokumen dengan judul "${trimmedTitle}" sudah terdaftar dalam sistem. Tidak diperbolehkan menambahkan template dengan judul yang sama.`,
        variant: "duplicate",
      });
      return;
    }

    onSave({ judul: trimmedTitle, kategoriUtama, subkategori, tipeFile, ukuran: ukuran !== "—" ? ukuran : "180 KB", deskripsi });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <h3 className="text-[18px] font-bold text-[#252271]">{title}</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
            <X size={16} className="text-gray-400" />
          </button>
        </div>

        {/* Form */}
        <div className="px-6 py-5 space-y-4 max-h-[60vh] overflow-y-auto">
          {/* File Input */}
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".docx,.pdf,.xlsx,.pptx,.doc,.xls,.ppt"
            onChange={handleFileChange}
          />

          {/* Upload area */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="hidden"
          >
            {selectedFile ? (
              <div className="flex items-center justify-between bg-blue-50/80 border border-blue-200/80 rounded-xl p-3 text-left">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#252271] flex items-center justify-center shrink-0 text-white font-bold text-xs">
                    {tipeFile}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] font-bold text-gray-800 truncate">{selectedFile.name}</p>
                    <p className="text-[10px] text-gray-500">{ukuran}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(null);
                  }}
                  className="p-1 rounded-md hover:bg-blue-100 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <>
                <Upload size={30} className="mx-auto text-gray-400 mb-2 group-hover:text-[#252271] group-hover:scale-110 transition-all" />
                <p className="text-[12.5px] text-gray-700 font-semibold">Klik untuk memilih file template</p>
                <p className="text-[10.5px] text-gray-400 mt-1">DOCX, PDF, XLSX, PPTX • Maks 10MB</p>
              </>
            )}
          </div>

          <AdminUploadBar
            title="Unggah File Template"
            description="File template dapat berupa DOCX, PDF, XLSX, atau PPTX dengan ukuran maksimal 10MB."
            buttonText="Pilih File Template"
            selectedFileName={selectedFile?.name}
            accept=".docx,.pdf,.xlsx,.pptx,.doc,.xls,.ppt"
            onFileSelected={(file) => handleFileChange({ target: { files: [file] } } as any)}
          />

          {/* Judul */}
          <div>
            <label className="text-[11.5px] font-semibold text-gray-500 mb-1 block">Judul Template <span className="text-red-400">*</span></label>
            <input
              value={judul} onChange={e => setJudul(e.target.value)}
              className="w-full h-10 rounded-xl border border-gray-200 px-4 text-[12.5px] text-gray-800 outline-none focus:border-[#252271] transition-colors"
              placeholder="Nama template dokumen..."
            />
          </div>

          {/* Kategori Utama */}
          <div>
            <label className="text-[11.5px] font-semibold text-gray-500 mb-1.5 block">Kategori Utama</label>
            <div className="flex gap-2">
              {(["Pengadaan", "Pengajuan Dana", "Pengujian", "Pembayaran"] as KategoriUtama[]).map(k => (
                <button
                  key={k}
                  onClick={() => handleKategoriChange(k)}
                  className={`flex-1 py-2 rounded-xl text-[12px] font-semibold transition-all ${
                    kategoriUtama === k
                      ? "text-white shadow-sm"
                      : "text-gray-500 bg-gray-50 border border-gray-200 hover:bg-gray-100"
                  }`}
                  style={kategoriUtama === k ? { background: `linear-gradient(75deg, ${KATEGORI_TAB_COLORS[k].active.replace("from-[", "").replace("]", "").split(" to-[")[0]}, ${KATEGORI_TAB_COLORS[k].active.replace("from-[", "").replace("]", "").split(" to-[")[1]?.replace("]","")})` } : {}}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          {/* Subkategori */}
          <div>
            <label className="text-[11.5px] font-semibold text-gray-500 mb-1 block">Subkategori / Jenis Dokumen</label>
            <select
              value={subkategori} onChange={e => setSubkategori(e.target.value)}
              className="w-full h-10 rounded-xl border border-gray-200 px-4 text-[12.5px] text-gray-800 outline-none focus:border-[#252271] transition-colors cursor-pointer"
            >
              {SUBKATEGORI_MAP[kategoriUtama].map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          {/* Tipe File */}
          <div>
            <label className="text-[11.5px] font-semibold text-gray-500 mb-1 block">Tipe File</label>
            <select
              value={tipeFile} onChange={e => setTipeFile(e.target.value)}
              className="w-full h-10 rounded-xl border border-gray-200 px-4 text-[12.5px] text-gray-800 outline-none focus:border-[#252271] transition-colors cursor-pointer"
            >
              {TIPE_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          {/* Deskripsi */}
          <div>
            <label className="text-[11.5px] font-semibold text-gray-500 mb-1 block">Deskripsi</label>
            <textarea
              value={deskripsi} onChange={e => setDeskripsi(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-[12.5px] text-gray-800 outline-none focus:border-[#252271] transition-colors resize-none h-20"
              placeholder="Deskripsi singkat template..."
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 pt-3 flex justify-end gap-3 border-t border-gray-100">
          <button onClick={onClose} className="px-5 py-2.5 rounded-xl text-[12.5px] font-medium text-gray-500 hover:bg-gray-100 transition-colors">
            Batal
          </button>
          <button
            onClick={handleFormSubmit}
            disabled={!judul.trim()}
            className="px-6 py-2.5 rounded-xl text-[12.5px] font-semibold text-white bg-gradient-to-b from-[#e6251c] to-[#c20f06] hover:brightness-110 active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none"
          >
            Simpan Template
          </button>
        </div>
      </div>

      <WarningModal
        isOpen={warning.isOpen}
        onClose={() => setWarning(prev => ({ ...prev, isOpen: false }))}
        title={warning.title}
        message={warning.message}
        detail={warning.detail}
        variant={warning.variant}
      />
    </div>
  );
}

// ─── Detail Modal ──────────────────────────────────────────────────────────────
function DetailModal({ template, onClose }: { template: Template; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-[18px] font-bold text-[#252271]">Detail Template</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <X size={16} className="text-gray-400" />
          </button>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center">
              <FileText size={24} className="text-gray-500" />
            </div>
            <div>
              <p className="font-bold text-gray-800 text-[15px]">{template.judul}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${TIPE_BADGE_COLORS[template.tipeFile] || "bg-gray-50 text-gray-600 border-gray-200"}`}>{template.tipeFile}</span>
                <span className="text-[10.5px] text-gray-400">{template.ukuran}</span>
              </div>
            </div>
          </div>
          {[
            { l: "Kategori Utama", v: template.kategoriUtama },
            { l: "Subkategori", v: template.subkategori },
            { l: "Deskripsi", v: template.deskripsi || "—" },
            { l: "Di-upload oleh", v: template.uploadedBy },
            { l: "Tanggal upload", v: template.uploadedAt },
          ].map(f => (
            <div key={f.l}><p className="text-[10px] text-gray-400 font-medium">{f.l}</p><p className="text-[12.5px] text-gray-700">{f.v}</p></div>
          ))}
          <button
            onClick={() => downloadTemplate(template)}
            className="w-full h-10 rounded-xl bg-[#252271] text-white text-[12.5px] font-semibold flex items-center justify-center gap-2 hover:bg-[#1a1a5e] transition-colors cursor-pointer"
          >
            <Download size={14} /> Download Template
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Confirm Delete Modal ──────────────────────────────────────────────────────
function ConfirmDeleteModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl p-6 text-center" onClick={e => e.stopPropagation()}>
        <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
          <Trash2 size={24} className="text-red-500" />
        </div>
        <h3 className="text-[16px] font-bold text-gray-800 mb-1">Hapus Template?</h3>
        <p className="text-[12px] text-gray-400 mb-5">Dokumen yang dihapus tidak bisa dipulihkan.</p>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 h-10 rounded-xl border border-gray-200 text-gray-500 text-[12.5px] font-medium hover:bg-gray-50 transition-colors">Batal</button>
          <button onClick={onConfirm} className="flex-1 h-10 rounded-xl bg-red-500 text-white text-[12.5px] font-semibold hover:bg-red-600 transition-colors">Ya, Hapus</button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Screen ───────────────────────────────────────────────────────────────
export function TemplateDokumenAdminScreen() {
  const { currentUser } = useAuth();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [activeTab, setActiveTab] = useState<KategoriUtama>(getFigmaCaptureConfig()?.templateTab || "Pengadaan");
  const [search, setSearch] = useState("");
  const [subFilter, setSubFilter] = useState("Semua");
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<Template | null>(null);
  const [showDetail, setShowDetail] = useState<Template | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const loadTemplates = async () => {
    const response = await api.get("/templates");
    setTemplates((response.data || []).map((item: any): Template => {
      const [rawCategory, rawSubcategory] = String(item.kategori || "Pengadaan|RUP").split("|");
      const legacyPengajuanDana = rawCategory === "Pengadaan" && rawSubcategory === "Pengajuan Dana";
      const kategoriUtama: KategoriUtama = legacyPengajuanDana
        ? "Pengajuan Dana"
        : ["Pengadaan", "Pengajuan Dana", "Pengujian", "Pembayaran"].includes(rawCategory) ? rawCategory as KategoriUtama : "Pengadaan";
      return {
        id: item.id,
        judul: item.nama,
        kategoriUtama,
        subkategori: legacyPengajuanDana ? "Purchase Requisition" : rawSubcategory || SUBKATEGORI_MAP[kategoriUtama][0],
        tipeFile: item.tipe,
        ukuran: item.ukuran || "â€”",
        uploadedBy: item.uploaded_by || "Admin",
        uploadedAt: item.uploaded_at || item.created_at || "â€”",
        deskripsi: item.deskripsi || "",
      };
    }));
  };

  useEffect(() => { loadTemplates().catch((error) => console.error("Gagal memuat template dokumen:", error)); }, []);

  // ── Filtered data ─────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    return templates.filter(t => {
      if (t.kategoriUtama !== activeTab) return false;
      if (subFilter !== "Semua" && t.subkategori !== subFilter) return false;
      if (search && !t.judul.toLowerCase().includes(search.toLowerCase()) && !t.deskripsi.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [templates, activeTab, subFilter, search]);

  const tabCounts = useMemo(() => ({
    Pengadaan: templates.filter(t => t.kategoriUtama === "Pengadaan").length,
    "Pengajuan Dana": templates.filter(t => t.kategoriUtama === "Pengajuan Dana").length,
    Pengujian: templates.filter(t => t.kategoriUtama === "Pengujian").length,
    Pembayaran: templates.filter(t => t.kategoriUtama === "Pembayaran").length,
  }), [templates]);

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleAdd = async (data: Omit<Template, "id" | "uploadedBy" | "uploadedAt">) => {
    await api.post("/templates", { nama: data.judul, kategori: `${data.kategoriUtama}|${data.subkategori}`, tipe: data.tipeFile, ukuran: data.ukuran, deskripsi: data.deskripsi });
    await loadTemplates();
    setShowAdd(false);
  };

  const handleEdit = async (data: Omit<Template, "id" | "uploadedBy" | "uploadedAt">) => {
    if (!showEdit) return;
    await api.put(`/templates/${showEdit.id}`, { nama: data.judul, kategori: `${data.kategoriUtama}|${data.subkategori}`, tipe: data.tipeFile, ukuran: data.ukuran, deskripsi: data.deskripsi });
    await loadTemplates();
    setShowEdit(null);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    await api.delete(`/templates/${deleteId}`);
    await loadTemplates();
    setDeleteId(null);
  };

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc] select-none">
      <div className="max-w-[1280px] mx-auto px-6 py-6">
        <AdminTopBar title="Template Dokumen" subtitle="Kelola template dokumen sistem" />

        {/* Summary bar */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          <div className="bg-gradient-to-br from-[#252271] to-[#3b3baa] rounded-2xl p-5 text-white shadow-lg">
            <p className="text-white/65 text-[11px] font-medium uppercase tracking-wider">Total Template</p>
            <p className="text-[30px] font-extrabold leading-tight mt-1">{templates.length}</p>
          </div>
          {(["Pengadaan", "Pengajuan Dana", "Pengujian", "Pembayaran"] as KategoriUtama[]).map(k => (
            <div key={k} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">{k}</p>
              <p className="text-[28px] font-extrabold text-gray-800 leading-tight mt-1">{tabCounts[k]}</p>
              <p className="text-[10px] text-gray-300 mt-0.5">{SUBKATEGORI_MAP[k].length} subkategori</p>
            </div>
          ))}
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-3 mb-5">
          {(["Pengadaan", "Pengajuan Dana", "Pengujian", "Pembayaran"] as KategoriUtama[]).map(k => (
            <button
              key={k}
              onClick={() => { setActiveTab(k); setSubFilter("Semua"); }}
              className={`relative px-5 py-2.5 rounded-2xl text-[12.5px] font-semibold transition-all ${
                activeTab === k
                  ? "text-white shadow-lg"
                  : "text-gray-500 bg-white border border-gray-200 hover:bg-gray-50"
              }`}
              style={activeTab === k ? { background: `linear-gradient(75deg, #e6251c, #7a1210)` } : {}}
            >
              {k}
              <span className={`ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                activeTab === k ? "bg-white/25 text-white" : KATEGORI_TAB_COLORS[k].count
              }`}>
                {tabCounts[k]}
              </span>
            </button>
          ))}
        </div>

        {/* Sub-filter chips + Search + Add button */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex gap-2 flex-1 flex-wrap">
            <button
              onClick={() => setSubFilter("Semua")}
              className={`px-3 py-1.5 rounded-xl text-[11.5px] font-medium transition-all ${
                subFilter === "Semua" ? "bg-[#252271] text-white" : "text-gray-500 bg-white border border-gray-200 hover:bg-gray-50"
              }`}
            >
              Semua
            </button>
            {SUBKATEGORI_MAP[activeTab].map(s => (
              <button
                key={s}
                onClick={() => setSubFilter(s)}
                className={`px-3 py-1.5 rounded-xl text-[11.5px] font-medium transition-all ${
                  subFilter === s ? "bg-[#252271] text-white" : "text-gray-500 bg-white border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              className="h-9 pl-9 pr-4 rounded-xl border border-gray-200 bg-white text-[12px] text-gray-700 outline-none focus:border-[#252271] w-52 transition-colors"
              placeholder="Cari template..."
            />
          </div>
          <button
            onClick={() => setShowAdd(true)}
            className="h-9 px-4 rounded-xl text-[12px] font-semibold text-white bg-gradient-to-b from-[#e6251c] to-[#c20f06] flex items-center gap-1.5 hover:brightness-110 active:scale-95 transition-all shrink-0"
          >
            <Plus size={14} /> Tambah Template
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden">
          {/* Table header */}
          <div className="bg-[#252271] grid grid-cols-12 gap-2 text-[11px] font-bold text-white uppercase tracking-wider">
            <div className="col-span-4 px-5 py-3">Nama Template</div>
            <div className="col-span-2 px-3 py-3">Subkategori</div>
            <div className="col-span-1 px-3 py-3">Tipe</div>
            <div className="col-span-1 px-3 py-3">Ukuran</div>
            <div className="col-span-2 px-3 py-3">Di-upload</div>
            <div className="col-span-2 px-3 py-3 text-right">Aksi</div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <FileText size={40} className="mx-auto text-gray-200 mb-3" />
              <p className="text-[13px] text-gray-400">Tidak ada template ditemukan</p>
            </div>
          ) : (
            filtered.map((t, i) => (
              <div
                key={t.id}
                className={`grid grid-cols-12 gap-2 items-center hover:bg-[#fafbff] transition-colors group ${i > 0 ? "border-t border-gray-100" : ""}`}
              >
                <div className="col-span-4 px-5 py-3.5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                    <FileText size={16} className="text-gray-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-semibold text-gray-800 truncate">{t.judul}</p>
                    <p className="text-[10px] text-gray-400 truncate">{t.deskripsi}</p>
                  </div>
                </div>
                <div className="col-span-2 px-3 py-3.5">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${SUB_BADGE_COLORS[t.subkategori] || "bg-gray-100 text-gray-600"}`}>{t.subkategori}</span>
                </div>
                <div className="col-span-1 px-3 py-3.5">
                  <span className={`text-[9.5px] font-bold px-2 py-0.5 rounded border ${TIPE_BADGE_COLORS[t.tipeFile] || "bg-gray-50 text-gray-600 border-gray-200"}`}>{t.tipeFile}</span>
                </div>
                <div className="col-span-1 px-3 py-3.5">
                  <span className="text-[11px] text-gray-500">{t.ukuran}</span>
                </div>
                <div className="col-span-2 px-3 py-3.5">
                  <p className="text-[11px] text-gray-600">{t.uploadedBy}</p>
                  <p className="text-[9.5px] text-gray-400">{t.uploadedAt}</p>
                </div>
                <div className="col-span-2 px-3 py-3.5 flex items-center justify-end gap-1">
                  <button onClick={() => setShowDetail(t)} className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors" title="Lihat Detail">
                    <Eye size={11} className="text-blue-600" />
                  </button>
                  <button onClick={() => setShowEdit(t)} className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center hover:bg-amber-100 transition-colors" title="Edit">
                    <Edit3 size={11} className="text-amber-600" />
                  </button>
                  <button onClick={() => downloadTemplate(t)} className="p-1.5 rounded-lg hover:bg-green-50 transition-colors cursor-pointer" title="Download Template">
                    <Download size={14} className="text-green-500" />
                  </button>
                  <button onClick={() => setDeleteId(t.id)} className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center hover:bg-red-100 transition-colors" title="Hapus">
                    <Trash2 size={11} className="text-red-500" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modals */}
      {showAdd && <TemplateModal title="Upload Template Baru" existingTemplates={templates} onSave={handleAdd} onClose={() => setShowAdd(false)} />}
      {showEdit && <TemplateModal title="Edit Template" initial={showEdit} existingTemplates={templates} onSave={handleEdit} onClose={() => setShowEdit(null)} />}
      {showDetail && <DetailModal template={showDetail} onClose={() => setShowDetail(null)} />}
      {deleteId && <ConfirmDeleteModal onConfirm={handleDelete} onClose={() => setDeleteId(null)} />}
    </div>
  );
}
