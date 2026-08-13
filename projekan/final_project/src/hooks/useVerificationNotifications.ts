import { useEffect, useMemo, useState } from "react";
import { api } from "@/services/api";
import { useAuth } from "@/store/authStore";

type Counts = { pengajuanDana: number; pengadaan: number; pengujian: number; pembayaran: number };
const EMPTY: Counts = { pengajuanDana: 0, pengadaan: 0, pengujian: 0, pembayaran: 0 };
const DONE = new Set(["approved", "disetujui", "rejected", "ditolak", "selesai", "completed", "complete", "lunas", "paid", "cair", "draft"]);

function needsVerification(row: any) {
  const status = String(row?.status || row?.approval_status || "").trim().toLowerCase();
  return Boolean(status) && !DONE.has(status);
}

function uniquePending(rows: any[]) {
  return new Set(rows.filter(needsVerification).map((row, index) => String(row?.id || row?.nomor || index))).size;
}

function classifyVerification(row: any): keyof Counts {
  const type = String(row?.tipe || row?.type || "").toLowerCase();
  if (["outsource", "non-outsource", "umd", "payment-request", "pembayaran"].some(value => type.includes(value))) return "pembayaran";
  if (type.includes("pengujian") || type.includes("bahp")) return "pengujian";
  if (["sp3", "rup", "pbj", "contract", "kontrak", "npp"].some(value => type.includes(value))) return "pengadaan";
  return "pengajuanDana";
}

function countsFromVerification(rows: any[]): Counts {
  const counts = { ...EMPTY };
  const seen = new Set<string>();
  rows.filter(needsVerification).forEach((row, index) => {
    const id = String(row?.id || row?.nomor || index);
    if (seen.has(id)) return;
    seen.add(id);
    counts[classifyVerification(row)] += 1;
  });
  return counts;
}

export function useVerificationNotifications() {
  const { hasPermission, currentUser } = useAuth();
  const [counts, setCounts] = useState<Counts>(EMPTY);

  useEffect(() => {
    let mounted = true;
    let timer: number | undefined;

    const load = async () => {
      try {
        const response = await api.get("/dashboard");
        const records = response.data?.records || {};
        const classified = countsFromVerification(records.verifikasi || []);
        if (!mounted) return;
        setCounts({
          pengajuanDana: hasPermission("pengajuanDana", "viewer") ? classified.pengajuanDana : 0,
          pengadaan: hasPermission("pengadaan", "viewer") ? classified.pengadaan : 0,
          pengujian: hasPermission("pengujian", "viewer") ? Math.max(classified.pengujian, uniquePending(records.pengujian || [])) : 0,
          pembayaran: hasPermission("pembayaran", "viewer") ? Math.max(classified.pembayaran, uniquePending(records.pembayaran || [])) : 0,
        });
      } catch {
        if (mounted) setCounts(EMPTY);
      }
    };

    const refreshWhenVisible = () => { if (document.visibilityState === "visible") load(); };
    load();
    timer = window.setInterval(load, 30000);
    window.addEventListener("focus", load);
    document.addEventListener("visibilitychange", refreshWhenVisible);
    window.addEventListener("verification-updated", load);
    return () => {
      mounted = false;
      if (timer) window.clearInterval(timer);
      window.removeEventListener("focus", load);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
      window.removeEventListener("verification-updated", load);
    };
  }, [currentUser?.roleId]);

  const total = useMemo(() => Object.values(counts).reduce((sum, value) => sum + value, 0), [counts]);
  return { counts, total };
}
