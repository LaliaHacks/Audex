/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#FB2576',
        secondary: '#2F58CD',
        sub: '#B7B7B9',
      },
      textColor: {
        'default': '#ffffff',
      },
      backgroundColor: {
        'default': '#080808',
      },
    },
  },
  plugins: [],
}