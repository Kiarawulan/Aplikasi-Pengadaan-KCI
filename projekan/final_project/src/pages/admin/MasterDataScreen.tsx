import { useState } from "react";
import { AdminTopBar } from "../../components/admin/AdminTopBar";
import { VerifTable } from "../../components/admin/VerifTable";
import { AdminModal, ConfirmModal, ModalField, ModalInput, ModalSelect } from "../../components/admin/AdminModal";
import { getVendors, addVendor, updateVendor, deleteVendor, getHargaSatuan, addHargaSatuan, updateHargaSatuan, deleteHargaSatuan, generateId, formatCurrency } from "../../store/dataStore";
import type { Vendor, HargaSatuan } from "../../types";

type Tab = "vendor" | "harga-satuan" | "bank" | "biz" | "payment-type" | "warehouse" | "inklaring" | "jamlak";

const TABS: { id: Tab; label: string }[] = [
  { id: "vendor", label: "Vendor" },
  { id: "harga-satuan", label: "Harga Satuan" },
  { id: "bank", label: "Banks" },
  { id: "biz", label: "Business Areas" },
  { id: "payment-type", label: "Detail Pembayaran" },
  { id: "warehouse", label: "Warehouse" },
  { id: "inklaring", label: "Import Inklaring" },
  { id: "jamlak", label: "Jaminan Pelaksanaan" },
];

const KATEGORI_VENDOR = [
  { value: "Teknologi", label: "Teknologi" }, { value: "Elektronik", label: "Elektronik" },
  { value: "Furnitur", label: "Furnitur" }, { value: "General", label: "General" },
  { value: "Jasa", label: "Jasa" }, { value: "Konstruksi", label: "Konstruksi" },
];

const STATUS_VENDOR = [
  { value: "aktif", label: "Aktif" }, { value: "blacklist", label: "Blacklist" }, { value: "non-aktif", label: "Non-Aktif" },
];

const KATEGORI_HARGA = [
  { value: "IT Hardware", label: "IT Hardware" }, { value: "IT Supplies", label: "IT Supplies" },
  { value: "Elektronik", label: "Elektronik" }, { value: "ATK", label: "ATK" },
  { value: "Furnitur", label: "Furnitur" }, { value: "Jasa", label: "Jasa" },
];

// Mock C-FITS & Pengadaan Master Data
const MOCK_BANKS = [
  { id: "BNK-001", name: "Bank BNI", code: "009", address: "Jl. Jend. Sudirman Kav. 1, Jakarta", phone: "021-2511946", fax: "021-2511947", website: "www.bni.co.id" },
  { id: "BNK-002", name: "Bank BRI", code: "002", address: "Jl. Jend. Sudirman No. 44-46, Jakarta", phone: "021-5751966", fax: "021-5700916", website: "www.bri.co.id" },
  { id: "BNK-003", name: "Bank Mandiri", code: "008", address: "Jl. Jend. Gatot Subroto Kav. 36-38, Jakarta", phone: "021-5265000", fax: "021-5265008", website: "www.bankmandiri.co.id" },
  { id: "BNK-004", name: "Bank BCA", code: "014", address: "Menara BCA, Jl. M.H. Thamrin No. 1, Jakarta", phone: "021-23588000", fax: "021-23588300", website: "www.bca.co.id" },
];

const MOCK_BIZ_AREAS = [
  { id: "BIZ-001", name: "Area DAOP 1 Jakarta", code: "BIZ-JKT-01" },
  { id: "BIZ-002", name: "Area Depo KRL Bogor", code: "BIZ-BGR-02" },
  { id: "BIZ-003", name: "Area Depo KRL Depok", code: "BIZ-[#DPK]-03" },
  { id: "BIZ-004", name: "Area Stasiun Juanda", code: "BIZ-JDA-04" },
  { id: "BIZ-005", name: "Area Balai Yasa Manggarai", code: "BIZ-MRI-05" },
];

const MOCK_PAYMENT_TYPES = [
  { id: "PAYT-001", typeName: "Outsource", detailName: "Gaji & Tunjangan Outsource" },
  { id: "PAYT-002", typeName: "Outsource", detailName: "Penyedia Jasa Keamanan Stasiun" },
  { id: "PAYT-003", typeName: "Non Outsource", detailName: "Maintenance & Pemeliharaan Sarana" },
  { id: "PAYT-004", typeName: "Non Outsource", detailName: "Pengadaan IT Hardware & Server" },
  { id: "PAYT-005", typeName: "UMD", detailName: "Uang Muka Dinas Perjalanan & Operasional" },
];

