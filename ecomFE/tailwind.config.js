/** @type {import('tailwindcss').Config} */
export default{
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        darkBackground: '#0C111F',
        brightColor: "#87CEEB"
      }
    },
  },
  plugins: [],
}

