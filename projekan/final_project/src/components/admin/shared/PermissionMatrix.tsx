import { useState } from "react";
import type { RolePermissions, AccessLevel } from "@/types";

export type SubPerm = {
  id: string;
  name: string;
  desc: string;
  view: boolean;
  action: boolean;
};

export type PermGroup = {
  id: string;
  name: string;
  checked: boolean;
  expanded: boolean;
  selectAllView: boolean;
  selectAllAction: boolean;
  subPerms: SubPerm[];
};

export const DEFAULT_HAK_AKSES_GROUPS: PermGroup[] = [
  {
    id: "pengajuan-dana",
    name: "Pengajuan Dana",
    checked: true,
    expanded: true,
    selectAllView: true,
    selectAllAction: true,
    subPerms: [
      { id: "pd-dashboard", name: "Dashboard", desc: "(Melihat ringkasan / summary Pengajuan Dana)", view: true, action: true },
      { id: "pd-verifikasi", name: "Verifikasi", desc: "(Park Document, Purchase Requisition)", view: true, action: true },
    ],
  },
  {
    id: "pengadaan",
    name: "Pengadaan",
    checked: false,
    expanded: false,
    selectAllView: false,
    selectAllAction: false,
    subPerms: [
      { id: "pg-dashboard", name: "Dashboard", desc: "(Realisasi Program Monitoring, RUP Monitoring, PBJ Monitoring, Contract Monitoring, RAB Monitoring, Vendor Monitoring, Import Inklaring Monitoring, Warehouse Monitoring, Monitoring PBJ & Kontrak, Realisasi Triwulan, Monitoring MPPL, Monitoring Investasi)", view: false, action: false },
      { id: "pg-m-user", name: "Management User", desc: "(List User, Create User)", view: false, action: false },
      { id: "pg-m-role", name: "Management Roles", desc: "(List Roles, Create Roles)", view: false, action: false },
      { id: "pg-rup", name: "RUP", desc: "(Task Approval RUP, Timeline - List & Detail, Timeline - Create, Upload Timeline Signed, Penyesuaian RUP)", view: false, action: false },
      { id: "pg-npp", name: "NPP", desc: "(List NPP, Create NPP)", view: false, action: false },
      { id: "pg-memo-pengadaan", name: "Memo Permohonan Pengadaan", desc: "(List Memo Permohonan Pengadaan, Tambah Memo Permohonan Pengadaan)", view: false, action: false },
      { id: "pg-sp3", name: "SP3", desc: "(Task Approval SP3, List SP3, Upload SP3 Signed)", view: false, action: false },
      { id: "pg-pbj", name: "PBJ", desc: "(Task Approval PBJ, Drafting RKS, Pemasukan Calon Peserta Tender, Proses Aanwidzing, Pemasukan Dokumen Penawaran, Evaluasi Penawaran, Undangan KKN, Kegiatan KKN, BA Hasil Pelelangan, Usulan & Penetapan Calon Pemenang, Pengumuman Pemenang Tender, SPK dan Pengantar Jamlak, List PBJ / Print Dokumen SPK, Memo Internal)", view: false, action: false },
      { id: "pg-contract", name: "Contract", desc: "(Task Approval Contract / List Kontrak, Draft Kontrak, Performance Bond, Verifikasi Jaminan Pelaksanaan, Review Legal, Approval Logistic, Approval User, Approval Legal, Tanda Tangan Vendor, Tanda Tangan KCI, Summary Kontrak, List Contract / View)", view: false, action: false },
      { id: "pg-jamlak", name: "Jaminan Pelaksanaan", desc: "(List Jamlak, View Jamlak, Edit / Update Status Jamlak)", view: false, action: false },
      { id: "pg-warehouse", name: "Warehouse", desc: "(List Card & Import Excel, Spare Part - List & Import, Waste - List & Import, Transaksi Material)", view: false, action: false },
      { id: "pg-vendor", name: "Vendor Management", desc: "(List Vendor, Add Vendor, Black List Vendor)", view: false, action: false },
      { id: "pg-harga-satuan", name: "Harga Satuan", desc: "(List Harga Satuan, Add / Import / Template Harga Satuan, Edit / Delete Harga Satuan)", view: false, action: false },
      { id: "pg-bank", name: "Master Bank", desc: "(List Bank, View / Edit Bank)", view: false, action: false },
      { id: "pg-inklaring", name: "Import Inklaring", desc: "(List Inklaring, Import Excel Inklaring)", view: false, action: false },
      { id: "pg-adendum", name: "Adendum Kontrak", desc: "(Dashboard Amandemen Kontrak, List Amandemen Kontrak, Request Amandemen Kontrak)", view: false, action: false },
      { id: "pg-evaluasi-vendor", name: "Evaluasi Vendor", desc: "(List Evaluasi Vendor, Tambah Evaluasi Vendor)", view: false, action: false },
      { id: "pg-tkdn", name: "TKDN (Tingkat Komponen Dalam Negeri)", desc: "(List TKDN, Tambah TKDN)", view: false, action: false },
      { id: "pg-kpi", name: "Monitoring KPI", desc: "(List Monitoring KPI, Tambah KPI Baru)", view: false, action: false },
      { id: "pg-mppl", name: "Monitoring MPPL", desc: "(List MPPL, Edit MPPL)", view: false, action: false },
      { id: "pg-doc-center", name: "Document Center", desc: "(List Document Center, Detail Document Center)", view: false, action: false },
      { id: "pg-hps", name: "Harga Perkiraan Sendiri (HPS)", desc: "(List HPS)", view: false, action: false },
    ],
  },
  {
    id: "pengujian",
    name: "Pengujian",
    checked: false,
    expanded: false,
    selectAllView: false,
    selectAllAction: false,
    subPerms: [
      { id: "pj-m-user", name: "Management Users", desc: "(List User, Add Users)", view: false, action: false },
      { id: "pj-list-kontrak", name: "List Kontrak", desc: "(Dashboard Kontrak, List Kontrak < 500jt, List Kontrak > 500jt)", view: false, action: false },
      { id: "pj-add-kontrak", name: "Add Kontrak", desc: "(Tambah Kontrak, Upload Kontrak)", view: false, action: false },
      { id: "pj-pengajuan-pengujian", name: "Pengajuan Pengujian", desc: "(Tambah Request Pengujian, List Request Pengujian)", view: false, action: false },
      { id: "pj-list-pengujian", name: "List Pengujian", desc: "(List Pengujian)", view: false, action: false },
      { id: "pj-review-pengujian", name: "Review Pengajuan Pengujian", desc: "(Dashboard Pengujian, List Pengujian (Review), Review Detail Pengujian)", view: false, action: false },
      { id: "pj-assign-task", name: "Assign Task Pengujian", desc: "(List Task Assignment Pengujian, Add Assign Pengujian)", view: false, action: false },
      { id: "pj-checklist", name: "Checklist Pengujian", desc: "(Lihat Jadwal Pengujian, Checklist Pengujian)", view: false, action: false },
      { id: "pj-history", name: "History Pengujian", desc: "(History Pengujian)", view: false, action: false },
      { id: "pj-menu-report", name: "Menu Report", desc: "(Report Pengujian)", view: false, action: false },
      { id: "pj-dashboard-tc", name: "Dashboard Testing Committee", desc: "(Dashboard Testing Committee)", view: false, action: false },
      { id: "pj-generate-bahp", name: "Generate BAHP", desc: "(List Pengujian (Cetak))", view: false, action: false },
      { id: "pj-m-user-detail", name: "Management User Detail", desc: "(List Users, Add Users (Level Manager Divisi))", view: false, action: false },
    ],
  },
  {
    id: "pembayaran",
    name: "Pembayaran",
    checked: false,
    expanded: false,
    selectAllView: false,
    selectAllAction: false,
    subPerms: [
      { id: "byr-dashboard", name: "Dashboard", desc: "(Payment Plan Recapitulation, Outsourcing, Non Outsourcing)", view: false, action: false },
      { id: "byr-payment-approve", name: "Menu Payment Approve", desc: "(Outsource - List & Terima Permohonan, Outsource - Finance Verification, Outsource - Approval Sirkulir/Siap Bayar/Lunas, Non Outsource - List & Terima Permohonan, Non Outsource - Finance Verification, Non Outsource - Approval Sirkulir/Siap Bayar/Lunas, UMD - List & Tracking, UMD - Submission Form)", view: false, action: false },
      { id: "byr-reports", name: "Menu Reports", desc: "(Daily Reports, Weekly Reports)", view: false, action: false },
    ],
  },
];

