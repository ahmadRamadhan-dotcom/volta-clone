import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/changelog",
    name: "Changelog",
    component: () => import("../views/ChangelogView.vue"),
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () => import("../views/PricingView.vue"),
  },
  {
    path: "/download",
    name: "Download",
    component: () => import("../views/DownloadView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
