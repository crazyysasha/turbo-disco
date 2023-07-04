<script setup>
import { DohomeworkStore } from '../stores/homework';
import { ref } from 'vue';
import FormInfo from '../componites/Mix/FormInfo.vue';
const created = ref('')
const title = ref('');
const store = DohomeworkStore();
const infoform = {
    Rgform: 'Registration form',
    name: 'Name',
    pass: 'Password',
    email: 'Email',
    mobile: 'Phone',
    gender: 'Gender',
    customer: 'Are you an exsiting customer?'
};

const updateId = ref(null);
const updateTitle = ref('');

</script>

<template>
    <div class=" bg-amber-400 min-h-screen flex mx-auto ">
        <div>
            <ul class=" mx-4 py-5 flex flex-col gap-6">
                <li v-for="home, index in store.answer" class="text-2xl font-Roboto text-purple-700">
                    <div v-if="home.id != updateId">
                        {{ index + 1 }}.{{ home.title }}
                        <button
                            class="rounded-2xl bg-gray-400 hover:bg-red-500 hover:text-black transation-opacity mx-4 px-4 py-2 text-2xl"
                            @click="store.remove(title, id)">
                            delete
                        </button>
                        <button class="rounded-2xl bg-gray-400 hover:bg-lime-500 mx-4 px-4 py-2 text-2xl"
                            @click="updateId = home.id; updateTitle = home.title">
                            update
                        </button>
                    </div>
                    <div v-else>
                        <form @submit.prevent="store.update(updateId, updateTitle); updateId = null">
                            <input v-model="updateTitle">
                            <button>
                                save
                            </button>
                        </form>
                    </div>
                </li>
            </ul>
            <form @submit.prevent="store.create(title); title = ''">
                <input type="text" placeholder="Write your answers"
                    class="py-2 px-4 mx-4 rounded-3xl font-Roboto text-purple-700 " v-model="title">
                <button class="rounded-2xl bg-gray-400 hover:bg-lime-500 mx-4 px-4 py-2 text-2xl"> Send </button>
            </form>
        </div>
        <div>

        </div>


        <FormInfo :="infoform"></FormInfo>
    </div>
</template>