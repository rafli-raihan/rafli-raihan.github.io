<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav>
    <div class="nav-container">
      <div class="logo">
        Rafli \ <span>{{ route.path === '/' ? "raihan's" : route.path.slice(1) }}</span>
      </div>
      <div class="nav-links">
        <RouterLink to="/" active-class="active">Home</RouterLink>
        <RouterLink to="/contact" active-class="active">Contact</RouterLink>
        <RouterLink to="/gallery" active-class="active">Gallery</RouterLink>
        <!-- <RouterLink to="/blog" active-class="active">Posts</RouterLink> -->
        <RouterLink to="/about" active-class="active">About Me</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>