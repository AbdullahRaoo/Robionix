import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import { CTA } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Products | Robionix Technologies",
  description: "MagicQC AI garment measurement, RMES and KMES manufacturing ERP, AI bib recognition, and the Smart Helmet. Systems Robionix has shipped onto real factory floors.",
};

type P = { tag: string; title: string; body: string; img: string; href: string; featured?: boolean };

const PRODUCTS: P[] = [
  { tag: "Vision AI · Flagship", title: "MagicQC", body: "AI-based automated garment size measurement. Computer vision reads every point-of-measure against the buyer's tolerance in seconds.", img: "/assets/magicqc/operator-panel.webp", href: "/magicqc", featured: true },
  { tag: "Manufacturing ERP", title: "RMES", body: "The manufacturing execution system that runs the whole plant, from purchase order to delivery, and replaces imported ERP.", img: "/assets/video/rmes-poster.webp", href: "/products/rmes" },
  { tag: "Knitting ERP", title: "KMES", body: "A knitting-specific ERP, yarn to finished article, built with a Faisalabad knitwear exporter.", img: "/assets/work/kmes.webp", href: "/products/kmes" },
  { tag: "Vision AI", title: "Bib Recognition", body: "AI that detects runners' bib numbers and auto-sorts thousands of race photos in minutes.", img: "/assets/work/bib-recognition.webp", href: "/products/bib-recognition" },
  { tag: "Embedded · IoT", title: "Smart Helmet", body: "No helmet, no ignition. Over-speed sensing, accident detection and emergency alerts.", img: "/assets/work/smart-helmet.webp", href: "/products/smart-helmet" },
];

function Card({ p }: { p: P }) {
  return (
    <Link href={p.href} className={`cine-glass group flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 ${p.featured ? "lg:col-span-2 lg:flex-row" : ""}`}>
      <div className={`relative overflow-hidden ${p.featured ? "lg:w-1/2" : ""}`}>
        <img src={p.img} alt={p.title} loading="lazy" decoding="async" className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${p.featured ? "h-56 lg:h-full" : "h-44"}`} />
      </div>
      <div className={`flex flex-col p-6 ${p.featured ? "lg:w-1/2 lg:justify-center lg:p-9" : ""}`}>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] t-accent">{p.tag}</span>
        <h2 className={`cine-systext mt-3 font-bold t-ink ${p.featured ? "text-2xl" : "text-lg"}`}>{p.title}</h2>
        <p className={`mt-2 t-soft ${p.featured ? "text-base" : "text-sm"}`}>{p.body}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium t-accent">Explore <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span></span>
      </div>
    </Link>
  );
}

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="overflow-x-hidden">
        <section className="relative overflow-hidden px-6 pt-16 pb-12 lg:pt-24">
          <span aria-hidden className="pointer-events-none absolute -left-32 top-0 h-[34rem] w-[34rem] rounded-full opacity-[0.12]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
          <Reveal className="relative mx-auto max-w-[760px] text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Products</p>
            <h1 className="cine-systext mt-4 text-[clamp(2.2rem,4.4vw,3.6rem)] font-extrabold leading-[1.06] t-ink">Shipped, on real <span className="t-accent">factory floors</span></h1>
            <p className="mx-auto mt-5 max-w-xl text-base t-soft md:text-lg">From AI garment measurement to full manufacturing ERP, these are the systems Robionix has built and deployed.</p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-[1240px] px-6 pb-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {PRODUCTS.map((p) => <Reveal key={p.title}><Card p={p} /></Reveal>)}
          </div>
        </section>

        <CTA title={<>Not sure which system fits your floor?</>} sub="Tell us your process and we'll point you to the right starting product." />
      </main>
      <SiteFooter />
    </>
  );
}
