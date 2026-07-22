import { useState } from "react";
import type { Screen, PengadaanItem } from "./types";
import { AuthProvider, useAuth } from "./store/authStore";
import { LoginPage } from "./pages/LoginPage";
import { AdminApp } from "./AdminApp";
import { Sidebar } from "./components/layout/Sidebar";
import { DashboardScreen } from "./pages/DashboardScreen";
import { RupListScreen } from "./pages/RupListScreen";
import { DaftarPengadaanScreen } from "./pages/DaftarPengadaanScreen";
import { PurchaseRequestionScreen } from "./pages/PurchaseRequestionScreen";
import { PrDetailScreen } from "./pages/PrDetailScreen";
import { PdDetailScreen } from "./pages/PdDetailScreen";
import { TemplateDokumenScreen } from "./pages/TemplateDokumenScreen";
import { ProfileScreen } from "./pages/ProfileScreen";
import { DaftarPengujianScreen } from "./pages/DaftarPengujianScreen";
import { DaftarPembayaranScreen } from "./pages/DaftarPembayaranScreen";

// ─── User App (fully synchronized via Laravel MySQL API) ──────────────────────
function UserApp() {
  const [screen, setScreen] = useState<Screen>(() => {
    return (localStorage.getItem("sipro_last_user_screen") as Screen) || "dashboard";
  });
  const [selectedItem, setSelectedItem] = useState<PengadaanItem | null>(() => {
    const saved = localStorage.getItem("sipro_last_selected_item");
    return saved ? JSON.parse(saved) : null;
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    return localStorage.getItem("sipro_user_sidebar_collapsed") === "true";
  });
  const [backScreen, setBackScreen] = useState<Screen>(() => {
    return (localStorage.getItem("sipro_last_back_screen") as Screen) || "dashboard";
  });

  const handleNavigate = (s: Screen) => {
    setScreen(s);
    localStorage.setItem("sipro_last_user_screen", s);
    if (s !== "pd-detail" && s !== "pr-detail") {
      setSelectedItem(null);
      localStorage.removeItem("sipro_last_selected_item");
    }
  };

  const handleSelectItem = (item: PengadaanItem, s: Screen) => {
    setSelectedItem(item);
    localStorage.setItem("sipro_last_selected_item", JSON.stringify(item));
    setBackScreen(screen);
    localStorage.setItem("sipro_last_back_screen", screen);
    setScreen(s);
    localStorage.setItem("sipro_last_user_screen", s);
  };

  const handleToggleCollapse = () => {
    setSidebarCollapsed(v => {
      const next = !v;
      localStorage.setItem("sipro_user_sidebar_collapsed", String(next));
      return next;
    });
  };

  return (
    <div className="flex h-screen bg-[#f2f2f2] overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="h-full shrink-0" style={{ width: sidebarCollapsed ? "60px" : "224px", transition: "width 0.2s ease" }}>
        <Sidebar screen={screen} backScreen={backScreen} onNavigate={handleNavigate} collapsed={sidebarCollapsed} onToggleCollapse={handleToggleCollapse} />
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="w-full px-4 sm:px-6 py-5 transition-all duration-200">
          {screen === "dashboard" && <DashboardScreen />}
          {screen === "rup-list" && <RupListScreen />}
          {screen === "daftar-pengadaan" && (
            <DaftarPengadaanScreen
              onSelectItem={(item) => handleSelectItem(item, "pd-detail")}
            />
          )}
          {screen === "pd-detail" && selectedItem && (
            <PdDetailScreen item={selectedItem} onBack={() => handleNavigate(backScreen)} onNavigate={handleNavigate} />
          )}
          {screen === "purchase-requisition" && (
            <PurchaseRequestionScreen
              onSelectItem={(item) => handleSelectItem(item, "pr-detail")}
            />
          )}
          {screen === "pr-detail" && selectedItem && (
            <PrDetailScreen item={selectedItem} onBack={() => handleNavigate(backScreen)} onNavigate={handleNavigate} />
          )}
          {screen === "daftar-pengujian" && (
            <DaftarPengujianScreen
              onSelectItem={(item) => handleSelectItem(item, item.id.startsWith("PR-") ? "pr-detail" : "pd-detail")}
            />
          )}
          {screen === "pembayaran-outsource" && (
            <DaftarPembayaranScreen
              type="outsource"
              onSelectItem={(item) => handleSelectItem(item, "pr-detail")}
            />
          )}
          {screen === "pembayaran-non-outsource" && (
            <DaftarPembayaranScreen
              type="non-outsource"
              onSelectItem={(item) => handleSelectItem(item, "pr-detail")}
            />
          )}
          {screen === "pembayaran-payment-request" && (
            <DaftarPembayaranScreen
              type="payment-request"
              onSelectItem={(item) => handleSelectItem(item, "pr-detail")}
            />
          )}
          {screen === "pembayaran-umd" && (
            <DaftarPembayaranScreen
              type="umd"
              onSelectItem={(item) => handleSelectItem(item, "pd-detail")}
            />
          )}
          {screen === "template-dokumen" && <TemplateDokumenScreen />}
          {screen === "profile" && <ProfileScreen />}
        </div>
      </div>
    </div>
  );
}

// ─── Root: Auth Gate ──────────────────────────────────────────────────────────
function AppRoot() {
  const { currentUser, isAdmin } = useAuth();

  if (!currentUser) {
    return <LoginPage />;
  }

  if (isAdmin) {
    return <AdminApp />;
  }

  return <UserApp />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoot />
    </AuthProvider>
  );
}
