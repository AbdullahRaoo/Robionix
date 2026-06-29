import Link from "next/link";

const COLS = [
  { h: "Services", links: [["Computer Vision", "/services/computer-vision"], ["ERP Development", "/services/erp-development"], ["Robotics", "/services/robotics-automation"], ["Embedded", "/services/embedded-systems"]] },
  { h: "Products", links: [["MagicQC", "/magicqc"], ["RMES", "/products/rmes"], ["KMES", "/products/kmes"], ["Bib Recognition", "/products/bib-recognition"], ["Smart Helmet", "/products/smart-helmet"]] },
  { h: "Company", links: [["About", "/company"], ["Insights", "/insights"], ["Careers", "/careers"], ["Contact", "/contact"]] },
];

export default function SiteFooter() {
  return (
    <footer className="relative border-t" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-[1240px] px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src="/assets/brand/logo-wide-light.png" alt="Robionix Technologies" className="on-dark h-11 w-auto" />
            <img src="/assets/brand/logo-wide.png" alt="Robionix Technologies" className="on-light h-11 w-auto" />
            <p className="mt-5 max-w-md text-sm t-soft">
              Vision-driven automation for the factory floor. Built at NUTECH, Islamabad.
            </p>
          </div>
          {COLS.map((c) => (
            <div key={c.h}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] t-faint">{c.h}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {c.links.map(([l, href]) => (
                  <li key={l}><Link href={href} className="text-sm t-soft transition-colors hover:[color:var(--ink)]">{l}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center" style={{ borderColor: "var(--border)" }}>
          <p className="font-mono text-[11px] uppercase tracking-wider t-faint">© {new Date().getFullYear()} Robionix Technologies</p>
          <a href="https://www.linkedin.com/company/robionix-technologies/" target="_blank" rel="noopener noreferrer" className="text-sm t-soft transition-colors hover:[color:var(--ink)]">LinkedIn ↗</a>
        </div>
      </div>
    </footer>
  );
}
