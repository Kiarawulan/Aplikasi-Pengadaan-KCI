import { useState, useEffect } from "react";
import { ChevronRight, Check, ChevronLeft, Trash2, Download, AlertCircle, Clock, AlertTriangle, Edit2 } from "lucide-react";
import type { Screen, PengadaanItem, VerifStatus } from "@/types";
import { PD_MAIN_STEPS } from "@/constants/steps";
import { Breadcrumb } from "@/components/user/layout/Breadcrumb";
import { StatusBadge } from "@/components/common/StatusBadge";
import { FieldInput } from "@/components/common/FieldInput";
import { FileUploadInput } from "@/components/common/FileUploadInput";
import { SummaryRow } from "@/components/common/SummaryRow";
import { ApprovedBadge } from "@/components/common/ApprovedBadge";
import { DetailHeaderCard } from "@/components/user/pengadaan/DetailHeaderCard";
import { StepTracker } from "@/components/user/pengadaan/StepTracker";
import { PdSubStatus } from "@/components/user/pengadaan/PdSubStatus";
import { PengajuanDanaAttachments } from "@/components/user/pengadaan/PengajuanDanaAttachments";
import { PembelianBaruPopup } from "@/components/user/pengadaan/PembelianBaruPopup";
import { api } from "@/services/api";
import { useAuth } from "@/store/authStore";
import { remindIncompleteFields } from "@/utils/formValidation";


