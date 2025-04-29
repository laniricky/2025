/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.amber.600'),
              '&:hover': {
                color: theme('colors.amber.700'),
              },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.bold'),
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.amber.400'),
              '&:hover': {
                color: theme('colors.amber.300'),
              },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.white'),
              fontWeight: theme('fontWeight.bold'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        'h1': { lineHeight: '1.2', fontWeight: theme('fontWeight.bold') },
        'h2': { lineHeight: '1.2', fontWeight: theme('fontWeight.bold') },
        'h3': { lineHeight: '1.2', fontWeight: theme('fontWeight.semibold') },
        'h4': { lineHeight: '1.2', fontWeight: theme('fontWeight.semibold') },
        'p': { lineHeight: '1.5' },
      })
    },
    function({ addComponents, theme }) {
      addComponents({
        '.prose': {
          'p': {
            marginTop: '1.25em',
            marginBottom: '1.25em',
          },
          'a': {
            color: theme('colors.amber.600'),
            textDecoration: 'underline',
            '&:hover': {
              color: theme('colors.amber.700'),
            },
          },
        },
        '.dark .prose': {
          'a': {
            color: theme('colors.amber.400'),
            '&:hover': {
              color: theme('colors.amber.300'),
            },
          },
        },
      })
    },
  ],
};