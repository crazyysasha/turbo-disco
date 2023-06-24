<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from './stores/counter';

const store = useCounterStore();
store.increment();
</script>

<template>
 

  <RouterView />


</template>
