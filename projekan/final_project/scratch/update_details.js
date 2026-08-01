const fs = require('fs');
let code = fs.readFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', 'utf8');

// Replace stepFields in PBJ
const oldPbjStepFields = `  const stepFields: Record<number, { label: string; value: string }[]> = {
    0: [
      { label: "No. SP3", value: "noSp3" in row ? row.noSp3 : "-" },
      { label: "Nama Paket", value: "namaPaket" in row ? row.namaPaket : "-" },
      { label: "Tanggal Mulai", value: "01-03-2024" },
      { label: "Batas Akhir", value: "15-03-2024" },
      { label: "Keterangan", value: "Drafting Rencana Kerja dan Syarat-syarat (RKS)" },
      { label: "Status", value: "Selesai" },
    ],
    1: [{ label: "Keterangan", value: "Pengumpulan calon peserta tender & pendaftaran" }, { label: "Batas Pendaftaran", value: "20-03-2024" }],
    2: [{ label: "Keterangan", value: "Aanwijzing / pemberian penjelasan teknis dokumen lelang" }, { label: "Tanggal", value: "22-03-2024" }],
    3: [{ label: "Keterangan", value: "Pemasukan dokumen penawaran oleh calon penyedia" }, { label: "Tanggal", value: "24-03-2024" }],
    4: [{ label: "Keterangan", value: "Pembukaan dokumen penawaran peserta" }, { label: "Tanggal", value: "25-03-2024" }],
    5: [{ label: "Keterangan", value: "Evaluasi dokumen administrasi, teknis, dan harga" }, { label: "Tanggal", value: "01-04-2024" }],
    6: [{ label: "Keterangan", value: "Klarifikasi dan negosiasi teknis/harga dengan calon pemenang" }, { label: "Tanggal", value: "03-04-2024" }],
    7: [{ label: "Keterangan", value: "Usulan penetapan calon pemenang tender" }, { label: "Tanggal", value: "05-04-2024" }],
    8: [{ label: "Keterangan", value: "Pengumuman resmi pemenang tender" }, { label: "Tanggal", value: "08-04-2024" }],
    9: [{ label: "Keterangan", value: "Masa sanggah hasil pengumuman tender (3 hari kerja)" }, { label: "Tanggal", value: "11-04-2024" }],
    10: [{ label: "Keterangan", value: "Penerbitan Surat Penunjukan Penyedia Barang/Jasa (SPPBJ)" }, { label: "Tanggal", value: "14-04-2024" }],
  };`;

