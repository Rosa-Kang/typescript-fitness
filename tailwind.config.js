/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#f8f4eb",
        "gray-50": "#efe6e6",
        "gray-100": "#dfcccc",
        "gray-500": "#5e0000",
        "primary-100":"#ffe1e0",
        "primary-300":"#ffa6a3",
        "primary-500": "#ff6b66",
        "primary-600": "#704c2c",
        "secondary-400": "#ffcd58",
        "secondary-500": "#ffc132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, rgba(255,97,106,.25),rgba(255,200,55,.25))",
        "mobile-home": "url(`./assets/HomePageGraphic.png`)",
        "decoration": "url('/src/assets/leaf.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        // leaf: "url(`./assets/leaf.png`)",
        // abstractwaves: "url(`./assets/AbstractWaves.png`)",
        // sparkles: "url(`./assets/Sparkles.png`)",
        // circles: "url(`./assets/Circles.png`)",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md:"1060px"
    }
  },
  plugins: [],
}

