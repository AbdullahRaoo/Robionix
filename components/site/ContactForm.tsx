"use client";

import { useState } from "react";

type State = "idle" | "sending" | "ok" | "error";

const inputCls = "rounded-lg border bg-transparent px-4 py-3 text-sm t-ink outline-none placeholder:[color:var(--ink-faint)] focus:[border-color:var(--accent)]";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    setState("sending");
    setErr("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setState("ok");
      e.currentTarget.reset();
    } catch (e2) {
      setErr((e2 as Error).message);
      setState("error");
    }
  }

  if (state === "ok") {
    return (
      <div className="cine-glass flex flex-col items-center gap-3 rounded-2xl p-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "var(--accent)" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#04151d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </span>
        <h2 className="cine-systext text-xl font-bold t-ink">Message sent</h2>
        <p className="text-sm t-soft">Thanks. We&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="cine-glass flex flex-col gap-4 rounded-2xl p-7 lg:p-9" aria-label="Contact form">
      <h2 className="cine-systext text-xl font-bold t-ink">Send a message</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" placeholder="Name" autoComplete="name" className={inputCls} style={{ borderColor: "var(--border)" }} />
        <input name="company" placeholder="Company" autoComplete="organization" className={inputCls} style={{ borderColor: "var(--border)" }} />
      </div>
      <input name="email" type="email" required placeholder="Email" autoComplete="email" className={inputCls} style={{ borderColor: "var(--border)" }} />
      <textarea name="message" required placeholder="What would you like to automate?" rows={4} className={`resize-none ${inputCls}`} style={{ borderColor: "var(--border)" }} />
      <button type="submit" disabled={state === "sending"} className="cine-cta mt-1 inline-flex items-center justify-center gap-2 self-start rounded-full px-7 py-3 text-sm font-semibold text-petrol-950 transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-70">
        {state === "sending" ? "Sending…" : <>Send message <span aria-hidden>→</span></>}
      </button>
      {state === "error" && <p className="text-sm" style={{ color: "var(--color-danger-600)" }}>{err}</p>}
      <p className="font-mono text-[10px] uppercase tracking-wider t-faint">We reply within one business day.</p>
    </form>
  );
}
