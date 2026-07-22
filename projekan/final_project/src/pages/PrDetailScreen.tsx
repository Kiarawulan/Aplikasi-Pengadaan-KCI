import { useState, useEffect } from "react";
import { Check, ChevronLeft } from "lucide-react";
import type { Screen, PengadaanItem } from "../types";
import { PR_MAIN_STEPS } from "../constants/steps";
import { Breadcrumb } from "../components/layout/Breadcrumb";
import { DetailHeaderCard } from "../components/pengadaan/DetailHeaderCard";
import { StepTracker } from "../components/pengadaan/StepTracker";
import { PrStepContent } from "../components/pengadaan/PrStepContent";
import { api } from "../services/api";
import { getVerifRecords, addVerifRecord, generateId, getPengujianList, savePengujianList, updatePengadaanItem } from "../store/dataStore";
import { useAuth } from "../store/authStore";

export function PrDetailScreen({ item, onBack, onNavigate }: { item: PengadaanItem; onBack: () => void; onNavigate: (s: Screen) => void }) {
  const { currentUser } = useAuth();
  const steps = PR_MAIN_STEPS;
  
  // Find first uncompleted step
  const initialStepIdx = steps.findIndex(s => !(item.completedSteps || []).includes(s.id as any));
  const defaultStepIdx = initialStepIdx === -1 ? 0 : initialStepIdx;

  // Load initial sub-step completions from item state or meta
  const [completedSubs, setCompletedSubs] = useState<Set<string>>(() => {
    const s = new Set<string>();
    if (item.formData && item.formData["__meta"] && item.formData["__meta"]["completedSubs"]) {
      try {
        const parsed = JSON.parse(item.formData["__meta"]["completedSubs"]);
        parsed.forEach((x: string) => s.add(x));
      } catch (e) {}
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
  const [activeSubIdx, setActiveSubIdx] = useState(() => {
    const step = steps[defaultStepIdx];
    if (!step || !step.subSteps) return 0;
    
    let firstUncompleted = 0;
    // We can't access completedSubs state directly here since it's just initialized, 
    // but we can compute the initial set
    const s = new Set<string>();
    if (item.formData && item.formData["__meta"] && item.formData["__meta"]["completedSubs"]) {
      try { JSON.parse(item.formData["__meta"]["completedSubs"]).forEach((x: string) => s.add(x)); } catch (e) {}
    }
    if (item.completedSteps) {
      item.completedSteps.forEach(cs => {
        const pStep = steps.find(x => x.id === cs);
        pStep?.subSteps?.forEach(sub => s.add(`${cs}.${sub.id}`));
      });
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
  
  // Verification State
  const [verifStatus, setVerifStatus] = useState<"not_submitted" | "pending" | "approved" | "revisi" | "rejected">("not_submitted");

  // Fetch latest item data on mount to avoid stale localStorage data
  useEffect(() => {
    api.get(`/pengadaan/${item.id}`).then(res => {
      const fresh = res.data;
      setAllFd(fresh.formData || {});
      setCompletedStepIds(new Set(fresh.completedSteps || []));
      
      const s = new Set<string>();
      if (fresh.formData && fresh.formData["__meta"] && fresh.formData["__meta"]["completedSubs"]) {
        try { JSON.parse(fresh.formData["__meta"]["completedSubs"]).forEach((x: string) => s.add(x)); } catch (e) {}
      }
      if (fresh.completedSteps) {
        fresh.completedSteps.forEach((cs: string) => {
          const pStep = steps.find(x => x.id === cs);
          pStep?.subSteps?.forEach(sub => s.add(`${cs}.${sub.id}`));
        });
      }
      setCompletedSubs(s);

      // Auto-update active steps based on fresh data
      const initialStepIdx = steps.findIndex(st => !(fresh.completedSteps || []).includes(st.id as any));
      const newStepIdx = initialStepIdx === -1 ? 0 : initialStepIdx;
      setActiveStepIdx(newStepIdx);

      const step = steps[newStepIdx];
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

  const activeStep = steps[activeStepIdx];
  const hasSubSteps = activeStep.subSteps.length > 0;
  const activeSubStep = hasSubSteps ? activeStep.subSteps[activeSubIdx] : null;
  const subId = activeSubStep?.id ?? activeStep.id;

  // Check verification status from backend & local
  useEffect(() => {
    // Only check verification if this step requires it (npp, sp3, contract, dll)
    const verifTypes = ["npp", "pengajuan-dana", "sp3", "pbj", "timeline", "pembayaran"];
    if (verifTypes.includes(activeStep.id)) {
      api.get("/verifikasi").then(res => {
        // Find if there's a verification record for this pengadaan and step
        // For pembayaran, check if there's any record with tipe umd/outsource/non-outsource
        const record = res.data.find((r: any) => r.pengadaan_id === item.id && (r.tipe === activeStep.id || (activeStep.id === "pembayaran" && ["umd", "outsource", "non-outsource"].includes(r.tipe))));
        if (record) {
          setVerifStatus(record.status);
        } else {
          setVerifStatus("not_submitted");
        }
      }).catch(() => setVerifStatus("not_submitted"));
    } else if (activeStep.id === "pengujian") {
      const updatePengujian = (p: any) => {
        if (p) {
          if (p.status === "selesai") setVerifStatus("approved"); // Using "approved" to match verifStatus type
          else if (p.status === "diproses" || p.status === "approved") setVerifStatus("approved"); // Treating "diproses" as approved for the first sub-step so user can advance
          else setVerifStatus("pending");
          
          setCompletedSubs(prev => {
            const next = new Set(prev);
            // If admin has approved the request (diproses or selesai), mark request-pengujian as done
            if (p.status === "diproses" || p.status === "approved" || p.status === "selesai") {
              next.add("pengujian.request-pengujian");
            }
            // If admin has finished the process (selesai), mark proses-pengujian as done
            if (p.status === "selesai") {
              next.add("pengujian.proses-pengujian");
            }
            return next;
          });
          
          // Auto advance activeSubIdx if possible
          if ((p.status === "diproses" || p.status === "approved") && activeSubIdx < 1) {
             setActiveSubIdx(1);
          } else if (p.status === "selesai" && activeSubIdx < 2) {
             setActiveSubIdx(2);
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
      setVerifStatus("not_submitted"); // No verification needed
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
    api.put(`/pengadaan/${item.id}/form-data`, metaFd).catch(() => {});
    setTimeout(() => setFlash(false), 2000); 
  };

  let isSubmitPoint = hasSubSteps ? activeSubIdx === activeStep.subSteps.length - 1 : true;
  if (activeStep.id === "pembayaran") {
    isSubmitPoint = activeSubIdx === 1; // payment-request
  }

  const goNext = () => {
    const verifTypes = ["npp", "pengajuan-dana", "sp3", "pbj", "timeline", "pembayaran"];

    if (verifTypes.includes(activeStep.id) && isSubmitPoint && verifStatus === "not_submitted") {
      const paymentType = allFd["pelunasan"]?.jenis?.toLowerCase() || "outsource";
      const tipeToSubmit = activeStep.id === "pembayaran" ? paymentType : activeStep.id;
      const nominalToSubmit = activeStep.id === "pembayaran" ? (allFd["pelunasan"]?.nilai || item.nominal || "") : (item.nominal || "");
      
      // Submit to Verifikasi Queue!
      api.post(`/pengadaan/${item.id}/submit-step`, {
        stepId: activeStep.id,
        tipe: tipeToSubmit
      }).then(() => {
        setVerifStatus("pending");
        setCompletedSubs(p => {
          if (!activeSubStep) return p;
          return new Set([...p, `${activeStep.id}.${activeSubStep.id}`]);
        });
        flashSave();
      }).catch((err) => {
        console.error("Gagal mengirim verifikasi:", err);
        alert(err.response?.data?.message || "Gagal mengirim verifikasi.");
      });
      return; // Do not advance step yet!
    }

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
        api.post("/pengujian", p).catch(() => {});
        savePengujianList([...getPengujianList(), p]);
        setVerifStatus("pending");
        setCompletedSubs(p => new Set([...p, `${activeStep.id}.${activeSubStep!.id}`]));
        flashSave();
        return;
      }
      if (verifStatus !== "approved") {
        return; // Cannot advance until pengujian is selesai
      }
    }

    if (hasSubSteps && activeSubIdx < activeStep.subSteps.length - 1) {
      const nextSubs = new Set([...completedSubs, `${activeStep.id}.${activeSubStep!.id}`]);
      setCompletedSubs(nextSubs);
      setActiveSubIdx(activeSubIdx + 1);
      flashSave(nextSubs);
      return;
    } else if (activeStepIdx < steps.length - 1) {
      if (verifTypes.includes(activeStep.id) && verifStatus !== "approved") {
        return; // Cannot advance if verification required and not approved
      }
      setCompletedStepIds(p => {
        const next = new Set([...p, activeStep.id]);
        api.put(`/pengadaan/${item.id}`, {
          currentStep: steps[activeStepIdx + 1].id,
          completedStepId: activeStep.id
        }).catch(() => {});
        updatePengadaanItem({ ...item, completedSteps: Array.from(next), currentStep: steps[activeStepIdx + 1].id });
        return next;
      });
      const nextSubs = new Set(completedSubs);
      activeStep.subSteps.forEach(s => nextSubs.add(`${activeStep.id}.${s.id}`));
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
       if (verifStatus === "pending" || verifStatus === "proses") return "Menunggu Pengujian";
       return "Lanjut";
    }
    if (!isSubmitPoint) return "Next";
    if (verifStatus === "not_submitted") return "Submit";
    if (verifStatus === "pending") return "Menunggu Verifikasi";
    return "Lanjut";
  };

  const cardHeader = () => {
    if (activeStep.id === "npp") return subId === "buat-npp" ? "NPP — Nota Permintaan Pengadaan" : "Detail NPP";
    if (activeStep.id === "pengajuan-dana") return subId === "buat-pr" ? "Purchase Requisition" : "Detail Purchase Requisition";
    if (activeStep.id === "pengujian") return activeStep.subSteps.find(s => s.id === subId)?.label ?? "Pengujian";
    if (activeStep.id === "pembayaran") return activeStep.subSteps.find(s => s.id === subId)?.label ?? "Pembayaran";
    return activeStep.label;
  };

  return (
    <div>
      <Breadcrumb segments={[{ label: "Daftar Pengadaan", screen: "daftar-pengadaan" }, { label: "Purchase Requisition", screen: "purchase-requisition" }, { label: item.nama }]} onNavigate={onNavigate} />
      <DetailHeaderCard item={item} />
      {flash && <div className="mb-3 bg-green-50 border border-green-200 rounded-xl px-4 py-2 flex items-center gap-2"><Check size={12} className="text-green-600" /><span className="text-green-700 text-[11px]">Data berhasil disimpan!</span></div>}

      <div className="flex gap-5 items-start">
        <StepTracker
          steps={steps} activeStepIdx={activeStepIdx} activeSubIdx={activeSubIdx}
          completedStepIds={completedStepIds} submittedSubs={completedSubs}
          onSelectStep={(idx) => { setActiveStepIdx(idx); setActiveSubIdx(0); }}
          onSelectSub={(sIdx) => setActiveSubIdx(sIdx)}
          canAccessStep={canAccessStep}
          canAccessSub={canAccessSub}
        />
        <div className="flex-1 min-w-0">
          <div className="rounded-[10px] border border-[#e2e2e2] bg-white overflow-hidden shadow-sm">
            <div className="bg-[#252271] px-4 py-2.5"><p className="text-white font-semibold text-[11.5px]">{cardHeader()}</p></div>
            <div className="p-4"><PrStepContent step={activeStep.id} subStepId={subId} allFd={allFd} upd={upd} status={verifStatus} item={item} /></div>
            <div className="px-4 pb-3.5 pt-3.5 border-t border-[#e2e2e2] flex items-center justify-between">
              <button onClick={goPrev} disabled={isFirst} className="flex items-center gap-1.5 px-4 h-[30px] rounded border border-gray-200 text-[11.5px] text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"><ChevronLeft size={12} /> Kembali</button>
              <div className="flex gap-2">
                <button onClick={flashSave} className="px-4 h-[30px] rounded border border-[#252271] text-[11.5px] text-[#252271] font-medium hover:bg-[#252271]/5">Simpan</button>
                {!isLast ? (
                  <button onClick={goNext} disabled={(verifStatus === "pending" && isSubmitPoint) || (activeStep.id === "pengujian" && activeSubStep?.id === "request-pengujian" && verifStatus !== "not_submitted" && verifStatus !== "approved")} className="px-4 h-[30px] rounded text-[11.5px] text-white font-medium bg-[#252271] hover:bg-[#1a1860] disabled:bg-gray-400 disabled:cursor-not-allowed">
                    {getNextLabel()}
                  </button>
                ) : (
                  <button onClick={() => { 
                    setCompletedStepIds(p => {
                      const next = new Set([...p, activeStep.id]);
                      updatePengadaanItem({ ...item, completedSteps: Array.from(next), status: "Selesai" });
                      return next;
                    }); 
                    flashSave(); 
                    onNavigate("dashboard");
                  }} className="flex items-center gap-1.5 px-4 h-[30px] rounded text-[11.5px] text-white font-medium bg-green-600 hover:bg-green-700">
                    <Check size={12} /> Selesai
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

