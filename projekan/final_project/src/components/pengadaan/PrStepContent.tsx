import { FileText, User, Check, Download } from "lucide-react";
import type { ParkStep } from "../../types";
import { FieldInput } from "../common/FieldInput";
import { FileUploadInput } from "../common/FileUploadInput";
import { SummaryRow } from "../common/SummaryRow";
import { ApprovedBadge } from "../common/ApprovedBadge";
import { getPengujianList } from "../../store/dataStore";

export function PrStepContent({ step, subStepId, allFd, upd, status, item }: {
  step: ParkStep; subStepId: string;
  allFd: Record<string, Record<string, string>>; upd: (k: string, v: string) => void;
  status?: string;
  item?: any;
}) {
  const f = (k: string) => allFd[subStepId]?.[k] ?? "";
  const u = (k: string) => (v: string) => upd(k, v);
  const fdFrom = (subId: string) => allFd[subId] ?? {};

  if (step === "npp" && subStepId === "buat-npp") return (
    <div>
      <div className="mb-3"><p className="text-[11.5px] font-medium text-[#0a0a0a] mb-1">Realisasi</p><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-[13px] h-[13px] rounded-[2px] border border-[#767676] bg-white shrink-0 cursor-pointer" checked={f("realisasi") === "true"} onChange={(e) => u("realisasi")(e.target.checked ? "true" : "false")} /><p className="text-[11.5px]">Tandai sebagai realisasi</p></label></div>
      <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px]">
        <FieldInput label="Metode" type="select" required value={f("metode")} onChange={u("metode")} />
        <FieldInput label="Vendor Name" placeholder="Nama vendor..." required value={f("vendor")} onChange={u("vendor")} />
        <FieldInput label="Nilai PR" placeholder="0" type="number" required value={f("nilaiPr")} onChange={u("nilaiPr")} />
        <FieldInput label="COA" placeholder="Kode akun..." required value={f("coa")} onChange={u("coa")} />
        <FieldInput label="Jenis Barang" type="select" required value={f("jenisBarang")} onChange={u("jenisBarang")} />
        <FieldInput label="Kurs" type="select" required value={f("kurs")} onChange={u("kurs")} />
        <FieldInput label="Keterangan" placeholder="Keterangan tambahan..." type="textarea" span2 value={f("keterangan")} onChange={u("keterangan")} />
      </div>
    </div>
  );
  const StatusDisplay = () => {
    if (status === "pending") return <span className="bg-yellow-100 text-yellow-700 text-[10px] font-semibold px-2 py-0.5 rounded">Menunggu Verifikasi</span>;
    if (status === "approved") return <ApprovedBadge />;
    if (status === "revisi") return <span className="bg-orange-100 text-orange-700 text-[10px] font-semibold px-2 py-0.5 rounded">Perlu Revisi</span>;
    if (status === "rejected") return <span className="bg-red-100 text-red-700 text-[10px] font-semibold px-2 py-0.5 rounded">Ditolak</span>;
    return <span className="bg-gray-100 text-gray-500 text-[10px] font-semibold px-2 py-0.5 rounded">Draft</span>;
  };

  if (step === "npp" && subStepId === "detail-npp") return (
    <div>
      <div className="flex items-center gap-2 mb-4"><p className="text-[10px] font-semibold text-[#6b6b6b] uppercase tracking-wider">Summary</p><StatusDisplay /></div>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px]">
        <SummaryRow label="Vendor" value={fdFrom("buat-npp").vendor || "PT Pete"} />
        <SummaryRow label="COA" value={fdFrom("buat-npp").coa || "1.234.56.7"} />
        <SummaryRow label="Nilai PR" value={fdFrom("buat-npp").nilaiPr || "Rp 100.000.000"} />
        <SummaryRow label="Kurs" value={fdFrom("buat-npp").kurs || "IDR"} />
        <SummaryRow label="Jenis Barang" value={fdFrom("buat-npp").jenisBarang || "Barang Jadi"} />
        <SummaryRow label="Metode" value={fdFrom("buat-npp").metode || "Pengadaan Langsung"} />
        {fdFrom("buat-npp").keterangan && <SummaryRow label="Keterangan" value={fdFrom("buat-npp").keterangan} />}
      </div>
      <div className="mt-4 pt-4 border-t border-[#e2e2e2]"><button className="flex items-center gap-2 text-[11.5px] font-medium text-[#252271] hover:underline"><FileText size={13} /> NPP — Lihat Dokumen</button></div>
    </div>
  );
  if (step === "pengajuan-dana" && subStepId === "buat-pr") return (
    <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px]">
      <FieldInput label="Email PIC" placeholder="email@perusahaan.com" type="email" required value={f("email")} onChange={u("email")} />
      <FieldInput label="Sub Unit" placeholder="Masukkan sub unit..." required value={f("subUnit")} onChange={u("subUnit")} />
      <FieldInput label="Jenis Permohonan" type="select" required value={f("jenisPermohonan")} onChange={u("jenisPermohonan")} />
      <FieldInput label="Judul Permohonan" placeholder="Judul permohonan..." required value={f("judulPermohonan")} onChange={u("judulPermohonan")} />
      <FieldInput label="Nominal Permohonan" placeholder="0" type="number" required value={f("nominal")} onChange={u("nominal")} />
      <FieldInput label="Nominal Konversi" placeholder="0" type="number" required value={f("nominalKonversi")} onChange={u("nominalKonversi")} />
      <FieldInput label="Detail Permohonan" placeholder="Detail permohonan..." required value={f("detail")} onChange={u("detail")} />
      <FieldInput label="Tahun" type="select" required value={f("tahun")} onChange={u("tahun")} />
    </div>
  );
  if (step === "pengajuan-dana" && subStepId === "detail-pr") return (
    <div>
      <div className="flex items-center gap-2 mb-4"><p className="text-[10px] font-semibold text-[#6b6b6b] uppercase tracking-wider">Summary</p><StatusDisplay /></div>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px]">
        <SummaryRow label="Judul Permohonan" value={fdFrom("buat-pr").judulPermohonan || "Pengadaan Laptop"} />
        <SummaryRow label="Email PIC" value={fdFrom("buat-pr").email || "namaemail@email.com"} />
        <SummaryRow label="Sub Unit" value={fdFrom("buat-pr").subUnit || "IT"} />
        <SummaryRow label="Jenis Permohonan" value={fdFrom("buat-pr").jenisPermohonan || "Barang"} />
        <SummaryRow label="Nominal Permohonan" value={fdFrom("buat-pr").nominal || "Rp 100.000.000"} />
        <SummaryRow label="Nominal Konversi" value={fdFrom("buat-pr").nominalKonversi || "Rp 100.000.000"} />
        <SummaryRow label="Detail Permohonan" value={fdFrom("buat-pr").detail || "Lorem ipsum dolor sit amet"} />
        <SummaryRow label="Tahun" value={fdFrom("buat-pr").tahun || "2024"} />
      </div>
    </div>
  );
  if (step === "sp3") return (
    <div>
      <div className="flex items-center gap-2 mb-4"><p className="text-[10px] font-semibold text-[#6b6b6b] uppercase tracking-wider">Summary</p><StatusDisplay /></div>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px]">
        <SummaryRow label="Judul Pengadaan" value={item?.nama || "Judul Pengadaan"} />
        <SummaryRow label="Vendor" value={fdFrom("buat-npp").vendor || "Vendor NPP"} />
        <SummaryRow label="Nominal" value={item?.nominal || fdFrom("buat-npp").nilaiPr || "Nominal PR"} />
        <SummaryRow label="Kurs" value={fdFrom("buat-npp").kurs || "IDR"} />
        <SummaryRow label="COA" value={fdFrom("buat-npp").coa || "-"} />
        <SummaryRow label="Keterangan" value={fdFrom("buat-npp").keterangan || "-"} />
      </div>
      <div className="mt-4 pt-4 border-t border-[#e2e2e2]"><button className="flex items-center gap-2 text-[11.5px] font-medium text-[#252271] hover:underline"><FileText size={13} /> Dokumen SP3 dari Admin.pdf (Download)</button></div>
    </div>
  );
  if (step === "pbj") return (
    <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px]">
      <FieldInput label="Metode Pengadaan" type="select" required value={f("metode")} onChange={u("metode")} />
      <FieldInput label="Nama Vendor" placeholder="Nama vendor..." required value={f("vendor")} onChange={u("vendor")} />
      <FieldInput label="NPWP Vendor" placeholder="xx.xxx.xxx.x-xxx.xxx" required value={f("npwp")} onChange={u("npwp")} />
      <FieldInput label="Nilai Penawaran" placeholder="0" required value={f("nilai")} onChange={u("nilai")} />
      <FieldInput label="Tanggal Penawaran" type="date" required value={f("tanggal")} onChange={u("tanggal")} />
      <FieldInput label="Keterangan" placeholder="Keterangan tambahan..." type="textarea" span2 value={f("keterangan")} onChange={u("keterangan")} />
    </div>
  );
  if (step === "contract") return (
    <div>
      <div className="flex items-center gap-2 mb-4"><p className="text-[10px] font-semibold text-[#6b6b6b] uppercase tracking-wider">Summary</p><StatusDisplay /></div>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px]">
        <SummaryRow label="Judul Pengadaan" value={item?.nama || "Judul Pengadaan"} />
        <SummaryRow label="Email PIC" value={fdFrom("buat-pr").email || "admin@perusahaan.com"} />
        <SummaryRow label="Nominal" value={fdFrom("pbj").nilai || item?.nominal || fdFrom("buat-npp").nilaiPr || "Nominal"} />
        <SummaryRow label="Vendor" value={fdFrom("pbj").vendor || fdFrom("buat-npp").vendor || "Vendor"} />
        <SummaryRow label="COA" value={fdFrom("buat-npp").coa || "-"} />
        <SummaryRow label="Kurs" value={fdFrom("buat-npp").kurs || "IDR"} />
      </div>
      <div className="mt-4 pt-4 border-t border-[#e2e2e2]"><button className="flex items-center gap-2 text-[11.5px] font-medium text-[#252271] hover:underline"><FileText size={13} /> Dokumen Contract dari Admin.pdf (Download)</button></div>
    </div>
  );
  if (step === "pengujian") {
    const pengujianItem = getPengujianList().find(x => x.nama === item?.nama);
    const statusLabel = pengujianItem?.status ? (pengujianItem.status.charAt(0).toUpperCase() + pengujianItem.status.slice(1)) : "Belum Diajukan";

    if (subStepId === "request-pengujian") {
      const isKurang500 = f("opsiNilai") === "<500jt";
      return (
        <div className="space-y-4">
          <div className="flex gap-4 mb-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" className="w-3.5 h-3.5 accent-[#252271]" checked={f("opsiNilai") === "<500jt"} onChange={() => u("opsiNilai")("<500jt")} />
              <span className="text-[11.5px] font-medium text-[#0a0a0a]">{"<500jt"}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" className="w-3.5 h-3.5 accent-[#252271]" checked={f("opsiNilai") === ">500jt"} onChange={() => u("opsiNilai")(">500jt")} />
              <span className="text-[11.5px] font-medium text-[#0a0a0a]">{">500jt"}</span>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px]">
            <FieldInput label="Judul Pengadaan" disabled value={item?.nama || "Judul Pengadaan"} />
            <FieldInput label="Dokumen Kontrak" disabled value="Tersedia dari tahap sebelumnya" />
            <FieldInput label="Dokumen KAK/RKS" disabled value="Tersedia dari tahap sebelumnya" />
            <FileUploadInput label="Amandemen (Opsional)" value={f("fileAmandemen")} onChange={u("fileAmandemen")} />
            
            <FieldInput label="Tanggal Pengujian" type="date" required value={f("tanggalPengujian")} onChange={u("tanggalPengujian")} />
            <FieldInput label="Nomor Delivery Order" type="number" required value={f("noDO")} onChange={u("noDO")} />
            <FieldInput label="Assign To" required value={f("assignTo")} onChange={u("assignTo")} />
            
            <FileUploadInput label="Dokumen MI" required value={f("fileMI")} onChange={u("fileMI")} />
            <FileUploadInput label="Surat Permohonan Pengujian" required value={f("filePermohonan")} onChange={u("filePermohonan")} />
            <FileUploadInput label="Dokumen Pendukung" required value={f("filePendukung")} onChange={u("filePendukung")} />
            
            {/* Using text area instead of dynamic add file buttons for simplicity */}
            <FieldInput label="Catatan (Opsional)" type="textarea" span2 value={f("catatan")} onChange={u("catatan")} />
          </div>

          {isKurang500 && (
            <div className="pt-4 border-t border-[#e2e2e2] space-y-4">
              <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px]">
                <FieldInput label="Kurs" type="select" required value={f("kurs")} onChange={u("kurs")} />
                <FieldInput label="Nomor Surat Perjanjian" required value={f("noSuratPerjanjian")} onChange={u("noSuratPerjanjian")} />
              </div>

              <div>
                <p className="text-[11.5px] font-bold text-[#1e88e5] mb-2">Dokumen PR, RAB & Justifikasi Barang</p>
                <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px]">
                  <FieldInput label="NO PR/IP" type="number" required value={f("noPR")} onChange={u("noPR")} />
                  <FieldInput label="Tanggal PR/IP" type="date" required value={f("tglPR")} onChange={u("tglPR")} />
                  <FieldInput label="NO. RAB" type="number" required value={f("noRAB")} onChange={u("noRAB")} />
                  <FieldInput label="Tanggal RAB" type="date" required value={f("tglRAB")} onChange={u("tglRAB")} />
                  <FieldInput label="NO. Justifikasi Kebutuhan Barang" type="number" required value={f("noJustifikasi")} onChange={u("noJustifikasi")} />
                  <FieldInput label="Tanggal Justifikasi" type="date" required value={f("tglJustifikasi")} onChange={u("tglJustifikasi")} />
                </div>
              </div>

              <div>
                <p className="text-[11.5px] font-bold text-[#1e88e5] mb-2">Dokumen MI, Justifikasi, Penunjukan KAK & lainnya:</p>
                <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px]">
                  <FieldInput label="No. MI" type="number" required value={f("noMI_500")} onChange={u("noMI_500")} />
                  <FieldInput label="Tanggal MI" type="date" required value={f("tglMI")} onChange={u("tglMI")} />
                  <FieldInput label="Perihal MI" required value={f("perihalMI")} onChange={u("perihalMI")} />
                  <FieldInput label="No. KAK" required value={f("noKAK")} onChange={u("noKAK")} />
                  <FieldInput label="Tanggal KAK" type="date" required value={f("tglKAK")} onChange={u("tglKAK")} />
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
    
    if (subStepId === "proses-pengujian") return (
      <div className="bg-[#f5f5f5] rounded-lg px-4 py-3 border border-[#e2e2e2]">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11.5px] font-semibold">Proses Pengujian</p>
          <span className="text-[10px] bg-white border border-gray-300 px-2 py-0.5 rounded font-medium">{statusLabel}</span>
        </div>
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[10px]">
          <SummaryRow label="Tanggal Pengujian" value={fdFrom("request-pengujian").tanggalPengujian || "Belum ditentukan"} />
          <SummaryRow label="Penguji (Assign To)" value={fdFrom("request-pengujian").assignTo || "Belum ditentukan"} />
          <SummaryRow label="Nomor Delivery Order" value={fdFrom("request-pengujian").noDO || "Belum ditentukan"} />
          <SummaryRow label="Keterangan" value={fdFrom("request-pengujian").catatan || "Tidak ada catatan"} />
        </div>
      </div>
    );
    if (subStepId === "bahp") return (
      <div className="space-y-4">
        <div>
          <p className="text-[11.5px] font-medium text-[#0a0a0a] mb-[5px]">Output BAHP (Dari Admin)</p>
          <div className="flex items-center justify-between bg-[#f9f9f9] border border-[#e2e2e2] rounded px-3 py-2">
            <div><p className="text-[11.5px] font-medium">Draft-BAHP.pdf</p><p className="text-[10px] text-[#6b6b6b]">312 KB</p></div>
            <button className="flex items-center gap-1.5 bg-[#252271] text-white text-[10px] font-medium px-3 py-1.5 rounded"><Download size={11} /> Download BAHP</button>
          </div>
        </div>
        <div className="pt-2 border-t border-[#e2e2e2]">
          <FileUploadInput label="Input File BAHP dengan TTD" required value={f("fileBahpTtd")} onChange={u("fileBahpTtd")} />
        </div>
        <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px]">
          <FieldInput label="Tanggal BAHP" type="date" required value={f("tanggal")} onChange={u("tanggal")} />
          <FieldInput label="Nomor BAHP" placeholder="BAHP-RUP-xxx-xxxx" required value={f("nomor")} onChange={u("nomor")} />
          <FieldInput label="Keterangan" placeholder="Keterangan tambahan..." type="textarea" span2 value={f("keterangan")} onChange={u("keterangan")} />
        </div>
      </div>
    );
  }
  if (step === "pembayaran") {
    if (subStepId === "pelunasan") return (
      <div>
        <p className="text-[11.5px] font-medium mb-2">Jenis Pembayaran<span className="text-[#cc0000] ml-0.5">*</span></p>
        <div className="flex gap-4 mb-4">
          {["Outsource", "Non-Outsource", "UMD"].map((opt) => {
            const isSelected = (f("jenis") || "Outsource") === opt;
            return (
              <label key={opt} className="flex items-center gap-2 cursor-pointer" onClick={() => u("jenis")(opt)}>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isSelected ? "border-[#252271]" : "border-[#aaa]"}`}>{isSelected && <div className="w-2 h-2 rounded-full bg-[#252271]" />}</div>
                <p className={`text-[11.5px] ${isSelected ? "font-medium" : "text-[#6b6b6b]"}`}>{opt}</p>
              </label>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px]">
          <FieldInput label="Nomor Invoice" placeholder="INV-xxxx-xxxx" required value={f("invoice")} onChange={u("invoice")} />
          <FieldInput label="Tanggal Invoice" type="date" required value={f("tanggalInvoice")} onChange={u("tanggalInvoice")} />
          <FieldInput label="Nilai Invoice" placeholder="0" required value={f("nilai")} onChange={u("nilai")} />
          <FieldInput label="Tanggal Jatuh Tempo" type="date" required value={f("jatuhTempo")} onChange={u("jatuhTempo")} />
          <FieldInput label="Keterangan" placeholder="Keterangan tambahan..." type="textarea" span2 value={f("keterangan")} onChange={u("keterangan")} />
        </div>
      </div>
    );
    if (subStepId === "payment-request") return (
      <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px]">
        <FieldInput label="Nomor Payment Request" placeholder="PR-xxxx-xxxx" required value={f("nomor")} onChange={u("nomor")} />
        <FieldInput label="Tanggal Pengajuan" type="date" required value={f("tanggal")} onChange={u("tanggal")} />
        <FieldInput label="Nominal" placeholder="0" required value={f("nominal")} onChange={u("nominal")} />
        <FieldInput label="Bank Tujuan" placeholder="Nama bank..." required value={f("bank")} onChange={u("bank")} />
        <FieldInput label="No. Rekening" placeholder="xxxx-xxxx-xxxx" required value={f("rekening")} onChange={u("rekening")} />
        <FieldInput label="Atas Nama" placeholder="Nama penerima..." required value={f("atasNama")} onChange={u("atasNama")} />
      </div>
    );
    if (subStepId === "proses-selesai") return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check size={28} className="text-green-600" /></div>
        <p className="text-[#0a0a0a] font-semibold text-base mb-2">Proses Pengadaan Selesai</p>
        <p className="text-[#6b6b6b] text-[11.5px] max-w-sm mx-auto">Seluruh tahapan pengadaan telah diselesaikan. Dokumen final tersedia di arsip sistem.</p>
      </div>
    );
  }
  return null;
}

