import { useState, useEffect } from "react";
import { Key, Eye, EyeOff, RefreshCw, UserCheck, UserX, Clock, Plus } from "lucide-react";
import { AdminTopBar } from "../../components/admin/AdminTopBar";
import { VerifTable } from "../../components/admin/VerifTable";
import { AdminModal, ConfirmModal, ModalField, ModalInput, ModalSelect } from "../../components/admin/AdminModal";
import { api } from "../../services/api";
import type { AppUser, AppRole } from "../../types";
import { useAuth } from "../../store/authStore";

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

  // Forms matching wireframe exactly: Fullname, Username, Email, Level/Role, Department, Division, Directorate, Kode User, Password
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
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddSubmit = async () => {
    if (!form.email || !form.name) return;
    try {
      await api.post("/users", {
        name: form.name,
        email: form.email,
        username: form.username || form.email.split("@")[0],
        password: form.password || "Password123!",
        roleId: form.roleId || roles[0]?.id,
        departemen: form.departemen,
        division: form.division,
        directorate: form.directorate,
        kodeUser: form.kodeUser || `USR-${Math.floor(Math.random()*900)+100}`,
      });
      setShowAdd(false);
      setForm({ name: "", username: "", email: "", password: "", roleId: "", departemen: "CUG - LOGISTIC", division: "Operational", directorate: "Direktorat Operasi & Pemasaran", kodeUser: "" });
      fetchData();
    } catch (e) {
      alert("Gagal menambahkan user.");
    }
  };

  const handleEditSubmit = async () => {
    if (!showEdit) return;
    try {
      await api.put(`/users/${showEdit.id}`, editForm);
      setShowEdit(null);
      fetchData();
    } catch (e) {
      alert("Gagal memperbarui user.");
    }
  };

  const handleDelete = async () => {
    if (!showConfirmDelete) return;
    try {
      await api.delete(`/users/${showConfirmDelete.id}`);
      setShowConfirmDelete(null);
      fetchData();
    } catch (e) {
      alert("Gagal menghapus user.");
    }
  };

  const columns = [
    { key: "name", label: "Full Name", render: (u: AppUser) => (
      <div>
        <p className="font-semibold text-gray-800 text-[12px]">{u.name}</p>
        <p className="text-gray-400 text-[10px]">Kode: {u.kodeUser || u.id}</p>
      </div>
    )},
    { key: "username", label: "Username / Email", render: (u: AppUser) => (
      <div>
        <p className="font-mono text-[11.5px] text-gray-700">{u.username || u.email.split("@")[0]}</p>
        <p className="text-gray-400 text-[10px]">{u.email}</p>
      </div>
    )},
    { key: "departemen", label: "Departemen / Divisi", render: (u: AppUser) => (
      <div>
        <p className="text-[11.5px] text-gray-700">{u.departemen ? u.departemen.split(" - ")[0] : "-"}</p>
        <p className="text-gray-400 text-[10px]">{u.division || u.directorate || "-"}</p>
      </div>
    )},
    { key: "role", label: "Role / Level", render: (u: AppUser) => {
      const r = roles.find(role => role.id === u.roleId);
      return (
        <span className="px-2 py-0.5 rounded text-[10.5px] font-semibold text-white shadow-sm" style={{ background: r?.color || "#252271" }}>
          {r?.name || "User"}
        </span>
      );
    }},
    { key: "status", label: "Status", render: (u: AppUser) => (
      <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${u.isActive ? "bg-green-50 text-green-600 border border-green-200" : "bg-gray-100 text-gray-400"}`}>
        {u.isActive ? "ACTIVE" : "INACTIVE"}
      </span>
    )},
  ];

  return (
    <div className="space-y-4">
      <AdminTopBar title="User & Role Management" subtitle="Management User -> List User" />

      <div className="relative">
        <div className="absolute right-5 top-4 z-10">
          <button onClick={() => setShowAdd(true)} className="bg-[#252271] hover:bg-[#1a1753] text-white px-3 py-1.5 rounded-lg text-[11.5px] font-semibold flex items-center gap-1 shadow-sm transition-colors">
            <Plus size={14} /> Add Users
          </button>
        </div>

        <VerifTable
          columns={columns} data={users} searchKeys={["name", "email", "username", "departemen"]}
          onEdit={(u) => { setEditForm(u); setShowEdit(u); }}
          onDelete={(u) => setShowConfirmDelete(u)}
          showCrudActions={true} emptyMessage="Tidak ada data user."
        />
      </div>

      {/* Add User Modal */}
      {showAdd && (
        <AdminModal title="Create User" onClose={() => setShowAdd(false)} onSubmit={handleAddSubmit} submitLabel="Save" width="max-w-lg">
          <div className="space-y-3">
            <p className="text-[11px] text-gray-400">Please insert roles with form available</p>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Fullname" required><ModalInput value={form.name} onChange={v => setForm(p => ({ ...p, name: v }))} placeholder="Nama lengkap..." /></ModalField>
              <ModalField label="Username" required><ModalInput value={form.username} onChange={v => setForm(p => ({ ...p, username: v }))} placeholder="username..." /></ModalField>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Email" required><ModalInput type="email" value={form.email} onChange={v => setForm(p => ({ ...p, email: v }))} placeholder="user@kuncicorporate.com" /></ModalField>
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
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Divisi"><ModalInput value={form.division} onChange={v => setForm(p => ({ ...p, division: v }))} placeholder="Divisi..." /></ModalField>
              <ModalField label="Direktorat"><ModalInput value={form.directorate} onChange={v => setForm(p => ({ ...p, directorate: v }))} placeholder="Direktorat..." /></ModalField>
            </div>
          </div>
        </AdminModal>
      )}

      {/* Edit Modal */}
      {showEdit && (
        <AdminModal title="Edit User" onClose={() => setShowEdit(null)} onSubmit={handleEditSubmit} submitLabel="Update" width="max-w-lg">
          <div className="space-y-3">
            <ModalField label="Fullname" required><ModalInput value={editForm.name || ""} onChange={v => setEditForm(p => ({ ...p, name: v }))} /></ModalField>
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
          message={`Yakin ingin menghapus user ${showConfirmDelete.name}?`}
          onConfirm={handleDelete}
          onClose={() => setShowConfirmDelete(null)}
          confirmLabel="Hapus"
          destructive
        />
      )}
    </div>
  );
}
