"use client";

import Link from "next/link";
import { useState } from "react";

const PRODUCTS = [
  { label: "MagicQC", href: "/magicqc", desc: "AI garment measurement" },
  { label: "RMES", href: "/products/rmes", desc: "Manufacturing ERP" },
  { label: "KMES", href: "/products/kmes", desc: "Knitting ERP" },
  { label: "Bib Recognition", href: "/products/bib-recognition", desc: "Vision AI for events" },
  { label: "Smart Helmet", href: "/products/smart-helmet", desc: "Embedded / IoT" },
];
const SERVICES = [
  { label: "Computer Vision", href: "/services/computer-vision", desc: "Vision AI" },
  { label: "ERP Development", href: "/services/erp-development", desc: "ERPNext" },
  { label: "Robotics & Automation", href: "/services/robotics-automation", desc: "Robotic cells" },
  { label: "Embedded Systems", href: "/services/embedded-systems", desc: "Concept to silicon" },
  { label: "Industrial Automation", href: "/services/industrial-automation", desc: "Connected floor" },
  { label: "VR Solutions", href: "/services/vr", desc: "Training & simulation" },
];
const SIMPLE = [
  { label: "Company", href: "/company" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

function toggleTheme() {
  const el = document.documentElement;
  const next = el.getAttribute("data-theme") === "light" ? "dark" : "light";
  el.setAttribute("data-theme", next);
  try { localStorage.setItem("robionix-theme", next); } catch {}
}

function Dropdown({ label, items, open, setOpen, hub }: { label: string; items: typeof PRODUCTS; open: boolean; setOpen: (v: boolean) => void; hub: string }) {
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link href={hub} className="flex items-center gap-1 py-2 t-soft transition-colors hover:[color:var(--ink)]">
        {label}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className={`transition-transform ${open ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6" /></svg>
      </Link>
      {open && (
        <div className="absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-3">
          <div className="cine-glass grid gap-1 rounded-2xl p-2" style={{ background: "var(--surface)" }}>
            {items.map((it) => (
              <Link key={it.href} href={it.href} className="flex flex-col rounded-xl px-4 py-2.5 transition-colors hover:[background:var(--panel)]">
                <span className="text-sm font-semibold t-ink">{it.label}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider t-faint">{it.desc}</span>
              </Link>
            ))}
            <Link href={hub} className="mt-1 rounded-xl px-4 py-2.5 text-sm font-medium t-accent transition-colors hover:[background:var(--panel)]">View all {label.toLowerCase()} →</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HeaderInner() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-6 lg:h-24 lg:px-7">
        <Link href="/" aria-label="Robionix home" className="flex items-center">
          <img src="/assets/brand/logo-wide-light.png" alt="Robionix Technologies" className="on-dark h-10 w-auto lg:h-12" />
          <img src="/assets/brand/logo-wide.png" alt="Robionix Technologies" className="on-light h-10 w-auto lg:h-12" />
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] font-medium lg:flex">
          <Dropdown label="Products" hub="/products" items={PRODUCTS} open={open === "products"} setOpen={(v) => setOpen(v ? "products" : null)} />
          <Dropdown label="Services" hub="/services" items={SERVICES} open={open === "services"} setOpen={(v) => setOpen(v ? "services" : null)} />
          {SIMPLE.map((n) => (
            <Link key={n.href} href={n.href} className="t-soft transition-colors hover:[color:var(--ink)]">{n.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button type="button" onClick={toggleTheme} aria-label="Toggle theme" className="cine-glass flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-y-0.5">
            <svg className="on-dark t-ink" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" strokeLinecap="round" /></svg>
            <svg className="on-light t-ink" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" strokeLinejoin="round" /></svg>
          </button>
          <Link href="/contact" className="cine-cta hidden items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex">Book a demo</Link>
          <button type="button" onClick={() => setMobile((v) => !v)} aria-label="Menu" className="cine-glass flex h-11 w-11 items-center justify-center rounded-full lg:hidden">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="t-ink">{mobile ? <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" /> : <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />}</svg>
          </button>
        </div>
      </div>

      {mobile && (
        <div className="mx-4 mb-3 max-h-[70vh] overflow-y-auto lg:hidden">
          <div className="cine-glass flex flex-col gap-3 rounded-2xl p-4" style={{ background: "var(--surface)" }}>
            {[["Products", PRODUCTS, "/products"], ["Services", SERVICES, "/services"]].map(([h, items, hub]) => (
              <div key={h as string}>
                <Link href={hub as string} onClick={() => setMobile(false)} className="font-mono text-[10px] uppercase tracking-[0.18em] t-accent">{h as string}</Link>
                <div className="mt-2 flex flex-col">
                  {(items as typeof PRODUCTS).map((it) => (
                    <Link key={it.href} href={it.href} onClick={() => setMobile(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium t-ink hover:[background:var(--panel)]">{it.label}</Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="border-t pt-3" style={{ borderColor: "var(--border)" }}>
              {SIMPLE.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setMobile(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium t-ink hover:[background:var(--panel)]">{n.label}</Link>
              ))}
            </div>
            <Link href="/contact" onClick={() => setMobile(false)} className="cine-cta rounded-lg px-4 py-3 text-center text-sm font-semibold text-petrol-950">Book a demo</Link>
          </div>
        </div>
      )}
    </>
  );
}
