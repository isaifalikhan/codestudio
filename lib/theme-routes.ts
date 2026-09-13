/**
 * Routes that render in the dark-glass theme.
 *
 * Navbar and Footer live in the root layout, outside any page's DOM, so they
 * cannot inherit a scope class from the page. They each call `isGlassRoute`
 * themselves instead. Because they are client components rendered during SSR,
 * `usePathname()` resolves on the server too — the class is present in the
 * initial HTML, so there is no light-to-dark flash on first paint.
 *
 * To roll the theme out to more pages, add the route here and put
 * `theme-glass` on that page's root element.
 */
const GLASS_ROUTES = new Set(['/']);

export function isGlassRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  return GLASS_ROUTES.has(pathname);
}

/**
 * Routes that render their own header and footer and therefore suppress the
 * site-wide Navbar and Footer. The Quran academy is a separate brand living
 * on the same deployment, so it gets its own chrome rather than CodexStudio's.
 */
const STANDALONE_ROUTES = ['/quran-academy'];

export function isStandaloneRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  return STANDALONE_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}
