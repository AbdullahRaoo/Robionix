import Reveal from "./Reveal";

type Cap = { tag: string; title: string; body: string; icon: React.ReactNode; span?: string; featured?: boolean };

const I = {
  vision: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg>
  ),
  erp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
  ),
  robot: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><rect x="6" y="11" width="12" height="9" rx="2" /><path d="M12 7v4M9 16h.01M15 16h.01" /><circle cx="12" cy="5" r="2" /></svg>
  ),
  chip: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></svg>
  ),
  vr: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full"><rect x="2" y="7" width="20" height="10" rx="3" /><path d="M8 17l1.5-3h5L16 17M11 12h2" /></svg>
  ),
};

const CAPS: Cap[] = [
  { tag: "Vision AI", featured: true, span: "lg:col-span-2 lg:row-span-2", icon: I.vision, title: "Computer vision that reads the physical world", body: "Deep-learning systems that measure, detect and sort in real time. MagicQC reads every garment point-of-measure to the millimetre; our marathon bib engine (YOLO + OCR) segregates thousands of race photos automatically." },
  { tag: "ERP / MES", span: "lg:col-span-2", icon: I.erp, title: "Manufacturing ERP, built for the floor", body: "RMES & KMES replace SAP/Oracle for textile, knitwear, sports and surgical plants, yarn to delivery, in one system." },
  { tag: "Robotics", icon: I.robot, title: "Robotics & automation", body: "Custom robotic cells tuned for accuracy and throughput." },
  { tag: "Embedded", icon: I.chip, title: "Embedded & IoT", body: "Concept to silicon. The Smart Helmet: no helmet, no ignition." },
  { tag: "Automation", span: "lg:col-span-2", icon: I.gear, title: "Industrial automation", body: "Workflow and machine automation that adapts to your existing line: real-time data collection, less paperwork, optimised maintenance." },
  { tag: "VR", icon: I.vr, title: "VR experiences", body: "Immersive training and simulation." },
];

export default function Capabilities() {
  return (
    <section id="platform" className="relative mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>What we build</p>
        <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">
          Vision-driven systems, <span className="t-accent">end to end</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base t-soft">
          One house for the hardware and the software, so the machine that sees the part and the system that runs the plant speak the same language.
        </p>
      </Reveal>

      <div className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CAPS.map((c, i) => (
          <Reveal key={c.tag} delay={i * 70} className={c.span ?? ""}>
            <article className="cine-glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-5 flex items-center gap-3">
                <span className="t-accent h-9 w-9 shrink-0">{c.icon}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] t-faint">{c.tag}</span>
              </div>
              <h3 className={`cine-systext font-bold leading-snug t-ink ${c.featured ? "text-2xl" : "text-lg"}`}>{c.title}</h3>
              <p className={`mt-3 t-soft ${c.featured ? "text-base" : "text-sm"}`}>{c.body}</p>
              {c.featured && (
                <span aria-hidden className="pointer-events-none absolute -bottom-16 -right-10 h-44 w-44 rounded-full opacity-40" style={{ background: "radial-gradient(circle,var(--glow1),transparent 70%)" }} />
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
