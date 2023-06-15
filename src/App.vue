<script setup>
import CHeader from './components/CHeader.vue';
import CLoginForm from './components/CLoginForm.vue'
import { useAuth } from './composables/auth';

const { isAuthed } = useAuth();
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <CHeader></CHeader>
    <router-view></router-view>
  </div>
</template>