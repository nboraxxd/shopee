/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        primary: '#ee4d2d',
        secondary: '#F5F5F5',
      },
    },
  },
  plugins: [],
}
