/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "ctfk-motion": "#4c97ff",
        "ctfk-look": "#9966ff",
        "ctfk-sound": "#cf63cf",
        "ctfk-event": "#ffbf00",
        "ctfk-control": "#ffab19",
        "ctfk-sensing": "#5cb1d6",
        "ctfk-op": "#59c059",
        "ctfk-var": "#ff8c1a",
        "ctfk-my": "#ff6680",
      },
    },
  },
  plugins: [],
};
