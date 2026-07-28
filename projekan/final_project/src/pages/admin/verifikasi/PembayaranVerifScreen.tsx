import { useState } from "react";
import { AdminTopBar } from "../../../components/admin/AdminTopBar";
import { VerifTable, FilterConfig } from "../../../components/admin/VerifTable";
import { AdminModal, ModalField, ModalInput, ModalSelect } from "../../../components/admin/AdminModal";
import { Plus, CheckCircle2, XCircle, FileWarning, Download, ChevronRight, Trash2 } from "lucide-react";
import { useAuth } from "../../../store/authStore";

type ScreenProps = { activeSubItem: string; };

// ─── Mock Data ───────────────────────────────────────────────────────────────
const INITIAL_PAYMENTS = [
  { id: "PAY-001", noSp3: "SP3-9921", noKontrak: "KTR-001", nama: "Gaji Teknisi Outsource Bulan Maret 2024", nominal: "Rp 180.000.000", namaVendor: "PT Mitra Tenaga Kerja", noRekening: "1234-5678-9012", bank: "Bank BNI", departemen: "CUG - LOGISTIC", tgl: "2024-03-11", tipe: "outsource", status: "pending" },
  { id: "PAY-002", noSp3: "SP3-7721", noKontrak: "KTR-002", nama: "Perbaikan Modul AC KRL Juanda", nominal: "Rp 50.000.000", namaVendor: "PT Hawa Dingin Nusantara", noRekening: "9876-5432-1098", bank: "Bank BRI", departemen: "CTR - ROLLING STOCK", tgl: "2024-03-12", tipe: "non-outsource", status: "approved" },
  { id: "PAY-003", noSp3: "SP3-5511", noKontrak: "KTR-003", nama: "UMD Perbaikan Peralatan Kantor Depo", nominal: "Rp 15.000.000", namaVendor: "Internal", noRekening: "-", bank: "-", departemen: "CUG - LOGISTIC", tgl: "2024-03-13", tipe: "umd", status: "pending" },
  { id: "PAY-004", noSp3: "SP3-4412", noKontrak: "KTR-004", nama: "Penyediaan Tenaga Outsourcing Security Stasiun", nominal: "Rp 240.000.000", namaVendor: "PT Guard Nusantara", noRekening: "4567-8901-2345", bank: "Bank Mandiri", departemen: "COS - HSE AND SECURITY", tgl: "2024-03-14", tipe: "outsource", status: "pending" },
  { id: "PAY-005", noSp3: "SP3-6623", noKontrak: "KTR-005", nama: "Vendor Maintenance Server Data Center KCI", nominal: "Rp 95.000.000", namaVendor: "PT Techno Infrastruktur", noRekening: "6789-0123-4567", bank: "Bank BCA", departemen: "CTI - INFORMATION TECHNOLOGY", tgl: "2024-03-18", tipe: "non-outsource", status: "revisi" },
  { id: "PAY-006", noSp3: "SP3-8819", noKontrak: "KTR-006", nama: "UMD Konsumsi Rapat Direksi Q1 2024", nominal: "Rp 8.500.000", namaVendor: "Internal", noRekening: "-", bank: "-", departemen: "CUS - CORPORATE SECRETARY", tgl: "2024-03-20", tipe: "umd", status: "approved" },
  { id: "PAY-007", noSp3: "SP3-9902", noKontrak: "KTR-007", nama: "Pengadaan Suku Cadang Pantograf KRL Series 205", nominal: "Rp 410.000.000", namaVendor: "PT Railindo Jaya", noRekening: "1122-3344-5566", bank: "Bank BNI", departemen: "CTR - ROLLING STOCK", tgl: "2024-03-22", tipe: "non-outsource", status: "pending" },
];

