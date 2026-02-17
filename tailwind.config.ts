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
        // Backgrounds
        'bg-paper': '#FAFAF9',
        'bg-secondary': '#F5F5F4',
        'bg-dark': '#0F0F0F',
        'bg-elevated': '#FFFFFF',

        // Text
        'text-primary': '#0F0F0F',
        'text-secondary': '#64748B',

        // Brand colors
        'primary': '#0A6E6E',
        'primary-dark': '#085858',
        'primary-light': '#0D8A8A',
        'accent-warm': '#FF6B4A',
        'accent-warm-dark': '#E5542F',
        'accent-bright': '#F59E0B',
        'accent-bright-dark': '#D97706',

        // Neutrals
        'slate-100': '#F1F5F9',
        'slate-200': '#E2E8F0',
        'slate-300': '#CBD5E1',
        'slate-400': '#94A3B8',
        'slate-500': '#64748B',
        'slate-600': '#475569',
        'slate-700': '#334155',
        'slate-800': '#1E293B',
        'slate-900': '#0F172A',

        // Status
        status: {
          success: '#10b981',
          error: '#ef4444',
          warning: '#f59e0b',
        },
      },

      boxShadow: {
        'soft': '0 2px 8px rgba(10, 110, 110, 0.08)',
        'soft-md': '0 4px 16px rgba(10, 110, 110, 0.12)',
        'soft-lg': '0 8px 24px rgba(10, 110, 110, 0.15)',
        'soft-xl': '0 16px 40px rgba(10, 110, 110, 0.18)',
        'soft-warm': '0 4px 16px rgba(255, 107, 74, 0.12)',
        'soft-warm-md': '0 8px 24px rgba(255, 107, 74, 0.18)',
        'float': '0 12px 32px rgba(15, 15, 15, 0.1)',
        'float-lg': '0 20px 48px rgba(15, 15, 15, 0.15)',
        'card': '0 2px 12px rgba(15, 15, 15, 0.06), 0 1px 3px rgba(15, 15, 15, 0.08)',
        'card-hover': '0 8px 24px rgba(15, 15, 15, 0.10), 0 2px 6px rgba(15, 15, 15, 0.08)',
      },

      borderRadius: {
        'card': '12px',
        'button': '10px',
        'badge': '8px',
      },

      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },

      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'count-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },

      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in': 'fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-right': 'slide-right 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'count-up': 'count-up 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },

      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(ellipse at 20% 50%, rgba(10, 110, 110, 0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255, 107, 74, 0.04) 0%, transparent 60%)',
        'gradient-mesh-dark': 'radial-gradient(ellipse at 20% 50%, rgba(10, 110, 110, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255, 107, 74, 0.06) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
};

export default config;
