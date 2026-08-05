import { useState, useMemo, useEffect } from "react";
import { useAuth } from "@/store/authStore";
import { api } from "@/services/api";
import { AdminTopBar } from "@/components/admin/layout/AdminTopBar";
import {
  BarChart3, TrendingUp, FileText, ClipboardList, FlaskConical, Wallet,
  Filter, Download, Search, ChevronRight, PieChart, Calendar, Users,
  CheckCircle2, Clock, XCircle, AlertTriangle, ArrowRight, Building2
} from "lucide-react";


// ─── Types ─────────────────────────────────────────────────────────────────────
type DashboardTab = "pengajuan-dana" | "pengujian" | "pengadaan" | "pembayaran";

interface TabDef {
  id: DashboardTab;
  label: string;
  icon: any;
  gradient: string;
}

const DASHBOARD_TABS: TabDef[] = [
  { id: "pengajuan-dana", label: "Pengajuan Dana", icon: Wallet, gradient: "from-[#e6251c] to-[#7a1210]" },
  { id: "pengujian", label: "Pengujian", icon: FlaskConical, gradient: "from-[#e6251c] to-[#7a1210]" },
  { id: "pengadaan", label: "Pengadaan", icon: ClipboardList, gradient: "from-[#e6251c] to-[#7a1210]" },
  { id: "pembayaran", label: "Pembayaran", icon: FileText, gradient: "from-[#e6251c] to-[#7a1210]" },
];

