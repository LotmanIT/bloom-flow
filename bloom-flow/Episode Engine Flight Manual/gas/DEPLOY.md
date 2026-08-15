# The Episode Engine — Flight Manual · GAS Deployment Record

- **Project:** https://script.google.com/d/1j14q5e3PBXm_MTc88rSpy8sAZgoSkyOQvphEYtAgtVilLRCK3IPoprlz/edit
- **Script ID:** `1j14q5e3PBXm_MTc88rSpy8sAZgoSkyOQvphEYtAgtVilLRCK3IPoprlz`
- **LIVE web app (v6, Aura embedded):** https://script.google.com/macros/s/AKfycby5LUlRpDKU_wpYDSAZVDH6rrCfsfwHQo0Fw9Y82cofOOw0dNfFSlq1aZV1Vv3V1Twk/exec
- **Access:** Web app · Execute as: Me (lokman@lotmanit.com) · Who has access: **Anyone** (Notion embed ready)
- **Aura audio:** 30.55s briefing (Edge TTS, 1.15×) generated from Coach AK script;
  master copy at `../aura/aura_mind_tuning.mp3` AND on Google Drive (file `14JWXdgorHO_1oUnM86RTeVLrAF6YcS5j`, anyone-with-link).
  In the page it ships as a **base64 data URI** (`data:audio/mpeg;base64,…` ≈ 245 KB) — see Pitfall 2.

## Redeploying after editing Index.html

```bash
cd "D:/CodeBook/Notion_Projects/bloom-flow/Episode Engine Flight Manual/gas"
cp ../Index.html ./Index.html
clasp push -f
clasp version "v7 - <note>"          # create a pinned version
```

Then **create a NEW web-app deployment from the editor UI** (Deploy → New deployment →
⚙️ Web app → Execute as: Me → Who has access: Anyone → Deploy) and use the new URL.
Do NOT update an existing web-app deployment's version via the REST API (Pitfall 1).

## Pitfalls (verified 2026-08-15)

1. **NEVER update a UI-created web-app deployment via the Apps Script REST API**
   (`projects.deployments.update`). The API's `DeploymentConfig` has no entry-point
   field, and a `PUT` **strips the web-app entry point** — the deployment instantly
   404s at `/exec` with no recovery except deleting it and creating a new one.
   Every version bump = a fresh UI-created deployment.
2. **Google Drive cannot hotlink media into the GAS sandbox.** All four link patterns
   (`uc?export=download`, `uc?id=…&confirm=t`, `drive.usercontent.google.com/download`,
   with/without `confirm=t`) fail inside the served page (`MEDIA_ERR_SRC_NOT_SUPPORTED`,
   `networkState=3`) — Drive blocks cross-origin media from `script.googleusercontent.com`.
   curl works fine (no referer); browsers don't. Fix: embed the audio as a base64 data
   URI in the `<audio src>` — no external request, no CORS, immune to hotlink policy.
   183 KB mp3 → 245 KB base64 → ~260 KB page, well under GAS's 5 MB HtmlService cap.
3. **Web-app entry points cannot be created via the API at all** — editor UI only
   (Deploy → New deployment → ⚙️ Web app). The UI flow can be driven end-to-end via the
   browser harness (real-input clicks + ArrowDown/Enter keyboard navigation on the
   Deploy menu; the gear icon is a `settings` material icon; menu items are
   `role="menuitemcheckbox"`).
4. `doGet()` must set `XFrameOptionsMode.ALLOWALL` for Notion embedding (verified: no
   X-Frame-Options/CSP frame-ancestors on the 200).
5. Google Fonts `<link>` is blocked by GAS CSP — falls back to Arial (on-spec).
