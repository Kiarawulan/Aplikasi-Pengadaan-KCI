import { useEffect, useMemo, useState } from "react";
import { api } from "@/services/api";

export type MasterReferenceOption = Record<string, any> & { id: string };

export function useMasterReferenceOptions(category: string) {
  const [items, setItems] = useState<MasterReferenceOption[]>([]);

  useEffect(() => {
    let mounted = true;
    const load = () => api.get(`/master-reference-options/${category}`)
      .then(response => {
        if (mounted) setItems(Array.isArray(response.data) ? response.data : []);
      })
      .catch(() => {
        if (mounted) setItems([]);
      });
    load();
    const eventName = `master-reference-updated:${category}`;
    window.addEventListener(eventName, load);
    return () => {
      mounted = false;
      window.removeEventListener(eventName, load);
    };
  }, [category]);

  const options = useMemo(() => items.map(item => ({
    value: String(item.kode || item.nama || item.tahun || item.id),
    label: String(item.nama || item.tahun || item.kode || item.id),
  })), [items]);

  return { items, options };
}
