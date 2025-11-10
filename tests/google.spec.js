const { test, expect } = require('@playwright/test');

test.describe('Google homepage', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('https://www.google.com/', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/Google/);
  });
});
