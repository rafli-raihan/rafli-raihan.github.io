<script setup lang="ts">
import { useIsOnRoot } from '@/composables/useIsOnRoot'
import { RouterLink } from 'vue-router'

const isRoot = useIsOnRoot()
</script>

<template>
  <div>
    <h1>Rafli Raihan's</h1>
    <p v-show="isRoot">hello, welcome to my page</p>
  </div>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About Me</RouterLink>
  </div>
</template>

<style scoped>
p {
  padding-left: 2px;
}
</style>
