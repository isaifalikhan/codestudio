'use client';

import React, { useState, useCallback } from 'react';

function tryParse(s: string): { ok: true; data: unknown } | { ok: false; error: string } {
  try {
    const data = JSON.parse(s);
    return { ok: true, data };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Invalid JSON' };
  }
}

function formatJson(obj: unknown, indent: number): string {
  return JSON.stringify(obj, null, indent);
}

export default function JsonFormatterWidget() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [indent, setIndent] = useState(2);

  const format = useCallback(() => {
    const result = tryParse(input);
    if (!result.ok) {
      setError(result.error);
      setOutput('');
      return;
    }
    setError('');
    setOutput(formatJson(result.data, indent));
  }, [input, indent]);

  const minify = useCallback(() => {
    const result = tryParse(input);
    if (!result.ok) {
      setError(result.error);
      setOutput('');
      return;
    }
    setError('');
    setOutput(JSON.stringify(result.data));
  }, [input]);

  const validate = useCallback(() => {
    const result = tryParse(input);
    if (result.ok) {
      setError('');
      setOutput('Valid JSON');
    } else {
      setError(result.error);
      setOutput('');
    }
  }, [input]);

  return (
    <div className="space-y-6">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='{"key": "value"}'
        className="w-full min-h-[200px] px-4 py-3 rounded-xl border border-[#14171F]/20 bg-[#F6F4EC] text-[#14171F] placeholder:text-[#14171F]/40 focus:outline-none focus:ring-2 focus:ring-[#D98A2C]/50 resize-y font-mono text-sm"
      />
      <div className="flex flex-wrap gap-2 items-center">
        <button
          type="button"
          onClick={format}
          className="px-4 py-2 rounded-xl bg-[#14171F] text-[#F6F4EC] font-bold hover:bg-[#D98A2C]"
        >
          Format
        </button>
        <button
          type="button"
          onClick={minify}
          className="px-4 py-2 rounded-xl border border-[#14171F]/30 text-[#14171F] font-bold hover:bg-[#14171F]/5"
        >
          Minify
        </button>
        <button
          type="button"
          onClick={validate}
          className="px-4 py-2 rounded-xl border border-[#14171F]/30 text-[#14171F] font-bold hover:bg-[#14171F]/5"
        >
          Validate
        </button>
        <label className="flex items-center gap-2 ml-4">
          <span className="text-sm text-[#14171F]">Indent:</span>
          <input
            type="number"
            min={0}
            max={8}
            value={indent}
            onChange={(e) => setIndent(Number(e.target.value))}
            className="w-14 px-2 py-1 rounded border border-[#14171F]/20 bg-[#F6F4EC]"
          />
        </label>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      {output && (
        <pre className="w-full min-h-[120px] p-4 rounded-xl bg-[#14171F]/5 border border-[#14171F]/10 text-[#14171F] font-mono text-sm overflow-auto whitespace-pre-wrap break-all">
          {output}
        </pre>
      )}
    </div>
  );
}
