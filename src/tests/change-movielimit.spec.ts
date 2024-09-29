import { test, expect } from '@playwright/test';

test('change movie display limit to 50', async ({ page }) => {
  await page.goto('http://localhost:5173');  // Ensure Vite is running

  // Change the movie limit to 50
  await page.selectOption('select', '50');
  await page.click('text=Search'); // Click search to update the list

  // Verify that the number of movies displayed is less than or equal to 50
  const movieCards = await page.$$('.movie-card');  // Get all movie cards
  expect(movieCards.length).toBeLessThanOrEqual(50);
});
