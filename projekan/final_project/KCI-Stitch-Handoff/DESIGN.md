# KCI Procurement — Design Source of Truth

## 1. Mission

Build one editable, desktop-first procurement web application for PT Kereta Commuter Indonesia (KCI). The project contains two role-based experiences: User and Admin. Reproduce the current information architecture and process flow; improve visual consistency only where explicitly defined in this document.

This is a design reconstruction, not a redesign. Do not add, remove, reorder, or merge business steps. Every screen must be built from editable UI elements. Never flatten a page into a screenshot.

Use `SCREEN_MANIFEST.json` as the canonical list of 88 required states/screens.

## 2. Non-negotiable constraints

- Preserve all existing User and Admin flows.
- Preserve Indonesian labels and content.
- Use the supplied KCI logo asset without redrawing it.
- On the login page, use `KERETA.svg` unchanged. All other login elements must be editable text, inputs, buttons, shapes, and layout containers.
- `LOGIN_REFERENCE.svg` is visual reference only; do not use it as a full-page image.
- Use `FEATURE_UNAVAILABLE.png` unchanged for features that are intentionally not available.
- All typography across User and Admin must use Inter.
- CRUD controls must look identical everywhere.
- Every nested/detail page must provide a clear Back control and clickable breadcrumb.
- Admin verification controls must appear at the top of the content, including Payment and Fund Submission.
- A verification button becomes disabled gray after successful verification on every Admin module.
- Forms backed by Master Data must use selects/autocomplete, not manual free text. Examples: Vendor, Directorate, Division, Department, Work Unit, Procurement Type, Contract Type, Currency, Bank, Tax, Location, Fiscal Year, Tester, and statuses.
- Do not show unfinished modules as fabricated working pages. Use the Feature Unavailable state.

## 3. Exact assets

| File | Usage |
|---|---|
| `KCI_LOGO.png` | KAI Commuter logo in login and application shell |
| `KERETA.svg` | Train illustration on the login panel; preserve exactly |
| `LOGIN_REFERENCE.svg` | Reference for login composition only |
| `FEATURE_UNAVAILABLE.png` | Centered unavailable-state illustration |

Do not alter the train paths, colors, proportions, or crop. Do not generate a substitute train illustration.

## 4. Foundations

### Color tokens

- `brand/navy-900`: `#0d0755` — deepest login background
- `brand/indigo-800`: `#252271` — primary UI, headings, sidebar, primary buttons
- `brand/red-600`: `#e6251c` — primary destructive/reject emphasis and login action
- `brand/red-800`: `#9b1712` — red gradient depth
- `surface/page`: `#f8f7fb`
- `surface/card`: `#ffffff`
- `surface/subtle`: `#f8fafc`
- `border/default`: `#e2e8f0`
- `text/primary`: `#252271`
- `text/body`: `#334155`
- `text/muted`: `#64748b`
- `text/placeholder`: `#94a3b8`
- `state/success`: `#067647` on `#ecfdf3`, border `#abefc6`
- `state/info`: `#175cd3` on `#eff8ff`, border `#b2ddff`
- `state/warning`: `#b54708` on `#fffaeb`, border `#fedf89`
- `state/danger`: `#b42318` on `#fef3f2`, border `#fecdca`
- `state/neutral`: `#475467` on `#f2f4f7`, border `#d0d5dd`
- `state/disabled`: text `#98a2b3`, background `#eaecf0`, border `#d0d5dd`

### Typography

Font family: Inter, fallback Arial/sans-serif.

- Display/login title: 40–44 px, 700–800, tight line height
- Page title: 18–22 px, 700–800
- Section heading: 14–16 px, 700
- Body: 12–14 px, 400–500
- Labels/table headings: 11–12 px, 600–700
- Helper text: 10–12 px, 400–500
- Buttons: 11–13 px, 600–700

Use the same type scale in both roles. Do not introduce a second font.

### Spacing, radius, elevation

- Base spacing unit: 4 px
- Common gaps: 8, 12, 16, 20, 24, 32 px
- Input/control height: 36–40 px
- Compact table action: 28 × 28 px
- Compact decision button: 34–38 px high; never oversized
- Card radius: 12–16 px
- Control radius: 8–10 px
- Pill radius: 999 px
- Card border: 1 px subtle gray; shadow should be restrained

Desktop reference canvas is 1440 × 768. Layout must remain usable down to 1024 px. Prefer responsive reflow rather than horizontal clipping.

## 5. Global application shells

### User shell

- Left navigation with KCI brand, grouped destinations, active item, and collapse state.
- Top bar with current page title and profile affordance.
- Main content uses a light page background, comfortable 20–24 px padding, and white cards.
- Primary destinations: Dashboard, RUP, Daftar Pengadaan/Purchase Requisition, Daftar Pengujian, Daftar Pembayaran, Template Dokumen, Profile.

