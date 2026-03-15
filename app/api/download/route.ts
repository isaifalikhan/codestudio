import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, platform } = body as { url?: string; platform?: string };
    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid URL.' }, { status: 400 });
    }
    // Optional: integrate ytdl-core for YouTube or RapidAPI for other platforms.
    // For now return a clear message so the UI remains functional.
    return NextResponse.json({
      error: 'Download service not configured. Add RAPIDAPI_KEY or YouTube integration in the server to enable direct downloads. You can still paste the link in a trusted third-party converter.',
    });
  } catch {
    return NextResponse.json({ error: 'Request failed.' }, { status: 500 });
  }
}
