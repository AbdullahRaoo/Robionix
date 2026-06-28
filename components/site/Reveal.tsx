"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

type Variant = "up" | "scale" | "left" | "right";

function hiddenTransform(v: Variant, y: number) {
  switch (v) {
    case "scale": return "translateY(14px) scale(0.965)";
    case "left": return "translateX(-34px)";
    case "right": return "translateX(34px)";
    default: return `translateY(${y}px)`;
  }
}

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: Variant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVis(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVis(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : hiddenTransform(variant, y),
        transition: `opacity .7s ${EASE} ${delay}ms, transform .85s ${EASE} ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
