'use client';

import { AiToolShared } from '../ai-tool-shared';

export default function AiSummarizerWidget() {
  return <AiToolShared tool="summarizer" label="Text to summarize" placeholder="Paste article, essay, or long text" buttonLabel="Summarize" />;
}
