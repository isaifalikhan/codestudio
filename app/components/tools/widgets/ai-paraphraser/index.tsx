'use client';

import { AiToolShared } from '../ai-tool-shared';

export default function AiParaphraserWidget() {
  return <AiToolShared tool="paraphraser" label="Your text to rewrite (and tone: formal, casual, simpler, shorter)" placeholder="Paste your draft and add the tone you want, e.g. 'Make it more formal'" buttonLabel="Rewrite" />;
}
