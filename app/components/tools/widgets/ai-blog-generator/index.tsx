'use client';

import { AiToolShared } from '../ai-tool-shared';

export default function AiBlogGeneratorWidget() {
  return <AiToolShared tool="blog-generator" label="Topic and keywords" placeholder="e.g. Why small businesses need a website. Keywords: web design, SEO, conversions" buttonLabel="Generate post" />;
}
