import { useState } from "react";
import { AlertCircle, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/store/authStore";
import logoImg from "@/imports/UserDashboard/a1d658a5f37b0b6b958626283ef2524233d0a35d.png";
import trainImg from "@/assets/kereta.svg";

export function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await login(email, password);
      if (!result.success) {
        setError(result.error || "Email atau password salah.");
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || err?.message || "Email atau password salah");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex overflow-hidden font-['Inter',sans-serif]">
      <section className="w-full lg:w-[40%] min-h-screen flex items-center justify-center px-8 sm:px-14 lg:px-[4.6vw]">
        <div className="w-full max-w-[406px]">
          <div className="mb-11">
            <h1 className="text-[#252271] font-extrabold text-[36px] leading-[42px] tracking-[-1.2px]">Selamat Datang</h1>
            <p className="text-[#7d8494] text-[14px] mt-0.5">Login akun anda untuk melanjutkan</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[12px] font-semibold text-[#252271] mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (error) setError("");
                }}
                placeholder="email@perusahaan.com"
                required
                className="w-full h-[46px] px-4 rounded-[15px] border border-[#d0d4dc] bg-white text-[13px] text-gray-800 placeholder-[#c4c7ce] focus:outline-none focus:border-[#252271] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[#252271] mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    if (error) setError("");
                  }}
                  placeholder="••••••"
                  required
                  className="w-full h-[46px] px-4 pr-11 rounded-[15px] border border-[#d0d4dc] bg-white text-[13px] text-gray-800 placeholder-[#b9bdc5] focus:outline-none focus:border-[#252271] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((visible) => !visible)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#aeb3bd] hover:text-[#252271]"
                  aria-label={showPw ? "Sembunyikan password" : "Tampilkan password"}
                >
                  {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {error && (
              <div role="alert" aria-live="assertive" className="flex items-start gap-2 rounded-[10px] bg-red-50 border border-red-200 px-3 py-2.5 text-[12px] text-red-700">
                <AlertCircle size={16} className="mt-px shrink-0" aria-hidden="true" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-[46px] !mt-10 rounded-[14px] text-white font-bold text-[14px] transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-sm hover:brightness-110 active:scale-[0.99]"
              style={{ background: "linear-gradient(90deg, #a90000 0%, #ea0000 100%)" }}
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Memverifikasi...
                </>
              ) : "Masuk"}
            </button>
          </form>
        </div>
      </section>

      <section className="hidden lg:block relative w-[60%] h-[calc(100vh-28px)] my-[14px] mr-[16px] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#2b287d] via-[#17145e] to-[#09064f]">
        <img src={logoImg} alt="KAI Commuter" className="absolute z-10 top-8 left-12 w-[190px] h-auto object-contain" />

        <img
          src={trainImg}
          alt=""
          aria-hidden="true"
          className="absolute right-[-32%] top-[-8%] w-[100%] h-[120%] object-contain object-top opacity-10"
        />

        <div className="absolute z-10 left-12 bottom-12 max-w-[360px] text-white">
          <h2 className="text-[36px] leading-[44px] font-extrabold tracking-[-1.2px]">Aplikasi Pengadaan<br />Kereta Commuter<br />Indonesia</h2>
          <p className="mt-7 text-[12px] text-white/70">Copyright © 2026 PT. Kereta Commuter Indonesia.</p>
        </div>
      </section>
    </div>
  );
}
