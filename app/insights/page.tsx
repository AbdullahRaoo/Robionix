import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import { CTA } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Insights & case studies — Robionix",
  description: "How Robionix builds vision-driven automation: field notes and case studies from real deployments in apparel, knitwear and road safety.",
};

type Case = { tag: string; title: string; take: string; img: string; href: string; featured?: boolean };

const CASES: Case[] = [
  { tag: "Case study · Vision AI", title: "From a tape measure to computer vision", take: "How MagicQC replaced manual, sample-based garment QC with 100% piece-level measurement at roughly three seconds each.", img: "/assets/magicqc/operator-panel.webp", href: "/magicqc", featured: true },
  { tag: "Case study · ERP", title: "A knitting ERP, built on the floor in Faisalabad", take: "Why KMES was developed alongside a working knitwear exporter, and what 'knitting-specific' really means.", img: "/assets/work/kmes.webp", href: "/products/kmes" },
  { tag: "Case study · Vision AI", title: "Turning thousands of race photos into a searchable archive", take: "Inside the YOLO + OCR pipeline that sorts marathon images by bib number in minutes.", img: "/assets/work/bib-recognition.webp", href: "/products/bib-recognition" },
  { tag: "Perspective", title: "Keeping the export bill in-country", take: "Textiles are roughly 60% of Pakistan's exports. The case for replacing imported ERP with a local manufacturing system.", img: "/assets/video/rmes-poster.webp", href: "/products/rmes" },
];

export default function InsightsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="overflow-x-hidden">
        <section className="relative overflow-hidden px-6 pt-16 pb-12 lg:pt-24">
          <span aria-hidden className="pointer-events-none absolute -left-32 top-0 h-[34rem] w-[34rem] rounded-full opacity-[0.12]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
          <Reveal className="relative mx-auto max-w-[760px] text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Insights</p>
            <h1 className="cine-systext mt-4 text-[clamp(2.2rem,4.4vw,3.6rem)] font-extrabold leading-[1.06] t-ink">Field notes from the <span className="t-accent">factory floor</span></h1>
            <p className="mx-auto mt-5 max-w-xl text-base t-soft md:text-lg">How we build vision-driven automation, and what we learn deploying it in real plants.</p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-[1240px] px-6 pb-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {CASES.map((c) => (
              <Reveal key={c.title} className={c.featured ? "sm:col-span-2" : ""}>
                <Link href={c.href} className={`cine-glass group flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 ${c.featured ? "sm:flex-row" : ""}`}>
                  <div className={`relative overflow-hidden ${c.featured ? "sm:w-1/2" : ""}`}>
                    <img src={c.img} alt={c.title} loading="lazy" decoding="async" className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${c.featured ? "h-56 sm:h-full" : "h-44"}`} />
                  </div>
                  <div className={`flex flex-col p-6 ${c.featured ? "sm:w-1/2 sm:justify-center sm:p-9" : ""}`}>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] t-accent">{c.tag}</span>
                    <h2 className={`cine-systext mt-3 font-bold leading-snug t-ink ${c.featured ? "text-2xl" : "text-lg"}`}>{c.title}</h2>
                    <p className="mt-2 text-sm t-soft">{c.take}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium t-accent">Read more <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <CTA title={<>Want the full story behind a system?</>} sub="Book a session and we'll walk you through how it was built and deployed." />
      </main>
      <SiteFooter />
    </>
  );
}
