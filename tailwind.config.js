/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'DarkmdEl': "hsl(209, 23%, 22%)",
        'DarkmdBk': "hsl(207, 26%, 17%)",
        'DarkmdTxt': "hsl(0, 0%, 100%)",
        'LtModTxtmdBk': "hsl(200, 15%, 8%)",
        'LtModTxtmdInp': "hsl(0, 0%, 52%)",
        'LtModBk': "hsl(0, 0%, 98%)",
      },
      container: {
        padding: {
          DEFAULT: '1.5rem',
          sm: '3rem',
          lg: '6rem',
          '2xl': '4rem',
          // '3xl': '4rem',
        },

        center: true,
      },
      fontFamily: {
        'nunito': ['Nunito Sans'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      screens: {
        '3xl': '1700px',
      },
    },
  },
  plugins: [],
}
