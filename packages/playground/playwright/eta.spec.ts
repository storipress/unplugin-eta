import { test, expect } from './fixtures'

test('has Eta text', async ({ page }) => {
  await expect(page.locator('#root')).toHaveText('Hello from Eta')
})
