const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
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
  plugins: [require('@tailwindcss/typography')],
  // they said this should be enabled for v3 but i don't like its side effects
  // corePlugins: {
  //   preflight: false,
  // },
};
