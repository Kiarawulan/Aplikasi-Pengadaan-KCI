import type { RolePermissions, AccessLevel } from "../../types";

type PermModule = {
  key: keyof RolePermissions;
  label: string;
  description: string;
};

const MODULES: PermModule[] = [
  { key: "dashboard", label: "Dashboard", description: "Lihat statistik dan ringkasan pengadaan" },
  { key: "pengajuanDana", label: "Pengajuan Dana", description: "Park Dokumen dan Purchase Requisition" },
  { key: "pengadaan", label: "Pengadaan", description: "Timeline, NPP, SP3, PBJ, Contract" },
  { key: "pengujian", label: "Pengujian", description: "Pengujian barang dan jasa" },
  { key: "pembayaran", label: "Pembayaran", description: "UMD, Outsource, Non-Outsource" },
  { key: "templateDokumen", label: "Template Dokumen", description: "Unduh dan kelola template" },
  { key: "masterData", label: "Master Data", description: "Vendor, Harga Satuan, Warehouse" },
  { key: "userManagement", label: "Manajemen User", description: "Tambah, edit, hapus user & role" },
];

const LEVELS: { value: AccessLevel; label: string; color: string }[] = [
  { value: "editor", label: "Editor", color: "#16a34a" },
  { value: "viewer", label: "Viewer", color: "#2563eb" },
  { value: "no-access", label: "No Access", color: "#9ca3af" },
];

interface PermissionMatrixProps {
  permissions: RolePermissions;
  onChange: (key: keyof RolePermissions, level: AccessLevel) => void;
  readonly?: boolean;
}

export function PermissionMatrix({ permissions, onChange, readonly = false }: PermissionMatrixProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left py-2 pr-4 text-[11px] font-semibold text-gray-500 uppercase tracking-wider w-44">
              Modul
            </th>
            {LEVELS.map(l => (
              <th key={l.value} className="text-center py-2 px-3 text-[11px] font-semibold uppercase tracking-wider" style={{ color: l.color }}>
                {l.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MODULES.map((mod, i) => (
            <tr key={mod.key} className={`${i % 2 === 0 ? "" : "bg-gray-50/50"} border-b border-gray-50`}>
              <td className="py-2.5 pr-4">
                <p className="text-[12px] font-semibold text-gray-700">{mod.label}</p>
                <p className="text-[10.5px] text-gray-400">{mod.description}</p>
              </td>
              {LEVELS.map(level => (
                <td key={level.value} className="py-2.5 px-3 text-center">
                  {readonly ? (
                    <div className="flex justify-center">
                      {permissions[mod.key] === level.value ? (
                        <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: level.color }}>
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-gray-200" />
                      )}
                    </div>
                  ) : (
                    <label className="flex justify-center cursor-pointer">
                      <input
                        type="radio"
                        name={`perm-${mod.key}`}
                        checked={permissions[mod.key] === level.value}
                        onChange={() => onChange(mod.key, level.value)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                          permissions[mod.key] === level.value ? "border-transparent" : "border-gray-300 hover:border-gray-400"
                        }`}
                        style={permissions[mod.key] === level.value ? { background: level.color, borderColor: level.color } : {}}
                      >
                        {permissions[mod.key] === level.value && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                    </label>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Legend */}
      <div className="mt-3 flex items-center gap-4 pt-2 border-t border-gray-100">
        {LEVELS.map(l => (
          <div key={l.value} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: l.color }} />
            <span className="text-[10.5px] text-gray-500">
              <strong>{l.label}</strong>
              {l.value === "editor" ? " — Bisa lihat & edit" : l.value === "viewer" ? " — Hanya lihat" : " — Tidak bisa akses"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
