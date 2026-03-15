'use client';

import { AiToolShared } from '../ai-tool-shared';

export default function AiPlagiarismCheckerWidget() {
  return <AiToolShared tool="plagiarism-checker" label="Text to analyze" placeholder="Paste text to check for AI-generated or generic phrasing" buttonLabel="Analyze" />;
}
