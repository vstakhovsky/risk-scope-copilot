# 🚀 Risk & Scope Copilot

[![build](https://github.com/vstakhovsky/risk-scope-copilot/actions/workflows/ci.yml/badge.svg)](https://github.com/vstakhovsky/risk-scope-copilot/actions)
![license](https://img.shields.io/github/license/vstakhovsky/risk-scope-copilot)
![version](https://img.shields.io/github/v/tag/vstakhovsky/risk-scope-copilot?label=version)
![node](https://img.shields.io/badge/node-22.x-339933?logo=node.js&logoColor=white)

**Multi-agent “Risk & Constraints Analyzer”** that transforms messy project inputs into clear deliverables:

✅ Risks  
✅ Scope Options  
✅ RACI  
✅ ADRs  
✅ Diagrams  
✅ Status Dashboard

> Live prototypes:  
> • Lovable: https://preview--copilot-scope-insight.lovable.app/  
> • Replit: https://risk-scope-copilot-vstakhovsky.replit.app/

---

## 🌍 Table of Contents

- [Problem](#-problem)
- [Value](#-value)
- [What It Does](#-what-it-does)
- [Screenshots](#-screenshots)
- [How It Works (Flow)](#-how-it-works-flow)
- [Architecture](#-architecture)
- [Use Cases](#-use-cases)
- [Functional Requirements](#-functional-requirements)
- [Non-Functional Requirements](#-non-functional-requirements)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [CI / Quality](#-ci--quality)
- [Roadmap](#-roadmap)
- [Version Tiers](#-version-tiers)
- [Project Structure](#-project-structure)
- [Demo Script (Interview)](#-demo-script-interview)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌐 Problem

Technical Product Managers spend days aligning risks, dependencies, legal and operational constraints across Jira, Confluence, GitHub, and endless meetings.  
This leads to **delays, misalignment, and knowledge loss**.

---

## 💎 Value

- **Ready-to-use PR artifacts** with traceable evidence and GitHub-style diffs.  
- Unified **status dashboard** for releases, dependencies, and scope changes.  
- **Versioning** and **evidence links** for audits and reviews.  
- Seamless integration path (Jira, GitHub, Confluence, Slack, Claude MCP).

---

## 🧭 What It Does

- 🔎 **Risk & Constraints Analysis** (Architecture, Security, Ops, Legal, Dependencies)
- 🧭 **Scope Options (A/B/C)** with rationale and impact
- 🧩 **RACI Matrix** for roles × responsibilities
- 🧾 **ADR Records** (markdown-like decisions with evidence history)
- 🗺️ **Basic C4/Flow Diagrams** for quick orientation
- 📊 **Status Dashboard** aggregating releases, requirement deltas, architecture changes, dependencies
- 🧪 **Evidence Drawer** with citations and confidence
- 🧬 **Versioning + GitHub-style diffs** for artifacts
- ⚙️ **Admin** (agents & integrations)

---

## 🖼️ Screenshots

> Put your screenshots under `docs/screenshots/` (or adjust paths below).

<p align="center">
  <img src="docs/screenshots/overview.png" width="900" alt="Overview"/>
</p>
<p align="center">
  <img src="docs/screenshots/workflow-demo.png" width="900" alt="Workflow Demo"/>
</p>
<p align="center">
  <img src="docs/screenshots/document-history.png" width="900" alt="Document History"/>
</p>
<p align="center">
  <img src="docs/screenshots/sub-agents.png" width="900" alt="Sub-Agent System"/>
</p>
<p align="center">
  <img src="docs/screenshots/docs-overview.png" width="900" alt="In-app Documentation"/>
</p>

---

## 🔁 How It Works (Flow)

**Upload → Pick Profile → Run → Review → Export/Share**

1. **Upload / Intake**: JSON, Markdown, DOCX, Confluence exports. Choose an **aroma/profile**.  
2. **Multi-Agent Analysis**: domain agents generate artifacts in parallel with **evidence links**.  
3. **Artifacts Hub**: expand artifacts → **Evidence Drawer** → **Version dropdown** → **Diffs**.  
4. **Status Dashboard**: releases health, requirement deltas, architecture changes, dependencies.  
5. **Admin**: configure sub-agents & integrations, view audit log.  
6. **Export & Share**: JSON/Markdown (PDF & read-only links in next versions).

---

## 🏗️ Architecture

> Minimal MVP with a clean growth path to full orchestration.

+------------------+ +-----------------------+ +--------------------+
| Intake Adapter | ---> | Orchestrator (UI/API)| ---> | Artifact Registry |
| (JSON/DOCX/etc.) | | - dispatch to agents | | - risks, RACI, |
+------------------+ | - evidence collation | | ADRs, diagrams |
| - versioning hooks | +--------------------+
+-----------+-----------+
|
+--------------------------+---------------------------+
| | | | |
[Risk Agent] [Scope Agent] [RACI Agent] [ADR Agent] [Diagram Agent]
| | | | |
+---------------- Evidence / Citations / Confidence ---+



**Animated concept (style inspiration):**  
![Agents Overview](https://raw.githubusercontent.com/viktoriasemaan/ai-agents/main/images/image24_agent_overview.gif)

---

## 🧰 Use Cases

- **Small Teams / Startups** — quick risk surfacing, basic diagrams & ADRs in minutes.  
- **PM/TPM** — unify scattered docs; create RACI; show status health instantly.  
- **Architecture Reviews** — decisions as ADRs with traceable evidence.  
- **Audits / Compliance** — export artifacts + citations + confidence scores.

---

## ✅ Functional Requirements

- Upload & parse context (JSON/MD/DOCX/Confluence export)  
- Select **analysis profile** (aroma)  
- Generate artifacts:
  - Risks & Constraints by domain
  - Scope Options (A/B/C) + rationale
  - RACI Matrix
  - ADR Records
  - Basic C4/flow/relationship diagrams
- Artifact features: **evidence drawer**, **confidence**, **versions & diffs**  
- Status dashboard: releases health, requirement deltas, architecture changes, dependencies (+severity filters)  
- Admin: manage sub-agents & integrations, audit log  
- Export: **JSON / Markdown** (PDF & share links next)

### 🧪 Non-Functional Requirements

- ⚡ Snappy UI  
- 🧩 Clear visual hierarchy; dark/light toggle  
- 🔒 Privacy stance (no training on user data; expirable shares)  
- ♻️ Deterministic builds; Node/Next pinned in CI  
- ✅ Type safety (TypeScript), linting (ESLint), formatting (Prettier)  
- 🧪 Tests (planned)

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router), React 18, TypeScript  
- **Styling:** Tailwind CSS, PostCSS (CJS), CSS Modules, lucide-react icons  
- **Build:** Node.js 22.x, npm  
- **CI:** GitHub Actions (install → lint → build)  
- **Structure:** Monolithic Next app with `/app` routes and `/app/api/run/route.ts`

---

## 🧑‍🍳 Getting Started

> Works on macOS/Linux/Windows (WSL). **Node 22** recommended.

```bash
# 1) Clone
git clone https://github.com/vstakhovsky/risk-scope-copilot.git
cd risk-scope-copilot

# 2) (Optional) use Node 22 with nvm
nvm use 22 || nvm install 22

# 3) Install deps
npm ci

# 4) Dev server
npm run dev
# -> http://localhost:3000
```

---

## Production

```bash
npm run build
npm start
# -> http://localhost:3000
v0.1 runs without external secrets. Integrations arrive in v0.2+.
```

---

## 🧪 CI / Quality

```bash
Workflow: .github/workflows/ci.yml
actions/checkout@v4
actions/setup-node@v4 (Node 22 + npm cache)
npm ci → npm run lint → npm run build
Status badge at the top of this README.
```
---

## 🗺️ Roadmap

v0.1 – MVP (done)
- **Core UI (Overview, Upload, Artifacts Hub, Status, Admin) 
- **Multi-agent scaffold + mocked pipeline
- **Evidence drawer, versions, diffs (UI)
- **CI, type-safe links, PostCSS CJS, Next 14 config cleanup

v0.2 – Proof & Onboarding
- **Importers: Confluence / Jira / GitHub (mocks → real)
- **Exporters: Markdown/JSON (+ PDF)
- **Evidence confidence improvements
- **Read-only share links with expiry
- **First C4 generator (context maps & flow)

v0.3 – Scale / Advanced
- **Full agent orchestration, retries
- **Structured evidence store (trace IDs)
- **SLA dashboards (release drift / dependency risk)
- **RBAC & OAuth (GitHub/Google)
- **Workspaces & team review flows


---

## 🧾 Version Tiers

- **V1 – MVP: single-team projects, <10 pages; manual evidence import; mocked integrations.
- **V2 – Beta: onboarding, real integrations, share links, PDF, stronger confidence scores.
- **V3 – Scale: cross-team programs, audits, agent reliability/observability, RBAC, compliance exports.



---

## 🗂️ Project Structure

```bash
risk-scope-copilot/
├─ .github/workflows/ci.yml         # CI (lint + build)
├─ app/
│  ├─ page.tsx                      # Overview
│  ├─ upload/page.tsx               # Upload & Intake
│  ├─ artifacts/page.tsx            # Artifacts Hub
│  ├─ status/page.tsx               # Status Dashboard
│  ├─ admin/page.tsx                # Admin Panel
│  ├─ ui/evidence.tsx               # Evidence drawer
│  ├─ lib/sample-data.ts            # Mock inputs/outputs
│  └─ api/run/route.ts              # Mocked run endpoint
├─ public/logo.svg
├─ docs/
│  ├─ screenshots/                  # Add PNGs here
│  └─ diagrams/                     # Add GIF/PNGs here
├─ next.config.mjs
├─ postcss.config.cjs
├─ tailwind.config.ts
├─ tsconfig.json
├─ package.json
└─ LICENSE
```


---

## 🎤 Demo Script

- **Overview → 30-sec pitch; show Start Analysis & Try with Sample Project.
- **Upload & Intake → document types + profile/aroma selector.
- **Artifacts Hub → Risks, Scope, RACI, ADRs, Diagrams → open Evidence Drawer → switch versions → show diffs.
- **Status Dashboard → releases health, requirement deltas, architecture changes, dependencies.
- **Admin → sub-agents list, toggles, (planned) connectors.
- **Export → JSON/MD; mention PDF and read-only share in v0.2.


---

## 🤝 Contributing

- **PRs are welcome!
- **Add templates under .github/ISSUE_TEMPLATE/ and PULL_REQUEST_TEMPLATE.md.
- **Run locally:
```bash
npm run lint
npm run build
npm run dev
```

---

## 📜 License

- **MIT © Veniamin Stakhovsky
- **::contentReference[oaicite:0]{index=0}

