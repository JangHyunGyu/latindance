const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://latindance.kr/index-en.html';

const gotoHome = async (page) => {
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await expect(page.locator('.venue-card').first()).toBeVisible();
};

test.describe('Latindance.kr English 기능 검증', () => {
  test('card count matches result count', async ({ page }) => {
    await gotoHome(page);

    const cards = page.locator('.venue-card');
    const cardCount = await cards.count();
    expect(cardCount).toBeGreaterThan(0);

    const countText = await page.locator('[data-result-count]').innerText();
    const match = countText.match(/(\d+)/);
    expect(match).not.toBeNull();
    const parsed = Number(match[1]);
    expect(parsed).toBe(cardCount);
  });

  test('region filter shows only Busan', async ({ page }) => {
    await gotoHome(page);

    const regionValue = await page.evaluate(() => {
      const select = document.querySelector('[data-filter-region]');
      if (!select) {
        return null;
      }
      const option = Array.from(select.options).find((opt) => opt.textContent.includes('Busan'));
      return option ? option.value : null;
    });

    expect(regionValue).not.toBeNull();
    await page.selectOption('[data-filter-region]', regionValue);

    const cards = page.locator('.venue-card');
    await expect(cards.first()).toBeVisible();

    const metaTexts = await page.locator('.venue-card__meta').allInnerTexts();
    for (const meta of metaTexts) {
      expect(meta.replace(/\s+/g, ' ')).toContain('Busan');
    }
  });

  test('search finds specific venue', async ({ page }) => {
    await gotoHome(page);

    const searchInput = page.locator('[data-filter-search]');
    await searchInput.fill('Everlatin');

    const cards = page.locator('.venue-card');
    await expect(cards).toHaveCount(1);
    await expect(cards.first().locator('.venue-card__name')).toHaveText('Everlatin');
    await expect(page.locator('[data-result-count]')).toHaveText(/1 communities listed/);
  });
});
