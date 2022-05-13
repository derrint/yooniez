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
      sans: ['Space Grotesk'],
    },
    extend: {
      colors: {
        primary: '#FBE54D',
        secondary: '#0083FF',
        black: '#0D0D10',
        // gray: '#888888',
      },
      lineHeight: {
        hero: '4.5rem',
      },
      boxShadow: {
        md: '0px 4px 20px rgba(0, 52, 185, 0.08);',
      },
    },
  },
  variants: {},
  plugins: [],
};
