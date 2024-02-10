<template>
  <div>
    <input
      :id="placeholder"
      :placeholder="placeholder"
      :maxlength="String(max)"
      class="w-full bg-[#EFF0EB] text-gray-800 border-2 text-sm border-[#EFF0EB] rounded-xl py-3.5 px-3 placeholder-gray-500 focus:outline-none"
      @focus="$event => isFocused = true"
      @blur="$event => isFocused = false"
      :class="isFocused ? 'border-gray-900' : ''"
      :type="inputType"
      v-model="inputComputed"
      autocomplete="off"
    >
  </div>
</template>

<script setup>

</script>
