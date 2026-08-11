import { useState, useEffect } from "react";
import { Search, Eye, Clock } from "lucide-react";
import type { PengadaanItem } from "@/types";
import { PARK_STEPS } from "@/constants/steps";
import { TopBar } from "@/components/user/layout/TopBar";
import { StatusBadge } from "@/components/common/StatusBadge";
import { api } from "@/services/api";
import { Plus } from "lucide-react";
import { BuatPembayaranPopup } from "@/components/user/pembayaran/BuatPembayaranPopup";


export function DaftarPembayaranScreen({ onSelectItem, type }: {
  onSelectItem: (item: PengadaanItem) => void;
  type: "outsource" | "non-outsource" | "umd" | "payment-request";
}) {
  const [items, setItems] = useState<PengadaanItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const [paymentsResponse, pengadaanResponse, verifResponse] = await Promise.all([
        api.get('/payments').catch(() => ({ data: [] })),
        api.get('/pengadaan').catch(() => ({ data: [] })),
        api.get('/verifikasi').catch(() => ({ data: [] })),
      ]);
      const pengadaanList: PengadaanItem[] = pengadaanResponse.data || [];
      const paymentList: any[] = paymentsResponse.data || [];
      const verifList: any[] = verifResponse.data || [];

      const pengadaanById = new Map(pengadaanList.map((entry) => [entry.id, entry]));

      const mappedPayments = paymentList
        .filter((payment: any) => payment.payment_type === type)
        .map((payment: any) => {
          const pengadaan = pengadaanById.get(payment.pengadaan_id);
          const verif = verifList.find((v: any) => v.pengadaan_id === payment.pengadaan_id && (v.tipe === type || v.tipe === 'pembayaran'));
          const finalStatus = verif?.status || payment.status || pengadaan?.status || "pending";
          return pengadaan ? { ...pengadaan, status: finalStatus, payment } : null;
        })
        .filter(Boolean) as PengadaanItem[];

      const existingPengadaanIds = new Set(mappedPayments.map(p => p.id));
      const extraItems = pengadaanList
        .filter((peng: any) => {
          if (existingPengadaanIds.has(peng.id)) return false;
          if (type === "umd" && peng.flow_type === "pd" && (peng.current_step === "pembayaran" || peng.status === "approved" || peng.status === "completed")) return true;
          if (type === "outsource" && peng.flow_type === "pr" && (peng.current_step === "pembayaran" || peng.status === "approved" || peng.status === "completed")) {
            const fd = typeof peng.formData === "string" ? JSON.parse(peng.formData) : (peng.formData || {});
            const j = (fd.pelunasan?.jenis || "").toLowerCase();
            return !j.includes("non") && !j.includes("payment");
          }
          if (type === "non-outsource" && peng.flow_type === "pr" && (peng.current_step === "pembayaran" || peng.status === "approved" || peng.status === "completed")) {
            const fd = typeof peng.formData === "string" ? JSON.parse(peng.formData) : (peng.formData || {});
            return (fd.pelunasan?.jenis || "").toLowerCase().includes("non");
          }
          if (type === "payment-request" && (peng.current_step === "pembayaran" || peng.status === "approved" || peng.status === "completed")) {
            const fd = typeof peng.formData === "string" ? JSON.parse(peng.formData) : (peng.formData || {});
            return (fd.pelunasan?.jenis || "").toLowerCase().includes("payment");
          }
          return false;
        })
        .map((peng: any) => {
          const verif = verifList.find((v: any) => v.pengadaan_id === peng.id && (v.tipe === type || v.tipe === 'pembayaran'));
          const finalStatus = verif?.status || peng.status || "pending";
          return { ...peng, status: finalStatus };
        });

      setItems([...mappedPayments, ...extraItems]);
    } catch (err) {
      console.error("Gagal mengambil data pembayaran:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [type]);

  const filteredItems = items.filter(
    (item) =>
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.departemen.toLowerCase().includes(search.toLowerCase())
  );

  const getTitles = () => {
    switch (type) {
      case "umd":
        return {
          title: "Daftar Pembayaran - UMD",
          subtitle: "Proses pengadaan UMD (Park Dokumen) yang sedang berlangsung pada tahap Pembayaran",
          cardTitle: "Daftar Pembayaran UMD",
          emptyText: "Tidak ada proses pembayaran UMD yang sedang berlangsung."
        };
      case "payment-request":
        return {
          title: "Daftar Pembayaran - Payment Request",
          subtitle: "Proses pengadaan Payment Request yang sedang berlangsung pada tahap Pembayaran",
          cardTitle: "Daftar Pembayaran Payment Request",
          emptyText: "Tidak ada proses pembayaran Payment Request yang sedang berlangsung."
        };
      case "outsource":
        return {
          title: "Daftar Pembayaran - Outsource",
          subtitle: "Proses pengadaan Outsource (PR) yang sedang berlangsung pada tahap Pembayaran",
          cardTitle: "Daftar Pembayaran Outsource",
          emptyText: "Tidak ada proses pembayaran Outsource yang sedang berlangsung."
        };
      case "non-outsource":
        return {
          title: "Daftar Pembayaran - Non Outsource",
          subtitle: "Proses pengadaan Non Outsource (PR) yang sedang berlangsung pada tahap Pembayaran",
          cardTitle: "Daftar Pembayaran Non Outsource",
          emptyText: "Tidak ada proses pembayaran Non Outsource yang sedang berlangsung."
        };
      default:
        return {
          title: "Daftar Pembayaran",
          subtitle: "Proses pengadaan yang sedang berlangsung pada tahap Pembayaran",
          cardTitle: "Daftar Pembayaran",
          emptyText: "Tidak ada proses pembayaran yang sedang berlangsung."
        };
    }
  };

  const { title, subtitle, cardTitle, emptyText } = getTitles();

  return (
    <div>
      <TopBar title={title} subtitle={subtitle} />

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mt-5">
        <div className="px-5 py-4 flex items-center justify-between border-b border-gray-50 bg-[#1e1c56] text-white">
          <div>
            <p className="font-semibold text-[13px]">{cardTitle}</p>
            <p className="text-white/60 text-[10.5px]">{filteredItems.length} pengadaan berlangsung</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white/95 text-gray-800 pl-8 pr-3 py-1.5 rounded-xl text-[11px] focus:outline-none w-40 sm:w-56 placeholder-gray-400"
                placeholder="Pencarian..."
              />
            </div>
            <button onClick={() => setShowPopup(true)} className="flex items-center gap-1.5 bg-[#fb1112] hover:bg-[#1a1860] text-white px-4 py-1.5 rounded-xl text-[11px] font-semibold shadow-sm transition-colors">
              <Plus size={14} /> Buat Pembayaran
            </button>
          </div>
        </div>

        {showPopup && (
          <BuatPembayaranPopup
            paymentType={type}
            onClose={() => setShowPopup(false)}
            onSuccess={(item) => {
              setShowPopup(false);
              if (type === "umd" && item) {
                // Navigate directly to the PD detail form for UMD
                onSelectItem(item as PengadaanItem);
              } else {
                fetchItems();
              }
            }}
          />
        )}

        {loading ? (
          <div className="p-8 text-center text-gray-500 text-[12px] flex flex-col items-center gap-2">
            <Clock size={20} className="animate-spin text-[#e6251c]" />
            Loading data...
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/80">
                {["No. Dokumen", "Judul Pengadaan", "Nilai", "Divisi", "Status", "Tahap & Progres", "Aksi"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-[10.5px] font-medium text-gray-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-[12px] text-gray-400">
                    {emptyText}
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/40 transition-colors">
                    <td className="px-4 py-3.5 text-[11px] font-semibold text-gray-700">{item.id}</td>
                    <td className="px-4 py-3.5">
                      <p className="font-semibold text-gray-800 text-[11px]">{item.nama}</p>
                      <p className="text-gray-400 text-[9.5px]">{item.id}</p>
                    </td>
                    <td className="px-4 py-3.5 text-[11px] font-medium text-gray-700">{item.nominal}</td>
                    <td className="px-4 py-3.5 text-[11px] text-gray-600">{item.departemen}</td>
                    <td className="px-4 py-3.5"><StatusBadge status={item.status} /></td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-0.5">
                        {PARK_STEPS.map((s) => {
                          const isAllDone = item.status === "Selesai" || item.status === "approved" || item.status === "completed" || item.currentStep === "completed" || (item.completedSteps || []).length >= PARK_STEPS.length;
                          const isCompleted = isAllDone || (item.completedSteps || []).includes(s.id);
                          return (
                            <div
                              key={s.id}
                              title={s.label}
                              className={`w-3 h-3 rounded-full ${
                                isCompleted
                                  ? "bg-[#22c55e]"
                                  : item.currentStep === s.id
                                  ? "bg-[#252271]"
                                  : "bg-gray-100 border border-gray-200"
                              }`}
                            />
                          );
                        })}
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => onSelectItem(item)} className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center hover:bg-blue-100" title="Buka Detail">
                          <Eye size={11} className="text-blue-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
