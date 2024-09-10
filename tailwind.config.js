// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customStart: "#06061E",
        customStart1: "#009EE5",
        customEnd: "#2070F4",
        customEnd2: "#A36EFD",
        customBorder: '#2070F4',
        customGrayFill: "#1F2138",
        customGrayStroke: "#384160",
        customFontColor: "#D8E4FD",
        customButtonStroke: "#2070F4"
      },
      boxShadow: {
        'custom': '0 0 15px 5px rgba(168, 129, 252, 0.3)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        borderColorChange: {
          '0%, 100%': { borderColor: '#A881FC' }, // starting color
          '50%': { borderColor: '#1FC7D4' }, // mid color
        },
      },
      animation: {
        'border-pulse': 'borderColorChange 2s infinite', // animation name and duration
      },
    },
  },
  variants: {},
  plugins: [],
}
