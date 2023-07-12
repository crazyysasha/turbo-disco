<script setup>
defineProps({
    Button1:{
        type:String,
        required:true,
        default:'Вход'
    }
})
</script>

<template>
    <button class="rounded-lg h-8 w-16 bg-blue-600 text-center text-red-500 "> {{Button1}} </button>
</template>