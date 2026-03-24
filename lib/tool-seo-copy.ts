/**
 * Generates unique, substantial copy for every tool page (AdSense / SEO).
 */

export type ToolSeoInput = {
  slug: string;
  name: string;
  category: string;
  emoji: string;
  tagline: string;
  description: string;
  keywords: string[];
  buildType: 'client';
};

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function buildHowToSteps(tool: ToolSeoInput): [string, string, string] {
  const c = tool.category;
  const open = `Open the ${tool.name} above`;

  if (c === 'Image Tools' || c === 'Image Editing') {
    return [
      `${open} and upload an image from your device (or use the canvas controls if the tool supports drawing).`,
      `Adjust quality, dimensions, format, or other options so the output matches what you need for the web, print, or social media.`,
      `Download the processed image or copy the result — no account is required, and your file stays on your device until you save it.`,
    ];
  }
  if (c === 'PDF Tools') {
    return [
      `${open} and add one or more PDF or document files using the upload area.`,
      `Choose actions such as merge order, split ranges, compression level, or target format, depending on what this PDF tool offers.`,
      `Download the new PDF or exported files immediately; repeat the process for additional batches without limits from our side.`,
    ];
  }
  if (c === 'Text Tools' || c === 'Writing') {
    return [
      `${open} and paste your text into the editor, or type directly in the input area.`,
      `Use the tool’s options (case style, counters, cleanup rules, etc.) to transform or analyze your content in real time.`,
      `Copy the result to your clipboard or download it, then use it in your document, CMS, code editor, or social post.`,
    ];
  }
  if (c === 'Security Tools') {
    return [
      `${open} and enter or generate the text you need to protect (or paste a password only if you are comfortable doing so locally).`,
      `Adjust length, character sets, encoding mode, or algorithm options so the output matches your security policy.`,
      `Copy the generated value or read the analysis on screen; clear the page when finished — nothing is stored on our servers when processing is client-side.`,
    ];
  }
  if (c === 'Developer Tools') {
    return [
      `${open} and paste JSON, CSS, HTML, tokens, URLs, or other technical input into the provided field.`,
      `Run format, minify, decode, convert, or inspect actions and review the highlighted output or error messages.`,
      `Copy the transformed code or data into your IDE, ticket, or documentation, or download it if the tool offers an export.`,
    ];
  }
  if (c === 'Calculators' || c === 'Finance' || c === 'Health') {
    return [
      `${open} and enter your numbers: amounts, dates, measurements, or rates as labeled on the form.`,
      `Review the calculated totals, schedules, or health metrics shown on screen and adjust inputs to compare scenarios.`,
      `Note or screenshot results for your records, or reset fields to run another calculation — all instantly in the browser.`,
    ];
  }
  if (c === 'SEO & Marketing') {
    return [
      `${open} and fill in your page title, URL, keywords, or content, depending on what this marketing tool requires.`,
      `Generate sitemaps, meta tags, density reports, or policy text, then scan the preview for anything you want to tweak.`,
      `Copy the HTML, download XML, or save the text into your site, CMS, or ad platform — ready to publish.`,
    ];
  }
  if (c === 'Video Tools') {
    return [
      `${open} and paste a supported media link or upload a file, following any on-screen format or quality choices.`,
      `Select output type (such as MP4, MP3, GIF, or thumbnail size) and start conversion or download where applicable.`,
      `Save the file to your device; use a private window if you prefer not to keep history for sensitive downloads.`,
    ];
  }
  if (c === 'Social Media') {
    return [
      `${open} and describe your niche, audience, or topic in the fields provided so the generator can tailor suggestions.`,
      `Review the generated bios, captions, hashtags, banners, or calendar entries and pick the version that fits your brand voice.`,
      `Copy text or download assets, then paste directly into Instagram, TikTok, LinkedIn, or your scheduling tool.`,
    ];
  }
  if (c === 'AI Tools') {
    return [
      `${open} and enter a clear prompt: topic, tone, product details, or job requirements, depending on the AI workflow.`,
      `Wait for the generated draft (blog, email, caption, etc.), then skim for facts and edit to match your brand.`,
      `Copy the final text or export it; for client work, always verify accuracy before publishing.`,
    ];
  }
  if (c === 'Business') {
    return [
      `${open} and enter your list, URL, time zone, meeting parameters, or checklist items as prompted.`,
      `Use controls such as timers, pickers, or converters to complete the task in one sitting.`,
      `Copy or print the outcome, or bookmark the page for recurring use during your workweek.`,
    ];
  }
  if (c === 'Education') {
    return [
      `${open} and type grades, citations, numbers, study terms, or puzzle settings as the tool describes.`,
      `Review grades, conversions, citations, pronunciation, or generated puzzles on screen.`,
      `Save or print results for assignments, or reset to practice another round — ideal for students and teachers.`,
    ];
  }

  return [
    `${open} and provide the input requested (text, numbers, or files) using the labeled fields.`,
    `Adjust any optional settings so the output format and detail level match your project.`,
    `Copy, download, or share the result, then clear the form if you want to start a fresh session.`,
  ];
}

