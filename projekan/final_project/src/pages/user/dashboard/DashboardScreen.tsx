import { useEffect, useState } from "react";
import { useAuth } from "@/store/authStore";
import { TopBar } from "@/components/user/layout/TopBar";
import {
  ArrowUpRight, BarChart3, CalendarDays, CheckCircle2, ChevronRight,
  ClipboardList, Clock3, FileText, FlaskConical, Wallet,
} from "lucide-react";
import {
  Area, AreaChart, Cell, Legend, Pie, PieChart, ResponsiveContainer,
  Tooltip, XAxis, YAxis,
} from "recharts";
import { api } from "@/services/api";

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

function MetricCard({ title, value, detail, icon: Icon, tone, trend }: {
  title: string; value: string; detail: string; icon: React.ElementType; tone: string; trend: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className={`absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full opacity-10 ${tone}`} />
      <div className="relative flex items-start justify-between">
        <div className={`grid h-10 w-10 place-items-center rounded-xl text-white ${tone}`}><Icon size={19} /></div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600"><ArrowUpRight size={11} />{trend}</span>
      </div>
      <p className="mt-5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{title}</p>
      <p className="mt-1 text-2xl font-extrabold tracking-tight text-[#252271]">{value}</p>
      <p className="mt-1 text-[11px] text-slate-400">{detail}</p>
    </article>
  );
}

