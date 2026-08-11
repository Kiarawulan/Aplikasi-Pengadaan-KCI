import { useState } from "react";
import { Search, ChevronDown, Check, X, AlertCircle, Eye, Pencil, Trash2, Plus, Download, Filter, CheckCircle2, XCircle } from "lucide-react";
import type { VerifStatus } from "../../types";

interface Column<T> {
  key: string;
  label: string;
  width?: string;
  render: (row: T) => React.ReactNode;
}

export interface FilterConfig {
  key: string;
  label: string;
  type?: "select" | "date" | "text";
  options?: { value: string; label: string }[];
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
  onDownload?: () => void;
  addLabel?: string;
  approveLabel?: string;
  hideIndexColumn?: boolean;
  showVerifActions?: boolean;
  showCrudActions?: boolean;
  emptyMessage?: string;
  filterOptions?: { key: string; label: string; options: { value: string; label: string }[] }[];
  topFilters?: FilterConfig[];
  dateKey?: string;
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

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

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
  onDownload,
  addLabel = "Tambah",
  hideIndexColumn = false,
  showVerifActions = false,
  showCrudActions = true,
  emptyMessage = "Tidak ada data",
  filterOptions = [],
  topFilters = [],
  dateKey,
}: VerifTableProps<T>) {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  const hasTopFilter = topFilters.length > 0 || !!dateKey;

  const filtered = data.filter(row => {
    const matchSearch = searchKeys.length === 0 || searchKeys.some(k => {
      const v = row[k];
      return typeof v === "string" && v.toLowerCase().includes(search.toLowerCase());
    });
    const matchFilters = filterOptions.every(fo => {
      if (!filters[fo.key]) return true;
      return (row as Record<string, unknown>)[fo.key] === filters[fo.key];
    });
    const matchTopFilters = topFilters.every(tf => {
      if (!filters[tf.key]) return true;
      const v = (row as Record<string, unknown>)[tf.key];
      return typeof v === "string" && v.toLowerCase().includes((filters[tf.key] ?? "").toLowerCase());
    });
    let matchDate = true;
    if (dateKey) {
      const dateVal = (row as Record<string, unknown>)[dateKey];
      if (typeof dateVal === "string") {
        if (startDate && dateVal < startDate) matchDate = false;
        if (endDate && dateVal > endDate) matchDate = false;
      }
    }
    return matchSearch && matchFilters && matchTopFilters && matchDate;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  const setFilter = (key: string, val: string) => { setFilters(p => ({ ...p, [key]: val })); setPage(1); };
  const handleSearch = (v: string) => { setSearch(v); setPage(1); };
  const handleStart = (v: string) => { setStartDate(v); setPage(1); };
  const handleEnd = (v: string) => { setEndDate(v); setPage(1); };
  const clearFilters = () => { setSearch(""); setFilters({}); setStartDate(""); setEndDate(""); setPage(1); };
  const hasActiveFilters = !!(search || startDate || endDate || Object.values(filters).some(Boolean));

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      {hasTopFilter && (
        <div className="px-5 pt-4 pb-3 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-2 mb-2">
            <Filter size={12} className="text-gray-400" />
            <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Filter</span>
          </div>
          <div className="flex flex-wrap gap-3 items-end">
            {dateKey && (
              <>
                <div className="flex flex-col gap-1">
                  <label className="text-[10.5px] text-gray-400 font-medium">Start Date</label>
                  <input type="date" value={startDate} onChange={e => handleStart(e.target.value)}
                    className="border border-gray-200 rounded-lg px-2.5 py-1.5 text-[11.5px] bg-white focus:outline-none focus:ring-1 focus:ring-[#252271]/30 w-36" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10.5px] text-gray-400 font-medium">End Date</label>
                  <input type="date" value={endDate} onChange={e => handleEnd(e.target.value)}
                    className="border border-gray-200 rounded-lg px-2.5 py-1.5 text-[11.5px] bg-white focus:outline-none focus:ring-1 focus:ring-[#252271]/30 w-36" />
                </div>
              </>
            )}
            {topFilters.map(tf => (
              <div key={tf.key} className="flex flex-col gap-1">
                <label className="text-[10.5px] text-gray-400 font-medium">{tf.label}</label>
                {tf.type === "select" && tf.options ? (
                  <div className="relative">
                    <select value={filters[tf.key] ?? ""} onChange={e => setFilter(tf.key, e.target.value)}
                      className="border border-gray-200 rounded-lg pl-2.5 pr-7 py-1.5 text-[11.5px] bg-white focus:outline-none focus:ring-1 focus:ring-[#252271]/30 appearance-none min-w-[120px]">
                      <option value="">Semua</option>
                      {tf.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                    <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                ) : (
                  <input value={filters[tf.key] ?? ""} onChange={e => setFilter(tf.key, e.target.value)}
                    placeholder={`Cari ${tf.label}...`}
                    className="border border-gray-200 rounded-lg px-2.5 py-1.5 text-[11.5px] bg-white focus:outline-none focus:ring-1 focus:ring-[#252271]/30 w-36" />
                )}
              </div>
            ))}
            <button onClick={clearFilters}
              className="mt-4 px-3 py-1.5 rounded-lg border border-gray-200 text-[11px] text-gray-500 hover:bg-gray-100 transition-colors flex items-center gap-1">
              <X size={11} /> Reset
            </button>
          </div>
        </div>
      )}

      <div className="px-5 py-3 flex items-center justify-between border-b border-gray-50 gap-3 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-gray-400">Tampilkan</span>
            <div className="relative">
              <select value={pageSize} onChange={e => { setPageSize(Number(e.target.value)); setPage(1); }}
                className="bg-gray-50 border border-gray-100 pl-2 pr-6 py-1 rounded-lg text-[11px] focus:outline-none appearance-none">
                {PAGE_SIZE_OPTIONS.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
              <ChevronDown size={10} className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            <span className="text-[11px] text-gray-400">data</span>
          </div>
          {filterOptions.map(fo => (
            <div key={fo.key} className="relative">
              <select value={filters[fo.key] ?? ""} onChange={e => setFilter(fo.key, e.target.value)}
                className="bg-gray-50 border border-gray-100 pl-3 pr-7 py-1.5 rounded-xl text-[11px] focus:outline-none appearance-none focus:ring-1 focus:ring-[#252271]/20">
                <option value="">{fo.label}: Semua</option>
                {fo.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          ))}
          <div className="relative">
            <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input value={search} onChange={e => handleSearch(e.target.value)} placeholder="Cari..."
              className="bg-gray-50 border border-gray-100 pl-8 pr-3 py-1.5 rounded-xl text-[11px] focus:outline-none w-44 focus:ring-1 focus:ring-[#252271]/20" />
          </div>
          {hasActiveFilters && (
            <span className="text-[10px] text-[#252271] font-semibold cursor-pointer hover:underline" onClick={clearFilters}>Hapus Filter</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10.5px] text-gray-400">{filtered.length} data</span>
          {onDownload && (
            <button onClick={onDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-medium text-gray-600 bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors">
              <Download size={11} /> Export
            </button>
          )}
          {onAdd && (
            <button onClick={onAdd}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-medium text-white transition-colors"
              style={{ background: "linear-gradient(135deg, #252271, #3a35a8)" }}>
              <Plus size={11} /> {addLabel}
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50/80 border-b border-gray-100">
              {!hideIndexColumn && (
                <th className="text-left px-4 py-3 text-[10.5px] font-semibold text-gray-500 uppercase tracking-wider w-10">No</th>
              )}
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
            {paginated.length === 0 ? (
              <tr><td colSpan={columns.length + (hideIndexColumn ? 1 : 2)} className="px-4 py-10 text-center text-gray-400 text-[12px]">{emptyMessage}</td></tr>
            ) : (
              paginated.map((row, i) => (
                <tr key={row.id} className={i % 2 === 1 ? "bg-gray-50/30" : ""}>
                  {!hideIndexColumn && (
                    <td className="px-4 py-3.5 text-[11px] text-gray-400">{(page - 1) * pageSize + i + 1}</td>
                  )}
                  {columns.map(col => (
                    <td key={col.key} className="px-4 py-3.5 text-[11px]">{col.render(row)}</td>
                  ))}
                  {(showVerifActions || showCrudActions) && (
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1 flex-wrap">
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
                        {showVerifActions && onRevisi && (
                          <button onClick={() => onRevisi(row)} className="flex items-center gap-1.5 px-2 h-[26px] rounded-[8px] border border-[#8f0505] bg-white text-[#8f0505] hover:bg-red-50 transition-colors text-[10.5px] font-bold">
                            <span className="size-[14px] rounded-full border border-current flex items-center justify-center"><Pencil size={8} /></span> Revisi
                          </button>
                        )}
                        {showVerifActions && onReject && (
                          <button onClick={() => onReject(row)} className="flex items-center gap-1.5 px-2 h-[26px] rounded-[8px] bg-gradient-to-r from-[#a50000] to-[#e00000] text-white hover:brightness-110 transition-all text-[10.5px] font-bold">
                            <XCircle size={13} /> Tolak
                          </button>
                        )}
                        {showVerifActions && onApprove && (() => {
                          const verified = ["approved", "final", "closed", "sudah diverifikasi", "selesai", "disetujui"].includes(String((row as any)?.status || "").toLowerCase());
                          return (
                          <button disabled={verified} onClick={() => !verified && onApprove(row)} className={`flex items-center gap-1.5 px-2 h-[26px] rounded-[8px] transition-all text-[10.5px] font-bold ${verified ? "bg-slate-200 text-slate-500 cursor-not-allowed" : "bg-gradient-to-r from-[#17145e] to-[#2c2785] text-white hover:brightness-110"}`}>
                            <CheckCircle2 size={13} /> Verifikasi
                          </button>
                          );
                        })()}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="px-5 py-3 flex items-center justify-between border-t border-gray-50 bg-gray-50/30">
        <span className="text-[11px] text-gray-400">
          Menampilkan {filtered.length === 0 ? 0 : (page - 1) * pageSize + 1}{Math.min(page * pageSize, filtered.length)} dari {filtered.length} data
        </span>
        <div className="flex items-center gap-1">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
            className="px-2.5 py-1 rounded-lg border border-gray-200 text-[11px] text-gray-500 disabled:opacity-40 hover:bg-gray-100 transition-colors">
             Prev
          </button>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pg = totalPages <= 5 ? i + 1 : Math.max(1, Math.min(totalPages - 4, page - 2)) + i;
            return (
              <button key={pg} onClick={() => setPage(pg)}
                className={`w-7 h-7 rounded-lg text-[11px] font-medium transition-colors ${pg === page ? "text-white" : "text-gray-500 hover:bg-gray-100"}`}
                style={pg === page ? { background: "linear-gradient(135deg, #252271, #3a35a8)" } : {}}>
                {pg}
              </button>
            );
          })}
          <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
            className="px-2.5 py-1 rounded-lg border border-gray-200 text-[11px] text-gray-500 disabled:opacity-40 hover:bg-gray-100 transition-colors">
            Next 
          </button>
        </div>
      </div>
    </div>
  );
}
