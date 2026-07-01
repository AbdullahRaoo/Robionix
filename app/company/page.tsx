import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Team from "@/components/site/Team";
import ContactCTA from "@/components/site/ContactCTA";
import Reveal from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Company | Robionix Technologies",
  description: "An emerging Pakistani deep-tech company building hardware and software automation for manufacturing, born at NUTECH, Islamabad.",
};

const PILLARS = [
  { t: "Our company", b: "Robionix Technologies is an emerging company providing both hardware and software automation to the manufacturing industries of Pakistan." },
  { t: "Our mission", b: "To be the catalyst for positive change in Pakistan's manufacturing: leveraging technology to streamline processes, increase competitiveness, and drive success." },
  { t: "Our vision", b: "A future where manufacturing in Pakistan is synonymous with innovation and excellence. We aim to be the pioneers of that transformation, through automation." },
];

export default function CompanyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="overflow-x-hidden">
        <section className="relative overflow-hidden px-6 pt-16 pb-20 lg:pt-24">
          <span aria-hidden className="pointer-events-none absolute -right-32 top-0 h-[34rem] w-[34rem] rounded-full opacity-[0.12]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
          <Reveal className="relative mx-auto max-w-[820px] text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Company</p>
            <h1 className="cine-systext mt-4 text-[clamp(2.2rem,4.4vw,3.6rem)] font-extrabold leading-[1.06] t-ink">Engineering Pakistan&apos;s <span className="t-accent">industrial future</span></h1>
            <p className="mx-auto mt-5 max-w-xl text-base t-soft md:text-lg">A full-stack engineering team, born at NUTECH in Islamabad, building the hardware and software that automate the country&apos;s factories.</p>
          </Reveal>

          <div className="relative mx-auto mt-14 grid max-w-[1100px] gap-5 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <div className="cine-glass flex h-full flex-col rounded-2xl p-7">
                  <h2 className="cine-systext text-lg font-bold t-accent">{p.t}</h2>
                  <p className="mt-3 text-sm leading-relaxed t-soft">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Team />

        {/* in the field */}
        <section className="mx-auto max-w-[1240px] px-6 pb-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>In the field</p>
            <h2 className="cine-systext mt-4 text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold leading-[1.08] t-ink">Where the work happens</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Reveal className="col-span-2"><img loading="lazy" decoding="async" src="/assets/magicqc/demo-group.webp" alt="Robionix demonstrating MagicQC" className="h-full w-full rounded-2xl object-cover" style={{ minHeight: 220 }} /></Reveal>
            <Reveal delay={70}><img loading="lazy" decoding="async" src="/assets/magicqc/station-front.webp" alt="MagicQC station" className="h-full w-full rounded-2xl object-cover" /></Reveal>
            <Reveal delay={140}><img loading="lazy" decoding="async" src="/assets/magicqc/demo-presenting.webp" alt="Presenting MagicQC" className="h-full w-full rounded-2xl object-cover" /></Reveal>
          </div>
        </section>

        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
