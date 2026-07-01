import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import { Section, Heading, FeatureGrid, FlowDiagram, StatBand, SpecRows, CTA } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Bib Recognition & Image Segregation: AI for race photos | Robionix",
  description: "AI that detects marathon runners' bib numbers and auto-sorts thousands of race photos in minutes, built on YOLO object detection and Tesseract OCR.",
};

const WHY = [
  { t: "Smart bib detection", b: "AI scans every frame, finds bib numbers and reads them with high accuracy." },
  { t: "Automated segregation", b: "Images sort themselves into folders by runner bib number, in real time." },
  { t: "Instant search", b: "Retrieve every photo of a runner in seconds, no manual hunting." },
  { t: "Lightning fast", b: "Process thousands of images in minutes, not days." },
  { t: "Scalable & reliable", b: "From a local race to an international event, the pipeline holds." },
  { t: "Seamless integration", b: "Connect to race websites, tracking platforms and mobile apps." },
];

export default function BibPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="overflow-x-hidden">
        <section className="relative overflow-hidden px-6 pt-14 pb-16 lg:pt-20">
          <span aria-hidden className="pointer-events-none absolute -right-32 top-0 h-[36rem] w-[36rem] rounded-full opacity-[0.13]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Product · Vision AI</p>
              <h1 className="cine-systext mt-4 text-[clamp(2.1rem,4.4vw,3.4rem)] font-extrabold leading-[1.05] t-ink">Bib Recognition &amp; Image Segregation</h1>
              <p className="mt-5 max-w-lg text-base t-soft md:text-lg">
                Tired of manually sorting thousands of marathon photos? Our AI detects each runner&apos;s bib number and organises every image in real time, so photographers and organisers turn chaos into clarity.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="cine-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5">Book a demo <span aria-hidden>→</span></Link>
                <Link href="/services/computer-vision" className="cine-glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium t-ink transition-transform duration-200 hover:-translate-y-0.5">Our Vision AI</Link>
              </div>
            </Reveal>
            <Reveal y={36}>
              <div className="cine-stage overflow-hidden rounded-[20px] p-3">
                <div className="mb-2 flex items-center gap-2 px-2 pt-1"><span className="h-2 w-2 rounded-full bg-[#F0A800]/80" /><span className="h-2 w-2 rounded-full bg-[#34D399]/80" /><span className="h-2 w-2 rounded-full" style={{ background: "var(--border)" }} /><span className="ml-2 font-mono text-[10px] uppercase tracking-widest t-faint">bib detection · live at a night run</span></div>
                <img src="/assets/work/bib-recognition.webp" alt="AI detecting marathon runner bib numbers in a live photo" className="block w-full rounded-[12px]" />
              </div>
            </Reveal>
          </div>
        </section>

        <Section>
          <Heading eyebrow="How it works" title="Detect, read, sort, in real time" sub="A computer-vision pipeline tuned for the noise and motion of a real race." />
          <div className="mt-12">
            <FlowDiagram steps={[
              { t: "Capture", s: "race photos in" },
              { t: "Detect", s: "YOLO finds bibs" },
              { t: "Read", s: "Tesseract OCR" },
              { t: "Segregate", s: "sort by number" },
            ]} note="Powered by YOLO object detection and Tesseract OCR with deep-learning models." />
          </div>
        </Section>

        <Section>
          <Heading eyebrow="Why choose this system" title="From a folder of chaos to a searchable archive" />
          <FeatureGrid items={WHY} cols={3} />
        </Section>

        <Section>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Heading center={false} eyebrow="Built for events" title={<>Made for marathons of any size</>} sub="Perfect for organisers, photographers and event managers who need every runner's photos found instantly." />
              <div className="mt-10"><StatBand stats={[["1000s", "images / run"], ["Minutes", "not days"], ["High", "OCR accuracy"], ["Any", "event size"]]} /></div>
            </div>
            <SpecRows rows={[
              ["Detection", "YOLO object detection"],
              ["Recognition", "Tesseract OCR + deep learning"],
              ["Output", "Auto-sorted folders by bib number"],
              ["Retrieval", "Instant per-runner search"],
              ["Integration", "Race sites, tracking platforms, mobile apps"],
            ]} />
          </div>
        </Section>

        <CTA title={<>Turn race-day chaos into clarity</>} sub="Bring a set of event photos and we'll sort them live by bib number." />
      </main>
      <SiteFooter />
    </>
  );
}
