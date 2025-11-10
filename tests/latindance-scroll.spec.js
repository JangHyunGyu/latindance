const { test, expect } = require('@playwright/test');

const KOREAN_URL = 'https://latindance.kr/';
const ENGLISH_URL = 'https://latindance.kr/index-en.html';

const verifyScrollTopBehavior = async (page, baseUrl, expectedTitleText, label = expectedTitleText) => {
  await page.goto(baseUrl, { waitUntil: 'networkidle' });

  const scrollBtn = page.locator('.scroll-top');
  await expect(scrollBtn).toBeHidden();

  // 스크롤을 충분히 내려 버튼이 보이는지 확인
  await page.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'auto' });
  });

  await expect(scrollBtn).toBeVisible();

  const beforeScrollTop = await page.evaluate(() => window.scrollY || window.pageYOffset || 0);
  expect(beforeScrollTop).toBeGreaterThan(0);

  const start = Date.now();

  await scrollBtn.click();

  await page.waitForFunction(() => (window.scrollY || window.pageYOffset || 0) < 20, undefined, {
    timeout: 4000
  });

  const duration = Date.now() - start;
  console.log(`[${label}] scroll-to-top duration: ${duration}ms`);

  expect(duration).toBeLessThan(2500);

  const afterScrollTop = await page.evaluate(() => window.scrollY || window.pageYOffset || 0);
  expect(afterScrollTop).toBeLessThan(20);

  await expect(scrollBtn).toBeHidden();

  const title = page.locator('.results__title');
  await expect(title).toContainText(expectedTitleText);
};

test.describe('Latindance scroll-top 버튼', () => {
  test('한국어 페이지에서 스크롤', async ({ page }) => {
    await verifyScrollTopBehavior(page, KOREAN_URL, '링크 모음', '한국어 페이지');
  });

  test('영문 페이지에서 스크롤', async ({ page }) => {
    await verifyScrollTopBehavior(page, ENGLISH_URL, 'Directory', '영문 페이지');
  });
});
