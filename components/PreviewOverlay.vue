<template>
    <div
        id="PreviewOverlay"
        class="md:hidden fixed bg-white z-30 top-0 left-0 h-full w-full overflow-auto"
        :class="userStore.theme"
    >
        <div
            id="PreviewOverlayTopNav"
            class="flex items-center justify-between px-2 py-[8px] pl-4 bg-white w-full border-b"
        >
            <div class="flex items-center justify-start w-full">
                <button @click="$event => userStore.isPreviewOverlay = false">
                    <img
                        class="w-[23px] min-w-[23px] select-none"
                        src="~/assets/images/linktree-logo-icon.png"
                    >
                </button>
            </div>

            <div class="flex items-center justify-between gap-3">
                <button class="flex items-center text-sm font-semibold p-2 rounded-full hover:bg-gray-100">
                    <Icon
                    name="healthicons:megaphone-outline"
                    class="mr-0.5" 
                    size="22"
                    />
                </button>

                <button class="flex items-center font-semibold px-3 py-2 rounded-full bg-gray-100">
                    <Icon
                    name="mdi:lightning-bolt"
                    class="mr-0.5" 
                    size="18"
                    />
                    
                    Upgrade
                </button>

                <button class="flex items-center font-semibold px-3 py-2 rounded-full border hover:bg-gray-100">
                    <Icon
                    name="teenyicons:upload-solid"
                    class="mr-1.5"
                    size="18"
                    />
                    
                    Share
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useUserStore } from "~~/stores/user";

    const userStore = useUserStore();

    onUnmounted(() => userStore.isPreviewOverlay = false)
</script>