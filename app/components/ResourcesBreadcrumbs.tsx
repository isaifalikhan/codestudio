'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { categories } from '@/lib/resources-data';

export function ResourcesBreadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean); // ['resources'] or ['resources', 'design']

  const getCategoryLabel = (id: string) => {
    const cat = categories.find((c) => c.id === id);
    return cat?.label ?? id;
  };

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-6 border-b border-[#2F281D]/10 bg-[#FDF8EC]">
      <div className="max-w-7xl mx-auto">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[#2F281D]/60">
          <li>
            <Link href="/" className="hover:text-[#997F6C] transition-colors">
              Home
            </Link>
          </li>
          {segments.map((segment, i) => {
            const isLast = i === segments.length - 1;
            const href = '/' + segments.slice(0, i + 1).join('/');
            const label = segment === 'resources' ? 'Resources' : getCategoryLabel(segment);
            return (
              <li key={segment} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {isLast ? (
                  <span className="text-[#2F281D] font-medium" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link href={href} className="hover:text-[#997F6C] transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
