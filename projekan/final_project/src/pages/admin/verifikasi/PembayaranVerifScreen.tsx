import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { AdminTopBar } from "../../../components/admin/AdminTopBar";
import { VerifTable, StatusChip } from "../../../components/admin/VerifTable";
import { AdminModal, ModalField, ModalInput, ModalSelect, ModalTextarea } from "../../../components/admin/AdminModal";
import { getVerifRecords, approveVerif, revisiVerif, rejectVerif, addVerifRecord, generateId } from "../../../store/dataStore";
import type { VerifRecord } from "../../../types";
import { useAuth } from "../../../store/authStore";

const PAYMENT_TYPES = ["umd", "outsource", "non-outsource"];
const TYPE_LABELS: Record<string, string> = {
  "umd": "UMD (Uang Muka Dana)",
  "outsource": "Outsource",
  "non-outsource": "Non-Outsource",
};

const MOCK_PAYMENT: VerifRecord[] = [
  { id: "VPB-001", pengadaanId: "PD-001", pengadaanNama: "Pengadaan Laptop Dell Latitude 5540", departemen: "CTIT", nominal: "Rp 30.000.000", tipe: "umd", submitBy: "Andi Wijaya", submitAt: "2024-03-01T09:00:00", status: "pending" },
  { id: "VPB-002", pengadaanId: "PD-002", pengadaanNama: "Pengadaan AC Split 2PK Office", departemen: "Logistik", nominal: "Rp 25.000.000", tipe: "outsource", submitBy: "Budi Santoso", submitAt: "2024-03-05T10:00:00", status: "approved", verifiedBy: "Super Admin", verifiedAt: "2024-03-06T09:00:00" },
  { id: "VPB-003", pengadaanId: "PD-004", pengadaanNama: "Pengadaan Furniture Kantor", departemen: "HRD", nominal: "Rp 45.000.000", tipe: "non-outsource", submitBy: "Budi Santoso", submitAt: "2024-03-08T11:00:00", status: "approved", verifiedBy: "Super Admin", verifiedAt: "2024-03-09T08:00:00" },
  { id: "VPB-004", pengadaanId: "PD-003", pengadaanNama: "Maintenance Server Room", departemen: "CTIT", nominal: "Rp 15.000.000", tipe: "umd", submitBy: "Andi Wijaya", submitAt: "2024-03-10T13:00:00", status: "revisi", catatanAdmin: "Dokumen kelengkapan belum terlampir" },
  { id: "VPB-005", pengadaanId: "PD-003", pengadaanNama: "Maintenance Server Room", departemen: "CTIT", nominal: "Rp 105.000.000", tipe: "non-outsource", submitBy: "Andi Wijaya", submitAt: "2024-03-12T09:00:00", status: "pending" },
];

function initMockPayment() {
  const existing = getVerifRecords();
  const existingIds = new Set(existing.map(r => r.id));
  MOCK_PAYMENT.forEach(rec => {
    if (!existingIds.has(rec.id)) addVerifRecord(rec);
  });
}

// Initialize mock data once when module loads
initMockPayment();

