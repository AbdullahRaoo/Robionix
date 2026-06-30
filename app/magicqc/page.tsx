import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import VideoFrame from "@/components/site/VideoFrame";

export const metadata: Metadata = {
  title: "MagicQC — AI garment size measurement | Robionix",
  description:
    "MagicQC is an AI-based automated garment size-measurement system. Advanced vision intelligence reads every point-of-measure against the buyer's tolerance to sub-millimeter precision in seconds, then feeds a live pass/fail dashboard with enterprise reporting.",
};

const CAPS = [
  { icon: "vision", t: "Intelligent Vision", d: "Advanced imaging that automatically identifies measurement points with sub-millimeter precision." },
  { icon: "chip", t: "Smart Processing", d: "A real-time analysis engine that processes measurements instantly, delivering results in seconds, not minutes." },
  { icon: "target", t: "Precise Measurement", d: "Automated dimension verification with configurable tolerances and instant pass / fail determination." },
  { icon: "chart", t: "Live Analytics", d: "Comprehensive dashboards with production counters, trend analysis, and exportable quality reports." },
  { icon: "shield", t: "Quality Assurance", d: "End-to-end traceability linking every measurement to its source for complete compliance and audit readiness." },
  { icon: "scale", t: "Scalable Operations", d: "From single-station setups to multi-facility deployments, it scales effortlessly with your production needs." },
];

const STEPS = [
  { n: "01", t: "Capture", b: "Place the garment on the lit measurement bed. The system captures a high-resolution image automatically. No rulers, no manual marking." },
  { n: "02", t: "Measure", b: "Intelligent vision identifies every key point of measure and calculates precise dimensions against the buyer's tolerance table, in real time." },
  { n: "03", t: "Report", b: "Instant pass / fail results with detailed measurement data, trend analysis, and exportable quality reports flow to the live dashboard." },
];

const ENTERPRISE = [
  "Real-time production counters: measured, passed, failed, pending",
  "Defect trend analysis",
  "Measurement precision of ±1 mm",
  "Multi-facility aggregated reporting",
  "Flat precision measurement table",
  "Shadow-free uniform illumination",
  "Remote results monitoring display",
  "Automated PDF / CSV export",
  "Operator control for garment selection",
];

const DIFF = [
  ["Speed", "Minutes per item", "Seconds per item"],
  ["Accuracy", "Operator-dependent", "Sub-millimeter precision"],
  ["Consistency", "Varies with fatigue", "100% repeatable"],
  ["Labor cost", "High manpower dependency", "Minimal human intervention"],
  ["Data", "Paper records", "Digital & real-time"],
  ["Scale", "Limited by workforce", "Unlimited capacity"],
];

const VIEWS = [
  { img: "/assets/magicqc/operator-panel.webp", t: "Operator panel", d: "Live measurement against buyer tolerances, on the floor." },
  { img: "/assets/magicqc/analytics-dashboard.webp", t: "Analytics dashboard", d: "Piece-level pass/fail, per operator and article, for directors." },
  { img: "/assets/magicqc/command-dashboard.webp", t: "Command centre", d: "The overview: throughput, articles and QC health at a glance." },
];

const POMS = [
  ["A", "Left Shoulder", "50.0", "1.5"],
  ["B", "Right Shoulder", "50.0", "1.5"],
  ["H", "Chest Width", "53.5", "1.5"],
  ["D", "Length", "60.0", "1.5"],
  ["G", "Waist Width", "43.0", "1.5"],
  ["C", "Hem Width", "40.3", "2.5"],
  ["E", "Cuff Length", "8.0", "1.6"],
];

const STATS = [
  ["99%", "measurement accuracy"],
  ["10x", "faster than manual"],
  ["±1 mm", "precision"],
  ["500+", "inspections daily"],
];

