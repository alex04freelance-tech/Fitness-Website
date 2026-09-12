/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Neutral foundation
        ivory: '#F8F6F1',
        warm: '#F3F0E9',
        stone: {
          50: '#EDEBE5',
          100: '#E0DDD4',
          200: '#C9C5BA',
          300: '#A8A397',
          400: '#87827A',
          500: '#6B6760',
          600: '#524F4A',
          700: '#3D3B37',
          800: '#2A2926',
          900: '#1A1917',
        },
        charcoal: '#1A1917',
        graphite: '#0F0E0D',
        black: '#080706',
        // Accent — muted sage
        sage: {
          50: '#F0F3ED',
          100: '#E0E8D9',
          200: '#C4D1B5',
          300: '#A3B88E',
          400: '#8B9D7B',
          500: '#6E8159',
          600: '#566745',
          700: '#435037',
          800: '#333B2A',
          900: '#232919',
        },
        terracotta: {
          50: '#FBF0EB',
          100: '#F5DCCF',
          200: '#EAB89C',
          300: '#DD9168',
          400: '#C76D43',
          500: '#A85A36',
          600: '#86482B',
          700: '#643921',
          800: '#4A2C1C',
          900: '#331E13',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-sm': ['clamp(3rem, 8vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display': ['clamp(4rem, 12vw, 9rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(5rem, 16vw, 12rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'editorial': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-up': 'slide-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scale-in': 'scale-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
