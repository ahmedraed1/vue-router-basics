import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
    },
    beforeEnter(to, from, next) {
      const exists = router.hasRoute(to.name);
      if (!exists) {
        next({ name: "NotFound" });
      }
      console.log(to.name);
      next();
    },
    alias: "/home",
    children: [
      {
        path: "/:id",
        name: "child",
        component: () => import("../views/ChildView.vue"),
        meta: {
          title: "Child",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: {
      title: "About",
    },
    beforeEnter: (to, from, next) => {
      console.log("about beforeEnter");
      next();
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
