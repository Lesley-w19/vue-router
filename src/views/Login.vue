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
import { mapActions } from "vuex";

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

      await axios
        .post("http://localhost:4000/users/authenticate", this.loginForm)
        .then((response) => {
          const { username, token } = response.data;
          // console.log(username, token);

          this.setUser(username);
          this.setToken(token);
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
 
};
</script>
