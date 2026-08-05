import { useRef, useState } from "react";
import { FileText } from "lucide-react";
import { api } from "@/services/api";

export function FileUploadInput({ label, required = false, value, onChange, pengadaanId, stage }: {
  label: string; required?: boolean; value: string; onChange: (v: string) => void; pengadaanId?: string; stage?: string;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const upload = async (file?: File) => {
    if (!file) return;
    const targetPengadaanId = pengadaanId || sessionStorage.getItem("sipro_active_pengadaan_id");
    if (!targetPengadaanId) {
      onChange(file.name);
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    if (stage) formData.append("stage", stage);
    setUploading(true);
    try {
      const response = await api.post(`/pengadaan/${targetPengadaanId}/documents`, formData);
      onChange(response.data?.data?.original_name || file.name);
    } catch (error: any) {
      alert(error.response?.data?.message || "Gagal mengunggah dokumen.");
    } finally {
      setUploading(false);
    }
  };

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
          onClick={() => !uploading && fileInputRef.current?.click()}
          className="bg-[#f9f9f9] border border-dashed border-[#d0d0d0] rounded-[3.5px] h-[52px] flex items-center justify-center cursor-pointer hover:border-[#252271] hover:bg-[#f5f6ff] transition-colors"
        >
          <input ref={fileInputRef} type="file" className="hidden" accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg" onChange={(event) => upload(event.target.files?.[0])} />
          <p className="text-[11.5px] text-[#bbb]">{uploading ? "Mengunggah..." : "Klik untuk upload file..."}</p>
        </div>
      )}
    </div>
  );
}
