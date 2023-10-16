import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const Home = () => import('../views/Home.vue')
const LoginSuc = () => import('../views/LoginSuc.vue')

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/LoginSuc",
    name: "LoginSuc",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LoginSuc
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
