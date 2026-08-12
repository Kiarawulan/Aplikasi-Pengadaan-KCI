export function StatusBadge({ status }: { status: string }) {
  const normalized = String(status || "-").trim().toLowerCase();
  const label = normalized === "pending_acceptance"
    ? "Menunggu Penerimaan"
    : normalized === "accepted"
      ? "Menunggu Verifikasi Berkas"
      : status || "-";
  const colors = ["selesai", "approve", "approved", "disetujui", "final", "closed", "aktif", "active", "sudah diverifikasi", "verified", "cair", "completed", "complete", "lengkap", "uploaded", "lunas"].includes(normalized)
    ? "bg-[#f0fdf4] text-[#008236]"
    : ["revisi", "perlu revisi", "revision_required", "rejected", "ditolak", "tolak"].includes(normalized)
      ? "bg-[#fff1f2] text-[#be123c]"
      : ["pending", "menunggu verifikasi", "menunggu verifikasi admin", "submitted", "draft", "proses", "on process", "on_progress", "contract release", "request pengujian", "review hasil pengujian", "pengujian on process"].includes(normalized)
        ? "bg-[#f0f9ff] text-[#0069a8]"
        : "bg-[#f0f9ff] text-[#0069a8]";
  return (
    <span className={`inline-flex items-center text-[10.5px] font-medium px-[7px] py-[1.75px] rounded-[3.5px] whitespace-nowrap ${colors}`}>{label}</span>
  );
}

