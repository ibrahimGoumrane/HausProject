/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        HubotSans: ['HubotSans', 'sans-serif'],
        PinyonScript: ['Pinyon Script', 'sans-serif'],
      },
      fontSize: {
        nav: '32px',
        mainTitle: '64px',
        secondayTitle: '50px',
        mainParagraph: '40px',
        secondaryParagraph: '32px',
      },
      colors: {
        white: {
          main: '#FFFFFF',
          secondary: '#F3F0E9',
        },
        black: {
          main: '#292929',
          secondary: '#000000',
        },
      },
    },
  },
  plugins: [],
};
