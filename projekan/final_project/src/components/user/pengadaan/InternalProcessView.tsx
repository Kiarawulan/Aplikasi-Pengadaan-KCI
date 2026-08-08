import { useEffect, useMemo, useState } from "react";
import { Download, FileText, LockKeyhole } from "lucide-react";
import { api } from "@/services/api";

type ProcessKind = "pbj" | "contract";

const PBJ_STEPS = [
  "Draft RKS", "Undangan RKS", "Pemasukan Calon Peserta Tender", "Proses Aanwijzing",
  "Pemasukan Dokumen Penawaran", "Evaluasi Penawaran", "Undangan KKN",
  "Kegiatan KKN", "BA Hasil Pelelangan", "Usulan dan Penetapan Calon Pemenang", "Pengumuman Pemenang Tender", "SPR dan Pengantar Jamlak",
];

const CONTRACT_STEPS = [
  "Draft Kontrak", "Performance Bond", "Verifikasi Jaminan Pelaksanaan", "Review Legal",
  "Approval Logistik", "Approval User", "Approval Legal", "Tanda Tangan Vendor", "Tanda Tangan KCI", "Summary Kontrak",
];

const PBJ_FIELDS = [
  ["Rencana Kerja", "Tanggal Rencana Kerja dan Syarat", "Metode Submit Dokumen", "Catatan"],
  ["Peserta Tender", "Catatan Undangan RKS", "Tanggal Undangan RKS", "Nomor Undangan RKS"],
  ["Vendor Information"],
  ["No", "Peserta Tender", "Keterangan", "Tanggal BA Rapat Penjelasan (Aanwijzing & Addendum)", "Nomor BA Rapat Penjelasan (Aanwijzing & Addendum)", "Kehadiran (Ya/Tidak)"],
  ["Peserta Tender", "Tanggal Pembukaan Dokumen", "Nomor BA Pembukaan Dokumen Penawaran", "Catatan"],
  ["Peserta Tender", "Tanggal Evaluasi", "Catatan Evaluasi", "Status Lulus/Gugur (Ya/Tidak)", "Tambahan Catatan Evaluasi", "Tanggal BA Evaluasi Dokumen Penawaran", "Nomor BA Evaluasi Dokumen Penawaran"],
  ["Peserta Tender", "Tanggal Undangan KKN", "Catatan Undangan KKN", "Tanggal Undangan Klarifikasi, Konfirmasi, dan Negosiasi", "Nomor Undangan Klarifikasi, Konfirmasi, dan Negosiasi"],
  ["Peserta Tender", "Tanggal KKN", "Harga Penawaran", "Harga Negosiasi", "Catatan KKN", "Tanggal Berita Acara Klarifikasi, Konfirmasi dan Negosiasi", "Nomor Berita Acara Klarifikasi, Konfirmasi dan Negosiasi"],
  ["Peserta Tender", "Tanggal BA", "Catatan Hasil Pelelangan", "Tanggal BA Hasil Pelelangan", "Nomor BA Hasil Pelelangan"],
  ["Tanggal", "Nomor", "Catatan"],
  ["Tanggal", "Nomor", "Catatan", "Pemenang Tender"],
  ["Pemenang Tender", "Total Hari MPPL", "Nomor SPR", "Nama Penanda Tangan", "Start Jaminan Pelaksanaan", "Total Hari Kalender", "Uncontrolled Days", "Jabatan Penanda Tangan", "Catatan"],
];

const CONTRACT_FIELDS = [
  ["Start Date", "End Date", "Catatan Draft"],
  ["KAI Group (Ya/Tidak)", "Bank", "Cabang", "Tanggal Penerimaan", "No Bank Garansi", "Minimum Jaminan", "Masa Berlaku - Start Date", "Masa Berlaku - End Date", "Jumlah Hari Kalender", "Nilai Jaminan", "Tanggal Terbit Jamlak", "Catatan Performance"],
  ["Start Date", "End Date", "Tanggal Penyerahan", "Catatan"],
  ["Start Date", "End Date", "Catatan"], ["Start Date", "End Date", "Catatan"],
  ["Start Date", "End Date", "Catatan"], ["Start Date", "End Date", "Catatan"],
  ["Start Date", "End Date", "Catatan"], ["Start Date", "End Date", "Catatan"],
  ["No Kontrak", "Tanggal Kontrak", "Total Hari Kalender", "Hari Libur", "Uncontrolled Days", "Total Hari Kerja", "Catatan"],
];

