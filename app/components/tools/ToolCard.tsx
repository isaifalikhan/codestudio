import Link from 'next/link';
import type { Tool } from '@/lib/tools-data';
import { isIncompleteTool } from '@/lib/tool-server-behavior';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const incomplete = isIncompleteTool(tool.slug);
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group block rounded-2xl border border-[#2F281D]/10 bg-[#FDF8EC] p-6 shadow-sm hover:shadow-md hover:border-[#997F6C]/30 transition-all flex flex-col h-full"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="text-2xl flex-shrink-0" aria-hidden>
          {tool.emoji}
        </span>
        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          {incomplete && (
            <span className="text-xs font-bold uppercase tracking-wide text-amber-900 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-full">
              Limited
            </span>
          )}
          <span className="text-xs font-medium text-[#997F6C] bg-[#997F6C]/10 px-2 py-0.5 rounded-full">
            {tool.category}
          </span>
        </div>
      </div>
      <h3 className="font-display font-bold text-[#2F281D] text-lg mb-1 group-hover:text-[#997F6C] transition-colors">
        {tool.name}
      </h3>
      <p className="text-[#2F281D]/70 text-sm leading-relaxed line-clamp-2 flex-grow">
        {tool.tagline}
      </p>
      <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold text-[#997F6C] group-hover:gap-2 transition-all">
        Use tool
        <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden>→</span>
      </span>
    </Link>
  );
}
