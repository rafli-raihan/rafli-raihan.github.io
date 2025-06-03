<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <main>
    <div class="container-fluid">
      <Navbar />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  min-height: 75vh;
  align-items: center;
  justify-content: flex-start;
}
</style>
