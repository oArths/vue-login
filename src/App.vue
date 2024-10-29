<script setup lang="tsx">
let name = "Arthur";
</script>

<template>
  <div  :class="$style.TextHead">
    {{ name + "é foda" }}
  </div>
</template>
<style lang="css" module>
.TextHead {
  font-size: 40px;
  color: aqua;
}
</style>
