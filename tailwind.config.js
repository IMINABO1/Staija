/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        'gradient-135': 'linear-gradient(135deg, var(--tw-gradient-stops))'
      },
    },
  },
  plugins: [],
}