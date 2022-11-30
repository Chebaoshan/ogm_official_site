import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    meta:{
      keepAlive:true
    },
    component: ()=>import("../components/Home.vue")
  },
  {
    path: "/company",
    name: "company",
    meta:{
      keepAlive:true
    },
    component: () => import("../components/Company.vue"),
  },
  {
    path: "/education",
    name: "education",
    meta:{
      keepAlive:true
    },
    component: () => import("../components/Education.vue"),
  },
  {
    path: "/employment",
    name: "employment",
    meta:{
      keepAlive:true
    },
    component: () => import("../components/Employment.vue"),
  },
  {
    path: "/education",
    name: "education",
    meta:{
      keepAlive:true
    },
    component: () => import("../components/Education.vue"),
  },
  {
    path: "/history",
    name: "history",
    meta:{
      keepAlive:true
    },
    component: () => import("../components/History.vue"),
  },
  {
    path: "/inquiry",
    name: "inquiry",
    meta:{
      keepAlive:true
    },
    component: () => import("../components/Inquiry.vue"),
  },
  {
    path: "/news",
    name: "news",
    meta:{
      keepAlive:true
    },
    component: () => import("../components/News.vue"),
  },
  {
    path: "/privacy",
    name: "privacy",
    meta:{
      keepAlive:true
    },
    component: () => import("../components/Privacy.vue"),
  },
  {
    path: "/representative",
    name: "representative",
    meta:{
      keepAlive:true
    },
    component: () => import("../components/Representative.vue"),
  },
  {
    path: "/management",
    name: "management",
    meta:{
      keepAlive:true
    },
    component: () => import("../components/Management.vue"),
  },
  {
    path: "/success",
    name: "success",
    meta:{
      keepAlive:true
    },
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