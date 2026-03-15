'use client';

import React, { useState } from 'react';

export default function PortScannerWidget() {
  const [host, setHost] = useState('');
  const [result, setResult] = useState('');

  const check = () => {
    setResult('Port scanning cannot be done from the browser for security reasons. Use a desktop tool (e.g. nmap) or a server-side API that runs the check. Enter the host and we can show you the command: nmap -p 80,443,22 ' + (host || 'example.com'));
  };

  return (
    <div className="space-y-6">
      <label>
        <span className="text-sm font-medium text-[#2F281D] block mb-2">Host or IP</span>
        <input type="text" value={host} onChange={(e) => setHost(e.target.value)} placeholder="example.com or 192.168.1.1" className="w-full px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC]" />
      </label>
      <button type="button" onClick={check} className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold">Check ports</button>
      {result && <p className="text-[#2F281D]/80 text-sm rounded-xl border border-[#2F281D]/10 bg-[#E8E2D2]/30 p-4">{result}</p>}
    </div>
  );
}
