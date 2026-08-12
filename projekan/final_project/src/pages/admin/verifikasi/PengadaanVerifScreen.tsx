import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { AdminTopBar } from "../../../components/admin/AdminTopBar";
import { VerifTable, FilterConfig } from "../../../components/admin/shared/VerifTable";
import { AdminModal, ModalField, ModalInput, ModalSelect, ModalTextarea } from "../../../components/admin/shared/AdminModal";
import { WarningModal, WarningVariant } from "@/components/common/WarningModal";
import { Plus, CheckCircle2, XCircle, FileWarning, Eye, Printer, Download, Trash2, Edit3, ChevronRight } from "lucide-react";
import { RupForm, NppForm, VendorForm } from "../../../types/forms";
import { Sp3DetailView } from "../../../components/admin/verifikasi/Sp3DetailView";
import { RupDetailView } from "../../../components/admin/verifikasi/RupDetailView";

import { NppDetailView } from "../../../components/admin/verifikasi/NppDetailView";
import { PengujianDetailView } from "../../../components/admin/verifikasi/PengujianDetailView";
import { getVerifRecords, getRupList, saveVerifRecords, saveRupList, updateRup, updateVerifRecord } from "../../../store/dataStore";
import { DIVISI_OPTIONS } from "../../../constants/divisi";
import { StatusBadge } from "../../../components/common/StatusBadge";

type ScreenProps = {
  activeSubItem: string;
};

// ... initial data constants ...


// ─── Mock Data ───────────────────────────────────────────────────────────────
const INITIAL_RUP = [
  { id: "RUP-001", judul: "Pengadaan Server Data Center KCI", bebanBiaya: "CTI - INFORMATION TECHNOLOGY", pbj: "Non-Sarana", sumberDana: "RKAP 2024", jenisKontrak: "Barang", nilaiRkap: "Rp 800.000.000", tahunRkap: "2024", typeTax: "PPN 11%", nilaiTax: "Rp 88.000.000", startDate: "2024-03-01", endDate: "2024-09-30", keterangan: "Pengadaan server untuk Data Center Kantor Pusat", date: "2024-03-01", status: "Submitted", vpDept: "VP Information Technology", capexOpex: "Capex", rkapKat: "Investasi" },
  { id: "RUP-002", judul: "Jasa Pemeliharaan AC Depo Bukit Duri", bebanBiaya: "CUG - LOGISTIC", pbj: "Non-Sarana", sumberDana: "RKAP 2024", jenisKontrak: "Jasa", nilaiRkap: "Rp 120.000.000", tahunRkap: "2024", typeTax: "PPN 11%", nilaiTax: "Rp 13.200.000", startDate: "2024-03-05", endDate: "2024-12-31", keterangan: "Pemeliharaan AC seluruh unit depo", date: "2024-03-05", status: "Submitted", vpDept: "VP Logistics", capexOpex: "Opex", rkapKat: "Eksploitasi" },
  { id: "RUP-003", judul: "Pengadaan Suku Cadang Bogie KRL Series 200", bebanBiaya: "CTR - ROLLING STOCK", pbj: "Sarana", sumberDana: "RKAP 2024", jenisKontrak: "Barang", nilaiRkap: "Rp 320.000.000", tahunRkap: "2024", typeTax: "PPN 11%", nilaiTax: "Rp 35.200.000", startDate: "2024-03-10", endDate: "2024-06-30", keterangan: "Suku cadang bogie untuk KRL Series 200 Dipo Depok", date: "2024-03-10", status: "Approved", vpDept: "VP Rolling Stock", capexOpex: "Capex", rkapKat: "Investasi" },
  { id: "RUP-004", judul: "Perbaikan Kabel Sinyal Lintas Manggarai-Bogor", bebanBiaya: "CTS - INFRASTRUCTURE", pbj: "Sarana", sumberDana: "RKAP 2024", jenisKontrak: "Jasa", nilaiRkap: "Rp 450.000.000", tahunRkap: "2024", typeTax: "PPN 11%", nilaiTax: "Rp 49.500.000", startDate: "2024-03-15", endDate: "2024-08-15", keterangan: "Perbaikan kabel sinyal lintas Manggarai-Bogor", date: "2024-03-15", status: "Submitted", vpDept: "VP Infrastructure", capexOpex: "Opex", rkapKat: "Pemeliharaan" },
];

const INITIAL_NPP = [
  { id: "NPP-001", sp3: "SP3-9021", judul: "Pengadaan Lisensi OS Server", rkap: "Rp 150.000.000", dept: "CTIT", tax: "Rp 16.500.000", realisasi: "Timeline", vendor: "PT Software Nusantara", date: "2024-03-02", coa: "5211101", jenisBarang: "IT Software", kurs: "IDR" },
  { id: "NPP-002", sp3: "SP3-7721", judul: "Pengadaan AC Split 2PK Stasiun", rkap: "Rp 85.000.000", dept: "Logistik", tax: "Rp 9.350.000", realisasi: "Diluar Timeline", vendor: "PT Hawa Dingin", date: "2024-03-08", coa: "5211102", jenisBarang: "Elektronik", kurs: "IDR" },
  { id: "NPP-003", sp3: "SP3-6612", judul: "Pengadaan Alat Pelindung Diri (APD) Teknisi", rkap: "Rp 120.000.000", dept: "Sarpas", tax: "Rp 13.200.000", realisasi: "Timeline", vendor: "PT Safety Karsa", date: "2024-03-12", coa: "5211103", jenisBarang: "General", kurs: "IDR" },
];

const INITIAL_SP3 = [
  { id: "SP3-001", title: "Pengadaan Genset Depo Depok", rkap: "Rp 1.250.000.000", dept: "Prasarana", tax: "Rp 137.500.000", realisasi: "Timeline", status: "Submitted", date: "2024-03-01", vendor: "PT Powerindo", prNo: "PR-9011", rabNo: "RAB-801", kakNo: "KAK-101", miNo: "MI-551" },
  { id: "SP3-002", title: "Sistem CCTV Stasiun Bogor", rkap: "Rp 780.000.000", dept: "IT & Security", tax: "Rp 85.800.000", realisasi: "Timeline", status: "Contract Release", date: "2024-03-06", vendor: "PT Vision Guard", prNo: "PR-9012", rabNo: "RAB-802", kakNo: "KAK-102", miNo: "MI-552" },
  { id: "SP3-003", title: "Pengadaan Lampu LED Penerangan Stasiun", rkap: "Rp 95.000.000", dept: "Fasilitas", tax: "Rp 10.450.000", realisasi: "Diluar Timeline", status: "Drafting RKS", date: "2024-03-14", vendor: "PT Terang Utama", prNo: "PR-9013", rabNo: "RAB-803", kakNo: "KAK-103", miNo: "MI-553" },
];

