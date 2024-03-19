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
        </div>
    </div>
</template>

<script setup>
    import { useUserStore } from "~~/stores/user";

    const userStore = useUserStore();

    onUnmounted(() => userStore.isPreviewOverlay = false)
</script>