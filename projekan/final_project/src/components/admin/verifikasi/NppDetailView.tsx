import React, { useEffect, useState } from 'react';
import { Save } from 'lucide-react';
import { DetailDocumentView, DetailDocumentField, DetailDocumentFile } from '@/components/user/pengadaan/DetailDocumentView';
import { api } from '@/services/api';
import { showFeedback } from '@/components/common/GlobalFeedback';
import { getPengadaan, savePengadaan, updatePengadaanItem } from '@/store/dataStore';

interface NppDetailViewProps {
  item?: any;
  onApprove?: () => void;
  onRevisi?: (catatan?: string) => void;
  onReject?: (catatan?: string) => void;
  onBack?: () => void;
  showActions?: boolean;
}

export const NppDetailView: React.FC<NppDetailViewProps> = ({
  item,
  onApprove,
  onRevisi,
  onReject,
  onBack,
  showActions = true,
}) => {
  const fd = item?.formData ? (typeof item.formData === 'string' ? JSON.parse(item.formData) : item.formData) : {};
  const nppFd = fd['buat-npp'] || fd['npp'] || fd;
  const [noNpp, setNoNpp] = useState(item?.noNpp || item?.no_npp || nppFd?.noNpp || "");
  const [savingNumber, setSavingNumber] = useState(false);
  
  useEffect(() => {
    const val = item?.noNpp || item?.no_npp || nppFd?.noNpp;
    if (val) setNoNpp(val);
  }, [item?.id, item?.noNpp, item?.no_npp]);

  const saveNppNumber = async () => {
    const val = noNpp.trim();
    if (!val) return showFeedback("No. NPP wajib diisi sebelum dirilis.", "Data Belum Lengkap", "error");

    setSavingNumber(true);
    // Determine the real pengadaan ID. The item.id coming from PengadaanVerifScreen
    // is already the pengadaan_id (e.g. "PR-001"), but item.verif_id might be "NPP-PR-001".
    // Prefer explicit pengadaan_id fields; fall back to stripping NPP-/VR- prefixes.
    const rawId =
      item?.pengadaan_id ||
      item?.pengadaanId ||
      item?.id ||
      item?.idNpp ||
      item?.idRup;
    // Strip any document-type prefixes that are NOT part of the pengadaan ID.
    const realPengadaanId = String(rawId || "")
      .replace(/^VR-/, "")
      .replace(/^NPP-/, "");

    // 1. Send to Laravel backend if API available
    let apiSuccess = false;
    if (realPengadaanId) {
      try {
        await api.post(`/pengadaan/${realPengadaanId}/release-npp-number`, { no_npp: val });
        apiSuccess = true;
      } catch (error: any) {
        const errMsg = error?.response?.data?.message || error?.response?.data?.errors?.no_npp?.[0] || error?.message || "Gagal menghubungi server";
        console.warn("API release-npp-number error:", errMsg, error?.response?.data);
        // Tampilkan error ke admin agar tahu masalahnya
        showFeedback(`Gagal menyimpan ke database: ${errMsg}. No. NPP disimpan lokal saja.`, "Peringatan API", "error");
      }
    }

    // 2. Save into global NPP map in localStorage so any user screen can access it immediately
    try {
      localStorage.setItem("sipro_latest_released_npp", val);
      const nppMap = JSON.parse(localStorage.getItem("sipro_npp_map") || "{}");
      if (realPengadaanId) nppMap[realPengadaanId] = val;
      if (rawId) nppMap[rawId] = val;
      if (item?.id) nppMap[item.id] = val;
      if (item?.nama) nppMap[item.nama] = val;
      if (item?.judul) nppMap[item.judul] = val;
      if (item?.pengadaanNama) nppMap[item.pengadaanNama] = val;
      localStorage.setItem("sipro_npp_map", JSON.stringify(nppMap));
    } catch (e) { }

    // 3. Update in-memory item
    if (item) {
      item.noNpp = val;
      item.no_npp = val;
      if (item.document) item.document.no_npp = val;

      let fdObj = item.formData;
      if (typeof fdObj === 'string') {
        try { fdObj = JSON.parse(fdObj); } catch (e) { fdObj = {}; }
      }
      if (!fdObj) fdObj = {};
      if (!fdObj['buat-npp']) fdObj['buat-npp'] = {};
      fdObj['buat-npp'].noNpp = val;
      fdObj.noNpp = val;
      item.formData = fdObj;
    }

    // 4. Update items in local storage
    const items = getPengadaan();
    let updatedAny = false;
    items.forEach(p => {
      if (
        (realPengadaanId && (p.id === realPengadaanId || p.id === rawId || p.id === item?.pengadaan_id || p.id === item?.pengadaanId)) || 
        (item?.nama && p.nama === item.nama) ||
        (item?.judul && p.nama === item.judul) ||
        (item?.pengadaanNama && p.nama === item.pengadaanNama)
      ) {
        p.noNpp = val;
        p.no_npp = val;
        if (!p.formData) p.formData = {};
        if (!p.formData['buat-npp']) p.formData['buat-npp'] = {};
        p.formData['buat-npp'].noNpp = val;
        p.formData['noNpp'] = val;
        updatedAny = true;
      }
    });

    if (updatedAny) {
      savePengadaan(items);
    } else if (items.length > 0) {
      items.forEach(p => {
        p.noNpp = val;
        p.no_npp = val;
        if (!p.formData) p.formData = {};
        if (!p.formData['buat-npp']) p.formData['buat-npp'] = {};
        p.formData['buat-npp'].noNpp = val;
        p.formData['noNpp'] = val;
      });
      savePengadaan(items);
    }

    setSavingNumber(false);
    showFeedback("No. NPP berhasil dirilis dan tersedia untuk user.", "No. NPP Tersimpan", "success");
  };

  // Authentic NPP fields
  const infoFields: DetailDocumentField[] = [
    { label: "No. NPP", value: (
      <div className="flex items-center gap-2">
        <input value={noNpp} onChange={event => setNoNpp(event.target.value)} placeholder="Masukkan No. NPP" className="h-8 min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 text-[11.5px] font-semibold text-slate-700 outline-none focus:border-[#252271] focus:ring-2 focus:ring-[#252271]/10" />
        <button type="button" onClick={saveNppNumber} disabled={savingNumber} className="flex h-8 shrink-0 items-center gap-1.5 rounded-lg bg-[#252271] px-3 text-[10.5px] font-bold text-white hover:bg-[#1b1854] disabled:opacity-50"><Save size={11} />{savingNumber ? "Menyimpan..." : "Simpan & Rilis"}</button>
      </div>
    ) },
    { label: "Procurement Title", value: nppFd?.judulPermohonan || item?.procTitle || item?.judul || item?.nama || '-' },
    { label: "Vendor Name", value: nppFd?.vendor || item?.vendorName || item?.vendor || '-' },
    { label: "Nilai PR", value: nppFd?.nilaiPr ? (String(nppFd.nilaiPr).startsWith("Rp") ? nppFd.nilaiPr : `Rp ${Number(nppFd.nilaiPr).toLocaleString("id-ID")}`) : (item?.prVal || item?.rkap || item?.nilai || '-') },
    { label: "Divisi", value: nppFd?.subUnit || nppFd?.divisi || item?.dept || item?.divisi || item?.departemen || '-' },
    { label: "Kode COA", value: nppFd?.coa || item?.coa || '-' },
    { label: "Jenis Barang", value: nppFd?.jenisBarang || item?.jenisBarang || item?.kategori || '-' },
    { label: "Kurs", value: nppFd?.kurs || item?.kurs || '-' },
    { label: "Realisasi", value: nppFd?.realisasi === "true" ? "Timeline" : (nppFd?.realisasi || item?.realisasi || item?.realisation || '-') },
    { label: "Metode", value: nppFd?.metode || item?.metode || '-' },
    { label: "Keterangan", value: nppFd?.keterangan || item?.keterangan || '—' },
  ];

  // Authentic NPP document attachments
  const files: DetailDocumentFile[] = [];

  return (
    <DetailDocumentView
      title="Detail NPP (Nota Permohonan Pengadaan)"
      subtitle={`NPP - ${noNpp || 'Belum dirilis'}`}
      status={item?.status || "Submitted"}
      infoFields={infoFields}
      files={files}
      pengadaanId={item?.pengadaan_id || item?.pengadaanId || item?.id}
      onBack={onBack}
      onApprove={onApprove}
      onRevisi={onRevisi}
      onReject={onReject}
      showActions={showActions}
      adminActions
    />
  );
};
