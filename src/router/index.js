import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import takhfifPage from "../views/pages/takhfifPage";
import listCategoryPage from "../views/pages/listCategoryPage"
import shopingCardPage from "../views/pages/shopingCardPage"

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
    path: "/listCategoryPage",
    name: "listCategoryPage",
    component: listCategoryPage
  },
  {
    path: "/shopingcard",
    name: "shopingcard",
    component: shopingCardPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
