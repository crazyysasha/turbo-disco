import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { readonly, ref } from "vue";

export const useSystemStore = defineStore('system', () => {
    const isDarkMode = useLocalStorage('themeMode', false);


    function toggleDarkMode() {
        isDarkMode.value = !isDarkMode.value;
    }

    return {
        isDarkMode: (isDarkMode),
        toggleDarkMode
    };
});