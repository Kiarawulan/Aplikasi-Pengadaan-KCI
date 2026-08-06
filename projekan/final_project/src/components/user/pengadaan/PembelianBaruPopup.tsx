import { useState, useEffect } from "react";
import { X } from "lucide-react";
import type { ParkStep, PengadaanItem, RupItem } from "@/types";
import { getRupList } from "@/store/dataStore";
import { api } from "@/services/api";


import { useAuth } from "@/store/authStore";
import { DIVISI_LIST } from "@/constants/divisi";

export function PembelianBaruPopup({ onClose, onSubmit, title = "Pembuatan Pengadaan Baru", submitLabel = "Submit", initialStep = "npp" as ParkStep, initialData, isViewOnly, requiresRup = true }: {
  onClose: () => void; onSubmit: (item: any) => void;
  title?: string; submitLabel?: string; initialStep?: ParkStep;
  initialData?: any; isViewOnly?: boolean; requiresRup?: boolean;
}) {
  const { currentUser } = useAuth();
  const today = new Date().toISOString().split("T")[0];
  const [rupList, setRupList] = useState<RupItem[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  useEffect(() => {
    if (!requiresRup) {
      setRupList([]);
      return;
    }
    api.get("/rup")
      .then((res) => {
        const backendItems = res.data.map((r: any) => ({
          id: r.id,
          nama: r.nama,
          jenis: r.jenis,
          metode: r.metode,
          nilai: r.nilai,
          status: r.status,
          progress: r.progress || "0/14",
          departemen: r.departemen,
          createdBy: r.created_by,
          createdAt: r.created_at,
        }));
        const mergedMap = new Map<string, RupItem>();
        getRupList().forEach((item) => mergedMap.set(item.id, item));
        backendItems.forEach((item: RupItem) => mergedMap.set(item.id, item));
        setRupList(Array.from(mergedMap.values()).filter(r => r.status?.toLowerCase() === "approved"));
      })
      .catch(() => {
        setRupList(getRupList().filter(r => r.status?.toLowerCase() === "approved"));
      });
  }, [requiresRup]);

  const [form, setForm] = useState({
    rupIds: initialData?.rupIds || ([] as string[]),
    emailPic: initialData?.emailPic || currentUser?.email || "",
    tahun: initialData?.tahun || new Date().getFullYear().toString(),
    divisi: initialData?.divisi || initialData?.subUnit || currentUser?.departemen || "",
    judulPermohonan: initialData?.judulPermohonan || initialData?.nama || "",
    jenisPermohonan: initialData?.jenisPermohonan || "",
    nominalPermohonan: initialData?.nominalPermohonan || initialData?.nominal || "",
    nominalKonversi: initialData?.nominalKonversi || initialData?.nominal || "",
    kurs: initialData?.kurs || "IDR",
    detailPermohonan: initialData?.detailPermohonan || ""
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm((f) => ({ ...f, [key]: e.target.value }));
  
  const formatCurrency = (value: string, currency: string) => {
    const raw = value.replace(/[^0-9]/g, '');
    if (!raw) return '';
    const num = parseInt(raw, 10);
    if (currency === 'IDR') return `Rp ${new Intl.NumberFormat('id-ID').format(num)}`;
    if (currency === 'USD') return `$ ${new Intl.NumberFormat('en-US').format(num)}`;
    if (currency === 'JPY') return `¥ ${new Intl.NumberFormat('ja-JP').format(num)}`;
    if (currency === 'KRW') return `₩ ${new Intl.NumberFormat('ko-KR').format(num)}`;
    if (currency === 'EUR') return `€ ${new Intl.NumberFormat('de-DE').format(num)}`;
    return raw;
  };

  const EXCHANGE_RATES: Record<string, number> = {
    USD: 18000, // 1 USD = 18,000 IDR
    JPY: 110,   // 1 JPY = 110 IDR
    KRW: 12.34, // 1 KRW = 12.34 IDR
    EUR: 20500, // 1 EUR = 20,500 IDR
  };

  const handleNominalPermohonanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/[^0-9]/g, '');
    const formattedVal = formatCurrency(e.target.value, form.kurs);
    
    let newNominalKonversi = form.nominalKonversi;
    if (rawVal) {
       const val = parseInt(rawVal, 10);
       const rate = form.kurs === 'IDR' ? 1 : (EXCHANGE_RATES[form.kurs] || 1);
       const converted = Math.round(val * rate);
       newNominalKonversi = formatCurrency(converted.toString(), 'IDR');
    } else {
       newNominalKonversi = "";
    }

    setForm(f => ({ 
      ...f, 
      nominalPermohonan: formattedVal,
      nominalKonversi: newNominalKonversi
    }));
  };

  const handleNominalKonversiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, nominalKonversi: formatCurrency(e.target.value, 'IDR') }));
  };

  const handleKursChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newKurs = e.target.value;
    const rawVal = form.nominalPermohonan.replace(/[^0-9]/g, '');
    
    const formattedVal = formatCurrency(form.nominalPermohonan, newKurs);
    
    let newNominalKonversi = form.nominalKonversi;
    if (rawVal) {
       const val = parseInt(rawVal, 10);
       const rate = newKurs === 'IDR' ? 1 : (EXCHANGE_RATES[newKurs] || 1);
       const converted = Math.round(val * rate);
       newNominalKonversi = formatCurrency(converted.toString(), 'IDR');
    }

    setForm(f => ({
      ...f,
      kurs: newKurs,
      nominalPermohonan: formattedVal,
      nominalKonversi: newNominalKonversi
    }));
  };

  const toggleRup = (id: string) => {
    setForm(f => {
      const newRupIds = f.rupIds.includes(id) ? f.rupIds.filter(r => r !== id) : [...f.rupIds, id];
      // Auto-fill Judul & Nominal if first RUP is selected
      const firstRup = rupList.find(r => r.id === newRupIds[0]);
      return {
        ...f,
        rupIds: newRupIds,
        judulPermohonan: newRupIds.length === 1 && firstRup ? firstRup.nama : f.judulPermohonan,
        nominalPermohonan: newRupIds.length === 1 && firstRup ? formatCurrency(firstRup.nilai, 'IDR') : f.nominalPermohonan
      };
    });
  };

  const handleSubmit = () => {
    const required: (keyof typeof form)[] = ["emailPic", "tahun", "divisi", "judulPermohonan", "jenisPermohonan", "nominalPermohonan"];
    const errs: Record<string, boolean> = {};
    required.forEach((k) => { if (!form[k as keyof typeof form]?.toString().trim()) errs[k] = true; });
    if (requiresRup && form.rupIds.length === 0) errs.rupIds = true;
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const formattedNominal = form.kurs === 'IDR' 
      ? (form.nominalPermohonan.startsWith("Rp") ? form.nominalPermohonan : `Rp ${form.nominalPermohonan}`)
      : form.nominalKonversi;

    onSubmit({
      id: `PKD-${String(Math.floor(Math.random() * 900) + 100)}`,
      nama: form.judulPermohonan, 
      departemen: form.divisi || "Umum",
      nominal: formattedNominal,
      tanggal: today,
      status: "Menunggu Verifikasi Admin",
      currentStep: initialStep,
      completedSteps: [],
      verificationStatus: { [initialStep]: "pending" },
      formData: {
        ...(requiresRup ? { rupIds: form.rupIds } : {}),
        emailPic: form.emailPic,
        tahun: form.tahun,
        subUnit: form.divisi,
        jenisPermohonan: form.jenisPermohonan,
        nominalKonversi: form.nominalKonversi,
        kurs: form.kurs,
        detailPermohonan: form.detailPermohonan
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-[620px] max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-[#252271] text-xl font-extrabold">{title}</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <X size={16} className="text-gray-600" />
          </button>
        </div>

        <fieldset disabled={isViewOnly} className="space-y-4 border-none p-0 m-0">
          {requiresRup && <div>
            <label className="block text-[11.5px] font-medium text-[#0a0a0a] mb-2">Pilih RUP (Bisa lebih dari satu)</label>
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className={`w-full border rounded-xl px-4 py-2.5 text-[11.5px] text-left bg-white flex justify-between items-center ${errors.rupIds ? "border-red-400" : "border-gray-200"}`}>
                <span className="text-gray-700">{form.rupIds.length > 0 ? `${form.rupIds.length} RUP terpilih` : "Pilih RUP..."}</span>
                <span className="text-gray-400 text-[10px]">▼</span>
              </button>
              {dropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-48 overflow-y-auto">
                  {rupList.length === 0 ? (
                    <div className="p-3 text-[11px] text-gray-500 text-center">Belum ada RUP yang Approved</div>
                  ) : (
                    rupList.map(r => (
                      <label key={r.id} className="flex items-center px-4 py-2.5 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0">
                        <input type="checkbox" className="mr-3 rounded border-gray-300" checked={form.rupIds.includes(r.id)} onChange={() => toggleRup(r.id)} />
                        <div>
                          <p className="text-[11.5px] font-medium text-gray-800">{r.nama}</p>
                          <p className="text-[10px] text-gray-500">{r.id} • {r.nilai}</p>
                        </div>
                      </label>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[11.5px] font-medium text-[#0a0a0a] mb-1.5">Email PIC <span className="text-[#e6251c]">*</span></label>
              <input type="email" value={form.emailPic} onChange={set("emailPic")} className={`w-full border rounded-xl px-3 py-2 text-[11.5px] focus:outline-none focus:ring-2 focus:ring-[#e6251c]/20 focus:border-[#e6251c] ${errors.emailPic ? "border-red-400" : "border-gray-200"}`} placeholder="namaemail@email.com" />
            </div>
            <div>
              <label className="block text-[11.5px] font-medium text-[#0a0a0a] mb-1.5">Tahun <span className="text-[#e6251c]">*</span></label>
              <select value={form.tahun} onChange={set("tahun")} className={`w-full border rounded-xl px-3 py-2 text-[11.5px] focus:outline-none focus:ring-2 focus:ring-[#e6251c]/20 focus:border-[#e6251c] bg-white ${errors.tahun ? "border-red-400" : "border-gray-200"}`}>
                {Array.from({length: 5}, (_, i) => new Date().getFullYear() + i).map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[11.5px] font-medium text-[#0a0a0a] mb-1.5">Divisi <span className="text-[#e6251c]">*</span></label>
              <select value={form.divisi} onChange={set("divisi")} className={`w-full border rounded-xl px-3 py-2 text-[11.5px] focus:outline-none focus:ring-2 focus:ring-[#e6251c]/20 focus:border-[#e6251c] bg-white ${errors.divisi ? "border-red-400" : "border-gray-200"}`}>
                <option value="" disabled>Pilih Divisi</option>
                {DIVISI_LIST.map((divisi) => <option key={divisi} value={divisi}>{divisi}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[11.5px] font-medium text-[#0a0a0a] mb-1.5">Jenis Permohonan <span className="text-[#e6251c]">*</span></label>
              <select value={form.jenisPermohonan} onChange={set("jenisPermohonan")} className={`w-full border rounded-xl px-3 py-2 text-[11.5px] focus:outline-none focus:ring-2 focus:ring-[#e6251c]/20 focus:border-[#e6251c] bg-white ${errors.jenisPermohonan ? "border-red-400" : "border-gray-200"}`}>
                <option value="" disabled>Pilih Jenis Permohonan</option>
                <option value="Barang">Barang</option>
                <option value="Jasa">Jasa</option>
                <option value="Konstruksi">Konstruksi</option>
                <option value="Konsultansi">Konsultansi</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11.5px] font-medium text-[#0a0a0a] mb-1.5">Judul Permohonan <span className="text-[#e6251c]">*</span></label>
            <input type="text" value={form.judulPermohonan} onChange={set("judulPermohonan")} className={`w-full border rounded-xl px-3 py-2 text-[11.5px] focus:outline-none focus:ring-2 focus:ring-[#e6251c]/20 focus:border-[#e6251c] ${errors.judulPermohonan ? "border-red-400" : "border-gray-200"}`} placeholder="Judul Permohonan" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[11.5px] font-medium text-[#0a0a0a] mb-1.5">Nominal Permohonan <span className="text-[#e6251c]">*</span></label>
              <div className="flex gap-2">
                <select value={form.kurs} onChange={handleKursChange} className="w-16 shrink-0 border rounded-xl px-2 py-2 text-[11.5px] font-bold focus:outline-none focus:ring-2 focus:ring-[#e6251c]/20 focus:border-[#e6251c] border-gray-200 bg-white text-center">
                  <option value="IDR">Rp</option>
                  <option value="USD">$</option>
                  <option value="JPY">¥</option>
                  <option value="KRW">₩</option>
                  <option value="EUR">€</option>
                </select>
                <input type="text" value={form.nominalPermohonan} onChange={handleNominalPermohonanChange} className={`flex-1 border rounded-xl px-3 py-2 text-[11.5px] focus:outline-none focus:ring-2 focus:ring-[#e6251c]/20 focus:border-[#e6251c] ${errors.nominalPermohonan ? "border-red-400" : "border-gray-200"}`} placeholder="0" />
              </div>
            </div>
            <div>
              <label className="block text-[11.5px] font-medium text-[#0a0a0a] mb-1.5">Nominal Konversi (IDR)</label>
              <input type="text" value={form.nominalKonversi} onChange={handleNominalKonversiChange} className="w-full border rounded-xl px-3 py-2 text-[11.5px] focus:outline-none focus:ring-2 focus:ring-[#e6251c]/20 focus:border-[#e6251c] border-gray-200 bg-gray-50" readOnly placeholder="Rp 0" />
            </div>
          </div>

          <div>
            <label className="block text-[11.5px] font-medium text-[#0a0a0a] mb-1.5">Detail Permohonan</label>
            <textarea rows={2} value={form.detailPermohonan} onChange={set("detailPermohonan")} className="w-full border rounded-xl px-3 py-2 text-[11.5px] focus:outline-none focus:ring-2 focus:ring-[#e6251c]/20 focus:border-[#e6251c] border-gray-200 resize-none" placeholder="Masukkan detail permohonan..."></textarea>
          </div>
        </fieldset>

        <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-100">
          <button onClick={onClose} className="px-6 py-2.5 rounded-xl border border-gray-200 text-[12px] font-medium text-gray-600 hover:bg-gray-50 transition-colors">{isViewOnly ? "Tutup" : "Cancel"}</button>
          {!isViewOnly && (
            <button onClick={handleSubmit} className="px-6 py-2.5 rounded-xl text-[12px] font-bold text-white shadow-sm hover:opacity-90 transition-opacity" style={{ background: "linear-gradient(75deg, #e6251c, #ff7676)" }}>
              {submitLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

