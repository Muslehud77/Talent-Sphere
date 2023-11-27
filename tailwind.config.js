/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      nova: ["Nova Square", "sans-serif"],
      bitter: ["Bitter", "serif"],
    },
  },
  plugins: [
    require("daisyui"),
    require("tw-elements/dist/plugin.cjs"),
    require("@sira-ui/tailwind"),
  ],
};
