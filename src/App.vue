<script setup>
import { ref } from 'vue'

const truefalse= ref(false);
const hidden1=()=>{
  if(!truefalse.value){
    return 'hidden'
    sss
  }
}
const show1=()=>{
  if(!truefalse.value){
    return 'ism'
  }
}
const ism=ref(['Rembo','Tini'])
</script>

<template>
  <header :class="hidden1">
    <a href="">logo</a>
  </header>
  {{ truefalse}}
 
  <button  v-on:click.stop="truefalse=!truefalse">
    click me
  </button>
  <ul   :class="show1" v-if="ism.length>0">
    <li v-for="ism1 in ism">
         
    </li>
  </ul>
  <p v-else-if="ism.length ==0">
    royhat bo'sh
  </p>
</template>

<style>
.hidden{
  display: none;
}
</style>