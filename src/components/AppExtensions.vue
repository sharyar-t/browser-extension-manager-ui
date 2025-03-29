<script setup lang="ts">
import { shallowRef } from "vue";
import AppTabs from "@/components/AppTabs.vue";
import AppTab from "@/components/AppTab.vue";
import AppCard from "@/components/AppCard.vue";

import data from "@/data.json";
import AppButton from "@/components/AppButton.vue";
import AppToggle from "@/components/AppToggle.vue";

const extensionsList = shallowRef(data);
</script>

<template>
  <div class="flex flex-col gap-400">
    <div class="flex flex-col items-center md:flex-row md:justify-between gap-300">
      <h1 class="text-preset-1 text-neutral-900 dark:text-neutral-0">Extensions List</h1>
      <AppTabs>
        <AppTab :is-active="true">All</AppTab>
        <AppTab>Active</AppTab>
        <AppTab>Inactive</AppTab>
      </AppTabs>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-150">
      <AppCard v-for="extension in extensionsList" :key="extension.name">
        <div class="flex flex-col gap-300">
          <div class="flex items-start gap-200">
            <img :src="extension.logo" :alt="extension.name" width="60px" height="60px" />
            <div class="flex flex-col gap-100">
              <h3 class="text-preset-2 text-neutral-900 dark:text-neutral-0">{{ extension.name }}</h3>
              <p class="text-preset-5 text-neutral-600 dark:text-neutral-300">{{ extension.description }}</p>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <AppButton>Remove</AppButton>
            <AppToggle :checked="extension.isActive" />
          </div>
        </div>
      </AppCard>
    </div>
  </div>
</template>
