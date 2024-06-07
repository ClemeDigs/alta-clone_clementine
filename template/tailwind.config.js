/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'darkGrey': '#1A1B1F',
      'purple': '#4f46e5',
      'darkBlue': '#111827',
      'darkPurple': '#3730a3'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}

