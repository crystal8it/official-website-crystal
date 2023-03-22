/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': '#222'
      },
      fontFamily: {
        kiwimaru: ['Kiwi Maru', 'serif'],
        zenmaru: ['Zen Maru Gothic']
      },
      gridTemplateColumns: {
        // added new 4 column grid as new4
        new3: 'repeat(auto-fit, minmax(300px, 300px))'
      }
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' }
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: []
}
