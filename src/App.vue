<script>
export default {
  data() {
    return {
      inputText: "",
      link: null
    };
  },
  methods: {
   clikmeLink() {
      this.link = this.inputText;
    },
    deleteLink() {
      this.link = null;
    }
  }
};
</script>

<template>
  <p>To do Taks</p>
   
  <div>
    <input class="input" type="text" v-model="inputText" />
    <button class="btn" @click="clikmeLink">clik me</button>
    <div v-if="link" class="link-container">
      <button class="delet" @click="deleteLink">Delete</button>
      <a  class="text" :href="link">{{ link }}</a>
    </div>
  </div>
</template>


<style>
.text { 
  color: black;
  font-size: medium;
 }
.delet {
background-color: red; 
  color: white;
  border-radius: 5px;
}
.input { 
  border: 1px solid blueviolet;
  border-radius: 10pxs;
}
.btn {
  background-color: blueviolet;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
}

.link-container {
  display: flex;
  align-items: center;
}

.link-container button {
  margin-right: 10px;
}
</style>