const INITIAL_REPORTS = [
  { id: "REP-001", nama: "Laporan Harian Pembayaran Outsource Maret W4", tgl: "2024-03-24", file: "laporan_harian_outsource_24_03.xlsx", tipe: "daily", ket: "Realisasi pembayaran outsource aman, 3 SP3 terbayar" },
  { id: "REP-002", nama: "Laporan Mingguan Rekap UMD Maret W3", tgl: "2024-03-22", file: "laporan_mingguan_umd_w3.xlsx", tipe: "weekly", ket: "Ada 2 UMD pending approval dari VP Keuangan" },
  { id: "REP-003", nama: "Laporan Harian Non-Outsource Vendor IT", tgl: "2024-03-25", file: "laporan_harian_non_outsource_it.xlsx", tipe: "daily", ket: "Verified ready, menunggu TTD Direksi" },
  { id: "REP-004", nama: "Laporan Mingguan Rekap Seluruh Pembayaran W4", tgl: "2024-03-29", file: "laporan_mingguan_all_w4.xlsx", tipe: "weekly", ket: "Total pembayaran minggu ini: Rp 523.000.000" },
];

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

const DEPT_OPTS = [
  { value: "CUG - LOGISTIC", label: "CUG - LOGISTIC" },
  { value: "CTR - ROLLING STOCK", label: "CTR - ROLLING STOCK" },
  { value: "CTI - INFORMATION TECHNOLOGY", label: "CTI - INFORMATION TECHNOLOGY" },
  { value: "COS - HSE AND SECURITY", label: "COS - HSE AND SECURITY" },
  { value: "CTS - INFRASTRUCTURE", label: "CTS - INFRASTRUCTURE" },
  { value: "CUS - CORPORATE SECRETARY", label: "CUS - CORPORATE SECRETARY" },
  { value: "CAF - FINANCE", label: "CAF - FINANCE" },
];

