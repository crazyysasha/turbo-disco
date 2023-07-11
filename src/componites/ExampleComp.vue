<script setup>

defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
    }
});
defineEmits(['update:isOpen']);
</script>
<template>
    <div>
        {{ label }}
        <button @click="$emit('update:isOpen', isOpen = !isOpen)">toggle</button>
    </div>
    <div v-if="isOpen">
        is opened
    </div>
</template>