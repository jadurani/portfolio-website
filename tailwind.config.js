const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2.5rem',
        md: '3rem',
        lg: '4rem',
        xl: '10rem',
        '2xl': '12rem',
      },
    },
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
