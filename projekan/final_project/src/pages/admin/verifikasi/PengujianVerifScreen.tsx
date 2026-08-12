import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { AdminTopBar } from "../../../components/admin/AdminTopBar";
import { VerifTable, FilterConfig } from "../../../components/admin/shared/VerifTable";
import { AdminModal, ModalField, ModalInput, ModalSelect, ModalTextarea } from "../../../components/admin/shared/AdminModal";
import { FileUploadInput } from "../../../components/common/FileUploadInput";
import { WarningModal, WarningVariant } from "@/components/common/WarningModal";
import { Plus, CheckCircle2, XCircle, FileWarning, Eye, BarChart3, TrendingUp, ShieldCheck } from "lucide-react";
import { DIVISI_OPTIONS } from "../../../constants/divisi";
import { useMasterVendors } from "../../../hooks/useMasterVendors";

type ScreenProps = {
  activeSubItem: string;
};

// We fetch real data from API now.
const INITIAL_KONTRAK: any[] = [];
const INITIAL_KONTRAK_OVER: any[] = [];
const INITIAL_REQUEST_PENGUJIAN: any[] = [];
const INITIAL_REVIEW_PENGUJIAN: any[] = [];

export function PengujianVerifScreen({ activeSubItem }: ScreenProps) {
  const { vendorOptions } = useMasterVendors();
  const [loading, setLoading] = useState(false);
  const [kontrakList, setKontrakList] = useState<any[]>([]);
  const [kontrakListOver, setKontrakListOver] = useState<any[]>([]);
  const [requestList, setRequestList] = useState<any[]>([]);
  const [reviewList, setReviewList] = useState<any[]>([]);
  const [notifyModal, setNotifyModal] = useState<{ isOpen: boolean; title: string; message: string; variant: WarningVariant }>({
    isOpen: false,
    title: "",
    message: "",
    variant: "info",
  });

  const showNotify = (title: string, message: string, variant: WarningVariant = "info") => {
    setNotifyModal({ isOpen: true, title, message, variant });
  };

  const fetchPengadaanData = async () => {
    setLoading(true);
    try {
      const res = await api.get('/pengadaan');
      const allData = res.data.map((item: any) => {
        const fd = typeof item.formData === 'string' ? JSON.parse(item.formData) : (item.formData || {});
        const nominalStr = item.nominal || "Rp 0";
        const cleanNominal = parseInt(nominalStr.replace(/\D/g, '')) || 0;
        const isOver = cleanNominal >= 500000000;
        return {
          id: item.id,
          kontrakNo: item.id,
          sp3: fd.sp3No || "-",
          nama: item.nama,
          nominal: item.nominal,
          departemen: item.departemen,
          vendor: fd.vendor || "N/A",
          tanggal: item.tanggal,
          jadwal: fd.jadwalPengujian || item.tanggal,
          status: item.status,
          currentStep: item.currentStep,
          timeline: "On Schedule",
          isOver
        };
      });

      setKontrakList(allData.filter((d: any) => !d.isOver && (d.currentStep === 'contract' || d.currentStep === 'pengujian')));
      setKontrakListOver(allData.filter((d: any) => d.isOver && (d.currentStep === 'contract' || d.currentStep === 'pengujian')));
      setRequestList(allData.filter((d: any) => d.currentStep === 'pengujian' && d.status === 'pending'));
      setReviewList(allData.filter((d: any) => d.currentStep === 'pengujian' && d.status !== 'pending'));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPengadaanData();
  }, [activeSubItem]);

  const [showAddKontrak, setShowAddKontrak] = useState(false);
  const [showAddRequest, setShowAddRequest] = useState(false);
  const [showReviewDetail, setShowReviewDetail] = useState<any | null>(null);
  const [bahpFileName, setBahpFileName] = useState("");

  const [formKontrak, setFormKontrak] = useState({
    judul: "", nominal: "", vendor: "", jenisBarang: "Sparepart", kurs: "IDR", tglKontrak: "", noPerjanjian: "", tglPerjanjian: ""
  });

  const [formRequest, setFormRequest] = useState({ tipeKontrak: "<500jt", judul: "", assignTo: "Penguji 1 C-CUT", tglPengujian: "", doNo: "", tglDO: "", catatan: "" });

  const [confirmDialog, setConfirmDialog] = useState<{ type: "verifikasi" | "reject" | "kelengkapan"; text: string; show: boolean }>({ type: "verifikasi", text: "", show: false });
  const [actionReason, setActionReason] = useState("");

  const handleAddKontrakSubmit = () => {
    const isOver = activeSubItem === "kontrak-over-500";
    const newK = {
      id: `KTR-${isOver ? "5" : "0"}${Math.floor(Math.random() * 90) + 10}`,
      sp3: `SP3-${Math.floor(Math.random() * 9000) + 1000}`,
      nama: formKontrak.judul || "Pengadaan Barang KCI",
      nominal: formKontrak.nominal ? `Rp ${formKontrak.nominal}` : "Rp 250.000.000",
      departemen: "Logistik",
      vendor: formKontrak.vendor || "PT Vendor Utama",
      tanggal: formKontrak.tglKontrak || new Date().toISOString().split("T")[0],
      status: "Contract Release"
    };

    if (isOver) {
      setKontrakListOver([newK, ...kontrakListOver]);
    } else {
      setKontrakList([newK, ...kontrakList]);
    }
    setShowAddKontrak(false);
  };

  const handleAddRequestSubmit = () => {
    const newR = {
      kontrakNo: formRequest.judul || "KTR-099",
      nama: "Paket Pengadaan Barang Uji Baru",
      nominal: "Rp 320.000.000",
      departemen: "Sarpas",
      jadwal: formRequest.tglPengujian || new Date().toISOString().split("T")[0],
      timeline: "On Schedule"
    };
    setRequestList([newR, ...requestList]);
    setShowAddRequest(false);
  };

  const topFiltersConfig: FilterConfig[] = [
    { key: "departemen", label: "Divisi", type: "select", options: DIVISI_OPTIONS },
    {
      key: "status",
      label: "Status",
      type: "select",
      options: [
        { value: "Request Pengujian", label: "Request Pengujian" },
        { value: "Review Hasil Pengujian", label: "Review Hasil Pengujian" },
        { value: "Pengujian On Process", label: "Pengujian On Process" },
        { value: "Pengujian Rejected", label: "Pengujian Rejected" },
      ],
    },
  ];

  const renderContent = () => {
    if (activeSubItem === "pengujian-dashboard" || activeSubItem === "kontrak-dashboard" || activeSubItem === "tc-dashboard") {
      return (
        <div className="space-y-6">
          <AdminTopBar title="Dashboard Pengujian & Kontrak C-CUT" subtitle="Pengujian → Dashboard Overview" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: "Jumlah Kontrak", val: "148", color: "from-blue-600 to-indigo-700", icon: <BarChart3 size={20} /> },
              { label: "Jumlah Submitted", val: "124", color: "from-emerald-600 to-teal-700", icon: <TrendingUp size={20} /> },
              { label: "Pengujian On Going", val: "18", color: "from-amber-500 to-orange-600", icon: <ShieldCheck size={20} /> },
              { label: "Pengujian Done", val: "106", color: "from-purple-600 to-pink-600", icon: <CheckCircle2 size={20} /> },
            ].map(box => (
              <div key={box.label} className={`p-4 rounded-2xl bg-gradient-to-r ${box.color} text-white shadow-sm flex items-center justify-between`}>
                <div>
                  <p className="text-[11px] opacity-80 uppercase tracking-wider font-mono">{box.label}</p>
                  <p className="text-2xl font-black mt-1">{box.val}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm">{box.icon}</div>
              </div>
            ))}
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[13px] font-bold text-gray-800 mb-3">Tren Realisasi Pengujian Pengadaan</h3>
            <div className="h-44 bg-gray-50 rounded-xl flex items-center justify-center border border-dashed border-gray-200">
              <span className="text-[12px] text-gray-400 font-mono">Visual Chart Tren Pengujian (Monthly Data Active)</span>
            </div>
          </div>
        </div>
      );
    }

    if (activeSubItem.startsWith("kontrak-under-500") || activeSubItem.startsWith("kontrak-over-500")) {
      const isOver = activeSubItem.startsWith("kontrak-over-500");
      const currentList = isOver ? kontrakListOver : kontrakList;

      const columns = [
        { key: "id", label: "Nomor Kontrak", render: (r: any) => <span className="font-mono font-bold text-gray-700">{r.id}</span> },
        { key: "sp3", label: "No. SP3", render: (r: any) => <span className="font-mono text-[11px] text-gray-500">{r.sp3}</span> },
        { key: "nama", label: "Judul Pengadaan", render: (r: any) => <span className="font-semibold text-gray-800 text-[12.5px]">{r.nama}</span> },
        { key: "nominal", label: "Nilai Kontrak", render: (r: any) => <span className="font-semibold text-[#252271]">{r.nominal}</span> },
        { key: "departemen", label: "Divisi", render: (r: any) => <span className="text-gray-600 text-[11.5px]">{r.departemen}</span> },
        { key: "tanggal", label: "Tanggal Kontrak", render: (r: any) => <span className="text-gray-500 text-[11.5px]">{r.tanggal}</span> },
        { key: "status", label: "Status", render: (r: any) => <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-blue-50 text-blue-600 border border-blue-200">{r.status}</span> }
      ];

      return (
        <div className="space-y-4">
          <AdminTopBar title={isOver ? "List Kontrak > 500 Juta" : "List Kontrak < 500 Juta"} subtitle={`C-CUT → Kontrak → ${isOver ? "> 500jt" : "< 500jt"}`} />

          <div className="relative">
            <div className="absolute right-5 top-4 z-10">
              <button onClick={() => setShowAddKontrak(true)} className="bg-[#252271] text-white px-3 py-1.5 rounded-lg text-[11.5px] font-semibold flex items-center gap-1 shadow-sm">
                <Plus size={14} /> Tambah Kontrak
              </button>
            </div>

            <VerifTable
              columns={columns}
              data={currentList}
              searchKeys={["nama", "id", "departemen", "vendor"]}
              dateKey="tanggal"
              topFilters={[{ key: "departemen", label: "Divisi", type: "select", options: DIVISI_OPTIONS }]}
              showCrudActions={false}
              showVerifActions={true}
              onApprove={async (r) => {
                if (r.status?.toLowerCase().includes("pengujian")) {
                  try {
                    const res = await api.get("/pengujian");
                    const puj = res.data.find((x: any) => x.nama === r.nama || x.kontrakNo === r.id);
                    if (puj) {
                      await api.post(`/pengujian/${puj.id}/advance-status`, { status: "selesai" });
                      await api.put(`/pengadaan/${r.id}`, { status: "Selesai", currentStep: "pembayaran" });
                      showNotify("Bypass Berhasil", "Pengujian berhasil di-bypass ke tahap Pembayaran.", "info");
                      fetchPengadaanData();
                    } else {
                      showNotify("Data Tidak Ditemukan", "Data pengujian tidak ditemukan di database.", "warning");
                    }
                  } catch (e) {
                    showNotify("Gagal", "Gagal melakukan bypass pengujian.", "error");
                  }
                } else {
                  showNotify("Perhatian", "Hanya bisa bypass tahap Pengujian dari menu ini.", "warning");
                }
              }}
              emptyMessage="Tidak ada data kontrak."
            />
          </div>

          {showAddKontrak && (
            <AdminModal title="Tambah Kontrak" onClose={() => setShowAddKontrak(false)} onSubmit={handleAddKontrakSubmit} submitLabel="Submit" width="max-w-xl">
              <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
                <ModalField label="Judul Pengadaan" required>
                  <ModalInput value={formKontrak.judul} onChange={v => setFormKontrak(p => ({ ...p, judul: v }))} placeholder="Judul..." />
                </ModalField>
                <div className="grid grid-cols-2 gap-3">
                  <ModalField label="Nominal (Rp)" required>
                    <ModalInput type="number" value={formKontrak.nominal} onChange={v => setFormKontrak(p => ({ ...p, nominal: v }))} placeholder="Nominal..." />
                  </ModalField>
                  <ModalField label="Vendor Name" required>
                    <ModalSelect value={formKontrak.vendor} onChange={v => setFormKontrak(p => ({ ...p, vendor: v }))} options={vendorOptions} placeholder="Pilih vendor dari Master Data" />
                  </ModalField>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <ModalField label="Tanggal Kontrak" required>
                    <ModalInput type="date" value={formKontrak.tglKontrak} onChange={v => setFormKontrak(p => ({ ...p, tglKontrak: v }))} />
                  </ModalField>
                  <ModalField label="Jenis Barang" required>
                    <ModalSelect value={formKontrak.jenisBarang} onChange={v => setFormKontrak(p => ({ ...p, jenisBarang: v }))} options={[{value:"Sparepart",label:"Sparepart"}, {value:"Jasa",label:"Jasa"}]} />
                  </ModalField>
                </div>
              </div>
            </AdminModal>
          )}
        </div>
      );
    }

    if (activeSubItem.startsWith("pengujian-request")) {
      const columns = [
        { key: "kontrakNo", label: "Nomor Kontrak", render: (r: any) => <span className="font-mono font-bold text-gray-700">{r.kontrakNo}</span> },
        { key: "nama", label: "Judul Pengadaan", render: (r: any) => <span className="font-semibold text-gray-800 text-[12.5px]">{r.nama}</span> },
        { key: "nominal", label: "Nilai Kontrak", render: (r: any) => <span className="font-semibold text-[#252271]">{r.nominal}</span> },
        { key: "departemen", label: "Divisi", render: (r: any) => <span className="text-gray-600 text-[11.5px]">{r.departemen}</span> },
        { key: "jadwal", label: "Jadwal Pengujian", render: (r: any) => <span className="text-gray-500 text-[11.5px]">{r.jadwal}</span> },
        { key: "timeline", label: "Timeline", render: (r: any) => <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-green-50 text-green-600 border border-green-200">{r.timeline}</span> }
      ];

      return (
        <div className="space-y-4">
          <AdminTopBar title="Request Pengujian" subtitle="C-CUT → Pengujian → Request Pengujian" />

          <div className="relative">
            <div className="absolute right-5 top-4 z-10">
              <button onClick={() => setShowAddRequest(true)} className="bg-[#252271] text-white px-3 py-1.5 rounded-lg text-[11.5px] font-semibold flex items-center gap-1 shadow-sm">
                <Plus size={14} /> Tambah Pengujian
              </button>
            </div>

            <VerifTable
              columns={columns}
              data={requestList}
              searchKeys={["nama", "kontrakNo", "departemen"]}
              dateKey="jadwal"
              topFilters={[{ key: "departemen", label: "Divisi", type: "select", options: DIVISI_OPTIONS }]}
              showCrudActions={false}
              emptyMessage="Tidak ada data request pengujian."
            />
          </div>

          {showAddRequest && (
            <AdminModal title="Tambah Request Pengujian" onClose={() => setShowAddRequest(false)} onSubmit={handleAddRequestSubmit} submitLabel="Submit" width="max-w-xl">
              <div className="space-y-3">
                <ModalField label="Judul Pengadaan / Nomor Kontrak" required>
                  <ModalInput value={formRequest.judul} onChange={v => setFormRequest(p => ({ ...p, judul: v }))} placeholder="No Kontrak..." />
                </ModalField>
                <div className="grid grid-cols-2 gap-3">
                  <ModalField label="Pilih Penguji (Assign To)" required>
                    <ModalSelect value={formRequest.assignTo} onChange={v => setFormRequest(p => ({ ...p, assignTo: v }))} options={[{value:"Penguji 1 C-CUT",label:"Penguji 1 C-CUT"}, {value:"Penguji 2 C-CUT",label:"Penguji 2 C-CUT"}]} />
                  </ModalField>
                  <ModalField label="Tanggal Pengujian" required>
                    <ModalInput type="date" value={formRequest.tglPengujian} onChange={v => setFormRequest(p => ({ ...p, tglPengujian: v }))} />
                  </ModalField>
                </div>
              </div>
            </AdminModal>
          )}
        </div>
      );
    }

    if (activeSubItem.startsWith("pengujian-review")) {
      const columns = [
        { key: "kontrakNo", label: "Nomor Kontrak", render: (r: any) => <span className="font-mono font-bold text-gray-700">{r.kontrakNo}</span> },
        { key: "nama", label: "Judul Pengadaan", render: (r: any) => <span className="font-semibold text-gray-800 text-[12.5px]">{r.nama}</span> },
        { key: "nominal", label: "Nilai Kontrak", render: (r: any) => <span className="font-semibold text-[#252271]">{r.nominal}</span> },
        { key: "departemen", label: "Divisi", render: (r: any) => <span className="text-gray-600 text-[11.5px]">{r.departemen}</span> },
        { key: "status", label: "Status Pengujian", render: (r: any) => {
          const colors: Record<string, string> = {
            "Request Pengujian": "bg-blue-50 text-blue-600 border border-blue-200",
            "Review Hasil Pengujian": "bg-purple-50 text-purple-600 border border-purple-200",
            "Pengujian On Process": "bg-amber-50 text-amber-600 border border-amber-200",
            "Pengujian Rejected": "bg-red-50 text-red-600 border border-red-200"
          };
          return <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${colors[r.status] || "bg-gray-50 text-gray-600"}`}>{r.status}</span>;
        }}
      ];

      return (
        <div className="space-y-4">
          <AdminTopBar title="Review Pengajuan Pengujian" subtitle="C-CUT → Review Pengujian" />

          <VerifTable
            columns={columns}
            data={reviewList}
            searchKeys={["nama", "kontrakNo", "departemen"]}
            dateKey="jadwal"
            topFilters={topFiltersConfig}
            onView={(r) => setShowReviewDetail(r)}
            showVerifActions={false}
            showCrudActions={true}
            emptyMessage="Tidak ada pengajuan pengujian untuk direview."
          />

          {showReviewDetail && (
            <AdminModal title="Review Detail Pengujian" onClose={() => setShowReviewDetail(null)} hideFooter width="max-w-xl">
              <div className="space-y-3">
                {[
                  { k: "Nomor Kontrak", v: showReviewDetail.kontrakNo },
                  { k: "Judul Pengadaan", v: showReviewDetail.nama },
                  { k: "Nilai Kontrak", v: showReviewDetail.nominal },
                  { k: "Divisi", v: showReviewDetail.departemen },
                  { k: "Status", v: showReviewDetail.status }
                ].map(r => (
                  <div key={r.k} className="flex justify-between border-b border-gray-50 pb-1.5 text-[12px]">
                    <span className="text-gray-400 font-mono">{r.k}</span>
                    <span className="font-semibold text-gray-700">{r.v}</span>
                  </div>
                ))}

                <div className="pt-2">
                  <FileUploadInput
                    label="Upload Surat BAHP Signed (Tahap Pengujian)"
                    pengadaanId={showReviewDetail.pengadaan_id || showReviewDetail.pengadaanId || showReviewDetail.id || showReviewDetail.kontrakNo}
                    stage="bahp-signed"
                    value={bahpFileName}
                    onChange={(v) => setBahpFileName(v)}
                    adminStyle
                  />
                </div>

                <div className="pt-3 border-t border-gray-100 flex gap-2 justify-end">
                  <button disabled={["approved", "final", "closed", "sudah diverifikasi", "selesai", "disetujui"].includes(String(showReviewDetail.status || "").toLowerCase())} onClick={() => setConfirmDialog({ type: "verifikasi", text: "Verifikasi Pengujian Disetujui?", show: true })} className={`h-[30px] text-[11px] font-bold px-3 rounded-[9px] flex items-center gap-1.5 ${["approved", "final", "closed", "sudah diverifikasi", "selesai", "disetujui"].includes(String(showReviewDetail.status || "").toLowerCase()) ? "bg-slate-200 text-slate-500 cursor-not-allowed" : "bg-gradient-to-r from-[#17145e] to-[#2c2785] text-white"}`}>
                    <CheckCircle2 size={12} /> {["approved", "final", "closed", "sudah diverifikasi", "selesai", "disetujui"].includes(String(showReviewDetail.status || "").toLowerCase()) ? "Sudah Diverifikasi" : "Verifikasi"}
                  </button>
                  <button onClick={() => setConfirmDialog({ type: "kelengkapan", text: "Tambah Catatan Kelengkapan?", show: true })} className="h-[30px] bg-white border border-[#8f0505] text-[#8f0505] text-[11px] font-bold px-3 rounded-[9px] flex items-center gap-1.5">
                    <span className="size-[15px] rounded-full border border-current flex items-center justify-center"><FileWarning size={8} /></span> Revisi
                  </button>
                  <button onClick={() => setConfirmDialog({ type: "reject", text: "Tolak Pengujian?", show: true })} className="h-[30px] bg-gradient-to-r from-[#a50000] to-[#e00000] text-white text-[11px] font-bold px-3 rounded-[9px] flex items-center gap-1.5">
                    <XCircle size={12} /> Tolak
                  </button>
                </div>
              </div>
            </AdminModal>
          )}

          {confirmDialog.show && (
            <AdminModal
              title={confirmDialog.type === "kelengkapan" ? "CATATAN REVISI" : confirmDialog.type.toUpperCase()}
              onClose={() => setConfirmDialog({ type: "verifikasi", text: "", show: false })}
              onSubmit={async () => {
                if (!showReviewDetail) return;
                const pengadaanId = showReviewDetail.pengadaan_id || showReviewDetail.pengadaanId || showReviewDetail.id;
                const catatan = actionReason.trim() || (confirmDialog.type === "kelengkapan" ? "Perlu revisi kelengkapan dokumen pengujian." : confirmDialog.type === "reject" ? "Pengujian ditolak oleh admin." : "Disetujui.");

                try {
                  const resVerif = await api.get(`/verifikasi?pengadaan_id=${pengadaanId}`).catch(() => ({ data: [] }));
                  const verifList = Array.isArray(resVerif.data) ? resVerif.data : [];
                  let verif = verifList.find((v: any) => v.tipe === "pengujian");

                  if (!verif && pengadaanId) {
                    const createRes = await api.post("/verifikasi", {
                      pengadaanId: pengadaanId,
                      pengadaanNama: showReviewDetail.nama || showReviewDetail.judul || "Pengadaan",
                      departemen: showReviewDetail.departemen || "CTIT",
                      nominal: showReviewDetail.nominal || "—",
                      tipe: "pengujian",
                      submitBy: "User",
                    }).catch(() => null);
                    if (createRes?.data) verif = createRes.data;
                  }

                  const verifId = verif?.id || `VR-${pengadaanId}`;

                  if (confirmDialog.type === "kelengkapan" || confirmDialog.type === "revisi") {
                    await api.post(`/verifikasi/${verifId}/revisi`, { catatan });
                    showNotify("Revisi Terkirim", "Catatan revisi pengujian berhasil dikirim ke user.", "info");
                  } else if (confirmDialog.type === "reject") {
                    await api.post(`/verifikasi/${verifId}/reject`, { catatan });
                    showNotify("Pengujian Ditolak", "Pengujian berhasil ditolak.", "error");
                  } else {
                    await api.post(`/verifikasi/${verifId}/approve`);
                    showNotify("Verifikasi Berhasil", "Pengujian berhasil diverifikasi dan disetujui.", "info");
                  }
                  fetchPengadaanData();
                } catch (err: any) {
                  showNotify("Gagal Memproses", err?.response?.data?.message || "Gagal memproses tindakan pengujian.", "error");
                } finally {
                  setConfirmDialog({ type: "verifikasi", text: "", show: false });
                  setShowReviewDetail(null);
                  setActionReason("");
                }
              }}
              submitLabel="Kirim ke User"
              width="max-w-sm"
            >
              <div className="space-y-3">
                <p className="text-[12px] text-gray-600">{confirmDialog.text}</p>
                <ModalField label="Catatan / Alasan untuk User">
                  <ModalTextarea value={actionReason} onChange={v => setActionReason(v)} placeholder="Tuliskan catatan perbaikan untuk user..." rows={4} />
                </ModalField>
              </div>
            </AdminModal>
          )}
        </div>
      );
    }

    // DEFAULT FALLBACK TABLE FOR OTHER PENGUJIAN SUBVIEWS
    const fallbackColumns = [
      { key: "id", label: "ID Referensi", render: (r: any) => <span className="font-mono text-[11.5px] font-bold text-[#252271]">{r.id}</span> },
      { key: "nama", label: "Nama Paket Pengadaan", render: (r: any) => <span className="font-semibold text-gray-800 text-[12px]">{r.nama}</span> },
      { key: "nominal", label: "Nilai Kontrak", render: (r: any) => <span className="font-medium text-[#252271]">{r.nominal}</span> },
      { key: "status", label: "Status", render: (r: any) => <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-50 text-green-600 border border-green-200">{r.status}</span> }
    ];

    const fallbackData = kontrakList.concat(kontrakListOver);

    return (
      <div className="space-y-4">
        <AdminTopBar title={activeSubItem.toUpperCase().replace("-", " ")} subtitle="C-CUT → Pengujian" />
        <VerifTable
          columns={fallbackColumns}
          data={fallbackData}
          searchKeys={["nama"]}
          showCrudActions={false}
          emptyMessage="Tidak ada data pengujian."
        />
      </div>
    );
  };

  return (
    <div className="flex-1 min-h-screen pb-12">
      {renderContent()}
      <WarningModal
        isOpen={notifyModal.isOpen}
        title={notifyModal.title}
        message={notifyModal.message}
        variant={notifyModal.variant}
        onClose={() => setNotifyModal(p => ({ ...p, isOpen: false }))}
      />
    </div>
  );
}
