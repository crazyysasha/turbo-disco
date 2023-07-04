<script setup>
defineProps({
    Users:{
        type:String,
        required:true,
        default:'Foydalanuvchi ismi'
    },
    Pass:{
        type:String,
        required:true,
        default:'Parol'
    },
    Passrecovery:{
        type:String,
        required:true,
        default:'Parolni tiklash'
    },
})
</script>
<template>
    <div class=" flex flex-col items-center">
        <label for="" class="text-[#ABAAAA] font-bold "> {{ Users }} </label>
        <input type="text" class="rounded-2xl border-solid border-2 border-gray-500">
        <label for="" class="text-[#ABAAAA] font-bold">{{ Pass }}</label>
        <input type="text" class="rounded-2xl border-solid border-2 border-gray-500">
        <a href="" class="text-[#301B52] font-bold"> {{ Passrecovery }} </a>
    </div>
</template>
