/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#6366F1",
        accent: "#06B6D4",
        darkBg: "#0F172A",
        textDark: "#111827",
        textMuted: "#6B7280",
      },
      fontFamily: {
        heading: ["Sora", "Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
