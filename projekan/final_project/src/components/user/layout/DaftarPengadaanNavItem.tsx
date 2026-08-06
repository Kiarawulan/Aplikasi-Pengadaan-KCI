import { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import type { Screen } from "@/types";
import pengadaanIcon from "@/assets/pengadaan.svg";

export function DaftarPengadaanNavItem({ screen, backScreen, onNavigate, collapsed }: {
  screen: Screen; backScreen?: Screen; onNavigate: (s: Screen) => void; collapsed: boolean;
}) {
  const isDetailScreen = ["pd-detail", "pr-detail"].includes(screen);
  const isOtherMenu = isDetailScreen && backScreen && ["pembayaran-outsource", "pembayaran-non-outsource", "pembayaran-umd", "daftar-pengujian"].includes(backScreen);
  const isActive = (["daftar-pengadaan", "purchase-requisition"].includes(screen) || (isDetailScreen && !isOtherMenu));
  const activeSubScreen = isDetailScreen && backScreen ? backScreen : screen;

  const isPd = (activeSubScreen === "daftar-pengadaan" || screen === "pd-detail") && !isOtherMenu;
  const isPr = (activeSubScreen === "purchase-requisition" || screen === "pr-detail") && !isOtherMenu;

  const [expanded, setExpanded] = useState(isActive);
  const [hoverOpen, setHoverOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isActive) setExpanded(true);
  }, [isActive]);

  const showInlineMenu = !collapsed && expanded;

  const handleHeaderClick = () => {
    if (collapsed) {
      onNavigate("daftar-pengadaan");
      return;
    }
    if (expanded) {
      setExpanded(false);
    } else {
      setExpanded(true);
      if (!isActive) onNavigate("daftar-pengadaan");
    }
  };

  const openHover = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setHoverOpen(true); };
  const closeHover = () => { timeoutRef.current = setTimeout(() => setHoverOpen(false), 200); };

  return (
    <div className="relative" onMouseEnter={openHover} onMouseLeave={closeHover}>
      <button
        title={collapsed ? "Daftar Pengadaan" : undefined}
        onClick={handleHeaderClick}
        className={`flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg transition-all duration-200 text-left group ${isActive ? "" : "hover:bg-white/10"}`}
        style={isActive ? { background: "rgba(255,255,255,0.18)" } : {}}
      >
        <span className="shrink-0 transition-transform duration-200 group-hover:scale-110"><img src={pengadaanIcon} alt="" aria-hidden="true" className="size-[15px] object-contain brightness-0 invert opacity-75" /></span>
        <span className={`text-[12.5px] truncate flex-1 transition-all duration-300 ease-in-out ${isActive ? "text-white font-semibold" : "text-white/70 font-normal"} ${collapsed ? "max-w-0 opacity-0 pointer-events-none" : "max-w-[140px] opacity-100"}`}>
          Daftar Pengadaan
        </span>
        <ChevronRight size={11} className={`text-white/35 transition-transform duration-300 ease-in-out shrink-0 ${showInlineMenu ? "rotate-90" : "rotate-0"} ${collapsed ? "opacity-0 pointer-events-none" : "opacity-100"}`} />
      </button>

      {/* Expanded sidebar: inline sub-items with smooth accordion height animation */}
      {!collapsed && (
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
            showInlineMenu ? "grid-rows-[1fr] opacity-100 mt-0.5" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden ml-[22px] pl-3 border-l border-white/18 flex flex-col gap-0.5 pb-0.5">
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
        </div>
      )}

      {/* Collapsed sidebar: minimal floating panel */}
      {collapsed && hoverOpen && (
        <div
          className="absolute left-[62px] top-0 z-50 rounded-xl py-2 min-w-[160px] animate-in fade-in zoom-in-95 duration-200 ease-out"
          style={{ background: "rgba(75,3,0,0.97)", boxShadow: "0 6px 20px rgba(0,0,0,0.28)" }}
          onMouseEnter={openHover}
          onMouseLeave={closeHover}
        >
          <button
            onClick={() => { onNavigate("daftar-pengadaan"); setHoverOpen(false); }}
            className={`w-full text-left px-4 py-2.5 text-[12px] transition-colors hover:bg-white/10 ${isPd ? "text-white font-semibold" : "text-white/65"}`}
          >
            Park Dokumen
          </button>
          <button
            onClick={() => { onNavigate("purchase-requisition"); setHoverOpen(false); }}
            className={`w-full text-left px-4 py-2.5 text-[12px] transition-colors hover:bg-white/10 ${isPr ? "text-white font-semibold" : "text-white/65"}`}
          >
            Purchase Requisition
          </button>
        </div>
      )}
    </div>
  );
}
