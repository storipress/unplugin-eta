import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  externals: ['vite', 'esbuild', 'webpack', 'rollup'],
})
