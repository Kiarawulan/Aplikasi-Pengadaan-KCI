import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { AdminTopBar } from "../../../components/admin/AdminTopBar";
import { VerifTable, FilterConfig } from "../../../components/admin/shared/VerifTable";
import { AdminModal, ModalField, ModalInput, ModalSelect } from "../../../components/admin/shared/AdminModal";
import { Plus, CheckCircle2, XCircle, FileWarning, Download, ChevronRight, Trash2 } from "lucide-react";
import { useAuth } from "../../../store/authStore";
import { DIVISI_OPTIONS } from "../../../constants/divisi";

type ScreenProps = { activeSubItem: string; };

// ─── Mock Data ───────────────────────────────────────────────────────────────
// Data will be fetched from API
const INITIAL_PAYMENTS: any[] = [];

// Laporan hanya boleh berisi data yang dibuat pengguna/admin, bukan contoh UI.
const INITIAL_REPORTS: any[] = [];

const SYARAT_DOCS = [
  "Surat permohonan pembayaran",
  "Invoice",
  "Kwitansi",
  "Faktur Pajak",
  "BAST",
  "BAHP",
  "GR",
  "SPP PPT 3 Bulan",
  "BA Rekonsiliasi",
];

const BANK_OPTS = [
  { value: "Bank BNI", label: "Bank BNI" },
  { value: "Bank BRI", label: "Bank BRI" },
  { value: "Bank Mandiri", label: "Bank Mandiri" },
  { value: "Bank BCA", label: "Bank BCA" },
  { value: "Bank BTN", label: "Bank BTN" },
];

