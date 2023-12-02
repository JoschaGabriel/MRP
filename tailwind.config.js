/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    content: {
      relative: true,
      transform: (content) => content.replace(/taos:/g, ""),
      files: ["./src/*.{html,js}"],
    },
  },
  plugins: [require("taos/plugin")],
  safelist: ["!duration-[0ms]", "!delay-[0ms]", 'html.js :where([class*="taos:"]:not(.taos-init))'],
};