type Props = { kind: ProcessKind; item: any };

export function InternalProcessView({ kind, item }: Props) {
  const steps = kind === "pbj" ? PBJ_STEPS : CONTRACT_STEPS;
  const labels = kind === "pbj" ? PBJ_FIELDS : CONTRACT_FIELDS;
  const [document, setDocument] = useState<any>(null);
  const [uploads, setUploads] = useState<any[]>([]);
  const [viewStep, setViewStep] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    Promise.all([
      api.get(`/step-documents/${kind}`),
      api.get(`/pengadaan/${item.id}/documents`),
    ]).then(([documents, files]) => {
      if (!active) return;
      const stageDocument = (documents.data || []).find((entry: any) => entry.pengadaan_id === item.id) || null;
      const rawProgress = stageDocument?.form_data?.admin_progress || {};
      const progress = rawProgress.schemaVersion === 2 ? rawProgress : { ...rawProgress, activeStep: Number(rawProgress.activeStep) >= 7 ? Number(rawProgress.activeStep) + 1 : Number(rawProgress.activeStep) || 0 };
      setDocument(stageDocument);
      setUploads(files.data?.data || []);
      setViewStep(Math.min(Number(progress.activeStep) || 0, steps.length - 1));
    }).catch(() => {
      if (!active) return;
      setDocument(null);
      setUploads([]);
    }).finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [item.id, kind, steps.length]);

  const rawProgress = document?.form_data?.admin_progress || {};
  const shiftLegacySteps = (record: Record<number, any> = {}) => Object.fromEntries(Object.entries(record).map(([key, value]) => [Number(key) >= 7 ? Number(key) + 1 : Number(key), value]));
  const progress = rawProgress.schemaVersion === 2 ? rawProgress : { ...rawProgress, activeStep: Number(rawProgress.activeStep) >= 7 ? Number(rawProgress.activeStep) + 1 : Number(rawProgress.activeStep) || 0, fieldValues: shiftLegacySteps(rawProgress.fieldValues), customFiles: shiftLegacySteps(rawProgress.customFiles) };
  const processStep = Math.min(Number(progress.activeStep) || 0, steps.length - 1);
  const fieldValues: Record<number, Record<number, string>> = progress.fieldValues || {};
  const customFiles: Record<number, { name: string; size?: string; date?: string }[]> = progress.customFiles || {};
  const vendorRows: Array<{ vendorName?: string; picName?: string; vendorAddress?: string; phoneNumber?: string; emailCorporate?: string; attendance?: string; description?: string; kknDate?: string; offerPrice?: string; negotiatedPrice?: string; kknNote?: string }> = progress.vendorRows || [];

  const fields = useMemo(() => labels[viewStep].map((label, index) => {
    const persisted = fieldValues[viewStep]?.[index];
    const baseValues: Record<string, string | undefined> = {
      "No. PBJ": document?.no_pbj,
      "No. Kontrak": document?.no_kontrak,
      "Nama Paket": document?.nama_paket || document?.paket || item.nama,
      "Nilai Kontrak": document?.nilai || item.nominal,
      "Status Step": document?.status,
      "Status Kontrak": document?.status,
    };
    return { label, value: persisted ?? baseValues[label] ?? "Belum diisi Admin" };
  }), [document, fieldValues, item.nama, item.nominal, labels, viewStep]);

  const attachments = useMemo(() => {
    const uploaded = uploads
      .filter((file: any) => file.stage === `${kind}:${steps[viewStep]}` || (kind === "contract" && viewStep === steps.length - 1 && file.stage === "contract-signed"))
      .map((file: any) => ({ id: file.id, name: file.original_name, size: file.size ? `${Math.max(1, Math.round(file.size / 1024))} KB` : "", date: file.created_at ? new Date(file.created_at).toLocaleDateString("id-ID") : "" }));
    const persisted = (customFiles[viewStep] || []).filter((file) => !uploaded.some((entry) => entry.name === file.name));
    return [...uploaded, ...persisted];
  }, [customFiles, kind, steps, uploads, viewStep]);

  const download = async (file: any) => {
    if (!file.id) return;
    const response = await api.get(`/documents/${file.id}/download`, { responseType: "blob" });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = window.document.createElement("a");
    link.href = url;
    link.download = file.name;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const statusFor = (index: number) => index < processStep
    ? "Selesai"
    : index === processStep
      ? (document?.status === "approved" ? "Selesai" : "Dalam Proses")
      : "Menunggu";

  const processTitle = kind === "pbj" ? "Proses PBJ" : "Proses Contract";
  const documentNumber = kind === "pbj" ? document?.no_pbj : document?.no_kontrak;

  return (
    <div className="bg-[#f8fafc] -m-4 p-4 space-y-4">
      <div className="bg-[#252271] rounded-[16px] p-5 flex items-center justify-between">
        <div>
          <p className="text-white/60 text-[11px]">{processTitle}</p>
          <p className="text-white text-[14px] font-semibold">{document?.nama_paket || document?.paket || item.nama}</p>
          <p className="text-white/70 text-[11px] mt-1">{documentNumber || item.id}</p>
        </div>
        <span className="flex items-center gap-1.5 text-white/80 text-[11px] font-semibold"><LockKeyhole size={13} /> Mode lihat</span>
      </div>

      <div className="bg-white border border-[#e5e7eb] rounded-[16px] p-4 overflow-x-auto">
        <div className="flex min-w-max gap-1">
          {steps.map((step, index) => {
            const current = index === processStep;
            const completed = index < processStep || document?.status === "approved";
            return <button key={step} type="button" onClick={() => setViewStep(index)} className={`w-[112px] text-center text-[10.5px] font-semibold px-2 py-2 rounded-lg transition-colors ${viewStep === index ? "bg-[#252271] text-white" : completed ? "bg-green-50 text-green-700" : current ? "bg-indigo-50 text-[#252271] border border-indigo-200" : "bg-slate-50 text-slate-400"}`}>
              <span className="block text-[9px] mb-1">{index + 1}</span>{step}
            </button>;
          })}
        </div>
      </div>

      <div className="bg-white border border-[#e5e7eb] rounded-[16px] p-5">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div><h3 className="text-[#252271] text-[15px] font-bold">{steps[viewStep]}</h3><p className="text-slate-500 text-[11px] mt-1">Data dan lampiran diisi oleh Admin.</p></div>
          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#e0e7ff] text-[#252271]">Step {viewStep + 1} dari {steps.length}</span>
        </div>
        {loading ? <p className="text-[12px] text-slate-500">Memuat progres...</p> : !document ? <p className="text-[12px] text-slate-500">Proses belum dimulai oleh Admin.</p> : <>
          {kind === "pbj" && viewStep === 2 ? <div className="space-y-4">{vendorRows.length === 0 ? <p className="text-[11.5px] text-slate-500">Belum ada data vendor.</p> : vendorRows.map((vendor, index) => <div key={index} className="border-l-2 border-[#cc0000] pl-4 py-1"><p className="text-[12px] font-bold text-slate-600 mb-3">Vendor Information</p><div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">{[["Vendor Name", vendor.vendorName], ["Phone Number", vendor.phoneNumber], ["PIC Name", vendor.picName], ["Email Corporate", vendor.emailCorporate], ["Vendor Address", vendor.vendorAddress]].map(([label, value]) => <div key={label} className="grid grid-cols-[120px_1fr] gap-3 text-[11.5px]"><span className="font-semibold text-slate-500">{label}:</span><span className="font-medium text-slate-700">{value || "Belum diisi Admin"}</span></div>)}</div></div>)}</div> : kind === "pbj" && viewStep === 3 ? <div className="overflow-x-auto"><table className="w-full min-w-[620px] text-[11.5px]"><thead><tr className="border-b border-slate-200 text-slate-500"><th className="text-left px-2 py-3">NO</th><th className="text-left px-2 py-3">PESERTA TENDER</th><th className="text-center px-2 py-3">KEHADIRAN</th><th className="text-left px-2 py-3">KETERANGAN</th></tr></thead><tbody>{vendorRows.map((vendor, index) => <tr key={index} className="border-b border-slate-100"><td className="px-2 py-3">{index + 1}</td><td className="px-2 py-3">{vendor.vendorName || "Belum diisi Admin"}</td><td className="px-2 py-3 text-center">{vendor.attendance || "Tidak"}</td><td className="px-2 py-3">{vendor.description || "Belum diisi Admin"}</td></tr>)}</tbody></table><div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 mt-4">{fields.filter((field) => !["No", "Peserta Tender", "Keterangan", "Kehadiran (Ya/Tidak)"].includes(field.label)).map((field) => <div key={field.label} className="grid grid-cols-[190px_1fr] gap-3 text-[11.5px]"><span className="font-semibold text-slate-500">{field.label}:</span><span className="font-medium text-slate-700">{field.value}</span></div>)}</div></div> : kind === "pbj" && viewStep === 7 ? <div className="space-y-5 overflow-x-auto"><table className="w-full min-w-[850px] text-[11.5px]"><thead><tr className="border-b border-slate-200 text-slate-500"><th className="text-left px-2 py-3">PESERTA TENDER</th><th className="text-left px-2 py-3">TANGGAL KKN</th><th className="text-left px-2 py-3">HARGA PENAWARAN</th><th className="text-left px-2 py-3">HARGA NEGOSIASI</th><th className="text-left px-2 py-3">CATATAN KKN</th></tr></thead><tbody>{vendorRows.map((vendor, index) => <tr key={index} className="border-b border-slate-100"><td className="px-2 py-3 font-medium">{vendor.vendorName || "Belum diisi Admin"}</td><td className="px-2 py-3">{vendor.kknDate || "Belum diisi Admin"}</td><td className="px-2 py-3">{vendor.offerPrice || "Belum diisi Admin"}</td><td className="px-2 py-3">{vendor.negotiatedPrice || "Belum diisi Admin"}</td><td className="px-2 py-3">{vendor.kknNote || "-"}</td></tr>)}</tbody></table><div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">{fields.slice(5).map((field) => <div key={field.label} className="grid grid-cols-[260px_1fr] gap-3 text-[11.5px]"><span className="font-semibold text-slate-500">{field.label}:</span><span className="font-medium text-slate-700">{field.value}</span></div>)}</div></div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">{fields.filter((field) => field.label !== "No" && field.label !== "No.").map((field) => <div key={field.label} className="grid grid-cols-[170px_1fr] gap-3 py-1 text-[11.5px]"><span className="font-semibold text-slate-500">{field.label}:</span><span className="font-medium text-slate-700 break-words">{field.value}</span></div>)}</div>}
          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-[#252271] text-[12px] font-bold mb-3">Dokumen Lampiran Step Ini</p>
            {attachments.length === 0 ? <p className="text-[11.5px] text-slate-500">Belum ada lampiran pada tahap ini.</p> : <div className="grid grid-cols-1 md:grid-cols-2 gap-3">{attachments.map((file: any) => <div key={`${file.id || "saved"}-${file.name}`} className="flex items-center justify-between gap-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] p-3"><div className="flex min-w-0 items-center gap-2"><FileText size={16} className="text-[#252271] shrink-0" /><div className="min-w-0"><p className="text-[11.5px] text-slate-800 font-semibold truncate">{file.name}</p><p className="text-[10px] text-slate-400">{file.size} {file.date && `• ${file.date}`}</p></div></div>{file.id && <button onClick={() => download(file)} className="shrink-0 flex items-center gap-1 px-2.5 py-1 bg-[#252271] text-white rounded-md text-[10px] font-bold"><Download size={11} /> Unduh</button>}</div>)}</div>}
          </div>
        </>}
      </div>

      <div className="bg-white border border-[#e5e7eb] rounded-[16px] overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-100"><p className="text-slate-500 text-[11px] font-bold uppercase tracking-wide">Riwayat Proses {kind === "pbj" ? "PBJ" : "Kontrak"}</p></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[580px]"><thead><tr className="bg-[#252271] text-white text-[10.5px]"><th className="text-left px-4 py-2">No</th><th className="text-left px-4 py-2">Proses</th><th className="text-left px-4 py-2">Status</th></tr></thead><tbody>{steps.map((step, index) => <tr key={step} className={`border-b border-slate-100 text-[11.5px] ${index === processStep ? "bg-[#eef2ff]" : ""}`}><td className="px-4 py-2.5 text-[#252271] font-semibold">{index + 1}</td><td className="px-4 py-2.5 text-slate-700 font-medium">{step}</td><td className="px-4 py-2.5"><span className={`font-semibold ${index < processStep || document?.status === "approved" ? "text-green-700" : index === processStep ? "text-[#252271]" : "text-slate-400"}`}>{statusFor(index)}</span></td></tr>)}</tbody></table></div>
      </div>
    </div>
  );
}
