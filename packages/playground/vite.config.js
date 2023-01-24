import { defineConfig } from 'vite'
import { EtaPlugin } from '@storipress/unplugin-eta'
import Inspect from 'vite-plugin-inspect'

export default defineConfig(({ mode }) => ({
  root: __dirname,
  plugins: [EtaPlugin.vite(), mode === 'development' && Inspect()],
  test: {
    include: ['./src/*.spec.*'],
  },
}))
