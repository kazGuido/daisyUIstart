const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [require('daisyui')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
