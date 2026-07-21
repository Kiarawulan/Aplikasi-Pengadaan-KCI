import { FileText } from "lucide-react";

export function FileUploadInput({ label, required = false, value, onChange }: {
  label: string; required?: boolean; value: string; onChange: (v: string) => void;
}) {
  const mockName = label.replace(/\s+/g, "-") + `-${new Date().getFullYear()}.pdf`;
  return (
    <div>
      <p className="text-[11.5px] font-medium text-[#0a0a0a] mb-[5px]">
        {label}{required && <span className="text-[#cc0000] ml-[2px]">*</span>}
      </p>
      {value ? (
        <div className="flex items-center justify-between bg-[#f0f4ff] border border-[#252271]/20 rounded px-3 py-2">
          <div className="flex items-center gap-2">
            <FileText size={12} className="text-[#252271]" />
            <span className="text-[11.5px] font-medium text-[#252271]">{value}</span>
          </div>
          <button onClick={() => onChange("")} className="text-[10px] text-red-500 hover:underline">Hapus</button>
        </div>
      ) : (
        <div
          onClick={() => onChange(mockName)}
          className="bg-[#f9f9f9] border border-dashed border-[#d0d0d0] rounded-[3.5px] h-[52px] flex items-center justify-center cursor-pointer hover:border-[#252271] hover:bg-[#f5f6ff] transition-colors"
        >
          <p className="text-[11.5px] text-[#bbb]">Klik untuk upload file...</p>
        </div>
      )}
    </div>
  );
}
