import { createUnplugin } from 'unplugin'
import { createFilter, FilterPattern } from '@rollup/pluginutils'
import type { UserConfig } from 'vite'
import { compile } from './compile'
import type { EtaConfig } from './types'

interface Options {
  include?: FilterPattern
  exclude?: FilterPattern
  options?: EtaConfig
}

export const EtaPlugin = createUnplugin<Options>(({ include, exclude, options } = { include: /\.eta$/ }) => {
  const filter = createFilter(include, exclude)

  return {
    name: 'eta',

    transformInclude: (id) => {
      return filter(id)
    },

    transform: (code) => {
      return compile(code, options)
    },

    vite: {
      config: () => {
        return {
          resolve: {
            alias: {
              eta: '@storipress/unplugin-eta/browser-eta',
            },
          },
        }
      },
    },
  }
})

export default EtaPlugin
