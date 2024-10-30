<template>
  <div :class="$style.warpInput">
    <label :class="$style.label">{{ label }}</label>
    <input
      :class="$style.input"
      :type="type"
      v-model="value"
      :placeholder="placeholder"
      @input="updateValue"
    />
  </div>
</template>

<script setup lang="tsx">
import { ref } from "vue";

interface IInputForm {
  label: string;
  placeholder: string;
  type: string;
}

const emit = defineEmits(["update:value"]);
const value = ref("");

function updateValue(event: Event) {
  emit("update:value", value.value);
}
defineProps<IInputForm>();
</script>

<style lang="css" module>
.warpInput {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  width:100%;
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
</style>
