<script setup>
import { ref } from 'vue';
import { useAuth } from '../composables/auth';


const { onLogin, isAuthed } = useAuth();

const email = ref('');
const password = ref('');
const onSubmit = () => {
    onLogin(email.value, password.value);
    console.log(email.value, password.value);
}
</script>

<template>
    <div class="flex flex-col justify-center  py-12  sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Вход в систему
            </h2>
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <p v-show="isAuthed">ruyhatdan utdi</p>
                <form class="space-y-6" action="#" method="POST" @submit.prevent="onSubmit">
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">
                            Email адрес
                        </label>
                        <div class="mt-1">
                            <input v-model="email" id="email" name="email" type="email" autocomplete="email" required
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">
                            Пароль
                        </label>
                        <div class="mt-1">
                            <input v-model="password" id="password" name="password" type="password"
                                autocomplete="current-password" required
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox"
                                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                                Запомнить меня
                            </label>
                        </div>

                        <div class="text-sm">
                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                                Забыли пароль?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>