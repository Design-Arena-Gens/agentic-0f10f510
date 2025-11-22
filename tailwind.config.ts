import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f3ff",
          100: "#e3e4ff",
          200: "#c7c9ff",
          300: "#a2a5ff",
          400: "#7b7cff",
          500: "#5b5bf2",
          600: "#3f3fcb",
          700: "#3131a0",
          800: "#29297f",
          900: "#262664"
        },
        accent: "#ff6f61"
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
