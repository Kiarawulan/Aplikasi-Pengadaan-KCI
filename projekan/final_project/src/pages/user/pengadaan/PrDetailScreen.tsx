import { useState, useEffect } from "react";
import { Check, CheckCircle2, ChevronLeft, Clock, Edit2, FileWarning, X, XCircle } from "lucide-react";
import type { Screen, PengadaanItem } from "@/types";
import { PR_MAIN_STEPS } from "@/constants/steps";
import { Breadcrumb } from "@/components/user/layout/Breadcrumb";
import { DetailHeaderCard } from "@/components/user/pengadaan/DetailHeaderCard";
import { StepTracker } from "@/components/user/pengadaan/StepTracker";
import { PrStepContent } from "@/components/user/pengadaan/PrStepContent";
import { PengajuanDanaAttachments, FILES, stageFor } from "@/components/user/pengadaan/PengajuanDanaAttachments";
import { WarningModal } from "@/components/common/WarningModal";
import { PembelianBaruPopup } from "@/components/user/pengadaan/PembelianBaruPopup";
import { api } from "@/services/api";
import { getVerifRecords, addVerifRecord, generateId, getPengujianList, savePengujianList, updatePengadaanItem } from "@/store/dataStore";
import { useAuth } from "@/store/authStore";
import { remindIncompleteFields } from "@/utils/formValidation";


