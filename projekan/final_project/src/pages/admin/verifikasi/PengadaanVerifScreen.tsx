import { useState } from "react";
import { AdminTopBar } from "../../../components/admin/AdminTopBar";
import { VerifTable, FilterConfig } from "../../../components/admin/VerifTable";
import { AdminModal, ModalField, ModalInput, ModalSelect, ModalTextarea } from "../../../components/admin/AdminModal";
import { Plus, CheckCircle2, XCircle, FileWarning, Eye, Printer, Download, Trash2, Edit3, ChevronRight } from "lucide-react";

type ScreenProps = {
  activeSubItem: string;
};

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

const INITIAL_JAMLAK = [
  { id: "JAM-001", judul: "Pengadaan Server Data Center", tglMulai: "2024-03-01", tglSelesai: "2024-09-01", keuangan: "Ya", tglTerima: "2024-03-05", status: "aktif", bank: "Bank BNI", noGaransi: "BG-99120", nilaiJaminan: "Rp 40.000.000" },
  { id: "JAM-002", judul: "Alat Berat Crane Depo Depok", tglMulai: "2024-03-15", tglSelesai: "2024-12-15", keuangan: "Ya", tglTerima: "2024-03-18", status: "kadaluarsa", bank: "Bank Mandiri", noGaransi: "BG-88121", nilaiJaminan: "Rp 105.000.000" },
];

const INITIAL_VENDORS = [
  { code: "VND-001", name: "PT Sparepart Nusantara", street: "Jl. Industri Raya 12", country: "Indonesia", city: "Jakarta", currency: "IDR", accountGroup: "Vendor Lokal", termOfPayment: "30 Hari" },
  { code: "VND-002", name: "PT Hawa Dingin Technic", street: "Jl. Serpong Jaya 88", country: "Indonesia", city: "Tangerang", currency: "IDR", accountGroup: "Vendor Lokal", termOfPayment: "30 Hari" },
];

