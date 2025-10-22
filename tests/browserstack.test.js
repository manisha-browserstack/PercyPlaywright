// tests/browserstack.test.js
const { test, expect } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');

// Extend timeout for the test
test.setTimeout(90000); // 90 seconds

test('BrowserStack home page Percy snapshot', async ({ page }) => {
  console.log('Navigating to BrowserStack platform...');

  // Use 'domcontentloaded' instead of 'networkidle' for faster stability
  await page.goto('https://www.browserstack.com', {
    waitUntil: 'domcontentloaded',
    timeout: 90000
  });

  // Basic check
  await expect(page).toHaveTitle(/BrowserStack/);

  // Give it a second to render dynamic elements
  await page.waitForTimeout(3000);

  // Percy snapshot
  await percySnapshot(page, 'BrowserStack Home Page');

  console.log('✅ Percy snapshot captured successfully');
});
