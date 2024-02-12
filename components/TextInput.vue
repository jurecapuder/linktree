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
    />

    <span
      v-if="error"
      class="text-red-500 text-[14px] font-semibold"
    >
      {{ error }}
    </span>
  </div>
</template>

<script setup>
  const emit = defineEmits(["updated:input"]);

  const props = defineProps(["input", "placeholder", "max", "inputType", "error"]);

  const { input, placeholder, max, inputType, error } = toRefs(props);

  let isFocused = ref(false);

  const inputComputed = computed({
    get: () => input.value,
    set: () => emit("update:input", val)
  })
</script>
