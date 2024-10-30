<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import router from "./router";
import { useAuthStore } from "./stores/auth";

const auth = useAuthStore();

onMounted(() => {
  router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !auth.isAuthenticated) {
      next({ name: "Login" });
    } else {
      next();
    }
  });
});
</script>

