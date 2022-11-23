import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/Home.vue"),
  },
  {
    path: "/company",
    name: "company",
    component: () => import("../components/Company.vue"),
  },
  {
    path: "/education",
    name: "education",
    component: () => import("../components/Education.vue"),
  },
  {
    path: "/employment",
    name: "employment",
    component: () => import("../components/Employment.vue"),
  },
  {
    path: "/education",
    name: "education",
    component: () => import("../components/Education.vue"),
  },
  {
    path: "/history",
    name: "history",
    component: () => import("../components/History.vue"),
  },
  {
    path: "/inquiry",
    name: "inquiry",
    component: () => import("../components/Inquiry.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../components/News.vue"),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import("../components/Privacy.vue"),
  },
  {
    path: "/representative",
    name: "representative",
    component: () => import("../components/Representative.vue"),
  },
  {
    path: "/success",
    name: "success",
    component: () => import("../components/Success.vue"),
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;