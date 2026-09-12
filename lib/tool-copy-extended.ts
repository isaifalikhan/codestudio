/**
 * Hand-written page copy for the tools that previously fell through to the
 * generic template in tool-seo-copy.ts.
 *
 * That template produced five near-identical paragraphs for every tool with only
 * the name swapped in, which reads as scaled/spun content to both Google's spam
 * systems and AdSense's content review. Everything in these modules is specific
 * to the individual tool: what it actually does, the tradeoff or gotcha worth
 * knowing, and what people realistically use it for.
 *
 * Add a new batch by creating a module under lib/tool-copy/ that exports
 * LONG_DESCRIPTIONS and HOW_TO_STEPS, then registering it below.
 */

import * as essentials from '@/lib/tool-copy/essentials';
import * as developer from '@/lib/tool-copy/developer';
import * as videoSeo from '@/lib/tool-copy/video-seo';
import * as socialWriting from '@/lib/tool-copy/social-writing';
import * as financeAi from '@/lib/tool-copy/finance-ai';
import * as imageHealth from '@/lib/tool-copy/image-health';
import * as businessEducation from '@/lib/tool-copy/business-education';

const modules = [essentials, developer, videoSeo, socialWriting, financeAi, imageHealth, businessEducation];

export const EXTENDED_LONG_DESCRIPTIONS: Record<string, string> = Object.assign(
  {},
  ...modules.map((m) => m.LONG_DESCRIPTIONS)
);

export const EXTENDED_HOW_TO_STEPS: Record<string, [string, string, string]> = Object.assign(
  {},
  ...modules.map((m) => m.HOW_TO_STEPS)
);
