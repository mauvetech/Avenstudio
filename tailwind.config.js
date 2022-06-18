module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["helvetica neue", "Badelion", "Lobster", "myriad-pro"],
        cursive: ["Lobster"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
