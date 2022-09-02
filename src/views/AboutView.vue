<template>
  <div class="about wrapper">
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <h1>This is an about page</h1>

    <!-- //3. view -->
    <div class="button-wrapper">
      <button v-on:click="addCount()">
        You've clicked me {{ counter }} times..
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  //1. state
  data() {
    return {
      counter: 0,
    };
  },

  //2. actions
  methods: {
    addCount() {
      this.counter++;
    },
  },
};
</script>

<style>
button {
  padding: 10px 30px;
  margin: 10px auto;
  background-color: orange;
  border-radius: 5px;
  border: none;
  color: white;
}
</style>
