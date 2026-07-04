import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        charcoal: "#111111",
        white: "#FFFFFF",
        line: "#E5E5E5",
        muted: "rgba(255,255,255,0.56)",
        "muted-dim": "rgba(255,255,255,0.34)",
        glass: "rgba(255,255,255,0.045)",
        "glass-border": "rgba(255,255,255,0.10)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gridDrift: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "64px 64px" },
        },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        marquee: "marquee 26s linear infinite",
        gridDrift: "gridDrift 24s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
