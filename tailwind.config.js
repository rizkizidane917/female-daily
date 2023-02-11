module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC294F",
        secondary: "#D8D8D8",
        tertiary: "#A6A6A6",
      },
      fontSize: {
        h1: "24px",
        h2: "22px",
        h3: "20px",
        h4: "18px",
        h5: "16px",
        p: "14px",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 700,
        bold: 700,
      },
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
