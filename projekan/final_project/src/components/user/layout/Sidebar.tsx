import { LayoutDashboard, FileText, FolderOpen, FileSearch } from "lucide-react";
import type { Screen } from "@/types";
import { Logo } from "./Logo";
import { CollapseToggle } from "./CollapseToggle";
import { UserCard } from "./UserCard";
import { NavItem } from "./NavItem";
import { DaftarPengadaanNavItem } from "./DaftarPengadaanNavItem";
import { DaftarPembayaranNavItem } from "./DaftarPembayaranNavItem";
import { useAuth } from "@/store/authStore";

export function Sidebar({ screen, backScreen, onNavigate, collapsed, onToggleCollapse }: {
  screen: Screen; backScreen?: Screen; onNavigate: (s: Screen) => void; collapsed: boolean; onToggleCollapse: () => void;
}) {
  const { hasPermission } = useAuth();
  return (
    <div
      className="flex flex-col h-full rounded-tr-3xl rounded-br-3xl rounded-tl-none rounded-bl-none shadow-[0px_12px_32px_#25227140] transition-all duration-300 overflow-hidden select-none"
      style={{ background: "linear-gradient(180deg, #e6251c 0%, #b50800 100%)", width: collapsed ? "60px" : "224px" }}
    >
      <Logo collapsed={collapsed} />
      <nav className="flex-1 flex flex-col gap-0.5 px-2 py-1 overflow-y-auto overflow-x-hidden">
        {hasPermission("dashboard", "viewer") && <NavItem icon={<LayoutDashboard size={15} />} label="Dashboard" active={screen === "dashboard"} collapsed={collapsed} onClick={() => onNavigate("dashboard")} />}
        {hasPermission("pengadaan", "viewer") && <NavItem icon={<FileText size={15} />} label="RUP" active={screen === "rup-list"} collapsed={collapsed} onClick={() => onNavigate("rup-list")} />}
        {hasPermission("pengadaan", "viewer") && <DaftarPengadaanNavItem screen={screen} backScreen={backScreen} onNavigate={onNavigate} collapsed={collapsed} />}
        {hasPermission("pengujian", "viewer") && <NavItem icon={<FileSearch size={15} />} label="Daftar Pengujian" active={screen === "daftar-pengujian" || (["pd-detail", "pr-detail"].includes(screen) && backScreen === "daftar-pengujian")} collapsed={collapsed} onClick={() => onNavigate("daftar-pengujian")} />}
        {hasPermission("pembayaran", "viewer") && <DaftarPembayaranNavItem screen={screen} backScreen={backScreen} onNavigate={onNavigate} collapsed={collapsed} />}
        {hasPermission("templateDokumen", "viewer") && <NavItem icon={<FolderOpen size={15} />} label="Template Dokumen" active={screen === "template-dokumen"} collapsed={collapsed} onClick={() => onNavigate("template-dokumen")} />}
      </nav>
      <UserCard collapsed={collapsed} active={screen === "profile"} onClick={() => onNavigate("profile")} />
      <CollapseToggle collapsed={collapsed} onToggle={onToggleCollapse} />
    </div>
  );
}
