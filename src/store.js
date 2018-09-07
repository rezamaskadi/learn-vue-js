import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "./router";
import swal from "sweetalert2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: !!localStorage.token,
    userData: null
  },
  mutations: {
    successLogin(state, data) {
      state.isLogin = true;
      state.userData = data;
    },
    failedLogin(state) {
      state.isLogin = false;
      state.userData = null;
      localStorage.removeItem("token");
    }
    // saveUserData(state, data) {
    //   state.userData = data;
    // }
  },
  actions: {
    login({ commit }, data) {
      //state, commit, dispatch, dll
      commit("successLogin", data);
      // commit('saveUserData', data) // actions call mutations
      // dispatch('checkAuth') // actions call actions
      localStorage.token = data.token;
    },
    checkAuth({ commit }) {
      if (!localStorage.token) {
        router.push("/");
      }
      return axios
        .get("http://localhost:9021/v1/user/profile/me", {
          headers: {
            usertoken: localStorage.token
          }
        })
        .then(() => {
          commit("successLogin");
        })
        .catch(function(error) {
          localStorage.removeItem("token");
          swal("Failed", error.message, "error");
          router.push("/");
        });
    }
  },

  getters: {
    isLoggedIn: state => state.isLogin
  }
});