// Mock warehouse data
const WAREHOUSE_TABS = [
  { id: "card", label: "Kartu Stok" },
  { id: "spare-part", label: "Spare Part" },
  { id: "waste", label: "Waste" },
];

const MOCK_WAREHOUSE = {
  card: [
    { id: "WH-001", nama: "Laptop Dell Latitude 5540", stok: 5, satuan: "Unit", lokasi: "Rak A-1", kondisi: "Baik" },
    { id: "WH-002", nama: 'Monitor LG 27 Inch', stok: 3, satuan: "Unit", lokasi: "Rak A-2", kondisi: "Baik" },
    { id: "WH-003", nama: "Kertas A4 80gr", stok: 50, satuan: "Rim", lokasi: "Rak B-1", kondisi: "Baik" },
  ],
  "spare-part": [
    { id: "SP-001", nama: "Baterai Laptop HP", stok: 10, satuan: "Pcs", lokasi: "Rak C-1", kondisi: "Baik" },
    { id: "SP-002", nama: "Charger Dell 65W", stok: 7, satuan: "Pcs", lokasi: "Rak C-2", kondisi: "Baik" },
  ],
  waste: [
    { id: "WT-001", nama: "Laptop Rusak (EOL)", stok: 3, satuan: "Unit", lokasi: "Gudang Waste", kondisi: "Rusak" },
    { id: "WT-002", nama: "Monitor CRT", stok: 5, satuan: "Unit", lokasi: "Gudang Waste", kondisi: "Rusak" },
  ],
};

const MOCK_INKLARING = [
  { id: "INK-001", noContainer: "MSCU1234567", noBL: "BL-2024-001", asal: "China", barang: "Komponen Server", tanggal: "2024-02-15", status: "selesai" },
  { id: "INK-002", noContainer: "MSCU7654321", noBL: "BL-2024-002", asal: "Japan", barang: "Mesin CNC", tanggal: "2024-03-01", status: "proses" },
];

const MOCK_JAMLAK = [
  { id: "JML-001", vendor: "PT Maju Bersama Teknologi", kontrak: "KTR-2024-001", nilai: "Rp 7.500.000", berlaku: "2024-12-31", status: "aktif" },
  { id: "JML-002", vendor: "CV Solusi Elektronik", kontrak: "KTR-2024-002", nilai: "Rp 2.500.000", berlaku: "2024-06-30", status: "kadaluarsa" },
];

