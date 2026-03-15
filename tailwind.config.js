/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        brand: {
          primary: '#2F281D',
          'accent-brown': '#997F6C',
          olive: '#5F634D',
          beige: '#BCAF9B',
          soft: '#E8E2D2',
          light: '#FDF8EC',
        },
      },
      backgroundImage: {
        'gradient-mesh': `
          radial-gradient(at 0% 0%, rgba(153, 127, 108, 0.1) 0px, transparent 50%),
          radial-gradient(at 100% 0%, rgba(95, 99, 77, 0.1) 0px, transparent 50%),
          radial-gradient(at 100% 100%, rgba(188, 175, 155, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(47, 40, 29, 0.05) 0px, transparent 50%)
        `,
      },
    },
  },
  plugins: [],
};
