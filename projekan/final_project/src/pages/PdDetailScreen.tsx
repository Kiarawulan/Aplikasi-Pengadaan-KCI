import { useState, useEffect } from "react";
import { ChevronRight, Check, ChevronLeft, Trash2, Download, AlertCircle, Clock, AlertTriangle } from "lucide-react";
import type { Screen, PengadaanItem, VerifStatus } from "../types";
import { PD_MAIN_STEPS } from "../constants/steps";
import { Breadcrumb } from "../components/layout/Breadcrumb";
import { StatusBadge } from "../components/common/StatusBadge";
import { FieldInput } from "../components/common/FieldInput";
import { FileUploadInput } from "../components/common/FileUploadInput";
import { SummaryRow } from "../components/common/SummaryRow";
import { ApprovedBadge } from "../components/common/ApprovedBadge";
import { DetailHeaderCard } from "../components/pengadaan/DetailHeaderCard";
import { StepTracker } from "../components/pengadaan/StepTracker";
import { PdSubStatus } from "../components/pengadaan/PdSubStatus";
import { api } from "../services/api";
import { useAuth } from "../store/authStore";

export function PdDetailScreen({ item, onBack, onNavigate }: { item: PengadaanItem; onBack: () => void; onNavigate: (s: Screen) => void }) {
  const steps = PD_MAIN_STEPS;
  const { currentUser } = useAuth();
  
  // Find first uncompleted step
  const initialStepIdx = steps.findIndex(s => !item.completedSteps?.includes(s.id));
  const defaultStepIdx = initialStepIdx === -1 ? 0 : initialStepIdx;

  // Load initial submitted subs from item state or meta
  const [submittedSubs, setSubmittedSubs] = useState<Set<string>>(() => {
    const s = new Set<string>();
    if (item.formData && item.formData["__meta"] && item.formData["__meta"]["submittedSubs"]) {
      try {
        const parsed = JSON.parse(item.formData["__meta"]["submittedSubs"]);
        parsed.forEach((x: string) => s.add(x));
      } catch (e) {}
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
      try { JSON.parse(item.formData["__meta"]["submittedSubs"]).forEach((x: string) => s.add(x)); } catch (e) {}
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

  // Fetch latest item data on mount to avoid stale localStorage data
  useEffect(() => {
    api.get(`/pengadaan/${item.id}`).then(res => {
      const fresh = res.data;
      setAllFd(fresh.formData || {});
      setCompletedStepIds(new Set(fresh.completedSteps || []));
      
      const s = new Set<string>();
      if (fresh.formData && fresh.formData["__meta"] && fresh.formData["__meta"]["submittedSubs"]) {
        try { JSON.parse(fresh.formData["__meta"]["submittedSubs"]).forEach((x: string) => s.add(x)); } catch (e) {}
      }
      setSubmittedSubs(s);

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

  // Sync state with Admin Verifikasi backend
  const [verifState, setVerifState] = useState<{
    status: VerifStatus | "not_submitted";
    canProceed: boolean;
    catatanAdmin?: string;
    loading: boolean;
  }>({ status: "not_submitted", canProceed: true, loading: false });

  const activeStep = steps[activeStepIdx];
  const activeSub = activeStep.subSteps[activeSubIdx];

  const subKey = (stepId: string, subId: string) => `${stepId}.${subId}`;
  const isSubSubmitted = (stepId: string, subId: string) => submittedSubs.has(subKey(stepId, subId));
  const isStepDone = (idx: number) => completedStepIds.has(steps[idx].id);

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

  const upd = (subId: string, field: string, val: string) =>
    setAllFd(p => ({ ...p, [subId]: { ...(p[subId] ?? {}), [field]: val } }));
  const fd = (subId: string): Record<string, string> => allFd[subId] ?? {};

  const flashSave = (newSubmittedSubs?: Set<string>) => { 
    setFlash(true); 
    const subsToSave = newSubmittedSubs || submittedSubs;
    const metaFd = { ...allFd, "__meta": { ...allFd["__meta"], "submittedSubs": JSON.stringify(Array.from(subsToSave)) } };
    api.put(`/pengadaan/${item.id}/form-data`, metaFd).catch(() => {});
    setTimeout(() => setFlash(false), 2000); 
  };

  const isDetailPd = activeSub.id === "detail-pd";
  const isCurrentSubmitted = isSubSubmitted(activeStep.id, activeSub.id) || verifState.status === "pending" || verifState.status === "approved";
  const isLastSub = activeStepIdx === steps.length - 1 && activeSubIdx === activeStep.subSteps.length - 1;
  const isFirstSub = activeStepIdx === 0 && activeSubIdx === 0;

  const handleSubmit = async () => {
    if (isCurrentSubmitted || isDetailPd) {
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
          if (activeStepIdx < steps.length - 1) {
            api.put(`/pengadaan/${item.id}`, {
              currentStep: steps[activeStepIdx + 1].id,
              completedStepId: activeStep.id
            }).catch(() => {});
          } else {
            api.put(`/pengadaan/${item.id}`, {
              status: "Selesai"
            }).catch(() => {});
          }
          return next;
        });
        if (activeStepIdx < steps.length - 1) {
          setActiveStepIdx(activeStepIdx + 1);
          setActiveSubIdx(0);
        }
      }
    } else {
      // Submit current sub-step to backend API for Admin verification
      try {
        await api.post(`/pengadaan/${item.id}/submit-step`, {
          stepId: activeStep.id,
          tipe: activeSub.id,
        });
      } catch {}

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
  const showSelesai = activeSub.id === "pengembalian-dana" && isCurrentSubmitted;

  const renderContent = () => {
    if (showSelesai) return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"><Check size={16} className="text-green-600" /></div>
          <div>
            <p className="text-[11.5px] font-semibold text-[#0a0a0a]">Park Document Selesai</p>
            <p className="text-[10.5px] text-[#6b6b6b]">Semua proses pembayaran telah selesai diverifikasi oleh Admin</p>
          </div>
        </div>
        <div className="bg-[#fafafa] border border-[#ebebeb] rounded-lg p-4">
          <SummaryRow label="File Pengembalian Dana" value={fd("pengembalian-dana")["filePengembalian"] || "—"} />
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
        return (
          <div>
            <div className="flex items-center gap-2 mb-4"><p className="text-[10px] font-semibold text-[#6b6b6b] uppercase tracking-wider">Summary Park Document</p><ApprovedBadge /></div>
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
      const isApproved = item.status === "approved" || item.status === "Selesai";
      return (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-[10px] font-semibold text-[#6b6b6b] uppercase tracking-wider">Summary</p>
            {isApproved ? <ApprovedBadge /> : <span className="bg-yellow-100 text-yellow-700 text-[10px] font-semibold px-2 py-0.5 rounded">Menunggu Verifikasi</span>}
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
    if (activeSub.id === "payment-request") {
      const d = fd("payment-request");
      const u = (k: string) => (v: string) => upd("payment-request", k, v);
      return (
        <div className="space-y-3">
          <FileUploadInput label="Input File BAHP dengan TTD" required value={d["fileBAHP"] ?? ""} onChange={u("fileBAHP")} />
          <FieldInput label="Keterangan" placeholder="Keterangan tambahan..." type="textarea" value={d["keterangan"]} onChange={u("keterangan")} />
          {d["fileBAHP"] && (
            <div><p className="text-[11.5px] font-medium text-[#0a0a0a] mb-1">Status</p><StatusBadge status="Proses" /></div>
          )}
        </div>
      );
    }
    if (activeSub.id === "nota-dokumen") {
      const d = fd("nota-dokumen");
      const u = (k: string) => (v: string) => upd("nota-dokumen", k, v);
      return (
        <div className="space-y-3">
          <div>
            <p className="text-[11.5px] font-medium text-[#0a0a0a] mb-[5px]">Nota dan Dokumen</p>
            <div className="flex items-center justify-between bg-[#f9f9f9] border border-[#e2e2e2] rounded px-3 py-2">
              <div><p className="text-[11.5px] font-medium">Nota-PD-001-2025.pdf</p><p className="text-[10px] text-[#6b6b6b]">245 KB</p></div>
              <button className="flex items-center gap-1.5 bg-[#252271] text-white text-[10px] font-medium px-3 py-1.5 rounded"><Download size={11} /> Download</button>
            </div>
          </div>
          <FieldInput label="Keterangan" placeholder="Keterangan terkait nota..." type="textarea" value={d["keterangan"]} onChange={u("keterangan")} />
          <div><p className="text-[11.5px] font-medium text-[#0a0a0a] mb-1">Status</p><StatusBadge status="Proses" /></div>
        </div>
      );
    }
    if (activeSub.id === "dokumen-tutupan") {
      const d = fd("dokumen-tutupan");
      const u = (k: string) => (v: string) => upd("dokumen-tutupan", k, v);
      return (
        <div className="space-y-3">
          <FileUploadInput label="Dokumen Tutupan" required value={d["fileTutupan"] ?? ""} onChange={u("fileTutupan")} />
          <FieldInput label="Keterangan" placeholder="Keterangan dokumen tutupan..." type="textarea" value={d["keterangan"]} onChange={u("keterangan")} />
          {d["fileTutupan"] && (
            <div><p className="text-[11.5px] font-medium text-[#0a0a0a] mb-1">Status Verifikasi</p><StatusBadge status="Proses" /></div>
          )}
        </div>
      );
    }
    if (activeSub.id === "pengembalian-dana") {
      const d = fd("pengembalian-dana");
      const u = (k: string) => (v: string) => upd("pengembalian-dana", k, v);
      return (
        <div className="space-y-3">
          <FileUploadInput label="File Pengembalian Dana (Nota dan sebagainya)" value={d["filePengembalian"] ?? ""} onChange={u("filePengembalian")} />
          <FieldInput label="Keterangan" placeholder="Keterangan pengembalian dana..." type="textarea" value={d["keterangan"]} onChange={u("keterangan")} />
        </div>
      );
    }
    return null;
  };

  const showLanjutBtn = (isCurrentSubmitted || isDetailPd) && !showSelesai;
  const showSubmitBtn = !isCurrentSubmitted && !isDetailPd;

  return (
    <div>
      <Breadcrumb segments={[{ label: "Daftar Pengadaan", screen: "daftar-pengadaan" }, { label: "Park Dokumen", screen: "daftar-pengadaan" }, { label: item.nama }]} onNavigate={onNavigate} />
      <DetailHeaderCard item={item} />

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
        <div className="mb-4 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 flex items-start gap-3">
          <AlertCircle size={16} className="text-blue-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-[12px] font-semibold text-blue-800">📝 Perlu Revisi dari Admin</p>
            <p className="text-[11px] text-blue-700 font-medium mt-0.5">Catatan Admin: "{verifState.catatanAdmin}"</p>
            <p className="text-[10.5px] text-blue-600 mt-1">Perbaiki berkas dan kirim ulang pengajuan Anda.</p>
          </div>
        </div>
      )}

      {verifState.status === "rejected" && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-xl px-4 py-3 flex items-start gap-3">
          <AlertTriangle size={16} className="text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-[12px] font-semibold text-red-800">❌ Pengajuan Ditolak Admin</p>
            <p className="text-[11px] text-red-700 font-medium mt-0.5">Alasan: "{verifState.catatanAdmin}"</p>
          </div>
        </div>
      )}

      {verifState.status === "approved" && (
        <div className="mb-4 bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-3">
          <Check size={16} className="text-green-600 shrink-0" />
          <div>
            <p className="text-[12px] font-semibold text-green-800">✅ Disetujui Admin</p>
            <p className="text-[11px] text-green-700">Berkas telah diverifikasi oleh Admin. Anda dapat melanjutkan ke tahap berikutnya.</p>
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
          completedStepIds={completedStepIds} submittedSubs={submittedSubs}
          onSelectStep={(idx) => { if (canAccessStep(idx)) { setActiveStepIdx(idx); setActiveSubIdx(0); } }}
          onSelectSub={(sIdx) => { if (canAccessSub(sIdx)) setActiveSubIdx(sIdx); }}
          canAccessStep={canAccessStep}
          canAccessSub={canAccessSub}
        />
        <div className="flex-1 min-w-0">
          <div className="rounded-[10px] border border-[#e2e2e2] bg-white overflow-hidden shadow-sm">
            <div className="bg-[#252271] px-4 py-2.5 flex items-center justify-between">
              <p className="text-white font-semibold text-[11.5px]">{cardHeader()}</p>
              {isCurrentSubmitted && activeSub.id !== "detail-pd" && (
                <StatusBadge status={verifState.status === "approved" ? "Selesai" : verifState.status === "revisi" ? "Revisi" : "Menunggu Verifikasi"} />
              )}
            </div>
            <div className="p-4">{renderContent()}</div>
            {!showSelesai && (
              <div className="px-4 pb-3.5 pt-3.5 border-t border-[#e2e2e2] flex items-center justify-between">
                <button onClick={goPrev} disabled={isFirstSub} className="flex items-center gap-1.5 px-4 h-[30px] rounded border border-gray-200 text-[11.5px] text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"><ChevronLeft size={12} /> Kembali</button>
                <div className="flex gap-2">
                  {showSubmitBtn && (
                    <button onClick={handleSubmit} className="px-4 h-[30px] rounded text-[11.5px] text-white font-medium bg-[#252271] hover:bg-[#1a1860]">
                      Submit Berkas
                    </button>
                  )}
                  {showLanjutBtn && (
                    <button
                      onClick={handleSubmit}
                      disabled={!verifState.canProceed && verifState.status === "pending"}
                      className={`flex items-center gap-1.5 px-4 h-[30px] rounded text-[11.5px] text-white font-medium transition-all ${
                        !verifState.canProceed && verifState.status === "pending"
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
    </div>
  );
}
