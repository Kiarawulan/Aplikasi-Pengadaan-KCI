export function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[3px]">
      <p className="text-[10.5px] text-[#6b6b6b]">{label}</p>
      <p className="text-[11.5px] font-medium text-[#0a0a0a]">{value || "—"}</p>
    </div>
  );
}
