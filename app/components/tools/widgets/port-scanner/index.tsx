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
        <span className="text-sm font-medium text-[#14171F] block mb-2">Host or IP</span>
        <input type="text" value={host} onChange={(e) => setHost(e.target.value)} placeholder="example.com or 192.168.1.1" className="w-full px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC]" />
      </label>
      <button type="button" onClick={check} className="px-5 py-2.5 rounded-xl bg-[#14171F] text-[#F6F4EC] font-bold">Check ports</button>
      {result && <p className="text-[#14171F]/80 text-sm rounded-xl border border-[#14171F]/10 bg-[#ECE7D9]/30 p-4">{result}</p>}
    </div>
  );
}
