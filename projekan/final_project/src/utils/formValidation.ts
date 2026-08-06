export function remindIncompleteFields(container?: HTMLElement | null): boolean {
  const root: ParentNode = container || document;
  const requiredFields = Array.from(root.querySelectorAll<HTMLElement>('[data-required="true"]'));
  const missing = requiredFields.filter((field) => {
    if (field.closest('fieldset:disabled') || field.offsetParent === null) return false;
    const value = field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement
      ? field.value
      : field.dataset.value;
    return !String(value || '').trim();
  });

  requiredFields.forEach((field) => field.classList.remove('ring-1', 'ring-red-500', 'border-red-500'));
  missing.forEach((field) => field.classList.add('ring-1', 'ring-red-500', 'border-red-500'));
  if (missing.length === 0) return true;

  const labels = [...new Set(missing.map((field) => field.dataset.label).filter(Boolean))];
  alert(`Data belum lengkap. Mohon lengkapi field berikut:\n• ${labels.join('\n• ')}`);
  missing[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
  missing[0].focus?.();
  return false;
}
