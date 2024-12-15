/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      fontFamily: {
        HubotSans: ['Hubot Sans'],
        PinyonScript: ['Pinyon Script', 'sans-serif'],
      },
      fontSize: {
        nav: '32px',
        'title-pinyonScript': '72px',
        'title-primary': '60px',
        'title-secondary': '48px',
        'paragraph-primary': '40px',
        'paragraph-secondary': '32px',
        'scroll-text': '24px',
      },
      borderColor: {
        'white-primary': '#F3F0E9',
        'black-primary': '#292929',
      },
      colors: {
        white: {
          primary: '#F3F0E9',
          secondary: '#FFFFFF',
        },
        black: {
          primary: '#292929',
          secondary: '#000000',
        },
      },
      screens: {
        desktop: '1440px',
      },
    },
  },
  plugins: [require('preline/plugin')],
};
