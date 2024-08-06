import { defineNuxtModule, addComponent } from '@nuxt/kit'

// Module options TypeScript interface definition
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-modern-cropper',
    configKey: 'modernCropper',
  },
  defaults: {},
  setup() {
    addComponent({
      name: 'ModernCropper',
      export: 'ModernCropper',
      filePath: 'vue-modern-cropper',
      mode: 'client',
    })
  },
})
