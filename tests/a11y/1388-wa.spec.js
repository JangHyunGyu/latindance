const { test } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

const TARGET_URL = 'https://www.1388.go.kr/';

const formatNodeTargets = (nodes) =>
  nodes
    .map((node) =>
      Array.isArray(node.target)
        ? node.target.join(' ')
        : String(node.target))
    .slice(0, 5);

test.describe('1388.go.kr WA 준수 점검', () => {
  test('KWCAG 2.1 A/AA (WA) 검사', async ({ page }) => {
    await page.goto(TARGET_URL, { waitUntil: 'networkidle' });

    const results = await new AxeBuilder({ page })
      .withTags(['wcag21a', 'wcag21aa'])
      .analyze();

    const { violations, passes, incomplete, inapplicable } = results;

    console.log(`총 검사 항목: passes=${passes.length}, violations=${violations.length}, incomplete=${incomplete.length}, inapplicable=${inapplicable.length}`);

    if (violations.length > 0) {
      console.log('\n접근성 위반 상세 목록 (최대 5개 노드씩):');
      for (const violation of violations) {
        const targets = formatNodeTargets(violation.nodes);
        console.log(`- [${violation.impact ?? 'no-impact'}] ${violation.id}: ${violation.help}`);
        console.log(`  도움말: ${violation.helpUrl}`);
        console.log(`  대상 노드: ${targets.join(' | ')}`);
      }
    } else {
      console.log('위반 항목이 발견되지 않았습니다.');
    }
  });
});
