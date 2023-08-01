/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        cartConfirm: {
          '0%': {},
          '100%': { backgroundColor: '#7CFC00' },
        },
        fadeIn: {
          '0%': {transform: 'translate(0px, 50px)'},
          '100%': {opacity: '1', transform: 'translate(0px, 0px)'}
        },
        scale: {
          '0%': { transform: 'scale(1.0)' },
          '100%': {transform: 'scale(1.1)'}
        }
      },
      animation: {
        'cart-confirm-200': 'cartConfirm 200ms ease-in-out forwards',
        'fade-in-200': 'fadeIn 200ms ease-in-out forwards',
        'fade-in-400': 'fadeIn 400ms ease-in-out forwards',
        'fade-in-600': 'fadeIn 600ms ease-in-out forwards',
        'fade-in-800': 'fadeIn 800ms ease-in-out forwards',
        'scale-200': 'scale 200ms ease-in-out forwards'
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
};
