import { useEffect, useState } from "react";
import { useAuth } from "@/store/authStore";
import { TopBar } from "@/components/user/layout/TopBar";
import {
  ArrowUpRight, BarChart3, CalendarDays, CheckCircle2, ChevronRight,
  ClipboardList, Clock3, FileText, FlaskConical, Wallet,
} from "lucide-react";
import {
  Area, AreaChart, Cell, Pie, PieChart, ResponsiveContainer,
  Tooltip, XAxis, YAxis,
} from "recharts";
import { api } from "@/services/api";
import section2Pattern from "@/assets/section-2-pattern.svg";
import pengadaanIcon from "@/assets/pengadaan.svg";
import pengajuanDanaIcon from "@/assets/pengajuan-dana.svg";
import pengujianIcon from "@/assets/pengujian.svg";
import pembayaranIcon from "@/assets/pembayaran.svg";

const monthlyProgress = [
  { month: "Jan", pengadaan: 6, selesai: 4 }, { month: "Feb", pengadaan: 8, selesai: 5 },
  { month: "Mar", pengadaan: 10, selesai: 7 }, { month: "Apr", pengadaan: 9, selesai: 8 },
  { month: "Mei", pengadaan: 14, selesai: 10 }, { month: "Jun", pengadaan: 18, selesai: 14 },
  { month: "Jul", pengadaan: 21, selesai: 17 }, { month: "Agu", pengadaan: 24, selesai: 20 },
];

const statusData = [
  { name: "Selesai", value: 20, color: "#16a34a" },
  { name: "Berjalan", value: 9, color: "#d97706" },
  { name: "Menunggu", value: 5, color: "#e6251c" },
];

const yearlyFactors: Record<string, number> = { "2026": 1, "2025": 0.83, "2024": 0.68 };

const activities = [
  { title: "NPP Pengadaan Server Data Center", meta: "Diajukan oleh Anda · 2 jam lalu", icon: ClipboardList, color: "bg-red-50 text-[#e6251c]", status: "Menunggu verifikasi" },
  { title: "Pengujian perangkat jaringan", meta: "Jadwal pelaksanaan · Hari ini, 13.00", icon: FlaskConical, color: "bg-[#252271]/10 text-[#252271]", status: "Terjadwal" },
  { title: "Invoice layanan outsourcing Juli", meta: "Pembayaran · Kemarin", icon: Wallet, color: "bg-[#E6251C]/10 text-[#E6251C]", status: "Siap dibayar" },
];

const tasks = [
  { title: "Lengkapi dokumen NPP", detail: "Pengadaan Server Data Center", progress: 70, tone: "bg-[#e6251c]" },
  { title: "Unggah BAHP", detail: "Pengujian Switch Cisco 9300", progress: 45, tone: "bg-amber-500" },
  { title: "Review permintaan pembayaran", detail: "Kontrak maintenance AC", progress: 25, tone: "bg-[#252271]" },
];

function MetricCard({ title, value, icon, tone, inProgress, completed }: {
  title: string; value: string; icon: string; tone: string; inProgress: number; completed: number;
}) {
  return (
    <article className="group relative min-h-[168px] overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-24 -right-28 h-72 w-56 opacity-[0.12] ${tone}`}
        style={{
          WebkitMaskImage: `url(${section2Pattern})`,
          maskImage: `url(${section2Pattern})`,
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />
      <div className="relative transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
        <div className="flex items-start justify-between">
          <div className={`grid h-12 w-12 place-items-center rounded-xl ${tone}`}>
            <img src={icon} alt="" aria-hidden="true" className="h-7 w-7 object-contain brightness-0 invert" />
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600"><ArrowUpRight size={11} />Data aktif</span>
        </div>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{title}</p>
        <p className="mt-1 text-2xl font-extrabold tracking-tight text-[#252271]">{value}</p>
        <p className="mt-1 text-[10px] text-slate-400">Arahkan kursor untuk melihat detail</p>
      </div>
      <div className="absolute inset-0 z-10 flex translate-y-3 flex-col justify-center bg-white/95 px-5 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="mb-3 flex items-center gap-2">
          <img src={icon} alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
          <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#252271]">{title}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-amber-50 p-3"><p className="text-[10px] font-semibold text-amber-600">Sedang proses</p><p className="mt-1 text-xl font-extrabold text-amber-700">{inProgress}</p></div>
          <div className="rounded-xl bg-emerald-50 p-3"><p className="text-[10px] font-semibold text-emerald-600">Sudah selesai</p><p className="mt-1 text-xl font-extrabold text-emerald-700">{completed}</p></div>
        </div>
      </div>
    </article>
  );
}

function CardTitle({ icon: Icon, children, action, onAction }: { icon: React.ElementType; children: React.ReactNode; action?: string; onAction?: () => void }) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <div className="flex items-center gap-2 text-[#252271]">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-50"><Icon size={16} /></span>
        <h2 className="text-sm font-extrabold">{children}</h2>
      </div>
      {action && (
        <button
          onClick={onAction}
          className="inline-flex items-center gap-1 text-[11px] font-bold text-[#e6251c] hover:underline cursor-pointer bg-red-50 hover:bg-red-100 px-2.5 py-1 rounded-lg transition-colors border border-red-200/60"
          title="Ekspor laporan dashboard ke Excel"
        >
          <span>{action}</span>
          <ChevronRight size={14} />
        </button>
      )}
    </div>
  );
}

