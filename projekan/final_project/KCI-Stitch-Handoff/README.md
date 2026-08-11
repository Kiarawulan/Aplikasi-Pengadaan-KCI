# KCI Stitch handoff

This folder is the compact source package for rebuilding the complete KCI Procurement UI in Google Stitch.

## Upload to Stitch

1. Start a new Stitch project.
2. Attach `DESIGN.md`, `SCREEN_MANIFEST.json`, `KCI_LOGO.png`, `KERETA.svg`, `LOGIN_REFERENCE.svg`, and `FEATURE_UNAVAILABLE.png`.
3. Open `STITCH_MASTER_PROMPT.md` and paste the text under `Master prompt for Google Stitch`.
4. Let Stitch build the shared foundations/components first, then continue the remaining manifest groups with the supplied follow-up prompt.
5. Compare the completed canvas with the 88 names in the manifest.

`LOGIN_REFERENCE.svg` is reference only. It must not become the page background. `KERETA.svg` must remain unchanged.

The separate `KCI-Figma-HTML-Export.zip` in the project root remains available as a browser-rendered visual reference if individual screenshots are later needed.
