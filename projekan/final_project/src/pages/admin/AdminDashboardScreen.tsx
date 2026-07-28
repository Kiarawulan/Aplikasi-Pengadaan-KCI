import { useState } from "react";
import {
  Users, Package, CheckCircle, AlertTriangle, Activity,
  ChevronDown, Search
} from "lucide-react";
import { AdminTopBar } from "../../components/admin/AdminTopBar";
import { useAuth } from "../../store/authStore";
import { getPengadaan, getVerifRecords } from "../../store/dataStore";
import { getUsers } from "../../store/authStore";
import { PARK_STEPS } from "../../constants/steps";

// ─── C-FITS Data ────────────────────────────────────────────────────────────
const BANKS = ["BCA", "BNI", "BRI", "Mandiri", "Non Himbara", "Payroll", "Non Bank"];
const STATUS_COLS = ["Belum Verifikasi", "Sudah Verifikasi", "Siap Bayar", "Sirkulir", "Total"];

const CFITS_OUTSOURCE: Record<string, number[]> = {
  BCA:       [3, 5, 2, 1, 11],
  BNI:       [7, 3, 4, 0, 14],
  BRI:       [2, 6, 1, 2, 11],
  Mandiri:   [5, 4, 3, 1, 13],
  "Non Himbara": [1, 2, 0, 0, 3],
  Payroll:   [4, 1, 2, 0, 7],
  "Non Bank":[0, 1, 0, 0, 1],
};
const CFITS_NON_OUTSOURCE: Record<string, number[]> = {
  BCA:       [2, 3, 1, 0, 6],
  BNI:       [4, 2, 2, 1, 9],
  BRI:       [1, 4, 0, 1, 6],
  Mandiri:   [3, 2, 2, 0, 7],
  "Non Himbara": [0, 1, 0, 0, 1],
  Payroll:   [2, 0, 1, 0, 3],
  "Non Bank":[1, 0, 0, 0, 1],
};

function sumCol(data: Record<string, number[]>, col: number) {
  return Object.values(data).reduce((s, row) => s + (row[col] ?? 0), 0);
}

