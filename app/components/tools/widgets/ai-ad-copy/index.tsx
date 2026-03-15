'use client';

import { AiToolShared } from '../ai-tool-shared';

export default function AiAdCopyWidget() {
  return <AiToolShared tool="ad-copy" label="Product/service and benefits" placeholder="e.g. Fitness app. Benefits: track workouts, meal plans, 24/7 coach" buttonLabel="Generate ad copy" />;
}
