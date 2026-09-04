'use client';

import React, { useState, useMemo } from 'react';

export default function EngagementRateCalculatorWidget() {
  const [likes, setLikes] = useState('');
  const [comments, setComments] = useState('');
  const [followers, setFollowers] = useState('');

  const result = useMemo(() => {
    const l = parseFloat(likes) || 0;
    const c = parseFloat(comments) || 0;
    const f = parseFloat(followers) || 0;
    if (f <= 0) return null;
    const engagement = ((l + c) / f) * 100;
    return engagement.toFixed(2);
  }, [likes, comments, followers]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <label>
          <span className="text-sm font-medium text-[#14171F] block mb-2">Likes</span>
          <input
            type="number"
            min="0"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#14171F] block mb-2">Comments</span>
          <input
            type="number"
            min="0"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC]"
          />
        </label>
        <label>
          <span className="text-sm font-medium text-[#14171F] block mb-2">Followers</span>
          <input
            type="number"
            min="0"
            value={followers}
            onChange={(e) => setFollowers(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC]"
          />
        </label>
      </div>
      {result !== null && (
        <div className="rounded-xl border border-[#14171F]/10 bg-[#ECE7D9]/30 p-6">
          <p className="text-2xl font-bold text-[#14171F]">Engagement rate: {result}%</p>
        </div>
      )}
    </div>
  );
}
