import logoImg from "@/imports/UserDashboard/a1d658a5f37b0b6b958626283ef2524233d0a35d.png";


export function Logo({ collapsed }: { collapsed?: boolean }) {
  return (
    <div className="flex items-center gap-3 px-3 py-4 border-b border-white/15">
      <img src={logoImg} alt="KCI Logo" className="h-8 w-auto object-contain shrink-0" />
      {!collapsed && (
        <div className="flex flex-col overflow-hidden">
          <span className="text-white font-bold text-xs leading-tight tracking-wide uppercase truncate">SIPRO KCI</span>
          <span className="text-white/70 text-[9.5px] truncate">Pengadaan &amp; Verifikasi</span>
        </div>
      )}
    </div>
  );
}
