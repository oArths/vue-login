<template>
  <div :class="$style.warpInput">
    <label :class="$style.label">{{ label }}</label>
    <input
      :class="$style.input"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p :class="$style.erro">{{ erro }}</p>
  </div>
</template>

<script setup lang="tsx">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  type: String,
  erro: String,
});
// update:modelValue é padrão do vue em componentes personalizados emitir um evento com esse nome
const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="css" module>
.warpInput {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  width: 100%;
}
.label {
  font-size: 16px;
  font-weight: 500;
}
.input {
  width: 100%;
  font-size: 14px;
  border: 1px solid #ccc;
  height: 30px;
  border-radius: 5px;
  padding: 5px 10px;
}
.erro {
  font-size: 12px;
  font-weight: 400;
  height: 10px;
  color: rgb(184, 43, 43);
}
</style>
