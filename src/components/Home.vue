<template>
  <div class="home-wrapper">
    <!-- <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->

    <!-- {{ products }} -->
    <div class="card">
      <div v-for="product in products" v-bind:key="product.id">
        <h3>{{ product.title }}</h3>
        <img :src="product.image" alt="product.title" />
        <p class="desc">{{ product.description }}</p>
        <p>{{ product.category }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.rating }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",

  props: {
    msg: String,
    products: Array,
  },
  data() {
    return {
      // products: this.$root.products,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  width: 200px;
  height: 200px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.home-wrapper {
  width: 100%;
  .card {
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: space-around;
    width: 50px;
    margin: 10px auto;

    .desc {
      width: 70%;
      margin: 10px auto;
    }
  }
}
</style>
