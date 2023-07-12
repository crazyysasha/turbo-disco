<script setup>
import {ref,reactive} from 'vue';
import Auth from '../componites/Auth/Auth.vue';
import Modal from '../componites/Auth/Modal.vue'
const Auth1=ref(false)
const Props=reactive({
    Button1:'Sign in',
})
const placehld=ref({
    Firstname:'Firstname',
    Lastname:'Last name',
    Email:'Email',
    Pass:'Password',
})
</script>


<template>
    <div class=" bg-[#301B52] min-h-screen  items-start ">
        <div class="py-11 mx-8  flex justify-end">
            <Auth :="Props" @click="Auth1=!Auth1" class="mx-8"></Auth>
        </div>        
        <form class="  bg-white flex flex-col ">
            <transition>
                <Modal v-if="Auth1" :='placehld' class="gap-3 text-center"></Modal>
            </transition>
        </form>
  

        
    </div>
</template>