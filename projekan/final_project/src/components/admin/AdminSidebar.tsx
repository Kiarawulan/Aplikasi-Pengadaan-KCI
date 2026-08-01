import { useState } from "react";
import type { AdminScreen } from "../../types";
import { useAuth } from "../../store/authStore";
import logoImg from "../../imports/UserDashboard/a1d658a5f37b0b6b958626283ef2524233d0a35d.png";

const ICONS = {
  dashboard:
    "M2.66667 4C2.66667 3.64638 2.80714 3.30724 3.05719 3.05719C3.30724 2.80714 3.64638 2.66667 4 2.66667H5.33333C5.68696 2.66667 6.02609 2.80714 6.27614 3.05719C6.52619 3.30724 6.66667 3.64638 6.66667 4V5.33333C6.66667 5.68696 6.52619 6.02609 6.27614 6.27614C6.02609 6.52619 5.68696 6.66667 5.33333 6.66667H4C3.64638 6.66667 3.30724 6.52619 3.05719 6.27614C2.80714 6.02609 2.66667 5.68696 2.66667 5.33333V4ZM9.33333 4C9.33333 3.64638 9.47381 3.30724 9.72386 3.05719C9.97391 2.80714 10.313 2.66667 10.6667 2.66667H12C12.3536 2.66667 12.6928 2.80714 12.9428 3.05719C13.1929 3.30724 13.3333 3.64638 13.3333 4V5.33333C13.3333 5.68696 13.1929 6.02609 12.9428 6.27614C12.6928 6.52619 12.3536 6.66667 12 6.66667H10.6667C10.313 6.66667 9.97391 6.52619 9.72386 6.27614C9.47381 6.02609 9.33333 5.68696 9.33333 5.33333V4ZM2.66667 10.6667C2.66667 10.313 2.80714 9.97391 3.05719 9.72386C3.30724 9.47381 3.64638 9.33333 4 9.33333H5.33333C5.68696 9.33333 6.02609 9.47381 6.27614 9.72386C6.52619 9.97391 6.66667 10.313 6.66667 10.6667V12C6.66667 12.3536 6.52619 12.6928 6.27614 12.9428C6.02609 13.1929 5.68696 13.3333 5.33333 13.3333H4C3.64638 13.3333 3.30724 13.1929 3.05719 12.9428C2.80714 12.6928 2.66667 12.3536 2.66667 12V10.6667ZM9.33333 10.6667C9.33333 10.313 9.47381 9.97391 9.72386 9.72386C9.97391 9.47381 10.313 9.33333 10.6667 9.33333H12C12.3536 9.33333 12.6928 9.47381 12.9428 9.72386C13.1929 9.97391 13.3333 10.313 13.3333 10.6667V12C13.3333 12.3536 13.1929 12.6928 12.9428 12.9428C12.6928 13.1929 12.3536 13.3333 12 13.3333H10.6667C10.313 13.3333 9.97391 13.1929 9.72386 12.9428C9.47381 12.6928 9.33333 12.3536 9.33333 12V10.6667Z",
  users:
    "M8 2.90267C8.35829 2.49647 8.83179 2.209 9.35747 2.07853C9.88316 1.94805 10.4361 1.98075 10.9428 2.17227C11.4494 2.36379 11.8857 2.70505 12.1937 3.15064C12.5016 3.59623 12.6665 4.12503 12.6665 4.66667C12.6665 5.2083 12.5016 5.7371 12.1937 6.18269C11.8857 6.62829 11.4494 6.96955 10.9428 7.16107C10.4361 7.35259 9.88316 7.38528 9.35747 7.2548C8.83179 7.12433 8.35829 6.83687 8 6.43067M10 14H2V13.3333C2 12.2725 2.42143 11.2551 3.17157 10.5049C3.92172 9.75476 4.93913 9.33333 6 9.33333C7.06087 9.33333 8.07828 9.75476 8.82843 10.5049C9.57857 11.2551 10 12.2725 10 13.3333V14ZM10 14H14V13.3333C14.0001 12.6311 13.8153 11.9413 13.4643 11.3331C13.1133 10.725 12.6083 10.2199 12.0002 9.86881C11.3922 9.51767 10.7023 9.33279 10.0001 9.33277C9.29795 9.33274 8.60812 9.51757 8 9.86867M8.66667 4.66667C8.66667 5.37391 8.38572 6.05219 7.88562 6.55228C7.38552 7.05238 6.70724 7.33333 6 7.33333C5.29276 7.33333 4.61448 7.05238 4.11438 6.55228C3.61428 6.05219 3.33333 5.37391 3.33333 4.66667C3.33333 3.95942 3.61428 3.28115 4.11438 2.78105C4.61448 2.28095 5.29276 2 6 2C6.70724 2 7.38552 2.28095 7.88562 2.78105C8.38572 3.28115 8.66667 3.95942 8.66667 4.66667Z",
  clipboard:
    "M6 3.33333H4.66667C4.31304 3.33333 3.97391 3.47381 3.72386 3.72386C3.47381 3.97391 3.33333 4.31304 3.33333 4.66667V12.6667C3.33333 13.0203 3.47381 13.3594 3.72386 13.6095C3.97391 13.8595 4.31304 14 4.66667 14H11.3333C11.687 14 12.0261 13.8595 12.2761 13.6095C12.5262 13.3594 12.6667 13.0203 12.6667 12.6667V4.66667C12.6667 4.31304 12.5262 3.97391 12.2761 3.72386C12.0261 3.47381 11.687 3.33333 11.3333 3.33333H10M6 3.33333C6 3.68696 6.14048 4.02609 6.39052 4.27614C6.64057 4.52619 6.97971 4.66667 7.33333 4.66667H8.66667C9.02029 4.66667 9.35943 4.52619 9.60948 4.27614C9.85952 4.02609 10 3.68696 10 3.33333M6 3.33333C6 2.97971 6.14048 2.64057 6.39052 2.39052C6.64057 2.14048 6.97971 2 7.33333 2H8.66667C9.02029 2 9.35943 2.14048 9.60948 2.39052C9.85952 2.64057 10 2.97971 10 3.33333",
  document:
    "M6 8H10M6 10.6667H10M11.3333 14H4.66667C4.31304 14 3.97391 13.8595 3.72386 13.6095C3.47381 13.3594 3.33333 13.0203 3.33333 12.6667V3.33333C3.33333 2.97971 3.47381 2.64057 3.72386 2.39052C3.97391 2.14048 4.31304 2 4.66667 2H8.39067C8.56746 2.00004 8.73701 2.0703 8.862 2.19533L12.4713 5.80467C12.5964 5.92966 12.6666 6.0992 12.6667 6.276V12.6667C12.6667 13.0203 12.5262 13.3594 12.2761 13.6095C12.0261 13.8595 11.687 14 11.3333 14Z",
  database:
    "M2.66667 4.66667V11.3333C2.66667 12.8067 5.05467 14 8 14C10.9453 14 13.3333 12.8067 13.3333 11.3333V4.66667M2.66667 4.66667C2.66667 6.14 5.05467 7.33333 8 7.33333C10.9453 7.33333 13.3333 6.14 13.3333 4.66667M2.66667 4.66667C2.66667 3.19333 5.05467 2 8 2C10.9453 2 13.3333 3.19333 13.3333 4.66667M13.3333 8C13.3333 9.47333 10.9453 10.6667 8 10.6667C5.05467 10.6667 2.66667 9.47333 2.66667 8",
};

