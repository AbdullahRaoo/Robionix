# Robionix — $10K Checklist Audit (honest)
Scored 1-10 against the eight criteria. Average ≈ 7.6/10: clearly in the premium tier,
with four specific gaps that separate "very good" from "unarguably $10K."

## 01 — Point of view, not a template — 8.5
Commits hard to one direction: industrial dark-luxury + computer-vision. The cinematic
loader, the live measurement overlay, the detection-reticle cursor, the hand-built flow
diagrams, petrol+amber on a lit-bed dark surface. This is not a template.
*Risk:* a few sections fall back to familiar SaaS shapes (feature-card grids, stat bands).

## 02 — Typography that does work — 6.5  ← weakest
Body = Geist, labels = Geist Mono (both good, neither Inter/Roboto). **But the display face is
`system-ui`** (Segoe UI / SF Pro), the OS default. Hierarchy is carried well by weight (800)
and scale, so it "works", but a design purist reads a system-font display as *defaulted, not
chosen*. This was a deliberate call (we rejected Fraunces and Archivo), and it's the single
biggest lever to push the site from 8 to 10 on this axis.
*Fix options:* adopt a distinctive-but-engineered display face (e.g. a tasteful grotesk like
Geist's own heavier widths, or a characterful one), OR lean further into the system-font choice
as a stated "instrument-panel" aesthetic so it reads intentional.

## 03 — Restrained color system — 8
Petrol + amber + warm ink/paper + two semantic colors. Disciplined almost everywhere. The one
multi-color moment is the CV measurement overlay (cyan/pink/teal/violet/green), which is
*intentional* (it signals multi-point computer-vision detection and the owner asked for it).
Defensible, but it is the only place the palette opens up.

## 04 — Hierarchy that breathes — 8.5
Generous section rhythm, a clear eyebrow → headline → body → one amber CTA pattern, real scale
jumps, varied layouts (bento, split, gallery). Whitespace does the work.

## 05 — Imagery with intent — 7.5
Big strength: the flagship is carried by genuinely custom, real assets — the MagicQC operator
panel, three dashboards, station photos, the founder demo video, real team headshots, the
bib-detection-in-action shot. That reads commissioned.
*Gap:* the Robotics and VR service heroes are **stock (Pexels)** — exactly what the checklist
warns against. Two images out of ~30, but they're the tell.
*Fix:* generate on-brand robotics/VR visuals (image-gen was out of credits today) or apply a
petrol duotone treatment so they match the art direction instead of reading as stock.

## 06 — Motion that whispers — 8.5
The hero choreography (blur-focus title, card slide+fill, keypoints drawing on, staggered
orbit-in, parallax tilt, CV scan, reticle cursor) is bespoke and restrained. Well past
AOS-fade-up slop.
*Risk:* the scroll-reveal is the *same* fade-up on most sections — tasteful, but uniform. A few
section-specific reveals would remove the last whiff of pattern.

## 07 — Mobile that's designed, not shrunk — 7
Strong, correct responsive execution: grids collapse sensibly, the mega-menu becomes a grouped
mobile menu, the hero reflows, galleries stack, CTAs stack. It is *well-adapted* rather than
*separately designed* — which is better than 90% of sites, but not yet a distinct mobile art
direction (e.g. mobile-specific section ordering, thumb-zone CTAs, condensed hero).

## 08 — The invisible expensive stuff — 7.5
- **Speed:** ✅ fully static SSG, ~108 kB JS subpages, lazy images, no blur passes, sub-2s on a
  normal connection. Strong.
- **Semantics:** ✅ header/nav/main/section/footer, h1-h3, real `<a>`/`<button>`.
- **Meta:** ✅ per-page title + description. *Gap:* no Open Graph / Twitter images.
- **A11y gaps:** ⚠️ the mega-menu dropdowns are **hover-only** (not keyboard/focus accessible);
  some `t-faint` mono labels are below AA contrast; no skip-link; map iframe has a title (good).
- **Fix:** keyboard-open dropdowns, bump faint-label contrast, add OG images + a skip link.

## Punch-list to reach a clean $10K on every axis
1. **Display typography** — resolve the system-ui question (distinctive face, or commit to the instrument-panel rationale). *(biggest win)*
2. **Robotics/VR imagery** — replace the two stock photos with generated/duotone-treated, on-brand visuals.
3. **A11y** — keyboard-accessible mega-menu, AA contrast on faint labels, skip-link.
4. **Meta** — Open Graph + Twitter card images per page.
5. **Mobile** — one or two genuinely mobile-first layout decisions (condensed hero, thumb CTA bar).
6. **Motion** — vary the scroll-reveal on 2-3 signature sections.
