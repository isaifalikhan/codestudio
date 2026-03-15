'use client';

import React, { useState, useCallback } from 'react';

function buildSitemapXml(urls: string[], baseUrl: string): string {
  const today = new Date().toISOString().split('T')[0];
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls
      .filter((u) => u.trim())
      .map((u) => {
        const full = u.startsWith('http') ? u : `${baseUrl.replace(/\/$/, '')}/${u.replace(/^\//, '')}`;
        return `  <url><loc>${full}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`;
      }),
    '</urlset>',
  ];
  return lines.join('\n');
}

export default function SitemapGeneratorWidget() {
  const [baseUrl, setBaseUrl] = useState('https://example.com');
  const [urlList, setUrlList] = useState('/\n/about\n/contact\n/blog');
  const [output, setOutput] = useState('');

  const generate = useCallback(() => {
    const urls = urlList.split(/\r?\n/).map((u) => u.trim()).filter(Boolean);
    setOutput(buildSitemapXml(urls, baseUrl));
  }, [baseUrl, urlList]);

  const download = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'application/xml' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'sitemap.xml';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="space-y-6">
      <label className="block">
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Website base URL</span>
        <input
          type="url"
          value={baseUrl}
          onChange={(e) => setBaseUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-[#2F281D] block mb-2">URLs (one per line)</span>
        <textarea
          value={urlList}
          onChange={(e) => setUrlList(e.target.value)}
          placeholder="/&#10;/about&#10;/contact&#10;/blog"
          className="w-full min-h-[180px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] font-mono text-sm resize-y"
        />
      </label>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={generate}
          className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C]"
        >
          Generate sitemap
        </button>
        {output && (
          <button
            type="button"
            onClick={download}
            className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold hover:bg-[#2F281D]/5"
          >
            Download sitemap.xml
          </button>
        )}
      </div>
      {output && (
        <pre className="w-full p-4 rounded-xl bg-[#2F281D]/5 border border-[#2F281D]/10 text-[#2F281D] font-mono text-xs overflow-auto max-h-[300px] whitespace-pre-wrap">
          {output}
        </pre>
      )}
    </div>
  );
}
