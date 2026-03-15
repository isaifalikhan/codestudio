'use client';

import { AiToolShared } from '../ai-tool-shared';

export default function AiBusinessNameWidget() {
  return <AiToolShared tool="business-name" label="Describe your business or industry" placeholder="e.g. Vegan bakery in Austin, eco-friendly packaging" buttonLabel="Generate names" />;
}
