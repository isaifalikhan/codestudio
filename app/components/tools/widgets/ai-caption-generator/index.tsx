'use client';

import { AiToolShared } from '../ai-tool-shared';

export default function AiCaptionGeneratorWidget() {
  return <AiToolShared tool="caption-generator" label="Describe your post or photo" placeholder="e.g. Team lunch at the new café, casual Friday" buttonLabel="Generate captions" />;
}