// ─── Vendor Tab ────────────────────────────────────────────────────────────────
function VendorTab() {
  const [vendors, setVendors] = useState<Vendor[]>(() => getVendors());
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<Vendor | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const emptyVendor = (): Vendor => ({
    id: generateId("VND"), nama: "", npwp: "", alamat: "", kontakPerson: "", telepon: "", email: "", kategori: "General", status: "aktif", createdAt: new Date().toISOString().split("T")[0],
  });
  const [form, setForm] = useState<Vendor>(emptyVendor());
  const [editForm, setEditForm] = useState<Vendor | null>(null);
  const refresh = () => setVendors(getVendors());

  const columns = [
    { key: "vendor", label: "Nama Vendor", render: (v: Vendor) => (
      <div><p className="font-semibold text-gray-800 text-[12px]">{v.nama}</p><p className="text-gray-400 text-[10px]">NPWP: {v.npwp}</p></div>
    )},
    { key: "kontak", label: "Kontak", render: (v: Vendor) => (
      <div><p className="text-[11.5px] text-gray-700">{v.kontakPerson}</p><p className="text-gray-400 text-[10px]">{v.telepon}</p></div>
    )},
    { key: "kategori", label: "Kategori", render: (v: Vendor) => <span className="text-[11.5px] text-gray-600">{v.kategori}</span> },
    { key: "status", label: "Status", render: (v: Vendor) => {
      const cfg: Record<string, string> = { aktif: "bg-green-50 text-green-600", blacklist: "bg-red-50 text-red-600", "non-aktif": "bg-gray-100 text-gray-500" };
      return <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-medium ${cfg[v.status]}`}>{v.status.charAt(0).toUpperCase() + v.status.slice(1)}</span>;
    }},
  ];

  const VendorForm = ({ val, set }: { val: Vendor; set: (v: Vendor) => void }) => (
    <div className="space-y-3">
      <ModalField label="Nama Vendor" required><ModalInput value={val.nama} onChange={v => set({ ...val, nama: v })} /></ModalField>
      <ModalField label="NPWP"><ModalInput value={val.npwp} onChange={v => set({ ...val, npwp: v })} placeholder="XX.XXX.XXX.X-XXX.XXX" /></ModalField>
      <div className="grid grid-cols-2 gap-3">
        <ModalField label="Kategori"><ModalSelect value={val.kategori} onChange={v => set({ ...val, kategori: v })} options={KATEGORI_VENDOR} /></ModalField>
        <ModalField label="Status"><ModalSelect value={val.status} onChange={(v: string) => set({ ...val, status: v as Vendor["status"] })} options={STATUS_VENDOR} /></ModalField>
      </div>
      <ModalField label="Kontak Person"><ModalInput value={val.kontakPerson} onChange={v => set({ ...val, kontakPerson: v })} /></ModalField>
      <div className="grid grid-cols-2 gap-3">
        <ModalField label="Telepon"><ModalInput value={val.telepon} onChange={v => set({ ...val, telepon: v })} /></ModalField>
        <ModalField label="Email"><ModalInput type="email" value={val.email} onChange={v => set({ ...val, email: v })} /></ModalField>
      </div>
      <ModalField label="Alamat"><ModalInput value={val.alamat} onChange={v => set({ ...val, alamat: v })} /></ModalField>
    </div>
  );

  return (
    <>
      <VerifTable
        columns={columns} data={vendors} searchKeys={["nama", "npwp", "kontakPerson"]}
        onEdit={(v) => { setEditForm({ ...v }); setShowEdit(v); }}
        onDelete={(v) => setDeleteId(v.id)}
        onAdd={() => { setForm(emptyVendor()); setShowAdd(true); }}
        addLabel="Tambah Vendor" showCrudActions={true}
        filterOptions={[{ key: "status", label: "Status", options: STATUS_VENDOR }, { key: "kategori", label: "Kategori", options: KATEGORI_VENDOR }]}
      />
      {showAdd && (
        <AdminModal title="Tambah Vendor" onClose={() => setShowAdd(false)} onSubmit={() => { addVendor(form); setShowAdd(false); setForm(emptyVendor()); refresh(); }} submitLabel="Tambah" width="max-w-lg">
          <VendorForm val={form} set={setForm} />
        </AdminModal>
      )}
      {showEdit && editForm && (
        <AdminModal title="Edit Vendor" onClose={() => setShowEdit(null)} onSubmit={() => { updateVendor(editForm); setShowEdit(null); refresh(); }} submitLabel="Simpan" width="max-w-lg">
          <VendorForm val={editForm} set={setEditForm as (v: Vendor) => void} />
        </AdminModal>
      )}
      {deleteId && <ConfirmModal title="Hapus Vendor" message="Yakin ingin menghapus vendor ini?" onConfirm={() => { deleteVendor(deleteId); setDeleteId(null); refresh(); }} onClose={() => setDeleteId(null)} confirmLabel="Ya, Hapus" destructive />}
    </>
  );
}

// ─── Harga Satuan Tab ──────────────────────────────────────────────────────────
function HargaSatuanTab() {
  const [items, setItems] = useState<HargaSatuan[]>(() => getHargaSatuan());
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<HargaSatuan | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const emptyItem = (): HargaSatuan => ({
    id: generateId("HS"), namaBarang: "", satuan: "Unit", harga: 0, kategori: "IT Hardware", tahun: "2024", updatedAt: new Date().toISOString().split("T")[0],
  });
  const [form, setForm] = useState<HargaSatuan>(emptyItem());
  const [editForm, setEditForm] = useState<HargaSatuan | null>(null);
  const refresh = () => setItems(getHargaSatuan());

  const SATUAN_OPTS = [{ value: "Unit", label: "Unit" }, { value: "Rim", label: "Rim" }, { value: "Pcs", label: "Pcs" }, { value: "Set", label: "Set" }, { value: "Meter", label: "Meter" }];
  const TAHUN_OPTS = [{ value: "2023", label: "2023" }, { value: "2024", label: "2024" }, { value: "2025", label: "2025" }];

  const columns = [
    { key: "nama", label: "Nama Barang", render: (h: HargaSatuan) => <p className="font-semibold text-gray-800 text-[12px]">{h.namaBarang}</p> },
    { key: "satuan", label: "Satuan", render: (h: HargaSatuan) => <span className="text-[11.5px] text-gray-600">{h.satuan}</span> },
    { key: "harga", label: "Harga", render: (h: HargaSatuan) => <span className="font-semibold text-[#252271] text-[12px]">{formatCurrency(h.harga)}</span> },
    { key: "kategori", label: "Kategori", render: (h: HargaSatuan) => <span className="bg-gray-100 text-gray-600 text-[10.5px] px-2 py-0.5 rounded-full">{h.kategori}</span> },
    { key: "tahun", label: "Tahun", render: (h: HargaSatuan) => <span className="text-[11.5px] text-gray-500">{h.tahun}</span> },
  ];

  const HargaForm = ({ val, set }: { val: HargaSatuan; set: (v: HargaSatuan) => void }) => (
    <div className="space-y-3">
      <ModalField label="Nama Barang" required><ModalInput value={val.namaBarang} onChange={v => set({ ...val, namaBarang: v })} /></ModalField>
      <div className="grid grid-cols-3 gap-3">
        <ModalField label="Satuan"><ModalSelect value={val.satuan} onChange={v => set({ ...val, satuan: v })} options={SATUAN_OPTS} /></ModalField>
        <ModalField label="Harga (Rp)"><ModalInput type="number" value={String(val.harga)} onChange={v => set({ ...val, harga: Number(v) })} /></ModalField>
        <ModalField label="Tahun"><ModalSelect value={val.tahun} onChange={v => set({ ...val, tahun: v })} options={TAHUN_OPTS} /></ModalField>
      </div>
      <ModalField label="Kategori"><ModalSelect value={val.kategori} onChange={v => set({ ...val, kategori: v })} options={KATEGORI_HARGA} /></ModalField>
    </div>
  );

  return (
    <>
      <VerifTable
        columns={columns} data={items} searchKeys={["namaBarang", "kategori"]}
        onEdit={(h) => { setEditForm({ ...h }); setShowEdit(h); }}
        onDelete={(h) => setDeleteId(h.id)}
        onAdd={() => { setForm(emptyItem()); setShowAdd(true); }}
        addLabel="Tambah Harga" showCrudActions={true}
        filterOptions={[{ key: "kategori", label: "Kategori", options: KATEGORI_HARGA }, { key: "tahun", label: "Tahun", options: [{ value: "2023", label: "2023" }, { value: "2024", label: "2024" }] }]}
      />
      {showAdd && (
        <AdminModal title="Tambah Harga Satuan" onClose={() => setShowAdd(false)} onSubmit={() => { addHargaSatuan(form); setShowAdd(false); setForm(emptyItem()); refresh(); }} submitLabel="Tambah" width="max-w-md">
          <HargaForm val={form} set={setForm} />
        </AdminModal>
      )}
      {showEdit && editForm && (
        <AdminModal title="Edit Harga Satuan" onClose={() => setShowEdit(null)} onSubmit={() => { updateHargaSatuan(editForm); setShowEdit(null); refresh(); }} submitLabel="Simpan" width="max-w-md">
          <HargaForm val={editForm} set={setEditForm as (v: HargaSatuan) => void} />
        </AdminModal>
      )}
      {deleteId && <ConfirmModal title="Hapus Harga Satuan" message="Yakin ingin menghapus data ini?" onConfirm={() => { deleteHargaSatuan(deleteId); setDeleteId(null); refresh(); }} onClose={() => setDeleteId(null)} confirmLabel="Ya, Hapus" destructive />}
    </>
  );
}

// ─── Bank Tab ──────────────────────────────────────────────────────────────────
function BankTab() {
  const [banks, setBanks] = useState(MOCK_BANKS);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState<any>(null);
  const [form, setForm] = useState({ name: "", code: "", address: "", phone: "", fax: "", website: "" });

  const columns = [
    { key: "code", label: "Kode Bank", render: (r: any) => <span className="font-mono font-bold text-gray-700 text-[11.5px]">{r.code}</span> },
    { key: "name", label: "Nama Bank", render: (r: any) => (
      <div><p className="font-semibold text-gray-800 text-[12px]">{r.name}</p><p className="text-gray-400 text-[10px]">{r.website}</p></div>
    )},
    { key: "address", label: "Alamat Bank", render: (r: any) => <span className="text-[11.5px] text-gray-600">{r.address}</span> },
    { key: "contact", label: "Kontak", render: (r: any) => <span className="text-[11.5px] text-gray-500">{r.phone} / Fax: {r.fax}</span> },
  ];

  const handleSubmitAdd = () => {
    setBanks([{ id: `BNK-${Math.floor(Math.random()*900)+100}`, name: form.name, code: form.code, address: form.address, phone: form.phone, fax: form.fax, website: form.website }, ...banks]);
    setShowAdd(false);
    setForm({ name: "", code: "", address: "", phone: "", fax: "", website: "" });
  };

  return (
    <>
      <VerifTable
        columns={columns} data={banks} searchKeys={["name", "code", "address"]}
        onAdd={() => setShowAdd(true)} addLabel="Add Bank" showCrudActions={true}
        onEdit={(r) => setShowEdit(r)}
        onDelete={(r) => setBanks(banks.filter(b => b.id !== r.id))}
      />
      {showAdd && (
        <AdminModal title="Add Bank" onClose={() => setShowAdd(false)} onSubmit={handleSubmitAdd} submitLabel="Submit" width="max-w-md">
          <div className="space-y-3">
            <ModalField label="Bank Name" required><ModalInput value={form.name} onChange={v => setForm(p => ({ ...p, name: v }))} placeholder="Bank BNI" /></ModalField>
            <ModalField label="Bank Code" required><ModalInput value={form.code} onChange={v => setForm(p => ({ ...p, code: v }))} placeholder="009" /></ModalField>
            <ModalField label="Bank Address"><ModalInput value={form.address} onChange={v => setForm(p => ({ ...p, address: v }))} placeholder="Jl. Jend. Sudirman..." /></ModalField>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Telepon"><ModalInput value={form.phone} onChange={v => setForm(p => ({ ...p, phone: v }))} /></ModalField>
              <ModalField label="Fax"><ModalInput value={form.fax} onChange={v => setForm(p => ({ ...p, fax: v }))} /></ModalField>
            </div>
            <ModalField label="Website"><ModalInput value={form.website} onChange={v => setForm(p => ({ ...p, website: v }))} placeholder="www.bank.co.id" /></ModalField>
          </div>
        </AdminModal>
      )}
      {showEdit && (
        <AdminModal title="Edit Master Bank" onClose={() => setShowEdit(null)} onSubmit={() => { setBanks(banks.map(b => b.id === showEdit.id ? showEdit : b)); setShowEdit(null); }} submitLabel="Update" width="max-w-md">
          <div className="space-y-3">
            <ModalField label="Bank Name" required><ModalInput value={showEdit.name} onChange={v => setShowEdit({ ...showEdit, name: v })} /></ModalField>
            <ModalField label="Bank Code" required><ModalInput value={showEdit.code} onChange={v => setShowEdit({ ...showEdit, code: v })} /></ModalField>
            <ModalField label="Bank Address"><ModalInput value={showEdit.address} onChange={v => setShowEdit({ ...showEdit, address: v })} /></ModalField>
            <div className="grid grid-cols-2 gap-3">
              <ModalField label="Telepon"><ModalInput value={showEdit.phone} onChange={v => setShowEdit({ ...showEdit, phone: v })} /></ModalField>
              <ModalField label="Fax"><ModalInput value={showEdit.fax} onChange={v => setShowEdit({ ...showEdit, fax: v })} /></ModalField>
            </div>
            <ModalField label="Website"><ModalInput value={showEdit.website} onChange={v => setShowEdit({ ...showEdit, website: v })} /></ModalField>
          </div>
        </AdminModal>
      )}
    </>
  );
}

// ─── Business Area Tab ─────────────────────────────────────────────────────────
function BusinessAreaTab() {
  const [areas, setAreas] = useState(MOCK_BIZ_AREAS);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: "", code: "" });

  const columns = [
    { key: "code", label: "Kode Area", render: (r: any) => <span className="font-mono font-bold text-gray-700 text-[11.5px]">{r.code}</span> },
    { key: "name", label: "Nama Business Area", render: (r: any) => <span className="font-semibold text-gray-800 text-[12px]">{r.name}</span> },
  ];

  return (
    <>
      <VerifTable
        columns={columns} data={areas} searchKeys={["name", "code"]}
        onAdd={() => setShowAdd(true)} addLabel="Add Business Area" showCrudActions={true}
        onDelete={(r) => setAreas(areas.filter(a => a.id !== r.id))}
      />
      {showAdd && (
        <AdminModal title="Add Business Area" onClose={() => setShowAdd(false)} onSubmit={() => {
          setAreas([{ id: `BIZ-${Math.floor(Math.random()*900)+100}`, name: form.name, code: form.code }, ...areas]);
          setShowAdd(false); setForm({ name: "", code: "" });
        }} submitLabel="Submit" width="max-w-md">
          <div className="space-y-3">
            <ModalField label="Business Area Name" required><ModalInput value={form.name} onChange={v => setForm(p => ({ ...p, name: v }))} placeholder="Area DAOP 1 Jakarta" /></ModalField>
            <ModalField label="Business Area Code" required><ModalInput value={form.code} onChange={v => setForm(p => ({ ...p, code: v }))} placeholder="BIZ-JKT-01" /></ModalField>
          </div>
        </AdminModal>
      )}
    </>
  );
}

// ─── Payment Type Tab ──────────────────────────────────────────────────────────
function PaymentTypeTab() {
  const [types, setTypes] = useState(MOCK_PAYMENT_TYPES);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ typeName: "Outsource", detailName: "" });

  const columns = [
    { key: "typeName", label: "Nama Type Pembayaran", render: (r: any) => (
      <span className="font-bold text-[#252271] text-[11.5px] bg-[#252271]/5 px-2.5 py-1 rounded-lg">{r.typeName}</span>
    )},
    { key: "detailName", label: "Nama Detail Type Pembayaran", render: (r: any) => <span className="font-medium text-gray-800 text-[12px]">{r.detailName}</span> },
  ];

  return (
    <>
      <VerifTable
        columns={columns} data={types} searchKeys={["typeName", "detailName"]}
        onAdd={() => setShowAdd(true)} addLabel="Add Payment Type" showCrudActions={true}
        onDelete={(r) => setTypes(types.filter(t => t.id !== r.id))}
      />
      {showAdd && (
        <AdminModal title="Add Payment Type" onClose={() => setShowAdd(false)} onSubmit={() => {
          setTypes([{ id: `PAYT-${Math.floor(Math.random()*900)+100}`, typeName: form.typeName, detailName: form.detailName }, ...types]);
          setShowAdd(false); setForm({ typeName: "Outsource", detailName: "" });
        }} submitLabel="Submit" width="max-w-md">
          <div className="space-y-3">
            <ModalField label="Payment Type" required>
              <ModalSelect value={form.typeName} onChange={v => setForm(p => ({ ...p, typeName: v }))}
                options={[{ value: "Outsource", label: "Outsource" }, { value: "Non Outsource", label: "Non Outsource" }, { value: "UMD", label: "UMD" }]} />
            </ModalField>
            <ModalField label="Detail Payment Type" required>
              <ModalInput value={form.detailName} onChange={v => setForm(p => ({ ...p, detailName: v }))} placeholder="Gaji & Tunjangan..." />
            </ModalField>
          </div>
        </AdminModal>
      )}
    </>
  );
}

// ─── Warehouse Tab ─────────────────────────────────────────────────────────────
function WarehouseTab() {
  const [activeWH, setActiveWH] = useState<"card" | "spare-part" | "waste">("card");
  const data = MOCK_WAREHOUSE[activeWH];

  const columns = [
    { key: "nama", label: "Nama Barang", render: (r: (typeof data)[0]) => <p className="font-semibold text-gray-800 text-[12px]">{r.nama}</p> },
    { key: "stok", label: "Stok", render: (r: (typeof data)[0]) => <span className="font-bold text-[#252271] text-[13px]">{r.stok} {r.satuan}</span> },
    { key: "lokasi", label: "Lokasi", render: (r: (typeof data)[0]) => <span className="text-[11.5px] text-gray-600">{r.lokasi}</span> },
    { key: "kondisi", label: "Kondisi", render: (r: (typeof data)[0]) => (
      <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-medium ${r.kondisi === "Baik" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>{r.kondisi}</span>
    )},
  ];

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {WAREHOUSE_TABS.map(t => (
          <button key={t.id} onClick={() => setActiveWH(t.id as any)}
            className={`px-4 py-1.5 rounded-xl text-[12px] font-medium transition-all ${activeWH === t.id ? "text-white" : "text-gray-500 bg-gray-100 hover:bg-gray-200"}`}
            style={activeWH === t.id ? { background: "linear-gradient(75deg, #e6251c, #ff7676)" } : {}}>
            {t.label}
          </button>
        ))}
      </div>
      <VerifTable columns={columns as any} data={data} searchKeys={["nama", "lokasi"] as any} showCrudActions={false} emptyMessage="Tidak ada data" />
    </div>
  );
}

// ─── Inklaring Tab ─────────────────────────────────────────────────────────────
function InklaringTab() {
  const columns = [
    { key: "no", label: "No Container", render: (r: typeof MOCK_INKLARING[0]) => <span className="font-mono text-[12px]">{r.noContainer}</span> },
    { key: "bl", label: "No BL", render: (r: typeof MOCK_INKLARING[0]) => <span className="text-[11.5px]">{r.noBL}</span> },
    { key: "asal", label: "Asal", render: (r: typeof MOCK_INKLARING[0]) => <span className="text-[11.5px]">{r.asal}</span> },
    { key: "barang", label: "Barang", render: (r: typeof MOCK_INKLARING[0]) => <span className="font-semibold text-[11.5px]">{r.barang}</span> },
    { key: "tanggal", label: "Tanggal", render: (r: typeof MOCK_INKLARING[0]) => <span className="text-[11.5px] text-gray-500">{r.tanggal}</span> },
    { key: "status", label: "Status", render: (r: typeof MOCK_INKLARING[0]) => (
      <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-medium ${r.status === "selesai" ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"}`}>
        {r.status.charAt(0).toUpperCase() + r.status.slice(1)}
      </span>
    )},
  ];

  return (
    <div>
      <div className="flex justify-end mb-3">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-medium border border-gray-200 text-gray-600 hover:bg-gray-50">
          📥 Import Excel
        </button>
      </div>
      <VerifTable columns={columns as any} data={MOCK_INKLARING as any} searchKeys={["noContainer", "noBL", "barang"] as any} showCrudActions={false} emptyMessage="Tidak ada data inklaring" />
    </div>
  );
}

