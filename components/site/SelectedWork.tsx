import Reveal from "./Reveal";

type Work = { tag: string; title: string; body: string; img: string; featured?: boolean };

const WORK: Work[] = [
  {
    tag: "Vision AI · YOLO + OCR",
    title: "Bib Recognition & Image Segregation",
    body: "AI that detects marathon runners' bib numbers and auto-sorts thousands of race photos in minutes. Built on YOLO object detection and Tesseract OCR, deployed live at night-run events.",
    img: "/assets/work/bib-recognition.webp",
    featured: true,
  },
  {
    tag: "Manufacturing ERP",
    title: "KMES · Knitting MES",
    body: "A knitting-specific ERP that automates the floor from yarn purchase to finished article. Built with a Faisalabad knitwear exporter.",
    img: "/assets/work/kmes.webp",
  },
  {
    tag: "Embedded · IoT",
    title: "Smart Helmet",
    body: "The bike won't start unless the helmet is worn. Over-speed sensing, accident detection and emergency location alerts. Developed with NUTECH.",
    img: "/assets/work/smart-helmet.webp",
  },
  {
    tag: "ERPNext",
    title: "ERP Development",
    body: "Tailored ERPNext rollouts: accounting, HR, inventory, CRM, dashboards, customised to each plant's workflow.",
    img: "/assets/work/erp.webp",
  },
];

function Card({ w, featured }: { w: Work; featured?: boolean }) {
  return (
    <article className={`cine-glass group flex h-full flex-col overflow-hidden rounded-2xl ${featured ? "lg:flex-row" : ""}`}>
      <div className={`relative overflow-hidden ${featured ? "lg:w-3/5" : ""}`}>
        <img src={w.img} alt={w.title} className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${featured ? "h-64 lg:h-full" : "h-48"}`} />
        <span aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 55%,rgba(4,18,25,.35))" }} />
      </div>
      <div className={`flex flex-col p-6 ${featured ? "lg:w-2/5 lg:justify-center lg:p-9" : ""}`}>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] t-accent">{w.tag}</span>
        <h3 className={`cine-systext mt-3 font-bold leading-snug t-ink ${featured ? "text-2xl" : "text-lg"}`}>{w.title}</h3>
        <p className={`mt-3 t-soft ${featured ? "text-base" : "text-sm"}`}>{w.body}</p>
      </div>
    </article>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="relative mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>Selected work</p>
        <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">
          Shipped, on real factory floors
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base t-soft">
          Deployed systems for apparel, knitwear and road safety, from computer vision to full manufacturing ERP.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-3">
          <Card w={WORK[0]} featured />
        </Reveal>
        {WORK.slice(1).map((w, i) => (
          <Reveal key={w.title} delay={i * 80}>
            <Card w={w} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
