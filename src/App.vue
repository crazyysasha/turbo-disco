<script setup>
import { computed } from '@vue/reactivity';
import { reactive, ref } from 'vue';
const userName = ref('default');

const classList = computed(() => {
  if (userName.value.length > 0 && userName.value != 'default') {
    return ["filled"];
  }
  return [];
});

const data = reactive({
  name: 'John',
  surname: "Smith"
});
const fullName = computed(() => {
  return `${data.name} ${data.surname}`
});

const onInput = ($event) => {

  const fullName2 = $event.target.value;

  const [name2, surname2] = fullName2.split(' ');
 
  data.name = name2;
  data.surname = surname2;

}
</script>
<template>
  <form v-bind:class="classList">
    {{ userName }}
    <input type="text" name="your_name" v-model="userName">
  </form>
  <form action="">
    {{ fullName }}
    <input type="text" name="full_name" :value="fullName" v-on:input="onInput">
  </form>
</template>
<style scoped>
.filled {
  color: red;
}
</style>
