import { useState, useRef } from "react";
import { ChevronRight } from "lucide-react";
import type { Screen } from "@/types";
import pengadaanIcon from "@/assets/pengadaan.svg";


export function DaftarPengadaanNavItem({ screen, backScreen, onNavigate, collapsed }: {
  screen: Screen; backScreen?: Screen; onNavigate: (s: Screen) => void; collapsed: boolean;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isDetailScreen = ["pd-detail", "pr-detail"].includes(screen);
  const isOtherMenu = isDetailScreen && backScreen && ["pembayaran-outsource", "pembayaran-non-outsource", "pembayaran-umd", "daftar-pengujian"].includes(backScreen);

  const isActive = (["daftar-pengadaan", "purchase-requisition"].includes(screen) || (isDetailScreen && !isOtherMenu));
  const activeSubScreen = isDetailScreen && backScreen ? backScreen : screen;

  const isPd = (activeSubScreen === "daftar-pengadaan" || screen === "pd-detail") && !isOtherMenu;
  const isPr = (activeSubScreen === "purchase-requisition" || screen === "pr-detail") && !isOtherMenu;
  const showInlineMenu = !collapsed && (open || isActive);

  const open_ = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpen(true); };
  const close_ = () => { timeoutRef.current = setTimeout(() => setOpen(false), 200); };

  return (
    <div className="relative" onMouseEnter={open_} onMouseLeave={close_}>
      <button
        title={collapsed ? "Daftar Pengadaan" : undefined}
        onClick={() => onNavigate("daftar-pengadaan")}
        className={`flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg transition-all text-left ${isActive ? "" : "hover:bg-white/10"}`}
        style={isActive ? { background: "rgba(255,255,255,0.18)" } : {}}
      >
        <span className="shrink-0"><img src={pengadaanIcon} alt="" aria-hidden="true" className="size-[15px] object-contain brightness-0 invert opacity-75" /></span>
        {!collapsed && (
          <>
            <span className={`text-[12.5px] truncate flex-1 ${isActive ? "text-white font-semibold" : "text-white/70 font-normal"}`}>Daftar Pengadaan</span>
            <ChevronRight size={11} className={`text-white/35 transition-transform duration-150 ${showInlineMenu ? "rotate-90" : ""}`} />
          </>
        )}
      </button>

      {/* Expanded sidebar: inline sub-items with left border only */}
      {showInlineMenu && (
        <div className="ml-[22px] mt-0.5 pl-3 border-l border-white/18 flex flex-col gap-0.5 pb-0.5">
          <button
            onClick={() => onNavigate("daftar-pengadaan")}
            className={`text-left py-1.5 px-1 rounded transition-colors text-[12px] w-full ${isPd ? "text-white font-semibold" : "text-white/50 hover:text-white/75"}`}
          >
            Park Dokumen
          </button>
          <button
            onClick={() => onNavigate("purchase-requisition")}
            className={`text-left py-1.5 px-1 rounded transition-colors text-[12px] w-full ${isPr ? "text-white font-semibold" : "text-white/50 hover:text-white/75"}`}
          >
            Purchase Requisition
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
            onClick={() => { onNavigate("daftar-pengadaan"); setOpen(false); }}
            className={`w-full text-left px-4 py-2.5 text-[12px] transition-colors hover:bg-white/10 ${isPd ? "text-white font-semibold" : "text-white/65"}`}
          >
            Park Dokumen
          </button>
          <button
            onClick={() => { onNavigate("purchase-requisition"); setOpen(false); }}
            className={`w-full text-left px-4 py-2.5 text-[12px] transition-colors hover:bg-white/10 ${isPr ? "text-white font-semibold" : "text-white/65"}`}
          >
            Purchase Requisition
          </button>
        </div>
      )}
    </div>
  );
}
