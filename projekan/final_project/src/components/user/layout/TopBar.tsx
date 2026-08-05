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
        <button className="group w-9 h-9 rounded-xl bg-white/80 backdrop-blur-md shadow-sm flex items-center justify-center hover:bg-[#E6251C] hover:text-white border border-[#252271]/10">
          <Bell size={14} className="text-[#252271]/70 group-hover:text-white" />
        </button>
        <button
          onClick={logout}
          className="group w-9 h-9 rounded-xl bg-white/80 backdrop-blur-md shadow-sm flex items-center justify-center hover:bg-[#E6251C] hover:text-white border border-[#252271]/10"
          title="Keluar / Logout"
        >
          <LogOut size={14} className="text-[#252271]/70 group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}

