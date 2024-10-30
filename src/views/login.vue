<template>
  <main :class="$style.Main">
    <aside :class="$style.Column">
      <div :class="$style.Warp">
        <h1 :class="$style.Title">Login</h1>
        <h2 :class="$style.Body">
          Bem Vindo de Volta, faça login para continuar
        </h2>
        <inputForm
          label="Nome"
          placeholder="Digite seu Nome"
          type="text"
          @update:value="UpdateValue"
        />
        <inputForm
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          @update:value="UpdateValue"
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
const parentValue = ref("");
const auth = useAuthStore();
const router = useRouter();

function logoutUser() {
  auth.login();
  router.push({ name: "Home" });
  return;
}

function UpdateValue(newValue: string) {
  parentValue.value = newValue;
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
    margin-top: 5%;
  }

}
.Warp{
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
