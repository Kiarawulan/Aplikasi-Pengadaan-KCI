import { useState } from "react";
import { X } from "lucide-react";
import type { ParkStep, PengadaanItem } from "../../types";

export function PembelianBaruPopup({ onClose, onSubmit, title = "Pembuatan Pengadaan Baru", submitLabel = "Buat →", initialStep = "npp" as ParkStep }: {
  onClose: () => void; onSubmit: (item: PengadaanItem) => void;
  title?: string; submitLabel?: string; initialStep?: ParkStep;
}) {
  const today = new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric" });
  const [form, setForm] = useState({ nama: "", departemen: "", nominal: "", tahun: "2024", sumberDana: "", jenisKontrak: "" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = () => {
    const required: (keyof typeof form)[] = ["nama", "departemen", "nominal", "jenisKontrak"];
    const errs: Record<string, boolean> = {};
    required.forEach((k) => { if (!form[k].trim()) errs[k] = true; });
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onSubmit({
      id: `PKD-${String(Math.floor(Math.random() * 900) + 100)}`,
      nama: form.nama, departemen: form.departemen,
      nominal: form.nominal.startsWith("Rp") ? form.nominal : `Rp ${form.nominal}`,
      tanggal: today,
      status: "Menunggu Verifikasi Admin",
      currentStep: initialStep,
      completedSteps: [],
      verificationStatus: { [initialStep]: "pending" },
    });
  };

  const fields: { key: keyof typeof form; label: string; options?: string[] }[] = [
    { key: "nama", label: "Nama Paket" },
    { key: "departemen", label: "Departemen", options: ["CTIT", "HRD", "Finance", "Operasional", "Legal"] },
    { key: "nominal", label: "Nominal Pengajuan" },
    { key: "tahun", label: "Tahun Anggaran", options: ["2023", "2024", "2025"] },
    { key: "sumberDana", label: "Sumber Dana", options: ["APBN", "APBD", "BUMN", "Internal"] },
    { key: "jenisKontrak", label: "Jenis Pengadaan", options: ["Barang", "Jasa", "Konstruksi", "Konsultansi"] },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl px-10 py-7 w-[620px] max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-[#252271] text-xl font-extrabold">{title}</h2>
          <button onClick={onClose} className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <X size={13} className="text-gray-600" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {fields.map((f) => (
            <div key={f.key}>
              <label className="block text-[11.5px] font-medium text-[#0a0a0a] mb-1.5">
                {f.label}{["nama", "departemen", "nominal", "jenisKontrak"].includes(f.key) && <span className="text-[#e6251c] ml-0.5">*</span>}
              </label>
              {f.options ? (
                <select value={form[f.key]} onChange={set(f.key)} className={`w-full border rounded-xl px-3 py-2 text-[11.5px] focus:outline-none focus:ring-2 focus:ring-[#e6251c]/20 focus:border-[#e6251c] bg-white ${errors[f.key] ? "border-red-400" : "border-gray-200"}`}>
                  <option value="">Pilih {f.label.toLowerCase()}</option>
                  {f.options.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input type="text" value={form[f.key]} onChange={set(f.key)} className={`w-full border rounded-xl px-3 py-2 text-[11.5px] focus:outline-none focus:ring-2 focus:ring-[#e6251c]/20 focus:border-[#e6251c] ${errors[f.key] ? "border-red-400" : "border-gray-200"}`} placeholder={`Masukkan ${f.label.toLowerCase()}`} />
              )}
              {errors[f.key] && <p className="text-[#e6251c] text-[10px] mt-1">Field ini wajib diisi</p>}
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-5 py-2 rounded-xl border border-gray-200 text-[11.5px] text-gray-600 hover:bg-gray-50">Batal</button>
          <button onClick={handleSubmit} className="px-5 py-2 rounded-xl text-[11.5px] text-white font-semibold" style={{ background: "linear-gradient(75deg, #e6251c, #ff7676)" }}>
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

