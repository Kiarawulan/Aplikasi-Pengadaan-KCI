import { X } from "lucide-react";
import type { ReactNode } from "react";

interface AdminModalProps {
  title: string;
  subtitle?: string;
  onClose: () => void;
  onSubmit?: () => void;
  submitLabel?: string;
  submitDestructive?: boolean;
  children: ReactNode;
  width?: string;
  hideFooter?: boolean;
}

export function AdminModal({
  title,
  subtitle,
  onClose,
  onSubmit,
  submitLabel = "Simpan",
  submitDestructive = false,
  children,
  width = "max-w-lg",
  hideFooter = false,
}: AdminModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative w-full ${width} mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <p className="text-[#252271] font-bold text-[15px]">{title}</p>
            {subtitle && <p className="text-gray-400 text-[11.5px] mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X size={13} className="text-gray-500" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 max-h-[70vh] overflow-y-auto">{children}</div>

        {/* Footer */}
        {!hideFooter && (
          <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-gray-100 bg-gray-50/50">
            <button
              onClick={onClose}
              className="px-4 h-9 rounded-xl text-[12.5px] font-medium text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Batal
            </button>
            {onSubmit && (
              <button
                onClick={onSubmit}
                className={`px-5 h-9 rounded-xl text-[12.5px] font-semibold text-white transition-all ${
                  submitDestructive
                    ? "bg-red-600 hover:bg-red-700"
                    : ""
                }`}
                style={!submitDestructive ? { background: "linear-gradient(75deg, #e6251c, #ff7676)" } : {}}
              >
                {submitLabel}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Confirm Modal ─────────────────────────────────────────────────────────────
export function ConfirmModal({
  title,
  message,
  onConfirm,
  onClose,
  confirmLabel = "Ya, Lanjutkan",
  destructive = false,
}: {
  title: string;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
  confirmLabel?: string;
  destructive?: boolean;
}) {
  return (
    <AdminModal
      title={title}
      onClose={onClose}
      onSubmit={onConfirm}
      submitLabel={confirmLabel}
      submitDestructive={destructive}
      width="max-w-sm"
    >
      <p className="text-[13px] text-gray-600">{message}</p>
    </AdminModal>
  );
}

// ─── Field components for modals ──────────────────────────────────────────────
export function ModalField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

export function ModalInput({
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      className="w-full h-9 px-3 rounded-lg border border-gray-200 bg-white text-[12.5px] text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-all disabled:bg-gray-50 disabled:text-gray-400"
    />
  );
}

export function ModalSelect({
  value,
  onChange,
  options = [],
  placeholder,
  children,
}: {
  value: string;
  onChange: (v: string) => void;
  options?: { value: string; label: string }[];
  placeholder?: string;
  children?: React.ReactNode;
}) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full h-9 px-3 rounded-lg border border-gray-200 bg-white text-[12.5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-all"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {children
        ? children
        : options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
    </select>
  );
}

export function ModalTextarea({
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white text-[12.5px] text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-all resize-none"
    />
  );
}