export function PrDetailScreen({ item, fromScreen, onBack, onNavigate, onSelectItem }: { 
  item: PengadaanItem; 
  fromScreen?: string; 
  onBack: () => void; 
  onNavigate: (s: Screen) => void;
  onSelectItem?: (item: PengadaanItem, s: Screen, back?: Screen) => void;
}) {
  if (!item || !item.id) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p className="text-sm font-semibold">Data Pengadaan (PR) tidak ditemukan.</p>
        <button onClick={() => onNavigate("purchase-requisition")} className="mt-4 px-4 py-2 bg-[#252271] text-white text-xs rounded-xl font-bold">
          Kembali ke Purchase Requisition
        </button>
      </div>
    );
  }

  const { currentUser } = useAuth();

  const steps = [...PR_MAIN_STEPS];

  let defaultStepIdx = 0;
  if (fromScreen && (fromScreen.includes("pengujian") || fromScreen === "daftar-pengujian")) {
    const idx = steps.findIndex(s => s.id === "pengujian");
    if (idx !== -1) defaultStepIdx = idx;
  } else if (fromScreen && (fromScreen.includes("pembayaran") || fromScreen.startsWith("pembayaran-"))) {
    const idx = steps.findIndex(s => s.id === "pembayaran");
    if (idx !== -1) defaultStepIdx = idx;
  } else if (item.currentStep === "pengujian") {
    const idx = steps.findIndex(s => s.id === "pengujian");
    if (idx !== -1) defaultStepIdx = idx;
  } else if (item.currentStep === "pembayaran") {
    const idx = steps.findIndex(s => s.id === "pembayaran");
    if (idx !== -1) defaultStepIdx = idx;
  } else {
    const uncompIdx = steps.findIndex(s => !(item.completedSteps || []).includes(s.id as any));
    defaultStepIdx = uncompIdx === -1 ? 0 : uncompIdx;
  }

  const [showPrPaymentModal, setShowPrPaymentModal] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedPaymentType, setSelectedPaymentType] = useState<"Outsource" | "Non-outsource">("Outsource");

  // Load initial sub-step completions from item state or meta
  const [completedSubs, setCompletedSubs] = useState<Set<string>>(() => {
    const s = new Set<string>();
    if (item.formData && item.formData["__meta"] && item.formData["__meta"]["completedSubs"]) {
      try {
        const parsed = JSON.parse(item.formData["__meta"]["completedSubs"]);
        parsed.forEach((x: string) => s.add(x));
      } catch (e) { }
    }
    if (item.completedSteps) {
      item.completedSteps.forEach(cs => {
        const pStep = steps.find(x => x.id === cs);
        pStep?.subSteps?.forEach(sub => s.add(`${cs}.${sub.id}`));
      });
    }
    return s;
  });

  const [activeStepIdx, setActiveStepIdx] = useState(defaultStepIdx);
  const [activeSubIdx, setActiveSubIdx] = useState(0);

  const [allFd, setAllFd] = useState<Record<string, Record<string, string>>>(() => item.formData ?? {});
  const [completedStepIds, setCompletedStepIds] = useState<Set<string>>(() => new Set(item.completedSteps ?? []));
  const [verifStatus, setVerifStatus] = useState<string>("not_submitted");
  const [catatanAdmin, setCatatanAdmin] = useState<string | null>(null);
  const [verifId, setVerifId] = useState<number | null>(null);
  const [pengujianId, setPengujianId] = useState<string | null>(null);
  const [flash, setFlash] = useState(false);
  const [docWarningModal, setDocWarningModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    detail?: string;
    variant: "warning" | "error" | "info" | "duplicate";
  }>({
    isOpen: false,
    title: "",
    message: "",
    variant: "warning",
  });

  // Fetch latest item data on mount
  useEffect(() => {
    api.get(`/pengadaan/${item.id}`).then(res => {
      const fresh = res.data;
      setAllFd(fresh.formData || {});
      setCompletedStepIds(new Set(fresh.completedSteps || []));

      const s = new Set<string>();
      if (fresh.formData && fresh.formData["__meta"] && fresh.formData["__meta"]["completedSubs"]) {
        try { JSON.parse(fresh.formData["__meta"]["completedSubs"]).forEach((x: string) => s.add(x)); } catch (e) { }
      }
      if (fresh.completedSteps) {
        fresh.completedSteps.forEach((cs: string) => {
          const pStep = steps.find(x => x.id === cs);
          pStep?.subSteps?.forEach(sub => s.add(`${cs}.${sub.id}`));
        });
      }
      setCompletedSubs(s);

      let targetIdx = defaultStepIdx;
      if (fromScreen && (fromScreen.includes("pengujian") || fromScreen === "daftar-pengujian")) {
        const pIdx = steps.findIndex(st => st.id === "pengujian");
        if (pIdx !== -1) targetIdx = pIdx;
      } else if (fromScreen && (fromScreen.includes("pembayaran") || fromScreen.startsWith("pembayaran-"))) {
        const pIdx = steps.findIndex(st => st.id === "pembayaran");
        if (pIdx !== -1) targetIdx = pIdx;
      } else {
        const pIdx = steps.findIndex(st => st.id === fresh.currentStep);
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

  const activeStep = steps[activeStepIdx] || steps[0];
  const hasSubSteps = activeStep?.subSteps ? activeStep.subSteps.length > 0 : false;
  const activeSubStep = hasSubSteps ? (activeStep.subSteps[activeSubIdx] || activeStep.subSteps[0]) : null;
  const subId = activeSubStep?.id ?? activeStep?.id ?? "buat-pr";

  // Check verification status from backend & local
  useEffect(() => {
    let isSubscribed = true;
    setVerifStatus("not_submitted");
    setCatatanAdmin(null);
    setVerifId(null);

    const refreshStatus = async () => {
      try {
        const res = await api.get(`/verifikasi?pengadaan_id=${item.id}`);
        if (!isSubscribed) return;
        const list = Array.isArray(res.data) ? res.data : [];

        const matched = list.find((v: any) => {
          if (activeStep.id === "pengajuan-dana") {
            return v.tipe === "pengajuan-dana" || v.tipe === "purchase-requisition" || v.tipe === "park-dokumen";
          }
          if (activeStep.id === "pembayaran") {
            return ["pembayaran", "umd", "outsource", "non-outsource", "payment-request"].includes(v.tipe);
          }
          return v.tipe === activeStep.id;
        });

        if (matched) {
          setVerifStatus(matched.status || "pending");
          setCatatanAdmin(matched.catatan_admin || matched.catatan || null);
          setVerifId(matched.id);
          if (matched.status === "approved") {
            setCompletedStepIds(prev => new Set([...prev, activeStep.id]));
          }
          return;
        }

        if (activeStep.id === "pengujian") {
          try {
            const pujRes = await api.get("/pengujian");
            if (!isSubscribed) return;
            const pujList = Array.isArray(pujRes.data) ? pujRes.data : [];
            const matchedPuj = pujList.find((x: any) => x.pengadaan_id === item.id);
            if (matchedPuj) {
              setPengujianId(matchedPuj.id);
              const statusLower = matchedPuj.status?.toLowerCase();
              if (statusLower === "selesai" || statusLower === "approved" || statusLower === "completed") {
                setVerifStatus("approved");
                setCompletedStepIds(prev => new Set([...prev, "pengujian"]));
              } else {
                setVerifStatus("pending");
              }
              return;
            }
          } catch (e) { }
        }

        setVerifStatus("not_submitted");
      } catch (e) {
        if (isSubscribed) {
          setVerifStatus("not_submitted");
        }
      }
    };

    refreshStatus();
    const timer = window.setInterval(refreshStatus, 10000);
    return () => {
      isSubscribed = false;
      window.clearInterval(timer);
    };
  }, [activeStep.id, item.id]);

  const isDone = (idx: number) => completedStepIds.has(steps[idx].id);
  const isSubDone = (stepId: string, sid: string) => completedSubs.has(`${stepId}.${sid}`);
  const canAccessStep = (idx: number) => idx <= activeStepIdx || isDone(idx);
  const canAccessSub = (sIdx: number) => {
    if (isDone(activeStepIdx)) return true;
    return sIdx <= activeSubIdx || isSubDone(activeStep.id, activeStep.subSteps[sIdx]?.id ?? "");
  };

  const flashSave = (newCompletedSubs?: Set<string>, updatedFd?: Record<string, any>) => {
    setFlash(true);
    const subsToSave = newCompletedSubs || completedSubs;
    const currentFd = updatedFd || allFd;
    const metaFd = { ...currentFd, "__meta": { ...(currentFd["__meta"] || {}), "completedSubs": JSON.stringify(Array.from(subsToSave)) } };
    api.put(`/pengadaan/${item.id}/form-data`, { form_data: metaFd }).catch(() => { });
    setTimeout(() => setFlash(false), 2000);
  };

  const upd = (field: string, val: string) => {
    setAllFd(p => {
      const nextFd = { ...p, [subId]: { ...(p[subId] ?? {}), [field]: val } };
      flashSave(undefined, nextFd);
      return nextFd;
    });
  };
  const fd = allFd[subId] ?? {};

  let isSubmitPoint = hasSubSteps ? activeSubIdx === activeStep.subSteps.length - 1 : true;
  if (activeStep.id === "pembayaran") {
    isSubmitPoint = activeSubIdx === 0; // payment-request harus disetujui sebelum pelunasan
  }

  const goNext = async () => {
    // User PR hanya dapat mengajukan NPP dan Pengajuan Dana. Tahap setelahnya
    // adalah proses internal admin dan bersifat view-only bagi user.
    const userSubmitSteps = ["npp", "pengajuan-dana"];
    const adminOnlySteps = ["sp3", "pbj", "contract"];

    if (!adminOnlySteps.includes(activeStep.id) && !remindIncompleteFields(document.getElementById("pr-active-form"))) return;

    if (activeStep.id === "pengajuan-dana" && isSubmitPoint) {
      try {
        const res = await api.get(`/pengadaan/${item.id}/documents`);
        const docs = Array.isArray(res.data?.data) ? res.data.data : [];
        const uploadedStages = new Set(docs.map((d: any) => d.stage));
        const missing = FILES.pr.filter(
          def => !uploadedStages.has(stageFor("pr", def.key))
        );

        if (missing.length > 0) {
          setDocWarningModal({
            isOpen: true,
            title: "Berkas Pendukung Wajib Diunggah",
            message: `Terdapat ${missing.length} dari ${FILES.pr.length} berkas pendukung pada Pengajuan Dana yang belum diunggah. Seluruh berkas wajib diunggah sebelum dapat melakukan submit atau melanjutkan proses.`,
            detail: "Berkas yang belum diunggah:\n" + missing.map(m => `• ${m.label.replace(/\s*\*/g, '')}`).join("\n"),
            variant: "warning",
          });
          return;
        }
      } catch (err) {
        console.error("Gagal memeriksa dokumen:", err);
      }
    }

    if (userSubmitSteps.includes(activeStep.id) && isSubmitPoint && (verifStatus === "not_submitted" || verifStatus === "revisi" || verifStatus === "rejected")) {
      // Save form data before submitting
      flashSave();

// Submit to Verifikasi Queue!
      api.post(`/pengadaan/${item.id}/submit-step`, {
        stepId: activeStep.id,
        tipe: activeStep.id,
        form_data: allFd
      }).then(() => {
        setVerifStatus("pending");
        setCatatanAdmin(null);
        setCompletedSubs(p => {
          if (!activeSubStep) return p;
          return new Set([...p, `${activeStep.id}.${activeSubStep.id}`]);
        });
      }).catch((err) => {
        console.error("Gagal mengirim verifikasi:", err);
        setDocWarningModal({
          isOpen: true,
          title: "Gagal Mengirim",
          message: err.response?.data?.message || "Gagal mengirim verifikasi.",
          variant: "error",
        });
      });
      return; // Do not advance step yet!
    }

    const isAdminStepApproved = verifStatus === "approved" || item.status?.toLowerCase() === "approved" || completedStepIds.has(activeStep.id);
    if (adminOnlySteps.includes(activeStep.id) && !isAdminStepApproved) return;

    if (activeStep.id === "pengujian" && activeSubStep?.id === "request-pengujian") {
      if (verifStatus === "not_submitted" || verifStatus === "revisi" || verifStatus === "rejected") {
        const p = {
          id: generateId("PUJ"),
          pengadaan_id: item.id,
          nama: item.nama,
          pemohon: currentUser?.name || "User",
          departemen: item.departemen || "CTIT",
          tanggal: new Date().toISOString().split("T")[0],
          status: "pending",
          catatan: "Request pengujian dari Purchase Requisition",
        };
        api.post("/pengujian", p).catch(() => { });
        if (verifId) {
          api.put(`/verifikasi/${verifId}`, { status: "pending", catatan_admin: null }).catch(() => { });
        }
        savePengujianList([...getPengujianList(), p]);
        setVerifStatus("pending");
        setCatatanAdmin(null);
        const curSubId = activeSubStep?.id ?? activeStep.id;
        setCompletedSubs(p => new Set([...p, `${activeStep.id}.${curSubId}`]));
        flashSave();
        return;
      }
      if (verifStatus !== "approved") {
        return; // Cannot advance until pengujian is selesai
      }
    }

    if (activeStep.id === "pengujian" && activeSubStep?.id === "bahp") {
      setShowPrPaymentModal(true);
      return;
    }

    if (hasSubSteps && activeSubIdx < activeStep.subSteps.length - 1) {
      const curSubId = activeSubStep?.id ?? activeStep.id;
      const nextSubs = new Set([...completedSubs, `${activeStep.id}.${curSubId}`]);
      setCompletedSubs(nextSubs);
      setActiveSubIdx(activeSubIdx + 1);
      flashSave(nextSubs);
      return;
    } else if (activeStepIdx < steps.length - 1) {
      if (userSubmitSteps.includes(activeStep.id) && verifStatus !== "approved") {
        return; // Cannot advance if verification required and not approved
      }
      setCompletedStepIds(p => {
        const next = new Set([...p, activeStep.id]);
        api.put(`/pengadaan/${item.id}`, {
          currentStep: steps[activeStepIdx + 1].id,
          completedStepId: activeStep.id
        }).catch(() => { });
        updatePengadaanItem({ ...item, completedSteps: Array.from(next) as any, currentStep: steps[activeStepIdx + 1].id });
        return next;
      });
      const nextSubs = new Set(completedSubs);
      if (activeStep.subSteps && activeStep.subSteps.length > 0) {
        activeStep.subSteps.forEach(s => nextSubs.add(`${activeStep.id}.${s.id}`));
      } else {
        nextSubs.add(activeStep.id);
      }
      setCompletedSubs(nextSubs);
      setActiveStepIdx(activeStepIdx + 1);
      setActiveSubIdx(0);
      flashSave(nextSubs);
      return;
    }
    flashSave();
  };

  const goPrev = () => {
    if (hasSubSteps && activeSubIdx > 0) setActiveSubIdx(activeSubIdx - 1);
    else if (activeStepIdx > 0) { setActiveStepIdx(activeStepIdx - 1); setActiveSubIdx(Math.max(0, steps[activeStepIdx - 1].subSteps.length - 1)); }
  };

  const isFirst = activeStepIdx === 0 && activeSubIdx === 0;
  const isLast = activeStepIdx === steps.length - 1 && (!hasSubSteps || activeSubIdx === activeStep.subSteps.length - 1);

  const getNextLabel = () => {
    if (activeStep.id === "pengujian" && activeSubStep?.id === "request-pengujian") {
      if (verifStatus === "not_submitted") return "Kirim Request";
      if (verifStatus === "pending") return "Menunggu Pengujian";
      return "Lanjut";
    }
    if (activeStep.id === "pengujian" && activeSubStep?.id === "hasil-pengujian") {
      return "Selesai";
    }
    if (!isSubmitPoint) return "Next";
    if (verifStatus === "not_submitted") return "Submit";
    if (verifStatus === "revisi" || verifStatus === "rejected") return "Kirim Ulang Revisi";
    if (verifStatus === "pending") return "Menunggu Verifikasi";
    return "Lanjut";
  };

  const cardHeader = () => {
    if (activeStep.id === "npp") return subId === "buat-npp" ? "NPP — Nota Permintaan Pengadaan" : "Detail NPP";
    if (activeStep.id === "pengajuan-dana") return subId === "buat-pr" ? "Pengajuan Dana" : "Detail Pengajuan Dana";
    if (activeStep.id === "pengujian") return activeStep.subSteps.find(s => s.id === subId)?.label ?? "Pengujian";
    if (activeStep.id === "pembayaran") return activeStep.subSteps.find(s => s.id === subId)?.label ?? "Pembayaran";
    return activeStep.label;
  };

  const handleStepSelect = (idx: number) => {
    const targetStep = steps[idx];
    if (targetStep?.id === "pengujian") {
      setActiveStepIdx(idx);
      setActiveSubIdx(0);
      if (onSelectItem) {
        onSelectItem(item, "pr-detail", "daftar-pengujian");
      }
    } else if (targetStep?.id === "pembayaran") {
      if (verifStatus !== "approved") {
        alert("Pengujian belum diverifikasi Admin. Metode pembayaran belum dapat dipilih.");
        return;
      }
      setShowPrPaymentModal(true);
    } else {
      setActiveStepIdx(idx);
      setActiveSubIdx(0);
    }
  };

  const handleConfirmPrPayment = async (paymentChoice: "Outsource" | "Non-outsource" = selectedPaymentType) => {
    const paymentType = paymentChoice === "Outsource" ? "outsource" : "non-outsource";
    try {
      // Endpoint pembayaran membuat antrean verifikasi Admin dari data yang sama.
      await api.post("/payments", {
        pengadaan_id: item.id,
        payment_type: paymentType,
        form_data: { jenis: paymentChoice },
      });
      setAllFd((previous) => ({
        ...previous,
        pelunasan: { ...(previous.pelunasan || {}), jenis: paymentChoice },
      }));
      setShowPrPaymentModal(false);
    } catch (error: any) {
      alert(error?.response?.data?.message || "Pembayaran belum dapat dibuat. Pastikan pengujian telah diselesaikan Admin.");
      return;
    }
    const targetBack = paymentChoice === "Outsource" ? "pembayaran-outsource" : "pembayaran-non-outsource";
    const paymentStepIndex = steps.findIndex((step) => step.id === "pembayaran");
    if (paymentStepIndex !== -1) {
      setActiveStepIdx(paymentStepIndex);
      setActiveSubIdx(0);
    }
    if (onSelectItem) {
      onSelectItem(item, "pr-detail", targetBack as any);
    } else {
      onNavigate(targetBack as any);
    }
  };

  const openEdit = () => {
    setShowEditPopup(true);
  };

  const handleRevisionSubmit = async (newItem: any) => {
    try {
      const formData = {
        ...allFd,
        ...(newItem.formData || {}),
        "buat-pr": {
          ...(allFd["buat-pr"] || {}),
          ...(newItem.formData || {}),
        },
      };

      await api.put(`/pengadaan/${item.id}`, {
        nama: newItem.nama,
        departemen: newItem.departemen,
        nominal: newItem.nominal,
        form_data: formData,
      });
      await api.post(`/pengadaan/${item.id}/submit-step`, {
        stepId: "pengajuan-dana",
        form_data: formData,
      });

      setAllFd(formData);
      setVerifStatus("pending");
      setCatatanAdmin(null);
      setShowEditPopup(false);
      setFlash(true);
      setTimeout(() => setFlash(false), 3000);
    } catch (err: any) {
      console.error("Gagal mengirim ulang revisi PR:", err);
      alert(err.response?.data?.message || "Gagal menyimpan revisi.");
    }
  };

  const isPengujianDetail = fromScreen === "daftar-pengujian" || fromScreen?.includes("pengujian");
  const isPembayaranDetail = !!fromScreen?.startsWith("pembayaran-");
  const isFocusedProcessDetail = isPengujianDetail || isPembayaranDetail;
  const verifiedTrackerSteps = isFocusedProcessDetail
    ? new Set<string>([
        ...(isPengujianDetail && activeStep.id === "pengujian" && verifStatus === "approved" ? ["pengujian"] : []),
        ...(isPengujianDetail && activeStep.id === "pembayaran" && verifStatus === "approved" ? ["pengujian", "pembayaran"] : []),
        ...(isPembayaranDetail && activeStep.id === "pembayaran" && verifStatus === "approved" ? ["pembayaran"] : []),
      ])
    : completedStepIds;
  const trackerCanAccessStep = (idx: number) => isFocusedProcessDetail
    ? isPembayaranDetail ? steps[idx]?.id === "pembayaran" : steps[idx]?.id === "pengujian" || (steps[idx]?.id === "pembayaran" && verifiedTrackerSteps.has("pengujian"))
    : canAccessStep(idx);

  return (
    <div>
      {isFocusedProcessDetail ? <button type="button" onClick={() => onNavigate("daftar-pengadaan")} className="mb-4 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-[11.5px] font-semibold text-[#252271] hover:bg-slate-50"><ChevronLeft size={14} /> Kembali ke List Pengadaan</button> : <><Breadcrumb segments={[{ label: "Daftar Pengadaan", screen: "daftar-pengadaan" }, { label: "Pengajuan Dana", screen: "purchase-requisition" }, { label: item.nama }]} onNavigate={onNavigate} /><DetailHeaderCard item={item} allFd={allFd} /></>}
      {flash && <div className="mb-3 bg-green-50 border border-green-200 rounded-xl px-4 py-2 flex items-center gap-2"><Check size={12} className="text-green-600" /><span className="text-green-700 text-[11px]">Data berhasil disimpan!</span></div>}

      <div className="flex gap-5 items-start">
        <StepTracker
          steps={steps} activeStepIdx={activeStepIdx} activeSubIdx={activeSubIdx}
          completedStepIds={verifiedTrackerSteps} submittedSubs={isFocusedProcessDetail && verifStatus !== "approved" ? new Set<string>() : completedSubs}
          onSelectStep={handleStepSelect}
          onSelectSub={(sIdx) => setActiveSubIdx(sIdx)}
          canAccessStep={trackerCanAccessStep}
          canAccessSub={canAccessSub}
          visibleFromStepId={isPembayaranDetail ? "pembayaran" : isPengujianDetail ? "pengujian" : undefined}
        />
        <div className="flex-1 min-w-0">
          <div className="rounded-[10px] border border-[#e2e2e2] bg-white overflow-hidden shadow-sm">
            <div className="bg-[#252271] px-4 py-2.5"><p className="text-white font-semibold text-[11.5px]">{cardHeader()}</p></div>
            <div id="pr-active-form" className="p-4">
              {verifStatus === "revisi" && (
                <div className="mb-4 bg-rose-50 border border-rose-200 rounded-xl p-3.5 flex items-start justify-between gap-3">
                  <FileWarning className="text-red-600 shrink-0 mt-0.5" size={16} />
                  <div className="flex-1">
                    <p className="text-[12px] font-bold text-red-900">Perlu Revisi dari Admin</p>
                    <p className="text-[11.5px] text-rose-700 mt-0.5">{catatanAdmin || "Silakan perbaiki data yang diajukan, lalu klik Kirim/Submit kembali."}</p>
                  </div>
                  <button onClick={openEdit} className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-red-600 to-rose-500 text-white rounded-lg text-[11px] font-bold hover:from-red-700 hover:to-rose-600 transition-colors shrink-0">
                    <Edit2 size={12} /> Edit
                  </button>
                </div>
              )}
              {verifStatus === "rejected" && (
                <div className="mb-4 bg-red-50 border border-red-200 rounded-xl p-3.5 flex items-start justify-between gap-3">
                  <XCircle className="text-red-600 shrink-0 mt-0.5" size={16} />
                  <div className="flex-1">
                    <p className="text-[12px] font-bold text-red-900">Ditolak oleh Admin</p>
                    <p className="text-[11.5px] text-red-700 mt-0.5">{catatanAdmin || "Pengajuan Anda ditolak oleh Admin."}</p>
                  </div>
                  <button onClick={openEdit} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white rounded-lg text-[11px] font-bold hover:bg-red-700 transition-colors shrink-0">
                    <Edit2 size={12} /> Edit
                  </button>
                </div>
              )}
              {verifStatus === "pending" && (
                <div className="mb-4 bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start gap-3">
                  <Clock className="text-amber-600 shrink-0 mt-0.5" size={16} />
                  <div>
                    <p className="text-[12px] font-bold text-amber-900">Menunggu Verifikasi Admin</p>
                    <p className="text-[11.5px] text-amber-700 mt-0.5">Pengajuan telah dikirim dan sedang dalam verifikasi oleh Admin.</p>
                  </div>
                </div>
              )}
              {verifStatus === "approved" && (
                <div className="mb-4 bg-green-50 border border-green-200 rounded-xl p-3.5 flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={16} />
                  <div>
                    <p className="text-[12px] font-bold text-green-900">Disetujui oleh Admin</p>
                    <p className="text-[11.5px] text-green-700 mt-0.5">Tahap ini telah disetujui Admin. Anda dapat melanjutkan ke tahap berikutnya.</p>
                  </div>
                </div>
              )}
              <PrStepContent step={activeStep.id} subStepId={subId} allFd={allFd} upd={upd} status={verifStatus} item={item} />
              {activeStep.id === "pengajuan-dana" && <PengajuanDanaAttachments pengadaanId={item.id} flow="pr" />}
            </div>
            <div className="px-4 pb-3.5 pt-3.5 border-t border-[#e2e2e2] flex items-center justify-between">
              <button onClick={goPrev} disabled={isFirst} className="flex items-center gap-1.5 px-4 h-[30px] rounded border border-gray-200 text-[11.5px] text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"><ChevronLeft size={12} /> Kembali</button>
              <div className="flex gap-2">
                <button onClick={() => flashSave()} className="px-4 h-[30px] rounded border border-[#252271] text-[11.5px] text-[#252271] font-medium hover:bg-[#252271]/5">Simpan</button>

                {!isLast ? (
                  <button onClick={goNext} disabled={(["sp3", "pbj", "contract"].includes(activeStep.id) && verifStatus !== "approved" && item.status?.toLowerCase() !== "approved" && !completedStepIds.has(activeStep.id)) || (verifStatus === "pending" && isSubmitPoint) || (activeStep.id === "pengujian" && activeSubStep?.id === "request-pengujian" && verifStatus !== "not_submitted" && verifStatus !== "approved")} className="px-4 h-[30px] rounded text-[11.5px] text-white font-medium bg-[#252271] hover:bg-[#1a1860] disabled:bg-gray-400 disabled:cursor-not-allowed">
                    {getNextLabel()}
                  </button>
                ) : item.status === "Selesai" || completedStepIds.has("contract") ? (
                  <div className="flex gap-2">
                    <button onClick={() => onNavigate("dashboard")} className="flex items-center gap-1.5 px-4 h-[30px] rounded text-[11.5px] text-gray-700 font-medium bg-gray-100 border border-gray-300 hover:bg-gray-200">
                      Kembali ke Dashboard
                    </button>
                    <button
                      disabled={["pengujian", "pembayaran"].includes(activeStep.id) && verifStatus !== "approved"}
                      onClick={() => {
                        if (activeStep.id === "pengujian") {
                          if (verifStatus !== "approved") return;
                          setShowPrPaymentModal(true);
                        } else if (activeStep.id === "pembayaran") {
                          if (verifStatus !== "approved") return;
                          onNavigate("dashboard");
                        } else {
                          const pIdx = steps.findIndex(s => s.id === "pengujian");
                          if (pIdx !== -1) {
                            setActiveStepIdx(pIdx);
                            setActiveSubIdx(0);
                          }
                          if (onSelectItem) {
                            onSelectItem(item, "pr-detail", "daftar-pengujian");
                          } else {
                            onNavigate("daftar-pengujian");
                          }
                        }
                      }}
                      className={`flex items-center gap-1.5 px-4 h-[30px] rounded text-[11.5px] text-white font-medium transition-all ${
                        ["pengujian", "pembayaran"].includes(activeStep.id) && verifStatus !== "approved"
                          ? "bg-gray-300 cursor-not-allowed opacity-60"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                      title={["pengujian", "pembayaran"].includes(activeStep.id) && verifStatus !== "approved" ? "Tahap ini belum diverifikasi oleh Admin" : ""}
                    >
                      <Check size={12} /> {activeStep.id === "pengujian" ? "Lanjut Pembayaran" : activeStep.id === "pembayaran" ? "Pembayaran Selesai!" : "Lanjut ke Pengujian"}
                    </button>
                  </div>
                ) : (
                  <button
                    disabled={["pengujian", "pembayaran"].includes(activeStep.id) && verifStatus !== "approved"}
                    onClick={() => {
                      if (["pengujian", "pembayaran"].includes(activeStep.id) && verifStatus !== "approved") return;
                      setCompletedStepIds(p => {
                        const next = new Set([...p, activeStep.id]);
                        let nextStep = activeStep.id;
                        let nextStatus = "Selesai";
                        if (activeStep.id === "contract") {
                          nextStep = "pengujian";
                          nextStatus = "Proses Pengujian";
                        } else if (activeStep.id === "pengujian") {
                          nextStep = "pembayaran";
                          nextStatus = "Proses Pembayaran";
                        }

                        updatePengadaanItem({ ...item, completedSteps: Array.from(next) as any, currentStep: nextStep, status: nextStatus });
                        return next;
                      });
                      flashSave();
                      if (activeStep.id === "pengujian") {
                        setShowPrPaymentModal(true);
                      }
                    }}
                    className={`flex items-center gap-1.5 px-4 h-[30px] rounded text-[11.5px] text-white font-medium transition-all ${
                      ["pengujian", "pembayaran"].includes(activeStep.id) && verifStatus !== "approved"
                        ? "bg-gray-300 cursor-not-allowed opacity-60"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                    title={["pengujian", "pembayaran"].includes(activeStep.id) && verifStatus !== "approved" ? "Tahap ini belum diverifikasi oleh Admin" : ""}
                  >
                    <Check size={12} /> Selesai
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPrPaymentModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-lg shadow-2xl border border-gray-100 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
              <h3 className="text-[#252271] text-[16px] font-extrabold">Lanjut ke Menu Pembayaran</h3>
              <button onClick={() => setShowPrPaymentModal(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors">
                <X size={16} />
              </button>
            </div>
            <p className="text-[12px] text-gray-600 mb-5 text-center">
              Silakan pilih jenis jalur pembayaran yang akan digunakan:
            </p>
            <div className="grid grid-cols-2 gap-3.5 mb-6">
              <button
                type="button"
                onClick={() => handleConfirmPrPayment("Outsource")}
                className={`flex flex-col items-center justify-center text-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedPaymentType === "Outsource"
                    ? "border-[#252271] bg-[#252271]/5 shadow-sm ring-2 ring-[#252271]/20"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/80"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#252271] flex items-center justify-center mb-2 font-bold text-sm">
                  OS
                </div>
                <p className="text-[13px] font-bold text-gray-900">Outsource</p>
                <p className="text-[10.5px] text-gray-500 mt-1 leading-snug">Pembayaran untuk jasa outsource</p>
              </button>

              <button
                type="button"
                onClick={() => handleConfirmPrPayment("Non-outsource")}
                className={`flex flex-col items-center justify-center text-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedPaymentType === "Non-outsource"
                    ? "border-[#252271] bg-[#252271]/5 shadow-sm ring-2 ring-[#252271]/20"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/80"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-2 font-bold text-sm">
                  NOS
                </div>
                <p className="text-[13px] font-bold text-gray-900">Non Outsource</p>
                <p className="text-[10.5px] text-gray-500 mt-1 leading-snug">Pembayaran barang / non-outsource</p>
              </button>
            </div>

            <div className="flex justify-center pt-2">
              <button
                onClick={() => setShowPrPaymentModal(false)}
                className="px-6 py-2 rounded-xl text-[12px] font-medium border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {showEditPopup && (
        <PembelianBaruPopup
          title="Edit & Kirim Revisi Purchase Requisition"
          submitLabel="Kirim Ulang Revisi →"
          initialData={{
            ...(allFd["buat-pr"] || {}),
            ...(item.formData || {}),
            emailPic: allFd["buat-pr"]?.emailPic || item.formData?.emailPic || currentUser?.email || "",
            divisi: allFd["buat-pr"]?.subUnit || allFd["buat-pr"]?.divisi || item.formData?.subUnit || item.departemen || "",
            judulPermohonan: allFd["buat-pr"]?.judulPermohonan || item.nama || "",
            nominalPermohonan: allFd["buat-pr"]?.nominalPermohonan || item.nominal || "",
            jenisPermohonan: allFd["buat-pr"]?.jenisPermohonan || item.formData?.jenisPermohonan || "",
            detailPermohonan: allFd["buat-pr"]?.detailPermohonan || item.formData?.detailPermohonan || "",
          }}
          initialStep="pengajuan-dana"
          requireChanges
          onClose={() => setShowEditPopup(false)}
          onSubmit={handleRevisionSubmit}
        />
      )}

      <WarningModal
        isOpen={docWarningModal.isOpen}
        title={docWarningModal.title}
        message={docWarningModal.message}
        detail={docWarningModal.detail}
        variant={docWarningModal.variant}
        onClose={() => setDocWarningModal(p => ({ ...p, isOpen: false }))}
      />
    </div>
  );
}

