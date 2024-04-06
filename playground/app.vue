<template>
  <div>
    Nuxt module playground!
    <ModernCropper
      :pass-through="{
        canvas: { attributes: { background: false } }
      }"
      src="https://i.imgur.com/DkRVUyG.png"
    />
  </div>
</template>

<script setup>
</script>
