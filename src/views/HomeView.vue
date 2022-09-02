<template>
  <div class="home wrapper">
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Login</router-link>
    </nav>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Home msg="Welcome to Your Vue.js App" :products="products" />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "../components/Home.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Home,
  },
  data() {
    return {
      products: [],
      url: "https://fakestoreapi.com/products",
    };
  },
  //using the created hook
  // async created() {
  //   try {
  //     const response = await axios.get(this.url);
  //     this.products = response.data;
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  // using the mounted hook
  async mounted() {
    try {
      const response = await axios.get(this.url);
      this.products = response.data;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },

  // mounted() {
  //   fetch(this.url)
  //     .then((res) => res.json())
  //     .then((data) => (this.products = data))
  //     .catch((error) => console.log(error));
  // },
};
</script>
