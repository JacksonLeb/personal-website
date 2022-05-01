module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-grey': '#1E2226',
      }
    },
  },
  plugins: [require("daisyui")],
}
