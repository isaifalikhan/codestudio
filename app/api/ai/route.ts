import { NextRequest, NextResponse } from 'next/server';

const PROMPTS: Record<string, string> = {
  'blog-generator': 'You are a professional blog writer. Write an 800-word SEO-friendly blog post draft with clear headings. Tone: informative and engaging.',
  'email-writer': 'You are a professional email writer. Write a clear, professional email based on the user request. Adapt tone (formal/casual) as requested.',
  'paraphraser': 'Rewrite the following text in a different tone while keeping the same meaning. Offer one version that matches the requested style (formal, casual, creative, or academic).',
  'summarizer': 'Summarize the following text concisely. Provide both bullet points and a short paragraph summary.',
  'grammar-checker': 'Check the following text for grammar, spelling, and clarity. Return the corrected text and list any changes made.',
  'ad-copy': 'Generate short, punchy ad copy for the given product/benefits. Include variants for Facebook/Instagram and Google Ads (headline + description).',
  'business-name': 'Generate 20 unique, brandable business name ideas for the described business. Include a one-line reason for each.',
  'caption-generator': 'Generate 5 engaging social media captions (Instagram/LinkedIn/TikTok style) for the given topic or photo description. Include relevant emojis and 3-5 hashtags.',
  'cover-letter': 'Write a professional cover letter based on the job description and candidate details provided. Keep it to one page.',
  'plagiarism-checker': 'Analyze the following text and indicate: 1) Likely human vs AI-generated (with confidence), 2) Any phrases that appear generic or template-like. Do not reproduce the text in full.',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { tool, input } = body as { tool?: string; input?: string };
    if (!tool || typeof input !== 'string') {
      return NextResponse.json({ error: 'Missing tool or input.' }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        text: 'AI is not configured. Add ANTHROPIC_API_KEY to your server environment to enable this tool. You can use the same prompt in ChatGPT or Claude directly.',
      });
    }

    const systemPrompt = PROMPTS[tool] || 'Respond helpfully and concisely to the user request.';
    const userMessage = input.slice(0, 15000);

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: `AI request failed: ${err}` }, { status: res.status });
    }

    const data = (await res.json()) as { content?: { type: string; text?: string }[] };
    const text = data.content?.find((c) => c.type === 'text')?.text ?? '';
    return NextResponse.json({ text });
  } catch (e) {
    console.error('AI API error:', e);
    return NextResponse.json({ error: 'Request failed. Try again later.' }, { status: 500 });
  }
}
