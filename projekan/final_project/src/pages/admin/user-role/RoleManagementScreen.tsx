import { useState, useEffect } from "react";
import { Plus, Search, Edit2, Trash2 } from "lucide-react";
import { AdminModal, ConfirmModal, ModalField, ModalInput, ModalSelect } from "@/components/admin/shared/AdminModal";
import { PermissionMatrix } from "@/components/admin/shared/PermissionMatrix";
import { getRoles, saveRoles, getUsers } from "@/store/authStore";
import { generateId } from "@/store/dataStore";
import { api } from "@/services/api";
import type { AppRole, RolePermissions } from "@/types";


const DEFAULT_PERMS: RolePermissions = {
  pengajuanDana: "viewer",
  pengadaan: "viewer",
  pengujian: "viewer",
  pembayaran: "no-access",
  templateDokumen: "viewer",
  masterData: "no-access",
  userManagement: "no-access",
  dashboard: "viewer",
};

export function RoleManagementScreen() {
  const [roles, setRoles] = useState<AppRole[]>([]);
  const [loading, setLoading] = useState(true);
  const allUsers = getUsers();
  const [search, setSearch] = useState("");

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<AppRole | null>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState<AppRole | null>(null);

  const [form, setForm] = useState({
    name: "",
    roleType: "admin" as "admin" | "user",
    color: "#252271",
  });

  const fetchRoles = async () => {
    setLoading(true);
    try {
      const res = await api.get('/roles');
      setRoles(res.data);
      saveRoles(res.data);
    } catch (e) {
      console.warn('API unavailable, falling back to local roles store:', e);
      setRoles(getRoles());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const handleAddSubmit = async () => {
    if (!form.name) return;
    try {
      await api.post('/roles', {
        name: form.name,
        description: `Role Type: ${form.roleType.toUpperCase()}`,
        roleType: form.roleType,
        color: form.color,
        permissions: DEFAULT_PERMS,
      });
      fetchRoles();
      setShowAdd(false);
      setForm({ name: "", roleType: "admin", color: "#252271" });
    } catch (e: any) {
      alert(e.response?.data?.message || 'Gagal menyimpan role ke database.');
    }
  };

  const handleEditSubmit = async () => {
    if (!showEdit) return;
    try {
      await api.put(`/roles/${showEdit.id}`, {
        name: showEdit.name,
        description: showEdit.description,
        roleType: showEdit.roleType || 'admin',
        color: showEdit.color,
        permissions: showEdit.permissions || DEFAULT_PERMS,
      });
      fetchRoles();
      setShowEdit(null);
    } catch (e: any) {
      alert(e.response?.data?.message || 'Gagal merubah role di database.');
    }
  };

  const handleDelete = async () => {
    if (!showConfirmDelete) return;
    try {
      await api.delete(`/roles/${showConfirmDelete.id}`);
      fetchRoles();
      setShowConfirmDelete(null);
    } catch (e: any) {
      alert(e.response?.data?.message || 'Gagal menghapus role dari database.');
    }
  };

  const filteredRoles = roles.filter(r =>
    (r.name || "").toLowerCase().includes(search.toLowerCase())
  );

  const roleColors = [
    { bg: "bg-[#fee2e2]", text: "text-[#dc2626]", badge: "bg-[#f0fdf4] text-[#15803d]" },
    { bg: "bg-[#eef2ff]", text: "text-[#4338ca]", badge: "bg-[#eef2ff] text-[#4338ca]" },
    { bg: "bg-[#fef9c3]", text: "text-[#ca8a04]", badge: "bg-[#fef9c3] text-[#ca8a04]" },
    { bg: "bg-[#d1fae5]", text: "text-[#065f46]", badge: "bg-[#d1fae5] text-[#065f46]" },
  ];

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc] px-[32px] py-[40px] select-none">
      <h1 className="text-[#252271] text-[28px] font-bold tracking-tight leading-tight mb-[24px]">Manajemen Role</h1>

      <div className="bg-white rounded-[24px] shadow-[0px_0px_5.45px_rgba(0,0,0,0.09)] p-[20px]">
          {/* Search & Add */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-5 gap-3">
            <div className="relative w-full sm:w-[320px]">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama role..."
                className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] pl-[37px] pr-4 py-2 text-[12px] text-[#0f172a] placeholder-[#9ca3af] outline-none focus:border-[#252271] transition-colors"
              />
            </div>
            <button
              onClick={() => setShowAdd(true)}
              className="w-full sm:w-auto bg-gradient-to-b from-[#e6251c] to-[#c20f06] rounded-[10px] px-4 py-2 flex items-center justify-center gap-1.5 text-white text-[12px] font-medium hover:brightness-110 active:scale-95 transition-all duration-150 shrink-0 shadow-md"
            >
              <Plus size={15} />
              Tambah Role
            </button>
          </div>

          {/* Role Table */}
          <div className="rounded-[16px] border border-[#f1f5f9] overflow-x-auto">
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead>
                <tr className="bg-[#252271] text-white text-[12px] font-bold h-[44px]">
                  <th className="pl-5 pr-3 py-3 w-[320px]">Role</th>
                  <th className="px-3 py-3 w-[180px]">Jumlah User</th>
                  <th className="px-3 py-3">Akses Utama</th>
                  <th className="px-3 py-3 w-[120px] text-right pr-5">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {filteredRoles.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-10 text-center text-[#94a3b8] text-[13px]">
                      Tidak ada role ditemukan.
                    </td>
                  </tr>
                ) : (
                  filteredRoles.map((role, idx) => {
                    const colorScheme = roleColors[idx % roleColors.length];
                    const userCount = allUsers.filter(u => u.roleId === role.id).length;
                    const initial = role.name ? role.name.charAt(0).toUpperCase() : "R";

                    return (
                      <tr key={role.id} className="hover:bg-[#fafafa] transition-colors">
                        <td className="pl-5 pr-3 py-3.5 flex items-center gap-3">
                          <div className={`${colorScheme.bg} ${colorScheme.text} size-8 rounded-full flex items-center justify-center shrink-0 text-[12px] font-bold`}>
                            {initial}
                          </div>
                          <div>
                            <p className="text-[#0f172a] text-[12px] font-bold">{role.name}</p>
                            <p className="text-[#94a3b8] text-[10px]">{role.description || "System Role"}</p>
                          </div>
                        </td>
                        <td className="px-3 py-4 text-[#0f172a] text-[12px] font-semibold">
                          {userCount} User
                        </td>
                        <td className="px-3 py-4">
                          <span className={`${colorScheme.badge} text-[11px] font-bold px-2.5 py-1 rounded-full inline-block`}>
                            {role.name.toLowerCase().includes("admin") ? "Semua Menu (Full Access)" : "Menu Terbatas"}
                          </span>
                        </td>
                        <td className="px-3 py-4 pr-5 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={() => setShowEdit(role)}
                              className="p-1.5 rounded-[6px] hover:bg-[#e0e7ff] text-[#252271] transition-colors"
                              title="Edit Role"
                            >
                              <Edit2 size={15} />
                            </button>
                            <button
                              onClick={() => setShowConfirmDelete(role)}
                              className="p-1.5 rounded-[6px] hover:bg-[#fef2f2] text-[#cc0000] transition-colors"
                              title="Hapus Role"
                            >
                              <Trash2 size={15} />
                            </button>
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

      {/* Add Role Modal */}
      {showAdd && (
        <AdminModal title="Tambah Role Baru" onClose={() => setShowAdd(false)} onSubmit={handleAddSubmit} submitLabel="Simpan Role" width="max-w-4xl">
          <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Nama Role" required>
                <ModalInput value={form.name} onChange={v => setForm(p => ({ ...p, name: v }))} placeholder="contoh: Staff Pengadaan..." />
              </ModalField>
              <ModalField label="User / Admin" required>
                <ModalSelect
                  value={form.roleType}
                  onChange={v => setForm(p => ({ ...p, roleType: v as "admin" | "user" }))}
                  options={[
                    { value: "admin", label: "Admin" },
                    { value: "user", label: "User" },
                  ]}
                />
              </ModalField>
            </div>

            {form.roleType === "admin" && (
              <div className="border-t border-gray-100 pt-3">
                <PermissionMatrix />
              </div>
            )}
          </div>
        </AdminModal>
      )}

      {/* Edit Role Modal */}
      {showEdit && (
        <AdminModal title={`Edit Role: ${showEdit.name}`} onClose={() => setShowEdit(null)} onSubmit={handleEditSubmit} submitLabel="Perbarui" width="max-w-4xl">
          <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
            <div className="grid grid-cols-3 gap-3">
              <ModalField label="Nama Role" required>
                <ModalInput value={showEdit.name} onChange={v => setShowEdit(p => p ? { ...p, name: v } : null)} />
              </ModalField>
              <ModalField label="User / Admin" required>
                <ModalSelect
                  value={showEdit.roleType || "admin"}
                  onChange={v => setShowEdit(p => p ? { ...p, roleType: v as "admin" | "user" } : null)}
                  options={[
                    { value: "admin", label: "Admin" },
                    { value: "user", label: "User" },
                  ]}
                />
              </ModalField>
              <ModalField label="Status Role">
                <div className="flex gap-2 mt-1">
                  <button
                    type="button"
                    onClick={() => setShowEdit(p => p ? { ...p, active: true } : null)}
                    className={`px-3 py-1.5 rounded-lg text-[11.5px] font-bold transition-all flex items-center gap-1.5 ${
                      showEdit.active !== false ? "bg-[#16a34a] text-white shadow-sm" : "bg-gray-100 text-gray-600 border border-gray-200"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white" />
                    Aktif
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEdit(p => p ? { ...p, active: false } : null)}
                    className={`px-3 py-1.5 rounded-lg text-[11.5px] font-bold transition-all flex items-center gap-1.5 ${
                      showEdit.active === false ? "bg-[#dc2626] text-white shadow-sm" : "bg-gray-100 text-gray-600 border border-gray-200"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white" />
                    Non-Aktif
                  </button>
                </div>
              </ModalField>
            </div>

            {showEdit.roleType === "admin" && (
              <div className="border-t border-gray-100 pt-3">
                <PermissionMatrix />
              </div>
            )}
          </div>
        </AdminModal>
      )}

      {showConfirmDelete && (
        <ConfirmModal
          title="Hapus Role"
          message={`Apakah Anda yakin ingin menghapus role ${showConfirmDelete.name}?`}
          onConfirm={handleDelete}
          onClose={() => setShowConfirmDelete(null)}
          confirmLabel="Hapus"
          destructive
        />
      )}
    </div>
  );
}
