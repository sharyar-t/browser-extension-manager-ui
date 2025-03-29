<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppExtensions from "@/components/AppExtensions.vue";
</script>

<template>
  <div class="min-h-svh w-full bg-[linear-gradient(180deg,#EBF2FC,#EEFBF9)] dark:bg-[linear-gradient(180deg,#04091B,#091540)] px-4 py-5 md:px-8 md:py-6">
    <div class="lg:max-w-[1170px] mx-auto">
      <AppHeader class="mb-500 lg:mb-800" />
      <AppExtensions />
    </div>
  </div>
</template>
