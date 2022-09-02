import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    token: null,
    loggedin:null
  },
  //manipulating/changing the state
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    setloggedin(state){
      state.loggedin = true;
    }
  },
  //commiting the mutation
  actions: {
    setUser({commit}, user) {
      commit("setUser",user);
    },
    setToken({commit}, token) {
      commit("setToken",token);
    },
    login({commit}) {
      commit("setloggedin");
    },
  },

  //compute all derived state -when there is a change in state
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
    user(state) {
      return state.user;
    },
    token(state) {
      return state.token;
    },
  },
});

export default store;
