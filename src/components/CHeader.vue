<script setup>

defineProps({
    isAuthed: {
        type: Boolean,
        required: true,
        default: false,
    }
});
</script>
<template>
    <header class="container mx-auto px-5 py-4 flex justify-between">
        <a href="">logo</a>
        <nav class="flex gap-5">
            <a href="">home</a>
            <a href="" v-show="isAuthed">profile</a>
            <!-- logout -->
        </nav>
    </header>
</template>