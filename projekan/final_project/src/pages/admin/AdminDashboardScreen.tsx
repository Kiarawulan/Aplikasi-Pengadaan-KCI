import { useState } from "react";
import {
  Users, Package, ClipboardCheck, AlertTriangle, TrendingUp,
  CheckCircle, Clock, Activity
} from "lucide-react";
import { AdminTopBar } from "../../components/admin/AdminTopBar";
import { useAuth } from "../../store/authStore";
import { getPengadaan, getVerifRecords } from "../../store/dataStore";
import { getUsers } from "../../store/authStore";
import { PARK_STEPS } from "../../constants/steps";

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
      </div>
    </div>
  );
}
