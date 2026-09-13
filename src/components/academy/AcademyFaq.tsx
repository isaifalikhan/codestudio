'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/lib/quranAcademyData';

export const AcademyFaq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-ink/10 border-y border-ink/10">
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <li key={faq.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg font-bold text-ink transition-colors group-hover:text-pine sm:text-xl">
                  {faq.q}
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink/5 text-ink transition-colors group-hover:bg-pine group-hover:text-paper">
                  {isOpen ? <Minus className="h-4 w-4" aria-hidden /> : <Plus className="h-4 w-4" aria-hidden />}
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              hidden={!isOpen}
              className="pb-7 pr-12 text-ink/70 leading-relaxed"
            >
              {faq.a}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
