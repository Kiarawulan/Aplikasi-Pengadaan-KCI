# Master prompt for Google Stitch

Paste the text below into a new Stitch project after attaching `DESIGN.md`, `SCREEN_MANIFEST.json`, `KCI_LOGO.png`, `KERETA.svg`, `LOGIN_REFERENCE.svg`, and `FEATURE_UNAVAILABLE.png`.

---

Read `DESIGN.md` fully and treat it as the source of truth. Read `SCREEN_MANIFEST.json` as the canonical registry of all 88 required screens and UI states.

Create one complete, desktop-first, responsive KCI Procurement web application design with separate User and Admin experiences. First establish the shared design system and reusable components, then build all screens in the manifest. Preserve all Indonesian labels, navigation hierarchy, business stages, role boundaries, and flow order. Do not invent, remove, merge, or reorder business functionality.

Important implementation requirements:

1. Rebuild every page using editable layout, text, forms, tables, buttons, and components. Never use a screenshot or the supplied login reference as a flattened page background.
2. Use `LOGIN_REFERENCE.svg` only to understand the login composition. Use `KERETA.svg` unchanged as the train artwork and `KCI_LOGO.png` as the logo.
3. Apply Inter and the exact foundations in `DESIGN.md` across both User and Admin.
4. Create one shared CRUD component system and use the same size, spacing, colors, icons, tooltips, and ordering everywhere.
5. Create one shared compact decision-button group for Revisi, Tolak, and Verifikasi. Each icon must sit in a circular container like the Payment reference. Put this group at the top of every Admin detail, including Fund Submission and Payment.
6. After successful verification, show the Verify control as disabled gray on every relevant screen without moving the layout.
7. Use one shared Admin upload panel for SP3, Testing, Payment, and all other Admin uploads.
8. Use dropdown/autocomplete components for fields connected to Master Data, especially Vendor.
9. Add a visible Back button and clickable breadcrumb to every nested/detail page.
10. Show the supplied `FEATURE_UNAVAILABLE.png` for intentionally unavailable features. Do not invent working interfaces for them.
11. Include a visible negative login alert in the login-error state.

Organize the canvas into clearly named sections: Foundations, Components, Auth, User, Admin Dashboard, Admin Procurement, Admin Fund, Admin Testing, Admin Payment, Admin Template, Admin Master Data, and Admin Access. Name each screen exactly from the manifest so it can be audited.

Work in passes. Start by producing Foundations, Components, both application shells, Auth, and representative list/detail templates. Then expand those approved patterns across all manifest entries. Finish with a consistency audit against every acceptance criterion in `DESIGN.md` and report any manifest entry that could not be generated.

---

## Follow-up prompt if Stitch stops after the first batch

Continue the same project. Do not redesign the completed screens. Use the existing variables, components, User shell, and Admin shell. Resume from the first unbuilt entry in `SCREEN_MANIFEST.json`, generate the remaining entries group by group, then audit all 88 names. Keep decision buttons, CRUD controls, uploads, breadcrumbs, Back controls, Master Data selects, and typography identical to the approved components.

