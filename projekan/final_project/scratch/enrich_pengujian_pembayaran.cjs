const fs = require('fs');
let code = fs.readFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', 'utf8');

// Richer Pengujian Data Rows & Detail Page Component
const newPengujianCode = `
// ─── Pengujian Page Enhanced ───────────────────────────────────────────────────
type PengujianKontrakRow = {
  noKontrak: string;
  namaPaket: string;
  nilaiKontrak: string;
  tanggal: string;
  vendor: string;
  lokasi: string;
  timPenguji: string;
  status: string;
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
  { noKontrak: "KTR-2024-008", namaPaket: "Pengadaan Tools Lab CTIT 2024", nilaiKontrak: "Rp 180.000.000", tanggal: "10-02-2024", vendor: "PT Labtek Utama", lokasi: "Depo CTIT Manggarai", timPenguji: "Tim QA CTIT", status: "Selesai" },
  { noKontrak: "KTR-2024-012", namaPaket: "Maintenance Network Router Depot", nilaiKontrak: "Rp 350.000.000", tanggal: "18-02-2024", vendor: "CV Net Jaya", lokasi: "Depo Bukit Duri", timPenguji: "Tim Jaringan KCI", status: "Aktif" },
  { noKontrak: "KTR-2024-015", namaPaket: "Pengadaan Renewal SSL & Security Certs", nilaiKontrak: "Rp 95.000.000", tanggal: "01-03-2024", vendor: "PT Tech Solution", lokasi: "Data Center KCI", timPenguji: "Tim Cyber Security", status: "Aktif" },
];

const PENGUJIAN_KONTRAK_500PLUS_ROWS: PengujianKontrakRow[] = [
  { noKontrak: "KTR-2024-001", namaPaket: "Pengadaan Server CTIT 2024", nilaiKontrak: "Rp 500.000.000", tanggal: "15-01-2024", vendor: "PT Maju Bersama", lokasi: "Data Center Utama KCI", timPenguji: "Tim Infrastruktur & QA", status: "Aktif" },
  { noKontrak: "KTR-2024-005", namaPaket: "Modernisasi Substation & Power KCI", nilaiKontrak: "Rp 1.250.000.000", tanggal: "25-01-2024", vendor: "PT Powerindo Utama", lokasi: "Stasiun Juanda & Manggarai", timPenguji: "Tim Ketenagalistrikan", status: "Aktif" },
  { noKontrak: "KTR-2024-009", namaPaket: "Upgrade Core Fiber Optic Network", nilaiKontrak: "Rp 850.000.000", tanggal: "05-02-2024", vendor: "PT Telkom Infratel", lokasi: "Jalur Lintas Jakarta-Bogor", timPenguji: "Tim Telekomunikasi", status: "Selesai" },
];

const PENGUJIAN_REQUEST_ROWS: PengujianRequestRow[] = [
  { noRequest: "REQ-2024-001", namaPengujian: "Uji Fungsi Server High Availability", tanggalRequest: "01-03-2024", pemohon: "Departemen CTIT", kategori: "Fungsi & Stress Test", status: "Pending" },
  { noRequest: "REQ-2024-002", namaPengujian: "Uji Beban & Bandwidth Fiber Optic", tanggalRequest: "10-03-2024", pemohon: "Departemen Telematika", kategori: "Performance Test", status: "Selesai" },
  { noRequest: "REQ-2024-003", namaPengujian: "Uji Ketahanan Baterai UPS Central", tanggalRequest: "15-03-2024", pemohon: "Departemen Fasilitas Ops", kategori: "Electrical Test", status: "In Progress" },
];

function DetailPengujianPage({ item, isKontrak, onBack }: { item: PengujianKontrakRow | PengujianRequestRow; isKontrak: boolean; onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<"informasi" | "parameter" | "berkas">("informasi");
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [statusState, setStatusState] = useState(item.status);

  const titleName = isKontrak ? (item as PengujianKontrakRow).namaPaket : (item as PengujianRequestRow).namaPengujian;
  const itemNo = isKontrak ? (item as PengujianKontrakRow).noKontrak : (item as PengujianRequestRow).noRequest;

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-[#f8fafc]">
      <div className="px-[44px] py-[20px]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-[8px] mb-[20px]">
          <button onClick={onBack} className="flex items-center justify-center size-[28px] rounded-full hover:bg-[#e0e7ff] transition-colors active:scale-95">
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16"><path d="M10 12L6 8L10 4" stroke="#6a7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
          </button>
          <span className="text-[#99a1af] text-[16px] font-normal">Pengujian &gt; Detail &gt; </span>
          <span className="text-[#1e2939] text-[16px] font-semibold">{itemNo}</span>
        </div>

        {/* Banner */}
        <div className="bg-[#252271] rounded-[16px] p-[24px] mb-[20px] flex items-center justify-between shadow-md">
          <div>
            <p className="text-white/60 text-[12px] font-normal mb-[2px]">Detail Pengujian &middot; {itemNo}</p>
            <p className="text-white text-[18px] font-bold">{titleName}</p>
            <p className="text-white/80 text-[13px] mt-[4px]">
              {isKontrak ? \`Vendor: \${(item as PengujianKontrakRow).vendor} &middot; Nilai: \${(item as PengujianKontrakRow).nilaiKontrak}\` : \`Pemohon: \${(item as PengujianRequestRow).pemohon} &middot; Kategori: \${(item as PengujianRequestRow).kategori}\`}
            </p>
          </div>
          <span className={\`border px-[14px] py-[6px] rounded-full text-[12px] font-semibold \${statusState === "Selesai" || statusState === "Lulus" ? "bg-[#d1fae5] border-[#059669] text-[#065f46]" : "bg-white/10 border-white/20 text-white"}\`}>
            Status: {statusState}
          </span>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#e5e7eb] mb-[20px]">
          {[
            { id: "informasi", label: "Informasi Pengujian" },
            { id: "parameter", label: "Parameter & Hasil Uji" },
            { id: "berkas", label: "Dokumen & Sertifikat" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={\`px-[20px] py-[10px] text-[13px] font-bold transition-colors relative \${activeTab === t.id ? "text-[#252271]" : "text-[#94a3b8] hover:text-[#475569]"}\`}
            >
              {t.label}
              {activeTab === t.id && <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#252271] rounded-t" />}
            </button>
          ))}
        </div>

        {activeTab === "informasi" && (
          <div className="bg-white rounded-[15px] border border-[#e5e7eb] overflow-hidden mb-[20px] shadow-sm">
            <div className="bg-[#252271] px-[20px] py-[12px]">
              <p className="text-white text-[14px] font-semibold">Data Pengujian Teknis</p>
            </div>
            {[
              { label: "Nomor Identifikasi", value: itemNo },
              { label: "Nama Pengujian / Paket", value: titleName },
              { label: "Tanggal Pelaksanaan", value: item.tanggal || (item as any).tanggalRequest },
              { label: "Lokasi Pengujian", value: (item as any).lokasi || "Laboratorium & Site KCI" },
              { label: "Tim Penguji KCI", value: (item as any).timPenguji || "Tim Quality Assurance & Audit Teknis" },
              { label: "Metodologi Pengujian", value: "Uji Fungsi Full Scale, Load Testing 100%, & Security Scan" },
              { label: "Standar Acuan", value: "ISO 9001:2015 & Standard Spesifikasi Teknis KCI v4.0" },
            ].map(({ label, value }) => (
              <div key={label} className="grid grid-cols-[220px_1fr] px-[20px] py-[12px] border-b border-[#f3f4f6] last:border-0">
                <span className="text-[#6a7282] text-[13px] font-medium">{label}</span>
                <span className="text-[#1e2939] text-[13px] font-semibold">{value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "parameter" && (
          <div className="bg-white rounded-[15px] border border-[#e5e7eb] overflow-hidden mb-[20px] shadow-sm">
            <div className="bg-[#252271] px-[20px] py-[12px]">
              <p className="text-white text-[14px] font-semibold">Parameter Hasil Pengujian Teknis</p>
            </div>
            <table className="w-full text-[13px]">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#e5e7eb] text-[#6a7282] font-semibold">
                  <th className="text-left px-[16px] py-[10px]">Parameter Uji</th>
                  <th className="text-left px-[16px] py-[10px]">Standar Minimal</th>
                  <th className="text-left px-[16px] py-[10px]">Hasil Pengukuran</th>
                  <th className="text-center px-[16px] py-[10px]">Status Parameter</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { param: "Kecepatan Respons Server (Latency)", std: "< 50 ms", hasil: "18 ms", pass: true },
                  { param: "Uji Beban CPU Stress 24 Jam", std: "Tanpa Crash / Thermal Throttling", hasil: "CPU Temp Max 62°C (Stable)", pass: true },
                  { param: "Pengujian Redundansi Power Supply", std: "Automatic Failover < 1s", hasil: "Failover 0.2s (Seamless)", pass: true },
                  { param: "Pemeriksaan Fisik & Segel Mutu", std: "100% Utuh & Sesuai SNI", hasil: "Sesuai Standar Mutu", pass: true },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-[#f3f4f6] hover:bg-[#fafafa]">
                    <td className="px-[16px] py-[12px] font-medium text-[#1e2939]">{row.param}</td>
                    <td className="px-[16px] py-[12px] text-[#6a7282]">{row.std}</td>
                    <td className="px-[16px] py-[12px] text-[#1e2939] font-semibold">{row.hasil}</td>
                    <td className="px-[16px] py-[12px] text-center">
                      <span className="px-[10px] py-[3px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">PASSED</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "berkas" && (
          <div className="bg-white rounded-[15px] border border-[#e5e7eb] overflow-hidden mb-[20px] shadow-sm">
            <div className="bg-[#252271] px-[20px] py-[12px]">
              <p className="text-white text-[14px] font-semibold">Dokumen Berkas Pengujian</p>
            </div>
            <table className="w-full text-[13px]">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#e5e7eb] text-[#6a7282] font-semibold">
                  <th className="text-left px-[16px] py-[10px]">Nama Dokumen</th>
                  <th className="text-left px-[16px] py-[10px]">Tanggal Upload</th>
                  <th className="text-left px-[16px] py-[10px]">File</th>
                  <th className="text-center px-[16px] py-[10px]">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { nama: "Berita Acara Uji Terima (BAUT)", tgl: "15-FEB-2026", file: "BAUT-Signed.pdf" },
                  { nama: "Laporan Hasil Uji Lab & QC", tgl: "14-FEB-2026", file: "Laporan-QC-Lab.pdf" },
                  { nama: "Sertifikat Kelayakan Teknis", tgl: "16-FEB-2026", file: "Cert-Teknis.pdf" },
                ].map((doc, idx) => (
                  <tr key={idx} className="border-b border-[#f3f4f6] hover:bg-[#fafafa]">
                    <td className="px-[16px] py-[12px] font-medium text-[#1e2939]">{doc.nama}</td>
                    <td className="px-[16px] py-[12px] text-[#6a7282]">{doc.tgl}</td>
                    <td className="px-[16px] py-[12px] text-[#252271] font-semibold">{doc.file}</td>
                    <td className="px-[16px] py-[12px] text-center">
                      <button className="bg-[#252271] text-white px-[12px] py-[4px] rounded-[6px] text-[11px] font-medium hover:brightness-110">Download</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-[12px]">
          <button onClick={() => setShowApproveModal(true)} className="h-[38px] px-[22px] bg-[#252271] text-white text-[13px] font-semibold rounded-[8px] hover:brightness-110 active:scale-95 transition-all">
            Setujui &amp; Terbitkan BAUT
          </button>
          <button onClick={() => setShowRejectModal(true)} className="h-[38px] px-[22px] border border-[#d1d5dc] text-[#cc0000] hover:bg-[#fef2f2] text-[13px] font-semibold rounded-[8px] active:scale-95 transition-all">
            Tolak / Minta Retest
          </button>
          <button onClick={onBack} className="h-[38px] px-[22px] border border-[#d1d5dc] text-[#475569] text-[13px] font-medium rounded-[8px] hover:bg-[#f1f5f9] transition-all">
            Kembali
          </button>
        </div>
      </div>

      {/* Modal Approve */}
      {showApproveModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[15px] w-[420px] overflow-hidden shadow-2xl">
            <div className="bg-[#252271] px-[24px] py-[12px]"><p className="text-white text-[14px] font-bold">Persetujuan Pengujian</p></div>
            <div className="p-[28px] flex flex-col gap-[16px]">
              <p className="text-[#0f172a] text-[13.5px] text-center">Apakah Anda yakin hasil pengujian telah sesuai standar dan menyetujui penerbitan BAUT?</p>
              <div className="flex gap-[12px] justify-center">
                <button onClick={() => setShowApproveModal(false)} className="px-[20px] py-[8px] rounded-[8px] border border-[#d1d5dc] text-[#64748b] text-[13px]">Batal</button>
                <button onClick={() => { setStatusState("Lulus / Disetujui"); setShowApproveModal(false); }} className="px-[20px] py-[8px] rounded-[8px] bg-[#252271] text-white text-[13px] font-semibold">Setujui</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Reject */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[15px] w-[450px] overflow-hidden shadow-2xl">
            <div className="bg-[#cc0000] px-[24px] py-[12px]"><p className="text-white text-[14px] font-bold">Penolakan / Retest Pengujian</p></div>
            <div className="p-[28px] flex flex-col gap-[16px]">
              <p className="text-[#0f172a] text-[13px]">Masukkan catatan ketidaksesuaian / alasan pengujian ulang:</p>
              <textarea className="w-full h-[90px] border border-[#d1d5dc] rounded-[8px] p-[10px] text-[13px] outline-none focus:border-[#cc0000]" placeholder="Catatan retest..." />
              <div className="flex gap-[12px] justify-center">
                <button onClick={() => setShowRejectModal(false)} className="px-[20px] py-[8px] rounded-[8px] border border-[#d1d5dc] text-[#64748b] text-[13px]">Batal</button>
                <button onClick={() => { setStatusState("Perlu Retest"); setShowRejectModal(false); }} className="px-[20px] py-[8px] rounded-[8px] bg-[#cc0000] text-white text-[13px] font-semibold">Kirim Penolakan</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
`;

