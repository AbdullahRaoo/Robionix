import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import VideoFrame from "@/components/site/VideoFrame";
import { Section, Heading, FeatureGrid, FlowDiagram, SpecRows, StatBand, CheckList, CTA } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "RMES — Robionix Manufacturing Execution System | Robionix",
  description: "RMES is an industrial manufacturing ERP that replaces SAP, Oracle and Dynamics for Pakistan's textile, knitwear, sports and surgical plants, from purchase order to final delivery.",
};

const MODULES = [
  { t: "Real-time data collection", b: "Capture production on the floor as it happens, no paper, no end-of-day reconciliation." },
  { t: "Production planning & control", b: "Plan, schedule and track every order from yarn to finished article." },
  { t: "Inventory & stores", b: "Live stock, materials and consumables across the plant." },
  { t: "HR, finance & purchase", b: "Every back-office module of a full ERP, in one system." },
  { t: "Quality & compliance", b: "Tie QC results (including MagicQC) into the production record." },
  { t: "Machine maintenance", b: "Optimised, condition-based maintenance scheduling." },
];

export default function RmesPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        {/* hero */}
        <section className="relative overflow-hidden px-6 pt-14 pb-16 lg:pt-20">
          <span aria-hidden className="pointer-events-none absolute -right-32 top-0 h-[36rem] w-[36rem] rounded-full opacity-[0.13]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Product · Manufacturing ERP</p>
              <h1 className="cine-systext mt-4 text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-[1.04] t-ink">RMES</h1>
              <p className="cine-systext mt-2 text-[clamp(1.05rem,2vw,1.5rem)] font-semibold t-accent">Robionix Manufacturing Execution System</p>
              <p className="mt-5 max-w-lg text-base t-soft md:text-lg">
                One industrial ERP that runs the whole plant, from purchase order to final delivery. Built to replace expensive imported systems and to automate Pakistan&apos;s textile, knitwear, sports and surgical manufacturers.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="cine-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5">Book a demo <span aria-hidden>→</span></Link>
                <Link href="/products/kmes" className="cine-glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium t-ink transition-transform duration-200 hover:-translate-y-0.5">See KMES (knitting)</Link>
              </div>
            </Reveal>
            <Reveal y={36}>
              <VideoFrame src="/assets/video/rmes.mp4" poster="/assets/video/rmes-poster.webp" label="rmes · manufacturing execution system" />
            </Reveal>
          </div>
        </section>

        {/* problem */}
        <Section>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Heading center={false} eyebrow="The problem" title={<>Imported ERP costs a fortune, and still doesn&apos;t fit the floor</>} sub="Local manufacturers pay millions in foreign exchange for SAP, Oracle and Dynamics, then bend their process to fit software designed for someone else's factory. The result: cost, complexity, and a system the floor never fully adopts." />
            <Reveal y={24}>
              <CheckList items={[
                "Licences and consultants priced in foreign currency",
                "Generic workflows that ignore textile and knitwear realities",
                "Paper on the floor, data entered after the fact",
                "No local support when the line goes down",
              ]} />
            </Reveal>
          </div>
        </Section>

        {/* flow */}
        <Section>
          <Heading eyebrow="How it works" title="From purchase order to final delivery" sub="RMES models the real production flow, then automates the data capture and planning around it." />
          <div className="mt-12">
            <FlowDiagram steps={[
              { t: "Purchase", s: "yarn & materials" },
              { t: "Planning", s: "production & control" },
              { t: "Production", s: "knitting / stitching" },
              { t: "Wet processing", s: "dyeing & treatment" },
              { t: "Delivery", s: "finished articles" },
            ]} note="Every stage feeds one live record, shared across HR, finance, inventory and quality." />
          </div>
        </Section>

        {/* modules */}
        <Section>
          <Heading eyebrow="One system" title="Every module the plant needs" />
          <FeatureGrid items={MODULES} cols={3} />
        </Section>

        {/* replace imported ERP */}
        <Section>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Heading center={false} eyebrow="Why RMES" title={<>Built to replace SAP, Oracle and Dynamics</>} sub="A modern, ERPNext-grade core, customised to your plant and supported locally, for a fraction of the imported-ERP bill." />
            <SpecRows rows={[
              ["Cost model", "No foreign-currency licences"],
              ["Fit", "Customised to textile / knitwear / surgical workflows"],
              ["Deployment", "Cloud-based, web access across the plant"],
              ["Support", "Local team, on Pakistan time"],
              ["Data", "Real-time collection, one source of truth"],
              ["Quality", "Integrates MagicQC piece-level QC"],
            ]} />
          </div>
        </Section>

        {/* impact */}
        <Section>
          <Heading eyebrow="National impact" title={<>Cutting the import bill, growing exports</>} sub="Textiles are roughly 60% of Pakistan's exports. Every plant that runs on a local ERP keeps more of that value, and the foreign exchange, in-country." />
          <div className="mt-12">
            <StatBand stats={[["100+", "industries targeted"], ["Yarn→ship", "one system"], ["Real-time", "floor data"], ["Local", "support & currency"]]} />
          </div>
        </Section>

        <CTA title={<>Run your plant on a system built for it</>} sub="Book a working session and we'll map RMES to your floor, module by module." />
      </main>
      <SiteFooter />
    </>
  );
}
