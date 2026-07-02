/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#12142B',   // light-mode heading text
          muted: '#5A5C7A',     // light-mode body text
        },
        paper: {
          DEFAULT: '#F7F7FC',   // light-mode base bg
          card: '#FFFFFF',      // light-mode card bg
          sunk: '#EFEEF9',      // light-mode recessed bg
        },
        base: {
          DEFAULT: '#0A0D1A',   // dark-mode deepest bg
          surface: '#12162A',   // dark-mode section bg
          elevated: '#171C34',  // dark-mode card bg
          line: '#262B4A',      // dark-mode hairline borders
        },
        accent: {
          DEFAULT: '#8B7CF6',   // violet — primary accent
          soft: '#B7ACFA',
          strong: '#6D42E0',    // deeper violet, used on light bg for contrast
        },
        signal: {
          // DEFAULT: '#4FE0C4',   // teal — system/status accent, used sparingly
        },
        mist: {
          DEFAULT: '#F1F0FA',   // dark-mode heading text
          muted: '#8D8FB3',     // dark-mode body text
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        node: '0 0 0 1px rgba(139, 124, 246, 0.35), 0 12px 32px rgba(10, 13, 26, 0.45)',
        'node-light': '0 0 0 1px rgba(109, 66, 224, 0.15), 0 12px 32px rgba(76, 68, 143, 0.10)',
        glowSm: '0 0 0 1px rgba(139, 124, 246, 0.25), 0 0 24px rgba(139, 124, 246, 0.18)',
      },
      backgroundImage: {
        blueprint: 'linear-gradient(rgba(139,124,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,124,246,0.08) 1px, transparent 1px)',
        'blueprint-light': 'linear-gradient(rgba(109,66,224,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(109,66,224,0.07) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
