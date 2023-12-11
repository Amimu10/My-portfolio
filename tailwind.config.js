/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], 
        'cinzel':['Cinzel', 'serif'], 
        'montserrat': ['Montserrat', 'sans-serif'] 
      },
      colors: {
        // bodyColor: "#212428",
        bodyColor: "#402570",
        lightText: "#c4cfde",
        boxBg : "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#E15549",
      },
      boxShadow: {
        shadow: "10px 10px 19px #1cle22 -10px -10px 19px #262a2e" 
      }
    },
  },
  plugins: [require("daisyui")],  
}

