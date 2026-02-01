/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#1a1a2e',
        surface: '#16213e',
        gold: '#efc07b',
        'gold-light': '#f3d29e',
        'text-high': '#f8f8f2',
        'text-muted': '#8d99ae',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
