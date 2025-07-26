<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <h1>Rafli Raihan's</h1>
    <p v-show="route.path == '/'">
      <b>Hi, how are you?</b> <br />
      Welcome to my page..
    </p>
  </div>
  <div>
    <RouterLink v-show="route.path !== '/'" to="/" class="nav-btn">Home</RouterLink>
    <RouterLink v-show="route.path !== '/about'" to="/about" class="nav-btn">About Me</RouterLink>
  </div>
</template>

<style scoped>
p {
  padding-left: 2px;
}

.nav-btn {
  border-radius: 15px;
  padding: 0.5em 1.2em;
  background: var(--color-background-soft);
  box-shadow: 0 2px 8px 0 rgba(44, 62, 80, 0.1);
  outline: none;
  cursor: pointer;
  transition:
    background 0.2s,
    box-shadow 0.2s,
    transform 0.1s;
  font-size: 1em;
  display: inline-block;
  text-decoration: none;
  font-weight: 600;
  font-family: inherit;
  overflow: hidden;
  min-width: 90px;
  min-height: 2.5em;
  text-align: center;
  line-height: 1.2;
  border: none; /* Safe to keep, but not needed for links */
}

.nav-btn:focus {
  box-shadow:
    0 0 0 2px var(--color-border-hover),
    0 2px 8px 0 rgba(44, 62, 80, 0.1);
}

.nav-btn:hover {
  background: var(--color-background-mute);
  box-shadow: 0 4px 16px 0 rgba(44, 62, 80, 0.15);
  transform: translateY(-2px) scale(1.03);
}

.nav-btn:active {
  background: var(--color-background);
  box-shadow: 0 1px 4px 0 rgba(44, 62, 80, 0.08);
  transform: scale(0.98);
}
</style>
