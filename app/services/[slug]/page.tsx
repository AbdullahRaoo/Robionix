import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import { Section, Heading, FeatureGrid, Steps, CTA } from "@/components/site/blocks";
import { SERVICES, getService } from "@/lib/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "Services — Robionix" };
  return { title: `${s.name} — ${s.tagline} | Robionix`, description: s.intro };
}

function TechMotif() {
  return (
    <div className="cine-stage relative aspect-[4/3] overflow-hidden rounded-[20px]">
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <pattern id="g" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" stroke="var(--border)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#g)" />
        {[[80, 90], [200, 60], [320, 120], [140, 200], [280, 220], [200, 150]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="4" fill="var(--accent)" />
            <circle cx={x} cy={y} r="10" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
          </g>
        ))}
        <path d="M80 90 L200 150 L320 120 M200 150 L140 200 M200 150 L280 220 M200 150 L200 60" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
      </svg>
    </div>
  );
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <section className="relative overflow-hidden px-6 pt-14 pb-16 lg:pt-20">
          <span aria-hidden className="pointer-events-none absolute -right-32 top-0 h-[36rem] w-[36rem] rounded-full opacity-[0.13]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Service · {s.tag}</p>
              <h1 className="cine-systext mt-4 text-[clamp(2.2rem,4.6vw,3.6rem)] font-extrabold leading-[1.05] t-ink">{s.name}</h1>
              <p className="cine-systext mt-2 text-[clamp(1.05rem,2vw,1.45rem)] font-semibold t-accent">{s.tagline}</p>
              <p className="mt-5 max-w-lg text-base t-soft md:text-lg">{s.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="cine-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5">Book a demo <span aria-hidden>→</span></Link>
                <Link href="/services" className="cine-glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium t-ink transition-transform duration-200 hover:-translate-y-0.5">All services</Link>
              </div>
            </Reveal>
            <Reveal y={36}>
              {s.heroImg ? (
                <div className="cine-stage overflow-hidden rounded-[20px] p-3">
                  <div className="mb-2 flex items-center gap-2 px-2 pt-1"><span className="h-2 w-2 rounded-full bg-[#F0A800]/80" /><span className="h-2 w-2 rounded-full bg-[#34D399]/80" /><span className="h-2 w-2 rounded-full" style={{ background: "var(--border)" }} /><span className="ml-2 font-mono text-[10px] uppercase tracking-widest t-faint">{s.tag}</span></div>
                  <img src={s.heroImg} alt={s.name} className="block w-full rounded-[12px]" />
                </div>
              ) : <TechMotif />}
            </Reveal>
          </div>
        </section>

        <Section>
          <Heading eyebrow="What we build" title={`${s.name}, in practice`} />
          <FeatureGrid items={s.capabilities} cols={2} />
        </Section>

        <Section>
          <Heading eyebrow="Where it applies" title="Use cases" center={false} />
          <div className="mt-10 flex flex-wrap gap-3">
            {s.useCases.map((u) => (
              <Reveal key={u}><span className="cine-glass inline-flex rounded-full px-5 py-2.5 text-sm font-medium t-ink">{u}</span></Reveal>
            ))}
          </div>
        </Section>

        <Section>
          <Heading eyebrow="How we work" title="From brief to deployed" />
          <Steps items={s.approach} />
        </Section>

        {s.related.length > 0 && (
          <Section>
            <Heading eyebrow="Proof" title="What this capability has built" />
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {s.related.map((r) => (
                <Reveal key={r.title}>
                  <Link href={r.href} className="cine-glass group flex overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1">
                    <img src={r.img} alt={r.title} className="h-32 w-40 shrink-0 object-cover" />
                    <div className="flex flex-col justify-center p-5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] t-accent">{r.tag}</span>
                      <span className="cine-systext mt-1 text-lg font-bold t-ink">{r.title}</span>
                      <span className="mt-1 inline-flex items-center gap-1.5 text-sm t-soft">Explore <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span></span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Section>
        )}

        <CTA title={<>Let&apos;s build with {s.name.toLowerCase()}</>} sub="Book a working session and we'll scope it against your line." />
      </main>
      <SiteFooter />
    </>
  );
}
