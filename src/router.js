import Vue from "vue";
import Router from "vue-router";
const Login = () => import("./views/Login.vue");
const Register = () => import("./views/Register.vue");
const Dashboard = () => import("./views/Dashboard.vue");
const Layout = () => import("./components/Layout.vue");
const User = () => import("./views/users/User.vue");

// import Login from "./views/Login.vue";
// import Register from "./views/Register.vue";
// import Home from "./views/Home.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      meta: {
        requireGuest: true
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/dashboard",
      component: Layout,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: "/",
          component: Dashboard,
          meta: {
            requireAuth: true
          }
        },
        {
          path: "users",
          component: User,
          meta: {
            requireAuth: true
          }
        },
        {
          path: "users/:id",
          component: User,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
});