const SUB_PERMISSION_MODULE: Record<string, keyof RolePermissions> = {
  "pd-dashboard": "dashboard",
  "pd-verifikasi": "pengajuanDana",
  "pg-m-user": "userManagement",
  "pg-m-role": "roleManagement",
  "pg-vendor": "masterData",
  "pg-harga-satuan": "masterData",
  "pg-bank": "masterData",
  "pg-doc-center": "templateDokumen",
  "pj-m-user": "userManagement",
  "pj-m-user-detail": "userManagement",
};

function moduleForSubPermission(subId: string): keyof RolePermissions {
  if (SUB_PERMISSION_MODULE[subId]) return SUB_PERMISSION_MODULE[subId];
  if (subId.startsWith("pg-")) return "pengadaan";
  if (subId.startsWith("pj-")) return "pengujian";
  if (subId.startsWith("byr-")) return "pembayaran";
  return "pengajuanDana";
}

export function permissionGroupsFromRole(permissions: RolePermissions): PermGroup[] {
  return DEFAULT_HAK_AKSES_GROUPS.map((group) => {
    const subPerms = group.subPerms.map((sub) => {
      const level = permissions[moduleForSubPermission(sub.id)] || "no-access";
      return { ...sub, view: level === "viewer" || level === "editor", action: level === "editor" };
    });
    return {
      ...group,
      checked: subPerms.some((sub) => sub.view || sub.action),
      selectAllView: subPerms.every((sub) => sub.view),
      selectAllAction: subPerms.every((sub) => sub.action),
      subPerms,
    };
  });
}

