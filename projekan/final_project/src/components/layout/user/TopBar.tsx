import { Bell, LogOut } from "lucide-react";
import { useAuth } from "@/store/authStore";


export function TopBar({ title, subtitle }: { title: string; subtitle?: string }) {
  const { logout } = useAuth();
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        {subtitle && <p className="text-[#252271]/55 text-[14px] font-medium">{subtitle}</p>}
        <h1 className="text-[#252271] text-[26px] font-black leading-tight">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100">
          <Bell size={13} className="text-gray-500" />
        </button>
        <button
          onClick={logout}
          className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100 hover:text-red-600"
          title="Keluar / Logout"
        >
          <LogOut size={13} className="text-gray-500 hover:text-red-600" />
        </button>
      </div>
    </div>
  );
}

