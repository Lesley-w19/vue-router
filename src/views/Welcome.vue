<template>
  <div class="wrapper">
    <h1>Welcome</h1>
    <!-- <router-link to="/login"><button>Login</button></router-link>
    <router-link to="home"><button>Home</button></router-link> -->
    <router-link v-if="isLoggedIn" to="/login"
      ><button>Login</button></router-link
    >
  </div>
</template>

<script>
import store from "@/store";
import { mapGetters } from "vuex";

export default {
  name: "WelcomeSection",

  mounted() {
    console.log(store.getters.isLoggedIn
);
  },

  //get state
  computed: {
    ...mapGetters["isLoggedIn"],
  },
};
</script>