export function PdDetailScreen({ item, fromScreen, onBack, onNavigate, onSelectItem }: { 
  item: PengadaanItem; 
  fromScreen?: string; 
  onBack: () => void; 
  onNavigate: (s: Screen) => void;
  onSelectItem?: (item: PengadaanItem, s: Screen, back?: Screen) => void;
}) {
  if (!item || !item.id) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p className="text-sm font-semibold">Data Park Document tidak ditemukan.</p>
        <button onClick={() => onNavigate("daftar-pengadaan")} className="mt-4 px-4 py-2 bg-[#252271] text-white text-xs rounded-xl font-bold">
          Kembali ke Daftar Pengadaan
        </button>
      </div>
    );
  }

  const steps = [...PD_MAIN_STEPS];

  let defaultStepIdx = 0;
  if (fromScreen && (fromScreen.includes("pembayaran") || fromScreen === "pembayaran-umd")) {
    const idx = steps.findIndex(s => s.id === "pembayaran");
    if (idx !== -1) defaultStepIdx = idx;
  } else if (fromScreen && (fromScreen.includes("pengujian") || fromScreen === "daftar-pengujian")) {
    const idx = steps.findIndex(s => s.id === "pengujian");
    if (idx !== -1) defaultStepIdx = idx;
  } else if (item.currentStep === "pembayaran") {
    const idx = steps.findIndex(s => s.id === "pembayaran");
    if (idx !== -1) defaultStepIdx = idx;
  } else if (item.currentStep === "pengujian") {
    const idx = steps.findIndex(s => s.id === "pengujian");
    if (idx !== -1) defaultStepIdx = idx;
  } else {
    const uncompIdx = steps.findIndex(s => !(item.completedSteps || []).includes(s.id as any));
    defaultStepIdx = uncompIdx === -1 ? 0 : uncompIdx;
  }
  const { currentUser } = useAuth();

  // Load initial submitted subs from item state or meta
  const [submittedSubs, setSubmittedSubs] = useState<Set<string>>(() => {
    const s = new Set<string>();
    if (item.formData && item.formData["__meta"] && item.formData["__meta"]["submittedSubs"]) {
      try {
        const parsed = JSON.parse(item.formData["__meta"]["submittedSubs"]);
        parsed.forEach((x: string) => s.add(x));
      } catch (e) { }
    }
    return s;
  });

  const [activeStepIdx, setActiveStepIdx] = useState(defaultStepIdx);
  const [activeSubIdx, setActiveSubIdx] = useState(() => {
    const step = steps[defaultStepIdx];
    if (!step || !step.subSteps) return 0;

    let firstUncompleted = 0;
    const s = new Set<string>();
    if (item.formData && item.formData["__meta"] && item.formData["__meta"]["submittedSubs"]) {
      try { JSON.parse(item.formData["__meta"]["submittedSubs"]).forEach((x: string) => s.add(x)); } catch (e) { }
    }

    for (let i = 0; i < step.subSteps.length; i++) {
      if (!s.has(`${step.id}.${step.subSteps[i].id}`)) {
        firstUncompleted = i;
        break;
      }
    }
    return firstUncompleted;
  });

  const [completedStepIds, setCompletedStepIds] = useState<Set<string>>(new Set(item.completedSteps || []));
  const [flash, setFlash] = useState(false);
  const [allFd, setAllFd] = useState<Record<string, Record<string, string>>>(item.formData || {});
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleRevisionSubmit = async (newItem: any) => {
    try {
      await api.put(`/pengadaan/${item.id}`, {
        nama: newItem.nama,
        departemen: newItem.departemen,
        nominal: newItem.nominal,
        status: "pending",
        form_data: {
          ...(allFd || {}),
          ...(newItem.formData || {}),
          "buat-pd": {
            ...(allFd["buat-pd"] || {}),
            ...(newItem.formData || {})
          }
        }
      });
      await api.post(`/pengadaan/${item.id}/submit-step`, {
        stepId: "pengajuan-dana",
        form_data: {
          ...(allFd || {}),
          ...(newItem.formData || {}),
        },
      });
      setAllFd(prev => ({
        ...prev,
        ...(newItem.formData || {}),
        "buat-pd": {
          ...(prev["buat-pd"] || {}),
          ...(newItem.formData || {})
        }
      }));
      setShowEditPopup(false);
      setVerifState({ status: "pending", canProceed: false, loading: false });
      fetchStepVerifStatus(activeStep.id);
      setFlash(true);
      setTimeout(() => setFlash(false), 3000);
      alert("Revisi Park Document berhasil disimpan dan dikirim ulang ke Admin!");
    } catch (err: any) {
      console.error(err);
      alert("Gagal menyimpan revisi: " + (err.response?.data?.message || err.message));
    }
  };

  // Fetch latest item data on mount to avoid stale localStorage data
  useEffect(() => {
    api.get(`/pengadaan/${item.id}`).then(res => {
      const fresh = res.data;
      setAllFd(fresh.formData || {});
      setCompletedStepIds(new Set(fresh.completedSteps || []));

      const s = new Set<string>();
      if (fresh.formData && fresh.formData["__meta"] && fresh.formData["__meta"]["submittedSubs"]) {
        try { JSON.parse(fresh.formData["__meta"]["submittedSubs"]).forEach((x: string) => s.add(x)); } catch (e) { }
      }
      setSubmittedSubs(s);

      // Auto-update active steps preserving target step
      let targetIdx = defaultStepIdx;
      if (fromScreen && (fromScreen.includes("pembayaran") || fromScreen === "pembayaran-umd")) {
        const pIdx = steps.findIndex(st => st.id === "pembayaran");
        if (pIdx !== -1) targetIdx = pIdx;
      } else if (fresh.currentStep === "pembayaran") {
        const pIdx = steps.findIndex(st => st.id === "pembayaran");
        if (pIdx !== -1) targetIdx = pIdx;
      } else if (fromScreen && (fromScreen.includes("pengujian") || fromScreen === "daftar-pengujian")) {
        const pIdx = steps.findIndex(st => st.id === "pengujian");
        if (pIdx !== -1) targetIdx = pIdx;
      }
      setActiveStepIdx(targetIdx);

      const step = steps[targetIdx];
      if (step && step.subSteps) {
        let firstUncompleted = 0;
        for (let i = 0; i < step.subSteps.length; i++) {
          if (!s.has(`${step.id}.${step.subSteps[i].id}`)) {
            firstUncompleted = i;
            break;
          }
        }
        setActiveSubIdx(firstUncompleted);
      }
    }).catch(console.error);
  }, [item.id]);

  // Sync state with Admin Verifikasi backend
  const [verifState, setVerifState] = useState<{
    status: VerifStatus | "not_submitted";
    canProceed: boolean;
    catatanAdmin?: string;
    loading: boolean;
  }>({ status: "not_submitted", canProceed: true, loading: false });

  const activeStep = steps[activeStepIdx] || steps[0];
  const hasSubSteps = activeStep?.subSteps ? activeStep.subSteps.length > 0 : false;
  const activeSub = hasSubSteps ? (activeStep.subSteps[activeSubIdx] || activeStep.subSteps[0]) : { id: "buat-pd", label: "Buat PD" };

  const subKey = (stepId: string, subId: string) => `${stepId}.${subId}`;
  const isSubSubmitted = (stepId: string, subId: string) => submittedSubs.has(subKey(stepId, subId));
  const isStepDone = (idx: number) => completedStepIds.has(steps[idx].id);

  const [verifId, setVerifId] = useState<number | null>(null);

  // Fetch verifikasi status for active step from backend API
  const fetchStepVerifStatus = async (stepId: string) => {
    setVerifState(p => ({ ...p, loading: true }));
    try {
      const res = await api.get(`/pengadaan/${item.id}/step-status?stepId=${stepId}`);
      setVerifState({
        status: res.data.status,
        canProceed: res.data.canProceed,
        catatanAdmin: res.data.catatanAdmin,
        loading: false,
      });
      if (res.data.verifikasi?.id) {
        setVerifId(res.data.verifikasi.id);
      } else {
        setVerifId(null);
      }

      if (res.data.status === "approved") {
        setCompletedStepIds(prev => new Set([...prev, stepId]));
      }
    } catch {
      // Fallback
      setVerifState({ status: "not_submitted", canProceed: true, loading: false });
    }
  };

  useEffect(() => {
    fetchStepVerifStatus(activeStep.id);
  }, [item.id, activeStepIdx]);

  const canAccessStep = (idx: number): boolean => {
    if (idx <= activeStepIdx) return true;
    return isStepDone(idx - 1);
  };
  const canAccessSub = (sIdx: number): boolean => {
    if (isStepDone(activeStepIdx)) return true;
    const sub = activeStep.subSteps[sIdx];
    return sIdx <= activeSubIdx || isSubSubmitted(activeStep.id, sub.id);
  };

  const flashSave = (newSubmittedSubs?: Set<string>, updatedFd?: Record<string, any>) => {
    setFlash(true);
    const subsToSave = newSubmittedSubs || submittedSubs;
    const currentFd = updatedFd || allFd;
    const metaFd = { ...currentFd, "__meta": { ...(currentFd["__meta"] || {}), "submittedSubs": JSON.stringify(Array.from(subsToSave)) } };
    api.put(`/pengadaan/${item.id}/form-data`, { form_data: metaFd }).catch(() => { });
    setTimeout(() => setFlash(false), 2000);
  };

  const upd = (subId: string, field: string, val: string) => {
    setAllFd(p => {
      const nextFd = { ...p, [subId]: { ...(p[subId] ?? {}), [field]: val } };
      flashSave(undefined, nextFd);
      return nextFd;
    });
  };
  const fd = (subId: string): Record<string, string> => allFd[subId] ?? {};

  const isDetailPd = activeSub.id === "detail-pd";
  const isCurrentSubmitted = isSubSubmitted(activeStep.id, activeSub.id)
    || (activeSub.id === "pelunasan" && (verifState.status === "pending" || verifState.status === "approved"));
  const isLastSub = activeStepIdx === steps.length - 1 && activeSubIdx === activeStep.subSteps.length - 1;
  const isFirstSub = activeStepIdx === 0 && activeSubIdx === 0;

  const handleSubmit = async () => {
    if (isCurrentSubmitted || isDetailPd) {
      if (activeStep.id === "pengujian" && verifState.status !== "approved") {
        alert("Pengujian belum diverifikasi Admin. Tahap Pembayaran masih terkunci.");
        return;
      }
      // Check if user is allowed to proceed by Admin
      if (!verifState.canProceed && verifState.status === "pending") {
        alert("⚠️ Pengajuan sedang menunggu verifikasi Admin. Anda belum bisa melanjutkan ke tahap berikutnya.");
        return;
      }

      // Lanjut to next
      if (activeSubIdx < activeStep.subSteps.length - 1) {
        setActiveSubIdx(activeSubIdx + 1);
      } else {
        setCompletedStepIds(p => {
          const next = new Set([...p, activeStep.id]);
          return next;
        });
        if (activeStepIdx < steps.length - 1) {
          setActiveStepIdx(activeStepIdx + 1);
          setActiveSubIdx(0);
        }
      }
    } else {
      if (!remindIncompleteFields(document.getElementById("pd-active-form"))) return;
      if (activeStep.id === "pembayaran" && activeSub.id === "payment-request") {
        const nextSubs = new Set([...submittedSubs, subKey(activeStep.id, activeSub.id)]);
        setSubmittedSubs(nextSubs);
        setActiveSubIdx(1);
        flashSave(nextSubs);
        return;
      }
      try {
        if (activeStep.id === 'pembayaran') {
          const umdFormData = { ...allFd, umdData: allFd['umdData'] || {} };
          await api.post('/payments', { pengadaan_id: item.id, payment_type: 'umd', form_data: umdFormData });
        } else {
          await api.post(`/pengadaan/${item.id}/submit-step`, {
            stepId: activeStep.id,
            form_data: allFd,
          });
        }
      } catch (error: any) {
        alert(error.response?.data?.message || "Gagal mengirim pengajuan.");
        return;
      }

      const nextSubs = new Set([...submittedSubs, subKey(activeStep.id, activeSub.id)]);
      setSubmittedSubs(nextSubs);
      setVerifState({ status: "pending", canProceed: false, loading: false });

      // For buat-pd: after submit, auto-advance to detail-pd
      if (activeSub.id === "buat-pd") {
        setActiveSubIdx(1);
      }
      flashSave(nextSubs);
    }
  };

  const goPrev = () => {
    if (activeSubIdx > 0) setActiveSubIdx(activeSubIdx - 1);
    else if (activeStepIdx > 0) { setActiveStepIdx(activeStepIdx - 1); setActiveSubIdx(steps[activeStepIdx - 1].subSteps.length - 1); }
  };

  const cardHeader = (): string => {
    if (activeStep.id === "pengajuan-dana") {
      return activeSub.id === "buat-pd" ? "Park Document — Form Pengajuan" : "Park Document — Detail";
    }
    const labels: Record<string, string> = {
      "payment-request": "Payment Request",
      "nota-dokumen": "Nota Dokumen",
      "dokumen-tutupan": "Dokumen Tutupan",
      "pengembalian-dana": "Pengembalian Dana",
    };
    return labels[activeSub.id] ?? "Pembayaran";
  };

  const showStatusView = (isCurrentSubmitted || isDetailPd) && activeSub.id !== "pengembalian-dana";
  const showSelesai = activeSub.id === "proses-selesai";

  const renderContent = () => {
    if (showSelesai) return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center animate-bounce ring-8 ring-green-100/60"><Check size={28} className="text-green-600" /></div>
          <div>
            <p className="text-lg font-bold text-[#0a0a0a] animate-pulse">Proses Selesai</p>
            <p className="text-[10.5px] text-[#6b6b6b]">Semua proses pembayaran telah selesai diverifikasi oleh Admin</p>
          </div>
        </div>
        <div className="bg-[#fafafa] border border-[#ebebeb] rounded-lg p-4">
          <SummaryRow label="File Pengembalian Dana" value={fd("pengembalian-dana")["filePengembalian"] || fd("pengembalian-dana")["fileBuktiTransfer"] || fd("umdData")["fileBuktiTransfer"] || fd("umdData")["fileBuktiPelunasan"] || fd("umdData")["filePengembalian"] || (item.formData as any)?.fileBuktiPelunasan || (item.formData as any)?.filePengembalian || "—"} />
          {fd("pengembalian-dana")["keterangan"] && <div className="mt-3"><SummaryRow label="Keterangan" value={fd("pengembalian-dana")["keterangan"]} /></div>}
        </div>
        <p className="text-[11px] text-[#6b6b6b] bg-[#f9f9f9] border border-[#e2e2e2] rounded p-3 leading-relaxed">
          Proses Park Document telah selesai. Seluruh pembayaran telah diverifikasi dan disetujui oleh Finance & Admin. Dokumen tersimpan di arsip sistem.
        </p>
        <button onClick={() => onNavigate("dashboard")} className="flex items-center gap-2 px-5 h-[32px] rounded text-[11.5px] text-white font-medium" style={{ background: "linear-gradient(75deg, #e6251c, #ff7676)" }}>
          Back to Dashboard
        </button>
      </div>
    );

    if (showStatusView) {
      if (activeSub.id === "detail-pd") {
        const d = fd("buat-pd");
        const isApproved = verifState.status === "approved";
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <p className="text-[10px] font-semibold text-[#6b6b6b] uppercase tracking-wider">Summary Park Document</p>
              {isApproved ? (
                <ApprovedBadge />
              ) : verifState.status === "revisi" ? (
                <span className="bg-orange-100 text-orange-700 text-[10px] font-semibold px-2 py-0.5 rounded">Perlu Revisi</span>
              ) : verifState.status === "rejected" ? (
                <span className="bg-red-100 text-red-700 text-[10px] font-semibold px-2 py-0.5 rounded">Ditolak</span>
              ) : (
                <span className="bg-yellow-100 text-yellow-700 text-[10px] font-semibold px-2 py-0.5 rounded">Menunggu Verifikasi</span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px]">
              <SummaryRow label="Email PIC" value={d["emailPic"] || item.formData?.emailPic || currentUser?.email || "—"} />
              <SummaryRow label="Divisi" value={d["subUnit"] || item.formData?.subUnit || item.departemen || "—"} />
              <SummaryRow label="Jenis Permohonan" value={d["jenisPermohonan"] || item.formData?.jenisPermohonan || "—"} />
              <SummaryRow label="Judul Permohonan" value={d["judulPermohonan"] || item.nama} />
              <SummaryRow label="Nominal Permohonan" value={d["nominalPermohonan"] || item.nominal} />
              <SummaryRow label="Nominal Konversi" value={d["nominalKonversi"] || item.formData?.nominalKonversi || item.nominal} />
              <SummaryRow label="Detail Permohonan" value={d["detailPermohonan"] || item.formData?.detailPermohonan || "—"} />
              <SummaryRow label="Tahun" value={d["tahun"] || item.formData?.tahun || "2024"} />
            </div>
          </div>
        );
      }
      return <PdSubStatus subId={activeSub.id} data={fd(activeSub.id)} />;
    }

    if (activeSub.id === "buat-pd") {
      const d = fd("buat-pd");
      const isApproved = verifState.status === "approved";
      return (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-[10px] font-semibold text-[#6b6b6b] uppercase tracking-wider">Summary</p>
            {isApproved ? (
              <ApprovedBadge />
            ) : verifState.status === "revisi" ? (
              <span className="bg-orange-100 text-orange-700 text-[10px] font-semibold px-2 py-0.5 rounded">Perlu Revisi</span>
            ) : verifState.status === "rejected" ? (
              <span className="bg-red-100 text-red-700 text-[10px] font-semibold px-2 py-0.5 rounded">Ditolak</span>
            ) : (
              <span className="bg-yellow-100 text-yellow-700 text-[10px] font-semibold px-2 py-0.5 rounded">Menunggu Verifikasi</span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px]">
            <SummaryRow label="Judul Permohonan" value={d["judulPermohonan"] || item.nama} />
            <SummaryRow label="Email PIC" value={d["emailPic"] || currentUser?.email || "—"} />
            <SummaryRow label="Divisi" value={d["subUnit"] || "—"} />
            <SummaryRow label="Jenis Permohonan" value={d["jenisPermohonan"] || "—"} />
            <SummaryRow label="Nominal Permohonan" value={d["nominal"] || item.nominal} />
            <SummaryRow label="Nominal Konversi" value={d["nominalKonversi"] || item.nominal} />
            <SummaryRow label="Detail Permohonan" value={d["detailPermohonan"] || "—"} />
            <SummaryRow label="Tahun" value={d["tahun"] || "2024"} />
          </div>
        </div>
      );
    }
    if (activeStep.id === "pembayaran" && activeSub.id === "payment-request") {
      const d = fd("payment-request");
      const u = (k: string) => (v: string) => upd("payment-request", k, v);
      return <div className="space-y-3"><FileUploadInput label="Input File Payment Request" required value={d["filePaymentRequest"] || ""} onChange={(val) => { u("filePaymentRequest")(val); flashSave(); }} pengadaanId={item.id} stage="payment-request" /><FieldInput label="Keterangan" type="textarea" required value={d["keterangan"] || ""} onChange={u("keterangan")} /></div>;
    }
    if (activeStep.id === "pembayaran" || activeSub.id === "pelunasan") {
      const d = fd("umdData") || fd("pembayaran") || fd("buat-pd") || {};
      const u = (k: string) => (v: string) => upd("umdData", k, v);

      const isSubmitted = verifState.status === "pending" || verifState.status === "approved";

      if (isSubmitted) {
        return (
          <div className="space-y-4">
            <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-[12px] font-bold text-blue-900">Hasil Isian Form UMD</p>
                <p className="text-[10.5px] text-blue-700">Dokumen telah disubmit dan dapat dilihat detailnya oleh Admin di sistem Verification.</p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                verifState.status === "approved" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
              }`}>
                {verifState.status === "approved" ? "✓ Disetujui Admin" : "⏳ Menunggu Verifikasi Admin"}
              </span>
            </div>

            {/* Read only summary for User */}
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-2xs space-y-3">
                <p className="text-[11px] font-bold text-[#252271] uppercase tracking-wide border-b border-gray-100 pb-2">1. Data PE & G63</p>
                <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                  <SummaryRow label="Nomor PE" value={d["nomorPe"] || "PE-2024-001"} />
                  <SummaryRow label="Nomor G63" value={d["nomorG63"] || "G63-2024-089"} />
                  <SummaryRow label="Tanggal G63" value={d["tanggalG63"] || "2024-03-15"} />
                  <SummaryRow label="Nominal G63" value={d["nominalG63"] || item.nominal} />
                  <SummaryRow label="Tanggal Cair" value={d["tanggalCair"] || "2024-03-20"} />
                  <SummaryRow label="Nomor VA" value={d["nomorVa"] || "VA-88291039"} />
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-2xs space-y-3">
                <p className="text-[11px] font-bold text-[#252271] uppercase tracking-wide border-b border-gray-100 pb-2">2. Syarat Pembayaran & Dokumen Tutupan</p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  <SummaryRow label="G64 / Surat Pernyataan" value={d["fileG64"] || d["fileSuratPernyataanUmd"] || "Uploaded ✓"} />
                  <SummaryRow label="Dokumen G63 TTD Lengkap" value={d["fileG63"] || "g63_ttd_lengkap.pdf"} />
                  <SummaryRow label="Lembar G61" value={d["fileLembarG61"] || "lembar_g61.pdf"} />
                  <SummaryRow label="Ceklis Pertanggungjawaban" value={d["fileCeklis"] || "ceklis.pdf"} />
                  <SummaryRow label="Nominal G61" value={d["nominalG61"] || item.nominal} />
                  <SummaryRow label="Sisa UMDS" value={d["sisaUmds"] || "Rp 0"} />
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-2xs space-y-3">
                <p className="text-[11px] font-bold text-[#252271] uppercase tracking-wide border-b border-gray-100 pb-2">3. Closing &amp; Bukti Transfer</p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  <SummaryRow label="Nominal Pajak" value={d["nominalPajak"] || "Rp 0"} />
                  <SummaryRow label="Nominal Pengembalian" value={d["nominalPengembalian"] || "Rp 0"} />
                  <SummaryRow label="Dokumen A9 Lengkap" value={d["fileA9"] || "dokumen_a9.pdf"} />
                  <SummaryRow label="Bukti Transfer Pengembalian" value={d["fileBuktiTransfer"] || d["filePengembalian"] || d["fileBuktiPelunasan"] || (item.formData as any)?.fileBuktiPelunasan || "bukti_transfer.pdf"} />
                </div>
              </div>
            </div>
          </div>
        );
      }

      // Interactive form filling for User
      return (
        <div className="space-y-6">
          {/* 2. DATA PE & G63 */}
          <div className="bg-[#fcfcfd] border border-[#e5e7eb] rounded-xl p-4 space-y-3 shadow-2xs">
            <p className="text-[11.5px] font-bold text-[#252271] uppercase tracking-wide pb-2 border-b border-gray-200/60">1. DATA PE &amp; G63</p>
            <div className="grid grid-cols-2 gap-3">
              <FieldInput label="Nomor PE" placeholder="Contoh: PE-2024-001" required value={d["nomorPe"]} onChange={u("nomorPe")} />
              <FieldInput label="Nomor G63" placeholder="Contoh: G63-2024-089" required value={d["nomorG63"]} onChange={u("nomorG63")} />
              <FieldInput label="Tanggal G63" type="date" required value={d["tanggalG63"]} onChange={u("tanggalG63")} />
              <FieldInput label="Nominal G63 (Rp)" placeholder="0" type="number" required value={d["nominalG63"]} onChange={u("nominalG63")} />
              <FieldInput label="Tanggal Cair" type="date" required value={d["tanggalCair"]} onChange={u("tanggalCair")} />
              <FieldInput label="Nomor VA" placeholder="Contoh: VA-88291039" required value={d["nomorVa"]} onChange={u("nomorVa")} />
            </div>
          </div>

          {/* 3. SYARAT PEMBAYARAN UMD */}
          <div className="bg-[#fcfcfd] border border-[#e5e7eb] rounded-xl p-4 space-y-3 shadow-2xs">
            <p className="text-[11.5px] font-bold text-[#252271] uppercase tracking-wide pb-2 border-b border-gray-200/60">2. SYARAT PEMBAYARAN UMD</p>
            <div className="space-y-2.5">
              <FileUploadInput label="Upload Dokumen G64" required value={d["fileG64"]} onChange={u("fileG64")} />
              <FileUploadInput label="Upload Surat Pernyataan" required value={d["fileSuratPernyataanUmd"]} onChange={u("fileSuratPernyataanUmd")} />
              <FileUploadInput label="Upload Surat Pernyataan Keabsahan Dokumen" required value={d["fileKeabsahan"]} onChange={u("fileKeabsahan")} />
            </div>
          </div>

          {/* 4. INPUT DOKUMEN TUTUPAN */}
          <div className="bg-[#fcfcfd] border border-[#e5e7eb] rounded-xl p-4 space-y-3 shadow-2xs">
            <p className="text-[11.5px] font-bold text-[#252271] uppercase tracking-wide pb-2 border-b border-gray-200/60">3. INPUT DOKUMEN TUTUPAN</p>
            <div className="grid grid-cols-2 gap-3">
              <FileUploadInput label="Dokumen G63 TTD Lengkap" required value={d["fileG63"]} onChange={u("fileG63")} />
              <FileUploadInput label="Lembar G61" required value={d["fileLembarG61"]} onChange={u("fileLembarG61")} />
              <FileUploadInput label="Ceklis Pertanggungjawaban" required value={d["fileCeklis"]} onChange={u("fileCeklis")} />
              <FileUploadInput label="Surat Pernyataan Keaslian Dokumen" required value={d["fileSuratKeaslian"]} onChange={u("fileSuratKeaslian")} />
              <FileUploadInput label="Surat Kebenaran Barang/Jasa" required value={d["fileSuratKebenaran"]} onChange={u("fileSuratKebenaran")} />
              <FileUploadInput label="Nota / Kwitansi Pertanggungjawaban" required value={d["fileNota"]} onChange={u("fileNota")} />
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <FieldInput label="Nominal G61 (Rp)" placeholder="0" type="number" required value={d["nominalG61"]} onChange={u("nominalG61")} />
              <FieldInput label="Sisa UMDS (Rp)" placeholder="0" type="number" required value={d["sisaUmds"]} onChange={u("sisaUmds")} />
            </div>
          </div>

          {/* 5. INPUT CLOSING UMD */}
          <div className="bg-[#fcfcfd] border border-[#e5e7eb] rounded-xl p-4 space-y-3 shadow-2xs">
            <p className="text-[11.5px] font-bold text-[#252271] uppercase tracking-wide pb-2 border-b border-gray-200/60">4. INPUT CLOSING UMD</p>
            <div className="grid grid-cols-2 gap-3">
              <FieldInput label="Nominal Pajak (Rp)" placeholder="0" type="number" value={d["nominalPajak"]} onChange={u("nominalPajak")} />
              <FieldInput label="Nominal Pengembalian (Rp)" placeholder="0" type="number" value={d["nominalPengembalian"]} onChange={u("nominalPengembalian")} />
            </div>
            <FileUploadInput label="Upload Dokumen A9 Lengkap" required value={d["fileA9"]} onChange={u("fileA9")} />
          </div>

          {/* 6. INPUT BUKTI PENGEMBALIAN */}
          <div className="bg-[#252271] text-white p-4 rounded-xl space-y-3 shadow-md">
            <p className="text-[11.5px] font-bold uppercase tracking-wide">6. INPUT BUKTI PENGEMBALIAN DANA</p>
            <div className="bg-white text-gray-800 p-3.5 rounded-lg border border-gray-200">
              <FileUploadInput
                label="Upload Bukti Transfer Pengembalian"
                required
                value={d["fileBuktiTransfer"] || d["filePengembalian"] || d["fileBuktiPelunasan"] || ""}
                onChange={(val) => {
                  u("fileBuktiTransfer")(val);
                  u("filePengembalian")(val);
                  u("fileBuktiPelunasan")(val);
                }}
                pengadaanId={item.id}
                stage="pelunasan-proof"
              />
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const showLanjutBtn = (isCurrentSubmitted || isDetailPd) && !showSelesai;
  const showSubmitBtn = !isCurrentSubmitted && !isDetailPd;

  const isPengujianDetail = fromScreen === "daftar-pengujian" || fromScreen?.includes("pengujian");
  const verifiedTrackerSteps = isPengujianDetail
    ? new Set<string>([
        ...(activeStep.id === "pengujian" && verifState.status === "approved" ? ["pengujian"] : []),
        ...(activeStep.id === "pembayaran" && verifState.status === "approved" ? ["pengujian", "pembayaran"] : []),
      ])
    : completedStepIds;
  const trackerCanAccessStep = (idx: number) => isPengujianDetail
    ? steps[idx]?.id === "pengujian" || (steps[idx]?.id === "pembayaran" && verifiedTrackerSteps.has("pengujian"))
    : canAccessStep(idx);

  return (
    <div>
      {isPengujianDetail ? <button type="button" onClick={() => onNavigate("daftar-pengadaan")} className="mb-4 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-[11.5px] font-semibold text-[#252271] hover:bg-slate-50"><ChevronLeft size={14} /> Kembali ke List Pengadaan</button> : <><Breadcrumb segments={[{ label: "Daftar Pengadaan", screen: "daftar-pengadaan" }, { label: "Park Dokumen", screen: "daftar-pengadaan" }, { label: item.nama }]} onNavigate={onNavigate} /><DetailHeaderCard item={item} allFd={allFd} verifStatus={verifState.status} /></>}

      {/* Synchronized Admin Status Banner */}
      {verifState.status === "pending" && (
        <div className="mb-4 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-center gap-3">
          <Clock size={16} className="text-amber-600 shrink-0 animate-spin" style={{ animationDuration: '3s' }} />
          <div>
            <p className="text-[12px] font-semibold text-amber-800">⏳ Menunggu Verifikasi Admin</p>
            <p className="text-[11px] text-amber-700">Berkas telah dikirim ke Admin. Tombol "Lanjut" dinonaktifkan sampai Admin memberikan persetujuan (Approve).</p>
          </div>
        </div>
      )}

      {verifState.status === "revisi" && (
        <div className="mb-4 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <AlertCircle size={16} className="text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-[12px] font-semibold text-blue-800">📝 Perlu Revisi dari Admin</p>
              <p className="text-[11px] text-blue-700 font-medium mt-0.5">Catatan Admin: "{verifState.catatanAdmin}"</p>
              <p className="text-[10.5px] text-blue-600 mt-1">Perbaiki data atau berkas dan kirim ulang pengajuan Anda.</p>
            </div>
          </div>
          <button
            onClick={() => setShowEditPopup(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-[11px] font-bold hover:bg-blue-700 transition-colors shadow-xs shrink-0"
          >
            <Edit2 size={12} /> Edit & Kirim Revisi
          </button>
        </div>
      )}

      {verifState.status === "rejected" && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-xl px-4 py-3 flex items-start gap-3">
          <AlertTriangle size={16} className="text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-[12px] font-semibold text-red-800">❌ Pengajuan Ditolak Admin</p>
            <p className="text-[11px] text-red-700 font-medium mt-0.5">Alasan: "{verifState.catatanAdmin}"</p>
            <button
              onClick={() => setShowEditPopup(true)}
              className="mt-2 flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white rounded-lg text-[11px] font-bold hover:bg-red-700 transition-colors shadow-xs"
            >
              <Edit2 size={12} /> Edit & Kirim Ulang
            </button>
          </div>
        </div>
      )}

      {verifState.status === "approved" && (
        <div className="mb-4 bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-3">
          <Check size={16} className="text-green-600 shrink-0" />
          <div>
            <p className="text-[12px] font-semibold text-green-800">✅ Disetujui Admin</p>
            <p className="text-[11px] text-green-700">
              {activeStep.id === "pembayaran"
                ? "Pengajuan Pembayaran UMD telah disetujui Admin. Seluruh proses telah selesai."
                : "Pengajuan Park Document telah disetujui Admin."}
            </p>
          </div>
        </div>
      )}

      {flash && (
        <div className="mb-3 bg-green-50 border border-green-200 rounded-xl px-4 py-2 flex items-center gap-2">
          <Check size={12} className="text-green-600" />
          <span className="text-green-700 text-[11px]">Pengajuan berhasil dikirim ke Admin untuk diverifikasi!</span>
        </div>
      )}

      <div className="flex gap-5 items-start">
        <StepTracker
          steps={steps} activeStepIdx={activeStepIdx} activeSubIdx={activeSubIdx}
          completedStepIds={verifiedTrackerSteps} submittedSubs={isPengujianDetail && verifState.status !== "approved" ? new Set<string>() : submittedSubs}
          onSelectStep={(idx) => {
            if (canAccessStep(idx)) {
              setActiveStepIdx(idx);
              setActiveSubIdx(0);
            }
          }}
          onSelectSub={(sIdx) => { if (canAccessSub(sIdx)) setActiveSubIdx(sIdx); }}
          canAccessStep={trackerCanAccessStep}
          canAccessSub={canAccessSub}
          visibleFromStepId={isPengujianDetail ? "pengujian" : undefined}
        />
        <div className="flex-1 min-w-0">
          <div className="rounded-[10px] border border-[#e2e2e2] bg-white overflow-hidden shadow-sm">
            <div className="bg-[#252271] px-4 py-2.5 flex items-center justify-between">
              <p className="text-white font-semibold text-[11.5px]">{cardHeader()}</p>
              {isCurrentSubmitted && activeSub.id !== "detail-pd" && (
                <StatusBadge status={verifState.status === "approved" ? "Selesai" : verifState.status === "revisi" ? "Revisi" : "Menunggu Verifikasi"} />
              )}
            </div>
            <div id="pd-active-form" className="p-4">{renderContent()}{activeStep.id === "pengajuan-dana" && <PengajuanDanaAttachments pengadaanId={item.id} flow="pd" />}</div>
            {!showSelesai && (
              <div className="px-4 pb-3.5 pt-3.5 border-t border-[#e2e2e2] flex items-center justify-between">
                <button onClick={goPrev} disabled={isFirstSub} className="flex items-center gap-1.5 px-4 h-[30px] rounded border border-gray-200 text-[11.5px] text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"><ChevronLeft size={12} /> Kembali</button>
                <div className="flex gap-2">
                  <button onClick={() => flashSave()} className="px-4 h-[30px] rounded border border-[#252271] text-[11.5px] text-[#252271] font-medium hover:bg-[#252271]/5">
                    Simpan
                  </button>

                  {showSubmitBtn && (
                    <button onClick={handleSubmit} className="px-4 h-[30px] rounded text-[11.5px] text-white font-medium bg-[#252271] hover:bg-[#1a1860]">
                      Submit Berkas
                    </button>
                  )}

                  {activeStep.id === "pembayaran" ? (
                    <button
                      disabled={verifState.status !== "approved" && item.status?.toLowerCase() !== "approved" && item.status !== "Selesai"}
                      onClick={async () => {
                        if (verifState.status !== "approved" && item.status?.toLowerCase() !== "approved" && item.status !== "Selesai") return;
                        flashSave();
                        try {
                          await api.put(`/pengadaan/${item.id}`, { status: "Selesai", currentStep: "selesai" });
                        } catch {}
                        onNavigate("dashboard");
                      }}
                      className={`flex items-center gap-1.5 px-4 h-[30px] rounded text-[11.5px] font-bold transition-all shadow-sm ${
                        verifState.status === "approved" || item.status?.toLowerCase() === "approved" || item.status === "Selesai"
                          ? "bg-[#059669] hover:bg-[#047857] text-white cursor-pointer"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"
                      }`}
                      title={verifState.status !== "approved" && item.status?.toLowerCase() !== "approved" && item.status !== "Selesai" ? "Menunggu verifikasi pembayaran dari Admin" : "Selesaikan pembayaran dan kembali ke Dashboard"}
                    >
                      Pembayaran Selesai
                    </button>
                  ) : showLanjutBtn && (
                    <button
                      onClick={handleSubmit}
                      disabled={!verifState.canProceed && verifState.status === "pending"}
                      className={`flex items-center gap-1.5 px-4 h-[30px] rounded text-[11.5px] text-white font-medium transition-all ${!verifState.canProceed && verifState.status === "pending"
                          ? "bg-gray-300 cursor-not-allowed opacity-60"
                          : "bg-[#252271] hover:bg-[#1a1860]"
                        }`}
                      title={!verifState.canProceed && verifState.status === "pending" ? "Menunggu persetujuan Admin" : ""}
                    >
                      Lanjut <ChevronRight size={12} />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showEditPopup && (
        <PembelianBaruPopup
          title="Edit & Kirim Revisi Park Document"
          submitLabel="Kirim Ulang Revisi →"
          initialData={{
            ...(allFd["buat-pd"] || {}),
            ...(item.formData || {}),
            emailPic: allFd["buat-pd"]?.emailPic || item.formData?.emailPic || currentUser?.email || "",
            divisi: allFd["buat-pd"]?.subUnit || allFd["buat-pd"]?.divisi || item.formData?.subUnit || item.departemen || "",
            judulPermohonan: allFd["buat-pd"]?.judulPermohonan || item.nama || "",
            nominalPermohonan: allFd["buat-pd"]?.nominalPermohonan || item.nominal || "",
            jenisPermohonan: allFd["buat-pd"]?.jenisPermohonan || item.formData?.jenisPermohonan || "",
            detailPermohonan: allFd["buat-pd"]?.detailPermohonan || item.formData?.detailPermohonan || ""
          }}
          initialStep="pengajuan-dana"
          requiresRup={false}
          requireChanges
          onClose={() => setShowEditPopup(false)}
          onSubmit={handleRevisionSubmit}
        />
      )}
    </div>
  );
}