export function PembayaranVerifScreen() {
  const { currentUser } = useAuth();
  const adminName = currentUser?.name ?? "Admin";

  const [refresh, setRefresh] = useState(0);
  const [apiRecords, setApiRecords] = useState<VerifRecord[]>([]);

  const fetchApiRecords = () => {
    api.get("/verifikasi").then(res => {
      const mapped = res.data.map((r: any) => ({
        id: r.id,
        pengadaanId: r.pengadaan_id,
        pengadaanNama: r.pengadaan_nama,
        departemen: r.departemen,
        nominal: r.nominal,
        tipe: r.tipe,
        submitBy: r.submit_by,
        submitAt: r.submit_at,
        status: r.status,
        catatanAdmin: r.catatan_admin,
        verifiedBy: r.verified_by,
        verifiedAt: r.verified_at,
      }));
      setApiRecords(mapped);
    }).catch(console.error);
  };

  useEffect(() => {
    fetchApiRecords();
  }, [refresh]);

  const allRecordsMap = new Map<string, VerifRecord>();
  [...getVerifRecords(), ...apiRecords].forEach(r => allRecordsMap.set(r.id, r));
  const allRecords = Array.from(allRecordsMap.values()).filter(v => PAYMENT_TYPES.includes(v.tipe));

  const [showRevisi, setShowRevisi] = useState<VerifRecord | null>(null);
  const [showReject, setShowReject] = useState<VerifRecord | null>(null);
  const [showDetail, setShowDetail] = useState<VerifRecord | null>(null);
  const [showAdd, setShowAdd] = useState<string | null>(null); // stores payment type
  const [catatan, setCatatan] = useState("");
  const [addForm, setAddForm] = useState({ pengadaanNama: "", departemen: "", nominal: "", submitBy: "" });

  const doRefresh = () => setRefresh(r => r + 1);

  const handleApprove = (r: VerifRecord) => { approveVerif(r.id, adminName); doRefresh(); };
  const handleRevisi = () => {
    if (!showRevisi) return;
    revisiVerif(showRevisi.id, adminName, catatan);
    setShowRevisi(null); setCatatan(""); doRefresh();
  };
  const handleReject = () => {
    if (!showReject) return;
    rejectVerif(showReject.id, adminName, catatan);
    setShowReject(null); setCatatan(""); doRefresh();
  };

  const handleAdd = () => {
    if (!showAdd || !addForm.pengadaanNama) return;
    addVerifRecord({
      id: generateId("VPB"),
      pengadaanId: generateId("PD"),
      pengadaanNama: addForm.pengadaanNama,
      departemen: addForm.departemen,
      nominal: addForm.nominal,
      tipe: showAdd,
      submitBy: addForm.submitBy,
      submitAt: new Date().toISOString(),
      status: "pending",
    });
    setShowAdd(null);
    setAddForm({ pengadaanNama: "", departemen: "", nominal: "", submitBy: "" });
    doRefresh();
  };

  const columns = [
    { key: "nama", label: "Nama Pengadaan", render: (r: VerifRecord) => (
      <div><p className="font-semibold text-gray-800 text-[12px]">{r.pengadaanNama}</p><p className="text-gray-400 text-[10px]">{r.pengadaanId}</p></div>
    )},
    { key: "dept", label: "Departemen", render: (r: VerifRecord) => <span className="text-[11.5px] text-gray-600">{r.departemen}</span> },
    { key: "nominal", label: "Nominal", render: (r: VerifRecord) => <span className="text-[12px] font-semibold text-gray-700">{r.nominal}</span> },
    { key: "by", label: "Diajukan", render: (r: VerifRecord) => (
      <div><p className="text-[11.5px]">{r.submitBy}</p><p className="text-gray-400 text-[10px]">{new Date(r.submitAt).toLocaleDateString("id-ID")}</p></div>
    )},
    { key: "status", label: "Status", render: (r: VerifRecord) => <StatusChip status={r.status} /> },
    { key: "catatan", label: "Catatan", render: (r: VerifRecord) => (
      <span className="text-[11px] text-gray-500 truncate block max-w-28">{r.catatanAdmin ?? "—"}</span>
    )},
  ];

  const SectionTable = ({ tipe }: { tipe: string }) => {
    const sectionData = allRecords.filter(r => r.tipe === tipe);
    const pendingCount = sectionData.filter(r => r.status === "pending").length;
    const totalNominal = sectionData.filter(r => r.status === "approved").length;

    return (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-[14px] font-bold text-[#252271]">{TYPE_LABELS[tipe]}</h2>
            <p className="text-[10.5px] text-gray-400">
              {sectionData.length} pengajuan · {totalNominal} disetujui
            </p>
          </div>
          <div className="flex items-center gap-2">
            {pendingCount > 0 && (
              <span className="bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full text-[10.5px] font-medium animate-pulse">
                {pendingCount} menunggu
              </span>
            )}
          </div>
        </div>
        <VerifTable
          columns={columns}
          data={sectionData}
          searchKeys={["pengadaanNama", "departemen", "submitBy"]}
          onView={(r) => setShowDetail(r)}
          onApprove={(r) => r.status === "pending" && handleApprove(r)}
          onRevisi={(r) => r.status === "pending" && (setShowRevisi(r), setCatatan(""))}
          onReject={(r) => r.status === "pending" && (setShowReject(r), setCatatan(""))}
          onAdd={() => { setAddForm({ pengadaanNama: "", departemen: "", nominal: "", submitBy: "" }); setShowAdd(tipe); }}
          addLabel={`Tambah ${tipe.toUpperCase()}`}
          showVerifActions={true}
          showCrudActions={true}
          filterOptions={[
            { key: "status", label: "Status", options: [
              { value: "pending", label: "Pending" }, { value: "approved", label: "Disetujui" },
              { value: "revisi", label: "Revisi" }, { value: "rejected", label: "Ditolak" },
            ]},
          ]}
          emptyMessage={`Tidak ada data ${TYPE_LABELS[tipe]}`}
        />
      </div>
    );
  };

  // Summary stats
  const pending = allRecords.filter(r => r.status === "pending").length;
  const approved = allRecords.filter(r => r.status === "approved").length;
  const revisi = allRecords.filter(r => r.status === "revisi").length;

  return (
    <div>
      <AdminTopBar title="Verifikasi Pembayaran" subtitle="Verifikasi" />

      {/* Summary */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        {[
          { l: "Total Pembayaran", v: allRecords.length, c: "#252271" },
          { l: "Pending", v: pending, c: "#d97706" },
          { l: "Disetujui", v: approved, c: "#16a34a" },
          { l: "Revisi", v: revisi, c: "#2563eb" },
        ].map(s => (
          <div key={s.l} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-[16px]" style={{ background: s.c }}>
              {s.v}
            </div>
            <p className="text-gray-500 text-[11px]">{s.l}</p>
          </div>
        ))}
      </div>

      {PAYMENT_TYPES.map(t => <SectionTable key={t} tipe={t} />)}

      {/* Modals */}
      {showDetail && (
        <AdminModal title="Detail Pembayaran" onClose={() => setShowDetail(null)} width="max-w-md" hideFooter>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {[
                { l: "Nama Pengadaan", v: showDetail.pengadaanNama },
                { l: "Tipe", v: TYPE_LABELS[showDetail.tipe] ?? showDetail.tipe },
                { l: "Departemen", v: showDetail.departemen },
                { l: "Nominal", v: showDetail.nominal },
                { l: "Diajukan Oleh", v: showDetail.submitBy },
                { l: "Tanggal", v: new Date(showDetail.submitAt).toLocaleString("id-ID") },
              ].map(f => (
                <div key={f.l}><p className="text-[10px] text-gray-400">{f.l}</p><p className="text-[12px] font-semibold text-gray-700">{f.v || "—"}</p></div>
              ))}
            </div>
            <div className="pt-3 border-t border-gray-100">
              <StatusChip status={showDetail.status} />
              {showDetail.catatanAdmin && <p className="mt-2 text-[11.5px] text-gray-600 bg-gray-50 rounded-lg p-2">{showDetail.catatanAdmin}</p>}
            </div>
            {showDetail.status === "pending" && (
              <div className="flex gap-2 pt-2">
                <button onClick={() => { handleApprove(showDetail); setShowDetail(null); }} className="flex-1 h-8 rounded-lg bg-green-600 text-white text-[11.5px] font-semibold">✓ Setujui</button>
                <button onClick={() => { setShowRevisi(showDetail); setShowDetail(null); }} className="flex-1 h-8 rounded-lg bg-blue-500 text-white text-[11.5px] font-semibold">Revisi</button>
                <button onClick={() => { setShowReject(showDetail); setShowDetail(null); }} className="flex-1 h-8 rounded-lg bg-red-500 text-white text-[11.5px] font-semibold">Tolak</button>
              </div>
            )}
          </div>
        </AdminModal>
      )}

      {showRevisi && (
        <AdminModal title="Kirim Revisi" subtitle={showRevisi.pengadaanNama} onClose={() => setShowRevisi(null)} onSubmit={handleRevisi} submitLabel="Kirim Revisi" width="max-w-md">
          <ModalField label="Catatan Revisi" required>
            <ModalTextarea value={catatan} onChange={setCatatan} placeholder="Apa yang perlu diperbaiki?" rows={4} />
          </ModalField>
        </AdminModal>
      )}

      {showReject && (
        <AdminModal title="Tolak Pembayaran" subtitle={showReject.pengadaanNama} onClose={() => setShowReject(null)} onSubmit={handleReject} submitLabel="Tolak" submitDestructive width="max-w-md">
          <ModalField label="Alasan Penolakan" required>
            <ModalTextarea value={catatan} onChange={setCatatan} placeholder="Alasan penolakan..." rows={4} />
          </ModalField>
        </AdminModal>
      )}

      {showAdd && (
        <AdminModal title={`Tambah ${TYPE_LABELS[showAdd]}`} onClose={() => setShowAdd(null)} onSubmit={handleAdd} submitLabel="Tambah" width="max-w-md">
          <div className="space-y-3">
            <ModalField label="Nama Pengadaan" required>
              <ModalInput value={addForm.pengadaanNama} onChange={v => setAddForm(p => ({ ...p, pengadaanNama: v }))} placeholder="Nama pengadaan..." />
            </ModalField>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Departemen">
                <ModalInput value={addForm.departemen} onChange={v => setAddForm(p => ({ ...p, departemen: v }))} />
              </ModalField>
              <ModalField label="Nominal">
                <ModalInput value={addForm.nominal} onChange={v => setAddForm(p => ({ ...p, nominal: v }))} placeholder="Rp ..." />
              </ModalField>
            </div>
            <ModalField label="Diajukan Oleh">
              <ModalInput value={addForm.submitBy} onChange={v => setAddForm(p => ({ ...p, submitBy: v }))} />
            </ModalField>
          </div>
        </AdminModal>
      )}
    </div>
  );
}
