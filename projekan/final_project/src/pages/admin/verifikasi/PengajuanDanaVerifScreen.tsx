import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { AdminTopBar } from "../../../components/admin/AdminTopBar";
import { VerifTable, FilterConfig } from "../../../components/admin/shared/VerifTable";
import { AdminModal, ModalField, ModalInput, ModalSelect } from "../../../components/admin/shared/AdminModal";
import { DetailDocumentView } from "../../../components/user/pengadaan/DetailDocumentView";
import { Plus, CheckCircle2, XCircle, FileWarning } from "lucide-react";
import { useAuth } from "../../../store/authStore";
import { getVerifRecords } from "../../../store/dataStore";

type ScreenProps = {
  activeSubItem: string;
};

// ... options ...

export function PengajuanDanaVerifScreen({ activeSubItem }: ScreenProps) {
  const { currentUser } = useAuth();
  const adminName = currentUser?.name ?? "Admin";

  const [parkDocs, setParkDocs] = useState<any[]>([]);
  const [purchaseReqs, setPurchaseReqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchVerifData = async () => {
    setLoading(true);
    try {
      const [resPeng, resVerif] = await Promise.all([
        api.get('/pengadaan').catch(() => ({ data: [] })),
        api.get('/verifikasi').catch(() => ({ data: [] }))
      ]);

      const dbPeng = resPeng.data || [];
      const dbVerif = resVerif.data || [];
      const storeVerif = getVerifRecords();

      const combinedVerif = [...dbVerif, ...storeVerif.map(s => ({
        id: s.id,
        pengadaan_id: s.pengadaanId,
        pengadaan_nama: s.pengadaanNama,
        departemen: s.departemen,
        nominal: s.nominal,
        tipe: s.tipe,
        submit_by: s.submitBy,
        status: s.status,
        submit_at: s.submitAt,
      }))];

      const pdList: any[] = [];
      const prList: any[] = [];

      combinedVerif.forEach((item: any) => {
        const pId = item.pengadaan_id || item.id;
        const matchingPeng = dbPeng.find((p: any) => p.id === pId);
        const fd = matchingPeng?.formData || matchingPeng?.details || {};
        const bPd = fd["buat-pd"] || fd["buat-pr"] || {};
        const userEmailPic = bPd.emailPic || fd.emailPic || matchingPeng?.emailPic || item.emailPic || (item.submit_by && item.submit_by.includes("@") ? item.submit_by : "—");

        const mapped = {
          id: pId,
          verif_id: item.id,
          emailPic: userEmailPic,
          tahun: bPd.tahun || fd.tahun || new Date().getFullYear().toString(),
          divisi: bPd.subUnit || bPd.divisi || matchingPeng?.departemen || item.departemen || "CTIT",
          jenisPermohonan: bPd.jenisPermohonan || matchingPeng?.jenis || item.tipe || "Barang",
          judulPermohonan: bPd.judulPermohonan || matchingPeng?.nama || item.pengadaan_nama || item.judul || "Permohonan Dana",
          nominalPermohonan: bPd.nominalPermohonan || matchingPeng?.nominal || item.nominal || "Rp 0",
          nominalKonversi: bPd.nominalKonversi || matchingPeng?.nominal || item.nominal || "Rp 0",
          rupId: pId,
          tglPr: item.submit_at ? new Date(item.submit_at).toLocaleDateString("id-ID") : new Date().toLocaleDateString("id-ID"),
          status: item.status || matchingPeng?.status || "pending",
        };

        const isPr = (
          pId.startsWith("PR-") ||
          pId.startsWith("PRQ-") ||
          item.tipe === "purchase-requisition" ||
          item.tipe === "pr" ||
          matchingPeng?.id?.startsWith("PR-")
        );

        if (isPr) {
          prList.push(mapped);
        } else {
          pdList.push(mapped);
        }
      });

      setParkDocs(pdList);
      setPurchaseReqs(prList);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVerifData();
  }, [activeSubItem]);

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
      id: `${isParkDoc ? "PD" : "PR"}-${Math.floor(Math.random() * 900) + 100}`,
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

  const executeAction = async () => {
    if (!confirmAction) return;
    const { type, item } = confirmAction;

    try {
      if (item.verif_id) {
        if (type === "approve") {
          await api.post(`/verifikasi/${item.verif_id}/approve`);
        } else if (type === "revisi") {
          await api.post(`/verifikasi/${item.verif_id}/revisi`, { catatan: catatanText || 'Perlu revisi' });
        } else {
          await api.post(`/verifikasi/${item.verif_id}/reject`, { catatan: catatanText || 'Ditolak Admin' });
        }
      } else {
        await api.put(`/pengadaan/${item.id}`, { status: type === 'approve' ? 'approved' : type === 'revisi' ? 'Perlu Revisi' : 'rejected' });
      }
      fetchVerifData();
    } catch (err) {
      console.error("Gagal melakukan verifikasi", err);
      alert("Terjadi kesalahan saat memproses data.");
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
                <ModalSelect value={form.divisi} onChange={v => setForm(p => ({ ...p, divisi: v }))} options={["CTIT", "Logistik", "HC", "Finance", "Operasional"].map(o => ({ value: o, label: o }))} />
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

      {/* Detail Modal - Fullscreen DetailDocumentView */}
      {showDetail && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 overflow-y-auto">
          <DetailDocumentView
            title={`Detail Berkas Permohonan (${isParkDoc ? "Park Document" : "Purchase Requisition"})`}
            subtitle={`${isParkDoc ? "Park Document" : "Purchase Requisition"} - ${showDetail.id}`}
            status={showDetail.status || "Menunggu Verifikasi"}
            infoFields={[
              { label: "Nomor Permohonan", value: showDetail.id },
              { label: "RUP Terkait", value: showDetail.rupId },
              { label: "Email PIC", value: showDetail.emailPic },
              { label: "Tahun", value: showDetail.tahun },
              { label: "Divisi", value: showDetail.divisi },
              { label: "Jenis Permohonan", value: showDetail.jenisPermohonan },
              { label: "Judul Permohonan", value: showDetail.judulPermohonan },
              { label: "Nominal Permohonan", value: showDetail.nominalPermohonan },
              { label: "Nominal Konversi", value: showDetail.nominalKonversi },
              { label: "Tanggal Permohonan", value: showDetail.tglPr },
            ]}
            files={[
              { label: isParkDoc ? "Checklist PD" : "Checklist PR", fileName: `${isParkDoc ? "Checklist_PD" : "Checklist_PR"}_Signed.pdf`, size: "1.2 MB", isMandatory: true, status: "Selesai" },
              { label: "Nota Permohonan Dana", fileName: "Nota_Permohonan_Dana.pdf", size: "2.5 MB", isMandatory: true, status: "Selesai" },
              { label: "RAB", fileName: "RAB_Pengadaan_2024.xlsx", size: "350 KB", isMandatory: true, status: "Selesai" },
              { label: "Justifikasi", fileName: "Surat_Justifikasi_KCI.pdf", size: "1.9 MB", isMandatory: true, status: "Selesai" },
              { label: "MI Permohonan Release", fileName: "Memo_Internal_Rilis.pdf", size: "1.1 MB", isMandatory: true, status: "Selesai" },
            ]}
            onBack={() => setShowDetail(null)}
            onApprove={() => handleAction("approve", showDetail)}
            onRevisi={() => handleAction("revisi", showDetail)}
            onReject={() => handleAction("reject", showDetail)}
          />
        </div>
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
