/** @type {import('tailwindcss').Config} */
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
          DEFAULT: '#14171F',
          soft: '#1E2330',
        },
        paper: {
          DEFAULT: '#F6F4EC',
          dim: '#ECE7D9',
        },
        gold: {
          DEFAULT: '#D98A2C',
          dark: '#AD6B1B',
          light: '#F0B968',
        },
        pine: {
          DEFAULT: '#2F7A6D',
          dark: '#1F5A50',
          light: '#5FA599',
        },
        mist: '#8A8574',
      },
      backgroundImage: {
        'gradient-mesh': `
          radial-gradient(at 0% 0%, rgba(217, 138, 44, 0.12) 0px, transparent 50%),
          radial-gradient(at 100% 0%, rgba(47, 122, 109, 0.12) 0px, transparent 50%),
          radial-gradient(at 100% 100%, rgba(138, 133, 116, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(20, 23, 31, 0.06) 0px, transparent 50%)
        `,
        'grid-paper': `
          linear-gradient(rgba(20, 23, 31, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(20, 23, 31, 0.05) 1px, transparent 1px)
        `,
      },
    },
  },
  plugins: [],
};
