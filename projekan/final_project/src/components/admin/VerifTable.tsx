import { useState } from "react";
import { Search, ChevronDown, Check, X, AlertCircle, Eye, Pencil, Trash2, Plus } from "lucide-react";
import type { VerifStatus } from "../../types";

interface Column<T> {
  key: string;
  label: string;
  width?: string;
  render: (row: T) => React.ReactNode;
}

interface VerifTableProps<T extends { id: string }> {
  columns: Column<T>[];
  data: T[];
  searchKeys?: (keyof T)[];
  onApprove?: (row: T) => void;
  onRevisi?: (row: T) => void;
  onReject?: (row: T) => void;
  onView?: (row: T) => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  onAdd?: () => void;
  addLabel?: string;
  showVerifActions?: boolean;
  showCrudActions?: boolean;
  emptyMessage?: string;
  filterOptions?: { key: string; label: string; options: { value: string; label: string }[] }[];
}

function StatusChip({ status }: { status: VerifStatus }) {
  const cfg: Record<VerifStatus, { label: string; bg: string; text: string; icon: React.ReactNode }> = {
    pending: { label: "Pending", bg: "bg-amber-50", text: "text-amber-600", icon: <AlertCircle size={10} /> },
    approved: { label: "Disetujui", bg: "bg-green-50", text: "text-green-600", icon: <Check size={10} /> },
    revisi: { label: "Revisi", bg: "bg-blue-50", text: "text-blue-600", icon: <AlertCircle size={10} /> },
    rejected: { label: "Ditolak", bg: "bg-red-50", text: "text-red-600", icon: <X size={10} /> },
  };
  const c = cfg[status];
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-medium ${c.bg} ${c.text}`}>
      {c.icon} {c.label}
    </span>
  );
}

export { StatusChip };

export function VerifTable<T extends { id: string }>({
  columns,
  data,
  searchKeys = [],
  onApprove,
  onRevisi,
  onReject,
  onView,
  onEdit,
  onDelete,
  onAdd,
  addLabel = "Tambah",
  showVerifActions = false,
  showCrudActions = true,
  emptyMessage = "Tidak ada data",
  filterOptions = [],
}: VerifTableProps<T>) {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});

  const filtered = data.filter(row => {
    const matchSearch = searchKeys.length === 0 || searchKeys.some(k => {
      const v = row[k];
      return typeof v === "string" && v.toLowerCase().includes(search.toLowerCase());
    });
    const matchFilters = filterOptions.every(fo => {
      if (!filters[fo.key]) return true;
      return (row as Record<string, unknown>)[fo.key] === filters[fo.key];
    });
    return matchSearch && matchFilters;
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      {/* Toolbar */}
      <div className="px-5 py-3.5 flex items-center justify-between border-b border-gray-50 gap-3 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Search */}
          <div className="relative">
            <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Cari..."
              className="bg-gray-50 border border-gray-100 pl-8 pr-3 py-1.5 rounded-xl text-[11px] focus:outline-none w-44 focus:ring-1 focus:ring-red-200"
            />
          </div>
          {/* Filters */}
          {filterOptions.map(fo => (
            <div key={fo.key} className="relative">
              <select
                value={filters[fo.key] ?? ""}
                onChange={e => setFilters(p => ({ ...p, [fo.key]: e.target.value }))}
                className="bg-gray-50 border border-gray-100 pl-3 pr-7 py-1.5 rounded-xl text-[11px] focus:outline-none appearance-none focus:ring-1 focus:ring-red-200"
              >
                <option value="">{fo.label}: Semua</option>
                {fo.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10.5px] text-gray-400">{filtered.length} data</span>
          {onAdd && (
            <button
              onClick={onAdd}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-medium text-white"
              style={{ background: "linear-gradient(75deg, #e6251c, #ff7676)" }}
            >
              <Plus size={11} /> {addLabel}
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50/80 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-[10.5px] font-semibold text-gray-500 uppercase tracking-wider w-10">No</th>
              {columns.map(col => (
                <th key={col.key} className={`text-left px-4 py-3 text-[10.5px] font-semibold text-gray-500 uppercase tracking-wider ${col.width ?? ""}`}>
                  {col.label}
                </th>
              ))}
              {(showVerifActions || showCrudActions) && (
                <th className="text-left px-4 py-3 text-[10.5px] font-semibold text-gray-500 uppercase tracking-wider">Aksi</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 2} className="px-4 py-10 text-center text-gray-400 text-[12px]">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              filtered.map((row, i) => (
                <tr key={row.id} className={i % 2 === 1 ? "bg-gray-50/30" : ""}>
                  <td className="px-4 py-3.5 text-[11px] text-gray-400">{i + 1}</td>
                  {columns.map(col => (
                    <td key={col.key} className="px-4 py-3.5 text-[11px]">{col.render(row)}</td>
                  ))}
                  {(showVerifActions || showCrudActions) && (
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1 flex-wrap">
                        {/* CRUD actions */}
                        {showCrudActions && onView && (
                          <button onClick={() => onView(row)} className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors" title="Lihat">
                            <Eye size={11} className="text-blue-600" />
                          </button>
                        )}
                        {showCrudActions && onEdit && (
                          <button onClick={() => onEdit(row)} className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center hover:bg-amber-100 transition-colors" title="Edit">
                            <Pencil size={11} className="text-amber-600" />
                          </button>
                        )}
                        {showCrudActions && onDelete && (
                          <button onClick={() => onDelete(row)} className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center hover:bg-red-100 transition-colors" title="Hapus">
                            <Trash2 size={11} className="text-red-500" />
                          </button>
                        )}
                        {/* Verif actions */}
                        {showVerifActions && onApprove && (
                          <button onClick={() => onApprove(row)} className="flex items-center gap-1 px-2 h-6 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors text-[10.5px] font-medium" title="Approve">
                            <Check size={10} /> Setujui
                          </button>
                        )}
                        {showVerifActions && onRevisi && (
                          <button onClick={() => onRevisi(row)} className="flex items-center gap-1 px-2 h-6 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors text-[10.5px] font-medium" title="Revisi">
                            <AlertCircle size={10} /> Revisi
                          </button>
                        )}
                        {showVerifActions && onReject && (
                          <button onClick={() => onReject(row)} className="flex items-center gap-1 px-2 h-6 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-[10.5px] font-medium" title="Tolak">
                            <X size={10} /> Tolak
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
