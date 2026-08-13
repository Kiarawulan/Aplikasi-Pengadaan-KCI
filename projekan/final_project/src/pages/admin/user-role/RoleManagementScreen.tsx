import { useState, useEffect } from "react";
import { Plus, Search, Edit2, Trash2 } from "lucide-react";
import { AdminModal, ConfirmModal, ModalField, ModalInput, ModalSelect } from "@/components/admin/shared/AdminModal";
import { WarningModal, WarningVariant } from "@/components/common/WarningModal";
import { PermissionMatrix, permissionGroupsFromRole, rolePermissionsFromGroups, type PermGroup } from "@/components/admin/shared/PermissionMatrix";
import { useAuth } from "@/store/authStore";
import { api } from "@/services/api";
import type { AppRole, RolePermissions } from "@/types";


const DEFAULT_PERMS: RolePermissions = {
  pengajuanDana: "no-access",
  pengadaan: "no-access",
  pengujian: "no-access",
  pembayaran: "no-access",
  templateDokumen: "no-access",
  masterData: "no-access",
  userManagement: "no-access",
  roleManagement: "no-access",
  dashboard: "no-access",
};

function normalizePermissions(permissions?: Partial<RolePermissions>): RolePermissions {
  return { ...DEFAULT_PERMS, ...(permissions || {}) };
}

const DEFAULT_USER_PERMS: RolePermissions = {
  pengajuanDana: "editor",
  pengadaan: "editor",
  pengujian: "editor",
  pembayaran: "editor",
  templateDokumen: "viewer",
  dashboard: "viewer",
  masterData: "no-access",
  userManagement: "no-access",
  roleManagement: "no-access",
};

const DEFAULT_ADMIN_PERMS: RolePermissions = {
  pengajuanDana: "editor",
  pengadaan: "editor",
  pengujian: "editor",
  pembayaran: "editor",
  templateDokumen: "editor",
  masterData: "editor",
  userManagement: "editor",
  roleManagement: "editor",
  dashboard: "editor",
};

