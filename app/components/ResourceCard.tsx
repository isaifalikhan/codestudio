import type { Tool } from '@/lib/resources-data';

interface ResourceCardProps {
  tool: Tool;
}

export function ResourceCard({ tool }: ResourceCardProps) {
  return (
    <article className="rounded-2xl border border-[#2F281D]/10 bg-[#FDF8EC] p-6 shadow-sm hover:shadow-md hover:border-[#997F6C]/30 transition-all flex flex-col h-full">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-2xl flex-shrink-0" aria-hidden>{tool.emoji}</span>
          <div className="min-w-0">
            <h3 className="font-display font-bold text-[#2F281D] text-lg truncate">{tool.name}</h3>
            <span className="text-xs font-medium text-[#997F6C] bg-[#997F6C]/10 px-2 py-0.5 rounded-full">
              {tool.categoryLabel}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="text-xs font-bold text-[#5F634D] bg-[#5F634D]/10 px-2 py-1 rounded">Free</span>
          {tool.hasPaid && (
            <span className="text-xs text-[#2F281D]/50" title="Has paid plan">Pro</span>
          )}
        </div>
      </div>
      <p className="font-semibold text-[#2F281D] text-sm mb-1 line-clamp-1">{tool.tagline}</p>
      <p className="text-[#2F281D]/60 text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">{tool.description}</p>
      {tool.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-[#2F281D]/50 bg-[#2F281D]/5 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-bold text-[#997F6C] hover:text-[#2F281D] transition-colors group"
      >
        Visit Tool
        <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden>→</span>
      </a>
    </article>
  );
}
