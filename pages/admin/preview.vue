<template>
    <div
        class="fixed overflow-auto w-full h-screen"
        :class="userStore.theme"
    />

    <AdminLayout>
        <div
            id="PreviewAdminPage"
            class="w-full mx-auto pt-32 relative z-10"
        >
    
        </div>
    </AdminLayout>
</template>

<script setup>
    import AdminLayout from "~~/layouts/AdminLayout.vue";
    import { useUserStore } from "~~/stores/user";

    const userStore = useUserStore();
</script>