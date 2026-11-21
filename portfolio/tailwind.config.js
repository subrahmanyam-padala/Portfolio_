/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        ink: {
          950: '#0a0c12',
          900: '#0e1118',
          850: '#121621',
          800: '#171c28',
          700: '#232a3a',
        },
        accent: {
          blue: '#7c9cff',
          violet: '#a28bff',
        },
        muted: '#a6afc0',
      },
    },
  },
  plugins: [],
};
