'use client';

import { AiToolShared } from '../ai-tool-shared';

export default function AiParaphraserWidget() {
  return <AiToolShared tool="paraphraser" label="Text to rewrite (and tone: formal, casual, creative, academic)" placeholder="Paste your text and add desired tone, e.g. 'Make it more formal'" buttonLabel="Paraphrase" />;
}
