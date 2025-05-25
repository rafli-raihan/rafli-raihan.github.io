<script setup lang="ts">
import { useIsOnRoot } from '@/composables/useIsOnRoot'
import { RouterLink } from 'vue-router'

const isRoot: boolean = useIsOnRoot().value
</script>

<template>
  <div>
    <h1>Rafli Raihan's</h1>
    <p v-show="isRoot">hello, welcome to my page</p>
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">Portfolio</RouterLink>
  </nav>
</template>

<style scoped>
div {
  display: block;
}
</style>
