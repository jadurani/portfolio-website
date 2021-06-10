const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat', ...defaultTheme.fontFamily.sans],
        header: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        foreground: 'var(--color-foreground)',
        background: 'var(--color-background)',
        accent: {
          dark: 'var(--color-accent--dark)',
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent--light)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
