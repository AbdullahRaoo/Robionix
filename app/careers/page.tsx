import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import { Section, Heading, FeatureGrid, CTA } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Careers | Robionix Technologies",
  description: "Build vision AI, robotics, embedded systems and manufacturing ERP that automate Pakistan's industry. Join the Robionix engineering team at NUTECH, Islamabad.",
};

const ROLES = [
  { t: "Computer Vision / ML", b: "Train and ship detection, OCR and measurement models that run on the factory floor." },
  { t: "Embedded & IoT", b: "Build firmware, sensing and connected devices from concept to silicon." },
  { t: "Full-stack / ERP", b: "Customise ERPNext and build the dashboards that run real plants." },
  { t: "Robotics & controls", b: "Engineer robotic cells and machine integration for precision and uptime." },
];

const WHY = [
  { t: "Real impact", b: "Your work ships into factories and changes how an export industry runs, not a demo." },
  { t: "Full-stack problems", b: "Hardware, vision and software in one place, so you see the whole system." },
  { t: "NUTECH-rooted", b: "An engineering culture born at the National University of Technology." },
];

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="overflow-x-hidden">
        <section className="relative overflow-hidden px-6 pt-16 pb-12 lg:pt-24">
          <span aria-hidden className="pointer-events-none absolute -right-32 top-0 h-[34rem] w-[34rem] rounded-full opacity-[0.12]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
          <Reveal className="relative mx-auto max-w-[820px] text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Careers</p>
            <h1 className="cine-systext mt-4 text-[clamp(2.2rem,4.4vw,3.6rem)] font-extrabold leading-[1.06] t-ink">Build the systems that <span className="t-accent">automate an industry</span></h1>
            <p className="mx-auto mt-5 max-w-xl text-base t-soft md:text-lg">We are an engineering team building vision AI, robotics, embedded systems and manufacturing ERP for Pakistan&apos;s manufacturers. If you want your code on a real factory floor, talk to us.</p>
          </Reveal>
        </section>

        <Section>
          <Heading eyebrow="Why Robionix" title="Engineering with consequence" />
          <FeatureGrid items={WHY} cols={3} />
        </Section>

        <Section>
          <Heading eyebrow="Disciplines" title="Where we hire" sub="We are always interested in strong engineers across these areas." />
          <FeatureGrid items={ROLES} cols={2} />
        </Section>

        <CTA title={<>Send us your work</>} sub="No open role that fits? Email your CV and a project you're proud of, and we'll talk." href="mailto:awaisfrombit@gmail.com" cta="Email your CV" />
      </main>
      <SiteFooter />
    </>
  );
}
