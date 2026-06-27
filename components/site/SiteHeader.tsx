"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { label: "MagicQC", href: "/magicqc" },
  { label: "Platform", href: "/platform" },
  { label: "Work", href: "/work" },
  { label: "Company", href: "/company" },
];

function toggleTheme() {
  const el = document.documentElement;
  const next = el.getAttribute("data-theme") === "light" ? "dark" : "light";
  el.setAttribute("data-theme", next);
  try { localStorage.setItem("robionix-theme", next); } catch {}
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="cine-header sticky top-0 z-50" style={{ transform: "none", opacity: 1 }}>
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-6 lg:h-24 lg:px-7">
        <Link href="/" aria-label="Robionix home" className="flex items-center">
          <img src="/assets/brand/logo-wide-light.png" alt="Robionix Technologies" className="on-dark h-10 w-auto lg:h-12" />
          <img src="/assets/brand/logo-wide.png" alt="Robionix Technologies" className="on-light h-10 w-auto lg:h-12" />
        </Link>

        <nav className="hidden items-center gap-9 text-[15px] font-medium lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="t-soft transition-colors hover:[color:var(--ink)]">{n.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button type="button" onClick={toggleTheme} aria-label="Toggle theme" className="cine-glass flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-y-0.5">
            <svg className="on-dark t-ink" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" strokeLinecap="round" /></svg>
            <svg className="on-light t-ink" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" strokeLinejoin="round" /></svg>
          </button>
          <Link href="/contact" className="cine-cta hidden items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex">Book a meeting</Link>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-label="Menu" className="cine-glass flex h-11 w-11 items-center justify-center rounded-full lg:hidden">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="t-ink">
              {open ? <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" /> : <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="cine-glass mx-4 mb-3 flex flex-col gap-1 rounded-2xl p-3 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium t-ink hover:[background:var(--panel)]">{n.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="cine-cta mt-1 rounded-lg px-4 py-3 text-center text-sm font-semibold text-petrol-950">Book a meeting</Link>
        </nav>
      )}
    </header>
  );
}
