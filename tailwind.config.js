/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: ["burtons", "sans-serif"],
      },
      colors: {
        // Add custom colors if needed
      },
      boxShadow: {
        'custom-light': '0 2px 5px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 2px 10px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        'fade-in-letter': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-letter': 'fade-in-letter 0.1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
