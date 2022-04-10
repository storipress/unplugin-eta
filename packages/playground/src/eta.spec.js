import { render } from 'eta'
import TemplateFn from './hello.eta'
import { test, expect } from 'vitest'

test('eta plugin load template correctly', () => {
  expect(render(TemplateFn, { name: 'eta' })).toEqual('Hello from eta')
})
