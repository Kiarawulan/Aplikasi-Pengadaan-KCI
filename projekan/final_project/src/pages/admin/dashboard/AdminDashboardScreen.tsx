import { useState, useMemo, useEffect } from "react";
import { useAuth } from "@/store/authStore";
import { api } from "@/services/api";
import {
  BarChart3, TrendingUp, FileText, ClipboardList, FlaskConical, Wallet,
  Filter, Download, Search, PieChart, Calendar, Users,
  CheckCircle2, Clock, AlertTriangle, Building2
} from "lucide-react";
import { DIVISI_LIST } from "@/constants/divisi";
import { getFigmaCaptureConfig } from "@/figmaCapture";


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
const DEFAULT_UNITS = ["Pilih Divisi", "Semua Divisi", ...DIVISI_LIST];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

type ApiRow = Record<string, any>;

function isDone(status?: string) {
  return ["completed", "approved", "selesai", "done"].includes(String(status || "").toLowerCase());
}

function isInProgress(status?: string) {
  return !isDone(status) && !["rejected", "revision_required", "draft"].includes(String(status || "").toLowerCase());
}

function recordDate(row: ApiRow) {
  return String(row.tanggal || row.created_at || row.submit_at || "");
}

function dateLabel(value?: string) {
  if (!value) return "—";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString("id-ID");
}

function nominalValue(value: unknown) {
  if (typeof value === "number") return value;
  const digits = String(value || "").replace(/[^0-9]/g, "");
  return digits ? Number(digits) : 0;
}

function currency(value: unknown) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(nominalValue(value));
}

