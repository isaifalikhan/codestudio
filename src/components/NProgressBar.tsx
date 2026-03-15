'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

export function NProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.done();
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor?.href && anchor.href.startsWith(window.location.origin) && anchor.target !== '_blank') {
        NProgress.start();
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
}
