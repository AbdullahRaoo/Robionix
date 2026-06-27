import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import VideoFrame from "@/components/site/VideoFrame";
import { Section, Heading, FeatureGrid, FlowDiagram, SpecRows, CTA } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Smart Helmet — IoT rider safety | Robionix",
  description: "An IoT smart helmet that won't let the bike start unless it's worn, senses over-speeding, and sends accident location alerts to an emergency contact. Developed with NUTECH.",
};

const FEATURES = [
  { t: "No helmet, no start", b: "The bike will not start unless the rider is wearing the helmet." },
  { t: "Accident detection", b: "Detects a crash and sends the location to an emergency contact for early first aid." },
  { t: "Over-speed sensing", b: "Senses over-speeding of the motorbike and warns the rider." },
  { t: "Wrong-way detection", b: "Flags wrong-way riding, with on-board data logging." },
  { t: "Hands-free comms", b: "Integrated microphone and speakers for calls and navigation." },
  { t: "App-connected", b: "IoT device pairs to a mobile app over Wi-Fi or Bluetooth." },
];

export default function SmartHelmetPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <section className="relative overflow-hidden px-6 pt-14 pb-16 lg:pt-20">
          <span aria-hidden className="pointer-events-none absolute -right-32 top-0 h-[36rem] w-[36rem] rounded-full opacity-[0.13]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Product · Embedded &amp; IoT</p>
              <h1 className="cine-systext mt-4 text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-[1.04] t-ink">Smart Helmet</h1>
              <p className="cine-systext mt-2 text-[clamp(1.05rem,2vw,1.5rem)] font-semibold t-accent">Save one life, save the entire humanity</p>
              <p className="mt-5 max-w-lg text-base t-soft md:text-lg">
                An IoT helmet that enforces safety at the source: the motorbike won&apos;t start unless the helmet is worn, and if an accident happens, it sends the location to an emergency contact. Developed with NUTECH.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="cine-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5">Talk to us <span aria-hidden>→</span></Link>
                <Link href="/services/embedded-systems" className="cine-glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium t-ink transition-transform duration-200 hover:-translate-y-0.5">Our Embedded work</Link>
              </div>
            </Reveal>
            <Reveal y={36}>
              <VideoFrame src="/assets/video/smart-helmet.mp4" poster="/assets/work/smart-helmet.webp" label="smart helmet · overview" />
            </Reveal>
          </div>
        </section>

        <Section>
          <Heading eyebrow="What it does" title="Safety, enforced and connected" />
          <FeatureGrid items={FEATURES} cols={3} />
        </Section>

        <Section>
          <Heading eyebrow="How it connects" title="From helmet to emergency contact" sub="A small IoT device embedded in the helmet links the rider, the bike and a phone." />
          <div className="mt-12">
            <FlowDiagram steps={[
              { t: "Helmet sensors", s: "worn / speed / impact" },
              { t: "IoT module", s: "Wi-Fi / Bluetooth" },
              { t: "Mobile app", s: "alerts & maps" },
              { t: "Emergency contact", s: "location on crash" },
            ]} note="Ignition interlock on the bike, telemetry and alerts on the phone." />
          </div>
        </Section>

        <Section>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Heading center={false} eyebrow="Under the shell" title={<>Embedded engineering, concept to silicon</>} sub="The Smart Helmet is a showcase of our embedded and IoT capability: sensing, connectivity and a companion app, integrated into a wearable product." />
            <SpecRows rows={[
              ["Interlock", "Bike won't start without the helmet"],
              ["Sensing", "Over-speed, wrong-way, impact"],
              ["Connectivity", "Wi-Fi / Bluetooth to mobile app"],
              ["Safety", "Accident location to emergency contact"],
              ["Comms", "Mic + speakers for calls and navigation"],
              ["Partner", "Developed with NUTECH"],
            ]} />
          </div>
        </Section>

        <CTA title={<>Build the next connected product with us</>} sub="From sensing to app, we take embedded products from concept to the field." cta="Talk to us" />
      </main>
      <SiteFooter />
    </>
  );
}
