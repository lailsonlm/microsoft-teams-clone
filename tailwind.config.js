module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Segoe UI', 'sans-serif'],
    },
    extend: {
      colors: {
        indigo: {
          200: '#DADAE9',
          700: '#5B5FC7',
          800: '#444791',
        }
      }
    },
  },
  plugins: [],
}