export function rolePermissionsFromGroups(groups: PermGroup[], initial: RolePermissions): RolePermissions {
  const next = { ...initial };
  const levels: Partial<RolePermissions> = {};
  groups.forEach((group) => group.subPerms.forEach((sub) => {
    const module = moduleForSubPermission(sub.id);
    const current = levels[module] || "no-access";
    if (sub.view && sub.action) levels[module] = "editor";
    else if (sub.view && current !== "editor") levels[module] = "viewer";
  }));

  Object.keys(levels).forEach((module) => {
    next[module as keyof RolePermissions] = levels[module as keyof RolePermissions] as AccessLevel;
  });
  const managedModules = new Set(groups.flatMap((group) => group.subPerms.map((sub) => moduleForSubPermission(sub.id))));
  managedModules.forEach((module) => {
    if (!levels[module]) next[module] = "no-access";
  });
  return next;
}

export function RedCheckbox({ checked, onClick }: { checked: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`size-[18px] rounded-[5px] shrink-0 flex items-center justify-center transition-all duration-150 cursor-pointer
        ${checked ? "bg-[#cc0000]" : "bg-transparent border border-[#cc0000]"}`}
    >
      {checked && (
        <svg fill="none" height="10" viewBox="0 0 10 10" width="10">
          <path d="M1.66667 5L4 7.91667L8.75 2.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </svg>
      )}
    </button>
  );
}

