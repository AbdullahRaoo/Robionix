import Link from "next/link";
import Reveal from "./Reveal";

type P = { tag: string; title: string; body: string; img: string; href: string; featured?: boolean };

const PRODUCTS: P[] = [
  { tag: "Vision AI · Flagship", title: "MagicQC", body: "AI garment size measurement. Every point-of-measure checked against the buyer's tolerance in seconds.", img: "/assets/magicqc/operator-panel.webp", href: "/magicqc", featured: true },
  { tag: "Manufacturing ERP", title: "RMES", body: "Runs the whole plant, purchase order to delivery. Replaces imported ERP.", img: "/assets/video/rmes-poster.webp", href: "/products/rmes" },
  { tag: "Knitting ERP", title: "KMES", body: "Knitting-specific ERP, yarn to finished article.", img: "/assets/work/kmes.webp", href: "/products/kmes" },
  { tag: "Vision AI", title: "Bib Recognition", body: "Detects runners' bib numbers and auto-sorts race photos.", img: "/assets/work/bib-recognition.webp", href: "/products/bib-recognition" },
  { tag: "Embedded · IoT", title: "Smart Helmet", body: "No helmet, no ignition. Accident detection and alerts.", img: "/assets/work/smart-helmet.webp", href: "/products/smart-helmet" },
];

export default function ProductsHome() {
  return (
    <section id="products" className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Products</p>
        <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">Systems we&apos;ve <span className="t-accent">shipped</span></h2>
        <p className="mx-auto mt-4 max-w-xl text-base t-soft">From AI garment measurement to full manufacturing ERP, deployed on real factory floors.</p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <Link href={p.href} className={`cine-glass group flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 ${p.featured ? "lg:col-span-2 lg:flex-row" : ""}`}>
              <div className={`relative overflow-hidden ${p.featured ? "lg:w-1/2" : ""}`}>
                <img src={p.img} alt={p.title} loading="lazy" decoding="async" className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${p.featured ? "h-56 lg:h-full" : "h-44"}`} />
              </div>
              <div className={`flex flex-col p-6 ${p.featured ? "lg:w-1/2 lg:justify-center lg:p-9" : ""}`}>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] t-accent">{p.tag}</span>
                <h3 className={`cine-systext mt-3 font-bold t-ink ${p.featured ? "text-2xl" : "text-lg"}`}>{p.title}</h3>
                <p className={`mt-2 t-soft ${p.featured ? "text-base" : "text-sm"}`}>{p.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium t-accent">Explore <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span></span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/products" className="cine-glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium t-ink transition-transform duration-200 hover:-translate-y-0.5">All products <span aria-hidden>→</span></Link>
      </div>
    </section>
  );
}
