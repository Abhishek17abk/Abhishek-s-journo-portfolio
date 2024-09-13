module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0047AB',  // Dark blue (Cobalt)
        secondary: '#72A0C1', // Light blue (Air Superiority Blue)
        background: '#ffffff',
        text: '#000000',
        accent: '#000000'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
