module.exports = {
  content: ["./src/*/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui")
  ],
}