function RecapTable({ title, data }: { title: string; data: Record<string, number[]> }) {
  const totals = STATUS_COLS.map((_, i) => sumCol(data, i));
  return (
    <div className="mb-4">
      <p className="text-[11px] font-bold text-gray-600 mb-1.5 uppercase tracking-wide">{title}</p>
      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-[11px] border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-3 py-2 font-semibold text-gray-500 border-b border-gray-100 w-32">Bank / Package</th>
              {STATUS_COLS.map(s => (
                <th key={s} className="text-center px-2 py-2 font-semibold text-gray-500 border-b border-gray-100 whitespace-nowrap">{s}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([bank, vals], idx) => (
              <tr key={bank} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                <td className="px-3 py-2 font-medium text-gray-700">{bank}</td>
                {vals.map((v, i) => (
                  <td key={i} className={`text-center px-2 py-2 font-mono ${i === vals.length - 1 ? "font-bold text-[#252271]" : "text-gray-600"}`}>{v}</td>
                ))}
              </tr>
            ))}
            <tr className="bg-[#252271]/5 border-t border-gray-200">
              <td className="px-3 py-2 font-bold text-[#252271] text-[11px]">TOTAL</td>
              {totals.map((t, i) => (
                <td key={i} className={`text-center px-2 py-2 font-bold font-mono ${i === totals.length - 1 ? "text-[#e6251c]" : "text-[#252271]"}`}>{t}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PaymentSummarySection() {
  const [unit, setUnit] = useState("");
  const [vendor, setVendor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showOutsource, setShowOutsource] = useState(true);
  const [showNonOutsource, setShowNonOutsource] = useState(true);

  const totalOut = STATUS_COLS.map((_, i) => sumCol(CFITS_OUTSOURCE, i));
  const totalNon = STATUS_COLS.map((_, i) => sumCol(CFITS_NON_OUTSOURCE, i));
  const totalLunas = [22, 15, 37]; // outsource, non-outsource, total
  const keseluruhan = STATUS_COLS.map((_, i) => (totalOut[i] ?? 0) + (totalNon[i] ?? 0));

  return (
    <div className="bg-white rounded-3xl shadow-[0px_0px_10.9px_0px_rgba(0,0,0,0.09)] p-5 space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-[14px] text-[#252271]">Payment Plan Recapitulation</p>
          <p className="text-gray-400 text-[10.5px]">C-FITS — Rekapitulasi Status Pembayaran</p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 items-end">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-semibold text-gray-500 uppercase">Select Unit</label>
          <select value={unit} onChange={e => setUnit(e.target.value)}
            className="border border-gray-200 rounded-lg px-2 py-1.5 text-[11.5px] text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#252271]/30">
            <option value="">Semua Unit</option>
            {["CUG", "CTR", "CTI", "COS", "CTS", "CUS", "CAF"].map(u => <option key={u}>{u}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-semibold text-gray-500 uppercase">Select Vendor</label>
          <select value={vendor} onChange={e => setVendor(e.target.value)}
            className="border border-gray-200 rounded-lg px-2 py-1.5 text-[11.5px] text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#252271]/30">
            <option value="">Semua Vendor</option>
            {["PT Mitra Tenaga Kerja", "PT Hawa Dingin Nusantara", "PT Guard Nusantara"].map(v => <option key={v}>{v}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-semibold text-gray-500 uppercase">Start Date</label>
          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)}
            className="border border-gray-200 rounded-lg px-2 py-1.5 text-[11.5px] text-gray-700 bg-white focus:outline-none" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-semibold text-gray-500 uppercase">End Date</label>
          <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)}
            className="border border-gray-200 rounded-lg px-2 py-1.5 text-[11.5px] text-gray-700 bg-white focus:outline-none" />
        </div>
        <button className="bg-[#252271] text-white text-[11.5px] font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 hover:bg-[#1a1753] transition-colors">
          <Search size={12} /> Search
        </button>
      </div>

      {/* Summary tables */}
      <div className="grid grid-cols-2 gap-4">
        {/* Outsourcing summary */}
        <div className="border border-gray-100 rounded-xl p-3">
          <p className="text-[11px] font-bold text-gray-700 mb-2">Outsourcing (Package)</p>
          <table className="w-full text-[10.5px]">
            <thead><tr className="bg-gray-50">
              <th className="text-left px-2 py-1.5 text-gray-500 border-b border-gray-100">Package</th>
              {STATUS_COLS.map(s => <th key={s} className="text-center px-1 py-1.5 text-gray-500 border-b border-gray-100 whitespace-nowrap">{s}</th>)}
            </tr></thead>
            <tbody>
              <tr><td className="px-2 py-1.5 text-gray-600 font-medium">Total</td>
                {totalOut.map((v, i) => <td key={i} className={`text-center px-1 py-1.5 font-bold font-mono ${i === 4 ? "text-[#252271]" : "text-gray-700"}`}>{v}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
        {/* Non-Outsourcing summary */}
        <div className="border border-gray-100 rounded-xl p-3">
          <p className="text-[11px] font-bold text-gray-700 mb-2">Non Outsourcing (Package)</p>
          <table className="w-full text-[10.5px]">
            <thead><tr className="bg-gray-50">
              <th className="text-left px-2 py-1.5 text-gray-500 border-b border-gray-100">Package</th>
              {STATUS_COLS.map(s => <th key={s} className="text-center px-1 py-1.5 text-gray-500 border-b border-gray-100 whitespace-nowrap">{s}</th>)}
            </tr></thead>
            <tbody>
              <tr><td className="px-2 py-1.5 text-gray-600 font-medium">Total</td>
                {totalNon.map((v, i) => <td key={i} className={`text-center px-1 py-1.5 font-bold font-mono ${i === 4 ? "text-[#252271]" : "text-gray-700"}`}>{v}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
        {/* Lunas */}
        <div className="border border-gray-100 rounded-xl p-3">
          <p className="text-[11px] font-bold text-gray-700 mb-2">Lunas</p>
          <table className="w-full text-[10.5px]">
            <thead><tr className="bg-gray-50">
              <th className="text-left px-2 py-1.5 text-gray-500 border-b border-gray-100">Package</th>
              {["Outsource","Non Outsource","Total"].map(s => <th key={s} className="text-center px-2 py-1.5 text-gray-500 border-b border-gray-100">{s}</th>)}
            </tr></thead>
            <tbody><tr>
              <td className="px-2 py-1.5 text-gray-600 font-medium">Total</td>
              {totalLunas.map((v, i) => <td key={i} className={`text-center px-2 py-1.5 font-bold font-mono ${i === 2 ? "text-green-600" : "text-gray-700"}`}>{v}</td>)}
            </tr></tbody>
          </table>
        </div>
        {/* Keseluruhan */}
        <div className="border border-gray-100 rounded-xl p-3">
          <p className="text-[11px] font-bold text-gray-700 mb-2">Keseluruhan</p>
          <table className="w-full text-[10.5px]">
            <thead><tr className="bg-gray-50">
              <th className="text-left px-2 py-1.5 text-gray-500 border-b border-gray-100">Package</th>
              {STATUS_COLS.map(s => <th key={s} className="text-center px-1 py-1.5 text-gray-500 border-b border-gray-100 whitespace-nowrap">{s}</th>)}
            </tr></thead>
            <tbody><tr>
              <td className="px-2 py-1.5 text-gray-600 font-medium">Total</td>
              {keseluruhan.map((v, i) => <td key={i} className={`text-center px-1 py-1.5 font-bold font-mono ${i === 4 ? "text-[#e6251c]" : "text-gray-700"}`}>{v}</td>)}
            </tr></tbody>
          </table>
        </div>
      </div>

      {/* Per-bank breakdown */}
      <div>
        <button onClick={() => setShowOutsource(v => !v)}
          className="flex items-center gap-2 text-[12px] font-bold text-[#252271] mb-3 hover:text-[#1a1753]">
          <ChevronDown size={14} className={`transition-transform ${showOutsource ? "" : "-rotate-90"}`} />
          Outsourcing — Rincian per Bank
        </button>
        {showOutsource && <RecapTable title="Outsourcing" data={CFITS_OUTSOURCE} />}
      </div>
      <div>
        <button onClick={() => setShowNonOutsource(v => !v)}
          className="flex items-center gap-2 text-[12px] font-bold text-[#252271] mb-3 hover:text-[#1a1753]">
          <ChevronDown size={14} className={`transition-transform ${showNonOutsource ? "" : "-rotate-90"}`} />
          Non Outsourcing — Rincian per Bank
        </button>
        {showNonOutsource && <RecapTable title="Non Outsourcing" data={CFITS_NON_OUTSOURCE} />}
      </div>
    </div>
  );
}

const STEP_LABELS: Record<string, string> = {
  npp: "NPP", "pengajuan-dana": "Pengajuan Dana", sp3: "SP3",
  pbj: "PBJ", contract: "Contract", pengujian: "Pengujian", pembayaran: "Pembayaran",
};

export function AdminDashboardScreen() {
  const { currentUser, currentRole, isAdmin } = useAuth();
  const allPengadaan = getPengadaan();
  const allVerif = getVerifRecords();
  const allUsers = getUsers();

  // Role-aware filtering
  const pengadaan = isAdmin
    ? allPengadaan
    : allPengadaan.filter(p => p.createdBy === currentUser?.id || p.departemen === currentUser?.departemen);

  const pendingVerif = allVerif.filter(v => v.status === "pending");
  const activeCount = pengadaan.filter(p => p.status !== "Selesai").length;
  const selesaiCount = pengadaan.filter(p => p.status === "Selesai").length;

  // Count by step
  const stepCounts = PARK_STEPS.reduce((acc, s) => {
    acc[s.id] = pengadaan.filter(p => p.currentStep === s.id).length;
    return acc;
  }, {} as Record<string, number>);
  const maxCount = Math.max(...Object.values(stepCounts), 1);

  // Recent activity (mock combined)
  const recentActivity = [
    ...allVerif.slice(0, 5).map(v => ({
      text: `${v.tipe === "park-dokumen" ? "Park Dokumen" : v.tipe} — ${v.pengadaanNama.substring(0, 32)}...`,
      time: new Date(v.submitAt).toLocaleDateString("id-ID"),
      status: v.status,
      who: v.submitBy,
    })),
  ];

  const statCards = [
    { label: "Total Pengadaan", value: pengadaan.length, sub: isAdmin ? "Semua departemen" : currentUser?.departemen, icon: <Package size={18} />, gradient: true },
    { label: "Sedang Berjalan", value: activeCount, sub: "Belum selesai", icon: <Activity size={18} />, color: "#252271" },
    { label: "Selesai", value: selesaiCount, sub: "Proses selesai", icon: <CheckCircle size={18} />, color: "#16a34a" },
    { label: "Perlu Verifikasi", value: pendingVerif.length, sub: "Menunggu approval", icon: <AlertTriangle size={18} />, color: "#d97706" },
  ];

  const monitorItems = [
    { label: "Realisasi Program", value: "75%", bar: 75, color: "#e6251c" },
    { label: "RUP Monitoring", value: "88%", bar: 88, color: "#252271" },
    { label: "PBJ Monitoring", value: "62%", bar: 62, color: "#16a34a" },
    { label: "Contract Monitoring", value: "54%", bar: 54, color: "#d97706" },
    { label: "RAB Monitoring", value: "91%", bar: 91, color: "#7c3aed" },
    { label: "Vendor Monitoring", value: "80%", bar: 80, color: "#0891b2" },
    { label: "Import Inklaring", value: "45%", bar: 45, color: "#be185d" },
    { label: "Warehouse Monitoring", value: "70%", bar: 70, color: "#ea580c" },
  ];

  return (
    <div>
      <AdminTopBar title="Dashboard" subtitle={isAdmin ? "Overview Sistem" : currentUser?.departemen} />

      {/* Role info banner (non-admin) */}
      {!isAdmin && (
        <div className="mb-4 rounded-xl bg-blue-50 border border-blue-100 px-4 py-2.5 flex items-center gap-2">
          <Users size={13} className="text-blue-500" />
          <span className="text-[12px] text-blue-700">
            Anda melihat data untuk departemen <strong>{currentUser?.departemen}</strong> — Role: <strong>{currentRole?.name}</strong>
          </span>
        </div>
      )}

      <div className="space-y-4">
        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-3">
          {statCards.map(c => (
            <div
              key={c.label}
              className="rounded-3xl p-5 h-44 flex flex-col justify-between shadow-[0px_0px_7.6px_0px_rgba(0,0,0,0.14)]"
              style={c.gradient
                ? { background: "linear-gradient(198deg, #d61b12 11%, #700e09 152%)" }
                : { background: "white" }
              }
            >
              <div className="flex items-center justify-between">
                <p className={`text-[11.5px] font-medium ${c.gradient ? "text-white/80" : "text-gray-500"}`}>{c.label}</p>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: c.gradient ? "rgba(255,255,255,0.15)" : `${c.color}15` }}>
                  <span style={{ color: c.gradient ? "white" : c.color }}>{c.icon}</span>
                </div>
              </div>
              <div>
                <p className={`text-5xl font-black ${c.gradient ? "text-white" : ""}`} style={!c.gradient ? { color: c.color } : {}}>
                  {c.value}
                </p>
                <p className={`text-[10px] mt-1 ${c.gradient ? "text-white/60" : "text-gray-400"}`}>{c.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Middle row */}
        <div className="grid grid-cols-3 gap-3">
          {/* Progress per step */}
          <div className="col-span-2 bg-white rounded-3xl shadow-[0px_0px_10.9px_0px_rgba(0,0,0,0.09)] p-5">
            <p className="text-[11.5px] font-semibold text-gray-600 mb-4">Distribusi Progres Pengadaan per Tahap</p>
            <div className="space-y-3">
              {PARK_STEPS.map(step => {
                const count = stepCounts[step.id] || 0;
                const pct = Math.round((count / maxCount) * 100);
                return (
                  <div key={step.id} className="flex items-center gap-3">
                    <span className="text-[10.5px] text-gray-500 w-28 shrink-0">{STEP_LABELS[step.id]}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2">
                      <div className="h-2 rounded-full transition-all" style={{ width: `${pct}%`, background: "linear-gradient(90deg, #e6251c, #ff7676)" }} />
                    </div>
                    <span className="text-[10px] text-gray-500 w-14 text-right">{count} item ({pct}%)</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Budget summary */}
          <div className="rounded-3xl p-5 flex flex-col justify-between shadow-[0px_0px_10.7px_0px_rgba(0,0,0,0.25)]"
            style={{ background: "linear-gradient(150deg, #252271 28%, #030059 83%)" }}>
            <div>
              <p className="text-white font-semibold text-[11.5px]">Ringkasan Anggaran</p>
              <p className="text-white/50 text-[10px] mt-0.5">Tahun 2024</p>
            </div>
            <div>
              <p className="text-white/70 text-[10.5px]">Total Nilai RKAP</p>
              <p className="text-white font-black text-3xl">Rp 2,4 M</p>
              <div className="mt-3 bg-white/10 rounded-full h-2">
                <div className="bg-white/70 h-2 rounded-full" style={{ width: "75%" }} />
              </div>
              <p className="text-white/60 text-[10.5px] mt-1">Realisasi: Rp 1,8 M (75%)</p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                <div className="bg-white/10 rounded-xl py-2">
                  <p className="text-white font-bold text-[14px]">{allUsers.filter(u => u.isActive && !u.isAdmin).length}</p>
                  <p className="text-white/50 text-[9.5px]">User Aktif</p>
                </div>
                <div className="bg-white/10 rounded-xl py-2">
                  <p className="text-white font-bold text-[14px]">{pendingVerif.length}</p>
                  <p className="text-white/50 text-[9.5px]">Pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monitoring & Activity */}
        <div className="grid grid-cols-2 gap-3">
          {/* Monitoring */}
          <div className="bg-white rounded-3xl shadow-[0px_0px_10.9px_0px_rgba(0,0,0,0.09)] p-5">
            <p className="text-[11.5px] font-semibold text-gray-600 mb-4">Monitoring & Reporting</p>
            <div className="space-y-2.5">
              {monitorItems.map(m => (
                <div key={m.label} className="flex items-center gap-3">
                  <span className="text-[10.5px] text-gray-500 w-36 shrink-0">{m.label}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                    <div className="h-1.5 rounded-full" style={{ width: `${m.bar}%`, background: m.color }} />
                  </div>
                  <span className="text-[10px] text-gray-500 w-8 text-right">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="bg-white rounded-3xl shadow-[0px_0px_10.9px_0px_rgba(0,0,0,0.09)] p-5">
            <p className="text-[11.5px] font-semibold text-gray-600 mb-4">Aktivitas Terbaru</p>
            <div className="space-y-3">
              {recentActivity.length === 0 ? (
                <p className="text-gray-400 text-[11px]">Belum ada aktivitas</p>
              ) : (
                recentActivity.map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${
                      a.status === "approved" ? "bg-green-400" :
                      a.status === "revisi" ? "bg-blue-400" :
                      a.status === "rejected" ? "bg-red-400" : "bg-amber-400"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-gray-700 truncate">{a.text}</p>
                      <p className="text-[10px] text-gray-400">{a.who} · {a.time}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* C-FITS Payment Plan Recapitulation */}
        <PaymentSummarySection />
      </div>
    </div>
  );
}
