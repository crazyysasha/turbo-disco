<script setup>
import { onMounted, ref } from 'vue';

const tasks = ref([]);

const draftTask = ref('');

const onFormSubmitted = (event) => {
  console.log(draftTask.value);
  tasks.value.push({ 
    text: draftTask.value, 
    id: (tasks.value[tasks.value.length - 1]?.id ?? 0) + 1 
  });
  draftTask.value = '';
}


const remove = (id) => {
  const index = tasks.value.findIndex((value) => {
    return id == value.id;
  })
  tasks.value.splice(index, 1);
}
</script>


<template>
  <h1>
    ToDo List
  </h1>

  <ol>
    <li v-for="(task) in tasks">
      {{ task.text }} <button class="bg-red-500" v-on:click="remove(task.id)">o'chirish</button>
    </li>
  </ol>

  <form v-on:submit.prevent="onFormSubmitted">
    <input type="text" id="input" name="task_name" v-model="draftTask">
    <button v-bind:disabled="!draftTask.length > 0" disabled id="button"
      class="disabled:bg-slate-300 bg-green-400 p-2 px-5 rounded-lg">yaratish</button>
  </form>
</template>

