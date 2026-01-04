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
        primary: {
          50: '#f2f5f0',
          100: '#e3ead9',
          200: '#c7d5b3',
          300: '#abc08d',
          400: '#8fab67',
          500: '#6B8E3F',
          600: '#547233',
          700: '#3F5527',
          800: '#2A391A',
          900: '#151C0D',
        },
        accent: {
          50: '#f5f7ed',
          100: '#e8edcf',
          200: '#d1db9f',
          300: '#bac96f',
          400: '#a3b73f',
          500: '#8A9A5B',
          600: '#6f7b49',
          700: '#545c37',
          800: '#393e25',
          900: '#1e1f13',
        },
      },
    },
  },
  plugins: [],
};
export default config;
