<script setup>
import { ref } from 'vue';



const isOpen = ref(false);

const classes = () => {
  if (!isOpen.value) {
    return "hidden"
  }
  return ''
}

const users = ref([
  //  { name: 'Ravshan', age: 15 }, { name: 'Samir', age: 15 }, { name: 'Humoyin', age: 15 }
]);
</script>

<template>
  <header class="bg-gray-500" :class="classes()">
    <a href="">logo</a>
    <nav>
      <a href="">menu 1</a>
    </nav>
  </header>
  {{ isOpen }}
  <button @:click.stop="isOpen = !isOpen">
    menu
  </button>
  <ul v-if="users.length > 2">
    <li v-for="{ name, age }, efsd in users">
      {{ efsd + 1 }}. {{ name }} {{ age }}
    </li>
  </ul>
  <p v-else-if="users.length > 0">
    foydalanuvchilar 3 dan kam
  </p>
  <p v-else>
    foydalanuvchilar yo'q
  </p>

  <input type="text" name="" id="" v>
</template>


<style>
.hidden {
  display: none;
}
</style>