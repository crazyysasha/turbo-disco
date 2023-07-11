<script setup>
import { ref } from 'vue';
import ExampleComp from '../componites/ExampleComp.vue';


const isOpen = ref(false);

const isOpen2 = ref(false);

function beforeEnter(el) {
  console.log(el);

  el.style.opacity = 0;
}

function onEnter(element, done) {
  element.style.transition = '1s all ease-in-out';
  setTimeout(function () {
    element.style.opacity = 100;

    setTimeout(function () {
      element.style.transition = '';
      element.style.opacity = '';
      done();
    }, 1000);
  }, 1);
  console.log(element, done);
}

function onAfterEnter(el) {
  console.log('after enter: ', el);
}
const isFinished = ref(false);

</script>

<template>
  <main>
    Home
    <button @click="isOpen = !isOpen">
      open
    </button>
    <transition enter-from-class="opacity-0 text-white" enter-active-class="transition duration-1000"
      enter-to-class="opacity-100 text-blue-500" leave-from-class="opacity-100"
      leave-active-class="transition duration-400" leave-to-class="opacity-0">
      <div v-if="isOpen">sdafsdf</div>
    </transition>
    <button @click="isOpen2 = !isOpen2">toggle 2</button>
    <transition @before-enter="beforeEnter" @enter="onEnter" @after-enter="onAfterEnter">
      <div v-if="isOpen2">
        sdfsdf</div>
    </transition>

    <transition appear appear-from-class="text-red-500" appear-active-class="transition duration-1000" appear-to-class="text-violet-500" @after-appear="isFinished = true">
      <div :class="{'text-violet-500': isFinished}">text</div>
    </transition>
  </main>

  <ExampleComp v-model:is-open="isOpen" :label="isFinished"></ExampleComp>
</template>
<style></style>