<template>
    <div class="md:block fixed hidden right-0 lg:w-[500px] w-[310px] h-[calc(100%-20px)] mt-[20px] mx-auto border-l border-l-gray-300 pt-20">
        <div class="mx-auto mt-16 mb-16 flex justify-center items-center w-full lg:max-w-[230px] max-w-[200px] lg:h-[460px] h-[400px] p-3 rounded-3xl relative">
            <img
                class="absolute z-10 pointer-events-none select-none"
                src="~/assets/images/mobile-case.png"
            />

            <div
                class="w-full h-full absolute lg:max-w-[220px] max-w-[195px] rounded-3xl z-0"
                :class="userStore.theme"
            />

            <div class="h-full mx-auto w-full overflow-auto z-10">
                <img
                    class="rounded-full min-w-[60px] w-[60px] mx-auto mt-8"
                    :src="userStore.image"
                />

                <div
                    class="text-center text-sm font-semibold mt-4 break-words"
                    :class="userStore.theme"
                >
                    @jurecapuder
                </div>

                <div
                    class="text-center text-[8px] font-semibold mt-2"
                    :class="userStore.theme.text"
                >
                    <div class="px-8 break-words">
                        {{ userStore.bio }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useUserStore } from "~~/stores/user";

    const userStore = useUserStore();
</script>