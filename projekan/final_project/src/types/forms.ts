export interface RupForm {
  pilihan: string;
  judul: string;
  capexOpex: string;
  uraian: string;
  metode: string;
  jenis: string;
  kategori: string;
  tahunAnggaran: string;
  tahunRup: string;
  tipeKontrak: string;
  pbj: string;
  nilaiSebelumPajak: string;
  rkip: string;
  tipePajak: string;
  nilaiPaket: string;
  targetLogistik: string;
  perkiraanWaktu: string;
  lokasi: string;
  volume: string;
  penyesuaian: string;
}

export interface NppForm {
  realisasi: string;
  timelineText: string;
  judul: string;
  metode: string;
  vendor: string;
  nilaiPr: string;
  coa: string;
  typeTax: string;
  nilaiTax: string;
  jenisBarang: string;
  kurs: string;
  keterangan: string;
  prNo: string;
  prDate: string;
  prFile: string;
  rabNo: string;
  rabDate: string;
  rabFile: string;
  justNo: string;
  justDate: string;
  justFile: string;
  miNo: string;
  miDate: string;
  miFile: string;
  miPerihal: string;
}

export interface VendorForm {
  name: string;
  code: string;
  country: string;
  city: string;
  accountGroup: string;
  searchTerm: string;
  purchaseOrg: string;
  termOfPayment: string;
  currency: string;
  address: string;
}
