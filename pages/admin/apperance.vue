<template>
    <AdminLayout
        id="ApperancePage"
        class="flex h-[calc(100%-50px)] pb-4"
    >
        <div class="lg:w-[calc(100%-500px)] md:w-[calc(100%-330px)] w-full md:pt-20 pt-14">
            <div class="max-w-[750px] mx-auto pb-24">
                <div id="ProfileSection">
                    <div
                        class="font-semibold pb-4"
                        :class="userStore.isMobile ? 'mt-8 text-2xl' : 'mt-20 md:mt-8 text-xl'"
                    >
                        Profile
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
    import AdminLayout from "~~/layouts/AdminLayout.vue";

    import { useUserStore } from "~~/stores/user";

    const userStore = useUserStore();
</script>