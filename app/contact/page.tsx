import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import ContactForm from "@/components/site/ContactForm";

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
      <main id="main" className="overflow-x-hidden">
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

        <section className="mx-auto max-w-[1240px] px-6 pb-16">
          <Reveal>
            <div className="cine-stage overflow-hidden rounded-[20px] p-3">
              <div className="mb-2 flex items-center gap-2 px-2 pt-1">
                <span className="h-2 w-2 rounded-full bg-[#F0A800]/80" /><span className="h-2 w-2 rounded-full bg-[#34D399]/80" /><span className="h-2 w-2 rounded-full" style={{ background: "var(--border)" }} />
                <span className="ml-2 font-mono text-[10px] uppercase tracking-widest t-faint">nutech · i-12/2 · islamabad</span>
              </div>
              <iframe
                title="Robionix at NUTECH, Islamabad"
                src="https://maps.google.com/maps?q=National%20University%20of%20Technology%20NUTECH%20Islamabad&z=15&output=embed"
                className="block h-[360px] w-full rounded-[12px] border-0 grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-[760px] px-6 pb-28">
          <Reveal>
            <ContactForm />
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
