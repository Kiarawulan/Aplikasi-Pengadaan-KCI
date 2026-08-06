import { useState, useEffect } from "react";
import { Check, CheckCircle2, ChevronLeft, Clock, Edit2, FileWarning, X, XCircle } from "lucide-react";
import type { Screen, PengadaanItem } from "@/types";
import { PR_MAIN_STEPS } from "@/constants/steps";
import { Breadcrumb } from "@/components/user/layout/Breadcrumb";
import { DetailHeaderCard } from "@/components/user/pengadaan/DetailHeaderCard";
import { StepTracker } from "@/components/user/pengadaan/StepTracker";
import { PrStepContent } from "@/components/user/pengadaan/PrStepContent";
import { PembelianBaruPopup } from "@/components/user/pengadaan/PembelianBaruPopup";
import { api } from "@/services/api";
import { getVerifRecords, addVerifRecord, generateId, getPengujianList, savePengujianList, updatePengadaanItem } from "@/store/dataStore";
import { useAuth } from "@/store/authStore";


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
    const verifTypes = ["npp", "pengajuan-dana", "sp3", "pbj", "contract", "pembayaran"];
    if (verifTypes.includes(activeStep.id)) {
      const refreshStatus = () => api.get(`/pengadaan/${item.id}/step-status?stepId=${activeStep.id}`).then(res => {
        setVerifStatus(res.data.status);
        setCatatanAdmin(res.data.catatanAdmin || null);
        if (res.data.verifikasi?.id) {
          setVerifId(res.data.verifikasi.id);
        } else {
          setVerifId(null);
        }
        if (res.data.status === "approved") {
          setCompletedStepIds(prev => new Set([...prev, activeStep.id]));
        }
      }).catch(() => {
        setVerifStatus("not_submitted");
        setCatatanAdmin(null);
        setVerifId(null);
      });
      refreshStatus();
      const timer = window.setInterval(refreshStatus, 15000);
      return () => window.clearInterval(timer);
    } else if (activeStep.id === "pengujian") {
      const updatePengujian = (p: any) => {
        if (p) {
          setPengujianId(p.id);
          const statusLower = p.status?.toLowerCase();

          if (statusLower === "selesai" || statusLower === "approved" || statusLower === "completed") {
            setVerifStatus("approved");
          } else if (statusLower === "diproses" || statusLower === "proses") {
            setVerifStatus("approved");
          } else {
            setVerifStatus("pending");
          }

          setCompletedSubs(prev => {
            const next = new Set(prev);
            if (statusLower === "diproses" || statusLower === "approved" || statusLower === "selesai" || statusLower === "completed") {
              next.add("pengujian.request-pengujian");
            }
            if (statusLower === "selesai" || statusLower === "completed") {
              next.add("pengujian.hasil-pengujian");
            }
            return next;
          });

          if (statusLower === "diproses" || statusLower === "approved" || statusLower === "selesai" || statusLower === "completed") {
            setActiveSubIdx(1);
          }
        } else {
          setVerifStatus("not_submitted");
        }
      };

      api.get("/pengujian").then(res => {
        const p = res.data.find((x: any) => x.nama === item.nama);
        updatePengujian(p || getPengujianList().find(x => x.nama === item.nama));
      }).catch(() => {
        updatePengujian(getPengujianList().find(x => x.nama === item.nama));
      });
    } else {
      setVerifStatus("not_submitted");
    }
  }, [activeStep.id, item.id]);

  const isDone = (idx: number) => completedStepIds.has(steps[idx].id);
  const isSubDone = (stepId: string, sid: string) => completedSubs.has(`${stepId}.${sid}`);
  const canAccessStep = (idx: number) => idx <= activeStepIdx || isDone(idx);
  const canAccessSub = (sIdx: number) => {
    if (isDone(activeStepIdx)) return true;
    return sIdx <= activeSubIdx || isSubDone(activeStep.id, activeStep.subSteps[sIdx]?.id ?? "");
  };

  const upd = (field: string, val: string) => setAllFd(p => ({ ...p, [subId]: { ...(p[subId] ?? {}), [field]: val } }));
  const fd = allFd[subId] ?? {};

  const flashSave = (newCompletedSubs?: Set<string>) => {
    setFlash(true);
    const subsToSave = newCompletedSubs || completedSubs;
    const metaFd = { ...allFd, "__meta": { ...allFd["__meta"], "completedSubs": JSON.stringify(Array.from(subsToSave)) } };
    api.put(`/pengadaan/${item.id}/form-data`, metaFd).catch(() => { });
    setTimeout(() => setFlash(false), 2000);
  };

  let isSubmitPoint = hasSubSteps ? activeSubIdx === activeStep.subSteps.length - 1 : true;
  if (activeStep.id === "pembayaran") {
    isSubmitPoint = activeSubIdx === 1; // payment-request
  }

  const goNext = () => {
    // User PR hanya dapat mengajukan NPP dan Pengajuan Dana. Tahap setelahnya
    // adalah proses internal admin dan bersifat view-only bagi user.
    const userSubmitSteps = ["npp", "pengajuan-dana"];
    const adminOnlySteps = ["sp3", "pbj", "contract"];

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
        alert(err.response?.data?.message || "Gagal mengirim verifikasi.");
      });
      return; // Do not advance step yet!
    }

    if (adminOnlySteps.includes(activeStep.id)) return;

    if (activeStep.id === "pengujian" && activeSubStep?.id === "request-pengujian") {
      if (verifStatus === "not_submitted") {
        const p = {
          id: generateId("PUJ"),
          nama: item.nama,
          pemohon: currentUser?.name || "User",
          departemen: item.departemen || "CTIT",
          tanggal: new Date().toISOString().split("T")[0],
          status: "pending",
          catatan: "Request pengujian otomatis dari Purchase Requisition",
        };
        api.post("/pengujian", p).catch(() => { });
        savePengujianList([...getPengujianList(), p]);
        setVerifStatus("pending");
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
      const existingJenis = allFd["pelunasan"]?.jenis;
      const backTarget = existingJenis?.toLowerCase().includes("non") ? "pembayaran-non-outsource" : "pembayaran-outsource";
      setActiveStepIdx(idx);
      setActiveSubIdx(0);
      if (onSelectItem) {
        onSelectItem(item, "pr-detail", backTarget as any);
      }
    } else {
      setActiveStepIdx(idx);
      setActiveSubIdx(0);
    }
  };

  const handleConfirmPrPayment = async () => {
    const paymentType = selectedPaymentType === "Outsource" ? "outsource" : "non-outsource";
    try {
      // Endpoint pembayaran membuat antrean verifikasi Admin dari data yang sama.
      await api.post("/payments", {
        pengadaan_id: item.id,
        payment_type: paymentType,
        form_data: { jenis: selectedPaymentType },
      });
      setAllFd((previous) => ({
        ...previous,
        pelunasan: { ...(previous.pelunasan || {}), jenis: selectedPaymentType },
      }));
      setShowPrPaymentModal(false);
    } catch (error: any) {
      alert(error?.response?.data?.message || "Pembayaran belum dapat dibuat. Pastikan pengujian telah diselesaikan Admin.");
      return;
    }
    const targetBack = selectedPaymentType === "Outsource" ? "pembayaran-outsource" : "pembayaran-non-outsource";
    const pIdx = steps.findIndex(s => s.id === "pembayaran");
    if (pIdx !== -1) {
      setActiveStepIdx(pIdx);
      setActiveSubIdx(0);
    }
    if (onSelectItem) {
      onSelectItem(item, "pr-detail", targetBack as any);
    } else {
      onNavigate(targetBack as any);
    }
  };

  const openEdit = () => {
    if (activeStep.id === "pengajuan-dana") {
      setShowEditPopup(true);
      return;
    }
    // NPP diedit langsung dari formulir tahap pertama.
    setActiveSubIdx(0);
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

  return (
    <div>
      <Breadcrumb segments={[{ label: "Daftar Pengadaan", screen: "daftar-pengadaan" }, { label: "Pengajuan Dana", screen: "purchase-requisition" }, { label: item.nama }]} onNavigate={onNavigate} />
      <DetailHeaderCard item={item} allFd={allFd} />
      {flash && <div className="mb-3 bg-green-50 border border-green-200 rounded-xl px-4 py-2 flex items-center gap-2"><Check size={12} className="text-green-600" /><span className="text-green-700 text-[11px]">Data berhasil disimpan!</span></div>}

      <div className="flex gap-5 items-start">
        <StepTracker
          steps={steps} activeStepIdx={activeStepIdx} activeSubIdx={activeSubIdx}
          completedStepIds={completedStepIds} submittedSubs={completedSubs}
          onSelectStep={handleStepSelect}
          onSelectSub={(sIdx) => setActiveSubIdx(sIdx)}
          canAccessStep={canAccessStep}
          canAccessSub={canAccessSub}
        />
        <div className="flex-1 min-w-0">
          <div className="rounded-[10px] border border-[#e2e2e2] bg-white overflow-hidden shadow-sm">
            <div className="bg-[#252271] px-4 py-2.5"><p className="text-white font-semibold text-[11.5px]">{cardHeader()}</p></div>
            <div className="p-4">
              {verifStatus === "revisi" && (
                <div className="mb-4 bg-purple-50 border border-purple-200 rounded-xl p-3.5 flex items-start justify-between gap-3">
                  <FileWarning className="text-purple-600 shrink-0 mt-0.5" size={16} />
                  <div className="flex-1">
                    <p className="text-[12px] font-bold text-purple-900">Perlu Revisi dari Admin</p>
                    <p className="text-[11.5px] text-purple-700 mt-0.5">{catatanAdmin || "Silakan perbaiki data yang diajukan, lalu klik Kirim/Submit kembali."}</p>
                  </div>
                  <button onClick={openEdit} className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 text-white rounded-lg text-[11px] font-bold hover:bg-purple-700 transition-colors shrink-0">
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
            </div>
            <div className="px-4 pb-3.5 pt-3.5 border-t border-[#e2e2e2] flex items-center justify-between">
              <button onClick={goPrev} disabled={isFirst} className="flex items-center gap-1.5 px-4 h-[30px] rounded border border-gray-200 text-[11.5px] text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"><ChevronLeft size={12} /> Kembali</button>
              <div className="flex gap-2">
                <button onClick={() => flashSave()} className="px-4 h-[30px] rounded border border-[#252271] text-[11.5px] text-[#252271] font-medium hover:bg-[#252271]/5">Simpan</button>

                {!isLast ? (
                  <button onClick={goNext} disabled={(["sp3", "pbj", "contract"].includes(activeStep.id)) || (verifStatus === "pending" && isSubmitPoint) || (activeStep.id === "pengujian" && activeSubStep?.id === "request-pengujian" && verifStatus !== "not_submitted" && verifStatus !== "approved")} className="px-4 h-[30px] rounded text-[11.5px] text-white font-medium bg-[#252271] hover:bg-[#1a1860] disabled:bg-gray-400 disabled:cursor-not-allowed">
                    {getNextLabel()}
                  </button>
                ) : item.status === "Selesai" || completedStepIds.has("contract") ? (
                  <div className="flex gap-2">
                    <button onClick={() => onNavigate("dashboard")} className="flex items-center gap-1.5 px-4 h-[30px] rounded text-[11.5px] text-gray-700 font-medium bg-gray-100 border border-gray-300 hover:bg-gray-200">
                      Kembali ke Dashboard
                    </button>
                    <button
                      disabled={activeStep.id === "pembayaran" && verifStatus !== "approved"}
                      onClick={() => {
                        if (activeStep.id === "pengujian") {
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
                        activeStep.id === "pembayaran" && verifStatus !== "approved"
                          ? "bg-gray-300 cursor-not-allowed opacity-60"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                      title={activeStep.id === "pembayaran" && verifStatus !== "approved" ? "Pembayaran belum diverifikasi oleh admin" : ""}
                    >
                      <Check size={12} /> {activeStep.id === "pengujian" ? "Lanjut Pembayaran" : activeStep.id === "pembayaran" ? "Pembayaran Selesai!" : "Lanjut ke Pengujian"}
                    </button>
                  </div>
                ) : (
                  <button
                    disabled={activeStep.id === "pembayaran" && verifStatus !== "approved"}
                    onClick={() => {
                      if (activeStep.id === "pembayaran" && verifStatus !== "approved") return;
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
                      activeStep.id === "pembayaran" && verifStatus !== "approved"
                        ? "bg-gray-300 cursor-not-allowed opacity-60"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                    title={activeStep.id === "pembayaran" && verifStatus !== "approved" ? "Pembayaran belum diverifikasi oleh admin" : ""}
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
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[#252271] text-base font-bold">Lanjut ke Menu Pembayaran</h3>
              <button onClick={() => setShowPrPaymentModal(false)} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>
            <p className="text-[12px] text-gray-600 mb-4">
              Silakan pilih jenis pembayaran yang akan digunakan:
            </p>
            <div className="space-y-3 mb-6">
              <label
                onClick={() => setSelectedPaymentType("Outsource")}
                className={`flex items-center p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedPaymentType === "Outsource"
                    ? "border-[#252271] bg-[#252271]/5 ring-1 ring-[#252271]"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="prPaymentType"
                  checked={selectedPaymentType === "Outsource"}
                  onChange={() => setSelectedPaymentType("Outsource")}
                  className="w-4 h-4 text-[#252271]"
                />
                <div className="ml-3">
                  <p className="text-[12.5px] font-bold text-gray-800">Outsource</p>
                  <p className="text-[10.5px] text-gray-500">Pembayaran untuk jasa outsource</p>
                </div>
              </label>

              <label
                onClick={() => setSelectedPaymentType("Non-outsource")}
                className={`flex items-center p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedPaymentType === "Non-outsource"
                    ? "border-[#252271] bg-[#252271]/5 ring-1 ring-[#252271]"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="prPaymentType"
                  checked={selectedPaymentType === "Non-outsource"}
                  onChange={() => setSelectedPaymentType("Non-outsource")}
                  className="w-4 h-4 text-[#252271]"
                />
                <div className="ml-3">
                  <p className="text-[12.5px] font-bold text-gray-800">Non Outsource</p>
                  <p className="text-[10.5px] text-gray-500">Pembayaran pengadaan barang / jasa non-outsource</p>
                </div>
              </label>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowPrPaymentModal(false)}
                className="px-4 py-2 rounded-xl text-[11.5px] font-medium border border-gray-200 text-gray-600 hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmPrPayment}
                className="px-5 py-2 rounded-xl text-[11.5px] font-bold text-white bg-[#252271] hover:bg-[#1a1860] shadow-sm"
              >
                Lanjut ke Pembayaran
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
          onClose={() => setShowEditPopup(false)}
          onSubmit={handleRevisionSubmit}
        />
      )}
    </div>
  );
}

