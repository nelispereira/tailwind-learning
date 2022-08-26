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
    },
  },
  plugins: [],
};
