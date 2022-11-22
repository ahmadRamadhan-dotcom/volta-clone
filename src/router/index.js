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


router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
