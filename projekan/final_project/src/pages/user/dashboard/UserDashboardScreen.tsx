import { useState, useMemo } from "react";
import { useAuth } from "@/store/authStore";
import { AdminTopBar } from "@/components/admin/layout/AdminTopBar";
import {
  BarChart3, TrendingUp, FileText, ClipboardList, FlaskConical, Wallet,
  Filter, Download, Search, ChevronRight, PieChart, Calendar, Users,
  CheckCircle2, Clock, XCircle, AlertTriangle, ArrowRight, Building2,
} from "lucide-react";

// ─── Helper Components (same as admin version) ─────────────────────────────────────
function StatCard({ label, value, icon: Icon, gradient, sub }: {
  label: string; value: string | number; icon: any; gradient: string; sub?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} rounded-[20px] p-5 text-white shadow-lg group hover:shadow-xl transition-all duration-300`)}>
      <div className="absolute top-2 right-2 opacity-15 group-hover:opacity-25 transition-opacity">
        <Icon size={42} />
      </div>
      <p className="text-white/70 text-[10.5px] font-semibold uppercase tracking-wider mb-1">{label}</p>
      <p className="text-[30px] font-extrabold leading-none">{value}</p>
{ sub && <p className="text-white/55 text-[10px] mt-1">{sub}</p> }
    </div >
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

function SectionTitle({ children, icon: Icon }: { children: React.ReactNode; icon?: any }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="w-1 h-5 rounded-full bg-[#e6251c]" />
      {Icon && <Icon size={15} className="text-[#252271]" />}
      <h3 className="text-[14px] font-bold text-[#252271]">{children}</h3>
    </div>
  );
}

// Mock data – short version for user summary
const MOCK_SUMMARY = {
  pengajuanDana: {
    stats: [
      { label: "On Progress", value: 5, gradient: "from-[#14b8a6] to-[#0d9488]", icon: Clock },
      { label: "Selesai", value: 30, gradient: "from-[#22c55e] to-[#16a34a]", icon: CheckCircle2 },
    ],
  },
  pengujian: {
    stats: [
      { label: "Total", value: 24, gradient: "from-[#14b8a6] to-[#0d9488]", icon: FileText },
      { label: "Selesai", value: 14, gradient: "from-[#22c55e] to-[#16a34a]", icon: CheckCircle2 },
    ],
  },
  pengadaan: {
    stats: [
      { label: "Submitted", value: 18, gradient: "from-[#e6251c] to-[#ff7676]", icon: ClipboardList },
      { label: "Done", value: 18, gradient: "from-[#22c55e] to-[#4ade80]", icon: CheckCircle2 },
    ],
  },
  pembayaran: {
    stats: [
      { label: "Outsourcing", value: "IDR 10.000.000,00", gradient: "from-[#e6251c] to-[#ff7676]", icon: Wallet },
      { label: "Non Outsourcing", value: "IDR 195.299.234,00", gradient: "from-[#252271] to-[#3b3baa]", icon: FileText },
    ],
  },
};

export function UserDashboardScreen() {
  const { currentUser } = useAuth();

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc] select-none">
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        {/* Header */}
        <div className="mb-6">
          <p className="text-[#252271]/55 text-[13px] font-medium mb-0.5">Selamat datang kembali,</p>
          <h1 className="text-[#252271] text-[26px] font-extrabold leading-tight">{currentUser?.name || "User"}</h1>
        </div>

        {/* Pengajuan Dana Summary */}
        <SectionTitle icon={Wallet}>Pengajuan Dana</SectionTitle>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {MOCK_SUMMARY.pengajuanDana.stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>

        {/* Pengujian Summary */}
        <SectionTitle icon={FlaskConical}>Pengujian</SectionTitle>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {MOCK_SUMMARY.pengujian.stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>

        {/* Pengadaan Summary */}
        <SectionTitle icon={ClipboardList}>Pengadaan</SectionTitle>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {MOCK_SUMMARY.pengadaan.stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>

        {/* Pembayaran Summary */}
        <SectionTitle icon={FileText}>Pembayaran</SectionTitle>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {MOCK_SUMMARY.pembayaran.stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
}
