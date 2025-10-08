export const runtime = "nodejs"; // Nodemailer benötigt Node-Laufzeit

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (m) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]!)
  );
}

// Healthcheck: /api/contact
export async function GET() {
  return NextResponse.json({ ok: true, route: "/api/contact", method: "GET" }, { status: 200 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const honeypot = String(body?.honeypot ?? "");

    // Honeypot nur blocken, wenn befüllt
    if (honeypot && honeypot.trim() !== "") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const port = Number(process.env.SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port,
      secure: port === 465, // 465 = SSL, 587 = STARTTLS
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    // früh scheitern bei TLS/Auth/Port-Problemen
    await transporter.verify();

    const info = await transporter.sendMail({
      to: process.env.MAIL_TO!,
      from: process.env.MAIL_FROM || process.env.SMTP_USER!,
      replyTo: email,
      subject: `Kontaktformular: ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
      html: `
        <h3>Neue Kontaktanfrage</h3>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>E-Mail:</b> ${escapeHtml(email)}</p>
        <p><b>Nachricht:</b><br>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    console.log("Mail sent:", info.messageId);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    console.error("Mail error:", e);
    return NextResponse.json(
      { ok: false, error: e?.message || "Send failed" },
      { status: 500 }
    );
  }
}