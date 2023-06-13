<script setup>
import CHeader from './components/CHeader.vue';
import CLoginForm from './components/CLoginForm.vue'
import { useAuth } from './composables/auth';

const { isAuthed } = useAuth();
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <CHeader></CHeader>
    <CLoginForm v-if="!isAuthed"></CLoginForm>
    <p class="text-center text-3xl text-green-700" v-else>welcome</p>
  </div>
</template>