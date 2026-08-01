const fs = require('fs');
let code = fs.readFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', 'utf8');

const subDocComponents = `
// ─── Sub-document custom tables for Pengadaan ──────────────────────────────────
function PengadaanSubDocPage({ title }: { title: string }) {
  const [search, setSearch] = useState("");

  const sampleData: Record<string, { headers: string[]; rows: (string | JSX.Element)[][] }> = {
    "Jaminan Pelaksanaan": {
      headers: ["No. Jaminan", "No. Kontrak", "Nama Vendor", "Bank Penerbit", "Nilai Jaminan", "Masa Berlaku", "Status"],
      rows: [
        ["JAM-2024-001", "KTR-2024-001", "PT Maju Bersama", "Bank Mandiri", "Rp 25.000.000", "01-03-2024 s/d 31-12-2024", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Valid</span>],
        ["JAM-2024-002", "KTR-2024-002", "CV Logistik Sejahtera", "Bank BCA", "Rp 10.000.000", "01-04-2024 s/d 31-12-2024", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Valid</span>],
        ["JAM-2024-003", "KTR-2024-003", "PT Tech Solution", "Bank BNI", "Rp 7.500.000", "15-02-2024 s/d 14-02-2025", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Valid</span>],
      ]
    },
    "Warehouse": {
      headers: ["Kode Barang", "Nama Barang", "Kategori", "Stok", "Satuan", "Lokasi Gudang", "Status"],
      rows: [
        ["BRG-001", "Server Rack 42U", "IT Equipment", "5", "Unit", "Gudang Utama CTIT", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Tersedia</span>],
        ["BRG-002", "Kabel FO Single Mode 100m", "Netware", "24", "Roll", "Gudang Logistik Manggarai", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Tersedia</span>],
        ["BRG-003", "Baut Rel Kereta Heavy Duty", "Sparepart", "150", "Box", "Gudang Depo Bukit Duri", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Tersedia</span>],
      ]
    },
    "Vendor Management": {
      headers: ["Kode Vendor", "Nama Perusahaan", "NPWP", "Email / Telp", "Kualifikasi", "Status Verifikasi"],
      rows: [
        ["VND-001", "PT Maju Bersama", "01.234.567.8-012.000", "info@majubersama.co.id", "Kualifikasi Besar", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Terverifikasi</span>],
        ["VND-002", "CV Logistik Sejahtera", "02.987.654.3-045.000", "contact@logistiksejahtera.com", "Kualifikasi Menengah", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Terverifikasi</span>],
        ["VND-003", "PT Nusantara Tech Solutions", "03.112.233.4-089.000", "sales@nusa-tech.co.id", "Kualifikasi Besar", <span className="px-[8px] py-[2px] bg-[#fef9c3] text-[#854d0e] rounded-full text-[11px] font-medium">Pending Review</span>],
      ]
    },
    "Harga Satuan": {
      headers: ["Kode Barang/Jasa", "Uraian Pekerjaan/Barang", "Satuan", "Harga Satuan Standar", "Tahun", "Status HPS"],
      rows: [
        ["HS-001", "Pengadaan PC Workstation High-End", "Unit", "Rp 18.500.000", "2024", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Disetujui</span>],
        ["HS-002", "Jasa Maintenance Network Router 1th", "Paket", "Rp 45.000.000", "2024", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Disetujui</span>],
      ]
    },
    "Adendum Kontrak": {
      headers: ["No. Adendum", "No. Kontrak Utama", "Nama Paket", "Nilai Perubahan", "Perubahan Waktu", "Status"],
      rows: [
        ["ADD-2024-001", "KTR-2024-001", "Pengadaan Server CTIT 2024", "+ Rp 30.000.000", "Perpanjangan 30 Hari", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Approved</span>],
      ]
    },
    "Evaluasi Vendor": {
      headers: ["No. Evaluasi", "Nama Vendor", "Paket Pekerjaan", "Skor Kinerja", "Predikat", "Status Evaluasi"],
      rows: [
        ["EV-2024-001", "PT Maju Bersama", "Pengadaan Server CTIT 2024", "92.5", "Sangat Baik (A)", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Final</span>],
        ["EV-2024-002", "CV Logistik Sejahtera", "Pengadaan Alat Logistik 2024", "85.0", "Baik (B)", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Final</span>],
      ]
    },
    "TKDN": {
      headers: ["No. Sertifikat", "Nama Paket / Barang", "Vendor", "Persentase TKDN", "Status Sertifikasi"],
      rows: [
        ["TKDN-2024-001", "Pengadaan Server CTIT 2024", "PT Maju Bersama", "43.50%", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Terverifikasi</span>],
        ["TKDN-2024-002", "Pengadaan Alat Logistik 2024", "CV Logistik Sejahtera", "65.20%", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Terverifikasi</span>],
      ]
    },
    "Monitoring KPI": {
      headers: ["No. KPI", "Nama Indikator Kinerja", "Target", "Realisasi", "Capaian (%)", "Status"],
      rows: [
        ["KPI-2024-001", "Ketepatan Waktu Pengadaan (SLA)", "95.0%", "96.8%", "101.9%", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Tercapai</span>],
        ["KPI-2024-002", "Efisiensi Anggaran (HPS vs Kontrak)", "10.0%", "12.4%", "124.0%", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Tercapai</span>],
      ]
    },
    "Monitoring MPPL": {
      headers: ["No. MPPL", "Rencana Mutu & Pelaksanaan", "Unit", "Tanggal Audit", "Temuan Audit", "Status MPPL"],
      rows: [
        ["MPPL-2024-001", "Rencana Mutu Pengadaan Server CTIT", "CTIT", "10-02-2024", "Nihil (Sesuai Spesifikasi)", <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px] font-medium">Complied</span>],
      ]
    }
  };

  const curr = sampleData[title] || {
    headers: ["No.", "ID Document", "Tanggal", "Keterangan", "Status"],
    rows: [["1", \`DOC-\${title}-001\`, "15-01-2024", \`Data \${title} aktif\`, <span className="px-[8px] py-[2px] bg-[#d1fae5] text-[#065f46] rounded-full text-[11px]">Aktif</span>]]
  };

  const filteredRows = curr.rows.filter((r) => r.some((cell) => typeof cell === 'string' && cell.toLowerCase().includes(search.toLowerCase())));

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-white">
      <div className="px-[44px] py-[20px]">
        <h1 className="text-[#252271] text-[36px] font-extrabold leading-normal mb-[0px]">Verification</h1>
        <p className="text-[#99a1af] text-[16px] font-normal mb-[20px]">
          <span>Pengadaan &gt; </span>
          <span className="font-semibold text-[#1e2939]">{title}</span>
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
            <table className="w-full">
              <thead>
                <tr className="bg-[#252271] text-white text-[10.5px] font-medium">
                  {curr.headers.map((h, i) => (
                    <th key={i} className="text-left px-[14px] py-[10px]">{h}</th>
                  ))}
                  <th className="text-center px-[14px] py-[10px]">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((r, i) => (
                  <tr key={i} className="border-b border-[#f3f4f6] text-[12px] hover:bg-[#fafafa] transition-colors">
                    {r.map((cell, j) => (
                      <td key={j} className="px-[14px] py-[12px] text-[#364153]">{cell}</td>
                    ))}
                    <td className="px-[14px] py-[12px] text-center">
                      <button className="flex items-center gap-[4px] text-[#252271] text-[11px] font-medium px-[10px] py-[4px] rounded-[8px] border border-[#252271] hover:bg-[#252271] hover:text-white transition-all duration-150 mx-auto">
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredRows.length === 0 && (
                  <tr><td colSpan={curr.headers.length + 1} className="text-center py-[40px] text-[#94a3b8] text-[13px]">Tidak ada data</td></tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between px-[16px] py-[12px] border-t border-[#f3f4f6] text-[13px] text-[#6a7282]">
            <span>Showing 1 to {filteredRows.length} of {filteredRows.length} entries</span>
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

// Replace PengadaanPlaceholderPage call
code = code.replace(/function PengadaanPlaceholderPage[\s\S]*?^\}/m, subDocComponents);
code = code.replace(/return <PengadaanPlaceholderPage title=\{labels\[subDoc\] \?\? subDoc\} \/>;/, 'return <PengadaanSubDocPage title={labels[subDoc] ?? subDoc} />;');

fs.writeFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', code);
console.log('Injected PengadaanSubDocPage');
