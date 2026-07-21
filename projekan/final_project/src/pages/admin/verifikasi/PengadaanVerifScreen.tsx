import { useState, useEffect } from "react";
import { AdminTopBar } from "../../../components/admin/AdminTopBar";
import { VerifTable, StatusChip } from "../../../components/admin/VerifTable";
import { AdminModal, ModalField, ModalTextarea } from "../../../components/admin/AdminModal";
import { getVerifRecords, approveVerif, revisiVerif, rejectVerif, addVerifRecord, generateId } from "../../../store/dataStore";
import { api } from "../../../services/api";
import type { VerifRecord } from "../../../types";
import { useAuth } from "../../../store/authStore";

// Pengadaan sub-categories from C-Log diagram
const PENGADAAN_TYPES = [
  "rup", "timeline", "npp", "sp3", "pbj", "contract",
  "memo-internal", "spr-jamlak", "park-dokumen", "pengajuan-dana", "purchase-requisition"
];

const TYPE_LABELS: Record<string, string> = {
  "rup": "RUP",
  "timeline": "Timeline",
  "npp": "NPP",
  "sp3": "SP3",
  "pbj": "PBJ",
  "contract": "Contract",
  "memo-internal": "Memo Internal",
  "spr-jamlak": "SPR & Pengantar Jamlak",
  "park-dokumen": "Park Dokumen",
  "pengajuan-dana": "Pengajuan Dana",
  "purchase-requisition": "Purchase Requisition"
};

// Sub-tables based on C-Log diagram
const SECTIONS = [
  {
    id: "rup",
    title: "RUP (Rencana Umum Pengadaan)",
    description: "Verifikasi Rencana Umum Pengadaan, Approve / Reject RUP",
    filterTypes: ["rup"],
  },
  {
    id: "purchase-requisition",
    title: "Purchase Requisition (PR)",
    description: "Verifikasi Pengajuan Purchase Requisition",
    filterTypes: ["purchase-requisition"],
  },
  {
    id: "pengajuan-dana",
    title: "Pengajuan Dana (Park Document)",
    description: "Verifikasi Pengajuan Dana dan Kelengkapannya",
    filterTypes: ["park-dokumen", "pengajuan-dana"],
  },
  {
    id: "npp",
    title: "NPP (Nota Permintaan Pengadaan)",
    description: "List NPP, Create New NPP",
    filterTypes: ["npp"],
  },
  {
    id: "sp3",
    title: "SP3 (Surat Perintah Pengadaan)",
    description: "Task Approval SP3 — Evaluasi, Reject/Approve, Print, Upload SP3 Signed",
    filterTypes: ["sp3"],
  },
  {
    id: "pbj",
    title: "PBJ (Pengadaan Barang/Jasa)",
    description: "RKS, Undangan RKS, Calon Peserta Tender, Aanwijzing, Dokumen Penawaran, Evaluasi, KKN, BA Hasil Lelang, Penetapan Pemenang, Memo Internal",
    filterTypes: ["pbj", "memo-internal", "spr-jamlak"],
  },
  {
    id: "contract",
    title: "Contract",
    description: "Draft Contract, Performance Bond, Verifikasi JamPel, Review Legal, Approval, Tanda Tangan, MPPL, Summary",
    filterTypes: ["contract"],
  },
];

