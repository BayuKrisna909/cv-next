/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.jsx"
  ],
  theme: {
    extend: {
      screens: {
        "phone-lg": {
            max: "900px",
        },
        phone: {
            max: "768px",
        },
      },
    },
  },
  plugins: [],
}