const INITIAL_PBJ = [
  { id: "PBJ-001", nama: "Pengadaan Suku Cadang KRL Series 200", prVal: "Rp 320.000.000", pdVal: "Rp 315.000.000", efisiensi: "Rp 5.000.000", realisasi: "Timeline", assignTo: "Staff Logistik 1", date: "2024-03-04", status: "Contract Release" },
  { id: "PBJ-002", nama: "Sistem Pemantauan CCTV Stasiun Bogor", prVal: "Rp 780.000.000", pdVal: "Rp 750.000.000", efisiensi: "Rp 30.000.000", realisasi: "Timeline", assignTo: "Staff Logistik 2", date: "2024-03-11", status: "Drafting RKS" },
  { id: "PBJ-003", nama: "Pengadaan Roda KRL Series 205", prVal: "Rp 890.000.000", pdVal: "Rp 870.000.000", efisiensi: "Rp 20.000.000", realisasi: "Timeline", assignTo: "Staff Logistik 3", date: "2024-03-19", status: "Undangan RKS" },
];

const INITIAL_CONTRACTS = [
  { id: "CTR-001", paket: "Pengadaan Server Data Center", nilai: "Rp 800.000.000", dept: "CTIT", pbj: "Sarana", performanceBond: "Verified", status: "Contract Release", date: "2024-03-05", startDate: "2024-03-01", endDate: "2024-09-01", totalHari: "184", hariLibur: "24", uncontrollDays: "0", totalHariKerja: "160" },
  { id: "CTR-002", paket: "Jasa Pemeliharaan AC Depo Bukit Duri", nilai: "Rp 120.000.000", dept: "Logistik", pbj: "Non-Sarana", performanceBond: "Verified", status: "Drafting", date: "2024-03-12", startDate: "2024-03-15", endDate: "2024-12-31", totalHari: "291", hariLibur: "40", uncontrollDays: "0", totalHariKerja: "251" },
];

const INITIAL_JAMLAK: any[] = [];
const INITIAL_VENDORS: any[] = [];

