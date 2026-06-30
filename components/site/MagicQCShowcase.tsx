import Reveal from "./Reveal";

const STEPS = [
  { n: "01", title: "Capture", body: "An operator places the garment on the lit measurement bed and the system captures a high-resolution image automatically. No rulers, no manual marking." },
  { n: "02", title: "Measure", body: "Intelligent vision reads every point of measure against the buyer's tolerance table, live, in seconds." },
  { n: "03", title: "Report", body: "Each piece flows to the director's analytics dashboard with instant pass / fail, per-operator and per-article, in real time." },
];

const STATS = [
  { v: "99%", l: "measurement accuracy" },
  { v: "10x", l: "faster than manual" },
  { v: "±1 mm", l: "precision" },
  { v: "500+", l: "inspections daily" },
];

export default function MagicQCShowcase() {
  return (
    <section id="magicqc" className="relative overflow-hidden py-24 lg:py-32">
      <span aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-[0.1]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
      <div className="relative mx-auto max-w-[1240px] px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* copy + steps */}
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Featured system · MagicQC</p>
              <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">
                From the cutting table to <span className="t-accent">total visibility</span>
              </h2>
              <p className="mt-4 max-w-lg text-base t-soft">
                An AI-based automated garment size-measurement station: the lit bed, the vision rig, the operator panel and the director dashboard, working as one.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col gap-px">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 90}>
                  <div className="flex gap-5 border-t py-5" style={{ borderColor: "var(--border)" }}>
                    <span className="cine-systext t-accent text-lg font-extrabold tabular-nums">{s.n}</span>
                    <div>
                      <h3 className="cine-systext text-lg font-bold t-ink">{s.title}</h3>
                      <p className="mt-1 text-sm t-soft">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* framed dashboard */}
          <Reveal y={36} variant="right">
            <div className="cine-stage relative rounded-[20px] p-3">
              <div className="mb-2 flex items-center gap-2 px-2 pt-1">
                <span className="h-2 w-2 rounded-full bg-[#F0A800]/80" />
                <span className="h-2 w-2 rounded-full bg-[#34D399]/80" />
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--border)" }} />
                <span className="ml-2 font-mono text-[10px] uppercase tracking-widest t-faint">magicqc · analytics dashboard</span>
              </div>
              <img src="/assets/magicqc/analytics-dashboard.webp" alt="MagicQC director analytics dashboard showing piece-level pass and fail rates" className="block w-full overflow-hidden rounded-[12px]" />
              <div className="cine-glass absolute -bottom-5 -left-4 z-20 hidden items-center gap-3 rounded-xl px-4 py-3 sm:flex">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34D399] opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#34D399]" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider t-faint">Live floor</p>
                  <p className="text-sm font-semibold t-ink">per-operator QC</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* stat band */}
        <Reveal>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4" style={{ background: "var(--border)" }}>
            {STATS.map((s) => (
              <div key={s.l} className="flex flex-col items-center gap-1 px-6 py-7" style={{ background: "var(--hb)" }}>
                <span className="cine-systext text-3xl font-extrabold t-ink">{s.v}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] t-faint">{s.l}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
