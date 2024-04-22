/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary : "#ebebeb",
        primary_light : "#f5f5f5",
        secondary : "#fff",
      },
      fontFamily: {},
    },
  },
  plugins: [],
}

