# Robionix — Two Art Directions (Phase 1)

> You asked to see both. Same brand, same content, two visual languages. Pick one (or take
> elements from each). Both are built on the exact logo colors and both explicitly avoid
> Inter/Roboto, pure-white backgrounds, and decorative gradients.

> ✅ **LOCKED (2026-06-27):** Direction A (light editorial-engineering) as the site spine +
> one dark "control-room" section for the MagicQC showcase. Fonts: **Archivo Expanded**
> (display) + **Geist** (body/UI) + **Geist Mono** (data/labels). _Fraunces was the initial
> pick but the impeccable audit rejected it as an AI-default + wrong register; see
> [01-brand-foundation.md](01-brand-foundation.md)._

---

## Direction A — "Light Editorial-Engineering"  ← (the lane you leaned toward)

**Feeling:** premium engineering consultancy. Warm, confident, lots of air, type-led. The
credibility of Stripe/Cognex. Reads expensive without trying hard.

| Element | Treatment |
|---|---|
| **Background** | `paper-50 #FAF8F4` warm off-white; alternating `paper-100` sections. Never #FFF. |
| **Text** | Headings `ink-900` (petrol-tinted near-black); body `ink-700`. |
| **Display font** | **Fraunces** — editorial soft-serif, large optical size, tight leading. The signature. |
| **Body/UI** | **Geist**. **Geist Mono** for labels/specs/metrics (uppercase, tracked). |
| **Petrol use** | Structure: section headers' accents, icons, footer (`petrol-950`), links. |
| **Amber use** | Earned accents only — primary CTA, one data spike, hover underlines, a single focal glow. |
| **Imagery** | Big, calm, real: factory floors and MagicQC dashboards in generous frames with soft petrol-tinted shadows. Photography is the hero, not illustration. |
| **Motion** | Restrained: text rises + fades on scroll, numbers count up once, dashboard subtly parallaxes. |
| **Hero idea** | Left: a Fraunces headline ("Industrial automation, engineered in Pakistan."). Right: the MagicQC dashboard floating in soft shadow on paper. One amber CTA. A thin mono proof-line below. |

**Risk if done lazily:** could drift toward "plain." Antidote = strong type scale + real photos
+ the mono detail layer + amber discipline. The brief enforces all three.

---

## Direction B — "Dark Industrial / Technical"

**Feeling:** instrumentation. Deep petrol surfaces, amber as signal light, data-viz energy.
Reads like Palantir/Hadrian/a control room. Makes the MagicQC dashboards *glow*.

| Element | Treatment |
|---|---|
| **Background** | `petrol-950 #00202E` base; `petrol-900` panels; hairline `petrol-700` borders. |
| **Text** | Headings near-white `#F1F7F9`; body `petrol-200`. |
| **Display font** | **Space Grotesk** — mechanical, tight, technical. |
| **Body/UI** | **Geist** / **IBM Plex Sans**; **JetBrains Mono** for telemetry + numbers. |
| **Petrol use** | Everything structural — it's the environment. |
| **Amber use** | Signal: active states, KPIs, graph lines, the one thing your eye should land on. High contrast on dark = dramatic. |
| **Imagery** | Dashboards on dark sit seamlessly (their dark chrome blends in); factory photos get a subtle petrol duotone for cohesion. |
| **Motion** | More alive: grid/scanline textures, KPI tickers, graph draw-on, amber pulse on focus. |
| **Hero idea** | Full-bleed petrol with a faint engineering-grid texture; Space Grotesk headline; a live-looking MagicQC panel with amber metrics; mono KPI strip across the bottom. |

**Risk:** dark deep-tech is more common now, so it must be executed with real craft (texture,
data, motion) to not look like every other dark SaaS template. Higher ceiling, higher effort.

---

## Side-by-side

| | A · Light Editorial-Eng | B · Dark Industrial |
|---|---|---|
| Personality | Premium, calm, trustworthy | Powerful, technical, intense |
| Best for | Winning enterprise/factory-owner trust | Wowing on product/AI capability |
| Dashboard fit | Great (framed on paper) | Excellent (blends into dark) |
| Differentiation | High if type+photo are strong | High only if craft is high |
| Safer floor | Yes | No (needs more polish to not feel templated) |
| Effort to excellent | Medium | High |

**My recommendation:** **Direction A as the site's spine** (it best fits a company-led,
trust-first B2B pitch to manufacturers), with **one Direction-B "control-room" moment** — make
the MagicQC showcase section go dark petrol so the product dashboards glow. Best of both:
calm credibility everywhere, one cinematic product beat.

---

## How we proceed once you pick
1. You choose A, B, or "A-spine + B for MagicQC."
2. I lock the chosen tokens into a real `globals.css` / Tailwind theme (Phase 3 setup).
3. We build the **hero only**, verify in browser, then run the **impeccable** audit on it.
4. Approve the hero → roll the same system through the rest, section by section, auditing each.

No section moves forward until it passes the audit. That loop is what separates this from the
generic output you were getting.
