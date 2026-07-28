import { useState } from "react";
import { Shield, Plus } from "lucide-react";
import { AdminTopBar } from "../../components/admin/AdminTopBar";
import { VerifTable } from "../../components/admin/VerifTable";
import { AdminModal, ConfirmModal, ModalField, ModalInput, ModalSelect } from "../../components/admin/AdminModal";
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

const CONTRACT_PERMS = [
  "contract-list",
  "contract-create",
  "contract-edit",
  "contract-delete",
  "contract.approval-list",
  "contract.approval-create",
  "contract.approval-edit",
  "contract.approval-delete",
];

const HARGA_PERMS = [
  "harga-satuan-list",
  "harga-satuan-create",
];

export function RoleManagementScreen() {
  const [roles, setRoles] = useState<AppRole[]>(() => getRoles());
  const allUsers = getUsers();

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<AppRole | null>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState<AppRole | null>(null);

  const [form, setForm] = useState({
    name: "", code: "", selectedMenu: "Dashboard", status: "Active",
    contractPerms: CONTRACT_PERMS.reduce((acc, p) => ({ ...acc, [p]: true }), {} as Record<string, boolean>),
    hargaPerms: HARGA_PERMS.reduce((acc, p) => ({ ...acc, [p]: true }), {} as Record<string, boolean>),
  });

  const refresh = () => setRoles(getRoles());

  const handleAddSubmit = () => {
    if (!form.name) return;
    const newRole: AppRole = {
      id: generateId("ROLE"),
      name: form.name,
      description: `Role Code: ${form.code || "RL-001"}`,
      roleType: "user",
      color: "#252271",
      permissions: { ...DEFAULT_PERMS },
      createdAt: new Date().toISOString().split("T")[0],
      isSystem: false,
    };

    const next = [...roles, newRole];
    saveRoles(next);
    setRoles(next);
    setShowAdd(false);
    setForm({
      name: "", code: "", selectedMenu: "Dashboard", status: "Active",
      contractPerms: CONTRACT_PERMS.reduce((acc, p) => ({ ...acc, [p]: true }), {}),
      hargaPerms: HARGA_PERMS.reduce((acc, p) => ({ ...acc, [p]: true }), {}),
    });
  };

  const handleDelete = () => {
    if (!showConfirmDelete) return;
    const next = roles.filter(r => r.id !== showConfirmDelete.id);
    saveRoles(next);
    setRoles(next);
    setShowConfirmDelete(null);
  };

  const columns = [
    { key: "name", label: "Roles Name", render: (r: AppRole) => (
      <div>
        <p className="font-semibold text-gray-800 text-[12px]">{r.name}</p>
        <p className="text-gray-400 text-[10px]">{r.description || r.id}</p>
      </div>
    )},
    { key: "users", label: "Assigned Users", render: (r: AppRole) => {
      const count = allUsers.filter(u => u.roleId === r.id).length;
      return <span className="text-[11.5px] font-mono text-gray-600">{count} Users</span>;
    }},
    { key: "status", label: "Status", render: () => (
      <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-green-50 text-green-600 border border-green-200">
        ACTIVE
      </span>
    )},
  ];

  return (
    <div className="space-y-4">
      <AdminTopBar title="Management Roles" subtitle="Management Role -> List Roles" />

      <div className="relative">
        <div className="absolute right-5 top-4 z-10">
          <button onClick={() => setShowAdd(true)} className="bg-[#252271] hover:bg-[#1a1753] text-white px-3 py-1.5 rounded-lg text-[11.5px] font-semibold flex items-center gap-1 shadow-sm transition-colors">
            <Plus size={14} /> Add Roles
          </button>
        </div>

        <VerifTable
          columns={columns} data={roles} searchKeys={["name", "description"]}
          onEdit={(r) => setShowEdit(r)}
          onDelete={(r) => setShowConfirmDelete(r)}
          showCrudActions={true} emptyMessage="Tidak ada data roles."
        />
      </div>

      {/* Add Role Modal */}
      {showAdd && (
        <AdminModal title="Create Roles" onClose={() => setShowAdd(false)} onSubmit={handleAddSubmit} submitLabel="Save" width="max-w-xl">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Role Name" required><ModalInput value={form.name} onChange={v => setForm(p => ({ ...p, name: v }))} placeholder="Role Manager..." /></ModalField>
              <ModalField label="Role Code" required><ModalInput value={form.code} onChange={v => setForm(p => ({ ...p, code: v }))} placeholder="MGR-001" /></ModalField>
            </div>
            <ModalField label="Role Selected Menu" required>
              <ModalSelect value={form.selectedMenu} onChange={v => setForm(p => ({ ...p, selectedMenu: v }))}
                options={["Dashboard","Contract","Harga Satuan","RUP","NPP","SP3","PBJ","Jamlak","Master Data"].map(m => ({ value: m, label: m }))} />
            </ModalField>
            <div>
              <p className="text-[11.5px] font-bold text-gray-700 uppercase mb-2">Permissions — Contract</p>
              <div className="grid grid-cols-2 gap-2 border border-gray-100 rounded-xl p-3 bg-gray-50/50">
                {CONTRACT_PERMS.map(p => (
                  <label key={p} className="flex items-center gap-2 text-[11px] text-gray-600 font-mono cursor-pointer">
                    <input type="checkbox" checked={form.contractPerms[p]} onChange={() => setForm(prev => ({ ...prev, contractPerms: { ...prev.contractPerms, [p]: !prev.contractPerms[p] } }))} className="accent-[#252271]" />
                    {p}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11.5px] font-bold text-gray-700 uppercase mb-2">Permissions — Harga Satuan</p>
              <div className="grid grid-cols-2 gap-2 border border-gray-100 rounded-xl p-3 bg-gray-50/50">
                {HARGA_PERMS.map(p => (
                  <label key={p} className="flex items-center gap-2 text-[11px] text-gray-600 font-mono cursor-pointer">
                    <input type="checkbox" checked={form.hargaPerms[p]} onChange={() => setForm(prev => ({ ...prev, hargaPerms: { ...prev.hargaPerms, [p]: !prev.hargaPerms[p] } }))} className="accent-[#252271]" />
                    {p}
                  </label>
                ))}
              </div>
            </div>
            <ModalField label="Status">
              <div className="flex gap-4 pt-1">
                {["Active", "Inactive"].map(s => (
                  <label key={s} className="flex items-center gap-1.5 text-[11.5px] cursor-pointer">
                    <input type="radio" name="statusRole" checked={form.status === s} onChange={() => setForm(p => ({ ...p, status: s }))} className="accent-[#252271]" />
                    {s}
                  </label>
                ))}
              </div>
            </ModalField>
          </div>
        </AdminModal>
      )}

      {showConfirmDelete && (
        <ConfirmModal
          title="Hapus Role"
          message={`Yakin ingin menghapus role ${showConfirmDelete.name}?`}
          onConfirm={handleDelete}
          onClose={() => setShowConfirmDelete(null)}
          confirmLabel="Hapus"
          destructive
        />
      )}
    </div>
  );
}
