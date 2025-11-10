const { test, expect } = require('@playwright/test');

test.describe('Latindance production site', () => {
  test('loads landing page', async ({ page }) => {
    await page.goto('https://latindance.kr/', { waitUntil: 'networkidle' });
    await expect(page).toHaveTitle(/지역별 라틴댄스 모임/);
  });
});
