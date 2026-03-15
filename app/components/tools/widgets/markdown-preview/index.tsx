'use client';

import React, { useState, useEffect } from 'react';

const DEFAULT_MD = `# Heading 1
## Heading 2

**Bold** and *italic* text.

- List item 1
- List item 2

[Link](https://example.com)

\`code\` and \`\`\`block\`\`\`
`;

function simpleMarkdownToHtml(md: string): string {
  let html = md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-[#997F6C] underline">$1</a>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => '<ul>' + m + '</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br/>');
  return '<p>' + html + '</p>';
}

export default function MarkdownPreviewWidget() {
  const [md, setMd] = useState(DEFAULT_MD);
  const [html, setHtml] = useState('');
  useEffect(() => {
    if (typeof window === 'undefined') return;
    import('marked').then(({ marked }) => {
      setHtml(marked.parse(md, { async: false }) as string);
    }).catch(() => setHtml(simpleMarkdownToHtml(md)));
  }, [md]);

  const downloadHtml = () => {
    const blob = new Blob([`<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>${html}</body></html>`], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'page.html';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <label className="text-sm font-medium text-[#2F281D] block mb-2">Markdown</label>
        <textarea
          value={md}
          onChange={(e) => setMd(e.target.value)}
          className="w-full min-h-[320px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#997F6C]/50"
        />
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-[#2F281D]">Preview</label>
          <button
            type="button"
            onClick={downloadHtml}
            className="text-sm px-3 py-1 rounded bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C]"
          >
            Download HTML
          </button>
        </div>
        <div
          className="w-full min-h-[320px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] overflow-auto prose prose-[#2F281D] max-w-none"
          dangerouslySetInnerHTML={{ __html: html || '<p class="text-[#2F281D]/50">Rendering...</p>' }}
        />
      </div>
    </div>
  );
}
