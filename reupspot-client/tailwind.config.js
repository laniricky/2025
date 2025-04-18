/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buff: '#f0e3ca',
        softBrown: '#a47551',
        darkGray: '#1f1f1f',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

