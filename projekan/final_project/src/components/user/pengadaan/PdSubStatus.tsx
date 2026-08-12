import { Check } from "lucide-react";
import { StatusBadge } from "@/components/common/StatusBadge";
import { SummaryRow } from "@/components/common/SummaryRow";


export function PdSubStatus({
  subId,
  data,
  status,
  isApproved,
}: {
  subId: string;
  data: Record<string, string>;
  status?: string;
  isApproved?: boolean;
}) {
  const isDone = isApproved || status === "approved" || status === "Approved" || status === "Selesai" || status === "selesai" || status === "completed";
  const rows: { label: string; key: string }[] = (() => {
    if (subId === "payment-request") return [{ label: "File BAHP TTD", key: "fileBAHP" }, { label: "Keterangan", key: "keterangan" }];
    if (subId === "nota-dokumen") return [{ label: "Keterangan", key: "keterangan" }];
    if (subId === "dokumen-tutupan") return [{ label: "File Dokumen Tutupan", key: "fileTutupan" }, { label: "Keterangan", key: "keterangan" }];
    if (subId === "pengembalian-dana") return [{ label: "File Pengembalian Dana", key: "filePengembalian" }, { label: "Keterangan", key: "keterangan" }];
    return [];
  })();

  const badgeStatus = isDone
    ? "Selesai"
    : status === "revisi" || status === "Perlu Revisi"
    ? "Perlu Revisi"
    : status === "rejected" || status === "Ditolak"
    ? "Ditolak"
    : "Menunggu Verifikasi";

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <Check size={16} className="text-green-600" />
        </div>
        <div>
          <p className="text-[11.5px] font-semibold text-[#0a0a0a]">
            {isDone ? "Pembayaran Telah Diverifikasi & Selesai" : "Data Berhasil Disubmit"}
          </p>
          <p className="text-[10.5px] text-[#6b6b6b]">
            {isDone ? "Telah diverifikasi dan disetujui oleh Finance & Admin" : "Menunggu verifikasi dari Finance"}
          </p>
        </div>
      </div>
      <div className="bg-[#fafafa] border border-[#ebebeb] rounded-lg p-4 space-y-3">
        {rows.map(({ label, key }) => (
          <SummaryRow key={key} label={label} value={data[key] || "—"} />
        ))}
        <div>
          <p className="text-[10.5px] text-[#6b6b6b]">Status Verifikasi</p>
          <div className="mt-1">
            <StatusBadge status={badgeStatus} />
          </div>
        </div>
      </div>
    </div>
  );
}
