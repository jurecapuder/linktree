<template>
  <div
    id="LinkBox"
    class="w-full bg-white rounded-3xl"
  >
    <div
      id="MainLinkBoxSection"
      class="px-8 py-5"
    >
      <div class="flex items-center justify-between py-1">
        <div class="flex items-center w-full">
          <input
            v-if="true"
            id="editNameInput"
            type="text"
            v-model="name"
            maxlength="18"
            class="w-full text-sm font-semibold focus:outline-none"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>