function CapIcon({ name }: { name: string }) {
  const c = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "vision": return (<svg {...c}><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="3" /></svg>);
    case "chip": return (<svg {...c}><rect x="6" y="6" width="12" height="12" rx="1.5" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></svg>);
    case "target": return (<svg {...c}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></svg>);
    case "chart": return (<svg {...c}><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>);
    case "shield": return (<svg {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>);
    case "scale": return (<svg {...c}><path d="M3 7h18M3 12h18M3 17h18M7 4v16M17 4v16" /></svg>);
    default: return null;
  }
}

export default function MagicQCPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="overflow-x-hidden">
        {/* hero */}
        <section className="relative overflow-hidden px-6 pt-16 pb-20 lg:pt-24">
          <span aria-hidden className="pointer-events-none absolute -right-32 top-0 h-[36rem] w-[36rem] rounded-full opacity-[0.14]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Flagship product</p>
              <h1 className="cine-systext mt-4 text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.04] t-ink">
                MagicQC
              </h1>
              <p className="cine-systext mt-2 text-[clamp(1.1rem,2vw,1.6rem)] font-semibold t-accent">Where precision meets confidence</p>
              <p className="mt-5 max-w-lg text-base t-soft md:text-lg">
                Advanced vision intelligence for automated measurement and quality verification. MagicQC reads every point-of-measure on a garment against the buyer&apos;s tolerance table in seconds, then feeds a live pass / fail dashboard. Faster decisions, reliable results, every single time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="cine-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5">Book a demo <span aria-hidden>→</span></Link>
                <a href="#demo" className="cine-glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium t-ink transition-transform duration-200 hover:-translate-y-0.5">Watch it run</a>
              </div>
            </Reveal>
            <Reveal y={36}>
              <div className="cine-stage overflow-hidden rounded-[20px] p-3">
                <div className="mb-2 flex items-center gap-2 px-2 pt-1">
                  <span className="h-2 w-2 rounded-full bg-[#F0A800]/80" /><span className="h-2 w-2 rounded-full bg-[#34D399]/80" /><span className="h-2 w-2 rounded-full" style={{ background: "var(--border)" }} />
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-widest t-faint">magicqc · operator panel</span>
                </div>
                <img loading="lazy" decoding="async" src="/assets/magicqc/operator-panel.webp" alt="MagicQC operator panel reading points of measure" className="block w-full rounded-[12px]" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* problem → solution */}
        <section className="border-y px-6 py-6" style={{ borderColor: "var(--border)", background: "var(--panel)" }}>
          <div className="mx-auto grid max-w-[1240px] gap-4 sm:grid-cols-4">
            {STATS.map(([v, l]) => (
              <div key={l} className="flex flex-col items-center gap-1 py-3 text-center">
                <span className="cine-systext text-3xl font-extrabold t-ink">{v}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] t-faint">{l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* core capabilities */}
        <section className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Core capabilities</p>
            <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">Built for <span className="t-accent">excellence</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-base t-soft">A comprehensive quality assurance platform designed to streamline your inspection workflow from start to finish.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAPS.map((cap, i) => (
              <Reveal key={cap.t} delay={i * 70}>
                <article className="cine-glass flex h-full flex-col rounded-2xl p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl t-accent" style={{ background: "var(--panel)", border: "1px solid var(--border)" }}>
                    <CapIcon name={cap.icon} />
                  </span>
                  <h3 className="cine-systext mt-5 text-lg font-bold t-ink">{cap.t}</h3>
                  <p className="mt-2 text-sm t-soft">{cap.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* how it works */}
        <section className="mx-auto max-w-[1240px] px-6 pb-24 lg:pb-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Simple workflow</p>
            <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">Three steps to <span className="t-accent">perfect quality</span></h2>
          </Reveal>
          <Reveal y={34} className="mt-12">
            <div className="cine-stage overflow-hidden rounded-[20px] p-3">
              <img loading="lazy" decoding="async" src="/assets/magicqc/garment-cv-closeup.webp" alt="Computer vision measuring a garment on the MagicQC screen" className="block w-full rounded-[12px]" />
            </div>
          </Reveal>
          <div className="mt-12 grid gap-px sm:grid-cols-3" style={{ background: "var(--border)" }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="flex h-full flex-col gap-3 px-6 py-7" style={{ background: "var(--hb)" }}>
                  <span className="cine-systext t-accent text-lg font-extrabold">{s.n}</span>
                  <h3 className="cine-systext text-lg font-bold t-ink">{s.t}</h3>
                  <p className="text-sm t-soft">{s.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* demo video */}
        <section id="demo" className="relative overflow-hidden py-24 lg:py-32">
          <span aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-[0.1]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
          <div className="relative mx-auto max-w-[1000px] px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>See it run</p>
              <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">The system, walked through</h2>
              <p className="mx-auto mt-4 max-w-xl text-base t-soft">A full walkthrough of the MagicQC measurement station, from the lit bed to the live dashboard.</p>
            </Reveal>
            <Reveal y={36} className="mt-12">
              <VideoFrame src="/assets/video/magicqc-demo.mp4" poster="/assets/video/magicqc-demo-poster.webp" label="magicqc · system walkthrough" />
            </Reveal>
          </div>
        </section>

        {/* three views */}
        <section className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>One platform</p>
            <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">Three views, <span className="t-accent">one source of truth</span></h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {VIEWS.map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <article className="cine-glass flex h-full flex-col overflow-hidden rounded-2xl">
                  <img src={v.img} alt={v.t} loading="lazy" decoding="async" className="w-full border-b object-cover" style={{ borderColor: "var(--border)" }} />
                  <div className="p-6">
                    <h3 className="cine-systext text-lg font-bold t-ink">{v.t}</h3>
                    <p className="mt-2 text-sm t-soft">{v.d}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* measurement intelligence & enterprise reporting */}
        <section className="border-y px-6 py-24 lg:py-32" style={{ borderColor: "var(--border)", background: "var(--panel)" }}>
          <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Measurement intelligence</p>
              <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">Enterprise reporting, end to end</h2>
              <p className="mt-4 max-w-lg text-base t-soft">
                Every measurement is logged, scored and traceable. Directors get production counters, defect trends and exportable reports across every station and facility, in real time.
              </p>
            </Reveal>
            <Reveal y={30}>
              <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {ENTERPRISE.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm t-soft">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 t-accent"><path d="m5 12 5 5L20 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* the station — real photos */}
        <section className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Production-ready</p>
            <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">A measurement table built for the floor</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Reveal className="col-span-2 row-span-2">
              <img loading="lazy" decoding="async" src="/assets/magicqc/station-operator.webp" alt="Operator working at the MagicQC measurement station" className="h-full w-full rounded-2xl object-cover" style={{ minHeight: 280 }} />
            </Reveal>
            <Reveal delay={70}><img loading="lazy" decoding="async" src="/assets/magicqc/station-front.webp" alt="MagicQC measurement station" className="h-full w-full rounded-2xl object-cover" /></Reveal>
            <Reveal delay={140}><img loading="lazy" decoding="async" src="/assets/magicqc/station-wide.webp" alt="MagicQC station, full view" className="h-full w-full rounded-2xl object-cover" /></Reveal>
            <Reveal delay={210}><img loading="lazy" decoding="async" src="/assets/magicqc/demo-group.webp" alt="MagicQC demonstration to a group" className="h-full w-full rounded-2xl object-cover" /></Reveal>
            <Reveal delay={280}><img loading="lazy" decoding="async" src="/assets/magicqc/demo-presenting.webp" alt="Robionix presenting the MagicQC station" className="h-full w-full rounded-2xl object-cover" /></Reveal>
          </div>
        </section>

        {/* the difference — manual vs MagicQC */}
        <section className="mx-auto max-w-[1000px] px-6 py-24 lg:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>The difference</p>
            <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">Manual measurement vs <span className="t-accent">MagicQC</span></h2>
          </Reveal>
          <Reveal y={30} className="mt-12">
            <div className="cine-glass overflow-hidden rounded-2xl">
              <div className="grid grid-cols-3 border-b" style={{ borderColor: "var(--border)" }}>
                <span className="px-5 py-4 font-mono text-[10px] uppercase tracking-wider t-faint">Metric</span>
                <span className="border-x px-5 py-4 text-center font-mono text-[10px] uppercase tracking-wider t-faint" style={{ borderColor: "var(--border)" }}>Traditional</span>
                <span className="px-5 py-4 text-center font-mono text-[10px] font-bold uppercase tracking-wider t-accent">MagicQC</span>
              </div>
              {DIFF.map(([metric, old, neo]) => (
                <div key={metric} className="grid grid-cols-3 border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
                  <span className="px-5 py-4 text-sm font-semibold t-ink">{metric}</span>
                  <span className="border-x px-5 py-4 text-center text-sm t-faint" style={{ borderColor: "var(--border)" }}>{old}</span>
                  <span className="px-5 py-4 text-center text-sm font-medium text-[#34D399]">{neo}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* buyers + POM table */}
        <section className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Built for your buyers</p>
              <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">Every measure, to the buyer&apos;s spec</h2>
              <p className="mt-4 max-w-lg text-base t-soft">
                MagicQC ships with the tolerance profiles your factory already measures against. Select the brand, the article and the size, and every point-of-measure is checked against their exact spec.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
                {["Under Armour", "Reebok", "Zara", "Pull&Bear", "Trutex"].map((b) => (
                  <span key={b} className="text-base font-semibold t-soft">{b}</span>
                ))}
              </div>
            </Reveal>
            <Reveal y={30}>
              <div className="cine-glass overflow-hidden rounded-2xl">
                <div className="flex items-center justify-between border-b px-5 py-3" style={{ borderColor: "var(--border)" }}>
                  <span className="font-mono text-[10px] uppercase tracking-widest t-faint">live measurement · sweat shirt · 11–12 yrs</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#34D399]">7/7 pass</span>
                </div>
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="font-mono text-[10px] uppercase tracking-wider t-faint">
                      <th className="px-5 py-3 font-medium">POM</th><th className="py-3 font-medium">Measurement</th><th className="py-3 font-medium">Value</th><th className="py-3 font-medium">Tol ±</th>
                    </tr>
                  </thead>
                  <tbody>
                    {POMS.map(([id, name, val, tol]) => (
                      <tr key={id} className="border-t" style={{ borderColor: "var(--border)" }}>
                        <td className="px-5 py-3 font-mono t-faint">{id}</td>
                        <td className="py-3 t-soft">{name}</td>
                        <td className="py-3 font-semibold t-ink tabular-nums">{val}</td>
                        <td className="py-3 t-soft tabular-nums">{tol}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-28">
          <Reveal>
            <div className="cine-stage relative mx-auto max-w-[1000px] overflow-hidden rounded-[28px] px-8 py-16 text-center lg:py-20">
              <span aria-hidden className="pointer-events-none absolute -right-16 -top-12 h-64 w-64 rounded-full opacity-30" style={{ background: "radial-gradient(circle,var(--glow2),transparent 70%)" }} />
              <h2 className="cine-systext relative mx-auto max-w-[20ch] text-[clamp(1.8rem,3.6vw,3rem)] font-extrabold leading-[1.06] t-ink">Ready to elevate your <span className="t-accent">quality standards?</span></h2>
              <p className="relative mx-auto mt-4 max-w-lg text-base t-soft">Join industry leaders who trust intelligent automation for precision quality verification. Bring a few pieces and we&apos;ll measure them live against your buyer&apos;s tolerances.</p>
              <Link href="/contact" className="cine-cta relative mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5">Book a demo <span aria-hidden>→</span></Link>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
