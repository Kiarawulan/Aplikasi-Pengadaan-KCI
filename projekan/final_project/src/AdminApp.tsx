import { useState } from "react";
import type { AdminScreen } from "./types";
import { AdminSidebar } from "./components/admin/AdminSidebar";
import { AdminDashboardScreen } from "./pages/admin/AdminDashboardScreen";
import { UserManagementScreen } from "./pages/admin/UserManagementScreen";
import { RoleManagementScreen } from "./pages/admin/RoleManagementScreen";
import { PengajuanDanaVerifScreen } from "./pages/admin/verifikasi/PengajuanDanaVerifScreen";
import { PengadaanVerifScreen } from "./pages/admin/verifikasi/PengadaanVerifScreen";
import { PengujianVerifScreen } from "./pages/admin/verifikasi/PengujianVerifScreen";
import { PembayaranVerifScreen } from "./pages/admin/verifikasi/PembayaranVerifScreen";
import { TemplateDokumenAdminScreen } from "./pages/admin/TemplateDokumenAdminScreen";
import { MasterDataScreen } from "./pages/admin/MasterDataScreen";
import { useAuth } from "./store/authStore";

export function AdminApp() {
  const { currentRole, hasPermission } = useAuth();
  const [screen, setScreen] = useState<AdminScreen>(() => {
    return (localStorage.getItem("sipro_last_admin_screen") as AdminScreen) || "admin-dashboard";
  });
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem("sipro_admin_sidebar_collapsed") === "true";
  });

  const navigate = (s: AdminScreen) => {
    setScreen(s);
    localStorage.setItem("sipro_last_admin_screen", s);
  };

  const handleToggleCollapse = () => {
    setCollapsed(v => {
      const next = !v;
      localStorage.setItem("sipro_admin_sidebar_collapsed", String(next));
      return next;
    });
  };

  const renderScreen = () => {
    switch (screen) {
      case "admin-dashboard":
        return <AdminDashboardScreen />;
      case "user-management":
        return hasPermission("userManagement", "viewer") ? <UserManagementScreen /> : <NoAccess />;
      case "role-management":
        return hasPermission("userManagement", "viewer") ? <RoleManagementScreen /> : <NoAccess />;
      case "verif-pengajuan-dana":
        return hasPermission("pengajuanDana", "viewer") ? <PengajuanDanaVerifScreen /> : <NoAccess />;
      case "verif-pengadaan":
        return hasPermission("pengadaan", "viewer") ? <PengadaanVerifScreen /> : <NoAccess />;
      case "verif-pengujian":
        return hasPermission("pengujian", "viewer") ? <PengujianVerifScreen /> : <NoAccess />;
      case "verif-pembayaran":
        return hasPermission("pembayaran", "viewer") ? <PembayaranVerifScreen /> : <NoAccess />;
      case "template-dokumen-admin":
        return hasPermission("templateDokumen", "viewer") ? <TemplateDokumenAdminScreen /> : <NoAccess />;
      case "master-data":
        return hasPermission("masterData", "viewer") ? <MasterDataScreen /> : <NoAccess />;
      default:
        return <AdminDashboardScreen />;
    }
  };

  return (
    <div className="flex h-screen bg-[#f2f2f2] overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="h-full shrink-0" style={{ width: collapsed ? "60px" : "240px", transition: "width 0.2s ease" }}>
        <AdminSidebar
          screen={screen}
          onNavigate={navigate}
          collapsed={collapsed}
          onToggleCollapse={handleToggleCollapse}
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="w-full px-4 sm:px-6 py-5 transition-all duration-200">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}

function NoAccess() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-4">
        <span className="text-3xl">🔒</span>
      </div>
      <h2 className="text-[#252271] font-bold text-[18px] mb-2">Akses Ditolak</h2>
      <p className="text-gray-400 text-[13px]">Anda tidak memiliki izin untuk mengakses halaman ini.</p>
      <p className="text-gray-300 text-[12px] mt-1">Hubungi administrator untuk mengubah hak akses Anda.</p>
    </div>
  );
}
