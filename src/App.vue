<script setup>
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
    return 'hidden'
  }
}
</script>

<template>
  <div>
    <Rg v-bind:is-authed="isAuthed"></Rg>
    <Register v-if="!isAuthed" @on-submitted="onlogin"></Register>
    <p class="text-slate-500  text-center text-lg" v-else :class="LogOut()"> Welcome</p>
  </div>
</template>