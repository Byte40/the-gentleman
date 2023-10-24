module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_00": "#00000000",
          "900_72": "#00000072",
          "900_3f": "#0000003f",
        },
        orange: {
          400: "#ffa722",
          "400_00": "#ffa72200",
          "400_66": "#ffa72266",
          "500_4c": "#ff99004c",
          "400_3f": "#ffa7223f",
          "400_38": "#ffa72238",
        },
        gray: { 900: "#121212" },
        white: { A700: "#ffffff" },
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#ffa7223f,#ffa7223f)",
        gradient1: "radial-gradient(#ffa722,#00000000,#ffa722)",
        gradient2: "radial-gradient(#000000,#00000000)",
      },
      boxShadow: {
        bs1: "0px 4px  4px 0px #0000003f",
        bs: "0px 4px  10px 0px #0000003f",
      },
      fontFamily: {
        naste: "Naste",
        abhayalibremedium: "Abhaya Libre Medium",
        abhayalibre: "Abhaya Libre",
      },
      textShadow: {
        ts1: "0px 4px  4px #0000003f",
        ts: "0px 4px  10px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
