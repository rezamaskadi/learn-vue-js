import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

router.afterEach(to => {
  if (to.meta.requireAuth) {
    store.dispatch("checkAuth");
  }

  if (to.meta.requireGuest && store.getters["isLoggedIn"]) {
    router.push("/dashboard");
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
