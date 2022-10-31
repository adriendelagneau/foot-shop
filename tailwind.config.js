/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Graffiti: ["Graffiti"],
      },
      animation : {
        'social': 'social 0.2s ease-in-out forwards',
        'rotateStar': 'rotateStar 1.2s linear ',
        'tourniquet': 'tourniquet  10s linear infinite',
      },
      keyframes: {
        social: {
          '0%': { transform: 'scale(1)'},
          '100%': { transform: 'scale(1.2)'}
        },
        rotateStar: {
          '0%': { transform: 'rotateY(90deg)'},
          '100%': { transform: 'rotateY(0deg)' }
        },
        rotateCube: {
          '0%': { transform: 'rotateX(45deg) rotateY(-45deg'},
          '25%': { transform: 'rotateX(-45deg) rotateY(-45deg'},
          '50%': { transform: 'rotateX(45deg) rotateY(45deg'},
          '75%': { transform: 'rotateX(-45deg) rotateY(45deg'},
          '100%': { transform: 'rotateX(45deg) rotateY(-45deg'},
        },
        tourniquet: {
          '0%': { transform: 'rotateY(0deg)'},
          '100%': { transform: 'rotateY(360deg)' }
        },
        loaderPart1: {
          '37.5%': { transform: 'translateX(0px'},
          '50%': { transform: 'translateX(100px'},
          '100%': { transform: 'translateX(100px'},
        },
        loaderPart2: {
          '25%': { transform: 'translateX(0px'},
          '37.5%': { transform: 'translateX(100px'},
          '100%': { transform: 'translateX(100px'},
        },
        loaderPart3: {
          '12.5%': { transform: 'translateY(0px'},
          '25%': { transform: 'translateY(100px'},
          '100%': { transform: 'translateY(100px'},
        },
        loaderPart4: {
          '37.5%': { transform: 'translateY(0px'},
          '50%': { transform: 'translateY(-100px'},
          '100%': { transform: 'translateY(-100px'},
        },
        loaderPart5: {
          '12.5%': { transform: 'translate(*100px, 0px'},
          '87.5%': { transform: 'translate(-100px, 0px'},
          '100%': { transform: 'translate(-100px, 100px'},
        },
        loaderPart6: {
          '62.5%': { transform: 'translateY(0px'},
          '75%': { transform: 'translateY(-100px'},
          '100%': { transform: 'translateY(-100px'},
        },
        loaderPart7: {
          '75%': { transform: 'translateX(0px'},
          '87.5%': { transform: 'translateX(-100px'},
          '100%': { transform: 'translateX(-100px'},
        }
      }
    }
  },
  plugins: [],
}
