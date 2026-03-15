'use client';

import React, { useState, useCallback } from 'react';

export default function MetaTagGeneratorWidget() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [siteName, setSiteName] = useState('CodexStudio');
  const [twitterHandle, setTwitterHandle] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    const lines = [
      '<!-- Primary Meta Tags -->',
      `<title>${title || 'Page Title'}</title>`,
      `<meta name="title" content="${(title || 'Page Title').replace(/"/g, '&quot;')}" />`,
      `<meta name="description" content="${(description || '').replace(/"/g, '&quot;')}" />`,
      '',
      '<!-- Open Graph / Facebook -->',
      '<meta property="og:type" content="website" />',
      `<meta property="og:url" content="${url || 'https://example.com/'}" />`,
      `<meta property="og:title" content="${(title || 'Page Title').replace(/"/g, '&quot;')}" />`,
      `<meta property="og:description" content="${(description || '').replace(/"/g, '&quot;')}" />`,
      `<meta property="og:image" content="${imageUrl || ''}" />`,
      `<meta property="og:site_name" content="${(siteName || '').replace(/"/g, '&quot;')}" />`,
      '',
      '<!-- Twitter -->',
      '<meta name="twitter:card" content="summary_large_image" />',
      twitterHandle ? `<meta name="twitter:site" content="@${twitterHandle.replace('@', '')}" />` : '',
      `<meta name="twitter:title" content="${(title || 'Page Title').replace(/"/g, '&quot;')}" />`,
      `<meta name="twitter:description" content="${(description || '').replace(/"/g, '&quot;')}" />`,
      `<meta name="twitter:image" content="${imageUrl || ''}" />`,
    ].filter(Boolean);
    setOutput(lines.join('\n'));
  }, [title, description, url, imageUrl, siteName, twitterHandle]);

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-1">Page title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="My Page Title"
            className="w-full px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-1">Page URL</span>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/page"
            className="w-full px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label className="md:col-span-2">
          <span className="text-sm font-medium text-[#2F281D] block mb-1">Meta description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description (150-160 chars)"
            className="w-full px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC] min-h-[80px]"
            maxLength={160}
          />
          <span className="text-xs text-[#2F281D]/50">{description.length}/160</span>
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-1">Image URL (OG/Twitter)</span>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/og-image.jpg"
            className="w-full px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-1">Site name</span>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            placeholder="CodexStudio"
            className="w-full px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#2F281D] block mb-1">Twitter @handle</span>
          <input
            type="text"
            value={twitterHandle}
            onChange={(e) => setTwitterHandle(e.target.value)}
            placeholder="codexstudio"
            className="w-full px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]"
          />
        </label>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={generate}
          className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C]"
        >
          Generate meta tags
        </button>
        {output && (
          <button
            type="button"
            onClick={copy}
            className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold hover:bg-[#2F281D]/5"
          >
            {copied ? 'Copied!' : 'Copy HTML'}
          </button>
        )}
      </div>
      {output && (
        <pre className="w-full p-4 rounded-xl bg-[#2F281D]/5 border border-[#2F281D]/10 text-[#2F281D] font-mono text-sm overflow-auto whitespace-pre-wrap">
          {output}
        </pre>
      )}
    </div>
  );
}
