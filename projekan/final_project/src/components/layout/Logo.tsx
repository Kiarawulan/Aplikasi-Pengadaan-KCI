export function Logo({ collapsed }: { collapsed: boolean }) {
  return (
    <div className={`flex items-center h-[56px] shrink-0 px-3 ${collapsed ? "justify-center" : ""}`}>
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
          <svg viewBox="0 0 22 22" fill="none" className="w-[18px] h-[18px]">
            <path d="M4 6h14M8 6V4a1 1 0 011-1h4a1 1 0 011 1v2" stroke="#e6251c" strokeWidth="1.6" strokeLinecap="round" />
            <rect x="4" y="6" width="14" height="13" rx="1.5" stroke="#e6251c" strokeWidth="1.6" />
            <path d="M8.5 11l2 2 3-3" stroke="#e6251c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {!collapsed && (
          <div className="leading-none">
            <p className="text-white font-black text-[13px] tracking-widest">C-PRO</p>
            <p className="text-white/40 text-[8.5px] tracking-[0.18em] mt-0.5 font-medium">PENGADAAN</p>
          </div>
        )}
      </div>
    </div>
  );
}
