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
        // Ironworks night-shift palette
        bg: "#151210", // warm near-black page background
        "bg-raised": "#1D1915", // cards / raised flat surfaces
        "bg-border": "#2E2822", // hairline borders
        ink: "#0D0B09", // deepest black, contrast sections
        "ink-deep": "#1A1613", // panels inside deep sections
        "ink-soft": "#B3AB9F", // secondary text
        "ink-muted": "#8A8175", // captions, metadata
        cream: "#F1EDE6", // primary text
        ember: "#C05A2B", // single accent: buttons, key highlights
        "ember-deep": "#A34A22", // hover states
        "ember-bright": "#E17A4C", // ember text + glows on dark
        "on-dark": "#F1EDE6", // text on deep sections
        "on-dark-soft": "#B3AB9F", // secondary text on deep sections
        "on-dark-border": "#2E2822", // hairlines on deep sections
      },

      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },

      maxWidth: {
        content: "1100px",
      },

      boxShadow: {
        "glow-ember": "0 0 28px rgba(192, 90, 43, 0.35)",
        "glow-ember-lg": "0 0 40px rgba(192, 90, 43, 0.5)",
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
