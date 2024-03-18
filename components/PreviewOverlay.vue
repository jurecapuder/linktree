<template>
    <div
        id="PreviewOverlay"
        class="md:hidden fixed z-30 top-0 left-0 h-full w-full overflow-auto"
        :class="userStore.theme"
    >

    </div>
</template>

<script setup>
    import { useUserStore } from "~~/stores/user";

    const userStore = useUserStore();
</script>