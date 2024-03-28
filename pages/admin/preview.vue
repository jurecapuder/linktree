<template>
    <div
        class="fixed overflow-auto w-full h-screen"
        :class="userStore.theme"
    />

    <div>

    </div>
</template>

<script setup>
    import AdminLayout from "~~/layouts/AdminLayout.vue";
    import { useUserStore } from "~~/stores/user";

    const userStore = useUserStore();
</script>