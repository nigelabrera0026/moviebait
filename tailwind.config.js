module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        muted: {
          light: '#f0f0f0',
          dark: '#1a1a1a',
        },
        primary: {
          light: '#4CAF50', // green-ish primary color in light mode
          dark: '#1B5E20', // darker green for dark mode
        },
        textPrimary: {
          light: '#212121',
          dark: '#e0e0e0',
        },
      },
    },
  },
  plugins: [],
};
