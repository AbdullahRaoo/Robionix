# Robionix — Sitemap, Sections & Content Plan

Multi-page site. Shared sticky header (Home · MagicQC · Platform · Work · Company · Contact +
theme toggle + Book a meeting) and a shared footer on every page. Home keeps its cinematic
in-hero header; subpages use the sticky header. All content below is drawn from the real old
site + the MagicQC media. **MagicQC is the flagship (new); old products are "work".**

## Media inventory (what each asset is → where it's used)
**magicqc-content/**
- `WhatsApp Video 1.18.00 PM.mp4` (81MB→compress) — Dr. Awais Yasin presenting the full MagicQC system → **MagicQC page hero/demo video**
- `WhatsApp Video 11.58.51.mp4` (7.2MB→compress) — hands-on demo with people → MagicQC "in the field"
- `WhatsApp Video 11.56.15 / 11.56.17.mp4` (tiny) — station screen clips → ambient loops (optional)
- `operatorpanel.jpeg` — live operator panel (POM table + buyer select) → MagicQC "operator panel" + home hero (already)
- `analysis-dashboard.jpg` — director analytics (pass/fail) → MagicQC "analytics"
- `qc-dashboard.avif` — colorful home/overview dashboard → MagicQC "command centre"
- `IMG_0769/0773/0801/0808/0814.HEIC` + `WhatsApp Image *.jpeg` — the physical lit station (some with Awais demoing to a group) → MagicQC "the station" + Company credibility
- `WhatsApp Image 11.57.30.jpeg` — garment-on-screen CV close-up → MagicQC "how it works"
- (already processed) `garment-flatlay.webp`, station-front/operator/pass-detail
**extracted-content/assets/media/** — team headshots (10), bib.jpg, kmes.jpg, smart-helmet.jpg, erp-service.jpg (used); service banners (computer-vision/robotics/etc, mostly stock — use sparingly); skip who-we-are.png, factory-1.jpg.
**videos (old site, downloaded):** rmes.mp4 (knitwear MES), smart-helmet.mp4.

---

## 1. Home (`/`)  — built
Hero (cinematic) → Capabilities (bento) → MagicQC teaser → RMES (video) → Selected Work →
Team → Contact CTA. **Add:** footer; nav links to subpages; a "MagicQC command centre" peek.

## 2. MagicQC (`/magicqc`)  — flagship, build first (most media)
- **Hero**: "AI-Based Automated Garment Size Measurement" + live LiveMeasure panel/garment. CTA Book a demo.
- **The problem**: manual QC is slow (~90s/piece), inconsistent, paper-based. 1.3% pass-rate example from real data.
- **How it works** (3 steps + garment CV close-up): Lay flat → Vision reads every POM vs buyer tolerance → Pass/fail to dashboard.
- **The demo video** (v1, Awais presenting) — framed VideoFrame.
- **One platform, three views**: operator panel (live measurement) · analytics dashboard (director) · command centre (qc-dashboard overview) — tabbed/stacked screenshots.
- **The station** (real photos, gallery): the lit measurement bed + overhead rig; "in the field" demo photos.
- **Built for your buyers**: Under Armour, Reebok, Zara, Pull&Bear, Trutex tolerance profiles. Real POM table (shoulder 50.0, chest 53.5, hem 40.3, length 60.0, cuff 8.0, waist 43.0).
- **Stats band**: ~3s/piece · 6–8 POM/article · per-operator QC · 100% logged.
- **CTA**.

## 3. Platform (`/platform`) — capabilities deep-dive
Intro → six capability blocks, each with real copy from old site:
- **Vision AI** (computer vision: surveillance, QC, analytics; MagicQC + Bib)
- **ERP Development** (ERPNext: accounting/HR/sales/inventory/CRM/projects; agility, simplify IT, real-time reporting, visibility, productivity, reduce risk) — from erp-development.md
- **Robotics & Automation** (precision robotic cells)
- **Embedded Systems** (concept to silicon)
- **Industrial Automation** (workflow + machine automation)
- **VR Projects** (training, simulation, education)
CTA.

## 4. Work (`/work`) — proven products
Featured: RMES (video) + KMES (knitting machine, video poster) · Bib Recognition (CV in action) ·
Smart Helmet (video) · ERP Development. Each: image/video, the real описание, tech tags (YOLO, OCR, ERPNext, IoT).

## 5. Company (`/company`) — about + team
- **Who we are** (about-us.md): emerging Pakistani company, hardware + software automation for manufacturing.
- **Mission**: catalyst for positive change in Pakistan's manufacturing, streamline, competitiveness, success.
- **Vision**: manufacturing in Pakistan synonymous with innovation and excellence; pioneers of this transformation.
- **Origin**: built at NUTECH, Islamabad.
- **The team** (10 real headshots) — reuse Team component.
- **In the field** (demo photos of Awais presenting MagicQC) — credibility.
CTA.

## 6. Contact (`/contact`)
- Office: National University of Technology (NUTECH), I-12/2, Islamabad, Pakistan.
- Email: awaisfrombit@gmail.com (TODO: branded email). Book a meeting. LinkedIn.
- Three intents (from contact.md): Visit our office · Reach out anytime · Let's collaborate.
- Message form (UI; wire to Resend later).

## Shared
- **SiteHeader** (sticky, theme toggle, nav) — used on subpages.
- **SiteFooter** — logo, nav columns (Platform/Work/Company/Contact), NUTECH address, LinkedIn, copyright.
- Theme persists across pages (html data-theme + localStorage, already in place).

## Build order
1. Compress v1/v4 videos; process magicqc images (dashboards, station, garment close-up). 
2. SiteHeader + SiteFooter (shared).
3. **MagicQC page** (flagship). 4. Company. 5. Platform. 6. Work. 7. Contact. 8. Footer on home + nav wiring.
