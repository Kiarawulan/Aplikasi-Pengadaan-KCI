import type { PengadaanItem } from "../../types";
import { useAuth } from "@/store/authStore";

export function DetailHeaderCard({ item, allFd, verifStatus }: { item: PengadaanItem, allFd?: Record<string, any>, verifStatus?: string }) {
  const { currentUser } = useAuth();
  const fd = allFd || item.formData || {};
  const emailPic = fd["buat-pd"]?.emailPic || fd["buat-pr"]?.emailPic || fd.emailPic || item.formData?.emailPic || currentUser?.email || "—";
  const jenisPermohonan = fd["buat-pd"]?.jenisPermohonan || fd["buat-pr"]?.jenisPermohonan || fd.jenisPermohonan || item.formData?.jenisPermohonan || "—";
  const detailPermohonan = fd["buat-pd"]?.detailPermohonan || fd["buat-pr"]?.detailPermohonan || fd.detailPermohonan || item.formData?.detailPermohonan || "—";

  const displayStatus = verifStatus === "approved" || item.status === "approved" || item.status === "Selesai"
    ? "Selesai"
    : verifStatus === "revisi" || item.status === "revisi" || item.status === "Perlu Revisi"
    ? "Perlu Revisi"
    : verifStatus === "rejected" || item.status === "rejected"
    ? "Ditolak"
    : "Menunggu Verifikasi Admin";

  return (
    <div className="rounded-[16px] p-5 mb-5 shadow-[0px_0px_4px_rgba(0,0,0,0.22)]"
      style={{ background: "linear-gradient(76deg, #8c0505 11%, #e30000 121%)" }}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white font-black text-xl">{item.nama}</p>
          <div className="flex flex-wrap gap-6 mt-2.5">
            {[
              { label: "Tanggal Pembuatan:", val: item.tanggal },
              { label: "Departemen:", val: item.departemen },
              { label: "Nominal:", val: item.nominal },
              { label: "Email PIC:", val: emailPic },
              { label: "Jenis Permohonan:", val: jenisPermohonan },
              { label: "Detail Permohonan:", val: detailPermohonan },
            ].map((d) => (
              <div key={d.label}>
                <p className="text-white/55 text-[10px] font-medium">{d.label}</p>
                <p className="text-white font-bold text-[12px]">{d.val}</p>
              </div>
            ))}
          </div>
        </div>
        <span className="bg-[#252271] text-white text-[10.5px] font-semibold px-4 py-1 rounded-full shrink-0 border border-[#0f1265]">{displayStatus}</span>
      </div>
    </div>
  );
}

