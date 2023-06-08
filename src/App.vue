<script setup>
import { onMounted, ref } from 'vue';

const tasks = ref([]);

const draftTask = ref('');

const onFormSubmitted = (event) => {
  console.log(draftTask.value);
  tasks.value.push(draftTask.value);
  draftTask.value = '';
}

</script>


<template>
  <h1>
    ToDo List
  </h1>

  <ol>
    <li v-for="task in tasks">
      {{ task }} <button class="bg-red-500">o'chirish</button>
    </li>
  </ol>

  <form v-on:submit.prevent="onFormSubmitted">
    <input type="text" id="input" name="task_name" v-model="draftTask">
    <button v-bind:disabled="!draftTask.length > 0" disabled id="button"
      class="disabled:bg-slate-300 bg-green-400 p-2 px-5 rounded-lg">yaratish</button>
  </form>
</template>

