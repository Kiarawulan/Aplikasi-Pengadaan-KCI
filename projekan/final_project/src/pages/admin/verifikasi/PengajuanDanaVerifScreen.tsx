import { useState } from "react";
import { AdminTopBar } from "../../../components/admin/AdminTopBar";
import { VerifTable, FilterConfig } from "../../../components/admin/VerifTable";
import { AdminModal, ModalField, ModalInput, ModalSelect } from "../../../components/admin/AdminModal";
import { Plus, CheckCircle2, XCircle, FileWarning } from "lucide-react";
import { useAuth } from "../../../store/authStore";

type ScreenProps = {
  activeSubItem: string;
};

// Park Document - field sesuai form PembelianBaruPopup
const INITIAL_PARK_DOCUMENTS = [
  {
    id: "PRK-001",
    emailPic: "andi.wijaya@kci.co.id",
    tahun: "2024",
    divisi: "CTR - ROLLING STOCK",
    jenisPermohonan: "Barang",
    judulPermohonan: "Pengadaan Suku Cadang Bogie KRL Series 200",
    nominalPermohonan: "Rp 320.000.000",
    nominalKonversi: "$ 17.778",
    rupId: "RUP-003",
    tglPr: "2024-03-10",
    status: "pending"
  },
  {
    id: "PRK-002",
    emailPic: "budi.santoso@kci.co.id",
    tahun: "2024",
    divisi: "CUG - LOGISTIC",
    jenisPermohonan: "Jasa",
    judulPermohonan: "Jasa Pemeliharaan AC Depo Bukit Duri",
    nominalPermohonan: "Rp 120.000.000",
    nominalKonversi: "$ 6.667",
    rupId: "RUP-002",
    tglPr: "2024-03-14",
    status: "approved"
  },
  {
    id: "PRK-003",
    emailPic: "rian.hidayat@kci.co.id",
    tahun: "2024",
    divisi: "CTI - INFORMATION TECHNOLOGY",
    jenisPermohonan: "Barang",
    judulPermohonan: "Pengadaan Server Data Center KCI",
    nominalPermohonan: "Rp 800.000.000",
    nominalKonversi: "$ 44.444",
    rupId: "RUP-001",
    tglPr: "2024-03-18",
    status: "revisi"
  },
  {
    id: "PRK-004",
    emailPic: "siti.rahma@kci.co.id",
    tahun: "2024",
    divisi: "COS - HSE AND SECURITY",
    jenisPermohonan: "Jasa",
    judulPermohonan: "Pengadaan Alat Pelindung Diri (APD) Teknisi",
    nominalPermohonan: "Rp 88.000.000",
    nominalKonversi: "$ 4.889",
    rupId: "RUP-004",
    tglPr: "2024-03-20",
    status: "pending"
  },
  {
    id: "PRK-005",
    emailPic: "dewi.lestari@kci.co.id",
    tahun: "2024",
    divisi: "CTS - INFRASTRUCTURE",
    jenisPermohonan: "Konstruksi",
    judulPermohonan: "Perbaikan Kabel Fiber Optic Lintas Manggarai-Bogor",
    nominalPermohonan: "Rp 510.000.000",
    nominalKonversi: "$ 28.333",
    rupId: "RUP-005",
    tglPr: "2024-03-22",
    status: "rejected"
  },
];

// Purchase Requisition - field sesuai form PR (PrStepContent)
const INITIAL_PURCHASE_REQUISITIONS = [
  {
    id: "PRQ-001",
    emailPic: "sari.dewi@kci.co.id",
    tahun: "2024",
    divisi: "CTI - INFORMATION TECHNOLOGY",
    jenisPermohonan: "Barang",
    judulPermohonan: "Pengadaan Lisensi Software ERP Akuntansi",
    nominalPermohonan: "Rp 240.000.000",
    nominalKonversi: "$ 13.333",
    rupId: "RUP-001",
    tglPr: "2024-03-08",
    status: "pending"
  },
  {
    id: "PRQ-002",
    emailPic: "eko.prasetyo@kci.co.id",
    tahun: "2024",
    divisi: "CUG - LOGISTIC",
    jenisPermohonan: "Barang",
    judulPermohonan: "Pengadaan Suku Cadang Pantograf KRL",
    nominalPermohonan: "Rp 98.000.000",
    nominalKonversi: "$ 5.444",
    rupId: "RUP-002",
    tglPr: "2024-03-12",
    status: "approved"
  },
  {
    id: "PRQ-003",
    emailPic: "fikri.ramadhan@kci.co.id",
    tahun: "2024",
    divisi: "CTR - ROLLING STOCK",
    jenisPermohonan: "Jasa",
    judulPermohonan: "Jasa Overhaul Bogie KRL Manggarai",
    nominalPermohonan: "Rp 175.000.000",
    nominalKonversi: "$ 9.722",
    rupId: "RUP-003",
    tglPr: "2024-03-15",
    status: "pending"
  },
  {
    id: "PRQ-004",
    emailPic: "agus.pratama@kci.co.id",
    tahun: "2024",
    divisi: "CTS - INFRASTRUCTURE",
    jenisPermohonan: "Konstruksi",
    judulPermohonan: "Perbaikan Bantalan Rel Lintas Bogor",
    nominalPermohonan: "Rp 420.000.000",
    nominalKonversi: "$ 23.333",
    rupId: "RUP-004",
    tglPr: "2024-03-19",
    status: "revisi"
  },
];

