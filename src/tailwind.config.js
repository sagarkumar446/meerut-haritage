/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.js",
    "./**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        heritage: "#1f2a2c",
        "heritage-brown": "#5b3a2e",
        "heritage-gold": "#c99b4a",
        "heritage-cream": "#f6efe7",
        "heritage-tan": "#d9c4a6",
        sandstone: "#d08b5b",
        emerald: "#2f7d68",
        "warm-orange": "#e07a3f",
        "warm-red": "#b6462e",
      },
      fontFamily: {
        display: ["\"Fraunces\"", "serif"],
        body: ["\"Source Serif 4\"", "serif"],
        playfair: ["\"Playfair Display\"", "serif"],
      },
      boxShadow: {
        soft: "0 24px 60px rgba(31, 42, 44, 0.18)",
        lift: "0 16px 40px rgba(31, 42, 44, 0.14)",
      },
    },
  },
  plugins: [],
}
