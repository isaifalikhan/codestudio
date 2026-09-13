/** @type {import('tailwindcss').Config} */

/**
 * Colour tokens resolve through CSS custom properties (space-separated RGB
 * channels) so a scope such as `.theme-glass` can repaint the whole palette
 * without touching component markup. Light values live on :root in globals.css.
 */
const withVar = (name) => ({ opacityValue }) =>
  opacityValue === undefined
    ? `rgb(var(${name}))`
    : `rgb(var(${name}) / ${opacityValue})`;

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'ui-serif', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: withVar('--c-ink'),
          soft: withVar('--c-ink-soft'),
        },
        paper: {
          DEFAULT: withVar('--c-paper'),
          dim: withVar('--c-paper-dim'),
        },
        gold: {
          DEFAULT: withVar('--c-gold'),
          dark: withVar('--c-gold-dark'),
          light: withVar('--c-gold-light'),
        },
        pine: {
          DEFAULT: withVar('--c-pine'),
          dark: withVar('--c-pine-dark'),
          light: withVar('--c-pine-light'),
        },
        mist: withVar('--c-mist'),
      },
      boxShadow: {
        // Layered shadows: a tight contact shadow plus a wide ambient one.
        'lift-sm': '0 1px 2px rgb(var(--c-shadow) / 0.06), 0 4px 12px -4px rgb(var(--c-shadow) / 0.10)',
        lift: '0 1px 2px rgb(var(--c-shadow) / 0.07), 0 12px 32px -8px rgb(var(--c-shadow) / 0.16)',
        'lift-lg': '0 2px 4px rgb(var(--c-shadow) / 0.08), 0 28px 64px -16px rgb(var(--c-shadow) / 0.24)',
        glow: '0 0 0 1px rgb(var(--c-gold) / 0.25), 0 8px 32px -6px rgb(var(--c-gold) / 0.35)',
        'inset-sheen': 'inset 0 1px 0 rgb(255 255 255 / 0.14)',
      },
      backgroundImage: {
        'grid-paper': `
          linear-gradient(rgb(var(--c-grid) / 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgb(var(--c-grid) / 0.05) 1px, transparent 1px)
        `,
      },
    },
  },
  plugins: [],
};
