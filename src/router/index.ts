import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Login from "../views/login.vue";
import Home from "../views/Home.vue";
import { useAuthStore } from '../stores/auth';

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Login", component: Login },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
