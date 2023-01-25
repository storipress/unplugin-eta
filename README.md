@storipress/unplugin-eta
========================

[![Storipress](https://img.shields.io/badge/made_with_%E2%9D%A4%EF%B8%8F_by-Storipress-green)}(https://storipress.com?utm_source=github&utm_medium=badge&utm_campaign=unplugin-eta)
[![NPM version link](https://img.shields.io/npm/v/@storipress/unplugin-eta)](https://www.npmjs.com/package/@storipress/unplugin-eta)
[![MIT License](https://img.shields.io/npm/l/@storipress/unplugin-eta)](https://www.npmjs.com/package/@storipress/unplugin-eta)


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
