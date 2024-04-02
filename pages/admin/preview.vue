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
            <div class="mx-auto w-full">
                <div class="h-full mx-auto w-full">
                    <img
                        class="rounded-full min-w-[60px] w-[60px] mx-auto mt-8"
                        src="https://picsum.photos/id/8/300/320"
                    />

                    <div
                        class="text-center text-sm font-semibold mt-4 break-words"
                        :class="userStore.theme"
                    >
                        @jurecapuder
                    </div>

                    <div
                        class="text-center text-[8px] font-semibold mt-2"
                        :class="userStore.theme"
                    >
                        <div class="px-8 break-words">
                            This is the bio section
                        </div>
                    </div>

                    <div v-for="link in fakeLink">
                        <a
                            :href="link.url"
                            target="_blank"
                            class="flex items-center relative w-[calc(100%-10px)] mx-auto border bg-white mt-2 p-1 rounded-xl"
                        >
                            <img 
                                class="rounded-lg h-[30px] aspect-square"
                                :src="link.image"
                            >

                            <div class="absolute w-full">
                                <div class="max-w-[70%] w-full mx-auto text-[10px] text-center">
                                    {{ link.name }}
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="pb-12" />
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