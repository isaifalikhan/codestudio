'use client';

import { AiToolShared } from '../ai-tool-shared';

export default function AiPlagiarismCheckerWidget() {
  return <AiToolShared tool="plagiarism-checker" label="Your draft" placeholder="Paste your own draft to find passages that read as generic or mechanical" buttonLabel="Check my draft" />;
}
