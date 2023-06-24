<script setup>
import { ref } from 'vue';
import { useTodosStore } from '../stores/todos.js';
const store = useTodosStore();

const title = ref('');
</script>

<template>
    <ul>
        <li v-for="todo, index in store.todos" :class="{ 'text-green-500': todo.isCompleted }">
            {{ index + 1 }}. {{ todo.title }}
            <button @click="store.toggle(todo.id)" class="px-4 py-2 bg-slate-400">
                {{ todo.isCompleted ? 'uncomplete' : 'complete' }}
            </button>
            <button @click="store.destroy(todo.id)"> remove
            </button>
        </li>
    </ul>
    <form @submit.prevent="store.create(title); title = ''">
        <input type="text" v-model="title">
        <button>
            create
        </button>
    </form>
</template>