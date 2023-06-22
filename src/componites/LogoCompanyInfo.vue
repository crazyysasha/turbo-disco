<script setup>
defineProps({
    logo:{
        type:String,
        required:true,
        default:'./src/assets/images/temp/logo.svg'
    },
    name:{
        type:String,
        required:true,
        default:'Hash Tech'
    },
    slogan:{
        type:String,
        required:true,
        default:'Malumotlarni olishda xatolik kelib chiqdi'
    },
})
</script>

<template>
    <div >
        <img :src="logo" alt="Phonix">
        <h1 class="text-2xl font-bold text-white">{{ name }} </h1>
        <p class="text-xl font-bold text-white ">{{slogan}}</p>
    </div>
</template>