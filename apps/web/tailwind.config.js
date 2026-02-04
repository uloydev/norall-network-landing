/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Primary / Main Color - Dark teal/green #0B3F3A
        primary: {
          50: '#e9f2f1',
          100: '#d3e5e4',
          200: '#a7cbc9',
          300: '#7bb1ae',
          400: '#4f9793',
          500: '#0B3F3A',  // Base brand color
          600: '#093632',
          700: '#072c29',
          800: '#052321',
          900: '#031918',
          950: '#020f0e',
        },
        // Highlight / Accent Color - Bright yellow-green #D7E81E
        secondary: {
          50: '#fefef7',
          100: '#fcfcef',
          200: '#f9f9df',
          300: '#f6f6cf',
          400: '#f3f3bf',
          500: '#D7E81E',  // Base accent color
          600: '#c5d31b',
          700: '#b3be18',
          800: '#a1a915',
          900: '#8f9412',
          950: '#7d7f0f',
        },
        // Secondary / Neutral Color - Gray-green #5F6E6B
        accent: {
          50: '#f2f4f3',
          100: '#e5e8e7',
          200: '#cbd1cf',
          300: '#b1bab7',
          400: '#97a39f',
          500: '#5F6E6B',  // Base neutral color
          600: '#4c5856',
          700: '#394241',
          800: '#262c2b',
          900: '#131616',
          950: '#0a0b0b',
        },
        // Background Color - Light beige #ECE9E7
        background: {
          50: '#ffffff',
          100: '#fefefe',
          200: '#f9f7f6',
          300: '#f5f2f0',
          400: '#f0edeb',
          500: '#ECE9E7',  // Base background color
          600: '#d4d1cf',
          700: '#bcb9b7',
          800: '#a4a19f',
          900: '#8c8987',
          950: '#74716f',
        },
        // Profile/Avatar accent (keep for consistency)
        profile: {
          50: '#fef1f9',
          100: '#fde3f3',
          200: '#fbc7e7',
          300: '#f9abdb',
          400: '#f78fcf',
          500: '#f573c3',
          600: '#d4489f',
          700: '#b3347b',
          800: '#922057',
          900: '#710c33',
          950: '#50061f',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
