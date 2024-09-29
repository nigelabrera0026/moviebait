import { test, expect } from '@playwright/test';

test('toggle dark mode', async ({ page }) => {
  await page.goto('http://localhost:5173');  // Ensure Vite is running

  // Click the "Dark Mode" toggle button
  await page.click('text=Dark Mode');

  // Verify that the dark mode class is applied to the document root
  const darkModeEnabled = await page.evaluate(() => {
    return document.documentElement.classList.contains('dark');
  });
  expect(darkModeEnabled).toBeTruthy();
});
