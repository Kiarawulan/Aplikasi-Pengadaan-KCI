import { useState, useRef } from "react";
import { CreditCard, ChevronRight } from "lucide-react";
import type { Screen } from "../../types";

export function DaftarPembayaranNavItem({ screen, backScreen, onNavigate, collapsed }: {
  screen: Screen; backScreen?: Screen; onNavigate: (s: Screen) => void; collapsed: boolean;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = [
    "pembayaran-outsource",
    "pembayaran-non-outsource",
    "pembayaran-umd"
  ].includes(screen) || (
    ["pd-detail", "pr-detail"].includes(screen) &&
    backScreen &&
    ["pembayaran-outsource", "pembayaran-non-outsource", "pembayaran-umd"].includes(backScreen)
  );

  const activeSubScreen = ["pd-detail", "pr-detail"].includes(screen) && backScreen ? backScreen : screen;

  const isOutsource = activeSubScreen === "pembayaran-outsource";
  const isNonOutsource = activeSubScreen === "pembayaran-non-outsource";
  const isUmd = activeSubScreen === "pembayaran-umd";

  const showInlineMenu = !collapsed && (open || isActive);

  const open_ = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpen(true); };
  const close_ = () => { timeoutRef.current = setTimeout(() => setOpen(false), 200); };

  return (
    <div className="relative" onMouseEnter={open_} onMouseLeave={close_}>
      <button
        title={collapsed ? "Daftar Pembayaran" : undefined}
        onClick={() => onNavigate("pembayaran-outsource")}
        className={`flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg transition-all text-left ${isActive ? "" : "hover:bg-white/10"}`}
        style={isActive ? { background: "rgba(255,255,255,0.18)" } : {}}
      >
        <span className="text-white/75 shrink-0"><CreditCard size={15} /></span>
        {!collapsed && (
          <>
            <span className={`text-[12.5px] truncate flex-1 ${isActive ? "text-white font-semibold" : "text-white/70 font-normal"}`}>Daftar Pembayaran</span>
            <ChevronRight size={11} className={`text-white/35 transition-transform duration-150 ${showInlineMenu ? "rotate-90" : ""}`} />
          </>
        )}
      </button>

      {/* Expanded sidebar: inline sub-items with left border only */}
      {showInlineMenu && (
        <div className="ml-[22px] mt-0.5 pl-3 border-l border-white/18 flex flex-col gap-0.5 pb-0.5">

          <button
            onClick={() => onNavigate("pembayaran-outsource")}
            className={`text-left py-1.5 px-1 rounded transition-colors text-[12px] w-full ${isOutsource ? "text-white font-semibold" : "text-white/50 hover:text-white/75"}`}
          >
            Outsource
          </button>
          <button
            onClick={() => onNavigate("pembayaran-non-outsource")}
            className={`text-left py-1.5 px-1 rounded transition-colors text-[12px] w-full ${isNonOutsource ? "text-white font-semibold" : "text-white/50 hover:text-white/75"}`}
          >
            Non Outsource
          </button>
          <button
            onClick={() => onNavigate("pembayaran-umd")}
            className={`text-left py-1.5 px-1 rounded transition-colors text-[12px] w-full ${isUmd ? "text-white font-semibold" : "text-white/50 hover:text-white/75"}`}
          >
            UMD
          </button>
        </div>
      )}

      {/* Collapsed sidebar: minimal floating panel */}
      {collapsed && open && (
        <div
          className="absolute left-[62px] top-0 z-50 rounded-xl py-2 min-w-[160px]"
          style={{ background: "rgba(75,3,0,0.97)", boxShadow: "0 6px 20px rgba(0,0,0,0.28)" }}
          onMouseEnter={open_}
          onMouseLeave={close_}
        >

          <button
            onClick={() => { onNavigate("pembayaran-outsource"); setOpen(false); }}
            className={`w-full text-left px-4 py-2.5 text-[12px] transition-colors hover:bg-white/10 ${isOutsource ? "text-white font-semibold" : "text-white/65"}`}
          >
            Outsource
          </button>
          <button
            onClick={() => { onNavigate("pembayaran-non-outsource"); setOpen(false); }}
            className={`w-full text-left px-4 py-2.5 text-[12px] transition-colors hover:bg-white/10 ${isNonOutsource ? "text-white font-semibold" : "text-white/65"}`}
          >
            Non Outsource
          </button>
          <button
            onClick={() => { onNavigate("pembayaran-umd"); setOpen(false); }}
            className={`w-full text-left px-4 py-2.5 text-[12px] transition-colors hover:bg-white/10 ${isUmd ? "text-white font-semibold" : "text-white/65"}`}
          >
            UMD
          </button>
        </div>
      )}
    </div>
  );
}
