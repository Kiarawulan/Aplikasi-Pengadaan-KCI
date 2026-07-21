export function FieldInput({ label, placeholder, type = "text", required = false, span2 = false, value, onChange, disabled = false }: {
  label: string; placeholder?: string; type?: string; required?: boolean; span2?: boolean;
  value?: string; onChange?: (v: string) => void; disabled?: boolean;
}) {
  return (
    <div className={span2 ? "col-span-2" : ""}>
      <p className="text-[11.5px] font-medium text-[#0a0a0a] mb-[5px]">
        {label}{required && <span className="text-[#cc0000] ml-[2px]">*</span>}
      </p>
      {type === "textarea" ? (
        <textarea
          className="w-full bg-[#f9f9f9] border border-[#e2e2e2] rounded-[3.5px] px-[10px] py-[7px] text-[11.5px] text-[#333] placeholder:text-[#bbb] focus:outline-none focus:border-[#252271] resize-none h-[48px] disabled:opacity-60 disabled:cursor-not-allowed"
          placeholder={placeholder}
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
        />
      ) : type === "select" ? (
        <select
          className="w-full bg-[#f9f9f9] border border-[#e2e2e2] rounded-[3.5px] h-[30px] px-[10px] text-[11.5px] text-[#333] focus:outline-none focus:border-[#252271] appearance-none disabled:opacity-60 disabled:cursor-not-allowed"
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
        >
          <option value="">Pilih {label.toLowerCase()}...</option>
          {label === "Jenis Permohonan" && ["Barang", "Jasa", "Konstruksi"].map((o) => <option key={o}>{o}</option>)}
          {label === "Tahun" && ["2023", "2024", "2025"].map((o) => <option key={o}>{o}</option>)}
          {label === "Metode" && ["Langsung", "Tender", "Seleksi"].map((o) => <option key={o}>{o}</option>)}
          {label === "Jenis Barang" && ["Barang Jadi", "Barang Modal", "ATK"].map((o) => <option key={o}>{o}</option>)}
          {label === "Kurs" && ["IDR", "USD", "EUR"].map((o) => <option key={o}>{o}</option>)}
          {label === "Metode Pengadaan" && ["Langsung", "Tender", "Seleksi Langsung"].map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input
          type={type}
          className="w-full bg-[#f9f9f9] border border-[#e2e2e2] rounded-[3.5px] h-[30px] px-[10px] text-[11.5px] text-[#333] placeholder:text-[#bbb] focus:outline-none focus:border-[#252271] disabled:opacity-60 disabled:cursor-not-allowed"
          placeholder={placeholder}
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
        />
      )}
    </div>
  );
}
