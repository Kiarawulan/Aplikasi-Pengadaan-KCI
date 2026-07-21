import type { PengadaanItem } from "../../types";

export function DetailHeaderCard({ item }: { item: PengadaanItem }) {
  return (
    <div className="rounded-[16px] p-5 mb-5 shadow-[0px_0px_4px_rgba(0,0,0,0.22)]"
      style={{ background: "linear-gradient(76deg, #8c0505 11%, #e30000 121%)" }}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white font-black text-xl">{item.nama}</p>
          <div className="flex flex-wrap gap-6 mt-2.5">
            {[
              { label: "Tanggal Pembuatan:", val: item.tanggal },
              { label: "Departemen:", val: item.departemen },
              { label: "Nominal:", val: item.nominal },
            ].map((d) => (
              <div key={d.label}>
                <p className="text-white/55 text-[10px] font-medium">{d.label}</p>
                <p className="text-white font-bold text-[12px]">{d.val}</p>
              </div>
            ))}
          </div>
        </div>
        <span className="bg-[#252271] text-white text-[10.5px] font-semibold px-4 py-1 rounded-full shrink-0 border border-[#0f1265]">{item.status}</span>
      </div>
    </div>
  );
}

