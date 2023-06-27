<script setup>

import { useSystemStore } from '../stores/system.js';
import CSwitch from './ui/forms/CSwitch.vue';


const store = useSystemStore();

</script>

<template>
    <header class="flex container mx-auto items-center justify-between">
        <a href="" class="transition-colors duration-200 dark:text-white">
            Logo
        </a>

        <nav class="">
            <!-- <CSwitch :model-value="store.isDarkMode" @update:model-value="store.toggleDarkMode()"></CSwitch> -->
            <CSwitch v-model="store.isDarkMode"></CSwitch>
        </nav>
    </header>
</template>