const DIVISI_OPTIONS = [
  { value: "CUS - CORPORATE SECRETARY", label: "CUS - CORPORATE SECRETARY" },
  { value: "CUL - GRC AND LEGAL", label: "CUL - GRC AND LEGAL" },
  { value: "CUG - LOGISTIC", label: "CUG - LOGISTIC" },
  { value: "CUI - INTERNAL AUDIT", label: "CUI - INTERNAL AUDIT" },
  { value: "CUP - STRATEGIC PLANNING", label: "CUP - STRATEGIC PLANNING" },
  { value: "COS - HSE AND SECURITY", label: "COS - HSE AND SECURITY" },
  { value: "COC - COMMERCIAL", label: "COC - COMMERCIAL" },
  { value: "CTI - INFORMATION TECHNOLOGY", label: "CTI - INFORMATION TECHNOLOGY" },
  { value: "CTP - MAINTENANCE PLANNING", label: "CTP - MAINTENANCE PLANNING" },
  { value: "CTR - ROLLING STOCK", label: "CTR - ROLLING STOCK" },
  { value: "CTS - INFRASTRUCTURE", label: "CTS - INFRASTRUCTURE" },
  { value: "CAF - FINANCE", label: "CAF - FINANCE" },
  { value: "CAA - BUDGETING AND ACCOUNTING", label: "CAA - BUDGETING AND ACCOUNTING" },
  { value: "CAH - HUMAN CAPITAL", label: "CAH - HUMAN CAPITAL" },
  { value: "CUT - TESTING COMMITTEE", label: "CUT - TESTING COMMITTEE" },
];

