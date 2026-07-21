import { ChevronsLeft, ChevronsRight } from "lucide-react";

export function CollapseToggle({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center justify-center w-full h-7 hover:bg-white/10 transition-colors shrink-0 mb-1"
    >
      {collapsed ? <ChevronsRight size={13} className="text-white/35" /> : <ChevronsLeft size={13} className="text-white/35" />}
    </button>
  );
}
