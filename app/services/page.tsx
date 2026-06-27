import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import { Steps, CTA } from "@/components/site/blocks";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — Vision AI, ERP, Robotics, Embedded | Robionix",
  description: "Robionix capabilities, end to end: computer vision, ERP development, robotics and automation, embedded systems, industrial automation and VR.",
};

export default function ServicesHub() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <section className="relative overflow-hidden px-6 pt-16 pb-12 lg:pt-24">
          <span aria-hidden className="pointer-events-none absolute -left-32 top-0 h-[34rem] w-[34rem] rounded-full opacity-[0.12]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
          <Reveal className="relative mx-auto max-w-[760px] text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Services</p>
            <h1 className="cine-systext mt-4 text-[clamp(2.2rem,4.4vw,3.6rem)] font-extrabold leading-[1.06] t-ink">Capabilities, <span className="t-accent">end to end</span></h1>
            <p className="mx-auto mt-5 max-w-xl text-base t-soft md:text-lg">One house for the hardware and the software. We engineer the part that sees, the part that moves, and the system that runs the plant.</p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-[1240px] px-6 pb-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 60}>
                <Link href={`/services/${s.slug}`} className="cine-glass group flex h-full flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] t-accent">{s.tag}</span>
                  <h2 className="cine-systext mt-3 text-xl font-bold t-ink">{s.name}</h2>
                  <p className="mt-2 flex-1 text-sm t-soft">{s.tagline}.</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium t-accent">Explore <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-6 py-20 lg:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>How an engagement works</p>
            <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">From brief to deployed</h2>
          </Reveal>
          <Steps items={[
            { t: "Discover", b: "We learn your floor, your constraints and the decision that needs automating." },
            { t: "Engineer", b: "Hardware, vision and software built together, customised to your operation." },
            { t: "Deploy & support", b: "Commissioned on-site and supported locally, on Pakistan time." },
          ]} />
        </section>

        <CTA title={<>Tell us what you want to automate</>} />
      </main>
      <SiteFooter />
    </>
  );
}
