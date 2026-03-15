'use client';

import React, { useState, useEffect } from 'react';

const KEY = 'codestudio-notepad';

export default function OnlineNotepadWidget() {
  const [text, setText] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved != null) setText(saved);
    } catch (_) {}
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(KEY, text);
    } catch (_) {}
  }, [text]);

  return (
    <div className="space-y-4">
      <p className="text-sm text-[#2F281D]/70">Auto-saves in your browser. No account needed.</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
        className="w-full min-h-[320px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] resize-y focus:ring-2 focus:ring-[#997F6C] focus:border-[#997F6C]"
      />
    </div>
  );
}