// ─── Shared Components ─────────────────────────────────────────────────────────
function StatCard({ label, value, icon: Icon, gradient, sub }: {
  label: string; value: string | number; icon: any; gradient: string; sub?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} rounded-[20px] p-5 text-white shadow-lg group hover:shadow-xl transition-all duration-300`}>
      <div className="absolute top-2 right-2 opacity-15 group-hover:opacity-25 transition-opacity">
        <Icon size={42} />
      </div>
      <p className="text-white/70 text-[10.5px] font-semibold uppercase tracking-wider mb-1">{label}</p>
      <p className="text-[30px] font-extrabold leading-none">{value}</p>
      {sub && <p className="text-white/55 text-[10px] mt-1">{sub}</p>}
    </div>
  );
}

function SimpleBarChart({ data, height = 140 }: { data: { label: string; values: number[]; colors: string[] }[]; height?: number }) {
  const allValues = data.flatMap(d => d.values);
  const max = Math.max(...allValues, 1);
  return (
    <div className="flex items-end gap-[6px]" style={{ height }}>
      {data.map((d, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
          <div className="flex gap-[2px] items-end w-full justify-center" style={{ height: height - 20 }}>
            {d.values.map((v, j) => (
              <div
                key={j}
                className="rounded-t-md transition-all duration-500 hover:opacity-80"
                style={{
                  width: `${Math.max(100 / (d.values.length + 1), 10)}%`,
                  height: `${(v / max) * 100}%`,
                  minHeight: v > 0 ? 4 : 0,
                  background: d.colors[j] || "#94a3b8",
                }}
              />
            ))}
          </div>
          <span className="text-[9px] text-gray-400 font-medium truncate max-w-full">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

function ChartLegend({ items }: { items: { label: string; color: string }[] }) {
  return (
    <div className="flex items-center gap-4 mt-3">
      {items.map(item => (
        <div key={item.label} className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
          <span className="text-[10px] text-gray-500 font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function SectionTitle({ children, icon: Icon }: { children: React.ReactNode; icon?: any }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="w-1 h-5 rounded-full bg-[#e6251c]" />
      {Icon && <Icon size={15} className="text-[#252271]" />}
      <h3 className="text-[14px] font-bold text-[#252271]">{children}</h3>
    </div>
  );
}

function DataTable({ columns, data }: { columns: { key: string; label: string; render?: (row: any) => React.ReactNode }[]; data: any[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-100">
      <div className="bg-[#252271] flex text-[10px] font-bold text-white uppercase tracking-wider">
        {columns.map(col => (
          <div key={col.key} className="flex-1 px-4 py-2.5">{col.label}</div>
        ))}
      </div>
      {data.length === 0 ? (
        <div className="py-10 text-center text-[12px] text-gray-400">Tidak ada data</div>
      ) : (
        data.map((row, i) => (
          <div key={i} className={`flex items-center hover:bg-gray-50 transition-colors ${i > 0 ? "border-t border-gray-100" : ""}`}>
            {columns.map(col => (
              <div key={col.key} className="flex-1 px-4 py-2.5 text-[11px] text-gray-700">
                {col.render ? col.render(row) : row[col.key]}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

// ─── UNIT & TAHUN FILTERS ──────────────────────────────────────────────────────
const UNITS = ["Pilih Unit", "CTI", "CUS", "CAA", "Semua Unit"];
const YEARS_LIST = ["2023", "2024", "2025", "2026"];

function UnitYearFilter({ unit, setUnit, tahun, setTahun }: {
  unit: string; setUnit: (v: string) => void; tahun: string; setTahun: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="flex items-center gap-2">
        <label className="text-[11px] font-semibold text-gray-500 uppercase">Unit</label>
        <select value={unit} onChange={e => setUnit(e.target.value)}
          className="h-8 px-3 rounded-lg border border-gray-200 text-[11.5px] text-gray-700 font-medium bg-white outline-none cursor-pointer">
          {UNITS.map(u => <option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label className="text-[11px] font-semibold text-gray-500 uppercase">Tahun</label>
        <input value={tahun} onChange={e => setTahun(e.target.value)}
          className="h-8 w-20 px-3 rounded-lg border border-gray-200 text-[11.5px] text-gray-700 font-medium bg-white outline-none"
          placeholder="2025"
        />
      </div>
      <button className="h-8 px-4 rounded-lg text-[11px] font-semibold text-white bg-[#e6251c] hover:bg-[#c20f06] flex items-center gap-1.5 transition-colors">
        <Filter size={12} /> Cari
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 1. PENGAJUAN DANA DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════════
const MOCK_PD_STATUS = [
  { unit: "CTI", onProgress: 5, selesai: 30 },
  { unit: "CUS", onProgress: 2, selesai: 8 },
  { unit: "CAA", onProgress: 1, selesai: 3 },
];

const MOCK_PR_STATUS = [
  { unit: "CTI", submit: 3, onGoing: 5, done: 2 },
  { unit: "CUS", submit: 1, onGoing: 2, done: 0 },
  { unit: "CAA", submit: 0, onGoing: 1, done: 1 },
];

const MOCK_PENDING_MATTERS = [
  { tanggal: "2026-01-13", noDokumen: "121312123", jenis: "KURA DOCUMENT", uraian: "test update", nominal: "Rp. 130.000.000", dept: "CTI", statuses: "USER INPUT DATA" },
  { tanggal: "2023-11-16", noDokumen: "111111", jenis: "PARK DOCUMENT", uraian: "pengadaan aplikasi", nominal: "Rp. 220.000.000", dept: "CTI", statuses: "USER INPUT DATA" },
  { tanggal: "2021-11-15", noDokumen: "ASDAIM231", jenis: "KURA DOCUMENT", uraian: "TEST PERMOHONAN", nominal: "Rp. 130.000.000", dept: "CTI", statuses: "USER INPUT DATA" },
  { tanggal: "2022-06-12", noDokumen: "121251121", jenis: "KURA DOCUMENT", uraian: "UAT CUS 2", nominal: "Rp. 310.000.000", dept: "CUS", statuses: "DIREKTUR EKSEKUSIF REVIEW" },
  { tanggal: "2023-11-16", noDokumen: "22222222", jenis: "PARK DOCUMENT", uraian: "test1", nominal: "Rp. 100.000.000", dept: "CTI", statuses: "USER INPUT DATA" },
  { tanggal: "2024-07-24", noDokumen: "1900051234", jenis: "KURA DOCUMENT", uraian: "revisi", nominal: "Rp. 100.000.000", dept: "CAA", statuses: "USER INPUT DATA" },
  { tanggal: "2023-06-29", noDokumen: "121251213", jenis: "PARK DOCUMENT", uraian: "Testing Revisi PD", nominal: "Rp. 256.000.000", dept: "CUS", statuses: "MANAJEMEN TERAS REVIEW" },
  { tanggal: "2020-02-09", noDokumen: "123456", jenis: "BIAYA", uraian: "Test di atas 200 juta", nominal: "Rp. 270.000.000", dept: "CTI", statuses: "USER INPUT DATA" },
  { tanggal: "2023-06-13", noDokumen: "1230873", jenis: "BIAYA", uraian: "UAT CTI PR BIAYA < 200", nominal: "Rp. 100.000.000", dept: "CTI", statuses: "USER INPUT DATA" },
  { tanggal: "2023-06-13", noDokumen: "1230873", jenis: "BIAYA", uraian: "UAT CTI BIAYA > 200-500", nominal: "Rp. 231.000.000", dept: "CTI", statuses: "USER INPUT DATA" },
];

function PengajuanDanaDashboard() {
  const [unit, setUnit] = useState("Pilih Unit");
  const [tahun, setTahun] = useState("2025");
  const [search, setSearch] = useState("");

  const filteredPending = useMemo(() => {
    if (!search) return MOCK_PENDING_MATTERS;
    const q = search.toLowerCase();
    return MOCK_PENDING_MATTERS.filter(r =>
      r.uraian.toLowerCase().includes(q) || r.noDokumen.includes(q) || r.jenis.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="space-y-6">
      <UnitYearFilter unit={unit} setUnit={setUnit} tahun={tahun} setTahun={setTahun} />

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-5">
        {/* Summary Status PD Per Unit */}
        <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-5">
          <SectionTitle icon={BarChart3}>Summary Status PD Per Unit</SectionTitle>
          <p className="text-[10px] text-gray-400 mb-2">Status PD per Unit</p>
          <SimpleBarChart
            data={MOCK_PD_STATUS.map(s => ({
              label: s.unit,
              values: [s.onProgress, s.selesai],
              colors: ["#252271", "#e6251c"],
            }))}
            height={150}
          />
          <ChartLegend items={[{ label: "On Progress", color: "#252271" }, { label: "Selesai", color: "#e6251c" }]} />
        </div>

        {/* Summary Status PR Per Unit */}
        <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-5">
          <SectionTitle icon={BarChart3}>Summary Status PR Per Unit</SectionTitle>
          <p className="text-[10px] text-gray-400 mb-2">Status PR per Unit</p>
          <SimpleBarChart
            data={MOCK_PR_STATUS.map(s => ({
              label: s.unit,
              values: [s.submit, s.onGoing, s.done],
              colors: ["#252271", "#e6251c", "#ff7676"],
            }))}
            height={150}
          />
          <ChartLegend items={[{ label: "Submit", color: "#252271" }, { label: "On Going", color: "#e6251c" }, { label: "Done", color: "#ff7676" }]} />
        </div>
      </div>

      {/* Pending Matters */}
      <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <SectionTitle icon={AlertTriangle}>Pending Matters</SectionTitle>
          <div className="flex items-center gap-2">
            <button className="h-8 px-3 rounded-lg text-[10.5px] font-semibold text-[#252271] border border-[#252271]/20 flex items-center gap-1.5 hover:bg-[#252271]/5 transition-colors">
              <Download size={12} /> Export Excel
            </button>
            <div className="flex items-center gap-1 text-[10.5px] text-gray-400">
              Show
              <select className="h-7 px-1.5 rounded border border-gray-200 text-[10.5px] text-gray-600 outline-none">
                <option>10</option><option>25</option><option>50</option>
              </select>
              entries
            </div>
            <div className="relative">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-300" />
              <input value={search} onChange={e => setSearch(e.target.value)}
                className="h-7 pl-7 pr-3 rounded-lg border border-gray-200 text-[10.5px] text-gray-600 outline-none w-36"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>

        <DataTable
          columns={[
            { key: "tanggal", label: "Tanggal", render: (r) => <span className="font-medium">{r.tanggal}</span> },
            { key: "noDokumen", label: "No. Dokumen", render: (r) => <span className="font-mono text-[10.5px]">{r.noDokumen}</span> },
            {
              key: "jenis", label: "Jenis", render: (r) => {
                const c: Record<string, string> = { "KURA DOCUMENT": "bg-orange-500", "PARK DOCUMENT": "bg-blue-500", "BIAYA": "bg-red-500" };
                return <span className={`text-[9.5px] text-white font-bold px-2 py-0.5 rounded ${c[r.jenis] || "bg-gray-500"}`}>{r.jenis}</span>;
              }
            },
            { key: "uraian", label: "Uraian" },
            { key: "nominal", label: "Nominal", render: (r) => <span className="font-semibold text-[#252271]">{r.nominal}</span> },
            { key: "dept", label: "Dept", render: (r) => <span className="font-bold">{r.dept}</span> },
            { key: "statuses", label: "Statuses", render: (r) => <span className="text-[#252271] font-semibold text-[10px] underline cursor-pointer">{r.statuses}</span> },
          ]}
          data={filteredPending}
        />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 2. PENGUJIAN DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════════
const MOCK_PENGUJIAN_STATS = [
  { label: "Total Request", value: 24, gradient: "from-[#252271] to-[#1a1753]", icon: FileText },
  { label: "Pelaksanaan", value: 8, gradient: "from-[#e6251c] to-[#b91c3c]", icon: Clock },
  { label: "Selesai", value: 14, gradient: "from-[#3b3baa] to-[#252271]", icon: CheckCircle2 },
  { label: "Pending Upload BAHP", value: 2, gradient: "from-[#ff7676] to-[#e6251c]", icon: AlertTriangle },
];

const MOCK_PENGUJIAN_CHART = [
  { label: "Jan", values: [2, 1, 3], colors: ["#252271", "#e6251c", "#ff7676"] },
  { label: "Feb", values: [1, 2, 1], colors: ["#252271", "#e6251c", "#ff7676"] },
  { label: "Mar", values: [3, 1, 2], colors: ["#252271", "#e6251c", "#ff7676"] },
  { label: "Apr", values: [2, 3, 4], colors: ["#252271", "#e6251c", "#ff7676"] },
  { label: "Mei", values: [4, 2, 3], colors: ["#252271", "#e6251c", "#ff7676"] },
  { label: "Jun", values: [3, 1, 5], colors: ["#252271", "#e6251c", "#ff7676"] },
];

const MOCK_PENGUJIAN_BY_DEPT = [
  { label: "CTI", values: [8], colors: ["#252271"] },
  { label: "LOG", values: [5], colors: ["#252271"] },
  { label: "OPS", values: [6], colors: ["#252271"] },
  { label: "KEU", values: [2], colors: ["#252271"] },
  { label: "SDM", values: [3], colors: ["#252271"] },
];

const MOCK_JADWAL_PENGUJIAN = [
  { noRequest: "REQ-2025-001", judul: "Pengujian Server Dell R750", mulai: "2025-10-01", selesai: "2025-10-15", status: "Selesai" },
  { noRequest: "REQ-2025-002", judul: "Pengujian Switch Cisco 9300", mulai: "2025-10-10", selesai: "2025-10-25", status: "Proses" },
  { noRequest: "REQ-2025-003", judul: "Pengujian Laptop Lenovo T14", mulai: "", selesai: "", status: "Pending" },
  { noRequest: "REQ-2025-004", judul: "Pengujian UPS APC 3000VA", mulai: "2025-11-01", selesai: "2025-11-10", status: "Selesai" },
];

function PengujianDashboard() {
  const [unit, setUnit] = useState("Pilih Unit");
  const [tahun, setTahun] = useState("2025");

  return (
    <div className="space-y-6">
      <UnitYearFilter unit={unit} setUnit={setUnit} tahun={tahun} setTahun={setTahun} />

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {MOCK_PENGUJIAN_STATS.map(s => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-5 gap-5">
        {/* Pengujian Bulanan */}
        <div className="col-span-3 bg-white rounded-[20px] shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-2">
            <SectionTitle icon={BarChart3}>Pengujian Bulanan</SectionTitle>
            <div className="flex gap-1">
              <select className="h-7 px-2 rounded border border-gray-200 text-[10px] text-gray-500 outline-none">
                <option>Bulan</option>
              </select>
              <select className="h-7 px-2 rounded border border-gray-200 text-[10px] text-gray-500 outline-none">
                <option>Tahun</option>
              </select>
            </div>
          </div>
          <SimpleBarChart data={MOCK_PENGUJIAN_CHART} height={160} />
          <ChartLegend items={[{ label: "Request", color: "#252271" }, { label: "Pelaksanaan", color: "#e6251c" }, { label: "Selesai", color: "#ff7676" }]} />
        </div>

        {/* Pengujian By Department */}
        <div className="col-span-2 bg-white rounded-[20px] shadow-sm border border-gray-100 p-5">
          <SectionTitle icon={Building2}>Pengujian Per Departemen</SectionTitle>
          <SimpleBarChart data={MOCK_PENGUJIAN_BY_DEPT} height={160} />
        </div>
      </div>

      {/* Jadwal Pengujian */}
      <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-5">
        <SectionTitle icon={Calendar}>Jadwal Pengujian</SectionTitle>
        <DataTable
          columns={[
            { key: "noRequest", label: "Nomor Request", render: (r) => <span className="font-mono font-bold text-[#252271] text-[10.5px]">{r.noRequest}</span> },
            { key: "judul", label: "Judul Pengujian", render: (r) => <span className="font-semibold text-[#e6251c] underline cursor-pointer">{r.judul}</span> },
            { key: "mulai", label: "Mulai Jadwal", render: (r) => <span>{r.mulai || "—"}</span> },
            { key: "selesai", label: "Selesai Jadwal", render: (r) => <span>{r.selesai || "—"}</span> },
            {
              key: "status", label: "Status", render: (r) => {
                const c: Record<string, string> = { Selesai: "text-green-600 bg-green-50", Proses: "text-amber-600 bg-amber-50", Pending: "text-red-500 bg-red-50" };
                return <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c[r.status] || "text-gray-500 bg-gray-50"}`}>{r.status}</span>;
              }
            },
          ]}
          data={MOCK_JADWAL_PENGUJIAN}
        />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 3. PENGADAAN DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════════
