# Robionix — Content Strategy, Sitemap & Conversion Plan
*Prepared as a KPI-driven content + conversion strategist. Supersedes the section list in
[04-sitemap-and-content.md](04-sitemap-and-content.md).*

## 0. Verdict on the current build
Strong visual system, but **structurally thin and duplicative** versus the goal ("better than
the old site, not less"):
- Home tries to be the whole site (Capabilities + MagicQC + RMES + Work + Team + Contact). That
  duplicates content that should live on dedicated pages, and puts **Team on the home page**
  (wrong: team is a Company-page asset, not a homepage conversion driver).
- `/platform` and `/work` just **re-render home sections** (no unique value).
- **No individual product pages** and **no service pages**, although the old site had six
  services and four products. A buyer who wants "ERP Development" or "Smart Helmet" has nowhere
  to go. That is *less* than the old site.
- Pages average 2 to 3 sections. For B2B deep-tech, that reads as a brochure, not a platform.

**Fix:** a true hub-and-spoke architecture. Every product and every service gets its own
6 to 8 section page. The home page becomes a curated launchpad that *routes*, not a dumping
ground. No section appears in two places; pages cross-link instead.

## 1. Audience, conversion goal & KPIs
**Primary buyer:** factory owners / operations & QA directors (apparel, knitwear, sports,
surgical) in Pakistan. Secondary: event organisers (Bib), procurement/academia (NUTECH).

**Macro-conversion (the one number that matters): "Book a demo / working session"** (a
qualified lead). Everything ladders to it.
**Micro-conversions:** start a product video, view a second page, download a one-pager,
LinkedIn follow, newsletter sign-up.

**KPIs by page type**
| Page type | Primary KPI | Supporting |
|---|---|---|
| Home | demo-CTA click-through, pages/session | scroll depth, product-page entries |
| Product page | demo request, video play | time-on-page > 90s, spec expand |
| Service page | demo/contact request | cross-clicks to related products |
| Company | demo request, trust dwell | team/photo engagement |
| Contact | form completion | calendar booking |

**Trust architecture (this is what makes a small company look big):** named buyer tolerances
(Under Armour, Reebok, Zara, Pull&Bear, Trutex) · NUTECH affiliation · real deployment photos &
video · a named, credentialed team led by Dr. Awais Yasin · hard numbers (Pakistan textile
exports $17.85B / ~60% of national exports; AQL 2.5 standard; ~3s vs ~90s per piece; 100% vs
sample inspection) · consistent design system · "platform," "system," and "engineered" framing.

## 2. Information architecture (full sitemap)
Mega-menu nav: **Products ▾ · Services ▾ · Company · Contact** + persistent **Book a demo**.

```
/                         Home (launchpad)
/products                 Products hub
  /products/magicqc       MagicQC  (flagship; canonical, keep /magicqc alias)
  /products/rmes          RMES
  /products/kmes          KMES
  /products/bib-recognition   Bib Recognition & Image Segregation
  /products/smart-helmet  Smart Helmet
/services                 Services hub
  /services/computer-vision      Computer Vision (Vision AI)
  /services/erp-development       ERP Development (ERPNext)
  /services/robotics-automation   Robotics & Automation
  /services/embedded-systems      Embedded Systems
  /services/industrial-automation Industrial Automation
  /services/vr                    VR Solutions
/company                  About · mission · vision · story · NUTECH · team · in-the-field
/contact                  Contact + form + office
(phase 2) /insights  blog/case-studies   ·   /careers
```
16 core pages. That is decisively richer than the old site, while every page earns its place.

## 3. Page blueprints (sections per page)

### HOME (`/`) — launchpad, 8 sections (NO team here)
1. **Cinematic hero** (existing) — vision-AI positioning + MagicQC live panel + demo CTA.
2. **Proof bar** — buyer logos/names + one hard stat ("measuring for the buyers your factory ships to").
3. **The Robionix system** — one diagram: vision + robotics + ERP as one stack (routes to Services).
4. **Flagship spotlight: MagicQC** — teaser with the live measure visual → /products/magicqc.
5. **Products grid** — 5 product cards (MagicQC, RMES, KMES, Bib, Smart Helmet) → product pages.
6. **Services strip** — 6 services as compact tiles → service pages.
7. **Impact / national narrative** — the exports + import-substitution story with real numbers.
8. **CTA band** → /contact. (Footer.)

### PRODUCTS HUB (`/products`) — 5 sections
Hero ("Systems we've shipped") → featured MagicQC → product cards (each linking out) → a
"why our products win" trust row → CTA.

### PRODUCT PAGE template — 7 to 8 sections (MagicQC already ~9; apply to all)
1. Hero (name, one-liner, hero visual/video, demo CTA)
2. The problem (the painful status quo, with a number)
3. How it works (3 to 4 steps / the pipeline)
4. Capabilities/features grid
5. Proof: demo video + screenshots + real photos + live data
6. Specs & tech (stack, integrations, what it runs on) — the engineering credibility layer
7. Outcomes/KPIs (ROI, speed, accuracy, coverage)
8. Related + CTA

Per-product specifics & media:
- **MagicQC** (built) — keep; add a "specs/tech" block (vision model, POM count, tolerance source, integrations).
- **RMES** — video (have) + MES block-diagram (GENERATE) + modules list (purchasing→knitting→wet processing→delivery) + SAP/Oracle replacement comparison table + export ROI. 
- **KMES** — knitting-specific; real knitting-machine photo (have) + sub-module diagram (GENERATE) + Faisalabad exporter proof.
- **Bib Recognition** — real CV-in-action photo (have) + pipeline diagram YOLO→OCR→sort (GENERATE) + speed numbers + event use-case.
- **Smart Helmet** — video (have) + feature diagram (helmet sensors, no-helmet-no-start, accident alert) (GENERATE/illustrate) + IoT architecture.

### SERVICES HUB (`/services`) — 5 sections
Hero ("Capabilities, end to end") → 6 service tiles → "how an engagement works" (process) →
proof (which products each capability produced) → CTA.

### SERVICE PAGE template — 6 to 7 sections
1. Hero (service + value prop + CTA)
2. What we build (capability detail, real copy from old site)
3. Where it applies (use cases / industries)
4. Proof: the products/work this capability produced (cross-link: Computer Vision → MagicQC + Bib; ERP → RMES/KMES)
5. How we work (process: discovery → build → deploy → support)
6. Tech & tools (e.g., ERPNext modules; YOLO/OCR; PLCs/sensors)
7. CTA
Service copy already exists in `extracted-content/text/` (computer vision, erp-development full
page, robotics, embedded, industrial automation, VR). **Media gap:** most need a clean hero
visual — GENERATE abstract/technical art or diagrams per service (see §4).

### COMPANY (`/company`) — 7 sections
Hero → who we are / story → mission + vision (have) → the numbers (NUTECH, founded, team size,
deployments) → **Team** (canonical home for it; 10 real headshots) → in-the-field gallery
(Awais demoing) → CTA.

### CONTACT (`/contact`) — built; keep (intents + form + office). Add a small map/embed + direct calendar link.

## 4. Content & media gap plan (generate what's missing)
Principle: **no stock, no AI-with-garbled-text.** Where real media is missing, generate clean
**abstract/technical art, diagrams, and icon systems** that read as "engineered," or reuse real
product/photo assets. Generation tools available: image gen (nano_banana_pro / soul_2) and the
`21st.dev` + `fal` keys in `.env` for components/media.
- **Diagrams (SVG, hand-built, on-brand):** RMES/KMES module block diagrams; Bib YOLO→OCR→sort
  pipeline; Smart Helmet IoT architecture; "Robionix system" stack (home §3); CV pipeline. These
  are data-viz, not illustration, so they're allowed and look technical/credible.
- **Service hero visuals (generate):** abstract petrol/amber technical fields (circuit/mesh/
  point-cloud motifs), or duotone-treated real machine photos. One per service.
- **Product specs:** write from domain knowledge + extracted copy (POMs, ERPNext modules, YOLO/OCR, IoT).
- **Copy:** expand each page to full length from the extracted text + the industry framing in §1.
- **One-pager PDFs** (phase 2) per product as a lead-magnet download (micro-conversion).

## 5. Rules
- **No duplication:** each section has ONE canonical page; others link to it. Team = Company only.
- **Every page ends in the same primary CTA** (Book a demo) for funnel consistency.
- **Cross-link** products ⇄ services (MagicQC ⇄ Computer Vision, RMES ⇄ ERP Development, etc.).
- **No em dashes** in any copy.

## 6. Build phases (recommended order)
1. **Restructure nav + hubs**: mega-menu, /products + /services hubs, redirect /platform→/services, /work→/products.
2. **Product pages** (highest conversion value): RMES, KMES, Bib, Smart Helmet (MagicQC done). Generate the 4 diagrams.
3. **Service pages** (6): full copy + generated hero visuals + product cross-links.
4. **Home rebuild** to launchpad (remove Team, add system diagram + products grid + services strip + impact).
5. **Company** deepen (story + numbers + team canonical).
6. Phase 2: Insights/case studies, Careers, one-pager PDFs, contact form wiring + calendar.

**KPIs to instrument at launch:** demo-CTA clicks (per page), product-video plays, scroll depth,
pages/session, contact-form completion. Review weekly; iterate the weakest funnel step.
```
```
