import { NextResponse, type NextRequest } from 'next/server';
import { DOWNLOADS_SITE_TOOL_SLUGS, IS_DOWNLOADS_SITE, MAIN_SITE_URL } from '@/lib/site-mode';

/** Routes the downloads deployment serves itself; everything else belongs to the main site. */
const DOWNLOADS_SITE_PATHS = new Set([
  '/tools',
  '/privacy',
  '/terms',
  '/contact',
  '/api/download',
  '/api/contact',
  ...DOWNLOADS_SITE_TOOL_SLUGS.map((slug) => `/tools/${slug}`),
]);

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;

  if (!IS_DOWNLOADS_SITE) {
    // The download API backs tools the main site no longer serves.
    if (path === '/api/download') return new NextResponse(null, { status: 404 });
    return NextResponse.next();
  }

  if (path === '/') return NextResponse.redirect(new URL('/tools', request.url), 301);
  if (DOWNLOADS_SITE_PATHS.has(path)) return NextResponse.next();
  return NextResponse.redirect(`${MAIN_SITE_URL}${pathname}${search}`, 301);
}

export const config = {
  // Skip build assets and anything with a file extension (sitemap.xml, robots.txt, images).
  matcher: ['/((?!_next/|.*\\.[^/]+$).*)'],
};