export function PengajuanDanaVerifScreen({ activeSubItem }: ScreenProps) {
  const { currentUser } = useAuth();
  const adminName = currentUser?.name ?? "Admin";

  const [parkDocs, setParkDocs] = useState(INITIAL_PARK_DOCUMENTS);
  const [purchaseReqs, setPurchaseReqs] = useState(INITIAL_PURCHASE_REQUISITIONS);

  const [showAdd, setShowAdd] = useState(false);
  const [showDetail, setShowDetail] = useState<any | null>(null);
  const [confirmAction, setConfirmAction] = useState<{ type: "approve" | "reject" | "revisi"; item: any } | null>(null);
  const [catatanText, setCatatanText] = useState("");

  const [form, setForm] = useState({
    emailPic: "",
    tahun: "2024",
    divisi: "CUG - LOGISTIC",
    jenisPermohonan: "Barang",
    judulPermohonan: "",
    nominalPermohonan: "",
    nominalKonversi: "",
    rupId: "",
    tglPr: ""
  });

  const isParkDoc = activeSubItem === "park-document";
  const currentData = isParkDoc ? parkDocs : purchaseReqs;

  const handleAddSubmit = () => {
    const newRecord = {
      id: `${isParkDoc ? "PRK" : "PRQ"}-${Math.floor(Math.random() * 900) + 100}`,
      emailPic: form.emailPic || `${adminName.toLowerCase().replace(" ", ".")}@kci.co.id`,
      tahun: form.tahun,
      divisi: form.divisi,
      jenisPermohonan: form.jenisPermohonan,
      judulPermohonan: form.judulPermohonan || "Pengadaan Baru",
      nominalPermohonan: form.nominalPermohonan ? `Rp ${form.nominalPermohonan}` : "Rp 50.000.000",
      nominalKonversi: form.nominalKonversi || "$ 2.778",
      rupId: form.rupId || "RUP-001",
      tglPr: form.tglPr || new Date().toISOString().split("T")[0],
      status: "pending"
    };

    if (isParkDoc) {
      setParkDocs([newRecord, ...parkDocs]);
    } else {
      setPurchaseReqs([newRecord, ...purchaseReqs]);
    }
    setShowAdd(false);
    setForm({ emailPic: "", tahun: "2024", divisi: "CUG - LOGISTIC", jenisPermohonan: "Barang", judulPermohonan: "", nominalPermohonan: "", nominalKonversi: "", rupId: "", tglPr: "" });
  };

  const handleAction = (type: "approve" | "reject" | "revisi", item: any) => {
    setConfirmAction({ type, item });
    setCatatanText("");
  };

  const executeAction = () => {
    if (!confirmAction) return;
    const { type, item } = confirmAction;

    const updated = currentData.map(r => {
      if (r.id === item.id) {
        return { ...r, status: type === "approve" ? "approved" : type === "reject" ? "rejected" : "revisi" };
      }
      return r;
    });

    if (isParkDoc) {
      setParkDocs(updated as any);
    } else {
      setPurchaseReqs(updated as any);
    }

    setConfirmAction(null);
    setShowDetail(null);
  };

  const topFiltersConfig: FilterConfig[] = [
    { key: "divisi", label: "Divisi/Unit", type: "text" },
    {
      key: "status",
      label: "Status",
      type: "select",
      options: [
        { value: "pending", label: "Pending" },
        { value: "approved", label: "Disetujui" },
        { value: "revisi", label: "Revisi" },
        { value: "rejected", label: "Ditolak" },
      ],
    },
  ];

  // Columns match exactly the form fields in PembelianBaruPopup
  const columns = [
    { key: "id", label: "No. Dok", render: (r: any) => <span className="font-mono font-bold text-gray-700 text-[11px]">{r.id}</span> },
    { key: "rupId", label: "RUP", render: (r: any) => <span className="font-mono text-[11px] text-gray-500">{r.rupId}</span> },
    { key: "tglPr", label: "Tgl Permohonan", render: (r: any) => <span className="text-[11.5px]">{new Date(r.tglPr).toLocaleDateString("id-ID")}</span> },
    { key: "judulPermohonan", label: "Judul Permohonan", render: (r: any) => (
      <div>
        <p className="font-semibold text-gray-800 text-[11.5px] max-w-[200px] truncate">{r.judulPermohonan}</p>
        <p className="text-gray-400 text-[10px]">{r.jenisPermohonan}</p>
      </div>
    )},
    { key: "nominalPermohonan", label: "Nominal (IDR)", render: (r: any) => <span className="font-semibold text-gray-800 text-[11.5px]">{r.nominalPermohonan}</span> },
    { key: "nominalKonversi", label: "Konversi", render: (r: any) => <span className="text-gray-500 text-[11px] font-mono">{r.nominalKonversi}</span> },
    { key: "divisi", label: "Divisi", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.divisi.split(" - ")[0]}</span> },
    { key: "emailPic", label: "Email PIC", render: (r: any) => <span className="text-gray-500 text-[11px]">{r.emailPic}</span> },
    { key: "status", label: "Status", render: (r: any) => {
      const colors: Record<string, string> = {
        pending: "bg-amber-50 text-amber-600 border border-amber-200",
        approved: "bg-green-50 text-green-600 border border-green-200",
        rejected: "bg-red-50 text-red-600 border border-red-200",
        revisi: "bg-purple-50 text-purple-600 border border-purple-200"
      };
      return <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${colors[r.status] || "bg-gray-50 text-gray-600"}`}>{r.status.toUpperCase()}</span>;
    }}
  ];

  return (
    <div className="space-y-4">
      <AdminTopBar title={isParkDoc ? "Park Document" : "Purchase Requisition"} subtitle={`Pengajuan Dana - ${isParkDoc ? "Park Document" : "Purchase Requisition"}`} />

      <div className="relative">
        <div className="absolute right-5 top-4 z-10">
          <button
            onClick={() => setShowAdd(true)}
            className="bg-[#252271] hover:bg-[#1a1753] text-white px-3 py-1.5 rounded-lg text-[11.5px] font-semibold flex items-center gap-1 shadow-sm transition-colors"
          >
            <Plus size={14} />
            Tambah Data
          </button>
        </div>

        <VerifTable
          columns={columns}
          data={currentData}
          searchKeys={["judulPermohonan", "divisi", "emailPic", "rupId"]}
          dateKey="tglPr"
          topFilters={topFiltersConfig}
          onView={(r) => setShowDetail(r)}
          onApprove={(r) => handleAction("approve", r)}
          onRevisi={(r) => handleAction("revisi", r)}
          onReject={(r) => handleAction("reject", r)}
          showVerifActions={true}
          showCrudActions={true}
          emptyMessage="Tidak ada data pengajuan."
        />
      </div>

      {/* Add Modal - field sesuai PembelianBaruPopup */}
      {showAdd && (
        <AdminModal title={`Tambah ${isParkDoc ? "Park Document" : "Purchase Requisition"}`} onClose={() => setShowAdd(false)} onSubmit={handleAddSubmit} submitLabel="Submit" width="max-w-lg">
          <div className="space-y-3">
            <ModalField label="Pilih RUP" required>
              <ModalInput value={form.rupId} onChange={v => setForm(p => ({ ...p, rupId: v }))} placeholder="RUP-001..." />
            </ModalField>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Email PIC" required>
                <ModalInput type="email" value={form.emailPic} onChange={v => setForm(p => ({ ...p, emailPic: v }))} placeholder="nama@kci.co.id" />
              </ModalField>
              <ModalField label="Tahun" required>
                <ModalSelect value={form.tahun} onChange={v => setForm(p => ({ ...p, tahun: v }))} options={[{value:"2024",label:"2024"},{value:"2025",label:"2025"},{value:"2026",label:"2026"}]} />
              </ModalField>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Divisi" required>
                <ModalSelect value={form.divisi} onChange={v => setForm(p => ({ ...p, divisi: v }))} options={DIVISI_OPTIONS} />
              </ModalField>
              <ModalField label="Jenis Permohonan" required>
                <ModalSelect value={form.jenisPermohonan} onChange={v => setForm(p => ({ ...p, jenisPermohonan: v }))} options={[{value:"Barang",label:"Barang"},{value:"Jasa",label:"Jasa"},{value:"Konstruksi",label:"Konstruksi"},{value:"Konsultansi",label:"Konsultansi"}]} />
              </ModalField>
            </div>
            <ModalField label="Judul Permohonan" required>
              <ModalInput value={form.judulPermohonan} onChange={v => setForm(p => ({ ...p, judulPermohonan: v }))} placeholder="Judul Permohonan..." />
            </ModalField>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Nominal Permohonan (Rp)" required>
                <ModalInput type="number" value={form.nominalPermohonan} onChange={v => setForm(p => ({ ...p, nominalPermohonan: v }))} placeholder="320000000" />
              </ModalField>
              <ModalField label="Nominal Konversi ($)">
                <ModalInput value={form.nominalKonversi} onChange={v => setForm(p => ({ ...p, nominalKonversi: v }))} placeholder="$ 17.778" />
              </ModalField>
            </div>
            <ModalField label="Tanggal Permohonan" required>
              <ModalInput type="date" value={form.tglPr} onChange={v => setForm(p => ({ ...p, tglPr: v }))} />
            </ModalField>
          </div>
        </AdminModal>
      )}

      {/* Detail Modal - show all form fields */}
      {showDetail && (
        <AdminModal title="Detail Permohonan Dana" onClose={() => setShowDetail(null)} hideFooter width="max-w-lg">
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {[
                { k: "No. Dokumen", v: showDetail.id },
                { k: "RUP Terkait", v: showDetail.rupId },
                { k: "Email PIC", v: showDetail.emailPic },
                { k: "Tahun", v: showDetail.tahun },
                { k: "Divisi", v: showDetail.divisi },
                { k: "Jenis Permohonan", v: showDetail.jenisPermohonan },
                { k: "Judul Permohonan", v: showDetail.judulPermohonan },
                { k: "Nominal Permohonan", v: showDetail.nominalPermohonan },
                { k: "Nominal Konversi", v: showDetail.nominalKonversi },
                { k: "Tanggal Permohonan", v: showDetail.tglPr },
                { k: "Status", v: showDetail.status },
              ].map(row => (
                <div key={row.k} className="flex flex-col border-b border-gray-50 pb-1.5">
                  <span className="text-gray-400 text-[10px] font-mono uppercase">{row.k}</span>
                  <span className="font-semibold text-gray-700 text-[12px]">{row.v}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-100 flex gap-2 justify-end">
              <button onClick={() => handleAction("approve", showDetail)} className="bg-green-600 text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1">
                <CheckCircle2 size={12} /> Setujui
              </button>
              <button onClick={() => handleAction("revisi", showDetail)} className="bg-purple-600 text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1">
                <FileWarning size={12} /> Revisi
              </button>
              <button onClick={() => handleAction("reject", showDetail)} className="bg-red-600 text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1">
                <XCircle size={12} /> Tolak
              </button>
            </div>
          </div>
        </AdminModal>
      )}

      {/* Action Confirmation */}
      {confirmAction && (
        <AdminModal
          title={`Konfirmasi ${confirmAction.type.toUpperCase()}`}
          onClose={() => setConfirmAction(null)}
          onSubmit={executeAction}
          submitLabel="Proses"
          width="max-w-sm"
        >
          <div className="space-y-3">
            <p className="text-[12px] text-gray-600">
              Apakah Anda yakin ingin memproses dokumen <strong>{confirmAction.item.judulPermohonan}</strong> menjadi <strong className="uppercase">{confirmAction.type}</strong>?
            </p>
            <ModalField label="Catatan Verification (Opsional)">
              <ModalInput value={catatanText} onChange={v => setCatatanText(v)} placeholder="Alasan/catatan..." />
            </ModalField>
          </div>
        </AdminModal>
      )}
    </div>
  );
}
