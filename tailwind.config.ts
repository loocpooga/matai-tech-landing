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
        // Ledger colorway: sage ground, ink type, one green accent
        bg: "#DFEAD8", // page: the ground, every screen sits on this
        paper: "#F8FBF6", // cards, tables, inputs
        band: "#E9F1E3", // faint fills, inner dividers
        bar: "#DEE9D7", // zebra striping
        ink: "#14201A", // all type: a green-black, never pure black
        "ink-soft": "#5B6C60", // secondary type: sage-biased grey
        "ink-muted": "#5B6C60", // alias, same job as ink-soft
        rule: "#B3C8AB", // every 1px border and hairline
        deep: "#0E4A33", // the accent: links, wins, bar fills
        "deep-dark": "#0A3A28", // hover state for deep
        alert: "#96182D", // earned, never ambient
      },

      fontFamily: {
        display: ["var(--font-zilla)", "Georgia", "serif"],
        sans: ["var(--font-plex-sans)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },

      // The chassis: 2px is the largest curve anywhere
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "2px",
        md: "2px",
        lg: "2px",
        xl: "2px",
        "2xl": "2px",
        full: "9999px", // status dots only, never pills
      },

      maxWidth: {
        content: "1060px",
      },

      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.4, 0, 0.2, 1) both",
        "fade-in": "fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) both",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
