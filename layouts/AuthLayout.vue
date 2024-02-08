<template>
  <div
    id="AuthLayout"
    class="h-screen w-full flex justify-between"
  >
    <div class="lg:pt-7 pt-3 lg:px-12 px-6 lg:w-2/3 w-full lg:min-w-[800px]">
      <NuxtLink
        to="/"
        class="inline-block"
      >
        <img
          class="lg:w-28 w-[75px] select-none"
          src="../assets/images/linktree-logo.png"
        >
      </NuxtLink>

      <main class="w-full">
        <div class="w-full md:max-w-[550px] max-w-[360px] mx-auto">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>

</script>