/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sourceCode: ['Source Code Pro', 'monospace'],
      }
    },
  },
  plugins: [],
}

