"use client";

import { useEffect, useRef } from "react";

const HALF = 19; // half the 38px reticle, so its centre sits exactly on the pointer

/* A computer-vision "detection reticle" that tracks the pointer exactly and locks
   onto interactive elements. Desktop / fine-pointer only, GPU-cheap. */
export default function CursorTracker() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!fine || reduce || !el) return;

    let tx = 0, ty = 0, raf = 0, pending = false, shown = false;

    const apply = () => {
      // pixel offset (not translate -50%) so the CSS scale on lock stays centred on the cursor
      el.style.transform = `translate3d(${tx - HALF}px, ${ty - HALF}px, 0)`;
      pending = false;
    };
    const onMove = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (!shown) { shown = true; el.style.opacity = "1"; }
      if (!pending) { pending = true; raf = requestAnimationFrame(apply); }
    };
    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest("a,button,[role=button],input,textarea,label,select,summary");
      el.classList.toggle("cursor-lock", !!t);
    };
    const onDown = () => el.classList.add("cursor-down");
    const onUp = () => el.classList.remove("cursor-down");
    const onLeave = () => { el.style.opacity = "0"; };
    const onEnter = () => { if (shown) el.style.opacity = "1"; };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="cursor-reticle" style={{ opacity: 0 }}>
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" stroke="#F0A800" strokeWidth="2" strokeLinecap="round">
        <path d="M3 11V3h8" />
        <path d="M27 3h8v8" />
        <path d="M35 27v8h-8" />
        <path d="M11 35H3v-8" />
        <circle cx="19" cy="19" r="1.4" fill="#F0A800" stroke="none" />
      </svg>
    </div>
  );
}
