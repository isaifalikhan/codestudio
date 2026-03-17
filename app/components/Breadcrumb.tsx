import Link from 'next/link';

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-[13px] text-[#2F281D]/70 py-2 mb-4"
    >
      <ol className="flex flex-wrap items-center gap-0">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <span className="mx-2 text-[#2F281D]/50" aria-hidden>
                ›
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-[#2F281D]/70 hover:text-[#997F6C] transition-colors no-underline"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-[#2F281D] font-medium" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
