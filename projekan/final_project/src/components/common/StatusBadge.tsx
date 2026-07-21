export function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Proses: "bg-blue-50 text-blue-600",
    Selesai: "bg-green-50 text-green-600",
    Draft: "bg-gray-100 text-gray-500",
    Aktif: "bg-emerald-50 text-emerald-600",
    Approved: "bg-green-50 text-green-600",
    approved: "bg-green-50 text-green-600",
    "Menunggu Verifikasi": "bg-amber-50 text-amber-600",
    pending: "bg-amber-50 text-amber-600",
    Revisi: "bg-red-50 text-red-600",
    revisi: "bg-red-50 text-red-600",
    rejected: "bg-red-50 text-red-600",
  };
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${colors[status] ?? "bg-gray-100 text-gray-500"}`}>{status}</span>
  );
}

