import { useState } from "react";
import { Shield, Users, Lock, UserCheck } from "lucide-react";
import { AdminTopBar } from "../../components/admin/AdminTopBar";
import { VerifTable } from "../../components/admin/VerifTable";
import { AdminModal, ConfirmModal, ModalField, ModalInput, ModalSelect } from "../../components/admin/AdminModal";
import { PermissionMatrix } from "../../components/admin/PermissionMatrix";
import { getRoles, saveRoles, getUsers } from "../../store/authStore";
import { generateId } from "../../store/dataStore";
import type { AppRole, RolePermissions } from "../../types";

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

const COLOR_OPTIONS = [
  { value: "#e6251c", label: "Merah (Admin)" },
  { value: "#252271", label: "Navy (Logistik)" },
  { value: "#16a34a", label: "Hijau (PBJ)" },
  { value: "#d97706", label: "Oranye (Finance)" },
  { value: "#7c3aed", label: "Ungu (IT)" },
  { value: "#0891b2", label: "Cyan (Warehouse)" },
  { value: "#be185d", label: "Pink (HR)" },
  { value: "#64748b", label: "Abu (Default)" },
];

export function RoleManagementScreen() {
  const [roles, setRoles] = useState<AppRole[]>(() => getRoles());
  const allUsers = getUsers();

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<AppRole | null>(null);
  const [showView, setShowView] = useState<AppRole | null>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState<AppRole | null>(null);

  const emptyForm = (): { name: string; description: string; roleType: "admin" | "user"; color: string; permissions: RolePermissions } => ({
    name: "", description: "", roleType: "user", color: "#64748b", permissions: { ...DEFAULT_PERMS },
  });
  const [addForm, setAddForm] = useState(emptyForm());
  const [editForm, setEditForm] = useState<{ name: string; description: string; roleType: "admin" | "user"; color: string; permissions: RolePermissions }>(emptyForm());

  const refresh = () => setRoles(getRoles());

  const handleAdd = () => {
    if (!addForm.name) return;
    const newRole: AppRole = {
      id: generateId("ROLE"),
      name: addForm.name,
      description: addForm.description,
      roleType: addForm.roleType,
      color: addForm.color,
      permissions: addForm.permissions,
      createdAt: new Date().toISOString().split("T")[0],
      isSystem: false,
    };
    const updated = [...getRoles(), newRole];
    saveRoles(updated);
    setRoles(updated);
    setShowAdd(false);
    setAddForm(emptyForm());
  };

  const handleEdit = () => {
    if (!showEdit) return;
    const updated = getRoles().map(r => r.id === showEdit.id ? { ...r, ...editForm } : r);
    saveRoles(updated);
    setRoles(updated);
    setShowEdit(null);
  };

  const handleDelete = () => {
    if (!showConfirmDelete) return;
    const updated = getRoles().filter(r => r.id !== showConfirmDelete.id);
    saveRoles(updated);
    setRoles(updated);
    setShowConfirmDelete(null);
  };

  const usersWithRole = (roleId: string) => allUsers.filter(u => u.roleId === roleId).length;

  const columns = [
    {
      key: "role", label: "Role & Tipe Akses", render: (r: AppRole) => (
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${r.color}20` }}>
            <Shield size={14} style={{ color: r.color }} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="font-semibold text-gray-800 text-[12.5px]">{r.name}</p>
              {r.isSystem && (
                <span className="text-[9px] font-medium bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">System</span>
              )}
            </div>
            <p className="text-gray-400 text-[10.5px]">{r.description}</p>
          </div>
        </div>
      )
    },
    {
      key: "roleType", label: "Akses Panel", render: (r: AppRole) => (
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold ${
          (r.roleType === "admin" || r.id === "role-admin") ? "bg-red-50 text-red-600 border border-red-100" : "bg-blue-50 text-blue-600 border border-blue-100"
        }`}>
          {(r.roleType === "admin" || r.id === "role-admin") ? <>🔑 Admin Panel</> : <>👤 User Panel</>}
        </span>
      )
    },
    {
      key: "users", label: "Jumlah User", render: (r: AppRole) => (
        <div className="flex items-center gap-1.5">
          <Users size={12} className="text-gray-400" />
          <span className="text-gray-600 text-[12px]">{usersWithRole(r.id)} user</span>
        </div>
      )
    },
    {
      key: "perms", label: "Akses Utama", render: (r: AppRole) => {
        const editors = Object.entries(r.permissions || {})
          .filter(([, v]) => v === "editor")
          .map(([k]) => k.replace(/([A-Z])/g, ' $1').trim());
        return (
          <div className="flex flex-wrap gap-1">
            {editors.slice(0, 3).map(e => (
              <span key={e} className="text-[9.5px] bg-green-50 text-green-700 px-1.5 py-0.5 rounded font-medium">{e}</span>
            ))}
            {editors.length > 3 && <span className="text-[9.5px] text-gray-400">+{editors.length - 3}</span>}
          </div>
        );
      }
    },
  ];

  return (
    <div>
      <AdminTopBar title="Manajemen Role" subtitle="User & Role" />

      <VerifTable
        columns={columns}
        data={roles}
        searchKeys={["name", "description"]}
        onView={(r) => setShowView(r)}
        onEdit={(r) => {
          setEditForm({
            name: r.name,
            description: r.description,
            roleType: r.roleType || (r.id === "role-admin" ? "admin" : "user"),
            color: r.color,
            permissions: { ...r.permissions },
          });
          setShowEdit(r);
        }}
        onDelete={(r) => !r.isSystem && setShowConfirmDelete(r)}
        onAdd={() => { setAddForm(emptyForm()); setShowAdd(true); }}
        addLabel="Tambah Role"
        showCrudActions={true}
      />

      {/* Add Role Modal */}
      {showAdd && (
        <AdminModal title="Tambah Role Baru" onClose={() => setShowAdd(false)} onSubmit={handleAdd} submitLabel="Buat Role" width="max-w-2xl">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Nama Role" required>
                <ModalInput value={addForm.name} onChange={v => setAddForm(p => ({ ...p, name: v }))} placeholder="Nama role (e.g. Manajer Logistik)..." />
              </ModalField>
              <ModalField label="Warna Badge">
                <ModalSelect value={addForm.color} onChange={v => setAddForm(p => ({ ...p, color: v }))} options={COLOR_OPTIONS} />
              </ModalField>
            </div>

            {/* Role Type Selection: Admin vs User */}
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-3.5">
              <label className="block text-[12px] font-bold text-gray-700 mb-2">Pilih Tipe Akses Panel Aplikasi</label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                  addForm.roleType === "admin" ? "bg-white border-red-300 ring-2 ring-red-100 shadow-sm" : "bg-white/50 border-gray-200"
                }`}>
                  <input
                    type="radio"
                    name="addRoleType"
                    checked={addForm.roleType === "admin"}
                    onChange={() => setAddForm(p => ({ ...p, roleType: "admin" }))}
                    className="mt-0.5 text-red-600 focus:ring-red-200"
                  />
                  <div>
                    <p className="text-[12px] font-bold text-gray-800">🔑 Role Admin</p>
                    <p className="text-[10.5px] text-gray-400 mt-0.5">Dapat login & mengakses Website Admin untuk verifikasi & master data.</p>
                  </div>
                </label>

                <label className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                  addForm.roleType === "user" ? "bg-white border-blue-300 ring-2 ring-ring-blue-100 shadow-sm" : "bg-white/50 border-gray-200"
                }`}>
                  <input
                    type="radio"
                    name="addRoleType"
                    checked={addForm.roleType === "user"}
                    onChange={() => setAddForm(p => ({ ...p, roleType: "user" }))}
                    className="mt-0.5 text-blue-600 focus:ring-blue-200"
                  />
                  <div>
                    <p className="text-[12px] font-bold text-gray-800">👤 Role User Pengaju</p>
                    <p className="text-[10.5px] text-gray-400 mt-0.5">Khusus pengguna umum untuk mengajukan pengadaan & berkas.</p>
                  </div>
                </label>
              </div>
            </div>

            <ModalField label="Deskripsi">
              <ModalInput value={addForm.description} onChange={v => setAddForm(p => ({ ...p, description: v }))} placeholder="Deskripsi singkat hak akses role ini..." />
            </ModalField>

            <div>
              <p className="text-[12px] font-semibold text-gray-700 mb-3">Permission Matrix</p>
              <PermissionMatrix
                permissions={addForm.permissions}
                onChange={(key, level) => setAddForm(p => ({ ...p, permissions: { ...p.permissions, [key]: level } }))}
              />
            </div>
          </div>
        </AdminModal>
      )}

      {/* Edit Role Modal */}
      {showEdit && (
        <AdminModal title={`Edit Role: ${showEdit.name}`} onClose={() => setShowEdit(null)} onSubmit={handleEdit} submitLabel="Simpan Perubahan" width="max-w-2xl">
          {showEdit.isSystem && (
            <div className="mb-4 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 text-[11.5px] text-amber-700">
              ⚠️ Ini adalah role sistem. Nama tidak bisa diubah, namun tipe akses & permissions bisa disesuaikan.
            </div>
          )}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Nama Role">
                <ModalInput value={editForm.name} onChange={v => setEditForm(p => ({ ...p, name: v }))} disabled={showEdit.isSystem} />
              </ModalField>
              <ModalField label="Warna Badge">
                <ModalSelect value={editForm.color} onChange={v => setEditForm(p => ({ ...p, color: v }))} options={COLOR_OPTIONS} />
              </ModalField>
            </div>

            {/* Role Type Selection: Admin vs User */}
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-3.5">
              <label className="block text-[12px] font-bold text-gray-700 mb-2">Pilih Tipe Akses Panel Aplikasi</label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                  editForm.roleType === "admin" ? "bg-white border-red-300 ring-2 ring-red-100 shadow-sm" : "bg-white/50 border-gray-200"
                }`}>
                  <input
                    type="radio"
                    name="editRoleType"
                    checked={editForm.roleType === "admin"}
                    onChange={() => setEditForm(p => ({ ...p, roleType: "admin" }))}
                    className="mt-0.5 text-red-600 focus:ring-red-200"
                  />
                  <div>
                    <p className="text-[12px] font-bold text-gray-800">🔑 Role Admin</p>
                    <p className="text-[10.5px] text-gray-400 mt-0.5">Dapat login & mengakses Website Admin.</p>
                  </div>
                </label>

                <label className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                  editForm.roleType === "user" ? "bg-white border-blue-300 ring-2 ring-blue-100 shadow-sm" : "bg-white/50 border-gray-200"
                }`}>
                  <input
                    type="radio"
                    name="editRoleType"
                    checked={editForm.roleType === "user"}
                    onChange={() => setEditForm(p => ({ ...p, roleType: "user" }))}
                    className="mt-0.5 text-blue-600 focus:ring-blue-200"
                  />
                  <div>
                    <p className="text-[12px] font-bold text-gray-800">👤 Role User Pengaju</p>
                    <p className="text-[10.5px] text-gray-400 mt-0.5">Khusus pengguna umum untuk mengajukan berkas.</p>
                  </div>
                </label>
              </div>
            </div>

            <ModalField label="Deskripsi">
              <ModalInput value={editForm.description} onChange={v => setEditForm(p => ({ ...p, description: v }))} />
            </ModalField>

            <div>
              <p className="text-[12px] font-semibold text-gray-700 mb-3">Permission Matrix</p>
              <PermissionMatrix
                permissions={editForm.permissions}
                onChange={(key, level) => setEditForm(p => ({ ...p, permissions: { ...p.permissions, [key]: level } }))}
              />
            </div>
          </div>
        </AdminModal>
      )}

      {/* View Role Modal */}
      {showView && (
        <AdminModal title={`Detail Role: ${showView.name}`} onClose={() => setShowView(null)} width="max-w-2xl" hideFooter>
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${showView.color}20` }}>
                <Shield size={18} style={{ color: showView.color }} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-gray-800">{showView.name}</p>
                  <span className="px-2 py-0.5 rounded-full text-[10px] text-white font-medium" style={{ background: showView.color }}>{showView.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${showView.roleType === "admin" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}`}>
                    {showView.roleType === "admin" ? "🔑 Admin Panel" : "👤 User Panel"}
                  </span>
                </div>
                <p className="text-gray-400 text-[11.5px]">{showView.description}</p>
              </div>
            </div>
            <PermissionMatrix permissions={showView.permissions} onChange={() => {}} readonly />
            <div className="pt-2 border-t border-gray-100">
              <p className="text-[11.5px] text-gray-500"><strong>{usersWithRole(showView.id)}</strong> user menggunakan role ini</p>
            </div>
          </div>
        </AdminModal>
      )}

      {/* Confirm Delete */}
      {showConfirmDelete && (
        <ConfirmModal
          title="Hapus Role"
          message={`Yakin ingin menghapus role "${showConfirmDelete.name}"? User yang menggunakan role ini perlu di-assign ulang.`}
          onConfirm={handleDelete}
          onClose={() => setShowConfirmDelete(null)}
          confirmLabel="Ya, Hapus"
          destructive
        />
      )}
    </div>
  );
}
