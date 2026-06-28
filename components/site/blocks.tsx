import type { ReactNode } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

/* ---------- section heading ---------- */
export function Heading({ eyebrow, title, sub, center = true }: { eyebrow: string; title: ReactNode; sub?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>{eyebrow}</p>
      <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">{title}</h2>
      {sub && <p className={`mt-4 text-base t-soft ${center ? "mx-auto max-w-xl" : "max-w-xl"}`}>{sub}</p>}
    </Reveal>
  );
}

/* ---------- feature grid ---------- */
export function FeatureGrid({ items, cols = 3 }: { items: { icon?: ReactNode; t: string; b: string }[]; cols?: 2 | 3 | 4 }) {
  const c = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <div className={`mt-12 grid grid-cols-1 gap-4 ${c}`}>
      {items.map((it, i) => (
        <Reveal key={it.t} delay={i * 60}>
          <div className="cine-glass flex h-full flex-col rounded-2xl p-6">
            {it.icon && <span className="t-accent mb-4 h-8 w-8">{it.icon}</span>}
            <h3 className="cine-systext text-base font-bold t-ink">{it.t}</h3>
            <p className="mt-2 text-sm t-soft">{it.b}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- numbered steps ---------- */
export function Steps({ items }: { items: { t: string; b: string }[] }) {
  return (
    <div className="mt-12 grid gap-px sm:grid-cols-3" style={{ background: "var(--border)" }}>
      {items.map((s, i) => (
        <Reveal key={s.t} delay={i * 80}>
          <div className="flex h-full flex-col gap-3 px-6 py-7" style={{ background: "var(--hb)" }}>
            <span className="cine-systext t-accent text-lg font-extrabold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="cine-systext text-lg font-bold t-ink">{s.t}</h3>
            <p className="text-sm t-soft">{s.b}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- spec rows ---------- */
export function SpecRows({ rows }: { rows: [string, string][] }) {
  return (
    <Reveal y={24}>
      <div className="cine-glass overflow-hidden rounded-2xl">
        {rows.map(([k, v], i) => (
          <div key={k} className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${i ? "border-t" : ""}`} style={{ borderColor: "var(--border)" }}>
            <span className="font-mono text-[11px] uppercase tracking-wider t-faint">{k}</span>
            <span className="text-sm font-medium t-ink sm:text-right">{v}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

/* ---------- stat band ---------- */
export function StatBand({ stats }: { stats: [string, string][] }) {
  return (
    <Reveal variant="scale">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4" style={{ background: "var(--border)" }}>
        {stats.map(([v, l]) => (
          <div key={l} className="flex flex-col items-center gap-1 px-5 py-7 text-center" style={{ background: "var(--hb)" }}>
            <span className="cine-systext text-3xl font-extrabold t-ink">{v}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] t-faint">{l}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

/* ---------- on-brand flow diagram (data-viz, theme-aware SVG-ish) ---------- */
export function FlowDiagram({ steps, note }: { steps: { t: string; s?: string }[]; note?: string }) {
  return (
    <Reveal y={24} variant="scale">
      <div className="cine-stage rounded-[20px] p-6 lg:p-10">
        <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
          {steps.map((st, i) => (
            <div key={st.t} className="flex flex-1 items-center gap-3 lg:flex-col lg:gap-0">
              <div className="flex w-full flex-col rounded-xl border px-4 py-4 text-center" style={{ borderColor: "var(--border)", background: "var(--panel)" }}>
                <span className="font-mono text-[10px] uppercase tracking-wider t-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="cine-systext mt-1 text-sm font-bold leading-tight t-ink">{st.t}</span>
                {st.s && <span className="mt-1 text-[11px] t-faint">{st.s}</span>}
              </div>
              {i < steps.length - 1 && (
                <span aria-hidden className="t-accent shrink-0 lg:my-2 lg:rotate-90">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              )}
            </div>
          ))}
        </div>
        {note && <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-wider t-faint">{note}</p>}
      </div>
    </Reveal>
  );
}

/* ---------- bullet list with checks ---------- */
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 flex flex-col gap-3">
      {items.map((p) => (
        <li key={p} className="flex items-start gap-3 text-sm t-soft">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M20 6 9 17l-5-5" /></svg>
          {p}
        </li>
      ))}
    </ul>
  );
}

/* ---------- closing CTA ---------- */
export function CTA({ title, sub, href = "/contact", cta = "Book a demo" }: { title: ReactNode; sub?: string; href?: string; cta?: string }) {
  return (
    <section className="px-6 pb-28 pt-8">
      <Reveal>
        <div className="cine-stage relative mx-auto max-w-[1000px] overflow-hidden rounded-[28px] px-8 py-16 text-center lg:py-20">
          <span aria-hidden className="pointer-events-none absolute -right-16 -top-12 h-64 w-64 rounded-full opacity-30" style={{ background: "radial-gradient(circle,var(--glow2),transparent 70%)" }} />
          <h2 className="cine-systext relative mx-auto max-w-[20ch] text-[clamp(1.8rem,3.6vw,3rem)] font-extrabold leading-[1.06] t-ink">{title}</h2>
          {sub && <p className="relative mx-auto mt-4 max-w-lg text-base t-soft">{sub}</p>}
          <Link href={href} className="cine-cta relative mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5">{cta} <span aria-hidden>→</span></Link>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- generic page section wrapper ---------- */
export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`mx-auto max-w-[1240px] px-6 py-20 lg:py-28 ${className}`}>{children}</section>;
}
