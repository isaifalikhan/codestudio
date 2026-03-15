'use client';

import React, { useState } from 'react';

const POPULAR: Record<string, string[]> = {
  fitness: ['fitness', 'gym', 'workout', 'health', 'motivation', 'fitlife', 'fitnessmotivation', 'gymlife', 'healthylifestyle', 'strength'],
  travel: ['travel', 'wanderlust', 'adventure', 'explore', 'vacation', 'traveling', 'instatravel', 'travelgram', 'wanderer', 'travelphotography'],
  food: ['food', 'foodie', 'foodlover', 'delicious', 'foodphotography', 'yummy', 'instafood', 'foodstagram', 'homecooking', 'recipe'],
  tech: ['tech', 'technology', 'coding', 'programming', 'developer', 'webdev', 'software', 'innovation', 'digital', 'startup'],
  default: ['viral', 'trending', 'explore', 'follow', 'like', 'instagood', 'photooftheday', 'beautiful', 'love', 'happy'],
};

function generateHashtags(topic: string, count: number): string[] {
  const key = Object.keys(POPULAR).find((k) => k !== 'default' && topic.toLowerCase().includes(k)) || 'default';
  const base = [...POPULAR[key], ...POPULAR.default];
  const topicWords = topic.toLowerCase().split(/\s+/).filter(Boolean).map((w) => w.replace(/\W/g, ''));
  const combined = [...new Set([...topicWords.map((w) => '#' + w), ...base.map((b) => '#' + b)])];
  return combined.slice(0, Math.min(count, combined.length));
}

export default function HashtagGeneratorWidget() {
  const [topic, setTopic] = useState('');
  const [count, setCount] = useState(30);
  const [result, setResult] = useState<string[]>([]);

  const handleGenerate = () => {
    setResult(generateHashtags(topic || 'social', count));
  };

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Topic or niche</span>
        <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. fitness, travel, tech" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Number of hashtags (max 30)</span>
        <input type="number" min={5} max={30} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-24 px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <button type="button" onClick={handleGenerate} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Generate hashtags</button>
      {result.length > 0 && (
        <>
          <div className="flex flex-wrap gap-2">
            {result.map((h) => (
              <span key={h} className="px-3 py-1.5 rounded-lg bg-[#2F281D]/10 text-[#2F281D] text-sm">{h}</span>
            ))}
          </div>
          <button type="button" onClick={() => navigator.clipboard.writeText(result.join(' '))} className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold">Copy all</button>
        </>
      )}
    </div>
  );
}
