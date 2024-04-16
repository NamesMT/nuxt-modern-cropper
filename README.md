# Nuxt Modern Cropper

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Power-packed wrapper over cropperjs@next.

This package is just a module wrapper over [vue-modern-cropper](https://github.com/NamesMT/vue-modern-cropper), for more information check it's repo.
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Installation

Install the package
```bash
pnpm add -D vue-modern-cropper nuxt-modern-cropper
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
