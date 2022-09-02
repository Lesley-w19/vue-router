<template>
  <div class="wrapper">
    <h1>LOGIN</h1>
    <form @submit.prevent="login">
      <input v-model="loginForm.username" placeholder="username" />
      <br />
      <br />
      <input
        v-model="loginForm.password"
        placeholder="password"
        type="password"
      />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
// import console from "console";
import { mapActions } from "vuex";

// this.$store.getters
export default {
  name: "LoginSection",
  data: () => {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["setUser", "setToken"]),
    async login() {
      // console.log(this.username, this.password);

      //  const response = await axios.post("http://localhost:4000/users/authenticate", this.loginForm).then(() => ).catch((err) => {console.log(err)});

      try {
        const response = await axios.post(
          "http://localhost:4000/users/authenticate",
          this.loginForm
        );
        const { username, token } = await response.data;
        // console.log(username, token);

        this.setUser(username);
        this.setToken(token);

        this.$router.push({ name: "home", params:{id:89} });
        // this.$router.push(`/home/${username}`);
        // this.$router.push(`/home/`, );
      } catch (error) {
        // console.error(error)
        console.log("iko njee");
      }
    },
  },
  computed: {},
};
</script>
