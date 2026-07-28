import { useState, useEffect } from "react";
import {
  LayoutDashboard, Users, ShieldCheck, FileText, Database,
  ChevronDown, ChevronRight, ClipboardList, Package,
  CreditCard, LogOut, ChevronLeft, Folder, ClipboardCheck, PackageCheck
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
  },
  { id: "template", icon: <FileText size={15} />, label: "Template Dokumen", screen: "template-dokumen-admin" },
  { id: "master", icon: <Database size={15} />, label: "Master Data", screen: "master-data" },
];

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
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set(["user-mgmt"]));
  
  // Collapsed Mode Floating Panel state
  const [activePanelGroup, setActivePanelGroup] = useState<string | null>(null);
  
  // Submenu selection inside the Verifikasi floating panel (Pengujian by default)
  const [activeSubmenu, setActiveSubmenu] = useState<string>(() => {
    return localStorage.getItem("sipro_active_submenu") || "pengujian";
  });
  
  // Submenu tree expanded state inside floating panel (for sub-sub-sections like RUP, NPP, etc.)
  const [expandedSubsections, setExpandedSubsections] = useState<Set<string>>(
    new Set(["rup", "npp", "sp3", "pbj", "contract", "payment-approve", "reports", "kontrak", "pengujian-section"])
  );

  // Keep active panel group synced
  useEffect(() => {
    if (!collapsed) {
      setActivePanelGroup(null);
    }
  }, [collapsed]);

  const toggleGroup = (id: string) => {
    setOpenGroups(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleSubsection = (id: string) => {
    setExpandedSubsections(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleGroupClick = (group: NavGroup) => {
    if (group.id === "verifikasi") {
      setCollapsed(true);
      setActivePanelGroup("verifikasi");
    } else {
      // Auto-expand sidebar if it was collapsed and user clicked another menu
      if (collapsed) {
        setCollapsed(false);
        setActivePanelGroup(null);
      }
      
      if (group.children) {
        toggleGroup(group.id);
      } else {
        group.screen && onNavigate(group.screen);
      }
    }
  };

  const handleSubmenuClick = (submenuId: string, targetScreen: AdminScreen) => {
    setActiveSubmenu(submenuId);
    localStorage.setItem("sipro_active_submenu", submenuId);

    let defaultSubItem = "";
    if (submenuId === "pengajuan-dana") {
      defaultSubItem = "park-document";
    } else if (submenuId === "pengadaan") {
      defaultSubItem = "rup-task-approval";
    } else if (submenuId === "pengujian") {
      defaultSubItem = "kontrak-under-500";
    } else if (submenuId === "pembayaran") {
      defaultSubItem = "pay-outsource";
    }

    if (defaultSubItem) {
      setActiveSubItem(defaultSubItem);
      localStorage.setItem("sipro_active_sub_item", defaultSubItem);
    }

    onNavigate(targetScreen);
  };

  const handleSubItemClick = (itemId: string, targetScreen: AdminScreen) => {
    setActiveSubItem(itemId);
    localStorage.setItem("sipro_active_sub_item", itemId);
    
    // Sync specific section inside verifikasi pages
    if (targetScreen === "verif-pengadaan") {
      const sectionMap: Record<string, string> = {
        "rup": "rup", "npp": "npp", "sp3": "sp3", "pbj": "pbj", "contract": "contract",
        "jamlak": "contract", "warehouse": "contract", "vendor": "contract",
        "harga": "contract", "adendum": "contract", "evaluasi": "contract"
      };
      const prefix = itemId.split("-")[0];
      const sectionId = sectionMap[prefix] || "rup";
      localStorage.setItem("sipro_active_verif_section", sectionId);
    } else if (targetScreen === "verif-pembayaran") {
      const sectionId = itemId.replace("pay-", "").replace("rep-", "");
      localStorage.setItem("sipro_active_verif_section", sectionId);
    }
    
    onNavigate(targetScreen);
  };

  const isActive = (s?: AdminScreen) => s === screen;
  const isGroupActive = (group: NavGroup) => {
    if (group.screen) return isActive(group.screen);
    if (group.id === "verifikasi") {
      return ["verif-pengajuan-dana", "verif-pengadaan", "verif-pengujian", "verif-pembayaran"].includes(screen);
    }
    return group.children?.some(c => isActive(c.id)) ?? false;
  };

  return (
    <div
      className="relative h-full transition-all duration-200 z-30"
      style={{ width: collapsed ? "60px" : "240px" }}
    >
      {/* Backdrop (closes panel when clicking outside) */}
      {collapsed && activePanelGroup && (
        <div
          className="fixed inset-0 z-40 bg-black/5"
          onClick={() => setActivePanelGroup(null)}
        />
      )}

      {/* Main Sidebar Body */}
      <div
        className="flex flex-col h-full rounded-r-3xl shadow-[0px_0px_6px_rgba(0,0,0,0.22)] overflow-hidden relative z-50"
        style={{ background: "linear-gradient(180deg, #e6251c 0%, #b50800 100%)" }}
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

            return (
              <div key={group.id}>
                <button
                  onClick={() => handleGroupClick(group)}
                  title={collapsed ? group.label : undefined}
                  className={`flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg transition-all text-left ${
                    groupActive || (collapsed && activePanelGroup === group.id) ? "" : "hover:bg-white/10"
                  }`}
                  style={groupActive || (collapsed && activePanelGroup === group.id) ? { background: "rgba(255,255,255,0.18)" } : {}}
                >
                  <span className="text-white/75 shrink-0">{group.icon}</span>
                  {!collapsed && (
                    <>
                      <span className={`flex-1 text-[12.5px] truncate ${groupActive ? "text-white font-semibold" : "text-white/70"}`}>
                        {group.label}
                      </span>
                      {group.children && (
                        <span className="text-white/40 shrink-0">
                          {isOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                        </span>
                      )}
                    </>
                  )}
                </button>
                {!collapsed && isOpen && group.children && (
                  <div className="ml-4 mt-0.5 flex flex-col gap-0.5 pl-2.5 border-l border-white/15">
                    {group.children.map(child => (
                      <button
                        key={child.id}
                        onClick={() => {
                          onNavigate(child.id);
                        }}
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
          onClick={() => {
            setActivePanelGroup(null);
            onToggleCollapse();
          }}
          className="flex items-center justify-center h-8 mx-2 mb-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      {/* Collapsed Mode Floating Secondary Panel (Navy Blue #252271 Theme) */}
      {collapsed && activePanelGroup && (
        <div
          className="absolute left-[64px] top-2 bottom-2 w-[260px] bg-[#252271] shadow-[4px_0px_16px_rgba(0,0,0,0.25)] rounded-2xl border border-white/10 z-55 flex flex-col overflow-hidden transition-all duration-200"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {/* Panel Header */}
          <div className="p-3.5 border-b border-white/10 flex items-center justify-between shrink-0 bg-[#1e1b5b]">
            <h3 className="font-bold text-white text-[13px] tracking-wide">
              {activePanelGroup === "verifikasi" && "Verifikasi"}
              {activePanelGroup === "user-mgmt" && "Manajemen User"}
            </h3>
            <button
              onClick={() => setActivePanelGroup(null)}
              className="text-[10px] bg-white/10 text-gray-200 hover:bg-white/20 hover:text-white px-2 py-0.5 rounded font-semibold transition-colors"
            >
              Tutup
            </button>
          </div>

          {/* Panel Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
            {activePanelGroup === "verifikasi" && (
              <>
                {/* 4 MAIN CATEGORIES WITH RELEVANT LOGOS */}

                {/* 1. Pengajuan Dana */}
                <div className="flex flex-col gap-0.5">
                  <button
                    onClick={() => handleSubmenuClick("pengajuan-dana", "verif-pengajuan-dana")}
                    className={`flex items-center gap-2 w-full px-2.5 py-1.5 rounded-xl transition-all text-left ${
                      activeSubmenu === "pengajuan-dana"
                        ? "bg-white shadow-[0px_2px_6px_rgba(0,0,0,0.15)] text-[#252271] font-semibold"
                        : "text-gray-200 hover:bg-white/5 hover:text-white font-medium"
                    }`}
                  >
                    <Folder size={14} className={activeSubmenu === "pengajuan-dana" ? "text-[#e6251c]" : "text-gray-300"} />
                    <span className="text-[12px]">Pengajuan Dana</span>
                  </button>

                  {activeSubmenu === "pengajuan-dana" && (
                    <div className="ml-3.5 mt-2 border-l border-white/20 pl-3.5 py-1.5 flex flex-col gap-2">
                      <button
                        onClick={() => handleSubItemClick("park-document", "verif-pengajuan-dana")}
                        className={`text-left text-[11.5px] py-1 transition-all ${
                          activeSubItem === "park-document"
                            ? "text-red-400 font-bold"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        Park Document
                      </button>
                      <button
                        onClick={() => handleSubItemClick("purchase-requisition", "verif-pengajuan-dana")}
                        className={`text-left text-[11.5px] py-1 transition-all ${
                          activeSubItem === "purchase-requisition"
                            ? "text-red-400 font-bold"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        Purchase Requisition
                      </button>
                    </div>
                  )}
                </div>

                {/* 2. Pengadaan */}
                <div className="flex flex-col gap-0.5">
                  <button
                    onClick={() => handleSubmenuClick("pengadaan", "verif-pengadaan")}
                    className={`flex items-center gap-2 w-full px-2.5 py-1.5 rounded-xl transition-all text-left ${
                      activeSubmenu === "pengadaan"
                        ? "bg-white shadow-[0px_2px_6px_rgba(0,0,0,0.15)] text-[#252271] font-semibold"
                        : "text-gray-200 hover:bg-white/5 hover:text-white font-medium"
                    }`}
                  >
                    <Package size={14} className={activeSubmenu === "pengadaan" ? "text-[#e6251c]" : "text-gray-300"} />
                    <span className="text-[12px]">Pengadaan</span>
                  </button>

                  {activeSubmenu === "pengadaan" && (
                    <div className="ml-3.5 mt-2 border-l border-white/20 pl-3.5 py-1.5 flex flex-col gap-2.5">
                      {[
                        { id: "rup", label: "RUP", items: ["Task Approval", "List Timeline", "Upload Timeline Final"] },
                        { id: "npp", label: "NPP", items: ["List NPP"] },
                        { id: "sp3", label: "SP3", items: ["Task Approval", "List Sp3", "Upload SP3 Final"] },
                        { id: "pbj", label: "PBJ", items: ["Task Approval PBJ", "List PBJ", "Memo Internal"] },
                        { id: "contract", label: "Contract", items: ["Task Approval Contract", "List Contract"] },
                        { id: "jamlak", label: "Jaminan Pelaksanaan", items: ["List Jamlak"] },
                        { id: "warehouse", label: "Warehouse", items: ["Card", "Spare Part", "Waste"] },
                        { id: "vendor", label: "Vendor Management", items: ["List Vendor", "Vendor BlackList"] },
                        { id: "harga", label: "Harga Satuan", items: ["List Harga Satuan"] },
                        { id: "adendum", label: "Adendum Kontrak", items: ["List Adendum"] },
                        { id: "evaluasi", label: "Evaluasi Vendor", items: ["List Evaluasi Vendor"] },
                      ].map(sub => (
                        <div className="flex flex-col gap-0.5" key={sub.id}>
                          <button
                            onClick={() => toggleSubsection(sub.id)}
                            className="flex items-center justify-between w-full text-left text-white/90 hover:text-white font-semibold text-[11.5px]"
                          >
                            <span>{sub.label}</span>
                            <ChevronDown size={10} className={`text-gray-300 transition-transform ${expandedSubsections.has(sub.id) ? "" : "-rotate-90"}`} />
                          </button>
                          {expandedSubsections.has(sub.id) && (
                            <div className="border-l border-white/10 ml-2 pl-3 py-0.5 flex flex-col gap-1.5">
                              {sub.items.map(item => {
                                const itemId = `${sub.id}-${item.toLowerCase().replace(/ /g, "-")}`;
                                return (
                                  <button
                                    key={item}
                                    onClick={() => handleSubItemClick(itemId, "verif-pengadaan")}
                                    className={`text-left text-[11px] transition-all ${
                                      activeSubItem === itemId ? "text-red-400 font-bold" : "text-gray-300 hover:text-white"
                                    }`}
                                  >
                                    {item}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Direct Items under Pengadaan */}
                      {["TKDN", "Monitoring KPI", "Monitoring MPPL"].map(direct => {
                        const directId = direct.toLowerCase().replace(/ /g, "-");
                        return (
                          <button
                            key={direct}
                            onClick={() => handleSubItemClick(directId, "verif-pengadaan")}
                            className={`text-left text-[11.5px] transition-all ${
                              activeSubItem === directId ? "text-red-400 font-bold" : "text-white/80 hover:text-white font-semibold"
                            }`}
                          >
                            {direct}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 3. Pengujian (Relevant Goods/Product Testing Icon: PackageCheck) */}
                <div className="flex flex-col gap-0.5">
                  <button
                    onClick={() => handleSubmenuClick("pengujian", "verif-pengujian")}
                    className={`flex items-center gap-2 w-full px-2.5 py-1.5 rounded-xl transition-all text-left ${
                      activeSubmenu === "pengujian"
                        ? "bg-white shadow-[0px_2px_6px_rgba(0,0,0,0.15)] text-[#252271] font-semibold"
                        : "text-gray-200 hover:bg-white/5 hover:text-white font-medium"
                    }`}
                  >
                    <PackageCheck size={14} className={activeSubmenu === "pengujian" ? "text-[#e6251c]" : "text-gray-300"} />
                    <span className="text-[12px]">Pengujian</span>
                  </button>

                  {activeSubmenu === "pengujian" && (
                    <div className="ml-3.5 mt-2 border-l border-white/20 pl-3.5 py-1.5 flex flex-col gap-2.5">
                      {/* Kontrak Subsection */}
                      <div className="flex flex-col gap-0.5">
                        <button
                          onClick={() => toggleSubsection("kontrak")}
                          className="flex items-center justify-between w-full text-left text-white/90 hover:text-white font-semibold text-[11.5px]"
                        >
                          <span>Kontrak</span>
                          <ChevronDown size={10} className={`text-gray-300 transition-transform ${expandedSubsections.has("kontrak") ? "" : "-rotate-90"}`} />
                        </button>
                        {expandedSubsections.has("kontrak") && (
                          <div className="border-l border-white/10 ml-2 pl-3 py-0.5 flex flex-col gap-1.5">
                            <button
                              onClick={() => handleSubItemClick("kontrak-under-500", "verif-pengujian")}
                              className={`text-left text-[11px] py-0.5 transition-all ${
                                activeSubItem === "kontrak-under-500" ? "text-red-400 font-bold" : "text-gray-300 hover:text-white"
                              }`}
                            >
                              List Kontrak &lt;500jt
                            </button>
                            <button
                              onClick={() => handleSubItemClick("kontrak-over-500", "verif-pengujian")}
                              className={`text-left text-[11px] py-0.5 transition-all ${
                                activeSubItem === "kontrak-over-500" ? "text-red-400 font-bold" : "text-gray-300 hover:text-white"
                              }`}
                            >
                              List Kontrak &gt;500jt
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Pengujian Subsection */}
                      <div className="flex flex-col gap-0.5">
                        <button
                          onClick={() => toggleSubsection("pengujian-section")}
                          className="flex items-center justify-between w-full text-left text-white/90 hover:text-white font-semibold text-[11.5px]"
                        >
                          <span>Pengujian</span>
                          <ChevronDown size={10} className={`text-gray-300 transition-transform ${expandedSubsections.has("pengujian-section") ? "" : "-rotate-90"}`} />
                        </button>
                        {expandedSubsections.has("pengujian-section") && (
                          <div className="border-l border-white/10 ml-2 pl-3 py-0.5 flex flex-col gap-1.5">
                            <button
                              onClick={() => handleSubItemClick("pengujian-list-request", "verif-pengujian")}
                              className={`text-left text-[11px] py-0.5 transition-all ${
                                activeSubItem === "pengujian-list-request" ? "text-red-400 font-bold" : "text-gray-300 hover:text-white"
                              }`}
                            >
                              List Request Pengujian
                            </button>
                            <button
                              onClick={() => handleSubItemClick("pengujian-list", "verif-pengujian")}
                              className={`text-left text-[11px] py-0.5 transition-all ${
                                activeSubItem === "pengujian-list" ? "text-red-400 font-bold" : "text-gray-300 hover:text-white"
                              }`}
                            >
                              List Pengujian
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* 4. Pembayaran */}
                <div className="flex flex-col gap-0.5">
                  <button
                    onClick={() => handleSubmenuClick("pembayaran", "verif-pembayaran")}
                    className={`flex items-center gap-2 w-full px-2.5 py-1.5 rounded-xl transition-all text-left ${
                      activeSubmenu === "pembayaran"
                        ? "bg-white shadow-[0px_2px_6px_rgba(0,0,0,0.15)] text-[#252271] font-semibold"
                        : "text-gray-200 hover:bg-white/5 hover:text-white font-medium"
                    }`}
                  >
                    <CreditCard size={14} className={activeSubmenu === "pembayaran" ? "text-[#e6251c]" : "text-gray-300"} />
                    <span className="text-[12px]">Pembayaran</span>
                  </button>

                  {activeSubmenu === "pembayaran" && (
                    <div className="ml-3.5 mt-2 border-l border-white/20 pl-3.5 py-1.5 flex flex-col gap-2.5">
                      {/* Payment Approve */}
                      <div className="flex flex-col gap-0.5">
                        <button
                          onClick={() => toggleSubsection("payment-approve")}
                          className="flex items-center justify-between w-full text-left text-white/90 hover:text-white font-semibold text-[11.5px]"
                        >
                          <span>Payment Approve</span>
                          <ChevronDown size={12} className={`text-gray-300 transition-transform ${expandedSubsections.has("payment-approve") ? "" : "-rotate-90"}`} />
                        </button>
                        {expandedSubsections.has("payment-approve") && (
                          <div className="border-l border-white/10 ml-2 pl-3 py-0.5 flex flex-col gap-1.5">
                            {["Outsource", "Non-Outsource", "UMD"].map(item => (
                              <button
                                key={item}
                                onClick={() => handleSubItemClick(`pay-${item.toLowerCase()}`, "verif-pembayaran")}
                                className={`text-left text-[11px] py-0.5 transition-all ${
                                  activeSubItem === `pay-${item.toLowerCase()}` ? "text-red-400 font-bold" : "text-gray-300 hover:text-white"
                                }`}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Reports */}
                      <div className="flex flex-col gap-0.5">
                        <button
                          onClick={() => toggleSubsection("reports")}
                          className="flex items-center justify-between w-full text-left text-white/90 hover:text-white font-semibold text-[11.5px]"
                        >
                          <span>Reports</span>
                          <ChevronDown size={12} className={`text-gray-300 transition-transform ${expandedSubsections.has("reports") ? "" : "-rotate-90"}`} />
                        </button>
                        {expandedSubsections.has("reports") && (
                          <div className="border-l border-white/10 ml-2 pl-3 py-0.5 flex flex-col gap-1.5">
                            {["Daily Reports", "Weekly Reports"].map(item => (
                              <button
                                key={item}
                                onClick={() => handleSubItemClick(`rep-${item.toLowerCase().replace(/ /g, "-")}`, "verif-pembayaran")}
                                className={`text-left text-[11px] py-0.5 transition-all ${
                                  activeSubItem === `rep-${item.toLowerCase().replace(/ /g, "-")}` ? "text-red-400 font-bold" : "text-gray-300 hover:text-white"
                                }`}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {activePanelGroup === "user-mgmt" && (
              <>
                <button
                  onClick={() => handleSubItemClick("user-management", "user-management")}
                  className="text-left text-[12px] px-2.5 py-1.5 rounded-xl transition-all text-gray-200 hover:bg-white/5 hover:text-white font-medium"
                >
                  Manajemen User
                </button>
                <button
                  onClick={() => handleSubItemClick("role-management", "role-management")}
                  className="text-left text-[12px] px-2.5 py-1.5 rounded-xl transition-all text-gray-200 hover:bg-white/5 hover:text-white font-medium"
                >
                  Manajemen Role
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
