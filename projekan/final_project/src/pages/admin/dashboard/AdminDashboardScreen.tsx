import { useState } from "react";
import { useAuth, getUsers, getRoles } from "@/store/authStore";
import { getPengadaan, getVerifRecords } from "@/store/dataStore";


const STATUS_COLS = ["Belum Verifikasi", "Sudah Verifikasi", "Siap Bayar", "Sirkulir", "Total"];

const CFITS_OUTSOURCE: Record<string, number[]> = {
  BCA:           [3, 5, 2, 1, 11],
  BNI:           [7, 3, 4, 0, 14],
  BRI:           [2, 6, 1, 2, 11],
  Mandiri:       [5, 4, 3, 1, 13],
  "Non Himbara": [1, 2, 0, 0, 3],
  Payroll:       [4, 1, 2, 0, 7],
  "Non Bank":    [0, 1, 0, 0, 1],
};

const CFITS_NON_OUTSOURCE: Record<string, number[]> = {
  BCA:           [2, 3, 1, 0, 6],
  BNI:           [4, 2, 2, 1, 9],
  BRI:           [1, 4, 0, 1, 6],
  Mandiri:       [3, 2, 2, 0, 7],
  "Non Himbara": [0, 1, 0, 0, 1],
  Payroll:       [2, 0, 1, 0, 3],
  "Non Bank":    [1, 0, 0, 0, 1],
};

function sumCol(data: Record<string, number[]>, col: number) {
  return Object.values(data).reduce((s, row) => s + (row[col] ?? 0), 0);
}

function RecapTable({ title, data }: { title: string; data: Record<string, number[]> }) {
  const totals = STATUS_COLS.map((_, i) => sumCol(data, i));
  return (
    <div className="mb-4">
      <p className="text-[12px] font-bold text-[#252271] mb-2 uppercase tracking-wider">{title}</p>
      <div className="overflow-x-auto rounded-[16px] border border-[#e2e8f0]">
        <table className="w-full text-[12px] border-collapse">
          <thead>
            <tr className="bg-[#252271] text-white">
              <th className="text-left px-3 py-2.5 font-bold w-36">Bank / Paket</th>
              {STATUS_COLS.map(s => (
                <th key={s} className="text-center px-2 py-2.5 font-bold whitespace-nowrap">{s}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([bank, vals], idx) => (
              <tr key={bank} className={idx % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}>
                <td className="px-3 py-2 font-semibold text-[#0f172a]">{bank}</td>
                {vals.map((v, i) => (
                  <td key={i} className={`text-center px-2 py-2 ${i === vals.length - 1 ? "font-bold text-[#e6251c]" : "text-[#475569]"}`}>{v}</td>
                ))}
              </tr>
            ))}
            <tr className="bg-[#f1f5f9] font-bold text-[#252271]">
              <td className="px-3 py-2">Total</td>
              {totals.map((t, i) => (
                <td key={i} className="text-center px-2 py-2">{t}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AdminDashboardScreen() {
  const { currentUser } = useAuth();
  const users = getUsers();
  const roles = getRoles();
  const items = getPengadaan();
  const verifRecords = getVerifRecords();

  const activeCount = items.filter(i => i.status !== "Approved" && i.status !== "Rejected").length;

  const stats = [
    { label: "Total User", value: String(users.length || 128), sub: "+12 bulan ini", color: "from-[#e6251c] to-[#c20f06]" },
    { label: "Total Role", value: String(roles.length || 8), sub: "Role aktif", color: "from-[#252271] to-[#3b3baa]" },
    { label: "Pengajuan Aktif", value: String(activeCount || 34), sub: "Menunggu verifikasi", color: "from-[#0891b2] to-[#0e7490]" },
    { label: "Dokumen Template", value: "17", sub: "5 perlu diperbarui", color: "from-[#059669] to-[#047857]" },
  ];

  const activities = [
    { action: "User baru ditambahkan", detail: "Ahmad Fauzi — Admin Full Access", time: "2 menit lalu", dot: "bg-green-500" },
    { action: "Role diperbarui", detail: "Staff Logistik — Akses diubah", time: "1 jam lalu", dot: "bg-blue-500" },
    { action: "Pengajuan dana diverifikasi", detail: "No. PD-2024-001 — Disetujui", time: "3 jam lalu", dot: "bg-[#e6251c]" },
    { action: "Template dokumen baru", detail: "Surat Pengadaan v3.0 diunggah", time: "Kemarin", dot: "bg-amber-500" },
  ];

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc] p-2 sm:p-4 select-none">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-[#252271] text-[32px] sm:text-[36px] font-extrabold leading-tight">Dashboard Admin</h1>
            <p className="text-gray-500 text-[13px] mt-1">Selamat datang kembali, <span className="font-semibold text-[#252271]">{currentUser?.name || "Super Admin"}</span></p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((s) => (
            <div key={s.label} className={`bg-gradient-to-br ${s.color} rounded-[20px] p-[24px] text-white shadow-lg`}>
              <p className="text-white/80 text-[12px] font-medium mb-[8px]">{s.label}</p>
              <p className="text-[32px] font-extrabold leading-none mb-[6px]">{s.value}</p>
              <p className="text-white/70 text-[11px]">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-[24px] shadow-[0px_0px_5.45px_rgba(0,0,0,0.09)] p-[28px]">
            <h2 className="text-[#252271] text-[18px] font-bold mb-[20px]">Aktivitas Terbaru</h2>
            <div className="space-y-[14px]">
              {activities.map((item, i) => (
                <div key={i} className="flex items-start gap-[14px] pb-[14px] border-b border-[#f1f5f9] last:border-0 last:pb-0">
                  <div className={`size-[10px] rounded-full ${item.dot} mt-[5px] shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[#0f172a] text-[13px] font-semibold">{item.action}</p>
                    <p className="text-[#94a3b8] text-[11px] truncate">{item.detail}</p>
                  </div>
                  <span className="ml-auto text-[#94a3b8] text-[11px] shrink-0">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Summary Card */}
          <div className="bg-gradient-to-br from-[#252271] to-[#1e1b5c] rounded-[24px] p-[28px] text-white shadow-lg flex flex-col justify-between">
            <div>
              <span className="inline-block bg-white/20 text-white text-[11px] font-bold px-3 py-1 rounded-full mb-4">SIPRO Overview</span>
              <h3 className="text-xl font-bold mb-2">Integrasi Pengadaan &amp; Verifikasi</h3>
              <p className="text-white/80 text-[12px] leading-relaxed">
                Seluruh data pengajuan dana, pengadaan, pengujian, dan pembayaran dari akun User langsung terhubung secara otomatis ke panel verifikasi Admin.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70">
              <span>Status Server: Online</span>
              <span className="text-green-400 font-bold">● System Normal</span>
            </div>
          </div>
        </div>

        {/* C-FITS Recap Tables */}
        <div className="bg-white rounded-[24px] shadow-[0px_0px_5.45px_rgba(0,0,0,0.09)] p-[28px]">
          <h2 className="text-[#252271] text-[18px] font-bold mb-[20px]">Rekapitulasi Pembayaran C-FITS</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecapTable title="Outsource" data={CFITS_OUTSOURCE} />
            <RecapTable title="Non Outsource" data={CFITS_NON_OUTSOURCE} />
          </div>
        </div>
      </div>
    </div>
  );
}