function exportExcel(rows: Record<string, unknown>[], fileName: string) {
  const columns = Array.from(new Set(rows.flatMap(row => Object.keys(row))));
  const escapeXml = (value: unknown) => String(value ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const cell = (value: unknown) => `<Cell><Data ss:Type="${typeof value === "number" ? "Number" : "String"}">${escapeXml(value)}</Data></Cell>`;
  const body = [columns, ...rows.map(row => columns.map(column => row[column]))]
    .map(values => `<Row>${values.map(cell).join("")}</Row>`).join("");
  const workbook = `<?xml version="1.0"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"><Worksheet ss:Name="Data"><Table>${body}</Table></Worksheet></Workbook>`;
  const url = URL.createObjectURL(new Blob([workbook], { type: "application/vnd.ms-excel;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `${fileName}-${new Date().toISOString().slice(0, 10)}.xls`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function ExportExcelButton({ rows, fileName }: { rows: Record<string, unknown>[]; fileName: string }) {
  return <button type="button" disabled={!rows.length} onClick={() => exportExcel(rows, fileName)}
    className="h-8 px-3 rounded-lg text-[10.5px] font-semibold text-[#252271] border border-[#252271]/20 flex items-center gap-1.5 hover:bg-[#252271]/5 transition-colors disabled:cursor-not-allowed disabled:opacity-40">
    <Download size={12} /> Export Excel
  </button>;
}

function filterRecords(rows: ApiRow[], unit: string, year: string) {
  return rows.filter((row) => {
    const matchesUnit = !unit || unit === "Pilih Divisi" || unit === "Semua Divisi" || row.departemen === unit;
    const date = recordDate(row);
    const matchesYear = !year || !date || date.startsWith(year);
    return matchesUnit && matchesYear;
  });
}

function monthlyRows(rows: ApiRow[], getValues: (row: ApiRow) => number[]) {
  return MONTHS.map((label, index) => {
    const values = rows
      .filter((row) => new Date(recordDate(row)).getMonth() === index)
      .reduce((total, row) => total.map((value, itemIndex) => value + (getValues(row)[itemIndex] || 0)), [0, 0, 0]);
    return { label, values, colors: ["#252271", "#e6251c", "#ff7676"] };
  });
}

function rowsByDepartment(rows: ApiRow[], color = "#252271") {
  const totals = rows.reduce<Record<string, number>>((acc, row) => {
    const department = row.departemen || "Tanpa Divisi";
    acc[department] = (acc[department] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(totals).map(([label, total]) => ({ label, values: [total], colors: [color] }));
}

function getVendor(row: ApiRow) {
  const formData = row.formData || row.form_data || {};
  const nested = formData["buat-npp"] || formData.npp || formData.sp3 || formData.contract || formData;
  return nested?.vendor || "—";
}

function useAdminDashboardData() {
  const [data, setData] = useState<{ pengadaan: ApiRow[]; pengujian: ApiRow[]; pembayaran: ApiRow[]; verifikasi: ApiRow[] }>({ pengadaan: [], pengujian: [], pembayaran: [], verifikasi: [] });

  useEffect(() => {
    let active = true;
    Promise.all([
      api.get("/pengadaan"),
      api.get("/pengujian"),
      api.get("/payments"),
      api.get("/verifikasi"),
    ]).then(([pengadaan, pengujian, pembayaran, verifikasi]) => {
      if (active) setData({
        pengadaan: Array.isArray(pengadaan.data) ? pengadaan.data : [],
        pengujian: Array.isArray(pengujian.data) ? pengujian.data : [],
        pembayaran: Array.isArray(pembayaran.data) ? pembayaran.data : [],
        verifikasi: Array.isArray(verifikasi.data) ? verifikasi.data : [],
      });
    }).catch(() => {
      if (active) setData({ pengadaan: [], pengujian: [], pembayaran: [], verifikasi: [] });
    });
    return () => { active = false; };
  }, []);

  const units = useMemo(() => [...DEFAULT_UNITS, ...Array.from(new Set(data.pengadaan.map((row) => row.departemen).filter(Boolean)))], [data.pengadaan]);
  return { ...data, units };
}

function UnitYearFilter({ unit, setUnit, tahun, setTahun, units = DEFAULT_UNITS }: {
  unit: string; setUnit: (v: string) => void; tahun: string; setTahun: (v: string) => void; units?: string[];
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="flex items-center gap-2">
        <label className="text-[11px] font-semibold text-gray-500 uppercase">Divisi</label>
        <select value={unit} onChange={e => setUnit(e.target.value)}
          className="h-8 px-3 rounded-lg border border-gray-200 text-[11.5px] text-gray-700 font-medium bg-white outline-none cursor-pointer">
          {units.map(u => <option key={u} value={u}>{u}</option>)}
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
function PengajuanDanaDashboard() {
  const [unit, setUnit] = useState("Pilih Divisi");
  const [tahun, setTahun] = useState(() => String(new Date().getFullYear()));
  const [search, setSearch] = useState("");
  const { pengadaan, verifikasi, units } = useAdminDashboardData();
  const scopedPengadaan = useMemo(() => filterRecords(pengadaan, unit, tahun), [pengadaan, unit, tahun]);
  const pengadaanById = useMemo(() => new Map(pengadaan.map((row) => [row.id, row])), [pengadaan]);
  const pdStatus = useMemo(() => rowsByDepartment(scopedPengadaan.filter((row) => row.flowType === "pd")).map((row) => ({
    unit: row.label,
    onProgress: scopedPengadaan.filter((item) => item.flowType === "pd" && (item.departemen || "Tanpa Divisi") === row.label && isInProgress(item.status)).length,
    selesai: scopedPengadaan.filter((item) => item.flowType === "pd" && (item.departemen || "Tanpa Divisi") === row.label && isDone(item.status)).length,
  })), [scopedPengadaan]);
  const prStatus = useMemo(() => rowsByDepartment(scopedPengadaan.filter((row) => row.flowType === "pr")).map((row) => ({
    unit: row.label,
    submit: scopedPengadaan.filter((item) => item.flowType === "pr" && (item.departemen || "Tanpa Divisi") === row.label && item.status === "draft").length,
    onGoing: scopedPengadaan.filter((item) => item.flowType === "pr" && (item.departemen || "Tanpa Divisi") === row.label && isInProgress(item.status)).length,
    done: scopedPengadaan.filter((item) => item.flowType === "pr" && (item.departemen || "Tanpa Divisi") === row.label && isDone(item.status)).length,
  })), [scopedPengadaan]);
  const pendingMatters = useMemo(() => filterRecords(verifikasi, unit, tahun)
    .filter((row) => row.status === "pending")
    .map((row) => {
      const parent = pengadaanById.get(row.pengadaan_id) || {};
      const isPd = parent.flowType === "pd" || row.tipe === "park-dokumen";
      return {
        tanggal: dateLabel(row.submit_at),
        noDokumen: parent.id || row.pengadaan_id || "—",
        jenis: isPd ? "PARK DOCUMENT" : "PURCHASE REQUISITION",
        uraian: row.pengadaan_nama || parent.nama || "—",
        nominal: currency(row.nominal || parent.nominal),
        dept: row.departemen || parent.departemen || "—",
        statuses: String(row.tipe || "verifikasi").replace(/-/g, " ").toUpperCase(),
      };
    }), [verifikasi, unit, tahun, pengadaanById]);

  const filteredPending = useMemo(() => {
    if (!search) return pendingMatters;
    const q = search.toLowerCase();
    return pendingMatters.filter(r =>
      r.uraian.toLowerCase().includes(q) || r.noDokumen.includes(q) || r.jenis.toLowerCase().includes(q)
    );
  }, [search, pendingMatters]);

  return (
    <div className="space-y-6">
      <div className="flex justify-end"><ExportExcelButton rows={filteredPending} fileName="pengajuan-dana" /></div>
      <UnitYearFilter unit={unit} setUnit={setUnit} tahun={tahun} setTahun={setTahun} units={units} />

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-5">
        {/* Summary Status PD Per Divisi */}
        <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-5">
          <SectionTitle icon={BarChart3}>Summary Status PD Per Divisi</SectionTitle>
          <p className="text-[10px] text-gray-400 mb-2">Status PD per Divisi</p>
          <SimpleBarChart
            data={pdStatus.map(s => ({
              label: s.unit,
              values: [s.onProgress, s.selesai],
              colors: ["#252271", "#e6251c"],
            }))}
            height={150}
          />
          <ChartLegend items={[{ label: "On Progress", color: "#252271" }, { label: "Selesai", color: "#e6251c" }]} />
        </div>

        {/* Summary Status PR Per Divisi */}
        <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-5">
          <SectionTitle icon={BarChart3}>Summary Status PR Per Divisi</SectionTitle>
          <p className="text-[10px] text-gray-400 mb-2">Status PR per Divisi</p>
          <SimpleBarChart
            data={prStatus.map(s => ({
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
function PengujianDashboard() {
  const [unit, setUnit] = useState("Pilih Divisi");
  const [bulan, setBulan] = useState("");
  const [tahun, setTahun] = useState(() => String(new Date().getFullYear()));
  const { pengujian, units } = useAdminDashboardData();
  const scopedPengujian = useMemo(() => filterRecords(pengujian, unit, tahun)
    .filter((row) => !bulan || new Date(recordDate(row)).getMonth() === Number(bulan)), [pengujian, unit, bulan, tahun]);
  const pengujianStats = useMemo(() => [
    { label: "Total Request", value: scopedPengujian.length, gradient: "from-[#252271] to-[#1a1753]", icon: FileText },
    { label: "Pelaksanaan", value: scopedPengujian.filter((row) => row.status === "on_progress").length, gradient: "from-[#e6251c] to-[#b91c3c]", icon: Clock },
    { label: "Selesai", value: scopedPengujian.filter((row) => isDone(row.status)).length, gradient: "from-[#3b3baa] to-[#252271]", icon: CheckCircle2 },
    { label: "Menunggu Persetujuan", value: scopedPengujian.filter((row) => ["waiting_approval", "pending"].includes(row.status)).length, gradient: "from-[#ff7676] to-[#e6251c]", icon: AlertTriangle },
  ], [scopedPengujian]);
  const pengujianChart = useMemo(() => monthlyRows(scopedPengujian, (row) => [1, row.status === "on_progress" ? 1 : 0, isDone(row.status) ? 1 : 0]), [scopedPengujian]);
  const pengujianByDept = useMemo(() => rowsByDepartment(scopedPengujian), [scopedPengujian]);
  const jadwalPengujian = useMemo(() => scopedPengujian.map((row) => ({
    noRequest: row.id || "—",
    judul: row.nama || "—",
    mulai: dateLabel(row.scheduled_at || row.tanggal),
    selesai: isDone(row.status) ? dateLabel(row.updated_at || row.tanggal) : "",
    status: isDone(row.status) ? "Selesai" : row.status === "on_progress" ? "Proses" : "Pending",
  })), [scopedPengujian]);

  return (
    <div className="space-y-6">
      <div className="flex justify-end"><ExportExcelButton rows={jadwalPengujian} fileName="pengujian" /></div>
      <UnitYearFilter unit={unit} setUnit={setUnit} tahun={tahun} setTahun={setTahun} units={units} />

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {pengujianStats.map(s => (
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
              <select value={bulan} onChange={e => setBulan(e.target.value)} className="h-7 px-2 rounded border border-gray-200 text-[10px] text-gray-500 outline-none">
                <option value="">Bulan</option>
                {MONTHS.map((label, index) => <option key={label} value={index}>{label}</option>)}
              </select>
              <select value={tahun} onChange={e => setTahun(e.target.value)} className="h-7 px-2 rounded border border-gray-200 text-[10px] text-gray-500 outline-none">
                <option value="">Tahun</option>
                {Array.from(new Set([tahun, ...pengujian.map((row) => recordDate(row).slice(0, 4)).filter(Boolean)])).sort().map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </div>
          </div>
          <SimpleBarChart data={pengujianChart} height={160} />
          <ChartLegend items={[{ label: "Request", color: "#252271" }, { label: "Pelaksanaan", color: "#e6251c" }, { label: "Selesai", color: "#ff7676" }]} />
        </div>

        {/* Pengujian By Department */}
        <div className="col-span-2 bg-white rounded-[20px] shadow-sm border border-gray-100 p-5">
          <SectionTitle icon={Building2}>Pengujian Per Divisi</SectionTitle>
          <SimpleBarChart data={pengujianByDept} height={160} />
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
          data={jadwalPengujian}
        />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 3. PENGADAAN DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════════
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
  const [bulan, setBulan] = useState("");
  const [tahun, setTahun] = useState(() => String(new Date().getFullYear()));
  const { pengadaan } = useAdminDashboardData();
  const scopedPengadaan = useMemo(() => filterRecords(pengadaan, "Semua Divisi", tahun)
    .filter((row) => !bulan || new Date(recordDate(row)).getMonth() === Number(bulan)), [pengadaan, bulan, tahun]);
  const pengadaanStats = useMemo(() => [
    { label: "Jumlah Kontrak", value: scopedPengadaan.filter((row) => ["contract", "completed"].includes(row.currentStep) || isDone(row.status)).length, gradient: "from-[#252271] to-[#3b3baa]", icon: FileText },
    { label: "Jumlah Submitted", value: scopedPengadaan.length, gradient: "from-[#e6251c] to-[#ff7676]", icon: ClipboardList },
    { label: "Pengadaan On Going", value: scopedPengadaan.filter((row) => isInProgress(row.status)).length, gradient: "from-[#3b3baa] to-[#6664d1]", icon: Clock },
    { label: "Pengadaan Done", value: scopedPengadaan.filter((row) => isDone(row.status)).length, gradient: "from-[#c20f06] to-[#e6251c]", icon: CheckCircle2 },
  ], [scopedPengadaan]);
  const pengadaanChart = useMemo(() => monthlyRows(scopedPengadaan, (row) => [1, isInProgress(row.status) ? 1 : 0, isDone(row.status) ? 1 : 0]), [scopedPengadaan]);
  const trenPengajuan = useMemo(() => pengadaanChart.map((row) => ({ bulan: row.label, nilai: row.values[0] })), [pengadaanChart]);
  const topAssignment = useMemo(() => Object.entries(scopedPengadaan.reduce<Record<string, ApiRow[]>>((groups, row) => {
    const key = row.departemen || "Tanpa Divisi";
    (groups[key] ||= []).push(row);
    return groups;
  }, {})).sort(([, left], [, right]) => right.length - left.length).slice(0, 5).map(([assignee, rows]) => ({
    assignee,
    tipe: `${rows.filter((row) => row.flowType === "pr").length} PR / ${rows.filter((row) => row.flowType === "pd").length} PD`,
    lokal: rows.filter((row) => isInProgress(row.status)).length,
    total: rows.length,
  })), [scopedPengadaan]);
  const maxAssignment = Math.max(...topAssignment.map((row) => row.total), 1);
  const pengadaanByDept = useMemo(() => rowsByDepartment(scopedPengadaan, "#e6251c"), [scopedPengadaan]);
  const jadwalPengadaan = useMemo(() => scopedPengadaan.map((row) => ({
    noKontrak: row.id || "—",
    judul: row.nama || "—",
    mulai: dateLabel(row.tanggal),
    selesai: isDone(row.status) ? dateLabel(row.updated_at || row.tanggal) : "",
    status: isDone(row.status) ? "Lunas" : ["rejected", "revision_required"].includes(row.status) ? "Revisi" : "Proses",
  })), [scopedPengadaan]);
  const totalType = Math.max(scopedPengadaan.length, 1);
  const prPercent = (scopedPengadaan.filter((row) => row.flowType === "pr").length / totalType) * 100;
  const pdPercent = 100 - prPercent;

  return (
    <div className="space-y-6">
      <div className="flex justify-end"><ExportExcelButton rows={jadwalPengadaan} fileName="pengadaan" /></div>
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {pengadaanStats.map(s => (
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
              <select value={bulan} onChange={e => setBulan(e.target.value)} className="h-7 px-2 rounded border border-gray-200 text-[10px] text-gray-500 outline-none">
                <option value="">Bulan</option>
                {MONTHS.map((label, index) => <option key={label} value={index}>{label}</option>)}
              </select>
              <select value={tahun} onChange={e => setTahun(e.target.value)} className="h-7 px-2 rounded border border-gray-200 text-[10px] text-gray-500 outline-none">
                <option value="">Tahun</option>
                {Array.from(new Set([tahun, ...pengadaan.map((row) => recordDate(row).slice(0, 4)).filter(Boolean)])).sort().map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </div>
          </div>
          <SimpleBarChart data={pengadaanChart} height={160} />
          <ChartLegend items={[{ label: "Submit", color: "#252271" }, { label: "On Going", color: "#e6251c" }, { label: "Done", color: "#ff7676" }]} />
        </div>

        {/* Tren Pengajuan (Monthly) + Tipe Pengajuan */}
        <div className="col-span-2 space-y-4">
          <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-4">
            <SectionTitle icon={TrendingUp}>Tren Pengajuan (Monthly)</SectionTitle>
            <TrendLineChart data={trenPengajuan} />
          </div>
          <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-4">
            <SectionTitle icon={PieChart}>Tipe Pengajuan</SectionTitle>
            <div className="flex items-center gap-4 mt-2">
              {/* Simple donut representation */}
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#252271" strokeWidth="3" strokeDasharray={`${prPercent} ${100 - prPercent}`} />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e6251c" strokeWidth="3" strokeDasharray={`${pdPercent} ${100 - pdPercent}`} strokeDashoffset={-prPercent} />
                </svg>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#252271]" /><span className="text-[10px] text-gray-600">Purchase Requisition</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#e6251c]" /><span className="text-[10px] text-gray-600">Park Document</span></div>
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
                      <div className="h-full rounded-full bg-gradient-to-r from-[#e6251c] to-[#ff7676]" style={{ width: `${(r.total / maxAssignment) * 100}%` }} />
                    </div>
                    <span className="font-extrabold text-[13px] text-gray-800">{r.total}</span>
                  </div>
                )
              },
            ]}
            data={topAssignment}
          />
        </div>

        {/* Proses Pengajuan By Department */}
        <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-5">
          <SectionTitle icon={Building2}>Proses Pengajuan Per Divisi</SectionTitle>
          <SimpleBarChart data={pengadaanByDept} height={140} />
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
                const c: Record<string, string> = { Lunas: "text-green-600 bg-green-50", Expired: "text-red-500 bg-red-50", Proses: "text-amber-600 bg-amber-50", Revisi: "text-red-500 bg-red-50" };
                return <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c[r.status] || "text-gray-500 bg-gray-50"}`}>{r.status}</span>;
              }
            },
          ]}
          data={jadwalPengadaan}
        />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 4. PEMBAYARAN DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════════
function PaymentTable({ title, data, showPackage, gradient }: {
  title: string; data: { label: string; nominal: string; package?: number; amount?: number }[]; showPackage?: boolean; gradient: string;
}) {
  const totalNominal = currency(data.reduce((total, row) => total + (row.amount || 0), 0));
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
  const [unit, setUnit] = useState("Pilih Divisi");
  const [vendor, setVendor] = useState("Pilih Vendor");
  const [currencyFilter, setCurrencyFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { pengadaan, pembayaran, units } = useAdminDashboardData();
  const pengadaanById = useMemo(() => new Map(pengadaan.map((row) => [row.id, row])), [pengadaan]);
  const vendorOptions = useMemo(() => ["Pilih Vendor", ...Array.from(new Set(pengadaan.map(getVendor).filter((item) => item && item !== "—")))], [pengadaan]);
  const filteredPayments = useMemo(() => pembayaran.filter((payment) => {
    const parent = pengadaanById.get(payment.pengadaan_id) || {};
    const paymentDate = recordDate(payment);
    const paymentVendor = getVendor(parent);
    const paymentCurrency = String((parent.formData?.["buat-npp"] || parent.formData?.npp || parent.formData || {}).kurs || "IDR").toUpperCase();
    return (unit === "Pilih Divisi" || unit === "Semua Divisi" || parent.departemen === unit)
      && (vendor === "Pilih Vendor" || paymentVendor === vendor)
      && (!currencyFilter || paymentCurrency === currencyFilter)
      && (!startDate || paymentDate >= startDate)
      && (!endDate || paymentDate <= endDate);
  }), [pembayaran, pengadaanById, unit, vendor, currencyFilter, startDate, endDate]);
  const buildPaymentRows = (type: string) => {
    const selected = filteredPayments.filter((payment) => payment.payment_type === type);
    const definitions = [
      { label: "Belum Verifikasi", statuses: ["draft", "waiting_approval"] },
      { label: "Sudah Verifikasi", statuses: ["verified"] },
      { label: "Revisi", statuses: ["revision_required", "rejected"] },
      { label: "Siap Bayar", statuses: ["ready_to_pay"] },
      { label: "Selesai", statuses: ["approved", "completed"] },
    ];
    return definitions.map((definition) => {
      const records = selected.filter((payment) => definition.statuses.includes(payment.status));
      const amount = records.reduce((total, payment) => total + nominalValue(pengadaanById.get(payment.pengadaan_id)?.nominal), 0);
      return { label: definition.label, nominal: currency(amount), package: records.length, amount };
    });
  };
  const outsourcing = buildPaymentRows("outsource");
  const nonOutsourcing = buildPaymentRows("non-outsource");
  const umd = buildPaymentRows("umd");
  const laman = [
    { label: "OUTSOURCE", amount: outsourcing.reduce((total, row) => total + (row.amount || 0), 0) },
    { label: "NON OUTSOURCE", amount: nonOutsourcing.reduce((total, row) => total + (row.amount || 0), 0) },
    { label: "UMD", amount: umd.reduce((total, row) => total + (row.amount || 0), 0) },
  ].map((row) => ({ ...row, nominal: currency(row.amount) }));
  const keseluruhan = ["Belum Verifikasi", "Sudah Verifikasi", "Revisi", "Siap Bayar", "Selesai"].map((label) => {
    const rows = [...outsourcing, ...nonOutsourcing, ...umd].filter((row) => row.label === label);
    const amount = rows.reduce((total, row) => total + (row.amount || 0), 0);
    return { label, amount, nominal: currency(amount) };
  });
  const totalKeseluruhan = keseluruhan.reduce((total, row) => total + row.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-end"><ExportExcelButton rows={filteredPayments.map(payment => ({ nomor: payment.id, pengadaan: payment.pengadaan_id, tipe: payment.payment_type, status: payment.status, tanggal: dateLabel(recordDate(payment)), nominal: nominalValue(pengadaanById.get(payment.pengadaan_id)?.nominal) }))} fileName="pembayaran" /></div>
      {/* Title */}
      <div className="text-center mb-2">
        <h2 className="text-[18px] font-extrabold text-[#252271] uppercase tracking-wide">Payment Plan Recapitulation</h2>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <select value={unit} onChange={e => setUnit(e.target.value)}
          className="h-8 px-3 rounded-lg border border-gray-200 text-[11px] text-gray-600 font-medium outline-none cursor-pointer">
          <option value="Pilih Divisi">PILIH DIVISI ▼</option>{units.filter((item) => item !== "Pilih Divisi").map(u => <option key={u} value={u}>{u}</option>)}
        </select>
        <select value={vendor} onChange={e => setVendor(e.target.value)}
          className="h-8 px-3 rounded-lg border border-gray-200 text-[11px] text-gray-600 font-medium outline-none cursor-pointer">
          <option value="Pilih Vendor">SELECT VENDOR ▼</option>
          {vendorOptions.filter((item) => item !== "Pilih Vendor").map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <select value={currencyFilter} onChange={e => setCurrencyFilter(e.target.value)}
          className="h-8 px-3 rounded-lg border border-gray-200 text-[11px] text-gray-600 font-medium outline-none cursor-pointer">
          <option value="">PILIH MATA UANG ▼</option><option value="IDR">IDR</option><option value="USD">USD</option>
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
        <PaymentTable title="Outsourcing" data={outsourcing} showPackage gradient="from-[#e6251c] to-[#ff7676]" />
        <PaymentTable title="Non Outsourcing" data={nonOutsourcing} showPackage gradient="from-[#e6251c] to-[#ff7676]" />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <PaymentTable title="Laman" data={laman} gradient="from-[#252271] to-[#3b3baa]" />
        <div className="rounded-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#b91c3c] to-[#e6251c] px-4 py-2.5">
            <h4 className="text-white text-[12px] font-bold">Keseluruhan</h4>
          </div>
          <div className="divide-y divide-gray-100">
            {keseluruhan.map((row, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors">
                <span className="text-[11px] text-gray-600">{row.label}</span>
                <span className="text-[11px] font-semibold text-gray-800">{row.nominal}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between px-4 py-2.5 bg-red-50 border-t border-red-100">
            <span className="text-[11px] font-bold text-red-600">Total</span>
            <span className="text-[11px] font-extrabold text-red-600">{currency(totalKeseluruhan)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN DASHBOARD SCREEN
// ═══════════════════════════════════════════════════════════════════════════════
export function AdminDashboardScreen() {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState<DashboardTab>(getFigmaCaptureConfig()?.dashboardTab || "pengajuan-dana");

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

        {activeTab === "pengajuan-dana" && <PengajuanDanaDashboard />}
        {activeTab === "pengujian" && <PengujianDashboard />}
        {activeTab === "pengadaan" && <PengadaanDashboard />}
        {activeTab === "pembayaran" && <PembayaranDashboard />}

      </div>
    </div>
  );
}
