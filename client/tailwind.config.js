/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Bona Nova"', 'serif'],  // Apply Google font to headers
        paragraph: ['"Space Grotesk"', 'sans-serif'],  // Apply Google font to paragraphs
      },
      colors: {
        'light-green' : '#378C84',
        'pink' : '#D14E4B',
        'orange' : '#BF4324',
      },
    },
  },
  plugins: [],
}

