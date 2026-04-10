/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        enki: {
          brown:    '#6B441E',
          gold:     '#E0A939',
          lilac:    '#DFC6E0',
          mauve:    '#B586AC',
          cream:    '#FFF8EB',
          charcoal: '#3D3D3D',
          dark:     '#1A1A1A',
        }
      }
    }
  },
  plugins: [],
}