const MOCK_PENGADAAN_STATS = [
  { label: "Jumlah Kontrak", value: 13, gradient: "from-[#252271] to-[#3b3baa]", icon: FileText },
  { label: "Jumlah Submitted", value: 18, gradient: "from-[#e6251c] to-[#ff7676]", icon: ClipboardList },
  { label: "Pengadaan On Going", value: 18, gradient: "from-[#3b3baa] to-[#6664d1]", icon: Clock },
  { label: "Pengadaan Done", value: 18, gradient: "from-[#c20f06] to-[#e6251c]", icon: CheckCircle2 },
];

const MOCK_PENGADAAN_CHART = [
  { label: "Jan", values: [1, 2, 0], colors: ["#252271", "#e6251c", "#ff7676"] },
  { label: "Feb", values: [0, 1, 1], colors: ["#252271", "#e6251c", "#ff7676"] },
  { label: "Mar", values: [2, 3, 1], colors: ["#252271", "#e6251c", "#ff7676"] },
  { label: "Apr", values: [1, 0, 2], colors: ["#252271", "#e6251c", "#ff7676"] },
  { label: "Mei", values: [3, 4, 1], colors: ["#252271", "#e6251c", "#ff7676"] },
  { label: "Jun", values: [2, 1, 0], colors: ["#252271", "#e6251c", "#ff7676"] },
];

