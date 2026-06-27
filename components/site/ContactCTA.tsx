import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative px-6 py-24 lg:py-32">
      <Reveal>
        <div className="cine-stage relative mx-auto max-w-[1100px] overflow-hidden rounded-[28px] px-8 py-16 text-center lg:py-24">
          <span aria-hidden className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full opacity-30" style={{ background: "radial-gradient(circle,var(--glow2),transparent 70%)" }} />
          <span aria-hidden className="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 rounded-full opacity-25" style={{ background: "radial-gradient(circle,var(--glow1),transparent 70%)" }} />
          <p className="relative font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Robionix Technologies · NUTECH, Islamabad</p>
          <h2 className="cine-systext relative mx-auto mt-5 max-w-[16ch] text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.06] t-ink">
            Let&apos;s automate <span className="t-accent">your floor</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base t-soft md:text-lg">
            Book a working session with our engineers. We&apos;ll map the highest-ROI automation on your line, from vision QC to a full manufacturing ERP.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="/contact" className="cine-cta inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5">
              Book a meeting <span aria-hidden>→</span>
            </a>
            <a href="mailto:awaisfrombit@gmail.com" className="cine-glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium t-ink transition-transform duration-200 hover:-translate-y-0.5">
              Email us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