function NavIcon({ path, size = 16 }: { path: string; size?: number }) {
  return (
    <svg fill="none" height={size} viewBox={`0 0 ${size} ${size}`} width={size} className="shrink-0">
      <path d={path} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

function ChevronRight({ open }: { open: boolean }) {
  return (
    <svg fill="none" height="12" viewBox="0 0 12 12" width="12" className={`shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`}>
      <path d="M9.5 4.5L6 8L2.5 4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AdminSidebar({
  screen,
  onNavigate,
  collapsed,
  onToggleCollapse,
  setCollapsed,
  activeSubItem,
  setActiveSubItem,
}: {
  screen: AdminScreen;
  onNavigate: (s: AdminScreen) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
  setCollapsed: (val: boolean) => void;
  activeSubItem: string;
  setActiveSubItem: (val: string) => void;
}) {
  const { currentUser, logout } = useAuth();
  const [userRoleOpen, setUserRoleOpen] = useState(
    screen === "user-management" || screen === "role-management"
  );
  const [verifikasiOpen, setVerifikasiOpen] = useState(
    screen.startsWith("verif-")
  );

  const isUserRoleSection = screen === "user-management" || screen === "role-management";
  const isVerifikasiSection = screen.startsWith("verif-");

  const initial = currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : "A";

  if (collapsed) {
    const navIcons: { path: string; screen: AdminScreen; active: boolean }[] = [
      { path: ICONS.dashboard, screen: "admin-dashboard", active: screen === "admin-dashboard" },
      { path: ICONS.users, screen: "user-management", active: isUserRoleSection },
      { path: ICONS.clipboard, screen: "verif-pengajuan-dana", active: isVerifikasiSection },
      { path: ICONS.document, screen: "template-dokumen-admin", active: screen === "template-dokumen-admin" },
      { path: ICONS.database, screen: "master-data", active: screen === "master-data" },
    ];

    return (
      <aside className="relative w-[60px] h-full shrink-0 bg-[#e6251c] overflow-hidden select-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6251c] to-[#c20f06] rounded-tr-[24px] rounded-br-[24px] rounded-tl-none rounded-bl-none shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] overflow-hidden flex flex-col justify-between">
          <div>
            <div className="h-[64px] flex items-center justify-center border-b border-white/10">
              <button onClick={onToggleCollapse} className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors cursor-pointer">
                <span className="text-xs font-bold">▶</span>
              </button>
            </div>
            <nav className="p-2 flex flex-col gap-1">
              {navIcons.map((ni, i) => (
                <button
                  key={i}
                  onClick={() => onNavigate(ni.screen)}
                  className={`w-full flex items-center justify-center p-2.5 rounded-lg transition-all duration-150 cursor-pointer
                    ${ni.active
                      ? "bg-gradient-to-r from-[#ff4444] to-[#ff7272] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)]"
                      : "hover:bg-white/10 active:bg-white/20"}`}
                >
                  <NavIcon path={ni.path} />
                </button>
              ))}
            </nav>
          </div>
          <div className="p-2 pb-4 flex justify-center">
            <button
              onClick={logout}
              title="Logout"
              className="bg-black/10 hover:bg-white/20 text-white size-9 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="text-xs font-bold">{initial}</span>
            </button>
          </div>
        </div>
      </aside>
    );
  }

  function NavLink({
    label,
    iconPath,
    active,
    onClick,
  }: {
    label: string;
    iconPath: string;
    active: boolean;
    onClick: () => void;
  }) {
    return (
      <button
        onClick={onClick}
        className={`w-full flex gap-[10px] items-center px-[10px] py-[8px] rounded-[8px] text-left transition-all duration-150 group cursor-pointer
          ${active
            ? "bg-gradient-to-r from-[#ff4444] to-[#ff7272] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)]"
            : "hover:bg-white/10 active:bg-white/20"
          }`}
      >
        <NavIcon path={iconPath} />
        <span className={`text-[12.5px] leading-[18.75px] text-white ${active ? "font-semibold" : "font-normal"}`}>
          {label}
        </span>
      </button>
    );
  }

  function SubNavLink({
    label,
    active,
    onClick,
  }: {
    label: string;
    active: boolean;
    onClick: () => void;
  }) {
    return (
      <button
        onClick={onClick}
        className={`w-full text-left px-[8px] py-[5px] rounded-[8px] text-[11.5px] leading-[17.25px] transition-all duration-150 cursor-pointer
          ${active
            ? "bg-gradient-to-r from-[rgba(255,99,99,0.51)] to-transparent text-white font-semibold"
            : "text-white/70 font-normal hover:text-white hover:bg-white/10"
          }`}
      >
        {label}
      </button>
    );
  }

  return (
    <aside className="relative w-[240px] h-full shrink-0 bg-[#e6251c] overflow-hidden select-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e6251c] to-[#c20f06] rounded-tr-[24px] rounded-br-[24px] rounded-tl-none rounded-bl-none shadow-[0px_0px_6px_0px_rgba(0,0,0,0.22)] overflow-hidden flex flex-col justify-between">
        <div>
          {/* Logo & Toggle */}
          <div className="h-[96px] flex items-center justify-between px-3 border-b border-white/10">
            <div className="flex items-center justify-center flex-1">
              <img src={logoImg} alt="Logo KCI" className="h-[68px] w-auto object-contain transition-transform duration-200 hover:scale-105" />
            </div>
            <button onClick={onToggleCollapse} className="text-white/80 hover:text-white p-1 rounded hover:bg-white/10 transition-colors cursor-pointer">
              <span className="text-xs">◀</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="px-2 py-3 flex-1 min-h-0 flex flex-col gap-1 overflow-y-auto">
            <NavLink
              label="Dashboard"
              iconPath={ICONS.dashboard}
              active={screen === "admin-dashboard"}
              onClick={() => onNavigate("admin-dashboard")}
            />

            {/* Manajemen User & Role */}
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setUserRoleOpen((v) => !v)}
                className={`w-full flex items-center justify-between px-[10px] py-[8px] rounded-[8px] transition-all duration-150
                  ${isUserRoleSection
                    ? "bg-gradient-to-r from-[#ff4545] to-[#ff7272] drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)]"
                    : "hover:bg-white/10 active:bg-white/20"
                  }`}
              >
                <div className="flex gap-[10px] items-center">
                  <NavIcon path={ICONS.users} />
                  <span className={`text-[12.5px] leading-[18.75px] text-white ${isUserRoleSection ? "font-medium" : "font-normal"}`}>
                    Manajemen User &amp; Role
                  </span>
                </div>
                <ChevronRight open={userRoleOpen} />
              </button>

              {userRoleOpen && (
                <div className="relative flex flex-col gap-1 items-start pl-3 w-[196px] ml-auto border-l border-white/30">
                  <SubNavLink
                    label="Manajemen User"
                    active={screen === "user-management"}
                    onClick={() => onNavigate("user-management")}
                  />
                  <SubNavLink
                    label="Manajemen Role"
                    active={screen === "role-management"}
                    onClick={() => onNavigate("role-management")}
                  />
                </div>
              )}
            </div>

            {/* Verifikasi */}
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setVerifikasiOpen((v) => !v)}
                className={`w-full flex items-center justify-between px-[10px] py-[8px] rounded-[8px] transition-all duration-150
                  ${isVerifikasiSection
                    ? "bg-gradient-to-r from-[#ff4545] to-[#ff7272] drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)]"
                    : "hover:bg-white/10 active:bg-white/20"
                  }`}
              >
                <div className="flex gap-[10px] items-center">
                  <NavIcon path={ICONS.clipboard} />
                  <span className={`text-[12.5px] leading-[18.75px] text-white ${isVerifikasiSection ? "font-medium" : "font-normal"}`}>
                    Verifikasi
                  </span>
                </div>
                <ChevronRight open={verifikasiOpen} />
              </button>

              {verifikasiOpen && (
                <div className="relative flex flex-col gap-1 items-start pl-3 w-[196px] ml-auto border-l border-white/30">
                  <SubNavLink
                    label="Pengajuan Dana"
                    active={screen === "verif-pengajuan-dana"}
                    onClick={() => onNavigate("verif-pengajuan-dana")}
                  />
                  <SubNavLink
                    label="Pengadaan"
                    active={screen === "verif-pengadaan"}
                    onClick={() => onNavigate("verif-pengadaan")}
                  />
                  <SubNavLink
                    label="Pengujian"
                    active={screen === "verif-pengujian"}
                    onClick={() => onNavigate("verif-pengujian")}
                  />
                  <SubNavLink
                    label="Pembayaran"
                    active={screen === "verif-pembayaran"}
                    onClick={() => onNavigate("verif-pembayaran")}
                  />
                </div>
              )}
            </div>

            <NavLink
              label="Template Dokumen"
              iconPath={ICONS.document}
              active={screen === "template-dokumen-admin"}
              onClick={() => onNavigate("template-dokumen-admin")}
            />

            <NavLink
              label="Master Data"
              iconPath={ICONS.database}
              active={screen === "master-data"}
              onClick={() => onNavigate("master-data")}
            />
          </nav>
        </div>

        {/* User Card */}
        <div className="p-2 pb-3">
          <div className="bg-black/10 rounded-[12px] shadow-sm w-full p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="bg-white/20 rounded-full size-8 flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">{initial}</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-white text-[11.5px] font-semibold truncate">{currentUser?.name || "Administrator"}</span>
                <span className="text-white/70 text-[10px] truncate">{currentUser?.email || "admin@sipro.com"}</span>
              </div>
            </div>
            <button
              onClick={logout}
              title="Logout"
              className="text-white/70 hover:text-white p-1 rounded hover:bg-white/10 transition-colors ml-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
