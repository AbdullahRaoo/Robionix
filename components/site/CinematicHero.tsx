"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type POM = { id: string; label: string; val: string; color: string; a: [number, number]; b: [number, number]; l: [number, number] };

const POMS: POM[] = [
  { id: "SH", label: "SHOULDER", val: "50.0", color: "#38BDF8", a: [416, 200], b: [960, 200], l: [688, 178] },
  { id: "SL", label: "SLEEVE", val: "21.0", color: "#F472B6", a: [416, 206], b: [120, 300], l: [232, 246] },
  { id: "CH", label: "CHEST", val: "53.5", color: "#F5B025", a: [388, 352], b: [988, 352], l: [688, 352] },
  { id: "LN", label: "LENGTH", val: "60.0", color: "#2DD4BF", a: [688, 184], b: [688, 588], l: [1150, 430] },
  { id: "WA", label: "WAIST", val: "43.0", color: "#A78BFA", a: [404, 466], b: [972, 466], l: [688, 466] },
  { id: "HM", label: "HEM", val: "40.3", color: "#34D399", a: [428, 582], b: [948, 582], l: [688, 582] },
];

export default function CinematicHero() {
  const root = useRef<HTMLDivElement>(null);
  const tilt = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const ready = useRef(false);
  const raf = useRef(0);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // sync state with the theme the inline script already applied
  useEffect(() => {
    const cur = document.documentElement.getAttribute("data-theme");
    if (cur === "light" || cur === "dark") setTheme(cur);
  }, []);

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("robionix-theme", next); } catch {}
      return next;
    });
  };

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(".cine-card", { visibility: "visible", yPercent: 0, top: 0, left: 0, right: 0, bottom: 0, borderRadius: 0 });
        gsap.set(".cine-header", { clearProps: "transform", opacity: 1 });
        gsap.set([".cine-stagewrap", ".cine-hero-el", ".cine-badge", ".cine-ghostword", ".cine-kp", ".cine-pomlabel"], { autoAlpha: 1, x: 0, y: 0, scale: 1, rotationX: 0 });
        gsap.set(".cine-line-draw", { strokeDashoffset: 0 });
        gsap.set(".cine-intro", { autoAlpha: 0, display: "none" });
        root.current?.classList.add("cine-ready");
        ready.current = true;
        return;
      }

      // measure where the stage sits, so the flip-in lands it dead-centre of the viewport
      let centerOffset = -150;
      const sw = root.current?.querySelector(".cine-stagewrap");
      if (sw) {
        const r = sw.getBoundingClientRect();
        centerOffset = Math.round(window.innerHeight / 2 - (r.top + r.height / 2));
      }

      gsap.set(".cine-card", { visibility: "visible", yPercent: 118 });
      gsap.set(".cine-intro-1", { autoAlpha: 0, scale: 0.86, rotationX: -22, filter: "blur(20px)", transformPerspective: 900, transformOrigin: "50% 50%" });
      gsap.set(".cine-stagewrap", { autoAlpha: 0, y: centerOffset, rotationX: 34, scale: 0.92, transformPerspective: 1300, transformOrigin: "50% 30%" });
      gsap.set([".cine-hero-el", ".cine-ghostword"], { autoAlpha: 0, y: 24 });
      gsap.set(".cine-kp", { scale: 0, autoAlpha: 0, transformOrigin: "50% 50%" });
      gsap.set(".cine-pomlabel", { autoAlpha: 0, scale: 0.7, transformOrigin: "50% 50%" });
      gsap.set(".cine-badge", { autoAlpha: 0, y: 50, scale: 0.82 });
      gsap.set(".cine-line-draw", { strokeDashoffset: 1100 });

      const master = gsap.timeline({
        defaults: { ease: "expo.out" },
        onComplete: () => { ready.current = true; root.current?.classList.add("cine-ready"); },
      });
      tl.current = master;

      master
        .to(".cine-intro-1", { autoAlpha: 1, scale: 1, rotationX: 0, filter: "blur(0px)", duration: 1.5 })
        .to(".cine-intro-2", { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power4.inOut" }, "-=0.8")
        .to({}, { duration: 0.7 })
        .to(".cine-intro", { autoAlpha: 0, scale: 1.08, filter: "blur(14px)", duration: 0.9, ease: "power2.inOut" })
        .to(".cine-card", { yPercent: 0, duration: 1.3, ease: "expo.out" }, "-=0.35")
        .to(".cine-card", { top: 0, left: 0, right: 0, bottom: 0, borderRadius: 0, duration: 1.0, ease: "power3.inOut" }, "-=0.15")
        .to(".cine-ghostword", { autoAlpha: 1, y: 0, duration: 1.0 }, "-=0.4")
        // shirt screen flips into the CENTRE of the screen
        .to(".cine-stagewrap", { autoAlpha: 1, rotationX: 0, scale: 1, duration: 1.4, ease: "expo.out" }, "-=0.7")
        // its elements arrive one by one
        .to(".cine-kp", { scale: 1, autoAlpha: 1, stagger: 0.05, duration: 0.4, ease: "back.out(2)" }, "-=0.5")
        .to(".cine-line-draw", { strokeDashoffset: 0, stagger: 0.08, duration: 0.5, ease: "power2.out" }, "-=0.2")
        .to(".cine-pomlabel", { autoAlpha: 1, scale: 1, stagger: 0.05, duration: 0.32 }, "-=0.1")
        .to(".cine-badge", { autoAlpha: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.55, ease: "back.out(1.4)" }, "-=0.05")
        // screen eases DOWN; title + copy rise in above it
        .to(".cine-stagewrap", { y: 0, duration: 1.2, ease: "power3.inOut" }, "+=0.15")
        .to(".cine-hero-el", { autoAlpha: 1, y: 0, stagger: 0.09, duration: 0.8, ease: "power3.out" }, "<0.1")
        // header drops down last
        .to(".cine-header", { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" }, "-=0.3");
    }, root);

    const speedUp = () => {
      if (ready.current || !tl.current) return;
      gsap.to(tl.current, { timeScale: 3.4, duration: 0.5, ease: "power2.out", overwrite: true });
    };
    window.addEventListener("wheel", speedUp, { passive: true });
    window.addEventListener("touchmove", speedUp, { passive: true });
    window.addEventListener("pointerdown", speedUp);
    window.addEventListener("keydown", speedUp);

    const onMove = (e: MouseEvent) => {
      if (reduce || !ready.current || !tilt.current) return;
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(tilt.current, { rotateY: x * 6, rotateX: -y * 6, ease: "power3.out", duration: 1.1 });
      });
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("wheel", speedUp);
      window.removeEventListener("touchmove", speedUp);
      window.removeEventListener("pointerdown", speedUp);
      window.removeEventListener("keydown", speedUp);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={root} className="hero-root relative min-h-screen w-full overflow-hidden" style={{ perspective: "1600px", background: "var(--hb)", color: "var(--ink)" }}>
      <div className="cine-vignette" aria-hidden />
      <div className="cine-grain" aria-hidden />

      {/* The card: slides up, then fills the screen */}
      <div className="cine-card">
        <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full opacity-[0.2]" style={{ background: "radial-gradient(circle,var(--glow1),transparent 65%)" }} />
        <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full opacity-[0.12]" style={{ background: "radial-gradient(circle,var(--glow2),transparent 65%)" }} />
        <span aria-hidden className="cine-ghostword cine-ghost cine-systext cine-init pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[19vw] font-black leading-none tracking-tighter">
          MAGICQC
        </span>
      </div>

      {/* Header */}
      <header className="cine-header absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-24 max-w-[1320px] items-center justify-between px-7">
          <img src={theme === "dark" ? "/assets/brand/logo-wide-light.png" : "/assets/brand/logo-wide.png"} alt="Robionix Technologies" className="h-12 w-auto lg:h-14" />
          <nav className="hidden items-center gap-10 text-[15px] font-medium lg:flex">
            {["Platform", "Vision AI", "MagicQC", "Company"].map((n) => (
              <a key={n} href="#" className="t-soft transition-colors hover:[color:var(--ink)]">{n}</a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <span className="hidden h-6 w-px bg-[var(--border)] lg:block" />
            <button type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} className="cine-glass flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-y-0.5">
              {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="t-ink"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" strokeLinecap="round" /></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="t-ink"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" strokeLinejoin="round" /></svg>
              )}
            </button>
            <a href="#contact" className="cine-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5">Book a meeting</a>
          </div>
        </div>
      </header>

      {/* Intro loader */}
      <div className="cine-intro pointer-events-none absolute inset-x-0 top-0 z-40 flex h-screen flex-col items-center justify-center gap-3 px-6 text-center" style={{ perspective: "900px" }}>
        <p className="cine-intro-1 cine-systext text-xs font-semibold uppercase tracking-[0.34em]" style={{ color: "var(--kicker)" }}>Robionix · MagicQC</p>
        <h2 className="cine-intro-1 cine-systext cine-silver pb-[0.14em] text-[clamp(2.4rem,6.6vw,5.2rem)] font-extrabold leading-[1.12] tracking-tight">We taught the factory</h2>
        <h2 className="cine-intro-2 cine-systext t-accent pb-[0.14em] text-[clamp(2.7rem,7.6vw,6rem)] font-extrabold leading-[1.12] tracking-tight">to see.</h2>
      </div>

      {/* Content */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-[1180px] flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
        <p className="cine-hero-el cine-init relative inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em]" style={{ borderColor: "var(--border)", color: "var(--ink-soft)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" /> Vision AI · Robotics · Industrial ERP
        </p>

        <h1 className="cine-hero-el cine-systext cine-init relative mt-6 max-w-[20ch] text-[clamp(2.2rem,4.4vw,3.7rem)] font-extrabold leading-[1.08] tracking-[-0.02em] t-ink">
          Systems that see, measure, and run the{" "}
          <span className="relative whitespace-nowrap t-accent">factory floor
            <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-amber-500/70" />
          </span>
        </h1>

        <p className="cine-hero-el cine-init relative mt-5 max-w-[38rem] text-base leading-relaxed t-soft md:text-lg">
          Robionix engineers vision-driven automation end to end. MagicQC reads every garment to the
          millimetre with computer vision, and the ERP around it turns that data into throughput.
        </p>

        <div className="cine-stagewrap cine-init relative mt-10 w-full max-w-[760px]" style={{ transformStyle: "preserve-3d" }}>
          <div ref={tilt} className="relative" style={{ transformStyle: "preserve-3d" }}>
            <div className="cine-stage relative overflow-hidden rounded-[20px] p-3">
              <div className="mb-2 flex items-center gap-2 px-2 pt-1">
                <span className="h-2 w-2 rounded-full bg-[#F0A800]/80" />
                <span className="h-2 w-2 rounded-full bg-[#34D399]/80" />
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--border)" }} />
                <span className="ml-2 font-mono text-[10px] uppercase tracking-widest t-faint">magicqc · vision measurement · table 1</span>
                <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#34D399]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#34D399]" /> live
                </span>
              </div>

              <div className="relative aspect-[1376/768] w-full overflow-hidden rounded-[12px]">
                <img src="/assets/magicqc/garment-flatlay.webp" alt="Garment laid flat for automated computer-vision size measurement" className="absolute inset-0 h-full w-full object-cover" />
                <div className="cine-scan pointer-events-none absolute inset-x-0 top-0 z-20 h-1/3" style={{ background: "linear-gradient(180deg,transparent,rgba(45,212,191,.10) 70%,rgba(45,212,191,.5))" }} />

                <svg viewBox="0 0 1376 768" className="absolute inset-0 z-10 h-full w-full" fill="none">
                  {POMS.map((p) => (
                    <g key={p.id}>
                      <line className="cine-line-draw" x1={p.a[0]} y1={p.a[1]} x2={p.b[0]} y2={p.b[1]} stroke={p.color} strokeWidth={2.5} strokeDasharray="1100" strokeDashoffset="1100" style={{ filter: `drop-shadow(0 0 5px ${p.color}aa)` }} />
                      {[p.a, p.b].map((pt, i) => (
                        <g key={i} className="cine-kp">
                          <circle cx={pt[0]} cy={pt[1]} r={9} fill={p.color} opacity={0.2} />
                          <circle cx={pt[0]} cy={pt[1]} r={4.5} fill="#04141d" stroke={p.color} strokeWidth={2.5} />
                        </g>
                      ))}
                    </g>
                  ))}
                </svg>

                {POMS.map((p) => (
                  <div key={p.id} className="cine-pomlabel absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-md px-1.5 py-0.5 font-mono text-[10px] font-semibold leading-none" style={{ left: `${(p.l[0] / 1376) * 100}%`, top: `${(p.l[1] / 768) * 100}%`, color: p.color, background: "rgba(2,10,16,.78)", border: `1px solid ${p.color}55` }}>
                    {p.label} {p.val}
                  </div>
                ))}
              </div>
            </div>

            <div className="cine-badge cine-init cine-glass absolute -left-5 -top-5 z-40 hidden items-center gap-2 rounded-xl px-3 py-2 sm:flex lg:-left-12" style={{ transform: "translateZ(70px)" }}>
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#34D399]" />
              <span className="font-mono text-[10px] uppercase tracking-widest t-ink">CV measuring</span>
            </div>
            <div className="cine-badge cine-init cine-glass absolute -right-5 -top-6 z-40 hidden rounded-xl px-4 py-3 text-left md:block lg:-right-12" style={{ transform: "translateZ(90px)" }}>
              <p className="font-mono text-[10px] uppercase tracking-wider t-faint">Per piece</p>
              <p className="text-lg font-semibold t-ink">~3<span className="text-sm font-normal t-soft">s</span></p>
              <p className="font-mono text-[9px] uppercase tracking-wider text-[#34D399]">vs ~90s manual</p>
            </div>
            <div className="cine-badge cine-init cine-glass absolute -bottom-7 -right-4 z-40 flex items-center gap-1.5 rounded-xl px-3 py-2 lg:-right-10" style={{ transform: "translateZ(80px)" }}>
              <span className="font-mono text-sm font-bold text-[#34D399]">✓ 6/6</span>
              <span className="font-mono text-[10px] uppercase tracking-widest t-soft">POM Pass</span>
            </div>
            <div className="cine-badge cine-init cine-glass absolute -bottom-9 -left-6 z-40 hidden w-[240px] overflow-hidden rounded-xl lg:block lg:-left-16" style={{ transform: "translateZ(60px)" }}>
              <div className="flex items-center gap-1.5 px-3 py-1.5" style={{ borderBottom: "1px solid var(--glass-border)" }}>
                <span className="h-1.5 w-1.5 rounded-full bg-[#F0A800]" />
                <span className="font-mono text-[9px] uppercase tracking-widest t-faint">operator panel</span>
              </div>
              <img src="/assets/magicqc/operator-panel.webp" alt="MagicQC operator panel" className="block w-full" />
            </div>
          </div>
        </div>

        <div className="cine-hero-el cine-init relative mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="cine-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5">
            Book a meeting <span aria-hidden>→</span>
          </a>
          <a href="#magicqc" className="cine-glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium t-ink transition-transform duration-200 hover:-translate-y-0.5">
            See MagicQC in action
          </a>
        </div>

        <div className="cine-hero-el cine-init relative mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] t-faint">Tolerance profiles</span>
          {["Under Armour", "Reebok", "Zara", "Pull&Bear", "Trutex"].map((b) => (
            <span key={b} className="text-sm font-semibold t-soft">{b}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
