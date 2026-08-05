export function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Proses: "status-progress",
    Selesai: "status-success",
    Draft: "status-neutral",
    Aktif: "status-success",
    Approved: "status-success",
    approved: "status-success",
    "Sudah Diverifikasi": "status-success",
    "Menunggu Verifikasi": "status-pending",
    "Menunggu Verifikasi Admin": "status-pending",
    pending: "status-pending",
    Revisi: "status-danger",
    revisi: "status-danger",
    rejected: "status-danger",
    "Perlu Revisi": "status-danger",
  };
  return (
    <span className={`status-badge text-[10px] font-semibold px-2 py-0.5 rounded-full ${colors[status] ?? "status-neutral"}`}>{status}</span>
  );
}

