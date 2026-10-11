import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FBF9F5",
          subtle: "#F5F1E9",
          card: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#142426",
          muted: "#596667",
          faint: "#95A1A2",
        },
        dawn: {
          DEFAULT: "#D97746",
          light: "#FDF2EC",
          dark: "#B55A2C",
          hover: "#C86B3B",
        },
        border: {
          DEFAULT: "#ECE7E1",
          subtle: "#F0ECE6",
        },
        verified: {
          DEFAULT: "#2A6747",
          bg: "#EDF5F0",
        },
        legal: {
          DEFAULT: "#275A82",
          bg: "#EEF5FA",
        },
        finance: {
          DEFAULT: "#825C1B",
          bg: "#FBF5E9",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "Newsreader",
          "Playfair Display",
          "Georgia",
          "Cambria",
          "serif",
        ],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(20, 36, 38, 0.04)",
        card: "0 2px 8px rgba(20, 36, 38, 0.04)",
      },
      borderRadius: {
        DEFAULT: "8px",
        card: "12px",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};

export default config;
