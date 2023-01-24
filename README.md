@storipress/unplugin-eta
========================

[Eta](https://eta.js.org) template loading plugin for [Vite](https://vitejs.dev), [Webpack](https://webpack.js.org/), [Rollup](https://rollupjs.org), and [esbuild](https://esbuild.github.io). Powered by [unplugin](https://github.com/unjs/unplugin).

## Installation

**NPM**:
```
$ npm install --save-dev @storipress/unplugin-eta
```

**Yarn**:
```
$ yarn add --dev @storipress/unplugin-eta
```

<details>
<summary>Vite</summary>

```js
// vite.config.ts
import { defineConfig } from 'vite'
import EtaPlugin from '@storipress/unplugin-eta/vite'

export default defineConfig({
  plugins: [EtaPlugin()],
})
```
</details>
<details>
<summary>Webpack</summary>

```js
// webpack.config.js

module.exports = {
  plugins: [require('@storipress/unplugin-eta').default()],
})
```
</details>
<details>
<summary>Rollup</summary>

```js
// rollup.config.js
import EtaPlugin from '@storipress/unplugin-eta/rollup'

export default {
  plugins: [EtaPlugin()],
}
```
</details>
