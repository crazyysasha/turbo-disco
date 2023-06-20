<script setup>
import LogocompanyInfo from '../componites/LogocompanyInfo.vue';
import AuthInfo from '../componites/AuthInfo.vue'

</script>

<template>
    <div class="bg-[#301B52] min-h-screen flex-col ">
        <div class="container flex justify-between mx-auto px-5 items-center">
            <LogocompanyInfo ></LogocompanyInfo>
            <form action="" class="bg-white rounded-2xl w-64 aspect-square">
                <h2 class="text-center font-bold font-Roboto">Login</h2>
                <AuthInfo></AuthInfo>
                <a href="" class="text-[#301B52] font-bold"> Forgot password? </a>
            </form>
        </div>
    </div>
</template>

