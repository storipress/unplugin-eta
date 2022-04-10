import Eta from 'eta'
import type { EtaConfig } from '../types'

export function compile(code: string, options?: EtaConfig): string {
  const template = Eta.compileToString(code, {
    ...Eta.config,
    includeFile: () => {
      throw new Error('includeFile is not support in unplugin-eta')
    },
    ...options,
  })

  return `export default function (it, E, cb) {
      if (!E.includeFile) {
        E.includeFile = () => {}
      }
      ${template}
    }`
}
