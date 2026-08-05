import { useState, useEffect } from "react";
import { Plus, Eye, Trash2, Edit2, Search } from "lucide-react";
import { AdminModal, ConfirmModal, ModalField, ModalInput, ModalSelect } from "@/components/admin/shared/AdminModal";
import { api } from "@/services/api";
import type { AppUser, AppRole } from "@/types";
import { useAuth } from "@/store/authStore";



const DEPARTEMEN_OPTIONS = [
  { value: "CUS - CORPORATE SECRETARY", label: "CUS - CORPORATE SECRETARY" },
  { value: "CUL - GRC AND LEGAL", label: "CUL - GRC AND LEGAL" },
  { value: "CUG - LOGISTIC", label: "CUG - LOGISTIC" },
  { value: "CUI - INTERNAL AUDIT", label: "CUI - INTERNAL AUDIT" },
  { value: "CUP - STRATEGIC PLANNING", label: "CUP - STRATEGIC PLANNING" },
  { value: "COS - HSE AND SECURITY", label: "COS - HSE AND SECURITY" },
  { value: "COC - COMMERCIAL", label: "COC - COMMERCIAL" },
  { value: "COH - TRAIN SERVICES FACILITIES AND CUSTOMER CARE", label: "COH - TRAIN SERVICES FACILITIES AND CUSTOMER CARE" },
  { value: "CTI - INFORMATION TECHNOLOGY", label: "CTI - INFORMATION TECHNOLOGY" },
  { value: "CTR - ROLLING STOCK", label: "CTR - ROLLING STOCK" },
  { value: "CTS - INFRASTRUCTURE", label: "CTS - INFRASTRUCTURE" },
  { value: "CUT - TESTING COMMITEE", label: "CUT - TESTING COMMITEE" },
  { value: "CAF - FINANCE", label: "CAF - FINANCE" },
  { value: "CAA - BUDGETING AND ACCOUNTING", label: "CAA - BUDGETING AND ACCOUNTING" },
  { value: "CAH - HUMAN CAPITAL", label: "CAH - HUMAN CAPITAL" },
];

