export function FieldInput({ label, placeholder, type = "text", required = false, span2 = false, value, onChange, disabled = false, options }: {
  label: string; placeholder?: string; type?: string; required?: boolean; span2?: boolean;
  value?: string; onChange?: (v: string) => void; disabled?: boolean; options?: string[];
}) {
  return (
    <div className={span2 ? "col-span-2" : ""}>
      <p className="text-[11.5px] font-medium text-[#0a0a0a] mb-[5px]">
        {label}{required && <span className="text-[#cc0000] ml-[2px]">*</span>}
      </p>
      {type === "textarea" ? (
        <textarea
          required={required}
          data-required={required}
          data-label={label}
          className="w-full bg-[#f9f9f9] border border-[#e2e2e2] rounded-[3.5px] px-[10px] py-[7px] text-[11.5px] text-[#333] placeholder:text-[#bbb] focus:outline-none focus:border-[#252271] resize-none h-[48px] disabled:opacity-60 disabled:cursor-not-allowed"
          placeholder={placeholder}
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
        />
      ) : type === "select" ? (
        <select
          required={required}
          data-required={required}
          data-label={label}
          className="w-full bg-[#f9f9f9] border border-[#e2e2e2] rounded-[3.5px] h-[30px] px-[10px] text-[11.5px] text-[#333] focus:outline-none focus:border-[#252271] appearance-none disabled:opacity-60 disabled:cursor-not-allowed"
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
        >
          <option value="">Pilih {label.toLowerCase()}...</option>
          {(options || (label === "Jenis Permohonan" ? ["Barang", "Jasa", "Konstruksi"] : label === "Tahun" ? ["2023", "2024", "2025"] : label === "Metode" || label === "Metode Pengadaan" ? ["Penunjukan Langsung", "Pemilihan Langsung", "Tender Terbuka", "E-Purchasing"] : label === "Jenis Barang" ? ["IT Hardware", "IT Software", "Elektronik", "ATK", "Furnitur", "Jasa Outsource", "Jasa Konstruksi"] : label === "Kurs" ? ["IDR", "USD", "EUR", "JPY"] : [])).map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input
          type={type}
          required={required}
          data-required={required}
          data-label={label}
          className="w-full bg-[#f9f9f9] border border-[#e2e2e2] rounded-[3.5px] h-[30px] px-[10px] text-[11.5px] text-[#333] placeholder:text-[#bbb] focus:outline-none focus:border-[#252271] disabled:opacity-60 disabled:cursor-not-allowed [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none appearance-none"
          placeholder={placeholder}
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
        />
      )}
    </div>
  );
}
