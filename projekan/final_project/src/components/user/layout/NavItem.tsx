export function NavItem({ icon, label, active, collapsed, onClick, badge = 0 }: {
  icon: React.ReactNode; label: string; active: boolean; collapsed: boolean; onClick: () => void; badge?: number;
}) {
  return (
    <button
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={`relative flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg transition-all text-left ${active ? "" : "hover:bg-white/10"}`}
      style={active ? { background: "rgba(255,255,255,0.18)" } : {}}
    >
      <span className="text-white/75 shrink-0">{icon}</span>
      {!collapsed && (
        <span className={`text-[12.5px] truncate ${active ? "text-white font-semibold" : "text-white/70 font-normal"}`}>{label}</span>
      )}
      {badge > 0 && <span className={`${collapsed ? "absolute right-1 top-1" : "ml-auto"} flex min-w-[18px] h-[18px] items-center justify-center rounded-full bg-white px-1 text-[9px] font-bold text-[#cc0000] shadow`}>{badge > 99 ? "99+" : badge}</span>}
    </button>
  );
}