const MOCK_TREN_PENGAJUAN = [
  { bulan: "Jan", nilai: 2 }, { bulan: "Feb", nilai: 3 }, { bulan: "Mar", nilai: 5 },
  { bulan: "Apr", nilai: 4 }, { bulan: "Mei", nilai: 7 }, { bulan: "Jun", nilai: 6 },
  { bulan: "Jul", nilai: 8 }, { bulan: "Ags", nilai: 5 }, { bulan: "Sep", nilai: 9 },
  { bulan: "Okt", nilai: 7 }, { bulan: "Nov", nilai: 10 }, { bulan: "Des", nilai: 8 },
];

const MOCK_TOP_ASSIGNMENT = [
  { assignee: "Organization Planning and Development Manager", tipe: "Normal A", lokal: 8, total: 20 },
  { assignee: "VP Logistik & Pengadaan", tipe: "Normal B", lokal: 5, total: 12 },
];

const MOCK_PENGADAAN_BY_DEPT = [
  { label: "CTI", values: [12], colors: ["#e6251c"] },
  { label: "LOG", values: [8], colors: ["#e6251c"] },
  { label: "OPS", values: [5], colors: ["#e6251c"] },
  { label: "KEU", values: [3], colors: ["#e6251c"] },
  { label: "SDM", values: [2], colors: ["#e6251c"] },
  { label: "UMUM", values: [4], colors: ["#e6251c"] },
];

