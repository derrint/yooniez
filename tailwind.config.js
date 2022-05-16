module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // fontSize: {
    //   xs: '0.75rem',
    //   sm: '0.875rem',
    //   base: '1rem',
    //   lg: '1.125rem',
    //   xl: '1.25rem',
    //   '2xl': '1.5rem',
    //   '3xl': '1.875rem',
    //   '4xl': '2.25rem',
    //   '5xl': '3rem',
    //   '6xl': '4rem',
    // },
    fontFamily: {
      sans: ['Work Sans'],
    },
    extend: {
      colors: {
        primary: '#9322F9',
        'primary-dark': '#3D0C67',
        'primary-darkest': '#200127',
        secondary: '#FF4D00',
        tertiary: '#FCEE21',
        black: '#111111',
        // gray: '#888888',
      },
      lineHeight: {
        hero: '4.5rem',
      },
      boxShadow: {
        md: '0px 4px 20px rgba(0, 52, 185, 0.08);',
        dark: '0px 43px 17px rgba(51, 5, 82, 0.04), 0px 24px 15px rgba(51, 5, 82, 0.13), 0px 11px 11px rgba(51, 5, 82, 0.21), 0px 3px 6px rgba(51, 5, 82, 0.25), 0px 0px 0px rgba(51, 5, 82, 0.25)',
      },
    },
  },
  variants: {},
  plugins: [],
};
