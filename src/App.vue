<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from './stores/counter';
import CHeader from './components/CHeader.vue';
import { useSystemStore } from './stores/system';

const store = useCounterStore();
store.increment();

const systemStore = useSystemStore();
</script>

<template>
  <div class="min-h-screen transition-colors duration-200"
    :class="{ 'bg-slate-950': systemStore.isDarkMode, 'dark': systemStore.isDarkMode }">
    <CHeader></CHeader>
    <RouterView />
  </div>
</template>
