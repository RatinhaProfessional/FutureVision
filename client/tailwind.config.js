/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Bona Nova"', 'serif'],  // Google font to headers
        paragraph: ['"Space Grotesk"', 'sans-serif'],  // Google font to paragraphs
      },
      colors: {
        'light-green' : '#378C84',
        'pink' : '#D14E4B',
        'orange' : '#BF4324',
        'grey' : '#202020',
        'light-grey' : '#9A9A9A',
      },
    },
  },
  plugins: [],
}

