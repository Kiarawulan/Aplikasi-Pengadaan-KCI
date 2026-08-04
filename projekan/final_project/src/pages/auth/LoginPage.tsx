import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/store/authStore";


import logoImg from "@/imports/UserDashboard/a1d658a5f37b0b6b958626283ef2524233d0a35d.png";

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
      await login(email, password);
    } catch (err: any) {
      setError(err?.response?.data?.message || err?.message || "Email atau password salah");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1b1959 0%, #252271 50%, #4a1525 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Ambient background decoration */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#e6251c]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#252271]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Centered Login Card */}
      <div className="w-full max-w-[420px] bg-white p-8 rounded-2xl shadow-xl border border-gray-100/80 relative z-10">
        {/* Brand Header / Logo */}
        <div className="flex items-center justify-center gap-3 mb-6">

          <div>
            <img src={logoImg} alt="Logo KCI" className="h-[76px] w-auto object-contain transition-transform duration-200 hover:scale-105" />
          </div>
        </div>


        <div className="text-center mb-6">
          <h1 className="text-[#252271] font-black text-[24px] leading-tight mb-1">Selamat Datang</h1>
          <p className="text-gray-400 text-[13px]">Masuk ke akun Anda untuk melanjutkan</p>
        </div>

        {/* Demo credentials hint */}
        <div className="mb-5 rounded-xl border border-blue-100 bg-blue-50/80 p-3">
          <p className="text-[11px] font-semibold text-blue-700 mb-1.5 text-center">Demo Credentials</p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[10.5px] text-blue-600">
            <span>Admin: admin@sipro.com</span><span className="text-blue-400">/ admin123</span>
            <span>IT: it@sipro.com</span><span className="text-blue-400">/ it123</span>

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
            <div className="rounded-lg bg-red-50 border border-red-100 px-3 py-2 text-[12px] text-red-600 text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 rounded-xl text-white font-semibold text-[13px] transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.99]"
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

      </div>
    </div>
  );
}