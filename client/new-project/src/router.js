import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home";
import Order from "./components/Order";
import Edit from "./components/Edit";
import Add from "./components/Add";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/",  alias: "/home", component: Home},
    { path: "/orders", component: Order },
    { path: "/edit/:id", component: Edit },
    { path: "/add", component: Add }
  ]
});

export default router;