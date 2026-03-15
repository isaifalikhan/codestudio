'use client';

import { AiToolShared } from '../ai-tool-shared';

export default function AiGrammarCheckerWidget() {
  return <AiToolShared tool="grammar-checker" label="Text to check" placeholder="Paste your text for grammar and spelling check" buttonLabel="Check grammar" />;
}
