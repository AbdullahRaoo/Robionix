import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import { Section, Heading, FeatureGrid, FlowDiagram, CheckList, CTA } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "KMES: Knitting Manufacturing Execution System | Robionix",
  description: "KMES is a knitting-specific ERP that automates a knitwear plant from yarn purchase to finished article, developed with a Faisalabad knitwear exporter.",
};

const WHY = [
  { t: "Knitting-specific", b: "Modelled on real knitwear operations, not a generic ERP bent to fit." },
  { t: "Yarn to delivery", b: "Automates purchasing, planning, knitting and wet processing in one flow." },
  { t: "Built with an exporter", b: "Developed alongside a leading Faisalabad knitwear exporter." },
  { t: "Full ERP core", b: "Includes HR, finance, purchase, inventory and stores." },
  { t: "Real-time & paperless", b: "Automatic data collection raises efficiency and quality." },
  { t: "Optimised maintenance", b: "Condition-based machine maintenance, less downtime." },
];

export default function KmesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="overflow-x-hidden">
        <section className="relative overflow-hidden px-6 pt-14 pb-16 lg:pt-20">
          <span aria-hidden className="pointer-events-none absolute -right-32 top-0 h-[36rem] w-[36rem] rounded-full opacity-[0.13]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Product · Knitting ERP</p>
              <h1 className="cine-systext mt-4 text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-[1.04] t-ink">KMES</h1>
              <p className="cine-systext mt-2 text-[clamp(1.05rem,2vw,1.5rem)] font-semibold t-accent">Knitting Manufacturing Execution System</p>
              <p className="mt-5 max-w-lg text-base t-soft md:text-lg">
                A knitting-specific ERP, fully customisable to any knitwear plant. KMES automates the floor from purchasing yarn against a purchase order to the final delivery of articles.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="cine-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5">Book a demo <span aria-hidden>→</span></Link>
                <Link href="/products/rmes" className="cine-glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium t-ink transition-transform duration-200 hover:-translate-y-0.5">See RMES (platform)</Link>
              </div>
            </Reveal>
            <Reveal y={36}>
              <div className="cine-stage overflow-hidden rounded-[20px] p-3">
                <div className="mb-2 flex items-center gap-2 px-2 pt-1"><span className="h-2 w-2 rounded-full bg-[#F0A800]/80" /><span className="h-2 w-2 rounded-full bg-[#34D399]/80" /><span className="h-2 w-2 rounded-full" style={{ background: "var(--border)" }} /><span className="ml-2 font-mono text-[10px] uppercase tracking-widest t-faint">knitwear · production floor</span></div>
                <img src="/assets/work/kmes.webp" alt="Circular knitting machines on a knitwear production floor" className="block w-full rounded-[12px]" />
              </div>
            </Reveal>
          </div>
        </section>

        <Section>
          <Heading eyebrow="The knitting flow" title="Yarn in, finished articles out" sub="KMES models the intense, multi-stage reality of knitwear, then ties it into one ERP record." />
          <div className="mt-12">
            <FlowDiagram steps={[
              { t: "Yarn processing", s: "purchase & prep" },
              { t: "Planning & control", s: "production schedule" },
              { t: "Knitting", s: "machine floor" },
              { t: "Wet processing", s: "dyeing & pre-treatment" },
              { t: "Articles", s: "finished & shipped" },
            ]} note="A set of sub-execution modules, each for a different stage, sharing one central record." />
          </div>
        </Section>

        <Section>
          <Heading eyebrow="Why choose KMES" title="Knitting-specific, end to end" />
          <FeatureGrid items={WHY} cols={3} />
        </Section>

        <Section>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Heading center={false} eyebrow="Proven on the floor" title={<>Developed with a Faisalabad knitwear exporter</>} sub="KMES wasn't designed in a vacuum. It was built alongside a leading exporter, so the workflows match how knitwear is actually produced and shipped." />
            <Reveal y={24}>
              <CheckList items={[
                "Centralises data across every knitting sub-process",
                "Increases efficiency and performance management",
                "Cuts paperwork with automatic data collection",
                "Connects the floor to the enterprise ERP",
              ]} />
            </Reveal>
          </div>
        </Section>

        <CTA title={<>Automate your knitting floor</>} sub="Book a session and we'll tailor KMES to your yarn, machines and articles." />
      </main>
      <SiteFooter />
    </>
  );
}
