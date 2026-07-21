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
        // Ironworks palette
        bg: "#F4F1EC", // warm off-white page background
        "bg-raised": "#FBF9F5", // cards / raised flat surfaces on light
        "bg-border": "#DED8CE", // hairline borders on light
        ink: "#232323", // primary text + dark section backgrounds
        "ink-deep": "#1B1B1B", // panels sitting on graphite sections
        "ink-soft": "#5A5651", // secondary text
        "ink-muted": "#7A756E", // captions, metadata
        ember: "#C05A2B", // single accent: buttons, key highlights
        "ember-deep": "#A34A22", // ember text on light bg + hover states
        "on-dark": "#F1EDE6", // text on graphite sections
        "on-dark-soft": "#A9A39A", // secondary text on graphite
        "on-dark-border": "#3A3835", // hairline borders on graphite
      },

      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },

      maxWidth: {
        content: "1100px",
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
