/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        azul: {
          claro: '#C5DFFF',
          escuro: '#061E3C',
          hover: '#1057B0',
        },
        gabiPrimary: '#f2dae7',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        gabiTitulo: ['Vast Shadow', 'cursive'],
      },
      keyframes: {
        sino_kf: {
          '0%, 100%': {
            transform: 'rotate(-10deg)',
          },
          '50%': {
            transform: 'rotate(10deg)',
          },
        },
      },
      animantion: {
        sino: 'sino_kf 0.31s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
