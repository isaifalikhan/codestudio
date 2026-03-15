'use client';

import React, { useState, useEffect } from 'react';

const KEY = 'codestudio-social-calendar';

export default function SocialMediaCalendarWidget() {
  const [posts, setPosts] = useState<{ date: string; platform: string; text: string }[]>([]);
  const [date, setDate] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [text, setText] = useState('');

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) setPosts(arr);
      }
    } catch (_) {}
  }, []);

  useEffect(() => {
    try {
      if (posts.length) localStorage.setItem(KEY, JSON.stringify(posts));
    } catch (_) {}
  }, [posts]);

  const add = () => {
    if (!date || !text.trim()) return;
    setPosts((p) => [...p, { date, platform, text: text.trim() }].sort((a, b) => a.date.localeCompare(b.date)));
    setText('');
  };

  const remove = (i: number) => setPosts((p) => p.filter((_, j) => j !== i));

  const exportCsv = () => {
    const header = 'Date,Platform,Content\n';
    const rows = posts.map((p) => `"${p.date}","${p.platform}","${p.text.replace(/"/g, '""')}"`).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'social-calendar.csv';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" />
        <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]">
          <option>Instagram</option>
          <option>Twitter</option>
          <option>LinkedIn</option>
          <option>TikTok</option>
        </select>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Post content or idea" className="flex-1 min-w-[160px] px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" />
        <button type="button" onClick={add} className="px-4 py-2 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Add</button>
      </div>
      <button type="button" onClick={exportCsv} className="px-4 py-2 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-medium">Export CSV</button>
      <ul className="space-y-2 max-h-[300px] overflow-auto">
        {posts.map((p, i) => (
          <li key={i} className="flex justify-between items-start gap-2 p-3 rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30">
            <div>
              <span className="text-[#2F281D] font-medium">{p.date}</span> · <span className="text-[#997F6C] text-sm">{p.platform}</span>
              <p className="text-[#2F281D]/80 text-sm mt-1">{p.text}</p>
            </div>
            <button type="button" onClick={() => remove(i)} className="text-red-600 text-sm shrink-0">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
