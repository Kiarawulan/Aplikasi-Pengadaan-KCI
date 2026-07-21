import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { AdminTopBar } from "../../../components/admin/AdminTopBar";
import { VerifTable, StatusChip } from "../../../components/admin/VerifTable";
import { AdminModal, ModalField, ModalTextarea } from "../../../components/admin/AdminModal";
import {
  getVerifRecords, approveVerif, revisiVerif, rejectVerif, addVerifRecord, generateId
} from "../../../store/dataStore";
import type { VerifRecord } from "../../../types";
import { useAuth } from "../../../store/authStore";

const TIPE_OPTIONS = [
  { value: "park-dokumen", label: "Park Dokumen" },
  { value: "purchase-requisition", label: "Purchase Requisition" },
];

export function PengajuanDanaVerifScreen() {
  const { currentUser } = useAuth();
  const adminName = currentUser?.name ?? "Admin";

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

  const [refreshCnt, setRefreshCnt] = useState(0);
  useEffect(() => { fetchApiRecords(); }, [refreshCnt]);

  const allRecordsMap = new Map<string, VerifRecord>();
  [...getVerifRecords(), ...apiRecords].forEach(r => allRecordsMap.set(r.id, r));
  const records = Array.from(allRecordsMap.values()).filter(v => ["park-dokumen", "purchase-requisition"].includes(v.tipe));

  const [showRevisi, setShowRevisi] = useState<VerifRecord | null>(null);
  const [showReject, setShowReject] = useState<VerifRecord | null>(null);
  const [showDetail, setShowDetail] = useState<VerifRecord | null>(null);
  const [showAdd, setShowAdd] = useState<string | null>(null);
  const [catatanInput, setCatatanInput] = useState("");
  const [addForm, setAddForm] = useState({ pengadaanNama: "", departemen: "", nominal: "", submitBy: "" });

  const refresh = () => setRefreshCnt(r => r + 1);

  const handleApprove = (r: VerifRecord) => {
    approveVerif(r.id, adminName);
    refresh();
  };

  const handleRevisi = () => {
    if (!showRevisi || !catatanInput) return;
    revisiVerif(showRevisi.id, adminName, catatanInput);
    setShowRevisi(null);
    setCatatanInput("");
    refresh();
  };

  const handleReject = () => {
    if (!showReject || !catatanInput) return;
    rejectVerif(showReject.id, adminName, catatanInput);
    setShowReject(null);
    setCatatanInput("");
    refresh();
  };

  const handleAdd = () => {
    if (!showAdd || !addForm.pengadaanNama) return;
    const rec: VerifRecord = {
      id: generateId("VR"),
      pengadaanId: generateId("PD"),
      pengadaanNama: addForm.pengadaanNama,
      departemen: addForm.departemen,
      nominal: addForm.nominal,
      tipe: showAdd,
      submitBy: addForm.submitBy,
      submitAt: new Date().toISOString(),
      status: "pending",
    };
    addVerifRecord(rec);
    setShowAdd(null);
    setAddForm({ pengadaanNama: "", departemen: "", nominal: "", submitBy: "" });
    refresh();
  };

  const parkDokumen = records.filter(r => r.tipe === "park-dokumen");
  const purchaseRequisition = records.filter(r => r.tipe === "purchase-requisition");

  const columns = [
    { key: "nama", label: "Nama Pengadaan", render: (r: VerifRecord) => (
      <div>
        <p className="font-semibold text-gray-800 text-[12px]">{r.pengadaanNama}</p>
        <p className="text-gray-400 text-[10px]">{r.pengadaanId}</p>
      </div>
    )},
    { key: "dept", label: "Departemen", render: (r: VerifRecord) => <span className="text-[11.5px] text-gray-600">{r.departemen}</span> },
    { key: "nominal", label: "Nominal", render: (r: VerifRecord) => <span className="text-[12px] font-medium text-gray-700">{r.nominal}</span> },
    { key: "submit", label: "Diajukan Oleh", render: (r: VerifRecord) => (
      <div>
        <p className="text-[11.5px] text-gray-700">{r.submitBy}</p>
        <p className="text-gray-400 text-[10px]">{new Date(r.submitAt).toLocaleDateString("id-ID")}</p>
      </div>
    )},
    { key: "status", label: "Status", render: (r: VerifRecord) => <StatusChip status={r.status} /> },
    { key: "catatan", label: "Catatan Admin", render: (r: VerifRecord) => (
      <span className="text-[11px] text-gray-500">{r.catatanAdmin ?? "—"}</span>
    )},
  ];

  const SectionTable = ({ title, data, tipe }: { title: string; data: VerifRecord[]; tipe: string }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[14px] font-bold text-[#252271]">{title}</h2>
        <div className="flex items-center gap-2 text-[11px] text-gray-500">
          <span className="bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full font-medium">{data.filter(r => r.status === "pending").length} pending</span>
          <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-medium">{data.filter(r => r.status === "approved").length} disetujui</span>
        </div>
      </div>
      <VerifTable
        columns={columns}
        data={data}
        searchKeys={["pengadaanNama", "departemen", "submitBy"]}
        onView={(r) => setShowDetail(r)}
        onApprove={(r) => r.status === "pending" && handleApprove(r)}
        onRevisi={(r) => r.status === "pending" && (setShowRevisi(r), setCatatanInput(""))}
        onReject={(r) => r.status === "pending" && (setShowReject(r), setCatatanInput(""))}
        onAdd={() => { setAddForm({ pengadaanNama: "", departemen: "", nominal: "", submitBy: "" }); setShowAdd(tipe); }}
        addLabel={`Tambah ${title}`}
        showVerifActions={true}
        showCrudActions={true}
        filterOptions={[
          { key: "status", label: "Status", options: [
            { value: "pending", label: "Pending" },
            { value: "approved", label: "Disetujui" },
            { value: "revisi", label: "Revisi" },
            { value: "rejected", label: "Ditolak" },
          ]},
        ]}
        emptyMessage={`Tidak ada data ${title}`}
      />
    </div>
  );

  return (
    <div>
      <AdminTopBar title="Verifikasi Pengajuan Dana" subtitle="Verifikasi" />

      <SectionTable title="Park Dokumen" data={parkDokumen} tipe="park-dokumen" />
      <SectionTable title="Purchase Requisition" data={purchaseRequisition} tipe="purchase-requisition" />

      {/* Detail Modal */}
      {showDetail && (
        <AdminModal title="Detail Pengajuan" onClose={() => setShowDetail(null)} width="max-w-md" hideFooter>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Nama Pengadaan", value: showDetail.pengadaanNama },
                { label: "ID Pengadaan", value: showDetail.pengadaanId },
                { label: "Departemen", value: showDetail.departemen },
                { label: "Nominal", value: showDetail.nominal },
                { label: "Tipe", value: showDetail.tipe === "park-dokumen" ? "Park Dokumen" : "Purchase Requisition" },
                { label: "Diajukan Oleh", value: showDetail.submitBy },
                { label: "Tanggal Submit", value: new Date(showDetail.submitAt).toLocaleString("id-ID") },
              ].map(f => (
                <div key={f.label}>
                  <p className="text-[10.5px] text-gray-400 font-medium">{f.label}</p>
                  <p className="text-[12.5px] text-gray-700 font-semibold">{f.value || "—"}</p>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-gray-100">
              <p className="text-[10.5px] text-gray-400 font-medium mb-1">Status</p>
              <StatusChip status={showDetail.status} />
              {showDetail.catatanAdmin && (
                <div className="mt-2 bg-gray-50 rounded-lg p-3">
                  <p className="text-[10.5px] text-gray-400 mb-1">Catatan Admin</p>
                  <p className="text-[12px] text-gray-700">{showDetail.catatanAdmin}</p>
                </div>
              )}
            </div>
            {showDetail.status === "pending" && (
              <div className="flex gap-2 pt-2">
                <button onClick={() => { handleApprove(showDetail); setShowDetail(null); }}
                  className="flex-1 h-8 rounded-lg bg-green-600 text-white text-[11.5px] font-semibold hover:bg-green-700">
                  ✓ Setujui
                </button>
                <button onClick={() => { setShowRevisi(showDetail); setShowDetail(null); setCatatanInput(""); }}
                  className="flex-1 h-8 rounded-lg bg-blue-500 text-white text-[11.5px] font-semibold hover:bg-blue-600">
                  Revisi
                </button>
                <button onClick={() => { setShowReject(showDetail); setShowDetail(null); setCatatanInput(""); }}
                  className="flex-1 h-8 rounded-lg bg-red-500 text-white text-[11.5px] font-semibold hover:bg-red-600">
                  Tolak
                </button>
              </div>
            )}
          </div>
        </AdminModal>
      )}

      {/* Revisi Modal */}
      {showRevisi && (
        <AdminModal title="Kirim Revisi" subtitle={showRevisi.pengadaanNama} onClose={() => setShowRevisi(null)} onSubmit={handleRevisi} submitLabel="Kirim Revisi" width="max-w-md">
          <ModalField label="Catatan Revisi" required>
            <ModalTextarea value={catatanInput} onChange={setCatatanInput} placeholder="Tuliskan apa yang perlu diperbaiki..." rows={4} />
          </ModalField>
        </AdminModal>
      )}

      {/* Reject Modal */}
      {showReject && (
        <AdminModal title="Tolak Pengajuan" subtitle={showReject.pengadaanNama} onClose={() => setShowReject(null)} onSubmit={handleReject} submitLabel="Tolak" submitDestructive width="max-w-md">
          <ModalField label="Alasan Penolakan" required>
            <ModalTextarea value={catatanInput} onChange={setCatatanInput} placeholder="Tuliskan alasan penolakan..." rows={4} />
          </ModalField>
        </AdminModal>
      )}

      {/* Add Modal */}
      {showAdd && (
        <AdminModal title="Tambah Pengajuan" onClose={() => setShowAdd(null)} onSubmit={handleAdd} submitLabel="Tambah" width="max-w-md">
          <div className="space-y-3">
            <ModalField label="Nama Pengadaan" required>
              <input className="w-full h-9 px-3 rounded-lg border border-gray-200 text-[12.5px] focus:outline-none" value={addForm.pengadaanNama} onChange={e => setAddForm(p => ({ ...p, pengadaanNama: e.target.value }))} />
            </ModalField>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Departemen">
                <input className="w-full h-9 px-3 rounded-lg border border-gray-200 text-[12.5px] focus:outline-none" value={addForm.departemen} onChange={e => setAddForm(p => ({ ...p, departemen: e.target.value }))} />
              </ModalField>
              <ModalField label="Nominal">
                <input className="w-full h-9 px-3 rounded-lg border border-gray-200 text-[12.5px] focus:outline-none" placeholder="Rp ..." value={addForm.nominal} onChange={e => setAddForm(p => ({ ...p, nominal: e.target.value }))} />
              </ModalField>
            </div>
            <ModalField label="Diajukan Oleh">
              <input className="w-full h-9 px-3 rounded-lg border border-gray-200 text-[12.5px] focus:outline-none" value={addForm.submitBy} onChange={e => setAddForm(p => ({ ...p, submitBy: e.target.value }))} />
            </ModalField>
          </div>
        </AdminModal>
      )}
    </div>
  );
}
