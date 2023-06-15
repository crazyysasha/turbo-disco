<script setup>
import { useAuth } from '../composables/auth';


const { isAuthed, onLogout } = useAuth();
</script>
<template>
    <header class="container mx-auto px-5 py-4 flex justify-between">
        <a href="">logo</a>
        <nav class="flex gap-5">
            <router-link to="/">home</router-link>
            <router-link to="/login" >login</router-link>
            <a href="" v-show="isAuthed">profile</a>
            <a href="" @click.prevent="onLogout" v-if="isAuthed">logout</a> 
        </nav>
    </header>
</template>