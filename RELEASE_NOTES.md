# 🚀 Bloom Flow — Release Notes

> Versioning: `beta` releases are active development builds. They may eventually graduate to **Elite** (paid/premium) features — see each entry's status.

---

## v0.2.0-beta — "The Operator" (2026-07-27)

### 🆕 New: `bloom_flow_manager.py` — Premium CLI Toolkit

**Status: `beta` → planned `elite`**

A zero-dependency (stdlib-only) command-line tool giving creators and enterprise teams full programmatic control over a Bloom Flow workspace. This is the first step toward the **Elite Power-User API Toolkit**.

**Capabilities:**

| Command | Purpose |
|---|---|
| `tasks list` | Query tasks with filters (status / priority / phase), table or JSON output |
| `tasks add` | Create a task with Lead (PI), Priority, Phase (Lookup Project) linkage |
| `tasks update` | Patch status / priority / lead / phase on existing tasks |
| `tasks archive` | Soft-delete (archive) a task |
| `tasks import` | Bulk-import from JSON with fail-fast validation + `--dry-run` |
| `audit` | Schema & formula audit — flags outdated v1–v3 patterns |
| `check` | Full template integrity check across Tasks / Porfolios / Knowledge hubs |

**Engineering highlights:**

- **Exponential backoff + `Retry-After` honoring** for Notion's 429/529 rate limits (avg 3 req/s ceiling).
- **Schema-evolution resilience**: property names are config-driven (`PI` not `Lead`, `Lookup Project` not `Project & Phase`) — rename in config, not code.
- **Dual-ID handling**: `data_source_id` (queries) vs `database_id` (page creation) — the classic Notion API trap.
- **JSON output** for machine consumption; human-friendly table views.
- Exit codes: `0` success / `1` config / `2` API error / `3` partial batch failure.

**File:** `scripts/bloom_flow_manager.py` (repo copy) · `D:\Notion_Projects\bloom-flow\scripts\` (working copy)

---

### 🧮 New: Formula Suite v5 (Moon Meter Engine)

**Status: `beta` → planned `elite`**

Archived all static v1–v3 progress bars. Replaced with a single recursive Formula 2.0 engine:

- **Advanced Multi-Phase Moon Meter** — maps each phase to its own moon (`🌑🌒🌓🌔🌕`), emits per-line phase reports with percentages, falls back to direct-task completion for isolated projects.
- **Urgency & Priority Matrix Badge** — Eisenhower-style quadrant classification (Critical Overdue / Do Today / Due Soon / On Track) driven by `Priority` × `Due Date`.
- **Cross-Hub System Health** — aggregates `Porfolios Hub` + `Knowledge Hub` telemetry into a single command-center verdict.

**Files:** `formulas/advanced-moon-meter-v5.txt`, `formulas/urgency-matrix-badge.txt`, `formulas/cross-hub-system-health.txt`

---

### 🧭 New: Side Panel Vault & Sandbox Architecture

**Status: `stable` (core UX)**

- **Manager Mode (Project blueprint):** `🎛️ CONTROL PANEL` — Status, Progress, Health, Due Date, Lead, Priority in the side panel; system metadata forced to *Always Hide*.
- **Worker Mode (Task HUD):** `🔬 THE INSPECTOR` — Status, Priority, Urgency Badge, Due Date, Assignee; raw assets (keys, media, scratchpad) decoupled into a collapsible Quick Vault.
- **Zero-Friction Onboarding Protocol** — paste-ready `<callout>` guide (`onboarding/side-panel-setup-guide.txt`).

---

### 🩺 New: Formula Health Check Utility

**Status: `beta`**

`scripts/formula_health_check.py` scans both hubs, flags any residual v1–v3 patterns, and reports property-name drift before shipping.

---

### 🗺️ Workspace Data Migration

- 25 action items (10 friction-fix + 15 sprint roadmap) imported into **Tasks Flow** (Tasks Engine) with correct `PI` and `Lookup Project` linkage to the **UX Design** phase.
- Legacy items archived; pre-existing Porfolios Hub sub-items restored intact.

---

### 📋 Patch Log

| Date | Version | Notes |
|---|---|---|
| 2026-07-27 | `v0.2.0-beta` | Operator toolkit, Formula v5 suite, Side Panel Vault, health checker, data migration |

---

## Roadmap

- [ ] `v0.3.0-beta` — `sync` command for cross-database rollup reconciliation
- [ ] `v0.4.0-beta` — Windows `.bat` launcher + config file support
- [ ] `v1.0.0-elite` — Managed release: full API toolkit, encrypted credential vault, one-click project initialization
