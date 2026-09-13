<script setup lang="ts">
import { ModernCropper } from '#components'
import type { CropperSelection } from 'cropperjs'

const cropper = useTemplateRef('cropper')

onMounted(async () => {
  await nextTick()

  const cropperRef = cropper.value!

  console.log({ a: cropperRef, b: cropperRef.selection })

  cropperRef.onCropperMounted(({ selection }: { selection: CropperSelection }) => {
    console.log({ a: cropperRef, b: selection })
    console.log({ a: cropperRef, b: cropperRef.selection })
  })
})
</script>

<template>
  <div>
    Nuxt module playground!
    <ClientOnly>
      <ModernCropper
        ref="cropper"
        :pass-through="{
          canvas: { attributes: { background: false } },
        }"
        src="https://i.imgur.com/DkRVUyG.png"
      />
    </ClientOnly>
  </div>
</template>
