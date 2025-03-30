<script setup lang="ts">
import { RouterView } from "vue-router";

import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <div class="min-h-svh w-full bg-[linear-gradient(180deg,#EBF2FC,#EEFBF9)] dark:bg-[linear-gradient(180deg,#04091B,#091540)] px-200 py-250 md:px-400 md:py-300">
    <div class="lg:max-w-[1170px] mx-auto">
      <AppHeader class="mb-500 lg:mb-800" />
      <RouterView />
    </div>
  </div>
</template>
