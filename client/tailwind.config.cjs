/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //animations used from: https://tail-animista.vercel.app/
      animation: {
        "fade-in-left": "fade-in-left 2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "jello-vertical": "jello-vertical 0.8s ease   both",
        "fade-in-fwd": "fade-in-fwd 2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "slide-in-left": "slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-in-right": "slide-in-right 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-out-left": "slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both"
      },
      keyframes: {
        "fade-in-left": {
          "0%": {
            transform: "translateX(-50px)",
            opacity: "0"
          },
          to: {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "jello-vertical": {
          "0%,to": {
            transform: "scale3d(1, 1, 1)"
          },
          "30%": {
            transform: "scale3d(.75, 1.25, 1)"
          },
          "40%": {
            transform: "scale3d(1.25, .75, 1)"
          },
          "50%": {
            transform: "scale3d(.85, 1.15, 1)"
          },
          "65%": {
            transform: "scale3d(1.05, .95, 1)"
          },
          "75%": {
            transform: "scale3d(.95, 1.05, 1)"
          }
        },
        "fade-in-fwd": {
          "0%": {
            transform: "translateZ(-80px)",
            opacity: "0"
          },
          to: {
            transform: "translateZ(0)",
            opacity: "1"
          }
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-1000px)",
            opacity: "0"
          },
          to: {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "slide-in-right": {
          "0%": {
              transform: "translateX(1000px)",
              opacity: "0"
          },
          to: {
              transform: "translateX(0)",
              opacity: "1"
          }
        },
        "slide-out-left": {
          "0%": {
              transform: "translateX(0)",
              opacity: "1"
          },
          to: {
              transform: "translateX(-1000px)",
              opacity: "0"
          }
        }
      },
      colors: {

      },
      fontFamily: {
        robotomono: ["Roboto Mono"]
      }
    },
  },
  plugins: [],
}