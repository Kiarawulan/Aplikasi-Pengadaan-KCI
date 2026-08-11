import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(scriptDir, "..");
const distDir = path.join(projectDir, "dist");
const outputDir = path.join(projectDir, "figma-html-export");

const page = (name, group, config = {}) => ({ name, group, config: { name, ...config } });

const sampleItem = (flowType, currentStep, id) => ({
  id,
  nama: flowType === "pd" ? "Park Document Operasional KCI" : "Pengadaan Perangkat Teknologi KCI",
  departemen: "CTIT",
  nominal: "Rp 250.000.000",
  tanggal: "2026-08-11",
  status: currentStep === "pembayaran" ? "approved" : "pending",
  currentStep,
  flowType,
  createdBy: "figma-user",
  completedSteps: [],
  formData: {
    emailPic: "user@kci.id",
    divisi: "CTIT",
    vendor: "PT Maju Bersama Teknologi",
    nilaiPr: "250000000",
    kurs: "IDR",
  },
});

const pages = [
  page("auth-login", "Auth"),
  page("auth-login-error", "Auth", { loginError: "Email atau password salah." }),

  page("user-dashboard", "User", { role: "user", userScreen: "dashboard" }),
  page("user-dashboard-sidebar-collapsed", "User", { role: "user", userScreen: "dashboard", sidebarCollapsed: true }),
  page("user-rup-list", "User", { role: "user", userScreen: "rup-list" }),
  page("user-park-document-list", "User", { role: "user", userScreen: "daftar-pengadaan" }),
  page("user-park-document-detail", "User", { role: "user", userScreen: "pd-detail", selectedItem: sampleItem("pd", "pengajuan-dana", "PD-FIGMA-001") }),
  page("user-park-document-payment", "User", { role: "user", userScreen: "pd-detail", selectedItem: sampleItem("pd", "pembayaran", "PD-FIGMA-002") }),
  page("user-purchase-requisition-list", "User", { role: "user", userScreen: "purchase-requisition" }),
  ...["npp", "pengajuan-dana", "sp3", "pbj", "contract", "pengujian", "pembayaran"].map((step) =>
    page(`user-pr-detail-${step}`, "User", { role: "user", userScreen: "pr-detail", selectedItem: sampleItem("pr", step, `PR-FIGMA-${step}`) }),
  ),
  page("user-testing-list", "User", { role: "user", userScreen: "daftar-pengujian" }),
  page("user-payment-outsource", "User", { role: "user", userScreen: "pembayaran-outsource" }),
  page("user-payment-non-outsource", "User", { role: "user", userScreen: "pembayaran-non-outsource" }),
  page("user-payment-request", "User", { role: "user", userScreen: "pembayaran-payment-request" }),
  page("user-payment-umd", "User", { role: "user", userScreen: "pembayaran-umd" }),
  page("user-template-dokumen", "User", { role: "user", userScreen: "template-dokumen" }),
  page("user-profile", "User", { role: "user", userScreen: "profile" }),

  ...["pengajuan-dana", "pengujian", "pengadaan", "pembayaran"].map((tab) =>
    page(`admin-dashboard-${tab}`, "Admin / Dashboard", { role: "admin", adminPage: "dashboard", dashboardTab: tab }),
  ),
  page("admin-user-management", "Admin", { role: "admin", adminPage: "manajemen-user" }),
  page("admin-role-management", "Admin", { role: "admin", adminPage: "manajemen-role" }),
  ...["Pengadaan", "Pengajuan Dana", "Pengujian", "Pembayaran"].map((tab) =>
    page(`admin-template-${tab.toLowerCase().replaceAll(" ", "-")}`, "Admin / Template", { role: "admin", adminPage: "template-dokumen", templateTab: tab }),
  ),
  ...[
    "vendor", "unit-kerja", "department", "direktorat", "jenis-pengadaan", "metode-pengadaan",
    "kategori-barang", "jenis-kontrak", "tahun-anggaran", "mata-uang", "pajak", "bank", "lokasi",
    "penguji", "jabatan-ttd", "status-pengadaan", "status-pengujian", "status-pembayaran",
  ].map((tab) => page(`admin-master-data-${tab}`, "Admin / Master Data", { role: "admin", adminPage: "master-data", masterTab: tab })),

  page("admin-fund-park-document", "Admin / Verification", { role: "admin", adminPage: "verifikasi", verifCategory: "pengajuan-dana", verifDoc: "park-document" }),
  page("admin-fund-purchase-requisition", "Admin / Verification", { role: "admin", adminPage: "verifikasi", verifCategory: "pengajuan-dana", verifDoc: "purchase-requisition" }),
  ...[
    "npp", "rup-task-approval", "rup-list-rup", "rup-list-rup-signed", "sp3-task-approval", "sp3-list-signed",
    "pbj-task-approval", "pbj-list-pbj", "pbj-memo-internal", "contract-task-approval", "contract-list-contract",
    "jaminan-pelaksanaan", "warehouse", "vendor-management", "harga-satuan", "adendum-kontrak",
    "evaluasi-vendor", "tkdn", "monitoring-kpi", "monitoring-mppl",
  ].map((doc) => page(`admin-procurement-${doc}`, "Admin / Verification", { role: "admin", adminPage: "verifikasi", verifCategory: "pengadaan", pengadaanDoc: doc })),
  ...["kontrak-list-500", "kontrak-list-500plus", "request-list-request", "request-list-pengujian"].map((doc) =>
    page(`admin-testing-${doc}`, "Admin / Verification", { role: "admin", adminPage: "verifikasi", verifCategory: "pengujian", pengujianDoc: doc }),
  ),
  ...[
    "pembayaran-outsource", "pembayaran-non-outsource", "pembayaran-umd", "pembayaran-daily-reports",
    "pembayaran-weekly-reports", "pembayaran-contract-release", "pembayaran-bast", "pembayaran-invoice",
    "pembayaran-spp", "pembayaran-spm", "pembayaran-verification",
  ].map((doc) => page(`admin-${doc}`, "Admin / Verification", { role: "admin", adminPage: "verifikasi", verifCategory: "pembayaran", pembayaranDoc: doc })),
];

