import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Contact — Robionix Technologies",
  description: "Talk to Robionix about vision QC, MagicQC, or a full manufacturing ERP. Based at NUTECH, Islamabad.",
};

const INTENTS = [
  { t: "Visit our office", b: "Stop by the lab at NUTECH and see MagicQC measure live.", k: "National University of Technology (NUTECH), I-12/2, Islamabad, Pakistan" },
  { t: "Reach out anytime", b: "Questions about vision QC or ERP? We respond promptly.", k: "awaisfrombit@gmail.com" },
  { t: "Let's collaborate", b: "Book a working session to map the highest-ROI automation on your line.", k: "linkedin.com/company/robionix-technologies" },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <section className="relative overflow-hidden px-6 pt-16 pb-12 lg:pt-24">
          <span aria-hidden className="pointer-events-none absolute -left-32 top-0 h-[34rem] w-[34rem] rounded-full opacity-[0.12]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
          <Reveal className="relative mx-auto max-w-[760px] text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Contact</p>
            <h1 className="cine-systext mt-4 text-[clamp(2.2rem,4.4vw,3.6rem)] font-extrabold leading-[1.06] t-ink">Let&apos;s automate <span className="t-accent">your floor</span></h1>
            <p className="mx-auto mt-5 max-w-xl text-base t-soft md:text-lg">Bring a few garments and we&apos;ll measure them live against your buyer&apos;s tolerances, or talk us through your ERP and automation needs.</p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-[1240px] px-6 pb-16">
          <div className="grid gap-5 lg:grid-cols-3">
            {INTENTS.map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="cine-glass flex h-full flex-col rounded-2xl p-7">
                  <h2 className="cine-systext text-lg font-bold t-ink">{c.t}</h2>
                  <p className="mt-2 text-sm t-soft">{c.b}</p>
                  <p className="mt-5 font-mono text-[11px] uppercase leading-relaxed tracking-wider t-accent">{c.k}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[760px] px-6 pb-28">
          <Reveal>
            <form className="cine-glass flex flex-col gap-4 rounded-2xl p-7 lg:p-9" aria-label="Contact form">
              <h2 className="cine-systext text-xl font-bold t-ink">Send a message</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <input placeholder="Name" className="rounded-lg border bg-transparent px-4 py-3 text-sm t-ink outline-none placeholder:[color:var(--ink-faint)] focus:[border-color:var(--accent)]" style={{ borderColor: "var(--border)" }} />
                <input placeholder="Company" className="rounded-lg border bg-transparent px-4 py-3 text-sm t-ink outline-none placeholder:[color:var(--ink-faint)] focus:[border-color:var(--accent)]" style={{ borderColor: "var(--border)" }} />
              </div>
              <input placeholder="Email" type="email" className="rounded-lg border bg-transparent px-4 py-3 text-sm t-ink outline-none placeholder:[color:var(--ink-faint)] focus:[border-color:var(--accent)]" style={{ borderColor: "var(--border)" }} />
              <textarea placeholder="What would you like to automate?" rows={4} className="resize-none rounded-lg border bg-transparent px-4 py-3 text-sm t-ink outline-none placeholder:[color:var(--ink-faint)] focus:[border-color:var(--accent)]" style={{ borderColor: "var(--border)" }} />
              <button type="button" className="cine-cta mt-1 inline-flex items-center justify-center gap-2 self-start rounded-full px-7 py-3 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5">Send message <span aria-hidden>→</span></button>
              <p className="font-mono text-[10px] uppercase tracking-wider t-faint">Form is UI-only for now; wire to email on launch.</p>
            </form>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
