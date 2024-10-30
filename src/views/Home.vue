<template>
    <main :class="$style.Main">
      <aside :class="$style.Column">
          Home
      </aside>
      <aside :class="$style.Column">
        Home
      </aside>
    </main>
  </template>
  <script setup lang="tsx">
  </script>
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
  