// ─── Component ───────────────────────────────────────────────────────────────
export function PengadaanVerifScreen({ activeSubItem }: ScreenProps) {
  const [pengadaanList, setPengadaanList] = useState<any[]>([]);
  const [verifTasks, setVerifTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [jamlakList, setJamlakList] = useState(INITIAL_JAMLAK);
  const [vendorList, setVendorList] = useState(INITIAL_VENDORS);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resPeng, resVerif, resRup] = await Promise.all([
        api.get('/pengadaan').catch(() => ({ data: [] })),
        api.get('/verifikasi').catch(() => ({ data: [] })),
        api.get('/rup').catch(() => ({ data: [] }))
      ]);

      const dbVerif = resVerif.data || [];
      const storeVerif: any[] = [];

      const allVerif = [
        ...dbVerif,
        ...storeVerif.map(s => ({
          id: s.id,
          pengadaan_id: s.pengadaanId,
          pengadaan_nama: s.pengadaanNama,
          departemen: s.departemen,
          nominal: s.nominal,
          tipe: s.tipe,
          submit_by: s.submitBy,
          status: s.status,
        }))
      ];

      const dbRup = resRup.data || [];
      const storeRup: any[] = [];

      dbRup.forEach((r: any) => {
        if (!allVerif.some(v => v.pengadaan_id === r.id)) {
          allVerif.push({
            id: `VR-${r.id}`,
            pengadaan_id: r.id,
            pengadaan_nama: r.nama,
            departemen: r.departemen || "Umum",
            nominal: r.nilai || "—",
            tipe: "rup",
            submit_by: r.created_by || "User",
            status: r.status || "pending",
          });
        }
      });

      storeRup.forEach((r: any) => {
        if (!allVerif.some(v => v.pengadaan_id === r.id)) {
          allVerif.push({
            id: `VR-${r.id}`,
            pengadaan_id: r.id,
            pengadaan_nama: r.nama,
            departemen: r.departemen || "Umum",
            nominal: r.nilai || "—",
            tipe: "rup",
            submit_by: r.createdBy || "User",
            status: r.status || "pending",
          });
        }
      });

      const uniqueVerifMap = new Map();
      const pengDataList = resPeng.data || [];
      allVerif.forEach(item => {
        const pId = item.pengadaan_id || item.id;
        const matchingPeng = pengDataList.find((p: any) => p.id === pId);
        const fd = matchingPeng
          ? (typeof matchingPeng.formData === 'string' ? JSON.parse(matchingPeng.formData) : (matchingPeng.formData || {}))
          : (item.document_form_data || item.pengadaan_form_data || {});
        const buatNpp = fd['buat-npp'] || fd['npp'] || {};
        const buatPd = fd['buat-pd'] || fd['buat-pr'] || {};

        const key = item.id || item.pengadaan_id;
        if (key && !uniqueVerifMap.has(key)) {
          uniqueVerifMap.set(key, {
            id: pId,
            verif_id: item.id,
            judul: buatNpp.judulPermohonan || buatPd.judulPermohonan || matchingPeng?.nama || item.pengadaan_nama || item.judul || "Pengadaan Baru",
            title: buatNpp.judulPermohonan || buatPd.judulPermohonan || matchingPeng?.nama || item.pengadaan_nama || item.judul || "Pengadaan Baru",
            nama: buatNpp.judulPermohonan || buatPd.judulPermohonan || matchingPeng?.nama || item.pengadaan_nama || item.judul || "Pengadaan Baru",
            tipe: item.tipe || "rup",
            dept: buatNpp.subUnit || buatNpp.divisi || buatPd.subUnit || buatPd.divisi || matchingPeng?.departemen || item.departemen || "Umum",
            vpDept: matchingPeng?.departemen || item.departemen || "Umum",
            bebanBiaya: matchingPeng?.departemen || item.departemen || "Umum",
            rkap: buatNpp.nilaiPr ? `Rp ${buatNpp.nilaiPr}` : (matchingPeng?.nominal || item.nominal || "N/A"),
            nilaiRkap: buatNpp.nilaiPr ? `Rp ${buatNpp.nilaiPr}` : (matchingPeng?.nominal || item.nominal || "N/A"),
            prVal: buatNpp.nilaiPr ? `Rp ${buatNpp.nilaiPr}` : (matchingPeng?.nominal || item.nominal || "N/A"),
            pdVal: matchingPeng?.nominal || item.nominal || "N/A",
            vendor: buatNpp.vendor || "N/A",
            coa: buatNpp.coa || "5211101",
            jenisBarang: buatNpp.jenisBarang || "Barang",
            kurs: buatNpp.kurs || "IDR",
            realisasi: buatNpp.realisasi === "true" ? "Timeline" : "Diluar Timeline",
            keterangan: buatNpp.keterangan || "",
            pengadaanNama: item.pengadaan_nama || item.judul || "Pengadaan Baru",
            status: item.status || "pending",
            jenisKontrak: buatPd.jenisPermohonan || "Barang",
            capexOpex: "Capex",
            tahunRkap: buatPd.tahun || "2024",
            formData: fd
          });
        }
      });

      setVerifTasks(Array.from(uniqueVerifMap.values()));
      setPengadaanList(resPeng.data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const timer = window.setInterval(fetchData, 15000);
    return () => window.clearInterval(timer);
  }, [activeSubItem]);

  const rupList = activeSubItem === 'rup-task-approval' 
    ? verifTasks.filter(t => t.tipe === 'rup' && (t.status === 'pending' || t.status === 'Submitted' || t.status === 'Menunggu Verifikasi Admin')) 
    : verifTasks.filter(t => t.tipe === 'rup');

  const nppList = verifTasks.filter(t => t.tipe === 'npp');
  const sp3List = verifTasks.filter(t => t.tipe === 'sp3');
  const pbjList = verifTasks.filter(t => t.tipe === 'pbj');
  const contractList = verifTasks.filter(t => t.tipe === 'contract');

  const genericList = pengadaanList; // used for warehouse, harga, dll

  const adminFilters = [
    {
      key: "status",
      label: "Status",
      options: [
        { value: "pending", label: "Menunggu" },
        { value: "approved", label: "Disetujui" },
        { value: "revisi", label: "Revisi" },
        { value: "rejected", label: "Ditolak" },
      ],
    },
    {
      key: "dept",
      label: "Divisi",
      options: DIVISI_OPTIONS,
    },
  ];


  const [showDetail, setShowDetail] = useState<any | null>(null);
  const [showRevisionBox, setShowRevisionBox] = useState(false);
  const [revisionNote, setRevisionNote] = useState("");
  const [showPbjProcess, setShowPbjProcess] = useState<any | null>(null);
  const [showContractProcess, setShowContractProcess] = useState<any | null>(null);
  const [actionModal, setActionModal] = useState<{ item: any; type: "revisi" | "reject"; docType: string; notes: string } | null>(null);

  const [notifyModal, setNotifyModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    variant: WarningVariant;
  }>({
    isOpen: false,
    title: "",
    message: "",
    variant: "info",
  });

  const showNotify = (title: string, message: string, variant: WarningVariant = "info") => {
    setNotifyModal({ isOpen: true, title, message, variant });
  };

  const [confirmDeleteModal, setConfirmDeleteModal] = useState<{ isOpen: boolean; row: any } | null>(null);

  const submitActionModal = async () => {
    if (!actionModal) return;
    const { item, type, docType, notes } = actionModal;
    const catatan = notes.trim() || (type === "revisi" ? "Mohon lakukan perbaikan dokumen." : "Pengajuan ditolak oleh Admin.");
    const endpoint = type === "revisi" ? "revisi" : "reject";
    const label = docType.toUpperCase();
    const successMsg = type === "revisi" ? `${label} berhasil direvisi.` : `${label} berhasil ditolak.`;
    try {
      await api.post(`/verifikasi/${item.verif_id}/${endpoint}`, { catatan });
      fetchData();
      showNotify(type === "revisi" ? "Revisi Terkirim" : "Pengajuan Ditolak", successMsg, "info");
    } catch (e: any) {
      showNotify("Gagal", e.response?.data?.message || `Gagal ${type === "revisi" ? "merevisi" : "menolak"}.`, "error");
    } finally {
      setActionModal(null);
    }
  };

  const handleDelete = (row: any) => {
    if (!row.verif_id) return;
    setConfirmDeleteModal({ isOpen: true, row });
  };

  const executeDelete = async () => {
    if (!confirmDeleteModal?.row) return;
    const row = confirmDeleteModal.row;
    try {
      await api.delete(`/verifikasi/${row.verif_id}`);
      // Bersihkan cache demo lama agar data tidak tampil lagi saat halaman dimuat ulang.
      saveVerifRecords(getVerifRecords().filter(item => item.id !== row.verif_id));
      if (row.tipe === 'rup') {
        saveRupList(getRupList().filter(item => item.id !== row.id));
      }
      setShowDetail(null);
      setShowPbjProcess(null);
      setShowContractProcess(null);
      await fetchData();
      showNotify("Data Dihapus", "Data berhasil dihapus dari sistem.", "info");
    } catch (e: any) {
      showNotify("Gagal Menghapus", e.response?.data?.message || "Gagal menghapus data.", "error");
    } finally {
      setConfirmDeleteModal(null);
    }
  };

  // Forms
  const [formRup, setFormRup] = useState<RupForm>({
    pilihan: "Lebih 500 Juta", judul: "", capexOpex: "Capex", uraian: "", metode: "Pelelangan Umum",
    jenis: "Barang", kategori: "Investasi", tahunAnggaran: "2024", tahunRup: "2024", tipeKontrak: "Single Year",
    pbj: "Sarana", nilaiSebelumPajak: "", rkip: "Ya", tipePajak: "PPN 11%", nilaiPaket: "", targetLogistik: "",
    perkiraanWaktu: "", lokasi: "", volume: "", penyesuaian: ""
  });

  const [formNpp, setFormNpp] = useState<NppForm>({
    realisasi: "Timeline", timelineText: "", judul: "", metode: "Pelelangan Umum", vendor: "",
    nilaiPr: "", coa: "", typeTax: "PPN 11%", nilaiTax: "", jenisBarang: "Barang", kurs: "IDR", keterangan: "",
    prNo: "", prDate: "", prFile: "", rabNo: "", rabDate: "", rabFile: "",
    justNo: "", justDate: "", justFile: "", miNo: "", miDate: "", miFile: "", miPerihal: ""
  });

  const [formVendor, setFormVendor] = useState<VendorForm>({ name: "", code: "", country: "Indonesia", city: "", accountGroup: "", searchTerm: "", purchaseOrg: "", termOfPayment: "30 Hari", currency: "IDR", address: "" });

  const getSubmenuInfo = () => {
    switch (activeSubItem) {
      case "rup-task-approval": return { title: "Task Approval RUP", subtitle: "RUP - Task Approval", mode: "rup-task" };
      case "rup-list-timeline": return { title: "List Timeline RUP", subtitle: "RUP - List Timeline", mode: "rup-timeline" };
      case "rup-upload-timeline-final": return { title: "Upload Timeline Final", subtitle: "RUP - Timeline Final", mode: "rup-signed" };
      case "npp-task-approval": return { title: "Task Approval NPP", subtitle: "NPP - Task Approval", mode: "npp-task" };
      case "npp-list-npp": return { title: "List NPP", subtitle: "NPP - List NPP", mode: "npp-list" };
      case "sp3-task-approval": return { title: "Task Approval SP3", subtitle: "SP3 - Task Approval", mode: "sp3-task" };
      case "sp3-list-sp3": return { title: "List SP3", subtitle: "SP3 - List SP3", mode: "sp3-list" };
      case "sp3-upload-sp3-final": return { title: "Upload SP3 Final", subtitle: "SP3 - Upload SP3 Final", mode: "sp3-signed" };
      case "pbj-task-approval-pbj": return { title: "Task Approval PBJ", subtitle: "PBJ - Task Approval", mode: "pbj-task" };
      case "pbj-list-pbj": return { title: "List PBJ", subtitle: "PBJ - List", mode: "pbj-list" };
      case "pbj-memo-internal": return { title: "Memo Internal PBJ", subtitle: "PBJ - Memo Internal", mode: "pbj-memo" };
      case "contract-task-approval-contract": return { title: "Task Approval Contract", subtitle: "Contract - Task Approval", mode: "contract-task" };
      case "contract-list-contract": return { title: "List Contract", subtitle: "Contract - List Contract", mode: "contract-list" };
      case "jamlak-list-jamlak": return { title: "List Jaminan Pelaksanaan", subtitle: "Jamlak - List Jamlak", mode: "jamlak-list" };
      case "vendor-list-vendor": return { title: "List Vendor Management", subtitle: "Vendor - List Vendor", mode: "vendor-list" };
      case "warehouse-card": return { title: "Warehouse Card", subtitle: "Warehouse - Card", mode: "warehouse" };
      case "harga-list-harga-satuan": return { title: "Harga Satuan", subtitle: "Harga Satuan - List", mode: "harga" };
      case "adendum-list-adendum": return { title: "Adendum Kontrak", subtitle: "Adendum Kontrak - List", mode: "adendum" };
      case "evaluasi-list-evaluasi-vendor": return { title: "Evaluasi Vendor", subtitle: "Evaluasi Vendor - List", mode: "evaluasi" };
      case "tkdn": return { title: "TKDN", subtitle: "Pengadaan - TKDN", mode: "tkdn" };
      case "monitoring-kpi": return { title: "Monitoring KPI", subtitle: "Pengadaan - Monitoring KPI", mode: "monitoring-kpi" };
      case "monitoring-mppl": return { title: "Monitoring MPPL", subtitle: "Pengadaan - Monitoring MPPL", mode: "monitoring-mppl" };
      default: return { title: "Task Approval RUP", subtitle: "RUP - Task Approval", mode: "rup-task" };
    }
  };

  const { title, subtitle, mode } = getSubmenuInfo();



  // Columns
  const rupColumns = [
    { key: "id", label: "ID RUP", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.id}</span> },
    { key: "vpDept", label: "Divisi", render: (r: any) => <span className="text-gray-700 text-[11px] font-medium">{r.vpDept}</span> },
    { key: "judul", label: "Nama Paket Pengadaan", render: (r: any) => <div><p className="font-semibold text-gray-800 text-[11.5px] max-w-[200px] truncate">{r.judul}</p><p className="text-gray-400 text-[10px]">{r.bebanBiaya}</p></div> },
    { key: "jenisKontrak", label: "Jenis", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.jenisKontrak}</span> },
    { key: "pbj", label: "PBJ", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.pbj}</span> },
    { key: "capexOpex", label: "Capex/Opex", render: (r: any) => <span className="text-gray-600 text-[11px] font-mono">{r.capexOpex}</span> },
    { key: "nilaiRkap", label: "RKAP", render: (r: any) => <span className="font-semibold text-gray-800 text-[11.5px]">{r.nilaiRkap}</span> },
    { key: "tahunRkap", label: "Tahun RUP", render: (r: any) => <span className="text-[11px] text-gray-500">{r.tahunRkap}</span> },
    { key: "status", label: "Status", render: (r: any) => <StatusBadge status={r.status} /> },
  ];

  const nppColumns = [
    { key: "judul", label: "Judul Pengadaan", render: (r: any) => (
      <div>
        <p className="font-semibold text-gray-800 text-[11.5px] max-w-[240px] truncate">{r.judul || r.nama || r.pengadaanNama || r.title || "Judul Pengadaan"}</p>
        <p className="text-gray-400 text-[10px]">{r.id} • {r.vendor || "N/A"}</p>
      </div>
    )},
    { key: "sp3", label: "No. SP3", render: (r: any) => <span className="font-mono text-gray-500 text-[11px]">{r.sp3 || "—"}</span> },
    { key: "rkap", label: "RKAP Value", render: (r: any) => <span className="font-semibold text-gray-800 text-[11.5px]">{r.rkap || r.nilaiRkap || "—"}</span> },
    { key: "dept", label: "Dept", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.dept || r.departemen || "—"}</span> },
    { key: "tax", label: "Tax Value", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.tax || "—"}</span> },
  ];

  const sp3Columns = [
    { key: "id", label: "No. Pengadaan", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.id}</span> },
    { key: "nama", label: "Procurement Title", render: (r: any) => <div><p className="font-semibold text-gray-800 text-[11.5px] max-w-[220px] truncate">{r.nama || r.title}</p><p className="text-gray-400 text-[10px]">{r.vendor}</p></div> },
    { key: "nominal", label: "Nilai Pengadaan", render: (r: any) => <span className="font-semibold text-gray-800 text-[11.5px]">{r.nominal || r.rkap}</span> },
    { key: "dept", label: "Divisi", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.departemen || r.dept}</span> },
  ];

  const pbjColumns = activeSubItem === 'pbj-task-approval-pbj' ? [
    { key: "id", label: "No. SP3", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.id || r.sp3 || "SP3-2024-001"}</span> },
    { key: "nama", label: "Nama Paket Pengadaan", render: (r: any) => <p className="font-semibold text-gray-800 text-[11.5px] max-w-[200px] truncate">{r.nama || r.judul}</p> },
    { key: "pr", label: "Nilai PR (NPEI)", render: (r: any) => <span className="font-semibold text-gray-800 text-[11.5px]">{r.nilaiPr || r.nominal || "Rp 500.000.000"}</span> },
    { key: "po", label: "Nilai PO", render: (r: any) => <span className="font-semibold text-gray-800 text-[11.5px]">{r.nilaiPo || "Rp 485.000.000"}</span> },
    { key: "efisiensi", label: "Nilai Efisiensi", render: (r: any) => <span className="text-gray-600 text-[11.5px]">{r.nilaiEfisiensi || "Rp 15.000.000"}</span> },
    { key: "realisasi", label: "Realisasi", render: (r: any) => <span className="text-gray-600 text-[11.5px]">{r.realisasi || "100%"}</span> },
    { key: "assign", label: "Assign to", render: (r: any) => <span className="text-gray-600 text-[11.5px]">{r.assignTo || "Tim PBJ 1"}</span> },
    { key: "status", label: "Status", render: (r: any) => <StatusBadge status={r.status || "Contract Release"} /> },
  ] : activeSubItem === 'pbj-memo-internal' ? [
    { key: "id", label: "No. SP3", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.id || r.sp3 || "SP3-2024-001"}</span> },
    { key: "judul", label: "Judul Pengadaan", render: (r: any) => <p className="font-semibold text-gray-800 text-[11.5px] max-w-[220px] truncate">{r.nama || r.judul}</p> },
    { key: "memo", label: "Nomor Memo Internal", render: (r: any) => <span className="font-mono text-gray-700 text-[11.5px]">{r.nomorMemo || "MI-2024-001"}</span> },
    { key: "tglMemo", label: "Tanggal Memo", render: (r: any) => <span className="text-gray-600 text-[11.5px]">{r.tanggalMemo || "15-01-2024"}</span> },
    { key: "status", label: "Status", render: (r: any) => <StatusBadge status={r.status || "Approved"} /> },
  ] : [
    { key: "id", label: "No. SP3", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.id || r.sp3 || "SP3-2024-001"}</span> },
    { key: "nama", label: "Nama Paket Pengadaan", render: (r: any) => <p className="font-semibold text-gray-800 text-[11.5px] max-w-[220px] truncate">{r.nama || r.judul}</p> },
    { key: "nominal", label: "Nilai Kontrak", render: (r: any) => <span className="font-semibold text-gray-800 text-[11.5px]">{r.nominal || r.nilaiKontrak || "Rp 485.000.000"}</span> },
    { key: "status", label: "Status", render: (r: any) => <StatusBadge status={r.status || "Contract Release"} /> },
  ];

  const contractColumns = activeSubItem === 'contract-task-approval-contract' ? [
    { key: "id", label: "No. SP3", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.id || r.sp3 || "SP3-2024-001"}</span> },
    { key: "nama", label: "Nama Paket Pengadaan", render: (r: any) => <p className="font-semibold text-gray-800 text-[11.5px] max-w-[200px] truncate">{r.nama || r.paket}</p> },
    { key: "nominal", label: "Nilai Kontrak", render: (r: any) => <span className="font-semibold text-gray-800 text-[11.5px]">{r.nominal || r.nilai || "Rp 485.000.000"}</span> },
    { key: "dept", label: "Divisi", render: (r: any) => <span className="text-gray-600 text-[11.5px]">{r.departemen || r.dept || "CTIT"}</span> },
    { key: "pbj", label: "PBJ", render: (r: any) => <span className="text-gray-600 text-[11.5px]">{r.pbj || "Sarana"}</span> },
    { key: "bond", label: "Performance Bond", render: (r: any) => <span className="text-gray-600 text-[11.5px]">{r.performanceBond || "Rp 24.250.000"}</span> },
    { key: "status", label: "Status", render: (r: any) => <StatusBadge status={r.status || "Contract Release"} /> },
  ] : [
    { key: "id", label: "No. SP3", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.id || r.sp3 || "SP3-2024-001"}</span> },
    { key: "nama", label: "Nama Paket Pengadaan", render: (r: any) => <p className="font-semibold text-gray-800 text-[11.5px] max-w-[220px] truncate">{r.nama || r.paket}</p> },
    { key: "nominal", label: "Nilai Kontrak", render: (r: any) => <span className="font-semibold text-gray-800 text-[11.5px]">{r.nominal || r.nilai || "Rp 485.000.000"}</span> },
    { key: "status", label: "Status", render: (r: any) => <StatusBadge status={r.status || "Active"} /> },
  ];

  const jamlakColumns = [
    { key: "id", label: "No Jamlak", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.id}</span> },
    { key: "judul", label: "Judul Pengadaan", render: (r: any) => <p className="font-semibold text-gray-800 text-[11.5px] max-w-[200px] truncate">{r.judul}</p> },
    { key: "berlaku", label: "Masa Berlaku", render: (r: any) => <span className="text-[11px] text-gray-600">{r.tglMulai} s/d {r.tglSelesai}</span> },
    { key: "keuangan", label: "Diterima Keuangan", render: (r: any) => <span className="text-[11px] font-semibold text-gray-700">{r.keuangan} ({r.tglTerima})</span> },
    { key: "status", label: "Status", render: (r: any) => <StatusBadge status={r.status} /> },
  ];

  const vendorColumns = [
    { key: "code", label: "Vendor Code", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.code}</span> },
    { key: "name", label: "Name Of Vendor", render: (r: any) => <div><p className="font-semibold text-gray-800 text-[11.5px]">{r.name}</p><p className="text-gray-400 text-[10px]">{r.street}</p></div> },
    { key: "city", label: "City & Country", render: (r: any) => <span className="text-[11px] text-gray-600">{r.city}, {r.country}</span> },
    { key: "currency", label: "Currency", render: (r: any) => <span className="font-mono text-[11px] text-gray-700">{r.currency}</span> },
  ];

  return (
    <div className="space-y-4">
      {/* ─── Action Modal (Revisi / Tolak) ─── */}
      {actionModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <h3 className="text-[#252271] text-[16px] font-extrabold mb-1">
              {actionModal.type === "revisi" ? "Catatan Revisi" : "Alasan Penolakan"}
            </h3>
            <p className="text-[#6b7280] text-[12px] mb-4">
              {actionModal.type === "revisi"
                ? "Tuliskan catatan perbaikan yang harus dilakukan oleh user."
                : "Tuliskan alasan penolakan dokumen ini."}
            </p>
            <textarea
              autoFocus
              value={actionModal.notes}
              onChange={(e) => setActionModal((prev) => prev ? { ...prev, notes: e.target.value } : prev)}
              placeholder={actionModal.type === "revisi" ? "Masukkan catatan revisi..." : "Masukkan alasan penolakan..."}
              className="w-full h-[100px] border border-gray-200 rounded-xl px-3 py-2.5 text-[12px] text-gray-800 focus:border-[#252271] focus:ring-2 focus:ring-[#252271]/10 outline-none resize-none mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setActionModal(null)}
                className="px-5 py-2 rounded-xl border border-gray-200 text-[12px] font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={submitActionModal}
                className={`px-5 py-2 rounded-xl text-[12px] font-bold text-white transition-colors ${
                  actionModal.type === "revisi"
                    ? "bg-amber-500 hover:bg-amber-600"
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >
                {actionModal.type === "revisi" ? "Kirim Revisi" : "Tolak"}
              </button>
            </div>
          </div>
        </div>
      )}

      <AdminTopBar title={title} subtitle={subtitle} />

      <div className="relative">
        {mode.startsWith("rup") && (
          <VerifTable
            columns={rupColumns} data={rupList} searchKeys={["judul", "bebanBiaya", "vpDept"]}
            filterOptions={adminFilters}
            onView={(r) => setShowDetail({ type: "rup", item: r })}
            onApprove={async (r) => {
              try {
                if (r.verif_id && !r.verif_id.startsWith("VR-RUP")) {
                  await api.post(`/verifikasi/${r.verif_id}/approve`).catch(() => {});
                }
                await api.put(`/rup/${r.id}`, { status: "Approved" }).catch(() => {});
                updateRup(r.id, { status: "approved" as any });
                if (r.verif_id) {
                  updateVerifRecord(r.verif_id, { status: "approved" as any });
                }
                fetchData();
                showNotify("RUP Disetujui", `RUP ${r.nama || r.id} berhasil disetujui.`, "info");
              } catch (e: any) {
                console.error(e);
                showNotify("Gagal", "Gagal menyetujui RUP.", "error");
              }
            }}
            onRevisi={(r) => {
              if (r.verif_id) {
                setActionModal({ item: r, type: "revisi", docType: "rup", notes: "" });
              } else {
                setPengadaanList(prev => prev.map(item => item.id === r.id ? { ...item, status: "Revisi" } : item));
              }
            }}
            onReject={(r) => {
              if (r.verif_id) {
                setActionModal({ item: r, type: "reject", docType: "rup", notes: "" });
              } else {
                setPengadaanList(prev => prev.map(item => item.id === r.id ? { ...item, status: "Rejected" } : item));
              }
            }}
            onDelete={handleDelete}
            showVerifActions={true} showCrudActions={true} emptyMessage="Tidak ada data RUP."
          />
        )}

        {mode.startsWith("npp") && (
          <VerifTable
            hideIndexColumn={true}
            columns={nppColumns} data={nppList} searchKeys={["judul", "sp3", "vendor"]}
            filterOptions={adminFilters}
            onView={(r) => setShowDetail({ type: "npp", item: r })}
            onApprove={async (r) => {
              if (r.verif_id) {
                try {
                  await api.post(`/verifikasi/${r.verif_id}/approve`);
                  fetchData();
                  showNotify("NPP Disetujui", "NPP berhasil disetujui.", "info");
                } catch (e: any) {
                  showNotify("Gagal", e.response?.data?.message || "Gagal menyetujui NPP.", "error");
                }
              } else {
                setPengadaanList(prev => prev.map(item => item.id === r.id ? { ...item, status: "Approved" } : item));
              }
            }}
            onRevisi={(r) => {
              if (r.verif_id) {
                setActionModal({ item: r, type: "revisi", docType: "npp", notes: "" });
              } else {
                setPengadaanList(prev => prev.map(item => item.id === r.id ? { ...item, status: "Revisi" } : item));
              }
            }}
            onReject={(r) => {
              if (r.verif_id) {
                setActionModal({ item: r, type: "reject", docType: "npp", notes: "" });
              } else {
                setPengadaanList(prev => prev.map(item => item.id === r.id ? { ...item, status: "Rejected" } : item));
              }
            }}
            onDelete={handleDelete}
            showVerifActions={true}
            showCrudActions={true} emptyMessage="Tidak ada data NPP."
          />
        )}

        {mode.startsWith("sp3") && (
          <VerifTable
            columns={sp3Columns} data={sp3List} searchKeys={["nama", "id", "vendor"]}
            filterOptions={adminFilters}
            onView={(r) => setShowDetail({ type: "sp3", item: r })}
            onApprove={async (r) => {
              if (r.verif_id) {
                try {
                  await api.post(`/verifikasi/${r.verif_id}/approve`);
                  fetchData();
                  showNotify("SP3 Disetujui", "SP3 berhasil disetujui.", "info");
                } catch (e: any) {
                  showNotify("Gagal", e.response?.data?.message || "Gagal menyetujui SP3.", "error");
                }
              } else {
                setPengadaanList(prev => prev.map(item => item.id === r.id ? { ...item, status: "Approved" } : item));
              }
            }}
            onRevisi={(r) => {
              if (r.verif_id) {
                setActionModal({ item: r, type: "revisi", docType: "sp3", notes: "" });
              } else {
                setPengadaanList(prev => prev.map(item => item.id === r.id ? { ...item, status: "Revisi" } : item));
              }
            }}
            onReject={(r) => {
              if (r.verif_id) {
                setActionModal({ item: r, type: "reject", docType: "sp3", notes: "" });
              } else {
                setPengadaanList(prev => prev.map(item => item.id === r.id ? { ...item, status: "Rejected" } : item));
              }
            }}
            onDelete={handleDelete}
            showVerifActions={true}
            showCrudActions={true} emptyMessage="Tidak ada data SP3."
          />
        )}

        {mode.startsWith("pbj") && (
          <VerifTable
            columns={pbjColumns} data={pbjList} searchKeys={["nama", "id", "assignTo"]}
            filterOptions={adminFilters}
            onView={(r) => setShowPbjProcess(r)}
            onApprove={async (r) => {
              if (r.verif_id) {
                try {
                  await api.post(`/verifikasi/${r.verif_id}/approve`);
                  fetchData();
                  showNotify("PBJ Disetujui", "PBJ berhasil disetujui.", "info");
                } catch (e: any) {
                  showNotify("Gagal", e.response?.data?.message || "Gagal menyetujui PBJ.", "error");
                }
              } else {
                setPengadaanList(prev => prev.map(item => item.id === r.id ? { ...item, status: "Approved" } : item));
              }
            }}
            onRevisi={(r) => {
              if (r.verif_id) {
                setActionModal({ item: r, type: "revisi", docType: "pbj", notes: "" });
              } else {
                setPengadaanList(prev => prev.map(item => item.id === r.id ? { ...item, status: "Revisi" } : item));
              }
            }}
            onReject={(r) => {
              if (r.verif_id) {
                setActionModal({ item: r, type: "reject", docType: "pbj", notes: "" });
              } else {
                setPengadaanList(prev => prev.map(item => item.id === r.id ? { ...item, status: "Rejected" } : item));
              }
            }}
            onDelete={handleDelete}
            showVerifActions={true}
            showCrudActions={true} emptyMessage="Tidak ada data PBJ."
          />
        )}

        {mode.startsWith("contract") && (
          <VerifTable
            columns={contractColumns} data={contractList} searchKeys={["nama", "paket", "id"]}
            filterOptions={adminFilters}
            onView={(r) => setShowDetail({ type: "contract", item: r })}
            showVerifActions={true}
            onDelete={handleDelete}
            onApprove={async (r) => {
              const s = (r.status || "").toLowerCase();
              if (s.includes("pengujian")) {
                try {
                  const res = await api.get("/pengujian");
                  const puj = res.data.find((x: any) => x.nama === r.nama || x.nama === r.paket);
                  if (puj) {
                    await api.post(`/pengujian/${puj.id}/advance-status`, { status: "selesai" });
                    await api.put(`/pengadaan/${r.id}`, { status: "Selesai" });
                    showNotify("Bypass Berhasil", "Pengujian berhasil di-bypass.", "info");
                    fetchData();
                  } else {
                    showNotify("Data Tidak Ditemukan", "Data pengujian tidak ditemukan di backend.", "warning");
                  }
                } catch (e) {
                  showNotify("Gagal", "Gagal bypass pengujian.", "error");
                }
              } else if (s.includes("pembayaran")) {
                try {
                  const res = await api.get(`/pengadaan/${r.id}/step-status?stepId=pembayaran`);
                  if (res.data.verifikasi?.id) {
                    await api.post(`/verifikasi/${res.data.verifikasi.id}/approve`);
                    showNotify("Bypass Berhasil", "Pembayaran berhasil di-bypass.", "info");
                    fetchData();
                  } else {
                    showNotify("Perhatian", "Verifikasi pembayaran belum tersedia.", "warning");
                  }
                } catch (e) {
                  showNotify("Gagal", "Gagal bypass pembayaran.", "error");
                }
              } else {
                showNotify("Perhatian", "Hanya bisa bypass tahap Pengujian atau Pembayaran dari sini.", "warning");
              }
            }}
            showCrudActions={true} emptyMessage="Tidak ada data Kontrak."
            approveLabel="Proses Kontrak"
          />
        )}

        {mode.startsWith("jamlak") && (
          <VerifTable
            columns={jamlakColumns} data={jamlakList} searchKeys={["judul", "id"]}
            onView={(r) => setShowDetail({ type: "jamlak", item: r })}
            showCrudActions={false} emptyMessage="Tidak ada data Jamlak."
          />
        )}

        {mode.startsWith("vendor") && (
          <VerifTable
            columns={vendorColumns} data={vendorList} searchKeys={["name", "code", "city"]}
            onView={(r) => setShowDetail({ type: "vendor", item: r })}
            showCrudActions={true} emptyMessage="Tidak ada data Vendor."
          />
        )}
      </div>

      {showDetail && (
        <AdminModal
          title={`Detail ${showDetail.type.toUpperCase()}`}
          onClose={() => { setShowDetail(null); setShowRevisionBox(false); }}
          hideFooter
          width={showDetail.type === "sp3" ? "max-w-4xl" : "max-w-xl"}
        >
          <div className="space-y-4">
            {showDetail.type === "sp3" ? (
              <Sp3DetailView item={showDetail.item} />
            ) : showDetail.type === "npp" ? (
              <NppDetailView item={showDetail.item} showActions={false} />
            ) : showDetail.type === "rup" ? (
              <RupDetailView item={showDetail.item} showActions={false} />
            ) : showDetail.type === "pengujian" ? (
              <PengujianDetailView item={showDetail.item} showActions={false} />
            ) : (
              <>
                {/* Header & Status chip */}
                <div className="flex items-center justify-between bg-[#252271] text-white p-4 rounded-xl">
                  <div>
                    <p className="text-white/60 text-[11px] font-semibold">Tipe Dokumen: {showDetail.type.toUpperCase()}</p>
                    <p className="text-white text-[14px] font-bold">{showDetail.item.judul || showDetail.item.nama || showDetail.item.paket || showDetail.item.title || showDetail.item.id}</p>
                  </div>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-white text-[11px] font-bold border border-white/20">
                    {showDetail.item.status || "Open"}
                  </span>
                </div>

                {/* Information Cards (Card Grid Layout) */}
                <div className="grid grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
                  {Object.entries(showDetail.item)
                    .filter(([k]) => !["verif_id", "completedSteps", "date"].includes(k))
                    .map(([k, v]) => {
                      const labelMap: Record<string, string> = {
                        id: "No. SP3 / ID",
                        noSp3: "No. SP3",
                        judul: "Nama Paket Pengadaan",
                        nama: "Nama Paket Pengadaan",
                        title: "Nama Paket Pengadaan",
                        bebanBiaya: "Beban Biaya",
                        pbj: "Jenis PBJ",
                        sumberDana: "Sumber Dana",
                        jenisKontrak: "Jenis Kontrak",
                        nilaiRkap: "Nilai RKAP",
                        rkap: "Nilai RKAP",
                        tahunRkap: "Tahun RKAP",
                        typeTax: "Tipe Pajak",
                        nilaiTax: "Nilai Pajak",
                        tax: "Nilai Pajak",
                        startDate: "Tanggal Mulai",
                        endDate: "Tanggal Selesai",
                        keterangan: "Keterangan",
                        status: "Status",
                        vpDept: "Divisi",
                        dept: "Divisi",
                        departemen: "Divisi",
                        capexOpex: "Capex / Opex",
                        rkapKat: "Kategori RKAP",
                        sp3: "No. SP3",
                        realisasi: "Realisasi",
                        vendor: "Nama Vendor",
                        coa: "Kode COA",
                        jenisBarang: "Jenis Barang",
                        kurs: "Mata Uang / Kurs",
                        prVal: "Nilai PR",
                        pdVal: "Nilai PD",
                        efisiensi: "Nilai Efisiensi",
                        assignTo: "Assign To",
                        paket: "Nama Paket Kontrak",
                        nilai: "Nilai Kontrak",
                        nominal: "Nilai Nominal",
                        performanceBond: "Performance Bond",
                        totalHari: "Total Hari",
                        hariLibur: "Hari Libur",
                        uncontrollDays: "Uncontrollable Days",
                        totalHariKerja: "Total Hari Kerja",
                        tglMulai: "Tanggal Mulai",
                        tglSelesai: "Tanggal Selesai",
                        keuangan: "Status Keuangan",
                        tglTerima: "Tanggal Terima",
                        bank: "Bank Penerbit",
                        noGaransi: "No. Garansi / Jaminan",
                        nilaiJaminan: "Nilai Jaminan",
                        code: "Kode Vendor",
                        name: "Nama Vendor",
                        street: "Alamat Vendor",
                        country: "Negara",
                        city: "Kota",
                        currency: "Mata Uang",
                        accountGroup: "Grup Akun",
                        termOfPayment: "Syarat Pembayaran",
                      };
                      const formattedLabel = labelMap[k] || k.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
                      return (
                        <div key={k} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] p-[12px]">
                          <p className="text-[#64748b] text-[11.5px] font-semibold mb-[3px]">{formattedLabel}</p>
                          <p className="text-[#252271] text-[13px] font-bold truncate">{String(v || "-")}</p>
                        </div>
                      );
                    })}
                </div>
              </>
            )}

            {/* Catatan Revisi Textarea Box */}
            {showRevisionBox && (
              <div className="bg-amber-50 border border-amber-300 rounded-[12px] p-[14px] animate-in fade-in-0">
                <p className="text-amber-900 text-[12.5px] font-bold mb-[6px] flex items-center gap-1.5">
                  <FileWarning size={14} className="text-amber-700" />
                  Tuliskan Catatan Revisi Dokumen Ini:
                </p>
                <textarea
                  value={revisionNote}
                  onChange={(e) => setRevisionNote(e.target.value)}
                  placeholder="Tuliskan catatan perbaikan atau alasan revisi di sini..."
                  className="w-full h-[75px] bg-white border border-amber-300 rounded-[8px] p-2.5 text-[12px] text-gray-800 focus:border-[#252271] outline-none mb-2"
                />
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={() => setShowRevisionBox(false)}
                    className="px-3 py-1.5 bg-white border border-gray-300 text-gray-600 rounded-lg text-[11px] font-semibold hover:bg-gray-50"
                  >
                    Batal
                  </button>
                  <button
                    disabled={["approved", "final", "closed", "sudah diverifikasi", "selesai", "disetujui"].includes(String(showDetail.item.status || "").toLowerCase())}
                    onClick={async () => {
                      if (["approved", "final", "closed", "sudah diverifikasi", "selesai", "disetujui"].includes(String(showDetail.item.status || "").toLowerCase())) return;
                      if (!revisionNote.trim()) { showNotify("Catatan Kosong", "Harap isi catatan revisi terlebih dahulu.", "warning"); return; }
                      if (showDetail.item.verif_id) {
                        try {
                          await api.post(`/verifikasi/${showDetail.item.verif_id}/revisi`, { catatan: revisionNote });
                          fetchData();
                        } catch(e) {}
                      }
                      showNotify("Revisi Terkirim", "Catatan revisi berhasil dikirim ke user!", "info");
                      setShowRevisionBox(false);
                      setRevisionNote("");
                      setShowDetail(null);
                    }}
                    className="px-3 py-1.5 bg-[#cc0000] text-white rounded-lg text-[11px] font-bold hover:bg-[#a00000]"
                  >
                    Kirim Catatan Revisi
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons Footer */}
            {["pbj", "contract"].includes(showDetail.type) ? (
              <div className="pt-3 border-t border-gray-100 flex justify-end gap-2">
                <button
                  onClick={() => {
                    const item = showDetail.item;
                    setShowDetail(null);
                    if (showDetail.type === "pbj") setShowPbjProcess(item);
                    else if (showDetail.type === "contract") setShowContractProcess(item);
                  }}
                  className="bg-[#252271] text-white px-4 py-2 rounded-xl text-[11.5px] font-bold hover:bg-[#1a1753] flex items-center gap-1.5 cursor-pointer transition-all shadow-sm"
                >
                  <Edit3 size={13} />
                  Edit Process
                </button>
              </div>
            ) : (
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setShowRevisionBox(!showRevisionBox)}
                  className="h-[30px] bg-white text-[#8f0505] border border-[#8f0505] hover:bg-red-50 px-3 rounded-[9px] text-[11px] font-bold flex items-center gap-1.5 cursor-pointer transition-all"
                >
                  <span className="size-[15px] rounded-full border border-current flex items-center justify-center"><FileWarning size={8} /></span>
                  Revisi
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={async () => {
                      if (showDetail.item.verif_id) {
                        try {
                          await api.post(`/verifikasi/${showDetail.item.verif_id}/approve`);
                          fetchData();
                        } catch(e) {}
                      }
                      showNotify("Verifikasi Berhasil", `${showDetail.type.toUpperCase()} berhasil diverifikasi & disetujui!`, "info");
                      setShowDetail(null);
                    }}
                    className={`h-[30px] px-3 rounded-[9px] text-[11px] font-bold flex items-center gap-1.5 shadow-sm transition-all ${["approved", "final", "closed", "sudah diverifikasi", "selesai", "disetujui"].includes(String(showDetail.item.status || "").toLowerCase()) ? "bg-slate-200 text-slate-500 cursor-not-allowed" : "bg-gradient-to-r from-[#17145e] to-[#2c2785] text-white hover:brightness-110 cursor-pointer"}`}
                  >
                    <CheckCircle2 size={13} />
                    {["approved", "final", "closed", "sudah diverifikasi", "selesai", "disetujui"].includes(String(showDetail.item.status || "").toLowerCase()) ? "Sudah Diverifikasi" : "Verifikasi"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </AdminModal>
      )}

      {showPbjProcess && (
        <AdminModal title={`Proses PBJ — ${showPbjProcess.nama}`} onClose={() => setShowPbjProcess(null)} hideFooter width="max-w-2xl">
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-[11.5px] text-blue-800">
              Proses PBJ saat ini: <strong>{showPbjProcess.status}</strong> — Staff: <strong>{showPbjProcess.assignTo}</strong>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {["Drafting RKS", "Calon Peserta Tender", "Aanwidjzing", "Pembukaan Penawaran", "Evaluasi Penawaran", "Undangan KKN", "Kegiatan KKN", "BA Pelelangan", "Usulan Pemenang", "Pengumuman Pemenang", "SPR & Jamlak"].map((step, idx) => (
                <div key={step} className="border border-gray-100 rounded-xl p-3 flex items-center justify-between">
                  <span className="text-[11.5px] font-semibold text-gray-700">{idx+1}. {step}</span>
                  <button className="text-[10.5px] font-semibold bg-[#252271] text-white px-2.5 py-1 rounded-lg hover:bg-[#1a1753]">Detail</button>
                </div>
              ))}
            </div>
          </div>
        </AdminModal>
      )}

      {/* Contract Process Modal */}
      {showContractProcess && (
        <AdminModal title={`Proses Kontrak — ${showContractProcess.paket}`} onClose={() => setShowContractProcess(null)} hideFooter width="max-w-2xl">
          <div className="space-y-4">
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-3 text-[11.5px] text-purple-800">
              Nilai Kontrak: <strong>{showContractProcess.nilai}</strong> — Performance Bond: <strong>{showContractProcess.performanceBond}</strong>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {["Draft Kontrak", "Performance Bond", "Verifikasi Jamlak", "Review Legal", "Approval Logistik", "Approval User", "Approval Legal", "Tanda Tangan Vendor", "Tanda Tangan KCI", "Summary Kontrak"].map((step, idx) => (
                <div key={step} className="border border-gray-100 rounded-xl p-3 flex items-center justify-between">
                  <span className="text-[11.5px] font-semibold text-gray-700">{idx+1}. {step}</span>
                  <button className="text-[10.5px] font-semibold bg-[#252271] text-white px-2.5 py-1 rounded-lg hover:bg-[#1a1753]">Proses</button>
                </div>
              ))}
            </div>
          </div>
        </AdminModal>
      )}

      {/* Centered Delete Confirmation Modal */}
      {confirmDeleteModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setConfirmDeleteModal(null)}>
          <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl p-6 text-center" onClick={e => e.stopPropagation()}>
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
              <Trash2 size={24} className="text-red-500" />
            </div>
            <h3 className="text-[16px] font-bold text-gray-800 mb-1">Hapus {confirmDeleteModal.row?.tipe?.toUpperCase() || 'Data'}?</h3>
            <p className="text-[12px] text-gray-500 mb-5">Data tahap, antrean verifikasi, dan riwayat terkait akan dihapus secara permanen.</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmDeleteModal(null)} className="flex-1 h-10 rounded-xl border border-gray-200 text-gray-600 text-[12.5px] font-medium hover:bg-gray-50">Batal</button>
              <button onClick={executeDelete} className="flex-1 h-10 rounded-xl bg-red-500 text-white text-[12.5px] font-semibold hover:bg-red-600">Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}

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
