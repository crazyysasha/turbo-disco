
<script setup>
defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    }
});
defineEmits(['update:modelValue']);
</script>
<template>
    <!-- <label class="p-px border border-gray-900 rounded-full w-8 block">
        <div class="h-4 aspect-square rounded-full bg-black border border-gray-900 transition-all"
            :class="{ 'ml-[13px]': store.isDarkMode }">
        </div>
        <input type="checkbox" hidden :checked="store.isDarkMode" @change="store.toggleDarkMode()">
    </label> -->
    <label class="p-px border border-gray-900 rounded-full w-8 block">
        <div class="h-4 aspect-square rounded-full bg-black border border-gray-900 transition-all"
            :class="{ 'ml-[13px]': modelValue }">
        </div>
        <input type="checkbox" hidden :checked="modelValue" @change="$emit('update:modelValue', !!$event.target.checked)">
    </label>
</template>