### Admin shell

- Left navigation with grouped Admin modules and nested items.
- Top bar with title/subtitle and account controls.
- Main groups: Dashboard, Procurement/Pengadaan, Fund Submission/Pengajuan Dana, Testing/Pengujian, Payment/Pembayaran, Template Dokumen, Master Data, User Management, Role Management.
- Every detail page begins with a Back control and a breadcrumb such as `Pembayaran > Invoice > Detail`. Every breadcrumb ancestor is clickable.
- Keep the verification action group at the top right or immediately below the breadcrumb/header, before detailed form sections.

## 6. Shared component library

Create reusable components and use component instances consistently across all screens.

### Buttons

- Primary: solid indigo `#252271`, white label/icon.
- Login action: red gradient from dark red to `#e6251c`.
- Secondary: white, indigo border and label.
- Danger/Reject: solid red, white X-circle icon and label `Tolak`.
- Revision: white or very light red, dark-red border/label, Pencil icon in a tinted circle, label `Revisi`.
- Verify: solid indigo, Check icon in a pale/white circle, label `Verifikasi` or `Verifikasi & Setujui`.
- Verified/disabled: gray background, gray border/text, Check icon, non-interactive.
- Decision button icon treatment must match Payment: icon sits inside a small circular container. Apply the same treatment to Revision, Reject, and Verify in every Admin module.
- Keep icon, label, padding, gap, height, and radius identical across modules.

### CRUD icon controls

All CRUD actions are 28 × 28 px, 8 px radius, circular/square icon treatment, accessible tooltip, and identical ordering.

- View/detail: blue icon on pale blue.
- Edit: amber icon on pale amber.
- Delete: red icon on pale red.
- Download: indigo icon on pale indigo.
- Add uses a labeled primary button and Plus icon.

Do not mix labeled and icon-only CRUD controls in equivalent table rows.

### Forms

- Label above control, required marker where needed, helper/error below.
- Use input, textarea, date picker, currency field, upload, select, autocomplete, radio, checkbox, and toggle variants.
- Focus uses red outline/ring; validation error uses red border plus explanatory text.
- Master Data fields must be dropdown/autocomplete and show a clear placeholder such as `Pilih vendor dari Master Data`.
- Negative login state displays a visible inline error/alert; it must not fail silently.

### Upload panel for Admin

Use one reusable panel for every upload performed by Admin, including SP3, Testing, Payment, and any other Admin document upload.

- Full-width pale-indigo container with subtle indigo border.
- Left: circular upload icon, bold title `Unggah ...`, and short helper text explaining who can download/view the file.
- Right: compact indigo button with upload icon and a contextual label such as `Pilih & Upload Bukti Pelunasan`.
- Show selected filename, replace/remove affordances, progress, success, and error states without changing the component geometry.

### Tables

- White card, clear header row, compact readable cells, stable column alignment.
- Search/filter bar above table; pagination below when needed.
- Status represented by semantic badges, never color alone.
- Actions aligned consistently at the right edge.

### Breadcrumb and Back

- Back button: ChevronLeft icon, white surface, subtle border, indigo label.
- Breadcrumb: muted ancestors with hover/click state, current page bold indigo.
- Show both on detail screens where space permits. Back returns to the immediately previous list/state.

### Empty and unavailable states

- Empty state: lightweight icon, title, guidance, optional in-scope CTA.
- Unavailable state: use `FEATURE_UNAVAILABLE.png`, centered with generous whitespace. Do not add controls that imply the feature works.

## 7. Login screen

Rebuild `LOGIN_REFERENCE.svg` as editable layout.

- Two-column composition on white page.
- Left column: `Selamat Datang`, helper `Login akun anda untuk melanjutkan`, labeled Email and Password fields, password visibility icon, full-width red `Masuk` button, and inline negative-case alert.
- Right column: rounded indigo/navy panel, KCI logo at top left, unchanged `KERETA.svg` as a decorative visual, title `Aplikasi Pengadaan Kereta Commuter Indonesia`, and copyright line.
- Train is the only large graphic asset. Keep all words as actual text and all panels as editable shapes.
- At smaller widths, stack the form above the visual panel without hiding form actions.

## 8. User experience and flows

### Main User pages

- Dashboard with summary cards and recent items.
- RUP list and RUP detail.
- Purchase Requisition/Pengadaan list and detail.
- Park Document list, detail, and payment state.
- Testing list and related detail.
- Payment lists for Request, Outsource, Non-Outsource, and UMD.
- Template Documents.
- Profile.

### Process trackers

Park Document stages: NPP → Pengajuan Dana → SP3 → PBJ → Contract → Pengujian → Pembayaran.

Fund/Park Document flow:

1. Pengajuan Dana — Buat Park Document
2. Pengajuan Dana — Detail Park Document
3. Pembayaran (UMD) — Payment Request
4. Pembayaran (UMD) — Pelunasan
5. Pembayaran (UMD) — Proses Selesai

