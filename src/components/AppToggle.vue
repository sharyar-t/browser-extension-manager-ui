<script setup lang="ts">
interface Props {
  checked: boolean;
}

defineProps<Props>()
defineEmits(['change'])
</script>

<template>
  <label class="inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      :checked="checked"
      class="sr-only peer"
      @change="$emit('change')"
      aria-label="Toggle switch"
    />
    <span class="relative w-450 h-250 bg-neutral-400 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-400 dark:peer-focus:ring-red-700 rounded-full peer dark:bg-neutral-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-neutral-0 after:rounded-full after:h-200 after:w-200 after:transition-all peer-checked:bg-red-700 dark:peer-checked:bg-red-400"></span>
  </label>
</template>
