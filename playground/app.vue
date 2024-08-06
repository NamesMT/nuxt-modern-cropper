<script setup lang="ts">
import { ModernCropper } from '#components'

const cropper = ref<InstanceType<typeof ModernCropper>>()

onMounted(async () => {
  await nextTick()

  const cropperRef = cropper.value!

  console.log({ a: cropperRef, b: cropperRef.selection })

  cropperRef.onCropperMounted(({ selection }) => {
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
