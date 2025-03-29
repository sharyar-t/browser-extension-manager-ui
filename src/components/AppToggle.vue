<script setup lang="ts">
const toggleClasses = 'relative w-[36px] h-[20px] bg-neutral-400 rounded-full peer dark:bg-neutral-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[\'\'] after:absolute after:top-[2px] after:start-[2px] after:bg-neutral-0 after:rounded-full after:h-200 after:w-200 after:transition-all peer-checked:bg-red-700 dark:peer-checked:bg-red-400'
</script>

<template>
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer">
    <div :class="toggleClasses"></div>
  </label>
</template>
