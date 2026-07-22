export function Logo({ collapsed }: { collapsed: boolean }) {
  return (
    <div className={`flex items-center h-[56px] shrink-0 px-3 ${collapsed ? "justify-center" : ""}`}>
      <div className="flex items-center gap-2.5">
        {!collapsed && (
          <div className="leading-none">
            <p className="text-white font-black text-[13px] tracking-widest">PENGADAAN</p>

          </div>
        )}
      </div>
    </div>
  );
}
