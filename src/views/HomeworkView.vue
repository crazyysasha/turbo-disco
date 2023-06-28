<script setup>
import {DohomeworkStore} from '../stores/homework';
import {ref} from 'vue';
const created=ref('')
const store=DohomeworkStore();
const  Truefalse=ref(false)


</script>

<template>
    <div class=" bg-amber-400 min-h-screen">
        <ul class=" mx-4 py-5 flex flex-col gap-6">
            <li v-for="home, index in store.answer" class="text-2xl font-Roboto text-purple-700">
                {{ index+1 }}.{{ home.title }}
                <button class="rounded-2xl bg-gray-400 hover:bg-red-500 hover:text-black transation-opacity mx-4 px-4 py-2 text-2xl" 
                @click="store.remove(title,id)"> 
                    delete
                </button>
                <button  class="rounded-2xl bg-gray-400 hover:bg-lime-500 mx-4 px-4 py-2 text-2xl">
                    update
                </button>

                <input type="text">
              
            </li>
        </ul>
        <form @submit.prevent="store.create(title); title=''">
            <input type="text" placeholder="Write your answers" class="py-2 px-4 mx-4 rounded-3xl font-Roboto text-purple-700 " v-model="title">
            <button class="rounded-2xl bg-gray-400 hover:bg-lime-500 mx-4 px-4 py-2 text-2xl"> Send </button>
        </form>
    </div>
</template>