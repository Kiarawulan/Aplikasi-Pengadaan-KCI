import { LayoutDashboard, FileText, FolderOpen, FileSearch } from "lucide-react";
import type { Screen } from "../../types";
import { Logo } from "./Logo";
import { CollapseToggle } from "./CollapseToggle";
import { UserCard } from "./UserCard";
import { NavItem } from "./NavItem";
import { DaftarPengadaanNavItem } from "./DaftarPengadaanNavItem";
import { DaftarPembayaranNavItem } from "./DaftarPembayaranNavItem";

export function Sidebar({ screen, backScreen, onNavigate, collapsed, onToggleCollapse }: {
  screen: Screen; backScreen?: Screen; onNavigate: (s: Screen) => void; collapsed: boolean; onToggleCollapse: () => void;
}) {
  return (
    <div
      className="flex flex-col h-full rounded-tr-3xl rounded-br-3xl rounded-tl-none rounded-bl-none shadow-[0px_0px_6px_rgba(0,0,0,0.22)] transition-all duration-200 overflow-hidden select-none"
      style={{ background: "linear-gradient(180deg, #e6251c 0%, #b50800 100%)", width: collapsed ? "60px" : "224px" }}
    >
      <Logo collapsed={collapsed} />
      <nav className="flex-1 flex flex-col gap-0.5 px-2 py-1 overflow-y-auto overflow-x-hidden">
        <NavItem icon={<LayoutDashboard size={15} />} label="Dashboard" active={screen === "dashboard"} collapsed={collapsed} onClick={() => onNavigate("dashboard")} />
        <NavItem icon={<FileText size={15} />} label="RUP" active={screen === "rup-list"} collapsed={collapsed} onClick={() => onNavigate("rup-list")} />
        <DaftarPengadaanNavItem screen={screen} onNavigate={onNavigate} collapsed={collapsed} />
        <NavItem icon={<FileSearch size={15} />} label="Daftar Pengujian" active={screen === "daftar-pengujian"} collapsed={collapsed} onClick={() => onNavigate("daftar-pengujian")} />
        <DaftarPembayaranNavItem screen={screen} backScreen={backScreen} onNavigate={onNavigate} collapsed={collapsed} />
        <NavItem icon={<FolderOpen size={15} />} label="Template Dokumen" active={screen === "template-dokumen"} collapsed={collapsed} onClick={() => onNavigate("template-dokumen")} />
      </nav>
      <UserCard collapsed={collapsed} active={screen === "profile"} onClick={() => onNavigate("profile")} />
      <CollapseToggle collapsed={collapsed} onToggle={onToggleCollapse} />
    </div>
  );
}

