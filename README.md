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
  - [Releasing](#releasing)

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

// Or better, use `useTemplateRef` to automatically infer the type (vue 3.5+)
const cropperRef = useTemplateRef('cropperRef')
```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  pnpm install
  
  # Generate type stubs
  pnpm run dev:prepare
  
  # Develop with the playground
  pnpm run dev
  
  # Build the playground
  pnpm run dev:build
  
  # Run ESLint
  pnpm run lint
  
  # Run Vitest
  pnpm run test
  pnpm run test:watch
  
  # Check a version before releasing (does not publish)
  pnpm run release:check 1.8.0
  ```

</details>

## Releasing

Releases are version-first and manual, and run from GitHub Actions — do not tag or publish locally.

1. Open **Actions → Release → Run workflow** on `main`.
2. Enter the `version` to ship, without a leading `v` (e.g. `1.8.0`).
3. Optionally set `dry-run` to stop before anything is pushed or published.

The workflow verifies the version against `package.json`, runs lint/types/tests, builds, lets
[changelogen](https://github.com/unjs/changelogen) bump the version, write `CHANGELOG.md`, commit
and tag `v<version>`, pushes it, creates the GitHub release, and publishes to npm with provenance
over OIDC trusted publishing.

One-time setup, before the first dispatch:

- Publish the package by hand once — npm only lets you configure a trusted publisher for a package
  that already exists.
- On npmjs.com → the package → **Settings → Trusted Publisher**, add this repository with the
  workflow filename `release.yml`.


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-modern-cropper/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-modern-cropper

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-modern-cropper.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-modern-cropper

[license-src]: https://img.shields.io/npm/l/nuxt-modern-cropper.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-modern-cropper

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
