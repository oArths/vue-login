<script setup lang="tsx">
let name = "Arthur";
</script>

<template>
  <main :class="$style.Main">
    <aside :class="$style.Column">
      ola
    </aside>
    <aside :class="$style.Column">
      img
    </aside>
  </main>
</template>
<style lang="css" module>
.Main {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;
}
.Column{
  width: 40%;
  height: 100%;
}
</style>
