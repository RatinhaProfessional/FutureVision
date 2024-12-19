/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Bona Nova"', 'serif'], // Font for headers
        paragraph: ['"Space Grotesk"', 'serif'], // Font for paragraphs
      },
    },
  },
  plugins: [],
}

