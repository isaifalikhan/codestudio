'use client';

import React, { useState, useEffect } from 'react';

const KEY = 'codestudio-flashcards';

export default function FlashcardMakerWidget() {
  const [cards, setCards] = useState<{ front: string; back: string }[]>([{ front: '', back: '' }]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr) && arr.length) setCards(arr);
      }
    } catch (_) {}
  }, []);

  useEffect(() => {
    try {
      const toSave = cards.filter((c) => c.front.trim() || c.back.trim());
      if (toSave.length) localStorage.setItem(KEY, JSON.stringify(toSave));
    } catch (_) {}
  }, [cards]);

  const update = (i: number, side: 'front' | 'back', value: string) =>
    setCards((c) => c.map((card, j) => (j === i ? { ...card, [side]: value } : card)));
  const add = () => setCards((c) => [...c, { front: '', back: '' }]);
  const remove = (i: number) => {
    setCards((c) => c.filter((_, j) => j !== i));
    setIndex((i) => Math.max(0, Math.min(i, cards.length - 2)));
  };

  const current = cards[index];
  const total = cards.filter((c) => c.front.trim() || c.back.trim()).length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <button type="button" onClick={() => setIndex((i) => Math.max(0, i - 1))} className="px-4 py-2 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-medium">← Prev</button>
        <span className="text-[#2F281D]/70 text-sm">{index + 1} / {total || 1}</span>
        <button type="button" onClick={() => setIndex((i) => Math.min(cards.length - 1, i + 1))} className="px-4 py-2 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-medium">Next →</button>
      </div>
      {current && (
        <div
          onClick={() => setFlipped((f) => !f)}
          className="min-h-[160px] rounded-xl border-2 border-[#2F281D]/20 bg-[#E8E2D2]/50 p-6 flex items-center justify-center cursor-pointer"
        >
          <p className="text-[#2F281D] text-lg text-center">{flipped ? current.back : current.front || 'Click to add text'}</p>
        </div>
      )}
      <p className="text-[#2F281D]/60 text-sm text-center">Click card to flip</p>
      <div className="space-y-2">
        {cards.map((card, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input type="text" value={card.front} onChange={(e) => update(i, 'front', e.target.value)} placeholder="Front" className="flex-1 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC] text-sm" />
            <input type="text" value={card.back} onChange={(e) => update(i, 'back', e.target.value)} placeholder="Back" className="flex-1 px-4 py-2 rounded-lg border border-[#2F281D]/20 bg-[#FDF8EC] text-sm" />
            <button type="button" onClick={() => remove(i)} className="text-red-600 text-sm">Remove</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={add} className="px-4 py-2 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-medium">+ Add card</button>
    </div>
  );
}