// Replace PengujianPage in AdminApp.tsx
const oldPengujianPageRegex = /const PENGUJIAN_KONTRAK_ROWS = [\s\S]*?function PengujianPage[\s\S]*?^\}/m;

const newPengujianPage = newPengujianCode + `
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

        {/* Filter */}
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
          </div>
          <div className="flex gap-[5px]">
            <button className="bg-[#252271] text-white text-[14px] font-medium h-[36px] px-[20px] rounded-[15px] flex items-center gap-[8px] hover:brightness-110 active:scale-95 transition-all duration-150">
              <svg fill="none" height="14" viewBox="0 0 14 14" width="14"><circle cx="6.875" cy="6.875" r="4.875" stroke="white" strokeWidth="1.17" /><path d="M12.25 12.25L9.74 9.74" stroke="white" strokeLinecap="round" strokeWidth="1.17" /></svg>
              Cari
            </button>
          </div>
        </div>

        {/* Table */}
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
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="bg-[#252271] text-white text-[10.5px] font-medium">
                    <th className="text-left px-[14px] py-[10px]">No.</th>
                    <th className="text-left px-[14px] py-[10px]">No. Kontrak</th>
                    <th className="text-left px-[14px] py-[10px]">Nama Paket</th>
                    <th className="text-left px-[14px] py-[10px]">Nilai Kontrak</th>
                    <th className="text-left px-[14px] py-[10px]">Vendor</th>
                    <th className="text-left px-[14px] py-[10px]">Tanggal</th>
                    <th className="text-left px-[14px] py-[10px]">Status</th>
                    <th className="text-center px-[14px] py-[10px]">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {kontrakRows.filter((r) => r.noKontrak.toLowerCase().includes(search.toLowerCase()) || r.namaPaket.toLowerCase().includes(search.toLowerCase())).map((r, i) => (
                    <tr key={i} className={\`border-b border-[#f3f4f6] \${i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"} hover:bg-[#eef2ff] transition-colors\`}>
                      <td className="px-[14px] py-[10px] text-[#364153]">{i + 1}</td>
                      <td className="px-[14px] py-[10px] text-[#364153] font-medium">{r.noKontrak}</td>
                      <td className="px-[14px] py-[10px] text-[#364153] font-semibold">{r.namaPaket}</td>
                      <td className="px-[14px] py-[10px] text-[#364153]">{r.nilaiKontrak}</td>
                      <td className="px-[14px] py-[10px] text-[#364153]">{r.vendor}</td>
                      <td className="px-[14px] py-[10px] text-[#364153]">{r.tanggal}</td>
                      <td className="px-[14px] py-[10px]">
                        <span className={\`px-[10px] py-[3px] rounded-full text-[11px] font-medium \${r.status === "Aktif" ? "bg-[#dbeafe] text-[#1d4ed8]" : "bg-[#d1fae5] text-[#065f46]"}\`}>{r.status}</span>
                      </td>
                      <td className="px-[14px] py-[10px] text-center">
                        <button
                          onClick={() => { setSelectedItem(r); setView("detail"); }}
                          className="flex items-center gap-[4px] text-[#252271] text-[11px] font-medium px-[10px] py-[4px] rounded-[8px] border border-[#252271] hover:bg-[#252271] hover:text-white transition-all duration-150 mx-auto whitespace-nowrap"
                        >
                          Detail Pengujian
                        </button>
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
                          className="flex items-center gap-[4px] text-[#252271] text-[11px] font-medium px-[10px] py-[4px] rounded-[8px] border border-[#252271] hover:bg-[#252271] hover:text-white transition-all duration-150 mx-auto whitespace-nowrap"
                        >
                          Detail Pengujian
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

code = code.replace(oldPengujianPageRegex, newPengujianPage);

fs.writeFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', code);
console.log('Successfully enriched Pengujian page!');
