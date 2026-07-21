import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../store/authStore";

export function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await login(email, password);
      if (!result.success) {
        setError(result.error || "Login gagal.");
      }
    } catch {
      setError("Terjadi kesalahan saat login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex"
      style={{ fontFamily: "'Inter', sans-serif", background: "#f2f2f2" }}
    >
      {/* Left panel */}
      <div
        className="hidden lg:flex lg:w-[45%] flex-col justify-between p-12 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #e6251c 0%, #8b0000 100%)" }}
      >
        {/* decorative circles */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-10 bg-white" />
        <div className="absolute bottom-20 -left-16 w-52 h-52 rounded-full opacity-10 bg-white" />
        <div className="absolute top-1/2 right-8 w-32 h-32 rounded-full opacity-10 bg-white" />

        <div className="flex items-center gap-3 relative">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 22 22" fill="none" className="w-5 h-5">
              <path d="M4 6h14M8 6V4a1 1 0 011-1h4a1 1 0 011 1v2" stroke="#e6251c" strokeWidth="1.6" strokeLinecap="round" />
              <rect x="4" y="6" width="14" height="13" rx="1.5" stroke="#e6251c" strokeWidth="1.6" />
              <path d="M8.5 11l2 2 3-3" stroke="#e6251c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-white font-black text-[15px] tracking-widest">C-PRO</p>
            <p className="text-white/50 text-[9px] tracking-[0.2em] font-medium">SISTEM PENGADAAN</p>
          </div>
        </div>

        <div className="relative">
          <h2 className="text-white font-black text-[36px] leading-tight mb-4">
            Sistem Informasi<br />Pengadaan<br />Terintegrasi
          </h2>
          <p className="text-white/60 text-[14px] leading-relaxed">
            Platform manajemen pengadaan barang dan jasa yang modern, transparan, dan terverifikasi.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { label: "Proses Terdigitalisasi", icon: "⚡" },
              { label: "Verifikasi Real-time", icon: "✅" },
              { label: "Multi-level Approval", icon: "🔐" },
              { label: "Laporan Otomatis", icon: "📊" },
            ].map(f => (
              <div key={f.label} className="flex items-center gap-2">
                <span className="text-lg">{f.icon}</span>
                <span className="text-white/70 text-[12px] font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/30 text-[11px] relative">© 2024 C-PRO · KCI Group</p>
      </div>

      {/* Right panel — login form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10">
        <div className="w-full max-w-[390px]">
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #e6251c, #b50800)" }}>
              <svg viewBox="0 0 22 22" fill="none" className="w-4 h-4">
                <path d="M4 6h14M8 6V4a1 1 0 011-1h4a1 1 0 011 1v2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                <rect x="4" y="6" width="14" height="13" rx="1.5" stroke="#fff" strokeWidth="1.8" />
                <path d="M8.5 11l2 2 3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-[#252271] font-black text-[15px] tracking-widest">C-PRO</p>
          </div>

          <h1 className="text-[#252271] font-black text-[28px] leading-tight mb-1">Selamat Datang</h1>
          <p className="text-gray-400 text-[13px] mb-8">Masuk ke akun Anda untuk melanjutkan</p>

          {/* Demo credentials hint */}
          <div className="mb-5 rounded-xl border border-blue-100 bg-blue-50 p-3">
            <p className="text-[11px] font-semibold text-blue-700 mb-1">Demo Credentials</p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[10.5px] text-blue-600">
              <span>Admin: admin@sipro.com</span><span className="text-blue-400">/ admin123</span>
              <span>IT: it@sipro.com</span><span className="text-blue-400">/ it123</span>
              <span>Finance: finance@sipro.com</span><span className="text-blue-400">/ finance123</span>
              <span>Logistik: logistik@sipro.com</span><span className="text-blue-400">/ logistik123</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="email@perusahaan.com"
                required
                className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-[13px] text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                style={{ "--tw-ring-color": "#e6251c40" } as React.CSSProperties}
              />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full h-11 px-4 pr-11 rounded-xl border border-gray-200 bg-white text-[13px] text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                />
                <button type="button" onClick={() => setShowPw(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border border-red-100 px-3 py-2 text-[12px] text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-xl text-white font-semibold text-[13px] transition-all disabled:opacity-60 flex items-center justify-center gap-2"
              style={{ background: "linear-gradient(75deg, #e6251c, #ff7676)" }}
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Memverifikasi...
                </>
              ) : "Masuk →"}
            </button>
          </form>

          <p className="text-center text-[11px] text-gray-400 mt-6">
            Lupa password? Hubungi administrator sistem.
          </p>
        </div>
      </div>
    </div>
  );
}
