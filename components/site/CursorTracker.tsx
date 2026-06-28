"use client";

import { useEffect, useRef } from "react";

/* A computer-vision "detection reticle" that follows the pointer and locks onto
   interactive elements. Desktop / fine-pointer only, GPU-cheap (one transform). */
export default function CursorTracker() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!fine || reduce || !el) return;

    let tx = window.innerWidth / 2, ty = window.innerHeight / 2, x = tx, y = ty;
    let raf = 0, shown = false;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (!shown) { shown = true; el.style.opacity = "1"; }
    };
    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest("a,button,[role=button],input,textarea,label,select");
      el.classList.toggle("cursor-lock", !!t);
    };
    const onDown = () => el.classList.add("cursor-down");
    const onUp = () => el.classList.remove("cursor-down");
    const onLeave = () => { el.style.opacity = "0"; shown = false; };

    const loop = () => {
      x += (tx - x) * 0.22; y += (ty - y) * 0.22;
      el.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="cursor-reticle" style={{ opacity: 0 }}>
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" stroke="#F0A800" strokeWidth="2" strokeLinecap="round">
        <path className="cr-tl" d="M3 11V3h8" />
        <path className="cr-tr" d="M27 3h8v8" />
        <path className="cr-br" d="M35 27v8h-8" />
        <path className="cr-bl" d="M11 35H3v-8" />
        <circle cx="19" cy="19" r="1.4" fill="#F0A800" stroke="none" />
      </svg>
    </div>
  );
}
