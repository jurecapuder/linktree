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
      <div class="flex items-center justify-between md:rounded-full md:shadow-sm px-2 md:pl-6 pl-4 py-[8px] bg-white w-full border-b">
        <div class="flex items-center justify-start w-full max-w-[500px]">
          <LuxtLink to="/admin">
            <img
              class="w-[23px] min-w-[23px] select-none"
              src="~/assets/images/linktree-logo-icon.png"
            />
          </LuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useUserStore } from "~~/stores/user";

  const userStore = useUserStore();
</script>