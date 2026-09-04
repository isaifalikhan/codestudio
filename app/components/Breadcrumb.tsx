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
      className="text-[13px] text-[#14171F]/70 py-2 mb-4"
    >
      <ol className="flex flex-wrap items-center gap-0">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <span className="mx-2 text-[#14171F]/50" aria-hidden>
                ›
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-[#14171F]/70 hover:text-[#D98A2C] transition-colors no-underline"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-[#14171F] font-medium" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