export function RoleManagementScreen() {
  const { hasPermission } = useAuth();
  const [roles, setRoles] = useState<AppRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<AppRole | null>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState<AppRole | null>(null);

  const [form, setForm] = useState({
    name: "",
    roleType: "admin" as "admin" | "user",
    color: "#252271",
  });
  const [addGroups, setAddGroups] = useState<PermGroup[]>(() => permissionGroupsFromRole(DEFAULT_ADMIN_PERMS));
  const [editGroups, setEditGroups] = useState<PermGroup[]>(() => permissionGroupsFromRole(DEFAULT_ADMIN_PERMS));

  const handleRoleTypeChangeAdd = (type: "admin" | "user") => {
    setForm(p => ({ ...p, roleType: type }));
    const preset = type === "user" ? DEFAULT_USER_PERMS : DEFAULT_ADMIN_PERMS;
    setAddGroups(permissionGroupsFromRole(preset));
  };

  const handleRoleTypeChangeEdit = (type: "admin" | "user") => {
    setShowEdit(p => p ? { ...p, roleType: type } : null);
    const preset = type === "user" ? DEFAULT_USER_PERMS : DEFAULT_ADMIN_PERMS;
    setEditGroups(permissionGroupsFromRole(preset));
  };

  const [notifyModal, setNotifyModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    variant: WarningVariant;
  }>({
    isOpen: false,
    title: "",
    message: "",
    variant: "info",
  });

  const showNotify = (title: string, message: string, variant: WarningVariant = "info") => {
    setNotifyModal({ isOpen: true, title, message, variant });
  };

  const fetchRoles = async () => {
    setLoading(true);
    try {
      const res = await api.get('/roles');
      setRoles(res.data);
    } catch (e) {
      console.warn('Gagal memuat role dari API:', e);
      setRoles([]);
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
        permissions: rolePermissionsFromGroups(addGroups, DEFAULT_PERMS),
      });
      fetchRoles();
      setShowAdd(false);
      setForm({ name: "", roleType: "admin", color: "#252271" });
      setAddGroups(permissionGroupsFromRole(DEFAULT_ADMIN_PERMS));
      showNotify("Role Berhasil Ditambahkan", `Role ${form.name} berhasil dibuat!`, "info");
    } catch (e: any) {
      showNotify("Gagal Menyimpan", e.response?.data?.message || 'Gagal menyimpan role ke database.', "error");
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
        active: showEdit.active !== false,
        permissions: rolePermissionsFromGroups(editGroups, normalizePermissions(showEdit.permissions)),
      });
      showNotify("Role Diperbarui", "Role berhasil diperbarui!", "info");
      fetchRoles();
      setShowEdit(null);
    } catch (e: any) {
      showNotify("Gagal Memperbarui", e.response?.data?.message || e.response?.data?.errors?.name?.[0] || 'Gagal merubah role di database.', "error");
    }
  };

  const handleDelete = async () => {
    if (!showConfirmDelete) return;
    try {
      await api.delete(`/roles/${showConfirmDelete.id}`);
      fetchRoles();
      setShowConfirmDelete(null);
      showNotify("Role Dihapus", "Role berhasil dihapus dari database.", "info");
    } catch (e: any) {
      showNotify("Gagal Menghapus", e.response?.data?.message || 'Gagal menghapus role dari database.', "error");
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
            {hasPermission("roleManagement", "editor") && <button
              onClick={() => setShowAdd(true)}
              className="w-full sm:w-auto bg-gradient-to-b from-[#e6251c] to-[#c20f06] rounded-[10px] px-4 py-2 flex items-center justify-center gap-1.5 text-white text-[12px] font-medium hover:brightness-110 active:scale-95 transition-all duration-150 shrink-0 shadow-md"
            >
              <Plus size={15} />
              Tambah Role
            </button>}
          </div>

          {/* Role Table */}
          <div className="rounded-[16px] border border-[#f1f5f9] overflow-x-auto">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="bg-[#252271] text-white text-[12px] font-bold h-[44px]">
                  <th className="pl-5 pr-3 py-3 w-[280px]">Role</th>
                  <th className="px-3 py-3 w-[140px]">Jumlah User</th>
                  <th className="px-3 py-3">Akses Utama</th>
                  <th className="px-3 py-3 w-[130px]">Status</th>
                  <th className="px-3 py-3 w-[120px] text-right pr-5">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {filteredRoles.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-10 text-center text-[#94a3b8] text-[13px]">
                      {loading ? "Memuat data role..." : "Tidak ada role ditemukan."}
                    </td>
                  </tr>
                ) : (
                  filteredRoles.map((role, idx) => {
                    const colorScheme = roleColors[idx % roleColors.length];
                    const userCount = role.userCount || 0;
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
                        <td className="px-3 py-4">
                          {role.active !== false ? (
                            <span className="bg-[#f0fdf4] text-[#15803d] text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 w-fit">
                              <span className="bg-[#22c55e] size-1.5 rounded-full" />
                              Aktif
                            </span>
                          ) : (
                            <span className="bg-[#fef2f2] text-[#cc0000] text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 w-fit">
                              <span className="bg-[#cc0000] size-1.5 rounded-full" />
                              Non-Aktif
                            </span>
                          )}
                        </td>
                        <td className="px-3 py-4 pr-5 text-right">
                          <div className="flex items-center justify-end gap-1">
                            {hasPermission("roleManagement", "editor") && <button
                              onClick={() => { setEditGroups(permissionGroupsFromRole(normalizePermissions(role.permissions))); setShowEdit(role); }}
                              className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center hover:bg-amber-100 transition-colors"
                              title="Edit Role"
                            >
                              <Edit2 size={11} className="text-amber-600" />
                            </button>}
                            {hasPermission("roleManagement", "editor") && <button
                              onClick={() => setShowConfirmDelete(role)}
                              className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center hover:bg-red-100 transition-colors"
                              title="Hapus Role"
                            >
                              <Trash2 size={11} className="text-red-500" />
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
                  onChange={v => handleRoleTypeChangeAdd(v as "admin" | "user")}
                  options={[
                    { value: "admin", label: "Admin" },
                    { value: "user", label: "User" },
                  ]}
                />
              </ModalField>
            </div>

            <div className="border-t border-gray-100 pt-3">
              <PermissionMatrix groups={addGroups} onGroupsChange={setAddGroups} roleType={form.roleType} />
            </div>
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
                  onChange={v => handleRoleTypeChangeEdit(v as "admin" | "user")}
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

            <div className="border-t border-gray-100 pt-3">
              <PermissionMatrix groups={editGroups} onGroupsChange={setEditGroups} roleType={showEdit.roleType || "admin"} />
            </div>
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

      <WarningModal
        isOpen={notifyModal.isOpen}
        title={notifyModal.title}
        message={notifyModal.message}
        variant={notifyModal.variant}
        onClose={() => setNotifyModal(p => ({ ...p, isOpen: false }))}
      />
    </div>
  );
}
