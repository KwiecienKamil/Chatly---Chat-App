/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        messBlue: "#006AFF",
        google: "#DB4437",
        github: "#171515"
      }
    },
  },
  plugins: [],
}

