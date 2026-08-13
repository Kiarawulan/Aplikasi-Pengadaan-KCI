export function formatDisplayDate(value?: string | Date | null): string {
  if (!value) return "—";
  const raw = value instanceof Date ? value.toISOString() : String(value);
  const datePart = raw.match(/^\d{4}-\d{2}-\d{2}/)?.[0];
  const date = datePart ? new Date(`${datePart}T00:00:00`) : new Date(raw);
  if (Number.isNaN(date.getTime())) return raw;
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}
