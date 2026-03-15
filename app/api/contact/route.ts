import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.RESEND_TO_EMAIL || 'hello@codexstudio.com';

    const text = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      company ? `Company: ${company.trim()}` : null,
      budget ? `Budget: ${budget}` : null,
      projectType ? `Project Type: ${projectType}` : null,
      '',
      'Message:',
      message.trim(),
    ]
      .filter(Boolean)
      .join('\n');

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email.trim(),
      subject: `[CodexStudio] Contact from ${name.trim()}`,
      text,
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
