<script setup>
defineProps({
    login: {
        type: String,
        required: true,
        default: 'Login'
    },
    signup: {
        type: String,
        required: true,
        default: 'Signup'
    },
    Url: {
        required: true,
        default: document.location.origin + '/homework'
    }

})

</script>
<template>
    <div class="flex justify-center gap-6">
        <button class="bg-[#301B52] rounded-2xl text-white font-Roboto w-20 hover:bg-lime-700">
            <a :href="Url">{{ login
            }}</a>
        </button>
        <button class="bg-[#DB0916] rounded-2xl text-white font-Roboto w-20">{{ signup }}</button>
    </div>
</template>