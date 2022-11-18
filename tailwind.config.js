module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./public/index.html",
    "./src/**/*.{html,js}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
      boxShadow: {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      },
      height:{
        fit:"100vh",
        fitw:"100vw"
      }
    },
    
  },
  variants: {
    wordBreak: ["responsive", "group-hover"],
    textOverflow: ["responsive", "group-hover"],
    extend: {
      fontWeight: ["hover", "focus"],
    },
  },
  plugins: [],
};
