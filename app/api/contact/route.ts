import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, budget, projectType, message, company, website } = body;

    // Honeypot: if "website" is filled, treat as bot
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name is required (at least 2 characters).' },
        { status: 400 }
      );
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Valid email is required.' },
        { status: 400 }
      );
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message is required (at least 10 characters).' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'CodexStudio Contact <onboarding@resend.dev>';
    const toEmail = process.env.RESEND_TO_EMAIL || 'your-real-email@gmail.com';

    const n = escapeHtml(name.trim());
    const e = escapeHtml(email.trim());
    const c = company && String(company).trim() ? escapeHtml(String(company).trim()) : '—';
    const pt = projectType ? escapeHtml(String(projectType)) : '—';
    const b = budget ? escapeHtml(String(budget)) : '—';
    const m = escapeHtml(message.trim());

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${n}</p>
      <p><strong>Email:</strong> ${e}</p>
      <p><strong>Company:</strong> ${c}</p>
      <p><strong>Project Type:</strong> ${pt}</p>
      <p><strong>Budget:</strong> ${b}</p>
      <p><strong>Message:</strong></p>
      <p>${m.replace(/\n/g, '<br />')}</p>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email.trim(),
      subject: `New Project Enquiry from ${name.trim()}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or WhatsApp us.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Contact API error:', e);
    return NextResponse.json(
      { error: 'Something went wrong. Please WhatsApp us directly.' },
      { status: 500 }
    );
  }
}
