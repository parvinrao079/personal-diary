import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    themes: [
      {
        light: {
          primary: '#42b3c2',
          secondary: '#8b5cf6',
          accent: '#ff7494',
          neutral: '#2a2e37',
          'base-100': '#ffffff',
          'base-200': '#f3f4f6',
          'base-300': '#e5e7eb',
        },
        dark: {
          primary: '#42b3c2',
          secondary: '#f97316',
          accent: '#8b5cf6',
          neutral: '#2a2e37',
          'base-100': '#1f2937',
          'base-200': '#111827',
          'base-300': '#0f172a',
        },
      },
    ],
  },
};
