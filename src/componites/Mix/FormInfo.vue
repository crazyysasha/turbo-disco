<script setup>
import { stringify } from 'postcss';

defineProps({
    Rgform:{
        type:String,
        required:true,
        default:'Ro\'yhatdan o\'tish'
    },
    name:{
        type:String,
        required:true,
        default:'Ism'
    },
    pass:{
        type:String,
        required:true,
        default:'Parol'
    },
    email:{
        type:String,
        required:true,
        default:'Elektron pochta'
    },
    mobile:{
    type:String,
    required:true,
    default:'Mobile'
    },
    gender:{
        type:String,
        required:true,
        default:'Jinsi'
    },
    customer:{
        type:String,
        required:true,
        default:'Siz mavjud mijozmisiz ?'
    }
})
</script>

<template>    
    <form class=" bg-white mx-auto px-6 py-6 flex flex-col gap-16 rounded-xl">
        <h1 class="text-2xl font-bold text-center">{{ Rgform }}</h1>
        <div class="flex p-3 gap-5">
            <h1 class="font-Roboto font-bold text-xl"> {{ name }} </h1>
            <input type="text" placeholder="First Name" class="bg-gray-200 w-64 h-10 text-center font-Roboto font-bold">
            <input type="text" placeholder="Last name" class="bg-gray-200   w-64 h-10 text-center font-Roboto font-bold">
        </div>
        <div class="flex gap-5">
            <h2 class="font-Roboto font-bold text-xl">{{ pass }}</h2>
            <input type="text" class=" w-64 bg-slate-300 h-10">
            <label class="p-px border border-gray-900 rounded-full w-8 h-5 block">
                <div class="h-4 aspect-square rounded-full bg-black border border-gray-900 transition-all ml-3"></div>
                <input type="checkbox" hidden>
            </label>
        </div>
        <div class="flex gap-5">
            <h3 class="font-Roboto font-bold text-xl ">{{ email }}</h3>
            <input type="text" placeholder="Example@email.com" class="bg-gray-200 w-64 h-10  text-center font-Roboto font-bold">
        </div>
        <div class="flex gap-5">
            <h4 class="text-xl font-Roboto font-bold">{{ mobile }}</h4>
            <input type="text" placeholder="Area Code" class="bg-gray-200  text-center font-Roboto font-bold">
            <input type="text" placeholder="Phone Number" class="bg-gray-200  text-center font-Roboto font-bold"> 
        </div>
        <div class="flex gap-5">
            <h5 class="text-xl font-Roboto font-bold">{{ gender }}</h5>
            <select name="" id="" class="bg-gray-200 text-center font-Roboto w-64">
                <option>Choose Gender</option>
                <option> Man</option>
                <option >Woman</option>
            </select>
        </div>
            <h6 class="text-xl font-Roboto font-bold"> {{ customer }}</h6>
        <div class="flex gap-3">
            <input type="radio" class="w-5">
            <label for="" class="text-lg">Yes</label>
            <input type="radio" class="w-5">
            <label for="" class="text-lg ">No</label>
        </div>

    </form>

   
    <!-- <form class=" container bg-blue-200 flex flex-col items-center w-64 aspect-square mx-auto"> -->
        <!-- <input type="text" class="border-solid border-2 rounded-2xl w-36 h-12 " placeholder="Nickname"> -->
        <!-- <input type="text" class="border-solid border-2 rounded-2xl w-36 h-12 " placeholder="Email or Login"> -->
        <!-- <input type="text" class="border-solid border-2 rounded-2xl w-36 h-12 " placeholder="Password"> -->
        <!-- <input type="text" class="border-solid border-2 rounded-2xl w-36 h-12 " placeholder="Age"> -->
        <!-- <select class="border-solid border-2 rounded-2xl w-36 h-12  "> -->
            <!-- <option value="">Please select your gender</option> -->
            <!-- <option value="">A Man</option> -->
            <!-- <option value=""> Woman</option> -->
        <!-- </select> -->
    <!-- </form> -->
 

</template>