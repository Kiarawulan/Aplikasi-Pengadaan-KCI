import { ChevronRight } from "lucide-react";
import type { Screen } from "@/types";


export function Breadcrumb({ segments, onNavigate }: {
  segments: { label: string; screen?: Screen }[];
  onNavigate: (s: Screen) => void;
}) {
  return (
    <div className="flex items-center gap-1.5 mb-4">
      {segments.map((seg, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight size={11} className="text-[#252271]/25" />}
          {seg.screen ? (
            <button onClick={() => onNavigate(seg.screen!)} className="text-[#252271]/45 text-[12px] font-medium hover:text-[#252271] transition-colors">
              {seg.label}
            </button>
          ) : (
            <span className="text-[#252271] text-[12px] font-bold">{seg.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
