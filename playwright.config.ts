import { defineConfig } from '@playwright/test';

// Define base URL based on environment
const isCI = process.env.CI; // Most CI environments set this variable to true
const baseURL = isCI
  ? 'https://your-github-pages-url' // Set this to your production or staging URL
  : 'http://localhost:5173'; // Localhost for development

export default defineConfig({
  testDir: './src/tests',  // Path to your Playwright tests
  retries: 1,              // Retries failed tests once
  use: {
    baseURL: baseURL,      // Conditionally set base URL based on environment
    headless: true,        // Run tests in headless mode
    viewport: { width: 1280, height: 720 },  // Set the default viewport size
  },
});