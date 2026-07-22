import { PARK_STEPS } from "../constants/steps";
import { TopBar } from "../components/layout/TopBar";

export function DashboardScreen() {
  const cards = [
    { label: "Total RUP", value: "24", sub: "Tahun 2024", gradient: true },
    { label: "Daftar Pengadaan", value: "18", sub: "Sedang berjalan", gradient: false },
    { label: "Selesai", value: "12", sub: "Pengadaan selesai", gradient: false },
    { label: "Perlu Tindakan", value: "6", sub: "Menunggu approval", gradient: false },
  ];
  return (
    <div>
      <TopBar title="Dashboard" />
      <div className="bg-[#f5f5f5] rounded-3xl p-3 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cards.map((c) => (
            <div key={c.label}
              className={`rounded-3xl p-5 min-h-[160px] flex flex-col justify-between shadow-[0px_0px_7.6px_0px_rgba(0,0,0,0.14)] ${c.gradient ? "" : "bg-white"}`}
              style={c.gradient ? { background: "linear-gradient(198deg, #d61b12 11%, #700e09 152%)" } : {}}>
              <p className={`text-[11.5px] font-medium ${c.gradient ? "text-white/80" : "text-gray-500"}`}>{c.label}</p>
              <div>
                <p className={`text-4xl sm:text-5xl font-black ${c.gradient ? "text-white" : "text-[#252271]"}`}>{c.value}</p>
                <p className={`text-[10px] mt-1 ${c.gradient ? "text-white/60" : "text-gray-400"}`}>{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="bg-white rounded-3xl shadow-[0px_0px_10.9px_0px_rgba(0,0,0,0.09)] p-5 h-52">
            <p className="text-[11.5px] font-semibold text-gray-600 mb-4">Progres Pengadaan</p>
            <div className="space-y-3">
              {PARK_STEPS.map((step, i) => (
                <div key={step.id} className="flex items-center gap-3">
                  <span className="text-[10.5px] text-gray-500 w-24 shrink-0">{step.label}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                    <div className="h-1.5 rounded-full" style={{ width: `${Math.max(10, 90 - i * 12)}%`, background: "linear-gradient(90deg, #e6251c, #ff7676)" }} />
                  </div>
                  <span className="text-[9.5px] text-gray-400 w-7 text-right">{Math.max(10, 90 - i * 12)}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl p-5 h-52 flex flex-col justify-between shadow-[0px_0px_10.7px_0px_rgba(0,0,0,0.25)]"
            style={{ background: "linear-gradient(150deg, #252271 28%, #030059 83%)" }}>
            <p className="text-white font-semibold text-[11.5px]">Ringkasan Anggaran</p>
            <div>
              <p className="text-white/70 text-[10.5px]">Total Nilai RKAP</p>
              <p className="text-white font-black text-3xl">Rp 2,4 M</p>
              <div className="mt-3 bg-white/10 rounded-full h-2">
                <div className="bg-white/70 h-2 rounded-full" style={{ width: "75%" }} />
              </div>
              <p className="text-white/60 text-[10.5px] mt-1">Realisasi: Rp 1,8 M (75%)</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-5 h-32">
          <p className="text-[11.5px] font-semibold text-gray-600 mb-3">Aktivitas Terbaru</p>
          <div className="space-y-2">
            {[
              { text: "NPP Pengadaan Server submitted", time: "2 jam lalu" },
              { text: "Contract Maintenance AC ditandatangani", time: "5 jam lalu" },
              { text: "Invoice Furniture Kantor diterima", time: "Kemarin" },
            ].map((a) => (
              <div key={a.text} className="flex items-center justify-between">
                <span className="text-gray-700 text-[11px]">{a.text}</span>
                <span className="text-gray-400 text-[10px]">{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

