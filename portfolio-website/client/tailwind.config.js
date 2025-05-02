// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Tells Tailwind to scan these files for class usage
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Enable dark mode via a CSS class (not media query)
  plugins: [],
}
