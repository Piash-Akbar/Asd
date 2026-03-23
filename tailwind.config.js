/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#1a1209',
          light: '#3d2e1a',
          muted: '#7a6548',
        },
        parchment: {
          DEFAULT: '#f5efe4',
          2: '#ede4d5',
          3: '#ddd0b8',
        },
        gold: {
          DEFAULT: '#b8922a',
          light: '#d4aa4a',
          pale: '#f0dfa0',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.76s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.56s ease forwards',
        'expand-x': 'expandX 0.56s cubic-bezier(0.16,1,0.3,1) forwards',
        shimmer: 'shimmer 4s linear infinite',
        float: 'float 5s ease-in-out infinite',
        'pulse-ring': 'pulseRing 1.6s ease-out infinite',
        'slide-in': 'slideIn 0.76s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        expandX: {
          from: { transform: 'scaleX(0)', opacity: '0' },
          to:   { transform: 'scaleX(1)', opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(1)',   opacity: '0.7' },
          '100%': { transform: 'scale(1.9)', opacity: '0' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(24px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16,1,0.3,1)',
        spring: 'cubic-bezier(0.34,1.56,0.64,1)',
      },
    },
  },
  plugins: [],
};
