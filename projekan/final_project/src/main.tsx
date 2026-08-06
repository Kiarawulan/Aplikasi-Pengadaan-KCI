import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const NO_INPUT_REGEX = /(^|[^a-zA-Z])(no|nomor)([^a-zA-Z]|$)|(^|\b)(no|nomor)[A-Z]/i;

if (typeof window !== "undefined") {
  window.addEventListener(
    "input",
    (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (!target || target.tagName !== "INPUT") return;
      if (target.type === "radio" || target.type === "checkbox" || target.type === "date" || target.type === "file" || target.type === "hidden") return;

      const dataLabel = target.getAttribute("data-label") || "";
      const placeholder = target.placeholder || "";
      const name = target.name || "";
      const id = target.id || "";
      const parentText = target.parentElement?.innerText || target.parentElement?.parentElement?.innerText || "";
      const labelText = target.labels?.[0]?.textContent || "";

      const combinedText = `${dataLabel} ${placeholder} ${name} ${id} ${labelText} ${parentText.slice(0, 50)}`;

      if (NO_INPUT_REGEX.test(combinedText)) {
        const val = target.value;
        const cleaned = val.replace(/\D/g, "");
        if (val !== cleaned) {
          target.value = cleaned;
          // React tracker compatibility
          const valueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
          if (valueSetter) {
            valueSetter.call(target, cleaned);
          }
          target.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }
    },
    true
  );
}

createRoot(document.getElementById("root")!).render(<App />);
