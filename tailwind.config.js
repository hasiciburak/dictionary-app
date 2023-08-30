/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-black': '#050505',
        'custom-black-2': '#1F1F1F',
        'custom-black-3': '#2D2D2D',
        'custom-black-4': '#3A3A3A',
        'custom-gray': '#757575',
        'custom-gray-2': '#E9E9E9',
        'custom-gray-3': '#F4F4F4',
        white: '#FFFFFF',
        'dark-orchid': '#A445ED',
        'sunset-orange': '#FF5252',
      },
      fontFamily: {
        inter: ['"Inter"', 'Arial', 'Helvetica', 'sans-serif'],
        lora: ['"Lora"', 'serif'],
        inconsolata: ['"Inconsolata"', '"Courier New"', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}
