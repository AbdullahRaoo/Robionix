import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import VideoFrame from "@/components/site/VideoFrame";

export const metadata: Metadata = {
  title: "MagicQC — AI garment size measurement | Robionix",
  description:
    "MagicQC is an AI-based automated garment size-measurement station. Computer vision reads every point-of-measure against the buyer's tolerance in seconds, and feeds a live director dashboard.",
};

const STEPS = [
  { n: "01", t: "Lay the piece flat", b: "An operator places the garment on the lit measurement bed. No rulers, no manual marking." },
  { n: "02", t: "Vision reads every POM", b: "The overhead rig measures all points of measure against the buyer's tolerance table, live, in about three seconds." },
  { n: "03", t: "Pass / fail to the dashboard", b: "Each piece flows to the director's analytics: pass rate, per-operator and per-article, in real time." },
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
  ["~3s", "per piece"],
  ["vs ~90s", "manual"],
  ["100%", "pieces logged"],
  ["5+", "buyer profiles"],
];

export default function MagicQCPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        {/* hero */}
        <section className="relative overflow-hidden px-6 pt-16 pb-20 lg:pt-24">
          <span aria-hidden className="pointer-events-none absolute -right-32 top-0 h-[36rem] w-[36rem] rounded-full opacity-[0.14]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Flagship product</p>
              <h1 className="cine-systext mt-4 text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.04] t-ink">
                MagicQC
              </h1>
              <p className="cine-systext mt-2 text-[clamp(1.1rem,2vw,1.6rem)] font-semibold t-accent">AI-Based Automated Garment Size Measurement</p>
              <p className="mt-5 max-w-lg text-base t-soft md:text-lg">
                Computer vision reads every point-of-measure on a garment against the buyer&apos;s tolerance table in seconds, then feeds a live pass/fail dashboard. Inspection that used to take a minute and a tape measure now takes three seconds.
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

        {/* how it works */}
        <section className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>How it works</p>
            <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">Three seconds, every measure</h2>
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
              <h2 className="cine-systext relative mx-auto max-w-[18ch] text-[clamp(1.8rem,3.6vw,3rem)] font-extrabold leading-[1.06] t-ink">See MagicQC measure <span className="t-accent">your</span> garments</h2>
              <p className="relative mx-auto mt-4 max-w-lg text-base t-soft">Bring a few pieces. We&apos;ll measure them live against your buyer&apos;s tolerances.</p>
              <Link href="/contact" className="cine-cta relative mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5">Book a demo <span aria-hidden>→</span></Link>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