// ─── Component ───────────────────────────────────────────────────────────────
export function PengadaanVerifScreen({ activeSubItem }: ScreenProps) {
  const [rupList, setRupList] = useState(INITIAL_RUP);
  const [nppList, setNppList] = useState(INITIAL_NPP);
  const [sp3List, setSp3List] = useState(INITIAL_SP3);
  const [pbjList, setPbjList] = useState(INITIAL_PBJ);
  const [contractList, setContractList] = useState(INITIAL_CONTRACTS);
  const [jamlakList, setJamlakList] = useState(INITIAL_JAMLAK);
  const [vendorList, setVendorList] = useState(INITIAL_VENDORS);

  const [showAdd, setShowAdd] = useState(false);
  const [showDetail, setShowDetail] = useState<any | null>(null);
  const [showPbjProcess, setShowPbjProcess] = useState<any | null>(null);
  const [showContractProcess, setShowContractProcess] = useState<any | null>(null);

  // Forms
  const [formRup, setFormRup] = useState({
    pilihan: "Lebih 500 Juta", judul: "", capexOpex: "Capex", uraian: "", metode: "Pelelangan Umum",
    jenis: "Barang", kategori: "Investasi", tahunAnggaran: "2024", tahunRup: "2024", tipeKontrak: "Single Year",
    pbj: "Sarana", nilaiSebelumPajak: "", rkip: "Ya", tipePajak: "PPN 11%", nilaiPaket: "", targetLogistik: "",
    perkiraanWaktu: "", lokasi: "", volume: "", penyesuaian: ""
  });

  const [formNpp, setFormNpp] = useState({
    realisasi: "Timeline", timelineText: "", judul: "", metode: "Pelelangan Umum", vendor: "",
    nilaiPr: "", coa: "", typeTax: "PPN 11%", nilaiTax: "", jenisBarang: "Barang", kurs: "IDR", keterangan: "",
    prNo: "", prDate: "", prFile: "", rabNo: "", rabDate: "", rabFile: "",
    justNo: "", justDate: "", justFile: "", miNo: "", miDate: "", miFile: "", miPerihal: ""
  });

  const [formVendor, setFormVendor] = useState({ name: "", code: "", country: "Indonesia", city: "", accountGroup: "", searchTerm: "", purchaseOrg: "", termOfPayment: "30 Hari", currency: "IDR", address: "" });

  const getSubmenuInfo = () => {
    switch (activeSubItem) {
      case "rup-task": return { title: "Task Approval RUP", subtitle: "RUP - Task Approval", mode: "rup-task" };
      case "rup-timeline": return { title: "List Timeline RUP", subtitle: "RUP - List Timeline", mode: "rup-timeline" };
      case "rup-signed": return { title: "Upload Timeline Signed", subtitle: "RUP - Timeline Signed", mode: "rup-signed" };
      case "rup-penyesuaian": return { title: "Penyesuaian RUP", subtitle: "RUP - Penyesuaian RUP", mode: "rup-penyesuaian" };
      case "npp-list": return { title: "List NPP", subtitle: "NPP - List NPP", mode: "npp-list" };
      case "npp-memo": return { title: "Memo Permohonan Pengadaan", subtitle: "NPP - Memo Permohonan", mode: "npp-memo" };
      case "sp3-task": return { title: "Task Approval SP3", subtitle: "SP3 - Task Approval", mode: "sp3-task" };
      case "sp3-list": return { title: "List SP3", subtitle: "SP3 - List SP3", mode: "sp3-list" };
      case "sp3-signed": return { title: "Upload Signed SP3", subtitle: "SP3 - Upload Signed", mode: "sp3-signed" };
      case "pbj-task": return { title: "Task Approval PBJ", subtitle: "PBJ - Task Approval", mode: "pbj-task" };
      case "pbj-memo": return { title: "Memo Internal PBJ", subtitle: "PBJ - Memo Internal", mode: "pbj-memo" };
      case "contract-task": return { title: "Task Approval Contract", subtitle: "Contract - Task Approval", mode: "contract-task" };
      case "contract-list": return { title: "List Contract", subtitle: "Contract - List Contract", mode: "contract-list" };
      case "jamlak-list": return { title: "List Jaminan Pelaksanaan", subtitle: "Jamlak - List Jamlak", mode: "jamlak-list" };
      case "vendor-list": return { title: "List Vendor Management", subtitle: "Vendor - List Vendor", mode: "vendor-list" };
      default: return { title: "Rencana Umum Pengadaan (RUP)", subtitle: "Pengadaan", mode: "rup-task" };
    }
  };

  const { title, subtitle, mode } = getSubmenuInfo();

  const handleAddSubmit = () => {
    if (mode.startsWith("rup")) {
      setRupList([{ id: `RUP-00${rupList.length+1}`, judul: formRup.judul || "Paket Pengadaan Baru", bebanBiaya: "CTI - INFORMATION TECHNOLOGY", pbj: formRup.pbj, sumberDana: "RKAP 2024", jenisKontrak: formRup.jenis, nilaiRkap: formRup.nilaiSebelumPajak ? `Rp ${formRup.nilaiSebelumPajak}` : "Rp 100.000.000", tahunRkap: formRup.tahunRup, typeTax: formRup.tipePajak, nilaiTax: "Rp 11.000.000", startDate: new Date().toISOString().split("T")[0], endDate: "2024-12-31", keterangan: formRup.uraian || "Keterangan RUP baru", date: new Date().toISOString().split("T")[0], status: "Submitted", vpDept: "VP IT", capexOpex: formRup.capexOpex, rkapKat: formRup.kategori }, ...rupList]);
    } else if (mode.startsWith("npp")) {
      setNppList([{ id: `NPP-00${nppList.length+1}`, sp3: `SP3-${Math.floor(Math.random()*9000)+1000}`, judul: formNpp.judul || "NPP Baru", rkap: formNpp.nilaiPr ? `Rp ${formNpp.nilaiPr}` : "Rp 100.000.000", dept: "CTIT", tax: formNpp.nilaiTax || "Rp 11.000.000", realisasi: formNpp.realisasi, vendor: formNpp.vendor || "PT Vendor Baru", date: new Date().toISOString().split("T")[0], coa: formNpp.coa || "5211101", jenisBarang: formNpp.jenisBarang, kurs: formNpp.kurs }, ...nppList]);
    } else if (mode.startsWith("vendor")) {
      setVendorList([{ code: formVendor.code || `VND-00${vendorList.length+1}`, name: formVendor.name || "PT Vendor Baru", street: formVendor.address || "Jl. Sudirman", country: formVendor.country, city: formVendor.city || "Jakarta", currency: formVendor.currency, accountGroup: formVendor.accountGroup || "Vendor Lokal", termOfPayment: formVendor.termOfPayment }, ...vendorList]);
    }
    setShowAdd(false);
  };

  // Columns
  const rupColumns = [
    { key: "id", label: "ID RUP", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.id}</span> },
    { key: "vpDept", label: "VP Departemen", render: (r: any) => <span className="text-gray-700 text-[11px] font-medium">{r.vpDept}</span> },
    { key: "judul", label: "Nama Paket Pengadaan", render: (r: any) => <div><p className="font-semibold text-gray-800 text-[11.5px] max-w-[200px] truncate">{r.judul}</p><p className="text-gray-400 text-[10px]">{r.bebanBiaya}</p></div> },
    { key: "jenisKontrak", label: "Jenis", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.jenisKontrak}</span> },
    { key: "pbj", label: "PBJ", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.pbj}</span> },
    { key: "capexOpex", label: "Capex/Opex", render: (r: any) => <span className="text-gray-600 text-[11px] font-mono">{r.capexOpex}</span> },
    { key: "nilaiRkap", label: "RKAP", render: (r: any) => <span className="font-semibold text-gray-800 text-[11.5px]">{r.nilaiRkap}</span> },
    { key: "tahunRkap", label: "Tahun RUP", render: (r: any) => <span className="text-[11px] text-gray-500">{r.tahunRkap}</span> },
    { key: "status", label: "Status", render: (r: any) => <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${r.status === "Approved" ? "bg-green-50 text-green-600 border border-green-200" : "bg-amber-50 text-amber-600 border border-amber-200"}`}>{r.status.toUpperCase()}</span> },
  ];

  const nppColumns = [
    { key: "id", label: "ID NPP", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.id}</span> },
    { key: "sp3", label: "No. SP3", render: (r: any) => <span className="font-mono text-gray-500 text-[11px]">{r.sp3}</span> },
    { key: "judul", label: "Procurement Title", render: (r: any) => <div><p className="font-semibold text-gray-800 text-[11.5px] max-w-[220px] truncate">{r.judul}</p><p className="text-gray-400 text-[10px]">{r.vendor}</p></div> },
    { key: "rkap", label: "RKAP Value", render: (r: any) => <span className="font-semibold text-gray-800 text-[11.5px]">{r.rkap}</span> },
    { key: "dept", label: "Dept", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.dept}</span> },
    { key: "tax", label: "Tax Value", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.tax}</span> },
    { key: "realisasi", label: "Realisasi", render: (r: any) => <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-600 border border-blue-200">{r.realisasi}</span> },
  ];

  const sp3Columns = [
    { key: "id", label: "No. SP3", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.id}</span> },
    { key: "title", label: "Procurement Title", render: (r: any) => <div><p className="font-semibold text-gray-800 text-[11.5px] max-w-[220px] truncate">{r.title}</p><p className="text-gray-400 text-[10px]">{r.vendor}</p></div> },
    { key: "rkap", label: "RKAP Value", render: (r: any) => <span className="font-semibold text-gray-800 text-[11.5px]">{r.rkap}</span> },
    { key: "dept", label: "Department", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.dept}</span> },
    { key: "tax", label: "Tax Value", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.tax}</span> },
    { key: "status", label: "Status", render: (r: any) => <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-purple-50 text-purple-600 border border-purple-200">{r.status.toUpperCase()}</span> },
  ];

  const pbjColumns = [
    { key: "id", label: "No. SP3", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.id}</span> },
    { key: "nama", label: "Nama Paket Pengadaan", render: (r: any) => <p className="font-semibold text-gray-800 text-[11.5px] max-w-[220px] truncate">{r.nama}</p> },
    { key: "prVal", label: "Nilai PR (NPD)", render: (r: any) => <span className="font-semibold text-gray-800 text-[11.5px]">{r.prVal}</span> },
    { key: "pdVal", label: "Nilai PD", render: (r: any) => <span className="text-gray-600 text-[11.5px]">{r.pdVal}</span> },
    { key: "efisiensi", label: "Nilai Efisiensi", render: (r: any) => <span className="text-green-600 font-semibold text-[11.5px]">{r.efisiensi}</span> },
    { key: "assignTo", label: "Assign To", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.assignTo}</span> },
    { key: "status", label: "Status", render: (r: any) => <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-indigo-50 text-indigo-600 border border-indigo-200">{r.status}</span> },
  ];

  const contractColumns = [
    { key: "id", label: "No. SP3", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.id}</span> },
    { key: "paket", label: "Nama Paket Pengadaan", render: (r: any) => <p className="font-semibold text-gray-800 text-[11.5px] max-w-[220px] truncate">{r.paket}</p> },
    { key: "nilai", label: "Nilai Kontrak", render: (r: any) => <span className="font-semibold text-gray-800 text-[11.5px]">{r.nilai}</span> },
    { key: "dept", label: "Departemen", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.dept}</span> },
    { key: "pbj", label: "PBJ", render: (r: any) => <span className="text-gray-600 text-[11px]">{r.pbj}</span> },
    { key: "performanceBond", label: "Performance Bond", render: (r: any) => <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-50 text-green-600 border border-green-200">{r.performanceBond}</span> },
    { key: "status", label: "Status", render: (r: any) => <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-blue-50 text-blue-600 border border-blue-200">{r.status}</span> },
  ];

  const jamlakColumns = [
    { key: "id", label: "No Jamlak", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.id}</span> },
    { key: "judul", label: "Judul Pengadaan", render: (r: any) => <p className="font-semibold text-gray-800 text-[11.5px] max-w-[200px] truncate">{r.judul}</p> },
    { key: "berlaku", label: "Masa Berlaku", render: (r: any) => <span className="text-[11px] text-gray-600">{r.tglMulai} s/d {r.tglSelesai}</span> },
    { key: "keuangan", label: "Diterima Keuangan", render: (r: any) => <span className="text-[11px] font-semibold text-gray-700">{r.keuangan} ({r.tglTerima})</span> },
    { key: "status", label: "Status", render: (r: any) => <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${r.status === "aktif" ? "bg-green-50 text-green-600 border border-green-200" : "bg-red-50 text-red-500 border border-red-200"}`}>{r.status.toUpperCase()}</span> },
  ];

  const vendorColumns = [
    { key: "code", label: "Vendor Code", render: (r: any) => <span className="font-mono font-bold text-[#252271] text-[11.5px]">{r.code}</span> },
    { key: "name", label: "Name Of Vendor", render: (r: any) => <div><p className="font-semibold text-gray-800 text-[11.5px]">{r.name}</p><p className="text-gray-400 text-[10px]">{r.street}</p></div> },
    { key: "city", label: "City & Country", render: (r: any) => <span className="text-[11px] text-gray-600">{r.city}, {r.country}</span> },
    { key: "currency", label: "Currency", render: (r: any) => <span className="font-mono text-[11px] text-gray-700">{r.currency}</span> },
  ];

  return (
    <div className="space-y-4">
      <AdminTopBar title={title} subtitle={subtitle} />

      {/* Render main content based on mode */}
      <div className="relative">
        {(mode.startsWith("rup") || mode.startsWith("npp") || mode.startsWith("vendor")) && (
          <div className="absolute right-5 top-4 z-10">
            <button onClick={() => setShowAdd(true)} className="bg-[#252271] hover:bg-[#1a1753] text-white px-3 py-1.5 rounded-lg text-[11.5px] font-semibold flex items-center gap-1 shadow-sm transition-colors">
              <Plus size={14} />
              {mode.startsWith("rup") ? "Tambah RUP" : mode.startsWith("npp") ? "Create NPP" : "Add Vendor"}
            </button>
          </div>
        )}

        {mode.startsWith("rup") && (
          <VerifTable
            columns={rupColumns} data={rupList} searchKeys={["judul", "bebanBiaya", "vpDept"]}
            onView={(r) => setShowDetail({ type: "rup", item: r })}
            onApprove={(r) => setRupList(prev => prev.map(item => item.id === r.id ? { ...item, status: "Approved" } : item))}
            onReject={(r) => setRupList(prev => prev.map(item => item.id === r.id ? { ...item, status: "Rejected" } : item))}
            showVerifActions={true} showCrudActions={true} emptyMessage="Tidak ada data RUP."
          />
        )}

        {mode.startsWith("npp") && (
          <VerifTable
            columns={nppColumns} data={nppList} searchKeys={["judul", "sp3", "vendor"]}
            onView={(r) => setShowDetail({ type: "npp", item: r })}
            showCrudActions={true} emptyMessage="Tidak ada data NPP."
          />
        )}

        {mode.startsWith("sp3") && (
          <VerifTable
            columns={sp3Columns} data={sp3List} searchKeys={["title", "id", "vendor"]}
            onView={(r) => setShowDetail({ type: "sp3", item: r })}
            showCrudActions={true} emptyMessage="Tidak ada data SP3."
          />
        )}

        {mode.startsWith("pbj") && (
          <VerifTable
            columns={pbjColumns} data={pbjList} searchKeys={["nama", "id", "assignTo"]}
            onView={(r) => setShowPbjProcess(r)}
            showCrudActions={true} emptyMessage="Tidak ada data PBJ."
            approveLabel="Proses PBJ"
          />
        )}

        {mode.startsWith("contract") && (
          <VerifTable
            columns={contractColumns} data={contractList} searchKeys={["paket", "id", "dept"]}
            onView={(r) => setShowContractProcess(r)}
            showCrudActions={true} emptyMessage="Tidak ada data Kontrak."
            approveLabel="Proses Kontrak"
          />
        )}

        {mode.startsWith("jamlak") && (
          <VerifTable
            columns={jamlakColumns} data={jamlakList} searchKeys={["judul", "id"]}
            onView={(r) => setShowDetail({ type: "jamlak", item: r })}
            showCrudActions={true} emptyMessage="Tidak ada data Jamlak."
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

      {/* Add Modals */}
      {showAdd && mode.startsWith("rup") && (
        <AdminModal title="Tambah RUP (Create Timeline)" onClose={() => setShowAdd(false)} onSubmit={handleAddSubmit} submitLabel="Submit" width="max-w-2xl">
          <div className="space-y-3">
            <ModalField label="Pilihan RUP" required>
              <div className="flex gap-4 pt-1">
                {["Lebih 500 Juta", "Kurang 500 Juta"].map(opt => (
                  <label key={opt} className="flex items-center gap-1.5 text-[11.5px] cursor-pointer">
                    <input type="radio" name="pilihanRup" checked={formRup.pilihan === opt} onChange={() => setFormRup(p => ({ ...p, pilihan: opt }))} className="accent-[#252271]" />
                    {opt}
                  </label>
                ))}
              </div>
            </ModalField>
            <ModalField label="Nama Paket Pengadaan Yang Akan Dilaksanakan" required>
              <ModalInput value={formRup.judul} onChange={v => setFormRup(p => ({ ...p, judul: v }))} placeholder="Nama paket pengadaan..." />
            </ModalField>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Opex/Capex" required>
                <ModalSelect value={formRup.capexOpex} onChange={v => setFormRup(p => ({ ...p, capexOpex: v }))} options={[{ value: "Capex", label: "Capex" }, { value: "Opex", label: "Opex" }]} />
              </ModalField>
              <ModalField label="Rencana Metode Pengadaan" required>
                <ModalSelect value={formRup.metode} onChange={v => setFormRup(p => ({ ...p, metode: v }))} options={[{ value: "Pelelangan Umum", label: "Pelelangan Umum" }, { value: "Pemilihan Langsung", label: "Pemilihan Langsung" }, { value: "Penunjukan Langsung", label: "Penunjukan Langsung" }, { value: "Pengadaan Langsung", label: "Pengadaan Langsung" }]} />
              </ModalField>
            </div>
            <ModalField label="Uraian Singkat Pengadaan">
              <ModalTextarea value={formRup.uraian} onChange={v => setFormRup(p => ({ ...p, uraian: v }))} placeholder="Uraian pekerjaan..." />
            </ModalField>
            <div className="grid grid-cols-3 gap-3">
              <ModalField label="Jenis Pengadaan">
                <ModalSelect value={formRup.jenis} onChange={v => setFormRup(p => ({ ...p, jenis: v }))} options={[{ value: "Barang", label: "Barang" }, { value: "Jasa", label: "Jasa" }, { value: "Konsultansi", label: "Konsultansi" }]} />
              </ModalField>
              <ModalField label="Kategori Anggaran">
                <ModalSelect value={formRup.kategori} onChange={v => setFormRup(p => ({ ...p, kategori: v }))} options={[{ value: "Investasi", label: "Investasi" }, { value: "Eksploitasi", label: "Eksploitasi" }, { value: "Pemeliharaan", label: "Pemeliharaan" }]} />
              </ModalField>
              <ModalField label="PBJ" required>
                <ModalSelect value={formRup.pbj} onChange={v => setFormRup(p => ({ ...p, pbj: v }))} options={[{ value: "Sarana", label: "Sarana" }, { value: "Non-Sarana", label: "Non-Sarana" }]} />
              </ModalField>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Tahun Anggaran" required><ModalInput value={formRup.tahunAnggaran} onChange={v => setFormRup(p => ({ ...p, tahunAnggaran: v }))} /></ModalField>
              <ModalField label="Tahun RUP" required><ModalInput value={formRup.tahunRup} onChange={v => setFormRup(p => ({ ...p, tahunRup: v }))} /></ModalField>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Nilai Paket Pengadaan (Sebelum Pajak)" required><ModalInput type="number" value={formRup.nilaiSebelumPajak} onChange={v => setFormRup(p => ({ ...p, nilaiSebelumPajak: v }))} placeholder="800000000" /></ModalField>
              <ModalField label="Tipe Pajak" required><ModalSelect value={formRup.tipePajak} onChange={v => setFormRup(p => ({ ...p, tipePajak: v }))} options={[{ value: "PPN 11%", label: "PPN 11%" }, { value: "PPN 12%", label: "PPN 12%" }, { value: "PPh 23", label: "PPh 23" }]} /></ModalField>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Target Masuk ke Logistik" required><ModalInput type="date" value={formRup.targetLogistik} onChange={v => setFormRup(p => ({ ...p, targetLogistik: v }))} /></ModalField>
              <ModalField label="Perkiraan Waktu Pemanfaatan" required><ModalInput type="date" value={formRup.perkiraanWaktu} onChange={v => setFormRup(p => ({ ...p, perkiraanWaktu: v }))} /></ModalField>
            </div>
            <ModalField label="Lokasi Pekerjaan / Penyerahan Barang" required><ModalInput value={formRup.lokasi} onChange={v => setFormRup(p => ({ ...p, lokasi: v }))} placeholder="Depo KRL Depok / Kantor Pusat KCI" /></ModalField>
          </div>
        </AdminModal>
      )}

      {showAdd && mode.startsWith("npp") && (
        <AdminModal title="Create NPP" onClose={() => setShowAdd(false)} onSubmit={handleAddSubmit} submitLabel="Submit" width="max-w-2xl">
          <div className="space-y-3">
            <ModalField label="Realisasi" required>
              <div className="flex gap-4 pt-1">
                {["Timeline", "Diluar Timeline"].map(opt => (
                  <label key={opt} className="flex items-center gap-1.5 text-[11.5px] cursor-pointer">
                    <input type="radio" name="realisasiNpp" checked={formNpp.realisasi === opt} onChange={() => setFormNpp(p => ({ ...p, realisasi: opt }))} className="accent-[#252271]" />
                    {opt}
                  </label>
                ))}
              </div>
            </ModalField>
            <ModalField label="Judul Pengadaan" required><ModalInput value={formNpp.judul} onChange={v => setFormNpp(p => ({ ...p, judul: v }))} placeholder="Judul pengadaan..." /></ModalField>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Metode" required><ModalSelect value={formNpp.metode} onChange={v => setFormNpp(p => ({ ...p, metode: v }))} options={[{ value: "Pelelangan Umum", label: "Pelelangan Umum" }, { value: "Penunjukan Langsung", label: "Penunjukan Langsung" }]} /></ModalField>
              <ModalField label="Vendor Name" required><ModalInput value={formNpp.vendor} onChange={v => setFormNpp(p => ({ ...p, vendor: v }))} placeholder="PT Vendor..." /></ModalField>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Nilai PR (Rp)" required><ModalInput type="number" value={formNpp.nilaiPr} onChange={v => setFormNpp(p => ({ ...p, nilaiPr: v }))} placeholder="150000000" /></ModalField>
              <ModalField label="COA" required><ModalInput value={formNpp.coa} onChange={v => setFormNpp(p => ({ ...p, coa: v }))} placeholder="5211101" /></ModalField>
            </div>
            <hr className="border-gray-100" />
            <p className="text-[11px] font-bold text-gray-700 uppercase">Lampiran Dokumen</p>
            <div className="grid grid-cols-3 gap-2">
              <ModalField label="Dokumen PR (No / Tanggal / File)"><ModalInput value={formNpp.prNo} onChange={v => setFormNpp(p => ({ ...p, prNo: v }))} placeholder="PR-001" /></ModalField>
              <ModalField label="Dokumen RAB (No / Tanggal / File)"><ModalInput value={formNpp.rabNo} onChange={v => setFormNpp(p => ({ ...p, rabNo: v }))} placeholder="RAB-001" /></ModalField>
              <ModalField label="Dokumen KAK / MI"><ModalInput value={formNpp.kakNo} onChange={v => setFormNpp(p => ({ ...p, kakNo: v }))} placeholder="KAK-001" /></ModalField>
            </div>
          </div>
        </AdminModal>
      )}

      {/* Detail View Modal */}
      {showDetail && (
        <AdminModal title={`Detail ${showDetail.type.toUpperCase()}`} onClose={() => setShowDetail(null)} hideFooter width="max-w-lg">
          <div className="space-y-2">
            {Object.entries(showDetail.item).map(([k, v]) => (
              <div key={k} className="flex flex-col border-b border-gray-50 pb-1">
                <span className="text-gray-400 text-[10px] font-mono uppercase">{k}</span>
                <span className="font-semibold text-gray-700 text-[12px]">{String(v)}</span>
              </div>
            ))}
          </div>
        </AdminModal>
      )}

      {/* PBJ Process Modal */}
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
    </div>
  );
}
