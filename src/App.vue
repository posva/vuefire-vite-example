<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="./assets/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuefire.vuejs.org" target="_blank">
      <img src="/vuefire.svg" class="logo vuefire" alt="Vuefire logo" />
    </a>
  </div>
  <HelloWorld />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo.vuefire {
  height: 7.5em;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vuefire:hover {
  filter: drop-shadow(0 0 2em #f78200aa);
}

@media screen and (max-width: 425px) {
  .logo {
    height: 4em;
    padding: 0.5em;
  }
  .logo.vuefire {
    height: 5em;
  }
}
</style>
