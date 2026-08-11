import { Upload } from "lucide-react";

interface AdminUploadBarProps {
  title: string;
  description: string;
  buttonText: string;
  onFileSelected: (file: File) => void | Promise<void>;
  accept?: string;
  disabled?: boolean;
  selectedFileName?: string;
  className?: string;
}

export function AdminUploadBar({
  title,
  description,
  buttonText,
  onFileSelected,
  accept = ".pdf,.doc,.docx,.png,.jpg,.jpeg",
  disabled = false,
  selectedFileName,
  className = "",
}: AdminUploadBarProps) {
  return (
    <div className={`w-full min-h-[70px] px-4 py-3 bg-[#f4f5ff] border border-[#c8ceff] rounded-[13px] flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${className}`}>
      <div className="min-w-0">
        <p className="text-[12px] font-bold text-[#252271] flex items-center gap-1.5">
          <Upload size={13} strokeWidth={2} />
          {title}
        </p>
        <p className="mt-1 text-[10.5px] leading-[14px] text-[#5965e8] truncate">
          {selectedFileName ? `Berkas terpilih: ${selectedFileName}` : description}
        </p>
      </div>
      <label className={`h-[38px] px-4 rounded-[14px] bg-gradient-to-r from-[#17145e] to-[#2c2785] text-white text-[11px] font-bold flex items-center justify-center gap-2 shrink-0 transition-all ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:brightness-110 active:scale-[0.98]"}`}>
        <Upload size={13} strokeWidth={2} />
        {buttonText}
        <input
          type="file"
          accept={accept}
          disabled={disabled}
          className="hidden"
          onChange={async (event) => {
            const file = event.target.files?.[0];
            if (file) await onFileSelected(file);
            event.target.value = "";
          }}
        />
      </label>
    </div>
  );
}
