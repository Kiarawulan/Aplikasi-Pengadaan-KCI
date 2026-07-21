import { useState, useEffect } from "react";
import { Search, Check } from "lucide-react";
import { TopBar } from "../components/layout/TopBar";
import { StatusBadge } from "../components/common/StatusBadge";
import { useAuth } from "../store/authStore";
import { getRupList, addRup, addVerifRecord, generateId } from "../store/dataStore";
import { api } from "../services/api";
import type { RupItem } from "../types";

export function RupListScreen() {
  const { currentUser } = useAuth();
  const [tab, setTab] = useState<"list" | "buat">("list");
  const [saved, setSaved] = useState(false);
  const [items, setItems] = useState<RupItem[]>(getRupList());

  useEffect(() => {
    // Fetch from backend to get the latest status (especially after admin approval)
    api.get("/rup").then(res => {
      const backendItems = res.data.map((r: any) => ({
        id: r.id,
        nama: r.nama,
        jenis: r.jenis,
        metode: r.metode,
        nilai: r.nilai,
        status: r.status,
        progress: r.progress,
        departemen: r.departemen,
        createdBy: r.created_by,
        createdAt: r.created_at,
      }));
      
      // Combine with local items (prioritize backend data if ID matches)
      const mergedMap = new Map<string, RupItem>();
      getRupList().forEach(item => mergedMap.set(item.id, item));
      backendItems.forEach((item: RupItem) => mergedMap.set(item.id, item));
      
      setItems(Array.from(mergedMap.values()));
    }).catch(console.error);
  }, [tab]);

  const [form, setForm] = useState({
    nama: "", jenis: "Barang", metode: "Tender", nilai: "",
  });

  const handleCreate = () => {
    const id = generateId("RUP");
    const today = new Date().toISOString().split("T")[0];
    
    const newRup: RupItem = {
      id,
      nama: form.nama || "Pengadaan Baru",
      jenis: form.jenis,
      metode: form.metode,
      nilai: form.nilai ? `Rp ${form.nilai}` : "Rp 0",
      status: "pending",
      progress: "0/14",
      departemen: currentUser?.departemen || "Umum",
      createdBy: currentUser?.id || "unknown",
      createdAt: today,
    };
    
    addRup(newRup);
    addVerifRecord({
      id: generateId("VR"),
      pengadaanId: id,
      pengadaanNama: newRup.nama,
      departemen: newRup.departemen,
      nominal: newRup.nilai,
      tipe: "rup",
      submitBy: currentUser?.name || "User",
      submitAt: new Date().toISOString(),
      status: "pending",
    });
    
    setItems(getRupList());
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setTab("list");
      setForm({ nama: "", jenis: "Barang", metode: "Tender", nilai: "" });
    }, 1500);
  };
  return (
    <div>
      <TopBar title="Rencana Umum Pengadaan" subtitle="RUP" />
      <div className="bg-[#f4f4f4] rounded-3xl p-1 flex gap-1 mb-5 max-w-xs">
        {(["list", "buat"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`flex-1 py-2 rounded-2xl text-[11.5px] font-medium transition-all ${tab === t ? (t === "list" ? "bg-[#e6251c] text-white shadow-sm" : "bg-[#252271] text-white shadow-sm") : "text-gray-500 hover:text-gray-700"}`}>
            {t === "list" ? "List RUP" : "Buat RUP"}
          </button>
        ))}
      </div>
      {tab === "list" ? (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="bg-[#272477] px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-white font-semibold text-[13px]">Daftar RUP</p>
              <p className="text-[#99a1af] text-[10.5px]">{items.length} pengadaan</p>
            </div>
            <div className="relative">
              <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#99a1af]" />
              <input className="bg-[#f3f4f6] pl-8 pr-3 py-1.5 rounded-xl text-[11px] focus:outline-none w-40" placeholder="Pencarian" />
            </div>
          </div>
          <table className="w-full">
            <thead><tr className="bg-gray-50/80">{["No", "Nama Pengadaan", "Jenis", "Metode", "Nilai RKAP", "Progress", "Status"].map((h) => <th key={h} className="text-left px-4 py-3 text-[10.5px] font-medium text-gray-500">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-gray-50">
              {items.map((item, i) => {
                const [done, total] = item.progress.split("/").map(Number);
                return (
                  <tr key={item.id} className={i % 2 === 1 ? "bg-gray-50/40" : ""}>
                    <td className="px-4 py-3.5 text-[11px] text-gray-500">{item.id}</td>
                    <td className="px-4 py-3.5"><p className="font-medium text-gray-800 text-[11px]">{item.nama}</p><p className="text-gray-400 text-[9.5px]">Tahun {new Date(item.createdAt).getFullYear()}</p></td>
                    <td className="px-4 py-3.5 text-[11px] text-gray-600">{item.jenis}</td>
                    <td className="px-4 py-3.5 text-[11px] text-gray-600">{item.metode}</td>
                    <td className="px-4 py-3.5 text-[11px] font-medium text-gray-700">{item.nilai}</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-100 rounded-full h-1.5"><div className="bg-gray-800 h-1.5 rounded-full" style={{ width: `${(done / total) * 100}%` }} /></div>
                        <span className="text-[9.5px] text-gray-500">{item.progress}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5"><StatusBadge status={item.status} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {saved && <div className="mb-4 bg-green-50 border border-green-200 rounded-xl px-4 py-2 flex items-center gap-2"><Check size={13} className="text-green-600" /><span className="text-green-700 text-[11.5px]">RUP berhasil disimpan!</span></div>}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <label className="block text-[11px] font-medium text-[#0a0a0a] mb-1">Judul Pengadaan</label>
              <input type="text" value={form.nama} onChange={e => setForm({...form, nama: e.target.value})} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[11px] focus:outline-none focus:border-[#e6251c]" placeholder="Masukkan judul pengadaan" />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-[#0a0a0a] mb-1">Jenis Kontrak</label>
              <select value={form.jenis} onChange={e => setForm({...form, jenis: e.target.value})} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[11px] focus:outline-none focus:border-[#e6251c]">
                <option value="Barang">Barang</option>
                <option value="Jasa">Jasa</option>
                <option value="Konstruksi">Konstruksi</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-medium text-[#0a0a0a] mb-1">Metode Pengadaan</label>
              <select value={form.metode} onChange={e => setForm({...form, metode: e.target.value})} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[11px] focus:outline-none focus:border-[#e6251c]">
                <option value="Tender">Tender</option>
                <option value="Seleksi Langsung">Seleksi Langsung</option>
                <option value="Pengadaan Langsung">Pengadaan Langsung</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-medium text-[#0a0a0a] mb-1">Nilai RKAP (Sebelum Pajak)</label>
              <input type="text" value={form.nilai} onChange={e => setForm({...form, nilai: e.target.value})} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[11px] focus:outline-none focus:border-[#e6251c]" placeholder="Masukkan nilai RKAP" />
            </div>
            {["Beban Biaya", "Sumber Dana", "Tahun RKAP", "Type TAX"].map((f) => (
              <div key={f}><label className="block text-[11px] font-medium text-[#0a0a0a] mb-1">{f}</label><input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[11px] focus:outline-none focus:border-[#e6251c]" placeholder={`Masukkan ${f.toLowerCase()}`} /></div>
            ))}
            {["Start Date Pengadaan", "End Date Pengadaan"].map((f) => (
              <div key={f}><label className="block text-[11px] font-medium text-[#0a0a0a] mb-1">{f}</label><input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[11px] focus:outline-none focus:border-[#e6251c]" /></div>
            ))}
            <div className="col-span-2"><label className="block text-[11px] font-medium text-[#0a0a0a] mb-1">Keterangan</label><textarea className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[11px] focus:outline-none focus:border-[#e6251c] h-20 resize-none" placeholder="Masukkan keterangan" /></div>
          </div>
          <div className="flex justify-end gap-3 mt-5">
            <button onClick={() => setTab("list")} className="px-5 py-2 rounded-lg border border-gray-200 text-[11px] text-gray-600 hover:bg-gray-50">Batal</button>
            <button onClick={handleCreate} className="px-5 py-2 rounded-lg text-[11px] text-white font-semibold" style={{ background: "linear-gradient(75deg, #ff4040, #ff7676)" }}>Simpan RUP</button>
          </div>
        </div>
      )}
    </div>
  );
}

