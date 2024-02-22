/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sand: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

