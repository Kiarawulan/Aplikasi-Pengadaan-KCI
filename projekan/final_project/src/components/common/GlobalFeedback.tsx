import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, HelpCircle, Info, X } from "lucide-react";
import { createPortal } from "react-dom";

type FeedbackRequest = {
  title?: string;
  message: string;
  kind?: "info" | "success" | "error" | "confirm";
  resolve?: (accepted: boolean) => void;
};

const listeners = new Set<(request: FeedbackRequest) => void>();

export function showFeedback(message: string, title = "Informasi", kind: FeedbackRequest["kind"] = "info") {
  listeners.forEach(listener => listener({ message, title, kind }));
}

export function confirmFeedback(message: string, title = "Konfirmasi"): Promise<boolean> {
  return new Promise(resolve => listeners.forEach(listener => listener({ message, title, kind: "confirm", resolve })));
}

export function GlobalFeedback() {
  const [queue, setQueue] = useState<FeedbackRequest[]>([]);
  const current = queue[0];

  useEffect(() => {
    const listener = (request: FeedbackRequest) => setQueue(items => [...items, request]);
    listeners.add(listener);
    const nativeAlert = window.alert;
    window.alert = (message?: unknown) => showFeedback(String(message ?? ""));
    return () => {
      listeners.delete(listener);
      window.alert = nativeAlert;
    };
  }, []);

  if (!current) return null;
  const close = (accepted = false) => {
    current.resolve?.(accepted);
    setQueue(items => items.slice(1));
  };
  const config = current.kind === "success"
    ? { Icon: CheckCircle2, icon: "bg-emerald-100 text-emerald-600", button: "bg-emerald-600 hover:bg-emerald-700" }
    : current.kind === "error"
      ? { Icon: AlertCircle, icon: "bg-red-100 text-red-600", button: "bg-red-600 hover:bg-red-700" }
      : current.kind === "confirm"
        ? { Icon: HelpCircle, icon: "bg-amber-100 text-amber-600", button: "bg-[#cc0000] hover:bg-[#a90000]" }
        : { Icon: Info, icon: "bg-indigo-100 text-[#252271]", button: "bg-[#252271] hover:bg-[#1b1854]" };

  return createPortal(
    <div className="fixed inset-0 z-[20000] flex min-h-[100dvh] items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={() => close(false)}>
      <div role="alertdialog" aria-modal="true" className="relative w-full max-w-md rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl" onClick={event => event.stopPropagation()}>
        <button type="button" aria-label="Tutup" onClick={() => close(false)} className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100"><X size={18} /></button>
        <div className="flex items-start gap-4 pr-5">
          <div className={`grid size-12 shrink-0 place-items-center rounded-2xl ${config.icon}`}><config.Icon size={24} /></div>
          <div><h2 className="text-[15px] font-bold text-slate-900">{current.title}</h2><p className="mt-1.5 whitespace-pre-line text-[12px] leading-relaxed text-slate-600">{current.message}</p></div>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          {current.kind === "confirm" && <button type="button" onClick={() => close(false)} className="h-9 rounded-xl border border-slate-200 px-4 text-[12px] font-semibold text-slate-600 hover:bg-slate-50">Batal</button>}
          <button type="button" autoFocus onClick={() => close(true)} className={`h-9 rounded-xl px-5 text-[12px] font-bold text-white shadow-sm ${config.button}`}>{current.kind === "confirm" ? "Ya, Hapus" : "Mengerti"}</button>
        </div>
      </div>
    </div>, document.body,
  );
}
