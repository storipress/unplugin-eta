import { test as base } from '@playwright/test'
import { createServer } from 'vite'
import invariant from 'tiny-invariant'

export const test = base.extend({
  page: async ({ page }, use) => {
    const devServer = await createServer()
    await devServer.listen()
    invariant(devServer.resolvedUrls, 'no resolved urls')
    const urls = devServer.resolvedUrls
    page.goto(urls.local[0])
    await use(page)
    await devServer.close()
  },
})

export { expect } from '@playwright/test'