// ─── Finance Verification Form ────────────────────────────────────────────────
function FinanceVerifModal({
  item,
  tipe = "outsource",
  onClose,
  onAction
}: {
  item: any;
  tipe?: string;
  onClose: () => void;
  onAction?: (type: "approve" | "revisi" | "reject", item: any) => void;
}) {
  const docsList = tipe === "non-outsource"
    ? SYARAT_DOCS.filter(d => d !== "SPP PPT 3 Bulan")
    : SYARAT_DOCS;

  const [syarat, setSyarat] = useState(docsList.map(d => ({ doc: d, syarat: false, ada: false, ket: "" })));
  const [syaratLain, setSyaratLain] = useState<{ doc: string; syarat: boolean; ada: boolean; ket: string }[]>([]);
  const [form, setForm] = useState({
    unit: DIVISI_OPTIONS[0].value, date: "", currency: "IDR", noPr: "", noPo: "",
    typeVendor: "anak-perusahaan", namaVendor: item.namaVendor || "",
    noKontrak: item.noKontrak || "", amandemen: "0", tanggalKontrak: "",
    judulKontrak: item.nama || "", mppl: "",
    jenisPembayaran: "periode", jenisPembayaranNote: "",
    nilaiKontrak: item.nominal || "", nilaiAmandemen: "0", nilaiInvoice: "",
    tujuanBank: "Bank BNI", businessArea: "", batasBayar: "",
  });
  const [requestNo] = useState(`REQ-${Math.floor(Math.random() * 9000 + 1000)}`);

  const toggleSyarat = (i: number, field: "syarat" | "ada") => {
    setSyarat(prev => prev.map((s, idx) => idx === i ? { ...s, [field]: !s[field] } : s));
  };
  const addSyaratLain = () => setSyaratLain(prev => [...prev, { doc: "", syarat: false, ada: false, ket: "" }]);
  const removeSyaratLain = (i: number) => setSyaratLain(prev => prev.filter((_, idx) => idx !== i));

  const labelTipe = tipe === "non-outsource" ? "Non-Outsource" : "Outsource";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-gray-100 bg-[#fafafa] shrink-0">
          <div>
            <h1 className="text-[#252271] text-[22px] font-extrabold leading-normal">Verification</h1>
            <p className="text-[11.5px] text-gray-500 font-medium">
              Pembayaran &gt; Payment Approve &gt; {labelTipe} &gt; <span className="font-bold text-[#252271]">Detail</span>
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-[22px] font-light">✕</button>
        </div>

        <div className="px-6 py-5 space-y-6 overflow-y-auto flex-1">
          {/* Finance Verification form */}
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
              <p className="text-[12px] font-bold text-[#252271] uppercase tracking-wide">FINANCE VERIFICATION</p>
              <div className="text-[11px] text-gray-500">Request No: <span className="font-bold font-mono text-[#252271] bg-gray-100 px-2 py-0.5 rounded border border-gray-200">{requestNo}</span></div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <ModalField label="Divisi" required>
                <ModalSelect value={form.unit} onChange={v => setForm(p => ({ ...p, unit: v }))}
                  options={DIVISI_OPTIONS} />
              </ModalField>
              <ModalField label="Date" required>
                <ModalInput type="date" value={form.date} onChange={v => setForm(p => ({ ...p, date: v }))} />
              </ModalField>
              <ModalField label="Currency" required>
                <ModalSelect value={form.currency} onChange={v => setForm(p => ({ ...p, currency: v }))}
                  options={[{ value: "IDR", label: "IDR" }, { value: "USD", label: "USD" }, { value: "EUR", label: "EUR" }, { value: "JPY", label: "JPY" }]} />
              </ModalField>
              <ModalField label="No PR" required>
                <ModalInput value={form.noPr} onChange={v => setForm(p => ({ ...p, noPr: v }))} placeholder="PR-2024-001" />
              </ModalField>
              <ModalField label="No PO" required>
                <ModalInput value={form.noPo} onChange={v => setForm(p => ({ ...p, noPo: v }))} placeholder="PO-2024-001" />
              </ModalField>
              <ModalField label="Type Vendor" required>
                <div className="flex gap-3 pt-1">
                  {[{ v: "anak-perusahaan", l: "Anak Perusahaan" }, { v: "vendor-eksternal", l: "Vendor Eksternal" }].map(opt => (
                    <label key={opt.v} className="flex items-center gap-1.5 text-[11.5px] cursor-pointer">
                      <input type="radio" name="typeVendor" checked={form.typeVendor === opt.v} onChange={() => setForm(p => ({ ...p, typeVendor: opt.v }))} className="accent-[#252271]" />
                      {opt.l}
                    </label>
                  ))}
                </div>
              </ModalField>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <ModalField label="Nama Vendor" required>
                <ModalInput value={form.namaVendor} onChange={v => setForm(p => ({ ...p, namaVendor: v }))} />
              </ModalField>
              <ModalField label="No Kontrak / SPK / SPB" required>
                <ModalInput value={form.noKontrak} onChange={v => setForm(p => ({ ...p, noKontrak: v }))} />
              </ModalField>
              <ModalField label="Amandemen">
                <div className="flex gap-1">
                  <ModalInput value={form.amandemen} onChange={v => setForm(p => ({ ...p, amandemen: v }))} />
                  <button onClick={() => setForm(p => ({ ...p, amandemen: String(Math.max(0, Number(p.amandemen) - 1)) }))}
                    className="border border-gray-200 rounded-lg px-2.5 py-1 text-[12px] font-bold text-gray-600 hover:bg-gray-50">-</button>
                  <button onClick={() => setForm(p => ({ ...p, amandemen: String(Number(p.amandemen) + 1) }))}
                    className="border border-gray-200 rounded-lg px-2.5 py-1 text-[12px] font-bold text-gray-600 hover:bg-gray-50">+</button>
                </div>
              </ModalField>
              <ModalField label="Tanggal Kontrak" required>
                <ModalInput type="date" value={form.tanggalKontrak} onChange={v => setForm(p => ({ ...p, tanggalKontrak: v }))} />
              </ModalField>
              <ModalField label="Judul Kontrak / SPK / SPB / Retensi" required>
                <ModalInput value={form.judulKontrak} onChange={v => setForm(p => ({ ...p, judulKontrak: v }))} />
              </ModalField>
              <ModalField label="MPPL" required>
                <ModalInput value={form.mppl} onChange={v => setForm(p => ({ ...p, mppl: v }))} placeholder="MPPL-2024-001" />
              </ModalField>
            </div>

            <ModalField label="Jenis Pembayaran" required>
              <div className="flex gap-4 pt-1 mb-2">
                {[{ v: "periode", l: "Periode" }, { v: "tahap", l: "Tahap" }].map(opt => (
                  <label key={opt.v} className="flex items-center gap-1.5 text-[11.5px] cursor-pointer">
                    <input type="radio" name="jenisPembayaran" checked={form.jenisPembayaran === opt.v} onChange={() => setForm(p => ({ ...p, jenisPembayaran: opt.v }))} className="accent-[#252271]" />
                    {opt.l}
                  </label>
                ))}
              </div>
              <ModalInput value={form.jenisPembayaranNote} onChange={v => setForm(p => ({ ...p, jenisPembayaranNote: v }))} placeholder="Keterangan jenis pembayaran..." />
            </ModalField>

            <div className="grid grid-cols-3 gap-3 mt-3">
              <ModalField label="Nilai Kontrak" required>
                <ModalInput type="number" value={form.nilaiKontrak} onChange={v => setForm(p => ({ ...p, nilaiKontrak: v }))} placeholder="500000000" />
              </ModalField>
              <ModalField label="Nilai Amandemen">
                <div className="flex gap-1">
                  <ModalInput type="number" value={form.nilaiAmandemen} onChange={v => setForm(p => ({ ...p, nilaiAmandemen: v }))} />
                  <button onClick={() => setForm(p => ({ ...p, nilaiAmandemen: String(Math.max(0, Number(p.nilaiAmandemen) - 1000000)) }))}
                    className="border border-gray-200 rounded-lg px-2 py-1 text-[12px] font-bold text-gray-600 hover:bg-gray-50">-</button>
                  <button onClick={() => setForm(p => ({ ...p, nilaiAmandemen: String(Number(p.nilaiAmandemen) + 1000000) }))}
                    className="border border-gray-200 rounded-lg px-2 py-1 text-[12px] font-bold text-gray-600 hover:bg-gray-50">+</button>
                </div>
              </ModalField>
              <ModalField label="Nilai Invoice" required>
                <ModalInput value={form.nilaiInvoice} onChange={v => setForm(p => ({ ...p, nilaiInvoice: v }))} placeholder="Rp 50.000.000" />
              </ModalField>
              <ModalField label="Tujuan Bank" required>
                <ModalSelect value={form.tujuanBank} onChange={v => setForm(p => ({ ...p, tujuanBank: v }))} options={BANK_OPTS} />
              </ModalField>
              <ModalField label="Business Area" required>
                <ModalSelect value={form.businessArea} onChange={v => setForm(p => ({ ...p, businessArea: v }))}
                  options={["Area Jakarta", "Area Bogor", "Area Depok", "Area Tangerang", "Area Bekasi", "Area Serpong"].map(a => ({ value: a, label: a }))} />
              </ModalField>
              <ModalField label="Batas Bayar dalam Kontrak / SPK / SPB" required>
                <ModalInput value={form.batasBayar} onChange={v => setForm(p => ({ ...p, batasBayar: v }))} placeholder="14 hari kerja" />
              </ModalField>
            </div>
          </div>

          {/* Syarat Pembayaran */}
          <div>
            <p className="text-[12px] font-bold text-[#252271] uppercase tracking-wide mb-3">SYARAT PEMBAYARAN</p>
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-[11.5px]">
                <thead>
                  <tr className="bg-[#252271] text-white">
                    <th className="px-3 py-2.5 text-left font-semibold w-8">No</th>
                    <th className="px-3 py-2.5 text-left font-semibold">Dokumen</th>
                    <th className="px-3 py-2.5 text-center font-semibold w-20">Syarat</th>
                    <th className="px-3 py-2.5 text-center font-semibold w-32">Kelengkapan</th>
                    <th className="px-3 py-2.5 text-left font-semibold">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {syarat.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="px-3 py-2.5 text-gray-500 text-center">{i + 1}</td>
                      <td className="px-3 py-2.5 font-medium text-gray-700">{row.doc} <span className="text-red-500">*</span></td>
                      <td className="px-3 py-2.5 text-center">
                        <input type="checkbox" checked={row.syarat} onChange={() => toggleSyarat(i, "syarat")}
                          className="w-3.5 h-3.5 accent-[#252271] cursor-pointer" />
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-2 justify-center">
                          <button onClick={() => toggleSyarat(i, "ada")}
                            className={`relative w-9 h-5 rounded-full transition-colors ${row.ada ? "bg-green-500" : "bg-gray-200"}`}>
                            <span className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all" style={{ left: row.ada ? "18px" : "2px" }} />
                          </button>
                          <span className="text-[10px] text-gray-500 font-medium">{row.ada ? "Tidak / Ada" : "Tidak / Ada"}</span>
                        </div>
                      </td>
                      <td className="px-3 py-2.5">
                        <input type="text" value={row.ket} onChange={e => setSyarat(prev => prev.map((s, idx) => idx === i ? { ...s, ket: e.target.value } : s))}
                          className="border border-gray-200 rounded-lg px-2 py-1 text-[11px] w-full focus:outline-none focus:ring-1 focus:ring-[#252271]/30" placeholder="Keterangan..." />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex gap-2 mt-2">
              <button onClick={() => setSyarat(prev => prev.map(s => ({ ...s, syarat: true, ada: true })))}
                className="text-[11px] text-[#252271] border border-[#252271]/30 rounded-lg px-3 py-1 hover:bg-[#252271]/5 font-semibold">Check All</button>
              <button onClick={() => setSyarat(prev => prev.map(s => ({ ...s, syarat: false, ada: false })))}
                className="text-[11px] text-gray-500 border border-gray-200 rounded-lg px-3 py-1 hover:bg-gray-50">Uncheck All</button>
            </div>
          </div>

          {/* Syarat Pembayaran Lainnya */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[12px] font-bold text-[#252271] uppercase tracking-wide">SYARAT PEMBAYARAN LAINNYA</p>
              <div className="flex gap-1">
                <button onClick={() => syaratLain.length > 0 && removeSyaratLain(syaratLain.length - 1)}
                  className="border border-gray-200 rounded-lg w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-50">-</button>
                <button onClick={addSyaratLain}
                  className="border border-gray-200 rounded-lg w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-50">+</button>
              </div>
            </div>
            {syaratLain.length > 0 && (
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-[11.5px]">
                  <thead>
                    <tr className="bg-[#252271] text-white">
                      <th className="px-3 py-2 text-left font-semibold w-8">No</th>
                      <th className="px-3 py-2 text-left font-semibold">Dokumen</th>
                      <th className="px-3 py-2 text-center font-semibold w-20">Syarat</th>
                      <th className="px-3 py-2 text-center font-semibold w-32">Kelengkapan</th>
                      <th className="px-3 py-2 text-left font-semibold">Keterangan</th>
                      <th className="px-3 py-2 w-8"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {syaratLain.map((row, i) => (
                      <tr key={i} className="bg-white border-b border-gray-100 last:border-0">
                        <td className="px-3 py-2 text-gray-500 text-center">{i + 1}</td>
                        <td className="px-3 py-2">
                          <input type="text" value={row.doc} onChange={e => setSyaratLain(prev => prev.map((s, idx) => idx === i ? { ...s, doc: e.target.value } : s))}
                            className="border border-gray-200 rounded-lg px-2 py-1 text-[11px] w-full focus:outline-none" placeholder="Nama dokumen..." />
                        </td>
                        <td className="px-3 py-2 text-center">
                          <input type="checkbox" checked={row.syarat} onChange={() => setSyaratLain(prev => prev.map((s, idx) => idx === i ? { ...s, syarat: !s.syarat } : s))}
                            className="w-3.5 h-3.5 accent-[#252271] cursor-pointer" />
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex items-center gap-2 justify-center">
                            <button onClick={() => setSyaratLain(prev => prev.map((s, idx) => idx === i ? { ...s, ada: !s.ada } : s))}
                              className={`relative w-9 h-5 rounded-full transition-colors ${row.ada ? "bg-green-500" : "bg-gray-200"}`}>
                              <span className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all" style={{ left: row.ada ? "18px" : "2px" }} />
                            </button>
                            <span className="text-[10px] text-gray-400">Tidak / Ada</span>
                          </div>
                        </td>
                        <td className="px-3 py-2">
                          <input type="text" value={row.ket} onChange={e => setSyaratLain(prev => prev.map((s, idx) => idx === i ? { ...s, ket: e.target.value } : s))}
                            className="border border-gray-200 rounded-lg px-2 py-1 text-[11px] w-full focus:outline-none" placeholder="Keterangan..." />
                        </td>
                        <td className="px-3 py-2">
                          <button onClick={() => removeSyaratLain(i)} className="text-red-400 hover:text-red-600"><Trash2 size={13} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {syaratLain.length === 0 && (
              <p className="text-[11px] text-gray-400 text-center py-3 border border-dashed border-gray-200 rounded-xl">Belum ada syarat tambahan. Klik tombol + untuk menambah.</p>
            )}
          </div>
        </div>

        {/* Fixed Sticky Footer Actions */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-gray-200 bg-white shrink-0 shadow-lg">
          <button onClick={onClose} className="px-4 py-2 rounded-xl text-[12px] font-semibold border border-gray-200 text-gray-600 hover:bg-gray-100 bg-white cursor-pointer">
            Kembali
          </button>
          {onAction && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => { onClose(); onAction("revisi", item); }}
                className="px-3.5 py-2 rounded-xl text-[12px] font-semibold bg-purple-600 text-white hover:bg-purple-700 flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <FileWarning size={14} /> Minta Revisi
              </button>
              <button
                onClick={() => { onClose(); onAction("reject", item); }}
                className="px-3.5 py-2 rounded-xl text-[12px] font-semibold bg-red-600 text-white hover:bg-red-700 flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <XCircle size={14} /> Tolak Pembayaran
              </button>
              <button
                onClick={() => { onClose(); onAction("approve", item); }}
                className="px-5 py-2 rounded-xl text-[12px] font-bold bg-[#16a34a] hover:bg-[#15803d] text-white flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <CheckCircle2 size={15} /> Setujui &amp; Verifikasi (Approve)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── UMD Submission Form ──────────────────────────────────────────────────────
// ─── UMD Submission Detail View (Admin Read-Only) ──────────────────────────────
function UmdSubmissionModal({
  item,
  onClose,
  onAction
}: {
  item: any;
  onClose: () => void;
  onAction?: (type: "approve" | "revisi" | "reject", item: any) => void;
}) {
  const umdData = item.formData?.umdData || item.formData?.["buat-pd"] || item.formData || {};
  const pengadaanId = item.pengadaan_id || item.pengadaanId || item.id;
  const [uploadedDocuments, setUploadedDocuments] = useState<any[]>([]);

  useEffect(() => {
    if (!pengadaanId) return;
    api.get(`/pengadaan/${pengadaanId}/documents`)
      .then((response) => setUploadedDocuments(Array.isArray(response.data?.data) ? response.data.data : []))
      .catch(() => setUploadedDocuments([]));
  }, [pengadaanId]);

  const downloadDocument = async (uploadedDocument: any) => {
    const response = await api.get(`/documents/${uploadedDocument.id}/download`, { responseType: 'blob' });
    const url = URL.createObjectURL(response.data);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = uploadedDocument.original_name;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  };

  const UMD_SYARAT = Array.isArray(umdData.syaratDocs) ? umdData.syaratDocs : [];

  const ReadOnlyField = ({ label, value }: { label: string; value: string }) => (
    <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
      <p className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
      <p className="text-[12.5px] font-bold text-[#252271] mt-0.5">{value || "—"}</p>
    </div>
  );

  const FileDetailRow = ({ label, fileName }: { label: string; fileName: string }) => (
    <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
      <div>
        <p className="text-[10.5px] font-semibold text-gray-500">{label}</p>
        <p className="text-[12px] font-bold text-gray-800 mt-0.5">{fileName || "Belum diunggah"}</p>
      </div>
      <button
        type="button"
        disabled={!fileName}
        onClick={() => {
          const uploaded = uploadedDocuments.find((entry) => entry.original_name === fileName);
          if (uploaded) downloadDocument(uploaded).catch(() => alert('Gagal mengunduh dokumen.'));
        }}
        className="flex items-center gap-1 bg-[#252271] text-white hover:bg-[#1a1753] px-3 py-1.5 rounded-lg text-[11px] font-semibold shadow-xs"
      >
        <Download size={12} /> View File
      </button>
    </div>
  );

  const status = item.status || "pending";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-gray-100 bg-[#fafafa] shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-[#252271] text-[20px] font-extrabold leading-normal">Detail Pengajuan UMD (Hasil Isian User)</h1>
              <span className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-extrabold uppercase ${status === "approved" || status === "Selesai" ? "bg-green-100 text-green-700" :
                  status === "revisi" ? "bg-purple-100 text-purple-700" :
                    status === "rejected" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"
                }`}>
                {status}
              </span>
            </div>
            <p className="text-[11.5px] text-gray-500 font-medium mt-0.5">
              Pembayaran &gt; Payment Approve &gt; UMD &gt; <span className="font-bold text-[#252271]">Hasil Isian Form User</span>
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-[22px] font-light">✕</button>
        </div>

        <div className="px-6 py-5 space-y-6 overflow-y-auto flex-1">
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">BERKAS PENDUKUNG HASIL UPLOAD USER</p>
            {uploadedDocuments.length === 0 ? (
              <p className="text-[12px] text-gray-500 bg-gray-50 border border-gray-200 rounded-xl p-4">Belum ada berkas yang diunggah user.</p>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {uploadedDocuments.map((document) => (
                  <div key={document.id} className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
                    <div className="min-w-0">
                      <p className="text-[10.5px] font-semibold text-gray-500 capitalize">{String(document.stage || 'Dokumen pendukung').replace(/[-_]/g, ' ')}</p>
                      <p className="text-[12px] font-bold text-gray-800 truncate">{document.original_name}</p>
                    </div>
                    <button onClick={() => downloadDocument(document).catch(() => alert('Gagal mengunduh dokumen.'))} className="flex items-center gap-1 bg-[#252271] text-white px-3 py-1.5 rounded-lg text-[11px] font-semibold"><Download size={12} /> Unduh</button>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Submission Form */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">1. SUBMISSION FORM UMD</p>
            <div className="grid grid-cols-2 gap-3">
              <ReadOnlyField label="No Dokumen" value={umdData.noDokumen || item.id || "DOK-2024-001"} />
              <ReadOnlyField label="Bulan UMD" value={umdData.bulanUmd || "Maret 2024"} />
              <ReadOnlyField label="Judul" value={umdData.judul || item.nama || "—"} />
              <ReadOnlyField label="Nominal" value={umdData.nominal || item.nominal || "—"} />
            </div>
          </div>

          {/* Data PE & G63 */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">2. DATA PE & G63</p>
            <div className="grid grid-cols-3 gap-3">
              <ReadOnlyField label="Nomor PE" value={umdData.nomorPe || "PE-2024-001"} />
              <ReadOnlyField label="Nomor G63" value={umdData.nomorG63 || "G63-2024-089"} />
              <ReadOnlyField label="Tanggal G63" value={umdData.tanggalG63 || "2024-03-15"} />
              <ReadOnlyField label="Nominal G63 (Rp)" value={umdData.nominalG63 || item.nominal || "—"} />
              <ReadOnlyField label="Tanggal Cair" value={umdData.tanggalCair || "2024-03-20"} />
              <ReadOnlyField label="Nomor VA" value={umdData.nomorVa || "VA-88291039"} />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Syarat Pembayaran UMD */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">3. SYARAT PEMBAYARAN UMD</p>
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-[11.5px]">
                <thead>
                  <tr className="bg-[#252271] text-white">
                    <th className="px-3 py-2.5 text-left font-semibold w-8">No</th>
                    <th className="px-3 py-2.5 text-left font-semibold">Dokumen</th>
                    <th className="px-3 py-2.5 text-center font-semibold w-24">Syarat</th>
                    <th className="px-3 py-2.5 text-center font-semibold w-28">Kelengkapan</th>
                    <th className="px-3 py-2.5 text-left font-semibold">Keterangan</th>
                    <th className="px-3 py-2.5 text-center font-semibold w-24">File</th>
                  </tr>
                </thead>
                <tbody>
                  {UMD_SYARAT.map((row: any, i: number) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="px-3 py-2.5 text-gray-500 text-center">{i + 1}</td>
                      <td className="px-3 py-2.5 font-semibold text-gray-800">{row.doc}</td>
                      <td className="px-3 py-2.5 text-center">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${row.syarat ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}>
                          {row.syarat ? "Wajib" : "Opsional"}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${row.ada !== false ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                          {row.ada !== false ? "✓ Ada" : "✕ Tidak Ada"}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-gray-600">{row.ket || "Dokumen sesuai permohonan"}</td>
                      <td className="px-3 py-2.5 text-center">
                        <button
                          onClick={() => alert(`Membuka file ${row.file || row.doc + '.pdf'}`)}
                          className="text-[#252271] hover:underline text-[11px] font-semibold"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Input Dokumen Tutupan */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">4. DOKUMEN TUTUPAN HASIL ISIAN USER</p>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <FileDetailRow label="Dokumen G63 TTD Lengkap" fileName={umdData.fileG63 || ""} />
              <FileDetailRow label="Lembar G61" fileName={umdData.fileLembarG61 || ""} />
              <FileDetailRow label="Ceklis Pertanggungjawaban" fileName={umdData.fileCeklis || ""} />
              <FileDetailRow label="Surat Pernyataan Keaslian Dokumen" fileName={umdData.fileSuratPernyataan || umdData.fileSuratKeaslian || ""} />
              <FileDetailRow label="Surat Kebenaran Barang/Jasa" fileName={umdData.fileSuratKebenaran || ""} />
              <FileDetailRow label="Nota / Kwitansi Pertanggungjawaban" fileName={umdData.fileNota || ""} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ReadOnlyField label="Nominal G61" value={umdData.nominalG61 || item.nominal || "—"} />
              <ReadOnlyField label="Sisa UMDS" value={umdData.sisaUmds || "Rp 0"} />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Input Closing UMD */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">5. CLOSING UMD HASIL ISIAN USER</p>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <ReadOnlyField label="Nominal Pajak" value={umdData.nominalPajak || "Rp 0"} />
              <ReadOnlyField label="Nominal Pengembalian" value={umdData.nominalPengembalian || "Rp 0"} />
            </div>
            <FileDetailRow label="Upload Dokumen A9 Lengkap" fileName={umdData.fileA9 || ""} />
          </div>

          {/* Bukti Pengembalian */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">6. BUKTI PENGEMBALIAN DANA USER</p>
            <FileDetailRow label="Upload Bukti Transfer Pengembalian" fileName={umdData.fileBuktiTransfer || ""} />
          </div>
        </div>

        {/* Fixed Sticky Footer Actions */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-gray-200 bg-white shrink-0 shadow-lg">
          <button onClick={onClose} className="px-4 py-2 rounded-xl text-[12px] font-semibold border border-gray-200 text-gray-600 hover:bg-gray-100 bg-white cursor-pointer">
            Kembali
          </button>
          {onAction && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => { onClose(); onAction("revisi", item); }}
                className="px-3.5 py-2 rounded-xl text-[12px] font-semibold bg-purple-600 text-white hover:bg-purple-700 flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <FileWarning size={14} /> Minta Revisi
              </button>
              <button
                onClick={() => { onClose(); onAction("reject", item); }}
                className="px-3.5 py-2 rounded-xl text-[12px] font-semibold bg-red-600 text-white hover:bg-red-700 flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <XCircle size={14} /> Tolak UMD
              </button>
              <button
                onClick={() => { onClose(); onAction("approve", item); }}
                className="px-5 py-2 rounded-xl text-[12px] font-bold bg-[#16a34a] hover:bg-[#15803d] text-white flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <CheckCircle2 size={15} /> Setujui UMD (Approve)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────
export function PembayaranVerifScreen({ activeSubItem }: ScreenProps) {
  const { currentUser } = useAuth();
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPengadaanData = async () => {
    setLoading(true);
    try {
      const [resPeng, resVerif] = await Promise.all([
        api.get('/pengadaan').catch(() => ({ data: [] })),
        api.get('/verifikasi').catch(() => ({ data: [] })),
      ]);
      const pengList: any[] = resPeng.data || [];
      const verifList: any[] = resVerif.data || [];

      // Combine verifikasi records with their pengadaan data
      const paymentVerifs = verifList.filter((v: any) =>
        ['umd', 'outsource', 'non-outsource', 'pembayaran', 'payment-request'].includes(v.tipe)
      );

      const allData: any[] = paymentVerifs.map((v: any) => {
        const peng = pengList.find((p: any) => p.id === v.pengadaan_id);
        const fd = peng ? (typeof peng.formData === 'string' ? JSON.parse(peng.formData) : (peng.formData || {})) : {};
        const umdData = fd.umdData || fd['buat-pd'] || {};
        const pelunasanData = fd.pelunasan || {};

        // Determine payment type from verif tipe
        let tipe = v.tipe;
        if (tipe === 'pembayaran') {
          // fallback: check if PD (umd) or PR
          tipe = v.pengadaan_id?.startsWith('PD-') ? 'umd' : 'outsource';
        }

        return {
          id: v.pengadaan_id,
          verif_id: v.id,
          noSp3: fd.sp3No || peng?.id || '-',
          noKontrak: peng?.id || v.pengadaan_id,
          nama: v.pengadaan_nama || peng?.nama || '-',
          nominal: v.nominal || peng?.nominal || '-',
          namaVendor: pelunasanData.vendor || fd.vendor || 'N/A',
          noRekening: fd.rekening || '-',
          bank: fd.bank || '-',
          departemen: v.departemen || peng?.departemen || '-',
          tgl: v.submit_at ? v.submit_at.split('T')[0] : (peng?.tanggal || new Date().toISOString().split('T')[0]),
          tipe,
          status: v.status,
          formData: fd,
          currentStep: peng?.currentStep || 'pembayaran',
        };
      });

      // Also include PD items that are in pembayaran step but may not have verif records yet
      const withoutVerif = pengList
        .filter((p: any) => p.currentStep === 'pembayaran' && !paymentVerifs.find((v: any) => v.pengadaan_id === p.id))
        .map((p: any) => {
          const fd = typeof p.formData === 'string' ? JSON.parse(p.formData) : (p.formData || {});
          const tipe = p.id.startsWith('PD-') ? 'umd' : (() => {
            const j = (fd.pelunasan?.jenis || '').toLowerCase();
            return j.includes('non') ? 'non-outsource' : (j.includes('payment') ? 'payment-request' : 'outsource');
          })();
          return {
            id: p.id,
            verif_id: null,
            noSp3: fd.sp3No || '-',
            noKontrak: p.id,
            nama: p.nama,
            nominal: p.nominal,
            namaVendor: fd.vendor || 'N/A',
            noRekening: fd.rekening || '-',
            bank: fd.bank || '-',
            departemen: p.departemen,
            tgl: p.tanggal,
            tipe,
            status: p.status,
            formData: fd,
            currentStep: p.currentStep,
          };
        });

      setPayments([...allData, ...withoutVerif]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPengadaanData();
  }, [activeSubItem]);

  const [reports, setReports] = useState(INITIAL_REPORTS);
  const [showAdd, setShowAdd] = useState(false);
  const [showVerif, setShowVerif] = useState<any | null>(null);
  const [showUmd, setShowUmd] = useState<any | null>(null);
  const [showDetail, setShowDetail] = useState<any | null>(null);
  const [confirmAction, setConfirmAction] = useState<{ type: "approve" | "reject" | "revisi"; item: any } | null>(null);
  const [catatanText, setCatatanText] = useState("");
  const [form, setForm] = useState({ noSp3: "", noKontrak: "", nama: "", nominal: "", namaVendor: "", noRekening: "", bank: "Bank BNI", departemen: "CUG - LOGISTIC", tgl: "" });

  const getSubmenuInfo = () => {
    switch (activeSubItem) {
      case "pay-outsource": return { title: "Payment Approve - Outsource", subtitle: "Pembayaran - Outsource", tipe: "outsource", label: "Outsource" };
      case "pay-non-outsource": return { title: "Payment Approve - Non Outsource", subtitle: "Pembayaran - Non Outsource", tipe: "non-outsource", label: "Non Outsource" };
      case "pay-umd": return { title: "Payment Approve - UMD", subtitle: "Pembayaran - UMD", tipe: "umd", label: "UMD" };
      case "pay-report-daily": return { title: "Report Harian Pembayaran", subtitle: "Pembayaran - Daily Report", tipe: "daily", label: "Daily" };
      case "pay-report-weekly": return { title: "Report Mingguan Pembayaran", subtitle: "Pembayaran - Weekly Report", tipe: "weekly", label: "Weekly" };
      default: return { title: "Pembayaran", subtitle: "Pembayaran", tipe: "", label: "" };
    }
  };

  const { title, subtitle, tipe, label } = getSubmenuInfo();
  const isReport = activeSubItem.includes("report");
  const isUmd = tipe === "umd";
  const filteredPayments = tipe ? payments.filter(p => p.tipe === tipe) : payments;
  const filteredReports = tipe ? reports.filter(r => r.tipe === tipe) : reports;

  const handleAddSubmit = () => {
    if (isReport) {
      setReports([{ id: `REP-${Math.floor(Math.random() * 900) + 100}`, nama: form.nama || "Laporan Baru", tgl: form.tgl || new Date().toISOString().split("T")[0], file: `laporan_${Date.now()}.xlsx`, tipe: tipe || "daily", ket: "Laporan baru" }, ...reports]);
    } else {
      setPayments([{ id: `PAY-${Math.floor(Math.random() * 900) + 100}`, noSp3: form.noSp3 || `SP3-${Math.floor(Math.random() * 9000) + 1000}`, noKontrak: form.noKontrak || `KTR-${Math.floor(Math.random() * 900) + 100}`, nama: form.nama || "Pembayaran Baru", nominal: form.nominal ? `Rp ${form.nominal}` : "Rp 50.000.000", namaVendor: form.namaVendor || "PT Vendor Baru", noRekening: form.noRekening || "-", bank: form.bank, departemen: form.departemen, tgl: form.tgl || new Date().toISOString().split("T")[0], tipe: tipe || "outsource", status: "pending" }, ...payments]);
    }
    setShowAdd(false);
    setForm({ noSp3: "", noKontrak: "", nama: "", nominal: "", namaVendor: "", noRekening: "", bank: "Bank BNI", departemen: "CUG - LOGISTIC", tgl: "" });
  };

  const handleAction = (type: "approve" | "reject" | "revisi", item: any) => { setConfirmAction({ type, item }); setCatatanText(""); };
  const executeAction = async () => {
    if (!confirmAction) return;
    const { type, item } = confirmAction;

    try {
      let targetVerifId = item.verif_id;
      if (!targetVerifId) {
        const createRes = await api.post('/verifikasi', {
          pengadaanId: item.id,
          pengadaanNama: item.nama,
          departemen: item.departemen || 'CTIT',
          nominal: item.nominal || 'Rp 0',
          tipe: item.tipe || 'pembayaran',
          submitBy: 'User'
        });
        targetVerifId = createRes.data?.id;
      }

      if (targetVerifId) {
        if (type === "approve") {
          await api.post(`/verifikasi/${targetVerifId}/approve`);
        } else if (type === "revisi") {
          await api.post(`/verifikasi/${targetVerifId}/revisi`, { catatan: catatanText || 'Perlu revisi' });
        } else {
          await api.post(`/verifikasi/${targetVerifId}/reject`, { catatan: catatanText || 'Ditolak Admin' });
        }
      } else {
        await api.put(`/pengadaan/${item.id}`, {
          status: type === 'approve' ? 'approved' : type === 'revisi' ? 'revision_required' : 'rejected'
        });
      }
      alert(`Pembayaran berhasil ${type === 'approve' ? 'disetujui (Approved)' : type === 'revisi' ? 'diminta revisi' : 'ditolak'}.`);
      fetchPengadaanData();
    } catch (err) {
      console.error('Gagal melakukan aksi verifikasi:', err);
      alert('Gagal memproses. Silakan coba lagi.');
    }

    setConfirmAction(null);
    setShowVerif(null);
    setShowUmd(null);
  };
  const topFiltersPayment: FilterConfig[] = [
    { key: "departemen", label: "Divisi", type: "select", options: DIVISI_OPTIONS },
    { key: "status", label: "Status", type: "select", options: [{ value: "pending", label: "Pending" }, { value: "approved", label: "Disetujui" }, { value: "revisi", label: "Revisi" }, { value: "rejected", label: "Ditolak" }] },
  ];

  const statusBadge = (s: string) => {
    const c: Record<string, string> = { pending: "bg-amber-50 text-amber-600 border border-amber-200", approved: "bg-green-50 text-green-600 border border-green-200", rejected: "bg-red-50 text-red-600 border border-red-200", revisi: "bg-purple-50 text-purple-600 border border-purple-200" };
    return <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${c[s] || "bg-gray-50 text-gray-600"}`}>{s.toUpperCase()}</span>;
  };

  const payColumns = [
    { key: "id", label: "No. Dok", render: (r: any) => <span className="font-mono font-bold text-gray-700 text-[11px]">{r.id}</span> },
    { key: "noSp3", label: "No. SP3", render: (r: any) => <span className="font-mono text-[11px] text-gray-500">{r.noSp3}</span> },
    { key: "noKontrak", label: "No. Kontrak", render: (r: any) => <span className="font-mono text-[11px] text-gray-500">{r.noKontrak}</span> },
    { key: "nama", label: "Judul Pengadaan", render: (r: any) => (<div><p className="font-semibold text-gray-800 text-[11.5px] max-w-[180px] truncate">{r.nama}</p><p className="text-gray-400 text-[10px] capitalize">{r.tipe}</p></div>) },
    { key: "nominal", label: "Nominal", render: (r: any) => <span className="font-semibold text-gray-800">{r.nominal}</span> },
    { key: "namaVendor", label: "Vendor", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.namaVendor}</span> },
    { key: "bank", label: "Bank", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.bank}</span> },
    { key: "departemen", label: "Divisi", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.departemen}</span> },
    { key: "tgl", label: "Tgl Bayar", render: (r: any) => <span className="text-[11px]">{new Date(r.tgl).toLocaleDateString("id-ID")}</span> },
    { key: "status", label: "Status", render: (r: any) => statusBadge(r.status) },
  ];

  const reportColumns = [
    { key: "id", label: "No.", render: (r: any) => <span className="font-mono font-bold text-gray-700 text-[11px]">{r.id}</span> },
    { key: "nama", label: "Nama Laporan", render: (r: any) => <span className="font-semibold text-gray-800 text-[11.5px]">{r.nama}</span> },
    { key: "tgl", label: "Tanggal", render: (r: any) => <span className="text-[11px]">{new Date(r.tgl).toLocaleDateString("id-ID")}</span> },
    { key: "file", label: "File", render: (r: any) => (<button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-[11px] font-medium"><Download size={11} />{r.file}</button>) },
    { key: "ket", label: "Keterangan", render: (r: any) => <span className="text-gray-500 text-[11px]">{r.ket}</span> },
    { key: "tipe", label: "Tipe", render: (r: any) => <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono capitalize ${r.tipe === "weekly" ? "bg-indigo-50 text-indigo-600 border border-indigo-200" : "bg-blue-50 text-blue-600 border border-blue-200"}`}>{r.tipe.toUpperCase()}</span> },
  ];

  if (isReport) {
    return (
      <div className="space-y-4">
        <AdminTopBar title={title} subtitle={subtitle} />
        <div className="relative">
          <div className="absolute right-5 top-4 z-10">
            <button onClick={() => setShowAdd(true)} className="bg-[#252271] hover:bg-[#1a1753] text-white px-3 py-1.5 rounded-lg text-[11.5px] font-semibold flex items-center gap-1 shadow-sm transition-colors"><Plus size={14} />Upload Laporan</button>
          </div>
          <VerifTable columns={reportColumns} data={filteredReports} searchKeys={["nama", "ket", "file"]} dateKey="tgl" topFilters={[{ key: "tipe", label: "Tipe Laporan", type: "select", options: [{ value: "daily", label: "Daily" }, { value: "weekly", label: "Weekly" }] }]} showCrudActions={false} emptyMessage="Tidak ada laporan." />
        </div>
        {showAdd && (
          <AdminModal title="Upload Laporan Baru" onClose={() => setShowAdd(false)} onSubmit={handleAddSubmit} submitLabel="Upload" width="max-w-md">
            <div className="space-y-3">
              <ModalField label="Nama Laporan" required><ModalInput value={form.nama} onChange={v => setForm(p => ({ ...p, nama: v }))} placeholder="Laporan Harian..." /></ModalField>
              <ModalField label="Tanggal Laporan" required><ModalInput type="date" value={form.tgl} onChange={v => setForm(p => ({ ...p, tgl: v }))} /></ModalField>
            </div>
          </AdminModal>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <AdminTopBar title={title} subtitle={subtitle} />
      <div className="relative">
        <div className="absolute right-5 top-4 z-10">
          <button onClick={() => setShowAdd(true)} className="bg-[#252271] hover:bg-[#1a1753] text-white px-3 py-1.5 rounded-lg text-[11.5px] font-semibold flex items-center gap-1 shadow-sm transition-colors"><Plus size={14} />Tambah Data</button>
        </div>
        <VerifTable
          columns={payColumns} data={filteredPayments}
          searchKeys={["nama", "noSp3", "noKontrak", "namaVendor", "departemen"]}
          dateKey="tgl" topFilters={topFiltersPayment}
          onView={(r) => (r.tipe === "umd" || isUmd) ? setShowUmd(r) : setShowVerif(r)}
          onApprove={(r) => handleAction("approve", r)}
          onRevisi={(r) => handleAction("revisi", r)}
          onReject={(r) => handleAction("reject", r)}
          showVerifActions={true} showCrudActions={true}
          emptyMessage="Tidak ada data pembayaran."
          approveLabel="Setujui"
        />
      </div>

      {showAdd && (
        <AdminModal title={`Tambah ${label}`} onClose={() => setShowAdd(false)} onSubmit={handleAddSubmit} submitLabel="Submit" width="max-w-lg">
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="No. SP3" required><ModalInput value={form.noSp3} onChange={v => setForm(p => ({ ...p, noSp3: v }))} placeholder="SP3-9921..." /></ModalField>
              <ModalField label="No. Kontrak"><ModalInput value={form.noKontrak} onChange={v => setForm(p => ({ ...p, noKontrak: v }))} placeholder="KTR-001..." /></ModalField>
            </div>
            <ModalField label="Judul Pengadaan" required><ModalInput value={form.nama} onChange={v => setForm(p => ({ ...p, nama: v }))} placeholder="Judul pengadaan..." /></ModalField>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Nominal (Rp)" required><ModalInput type="number" value={form.nominal} onChange={v => setForm(p => ({ ...p, nominal: v }))} placeholder="180000000" /></ModalField>
              <ModalField label="Tanggal Pembayaran" required><ModalInput type="date" value={form.tgl} onChange={v => setForm(p => ({ ...p, tgl: v }))} /></ModalField>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Nama Vendor" required><ModalInput value={form.namaVendor} onChange={v => setForm(p => ({ ...p, namaVendor: v }))} placeholder="PT Vendor..." /></ModalField>
              <ModalField label="Bank"><ModalSelect value={form.bank} onChange={v => setForm(p => ({ ...p, bank: v }))} options={BANK_OPTS} /></ModalField>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="No. Rekening"><ModalInput value={form.noRekening} onChange={v => setForm(p => ({ ...p, noRekening: v }))} placeholder="1234-5678-9012" /></ModalField>
              <ModalField label="Divisi" required><ModalSelect value={form.departemen} onChange={v => setForm(p => ({ ...p, departemen: v }))} options={DIVISI_OPTIONS} /></ModalField>
            </div>
          </div>
        </AdminModal>
      )}

      {showDetail && (
        <AdminModal title="Detail Pembayaran" onClose={() => setShowDetail(null)} hideFooter width="max-w-lg">
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {[{ k: "No. Dokumen", v: showDetail.id }, { k: "No. SP3", v: showDetail.noSp3 }, { k: "No. Kontrak", v: showDetail.noKontrak }, { k: "Judul Pengadaan", v: showDetail.nama }, { k: "Nominal", v: showDetail.nominal }, { k: "Nama Vendor", v: showDetail.namaVendor }, { k: "No. Rekening", v: showDetail.noRekening }, { k: "Bank", v: showDetail.bank }, { k: "Divisi", v: showDetail.departemen }, { k: "Tanggal", v: showDetail.tgl }, { k: "Tipe", v: showDetail.tipe }, { k: "Status", v: showDetail.status }].map(row => (
                <div key={row.k} className="flex flex-col border-b border-gray-50 pb-1.5">
                  <span className="text-gray-400 text-[10px] font-mono uppercase">{row.k}</span>
                  <span className="font-semibold text-gray-700 text-[12px]">{row.v}</span>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-gray-100 flex gap-2 justify-end">
              <button onClick={() => { const target = showDetail; setShowDetail(null); (target.tipe === 'umd' || isUmd) ? setShowUmd(target) : setShowVerif(target); }} className="bg-[#252271] text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1">
                <ChevronRight size={12} /> {(showDetail.tipe === 'umd' || isUmd) ? "Form UMD" : "Verifikasi"}
              </button>
              <button onClick={() => handleAction("revisi", showDetail)} className="bg-purple-600 text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1"><FileWarning size={12} /> Revisi</button>
              <button onClick={() => handleAction("reject", showDetail)} className="bg-red-600 text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1"><XCircle size={12} /> Tolak</button>
            </div>
          </div>
        </AdminModal>
      )}

      {confirmAction && (
        <AdminModal title={`Konfirmasi ${confirmAction.type.toUpperCase()}`} onClose={() => setConfirmAction(null)} onSubmit={executeAction} submitLabel="Proses" width="max-w-sm">
          <div className="space-y-3">
            <p className="text-[12px] text-gray-600">Proses pembayaran <strong>{confirmAction.item.nama}</strong> menjadi <strong className="uppercase">{confirmAction.type}</strong>?</p>
            <ModalField label="Catatan (Opsional)"><ModalInput value={catatanText} onChange={v => setCatatanText(v)} placeholder="Alasan/catatan..." /></ModalField>
          </div>
        </AdminModal>
      )}

      {showVerif && <FinanceVerifModal item={showVerif} tipe={tipe || showVerif.tipe || "outsource"} onClose={() => setShowVerif(null)} onAction={handleAction} />}
      {showUmd && <UmdSubmissionModal item={showUmd} onClose={() => setShowUmd(null)} onAction={handleAction} />}
    </div>
  );
}
