import { Bell, LogOut } from "lucide-react";
import { useAuth } from "../../store/authStore";
import { getRoleById } from "../../store/authStore";

const ROLE_COLORS: Record<string, string> = {
  "role-admin": "#e6251c",
  "role-logistik": "#252271",
  "role-pbj": "#16a34a",
  "role-finance": "#d97706",
  "role-it": "#7c3aed",
  "role-user": "#64748b",
};

export function AdminTopBar({ title, subtitle }: { title: string; subtitle?: string }) {
  const { currentUser, logout } = useAuth();
  const role = currentUser ? getRoleById(currentUser.roleId) : null;
  const roleColor = role ? (ROLE_COLORS[role.id] ?? "#64748b") : "#64748b";

  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        {subtitle && <p className="text-[#252271]/55 text-[14px] font-medium">{subtitle}</p>}
        <h1 className="text-[#252271] text-[26px] font-black leading-tight">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        {/* Role badge */}
        {role && (
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-[11px] font-semibold"
            style={{ background: roleColor }}
          >
            {role.name}
          </div>
        )}
        <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100">
          <Bell size={13} className="text-gray-500" />
        </button>
        <button onClick={logout} className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100" title="Logout">
          <LogOut size={13} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
}
