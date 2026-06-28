import Reveal from "./Reveal";

// NOTE: names are from the real team; ROLES are best-guess placeholders (confirm/replace).
type Member = { name: string; role: string; img: string; lead?: boolean };

const TEAM: Member[] = [
  { name: "Dr. Awais Yasin", role: "Founder & Director", img: "/assets/team/awais-yasin.webp", lead: true },
  { name: "Umer Saleem", role: "Lead Software Engineer", img: "/assets/team/umer-saleem.webp" },
  { name: "Mohsin Ali", role: "Computer Vision Engineer", img: "/assets/team/mohsin-ali.webp" },
  { name: "Waqas Chaudhary", role: "Embedded Systems Engineer", img: "/assets/team/waqas-chaudhary.webp" },
  { name: "Inayatullah", role: "Robotics Engineer", img: "/assets/team/inayatullah.webp" },
  { name: "Marium Jalal", role: "ERP Consultant", img: "/assets/team/marium-jalal.webp" },
  { name: "Rida Batool", role: "Software Engineer", img: "/assets/team/rida-batool.webp" },
  { name: "Rooh ul Amin", role: "Full-Stack Engineer", img: "/assets/team/rooh-ul-amin.webp" },
  { name: "Waleed", role: "Hardware Engineer", img: "/assets/team/waleed.webp" },
  { name: "Abdullah", role: "Software Engineer", img: "/assets/team/abdullah.webp" },
];

export default function Team() {
  return (
    <section id="company" className="relative mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--kicker)" }}>The people</p>
        <h2 className="cine-systext mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.08] t-ink">
          The team behind the <span className="t-accent">machines</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base t-soft">
          A NUTECH-born engineering team building hardware and software for Pakistan&apos;s manufacturers.
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} delay={(i % 5) * 60}>
            <figure className="group flex flex-col items-center text-center">
              <div className={`relative aspect-square w-full overflow-hidden rounded-full ${m.lead ? "ring-2" : "ring-1"}`} style={{ background: "var(--panel)", boxShadow: "var(--glass-shadow)", ["--tw-ring-color" as string]: m.lead ? "var(--accent)" : "var(--border)" }}>
                <img src={m.img} alt={m.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <figcaption className="mt-4">
                <p className="cine-systext text-sm font-bold t-ink">{m.name}</p>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] t-faint">{m.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
