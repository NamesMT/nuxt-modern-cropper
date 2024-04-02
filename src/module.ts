import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-modern-cropper',
    configKey: 'modernCropper'
  },
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    addPlugin({
      src: resolver.resolve('./runtime/plugin'),
      mode: 'client'
    })
  }
})
