import { useEffect, useMemo, useState } from "react";
import { api } from "@/services/api";

export type MasterReferenceOption = Record<string, any> & { id: string };

const DEFAULT_REFERENCES: Record<string, MasterReferenceOption[]> = {
  "jenis-pengadaan": [
    { id: "JP-001", nama: "Barang", kode: "BARANG" },
    { id: "JP-002", nama: "Jasa", kode: "JASA" },
    { id: "JP-003", nama: "Konstruksi", kode: "KONSTRUKSI" },
    { id: "JP-004", nama: "Konsultansi", kode: "KONSULTANSI" },
  ],
  "metode-pengadaan": [
    { id: "MP-001", nama: "Penunjukan Langsung", kode: "PL" },
    { id: "MP-002", nama: "Pelelangan Umum", kode: "PU" },
    { id: "MP-003", nama: "Pemilihan Langsung", kode: "PML" },
    { id: "MP-004", nama: "Pengadaan Langsung", kode: "PGL" },
  ],
  "opex-capex": [
    { id: "OC-001", nama: "Opex", kode: "OPEX" },
    { id: "OC-002", nama: "Capex", kode: "CAPEX" },
  ],
  "kategori-anggaran": [
    { id: "KA-001", nama: "Investasi", kode: "INV" },
    { id: "KA-002", nama: "Eksploitasi", kode: "EKS" },
    { id: "KA-003", nama: "Pemeliharaan", kode: "HAR" },
    { id: "KA-004", nama: "RKAP", kode: "RKAP" },
  ],
  pajak: [
    { id: "TAX-001", nama: "PPN 11%", kode: "PPN11", persentase: "11%" },
    { id: "TAX-002", nama: "PPN 12%", kode: "PPN12", persentase: "12%" },
    { id: "TAX-003", nama: "Pajak Dipungut", kode: "DIPUNGUT" },
    { id: "TAX-004", nama: "Pajak Tidak Dipungut", kode: "TIDAK-DIPUNGUT" },
    { id: "TAX-005", nama: "PPh 21", kode: "PPH21" },
    { id: "TAX-006", nama: "PPh 22", kode: "PPH22" },
    { id: "TAX-007", nama: "PPh 23", kode: "PPH23" },
  ],
  "unit-kerja": [
    { id: "UK-001", nama: "CTIT", kode: "CTIT" },
    { id: "UK-002", nama: "Logistik", kode: "LOG" },
    { id: "UK-003", nama: "Keuangan", kode: "KEU" },
    { id: "UK-004", nama: "Operasional", kode: "OPS" },
    { id: "UK-005", nama: "HC", kode: "HC" },
  ],
  "kategori-barang": [
    { id: "KB-001", nama: "IT Hardware", kode: "ITH" },
    { id: "KB-002", nama: "IT Software", kode: "ITS" },
    { id: "KB-003", nama: "Elektronik", kode: "ELK" },
    { id: "KB-004", nama: "ATK", kode: "ATK" },
    { id: "KB-005", nama: "Furnitur", kode: "FRN" },
    { id: "KB-006", nama: "Jasa Outsource", kode: "JOS" },
    { id: "KB-007", nama: "Jasa Konstruksi", kode: "JKS" },
  ],
  "jenis-kontrak": [
    { id: "JK-001", nama: "Single Year", kode: "SY" },
    { id: "JK-002", nama: "Multi Years", kode: "MY" },
    { id: "JK-003", nama: "Lump Sum", kode: "LS" },
    { id: "JK-004", nama: "Harga Satuan", kode: "HS" },
  ],
  "tahun-anggaran": [
    { id: "TA-2024", nama: "2024", tahun: "2024" },
    { id: "TA-2025", nama: "2025", tahun: "2025" },
    { id: "TA-2026", nama: "2026", tahun: "2026" },
  ],
  "mata-uang": [
    { id: "CUR-IDR", nama: "Rupiah", kode: "IDR", simbol: "Rp" },
    { id: "CUR-USD", nama: "US Dollar", kode: "USD", simbol: "$" },
  ],
  bank: [
    { id: "BNK-001", nama: "Bank BNI", kode: "009" },
    { id: "BNK-002", nama: "Bank BRI", kode: "002" },
    { id: "BNK-003", nama: "Bank Mandiri", kode: "008" },
    { id: "BNK-004", nama: "Bank BCA", kode: "014" },
  ],
  lokasi: [
    { id: "LOK-001", nama: "Kantor Pusat Jakarta", kode: "JKT-01" },
    { id: "LOK-002", nama: "Depo Manggarai", kode: "MRI-01" },
    { id: "LOK-003", nama: "Stasiun Bogor", kode: "BGR-01" },
    { id: "LOK-004", nama: "Depo Depok", kode: "DPK-01" },
  ],
  "jabatan-ttd": [
    { id: "JBT-001", nama: "Direktur Utama", kode: "DIRUT" },
    { id: "JBT-002", nama: "Direktur Keuangan", kode: "DIRKEU" },
    { id: "JBT-003", nama: "VP Pengadaan", kode: "VP-PGD" },
    { id: "JBT-004", nama: "Manager Logistik", kode: "MGR-LOG" },
    { id: "JBT-005", nama: "Kepala Divisi", kode: "KADIV" },
  ],
};

export function useMasterReferenceOptions(category: string) {
  const defaults = DEFAULT_REFERENCES[category] || [];
  const [items, setItems] = useState<MasterReferenceOption[]>(defaults);

  useEffect(() => {
    let mounted = true;
    const load = () =>
      api
        .get(`/master-reference-options/${category}`)
        .then((response) => {
          if (mounted) {
            const data = response.data;
            if (Array.isArray(data) && data.length > 0) {
              setItems(data);
            } else {
              setItems(defaults);
            }
          }
        })
        .catch(() => {
          if (mounted) setItems(defaults);
        });
    load();
    const eventName = `master-reference-updated:${category}`;
    window.addEventListener(eventName, load);
    return () => {
      mounted = false;
      window.removeEventListener(eventName, load);
    };
  }, [category]);

  const options = useMemo(
    () =>
      items.map((item) => ({
        value: String(item.nama || item.kode || item.tahun || item.id),
        label: String(item.nama || item.tahun || item.kode || item.id),
      })),
    [items]
  );

  return { items, options };
}
