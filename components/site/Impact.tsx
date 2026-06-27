import Link from "next/link";
import Reveal from "./Reveal";
import { StatBand } from "./blocks";

export default function Impact() {
  return (
    <section id="impact" className="relative overflow-hidden px-6 py-24 lg:py-32">
      <span aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-[0.1]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
      <div className="relative mx-auto max-w-[1000px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>National impact</p>
          <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold leading-[1.07] t-ink">
            Automating the industry that <span className="t-accent">earns Pakistan its exports</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base t-soft md:text-lg">
            Textiles are roughly 60% of Pakistan&apos;s exports. Every plant that measures with vision and runs on a local ERP keeps more of that value, and the foreign exchange, in-country. That is the mission behind MagicQC and RMES.
          </p>
        </Reveal>

        <div className="mt-14">
          <StatBand stats={[["$17.85B", "textile exports / yr"], ["~60%", "of national exports"], ["100% QC", "vs sample inspection"], ["~3s", "per piece, not 90"]]} />
        </div>

        <Reveal className="mt-10 text-center">
          <Link href="/company" className="cine-glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium t-ink transition-transform duration-200 hover:-translate-y-0.5">Our mission <span aria-hidden>→</span></Link>
        </Reveal>
      </div>
    </section>
  );
}
