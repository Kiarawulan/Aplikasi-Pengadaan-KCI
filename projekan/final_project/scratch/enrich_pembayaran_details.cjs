const fs = require('fs');
let code = fs.readFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', 'utf8');

const newPembayaranCode = `
// ─── Pembayaran Page Enhanced ────────────────────────────────────────────────
type PembayaranRow = {
  noPembayaran: string;
  noKontrak: string;
  namaPaket: string;
  vendor: string;
  nilaiTagihan: string;
  tanggalPermohonan: string;
  status: string;
};

const PEMBAYARAN_ROWS: Record<PembayaranDoc, PembayaranRow[]> = {
  "pembayaran-contract-release": [
    { noPembayaran: "CR-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Pengadaan Server CTIT 2024 (Termin 1 - 30%)", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 150.000.000", tanggalPermohonan: "10-02-2024", status: "Draft" },
    { noPembayaran: "CR-2024-002", noKontrak: "KTR-2024-002", namaPaket: "Sewa License Software KCI (Termin 1 - 40%)", vendor: "PT Tech Solution", nilaiTagihan: "Rp 80.000.000", tanggalPermohonan: "15-02-2024", status: "Disetujui" },
    { noPembayaran: "CR-2024-003", noKontrak: "KTR-2024-005", namaPaket: "Modernisasi Substation KCI (Termin Uang Muka 20%)", vendor: "PT Powerindo Utama", nilaiTagihan: "Rp 250.000.000", tanggalPermohonan: "01-03-2024", status: "Verifikasi" },
  ],
  "pembayaran-bast": [
    { noPembayaran: "BAST-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Pengadaan Server CTIT 2024", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 150.000.000", tanggalPermohonan: "12-02-2024", status: "Verifikasi" },
    { noPembayaran: "BAST-2024-002", noKontrak: "KTR-2024-002", namaPaket: "Pengadaan Hardware Router Depot", vendor: "CV Net Jaya", nilaiTagihan: "Rp 45.000.000", tanggalPermohonan: "18-02-2024", status: "Disetujui" },
    { noPembayaran: "BAST-2024-003", noKontrak: "KTR-2024-009", namaPaket: "Upgrade Core Fiber Optic Network", vendor: "PT Telkom Infratel", nilaiTagihan: "Rp 850.000.000", tanggalPermohonan: "22-02-2024", status: "Disetujui" },
  ],
  "pembayaran-invoice": [
    { noPembayaran: "INV-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Tagihan Invoice Server CTIT 2024", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 166.500.000", tanggalPermohonan: "14-02-2024", status: "Verifikasi" },
    { noPembayaran: "INV-2024-002", noKontrak: "KTR-2024-002", namaPaket: "Tagihan Invoice License Software", vendor: "PT Tech Solution", nilaiTagihan: "Rp 88.800.000", tanggalPermohonan: "20-02-2024", status: "Disetujui" },
  ],
  "pembayaran-spp": [
    { noPembayaran: "SPP-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Permohonan Pembayaran Server CTIT 2024", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 150.000.000", tanggalPermohonan: "16-02-2024", status: "Disetujui" },
    { noPembayaran: "SPP-2024-002", noKontrak: "KTR-2024-009", namaPaket: "Permohonan Pembayaran Fiber Optic", vendor: "PT Telkom Infratel", nilaiTagihan: "Rp 850.000.000", tanggalPermohonan: "25-02-2024", status: "Draft" },
  ],
  "pembayaran-spm": [
    { noPembayaran: "SPM-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Surat Perintah Membayar Server CTIT 2024", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 150.000.000", tanggalPermohonan: "18-02-2024", status: "Cair" },
    { noPembayaran: "SPM-2024-002", noKontrak: "KTR-2024-002", namaPaket: "Surat Perintah Membayar License Software", vendor: "PT Tech Solution", nilaiTagihan: "Rp 80.000.000", tanggalPermohonan: "24-02-2024", status: "Disetujui" },
  ],
  "pembayaran-verification": [
    { noPembayaran: "VER-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Verifikasi Final Tagihan Server CTIT", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 150.000.000", tanggalPermohonan: "20-02-2024", status: "Verifikasi" },
    { noPembayaran: "VER-2024-002", noKontrak: "KTR-2024-005", namaPaket: "Verifikasi Tagihan Substation KCI", vendor: "PT Powerindo Utama", nilaiTagihan: "Rp 250.000.000", tanggalPermohonan: "02-03-2024", status: "Draft" },
  ],
};

function DetailPembayaranPage({ row, breadcrumbFrom, onBack }: { row: PembayaranRow; breadcrumbFrom: string; onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<"informasi" | "berkas" | "tracking">("informasi");
  const [showApprove, setShowApprove] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(row.status);

  const berkasRows = [
    { status: "SUDAH UPLOAD", tanggal: "14-FEB-2026 10:30:00", keterangan: "INVOICE / TAGIHAN VENDOR", mandatory: "*" },
    { status: "SUDAH UPLOAD", tanggal: "14-FEB-2026 10:30:00", keterangan: "FAKTUR PAJAK SERI SERI ELEKTRONIK", mandatory: "*" },
    { status: "SUDAH UPLOAD", tanggal: "14-FEB-2026 10:30:00", keterangan: "BAST (BERITA ACARA SERAH TERIMA)", mandatory: "*" },
    { status: "SUDAH UPLOAD", tanggal: "15-FEB-2026 09:00:00", keterangan: "KUITANSI PEMBAYARAN BERMATERAI", mandatory: "**" },
    { status: "SUDAH UPLOAD", tanggal: "16-FEB-2026 11:15:00", keterangan: "SURAT PERMOHONAN PEMBAYARAN (SPP)", mandatory: "***" },
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
        {/* Breadcrumb */}
        <div className="flex items-center gap-[8px] mb-[20px]">
          <button onClick={onBack} className="flex items-center justify-center size-[28px] rounded-full hover:bg-[#e0e7ff] transition-colors active:scale-95">
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16"><path d="M10 12L6 8L10 4" stroke="#6a7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
          </button>
          <span className="text-[#99a1af] text-[16px] font-normal">Pembayaran &gt; {breadcrumbFrom} &gt; </span>
          <span className="text-[#1e2939] text-[16px] font-semibold">Detail Pembayaran</span>
        </div>

        {/* Banner */}
        <div className="bg-[#252271] rounded-[16px] p-[24px] mb-[20px] flex items-center justify-between shadow-md">
          <div>
            <p className="text-white/60 text-[12px] font-normal mb-[2px]">Pembayaran &middot; {row.noPembayaran}</p>
            <p className="text-white text-[18px] font-bold">{row.namaPaket}</p>
            <p className="text-white/80 text-[13px] mt-[4px]">{row.vendor} &middot; <span className="font-bold">{row.nilaiTagihan}</span></p>
          </div>
          <span className="bg-white/10 border border-white/20 text-white text-[12px] font-semibold px-[16px] py-[6px] rounded-full">
            Status: {currentStatus}
          </span>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#e5e7eb] mb-[20px]">
          {[
            { id: "informasi", label: "Informasi Tagihan" },
            { id: "berkas", label: "Berkas Pendukung" },
            { id: "tracking", label: "Tracking Status Verifikasi" },
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
              <p className="text-white text-[14px] font-semibold">Rincian Informasi Pembayaran &amp; Rekening</p>
            </div>
            {[
              { label: "Nomor Pembayaran", value: row.noPembayaran },
              { label: "Nomor Kontrak Acuan", value: row.noKontrak },
              { label: "Nama Paket Pekerjaan", value: row.namaPaket },
              { label: "Nama Vendor / Penyedia", value: row.vendor },
              { label: "NPWP Vendor", value: "01.234.567.8-012.000" },
              { label: "Nilai Tagihan Netto", value: row.nilaiTagihan },
              { label: "PPN (11%)", value: "Termasuk dalam nilai tagihan" },
              { label: "Tanggal Permohonan", value: row.tanggalPermohonan },
              { label: "Bank Vendor", value: "Bank Mandiri Cabang Juanda — No. Rek: 1230009876543 a/n " + row.vendor },
              { label: "Verifikator Keuangan", value: "Tim Finance & Accounting KCI" },
            ].map(({ label, value }) => (
              <div key={label} className="grid grid-cols-[220px_1fr] px-[20px] py-[12px] border-b border-[#f3f4f6] last:border-0">
                <span className="text-[#6a7282] text-[13px] font-medium">{label}</span>
                <span className="text-[#1e2939] text-[13px] font-semibold">{value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "berkas" && (
          <div className="bg-white rounded-[15px] border border-[#e5e7eb] overflow-hidden mb-[20px] shadow-sm">
            <div className="bg-[#252271] px-[20px] py-[12px]">
              <p className="text-white text-[14px] font-semibold">Berkas Kelengkapan Pembayaran</p>
            </div>
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-[#f3f4f6] text-[#6a7282] text-[12px] font-semibold bg-[#f8fafc]">
                  <th className="text-left px-[20px] py-[10px] w-[180px]">STATUS</th>
                  <th className="text-left px-[20px] py-[10px] w-[220px]">TANGGAL UPLOAD</th>
                  <th className="text-left px-[20px] py-[10px]">KETERANGAN DOKUMEN</th>
                  <th className="text-center px-[20px] py-[10px] w-[120px]">AKSI</th>
                </tr>
              </thead>
              <tbody>
                {berkasRows.map((br, i) => (
                  <tr key={i} className="border-b border-[#f3f4f6] hover:bg-[#fafafa]">
                    <td className="px-[20px] py-[12px]">
                      <span className={\`inline-flex items-center rounded-[4px] px-[9px] py-[3px] text-[10px] font-semibold tracking-[0.25px] \${br.status === "SUDAH UPLOAD" ? "bg-[#d1fae5] text-[#065f46]" : "bg-[#fef2f2] text-[#991b1b]"}\`}>
                        {br.status}
                      </span>
                    </td>
                    <td className="px-[20px] py-[12px] text-[#6a7282] text-[12px]">{br.tanggal}</td>
                    <td className="px-[20px] py-[12px] text-[#364153] text-[13px] font-medium">
                      {br.keterangan} <span className="text-[#cc0000]">{br.mandatory}</span>
                    </td>
                    <td className="px-[20px] py-[12px] text-center">
                      <button className="bg-[#252271] text-white text-[11px] font-medium px-[12px] py-[4px] rounded-[6px] hover:brightness-110">Download</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "tracking" && (
          <div className="bg-white rounded-[15px] border border-[#e5e7eb] overflow-hidden mb-[20px] shadow-sm">
            <div className="bg-[#252271] px-[20px] py-[12px]">
              <p className="text-white text-[14px] font-semibold">Tracking Riwayat Verifikasi Tagihan</p>
            </div>
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-[#f3f4f6] text-[#6a7282] text-[12px] font-semibold bg-[#f8fafc]">
                  <th className="text-left px-[20px] py-[10px] w-[260px]">TANGGAL &amp; WAKTU</th>
                  <th className="text-left px-[20px] py-[10px]">KETERANGAN LOG PROSES</th>
                </tr>
              </thead>
              <tbody>
                {trackingRows.map((tr, i) => (
                  <tr key={i} className="border-b border-[#f3f4f6] hover:bg-[#fafafa]">
                    <td className="px-[20px] py-[12px] text-[#6a7282] font-mono text-[12px]">{tr.tanggal}</td>
                    <td className="px-[20px] py-[12px] text-[#364153] text-[13px] font-medium">{tr.keterangan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-[12px]">
          <button onClick={() => setShowApprove(true)} className="h-[38px] px-[22px] bg-[#252271] text-white text-[13px] font-semibold rounded-[8px] hover:brightness-110 active:scale-95 transition-all">
            Setujui &amp; Lanjutkan Pembayaran
          </button>
          <button onClick={() => setShowReject(true)} className="h-[38px] px-[22px] border border-[#cc0000] text-[#cc0000] text-[13px] font-semibold rounded-[8px] hover:bg-[#fef2f2] active:scale-95 transition-all">
            Tolak Tagihan
          </button>
          <button onClick={onBack} className="h-[38px] px-[22px] border border-[#d1d5dc] text-[#475569] text-[13px] font-medium rounded-[8px] hover:bg-[#f1f5f9] transition-all">
            Kembali
          </button>
        </div>
      </div>

      {/* Modal Approve */}
      {showApprove && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[15px] w-[420px] overflow-hidden shadow-2xl">
            <div className="bg-[#252271] px-[24px] py-[12px]"><p className="text-white text-[14px] font-bold">Persetujuan Pembayaran</p></div>
            <div className="p-[28px] flex flex-col gap-[16px]">
              <p className="text-[#0f172a] text-[13.5px] text-center">Apakah Anda yakin ingin menyetujui pembayaran dan melanjutkan ke penerbitan SPP/SPM?</p>
              <div className="flex gap-[12px] justify-center">
                <button onClick={() => setShowApprove(false)} className="px-[20px] py-[8px] rounded-[8px] border border-[#d1d5dc] text-[#64748b] text-[13px]">Batal</button>
                <button onClick={() => { setCurrentStatus("Disetujui"); setShowApprove(false); }} className="px-[20px] py-[8px] rounded-[8px] bg-[#252271] text-white text-[13px] font-semibold">Setujui</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Reject */}
      {showReject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[15px] w-[450px] overflow-hidden shadow-2xl">
            <div className="bg-[#cc0000] px-[24px] py-[12px]"><p className="text-white text-[14px] font-bold">Penolakan Tagihan Pembayaran</p></div>
            <div className="p-[28px] flex flex-col gap-[16px]">
              <p className="text-[#0f172a] text-[13px]">Masukkan alasan penolakan tagihan / berkas kurang lengkap:</p>
              <textarea className="w-full h-[90px] border border-[#d1d5dc] rounded-[8px] p-[10px] text-[13px] outline-none focus:border-[#cc0000]" placeholder="Alasan penolakan..." />
              <div className="flex gap-[12px] justify-center">
                <button onClick={() => setShowReject(false)} className="px-[20px] py-[8px] rounded-[8px] border border-[#d1d5dc] text-[#64748b] text-[13px]">Batal</button>
                <button onClick={() => { setCurrentStatus("Ditolak"); setShowReject(false); }} className="px-[20px] py-[8px] rounded-[8px] bg-[#cc0000] text-white text-[13px] font-semibold">Kirim Penolakan</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
`;

const oldPembayaranBlockRegex = /type PembayaranRow = [\s\S]*?function DetailPembayaranPage[\s\S]*?^\}/m;

code = code.replace(oldPembayaranBlockRegex, newPembayaranCode);

fs.writeFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', code);
console.log('Successfully enriched Pembayaran details!');
