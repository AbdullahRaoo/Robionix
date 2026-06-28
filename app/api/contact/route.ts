import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "awaisfrombit@gmail.com";

  let body: { name?: string; company?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const { name = "", company = "", email = "", message = "" } = body;

  if (!email || !message) {
    return NextResponse.json({ error: "Email and message are required." }, { status: 400 });
  }

  // No real key yet: accept and log, so the UI works end-to-end before launch.
  if (!key || key.startsWith("re_sample")) {
    console.log("[contact] simulated (set RESEND_API_KEY to send for real):", { name, company, email, message });
    return NextResponse.json({ ok: true, simulated: true });
  }

  const html = `
    <h2>New enquiry from the Robionix site</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Robionix Website <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `New enquiry from ${name || email}`,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    return NextResponse.json({ error: "Could not send. " + detail.slice(0, 200) }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}
