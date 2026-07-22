import { useState, useEffect } from "react";
import { Search, Plus, X, Check, Edit2, Eye } from "lucide-react";
import { TopBar } from "../components/layout/TopBar";
import { StatusBadge } from "../components/common/StatusBadge";
import { useAuth } from "../store/authStore";
import { getRupList, addRup, updateRup, addVerifRecord, generateId } from "../store/dataStore";
import { PARK_STEPS } from "../constants/steps";
import { api } from "../services/api";
import type { RupItem } from "../types";

export function RupListScreen() {
  const { currentUser } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isViewOnly, setIsViewOnly] = useState(false);
  const [search, setSearch] = useState("");
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [items, setItems] = useState<RupItem[]>(getRupList());

  const fetchRup = () => {
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

        setItems(Array.from(mergedMap.values()));
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchRup();
  }, []);

  // Form State matching screenshot
  const [form, setForm] = useState({
    judul: "",
    bebanBiaya: "",
    pbj: "",
    sumberDana: "",
    jenisKontrak: "Barang",
    nilaiRkap: "",
    tahunRkap: new Date().getFullYear().toString(),
    typeTax: "PPN 11%",
    nilaiTax: "",
    startDate: "",
    endDate: "",
    keterangan: "",
  });

  const handleCreateRup = (e: React.FormEvent) => {
    e.preventDefault();
    const today = new Date().toISOString().split("T")[0];

    const formattedNilai = form.nilaiRkap
      ? form.nilaiRkap.startsWith("Rp")
        ? form.nilaiRkap
        : `Rp ${form.nilaiRkap}`
      : "Rp 0";

    if (editingId) {
      updateRup(editingId, {
        nama: form.judul,
        jenis: form.jenisKontrak,
        nilai: formattedNilai,
        status: "pending"
      });
      addVerifRecord({
        id: generateId("VR"),
        pengadaanId: editingId,
        pengadaanNama: form.judul,
        departemen: currentUser?.departemen || "Umum",
        nominal: formattedNilai,
        tipe: "rup",
        submitBy: currentUser?.name || "User",
        submitAt: new Date().toISOString(),
        status: "pending",
      });
      api.put(`/rup/${editingId}`, {
        nama: form.judul,
        jenis: form.jenisKontrak,
        nilai: formattedNilai,
        status: "pending"
      }).catch(() => {});
    } else {
      const id = generateId("RUP");
      const newRup: RupItem = {
        id,
        nama: form.judul || "Pengadaan RUP Baru",
        jenis: form.jenisKontrak,
        metode: "Tender",
        nilai: formattedNilai,
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
    }

    setItems(getRupList());
    setSavedSuccess(true);
    
    setTimeout(() => {
      setSavedSuccess(false);
      setShowModal(false);
      setEditingId(null);
      setForm({
        judul: "",
        bebanBiaya: "",
        pbj: "",
        sumberDana: "",
        jenisKontrak: "Barang",
        nilaiRkap: "",
        tahunRkap: new Date().getFullYear().toString(),
        typeTax: "PPN 11%",
        nilaiTax: "",
        startDate: "",
        endDate: "",
        keterangan: "",
      });
    }, 1200);
  };

  const handleEditClick = (item: RupItem) => {
    setForm({
      judul: item.nama,
      bebanBiaya: "",
      pbj: "",
      sumberDana: "",
      jenisKontrak: item.jenis,
      nilaiRkap: item.nilai.replace(/[^0-9]/g, ''),
      tahunRkap: new Date(item.createdAt).getFullYear().toString(),
      typeTax: "PPN 11%",
      nilaiTax: "",
      startDate: "",
      endDate: "",
      keterangan: "",
    });
    setEditingId(item.id);
    setShowModal(true);
  };
  const filteredItems = items.filter(
    (item) =>
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.departemen.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <TopBar title="Rencana Umum Pengadaan - RUP" />

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        {/* Dark Navy Header Bar */}
        <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-4 bg-[#1e1c56] text-white">
          <div>
            <h2 className="font-bold text-[15px] tracking-wide">Daftar RUP</h2>
            <p className="text-white/60 text-[11px] mt-0.5">
              {filteredItems.length} dari {items.length} pengadaan
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white/95 text-gray-800 pl-9 pr-4 py-1.5 rounded-full text-[12px] placeholder-gray-400 focus:outline-none w-44 sm:w-56 shadow-inner"
                placeholder="Pencarian..."
              />
            </div>

            <button
              onClick={() => {
                setEditingId(null);
                setForm({
                  judul: "",
                  bebanBiaya: "",
                  pbj: "",
                  sumberDana: "",
                  jenisKontrak: "Barang",
                  nilaiRkap: "",
                  tahunRkap: new Date().getFullYear().toString(),
                  typeTax: "PPN 11%",
                  nilaiTax: "",
                  startDate: "",
                  endDate: "",
                  keterangan: "",
                });
                setShowModal(true);
              }}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[12px] font-semibold text-white transition-all shadow-sm hover:opacity-90 active:scale-[0.98]"
              style={{ background: "linear-gradient(75deg, #e6251c, #ff7676)" }}
            >
              <Plus size={14} /> RUP Baru
            </button>
          </div>
        </div>

        {/* RUP Table */}
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50/80 border-b border-gray-100">
              {["NO. DOKUMEN", "JUDUL PENGADAAN", "NILAI RKAP", "DEPARTEMEN", "PBJ", "BEBAN BIAYA", "STATUS", "AKSI"].map((h) => (
                <th key={h} className="text-left px-5 py-3 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredItems.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-5 py-10 text-center text-[12px] text-gray-400">
                  Belum ada data RUP. Klik "+ RUP Baru" untuk membuat RUP.
                </td>
              </tr>
            ) : (
              filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                  <td className="px-5 py-4 text-[12px] font-semibold text-gray-700">{item.id}</td>
                  <td className="px-5 py-4">
                    <p className="font-semibold text-gray-800 text-[12px]">{item.nama}</p>
                    <p className="text-gray-400 text-[10px]">Tahun {new Date(item.createdAt).getFullYear()}</p>
                  </td>
                  <td className="px-5 py-4 text-[12px] font-semibold text-gray-800">{item.nilai}</td>
                  <td className="px-5 py-4 text-[12px] text-gray-600">{item.departemen}</td>
                  <td className="px-5 py-4 text-[12px] text-gray-600">-</td>
                  <td className="px-5 py-4 text-[12px] text-gray-600">-</td>
                  <td className="px-5 py-4">
                    <StatusBadge status={item.status} />
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => {
                        const canEdit = item.status === 'revisi' || item.status === 'pending';
                        setIsViewOnly(!canEdit);
                        handleEditClick(item);
                      }}
                      className="flex items-center justify-center p-1.5 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors border border-blue-200 shadow-sm"
                      title="Lihat Detail"
                    >
                      <Eye size={14} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* RUP BARU MODAL POPUP (Matching Right Screenshot) */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[720px] overflow-hidden my-6 border border-gray-100 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header Bar */}
            <div className="bg-[#1e1c60] px-6 py-4 flex items-center justify-between text-white">
              <h3 className="font-bold text-[16px] tracking-wide">{editingId ? "Edit RUP" : "RUP Baru"}</h3>
              <button
                onClick={() => { setShowModal(false); setEditingId(null); }}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Form Body */}
            <form onSubmit={handleCreateRup} className="p-6 space-y-4">
              {savedSuccess && (
                <div className="mb-4 bg-green-50 border border-green-200 rounded-xl px-4 py-2.5 flex items-center gap-2">
                  <Check size={16} className="text-green-600 shrink-0" />
                  <span className="text-green-700 text-[12px] font-medium">Data RUP Baru berhasil disimpan!</span>
                </div>
              )}

              <fieldset disabled={isViewOnly} className="space-y-4 border-none p-0 m-0">
                {/* Judul Pengadaan */}
                <div>
                  <label className="block text-[12px] font-medium text-gray-700 mb-1">
                    Judul Pengadaan <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.judul}
                    onChange={(e) => setForm({ ...form, judul: e.target.value })}
                    placeholder="Masukkan judul pengadaan..."
                    className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-3.5 py-2.5 text-[12px] text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#252271]/20 transition-all"
                  />
                </div>

                {/* Row 1: Beban Biaya & PBJ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">
                      Beban Biaya <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.bebanBiaya}
                      onChange={(e) => setForm({ ...form, bebanBiaya: e.target.value })}
                      className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-3.5 py-2.5 text-[12px] text-gray-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#252271]/20 transition-all"
                    >
                      <option value="">Pilih Beban Biaya...</option>
                      <option value="CAPEX">CAPEX</option>
                      <option value="OPEX">OPEX</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">
                      PBJ <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.pbj}
                      onChange={(e) => setForm({ ...form, pbj: e.target.value })}
                      className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-3.5 py-2.5 text-[12px] text-gray-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#252271]/20 transition-all"
                    >
                      <option value="">Pilih PBJ...</option>
                      <option value="PBJ Logistik">PBJ Logistik</option>
                      <option value="PBJ IT">PBJ IT</option>
                      <option value="PBJ Konstruksi">PBJ Konstruksi</option>
                    </select>
                  </div>
                </div>

                {/* Row 2: Sumber Dana & Jenis Kontrak */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">
                      Sumber Dana <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.sumberDana}
                      onChange={(e) => setForm({ ...form, sumberDana: e.target.value })}
                      className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-3.5 py-2.5 text-[12px] text-gray-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#252271]/20 transition-all"
                    >
                      <option value="">Pilih Sumber Dana...</option>
                      <option value="Internal">Internal</option>
                      <option value="BUMN">BUMN</option>
                      <option value="APBN">APBN</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">
                      Jenis Kontrak <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={form.jenisKontrak}
                      onChange={(e) => setForm({ ...form, jenisKontrak: e.target.value })}
                      className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-3.5 py-2.5 text-[12px] text-gray-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#252271]/20 transition-all"
                    >
                      <option value="Barang">Barang</option>
                      <option value="Jasa">Jasa</option>
                      <option value="Konstruksi">Konstruksi</option>
                      <option value="Konsultansi">Konsultansi</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Nilai RKAP & Tahun RKAP */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">
                      Nilai RKAP (Sebelum Pajak) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nilaiRkap}
                      onChange={(e) => setForm({ ...form, nilaiRkap: e.target.value })}
                      placeholder="Rp 0"
                      className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-3.5 py-2.5 text-[12px] text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#252271]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">
                      Tahun RKAP <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.tahunRkap}
                      onChange={(e) => setForm({ ...form, tahunRkap: e.target.value })}
                      className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-3.5 py-2.5 text-[12px] text-gray-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#252271]/20 transition-all"
                    >
                      <option value="">Pilih Tahun...</option>
                      {Array.from({length: 5}, (_, i) => new Date().getFullYear() + i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Type Tax & Nilai Tax */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">
                      Type Tax <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.typeTax}
                      onChange={(e) => setForm({ ...form, typeTax: e.target.value })}
                      className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-3.5 py-2.5 text-[12px] text-gray-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#252271]/20 transition-all"
                    >
                      <option value="">Pilih Type Tax...</option>
                      <option value="PPN 11%">PPN 11%</option>
                      <option value="PPN 12%">PPN 12%</option>
                      <option value="Tanpa PPN">Tanpa PPN</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">
                      Nilai Tax
                    </label>
                    <select
                      value={form.nilaiTax}
                      onChange={(e) => setForm({ ...form, nilaiTax: e.target.value })}
                      className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-3.5 py-2.5 text-[12px] text-gray-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#252271]/20 transition-all"
                    >
                      <option value="">Pilih Nilai Tax...</option>
                      <option value="11%">11%</option>
                      <option value="12%">12%</option>
                      <option value="0%">0%</option>
                    </select>
                  </div>
                </div>

                {/* Row 5: Start Date & End Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">
                      Start Date Pengadaan <span className="text-gray-400 text-[11px] font-normal">(opsional)</span>
                    </label>
                    <input
                      type="date"
                      value={form.startDate}
                      onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                      className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-3.5 py-2.5 text-[12px] text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#252271]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">
                      End Date Pengadaan <span className="text-gray-400 text-[11px] font-normal">(opsional)</span>
                    </label>
                    <input
                      type="date"
                      value={form.endDate}
                      onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                      className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-3.5 py-2.5 text-[12px] text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#252271]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Keterangan */}
                <div>
                  <label className="block text-[12px] font-medium text-gray-700 mb-1">
                    Keterangan <span className="text-gray-400 text-[11px] font-normal">(opsional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={form.keterangan}
                    onChange={(e) => setForm({ ...form, keterangan: e.target.value })}
                    placeholder="Tambahkan keterangan jika diperlukan..."
                    className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-3.5 py-2.5 text-[12px] text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#252271]/20 transition-all resize-none"
                  />
                </div>
              </fieldset>

              {/* Modal Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => { setShowModal(false); setEditingId(null); }}
                  className="px-5 py-2 rounded-xl border border-gray-300 text-[12px] font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  {isViewOnly ? "Tutup" : "Batal"}
                </button>
                {!isViewOnly && (
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-xl text-[12px] font-semibold text-white bg-[#252271] hover:bg-[#1c1959] transition-all shadow-sm active:scale-[0.98]"
                  >
                    {editingId ? "Simpan Perubahan" : "Simpan RUP"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

