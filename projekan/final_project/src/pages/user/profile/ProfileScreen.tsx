import { User, LogOut } from "lucide-react";
import { TopBar } from "@/components/layout/user/TopBar";
import { useAuth } from "@/store/authStore";


export function ProfileScreen() {
  const { currentUser, currentRole, logout } = useAuth();

  return (
    <div>
      <TopBar title="User Profile" />
      <div className="max-w-xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-5 mb-8 pb-6 border-b border-gray-100">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-xl">
              {currentUser?.name?.charAt(0) ?? <User size={26} className="text-gray-400" />}
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800">{currentUser?.name ?? "User"}</p>
              <p className="text-gray-500 text-[12px]">{currentUser?.email ?? ""}</p>
              <span
                className="mt-1 inline-block text-white text-[10px] font-medium px-2 py-0.5 rounded-full"
                style={{ background: currentRole?.color ?? "#64748b" }}
              >
                {currentRole?.name ?? "User"}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { label: "Nama Lengkap", value: currentUser?.name ?? "—" },
              { label: "Email", value: currentUser?.email ?? "—" },
              { label: "Divisi", value: currentUser?.departemen ?? "—" },
              { label: "Role Permission", value: currentRole?.name ?? "—" },
              { label: "Status Akun", value: currentUser?.isActive ? "Aktif" : "Non-aktif" },
              { label: "Terakhir Login", value: currentUser?.lastLogin ? new Date(currentUser.lastLogin).toLocaleString("id-ID") : "Sekarang" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-[10.5px] font-medium text-gray-400 mb-1">{f.label}</label>
                <p className="text-[12px] font-medium text-gray-800 bg-gray-50 px-3 py-2 rounded-lg">{f.value}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button
              onClick={logout}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 font-semibold text-[12.5px] transition-colors"
            >
              <LogOut size={15} /> Keluar (Logout)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
