<script setup>
import { ref } from 'vue';

defineProps(['modelValue',])
defineEmits(['update:modelValue'])
const isHidden = ref(false);
const isDisabled = ref(false);


</script>
<template>
    <div class="relative max-w-min">
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
        <button :class="{ 'bg-red-500': isHidden }" class="absolute right-0 top-1/2 -translate-y-1/2"
            @click="isHidden = !isHidden">
            hide
            <!-- {{ isHidden }} -->
        </button>
        <button :class="{'bg-slate-400': isDisabled}" class="absolute left-0 top-1/2 -translate-y-1/2" @click="isDisabled = !isDisabled">
            disabling
        </button>
    </div>
</template>