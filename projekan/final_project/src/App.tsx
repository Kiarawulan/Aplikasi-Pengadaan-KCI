import React, { useState, useEffect, Component, ErrorInfo, ReactNode } from "react";
import type { Screen, PengadaanItem } from "./types";
import { AuthProvider, useAuth } from "./store/authStore";
import { LoginPage } from "./pages/auth/LoginPage";
import { AdminApp } from "./AdminApp";
import { Sidebar } from "./components/user/layout/Sidebar";
import {
  DashboardScreen,
  RupListScreen,
  DaftarPengadaanScreen,
  PurchaseRequestionScreen,
  PrDetailScreen,
  PdDetailScreen,
  TemplateDokumenScreen,
  ProfileScreen,
  DaftarPengujianScreen,
  DaftarPembayaranScreen,
} from "./pages/user";

// ─── Error Boundary Component ──────────────────────────────────────────────────
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("React ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center font-sans">
          <div className="bg-white rounded-2xl p-8 max-w-md shadow-xl border border-slate-200">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4 font-bold text-xl">⚠️</div>
            <h2 className="text-[#252271] text-lg font-extrabold mb-2">Terjadi Kesalahan Tampilan</h2>
            <p className="text-xs text-slate-500 mb-4">Sistem mendeteksi kesalahan data. Silakan reset sesi untuk kembali ke tampilan utama.</p>
            {this.state.error && (
              <div className="text-left bg-red-50 border border-red-200 p-3 rounded-lg mb-4 max-h-48 overflow-auto">
                <p className="text-[11px] font-bold text-red-700">{this.state.error.name}: {this.state.error.message}</p>
                <p className="text-[10px] text-red-500 font-mono mt-1 whitespace-pre-wrap">{this.state.error.stack}</p>
              </div>
            )}
            <button
              onClick={() => {
                localStorage.removeItem("sipro_last_user_screen");
                localStorage.removeItem("sipro_last_selected_item");
                localStorage.removeItem("sipro_last_back_screen");
                window.location.href = "/";
              }}
              className="w-full py-2.5 bg-[#252271] text-white rounded-xl text-xs font-bold shadow-md hover:bg-[#1a1753] transition-colors"
            >
              Reset Sesi & Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ─── User App (fully synchronized via Laravel MySQL API) ──────────────────────
function UserApp() {
  const { hasPermission, currentRole } = useAuth();
  const [selectedItem, setSelectedItem] = useState<PengadaanItem | null>(() => {
    try {
      const saved = localStorage.getItem("sipro_last_selected_item");
      if (!saved) return null;
      const parsed = JSON.parse(saved);
      return (parsed && parsed.id) ? parsed : null;
    } catch {
      return null;
    }
  });

  const [screen, setScreen] = useState<Screen>(() => {
    const savedScreen = (localStorage.getItem("sipro_last_user_screen") as Screen) || "dashboard";
    const savedItem = localStorage.getItem("sipro_last_selected_item");
    if ((savedScreen === "pd-detail" || savedScreen === "pr-detail") && !savedItem) {
      return "daftar-pengadaan";
    }
    return savedScreen;
  });

  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    return localStorage.getItem("sipro_user_sidebar_collapsed") === "true";
  });
  const [backScreen, setBackScreen] = useState<Screen>(() => {
    return (localStorage.getItem("sipro_last_back_screen") as Screen) || "dashboard";
  });

  const canOpenScreen = (target: Screen) => {
    if (target === "profile") return true;
    if (target === "dashboard") return hasPermission("dashboard", "viewer");
    if (["rup-list", "daftar-pengadaan", "purchase-requisition"].includes(target)) return hasPermission("pengadaan", "viewer") || hasPermission("pengajuanDana", "viewer");
    if (["pd-detail", "pr-detail"].includes(target)) return hasPermission("pengadaan", "viewer") || hasPermission("pengajuanDana", "viewer") || hasPermission("pembayaran", "viewer") || hasPermission("pengujian", "viewer");
    if (target === "daftar-pengujian") return hasPermission("pengujian", "viewer");
    if (["pembayaran-outsource", "pembayaran-non-outsource", "pembayaran-payment-request", "pembayaran-umd"].includes(target)) return hasPermission("pembayaran", "viewer");
    if (target === "template-dokumen") return hasPermission("templateDokumen", "viewer");
    return false;
  };

  const firstAllowedScreen = (): Screen | null => {
    const candidates: Screen[] = ["dashboard", "daftar-pengadaan", "daftar-pengujian", "pembayaran-outsource", "template-dokumen", "profile"];
    return candidates.find(canOpenScreen) || null;
  };

  useEffect(() => {
    if ((screen === "pd-detail" || screen === "pr-detail") && !selectedItem) {
      setScreen("daftar-pengadaan");
      localStorage.setItem("sipro_last_user_screen", "daftar-pengadaan");
    }
  }, [screen, selectedItem]);

  useEffect(() => {
    if (!currentRole) return;
    const fallback = firstAllowedScreen();
    if (fallback && !canOpenScreen(screen)) {
      setScreen(fallback);
      localStorage.setItem("sipro_last_user_screen", fallback);
    }
  }, [screen, hasPermission, currentRole]);

  useEffect(() => {
    if (selectedItem?.id) sessionStorage.setItem("sipro_active_pengadaan_id", selectedItem.id);
  }, [selectedItem?.id]);

  const handleNavigate = (s: Screen) => {
    if (!canOpenScreen(s)) {
      const fallback = firstAllowedScreen();
      if (fallback) setScreen(fallback);
      return;
    }
    setScreen(s);
    localStorage.setItem("sipro_last_user_screen", s);
    if (s !== "pd-detail" && s !== "pr-detail") {
      setSelectedItem(null);
      localStorage.removeItem("sipro_last_selected_item");
    }
  };

  const handleSelectItem = (item: PengadaanItem, s: Screen, targetBackScreen?: Screen) => {
    if (!item || !item.id) return;
    setSelectedItem(item);
    localStorage.setItem("sipro_last_selected_item", JSON.stringify(item));
    sessionStorage.setItem("sipro_active_pengadaan_id", item.id);
    const bScreen = targetBackScreen || screen;
    setBackScreen(bScreen);
    localStorage.setItem("sipro_last_back_screen", bScreen);
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
        {screen !== "dashboard" && (
          <div className="h-9 px-5 border-b border-slate-100 bg-white flex items-center text-[11.5px] text-slate-400 sticky top-0 z-30">
            <button
              type="button"
              onClick={() => handleNavigate(screen === "pd-detail" || screen === "pr-detail" ? backScreen : "dashboard")}
              className="inline-flex items-center gap-1.5 hover:text-[#252271] transition-colors font-medium"
              title="Kembali ke halaman sebelumnya"
            >
              <span className="text-[15px]">‹</span>
              User
            </button>
            <span className="mx-2">›</span>
            <span className="font-bold text-[#252271]">{screen.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}</span>
          </div>
        )}
        <div className="w-full px-4 sm:px-6 py-5 transition-all duration-200">
          {screen === "dashboard" && <DashboardScreen />}
          {screen === "rup-list" && <RupListScreen />}
          {screen === "daftar-pengadaan" && (
            <DaftarPengadaanScreen
              onSelectItem={(item) => handleSelectItem(item, "pd-detail")}
            />
          )}
          {screen === "pd-detail" && selectedItem && (
            <PdDetailScreen item={selectedItem} fromScreen={backScreen} onBack={() => handleNavigate(backScreen)} onNavigate={handleNavigate} onSelectItem={handleSelectItem} />
          )}
          {screen === "purchase-requisition" && (
            <PurchaseRequestionScreen
              onSelectItem={(item) => handleSelectItem(item, "pr-detail")}
            />
          )}
          {screen === "pr-detail" && selectedItem && (
            <PrDetailScreen item={selectedItem} fromScreen={backScreen} onBack={() => handleNavigate(backScreen)} onNavigate={handleNavigate} onSelectItem={handleSelectItem} />
          )}
          {screen === "daftar-pengujian" && (
            <DaftarPengujianScreen
              onSelectItem={(item) => handleSelectItem(item, item.id?.startsWith("PR-") ? "pr-detail" : "pd-detail", "daftar-pengujian")}
            />
          )}
          {screen === "pembayaran-outsource" && (
            <DaftarPembayaranScreen
              type="outsource"
              onSelectItem={(item) => handleSelectItem(item, "pr-detail", "pembayaran-outsource")}
            />
          )}
          {screen === "pembayaran-non-outsource" && (
            <DaftarPembayaranScreen
              type="non-outsource"
              onSelectItem={(item) => handleSelectItem(item, "pr-detail", "pembayaran-non-outsource")}
            />
          )}
          {screen === "pembayaran-payment-request" && (
            <DaftarPembayaranScreen
              type="payment-request"
              onSelectItem={(item) => handleSelectItem(item, "pr-detail", "pembayaran-payment-request")}
            />
          )}
          {screen === "pembayaran-umd" && (
            <DaftarPembayaranScreen
              type="umd"
              onSelectItem={(item) => handleSelectItem(item, "pd-detail", "pembayaran-umd")}
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
    <ErrorBoundary>
      <AuthProvider>
        <AppRoot />
      </AuthProvider>
    </ErrorBoundary>
  );
}
