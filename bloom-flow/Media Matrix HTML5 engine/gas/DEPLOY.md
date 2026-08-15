# Bloom Flow (Creator) · Media Matrix — GAS Deployment Record

- **Project:** https://script.google.com/d/1pr0ejPgiTa_nnrg9jQR5Mzw__BaYP_smQgAjL0RKGUGTAmHrOjvLc_LY/edit
- **Script ID:** `1pr0ejPgiTa_nnrg9jQR5Mzw__BaYP_smQgAjL0RKGUGTAmHrOjvLc_LY`
- **Deployment (v1):** https://script.google.com/macros/s/AKfycby4NmMXBaUcuxmss5zMFTF6z8rVRGF1S8EavSll4yktL-Qvvjoxd9ql2iFN2WSTNzSf/exec
- **Access:** Web app · Execute as: Me (lokman@lotmanit.com) · Who has access: Anyone
- **Owner account:** lokman@lotmanit.com (clasp auth: `~/.clasprc.json`, Apps Script API enabled)

## Redeploying after editing Index.html

```bash
cd "D:/CodeBook/Notion_Projects/bloom-flow/Media Matrix HTML5 engine/gas"
cp ../Index.html ./Index.html          # sync the app
clasp push -f                          # push all files (creates @HEAD deployment)
clasp deploy --description "v2 - <note>"   # new version + deployment
```

## Pitfalls (verified 2026-08-12)

1. **The Apps Script REST API cannot create web-app entry points** — `clasp deploy`
   creates headless (API-executable) deployments that 404 on `/exec`. The web-app
   entry point must be created in the editor UI: Deploy → New deployment → ⚙️ Web app
   → Execute as: Me → Who has access: Anyone. (Confirmed against Google's discovery
   schema: `DeploymentConfig` only accepts scriptId/versionNumber/manifestFileName/description.)
2. **One-time "Review permissions"** — after creating the deployment, visit the /exec
   URL logged in as the owner and click "Review permissions" → allow. Without this,
   visitors see Google's "Authorization required" dialog and the app frame stays blank.
3. `doGet()` must call `setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)`
   or Notion cannot embed the app (verified: no X-Frame-Options / CSP frame-ancestors
   on the 200 response).
4. Keep all CSS/JS inline — Google's CSP blocks external resources in HtmlService.