const sourceHtml = await readFile(path.join(distDir, "index.html"), "utf8");
const relativeHtml = sourceHtml.replaceAll('"/assets/', '"./assets/');

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(path.join(distDir, "assets"), path.join(outputDir, "assets"), { recursive: true });

for (const entry of pages) {
  const configScript = `<script>window.__FIGMA_CAPTURE__=${JSON.stringify(entry.config).replaceAll("<", "\\u003c")};</script>`;
  const html = relativeHtml
    .replace(/<title>.*?<\/title>/, `<title>${entry.name} — KCI Figma Export</title>`)
    .replace("</head>", `  ${configScript}\n  </head>`);
  await writeFile(path.join(outputDir, `${entry.name}.html`), html, "utf8");
}

const groups = Map.groupBy(pages, (entry) => entry.group);
const navigation = [...groups.entries()].map(([group, entries]) => `
  <section><h2>${group}</h2><div class="grid">${entries.map((entry) => `<a href="./${entry.name}.html">${entry.name}</a>`).join("")}</div></section>`).join("");
const indexHtml = `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>KCI — Figma HTML Export</title><style>body{margin:0;padding:40px;font:14px Inter,Arial,sans-serif;background:#f5f6fa;color:#17145e}h1{margin:0 0 8px}p{color:#64748b;margin:0 0 28px}section{margin:28px 0}h2{font-size:16px}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px}a{display:block;padding:12px 14px;background:#fff;border:1px solid #e2e8f0;border-radius:10px;color:#252271;text-decoration:none}a:hover{border-color:#cc0000;color:#cc0000}</style></head><body><h1>KCI — Figma HTML Export</h1><p>${pages.length} entry HTML. Buka melalui local server atau impor seluruh folder/ZIP ke html.to.design.</p>${navigation}</body></html>`;

await writeFile(path.join(outputDir, "index.html"), indexHtml, "utf8");
await writeFile(path.join(outputDir, "manifest.json"), JSON.stringify({ generatedAt: new Date().toISOString(), pageCount: pages.length, pages }, null, 2), "utf8");
await writeFile(path.join(outputDir, "README.txt"), `KCI FIGMA HTML EXPORT\n\n1. Ekstrak ZIP tanpa mengubah struktur folder.\n2. Untuk preview, jalankan local server dari folder ini.\n3. Di Figma jalankan html.to.design > File.\n4. Pilih ZIP/folder ini dan impor halaman yang diperlukan.\n5. Pertahankan folder assets karena dipakai bersama oleh semua HTML.\n\nJumlah entry HTML aplikasi: ${pages.length}\n`, "utf8");

console.log(`Figma HTML export generated: ${outputDir}`);
console.log(`Application pages: ${pages.length}`);
