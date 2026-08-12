// src/components/admin/layout/SidebarAdmin.tsx
import React, { useState } from "react";
import { useAuth } from "@/store/authStore";
const NavIcon = ({ path }: { path: string }) => <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none"><path d={path} stroke="currentColor" /></svg>;
const ChevronRight = ({ open }: { open: boolean }) => <span className={`transition-transform ${open ? "rotate-90" : ""}`}>›</span>;

const ICONS = {
  dashboard: "M2.66667 4C...", // placeholder path, replace with actual
  users: "...",
  clipboard: "...",
  document: "...",
  database: "...",
};

type Page = "dashboard" | "manajemen-user" | "manajemen-role" | "verifikasi" | "template" | "master-data";

interface SidebarAdminProps {
  page: Page;
  onNavigate: (p: Page) => void;
  collapsed?: boolean;
}

export function SidebarAdmin({ page, onNavigate, collapsed = false }: SidebarAdminProps) {
  const { currentUser, logout } = useAuth();
  const userName = currentUser?.name || "Administrator";
  const userEmail = currentUser?.email || "admin@kci.co.id";
  const initial = userName.charAt(0).toUpperCase();

  const [userRoleOpen, setUserRoleOpen] = useState(page === "manajemen-user" || page === "manajemen-role");
  const isUserRoleSection = page === "manajemen-user" || page === "manajemen-role";
  const isVerifikasiSection = page === "verifikasi";

  if (collapsed) {
    const navIcons: Array<{ path: string; p: Page; active: boolean }> = [
      { path: ICONS.dashboard, p: "dashboard", active: page === "dashboard" },
      { path: ICONS.users, p: "manajemen-user", active: isUserRoleSection },
      { path: ICONS.clipboard, p: "verifikasi", active: isVerifikasiSection },
      { path: ICONS.document, p: "template", active: false },
      { path: ICONS.database, p: "master-data", active: false },
    ];
    return (
      <aside className="relative w-[56px] shrink-0 bg-[#e6251c] overflow-hidden">
        <nav className="flex flex-col gap-1 p-2">
          {navIcons.map((ni, i) => (
            <button key={i} onClick={() => onNavigate(ni.p)} className={`w-full flex items-center justify-center p-2 rounded ${ni.active ? "bg-red-600" : "hover:bg-white/10"}`}>
              <NavIcon path={ni.path} />
            </button>
          ))}
        </nav>
      </aside>
    );
  }

  return (
    <aside className="relative w-[242px] shrink-0 bg-[#e6251c] overflow-hidden">
      <nav className="px-4 py-2">
        <button onClick={() => onNavigate("dashboard")} className={`flex items-center w-full p-2 rounded ${page === "dashboard" ? "bg-red-600" : "hover:bg-white/10"}`}>
          <NavIcon path={ICONS.dashboard} />
          <span className="ml-2">Dashboard</span>
        </button>
        <div className="mt-2">
          <button onClick={() => setUserRoleOpen(!userRoleOpen)} className={`flex items-center w-full p-2 rounded transition-colors ${isUserRoleSection ? "bg-red-600 font-semibold" : "hover:bg-white/10"}`}>
            <NavIcon path={ICONS.users} />
            <span className="ml-2 flex-1 text-left text-[12.5px]">Manajemen User &amp; Role</span>
            <ChevronRight open={userRoleOpen} />
          </button>
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
              userRoleOpen ? "grid-rows-[1fr] opacity-100 mt-1" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden ml-6 border-l border-white/20 pl-2 flex flex-col gap-1">
              <button onClick={() => onNavigate("manajemen-user")} className={`block w-full text-left py-1 px-2 rounded text-[12px] transition-colors ${page === "manajemen-user" ? "font-bold text-white bg-white/10" : "text-white/70 hover:text-white"}`}>User</button>
              <button onClick={() => onNavigate("manajemen-role")} className={`block w-full text-left py-1 px-2 rounded text-[12px] transition-colors ${page === "manajemen-role" ? "font-bold text-white bg-white/10" : "text-white/70 hover:text-white"}`}>Role</button>
            </div>
          </div>
        </div>
        <button onClick={() => onNavigate("verifikasi")} className={`flex items-center w-full p-2 rounded ${isVerifikasiSection ? "bg-red-600" : "hover:bg-white/10"}`}>
          <NavIcon path={ICONS.clipboard} />
          <span className="ml-2">Verifikasi</span>
        </button>
        <button onClick={() => onNavigate("template")} className={`flex items-center w-full p-2 rounded ${page === "template" ? "bg-red-600" : "hover:bg-white/10"}`}>
          <NavIcon path={ICONS.document} />
          <span className="ml-2">Template Dokumen</span>
        </button>
        <button onClick={() => onNavigate("master-data")} className={`flex items-center w-full p-2 rounded ${page === "master-data" ? "bg-red-600" : "hover:bg-white/10"}`}>
          <NavIcon path={ICONS.database} />
          <span className="ml-2">Master Data</span>
        </button>
      </nav>
      <div className="absolute bottom-0 w-full p-4 flex items-center text-white">
        <div className="bg-white/10 rounded-full size-8 flex items-center justify-center mr-2">{initial}</div>
        <div className="flex-1">
          <div className="font-semibold text-sm truncate">{userName}</div>
          <div className="text-xs truncate">{userEmail}</div>
        </div>
        <button onClick={logout} className="ml-2 hover:text-red-400">Logout</button>
      </div>
    </aside>
  );
}
