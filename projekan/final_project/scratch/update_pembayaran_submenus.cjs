const fs = require('fs');
let code = fs.readFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', 'utf8');

// Update PembayaranDoc type
const oldPembayaranType = `type PembayaranDoc =
  | "pembayaran-contract-release"
  | "pembayaran-bast"
  | "pembayaran-invoice"
  | "pembayaran-spp"
  | "pembayaran-spm"
  | "pembayaran-verification";`;

const newPembayaranType = `type PembayaranDoc =
  | "pembayaran-outsource"
  | "pembayaran-non-outsource"
  | "pembayaran-umd"
  | "pembayaran-daily-reports"
  | "pembayaran-weekly-reports"
  | "pembayaran-contract-release"
  | "pembayaran-bast"
  | "pembayaran-invoice"
  | "pembayaran-spp"
  | "pembayaran-spm"
  | "pembayaran-verification";`;

code = code.replace(oldPembayaranType, newPembayaranType);

// Update SecondarySidebar for Pembayaran rendering to match user screenshot
const oldPembayaranNav = `              {/* Sub-docs for Pembayaran */}
              {isActive && item.id === "pembayaran" && (
                <div className="relative flex flex-col gap-[2px] pl-[11px]">
                  <div className="absolute inset-0 border-l border-white/15 pointer-events-none" />
                  {pembayaranSubItems.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => onPembayaranDoc(d.id)}
                      className={\`w-full text-left px-[8px] py-[5px] rounded-[8px] text-[11.5px] transition-all duration-150
                        \${pembayaranDoc === d.id
                          ? "bg-gradient-to-r from-[rgba(28,26,92,0.9)] to-transparent text-white font-medium"
                          : "text-white/60 font-normal hover:text-white/80 hover:bg-white/10"}\`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              )}`;

const newPembayaranNav = `              {/* Sub-docs for Pembayaran matching user Figma screenshot */}
              {isActive && item.id === "pembayaran" && (
                <div className="relative flex flex-col gap-[8px] pl-[12px] pt-[4px]">
                  {/* Payment Approve Group */}
                  <div className="flex flex-col gap-[3px]">
                    <span className="text-white/70 text-[11.5px] font-medium tracking-[0.2px]">Payment Approve</span>
                    <div className="relative flex flex-col gap-[2px] pl-[10px]">
                      <div className="absolute inset-0 border-l border-white/30 pointer-events-none" />
                      {[
                        { id: "pembayaran-outsource", label: "Outsource" },
                        { id: "pembayaran-non-outsource", label: "Non-Outsource" },
                        { id: "pembayaran-umd", label: "UMD" },
                      ].map((d) => (
                        <button
                          key={d.id}
                          onClick={() => onPembayaranDoc(d.id as any)}
                          className={\`w-full text-left px-[6px] py-[3px] rounded-[4px] text-[11px] transition-all duration-150 \${pembayaranDoc === d.id ? "text-white font-semibold bg-white/10" : "text-white/50 font-normal hover:text-white hover:bg-white/5"}\`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Reports Group */}
                  <div className="flex flex-col gap-[3px]">
                    <span className="text-white/70 text-[11.5px] font-medium tracking-[0.2px]">Reports</span>
                    <div className="relative flex flex-col gap-[2px] pl-[10px]">
                      <div className="absolute inset-0 border-l border-white/30 pointer-events-none" />
                      {[
                        { id: "pembayaran-daily-reports", label: "Daily Reports" },
                        { id: "pembayaran-weekly-reports", label: "Weekly Reports" },
                      ].map((d) => (
                        <button
                          key={d.id}
                          onClick={() => onPembayaranDoc(d.id as any)}
                          className={\`w-full text-left px-[6px] py-[3px] rounded-[4px] text-[11px] transition-all duration-150 \${pembayaranDoc === d.id ? "text-white font-semibold bg-white/10" : "text-white/50 font-normal hover:text-white hover:bg-white/5"}\`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}`;

code = code.replace(oldPembayaranNav, newPembayaranNav);

// Update PEMBAYARAN_ROWS in AdminApp.tsx to contain rows for all PembayaranDoc keys
const oldPembayaranRows = `const PEMBAYARAN_ROWS: Record<PembayaranDoc, PembayaranRow[]> = {
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
};`;