export function Toggle({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative h-[22px] w-[40px] rounded-full shrink-0 transition-colors duration-200 cursor-pointer ${on ? "bg-[#252271]" : "bg-[#5d6596]"}`}
    >
      <span
        className={`absolute top-[3px] size-[16px] rounded-full bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] transition-all duration-200
          ${on ? "left-[21px]" : "left-[3px]"}`}
      />
    </button>
  );
}

interface PermissionMatrixProps {
  groups?: PermGroup[];
  onGroupsChange?: (groups: PermGroup[]) => void;
  // Compatibility props if passed
  permissions?: RolePermissions;
  onChange?: (key: keyof RolePermissions, level: AccessLevel) => void;
  readonly?: boolean;
}

export function PermissionMatrix({ groups: externalGroups, onGroupsChange }: PermissionMatrixProps) {
  const [internalGroups, setInternalGroups] = useState<PermGroup[]>(DEFAULT_HAK_AKSES_GROUPS);

  const groups = externalGroups || internalGroups;
  const setGroups = (updater: (prev: PermGroup[]) => PermGroup[]) => {
    const next = updater(groups);
    if (onGroupsChange) {
      onGroupsChange(next);
    } else {
      setInternalGroups(next);
    }
  };

  function toggleGroupCheck(gid: string) {
    setGroups((prev) =>
      prev.map((g) => {
        if (g.id !== gid) return g;
        const nowChecked = !g.checked;
        return {
          ...g,
          checked: nowChecked,
          selectAllView: nowChecked,
          selectAllAction: nowChecked,
          subPerms: g.subPerms.map((s) => ({ ...s, view: nowChecked, action: nowChecked })),
        };
      })
    );
  }

  function toggleGroupExpand(gid: string) {
    setGroups((prev) => prev.map((g) => (g.id === gid ? { ...g, expanded: !g.expanded } : g)));
  }

  function toggleSelectAll(gid: string, col: "view" | "action") {
    setGroups((prev) =>
      prev.map((g) => {
        if (g.id !== gid) return g;
        const nowOn = col === "view" ? !g.selectAllView : !g.selectAllAction;
        const subPerms = g.subPerms.map((s) => ({
          ...s,
          [col]: nowOn,
          ...(col === "action" && nowOn ? { view: true } : {}),
          ...(col === "view" && !nowOn ? { action: false } : {}),
        }));
        const anyChecked = subPerms.some((s) => s.view || s.action);
        return {
          ...g,
          [`selectAll${col.charAt(0).toUpperCase() + col.slice(1)}`]: nowOn,
          checked: anyChecked,
          subPerms,
        };
      })
    );
  }

  function toggleSubPerm(gid: string, sid: string, col: "view" | "action") {
    setGroups((prev) =>
      prev.map((g) => {
        if (g.id !== gid) return g;
        const subPerms = g.subPerms.map((s) => (s.id === sid ? {
          ...s,
          [col]: !s[col],
          ...(col === "action" && !s.action ? { view: true } : {}),
          ...(col === "view" && s.view ? { action: false } : {}),
        } : s));
        const allView = subPerms.every((s) => s.view);
        const allAction = subPerms.every((s) => s.action);
        const anyChecked = subPerms.some((s) => s.view || s.action);
        return { ...g, subPerms, selectAllView: allView, selectAllAction: allAction, checked: anyChecked };
      })
    );
  }

  const activeCount = groups.reduce(
    (acc, g) => acc + g.subPerms.reduce((a, s) => a + (s.view ? 1 : 0) + (s.action ? 1 : 0), 0),
    0
  );

  return (
    <div className="bg-white rounded-[24px] shadow-[0px_0px_10.9px_rgba(0,0,0,0.09)] overflow-hidden flex flex-col border border-gray-100">
      {/* Card Header */}
      <div className="bg-[#252271] px-[28px] py-[13px] flex items-center justify-between">
        <span className="text-white text-[13px] font-bold">Hak Akses</span>
        <span className="text-[rgba(255,255,255,0.7)] text-[11px] font-semibold">{activeCount} izin aktif</span>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col">
        {groups.map((group) => (
          <div key={group.id} className="border-b border-[#f0f0f0] last:border-0">
            {/* Group Header Row */}
            <div className="bg-white grid px-[28px] py-[12px] items-center" style={{ gridTemplateColumns: "1fr 72px 72px" }}>
              <div className="flex items-center gap-[10px] self-center">
                <RedCheckbox checked={group.checked} onClick={() => toggleGroupCheck(group.id)} />
                <button
                  type="button"
                  onClick={() => toggleGroupExpand(group.id)}
                  className={`size-[22px] rounded-[6px] shrink-0 flex items-center justify-center transition-colors duration-150 cursor-pointer ${
                    group.expanded ? "bg-[#252271]" : "bg-[#f0f0f0] border border-[#d3d3d3]"
                  }`}
                >
                  <svg fill="none" height="12" viewBox="0 0 12 12" width="12">
                    {group.expanded ? (
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    ) : (
                      <path d="M4.5 9L7.5 6L4.5 3" stroke="#252271" strokeLinecap="round" strokeLinejoin="round" />
                    )}
                  </svg>
                </button>
                <span className="text-[#252271] text-[13.5px] font-bold">{group.name}</span>
              </div>
              <div className="flex items-center justify-center self-center">
                <span className="text-[#252271] text-[11.5px] font-bold">View</span>
              </div>
              <div className="flex items-center justify-center self-center">
                <span className="text-[#252271] text-[11.5px] font-bold">Action</span>
              </div>
            </div>

            {/* Expanded Content */}
            {group.expanded && (
              <div className="bg-[#f8f8f8] flex flex-col">
                {/* Select All Row */}
                <div
                  className="grid px-[28px] pb-[8px] pt-[8px] border-b border-[#e8e8e8] items-center"
                  style={{ gridTemplateColumns: "1fr 72px 72px", backgroundColor: "rgba(37,34,113,0.04)" }}
                >
                  <div className="flex items-center self-center pl-[56px]">
                    <span className="text-[10.5px] font-semibold text-[rgba(37,34,113,0.6)] tracking-[0.5px] uppercase">PILIH SEMUA</span>
                  </div>
                  <div className="flex items-center justify-center self-center">
                    <Toggle on={group.selectAllView} onClick={() => toggleSelectAll(group.id, "view")} />
                  </div>
                  <div className="flex items-center justify-center self-center">
                    <Toggle on={group.selectAllAction} onClick={() => toggleSelectAll(group.id, "action")} />
                  </div>
                </div>

                {/* Sub Perm Rows */}
                {group.subPerms.map((sub, idx) => (
                  <div
                    key={sub.id}
                    className="grid px-[28px] py-[11px] border-b border-[#efefef] last:border-0 items-center hover:bg-[#f0f2f5] transition-colors"
                    style={{ gridTemplateColumns: "1fr 72px 72px", backgroundColor: idx % 2 === 1 ? "rgba(248,248,248,0.8)" : "white" }}
                  >
                    <div className="flex flex-col self-center pl-[56px] pr-[20px]">
                      <span className="text-[#252271] text-[12.5px] font-bold leading-[17px]">{sub.name}</span>
                      <span className="text-[#cc0000] text-[10.5px] leading-[15px] font-medium mt-0.5">{sub.desc}</span>
                    </div>
                    <div className="flex items-center justify-center self-center">
                      <RedCheckbox checked={sub.view} onClick={() => toggleSubPerm(group.id, sub.id, "view")} />
                    </div>
                    <div className="flex items-center justify-center self-center">
                      <RedCheckbox checked={sub.action} onClick={() => toggleSubPerm(group.id, sub.id, "action")} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
