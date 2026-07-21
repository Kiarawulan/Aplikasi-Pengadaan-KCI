import { useState, useEffect } from "react";
import { Key, Eye, EyeOff, RefreshCw, UserCheck, UserX, Clock } from "lucide-react";
import { AdminTopBar } from "../../components/admin/AdminTopBar";
import { VerifTable } from "../../components/admin/VerifTable";
import { AdminModal, ConfirmModal, ModalField, ModalInput, ModalSelect } from "../../components/admin/AdminModal";
import { api } from "../../services/api";
import type { AppUser, AppRole } from "../../types";
import { useAuth } from "../../store/authStore";

const DEPARTEMEN_OPTIONS = [
  { value: "CTIT", label: "CTIT" },
  { value: "Logistik", label: "Logistik" },
  { value: "Finance", label: "Finance" },
  { value: "HRD", label: "HRD" },
  { value: "PBJ", label: "PBJ" },
  { value: "Management", label: "Management" },
  { value: "Warehouse", label: "Warehouse" },
  { value: "Contract", label: "Contract" },
];

export function UserManagementScreen() {
  const { currentUser } = useAuth();
  const [users, setUsers] = useState<AppUser[]>([]);
  const [roles, setRoles] = useState<AppRole[]>([]);
  const [loading, setLoading] = useState(true);

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<AppUser | null>(null);
  const [showResetPw, setShowResetPw] = useState<AppUser | null>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState<AppUser | null>(null);
  const [generatedPw, setGeneratedPw] = useState("");
  const [showPw, setShowPw] = useState(false);

  // Forms
  const [form, setForm] = useState({ email: "", name: "", roleId: "", departemen: "" });
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
    } catch (err) {
      console.error("Gagal memuat data user & role:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const roleOptions = roles.map(r => ({ value: r.id, label: r.name }));

  const handleAdd = async () => {
    if (!form.email || !form.name || !form.roleId || !form.departemen) return;
    try {
      const res = await api.post("/users", {
        name: form.name,
        email: form.email,
        roleId: form.roleId,
        departemen: form.departemen,
      });
      setGeneratedPw(res.data.generatedPassword);
      fetchData();
      setForm({ email: "", name: "", roleId: "", departemen: "" });
    } catch (err: any) {
      alert(err.response?.data?.message || "Gagal membuat user.");
    }
  };

  const handleEdit = async () => {
    if (!showEdit) return;
    try {
      await api.put(`/users/${showEdit.id}`, {
        name: editForm.name,
        roleId: editForm.roleId,
        departemen: editForm.departemen,
      });
      setShowEdit(null);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleResetPw = async () => {
    if (!showResetPw) return;
    try {
      const res = await api.post(`/users/${showResetPw.id}/reset-password`);
      setGeneratedPw(res.data.generatedPassword);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleActive = async (user: AppUser) => {
    if (user.id === currentUser?.id) return;
    try {
      await api.post(`/users/${user.id}/toggle-active`);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (!showConfirmDelete) return;
    try {
      await api.delete(`/users/${showConfirmDelete.id}`);
      setShowConfirmDelete(null);
      fetchData();
    } catch (err: any) {
      alert(err.response?.data?.message || "Gagal menghapus user.");
    }
  };

  const columns = [
    {
      key: "user", label: "User", render: (u: AppUser) => (
        <div>
          <p className="font-semibold text-gray-800 text-[12px]">{u.name}</p>
          <p className="text-gray-400 text-[10.5px]">{u.email}</p>
        </div>
      )
    },
    {
      key: "role", label: "Role & Akses", render: (u: AppUser) => {
        const r = roles.find(role => role.id === u.roleId);
        return r ? (
          <span className="inline-flex px-2 py-0.5 rounded-full text-[10.5px] font-medium text-white" style={{ background: r.color }}>
            {r.name}
          </span>
        ) : <span className="text-gray-400 text-[11px]">—</span>;
      }
    },
    {
      key: "dept", label: "Departemen", render: (u: AppUser) =>
        <span className="text-gray-600 text-[11.5px]">{u.departemen}</span>
    },
    {
      key: "status", label: "Status", render: (u: AppUser) => (
        <button onClick={() => handleToggleActive(u)} disabled={u.id === currentUser?.id}>
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-medium ${u.isActive ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"}`}>
            {u.isActive ? <><UserCheck size={10} /> Aktif</> : <><UserX size={10} /> Non-aktif</>}
          </span>
        </button>
      )
    },
    {
      key: "login", label: "Login Terakhir", render: (u: AppUser) =>
        <span className="text-gray-400 text-[11px]">{u.lastLogin ? new Date(u.lastLogin).toLocaleString("id-ID") : "Belum pernah"}</span>
    },
  ];

  return (
    <div>
      <AdminTopBar title="Manajemen User" subtitle="User & Role" />

      {/* Quick stats */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        {[
          { label: "Total User", value: users.length, color: "#252271" },
          { label: "Aktif", value: users.filter(u => u.isActive).length, color: "#16a34a" },
          { label: "Non-aktif", value: users.filter(u => !u.isActive).length, color: "#9ca3af" },
          { label: "Admin", value: users.filter(u => u.isAdmin).length, color: "#e6251c" },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-[16px]" style={{ background: s.color }}>
              {s.value}
            </div>
            <div>
              <p className="text-gray-500 text-[11px]">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {loading ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-500 text-[12px] flex flex-col items-center gap-2">
          <Clock size={20} className="animate-spin text-[#e6251c]" />
          Sinkronisasi data user dari MySQL Database...
        </div>
      ) : (
        <VerifTable
          columns={columns}
          data={users}
          searchKeys={["name", "email", "departemen"]}
          onEdit={(u) => { setEditForm({ name: u.name, roleId: u.roleId, departemen: u.departemen }); setShowEdit(u); }}
          onDelete={(u) => u.id !== currentUser?.id && setShowConfirmDelete(u)}
          onAdd={() => { setGeneratedPw(""); setShowAdd(true); }}
          addLabel="Tambah User"
          showCrudActions={true}
          filterOptions={[
            { key: "isActive", label: "Status", options: [{ value: "true", label: "Aktif" }, { value: "false", label: "Non-aktif" }] },
            { key: "roleId", label: "Role", options: roleOptions },
          ]}
        />
      )}

      {/* Add User Modal */}
      {showAdd && (
        <AdminModal
          title="Tambah User Baru"
          subtitle="User akan ditambahkan ke database & mendapatkan password sementara"
          onClose={() => { setShowAdd(false); setGeneratedPw(""); }}
          onSubmit={generatedPw ? undefined : handleAdd}
          submitLabel="Buat User & Generate Password"
          width="max-w-lg"
        >
          {generatedPw ? (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                <p className="text-green-700 font-semibold text-[13px] mb-2">✅ User berhasil dibuat!</p>
                <p className="text-[12px] text-green-600 mb-3">Bagikan password berikut ke user secara aman. User bisa ganti password setelah login pertama.</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-white border border-green-200 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-gray-500 mb-0.5">Password Sementara</p>
                    <p className="font-mono font-bold text-[15px] text-gray-800">{showPw ? generatedPw : "••••••••••"}</p>
                  </div>
                  <button onClick={() => setShowPw(v => !v)} className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                    {showPw ? <EyeOff size={14} className="text-gray-500" /> : <Eye size={14} className="text-gray-500" />}
                  </button>
                </div>
              </div>
              <button onClick={() => { setShowAdd(false); setGeneratedPw(""); setShowPw(false); }}
                className="w-full h-9 rounded-xl text-white font-semibold text-[12.5px]"
                style={{ background: "linear-gradient(75deg, #e6251c, #ff7676)" }}>
                Selesai
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <ModalField label="Nama Lengkap" required>
                <ModalInput value={form.name} onChange={v => setForm(p => ({ ...p, name: v }))} placeholder="Nama user..." />
              </ModalField>
              <ModalField label="Email" required>
                <ModalInput type="email" value={form.email} onChange={v => setForm(p => ({ ...p, email: v }))} placeholder="email@perusahaan.com" />
              </ModalField>
              <div className="grid grid-cols-2 gap-3">
                <ModalField label="Role" required>
                  <ModalSelect value={form.roleId} onChange={v => setForm(p => ({ ...p, roleId: v }))} options={roleOptions} placeholder="Pilih role..." />
                </ModalField>
                <ModalField label="Departemen" required>
                  <ModalSelect value={form.departemen} onChange={v => setForm(p => ({ ...p, departemen: v }))} options={DEPARTEMEN_OPTIONS} placeholder="Pilih departemen..." />
                </ModalField>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 flex items-center gap-2">
                <Key size={14} className="text-amber-500 shrink-0" />
                <p className="text-[11.5px] text-amber-700">Password akan di-generate otomatis oleh database.</p>
              </div>
            </div>
          )}
        </AdminModal>
      )}

      {/* Edit Modal */}
      {showEdit && (
        <AdminModal title="Edit User" onClose={() => setShowEdit(null)} onSubmit={handleEdit} submitLabel="Simpan Perubahan" width="max-w-md">
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-xl px-3 py-2 mb-2">
              <p className="text-[11px] text-gray-500">Email (tidak bisa diubah)</p>
              <p className="text-[13px] font-medium text-gray-700">{showEdit.email}</p>
            </div>
            <ModalField label="Nama Lengkap">
              <ModalInput value={editForm.name ?? ""} onChange={v => setEditForm(p => ({ ...p, name: v }))} />
            </ModalField>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Role">
                <ModalSelect value={editForm.roleId ?? ""} onChange={v => setEditForm(p => ({ ...p, roleId: v }))} options={roleOptions} />
              </ModalField>
              <ModalField label="Departemen">
                <ModalSelect value={editForm.departemen ?? ""} onChange={v => setEditForm(p => ({ ...p, departemen: v }))} options={DEPARTEMEN_OPTIONS} />
              </ModalField>
            </div>
            <div className="pt-2 border-t border-gray-100">
              <button
                onClick={() => { setShowResetPw(showEdit); setShowEdit(null); }}
                className="flex items-center gap-2 text-[12px] text-blue-600 hover:text-blue-700 font-medium"
              >
                <RefreshCw size={13} /> Reset Password User Ini
              </button>
            </div>
          </div>
        </AdminModal>
      )}

      {/* Reset Password Modal */}
      {showResetPw && (
        <AdminModal title="Reset Password" subtitle={showResetPw.name} onClose={() => { setShowResetPw(null); setGeneratedPw(""); setShowPw(false); }} width="max-w-sm" hideFooter>
          {generatedPw ? (
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-100 rounded-xl p-3">
                <p className="text-green-700 font-semibold text-[12px] mb-2">Password berhasil direset!</p>
                <div className="flex items-center gap-2">
                  <p className="font-mono font-bold text-[14px] text-gray-800 flex-1">{showPw ? generatedPw : "••••••••••"}</p>
                  <button onClick={() => setShowPw(v => !v)}>
                    {showPw ? <EyeOff size={13} className="text-gray-500" /> : <Eye size={13} className="text-gray-500" />}
                  </button>
                </div>
              </div>
              <button onClick={() => { setShowResetPw(null); setGeneratedPw(""); setShowPw(false); }}
                className="w-full h-9 rounded-xl text-white text-[12.5px] font-semibold"
                style={{ background: "linear-gradient(75deg, #e6251c, #ff7676)" }}>
                Selesai
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-[12.5px] text-gray-600">Yakin ingin mereset password untuk <strong>{showResetPw.name}</strong>? Password baru akan di-generate otomatis.</p>
              <div className="flex gap-2">
                <button onClick={() => setShowResetPw(null)} className="flex-1 h-9 rounded-xl border border-gray-200 text-[12px] text-gray-600">Batal</button>
                <button onClick={handleResetPw} className="flex-1 h-9 rounded-xl text-white text-[12px] font-semibold" style={{ background: "linear-gradient(75deg, #e6251c, #ff7676)" }}>Reset</button>
              </div>
            </div>
          )}
        </AdminModal>
      )}

      {/* Confirm Delete */}
      {showConfirmDelete && (
        <ConfirmModal
          title="Hapus User"
          message={`Yakin ingin menghapus user "${showConfirmDelete.name}"? Tindakan ini tidak bisa dibatalkan.`}
          onConfirm={handleDelete}
          onClose={() => setShowConfirmDelete(null)}
          confirmLabel="Ya, Hapus"
          destructive
        />
      )}
    </div>
  );
}
