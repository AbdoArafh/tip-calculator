module.exports = {
  content: ["./**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          900: "hsl(183, 100%, 15%)",
          800: "hsl(186, 14%, 43%)",
          700: "hsl(184, 14%, 56%)",
          500: "hsl(172, 67%, 45%)",
          400: "hsl(185, 41%, 84%)",
          300: "hsl(189, 41%, 97%)"
        },
        white: "white"
      },
      fontSize: {
        "regular": "24px"
      },
      fontFamily: {
        mono: "'Space Mono', ui-monospace"
      },
      fontWeight: {
        thin: 400,
        normal: 500,
        bold: 700
      }
    },
  },
  plugins: [],
}
