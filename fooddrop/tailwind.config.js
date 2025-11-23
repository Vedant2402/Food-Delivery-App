/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF8A00', // Orange from HyperMart logo/cart
        secondary: '#00B894', // Teal from Groceries
        accent: '#0984E3', // Blue from Appliances
        purple: '#6C5CE7', // Purple from Fashion
        bg: '#F8F9FA',
        surface: '#FFFFFF',
        text: {
          main: '#2D3436',
          muted: '#636E72',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'card': '0 4px 20px rgba(0,0,0,0.05)',
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      }
    },
  },
  plugins: [],
}