export function DashboardScreen() {
  const [showAllActivities, setShowAllActivities] = useState(false);
  const { currentUser } = useAuth();
  const [year, setYear] = useState("2026");
  const [month, setMonth] = useState("all");
  const [dashboard, setDashboard] = useState<any>(null);
  useEffect(() => {
    api.get(`/dashboard?year=${year}&month=${month}`).then((response) => setDashboard(response.data)).catch(() => setDashboard(null));
  }, [year, month]);
  const liveStatus = dashboard?.statusDistribution ?? [];
  const total = liveStatus.reduce((sum: number, item: { value: number }) => sum + item.value, 0);
  const visibleProgress = dashboard?.monthly ?? [];
  const periodLabel = month === "all" ? `Tahun ${year}` : `${monthlyProgress[Number(month) - 1]?.month ?? ""} ${year}`;
  const summary = dashboard?.summary;
  const liveActivities = dashboard?.recentActivity ?? [];
  const liveTasks = liveActivities.filter((item: any) => item.status !== "approved").slice(0, 3).map((item: any, index: number) => ({
    title: item.title,
    detail: `Status: ${item.status}`,
    progress: item.status === "pending" ? 45 : item.status === "revisi" ? 25 : 70,
    tone: index % 2 ? "bg-[#252271]" : "bg-[#e6251c]",
  }));

  const handleExportExcel = () => {
    const nowStr = new Date().toLocaleString("id-ID", {
      dateStyle: "full",
      timeStyle: "short",
    });

    const html = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8" />
        <!--[if gte mso 9]>
        <xml>
          <x:ExcelWorkbook>
            <x:ExcelWorksheets>
              <x:Name>Laporan Pengadaan</x:Name>
              <x:WorksheetOptions>
                <x:DisplayGridlines/>
              </x:WorksheetOptions>
            </x:ExcelWorksheet>
          </x:ExcelWorksheets>
        </x:ExcelWorkbook>
        </xml>
        <![endif]-->
        <style>
          table { border-collapse: collapse; font-family: Arial, sans-serif; font-size: 11pt; }
          th { background-color: #252271; color: white; font-weight: bold; border: 1px solid #1a1754; padding: 8px; text-align: left; }
          td { border: 1px solid #d1d5db; padding: 6px 8px; }
          .title { font-size: 16pt; font-weight: bold; color: #252271; }
          .subtitle { font-size: 10pt; color: #6b7280; }
          .section-header { font-size: 11pt; font-weight: bold; color: #ffffff; background-color: #e6251c; padding: 6px; }
          .num { text-align: right; }
          .center { text-align: center; }
        </style>
      </head>
      <body>
        <table>
          <tr><td colspan="5" class="title">LAPORAN REKAPITULASI PENGADAAN & PROSES DOKUMEN</td></tr>
          <tr><td colspan="5" class="subtitle">PT Kereta Commuter Indonesia (KCI)</td></tr>
          <tr><td colspan="5"></td></tr>
          <tr><td><strong>Nama User / Pemohon:</strong></td><td colspan="4">${currentUser?.name || "User"}</td></tr>
          <tr><td><strong>Divisi / Departemen:</strong></td><td colspan="4">${currentUser?.departemen || "Umum"}</td></tr>
          <tr><td><strong>Periode Aktif Laporan:</strong></td><td colspan="4">${periodLabel}</td></tr>
          <tr><td><strong>Waktu Ekspor:</strong></td><td colspan="4">${nowStr}</td></tr>
          <tr><td colspan="5"></td></tr>

          <!-- SUMMARY METRICS -->
          <tr><th colspan="5" class="section-header">1. RINGKASAN METRIK UTAMA</th></tr>
          <tr>
            <th>Modul / Kategori</th>
            <th class="num">Total</th>
            <th class="num">Sedang Proses</th>
            <th class="num">Selesai</th>
            <th class="center">Persentase Selesai</th>
          </tr>
          <tr>
            <td>Total Pengadaan</td>
            <td class="num">${summary?.pengadaan?.total ?? 0}</td>
            <td class="num">${summary?.pengadaan?.inProgress ?? 0}</td>
            <td class="num">${summary?.pengadaan?.completed ?? 0}</td>
            <td class="center">${summary?.pengadaan?.total ? Math.round(((summary?.pengadaan?.completed ?? 0) / summary.pengadaan.total) * 100) : 0}%</td>
          </tr>
          <tr>
            <td>Total Pengajuan Dana</td>
            <td class="num">${summary?.pengajuanDana?.total ?? 0}</td>
            <td class="num">${summary?.pengajuanDana?.inProgress ?? 0}</td>
            <td class="num">${summary?.pengajuanDana?.completed ?? 0}</td>
            <td class="center">${summary?.pengajuanDana?.total ? Math.round(((summary?.pengajuanDana?.completed ?? 0) / summary.pengajuanDana.total) * 100) : 0}%</td>
          </tr>
          <tr>
            <td>Total Pengujian</td>
            <td class="num">${summary?.pengujian?.total ?? 0}</td>
            <td class="num">${summary?.pengujian?.inProgress ?? 0}</td>
            <td class="num">${summary?.pengujian?.completed ?? 0}</td>
            <td class="center">${summary?.pengujian?.total ? Math.round(((summary?.pengujian?.completed ?? 0) / summary.pengujian.total) * 100) : 0}%</td>
          </tr>
          <tr>
            <td>Total Pembayaran</td>
            <td class="num">${summary?.pembayaran?.total ?? 0}</td>
            <td class="num">${summary?.pembayaran?.inProgress ?? 0}</td>
            <td class="num">${summary?.pembayaran?.completed ?? 0}</td>
            <td class="center">${summary?.pembayaran?.total ? Math.round(((summary?.pembayaran?.completed ?? 0) / summary.pembayaran.total) * 100) : 0}%</td>
          </tr>
          <tr><td colspan="5"></td></tr>

          <!-- STATUS DISTRIBUTION -->
          <tr><th colspan="5" class="section-header">2. DISTRIBUSI STATUS DOKUMEN</th></tr>
          <tr>
            <th colspan="2">Status Dokumen</th>
            <th class="num" colspan="3">Jumlah Dokumen</th>
          </tr>
          ${liveStatus.map((st: any) => `
            <tr>
              <td colspan="2">${st.name}</td>
              <td class="num" colspan="3"><strong>${st.value}</strong></td>
            </tr>
          `).join("")}
          <tr><td colspan="5"></td></tr>

          <!-- MONTHLY TREN -->
          <tr><th colspan="5" class="section-header">3. TREN PENGADAAN BULANAN (${periodLabel})</th></tr>
          <tr>
            <th>Bulan</th>
            <th class="num" colspan="2">Pengadaan Masuk</th>
            <th class="num" colspan="2">Selesai</th>
          </tr>
          ${visibleProgress.map((m: any) => `
            <tr>
              <td>${m.month}</td>
              <td class="num" colspan="2">${m.pengadaan}</td>
              <td class="num" colspan="2">${m.selesai}</td>
            </tr>
          `).join("")}
          <tr><td colspan="5"></td></tr>

          <!-- RECENT ACTIVITY -->
          <tr><th colspan="5" class="section-header">4. AKTIVITAS TERBARU</th></tr>
          <tr>
            <th colspan="2">Nama Kegiatan / Paket</th>
            <th colspan="2">Keterangan / Waktu</th>
            <th class="center">Status</th>
          </tr>
          ${liveActivities.map((act: any) => `
            <tr>
              <td colspan="2">${act.title}</td>
              <td colspan="2">${act.meta}</td>
              <td class="center">${act.status}</td>
            </tr>
          `).join("")}
        </table>
      </body>
      </html>
    `;

    const blob = new Blob(["\uFEFF" + html], { type: "application/vnd.ms-excel;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const cleanPeriod = periodLabel.replace(/[^a-zA-Z0-9]/g, "_");
    a.download = `Laporan_Pengadaan_KCI_${cleanPeriod}.xls`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex-1 min-h-0 overflow-auto">
      <TopBar title="Dashboard" />
      <main className="mx-auto max-w-[1320px] px-4 py-5 sm:px-6 sm:py-6">
        <section className="relative mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#252271] via-[#35318d] to-[#17164f] px-6 py-6 text-white shadow-lg sm:px-8">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[32px] border-white/10" />
          <div className="absolute bottom-0 right-24 h-32 w-32 rounded-full bg-[#e6251c]/30 blur-2xl" />
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div><p className="text-sm text-white/60">Selamat datang kembali,</p><h1 className="mt-1 text-2xl font-extrabold sm:text-3xl">{currentUser?.name || "User"}</h1><p className="mt-2 max-w-xl text-[12px] leading-relaxed text-white/70">Divisi: <span className="font-semibold text-white">{currentUser?.departemen || "Umum"}</span></p></div>
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-3 backdrop-blur-sm"><CalendarDays size={19} className="text-[#ff928d]" /><div className="mr-1"><p className="text-[10px] font-semibold uppercase tracking-wider text-white/55">Periode aktif</p><p className="text-sm font-bold">{periodLabel}</p></div><select value={month} onChange={(event) => setMonth(event.target.value)} className="h-8 rounded-lg border border-white/15 bg-white/10 px-2 text-[11px] font-semibold text-white outline-none"><option className="text-slate-700" value="all">Semua bulan</option>{monthlyProgress.map((item, index) => <option className="text-slate-700" key={item.month} value={index + 1}>{item.month}</option>)}</select><select value={year} onChange={(event) => setYear(event.target.value)} className="h-8 rounded-lg border border-white/15 bg-white/10 px-2 text-[11px] font-semibold text-white outline-none"><option className="text-slate-700" value="2026">2026</option><option className="text-slate-700" value="2025">2025</option><option className="text-slate-700" value="2024">2024</option></select></div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard title="Total Pengadaan" value={String(summary?.pengadaan?.total ?? 0)} icon={pengadaanIcon} tone="bg-[#e6251c]" inProgress={summary?.pengadaan?.inProgress ?? 0} completed={summary?.pengadaan?.completed ?? 0} />
          <MetricCard title="Total Pengajuan Dana" value={String(summary?.pengajuanDana?.total ?? 0)} icon={pengajuanDanaIcon} tone="bg-[#E6251C]" inProgress={summary?.pengajuanDana?.inProgress ?? 0} completed={summary?.pengajuanDana?.completed ?? 0} />
          <MetricCard title="Total Pengujian" value={String(summary?.pengujian?.total ?? 0)} icon={pengujianIcon} tone="bg-[#252271]" inProgress={summary?.pengujian?.inProgress ?? 0} completed={summary?.pengujian?.completed ?? 0} />
          <MetricCard title="Total Pembayaran" value={String(summary?.pembayaran?.total ?? 0)} icon={pembayaranIcon} tone="bg-[#252271]" inProgress={summary?.pembayaran?.inProgress ?? 0} completed={summary?.pembayaran?.completed ?? 0} />
        </section>

        <section className="mt-5 grid gap-5 xl:grid-cols-3">
          <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm xl:col-span-2">
            <CardTitle icon={BarChart3} action="Lihat laporan (Ekspor Excel)" onAction={handleExportExcel}>Tren Pengadaan · {periodLabel}</CardTitle>
            <div className="mb-3 flex items-center gap-4 text-[10px] font-semibold text-slate-500"><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-[#E6251C]" />Pengadaan masuk</span><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-[#252271]" />Selesai</span></div>
            <div className="h-[240px] w-full"><ResponsiveContainer><AreaChart data={visibleProgress} margin={{ top: 8, right: 4, left: -22, bottom: 0 }}><defs><linearGradient id="procurementFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#E6251C" stopOpacity={0.28} /><stop offset="100%" stopColor="#E6251C" stopOpacity={0} /></linearGradient><linearGradient id="finishedFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#252271" stopOpacity={0.2} /><stop offset="100%" stopColor="#252271" stopOpacity={0} /></linearGradient></defs><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#25227199" }} /><YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#25227199" }} /><Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #25227133", fontSize: 11 }} /><Area type="monotone" dataKey="pengadaan" stroke="#E6251C" strokeWidth={3} fill="url(#procurementFill)" /><Area type="monotone" dataKey="selesai" stroke="#252271" strokeWidth={3} fill="url(#finishedFill)" /></AreaChart></ResponsiveContainer></div>
          </article>

          <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><CardTitle icon={CheckCircle2}>Status Dokumen</CardTitle><div className="relative mx-auto h-[180px] max-w-[260px]"><ResponsiveContainer><PieChart><Pie data={liveStatus} dataKey="value" innerRadius={54} outerRadius={76} paddingAngle={5} stroke="none">{liveStatus.map((entry: any) => <Cell key={entry.name} fill={entry.color} />)}</Pie><Tooltip formatter={(value) => [`${value} dokumen`, "Jumlah"]} /></PieChart></ResponsiveContainer><div className="pointer-events-none absolute inset-0 grid place-items-center text-center"><div><p className="text-2xl font-extrabold text-[#252271]">{total}</p><p className="text-[10px] font-semibold text-slate-400">DOKUMEN</p></div></div></div><div className="mt-2 grid grid-cols-3 gap-2">{liveStatus.map((item: any) => <div key={item.name} className="text-center"><p className="text-sm font-extrabold" style={{ color: item.color }}>{item.value}</p><p className="text-[9px] text-slate-400">{item.name}</p></div>)}</div></article>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-5">
          <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:col-span-3"><CardTitle icon={Clock3} action="Lihat semua" onAction={() => setShowAllActivities(true)}>Aktivitas Terbaru</CardTitle><div className="divide-y divide-slate-100">{liveActivities.slice(0, 2).map((item: any) => <div key={`${item.title}-${item.meta}`} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#252271]/10 text-[#252271]"><ClipboardList size={18} /></span><div className="min-w-0 flex-1"><p className="truncate text-[12px] font-bold text-slate-700">{item.title}</p><p className="mt-0.5 text-[10.5px] text-slate-400">{item.meta}</p></div><span className="hidden rounded-full bg-slate-50 px-2.5 py-1 text-[9.5px] font-bold text-slate-500 sm:block">{item.status}</span></div>)}</div></article>
          <article className="rounded-2xl bg-gradient-to-br from-[#e6251c] to-[#9b1611] p-5 text-white shadow-lg lg:col-span-2"><div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-wider text-white/60">Ringkasan proses aktif</p><p className="mt-1 text-xl font-extrabold">{summary?.totalPengadaan ?? 0} pengadaan</p></div><Wallet className="text-white/60" size={26} /></div><div className="mt-6 h-2.5 overflow-hidden rounded-full bg-white/20"><div className="h-full rounded-full bg-white" style={{ width: `${total ? Math.round(((summary?.totalPengadaan ?? 0) - (summary?.dalamProses ?? 0)) / total * 100) : 0}%` }} /></div><div className="mt-2 flex justify-between text-[10.5px] text-white/75"><span>{summary?.dalamProses ?? 0} proses berjalan</span><span className="font-bold text-white">{total ? Math.round(((summary?.totalPengadaan ?? 0) - (summary?.dalamProses ?? 0)) / total * 100) : 0}% selesai</span></div></article>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><CardTitle icon={FileText} action="Buka daftar tugas">Tugas yang Perlu Diselesaikan</CardTitle><div className="grid gap-4 md:grid-cols-3">{liveTasks.map((task: any) => <div key={task.title} className="rounded-xl border border-slate-100 bg-slate-50/70 p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-[12px] font-bold text-slate-700">{task.title}</p><p className="mt-1 text-[10px] text-slate-400">{task.detail}</p></div><span className="text-[11px] font-extrabold text-[#252271]">{task.progress}%</span></div><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-200"><div className={`h-full rounded-full ${task.tone}`} style={{ width: `${task.progress}%` }} /></div></div>)}</div></section>
      </main>
      {showAllActivities && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 p-4" onClick={() => setShowAllActivities(false)}><div className="max-h-[75vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={event => event.stopPropagation()}><div className="flex items-center justify-between border-b border-slate-100 px-5 py-4"><h3 className="font-extrabold text-[#252271]">Semua Aktivitas</h3><button onClick={() => setShowAllActivities(false)} className="rounded-lg px-3 py-1.5 text-sm text-slate-500 hover:bg-slate-100">Tutup</button></div><div className="max-h-[60vh] divide-y divide-slate-100 overflow-y-auto px-5">{liveActivities.length ? liveActivities.map((item: any) => <div key={`${item.title}-${item.meta}`} className="flex items-center gap-3 py-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#252271]/10 text-[#252271]"><ClipboardList size={18} /></span><div className="min-w-0 flex-1"><p className="text-[12px] font-bold text-slate-700">{item.title}</p><p className="mt-0.5 text-[10.5px] text-slate-400">{item.meta}</p></div><span className="rounded-full bg-slate-50 px-2.5 py-1 text-[9.5px] font-bold text-slate-500">{item.status}</span></div>) : <p className="py-8 text-center text-sm text-slate-400">Belum ada aktivitas.</p>}</div></div></div>}
    </div>
  );
}
