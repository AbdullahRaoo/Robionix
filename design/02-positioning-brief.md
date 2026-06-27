# Robionix — Positioning & Niche Brief (Phase 1)

> This is the document that was missing. It's ~80% of why output was coming out generic:
> the model had no point of view to design *toward*. Read it, correct anything that's wrong —
> your edits here steer the entire build.

---

## 1. Who Robionix actually is

**Robionix Technologies** is a Pakistani industrial deep-tech company that builds **both
hardware and software automation** for manufacturers — and is on a mission to replace
expensive imported ERP (SAP, Oracle, Dynamics) with home-grown systems that cut the country's
trade deficit and grow exports.

- **Based at:** NUTECH (National University of Technology), I-12/2, Islamabad, Pakistan
- **Contact:** awaisfrombit@gmail.com · LinkedIn: /company/robionix-technologies
- **Stage:** emerging / founder-led, university-affiliated, with real deployed products and named industry partners (e.g. a Faisalabad knitwear exporter).

**This is NOT a generic digital agency or SaaS startup.** (The old site literally called it a
"full-service digital agency" — that undersells it badly.) It's an applied-engineering house:
manufacturing execution systems, computer vision, robotics, embedded IoT.

## 2. The product & capability roster (what the site must present)

**Flagship platforms**
- **RMES** — Robionix Manufacturing Execution System. The hero offering: an industrial ERP for textile, knitwear, sports & surgical industries. Pitch: replace SAP/Oracle/Dynamics, cut costs, boost exports.
- **KMES** — Knitting MES. RMES specialized for knitting (yarn→delivery), built *with* a Faisalabad knitwear exporter. Strong proof-of-traction story.
- **MagicQC** — NEW featured product. An **AI-Based Automated Garment Size Measurement System**: a lit measurement station + overhead computer-vision rig. Garments are laid flat; CV reads every point-of-measure (POM — shoulders, chest, length, etc.) against the buyer's tolerance table *live*; an operator runs a touch panel; a director analytics dashboard tracks piece-level pass/fail, per-operator and per-article. Real buyer tolerance profiles already in the system: **Under Armour, Reebok, Zara, Pull&Bear, Trutex.** (Live screenshots + video in `magicqc-content/`.) This is the freshest, most visual, most defensible proof the company is shipping — it should be the showcase centerpiece.

**Applied AI / computer vision**
- **Bib Recognition & Image Segregation** — YOLO + Tesseract OCR; auto-sorts marathon runner photos by bib number. Concrete, demoable CV win.

**Embedded / IoT**
- **Smart Helmet** — bike won't start without helmet; over-speed + accident detection + emergency location alert.

**Service pillars** (capabilities offered as services)
- Computer Vision · ERP Development (ERPNext) · Robotics & Automation · Embedded Systems · Industrial Automation · VR-Based Projects

## 3. Who we're talking to (the buyer)

Primary: **factory owners and operations/production directors** of Pakistani manufacturing —
textile, knitwear, sports goods, surgical, leather. They are:
- paying a fortune for, or scared off by, imported ERP;
- skeptical of "tech startup" fluff — they want proof, uptime, and ROI;
- moved by: export competitiveness, waste reduction, real-time floor visibility, local support.

Secondary: event organizers / photographers (Bib Recognition), and partners/academia (NUTECH).

## 4. Voice & tone

**Engineered, proven, plain-spoken, nationally ambitious.** Not hypey, not "synergy" agency-speak.
- Lead with outcomes and numbers (efficiency %, waste cut, pieces inspected, pass rates).
- Show the machine: real dashboards, real factory floors, real operators.
- A current of national purpose — "automating Pakistan's industry, cutting the import bill,
  growing exports" — used with restraint, as conviction, not slogans.
- Avoid: "full-service digital agency", "revolutionize" overuse, emoji, stock-photo abstraction.

## 5. Reference targets (what "good" looks like — aim here)

For the **light editorial-engineering** direction, study:
- **stripe.com / stripe docs** — warm precision, type hierarchy, restraint
- **cognex.com** — industrial machine-vision credibility (our actual peer)
- **hadrian.co / anduril.com** — American deep-tech: confident, photographic, engineered
- **linear.app** — crispness and motion discipline (borrow the *craft*, not the dark theme)
- **vercel.com** — typographic confidence, generous space

The bar: a visitor should feel "these people build serious systems," within 3 seconds, from
type + space + one real product image — before reading a word.

## 6. Proposed sitemap (company-led, MagicQC as showcase)

```
Home
 ├─ Hero: Robionix as Pakistan's industrial automation house (1 line + 1 real visual)
 ├─ Proof bar: industries served / partners / a hard number
 ├─ Capabilities: ERP/MES · Computer Vision · Robotics · Embedded · Automation · VR
 ├─ Flagship: RMES (replace SAP/Oracle, cut the import bill)
 ├─ ★ MagicQC showcase: live dashboard, the QC story, video
 ├─ Selected work: KMES · Bib Recognition · Smart Helmet (case cards)
 ├─ Mission/impact: exports + trade-deficit narrative
 └─ CTA: book a meeting
Capabilities (or individual service pages)
Products
 ├─ RMES   ├─ KMES   ├─ MagicQC   ├─ Bib Recognition   └─ Smart Helmet
About  — NUTECH origin, team, mission/vision
Contact — NUTECH Islamabad, book appointment, message form
```

## 7. Media plan (use the real assets — fix "media not used effectively")

In `magicqc-content/`:
- `analysis-dashboard.jpg`, `qc-dashboard.avif` → director **analytics dashboard** shots; `operatorpanel.jpeg` → the **operator touch panel** (live POM measurement). Together they tell the MagicQC story end-to-end. The product *is* the visual.
- `WhatsApp Video ...mp4` (several) → short looping clips for the MagicQC section + a hero/case reel. The 81MB one needs compressing before web use.
- `IMG_*.HEIC` (factory/product photos) → convert to WebP/AVIF; use as case-study and texture imagery (real floor > stock).

In `extracted-content/assets/` → the three logo variants (main/wide/wbg) for header/footer/dark.

**To-do before build:** convert HEIC→WebP, compress the hero video, pick the 4–5 strongest stills. (I can script this in Phase 2/3.)

## 8. Open gaps to confirm (your input)
- Real phone number + final contact email (currently a personal gmail — want a branded one?).
- Any hard numbers we can cite? (industries deployed, pieces inspected, efficiency gains)
- Logo usage: is the wordmark "ROBIONIX" final, or also "Robionix Technologies"?
- Languages — English only, or English + Urdu?