const newPembayaranRows = `const PEMBAYARAN_ROWS: Record<PembayaranDoc, PembayaranRow[]> = {
  "pembayaran-outsource": [
    { noPembayaran: "OUT-2024-001", noKontrak: "KTR-OUT-001", namaPaket: "Pembayaran Tenaga Outsource Security Feb 2024", vendor: "PT Garda Utama", nilaiTagihan: "Rp 420.000.000", tanggalPermohonan: "25-02-2024", status: "Verifikasi" },
    { noPembayaran: "OUT-2024-002", noKontrak: "KTR-OUT-002", namaPaket: "Pembayaran Tenaga Cleaning Service Stasiun", vendor: "PT Bersih Sejahtera", nilaiTagihan: "Rp 310.000.000", tanggalPermohonan: "26-02-2024", status: "Disetujui" },
  ],
  "pembayaran-non-outsource": [
    { noPembayaran: "NON-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Tagihan Lisensi Software Systems Direct", vendor: "PT Tech Solution", nilaiTagihan: "Rp 180.000.000", tanggalPermohonan: "14-02-2024", status: "Disetujui" },
  ],
  "pembayaran-umd": [
    { noPembayaran: "UMD-2024-001", noKontrak: "SPPD-2024-089", namaPaket: "Uang Muka Dinas Perjalanan Audit Stasiun", vendor: "Ahmad Fauzi (Tim Audit)", nilaiTagihan: "Rp 15.000.000", tanggalPermohonan: "10-02-2024", status: "Cair" },
    { noPembayaran: "UMD-2024-002", noKontrak: "SPPD-2024-092", namaPaket: "Uang Muka Dinas Pengujian Signal Bogor", vendor: "Budi Santoso (Tim Sinyal)", nilaiTagihan: "Rp 8.500.000", tanggalPermohonan: "18-02-2024", status: "Verifikasi" },
  ],
  "pembayaran-daily-reports": [
    { noPembayaran: "REP-DAILY-001", noKontrak: "RPT-2024-02-28", namaPaket: "Laporan Reharmonisasi Pembayaran Harian 28 Feb", vendor: "Keuangan KCI", nilaiTagihan: "Rp 1.250.000.000 (Total)", tanggalPermohonan: "28-02-2024", status: "Final" },
  ],
  "pembayaran-weekly-reports": [
    { noPembayaran: "REP-WEEKLY-008", noKontrak: "RPT-2024-W08", namaPaket: "Laporan Reharmonisasi Pembayaran Mingguan M8", vendor: "Keuangan KCI", nilaiTagihan: "Rp 4.850.000.000 (Total)", tanggalPermohonan: "29-02-2024", status: "Final" },
  ],
  "pembayaran-contract-release": [
    { noPembayaran: "CR-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Pengadaan Server CTIT 2024 (Termin 1 - 30%)", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 150.000.000", tanggalPermohonan: "10-02-2024", status: "Draft" },
  ],
  "pembayaran-bast": [
    { noPembayaran: "BAST-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Pengadaan Server CTIT 2024", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 150.000.000", tanggalPermohonan: "12-02-2024", status: "Verifikasi" },
  ],
  "pembayaran-invoice": [
    { noPembayaran: "INV-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Tagihan Invoice Server CTIT 2024", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 166.500.000", tanggalPermohonan: "14-02-2024", status: "Verifikasi" },
  ],
  "pembayaran-spp": [
    { noPembayaran: "SPP-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Permohonan Pembayaran Server CTIT 2024", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 150.000.000", tanggalPermohonan: "16-02-2024", status: "Disetujui" },
  ],
  "pembayaran-spm": [
    { noPembayaran: "SPM-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Surat Perintah Membayar Server CTIT 2024", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 150.000.000", tanggalPermohonan: "18-02-2024", status: "Cair" },
  ],
  "pembayaran-verification": [
    { noPembayaran: "VER-2024-001", noKontrak: "KTR-2024-001", namaPaket: "Verifikasi Final Tagihan Server CTIT", vendor: "PT Maju Bersama", nilaiTagihan: "Rp 150.000.000", tanggalPermohonan: "20-02-2024", status: "Verifikasi" },
  ],
};`;

code = code.replace(oldPembayaranRows, newPembayaranRows);

// Update subDocLabels mapping in PembayaranPage
const oldSubDocLabels = `  const subDocLabels: Record<PembayaranDoc, string> = {
    "pembayaran-contract-release": "Contract Release",
    "pembayaran-bast": "BAST",
    "pembayaran-invoice": "Invoice",
    "pembayaran-spp": "SPP",
    "pembayaran-spm": "SPM",
    "pembayaran-verification": "Payment Verification",
  };`;

const newSubDocLabels = `  const subDocLabels: Record<PembayaranDoc, string> = {
    "pembayaran-outsource": "Payment Approve > Outsource",
    "pembayaran-non-outsource": "Payment Approve > Non-Outsource",
    "pembayaran-umd": "Payment Approve > UMD",
    "pembayaran-daily-reports": "Reports > Daily Reports",
    "pembayaran-weekly-reports": "Reports > Weekly Reports",
    "pembayaran-contract-release": "Contract Release",
    "pembayaran-bast": "BAST",
    "pembayaran-invoice": "Invoice",
    "pembayaran-spp": "SPP",
    "pembayaran-spm": "SPM",
    "pembayaran-verification": "Payment Verification",
  };`;

code = code.replace(oldSubDocLabels, newSubDocLabels);

fs.writeFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', code);
console.log('Successfully updated Pembayaran sub-menu tree matching exact Figma user screenshot!');
