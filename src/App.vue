<script setup>
import { ref } from 'vue';
import CHeader from './components/CHeader.vue';
import CLoginForm from './components/CLoginForm.vue'

const isAuthed = ref(false);

// onLogout  => isAuthed.value = false

const onLogin = (email, password) => {
  if (email == 'admin@domain.com' && password == 'pass') {
    isAuthed.value = true;
  } else {
    alert('parol yoki login xato!');
  }
}
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <CHeader :is-authed="isAuthed"></CHeader>
    <CLoginForm v-if="!isAuthed" @on-submitted="onLogin"></CLoginForm>
    <p class="text-center text-3xl text-green-700" v-else>welcome</p>
  </div>
</template>