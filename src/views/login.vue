<template>
  <main :class="$style.Main">
    <aside :class="$style.Column">
      <div :class="$style.Warp">
        <h1 :class="$style.Title">Login</h1>
        <h2 :class="$style.Body">
          Bem Vindo de Volta, faça login para continuar
        </h2>
        <inputForm
          label="Email"
          placeholder="Digite seu Email"
          type="text"
          v-model="formData.email"
          :erro="ErroData.email"
        />
        <inputForm
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          v-model="formData.password"
          :erro="ErroData.password"
        />
        <button :class="$style.Button" @click="logoutUser">Logout</button>
      </div>
    </aside>
    <aside :class="$style.Column">
      <div :class="$style.Imagem" />
    </aside>
  </main>
</template>
<script setup lang="tsx">
import { ref } from "vue";
import inputForm from "../components/inputForm.vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import api from "../api/axios.ts";
const auth = useAuthStore();
const router = useRouter();
const formData = ref({
  email: "",
  password: "",
});
const ErroData = ref({
  email: "",
  password: "",
});

async function logoutUser() {
  try {
    const res = await api.post("/signin", {
      email: formData.value.email,
      password: formData.value.password,
    });
    console.log(res.data);
    auth.login();
    router.push({ name: "Home" });
  } catch (err) {
    console.log(err.response?.data);
    const data = err.response?.data;
    if (data && data.error) {
      ErroData.value.email = data.error.email ? data.error.email[0] : "";
      ErroData.value.password = data.error.password
        ? data.error.password[0]
        : "";
    }
  }
}
</script>
<style lang="css" module>
.Main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.Column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 60%;
  height: 100%;
  justify-content: center;
  &:first-child {
    width: 40%;
    min-width: 300px;
    padding: 0px 20px;
    margin-top: 5%;
  }
}
.Warp {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  width: auto;
  height: 100%;
  max-width: 350px;
}
.Imagem {
  border-radius: 10px;
  width: 100%;
  height: 90%;
  background-color: #878585;
}
.Title {
  font-size: 45px;
  text-align: left;
  font-weight: 600;
}
.Body {
  margin-bottom: 20px;
  font-size: 18px;
  text-align: left;
  font-weight: 300;
}
.Button {
  margin-top: 50px;
  cursor: pointer;
  width: 100%;
  height: 40px;
  border: 2px;
  color: #e4e4e4;
  background-color: #232323;
}
</style>
