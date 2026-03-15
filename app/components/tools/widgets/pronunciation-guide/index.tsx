'use client';

import React, { useState } from 'react';

export default function PronunciationGuideWidget() {
  const [word, setWord] = useState('');
  const [supported, setSupported] = useState(true);

  const speak = () => {
    if (!word.trim()) return;
    if (!('speechSynthesis' in window)) {
      setSupported(false);
      return;
    }
    const u = new SpeechSynthesisUtterance(word.trim());
    u.lang = 'en-US';
    u.rate = 0.9;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  };

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Word or phrase</span>
        <input type="text" value={word} onChange={(e) => setWord(e.target.value)} placeholder="e.g. pronunciation" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <button type="button" onClick={speak} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Hear pronunciation</button>
      {!supported && <p className="text-[#2F281D]/70 text-sm">Your browser may not support speech. Try Chrome or Edge.</p>}
    </div>
  );
}