function CardTitle({ icon: Icon, children, action }: { icon: React.ElementType; children: React.ReactNode; action?: string }) {
  return <div className="mb-5 flex items-center justify-between"><div className="flex items-center gap-2 text-[#252271]"><span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-50"><Icon size={16} /></span><h2 className="text-sm font-extrabold">{children}</h2></div>{action && <button className="inline-flex items-center gap-0.5 text-[11px] font-bold text-[#e6251c] hover:underline">{action}<ChevronRight size={14} /></button>}</div>;
}

export function DashboardScreen() {
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

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f5f7fb]">
      <TopBar title="Dashboard" />
      <main className="mx-auto max-w-[1320px] px-4 py-5 sm:px-6 sm:py-6">
        <section className="relative mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#252271] via-[#35318d] to-[#17164f] px-6 py-6 text-white shadow-lg sm:px-8">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[32px] border-white/10" />
          <div className="absolute bottom-0 right-24 h-32 w-32 rounded-full bg-[#e6251c]/30 blur-2xl" />
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div><p className="text-sm text-white/60">Selamat datang kembali,</p><h1 className="mt-1 text-2xl font-extrabold sm:text-3xl">{currentUser?.name || "User"}</h1><p className="mt-2 max-w-xl text-[12px] leading-relaxed text-white/70">Pantau pengadaan, pengujian, dan pembayaran Anda dari satu tempat.</p></div>
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-3 backdrop-blur-sm"><CalendarDays size={19} className="text-[#ff928d]" /><div className="mr-1"><p className="text-[10px] font-semibold uppercase tracking-wider text-white/55">Periode aktif</p><p className="text-sm font-bold">{periodLabel}</p></div><select value={month} onChange={(event) => setMonth(event.target.value)} className="h-8 rounded-lg border border-white/15 bg-white/10 px-2 text-[11px] font-semibold text-white outline-none"><option className="text-slate-700" value="all">Semua bulan</option>{monthlyProgress.map((item, index) => <option className="text-slate-700" key={item.month} value={index + 1}>{item.month}</option>)}</select><select value={year} onChange={(event) => setYear(event.target.value)} className="h-8 rounded-lg border border-white/15 bg-white/10 px-2 text-[11px] font-semibold text-white outline-none"><option className="text-slate-700" value="2026">2026</option><option className="text-slate-700" value="2025">2025</option><option className="text-slate-700" value="2024">2024</option></select></div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard title="Total Pengadaan" value={String(summary?.totalPengadaan ?? 0)} detail="Data periode terpilih" icon={ClipboardList} tone="bg-[#e6251c]" trend="Data aktif" />
          <MetricCard title="Dalam Proses" value={String(summary?.dalamProses ?? 0)} detail="Memerlukan tindak lanjut" icon={Clock3} tone="bg-[#E6251C]" trend="Data aktif" />
          <MetricCard title="Pengujian Selesai" value={String(summary?.pengujianSelesai ?? 0)} detail={`dari ${summary?.totalPengujian ?? 0} pengujian`} icon={FlaskConical} tone="bg-[#252271]" trend="Data aktif" />
          <MetricCard title="Menunggu Verifikasi" value={String(summary?.perluVerifikasi ?? 0)} detail={`${summary?.totalRup ?? 0} RUP pada periode ini`} icon={Wallet} tone="bg-[#252271]" trend="Data aktif" />
        </section>

        <section className="mt-5 grid gap-5 xl:grid-cols-3">
          <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm xl:col-span-2">
            <CardTitle icon={BarChart3} action="Lihat laporan">Tren Pengadaan · {periodLabel}</CardTitle>
            <div className="mb-3 flex items-center gap-4 text-[10px] font-semibold text-slate-500"><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-[#E6251C]" />Pengadaan masuk</span><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-[#252271]" />Selesai</span></div>
            <div className="h-[240px] w-full"><ResponsiveContainer><AreaChart data={visibleProgress} margin={{ top: 8, right: 4, left: -22, bottom: 0 }}><defs><linearGradient id="procurementFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#E6251C" stopOpacity={0.28} /><stop offset="100%" stopColor="#E6251C" stopOpacity={0} /></linearGradient><linearGradient id="finishedFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#252271" stopOpacity={0.2} /><stop offset="100%" stopColor="#252271" stopOpacity={0} /></linearGradient></defs><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#25227199" }} /><YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#25227199" }} /><Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #25227133", fontSize: 11 }} /><Area type="monotone" dataKey="pengadaan" stroke="#E6251C" strokeWidth={3} fill="url(#procurementFill)" /><Area type="monotone" dataKey="selesai" stroke="#252271" strokeWidth={3} fill="url(#finishedFill)" /></AreaChart></ResponsiveContainer></div>
          </article>

          <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><CardTitle icon={CheckCircle2}>Status Dokumen</CardTitle><div className="relative mx-auto h-[180px] max-w-[260px]"><ResponsiveContainer><PieChart><Pie data={liveStatus} dataKey="value" innerRadius={54} outerRadius={76} paddingAngle={5} stroke="none">{liveStatus.map((entry: any) => <Cell key={entry.name} fill={entry.color} />)}</Pie><Tooltip formatter={(value) => [`${value} dokumen`, "Jumlah"]} /></PieChart></ResponsiveContainer><div className="pointer-events-none absolute inset-0 grid place-items-center text-center"><div><p className="text-2xl font-extrabold text-[#252271]">{total}</p><p className="text-[10px] font-semibold text-slate-400">DOKUMEN</p></div></div></div><div className="mt-2 grid grid-cols-3 gap-2">{liveStatus.map((item: any) => <div key={item.name} className="text-center"><p className="text-sm font-extrabold" style={{ color: item.color }}>{item.value}</p><p className="text-[9px] text-slate-400">{item.name}</p></div>)}</div></article>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-5">
          <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:col-span-3"><CardTitle icon={Clock3} action="Lihat semua">Aktivitas Terbaru</CardTitle><div className="divide-y divide-slate-100">{liveActivities.map((item: any) => <div key={`${item.title}-${item.meta}`} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#252271]/10 text-[#252271]"><ClipboardList size={18} /></span><div className="min-w-0 flex-1"><p className="truncate text-[12px] font-bold text-slate-700">{item.title}</p><p className="mt-0.5 text-[10.5px] text-slate-400">{item.meta}</p></div><span className="hidden rounded-full bg-slate-50 px-2.5 py-1 text-[9.5px] font-bold text-slate-500 sm:block">{item.status}</span></div>)}</div></article>
          <article className="rounded-2xl bg-gradient-to-br from-[#e6251c] to-[#9b1611] p-5 text-white shadow-lg lg:col-span-2"><div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-wider text-white/60">Anggaran tahun berjalan</p><p className="mt-1 text-xl font-extrabold">Rp 2,4 Miliar</p></div><Wallet className="text-white/60" size={26} /></div><div className="mt-6 h-2.5 overflow-hidden rounded-full bg-white/20"><div className="h-full w-3/4 rounded-full bg-white" /></div><div className="mt-2 flex justify-between text-[10.5px] text-white/75"><span>Realisasi Rp 1,8 M</span><span className="font-bold text-white">75%</span></div><button className="mt-5 inline-flex items-center gap-1 text-[11px] font-bold hover:underline">Lihat rincian anggaran <ChevronRight size={14} /></button></article>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><CardTitle icon={FileText} action="Buka daftar tugas">Tugas yang Perlu Diselesaikan</CardTitle><div className="grid gap-4 md:grid-cols-3">{liveTasks.map((task: any) => <div key={task.title} className="rounded-xl border border-slate-100 bg-slate-50/70 p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-[12px] font-bold text-slate-700">{task.title}</p><p className="mt-1 text-[10px] text-slate-400">{task.detail}</p></div><span className="text-[11px] font-extrabold text-[#252271]">{task.progress}%</span></div><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-200"><div className={`h-full rounded-full ${task.tone}`} style={{ width: `${task.progress}%` }} /></div></div>)}</div></section>
      </main>
    </div>
  );
}
