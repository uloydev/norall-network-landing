/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Dark navy blue - primary brand color
        primary: {
          50: '#e8f0f5',
          100: '#d1e1eb',
          200: '#a3c3d7',
          300: '#75a5c3',
          400: '#4787af',
          500: '#1a4d7a',  // Base from palette
          600: '#153e62',
          700: '#102f49',
          800: '#0b2031',
          900: '#061018',
          950: '#03080c',
        },
        // Medium blue - secondary brand color
        secondary: {
          50: '#f0f7fb',
          100: '#e1eff7',
          200: '#c3dfef',
          300: '#a5cfe7',
          400: '#87bfdf',
          500: '#5b9bd5',  // Base from palette
          600: '#4980b8',
          700: '#37648a',
          800: '#25485c',
          900: '#132c2e',
          950: '#091617',
        },
        // Light blue - accent/info color
        accent: {
          50: '#fbfdfe',
          100: '#f7fbfd',
          200: '#eff7fb',
          300: '#e7f3f9',
          400: '#dfeff7',
          500: '#b8d8e8',  // Base from palette
          600: '#93c2d9',
          700: '#6eacca',
          800: '#4996bb',
          900: '#2480ac',
          950: '#1e6a8d',
        },
        // Off-white/light background
        background: {
          50: '#ffffff',
          100: '#fefefe',
          200: '#fdfdfd',
          300: '#fbfcfc',
          400: '#f9fafb',
          500: '#f0f4f8',  // Base from palette
          600: '#e1e8ef',
          700: '#d2dce6',
          800: '#c3d0dd',
          900: '#b4c4d4',
          950: '#a5b8cb',
        },
        // Avatar/profile accent (pink/magenta)
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
