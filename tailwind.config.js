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
        'title-primary': '64px',
        'title-secondary': '50px',
        'paragraph-primary': '40px',
        'paragraph-secondary': '32px',
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
    },
  },
  plugins: [require('preline/plugin')],
};
