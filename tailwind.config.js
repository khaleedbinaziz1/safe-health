/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#007E85",
        
"secondary": "#D926AA",
        
"accent": "#EBFBF1",
        
"neutral": "#191D24",
        
"base-100": "#FFFFFF",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",


        
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