export function UserManagementScreen() {
  const { hasPermission } = useAuth();
  const [users, setUsers] = useState<AppUser[]>([]);
  const [roles, setRoles] = useState<AppRole[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("Semua Departemen");

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<AppUser | null>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState<AppUser | null>(null);
  const [showDetail, setShowDetail] = useState<AppUser | null>(null);

  const [form, setForm] = useState({
    name: "", username: "", email: "", password: "", roleId: "", departemen: "CUG - LOGISTIC",
    division: "Operational", directorate: "Direktorat Operasi & Pemasaran", kodeUser: ""
  });
  const [editForm, setEditForm] = useState<Partial<AppUser>>({});

  const fetchData = async () => {
    setLoading(true);
    try {
      const [usersRes, rolesRes] = await Promise.all([
        api.get("/users"),
        api.get("/roles")
      ]);
      setUsers(usersRes.data);
      setRoles(rolesRes.data);
    } catch (e) {
      console.warn("Gagal memuat user atau role dari API:", e);
      setUsers([]);
      setRoles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddSubmit = async () => {
    if (!form.email || !form.name || !form.username || !form.password || !form.roleId) {
      alert("Harap isi Nama Lengkap, Username, Email, Password, dan Role user.");
      return;
    }
    const selectedRole = form.roleId;
    const userPassword = form.password;
    try {
      await api.post("/users", {
        name: form.name,
        email: form.email,
        username: form.username || form.email.split("@")[0],
        password: userPassword,
        roleId: selectedRole,
        departemen: form.departemen || "CUG - LOGISTIC",
      });

      setShowAdd(false);
      setForm({ name: "", username: "", email: "", password: "", roleId: "", departemen: "CUG - LOGISTIC", division: "Operational", directorate: "Direktorat Operasi & Pemasaran", kodeUser: "" });
      alert(`User berhasil dibuat di Database!\nEmail: ${form.email}`);
      fetchData();
    } catch (e: any) {
      let errMsg = "Gagal menyimpan user ke database.";
      if (e.response?.data?.errors?.email) {
        errMsg = "Email ini sudah terdaftar di database! Silakan gunakan alamat email lain.";
      } else if (e.response?.data?.message) {
        errMsg = e.response.data.message;
      } else if (e.response?.data?.errors) {
        errMsg = Object.values(e.response.data.errors).flat().join("\n");
      }
      alert(errMsg);
    }
  };

  const handleEditSubmit = async () => {
    if (!showEdit) return;
    try {
      await api.put(`/users/${showEdit.id}`, editForm);
      setShowEdit(null);
      fetchData();
    } catch (e: any) {
      alert(e.response?.data?.message || "Gagal mengedit user di database.");
    }
  };

  const handleDelete = async () => {
    if (!showConfirmDelete) return;
    try {
      await api.delete(`/users/${showConfirmDelete.id}`);
      setShowConfirmDelete(null);
      fetchData();
    } catch (e: any) {
      alert(e.response?.data?.message || "Gagal menghapus user dari database.");
    }
  };

  const filteredUsers = users.filter((u) => {
    const matchSearch = (u.name || "").toLowerCase().includes(search.toLowerCase()) ||
                        (u.email || "").toLowerCase().includes(search.toLowerCase());
    const matchDept = deptFilter === "Semua Departemen" || (u.departemen && u.departemen.includes(deptFilter));
    return matchSearch && matchDept;
  });

  const depts = ["Semua Departemen", ...Array.from(new Set(users.map(u => u.departemen ? u.departemen.split(" - ")[0] : "Lainnya").filter(Boolean)))];

  const getRoleBadge = (roleId?: string) => {
    const r = roles.find(role => role.id === roleId);
    if (!r) return { name: "User", bg: "bg-[#eef2ff] text-[#4338ca]" };
    return {
      name: r.name,
      bg: r.name.toLowerCase().includes("admin") ? "bg-[#fef2f2] text-[#b91c1c]" :
          r.name.toLowerCase().includes("finance") ? "bg-[#fef9c3] text-[#ca8a04]" :
          "bg-[#eef2ff] text-[#4338ca]"
    };
  };

  const avatarColors = [
    { bg: "bg-[#fee2e2]", text: "text-[#dc2626]" },
    { bg: "bg-[#e0e7ff]", text: "text-[#4f46e5]" },
    { bg: "bg-[#fef9c3]", text: "text-[#ca8a04]" },
    { bg: "bg-[#d1fae5]", text: "text-[#065f46]" },
  ];

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc] px-[32px] py-[40px] select-none">
      <h1 className="text-[#252271] text-[28px] font-bold tracking-tight leading-tight mb-[24px]">Manajemen User</h1>

      <div className="bg-white rounded-[24px] shadow-[0px_0px_5.45px_rgba(0,0,0,0.09)] p-[20px]">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-5 gap-3">
            <div className="flex flex-col sm:flex-row gap-3 items-center w-full sm:w-auto flex-1 max-w-[480px]">
              <div className="relative w-full flex-1">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari nama atau email..."
                  className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] pl-[37px] pr-4 py-2 text-[12px] text-[#0f172a] placeholder-[#9ca3af] outline-none focus:border-[#252271] transition-colors"
                />
              </div>
              <select
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
                className="w-full sm:w-auto bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] px-4 py-2 text-[12px] text-[#475569] outline-none cursor-pointer hover:border-[#252271] transition-colors shrink-0"
              >
                {depts.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            {hasPermission("userManagement", "editor") && <button
              onClick={() => setShowAdd(true)}
              className="w-full sm:w-auto bg-gradient-to-b from-[#e6251c] to-[#c20f06] rounded-[10px] px-4 py-2 flex items-center justify-center gap-1.5 text-white text-[12px] font-medium hover:brightness-110 active:scale-95 transition-all duration-150 shrink-0 shadow-md"
            >
              <Plus size={15} />
              Tambah User
            </button>}
          </div>

          {/* Table Container */}
          <div className="rounded-[16px] border border-[#f1f5f9] overflow-x-auto">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="bg-[#252271] text-white text-[12px] font-bold">
                  <th className="pl-5 pr-3 py-3 w-[320px]">User</th>
                  <th className="px-3 py-3 w-[160px]">Departemen</th>
                  <th className="px-3 py-3">Role</th>
                  <th className="px-3 py-3 w-[130px]">Status</th>
                  <th className="px-3 py-3 w-[120px] text-right pr-5">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-10 text-center text-[#94a3b8] text-[13px]">
                      {loading ? "Memuat data user..." : "Tidak ada data user ditemukan."}
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user, idx) => {
                    const colorScheme = avatarColors[idx % avatarColors.length];
                    const roleBadge = getRoleBadge(user.roleId);
                    const initial = user.name ? user.name.charAt(0).toUpperCase() : "U";

                    return (
                      <tr key={user.id} className="hover:bg-[#fafafa] transition-colors">
                        <td className="pl-5 pr-3 py-3.5 flex items-center gap-3">
                          <div className={`${colorScheme.bg} ${colorScheme.text} size-8 rounded-full flex items-center justify-center shrink-0 text-[12px] font-bold`}>
                            {initial}
                          </div>
                          <div className="min-w-0">
                            <p className="text-[#0f172a] text-[12px] font-bold truncate">{user.name}</p>
                            <p className="text-[#94a3b8] text-[11px] truncate">{user.email}</p>
                          </div>
                        </td>
                        <td className="px-3 py-3.5">
                          <span className="bg-[#f1f5f9] text-[#334155] text-[11px] font-semibold px-2.5 py-1 rounded-[6px] inline-block truncate max-w-[140px]">
                            {user.departemen ? user.departemen.split(" - ")[0] : "General"}
                          </span>
                        </td>
                        <td className="px-3 py-3.5">
                          <span className={`${roleBadge.bg} text-[11px] font-bold px-2.5 py-1 rounded-[6px] inline-block`}>
                            {roleBadge.name}
                          </span>
                        </td>
                        <td className="px-3 py-3.5">
                          {user.isActive !== false ? (
                            <span className="bg-[#f0fdf4] text-[#15803d] text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 w-fit">
                              <span className="bg-[#22c55e] size-1.5 rounded-full" />
                              Aktif
                            </span>
                          ) : (
                            <span className="bg-[#fef2f2] text-[#cc0000] text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 w-fit">
                              <span className="bg-[#cc0000] size-1.5 rounded-full" />
                              Tidak Aktif
                            </span>
                          )}
                        </td>
                        <td className="px-3 py-3.5 pr-5 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={() => setShowDetail(user)}
                              className="p-1.5 rounded-[6px] hover:bg-[#e0e7ff] text-[#252271] transition-colors"
                              title="Lihat Detail"
                            >
                              <Eye size={15} />
                            </button>
                            {hasPermission("userManagement", "editor") && <button
                              onClick={() => { setEditForm(user); setShowEdit(user); }}
                              className="p-1.5 rounded-[6px] hover:bg-[#f1f5f9] text-gray-500 transition-colors"
                              title="Edit User"
                            >
                              <Edit2 size={15} />
                            </button>}
                            {hasPermission("userManagement", "editor") && <button
                              onClick={() => setShowConfirmDelete(user)}
                              className="p-1.5 rounded-[6px] hover:bg-[#fef2f2] text-[#cc0000] transition-colors"
                              title="Hapus User"
                            >
                              <Trash2 size={15} />
                            </button>}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      {/* Detail User Modal */}
      {showDetail && (
        <AdminModal title="Detail User" onClose={() => setShowDetail(null)} width="max-w-md">
          <div className="space-y-4 text-[12px] py-2">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="bg-[#252271] text-white size-10 rounded-full flex items-center justify-center text-sm font-bold">
                {showDetail.name ? showDetail.name.charAt(0).toUpperCase() : "U"}
              </div>
              <div>
                <h4 className="font-bold text-[#0f172a] text-sm">{showDetail.name}</h4>
                <p className="text-gray-500 text-[11px]">{showDetail.email}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-[#334155]">
              <div>
                <p className="text-gray-400 text-[10px] uppercase font-bold">Departemen</p>
                <p className="font-semibold">{showDetail.departemen || "-"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-[10px] uppercase font-bold">Divisi</p>
                <p className="font-semibold">{(showDetail as any).division || "-"}</p>

              </div>
              <div>
                <p className="text-gray-400 text-[10px] uppercase font-bold">Role</p>
                <p className="font-semibold">{roles.find(r => r.id === showDetail.roleId)?.name || "User"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-[10px] uppercase font-bold">Status</p>
                <p className={`font-semibold ${showDetail.isActive ? "text-green-600" : "text-red-500"}`}>
                  {showDetail.isActive ? "Aktif" : "Non-Aktif"}
                </p>
              </div>
            </div>
          </div>
        </AdminModal>
      )}

      {/* Add User Modal */}
      {showAdd && (
        <AdminModal title="Tambah User" onClose={() => setShowAdd(false)} onSubmit={handleAddSubmit} submitLabel="Simpan User" width="max-w-lg">
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Nama Lengkap" required><ModalInput value={form.name} onChange={v => setForm(p => ({ ...p, name: v }))} placeholder="Nama lengkap..." /></ModalField>
              <ModalField label="Username" required><ModalInput value={form.username} onChange={v => setForm(p => ({ ...p, username: v }))} placeholder="username..." /></ModalField>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Email" required><ModalInput type="email" value={form.email} onChange={v => setForm(p => ({ ...p, email: v }))} placeholder="user@perusahaan.com" /></ModalField>
              <ModalField label="Password" required><ModalInput type="password" value={form.password} onChange={v => setForm(p => ({ ...p, password: v }))} placeholder="Password..." /></ModalField>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Level / Role" required>
                <ModalSelect value={form.roleId} onChange={v => setForm(p => ({ ...p, roleId: v }))}
                  options={roles.map(r => ({ value: r.id, label: r.name }))} />
              </ModalField>
              <ModalField label="Kode User"><ModalInput value={form.kodeUser} onChange={v => setForm(p => ({ ...p, kodeUser: v }))} placeholder="USR-001" /></ModalField>
            </div>
            <ModalField label="Departemen" required>
              <ModalSelect value={form.departemen} onChange={v => setForm(p => ({ ...p, departemen: v }))} options={DEPARTEMEN_OPTIONS} />
            </ModalField>
          </div>
        </AdminModal>
      )}

      {/* Edit Modal */}
      {showEdit && (
        <AdminModal title="Edit User" onClose={() => setShowEdit(null)} onSubmit={handleEditSubmit} submitLabel="Perbarui" width="max-w-lg">
          <div className="space-y-3">
            <ModalField label="Nama Lengkap" required><ModalInput value={editForm.name || ""} onChange={v => setEditForm(p => ({ ...p, name: v }))} /></ModalField>
            <ModalField label="Email" required><ModalInput type="email" value={editForm.email || ""} onChange={v => setEditForm(p => ({ ...p, email: v }))} /></ModalField>
            <ModalField label="Role / Level" required>
              <ModalSelect value={editForm.roleId || ""} onChange={v => setEditForm(p => ({ ...p, roleId: v }))} options={roles.map(r => ({ value: r.id, label: r.name }))} />
            </ModalField>
            <ModalField label="Departemen" required>
              <ModalSelect value={editForm.departemen || ""} onChange={v => setEditForm(p => ({ ...p, departemen: v }))} options={DEPARTEMEN_OPTIONS} />
            </ModalField>
          </div>
        </AdminModal>
      )}

      {showConfirmDelete && (
        <ConfirmModal
          title="Hapus User"
          message={`Apakah Anda yakin ingin menghapus user ${showConfirmDelete.name}?`}
          onConfirm={handleDelete}
          onClose={() => setShowConfirmDelete(null)}
          confirmLabel="Hapus"
          destructive
        />
      )}
    </div>
  );
}
