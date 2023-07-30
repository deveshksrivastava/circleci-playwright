const { test, expect, devices } = require('@playwright/test');
const config = {
  reporter: [['junit', { outputFile: 'results.xml' }]],
  use: {
    trace: 'on',
    screenshot: 'on',
    video: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
};
module.exports = config;
test('Login as admin', async ({ page }) => {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );
  await expect(page).toHaveTitle(/OrangeHRM/);
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  // await page.locator('input:has-text("Login")').click();
  // await page.locator('input#Login').click();
  await page.getByRole('button').click();
  await page.waitForURL(
    'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
  );
  // await page.locator('id=welcome').click();
});
