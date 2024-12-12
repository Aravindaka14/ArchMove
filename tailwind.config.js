/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors:{
        NavText : "#2C2C2C",
        buttonBg : "#FD665E",
        heroOrange: "#FD665E",
        vectorArrowBg : "#000000",
        borderColor:"#E0E0E0"
      },
      letterSpacing: {
        '1p': '1%',
        '10p':'10%', // Custom letter spacing of 1%
      },
      width:{
        21:"21%",
        53:"53.125%",
        65:"65.49%",
        81:"81.11%"
      },
      height:{

        480:"480px"
      }
    },
  },
  plugins: [],
}

