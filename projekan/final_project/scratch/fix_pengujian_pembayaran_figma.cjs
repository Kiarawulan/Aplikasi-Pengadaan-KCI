const fs = require('fs');
let code = fs.readFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', 'utf8');

// Replace DetailPengujianPage and PengujianPage with exact Figma layout
const newPengujianFigmaCode = `
// ─── Pengujian Page (Matched to Figma Spec) ───────────────────────────────────
type PengujianKontrakRow = {
  idNpp: string;
  idRup: string;
  noCont: string;
  divisi: string;
  opexCapex: string;
  kategori: string;
  tahun: string;
  sp3Final: string;
  status: string;
  statusHps: string;
  namaPaket: string;
  nilaiKontrak: string;
  vendor: string;
};

type PengujianRequestRow = {
  noRequest: string;
  namaPengujian: string;
  tanggalRequest: string;
  pemohon: string;
  kategori: string;
  status: string;
};

const PENGUJIAN_KONTRAK_500_ROWS: PengujianKontrakRow[] = [
  { idNpp: "NPP-2024-008", idRup: "RUP-2024-008", noCont: "1", divisi: "CTIT", opexCapex: "OPEX", kategori: "Tools & Testing", tahun: "2024", sp3Final: "SP3-2024-008", status: "Status", statusHps: "Final", namaPaket: "Pengadaan Tools Lab CTIT 2024", nilaiKontrak: "Rp 180.000.000", vendor: "PT Labtek Utama" },
  { idNpp: "NPP-2024-012", idRup: "RUP-2024-012", noCont: "2", divisi: "CTIT", opexCapex: "OPEX", kategori: "Network Maint", tahun: "2024", sp3Final: "SP3-2024-012", status: "Status", statusHps: "Final", namaPaket: "Maintenance Network Router Depot", nilaiKontrak: "Rp 350.000.000", vendor: "CV Net Jaya" },
  { idNpp: "NPP-2024-015", idRup: "RUP-2024-015", noCont: "3", divisi: "CTIT", opexCapex: "OPEX", kategori: "Security Cert", tahun: "2024", sp3Final: "SP3-2024-015", status: "Status", statusHps: "Final", namaPaket: "Renewal SSL & Security Certs", nilaiKontrak: "Rp 95.000.000", vendor: "PT Tech Solution" },
];

const PENGUJIAN_KONTRAK_500PLUS_ROWS: PengujianKontrakRow[] = [
  { idNpp: "NPP-2024-001", idRup: "RUP-2024-001", noCont: "1", divisi: "CTIT", opexCapex: "CAPEX", kategori: "Server Infra", tahun: "2024", sp3Final: "SP3-2024-001", status: "Status", statusHps: "Final", namaPaket: "Pengadaan Server CTIT 2024", nilaiKontrak: "Rp 500.000.000", vendor: "PT Maju Bersama" },
  { idNpp: "NPP-2024-005", idRup: "RUP-2024-005", noCont: "2", divisi: "Fasilitas", opexCapex: "CAPEX", kategori: "Substation", tahun: "2024", sp3Final: "SP3-2024-005", status: "Status", statusHps: "Final", namaPaket: "Modernisasi Substation & Power KCI", nilaiKontrak: "Rp 1.250.000.000", vendor: "PT Powerindo Utama" },
  { idNpp: "NPP-2024-009", idRup: "RUP-2024-009", noCont: "3", divisi: "Telematika", opexCapex: "CAPEX", kategori: "Fiber Optic", tahun: "2024", sp3Final: "SP3-2024-009", status: "Status", statusHps: "Final", namaPaket: "Upgrade Core Fiber Optic Network", nilaiKontrak: "Rp 850.000.000", vendor: "PT Telkom Infratel" },
];

const PENGUJIAN_REQUEST_ROWS: PengujianRequestRow[] = [
  { noRequest: "REQ-2024-001", namaPengujian: "Uji Fungsi Server High Availability", tanggalRequest: "01-03-2024", pemohon: "Departemen CTIT", kategori: "Fungsi & Stress Test", status: "Pending" },
  { noRequest: "REQ-2024-002", namaPengujian: "Uji Beban & Bandwidth Fiber Optic", tanggalRequest: "10-03-2024", pemohon: "Departemen Telematika", kategori: "Performance Test", status: "Selesai" },
  { noRequest: "REQ-2024-003", namaPengujian: "Uji Ketahanan Baterai UPS Central", tanggalRequest: "15-03-2024", pemohon: "Departemen Fasilitas Ops", kategori: "Electrical Test", status: "In Progress" },
];

function DetailPengujianPage({ item, isKontrak, onBack }: { item: PengujianKontrakRow | PengujianRequestRow; isKontrak: boolean; onBack: () => void }) {
  const [showApprove, setShowApprove] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const [statusText, setStatusText] = useState(item.status);

  const titleName = isKontrak ? (item as PengujianKontrakRow).namaPaket : (item as PengujianRequestRow).namaPengujian;
  const docNo = isKontrak ? (item as PengujianKontrakRow).idNpp : (item as PengujianRequestRow).noRequest;
  const vendorOrDept = isKontrak ? (item as PengujianKontrakRow).vendor : (item as PengujianRequestRow).pemohon;
  const nilaiOrKat = isKontrak ? (item as PengujianKontrakRow).nilaiKontrak : (item as PengujianRequestRow).kategori;

  const berkasRows = [
    { status: "SUDAH UPLOAD", tanggal: "14-FEB-2026 10:30:00", keterangan: "DOKUMEN SPESIFIKASI TEKNIS & HASIL UJI AVAL", mandatory: "*" },
    { status: "SUDAH UPLOAD", tanggal: "14-FEB-2026 10:30:00", keterangan: "BERITA ACARA UJI TERIMA (BAUT) DRAFT", mandatory: "*" },
    { status: "SUDAH UPLOAD", tanggal: "15-FEB-2026 09:00:00", keterangan: "LAPORAN QUALITY CONTROL (QC/QA) FACTORY ACCEPTANCE TEST", mandatory: "*" },
    { status: "BELUM UPLOAD", tanggal: "-", keterangan: "SERTIFIKAT KELAYAKAN TEKNIS DIREKTUR", mandatory: "**" },
    { status: "BELUM UPLOAD", tanggal: "-", keterangan: "DOKUMEN MANUAL OPERASIONAL & MAINTENANCE (KAK)", mandatory: "***" },
  ];

  const trackingRows = [
    { tanggal: "14-FEB-2026 10:30:00", keterangan: "DOKUMEN PENGUJIAN DI-UPLOAD OLEH VENDOR / TIM TEKNIS" },
    { tanggal: "15-FEB-2026 09:15:00", keterangan: "TIM QUALITY ASSURANCE (QA) MELAKUKAN VERIFIKASI PARAMETER UJI" },
    { tanggal: "16-FEB-2026 14:00:00", keterangan: "KEPALA DEPARTEMEN TEKNIS MENYETUJUI HASIL PENGUJIAN" },
  ];

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc]">
      <div className="px-[44px] py-[20px]">
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-[8px] mb-[16px]">
          <button onClick={onBack} className="flex items-center justify-center size-[28px] rounded-full hover:bg-[#e0e7ff] transition-colors active:scale-95">
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16"><path d="M10 12L6 8L10 4" stroke="#6a7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
          </button>
          <div className="flex items-center justify-between flex-1">
            <p className="text-[#99a1af] text-[16px] font-normal">
              <span>Pengujian &gt; Detail &gt; </span>
              <span className="font-bold text-[#252271]">{docNo}</span>
            </p>
            <span className="inline-flex items-center bg-[#f0f9ff] border border-[#0069a8] text-[#0069a8] text-[10.5px] font-medium px-[10px] py-[3px] rounded-full">
              Status: {statusText}
            </span>
          </div>
        </div>

        {/* Detail Information Card (2-column key-value layout exactly like Figma) */}
        <div className="bg-white rounded-[15px] border border-[#e5e7eb] overflow-hidden mb-[20px]">
          {[
            { label: "Nomor Dokumen", value: \`: \${docNo}\` },
            { label: "Nama Paket / Pengujian", value: \`: \${titleName}\` },
            { label: "Unit / Vendor Pemohon", value: \`: \${vendorOrDept}\` },
            { label: "Nilai / Kategori Uji", value: \`: \${nilaiOrKat}\` },
            { label: "Tanggal Pelaksanaan", value: ": 14-FEB-2026 10:30:00" },
          ].map(({ label, value }) => (
            <div key={label} className="grid grid-cols-[200px_1fr] px-[20px] py-[10px] border-b border-[#f3f4f6]">
              <span className="text-[#6a7282] text-[13.5px] font-medium">{label}</span>
              <span className="text-[#1e2939] text-[13.5px] font-semibold">{value}</span>
            </div>
          ))}
          <div className="grid grid-cols-[200px_1fr] px-[20px] py-[10px]">
            <span className="text-[#6a7282] text-[13.5px] font-medium pt-[2px]">Detail Permohonan Uji</span>
            <div>
              <span className="text-[#99a1af] text-[12px]">:</span>
              <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[6px] p-[12px] text-[12.5px] text-[#334155] min-h-[90px] mt-[4px]">
                Pengujian teknis lapangan dan stress-test infrastruktur sesuai spesifikasi RKS &amp; standar mutu ISO KCI.
              </div>
            </div>
          </div>
        </div>

        {/* Berkas Pendukung Table Card */}
        <div className="bg-white rounded-[15px] border border-[#e5e7eb] overflow-hidden mb-[20px]">
          <div className="bg-[#252271] px-[20px] py-[12px]">
            <p className="text-white text-[14px] font-semibold">Berkas Pendukung</p>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#f3f4f6] text-[#6a7282] text-[12px] font-semibold tracking-[0.3px]">
                <th className="text-left px-[20px] py-[10px] w-[180px]">STATUS</th>
                <th className="text-left px-[20px] py-[10px] w-[220px]">TANGGAL</th>
                <th className="text-left px-[20px] py-[10px]">KETERANGAN</th>
                <th className="text-left px-[20px] py-[10px] w-[80px]">BERKAS</th>
              </tr>
            </thead>
            <tbody>
              {berkasRows.map((br, i) => (
                <tr key={i} className="border-b border-[#f3f4f6] last:border-0 hover:bg-[#fafafa]">
                  <td className="px-[20px] py-[10px]">
                    <span className="inline-flex items-center border border-[#d1d5dc] rounded-[4px] px-[9px] py-[3px] text-[10px] font-semibold text-[#6a7282] tracking-[0.25px] bg-white whitespace-nowrap">
                      {br.status}
                    </span>
                  </td>
                  <td className="px-[20px] py-[10px] text-[#6a7282] text-[12px]">{br.tanggal}</td>
                  <td className="px-[20px] py-[10px] text-[#364153] text-[13.5px]">
                    {br.keterangan} <span className="text-[#cc0000] ml-[2px]">{br.mandatory}</span>
                  </td>
                  <td className="px-[20px] py-[10px]">
                    <button className="bg-[#252271] rounded-[4px] size-[25px] flex items-center justify-center hover:brightness-125 transition-all active:scale-95">
                      <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                        <path d="M2.167 9.75H10.833M6.5 1.625V8.125" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08" />
                        <path d="M3.792 6.5L6.5 9.208L9.208 6.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-[20px] py-[12px] border-t border-[#f3f4f6] flex flex-col gap-[2px]">
            <p className="text-[#99a1af] text-[12px]">* Mandatory</p>
            <p className="text-[#99a1af] text-[12px]">** Mandatory, di upload setelah mendapat tanda tangan direktur terkait</p>
            <p className="text-[#99a1af] text-[12px]">*** Tidak Mandatory, dokumen pendukung berupa KAK dll</p>
          </div>
        </div>

        {/* Tracking Card */}
        <div className="bg-white rounded-[15px] border border-[#e5e7eb] overflow-hidden mb-[20px]">
          <div className="bg-[#252271] px-[20px] py-[12px]">
            <p className="text-white text-[14px] font-semibold">Tracking Status</p>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#f3f4f6] text-[#6a7282] text-[12px] font-semibold tracking-[0.3px]">
                <th className="text-left px-[20px] py-[10px] w-[300px]">TANGGAL</th>
                <th className="text-left px-[20px] py-[10px]">KETERANGAN</th>
              </tr>
            </thead>
            <tbody>
              {trackingRows.map((tr, i) => (
                <tr key={i} className="border-b border-[#f3f4f6] last:border-0 hover:bg-[#fafafa]">
                  <td className="px-[20px] py-[10px] text-[#6a7282] text-[12px]">{tr.tanggal}</td>
                  <td className="px-[20px] py-[10px] text-[#364153] text-[13.5px] font-medium">{tr.keterangan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Actions */}
        <div className="flex gap-[7px]">
          <button onClick={() => setShowApprove(true)} className="h-[36px] px-[18px] bg-[#252271] text-white text-[13px] font-medium rounded-[6px] hover:brightness-110 active:scale-95 transition-all duration-150">Approve</button>
          <button onClick={() => setShowReject(true)} className="h-[36px] px-[18px] border border-[#d1d5dc] text-[#4a5565] text-[13px] font-medium rounded-[6px] hover:bg-[#f1f5f9] active:scale-95 transition-all duration-150">Reject</button>
          <button onClick={onBack} className="h-[36px] px-[18px] border border-[#d1d5dc] text-[#4a5565] text-[13px] font-medium rounded-[6px] hover:bg-[#f1f5f9] transition-colors">Kembali</button>
        </div>
      </div>

      {/* Approve Modal */}
      {showApprove && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[15px] w-[420px] overflow-hidden shadow-2xl">
            <div className="bg-[#252271] px-[24px] py-[12px]"><p className="text-white text-[14px] font-bold">Approve Pengujian</p></div>
            <div className="p-[28px] flex flex-col gap-[16px]">
              <p className="text-[#0f172a] text-[13.5px] text-center">Apakah Anda yakin hasil pengujian telah sesuai standar dan menyetujui dokumen ini?</p>
              <div className="flex gap-[12px] justify-center">
                <button onClick={() => setShowApprove(false)} className="px-[20px] py-[8px] rounded-[8px] border border-[#d1d5dc] text-[#64748b] text-[13px]">Batal</button>
                <button onClick={() => { setStatusText("Approved / Lulus"); setShowApprove(false); }} className="px-[20px] py-[8px] rounded-[8px] bg-[#252271] text-white text-[13px] font-semibold">Approve</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showReject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[15px] w-[450px] overflow-hidden shadow-2xl">
            <div className="bg-[#cc0000] px-[24px] py-[12px]"><p className="text-white text-[14px] font-bold">Reject Pengujian</p></div>
            <div className="p-[28px] flex flex-col gap-[16px]">
              <p className="text-[#0f172a] text-[13px]">Masukkan alasan penolakan pengujian:</p>
              <textarea className="w-full h-[90px] border border-[#d1d5dc] rounded-[8px] p-[10px] text-[13px] outline-none focus:border-[#cc0000]" placeholder="Catatan penolakan..." />
              <div className="flex gap-[12px] justify-center">
                <button onClick={() => setShowReject(false)} className="px-[20px] py-[8px] rounded-[8px] border border-[#d1d5dc] text-[#64748b] text-[13px]">Batal</button>
                <button onClick={() => { setStatusText("Rejected"); setShowReject(false); }} className="px-[20px] py-[8px] rounded-[8px] bg-[#cc0000] text-white text-[13px] font-semibold">Reject</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PengujianPage({ subDoc }: { subDoc: PengujianDoc }) {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedItem, setSelectedItem] = useState<PengujianKontrakRow | PengujianRequestRow | null>(null);

  const isKontrak = subDoc.startsWith("kontrak-");
  const is500Plus = subDoc === "kontrak-list-500plus";

  const breadcrumbMain = isKontrak ? "Kontrak" : "Request Pengujian";
  const breadcrumbSub = subDoc === "kontrak-list-500" ? "List Kontrak <500jt" : subDoc === "kontrak-list-500plus" ? "List Kontrak >500jt" : subDoc === "request-list-request" ? "List Request Pengujian" : "List Pengujian";

  const kontrakRows = is500Plus ? PENGUJIAN_KONTRAK_500PLUS_ROWS : PENGUJIAN_KONTRAK_500_ROWS;

  if (view === "detail" && selectedItem) {
    return <DetailPengujianPage item={selectedItem} isKontrak={isKontrak} onBack={() => setView("list")} />;
  }

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-white">
      <div className="px-[44px] py-[20px]">
        <h1 className="text-[#252271] text-[36px] font-extrabold leading-normal mb-[0px]">Verification</h1>
        <p className="text-[#99a1af] text-[16px] font-normal mb-[20px]">
          <span>Pengujian &gt; {breadcrumbMain} &gt; </span>
          <span className="font-semibold text-[#1e2939]">{breadcrumbSub}</span>
        </p>

        {/* Filter Section */}
        <div className="bg-[#f5f7fd] border border-[#e5e7eb] rounded-[15px] p-[20px] mb-[20px]">
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] mb-[16px]">
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Start Date</label>
              <input type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">End Date</label>
              <input type="date" className="w-full h-[37px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Unit</label>
              <select className="w-full h-[36px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors">
                <option value="">Semua Unit</option><option>CTIT</option><option>Logistik</option>
              </select>
            </div>
            <div>
              <label className="block text-[#364153] text-[12px] font-semibold mb-[4px]">Status</label>
              <select className="w-full h-[36px] rounded-[25px] border border-[#aebdd8] bg-white px-[14px] text-[13px] outline-none focus:border-[#252271] transition-colors">
                <option value="">Semua Status</option><option>Status</option><option>Final</option>
              </select>
            </div>
          </div>
          <div className="flex gap-[5px]">
            <button className="bg-[#252271] text-white text-[14px] font-medium h-[36px] px-[20px] rounded-[15px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all duration-150">
              <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><circle cx="6.875" cy="6.875" r="4.875" stroke="white" strokeWidth="1.17" /><path d="M12.25 12.25L9.74 9.74" stroke="white" strokeLinecap="round" strokeWidth="1.17" /></svg>
              Cari
            </button>
            <button className="h-[35px] w-[34px] rounded-[15px] border border-[#c00] flex items-center justify-center hover:bg-[#fef2f2] active:scale-95 transition-all duration-150">
              <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                <path d={group14Svg.p3bd12900} stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                <path d="M1.625 1.625V4.33333H4.33333" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
              </svg>
            </button>
          </div>
        </div>

        {/* Table matching exact Figma columns for Kontrak */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] overflow-hidden">
          <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-[#f3f4f6]">
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Show</span>
              <select className="h-[24px] w-[55px] rounded-[4px] border border-[#d1d5dc] text-[13px] px-[4px] outline-none"><option>10</option><option>25</option></select>
              <span>entries</span>
            </div>
            <div className="flex items-center gap-[8px] text-[#4a5565] text-[14px]">
              <span>Search:</span>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Type to filter..." className="h-[30px] w-[176px] rounded-[4px] border border-[#d1d5dc] px-[12px] text-[13px] outline-none focus:border-[#252271] transition-colors" />
            </div>
          </div>
          <div className="overflow-x-auto">
            {isKontrak ? (
              <table className="w-full min-w-[1100px]">
                <thead>
                  <tr className="bg-[#252271] text-white text-[10.5px] font-medium tracking-[0.3px]">
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">ID NPP</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">ID RUP</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">No.</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Divisi</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">OPEX/<br />CAPEX</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Kategori</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">Tahun</th>
                    <th className="text-left px-[14px] py-[10px] whitespace-nowrap">SP3 Final</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Status</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Status HPS</th>
                    <th className="text-center px-[14px] py-[10px] whitespace-nowrap">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {kontrakRows.map((row, i) => (
                    <tr key={i} className="border-b border-[#f3f4f6] hover:bg-[#fafafa] transition-colors">
                      <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px] whitespace-nowrap">{row.idNpp}</td>
                      <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px] whitespace-nowrap">{row.idRup}</td>
                      <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px] text-center">{row.noCont}</td>
                      <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.divisi}</td>
                      <td className="px-[14px] py-[14px] text-center">
                        <span className="inline-flex items-center bg-[#f0f9ff] text-[#0069a8] text-[10.5px] font-medium px-[7px] py-[1.75px] rounded-[3.5px]">
                          {row.opexCapex}
                        </span>
                      </td>
                      <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.kategori}</td>
                      <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.tahun}</td>
                      <td className="px-[14px] py-[14px] text-[#364153] text-[10.5px]">{row.sp3Final}</td>
                      <td className="px-[14px] py-[14px] text-center">
                        <span className="inline-flex items-center bg-[#f0fdf4] text-[#008236] text-[10.5px] font-medium px-[7px] py-[1.75px] rounded-[3.5px]">
                          {row.status}
                        </span>
                      </td>
                      <td className="px-[14px] py-[14px] text-center">
                        <span className="inline-flex items-center bg-[#f3f4f6] text-[#364153] text-[10.5px] font-medium px-[7px] py-[1.75px] rounded-[3.5px]">
                          {row.statusHps}
                        </span>
                      </td>
                      <td className="px-[14px] py-[14px]">
                        <div className="flex items-center gap-[3px] justify-center">
                          <button onClick={() => { setSelectedItem(row); setView("detail"); }} className="p-[5px] rounded-[5px] hover:bg-[#e0e7ff] active:scale-95 transition-all duration-150" title="Detail">
                            <svg fill="none" height="12" viewBox="0 0 12 12" width="12">
                              <path d={group14Svg.p126ce980} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                              <path d={group14Svg.p24092800} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="bg-[#252271] text-white text-[10.5px] font-medium">
                    <th className="text-left px-[14px] py-[10px]">No.</th>
                    <th className="text-left px-[14px] py-[10px]">No. Request</th>
                    <th className="text-left px-[14px] py-[10px]">Nama Pengujian</th>
                    <th className="text-left px-[14px] py-[10px]">Tanggal Request</th>
                    <th className="text-left px-[14px] py-[10px]">Pemohon</th>
                    <th className="text-left px-[14px] py-[10px]">Kategori</th>
                    <th className="text-left px-[14px] py-[10px]">Status</th>
                    <th className="text-center px-[14px] py-[10px]">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {PENGUJIAN_REQUEST_ROWS.filter((r) => r.noRequest.toLowerCase().includes(search.toLowerCase()) || r.namaPengujian.toLowerCase().includes(search.toLowerCase())).map((r, i) => (
                    <tr key={i} className={\`border-b border-[#f3f4f6] \${i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"} hover:bg-[#eef2ff] transition-colors\`}>
                      <td className="px-[14px] py-[10px] text-[#364153]">{i + 1}</td>
                      <td className="px-[14px] py-[10px] text-[#364153] font-medium">{r.noRequest}</td>
                      <td className="px-[14px] py-[10px] text-[#364153] font-semibold">{r.namaPengujian}</td>
                      <td className="px-[14px] py-[10px] text-[#364153]">{r.tanggalRequest}</td>
                      <td className="px-[14px] py-[10px] text-[#364153]">{r.pemohon}</td>
                      <td className="px-[14px] py-[10px] text-[#364153]">{r.kategori}</td>
                      <td className="px-[14px] py-[10px]">
                        <span className={\`px-[10px] py-[3px] rounded-full text-[11px] font-medium \${r.status === "Selesai" ? "bg-[#d1fae5] text-[#065f46]" : "bg-[#fef9c3] text-[#854d0e]"}\`}>{r.status}</span>
                      </td>
                      <td className="px-[14px] py-[10px] text-center">
                        <button
                          onClick={() => { setSelectedItem(r); setView("detail"); }}
                          className="p-[5px] rounded-[5px] hover:bg-[#e0e7ff] active:scale-95 transition-all duration-150 mx-auto"
                          title="Detail"
                        >
                          <svg fill="none" height="12" viewBox="0 0 12 12" width="12">
                            <path d={group14Svg.p126ce980} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                            <path d={group14Svg.p24092800} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="flex items-center justify-between px-[16px] py-[12px] text-[#4a5565] text-[13px]">
            <span>Showing 1 to 3 of 3 entries</span>
            <div className="flex gap-[4px]">
              <button className="h-[28px] px-[10px] rounded-[4px] border border-[#d1d5dc] text-[12px]">Previous</button>
              <button className="h-[28px] px-[10px] rounded-[4px] bg-[#252271] text-white text-[12px]">1</button>
              <button className="h-[28px] px-[10px] rounded-[4px] border border-[#d1d5dc] text-[12px]">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

// Replace Pengujian section
const oldPengujianSectionRegex = /\/\/\s*───\s*Pengujian Page Enhanced[\s\S]*?^\}/m;
code = code.replace(oldPengujianSectionRegex, newPengujianFigmaCode);

// Replace DetailPembayaranPage with exact Figma layout
const newDetailPembayaranFigmaCode = `
function DetailPembayaranPage({ row, breadcrumbFrom, onBack }: { row: PembayaranRow; breadcrumbFrom: string; onBack: () => void }) {
  const [showApprove, setShowApprove] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(row.status);

  const berkasRows = [
    { status: "SUDAH UPLOAD", tanggal: "14-FEB-2026 10:30:00", keterangan: "INVOICE / TAGIHAN VENDOR", mandatory: "*" },
    { status: "SUDAH UPLOAD", tanggal: "14-FEB-2026 10:30:00", keterangan: "FAKTUR PAJAK SERI ELEKTRONIK", mandatory: "*" },
    { status: "SUDAH UPLOAD", tanggal: "14-FEB-2026 10:30:00", keterangan: "BAST (BERITA ACARA SERAH TERIMA)", mandatory: "*" },
    { status: "BELUM UPLOAD", tanggal: "-", keterangan: "KUITANSI PEMBAYARAN BERMATERAI", mandatory: "**" },
    { status: "BELUM UPLOAD", tanggal: "-", keterangan: "SURAT PERMOHONAN PEMBAYARAN (SPP)", mandatory: "***" },
  ];

  const trackingRows = [
    { tanggal: "14-FEB-2026 10:30:00", keterangan: "VENDOR MENGUNGGAH DOKUMEN INVOICE & BAST" },
    { tanggal: "15-FEB-2026 09:15:00", keterangan: "STAFF KEUANGAN MELAKUKAN VERIFIKASI BERKAS" },
    { tanggal: "16-FEB-2026 14:00:00", keterangan: "MANAJER KEUANGAN MENYETUJUI PENERBITAN SPP" },
    { tanggal: "18-FEB-2026 10:00:00", keterangan: "PENERBITAN SPM & PENCAIRAN KE REKENING VENDOR" },
  ];

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc]">
      <div className="px-[44px] py-[20px]">
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-[8px] mb-[16px]">
          <button onClick={onBack} className="flex items-center justify-center size-[28px] rounded-full hover:bg-[#e0e7ff] transition-colors active:scale-95">
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16"><path d="M10 12L6 8L10 4" stroke="#6a7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
          </button>
          <div className="flex items-center justify-between flex-1">
            <p className="text-[#99a1af] text-[16px] font-normal">
              <span>Pembayaran &gt; {breadcrumbFrom} &gt; </span>
              <span className="font-bold text-[#252271]">Detail</span>
            </p>
            <span className="inline-flex items-center bg-[#f0f9ff] border border-[#0069a8] text-[#0069a8] text-[10.5px] font-medium px-[10px] py-[3px] rounded-full">
              Status: {currentStatus}
            </span>
          </div>
        </div>

        {/* Detail Information Card (2-column key-value layout) */}
        <div className="bg-white rounded-[15px] border border-[#e5e7eb] overflow-hidden mb-[20px]">
          {[
            { label: "Nomor Pembayaran", value: \`: \${row.noPembayaran}\` },
            { label: "Nomor Kontrak Acuan", value: \`: \${row.noKontrak}\` },
            { label: "Nama Paket Pekerjaan", value: \`: \${row.namaPaket}\` },
            { label: "Nama Vendor / Penyedia", value: \`: \${row.vendor}\` },
            { label: "Nilai Tagihan Netto", value: \`: \${row.nilaiTagihan}\` },
            { label: "Tanggal Permohonan", value: \`: \${row.tanggalPermohonan}\` },
            { label: "Bank Vendor", value: \`: Bank Mandiri Cabang Juanda — Rek: 1230009876543 a/n \${row.vendor}\` },
          ].map(({ label, value }) => (
            <div key={label} className="grid grid-cols-[200px_1fr] px-[20px] py-[10px] border-b border-[#f3f4f6]">
              <span className="text-[#6a7282] text-[13.5px] font-medium">{label}</span>
              <span className="text-[#1e2939] text-[13.5px] font-semibold">{value}</span>
            </div>
          ))}
          <div className="grid grid-cols-[200px_1fr] px-[20px] py-[10px]">
            <span className="text-[#6a7282] text-[13.5px] font-medium pt-[2px]">Detail Tagihan</span>
            <div>
              <span className="text-[#99a1af] text-[12px]">:</span>
              <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[6px] p-[12px] text-[12.5px] text-[#334153] min-h-[90px] mt-[4px]">
                Permohonan pencairan dana pembayaran termin pekerjaan sesuai Berita Acara Serah Terima (BAST).
              </div>
            </div>
          </div>
        </div>

        {/* Berkas Pendukung Table Card */}
        <div className="bg-white rounded-[15px] border border-[#e5e7eb] overflow-hidden mb-[20px]">
          <div className="bg-[#252271] px-[20px] py-[12px]">
            <p className="text-white text-[14px] font-semibold">Berkas Pendukung</p>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#f3f4f6] text-[#6a7282] text-[12px] font-semibold tracking-[0.3px]">
                <th className="text-left px-[20px] py-[10px] w-[180px]">STATUS</th>
                <th className="text-left px-[20px] py-[10px] w-[220px]">TANGGAL</th>
                <th className="text-left px-[20px] py-[10px]">KETERANGAN</th>
                <th className="text-left px-[20px] py-[10px] w-[80px]">BERKAS</th>
              </tr>
            </thead>
            <tbody>
              {berkasRows.map((br, i) => (
                <tr key={i} className="border-b border-[#f3f4f6] last:border-0 hover:bg-[#fafafa]">
                  <td className="px-[20px] py-[10px]">
                    <span className="inline-flex items-center border border-[#d1d5dc] rounded-[4px] px-[9px] py-[3px] text-[10px] font-semibold text-[#6a7282] tracking-[0.25px] bg-white whitespace-nowrap">
                      {br.status}
                    </span>
                  </td>
                  <td className="px-[20px] py-[10px] text-[#6a7282] text-[12px]">{br.tanggal}</td>
                  <td className="px-[20px] py-[10px] text-[#364153] text-[13.5px]">
                    {br.keterangan} <span className="text-[#cc0000] ml-[2px]">{br.mandatory}</span>
                  </td>
                  <td className="px-[20px] py-[10px]">
                    <button className="bg-[#252271] rounded-[4px] size-[25px] flex items-center justify-center hover:brightness-125 transition-all active:scale-95">
                      <svg fill="none" height="13" viewBox="0 0 13 13" width="13">
                        <path d="M2.167 9.75H10.833M6.5 1.625V8.125" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08" />
                        <path d="M3.792 6.5L6.5 9.208L9.208 6.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-[20px] py-[12px] border-t border-[#f3f4f6] flex flex-col gap-[2px]">
            <p className="text-[#99a1af] text-[12px]">* Mandatory</p>
            <p className="text-[#99a1af] text-[12px]">** Mandatory, di upload setelah mendapat tanda tangan direktur terkait</p>
            <p className="text-[#99a1af] text-[12px]">*** Tidak Mandatory, dokumen pendukung berupa KAK dll</p>
          </div>
        </div>

        {/* Tracking Card */}
        <div className="bg-white rounded-[15px] border border-[#e5e7eb] overflow-hidden mb-[20px]">
          <div className="bg-[#252271] px-[20px] py-[12px]">
            <p className="text-white text-[14px] font-semibold">Tracking Status</p>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#f3f4f6] text-[#6a7282] text-[12px] font-semibold tracking-[0.3px]">
                <th className="text-left px-[20px] py-[10px] w-[300px]">TANGGAL</th>
                <th className="text-left px-[20px] py-[10px]">KETERANGAN</th>
              </tr>
            </thead>
            <tbody>
              {trackingRows.map((tr, i) => (
                <tr key={i} className="border-b border-[#f3f4f6] last:border-0 hover:bg-[#fafafa]">
                  <td className="px-[20px] py-[10px] text-[#6a7282] text-[12px]">{tr.tanggal}</td>
                  <td className="px-[20px] py-[10px] text-[#364153] text-[13.5px] font-medium">{tr.keterangan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Actions */}
        <div className="flex gap-[7px]">
          <button onClick={() => setShowApprove(true)} className="h-[36px] px-[18px] bg-[#252271] text-white text-[13px] font-medium rounded-[6px] hover:brightness-110 active:scale-95 transition-all duration-150">Approve</button>
          <button onClick={() => setShowReject(true)} className="h-[36px] px-[18px] border border-[#d1d5dc] text-[#4a5565] text-[13px] font-medium rounded-[6px] hover:bg-[#f1f5f9] active:scale-95 transition-all duration-150">Reject</button>
          <button onClick={onBack} className="h-[36px] px-[18px] border border-[#d1d5dc] text-[#4a5565] text-[13px] font-medium rounded-[6px] hover:bg-[#f1f5f9] transition-colors">Kembali</button>
        </div>
      </div>

      {/* Approve Modal */}
      {showApprove && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[15px] w-[420px] overflow-hidden shadow-2xl">
            <div className="bg-[#252271] px-[24px] py-[12px]"><p className="text-white text-[14px] font-bold">Approve Pembayaran</p></div>
            <div className="p-[28px] flex flex-col gap-[16px]">
              <p className="text-[#0f172a] text-[13.5px] text-center">Apakah Anda yakin ingin menyetujui pembayaran ini?</p>
              <div className="flex gap-[12px] justify-center">
                <button onClick={() => setShowApprove(false)} className="px-[20px] py-[8px] rounded-[8px] border border-[#d1d5dc] text-[#64748b] text-[13px]">Batal</button>
                <button onClick={() => { setCurrentStatus("Disetujui"); setShowApprove(false); }} className="px-[20px] py-[8px] rounded-[8px] bg-[#252271] text-white text-[13px] font-semibold">Approve</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showReject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[15px] w-[450px] overflow-hidden shadow-2xl">
            <div className="bg-[#cc0000] px-[24px] py-[12px]"><p className="text-white text-[14px] font-bold">Reject Pembayaran</p></div>
            <div className="p-[28px] flex flex-col gap-[16px]">
              <p className="text-[#0f172a] text-[13px]">Masukkan alasan penolakan tagihan:</p>
              <textarea className="w-full h-[90px] border border-[#d1d5dc] rounded-[8px] p-[10px] text-[13px] outline-none focus:border-[#cc0000]" placeholder="Alasan penolakan..." />
              <div className="flex gap-[12px] justify-center">
                <button onClick={() => setShowReject(false)} className="px-[20px] py-[8px] rounded-[8px] border border-[#d1d5dc] text-[#64748b] text-[13px]">Batal</button>
                <button onClick={() => { setCurrentStatus("Rejected"); setShowReject(false); }} className="px-[20px] py-[8px] rounded-[8px] bg-[#cc0000] text-white text-[13px] font-semibold">Reject</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
`;

// Replace DetailPembayaranPage
const oldDetailPembayaranRegex = /function DetailPembayaranPage[\s\S]*?^\}/m;
code = code.replace(oldDetailPembayaranRegex, newDetailPembayaranFigmaCode);

fs.writeFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', code);
console.log('Successfully aligned Pengujian and Pembayaran to exact Figma spec!');
