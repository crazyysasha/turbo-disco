<script setup>
import {ref} from 'vue';
defineProps({
    isAuthed:{
        type: Boolean,
        required: true,
        default: false
    }}
)


</script>

<template>
    <header class="container mx-auto  flex justify-between">
        <a href="">logo</a>
        <a href="">home</a>
        <button class="bg-green-300 rounded-3xl text-ellipsis hover:bg-teal-400" v-show="isAuthed" v-on:click="isAuthed=!isAuthed"> LogOut</button>
    </header>
</template>