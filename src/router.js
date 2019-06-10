import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home/Home.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/Login/Registration.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login/Login.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("./views/User/Profile.vue")
    },
    {
      path: "/catalog",
      name: "catalog",
      component: () => import("./views/Catalog/Catalog.vue")
    }
  ],

  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

export default router;
