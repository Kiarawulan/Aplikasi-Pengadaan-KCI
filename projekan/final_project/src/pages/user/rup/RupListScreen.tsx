import { useState, useEffect } from "react";
import { Search, Plus, X, Check, Edit2, Eye } from "lucide-react";
import { TopBar } from "@/components/user/layout/TopBar";
import { StatusBadge } from "@/components/common/StatusBadge";
import { useAuth } from "@/store/authStore";
import { getRupList, addRup, updateRup, addVerifRecord, generateId, getVerifRecords, updateVerifRecord } from "@/store/dataStore";
import { PARK_STEPS } from "@/constants/steps";
import { api } from "@/services/api";
import type { RupItem } from "@/types";
import { TambahRupModal } from "@/components/user/pengadaan/TambahRupModal";
import { RupDetailView } from "@/components/user/pengadaan/RupDetailView";


export function RupListScreen() {
  const { currentUser, isAdmin } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isViewOnly, setIsViewOnly] = useState(false);
  const [search, setSearch] = useState("");
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [revisionNote, setRevisionNote] = useState<string | null>(null);
  const [items, setItems] = useState<RupItem[]>(getRupList());

  const fetchRup = async () => {
    try {
      const [resRup, resVerif] = await Promise.all([
        api.get("/rup").catch(() => ({ data: [] })),
        api.get("/verifikasi").catch(() => ({ data: [] }))
      ]);

      const dbRups = resRup.data || [];
      const dbVerifs = resVerif.data || [];
      const storeVerifs = getVerifRecords();
      const localRups = getRupList();

      const mergedMap = new Map<string, RupItem>();

      localRups.forEach((item) => {
        const verif = storeVerifs.find(v => v.pengadaanId === item.id);
        mergedMap.set(item.id, {
          ...item,
          status: (verif?.status || item.status) as any,
          catatanAdmin: verif?.catatanAdmin || item.catatanAdmin,
        });
      });

      dbRups.forEach((r: any) => {
        const existing = mergedMap.get(r.id) || ({} as any);
        const verif = dbVerifs.find((v: any) => v.pengadaan_id === r.id);
        const storeV = storeVerifs.find(v => v.pengadaanId === r.id);

        const finalStatus = verif?.status || r.status || storeV?.status || existing.status || "pending";
        const finalCatatan = verif?.catatan_admin || r.catatan_admin || storeV?.catatanAdmin || r.catatanAdmin || existing.catatanAdmin;

        mergedMap.set(r.id, {
          ...existing,
          ...r,
          ...(r.details || {}),
          id: r.id,
          nama: r.nama || existing.nama,
          jenis: r.jenis || existing.jenis,
          metode: r.metode || existing.metode,
          nilai: r.nilai || existing.nilai,
          status: finalStatus,
          catatanAdmin: finalCatatan,
          departemen: r.departemen || existing.departemen,
        });
      });

      dbVerifs.forEach((v: any) => {
        if (v.tipe === "rup" || v.pengadaan_id?.startsWith("RUP")) {
          const existing = mergedMap.get(v.pengadaan_id);
          if (existing) {
            mergedMap.set(v.pengadaan_id, {
              ...existing,
              status: v.status || existing.status,
              catatanAdmin: v.catatan_admin || existing.catatanAdmin,
            });
          }
        }
      });

      setItems(Array.from(mergedMap.values()));
    } catch (err) {
      console.error("Error fetching RUP data:", err);
    }
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
      const existingVerif = getVerifRecords().find(r => r.pengadaanId === editingId);
      if (existingVerif) {
        updateVerifRecord(existingVerif.id, { status: "pending", catatanAdmin: "" });
        api.put(`/verifikasi/${existingVerif.id}`, { status: "pending", catatan_admin: "" }).catch(() => {});
      } else {
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
      }
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
    const verif = getVerifRecords().find(r => r.pengadaanId === item.id);
    const note = item.catatanAdmin || verif?.catatanAdmin || null;
    const d = (item as any).details || item;
    setForm({
      ...d,
      judul: item.nama,
      namaPaket: d.namaPaket || item.nama,
      jenisPengadaan: d.jenisPengadaan || item.jenis,
      nilaiSebelumPajak: d.nilaiSebelumPajak || item.nilai,
      catatanAdmin: note,
    });
    setRevisionNote(note);
    setEditingId(item.id);
    setShowModal(true);
  };

  const userDept = (currentUser?.departemen || "").trim().toLowerCase();
  const userHasDeptLimit = !isAdmin && userDept && userDept !== "admin" && userDept !== "management" && userDept !== "semua";

  const filteredItems = items.filter((item) => {
    if (userHasDeptLimit) {
      const itemDept = (item.departemen || "").trim().toLowerCase();
      const matchDept = itemDept.includes(userDept) || userDept.includes(itemDept);
      if (!matchDept) return false;
    }
    return (
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.departemen.toLowerCase().includes(search.toLowerCase())
    );
  });

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
                        const canEdit = (item.status === 'revisi' || item.status === 'pending') && currentUser?.departemen === item.departemen;
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

      {showModal && isViewOnly && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl p-6 relative my-8">
            <button
              onClick={() => { setShowModal(false); setIsViewOnly(false); }}
              className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors z-10"
            >
              <X size={18} />
            </button>
            <RupDetailView item={form} showActions={false} />
          </div>
        </div>
      )}

      {showModal && !isViewOnly && (
        <TambahRupModal
          onClose={() => { setShowModal(false); setEditingId(null); }}
          initialData={form}
          onSubmit={(formData) => {
            const formattedNilai = formData.nilaiSebelumPajak
              ? (formData.nilaiSebelumPajak.startsWith("Rp") ? formData.nilaiSebelumPajak : `Rp ${formData.nilaiSebelumPajak}`)
              : "Rp 0";

            if (editingId) {
              const updatedData: Partial<RupItem> = {
                ...formData,
                nama: formData.namaPaket || form.judul,
                jenis: formData.jenisPengadaan || "Barang",
                nilai: formattedNilai,
                status: "pending",
                catatanAdmin: "",
                details: formData,
              };
              updateRup(editingId, updatedData);
              const existingVerif = getVerifRecords().find(r => r.pengadaanId === editingId);
              if (existingVerif) {
                updateVerifRecord(existingVerif.id, { status: "pending", catatanAdmin: "" });
                api.put(`/verifikasi/${existingVerif.id}`, { status: "pending", catatan_admin: "" }).catch(() => {});
              }
              api.put(`/rup/${editingId}`, {
                nama: formData.namaPaket || form.judul,
                jenis: formData.jenisPengadaan || "Barang",
                nilai: formattedNilai,
                status: "pending",
                catatan_admin: "",
                details: formData,
              }).catch(() => {});
            } else {
              const id = generateId("RUP");
              const newRup: RupItem = {
                ...formData,
                id,
                nama: formData.namaPaket || "Pengadaan RUP Baru",
                jenis: formData.jenisPengadaan || "Barang",
                metode: formData.metode || "Penunjukan Langsung",
                nilai: formattedNilai,
                status: "pending",
                progress: "0/14",
                departemen: currentUser?.departemen || "Umum",
                createdBy: currentUser?.name || currentUser?.id || "User",
                createdAt: new Date().toISOString().split("T")[0],
                details: formData,
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
              api.post('/rup', newRup).catch(console.error);
            }
            fetchRup();
            setShowModal(false);
            setEditingId(null);
          }}
        />
      )}
    </div>
  );
}

