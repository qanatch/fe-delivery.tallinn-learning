import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.URL);
})

test('check button Submit enabled', async ({ page }) => {
  const submitButton= await page.getByTestId('signIn-button')
  await expect(submitButton).toBeEnabled()
});

test('check PopUp visible', async ({ page }) => {
  const userNameField = await page.getByTestId("username-input")
  const userEmailField = await page.getByTestId("password-input")
  await userNameField.fill("test")
  await userEmailField.fill("test@test.com")
  const submitButton= await page.getByTestId('signIn-button')
  await submitButton.click()
  const authPopUp = await page.getByTestId("authorizationError-popup")
  await expect(authPopUp).toBeVisible()
});

