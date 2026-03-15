'use client';

import React, { useState, useMemo } from 'react';

function b64Decode(str: string): string {
  try {
    return decodeURIComponent(escape(atob(str.replace(/-/g, '+').replace(/_/g, '/'))));
  } catch {
    return '';
  }
}

export default function JwtDecoderWidget() {
  const [token, setToken] = useState('');

  const decoded = useMemo(() => {
    const parts = token.trim().split('.');
    if (parts.length !== 3) return null;
    try {
      const header = JSON.parse(b64Decode(parts[0]));
      const payload = JSON.parse(b64Decode(parts[1]));
      return { header, payload };
    } catch {
      return null;
    }
  }, [token]);

  return (
    <div className="space-y-6">
      <label className="block">
        <span className="text-sm font-medium text-[#2F281D] block mb-2">JWT token</span>
        <textarea
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          className="w-full min-h-[120px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] font-mono text-sm resize-y"
        />
      </label>
      {decoded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-bold text-[#2F281D] mb-2">Header</p>
            <pre className="p-4 rounded-xl bg-[#2F281D]/5 border border-[#2F281D]/10 text-[#2F281D] text-xs overflow-auto">
              {JSON.stringify(decoded.header, null, 2)}
            </pre>
          </div>
          <div>
            <p className="text-sm font-bold text-[#2F281D] mb-2">Payload</p>
            <pre className="p-4 rounded-xl bg-[#2F281D]/5 border border-[#2F281D]/10 text-[#2F281D] text-xs overflow-auto">
              {JSON.stringify(decoded.payload, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
