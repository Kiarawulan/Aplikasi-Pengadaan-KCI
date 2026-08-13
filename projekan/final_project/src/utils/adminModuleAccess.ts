export type AdminBusinessModule = "umum" | "pengajuan-dana" | "pengadaan" | "pengujian" | "pembayaran";

const ALL_MODULES: AdminBusinessModule[] = ["umum", "pengajuan-dana", "pengadaan", "pengujian", "pembayaran"];

const ROLE_MODULES: Record<string, AdminBusinessModule[]> = {
  "role-admin": ALL_MODULES,
  "role-admin-anggaran": ["umum", "pengajuan-dana"],
  "role-admin-pengadaan": ["umum", "pengadaan"],
  "role-admin-logistik": ["umum", "pengadaan"],
  "role-admin-penguji": ["umum", "pengujian"],
  "role-admin-keuangan": ["umum", "pembayaran"],
};

export function getAdminBusinessModules(user?: { roleId?: string; role_id?: string; name?: string; departemen?: string } | null): AdminBusinessModule[] {
  const roleId = user?.roleId || user?.role_id || "";
  if (ROLE_MODULES[roleId]) return ROLE_MODULES[roleId];

  const hint = `${user?.name || ""} ${user?.departemen || ""}`.toLowerCase();
  if (hint.includes("anggaran")) return ["umum", "pengajuan-dana"];
  if (hint.includes("penguji") || hint.includes("pengujian")) return ["umum", "pengujian"];
  if (hint.includes("keuangan") || hint.includes("finance")) return ["umum", "pembayaran"];
  if (hint.includes("pengadaan") || hint.includes("logistik")) return ["umum", "pengadaan"];
  return ALL_MODULES;
}

export function isSuperAdminRole(user?: { roleId?: string; role_id?: string } | null): boolean {
  return (user?.roleId || user?.role_id) === "role-admin";
}
