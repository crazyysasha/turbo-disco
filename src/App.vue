<script setup>
import { ref } from 'vue';

 const tasks= ref([]);

</script>
<template>
  <h1>
    ToDo List
  </h1>

  <ol>
    <li >
      first task
    </li>
    <li>
      second task
    </li>
  </ol>

  <form action="">
    <input type="text" name="task_name">
    <button disabled>yaratish</button>
  </form>
</template>
<style scoped></style>
