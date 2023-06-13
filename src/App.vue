<script setup>
import { ref } from 'vue'
import ColorBackground from

const truefalse= ref(false);
const hidden1=()=>{
  if(truefalse.value){
    return 'hidden'
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
  <header :class="hidden1()">
    <a href="">logo</a>
  </header>
 
  <button  v-on:click.stop="truefalse=!truefalse">
    click me
  </button>
  <ul   :class="[show1(),hidden1()]" v-if="ism.length>0">
    <li v-for="ism1 in ism">
      {{ ism1 }}
         
    </li>
  </ul>
  <p v-else-if="ism.length ==0">
    royhat bo'sh
  </p>
  <Color-Background></Color-Background>
</template>

<style>
.hidden{
  display: none;
}
</style>