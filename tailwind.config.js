module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-grey': '#1E2226',
        'good-blue': '#4B52ED'
      }
    },
  },
  plugins: [require("daisyui")],
}
