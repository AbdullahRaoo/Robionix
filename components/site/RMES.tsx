import Reveal from "./Reveal";
import VideoFrame from "./VideoFrame";

const POINTS = [
  "Automates the floor from purchase order to final delivery",
  "Replaces costly imported ERP (SAP, Oracle, Dynamics)",
  "Real-time data collection, less paperwork, optimised maintenance",
];

export default function RMES() {
  return (
    <section id="rmes" className="relative overflow-hidden py-24 lg:py-32">
      <span aria-hidden className="pointer-events-none absolute right-0 top-1/4 h-[34rem] w-[34rem] translate-x-1/3 rounded-full opacity-[0.1]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Flagship platform · RMES</p>
          <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">
            The ERP built to <span className="t-accent">grow the country&apos;s exports</span>
          </h2>
          <p className="mt-4 max-w-lg text-base t-soft">
            The Robionix Manufacturing Execution System automates textile, knitwear, sports and surgical plants. Our aim: automate 100+ Pakistani industries, cut the import bill, and save millions in foreign exchange every year.
          </p>
          <ul className="mt-7 flex flex-col gap-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm t-soft">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M20 6 9 17l-5-5" /></svg>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
            <div><p className="cine-systext text-2xl font-extrabold t-ink">100+</p><p className="font-mono text-[10px] uppercase tracking-wider t-faint">industries targeted</p></div>
            <div><p className="cine-systext text-2xl font-extrabold t-ink">Yarn→ship</p><p className="font-mono text-[10px] uppercase tracking-wider t-faint">one system</p></div>
            <div><p className="cine-systext text-2xl font-extrabold t-ink">Real-time</p><p className="font-mono text-[10px] uppercase tracking-wider t-faint">floor data</p></div>
          </div>
        </Reveal>

        <Reveal y={36}>
          <VideoFrame src="/assets/video/rmes.mp4" poster="/assets/video/rmes-poster.webp" label="rmes · knitwear MES demo" />
        </Reveal>
      </div>
    </section>
  );
}
