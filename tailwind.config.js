module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#141c2f",
        primary_light: "#1f2a48",
        secondary: "#0178fd",
        secondary_light: "#1d4a8a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
