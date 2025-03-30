<script setup lang="ts">
import { computed } from "vue";
import { useDark, useToggle } from '@vueuse/core';
import AppLogo from "@/components/AppLogo.vue";

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'theme-dark',
  valueLight: '',
});

const toggleDark = useToggle(isDark);

const themeIcon = computed(() => {
  return isDark.value ? '/icons/icon-sun.svg' : '/icons/icon-moon.svg';
});

const themeText = computed(() => {
  return isDark.value ? 'Change to Light Mode' : 'Change to Dark Mode';
});
</script>

<template>
  <header class="bg-neutral-0 dark:bg-neutral-800 py-2 px-3 md:px-4 md:py-3 lg:py-3 lg:px-4 rounded-20 flex items-center justify-between border border-neutral-200 dark:border-none shadow-xs">
    <AppLogo class="text-neutral-900 dark:text-white" />
    <button class="rounded-12 bg-neutral-100 dark:bg-neutral-700 p-3.5" @click="toggleDark()">
      <img :src="themeIcon" :alt="themeText" />
    </button>
  </header>
</template>