const MOCK_SEED: VerifRecord[] = [
  { id: "VPG-RUP1", pengadaanId: "RUP-001", pengadaanNama: "Pengadaan Server Data Center", departemen: "CTIT", nominal: "Rp 800.000.000", tipe: "rup", submitBy: "user-it", submitAt: "2024-01-10T10:00:00", status: "approved", verifiedBy: "Super Admin", verifiedAt: "2024-01-11T10:00:00" },
  { id: "VPG-RUP2", pengadaanId: "RUP-002", pengadaanNama: "Jasa Maintenance AC Gedung", departemen: "Logistik", nominal: "Rp 120.000.000", tipe: "rup", submitBy: "user-logistik", submitAt: "2024-02-05T10:00:00", status: "pending" },
  { id: "VPG-001", pengadaanId: "PD-003", pengadaanNama: "Maintenance Server Room", departemen: "CTIT", nominal: "Rp 120.000.000", tipe: "purchase-requisition", submitBy: "Andi Wijaya", submitAt: "2024-02-15T10:00:00", status: "pending" },
  { id: "VPG-002", pengadaanId: "PD-002", pengadaanNama: "Pengadaan AC Split 2PK Office", departemen: "Logistik", nominal: "Rp 25.000.000", tipe: "npp", submitBy: "Budi Santoso", submitAt: "2024-02-16T09:00:00", status: "approved", verifiedBy: "Super Admin", verifiedAt: "2024-02-17T08:00:00" },
  { id: "VPG-003", pengadaanId: "PD-003", pengadaanNama: "Maintenance Server Room", departemen: "CTIT", nominal: "Rp 120.000.000", tipe: "sp3", submitBy: "Andi Wijaya", submitAt: "2024-02-18T11:00:00", status: "revisi", catatanAdmin: "Lampiran SP3 belum lengkap", verifiedBy: "Super Admin", verifiedAt: "2024-02-19T09:00:00" },
  { id: "VPG-004", pengadaanId: "PD-002", pengadaanNama: "Pengadaan AC Split 2PK Office", departemen: "Logistik", nominal: "Rp 25.000.000", tipe: "pbj", submitBy: "Reza Pratama", submitAt: "2024-02-20T13:00:00", status: "pending" },
  { id: "VPG-005", pengadaanId: "PD-004", pengadaanNama: "Pengadaan Furniture Kantor", departemen: "HRD", nominal: "Rp 45.000.000", tipe: "contract", submitBy: "Budi Santoso", submitAt: "2024-02-22T10:00:00", status: "approved", verifiedBy: "Super Admin", verifiedAt: "2024-02-23T09:00:00" },
];

function initMockData() {
  const existing = getVerifRecords();
  const existingIds = new Set(existing.map(r => r.id));
  MOCK_SEED.forEach(rec => {
    if (!existingIds.has(rec.id)) {
      addVerifRecord(rec);
    }
  });
}

// Initialize mock data once when module loads
initMockData();

