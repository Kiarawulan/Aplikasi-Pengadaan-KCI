import { User, LogOut } from "lucide-react";
import { useAuth } from "../../store/authStore";

export function UserCard({ collapsed, active, onClick }: { collapsed: boolean; active: boolean; onClick: () => void }) {
  const { currentUser, logout } = useAuth();
  return (
    <div className="mx-2 mb-1 w-[calc(100%-16px)]">
      <button
        onClick={onClick}
        className="p-2.5 rounded-xl text-left w-full transition-all"
        style={{ background: active ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-white/20 shrink-0 flex items-center justify-center font-bold text-white text-[12px]">
            {currentUser?.name?.charAt(0) ?? <User size={15} className="text-white/80" />}
          </div>
          {!collapsed && (
            <>
              <div className="overflow-hidden flex-1 min-w-0">
                <p className="text-white font-semibold text-[11.5px] leading-tight truncate">{currentUser?.name ?? "User"}</p>
                <p className="text-white/45 text-[10px] truncate">{currentUser?.email ?? ""}</p>
              </div>
              <button
                onClick={e => { e.stopPropagation(); logout(); }}
                className="text-white/40 hover:text-white/80 transition-colors shrink-0"
                title="Logout"
              >
                <LogOut size={13} />
              </button>
            </>
          )}
        </div>
      </button>
    </div>
  );
}
