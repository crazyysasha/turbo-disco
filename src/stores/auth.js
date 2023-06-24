import { ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const users = ref([]);

    function register(name, email, password, age, gender) {

    }
});