// ─── Finance Verification Form ────────────────────────────────────────────────
function FinanceVerifModal({ item, onClose }: { item: any; onClose: () => void }) {
  const [statusDates, setStatusDates] = useState({ cfff: "", cff: "", cf: "", siapBayar: "", lunas: "" });
  const [syarat, setSyarat] = useState(SYARAT_DOCS.map(d => ({ doc: d, syarat: false, ada: false, ket: "" })));
  const [syaratLain, setSyaratLain] = useState<{ doc: string; syarat: boolean; ada: boolean; ket: string }[]>([]);
  const [form, setForm] = useState({
    unit: "CUG", date: "", currency: "IDR", noPr: "", noPo: "",
    typeVendor: "anak-perusahaan", namaVendor: item.namaVendor || "",
    noKontrak: item.noKontrak || "", amandemen: "0", tanggalKontrak: "",
    judulKontrak: item.nama || "", mppl: "",
    jenisPembayaran: "periode", jenisPembayaranNote: "",
    nilaiKontrak: item.nominal || "", nilaiAmandemen: "0", nilaiInvoice: "",
    tujuanBank: "Bank BNI", businessArea: "", batasBayar: "",
  });
  const [requestNo] = useState(`REQ-${Math.floor(Math.random()*9000+1000)}`);
  const [updatedStatuses, setUpdatedStatuses] = useState<Record<string, boolean>>({});

  const STEPS = [
    { key: "cfff", label: "Approval CFFF", note: "< Rp 200 juta" },
    { key: "cff",  label: "Approval CFF",  note: "Rp 200-500 juta" },
    { key: "cf",   label: "Approval CF",   note: "> Rp 500 juta" },
    { key: "siapBayar", label: "Siap Bayar", note: "" },
    { key: "lunas", label: "Lunas", note: "" },
  ];

  const toggleSyarat = (i: number, field: "syarat" | "ada") => {
    setSyarat(prev => prev.map((s, idx) => idx === i ? { ...s, [field]: !s[field] } : s));
  };
  const addSyaratLain = () => setSyaratLain(prev => [...prev, { doc: "", syarat: false, ada: false, ket: "" }]);
  const removeSyaratLain = (i: number) => setSyaratLain(prev => prev.filter((_, idx) => idx !== i));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 py-6 px-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <p className="font-bold text-[15px] text-[#252271]">Finance Verification</p>
            <p className="text-[11px] text-gray-400">{item.nama}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-[20px] font-light">x</button>
        </div>

        <div className="px-6 py-5 space-y-6">
          {/* Status Steps */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">Status Proses Pembayaran</p>
            <div className="grid grid-cols-5 gap-2">
              {STEPS.map(s => (
                <div key={s.key} className="border border-gray-200 rounded-xl p-3 flex flex-col items-center gap-2">
                  <p className="text-[10px] font-bold text-gray-700 text-center">{s.label}</p>
                  {s.note && <p className="text-[9px] text-gray-400 text-center">{s.note}</p>}
                  <input type="date"
                    value={(statusDates as any)[s.key]}
                    onChange={e => setStatusDates(prev => ({ ...prev, [s.key]: e.target.value }))}
                    className="border border-gray-200 rounded-lg px-2 py-1 text-[10.5px] w-full text-center focus:outline-none focus:ring-1 focus:ring-[#252271]/30" />
                  <button
                    onClick={() => setUpdatedStatuses(prev => ({ ...prev, [s.key]: true }))}
                    className={`text-[10px] font-semibold px-3 py-1 rounded-lg w-full transition-colors ${updatedStatuses[s.key] ? "bg-green-500 text-white" : "bg-[#252271] text-white hover:bg-[#1a1753]"}`}>
                    {updatedStatuses[s.key] ? "Updated" : "Update"}
                  </button>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 mt-2">Setelah sirkulir disetujui &rarr; Siap Bayar &rarr; setelah dibayar &rarr; Lunas</p>
          </div>

          {/* Finance Verification form */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[12px] font-bold text-[#252271] uppercase tracking-wide">Finance Verification</p>
              <div className="text-[11px] text-gray-500">Request No: <span className="font-bold font-mono text-[#252271]">{requestNo}</span></div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <ModalField label="Unit" required>
                <ModalSelect value={form.unit} onChange={v => setForm(p => ({ ...p, unit: v }))}
                  options={["CUG","CTR","CTI","COS","CTS","CUS","CAF"].map(u => ({ value: u, label: u }))} />
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
                    className="border border-gray-200 rounded-lg px-2 py-1 text-[12px] font-bold text-gray-600 hover:bg-gray-50">-</button>
                  <button onClick={() => setForm(p => ({ ...p, amandemen: String(Number(p.amandemen) + 1) }))}
                    className="border border-gray-200 rounded-lg px-2 py-1 text-[12px] font-bold text-gray-600 hover:bg-gray-50">+</button>
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
                  options={["Area Jakarta","Area Bogor","Area Depok","Area Tangerang","Area Bekasi","Area Serpong"].map(a => ({ value: a, label: a }))} />
              </ModalField>
              <ModalField label="Batas Bayar dalam Kontrak / SPK / SPB" required>
                <ModalInput value={form.batasBayar} onChange={v => setForm(p => ({ ...p, batasBayar: v }))} placeholder="14 hari kerja" />
              </ModalField>
            </div>
          </div>

          {/* Syarat Pembayaran */}
          <div>
            <p className="text-[12px] font-bold text-[#252271] uppercase tracking-wide mb-3">Syarat Pembayaran</p>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-[11.5px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-3 py-2.5 text-left text-gray-500 font-semibold w-8">No</th>
                    <th className="px-3 py-2.5 text-left text-gray-500 font-semibold">Dokumen</th>
                    <th className="px-3 py-2.5 text-center text-gray-500 font-semibold w-20">Syarat</th>
                    <th className="px-3 py-2.5 text-center text-gray-500 font-semibold w-32">Kelengkapan</th>
                    <th className="px-3 py-2.5 text-left text-gray-500 font-semibold">Keterangan</th>
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
                        <div className="flex items-center gap-2">
                          <button onClick={() => toggleSyarat(i, "ada")}
                            className={`relative w-9 h-5 rounded-full transition-colors ${row.ada ? "bg-green-500" : "bg-gray-200"}`}>
                            <span className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all" style={{ left: row.ada ? "18px" : "2px" }} />
                          </button>
                          <span className="text-[10px] text-gray-400">{row.ada ? "Ada" : "Tidak"}</span>
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
                className="text-[11px] text-[#252271] border border-[#252271]/30 rounded-lg px-3 py-1 hover:bg-[#252271]/5">Check All</button>
              <button onClick={() => setSyarat(prev => prev.map(s => ({ ...s, syarat: false, ada: false })))}
                className="text-[11px] text-gray-500 border border-gray-200 rounded-lg px-3 py-1 hover:bg-gray-50">Uncheck All</button>
            </div>
          </div>

          {/* Syarat Pembayaran Lainnya */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[12px] font-bold text-[#252271] uppercase tracking-wide">Syarat Pembayaran Lainnya</p>
              <div className="flex gap-1">
                <button onClick={() => syaratLain.length > 0 && removeSyaratLain(syaratLain.length - 1)}
                  className="border border-gray-200 rounded-lg w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-50">-</button>
                <button onClick={addSyaratLain}
                  className="border border-gray-200 rounded-lg w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-50">+</button>
              </div>
            </div>
            {syaratLain.length > 0 && (
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-[11.5px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-3 py-2 text-left text-gray-500 font-semibold w-8">No</th>
                      <th className="px-3 py-2 text-left text-gray-500 font-semibold">Dokumen</th>
                      <th className="px-3 py-2 text-center text-gray-500 font-semibold w-20">Syarat</th>
                      <th className="px-3 py-2 text-center text-gray-500 font-semibold w-32">Kelengkapan</th>
                      <th className="px-3 py-2 text-left text-gray-500 font-semibold">Keterangan</th>
                      <th className="px-3 py-2 w-8"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {syaratLain.map((row, i) => (
                      <tr key={i} className="bg-white">
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
                          <div className="flex items-center gap-2">
                            <button onClick={() => setSyaratLain(prev => prev.map((s, idx) => idx === i ? { ...s, ada: !s.ada } : s))}
                              className={`relative w-9 h-5 rounded-full transition-colors ${row.ada ? "bg-green-500" : "bg-gray-200"}`}>
                              <span className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all" style={{ left: row.ada ? "18px" : "2px" }} />
                            </button>
                            <span className="text-[10px] text-gray-400">{row.ada ? "Ada" : "Tidak"}</span>
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

        {/* Footer */}
        <div className="flex gap-3 justify-end px-6 py-4 border-t border-gray-100">
          <button onClick={onClose} className="px-4 py-2 rounded-xl text-[12px] font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50">Kembali</button>
          <button onClick={onClose} className="px-4 py-2 rounded-xl text-[12px] font-semibold border border-purple-300 text-purple-600 hover:bg-purple-50 flex items-center gap-1">
            <FileWarning size={12} /> Direvisi
          </button>
          <button onClick={onClose} className="px-4 py-2 rounded-xl text-[12px] font-semibold bg-green-600 text-white hover:bg-green-700 flex items-center gap-1">
            <CheckCircle2 size={12} /> Diterima
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── UMD Submission Form ──────────────────────────────────────────────────────
function UmdSubmissionModal({ item, onClose }: { item: any; onClose: () => void }) {
  const UMD_SYARAT = [
    { doc: "G64", syarat: false, ada: false, ket: "" },
    { doc: "Surat Pernyataan", syarat: false, ada: false, ket: "" },
    { doc: "Surat Pernyataan Keabsahan Dokumen", syarat: false, ada: false, ket: "" },
  ];
  const [syarat, setSyarat] = useState(UMD_SYARAT);
  const [form, setForm] = useState({
    noDokumen: "", bulanUmd: "", judul: item.nama || "", nominal: item.nominal || "",
    nomorPe: "", nomorG63: "", tanggalG63: "", nominalG63: "", tanggalCair: "", nomorVa: "",
    nominalG61: "", sisaUmds: "",
    nominalPajak: "", nominalPengembalian: "",
    fileG63: "", fileLembarG61: "", fileCeklis: "", fileSuratPernyataan: "",
    fileSuratKebenaran: "", fileNota: "", fileA9: "", fileBuktiTransfer: "",
  });

  const FileRow = ({ label, fieldKey }: { label: string; fieldKey: string }) => (
    <ModalField label={label} required>
      <div className="flex gap-2 items-center">
        <label className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-[11.5px] text-gray-500 cursor-pointer hover:bg-gray-50 flex-1">
          <span className="text-gray-400">📄</span>
          <span>{(form as any)[fieldKey] || "Choose File"}</span>
          <input type="file" className="hidden" onChange={e => setForm(p => ({ ...p, [fieldKey]: e.target.files?.[0]?.name || "" }))} />
        </label>
        {(form as any)[fieldKey] && <span className="text-green-500 text-[11px]">✓</span>}
      </div>
      <p className="text-[10px] text-gray-400 mt-0.5">Pdf Maks. 20Mb</p>
    </ModalField>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 py-6 px-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <p className="font-bold text-[15px] text-[#252271]">UMD Submission Form</p>
            <p className="text-[11px] text-gray-400">{item.nama}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-[20px] font-light">x</button>
        </div>

        <div className="px-6 py-5 space-y-5">
          {/* Header */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">Submission Form</p>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="No Dokumen" required>
                <ModalInput value={form.noDokumen} onChange={v => setForm(p => ({ ...p, noDokumen: v }))} placeholder="DOK-2024-001" />
              </ModalField>
              <ModalField label="Bulan UMD" required>
                <ModalInput value={form.bulanUmd} onChange={v => setForm(p => ({ ...p, bulanUmd: v }))} placeholder="Maret 2024" />
              </ModalField>
              <ModalField label="Judul" required>
                <ModalInput value={form.judul} onChange={v => setForm(p => ({ ...p, judul: v }))} />
              </ModalField>
              <ModalField label="Nominal" required>
                <ModalInput type="number" value={form.nominal} onChange={v => setForm(p => ({ ...p, nominal: v }))} placeholder="15000000" />
              </ModalField>
            </div>
            <p className="text-[10px] text-gray-400 mt-1">*Klik Kalender untuk pilih bulan</p>
          </div>

          <hr className="border-gray-100" />

          {/* PE/G63 */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">Data PE & G63</p>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Nomor PE" required>
                <ModalInput value={form.nomorPe} onChange={v => setForm(p => ({ ...p, nomorPe: v }))} placeholder="PE-2024-001" />
              </ModalField>
              <ModalField label="Nomor G63" required>
                <ModalInput type="number" value={form.nomorG63} onChange={v => setForm(p => ({ ...p, nomorG63: v }))} />
              </ModalField>
              <ModalField label="Tanggal G63" required>
                <ModalInput type="date" value={form.tanggalG63} onChange={v => setForm(p => ({ ...p, tanggalG63: v }))} />
              </ModalField>
              <ModalField label="Nominal G63 (Rp)" required>
                <ModalInput value={form.nominalG63} onChange={v => setForm(p => ({ ...p, nominalG63: v }))} placeholder="Rp 15.000.000" />
              </ModalField>
              <ModalField label="Tanggal Cair" required>
                <ModalInput type="date" value={form.tanggalCair} onChange={v => setForm(p => ({ ...p, tanggalCair: v }))} />
              </ModalField>
              <ModalField label="Nomor VA" required>
                <ModalInput value={form.nomorVa} onChange={v => setForm(p => ({ ...p, nomorVa: v }))} placeholder="VA-2024-001" />
              </ModalField>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Syarat Pembayaran UMD */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">Syarat Pembayaran</p>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-[11.5px]">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-3 py-2 text-left text-gray-500 font-semibold w-8">No</th>
                  <th className="px-3 py-2 text-left text-gray-500 font-semibold">Dokumen</th>
                  <th className="px-3 py-2 text-center text-gray-500 font-semibold w-20">Syarat</th>
                  <th className="px-3 py-2 text-center text-gray-500 font-semibold w-32">Kelengkapan</th>
                  <th className="px-3 py-2 text-left text-gray-500 font-semibold">Keterangan</th>
                </tr></thead>
                <tbody>
                  {syarat.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="px-3 py-2.5 text-gray-500 text-center">{i + 1}</td>
                      <td className="px-3 py-2.5 font-medium text-gray-700">{row.doc} <span className="text-red-500">*</span></td>
                      <td className="px-3 py-2.5 text-center">
                        <input type="checkbox" checked={row.syarat} onChange={() => setSyarat(prev => prev.map((s, idx) => idx === i ? { ...s, syarat: !s.syarat } : s))}
                          className="w-3.5 h-3.5 accent-[#252271] cursor-pointer" />
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-2">
                          <button onClick={() => setSyarat(prev => prev.map((s, idx) => idx === i ? { ...s, ada: !s.ada } : s))}
                            className={`relative w-9 h-5 rounded-full transition-colors ${row.ada ? "bg-green-500" : "bg-gray-200"}`}>
                            <span className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all" style={{ left: row.ada ? "18px" : "2px" }} />
                          </button>
                          <span className="text-[10px] text-gray-400">{row.ada ? "Ya" : "Tidak"}</span>
                        </div>
                      </td>
                      <td className="px-3 py-2.5">
                        <input type="text" value={row.ket} onChange={e => setSyarat(prev => prev.map((s, idx) => idx === i ? { ...s, ket: e.target.value } : s))}
                          className="border border-gray-200 rounded-lg px-2 py-1 text-[11px] w-full focus:outline-none" placeholder="Keterangan..." />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Dokumen Tutupan */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">Input Dokumen Tutupan</p>
            <div className="space-y-2">
              <FileRow label="Dokumen G63 TTD Lengkap" fieldKey="fileG63" />
              <FileRow label="Lembar G61" fieldKey="fileLembarG61" />
              <FileRow label="Ceklis Pertanggungjawaban" fieldKey="fileCeklis" />
              <FileRow label="Surat Pernyataan Keaslian Dokumen" fieldKey="fileSuratPernyataan" />
              <FileRow label="Surat Pernyataan Kebenaran Barang/Jasa" fieldKey="fileSuratKebenaran" />
              <FileRow label="Nota atau Kwitansi Pertanggungjawaban" fieldKey="fileNota" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <ModalField label="Nominal G61" required>
                <ModalInput type="number" value={form.nominalG61} onChange={v => setForm(p => ({ ...p, nominalG61: v }))} />
              </ModalField>
              <ModalField label="Sisa UMDS" required>
                <ModalInput type="number" value={form.sisaUmds} onChange={v => setForm(p => ({ ...p, sisaUmds: v }))} />
              </ModalField>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Closing UMD */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">Input Closing UMD</p>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Nominal Pajak">
                <ModalInput type="number" value={form.nominalPajak} onChange={v => setForm(p => ({ ...p, nominalPajak: v }))} />
              </ModalField>
              <ModalField label="Nominal Pengembalian">
                <ModalInput type="number" value={form.nominalPengembalian} onChange={v => setForm(p => ({ ...p, nominalPengembalian: v }))} />
              </ModalField>
            </div>
            <FileRow label="Upload Dokumen A9 Lengkap" fieldKey="fileA9" />
          </div>

          <hr className="border-gray-100" />

          {/* Bukti Pengembalian */}
          <div>
            <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mb-3">Input Bukti Pengembalian</p>
            <ModalField label="Upload Bukti Transfer Pengembalian" required>
              <div className="flex gap-2 items-center">
                <label className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-[11.5px] text-gray-500 cursor-pointer hover:bg-gray-50 flex-1">
                  <span className="text-gray-400">📄</span>
                  <span>{form.fileBuktiTransfer || "Choose File"}</span>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={e => setForm(p => ({ ...p, fileBuktiTransfer: e.target.files?.[0]?.name || "" }))} />
                </label>
              </div>
              <p className="text-[10px] text-gray-400 mt-0.5">Pdf | Jpeg | Jpg | Png Maks. 20Mb</p>
            </ModalField>
          </div>
        </div>

        <div className="flex gap-3 justify-end px-6 py-4 border-t border-gray-100">
          <button onClick={onClose} className="px-4 py-2 rounded-xl text-[12px] font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50">Kembali</button>
          <button onClick={onClose} className="px-4 py-2 rounded-xl text-[12px] font-semibold bg-[#252271] text-white hover:bg-[#1a1753] flex items-center gap-1">
            <CheckCircle2 size={12} /> Submit
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────
export function PembayaranVerifScreen({ activeSubItem }: ScreenProps) {
  const { currentUser } = useAuth();
  const [payments, setPayments] = useState(INITIAL_PAYMENTS);
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
      setReports([{ id: `REP-${Math.floor(Math.random()*900)+100}`, nama: form.nama || "Laporan Baru", tgl: form.tgl || new Date().toISOString().split("T")[0], file: `laporan_${Date.now()}.xlsx`, tipe: tipe || "daily", ket: "Laporan baru" }, ...reports]);
    } else {
      setPayments([{ id: `PAY-${Math.floor(Math.random()*900)+100}`, noSp3: form.noSp3 || `SP3-${Math.floor(Math.random()*9000)+1000}`, noKontrak: form.noKontrak || `KTR-${Math.floor(Math.random()*900)+100}`, nama: form.nama || "Pembayaran Baru", nominal: form.nominal ? `Rp ${form.nominal}` : "Rp 50.000.000", namaVendor: form.namaVendor || "PT Vendor Baru", noRekening: form.noRekening || "-", bank: form.bank, departemen: form.departemen, tgl: form.tgl || new Date().toISOString().split("T")[0], tipe: tipe || "outsource", status: "pending" }, ...payments]);
    }
    setShowAdd(false);
    setForm({ noSp3: "", noKontrak: "", nama: "", nominal: "", namaVendor: "", noRekening: "", bank: "Bank BNI", departemen: "CUG - LOGISTIC", tgl: "" });
  };

  const handleAction = (type: "approve" | "reject" | "revisi", item: any) => { setConfirmAction({ type, item }); setCatatanText(""); };
  const executeAction = () => {
    if (!confirmAction) return;
    setPayments(prev => prev.map(p => p.id === confirmAction.item.id ? { ...p, status: confirmAction.type === "approve" ? "approved" : confirmAction.type === "reject" ? "rejected" : "revisi" } : p));
    setConfirmAction(null);
    setShowDetail(null);
  };

  const topFiltersPayment: FilterConfig[] = [
    { key: "departemen", label: "Departemen", type: "text" },
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
    { key: "departemen", label: "Dept", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.departemen.split(" - ")[0]}</span> },
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
          onView={(r) => setShowDetail(r)}
          onApprove={(r) => isUmd ? setShowUmd(r) : setShowVerif(r)}
          onRevisi={(r) => handleAction("revisi", r)}
          onReject={(r) => handleAction("reject", r)}
          showVerifActions={true} showCrudActions={true}
          emptyMessage="Tidak ada data pembayaran."
          approveLabel={isUmd ? "Form UMD" : "Verifikasi"}
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
              <ModalField label="Departemen" required><ModalSelect value={form.departemen} onChange={v => setForm(p => ({ ...p, departemen: v }))} options={DEPT_OPTS} /></ModalField>
            </div>
          </div>
        </AdminModal>
      )}

      {showDetail && (
        <AdminModal title="Detail Pembayaran" onClose={() => setShowDetail(null)} hideFooter width="max-w-lg">
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {[{k:"No. Dokumen",v:showDetail.id},{k:"No. SP3",v:showDetail.noSp3},{k:"No. Kontrak",v:showDetail.noKontrak},{k:"Judul Pengadaan",v:showDetail.nama},{k:"Nominal",v:showDetail.nominal},{k:"Nama Vendor",v:showDetail.namaVendor},{k:"No. Rekening",v:showDetail.noRekening},{k:"Bank",v:showDetail.bank},{k:"Departemen",v:showDetail.departemen},{k:"Tanggal",v:showDetail.tgl},{k:"Tipe",v:showDetail.tipe},{k:"Status",v:showDetail.status}].map(row => (
                <div key={row.k} className="flex flex-col border-b border-gray-50 pb-1.5">
                  <span className="text-gray-400 text-[10px] font-mono uppercase">{row.k}</span>
                  <span className="font-semibold text-gray-700 text-[12px]">{row.v}</span>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-gray-100 flex gap-2 justify-end">
              <button onClick={() => isUmd ? setShowUmd(showDetail) : setShowVerif(showDetail)} className="bg-[#252271] text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1">
                <ChevronRight size={12} /> {isUmd ? "Form UMD" : "Verifikasi"}
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

      {showVerif && <FinanceVerifModal item={showVerif} onClose={() => setShowVerif(null)} />}
      {showUmd && <UmdSubmissionModal item={showUmd} onClose={() => setShowUmd(null)} />}
    </div>
  );
}
