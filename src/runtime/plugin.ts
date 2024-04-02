import { defineNuxtPlugin } from '#app'
import { ModernCropper } from 'vue-modern-cropper'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ModernCropper', ModernCropper)
})