export function buildLongDescription(tool: ToolSeoInput): string {
  const kw = tool.keywords.length ? tool.keywords.join(', ') : tool.tagline;
  const p1 = `The ${tool.name} is a free online utility from CodexStudio, listed under ${tool.category}. ${tool.description} People discover ${tool.name} while searching for related topics such as ${kw}, because it produces fast answers without installing desktop software or registering an account. The tool’s headline promise—“${tool.tagline}”—reflects how we designed the workflow: minimal friction, immediate feedback, and output you can use in real projects.`;

  const p2 = `Whether you are based in Islamabad, working with a remote team, or serving customers worldwide, ${tool.name} helps you finish a repetitive task in minutes instead of opening heavy suites. The layout stays approachable for beginners, yet it still satisfies technical users who only need a dependable utility between meetings, classes, or deployment windows. Because ${tool.name} runs in a modern web browser, you can use it on Windows, macOS, Linux, Android, or iOS without worrying about operating-system lock-in.`;

  const p3 = `Typical scenarios include preparing assets before publishing online, double-checking copy length, validating snippets of data, converting files for collaborators, or estimating numbers before you sign a contract. Students use ${tool.name} for coursework; freelancers use it between client deliverables; agencies keep it bookmarked for quick QA. When the underlying technology supports fully client-side processing, your drafts stay on your device—an important consideration whenever you handle personal information, unreleased creative work, or confidential business figures.`;

  const p4 = `Compared with traditional installable programs, browser-based tools update automatically, avoid license keys, and do not consume permanent disk space. Bookmark ${tool.name} on mobile for field work or on desktop for daily production. CodexStudio maintains a large library of complementary utilities, so you can move from ${tool.name} to another free tool in the same category when your workflow expands. Each page is crafted with readable headings, clear instructions, and the contextual FAQs below so reviewers and visitors alike understand the value of the page—not just the widget.`;

  const p5 = `CodexStudio is a web development agency in Islamabad, Pakistan, building modern websites, dashboards, and custom internal tools for organizations that outgrow spreadsheets. ${tool.name} demonstrates how focused product thinking and performance-conscious engineering come together on the open web. If you ever need a private version of this workflow—authentication, team roles, API integrations, or branded design—contact us for a free consultation. Until then, we hope ${tool.name} saves you time every week and becomes a trusted part of your toolkit.`;

  const text = [p1, p2, p3, p4, p5].join('\n\n');
  if (wordCount(text) < 200) {
    const extra = ` Additional detail: ${tool.name} emphasizes clarity and speed for ${tool.category}, combining ${tool.emoji} ease-of-use with practical defaults so you can complete tasks even when you are offline-capable after load.`;
    return text + extra;
  }
  return text;
}

export function enrichToolSeo<T extends ToolSeoInput>(tool: T) {
  return {
    ...tool,
    longDescription: buildLongDescription(tool),
    howToSteps: buildHowToSteps(tool),
  };
}
