<script setup lang="ts">
import { ref, computed, type Ref } from "vue";
import { useRouteQuery } from "@vueuse/router";

import AppTabs from "@/components/AppTabs.vue";
import AppTab from "@/components/AppTab.vue";
import AppCard from "@/components/AppCard.vue";
import AppButton from "@/components/AppButton.vue";
import AppToggle from "@/components/AppToggle.vue";

import data from "@/data.json";

import { type IExtension, IFilter } from "@/interfaces";

const activeTab = useRouteQuery('filter', IFilter.All) as Ref<IFilter>;

const extensionsList = ref<IExtension[]>(data);

const removeExtension = (extension: IExtension) => {
  const index = extensionsList.value.indexOf(extension);
  if (index !== -1) {
    extensionsList.value.splice(index, 1);
  }
};

const toggleExtension = (extension: IExtension) => {
  extension.isActive = !extension.isActive;
};

const filteredExtensionsList = computed(() => {
  if (activeTab.value === IFilter.Active) {
    return extensionsList.value.filter((extension) => extension.isActive);
  } else if (activeTab.value === IFilter.Inactive) {
    return extensionsList.value.filter((extension) => !extension.isActive);
  } else {
    return extensionsList.value;
  }
});
</script>

<template>
  <div class="flex flex-col gap-400">
    <div class="flex flex-col items-center md:flex-row md:justify-between gap-300">
      <h1 class="text-preset-1 text-neutral-900 dark:text-neutral-0">Extensions List</h1>
      <AppTabs>
        <AppTab
          :is-active="activeTab === IFilter.All"
          @click="activeTab = IFilter.All"
        >
          All
        </AppTab>
        <AppTab
          :is-active="activeTab === IFilter.Active"
          @click="activeTab = IFilter.Active"
        >
          Active
        </AppTab>
        <AppTab
          :is-active="activeTab === IFilter.Inactive"
          @click="activeTab = IFilter.Inactive"
        >
          Inactive
        </AppTab>
      </AppTabs>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-150">
      <AppCard v-for="extension in filteredExtensionsList" :key="extension.name">
        <div class="flex flex-col gap-300">
          <div class="flex items-start gap-200">
            <img :src="extension.logo" :alt="extension.name" width="60" height="60" />
            <div class="flex flex-col gap-100">
              <h2 class="text-preset-2 text-neutral-900 dark:text-neutral-0">{{ extension.name }}</h2>
              <p class="text-preset-5 text-neutral-600 dark:text-neutral-300">{{ extension.description }}</p>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <AppButton @click="removeExtension(extension)">Remove</AppButton>
            <AppToggle :checked="extension.isActive" @change="toggleExtension(extension)" />
          </div>
        </div>
      </AppCard>
    </div>
  </div>
</template>
