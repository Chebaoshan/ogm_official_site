import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue"
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
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
    path: "/management",
    name: "management",
    component: () => import("../components/Management.vue"),
  },
  {
    path: "/success",
    name: "success",
    component: () => import("../components/Success.vue"),
  }
];
const router = createRouter({
  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth"
    }
  },
  history: createWebHistory(),
  routes,
});
export default router;