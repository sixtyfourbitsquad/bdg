/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: { 
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#F59E0B',
          500: '#D4AF37',
          600: '#B38A2E'
        },
        ink: '#0A0A0A'
      },
      boxShadow: { 
        glow: '0 0 0 3px rgba(212,175,55,0.35)' 
      }
    },
  },
  plugins: []
}
