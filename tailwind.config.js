/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },

      colors: {
        brand: {
          blue: {
            light: "#3B82F6",
            DEFAULT: "#1E40AF",
          },
          gray: {
            light: "#F9FAFB",
            DEFAULT: "#374151",
            dark: "#111827",
          },
          red: {
            light: "#EF4444",
            dark: "#B91C1C",
          },
        },
      },

      fontSize: {
        h1: ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["2rem", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
};
