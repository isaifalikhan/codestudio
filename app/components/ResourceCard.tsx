import type { Tool } from '@/lib/resources-data';
import { getAffiliateUrl } from '@/lib/affiliate-links';

interface ResourceCardProps {
  tool: Tool;
}

export function ResourceCard({ tool }: ResourceCardProps) {
  const url = getAffiliateUrl(tool.id) || tool.url;
  return (
    <article className="rounded-2xl border border-[#14171F]/10 bg-[#F6F4EC] p-6 shadow-sm hover:shadow-md hover:border-[#D98A2C]/30 transition-all flex flex-col h-full">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-2xl flex-shrink-0" aria-hidden>{tool.emoji}</span>
          <div className="min-w-0">
            <h3 className="font-display font-bold text-[#14171F] text-lg truncate">{tool.name}</h3>
            <span className="text-xs font-medium text-[#D98A2C] bg-[#D98A2C]/10 px-2 py-0.5 rounded-full">
              {tool.categoryLabel}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="text-xs font-bold text-[#2F7A6D] bg-[#2F7A6D]/10 px-2 py-1 rounded">Free</span>
          {tool.hasPaid && (
            <span className="text-xs text-[#14171F]/50" title="Has paid plan">Pro</span>
          )}
        </div>
      </div>
      <p className="font-semibold text-[#14171F] text-sm mb-1 line-clamp-1">{tool.tagline}</p>
      <p className="text-[#14171F]/60 text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">{tool.description}</p>
      {tool.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-[#14171F]/50 bg-[#14171F]/5 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-bold text-[#D98A2C] hover:text-[#14171F] transition-colors group"
      >
        Visit Tool
        <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden>→</span>
      </a>
    </article>
  );
}
