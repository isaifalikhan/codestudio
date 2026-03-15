'use client';

import React, { useState } from 'react';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const WORDS = LOREM.split(' ');

function getRandomWords(n: number): string[] {
  const out: string[] = [];
  for (let i = 0; i < n; i++) {
    out.push(WORDS[Math.floor(Math.random() * WORDS.length)]);
  }
  return out;
}

export default function LoremIpsumWidget() {
  const [paragraphs, setParagraphs] = useState(3);
  const [sentencesPerParagraph, setSentencesPerParagraph] = useState(4);
  const [output, setOutput] = useState('');

  const generate = () => {
    const sentences = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
      'Nisi ut aliquip ex ea commodo consequat.',
    ];
    const result: string[] = [];
    for (let p = 0; p < paragraphs; p++) {
      const line: string[] = [];
      for (let s = 0; s < sentencesPerParagraph; s++) {
        line.push(sentences[Math.floor(Math.random() * sentences.length)]);
      }
      result.push(line.join(' '));
    }
    setOutput(result.join('\n\n'));
  };

  const copyAll = async () => {
    if (output) await navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-2">
          <span className="text-sm font-medium text-[#2F281D]">Paragraphs</span>
          <input
            type="number"
            min={1}
            max={20}
            value={paragraphs}
            onChange={(e) => setParagraphs(Number(e.target.value))}
            className="w-20 px-2 py-1 rounded border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]"
          />
        </label>
        <label className="flex items-center gap-2">
          <span className="text-sm font-medium text-[#2F281D]">Sentences per paragraph</span>
          <input
            type="number"
            min={1}
            max={10}
            value={sentencesPerParagraph}
            onChange={(e) => setSentencesPerParagraph(Number(e.target.value))}
            className="w-20 px-2 py-1 rounded border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D]"
          />
        </label>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={generate}
          className="px-5 py-2.5 rounded-xl bg-[#2F281D] text-[#FDF8EC] font-bold hover:bg-[#997F6C] transition-colors"
        >
          Generate
        </button>
        <button
          type="button"
          onClick={copyAll}
          disabled={!output}
          className="px-5 py-2.5 rounded-xl border border-[#2F281D]/30 text-[#2F281D] font-bold hover:bg-[#2F281D]/5 transition-colors disabled:opacity-50"
        >
          Copy all
        </button>
      </div>
      <textarea
        readOnly
        value={output}
        placeholder="Click Generate to create placeholder text..."
        className="w-full min-h-[220px] px-4 py-3 rounded-xl border border-[#2F281D]/20 bg-[#FDF8EC] text-[#2F281D] resize-y"
      />
    </div>
  );
}
