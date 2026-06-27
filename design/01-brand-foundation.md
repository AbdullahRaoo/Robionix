# Robionix — Brand Foundation (Phase 1)

> Extracted from the actual logo + content. This is the source of truth. Every color, font,
> and token in the build traces back to this file. Nothing gets invented at build time.

---

## 1. Color — extracted from the logo

Sampled directly from `extracted-content/assets/logo_main.png`:

| Role | Hex | Where it came from |
|---|---|---|
| **Petrol-navy** (primary) | `#003C54` | The shield + wordmark "ROBIO" — 80%+ of the logo's pixels |
| **Signal amber** (accent) | `#F0A800` | The "NIX" + the gold sweep in the mark |
| Amber highlight | `#FCA800` | Lighter edge of the gold |
| Amber shadow | `#D89000` | Darker edge of the gold |
| Navy variant | `#003C60` / `#004860` | Cooler edge of the shield |

**The brand is two colors: deep petrol-navy + a single warm amber.** That's a strong,
disciplined pairing. The rule for the whole site: **petrol does the structure, amber is the
accent you earn.** Amber is never a background — it's a highlight, a CTA, a data spike, a
hover. Used sparingly it reads premium; used everywhere it reads cheap.

### Full scales (so we never reach for a random hex)

**Petrol (primary / structure)**
```
petrol-50   #F1F7F9   page tints, hairline fills
petrol-100  #E3EFF3
petrol-200  #BFD9E3
petrol-300  #8FBDCE
petrol-400  #5A9DB6
petrol-500  #2A7E9E
petrol-600  #156585
petrol-700  #0B4F6C
petrol-800  #003C54   ← LOGO ANCHOR (primary brand color)
petrol-900  #002A3B
petrol-950  #00202E   darkest sections, footer, dark-mode base
```

**Amber (accent / energy)**
```
amber-50    #FFF8E6
amber-100   #FFF0C7
amber-200   #FFE29A
amber-300   #FFD16B
amber-400   #FFBE3D
amber-500   #FCA800   highlight
amber-600   #F0A800   ← LOGO ANCHOR (the brand gold)
amber-700   #D89000   shadow / pressed state
amber-800   #B37A00
amber-900   #8A5E00
```

**Warm neutrals (the "light editorial" base — NEVER pure #FFF / #000)**
> This is the single biggest fix for the "plain white / generic" problem. The page is warm
> paper, headings are a near-black with a hint of petrol, body text is a warm gray.
```
paper-50    #FAF8F4   ← default page background (warm off-white, not #FFF)
paper-100   #F3F0EA   alternating sections, cards
paper-200   #E8E3D9   borders, dividers
paper-300   #D8D2C6
ink-400     #8A969D   muted/captions
ink-500     #65727A   secondary text
ink-700     #3D4A52   body text
ink-900     #14222A   ← headings (near-black, petrol-tinted, not #000)
```

**Semantic (for MagicQC dashboards, QC pass/fail, status)**
> Pulled to match the real MagicQC screenshots (green pass / red fail).
```
success-600 #1F8A4C   passed
success-50  #E8F5EE
danger-600  #C0392B   failed / rework
danger-50   #FBEAE8
warning-600 #F0A800   (= brand amber) caution / pending
info-600    #156585   (= petrol-600) neutral metric
```

---

## 2. Typography — deliberate, never Inter/Roboto

The default-font problem is solved by *choosing on purpose*. Two type systems below, one per
art direction (see `03-art-directions.md`). All fonts are free/open and self-hostable.

### LOCKED pairing (2026-06-27, post-impeccable-audit)
| Role | Font | Why |
|---|---|---|
| **Display / headlines** | **Archivo Expanded** (variable `wdth` 125, weight ~640) | Wide mechanical grotesque — reads "engineered / industrial signage." On-register for automation; off the AI reflex-reject list. |
| **Body / UI** | **Geist** | Clean technical grotesk (built for product UI). |
| **Data / specs / labels** | **Geist Mono** | Monospace for metrics, model names (YOLO, ERPNext), POM values — signals real engineering. Earned here (the product UI itself uses mono), not costume. |

> ⚠️ **Fraunces was rejected.** Initially proposed as display, but the impeccable brand-register
> audit flagged it as (a) a known training-data default ("monoculture") and (b) wrong register —
> a soft editorial serif reads "consulting magazine," not "industrial engineering." Swapped to
> Archivo Expanded after an on-screen 3-way comparison (vs Bricolage Grotesque vs Fraunces).

### For the DARK industrial lane
| Role | Font | Why |
|---|---|---|
| **Display** | **Space Grotesk** | Technical, slightly mechanical, tight — reads like instrumentation. |
| **Body / UI** | **Geist** or **IBM Plex Sans** | Neutral, dense-friendly. |
| **Data / telemetry** | **JetBrains Mono** | Numbers + labels in dashboards. |

### Type scale (fluid, 1.250 major-third)
```
display   clamp(2.75rem, 5vw, 4.5rem)   Fraunces, weight 400, tight leading
h1        clamp(2.25rem, 4vw, 3.25rem)
h2        clamp(1.75rem, 3vw, 2.5rem)
h3        1.5rem
body-lg   1.125rem / 1.7
body      1rem / 1.65
caption   0.875rem / 1.5   (often mono, uppercase, tracked +0.04em)
```
**Hierarchy rules (the fix for "no hierarchy"):** one display per page, real size jumps
between levels (never two headings the same size), body capped at ~70ch line length,
captions/labels in mono-uppercase to separate them from body.

---

## 3. Other tokens

```
radius:   sm 6px · md 10px · lg 16px · xl 24px · full 9999px
shadow:   warm-tinted, low-spread (e.g. 0 1px 2px rgba(0,42,59,.06), 0 8px 24px rgba(0,42,59,.08))
          — shadows tint petrol, never neutral gray
spacing:  4px base; section padding clamp(4rem, 8vw, 8rem) vertical
grid:     12-col, max content width 1200–1280px, gutter 24px
motion:   ease [0.22,1,0.36,1]; 200ms micro, 400–600ms section reveals; respect reduced-motion
```

**Gradient policy:** no decorative full-bleed gradients. The only permitted gradient is a
*very* subtle petrol-950→petrol-900 on dark sections, or an amber glow behind a single focal
element. This kills the "or worse, it goes with gradients" failure mode.
