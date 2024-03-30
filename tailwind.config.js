/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    
    extend: {
     colors: {
      "brown":{
        "100":"#ECE0D1",
        "300": "#DBC1AC",
        "600": "#967259",
        "900": "##634832"
      },
    },
      boxShadow: {
         "4xl": "0px 1px 10px 0px #0000000D"
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily:{
         "dana": "Dana Regular",
         "dana-medium": "Dana Medium",
         "dana-demiBold": "Dana DemiBold",
         "moraba": "moraba regular",
         "moraba-medium": "moraba medium",
         "moraba-demiBold": "moraba demibold",
      },
      backgroundImage: {
        'coffee': "url('/img/headerBgDesktop.png')", 
    },
     },
    },
  plugins: [],
}