const newPbjStepFields = `  const stepFields: Record<number, { label: string; value: string }[]> = {
    0: [
      { label: "No. SP3", value: "noSp3" in row ? row.noSp3 : "-" },
      { label: "Nama Paket", value: "namaPaket" in row ? row.namaPaket : ("perihal" in row ? row.perihal : "-") },
      { label: "Tanggal Mulai", value: "01-03-2024" },
      { label: "Batas Akhir", value: "15-03-2024" },
      { label: "Penyusun RKS", value: "Tim Pengadaan PBJ / Tim Teknis CTIT" },
      { label: "Dokumen RKS", value: "RKS-2024-V2.pdf (1.8 MB)" },
      { label: "Keterangan", value: "Drafting Rencana Kerja dan Syarat-syarat (RKS) disetujui tim legal." },
      { label: "Status Step", value: "Selesai / Approved" },
    ],
    1: [
      { label: "No. SP3", value: "noSp3" in row ? row.noSp3 : "-" },
      { label: "Calon Peserta", value: "PT Maju Bersama, PT Tech Solution, CV Logistik Sejahtera" },
      { label: "Batas Pendaftaran", value: "20-03-2024" },
      { label: "Kualifikasi Vendor", value: "Non-Kecil / Bidang Teknologi Informasi & Sub-Sistem" },
      { label: "Dokumen Pendaftaran", value: "Form-Pendaftaran-Tender-2024.zip" },
      { label: "Status Step", value: "Selesai" }
    ],
    2: [
      { label: "Lokasi Aanwijzing", value: "Ruang Rapat Utama KCI Kantor Pusat & Online Zoom" },
      { label: "Tanggal Aanwijzing", value: "22-03-2024" },
      { label: "Berita Acara", value: "BA-AANWIJZING-2024.pdf" },
      { label: "Catatan Penjelasan", value: "Spesifikasi Server CPU 64-Core & RAM 128GB terverifikasi" },
      { label: "Status Step", value: "Selesai" }
    ],
    3: [
      { label: "Batas Pemasukan", value: "24-03-2024 15:00 WIB" },
      { label: "Metode Pemasukan", value: "Sistem E-Procurement KCI (Ter-enkripsi)" },
      { label: "Jumlah Dokumen", value: "3 Sampul Dokumen Penawaran Terunggah" },
      { label: "Status Step", value: "Selesai" }
    ],
    4: [
      { label: "Tanggal Pembukaan", value: "25-03-2024" },
      { label: "Tim Pembuka", value: "Panitia PBJ KCI & Tim Pengawas" },
      { label: "Berita Acara Pembukaan", value: "BA-PEMBUKAAN-2024.pdf" },
      { label: "Status Step", value: "Selesai" }
    ],
    5: [
      { label: "Evaluasi Administrasi", value: "Lulus (3 Vendor Memenuhi Syarat)" },
      { label: "Evaluasi Teknis", value: "Lulus (2 Vendor Memenuhi Nilai Ambang Batas 80)" },
      { label: "Evaluasi Harga", value: "Peringkat 1: PT Maju Bersama (Rp 485.000.000)" },
      { label: "Dokumen Hasil Evaluasi", value: "Laporan-Evaluasi-PBJ-2024.pdf" }
    ],
    6: [
      { label: "Peserta Negosiasi", value: "PT Maju Bersama" },
      { label: "Harga Penawaran Awal", value: "Rp 495.000.000" },
      { label: "Harga Kesepakatan Final", value: "Rp 485.000.000" },
      { label: "BA Klarifikasi & Negosiasi", value: "BA-KLARIFIKASI-NEGO-001.pdf" }
    ],
    7: [
      { label: "Calon Pemenang Usulan", value: "PT Maju Bersama" },
      { label: "Nilai Usulan", value: "Rp 485.000.000" },
      { label: "Nota Dinas Usulan", value: "ND-USULAN-PEMENANG-2024.pdf" },
      { label: "Approver Usulan", value: "VP Logistik & Pengadaan KCI" }
    ],
    8: [
      { label: "Pemenang Resmi", value: "PT Maju Bersama" },
      { label: "Tanggal Pengumuman", value: "08-04-2024" },
      { label: "Surat Pengumuman", value: "PENGUMUMAN-PEMENANG-PBJ-001.pdf" }
    ],
    9: [
      { label: "Periode Masa Sanggah", value: "09-04-2024 s/d 11-04-2024 (3 Hari Kerja)" },
      { label: "Hasil Sanggahan", value: "Nihil / Tidak ada sanggahan dari peserta lain" },
      { label: "Status Sanggah", value: "Clear & Clean" }
    ],
    10: [
      { label: "No. SPPBJ", value: "SPPBJ-2024-001" },
      { label: "Tanggal SPPBJ", value: "14-04-2024" },
      { label: "Penerima SPPBJ", value: "Direktur PT Maju Bersama" },
      { label: "Catatan SPPBJ", value: "Peserta wajib menyerahkan Jaminan Pelaksanaan dalam 7 hari kerja" },
      { label: "Status Final", value: "Penunjukan Pemenang Resmi" }
    ],
  };`;

code = code.replace(oldPbjStepFields, newPbjStepFields);

// Replace stepFields in Contract
const oldContractStepFields = `            {activeStep === 0 && (<>
              <div><p className="text-[#737373] text-[11px] font-medium mb-[3px]">No. Kontrak</p><p className="text-[#252271] text-[13px] font-semibold">{row.noKontrak}</p></div>
              <div><p className="text-[#737373] text-[11px] font-medium mb-[3px]">Nama Paket</p><p className="text-[#252271] text-[13px] font-semibold">{row.namaPaket}</p></div>
              <div><p className="text-[#737373] text-[11px] font-medium mb-[3px]">Nilai Kontrak</p><p className="text-[#252271] text-[13px] font-semibold">{row.nilaiKontrak}</p></div>
              <div><p className="text-[#737373] text-[11px] font-medium mb-[3px]">Vendor</p><p className="text-[#252271] text-[13px] font-semibold">{row.vendor}</p></div>
              <div><p className="text-[#737373] text-[11px] font-medium mb-[3px]">Tanggal Mulai</p><p className="text-[#252271] text-[13px] font-semibold">{row.tanggalMulai}</p></div>
              <div><p className="text-[#737373] text-[11px] font-medium mb-[3px]">Tanggal Akhir</p><p className="text-[#252271] text-[13px] font-semibold">{row.tanggalAkhir}</p></div>
            </>)}
            {activeStep !== 0 && (
              <div className="col-span-2">
                <p className="text-[#737373] text-[11px] font-medium mb-[3px]">Keterangan</p>
                <p className="text-[#252271] text-[13px] font-semibold">{CONTRACT_STEPS[activeStep]} — menunggu tindakan</p>
              </div>
            )}`;