export function PengadaanVerifScreen() {
  const { currentUser } = useAuth();
  const adminName = currentUser?.name ?? "Admin";

  const [refresh, setRefresh] = useState(0);
  const [apiRecords, setApiRecords] = useState<VerifRecord[]>([]);

  const fetchApiRecords = () => {
    api.get("/verifikasi").then(res => {
      // res.data contains verification records from backend
      // map backend keys to frontend keys if needed
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

  // Combine localStorage records (for RUP mock) and backend API records
  const allRecordsMap = new Map<string, VerifRecord>();
  [...getVerifRecords(), ...apiRecords].forEach(r => allRecordsMap.set(r.id, r));
  const allRecords = Array.from(allRecordsMap.values()).filter(v => PENGADAAN_TYPES.includes(v.tipe));

  const [showRevisi, setShowRevisi] = useState<VerifRecord | null>(null);
  const [showReject, setShowReject] = useState<VerifRecord | null>(null);
  const [showDetail, setShowDetail] = useState<VerifRecord | null>(null);
  const [detailFormData, setDetailFormData] = useState<Record<string, any> | null>(null);
  const [catatan, setCatatan] = useState("");
  const [sp3File, setSp3File] = useState("");

  const handleViewDetail = (r: VerifRecord) => {
    setShowDetail(r);
    setDetailFormData(null);
    api.get(`/pengadaan/${r.pengadaanId}`).then(res => {
      setDetailFormData(res.data.formData ?? {});
    }).catch(() => setDetailFormData({}));
  };

  const doRefresh = () => setRefresh(r => r + 1);

  const handleApprove = (r: VerifRecord) => { 
    approveVerif(r.id, adminName); 
    setTimeout(() => { doRefresh(); fetchApiRecords(); }, 500);
  };
  const handleRevisi = () => {
    if (!showRevisi) return;
    revisiVerif(showRevisi.id, adminName, catatan);
    setShowRevisi(null); setCatatan(""); 
    setTimeout(() => { doRefresh(); fetchApiRecords(); }, 500);
  };
  const handleReject = () => {
    if (!showReject) return;
    rejectVerif(showReject.id, adminName, catatan);
    setShowReject(null); setCatatan(""); 
    setTimeout(() => { doRefresh(); fetchApiRecords(); }, 500);
  };

  const columns = [
    { key: "nama", label: "Nama Pengadaan", render: (r: VerifRecord) => (
      <div><p className="font-semibold text-gray-800 text-[12px]">{r.pengadaanNama}</p><p className="text-gray-400 text-[10px]">{r.pengadaanId}</p></div>
    )},
    { key: "dept", label: "Dept", render: (r: VerifRecord) => <span className="text-[11.5px] text-gray-600">{r.departemen}</span> },
    { key: "nominal", label: "Nominal", render: (r: VerifRecord) => <span className="text-[12px] font-medium text-gray-700">{r.nominal}</span> },
    { key: "submitBy", label: "Diajukan", render: (r: VerifRecord) => (
      <div><p className="text-[11.5px] text-gray-700">{r.submitBy}</p><p className="text-gray-400 text-[10px]">{new Date(r.submitAt).toLocaleDateString("id-ID")}</p></div>
    )},
    { key: "status", label: "Status", render: (r: VerifRecord) => <StatusChip status={r.status} /> },
  ];

  return (
    <div>
      <AdminTopBar title="Verifikasi Pengadaan" subtitle="Verifikasi" />

      {/* C-Log process sections */}
      {SECTIONS.map(section => {
        const sectionData = allRecords.filter(r => section.filterTypes.includes(r.tipe));
        const pendingCount = sectionData.filter(r => r.status === "pending").length;

        return (
          <div key={section.id} className="mb-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-[14px] font-bold text-[#252271]">{section.title}</h2>
                <p className="text-[10.5px] text-gray-400 mt-0.5">{section.description}</p>
              </div>
              <div className="flex items-center gap-2">
                {pendingCount > 0 && (
                  <span className="bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full text-[10.5px] font-medium">
                    {pendingCount} pending
                  </span>
                )}
                <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-[10.5px]">
                  {sectionData.length} total
                </span>
              </div>
            </div>
            <VerifTable
              columns={columns}
              data={sectionData}
              searchKeys={["pengadaanNama", "departemen", "submitBy"]}
              onView={handleViewDetail}
              onApprove={(r) => r.status === "pending" && handleApprove(r)}
              onRevisi={(r) => r.status === "pending" && (setShowRevisi(r), setCatatan(""))}
              onReject={(r) => r.status === "pending" && (setShowReject(r), setCatatan(""))}
              showVerifActions={true}
              showCrudActions={true}
              filterOptions={[
                { key: "status", label: "Status", options: [
                  { value: "pending", label: "Pending" }, { value: "approved", label: "Disetujui" },
                  { value: "revisi", label: "Revisi" }, { value: "rejected", label: "Ditolak" },
                ]},
              ]}
              emptyMessage={`Tidak ada data ${section.title}`}
            />
          </div>
        );
      })}

      {/* Modals */}
      {showDetail && (
        <AdminModal title="Detail Pengadaan" onClose={() => setShowDetail(null)} width="max-w-md" hideFooter>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {[
                { l: "Nama Pengadaan", v: showDetail.pengadaanNama },
                { l: "ID", v: showDetail.pengadaanId },
                { l: "Departemen", v: showDetail.departemen },
                { l: "Nominal", v: showDetail.nominal },
                { l: "Tipe", v: TYPE_LABELS[showDetail.tipe] ?? showDetail.tipe },
                { l: "Diajukan Oleh", v: showDetail.submitBy },
                { l: "Tanggal", v: new Date(showDetail.submitAt).toLocaleString("id-ID") },
              ].map(f => (
                <div key={f.l}>
                  <p className="text-[10px] text-gray-400">{f.l}</p>
                  <p className="text-[12px] font-semibold text-gray-700">{f.v || "—"}</p>
                </div>
              ))}
            </div>

            {/* NPP Form Details */}
            {showDetail.tipe === "npp" && detailFormData && (
              <div className="pt-3 border-t border-gray-100">
                <p className="text-[11.5px] font-bold text-[#252271] mb-2">Detail Form NPP</p>
                <div className="bg-gray-50 rounded-lg p-3 space-y-2 border border-gray-200">
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium mb-0.5">Latar Belakang / Urgensi</p>
                    <p className="text-[11.5px] text-gray-700 leading-relaxed whitespace-pre-wrap">{detailFormData["buat-npp"]?.latarBelakang || "—"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium mb-0.5">Maksud & Tujuan / Sasaran</p>
                    <p className="text-[11.5px] text-gray-700 leading-relaxed whitespace-pre-wrap">{detailFormData["buat-npp"]?.sasaran || "—"}</p>
                  </div>
                  <div className="pt-2 mt-2 border-t border-gray-200">
                    <p className="text-[10px] text-gray-500 font-medium mb-0.5">Spesifikasi Tambahan</p>
                    <p className="text-[11.5px] text-gray-700 leading-relaxed whitespace-pre-wrap">{detailFormData["detail-npp"]?.spesifikasi || "—"}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-3 border-t border-gray-100">
              <StatusChip status={showDetail.status} />
              {showDetail.catatanAdmin && <p className="mt-2 text-[11.5px] text-gray-600 bg-gray-50 rounded-lg p-2">{showDetail.catatanAdmin}</p>}
            </div>
            {showDetail.status === "pending" && (showDetail.tipe === "sp3" || showDetail.tipe === "contract") && (
              <div className="pt-2">
                <p className="text-[11.5px] font-medium text-gray-700 mb-1.5">Upload Dokumen {showDetail.tipe.toUpperCase()} Final (PDF/Word)</p>
                <div className="flex items-center gap-2">
                  <label className="flex-1 cursor-pointer border border-dashed border-gray-300 rounded-lg px-3 py-2 text-[11px] text-gray-500 hover:bg-gray-50 flex items-center justify-center">
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => setSp3File(e.target.files?.[0]?.name || "")} />
                    {sp3File ? sp3File : `+ Pilih File ${showDetail.tipe.toUpperCase()}`}
                  </label>
                </div>
              </div>
            )}
            {showDetail.status === "pending" && (
              <div className="flex gap-2 pt-2">
                <button onClick={() => { handleApprove(showDetail); setShowDetail(null); setSp3File(""); }} className="flex-1 h-8 rounded-lg bg-green-600 text-white text-[11.5px] font-semibold">✓ Setujui</button>
                <button onClick={() => { setShowRevisi(showDetail); setShowDetail(null); setSp3File(""); }} className="flex-1 h-8 rounded-lg bg-blue-500 text-white text-[11.5px] font-semibold">Revisi</button>
                <button onClick={() => { setShowReject(showDetail); setShowDetail(null); setSp3File(""); }} className="flex-1 h-8 rounded-lg bg-red-500 text-white text-[11.5px] font-semibold">Tolak</button>
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
        <AdminModal title="Tolak Pengajuan" subtitle={showReject.pengadaanNama} onClose={() => setShowReject(null)} onSubmit={handleReject} submitLabel="Tolak" submitDestructive width="max-w-md">
          <ModalField label="Alasan Penolakan" required>
            <ModalTextarea value={catatan} onChange={setCatatan} placeholder="Alasan penolakan..." rows={4} />
          </ModalField>
        </AdminModal>
      )}
    </div>
  );
}
