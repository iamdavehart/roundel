const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js,ejs}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      "sans": [ "Poppins", ...defaultTheme.fontFamily.sans ]
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