Purchase Requisition flow:

1. NPP — Buat NPP, Detail NPP
2. Pengajuan Dana — Buat Pengajuan Dana, Detail Pengajuan Dana
3. SP3
4. PBJ
5. Kontrak
6. Pengujian — Request Pengujian, Hasil Pengujian, Surat BAHP
7. Pembayaran — Payment Request, Pelunasan, Proses Selesai

Trackers need completed, current, upcoming, locked, revision, and rejected states. Do not allow navigation to a locked future stage.

## 9. Admin experience

### Procurement

Include RUP lists/task approval, SP3 lists/task approval, PBJ list/memo/task approval, Contract list/task approval, NPP, warehouse, vendor management, TKDN, unit pricing, contract amendment, performance guarantee, vendor evaluation, KPI monitoring, and MPPL monitoring as registered in the manifest.

Features from Jaminan Pelaksanaan/Jamlak through Monitoring MPPL that are not implemented in the current product must display the shared unavailable state instead of invented functionality. Follow `SCREEN_MANIFEST.json` and the reference export for exact unavailable entries.

### Fund Submission

Include Purchase Requisition and Park Document lists/details. Use the same compact Revision, Reject, Verify controls at the top. Approved verification must show the disabled gray control.

### Testing

Include Request list, Testing list, Contract below 500, and Contract 500-plus. Apply the shared Admin upload panel wherever documents are uploaded.

### Payment

Include Outsource, Non-Outsource, UMD, Daily Reports, Weekly Reports, Contract Release, BAST, Invoice, SPP, SPM, and Verification.

Place the verification controls at the top on every Payment detail. Use Master Data Vendor select. Use the shared Admin upload panel for proof/payment documents. After Verify succeeds, the Verify button changes to disabled gray without shifting the layout.

### Master Data

Use a consistent tab/list/form pattern for Vendor, Directorate, Department, Work Unit, Procurement Type, Contract Type, Item Category, Currency, Bank, Tax, Location, Fiscal Year, Tester, Position/Signature, Procurement Status, Testing Status, Payment Status, and Procurement Method.

Duplicate values must produce an explicit validation message. Add, edit, view, and delete controls use the shared CRUD components.

### Access administration

User Management and Role Management use the same table, search/filter, status, CRUD, modal, and breadcrumb system.

## 10. Representative content

Use realistic local sample content, not lorem ipsum.

- Procurement number: `RUP-MSG5X050`
- Procurement title: `Pengadaan Server CTIT 2024`
- Division: `CTIT`
- Funding: `Pemeliharaan`
- RKAP value: `Rp 100.000.000`
- Tax: `PPN 11%`
- Vendor examples: `PT Maju Bersama`, `PT Tech Solution`, `PT Garda Utama`
- Payment examples: `INV-2024-001`, `SPP-2024-001`, `SPM-2024-001`
- Common statuses: Draft, Final, Verifikasi, Disetujui, Revisi, Ditolak, Cair, Selesai

## 11. Screen registry and states

`SCREEN_MANIFEST.json` is machine-readable and canonical. Generate every entry as an individually reachable state within one Stitch project. At minimum, retain these groups:

- Auth
- User
- Admin Dashboard
- Admin Procurement
- Admin Fund
- Admin Testing
- Admin Payment
- Admin Template
- Admin Master Data
- Admin Access

Screen variants such as login error, collapsed sidebar, detail flow stage, verified/disabled action, and unavailable feature are distinct required states—not optional annotations.

## 12. Recommended Stitch build order

1. Create foundations, variables, typography, icons, and spacing.
2. Create shared User and Admin shells.
3. Create reusable buttons, CRUD controls, form controls, tables, upload panel, status badges, breadcrumbs, Back controls, modals, trackers, and unavailable state.
4. Build Auth screens.
5. Build User screens and stage variants.
6. Build Admin dashboards and list/detail templates.
7. Build Procurement, Fund, Testing, and Payment variants.
8. Build Template, Master Data, User Management, and Role Management.
9. Audit all 88 manifest entries for consistency and reachability.

## 13. Acceptance criteria

- Exactly 88 manifest states are accounted for.
- Every page is editable; no screenshot is used as a page background.
- User and Admin share one type scale and component system.
- CRUD actions are visually identical everywhere.
- Revision, Reject, and Verify buttons are compact and identical across Admin modules, with circular icon containers.
- Verify becomes disabled gray after approval in every module.
- Payment verification is at the top.
- Fund Submission verification follows the same system.
- Admin uploads use one consistent upload panel.
- Master Data relationships use dropdown/autocomplete.
- Every detail page has Back and clickable breadcrumbs.
- Login negative state has a visible warning.
- Train SVG is unchanged.
- Unavailable modules use the supplied unavailable image.
- Business flow is unchanged.

