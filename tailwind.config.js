module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: [ 'Poppins', 'sans-serif' ]
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