// ─── Jamlak Tab ────────────────────────────────────────────────────────────────
function JamlakTab() {
  const columns = [
    { key: "vendor", label: "Vendor", render: (r: typeof MOCK_JAMLAK[0]) => <span className="font-semibold text-[12px]">{r.vendor}</span> },
    { key: "kontrak", label: "No Kontrak", render: (r: typeof MOCK_JAMLAK[0]) => <span className="font-mono text-[11.5px]">{r.kontrak}</span> },
    { key: "nilai", label: "Nilai Jaminan", render: (r: typeof MOCK_JAMLAK[0]) => <span className="font-semibold text-[12px] text-[#252271]">{r.nilai}</span> },
    { key: "berlaku", label: "Berlaku s/d", render: (r: typeof MOCK_JAMLAK[0]) => <span className="text-[11.5px] text-gray-500">{r.berlaku}</span> },
    { key: "status", label: "Status", render: (r: typeof MOCK_JAMLAK[0]) => (
      <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-medium ${r.status === "aktif" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"}`}>
        {r.status.charAt(0).toUpperCase() + r.status.slice(1)}
      </span>
    )},
  ];

  return <VerifTable columns={columns as any} data={MOCK_JAMLAK as any} searchKeys={["vendor", "kontrak"] as any} showCrudActions={false} emptyMessage="Tidak ada data jaminan" />;
}

// ─── Master Data Screen ────────────────────────────────────────────────────────
export function MasterDataScreen() {
  const [activeTab, setActiveTab] = useState<Tab>("vendor");

  const TAB_CONTENT: Record<Tab, React.ReactNode> = {
    vendor: <VendorTab />,
    "harga-satuan": <HargaSatuanTab />,
    bank: <BankTab />,
    biz: <BusinessAreaTab />,
    "payment-type": <PaymentTypeTab />,
    warehouse: <WarehouseTab />,
    inklaring: <InklaringTab />,
    jamlak: <JamlakTab />,
  };

  return (
    <div>
      <AdminTopBar title="Master Data" />

      {/* Tab switcher */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-4 py-2 rounded-xl text-[12.5px] font-medium transition-all ${activeTab === t.id ? "text-white shadow-sm" : "text-gray-500 bg-white border border-gray-200 hover:bg-gray-50"}`}
            style={activeTab === t.id ? { background: "linear-gradient(75deg, #e6251c, #ff7676)" } : {}}
          >
            {t.label}
          </button>
        ))}
      </div>

      {TAB_CONTENT[activeTab]}
    </div>
  );
}
