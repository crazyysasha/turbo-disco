<script setup>
import {ref} from 'vue'
const first1=ref('');

</script>



<template>
  <div>
    <h1>{{first1}}</h1>
    <input  v-model="first1">
  </div>  
</template>