const path = require('path');
const { test, expect } = require('@playwright/test');

const pageUrl = 'file:///' + path.join(__dirname, '..', 'index.html').replace(/\\/g, '/');

test.describe('Latindance index page', () => {
  test('renders directory headline', async ({ page }) => {
    await page.goto(pageUrl);
    const title = page.locator('.results__title');
    await expect(title).toHaveText('링크 모음');
  });
});
