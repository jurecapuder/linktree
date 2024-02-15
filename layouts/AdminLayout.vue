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
          
          <div
            v-for="link in links"
            class="lg:px-2.5 px-0.5 md:block hidden"
          >
            <NuxtLink
              :to="link.url"
              class="flex items-center text-sm font-semibold px-1.5 py-3 rounded-lg hover:bg-gray-100"
            >
              <Icon
                :name="link.icon"
                class="mr-0.5"
                size="18"
                :color="route.fullPath === link.url ? '#000000' : '#676B5F'"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useUserStore } from "~~/stores/user";

  const userStore = useUserStore();

  const route = useRoute();

  const links = ref([
    { name: "Links", url: "/admin", icon: "icon-park-outline:hamburger-button" },
    { name: "Apperance", url: "/admin/apperance", icon: "fluent:shapes-48-regular" },
    { name: "Analytics", url: "/", icon: "tabler:brand-google-analytics" },
    { name: "Settings", url: "/", icon: "material-symbols:settings" },
  ])
</script>