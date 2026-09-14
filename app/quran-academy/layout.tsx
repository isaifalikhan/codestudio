import { Amiri } from 'next/font/google';

/**
 * Arabic typeface for the academy routes.
 *
 * The `.arabic` class in globals.css previously relied on a system stack
 * ('Traditional Arabic', 'Amiri', 'Scheherazade New', serif) — none of which
 * were actually loaded. On Windows the first often exists, on macOS, iOS and
 * Android none do, so the ayah fell back to a generic serif whose Arabic
 * diacritics sit badly and vary by device.
 *
 * Amiri is a classical Naskh face designed for Arabic typesetting, with
 * properly positioned vocalisation marks — the right choice for a Quranic
 * passage rendered at display size.
 *
 * Declared in this nested layout rather than the root one so the font is
 * preloaded on academy routes only; the other 180-odd pages on the site
 * contain no Arabic and should not pay for it.
 */
const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-amiri',
});

export default function QuranAcademyLayout({ children }: { children: React.ReactNode }) {
  return <div className={amiri.variable}>{children}</div>;
}