const MOCK_JADWAL_PENGADAAN = [
  { noKontrak: "GRENU.0GR2018/2025", judul: "PENGADAAN PEKERJAAN CLEANING SERVICE", mulai: "", selesai: "", status: "Expired" },
  { noKontrak: "GRENU.0GR2018/2025", judul: "PENGADAAN PEKERJAAN CLEANING SERVICE 2", mulai: "", selesai: "", status: "Lunas" },
  { noKontrak: "GRENU.0GR2018/2025", judul: "PENGADAAN PEKERJAAN CLEANING SERVICE", mulai: "2025-10-11", selesai: "2025-12-30", status: "Lunas" },
  { noKontrak: "NRENU.0GR2018/2025", judul: "PENGADAAN COLA", mulai: "2025-11-04", selesai: "2025-12-27", status: "Lunas" },
];

function TrendLineChart({ data }: { data: { bulan: string; nilai: number }[] }) {
  const max = Math.max(...data.map(d => d.nilai), 1);
  return (
    <div className="relative h-[100px]">
      <svg viewBox={`0 0 ${data.length * 30} 100`} className="w-full h-full" preserveAspectRatio="none">
        <polyline
          fill="none"
          stroke="#e6251c"
          strokeWidth="2"
          points={data.map((d, i) => `${i * 30 + 15},${100 - (d.nilai / max) * 85}`).join(" ")}
        />
        {data.map((d, i) => (
          <circle key={i} cx={i * 30 + 15} cy={100 - (d.nilai / max) * 85} r="3" fill="#e6251c" />
        ))}
      </svg>
      <div className="flex justify-between mt-1">
        {data.map(d => <span key={d.bulan} className="text-[7.5px] text-gray-400 font-medium">{d.bulan}</span>)}
      </div>
    </div>
  );
}

