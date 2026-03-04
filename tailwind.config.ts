import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "Apple Color Emoji", "Segoe UI Emoji"],
      },
      colors: {
        bg: {
          DEFAULT: "#070b10",
          soft: "#0b121b",
          card: "#0d1622",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.10)",
        },
        text: {
          DEFAULT: "rgba(255,255,255,0.86)",
          muted: "rgba(255,255,255,0.62)",
          faint: "rgba(255,255,255,0.48)",
        },
        accent: {
          DEFAULT: "#38bdf8",
          soft: "rgba(56,189,248,0.15)",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 12px 40px rgba(0,0,0,0.55)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
