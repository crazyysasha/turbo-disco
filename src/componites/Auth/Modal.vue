<script setup>

defineProps({
    Firstname:{
        type:String,
        required:true,
        default:'Имя'
    },
    Lastname:{
        type:String,
        required:true,
        default:'фамилия'
    },
    Email:{
        type:String,
        required:true,
        default:'электронная почта'
    },
    Pass:{
        type:String,
        required:Boolean,
        default:'пароль'
    }
})
</script>

<template>
    <div class="flex flex-col mx-auto items-center">
        <input type="text" :placeholder='Firstname' name="firstname" id="1" >
        <input type="text" :placeholder="Lastname" name="lastname"  id="2">
        <input type="email" :placeholder=" Email " name="email" id="3">
        <input type='password'  :placeholder=" Pass " name="pass" id="4" >
    </div>

</template>
<style>
#1{
    border-style:solid;
    border-radius: 1rem;
}
</style>