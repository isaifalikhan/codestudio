'use client';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

const widgets: Record<string, ComponentType> = {
  'word-counter': dynamic(() => import('./widgets/word-counter').then((m) => ({ default: m.default })), { ssr: false }),
  'character-counter': dynamic(() => import('./widgets/character-counter').then((m) => ({ default: m.default })), { ssr: false }),
  'case-converter': dynamic(() => import('./widgets/case-converter').then((m) => ({ default: m.default })), { ssr: false }),
  'lorem-ipsum': dynamic(() => import('./widgets/lorem-ipsum').then((m) => ({ default: m.default })), { ssr: false }),
  'text-to-slug': dynamic(() => import('./widgets/text-to-slug').then((m) => ({ default: m.default })), { ssr: false }),
  'remove-duplicate-lines': dynamic(() => import('./widgets/remove-duplicate-lines').then((m) => ({ default: m.default })), { ssr: false }),
  'password-generator': dynamic(() => import('./widgets/password-generator').then((m) => ({ default: m.default })), { ssr: false }),
  'password-strength-checker': dynamic(() => import('./widgets/password-strength-checker').then((m) => ({ default: m.default })), { ssr: false }),
  'hash-generator': dynamic(() => import('./widgets/hash-generator').then((m) => ({ default: m.default })), { ssr: false }),
  'base64-encoder': dynamic(() => import('./widgets/base64-encoder').then((m) => ({ default: m.default })), { ssr: false }),
  'json-formatter': dynamic(() => import('./widgets/json-formatter').then((m) => ({ default: m.default })), { ssr: false }),
  'css-minifier': dynamic(() => import('./widgets/css-minifier').then((m) => ({ default: m.default })), { ssr: false }),
  'js-minifier': dynamic(() => import('./widgets/js-minifier').then((m) => ({ default: m.default })), { ssr: false }),
  'html-formatter': dynamic(() => import('./widgets/html-formatter').then((m) => ({ default: m.default })), { ssr: false }),
  'color-picker': dynamic(() => import('./widgets/color-picker').then((m) => ({ default: m.default })), { ssr: false }),
  'regex-tester': dynamic(() => import('./widgets/regex-tester').then((m) => ({ default: m.default })), { ssr: false }),
  'url-encoder': dynamic(() => import('./widgets/url-encoder').then((m) => ({ default: m.default })), { ssr: false }),
  'meta-tag-generator': dynamic(() => import('./widgets/meta-tag-generator').then((m) => ({ default: m.default })), { ssr: false }),
  'markdown-preview': dynamic(() => import('./widgets/markdown-preview').then((m) => ({ default: m.default })), { ssr: false }),
  'age-calculator': dynamic(() => import('./widgets/age-calculator').then((m) => ({ default: m.default })), { ssr: false }),
  'bmi-calculator': dynamic(() => import('./widgets/bmi-calculator').then((m) => ({ default: m.default })), { ssr: false }),
  'percentage-calculator': dynamic(() => import('./widgets/percentage-calculator').then((m) => ({ default: m.default })), { ssr: false }),
  'tip-calculator': dynamic(() => import('./widgets/tip-calculator').then((m) => ({ default: m.default })), { ssr: false }),
  'currency-converter': dynamic(() => import('./widgets/currency-converter').then((m) => ({ default: m.default })), { ssr: false }),
  'unit-converter': dynamic(() => import('./widgets/unit-converter').then((m) => ({ default: m.default })), { ssr: false }),
  'qr-code-generator': dynamic(() => import('./widgets/qr-code-generator').then((m) => ({ default: m.default })), { ssr: false }),
  'keyword-density': dynamic(() => import('./widgets/keyword-density').then((m) => ({ default: m.default })), { ssr: false }),
  'meta-description-generator': dynamic(() => import('./widgets/meta-description-generator').then((m) => ({ default: m.default })), { ssr: false }),
  'privacy-policy-generator': dynamic(() => import('./widgets/privacy-policy-generator').then((m) => ({ default: m.default })), { ssr: false }),
  'sitemap-generator': dynamic(() => import('./widgets/sitemap-generator').then((m) => ({ default: m.default })), { ssr: false }),
  'image-compressor': dynamic(() => import('./widgets/image-compressor').then((m) => ({ default: m.default })), { ssr: false }),
  'image-resizer': dynamic(() => import('./widgets/image-resizer').then((m) => ({ default: m.default })), { ssr: false }),
  'image-converter': dynamic(() => import('./widgets/image-converter').then((m) => ({ default: m.default })), { ssr: false }),
  'background-remover': dynamic(() => import('./widgets/background-remover').then((m) => ({ default: m.default })), { ssr: false }),
  'favicon-generator': dynamic(() => import('./widgets/favicon-generator').then((m) => ({ default: m.default })), { ssr: false }),
  'pdf-compressor': dynamic(() => import('./widgets/pdf-compressor').then((m) => ({ default: m.default })), { ssr: false }),
  'merge-pdf': dynamic(() => import('./widgets/merge-pdf').then((m) => ({ default: m.default })), { ssr: false }),
  'pdf-to-jpg': dynamic(() => import('./widgets/pdf-to-jpg').then((m) => ({ default: m.default })), { ssr: false }),
  'split-pdf': dynamic(() => import('./widgets/split-pdf').then((m) => ({ default: m.default })), { ssr: false }),
  'word-to-pdf': dynamic(() => import('./widgets/word-to-pdf').then((m) => ({ default: m.default })), { ssr: false }),
};

export function ToolWidgetLoader({ slug }: { slug: string }) {
  const Widget = widgets[slug];
  if (!Widget) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
        <p className="font-semibold">This tool is being updated.</p>
        <p className="text-sm mt-1">Please try again later or browse other tools.</p>
      </div>
    );
  }
  return <Widget />;
}
