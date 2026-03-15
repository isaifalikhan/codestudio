'use client';

import { AiToolShared } from '../ai-tool-shared';

export default function AiEmailWriterWidget() {
  return <AiToolShared tool="email-writer" label="What should the email say? (purpose, tone, key points)" placeholder="e.g. Follow-up after a meeting, formal, thank them and attach the proposal" buttonLabel="Write email" />;
}
