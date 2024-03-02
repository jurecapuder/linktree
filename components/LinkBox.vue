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

          <div
            v-else
            class="flex items-center w-full"
          >
            <div
              class="font-semibold mr-2 cursor-pointer"
              :class="isMobile ? 'text-xl' : 'text-sm'"
            >
              TESTING
            </div>

            <Icon
              class="cursor-pointer"
              name="octicon:pencil-24"
              :size="isMobile ? '23' : '17'"
              color="#676B5F"
            />
          </div>
        </div>

        <div class="flex items-center">
          <Icon
            class="cursor-pointer"
            :class="isMobile ? 'min-w-[23px]' : 'min-w-[17px]'"
            name="mdi:bell-outline"
            :size="isMobile ? '25' : '20'"
            color="#676B5F"
          />
        </div>
      </div>

      <div class="flex items-center justify-between py-1">
        <div class="flex items-center w-full">
          <input
            v-if="true"
            id="editLinkInput"
            type="text"
            v-model="url"
            class="w-full text-sm font-semibold focus:outline-none"
          />

          <div
            v-else
            class="flex items-center w-[calc(100%-2px)]"
          >
            <div
              class="mr-2 truncate cursor-pointer"
              :class="isMobile ? 'text-xl' : 'text-sm'"
            >
              TESTING URL
            </div>

            <Icon
              class="cursor-pointer min-w-[17px]"
              :class="isMobile ? 'min-w-[23px]' : 'min-w-[17px]'"
              name="octicon:pencil-24"
              :size="isMobile ? '23' : '17'"
              color="#676B5F"
            />
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between py-1 mt-4">
        <div class="flex items-center w-full relative">
          <div
            class="flex items-center px-1.5 py-[2px] absolute -left-[6px] rounded-md"
            :class="isUploadImage ? 'bg-[#8228D9]' : 'hover:bg-gray-200'"
          >
            <Icon
              class="cursor-pointer"
              name="icon-park-twotone:collect-picture"
              :size="isMobile ? '23' : '17'"
              :color="isUploadImage ? '#FFFFFF' : '#676B5F'"
            />
          </div>
        </div>

        <div
          v-if="!isMobile"
          class="flex items-center"
        >
          <div class="flex items-center px-1.5 py-[2px] rounded-md relative">
            <button
              @click="$event => isDelete = true; isUploadImage = false"
              class="flex items-center px-1.5 py-[2px] absolute -right-[6px] rounded-md"
              :class="isDelete ? 'bg-[#8228D9]' : 'hover:bg-gray-200'"
            >
              <Icon
                class="cursor-pointer"
                name="carbon:trash-can"
                size="20"
                :color="isDelete ? '#FFFFFF' : '#676B5F'"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      id="FooterLinkDeleteSection"
      class="overflow-hidden"
      :class="[
        {'max-h-[180px] transition-all duration-300 ease-in': isDelete},
        {'max-h-0 transition-all duration-200 ease-out': !isDelete}
      ]"
    >
      <button
        @click="$event => isDelete = false"
        class="relative w-full bg-[#DFE2D9] py-1.5"
      >
        <Icon
          name="mdi:close"
          class="absolute right-1 top-[6px] cursor-pointer"
          size="20"
          color="#45494A"
        />
      </button>
    </div>
  </div>
</template>

<script setup>

</script>