const newContractStepFields = `            {(() => {
              const contractFields: Record<number, { label: string; value: string }[]> = {
                0: [
                  { label: "No. Kontrak", value: row.noKontrak },
                  { label: "Nama Paket", value: row.namaPaket },
                  { label: "Nilai Kontrak", value: row.nilaiKontrak },
                  { label: "Vendor", value: row.vendor },
                  { label: "Tanggal Mulai", value: row.tanggalMulai },
                  { label: "Tanggal Akhir", value: row.tanggalAkhir },
                  { label: "Penyusun Draft", value: "Tim Legal & Logistik KCI" },
                  { label: "Dokumen Draft", value: "Draft-Kontrak-V1.docx" }
                ],
                1: [
                  { label: "Jenis Jaminan", value: "Jaminan Pelaksanaan (Performance Bond)" },
                  { label: "Nilai Jaminan (5%)", value: "Rp 25.000.000" },
                  { label: "Bank Penerbit", value: "Bank Mandiri Cabang Juanda" },
                  { label: "Masa Berlaku", value: "01-03-2024 s/d 31-12-2024" }
                ],
                2: [
                  { label: "Hasil Verifikasi", value: "Keabsahan Surat Jaminan Terkonfirmasi Bank Penerbit" },
                  { label: "Status Verifikasi", value: "Valid & Disetujui" },
                  { label: "Verifikator", value: "Tim Finance / Logistik KCI" }
                ],
                3: [
                  { label: "Reviewer Legal", value: "Tim GRC & Legal KCI" },
                  { label: "Catatan Legal", value: "Klausal Denda & Force Majeure Telah Sesuai Standard KCI" },
                  { label: "Status Review", value: "Approved With Clear Conditions" }
                ],
                4: [
                  { label: "Approver", value: "VP Logistik KCI" },
                  { label: "Tanggal Approval", value: "05-03-2024" },
                  { label: "Status Logistik", value: "Approved" }
                ],
                5: [
                  { label: "Approver User", value: "VP CTIT KCI" },
                  { label: "Tanggal Approval", value: "06-03-2024" },
                  { label: "Status User", value: "Approved" }
                ],
                6: [
                  { label: "Approver Legal", value: "VP GRC & Legal KCI" },
                  { label: "Tanggal Approval", value: "07-03-2024" },
                  { label: "Status Legal", value: "Approved Final" }
                ],
                7: [
                  { label: "Penandatangan Vendor", value: "Direktur Utama PT Maju Bersama" },
                  { label: "Tanggal TTD Vendor", value: "08-03-2024" },
                  { label: "Dokumen TTD", value: "Kontrak-Signed-Vendor.pdf" }
                ],
                8: [
                  { label: "Penandatangan KCI", value: "Direktur Keuangan & Logistik KCI" },
                  { label: "Tanggal TTD KCI", value: "10-03-2024" },
                  { label: "Status Kontrak", value: "Aktif & Berlaku Legally Binding" }
                ],
              };
              const currentFields = contractFields[activeStep] || [];
              return currentFields.map((f, idx) => (
                <div key={idx}>
                  <p className="text-[#737373] text-[11px] font-medium mb-[3px]">{f.label}</p>
                  <p className="text-[#252271] text-[13px] font-semibold">{f.value}</p>
                </div>
              ));
            })()}`;

code = code.replace(oldContractStepFields, newContractStepFields);

fs.writeFileSync('c:/Users/ASUS TUF A15/Downloads/KCI-PROJEKAN/projekan/final_project/src/AdminApp.tsx', code);
console.log('Successfully updated step fields!');
