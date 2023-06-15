<script setup>
<<<<<<< HEAD
import {ref} from 'vue'
import Register from './components/Register.vue'
import Rg from './components/Rg.vue'

const isAuthed=ref(false);
const onlogin=(email,password)=>{
  if(email=='admin@domain.com' && password=='pass'){
    isAuthed.value=true;
  }else{
    alert('parol yoki login noto\'gri')
  }
}
const LogOut=()=>{
  if(!isAuthed.value){
=======
import { ref } from 'vue'
import ColorBackground from

const truefalse= ref(false);
const hidden1=()=>{
  if(truefalse.value){
>>>>>>> c337db5beb0d9740d89bf60c2b103c106fd1ef9f
    return 'hidden'
  }
}
</script>

<template>
<<<<<<< HEAD
  <div>
    <Rg v-bind:is-authed="isAuthed"></Rg>
    <Register v-if="!isAuthed" @on-submitted="onlogin"></Register>
    <p class="text-slate-500  text-center text-lg" v-else :class="LogOut()"> Welcome</p>
  </div>
</template>
=======
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
>>>>>>> c337db5beb0d9740d89bf60c2b103c106fd1ef9f
