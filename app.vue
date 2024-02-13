<template>
  <VitePwaManifest />

  <NuxtPage />
</template>

<script setup>
  onMounted(() => {
    if ("ontouchstart" in window) {
      isMobile.value = true;
    }
  })
</script>