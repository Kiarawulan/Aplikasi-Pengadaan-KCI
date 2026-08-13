import { useCallback, useEffect, useState } from "react";
import { api } from "@/services/api";
import { useAuth } from "@/store/authStore";

export type UserNotificationModule = "pengajuanDana" | "pengadaan" | "pengujian" | "pembayaran";
type Counts = Record<UserNotificationModule, number>;
const EMPTY: Counts = { pengajuanDana: 0, pengadaan: 0, pengujian: 0, pembayaran: 0 };
const RESULT_STATUSES = new Set(["approved", "disetujui", "revision_required", "revisi", "revision", "rejected", "ditolak", "selesai", "completed", "lunas", "paid", "cair"]);

const fingerprint = (row: any) => `${row?.id || row?.nomor || "unknown"}:${String(row?.status || "").toLowerCase()}:${row?.updated_at || row?.updatedAt || ""}`;

export function useUserVerificationNotifications() {
  const { currentUser } = useAuth();
  const storageKey = `kci-user-verification-seen:v2:${currentUser?.id || "guest"}`;
  const [rows, setRows] = useState<Record<UserNotificationModule, any[]>>({ pengajuanDana: [], pengadaan: [], pengujian: [], pembayaran: [] });
  const [counts, setCounts] = useState<Counts>(EMPTY);

  const calculate = useCallback((nextRows: typeof rows) => {
    let seen: Record<string, string[]> = {};
    try { seen = JSON.parse(localStorage.getItem(storageKey) || "{}"); } catch {}
    const next = { ...EMPTY };
    (Object.keys(nextRows) as UserNotificationModule[]).forEach(module => {
      const seenSet = new Set(seen[module] || []);
      next[module] = nextRows[module].filter(row => RESULT_STATUSES.has(String(row?.status || "").toLowerCase()) && !seenSet.has(fingerprint(row))).length;
    });
    setCounts(next);
  }, [storageKey]);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const response = await api.get("/dashboard");
        if (!mounted) return;
        const records = response.data?.records || {};
        const verificationRows = records.verifikasi || [];
        const byType = (module: UserNotificationModule) => verificationRows.filter((row: any) => {
          const type = String(row?.tipe || "").toLowerCase();
          if (module === "pembayaran") return ["outsource", "non-outsource", "umd", "payment-request", "pembayaran"].some(value => type.includes(value));
          if (module === "pengujian") return type.includes("pengujian") || type.includes("bahp");
          if (module === "pengadaan") return ["sp3", "rup", "pbj", "contract", "kontrak", "npp"].some(value => type.includes(value));
          return !["outsource", "non-outsource", "umd", "payment-request", "pembayaran", "pengujian", "bahp", "sp3", "rup", "pbj", "contract", "kontrak", "npp"].some(value => type.includes(value));
        });
        const nextRows = {
          pengajuanDana: byType("pengajuanDana"),
          pengadaan: [...(records.pengadaan || []), ...byType("pengadaan")],
          pengujian: [...(records.pengujian || []), ...byType("pengujian")],
          pembayaran: [...(records.pembayaran || []), ...byType("pembayaran")],
        };
        setRows(nextRows);
        calculate(nextRows);
      } catch {}
    };
    load();
    const timer = window.setInterval(load, 30000);
    window.addEventListener("focus", load);
    return () => { mounted = false; window.clearInterval(timer); window.removeEventListener("focus", load); };
  }, [calculate]);

  const markRead = (module: UserNotificationModule) => {
    let seen: Record<string, string[]> = {};
    try { seen = JSON.parse(localStorage.getItem(storageKey) || "{}"); } catch {}
    seen[module] = rows[module].filter(row => RESULT_STATUSES.has(String(row?.status || "").toLowerCase())).map(fingerprint);
    localStorage.setItem(storageKey, JSON.stringify(seen));
    calculate(rows);
  };

  return { counts, markRead };
}
