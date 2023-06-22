<script setup>
import Header from '../components/Header.vue';
import message_list from '../components/message_list.vue';
import message_send from '../components/message_send.vue';

</script>
<template>
  <main class="flex">
    <div>
      <!-- users list component -->
    </div>
    <div>
    <Header></Header>
    <message_list></message_list>
    <message_send></message_send>
  
   
      </div>
    <div>
      <!-- profile component -->
    </div>
  </main>
</template>

<style>



</style>