import { FileText, User, Check, Download } from "lucide-react";
import type { ParkStep } from "../../types";
import { FieldInput } from "../common/FieldInput";
import { FileUploadInput } from "../common/FileUploadInput";
import { SummaryRow } from "../common/SummaryRow";
import { ApprovedBadge } from "../common/ApprovedBadge";
import { getPengujianList } from "../../store/dataStore";
import { Sp3DetailView } from "./Sp3DetailView";

export function PrStepContent({ step, subStepId, allFd, upd, status, item }: {
  step: ParkStep; subStepId: string;
  allFd: Record<string, Record<string, string>>; upd: (k: string, v: string) => void;
  status?: string;
  item?: any;
}) {
  const f = (k: string) => {
    if (allFd[subStepId]?.[k]) return allFd[subStepId][k];
    if (k === 'kurs') return allFd['kurs'] || item?.formData?.kurs || "";
    return "";
  };
  const u = (k: string) => (v: string) => upd(k, v);
  const fdFrom = (subId: string) => {
    const fd = { ...(allFd[subId] ?? {}) };
    if (!fd.kurs) fd.kurs = allFd['kurs'] || item?.formData?.kurs || "";
    return fd;
  };

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
      {status === "approved" && (
        <div className="mt-4 pt-4 border-t border-[#e2e2e2]"><button className="flex items-center gap-2 text-[11.5px] font-medium text-[#252271] hover:underline"><FileText size={13} /> NPP — Lihat Dokumen</button></div>
      )}
    </div>
  );
  if (step === "pengajuan-dana" && subStepId === "buat-pr") {
    const d = fdFrom("buat-pr");
    const isApproved = item?.status === "approved" || item?.status === "Selesai";
    const af = allFd as any;
    return (
      <div>
        <div className="flex items-center gap-2 mb-4">
          <p className="text-[10px] font-semibold text-[#6b6b6b] uppercase tracking-wider">Summary</p>
          {isApproved ? <ApprovedBadge /> : <span className="bg-yellow-100 text-yellow-700 text-[10px] font-semibold px-2 py-0.5 rounded">Menunggu Verifikasi</span>}
        </div>
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px]">
          <SummaryRow label="Judul Permohonan" value={d["judulPermohonan"] || af.judulPermohonan || item?.nama} />
          <SummaryRow label="Email PIC" value={d["emailPic"] || af.emailPic || item?.formData?.emailPic || "—"} />
          <SummaryRow label="Divisi" value={d["subUnit"] || af.subUnit || af.divisi || item?.formData?.subUnit || item?.departemen || "—"} />
          <SummaryRow label="Jenis Permohonan" value={d["jenisPermohonan"] || af.jenisPermohonan || item?.formData?.jenisPermohonan || "—"} />
          <SummaryRow label="Nominal Permohonan" value={d["nominalPermohonan"] || af.nominalPermohonan || item?.nominal} />
          <SummaryRow label="Nominal Konversi" value={d["nominalKonversi"] || af.nominalKonversi || item?.formData?.nominalKonversi || item?.nominal} />
          <SummaryRow label="Detail Permohonan" value={d["detailPermohonan"] || af.detailPermohonan || item?.formData?.detailPermohonan || "—"} />
          <SummaryRow label="Tahun" value={d["tahun"] || af.tahun || item?.formData?.tahun || "2024"} />
        </div>
      </div>
    );
  }
  if (step === "pengajuan-dana" && subStepId === "detail-pr") {
    const af = allFd as any;
    return (
      <div>
        <div className="flex items-center gap-2 mb-4"><p className="text-[10px] font-semibold text-[#6b6b6b] uppercase tracking-wider">Summary</p><StatusDisplay /></div>
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px]">
          <SummaryRow label="Judul Permohonan" value={fdFrom("buat-pr").judulPermohonan || af.judulPermohonan || item?.nama || "Pengadaan Laptop"} />
          <SummaryRow label="Email PIC" value={fdFrom("buat-pr").emailPic || af.emailPic || item?.formData?.emailPic || "namaemail@email.com"} />
          <SummaryRow label="Divisi" value={fdFrom("buat-pr").subUnit || af.subUnit || af.divisi || item?.formData?.subUnit || item?.departemen || "IT"} />
          <SummaryRow label="Jenis Permohonan" value={fdFrom("buat-pr").jenisPermohonan || af.jenisPermohonan || item?.formData?.jenisPermohonan || "Barang"} />
          <SummaryRow label="Nominal Permohonan" value={fdFrom("buat-pr").nominalPermohonan || af.nominalPermohonan || item?.nominal || "Rp 100.000.000"} />
          <SummaryRow label="Nominal Konversi" value={fdFrom("buat-pr").nominalKonversi || af.nominalKonversi || item?.formData?.nominalKonversi || item?.nominal || "Rp 100.000.000"} />
          <SummaryRow label="Detail Permohonan" value={fdFrom("buat-pr").detailPermohonan || af.detailPermohonan || item?.formData?.detailPermohonan || "Lorem ipsum dolor sit amet"} />
          <SummaryRow label="Tahun" value={fdFrom("buat-pr").tahun || af.tahun || item?.formData?.tahun || "2024"} />
        </div>
      </div>
    );
  }
  if (step === "sp3") return (
    <div className="pt-1">
      <Sp3DetailView item={item} />
    </div>
  );
  if (step === "pbj") {
    let pbjStatus = <StatusDisplay />;
    if (status === "pending") pbjStatus = <span className="bg-yellow-100 text-yellow-700 text-[10px] font-semibold px-2 py-0.5 rounded">Menunggu Verifikasi</span>;
    else if (status === "revisi") pbjStatus = <span className="bg-blue-100 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded">Dalam Proses</span>;
    else if (status === "approved") pbjStatus = <span className="bg-green-100 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded">Proses Selesai</span>;

    return (
      <div>
        <div className="flex items-center gap-2 mb-4"><p className="text-[10px] font-semibold text-[#6b6b6b] uppercase tracking-wider">PBJ Details</p>{pbjStatus}</div>
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px]">
          <SummaryRow label="Nomor PBJ" value={fdFrom("pbj").noPbj || "PBJ-2024-001"} />
          <SummaryRow label="Tanggal PBJ" value={fdFrom("pbj").tglPbj || "12 Okt 2024"} />
          <SummaryRow label="Pemenang Tender" value={fdFrom("pbj").pemenang || "PT Vendor IT Sukses"} />
          <SummaryRow label="Nilai Kontrak" value={fdFrom("pbj").nilaiKontrak || "Rp 95.000.000"} />
        </div>
      </div>
    );
  }
  if (step === "contract") {
    let contractStatus = <StatusDisplay />;
    if (status === "pending") contractStatus = <span className="bg-blue-100 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded">Dalam Proses</span>;
    else if (status === "approved") contractStatus = <span className="bg-green-100 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded">Proses Selesai</span>;

    return (
      <div>
        <div className="flex items-center gap-2 mb-4"><p className="text-[10px] font-semibold text-[#6b6b6b] uppercase tracking-wider">Summary</p>{contractStatus}</div>
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px]">
          <SummaryRow label="Judul Pengadaan" value={item?.nama || "Judul Pengadaan"} />
          <SummaryRow label="Email PIC" value={fdFrom("buat-pr").emailPic || "admin@perusahaan.com"} />
          <SummaryRow label="Nominal" value={fdFrom("pbj").nilaiKontrak || item?.nominal || fdFrom("buat-npp").nilaiPr || "Nominal"} />
          <SummaryRow label="Vendor" value={fdFrom("pbj").pemenang || fdFrom("buat-npp").vendor || "Vendor"} />
          <SummaryRow label="COA" value={fdFrom("buat-npp").coa || "-"} />
          <SummaryRow label="Kurs" value={fdFrom("buat-npp").kurs || "IDR"} />
        </div>
        {status === "approved" && (
          <div className="mt-4 pt-4 border-t border-[#e2e2e2]"><button className="flex items-center gap-2 text-[11.5px] font-medium text-[#252271] hover:underline"><FileText size={13} /> Dokumen Contract Final.pdf (Download)</button></div>
        )}
      </div>
    );
  }
  if (step === "pengujian") {
    const pengujianItem = getPengujianList().find(x => x.nama === item?.nama);
    let statusLabel = "Belum Diajukan";
    if (pengujianItem?.status === "selesai") statusLabel = "Selesai Pengujian";
    else if (pengujianItem?.status === "diproses" || pengujianItem?.status === "approved") statusLabel = "Dalam Proses";
    else if (pengujianItem?.status === "pending") statusLabel = "Menunggu Verifikasi";

    if (subStepId === "request-pengujian") {
      const isKurang500 = f("opsiNilai") === "<500jt";
      const isFormDisabled = status === "pending" || status === "approved" || status === "selesai";

      return (
        <fieldset disabled={isFormDisabled} className="space-y-4 border-none p-0 m-0">
          <div className="flex items-center gap-2 mb-2">
            <p className="text-[11.5px] font-semibold text-[#0a0a0a]">Status Verifikasi:</p>
            <StatusDisplay />
          </div>
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
            <FileUploadInput label="Amandemen (Opsional)" pengadaanId={item?.id} stage="amandemen" value={f("fileAmandemen")} onChange={u("fileAmandemen")} />
            
            <FieldInput label="Tanggal Pengujian" type="date" required value={f("tanggalPengujian")} onChange={u("tanggalPengujian")} />
            <FieldInput label="Nomor Delivery Order" type="number" required value={f("noDO")} onChange={u("noDO")} />
            <FieldInput label="Assign To" required value={f("assignTo")} onChange={u("assignTo")} />
            
            <FileUploadInput label="Dokumen MI" required pengadaanId={item?.id} stage="dokumen-mi" value={f("fileMI")} onChange={u("fileMI")} />
            <FileUploadInput label="Surat Permohonan Pengujian" required pengadaanId={item?.id} stage="permohonan-pengujian" value={f("filePermohonan")} onChange={u("filePermohonan")} />
            <FileUploadInput label="Dokumen Pendukung" required pengadaanId={item?.id} stage="dokumen-pendukung" value={f("filePendukung")} onChange={u("filePendukung")} />
            
            {/* Using text area instead of dynamic add file buttons for simplicity */}
            <FieldInput label="Catatan (Opsional)" type="textarea" span2 value={f("catatan")} onChange={u("catatan")} />
          </div>

          {isKurang500 && (
            <div className="pt-4 border-t border-[#e2e2e2] space-y-4">
              <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px]">
                <FieldInput label="Kurs" type="select" required value={f("kurs")} onChange={u("kurs")} />
                <FieldInput label="Nomor Surat Perjanjian" type="number" required value={f("noSuratPerjanjian")} onChange={u("noSuratPerjanjian")} />
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
                  <FieldInput label="No. KAK" type="number" required value={f("noKAK")} onChange={u("noKAK")} />
                  <FieldInput label="Tanggal KAK" type="date" required value={f("tglKAK")} onChange={u("tglKAK")} />
                </div>
              </div>
            </div>
          )}
        </fieldset>
      );
    }
    
    if (subStepId === "hasil-pengujian") return (
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
            <button disabled={statusLabel.toLowerCase() !== 'selesai'} className="flex items-center gap-1.5 bg-[#252271] text-white text-[10px] font-medium px-3 py-1.5 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"><Download size={11} /> Download BAHP</button>
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
    if (subStepId === "pelunasan") {
      const jenis = f("jenis") || "Outsource";
      return (
        <div>
          <p className="text-[11.5px] font-medium mb-2">Jenis Pembayaran<span className="text-[#cc0000] ml-0.5">*</span></p>
          <div className="flex gap-4 mb-4">
            {["Outsource", "Non-outsource", "UMD"].map((opt) => {
              const isSelected = jenis === opt;
              return (
                <label key={opt} className="flex items-center gap-2 cursor-pointer" onClick={() => u("jenis")(opt)}>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isSelected ? "border-[#252271]" : "border-[#aaa]"}`}>{isSelected && <div className="w-2 h-2 rounded-full bg-[#252271]" />}</div>
                  <p className={`text-[11.5px] ${isSelected ? "font-medium" : "text-[#6b6b6b]"}`}>{opt}</p>
                </label>
              );
            })}
          </div>
          <div className="grid grid-cols-1 gap-y-[12px]">
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
               <p className="text-[11.5px] font-medium text-gray-700 mb-2">Pelunasan (Nota dan sebagainya) dari C-Fits</p>
               <button className="flex items-center gap-2 text-[11.5px] font-medium text-[#252271] hover:underline"><Download size={13} /> Download Pelunasan</button>
            </div>
            <FieldInput label="Keterangan" type="textarea" required value={f("keterangan")} onChange={u("keterangan")} />
            
            <div className="flex items-center gap-2">
              <p className="text-[11.5px] font-medium text-[#0a0a0a]">Status:</p>
              <StatusDisplay />
            </div>

            {jenis === "UMD" && (
              <div className="space-y-5 pt-3 border-t border-[#e2e2e2] mt-2">
                {/* SUBMISSION FORM */}
                <div className="bg-gray-50/70 p-3.5 rounded-xl border border-gray-200/80 space-y-3">
                  <p className="text-[11px] font-bold text-[#252271] uppercase tracking-wide">1. Submission Form UMD</p>
                  <div className="grid grid-cols-2 gap-3">
                    <FieldInput label="No Dokumen" placeholder="DOK-2024-xxx" required value={f("noDokumen")} onChange={u("noDokumen")} />
                    <FieldInput label="Bulan UMD" placeholder="Contoh: Maret 2024" required value={f("bulanUmd")} onChange={u("bulanUmd")} />
                    <FieldInput label="Judul" placeholder="Judul UMD..." required value={f("judul") || item.nama} onChange={u("judul")} />
                    <FieldInput label="Nominal" placeholder="15000000" type="number" required value={f("nominal") || item.nominal} onChange={u("nominal")} />
                  </div>
                  <p className="text-[10px] text-gray-400">*Pilih bulan dan masukkan nominal pengajuan UMD</p>
                </div>

                {/* PE & G63 */}
                <div className="bg-gray-50/70 p-3.5 rounded-xl border border-gray-200/80 space-y-3">
                  <p className="text-[11px] font-bold text-[#252271] uppercase tracking-wide">2. Data PE & G63</p>
                  <div className="grid grid-cols-2 gap-3">
                    <FieldInput label="Nomor PE" placeholder="PE-2024-xxx" required value={f("nomorPe")} onChange={u("nomorPe")} />
                    <FieldInput label="Nomor G63" placeholder="0" type="number" required value={f("nomorG63")} onChange={u("nomorG63")} />
                    <FieldInput label="Tanggal G63" type="date" required value={f("tanggalG63")} onChange={u("tanggalG63")} />
                    <FieldInput label="Nominal G63 (Rp)" placeholder="Rp 15.000.000" required value={f("nominalG63")} onChange={u("nominalG63")} />
                    <FieldInput label="Tanggal Cair" type="date" required value={f("tanggalCair")} onChange={u("tanggalCair")} />
                    <FieldInput label="Nomor VA" placeholder="VA-2024-xxx" required value={f("nomorVa")} onChange={u("nomorVa")} />
                  </div>
                </div>

                {/* SYARAT PEMBAYARAN UMD */}
                <div className="bg-gray-50/70 p-3.5 rounded-xl border border-gray-200/80 space-y-3">
                  <p className="text-[11px] font-bold text-[#252271] uppercase tracking-wide">3. Syarat Pembayaran UMD</p>
                  <div className="space-y-2">
                    <FileUploadInput label="Upload Dokumen G64" required value={f("fileG64")} onChange={u("fileG64")} />
                    <FileUploadInput label="Upload Surat Pernyataan" required value={f("fileSuratPernyataanUmd")} onChange={u("fileSuratPernyataanUmd")} />
                    <FileUploadInput label="Upload Surat Pernyataan Keabsahan Dokumen" required value={f("fileKeabsahan")} onChange={u("fileKeabsahan")} />
                  </div>
                </div>

                {/* DOKUMEN TUTUPAN */}
                <div className="bg-gray-50/70 p-3.5 rounded-xl border border-gray-200/80 space-y-3">
                  <p className="text-[11px] font-bold text-[#252271] uppercase tracking-wide">4. Input Dokumen Tutupan</p>
                  <div className="space-y-2">
                    <FileUploadInput label="Dokumen G63 TTD Lengkap" required value={f("fileG63")} onChange={u("fileG63")} />
                    <FileUploadInput label="Lembar G61" required value={f("fileLembarG61")} onChange={u("fileLembarG61")} />
                    <FileUploadInput label="Ceklis Pertanggungjawaban" required value={f("fileCeklis")} onChange={u("fileCeklis")} />
                    <FileUploadInput label="Surat Pernyataan Keaslian Dokumen" required value={f("fileSuratKeaslian")} onChange={u("fileSuratKeaslian")} />
                    <FileUploadInput label="Surat Pernyataan Kebenaran Barang/Jasa" required value={f("fileSuratKebenaran")} onChange={u("fileSuratKebenaran")} />
                    <FileUploadInput label="Nota atau Kwitansi Pertanggungjawaban" required value={f("fileNota")} onChange={u("fileNota")} />
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <FieldInput label="Nominal G61" placeholder="0" type="number" required value={f("nominalG61")} onChange={u("nominalG61")} />
                    <FieldInput label="Sisa UMDS" placeholder="0" type="number" required value={f("sisaUmds")} onChange={u("sisaUmds")} />
                  </div>
                </div>

                {/* CLOSING UMD */}
                <div className="bg-gray-50/70 p-3.5 rounded-xl border border-gray-200/80 space-y-3">
                  <p className="text-[11px] font-bold text-[#252271] uppercase tracking-wide">5. Input Closing UMD</p>
                  <div className="grid grid-cols-2 gap-3">
                    <FieldInput label="Nominal Pajak" placeholder="0" type="number" value={f("nominalPajak")} onChange={u("nominalPajak")} />
                    <FieldInput label="Nominal Pengembalian" placeholder="0" type="number" value={f("nominalPengembalian")} onChange={u("nominalPengembalian")} />
                  </div>
                  <FileUploadInput label="Upload Dokumen A9 Lengkap" required value={f("fileA9")} onChange={u("fileA9")} />
                </div>

                {/* BUKTI PENGEMBALIAN */}
                <div className="bg-[#252271] text-white p-3.5 rounded-xl space-y-3 shadow-md">
                  <p className="text-[11px] font-bold uppercase tracking-wide">6. Input Bukti Pengembalian</p>
                  <div className="bg-white text-gray-800 p-3 rounded-lg">
                    <FileUploadInput label="Upload Bukti Transfer Pengembalian" required value={f("fileBuktiTransfer")} onChange={u("fileBuktiTransfer")} />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <p className="text-[11.5px] font-medium text-[#0a0a0a]">Status Verifikasi Dokumen Tutupan & Closing:</p>
                  <StatusDisplay />
                </div>

                {f("fileG63") && (
                  <button onClick={() => { u("fileG63")(""); u("fileLembarG61")(""); u("fileA9")(""); u("fileBuktiTransfer")(""); }} className="text-red-500 text-[11px] hover:underline w-fit">
                    Reset Files (Jika Revisi)
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }
    if (subStepId === "payment-request") return (
      <div className="grid grid-cols-1 gap-y-[12px]">
        <FileUploadInput label="Input File BAHP dengan TTD" required value={f("fileBahp")} onChange={u("fileBahp")} />
        <FieldInput label="Keterangan" type="textarea" required value={f("keterangan")} onChange={u("keterangan")} />
        <div className="flex items-center gap-2">
          <p className="text-[11.5px] font-medium text-[#0a0a0a]">Status:</p>
          <StatusDisplay />
        </div>
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

