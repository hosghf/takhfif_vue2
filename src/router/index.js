import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import takhfifPage from "../views/pages/takhfifPage";
import listCategoryPage from "../views/pages/listCategoryPage"
import shopingCardPage from "../views/pages/shopingCardPage"
import signInPage from "../views/pages/signInPage"
import accountPage from "../views/pages/accountPage"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/takhfifPage",
    name: "takhfifPage",
    component: takhfifPage
  },
  {
    path: "/takhfifPage/:id",
    name: "takhfifPage",
    component: takhfifPage
  },
  {
    path: "/listCategoryPage",
    name: "listCategoryPage",
    component: listCategoryPage
  },
  {
    path: "/listCategoryPage/:id",
    name: "listCategoryPage",
    component: listCategoryPage
  },
  {
    path: "/shopingcard",
    name: "shopingcard",
    component: shopingCardPage
  },
  {
    path: "/signIn",
    name: "signIn",
    component: signInPage
  },
  {
    path: "/account",
    name: "account",
    component: accountPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // linkExactActiveClass: "active" 
});

export default router;
