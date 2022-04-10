import { EtaPlugin, Options } from '.'
import type { WebpackPluginInstance } from 'webpack'

export default EtaPlugin.webpack as (options?: Options | undefined) => WebpackPluginInstance
