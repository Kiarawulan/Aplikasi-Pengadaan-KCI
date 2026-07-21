import { useState } from "react";
import {
  LayoutDashboard, Users, ShieldCheck, FileText, Database,
  ChevronDown, ChevronRight, ClipboardList, Package, FlaskConical,
  CreditCard, LogOut, ChevronLeft
} from "lucide-react";
import type { AdminScreen } from "../../types";
import { useAuth } from "../../store/authStore";

type NavGroup = {
  id: string;
  icon: React.ReactNode;
  label: string;
  screen?: AdminScreen;
  children?: { id: AdminScreen; label: string; icon: React.ReactNode }[];
};

const NAV_GROUPS: NavGroup[] = [
  { id: "dashboard", icon: <LayoutDashboard size={15} />, label: "Dashboard", screen: "admin-dashboard" },
  {
    id: "user-mgmt",
    icon: <Users size={15} />,
    label: "Manajemen User & Role",
    children: [
      { id: "user-management", label: "Manajemen User", icon: <Users size={13} /> },
      { id: "role-management", label: "Manajemen Role", icon: <ShieldCheck size={13} /> },
    ],
  },
  {
    id: "verifikasi",
    icon: <ClipboardList size={15} />,
    label: "Verifikasi",
    children: [
      { id: "verif-pengajuan-dana", label: "Pengajuan Dana", icon: <CreditCard size={13} /> },
      { id: "verif-pengadaan", label: "Pengadaan", icon: <Package size={13} /> },
      { id: "verif-pengujian", label: "Pengujian", icon: <FlaskConical size={13} /> },
      { id: "verif-pembayaran", label: "Pembayaran", icon: <CreditCard size={13} /> },
    ],
  },
  { id: "template", icon: <FileText size={15} />, label: "Template Dokumen", screen: "template-dokumen-admin" },
  { id: "master", icon: <Database size={15} />, label: "Master Data", screen: "master-data" },
];

export function AdminSidebar({
  screen,
  onNavigate,
  collapsed,
  onToggleCollapse,
}: {
  screen: AdminScreen;
  onNavigate: (s: AdminScreen) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}) {
  const { currentUser, logout } = useAuth();
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set(["verifikasi", "user-mgmt"]));

  const toggleGroup = (id: string) => {
    setOpenGroups(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const isActive = (s?: AdminScreen) => s === screen;
  const isGroupActive = (group: NavGroup) => {
    if (group.screen) return isActive(group.screen);
    return group.children?.some(c => isActive(c.id)) ?? false;
  };

  return (
    <div
      className="flex flex-col h-full rounded-r-3xl shadow-[0px_0px_6px_rgba(0,0,0,0.22)] transition-all duration-200 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #e6251c 0%, #b50800 100%)", width: collapsed ? "60px" : "240px" }}
    >
      {/* Logo */}
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
              <p className="text-white/40 text-[8px] tracking-[0.14em] mt-0.5 font-medium">ADMIN PANEL</p>
            </div>
          )}
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 flex flex-col gap-0.5 px-2 py-1 overflow-y-auto overflow-x-hidden">
        {NAV_GROUPS.map(group => {
          const groupActive = isGroupActive(group);
          const isOpen = openGroups.has(group.id);

          if (!group.children) {
            return (
              <button
                key={group.id}
                onClick={() => group.screen && onNavigate(group.screen)}
                title={collapsed ? group.label : undefined}
                className={`flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg transition-all text-left ${groupActive ? "" : "hover:bg-white/10"}`}
                style={groupActive ? { background: "rgba(255,255,255,0.18)" } : {}}
              >
                <span className="text-white/75 shrink-0">{group.icon}</span>
                {!collapsed && (
                  <span className={`text-[12.5px] truncate ${groupActive ? "text-white font-semibold" : "text-white/70"}`}>
                    {group.label}
                  </span>
                )}
              </button>
            );
          }

          return (
            <div key={group.id}>
              <button
                onClick={() => !collapsed && toggleGroup(group.id)}
                title={collapsed ? group.label : undefined}
                className={`flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg transition-all text-left ${groupActive ? "" : "hover:bg-white/10"}`}
                style={groupActive ? { background: "rgba(255,255,255,0.10)" } : {}}
              >
                <span className="text-white/75 shrink-0">{group.icon}</span>
                {!collapsed && (
                  <>
                    <span className={`flex-1 text-[12.5px] truncate ${groupActive ? "text-white font-semibold" : "text-white/70"}`}>
                      {group.label}
                    </span>
                    <span className="text-white/40 shrink-0">
                      {isOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                    </span>
                  </>
                )}
              </button>
              {!collapsed && isOpen && (
                <div className="ml-4 mt-0.5 flex flex-col gap-0.5 pl-2.5 border-l border-white/15">
                  {group.children.map(child => (
                    <button
                      key={child.id}
                      onClick={() => onNavigate(child.id)}
                      className={`flex items-center gap-2 w-full px-2 py-1.5 rounded-lg transition-all text-left ${isActive(child.id) ? "" : "hover:bg-white/10"}`}
                      style={isActive(child.id) ? { background: "rgba(255,255,255,0.20)" } : {}}
                    >
                      <span className="text-white/60 shrink-0">{child.icon}</span>
                      <span className={`text-[11.5px] truncate ${isActive(child.id) ? "text-white font-semibold" : "text-white/60"}`}>
                        {child.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User card */}
      <div
        className="mx-2 mb-1 p-2.5 rounded-xl text-left"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-white/20 shrink-0 flex items-center justify-center font-bold text-white text-[12px]">
            {currentUser?.name.charAt(0) ?? "A"}
          </div>
          {!collapsed && (
            <div className="overflow-hidden flex-1 min-w-0">
              <p className="text-white font-semibold text-[11.5px] leading-tight truncate">{currentUser?.name}</p>
              <p className="text-white/45 text-[10px] truncate">{currentUser?.email}</p>
            </div>
          )}
          {!collapsed && (
            <button onClick={logout} className="text-white/40 hover:text-white/80 transition-colors shrink-0" title="Logout">
              <LogOut size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={onToggleCollapse}
        className="flex items-center justify-center h-8 mx-2 mb-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>
    </div>
  );
}
