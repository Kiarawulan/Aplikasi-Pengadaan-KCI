import { useEffect, useMemo, useState } from "react";
import { api } from "@/services/api";
import { getVendors } from "@/store/dataStore";
import type { Vendor } from "@/types";

function normalizeVendor(vendor: any): Vendor {
  return {
    id: String(vendor.id),
    nama: vendor.nama || "",
    npwp: vendor.npwp || "",
    alamat: vendor.alamat || "",
    kontakPerson: vendor.kontakPerson || vendor.kontak_person || vendor.kontak || "",
    telepon: vendor.telepon || "",
    email: vendor.email || "",
    kategori: vendor.kategori || "",
    status: String(vendor.status || "aktif").toLowerCase() as Vendor["status"],
    createdAt: vendor.createdAt || vendor.created_at || "",
  };
}

export function useMasterVendors() {
  const [vendors, setVendors] = useState<Vendor[]>(() => getVendors().map(normalizeVendor));

  useEffect(() => {
    let active = true;
    api.get("/vendors")
      .then((response) => {
        const rows = Array.isArray(response.data) ? response.data : response.data?.data;
        if (active && Array.isArray(rows)) setVendors(rows.map(normalizeVendor));
      })
      .catch(() => {
        // Cache Master Data tetap dipakai saat API sedang tidak tersedia.
      });
    return () => { active = false; };
  }, []);

  const activeVendors = useMemo(
    () => vendors.filter((vendor) => vendor.status === "aktif"),
    [vendors],
  );

  const vendorOptions = useMemo(
    () => activeVendors.map((vendor) => ({ value: vendor.nama, label: vendor.nama })),
    [activeVendors],
  );

  return { vendors: activeVendors, vendorOptions };
}
