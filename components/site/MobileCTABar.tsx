import Link from "next/link";

// Mobile-only thumb-zone action bar. A phone-specific design decision, not a shrunk desktop nav.
export default function MobileCTABar() {
  return (
    <div>
    {/* <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="flex items-center gap-3 border-t px-4 py-3" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <Link href="/contact" className="cine-cta flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-petrol-950">
          Book a demo <span aria-hidden>→</span>
        </Link>
        <a href="mailto:awaisfrombit@gmail.com" aria-label="Email Robionix" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border" style={{ borderColor: "var(--border)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="t-ink"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
        </a>
      </div> */}
    </div>
  );
}
