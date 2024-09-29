import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',  // This is where all test files will be placed
  retries: 1,          // Retries failed tests once
  use: {
    baseURL: 'http://localhost:5173',  // Your app's URL (for Vite, it's localhost:5173)
    headless: true,                     // Run in headless mode
    viewport: { width: 1280, height: 720 },  // Set the default viewport size
  },
});