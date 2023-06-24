<script setup>
import {ref,reactive} from 'vue'
import LogocompanyInfo from '../componites/LogocompanyInfo.vue';
import AuthInfo from '../componites/AuthInfo.vue'
import ButtonView from '../componites/buttonView.vue';
const companyinfo=reactive({
    logo:'./src/assets/images/temp/logo.svg',
    name:'HASH TECH',
    slogan:'Powered By C# Ui Academy',
})

const authInfo=reactive({
    Users:'User name',
    Pass:'Password',
    Passrecovery:'Forgot password?',
})

const buttonsettings=reactive({
    login:'Login',
    signup:'Signup'

})

</script>

<template>
    <div class="bg-[#301B52] min-h-screen flex-col">
        <div class="container flex justify-between mx-auto px-5 items-center">
            <LogocompanyInfo  v-bind:="companyinfo"></LogocompanyInfo>
            <form action="" class="bg-white rounded-2xl w-64 aspect-square">
                <h2 class="text-center font-bold font-Roboto">Login</h2>
                <AuthInfo v-bind:="authInfo"></AuthInfo>
                <ButtonView :="buttonsettings"></ButtonView>
            </form>
           
        </div>
    </div>
</template>

