<template>
  <VitePwaManifest />

  <NuxtPage />
</template>

<script setup>
  import { useUserStore } from "~~/stores/user";
  import { storeToRefs } from "pinia";

  const userStore = useUserStore();
  const { isMobile, isPreviewOverlay, updatedLinkId, addLinkOverlay, id } = storeToRefs(userStore);

  const route = useRoute();

  let show = ref(false);
  let bgIsGray = ref(false);

  onMounted(() => {
    if ("ontouchstart" in window) {
      isMobile.value = true;
    }
  })
</script>