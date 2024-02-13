<template>
  <div
    id="AdminLayout"
    class="w-full fixed z-30"
  >
    <div
      v-if="!useUserStore.isMobile"
      id="TopNav"
      class="w-full flex items-center justify-between md:pt-2.5 md:px-2.5"
    >

    </div>
  </div>
</template>

<script setup>
  import { useUserStore } from "~~/stores/user";

  const userStore = useUserStore();
</script>