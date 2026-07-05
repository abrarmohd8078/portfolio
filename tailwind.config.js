/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#5eead4",
        fg: "#e6edf3",
        "fg-muted": "#8b949e",
        card: "#131a24",
      },
    },
  },
  plugins: [],
}
