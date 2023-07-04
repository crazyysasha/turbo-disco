<script setup>
import { ref } from 'vue';
import CInput from '../components/ui/forms/CInput.vue';

const input = ref('');
</script>

<template>
  <div>
    <!-- <input type="text" v-model="input"> -->
    <CInput v-model="input"></CInput>
    <span class="dark:text-white">{{ input }}</span>
  </div>
</template>

<style></style>
