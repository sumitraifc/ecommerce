/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '510px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        heading: ['Lora', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        // veronovaGreen:"#578B89",
        // primary1: "#6EB4D1",
        // primary2: "#B2A7D6",
        // accent1: "#FF6E6C",
        // accent2: "#91C788",
        // grey: "#333333",
        // white: "#FFFFFF",
        // mainBg: "#FFFAF8",
         color1:"#bc254e",
         color2:"#ef4444",
         color3:"#eb2e61",
         color4:"#761731",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          'scrollbar-width': 'none',   /* Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',             /* Chrome, Safari */
        },
      });
    },
  ],
};