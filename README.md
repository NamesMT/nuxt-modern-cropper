# Nuxt Modern Cropper

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Power-packed wrapper over `cropperjs` (v2).

This package is a Nuxt module wrapper over [vue-modern-cropper](https://github.com/NamesMT/vue-modern-cropper), for more information and examples check it's repo.

## Table of Contents
<details>

<summary>TOC</summary>

- [Nuxt Modern Cropper](#nuxt-modern-cropper)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
    - [Install \& Setup](#install--setup)
  - [Contribution](#contribution)

</details>

## Usage

### Install & Setup
```sh
pnpm add -D nuxt-modern-cropper vue-modern-cropper
```

Add `nuxt-modern-cropper` to your Nuxt config file:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    'nuxt-modern-cropper',
  ],
})
```

That's it! You can now use `<ModernCropper />` in your Nuxt app ✨

>To infer the type of the component for `ref` creation, make sure to use `import type` to avoid build error, because the module is client-only.
```ts
import type { ModernCropper } from '#components'

const cropperRef = ref<InstanceType<typeof ModernCropper>>()
```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-modern-cropper/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-modern-cropper

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-modern-cropper.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-modern-cropper

[license-src]: https://img.shields.io/npm/l/nuxt-modern-cropper.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-modern-cropper

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
