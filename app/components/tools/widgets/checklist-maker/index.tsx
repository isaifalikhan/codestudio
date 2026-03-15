'use client';

import React, { useState, useEffect } from 'react';

const KEY = 'codestudio-checklist';

export default function ChecklistMakerWidget() {
  const [title, setTitle] = useState('My checklist');
  const [items, setItems] = useState<{ text: string; done: boolean }[]>([{ text: '', done: false }]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const { t, i } = JSON.parse(raw);
        if (t) setTitle(t);
        if (Array.isArray(i) && i.length) setItems(i);
      }
    } catch (_) {}
  }, []);

  useEffect(() => {
    try {
      const toSave = items.filter((x) => x.text.trim());
      if (toSave.length || title !== 'My checklist') localStorage.setItem(KEY, JSON.stringify({ t: title, i: toSave.length ? toSave : items }));
    } catch (_) {}
  }, [title, items]);

  const add = () => setItems((i) => [...i, { text: '', done: false }]);
  const update = (idx: number, text: string) => setItems((i) => i.map((item, j) => (j === idx ? { ...item, text } : item)));
  const toggle = (idx: number) => setItems((i) => i.map((item, j) => (j === idx ? { ...item, done: !item.done } : item)));
  const remove = (idx: number) => setItems((i) => i.filter((_, j) => j !== idx));

  const print = () => window.print();

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Checklist title</span>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <input type="checkbox" checked={item.done} onChange={() => toggle(i)} className="rounded" />
            <input type="text" value={item.text} onChange={(e) => update(i, e.target.value)} placeholder="Item" className="flex-1 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC]" />
            <button type="button" onClick={() => remove(i)} className="text-red-600 text-sm">Remove</button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button type="button" onClick={add} className="px-4 py-2 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-medium">+ Add item</button>
        <button type="button" onClick={print} className="px-4 py-2 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Print</button>
      </div>
    </div>
  );
}
