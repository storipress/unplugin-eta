import { defineConfig } from 'vite'
import { EtaPlugin } from '@storipress/unplugin-eta'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [EtaPlugin.vite(), Inspect()],
})
