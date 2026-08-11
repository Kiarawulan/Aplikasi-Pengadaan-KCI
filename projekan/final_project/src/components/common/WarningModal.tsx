import React from "react";
import { AlertTriangle, AlertCircle, Info, X } from "lucide-react";

export type WarningVariant = "warning" | "error" | "info" | "duplicate";

interface WarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  detail?: string;
  variant?: WarningVariant;
  buttonText?: string;
}

export const WarningModal: React.FC<WarningModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  detail,
  variant = "warning",
  buttonText = "Saya Mengerti",
}) => {
  if (!isOpen) return null;

  const config = {
    warning: {
      bgIcon: "bg-amber-100",
      textIcon: "text-amber-600",
      borderModal: "border-amber-200",
      btnBg: "bg-amber-600 hover:bg-amber-700",
      icon: AlertTriangle,
    },
    error: {
      bgIcon: "bg-red-100",
      textIcon: "text-red-600",
      borderModal: "border-red-200",
      btnBg: "bg-[#e6251c] hover:bg-[#c20f06]",
      icon: AlertCircle,
    },
    duplicate: {
      bgIcon: "bg-rose-100",
      textIcon: "text-rose-600",
      borderModal: "border-rose-200",
      btnBg: "bg-rose-600 hover:bg-rose-700",
      icon: AlertCircle,
    },
    info: {
      bgIcon: "bg-blue-100",
      textIcon: "text-blue-600",
      borderModal: "border-blue-200",
      btnBg: "bg-[#252271] hover:bg-[#1b1854]",
      icon: Info,
    },
  }[variant];

  const Icon = config.icon;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-[9999] p-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl border ${config.borderModal} p-6 relative transform animate-in zoom-in-95 duration-150 select-none`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
          title="Tutup"
        >
          <X size={18} />
        </button>

        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-2xl ${config.bgIcon} flex items-center justify-center shrink-0 shadow-xs`}
          >
            <Icon size={24} className={config.textIcon} />
          </div>

          <div className="flex-1 pt-0.5">
            <h3 className="text-[15px] font-bold text-gray-900 leading-snug">
              {title}
            </h3>
            <p className="text-[12px] text-gray-600 mt-1.5 leading-relaxed font-normal">
              {message}
            </p>

            {detail && (
              <div className="mt-3 p-2.5 bg-gray-50 rounded-xl border border-gray-200/80 text-[11px] text-gray-700 font-medium font-mono break-words">
                {detail}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className={`px-5 py-2 rounded-xl text-[12px] font-bold text-white transition-all shadow-sm active:scale-95 cursor-pointer ${config.btnBg}`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
