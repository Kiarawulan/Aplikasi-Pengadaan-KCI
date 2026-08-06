import React, { useState } from 'react';
import { X, FileText, DollarSign, Calendar, Building2 } from 'lucide-react';

interface TambahRupModalProps {
  onClose: () => void;
  onSubmit: (formData: any) => void;
  initialData?: any;
}

export const TambahRupModal: React.FC<TambahRupModalProps> = ({
  onClose,
  onSubmit,
  initialData,
}) => {
  const formatRupiah = (val: string) => {
    if (!val) return '';
    const digits = val.replace(/\D/g, '');
    if (!digits) return '';
    return 'Rp ' + Number(digits).toLocaleString('id-ID');
  };

  const [form, setForm] = useState({
    pilihanRup: initialData?.pilihanRup || 'Lebih 500 Juta',
    namaPaket: initialData?.namaPaket || initialData?.judul || initialData?.nama || '',
    opexCapex: initialData?.opexCapex || initialData?.capexOpex || '',
    uraian: initialData?.uraian || '',
    metode: initialData?.metode || 'Penunjukan Langsung',
    jenisPengadaan: initialData?.jenisPengadaan || initialData?.jenis || '',
    kategoriAnggaran: initialData?.kategoriAnggaran || initialData?.kategori || '',
    tahunAnggaran: initialData?.tahunAnggaran || new Date().getFullYear().toString(),
    tahunRup: initialData?.tahunRup || new Date().getFullYear().toString(),
    tipeKontrak: initialData?.tipeKontrak || 'Single Year',
    pbj: initialData?.pbj || '',
    nilaiSebelumPajak: initialData?.nilaiSebelumPajak ? formatRupiah(initialData.nilaiSebelumPajak) : (initialData?.nilaiRkap ? formatRupiah(initialData.nilaiRkap) : (initialData?.nilai ? formatRupiah(initialData.nilai) : '')),
    rkip: initialData?.rkip || 'No',
    tipePajak: initialData?.tipePajak || initialData?.typeTax || '',
    nilaiTax: initialData?.nilaiTax ? formatRupiah(initialData.nilaiTax) : '',
    targetLogistik: initialData?.targetLogistik || initialData?.startDate || '',
    perkiraanWaktu: initialData?.perkiraanWaktu || initialData?.mppl || '',
    lokasi: initialData?.lokasi || '',
    volume: initialData?.volume || '',
    penyesuaian: initialData?.penyesuaian || '',
  });

  const calcTax = (sebelumPajak: string, tipePajak: string) => {
    if (!sebelumPajak) return '';
    const digits = parseInt(sebelumPajak.replace(/\D/g, ''), 10) || 0;
    if (!digits) return '';

    let rate = 0;
    if (tipePajak.includes('11%')) rate = 0.11;
    else if (tipePajak.includes('12%')) rate = 0.12;
    else if (tipePajak.includes('10%')) rate = 0.10;
    else {
      const match = tipePajak.match(/(\d+)%/);
      if (match) rate = parseFloat(match[1]) / 100;
    }

    const total = Math.round(digits * (1 + rate));
    return 'Rp ' + total.toLocaleString('id-ID');
  };

  const handleChange = (field: string, value: any) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === 'nilaiSebelumPajak' || field === 'tipePajak') {
        updated.nilaiTax = calcTax(
          field === 'nilaiSebelumPajak' ? value : prev.nilaiSebelumPajak,
          field === 'tipePajak' ? value : prev.tipePajak
        );
      }
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-3 overflow-y-auto">
      <div className="bg-white rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150 my-3 border border-gray-100">
    
        {/* Form Content */}
        <form
          onSubmit={handleSubmit}
          className="p-3.5 space-y-3.5 text-[10.5px] max-h-[78vh] overflow-y-auto bg-gray-50/50"
        >
          {(initialData?.catatanAdmin || initialData?.catatanRevisi || initialData?.catatan_admin) && (
            <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 text-amber-900">
              <p className="font-bold text-[11px] text-amber-800">Catatan Revisi / Penolakan Admin:</p>
              <p className="text-[11px] mt-0.5">{initialData.catatanAdmin || initialData.catatanRevisi || initialData.catatan_admin}</p>
            </div>
          )}
          {/* Top Segmented Radio Button: Pilihan RUP */}
          <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs">
            <label className="block font-bold text-gray-800 text-[10.5px] mb-1.5">
              Kategori Skala RUP <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2 max-w-sm">
              {['Lebih 500 Juta', 'Kurang 500 Juta'].map((option) => {
                const active = form.pilihanRup === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleChange('pilihanRup', option)}
                    className={`py-1.5 px-3 rounded-md font-semibold text-[10.5px] border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      active
                        ? 'bg-[#252271] text-white border-[#252271] shadow-2xs'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <span
                      className={`w-2.5 h-2.5 rounded-full border-2 flex items-center justify-center ${
                        active ? 'border-white bg-white' : 'border-gray-400'
                      }`}
                    >
                      {active && (
                        <span className="w-1 h-1 rounded-full bg-[#252271]" />
                      )}
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 1: Informasi Utama Pengadaan */}
          <div className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-2xs space-y-2.5">
            <div className="flex items-center gap-1.5 border-b border-gray-100 pb-1.5">
              <FileText size={14} className="text-[#252271]" />
              <h4 className="font-bold text-[#252271] text-[11px]">
                1. Informasi Utama Pengadaan
              </h4>
            </div>

            {/* Nama Paket Pengadaan */}
            <div>
              <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                Nama Paket Pengadaan Yang Akan Dilaksanakan <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.namaPaket}
                onChange={(e) => handleChange('namaPaket', e.target.value)}
                placeholder="Masukkan judul / nama paket pengadaan..."
                required
                className="w-full h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
              />
            </div>

            {/* Uraian Singkat */}
            <div>
              <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                Uraian Singkat Pengadaan
              </label>
              <textarea
                value={form.uraian}
                onChange={(e) => handleChange('uraian', e.target.value)}
                placeholder="Tuliskan gambaran umum atau spesifikasi ringkas paket pengadaan..."
                rows={2}
                className="w-full border border-gray-200 rounded-md p-2 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white resize-none"
              />
            </div>

            {/* Grid 2-column: Opex/Capex & Rencana Metode */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  Opex / Capex <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.opexCapex}
                  onChange={(e) => handleChange('opexCapex', e.target.value)}
                  required
                  className="w-full h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
                >
                  <option value="">-- Pilih Opex / Capex --</option>
                  <option value="Capex">Capex</option>
                  <option value="Opex">Opex</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  Rencana Metode Pengadaan <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.metode}
                  onChange={(e) => handleChange('metode', e.target.value)}
                  required
                  className="w-full h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
                >
                  <option value="Penunjukan Langsung">Penunjukan Langsung</option>
                  <option value="Pelelangan Umum">Pelelangan Umum</option>
                  <option value="Pemilihan Langsung">Pemilihan Langsung</option>
                  <option value="Pengadaan Langsung">Pengadaan Langsung</option>
                </select>
              </div>
            </div>

            {/* Grid 2-column: Jenis Pengadaan & Kategori Anggaran */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  Jenis Pengadaan <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.jenisPengadaan}
                  onChange={(e) => handleChange('jenisPengadaan', e.target.value)}
                  required
                  className="w-full h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
                >
                  <option value="">-- Pilih Jenis Pengadaan --</option>
                  <option value="Barang">Barang</option>
                  <option value="Jasa">Jasa</option>
                  <option value="Konsultansi">Konsultansi</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  Kategori Anggaran <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.kategoriAnggaran}
                  onChange={(e) => handleChange('kategoriAnggaran', e.target.value)}
                  required
                  className="w-full h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
                >
                  <option value="">-- Pilih Kategori Anggaran --</option>
                  <option value="Investasi">Investasi</option>
                  <option value="Eksploitasi">Eksploitasi</option>
                  <option value="Pemeliharaan">Pemeliharaan</option>
                </select>
              </div>
            </div>

            {/* Grid 2-column: Tipe Kontrak & PBJ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-0.5">
              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  Tipe Kontrak <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-4 h-[34px]">
                  {['Single Year', 'Multi Year'].map((opt) => (
                    <label key={opt} className="flex items-center gap-1.5 cursor-pointer font-medium text-gray-700 text-[10.5px]">
                      <input
                        type="radio"
                        name="tipeKontrak"
                        checked={form.tipeKontrak === opt}
                        onChange={() => handleChange('tipeKontrak', opt)}
                        className="w-3.5 h-3.5 accent-[#252271] cursor-pointer"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  PBJ <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.pbj}
                  onChange={(e) => handleChange('pbj', e.target.value)}
                  required
                  className="w-full h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
                >
                  <option value="">-- Pilih PBJ --</option>
                  <option value="Sarana">Sarana</option>
                  <option value="Non-Sarana">Non-Sarana</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Anggaran, Pajak & RKIP */}
          <div className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-2xs space-y-2.5">
            <div className="flex items-center gap-1.5 border-b border-gray-100 pb-1.5">
              <DollarSign size={14} className="text-[#252271]" />
              <h4 className="font-bold text-[#252271] text-[11px]">
                2. Anggaran & Perpajakan
              </h4>
            </div>

            {/* Tahun Anggaran & Tahun RUP */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  Tahun Anggaran <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.tahunAnggaran}
                  onChange={(e) => handleChange('tahunAnggaran', e.target.value)}
                  placeholder="Contoh: 2024"
                  required
                  className="w-full h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  Tahun RUP <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.tahunRup}
                  onChange={(e) => handleChange('tahunRup', e.target.value)}
                  placeholder="Contoh: 2024"
                  required
                  className="w-full h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
                />
              </div>
            </div>

            {/* Nilai Sebelum Pajak & RKIP */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  Nilai Paket Pengadaan (Sebelum Pajak) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.nilaiSebelumPajak}
                  onChange={(e) => handleChange('nilaiSebelumPajak', formatRupiah(e.target.value))}
                  placeholder="Contoh: Rp 100.000"
                  required
                  className="w-full h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  RKIP
                </label>
                <div className="flex items-center gap-4 h-[34px]">
                  {['Yes', 'No'].map((opt) => (
                    <label key={opt} className="flex items-center gap-1.5 cursor-pointer font-medium text-gray-700 text-[10.5px]">
                      <input
                        type="radio"
                        name="rkip"
                        checked={form.rkip === opt}
                        onChange={() => handleChange('rkip', opt)}
                        className="w-3.5 h-3.5 accent-[#252271] cursor-pointer"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Tipe Pajak & Nilai Tax */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  Tipe Pajak <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.tipePajak}
                  onChange={(e) => handleChange('tipePajak', e.target.value)}
                  required
                  className="w-full h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
                >
                  <option value="">-- Pilih Tipe Pajak --</option>
                  <option value="PPN 11%">PPN 11%</option>
                  <option value="PPN 12%">PPN 12%</option>
                  <option value="Pajak Dipungut">Pajak Dipungut</option>
                  <option value="Pajak Tidak Dipungut">Pajak Tidak Dipungut</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  Nilai Tax / Total Setelah Pajak
                </label>
                <input
                  type="text"
                  value={form.nilaiTax}
                  onChange={(e) => handleChange('nilaiTax', formatRupiah(e.target.value))}
                  placeholder="Contoh: Rp 10.000"
                  className="w-full h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Jadwal, Lokasi & Ketentuan */}
          <div className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-2xs space-y-2.5">
            <div className="flex items-center gap-1.5 border-b border-gray-100 pb-1.5">
              <Calendar size={14} className="text-[#252271]" />
              <h4 className="font-bold text-[#252271] text-[11px]">
                3. Jadwal Logistik, Lokasi & Volume
              </h4>
            </div>

            {/* Target Logistik & Perkiraan Waktu Pemanfaatan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  Target Masuk ke Logistik <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={form.targetLogistik}
                  onChange={(e) => handleChange('targetLogistik', e.target.value)}
                  required
                  className="w-full h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  Perkiraan Waktu Pemanfaatan Barang/Jasa <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={form.perkiraanWaktu}
                  onChange={(e) => handleChange('perkiraanWaktu', e.target.value)}
                  required
                  className="w-full h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
                />
              </div>
            </div>

            {/* Lokasi & Volume */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  Lokasi Pekerjaan / Penyerahan Barang <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.lokasi}
                  onChange={(e) => handleChange('lokasi', e.target.value)}
                  placeholder="Contoh: Depo KRL Depok / Kantor Pusat"
                  required
                  className="w-full h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                  Volume Paket Pengadaan <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.volume}
                  onChange={(e) => handleChange('volume', e.target.value)}
                  placeholder="Contoh: 1 Paket / 5 Unit"
                  required
                  className="w-full h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
                />
              </div>
            </div>

            {/* Penyesuaian RUP */}
            <div>
              <label className="block font-semibold text-gray-700 mb-0.5 text-[10.5px]">
                Penyesuaian RUP
              </label>
              <select
                value={form.penyesuaian}
                onChange={(e) => handleChange('penyesuaian', e.target.value)}
                className="w-full md:w-1/2 h-[34px] border border-gray-200 rounded-md px-2.5 text-[10.5px] outline-none focus:border-[#252271] focus:ring-1 focus:ring-[#252271]/20 transition-all bg-white font-medium"
              >
                <option value="">-- Pilih Penyesuaian RUP --</option>
                <option value="Ya">Ya</option>
                <option value="Tidak">Tidak</option>
              </select>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-200 bg-white p-3 rounded-lg">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors text-[10.5px]"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-1.5 rounded-md bg-[#252271] hover:bg-[#1a1753] text-white font-bold transition-all shadow-sm active:scale-95 text-[10.5px]"
            >
              Simpan RUP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};