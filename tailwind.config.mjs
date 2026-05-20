/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          '"Zen Maru Gothic"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Hiragino Sans"',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'Menlo',
          'monospace',
        ],
      },
      colors: {
        // Tesla-inspired palette
        ink: '#171A20',     // Carbon Dark
        body: '#393C41',    // Graphite
        sub: '#5C5E62',     // Pewter
        muted: '#8E8E8E',   // Silver Fog
        line: '#EEEEEE',    // Cloud Gray
        soft: '#F4F4F4',    // Light Ash
        canvas: '#E8EAED',  // Page background (slightly darker)
        accent: '#3E6AE1',  // Electric Blue
      },
      transitionTimingFunction: {
        tesla: 'cubic-bezier(0.5, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
};
