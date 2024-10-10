/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#240A34', // Adding the custom color
        'purple-black-100': '#7D5A8D', // Lighter purple with a hint of black
        'purple-black-200': '#674188', // Custom purple with more black (as you provided earlier)
        'purple-black-300': '#533768', // Darker purple shade
        'purple-black-400': '#3E2A4A', // Even darker purple
        'purple-black-500': '#2C1D32', // Very dark purple
        'purple-black-600': '#1D131E'
      },
    },
  },
  plugins: [],
}