function PengadaanDashboard() {
  const [unit, setUnit] = useState("Pilih Unit");
  const [tahun, setTahun] = useState("2025");

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {MOCK_PENGADAAN_STATS.map(s => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-5 gap-5">
        {/* Pengajuan Kontrak */}
        <div className="col-span-3 bg-white rounded-[20px] shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-2">
            <SectionTitle icon={BarChart3}>Pengajuan Kontrak</SectionTitle>
            <div className="flex gap-1">
              <select className="h-7 px-2 rounded border border-gray-200 text-[10px] text-gray-500 outline-none">
                <option>Bulan</option>
              </select>
              <select className="h-7 px-2 rounded border border-gray-200 text-[10px] text-gray-500 outline-none">
                <option>Tahun</option>
              </select>
            </div>
          </div>
          <SimpleBarChart data={MOCK_PENGADAAN_CHART} height={160} />
          <ChartLegend items={[{ label: "Submit", color: "#252271" }, { label: "On Going", color: "#e6251c" }, { label: "Done", color: "#ff7676" }]} />
        </div>

        {/* Tren Pengajuan (Monthly) + Tipe Pengajuan */}
        <div className="col-span-2 space-y-4">
          <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-4">
            <SectionTitle icon={TrendingUp}>Tren Pengajuan (Monthly)</SectionTitle>
            <TrendLineChart data={MOCK_TREN_PENGAJUAN} />
          </div>
          <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-4">
            <SectionTitle icon={PieChart}>Tipe Pengajuan</SectionTitle>
            <div className="flex items-center gap-4 mt-2">
              {/* Simple donut representation */}
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#252271" strokeWidth="3" strokeDasharray="60 40" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e6251c" strokeWidth="3" strokeDasharray="40 60" strokeDashoffset="-60" />
                </svg>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#252271]" /><span className="text-[10px] text-gray-600">Outsourcing</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#e6251c]" /><span className="text-[10px] text-gray-600">Non Investasi</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Stats box + Top Assignment + Proses by Dept */}
      <div className="grid grid-cols-2 gap-5">
        {/* Top Assignment */}
        <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-5">
          <SectionTitle icon={Users}>Top Assignment</SectionTitle>
          <DataTable
            columns={[
              { key: "assignee", label: "Assignee", render: (r) => <span className="font-semibold text-[10.5px]">{r.assignee}</span> },
              { key: "tipe", label: "Tipe", render: (r) => <span className="text-[10.5px]">{r.tipe}</span> },
              { key: "lokal", label: "Lokal", render: (r) => <span className="font-bold text-[11px]">{r.lokal}</span> },
              {
                key: "total", label: "Total", render: (r) => (
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#e6251c] to-[#ff7676]" style={{ width: `${(r.total / 25) * 100}%` }} />
                    </div>
                    <span className="font-extrabold text-[13px] text-gray-800">{r.total}</span>
                  </div>
                )
              },
            ]}
            data={MOCK_TOP_ASSIGNMENT}
          />
        </div>

        {/* Proses Pengajuan By Department */}
        <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-5">
          <SectionTitle icon={Building2}>Proses Pengajuan By Department</SectionTitle>
          <SimpleBarChart data={MOCK_PENGADAAN_BY_DEPT} height={140} />
        </div>
      </div>

      {/* Jadwal Pengajuan */}
      <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-5">
        <SectionTitle icon={Calendar}>Jadwal Pengajuan</SectionTitle>
        <DataTable
          columns={[
            { key: "noKontrak", label: "Nomor Kontrak", render: (r) => <span className="font-mono text-[10.5px] text-gray-600">{r.noKontrak}</span> },
            { key: "judul", label: "Judul Pengadaan", render: (r) => <span className="font-semibold text-[#e6251c] underline cursor-pointer">{r.judul}</span> },
            { key: "mulai", label: "Mulai Jadwal", render: (r) => <span>{r.mulai || "—"}</span> },
            { key: "selesai", label: "Selesai Jadwal", render: (r) => <span>{r.selesai || "—"}</span> },
            {
              key: "status", label: "Status", render: (r) => {
                const c: Record<string, string> = { Lunas: "text-green-600 bg-green-50", Expired: "text-red-500 bg-red-50" };
                return <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c[r.status] || "text-gray-500 bg-gray-50"}`}>{r.status}</span>;
              }
            },
          ]}
          data={MOCK_JADWAL_PENGADAAN}
        />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 4. PEMBAYARAN DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════════
interface PaymentRow { label: string; nominal: string; package: number }

const MOCK_OUTSOURCING: PaymentRow[] = [
  { label: "Belum Verifikasi", nominal: "IDR 10.000.000,00", package: 1 },
  { label: "Sudah Verifikasi", nominal: "IDR 0,00", package: 2 },
  { label: "Revisi", nominal: "IDR 0,00", package: 2 },
  { label: "Siap Bayar", nominal: "IDR 0,00", package: 3 },
  { label: "Selesai", nominal: "IDR 0,00", package: 3 },
];

const MOCK_NON_OUTSOURCING: PaymentRow[] = [
  { label: "Belum Verifikasi", nominal: "IDR 195.299.234,00", package: 1 },
  { label: "Sudah Verifikasi", nominal: "IDR 0,00", package: 0 },
  { label: "Revisi", nominal: "IDR 0,00", package: 0 },
  { label: "Siap Bayar", nominal: "IDR 0,00", package: 0 },
  { label: "Selesai", nominal: "IDR 0,00", package: 0 },
];

const MOCK_LAMAN: { label: string; nominal: string }[] = [
  { label: "OUTSOURCE", nominal: "IDR 11.000.000,00" },
  { label: "NON OUTSOURCE", nominal: "IDR 1.000.000,00" },
];

const MOCK_KESELURUHAN: { label: string; nominal: string }[] = [
  { label: "Belum Verifikasi", nominal: "IDR 195.299.234,00" },
  { label: "Sudah Verifikasi", nominal: "IDR 0,00" },
  { label: "Revisi", nominal: "IDR 0,00" },
  { label: "Siap Bayar", nominal: "IDR 0,00" },
  { label: "Selesai", nominal: "IDR 0,00" },
];

function PaymentTable({ title, data, showPackage, gradient }: {
  title: string; data: { label: string; nominal: string; package?: number }[]; showPackage?: boolean; gradient: string;
}) {
  const totalNominal = data.length > 0 ? data[data.length - 1]?.nominal || "IDR 0,00" : "IDR 0,00";
  const totalPkg = showPackage ? data.reduce((s, r) => s + (r.package || 0), 0) : 0;
  return (
    <div className="rounded-xl overflow-hidden border border-gray-100">
      <div className={`bg-gradient-to-r ${gradient} flex items-center justify-between px-4 py-2.5`}>
        <h4 className="text-white text-[12px] font-bold">{title}</h4>
        {showPackage && <span className="text-white/80 text-[10px] font-semibold">Package</span>}
      </div>
      <div className="divide-y divide-gray-100">
        {data.map((row, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors">
            <span className="text-[11px] text-gray-600">{row.label}</span>
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-semibold text-gray-800">{row.nominal}</span>
              {showPackage && <span className="text-[11px] font-bold text-gray-600 w-6 text-right">{row.package}</span>}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-4 py-2.5 bg-red-50 border-t border-red-100">
        <span className="text-[11px] font-bold text-red-600">Total</span>
        <div className="flex items-center gap-4">
          <span className="text-[11px] font-extrabold text-red-600">{totalNominal}</span>
          {showPackage && <span className="text-[11px] font-extrabold text-red-600 w-6 text-right">{totalPkg}</span>}
        </div>
      </div>
    </div>
  );
}

function PembayaranDashboard() {
  const [unit, setUnit] = useState("Pilih Unit");
  const [vendor, setVendor] = useState("Pilih Vendor");
  const [currency, setCurrency] = useState("IDR");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="text-center mb-2">
        <h2 className="text-[18px] font-extrabold text-[#252271] uppercase tracking-wide">Payment Plan Recapitulation</h2>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <select value={unit} onChange={e => setUnit(e.target.value)}
          className="h-8 px-3 rounded-lg border border-gray-200 text-[11px] text-gray-600 font-medium outline-none cursor-pointer">
          <option>SELECT UNIT ▼</option>{UNITS.map(u => <option key={u}>{u}</option>)}
        </select>
        <select value={vendor} onChange={e => setVendor(e.target.value)}
          className="h-8 px-3 rounded-lg border border-gray-200 text-[11px] text-gray-600 font-medium outline-none cursor-pointer">
          <option>SELECT VENDOR ▼</option>
          <option>PT Maju Bersama</option><option>CV Solusi Elektronik</option>
        </select>
        <select value={currency} onChange={e => setCurrency(e.target.value)}
          className="h-8 px-3 rounded-lg border border-gray-200 text-[11px] text-gray-600 font-medium outline-none cursor-pointer">
          <option>PILIH MATA UANG ▼</option><option value="IDR">IDR</option><option value="USD">USD</option>
        </select>
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)}
          className="h-8 px-3 rounded-lg border border-gray-200 text-[11px] text-gray-600 outline-none" placeholder="Start Date" />
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)}
          className="h-8 px-3 rounded-lg border border-gray-200 text-[11px] text-gray-600 outline-none" placeholder="End Date" />
        <button className="h-8 px-4 rounded-lg text-[11px] font-bold text-white bg-[#e6251c] hover:bg-[#c20f06] flex items-center gap-1.5 transition-colors">
          <Search size={12} /> SEARCH
        </button>
      </div>

      {/* Tables Grid */}
      <div className="grid grid-cols-2 gap-5">
        <PaymentTable title="Outsourcing" data={MOCK_OUTSOURCING} showPackage gradient="from-[#e6251c] to-[#ff7676]" />
        <PaymentTable title="Non Outsourcing" data={MOCK_NON_OUTSOURCING} showPackage gradient="from-[#e6251c] to-[#ff7676]" />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <PaymentTable title="Laman" data={MOCK_LAMAN} gradient="from-[#252271] to-[#3b3baa]" />
        <div className="rounded-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#b91c3c] to-[#e6251c] px-4 py-2.5">
            <h4 className="text-white text-[12px] font-bold">Keseluruhan</h4>
          </div>
          <div className="divide-y divide-gray-100">
            {MOCK_KESELURUHAN.map((row, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors">
                <span className="text-[11px] text-gray-600">{row.label}</span>
                <span className="text-[11px] font-semibold text-gray-800">{row.nominal}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between px-4 py-2.5 bg-red-50 border-t border-red-100">
            <span className="text-[11px] font-bold text-red-600">Total</span>
            <span className="text-[11px] font-extrabold text-red-600">IDR 195.299.234,00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN DASHBOARD SCREEN
// ═══════════════════════════════════════════════════════════════════════════════
function LiveDashboard({ activeTab }: { activeTab: DashboardTab }) {
  const [dashboard, setDashboard] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/dashboard").then((response) => setDashboard(response.data)).catch(() => setDashboard(null)).finally(() => setLoading(false));
  }, []);

  const summary = dashboard?.summary || {};
  const status = dashboard?.statusDistribution || [];
  const monthly = dashboard?.monthly || [];
  const activities = dashboard?.recentActivity || [];
  const titleByTab: Record<DashboardTab, string> = { "pengajuan-dana": "Pengajuan Dana", pengujian: "Pengujian", pengadaan: "Pengadaan", pembayaran: "Pembayaran" };
  const cardData = [
    { label: "Total Pengadaan", value: summary.totalPengadaan ?? 0, icon: ClipboardList },
    { label: "Dalam Proses", value: summary.dalamProses ?? 0, icon: Clock },
    { label: "Pengujian Selesai", value: summary.pengujianSelesai ?? 0, icon: FlaskConical },
    { label: "Menunggu Verifikasi", value: summary.perluVerifikasi ?? 0, icon: AlertTriangle },
  ];

  if (loading) return <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center text-[12px] text-gray-500">Memuat dashboard dari database...</div>;
  return <div className="space-y-5">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{cardData.map((card) => { const Icon = card.icon; return <div key={card.label} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"><div className="flex items-start justify-between"><div><p className="text-[10.5px] font-bold uppercase tracking-wide text-gray-400">{card.label}</p><p className="mt-2 text-[28px] font-extrabold text-[#252271]">{card.value}</p></div><span className="rounded-xl bg-[#252271]/10 p-2 text-[#252271]"><Icon size={18} /></span></div><p className="mt-2 text-[10px] text-gray-400">Data aktual sistem</p></div>; })}</div>
    <div className="grid gap-5 xl:grid-cols-5"><div className="rounded-2xl border border-gray-100 bg-white p-5 xl:col-span-3"><SectionTitle icon={BarChart3}>Tren {titleByTab[activeTab]}</SectionTitle><div className="mt-5 space-y-3">{monthly.map((entry: any) => <div key={entry.month} className="grid grid-cols-[38px_1fr_32px] items-center gap-3 text-[11px]"><span className="font-semibold text-gray-500">{entry.month}</span><div className="h-2 overflow-hidden rounded-full bg-gray-100"><div className="h-full rounded-full bg-[#e6251c]" style={{ width: `${Math.min(100, (entry.pengadaan || 0) * 10)}%` }} /></div><span className="text-right font-bold text-[#252271]">{entry.pengadaan || 0}</span></div>)}</div></div><div className="rounded-2xl border border-gray-100 bg-white p-5 xl:col-span-2"><SectionTitle icon={PieChart}>Status Dokumen</SectionTitle><div className="mt-4 space-y-3">{status.map((entry: any) => <div key={entry.name} className="flex items-center justify-between"><span className="flex items-center gap-2 text-[11px] text-gray-600"><i className="h-2.5 w-2.5 rounded-full" style={{ background: entry.color }} />{entry.name}</span><span className="text-[13px] font-extrabold text-[#252271]">{entry.value}</span></div>)}</div></div></div>
    <div className="rounded-2xl border border-gray-100 bg-white p-5"><SectionTitle icon={Clock}>Laporan Aktivitas User & Admin</SectionTitle><div className="mt-4 divide-y divide-gray-100">{activities.length === 0 ? <p className="py-4 text-[11px] text-gray-400">Belum ada aktivitas pada periode ini.</p> : activities.map((activity: any, index: number) => <div key={`${activity.title}-${activity.created_at || index}`} className="flex items-center justify-between gap-4 py-3"><div><p className="text-[12px] font-bold text-gray-700">{activity.title}</p><p className="text-[10.5px] text-gray-400">{activity.meta} â€¢ {activity.action || activity.type}</p></div><span className="rounded-full bg-[#f5f7fd] px-2.5 py-1 text-[10px] font-bold text-[#252271]">{activity.status || "diproses"}</span></div>)}</div></div>
  </div>;
}

export function AdminDashboardScreen() {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState<DashboardTab>("pengajuan-dana");

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc] select-none">
      <div className="max-w-[1320px] mx-auto px-6 py-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="text-[#252271]/55 text-[13px] font-medium mb-0.5">Selamat datang kembali,</p>
            <h1 className="text-[#252271] text-[28px] font-extrabold leading-tight">{currentUser?.name || "Super Admin"}</h1>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-3 mb-6">
          {DASHBOARD_TABS.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-[12.5px] font-semibold transition-all ${isActive
                    ? "text-white shadow-lg"
                    : "text-gray-500 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                style={isActive ? { background: `linear-gradient(75deg, ${tab.gradient.replace("from-[", "").replace("]", "").split(" to-[")[0]}, ${tab.gradient.replace("from-[", "").replace("]", "").split(" to-[")[1]?.replace("]", "")})` } : {}}
              >
                <Icon size={15} className={isActive ? "text-white" : "text-gray-400"} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <LiveDashboard activeTab={activeTab} />

      </div>
    </div>
  );
}
