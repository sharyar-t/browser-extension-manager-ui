<script setup lang="ts">
interface Props {
  isActive?: boolean
}

defineProps<Props>()

const tabClasses = 'bg-neutral-0 dark:bg-neutral-700 dark:text-neutral-0 border border-neutral-200 dark:border-neutral-600 rounded-full px-250 py-125 shadow-xs dark:shadow-none'
const activeTabClasses = 'bg-red-700 dark:bg-red-400 text-neutral-0 border-none'
</script>

<template>
  <button :class="[tabClasses, { [activeTabClasses]: isActive }]">
    <slot></slot>
  </button>
</template>
