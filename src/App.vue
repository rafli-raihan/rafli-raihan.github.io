<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <h1>Rafli Raihan's</h1>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Portfolio</RouterLink>
    </nav>
  </header>

  <div class="content">
    <RouterView />
  </div>

  <footer>
    <nav>
      <a href="https://www.facebook.com/fli.raihan/">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-2v1h-2v1h-1v-8h2v-1h1v-2h-3V9h1V8h2V5h-4v1h-2v2h-1v4H7v3h3v8H9v-1H7v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2z"
          />
        </svg>
      </a>
      <a href="https://www.github.com/rafli-raihan">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-1v-5h-1v-1h1v-1h2v-1h1v-1h1V9h-1V6h-2v1h-1v1h-1V7h-4v1H9V7H8V6H6v3H5v5h1v1h1v1h2v2H7v-1H6v-1H4v1h1v2h1v1h3v3H8v-1H6v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2z"
          />
        </svg>
      </a>
      <a href="https://www.instagram.com/rafli_r4ihan/">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M17 9V8h-1V7h-1V6H9v1H8v1H7v1H6v6h1v1h1v1h1v1h6v-1h1v-1h1v-1h1V9zm-1 5h-1v1h-1v1h-4v-1H9v-1H8v-4h1V9h1V8h4v1h1v1h1z"
          />
          <path
            fill="currentColor"
            d="M22 5V3h-1V2h-2V1H5v1H3v1H2v2H1v14h1v2h1v1h2v1h14v-1h2v-1h1v-2h1V5zm-1 14h-1v1h-1v1H5v-1H4v-1H3V5h1V4h1V3h14v1h1v1h1z"
          />
          <path fill="currentColor" d="M17 5h2v2h-2z" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/muhammad-rafli-raihan-6336a4294">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-9 10v8h-3V9h3v1h1V9h4v1h1v10h-3v-8zM4 8V5h3v3zm3 1v11H4V9z"
          />
        </svg>
      </a>
    </nav>
    <p>Rafli Raihan | 2025</p>
  </footer>
</template>

<style>
header {
  position: static;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: min-content;
}

.navbar > div {
  height: max-content;
  margin-right: auto;
}

.navbar > nav {
  height: max-content;
  justify-content: space-evenly;
}

main {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

footer {
  position: relative;
  margin-top: 100vh;
  width: 100%;
  display: block;
  align-items: center;
  justify-content: center;
}

footer > nav {
  display: flex;
  margin: 2% auto 3% auto;
  align-items: center;
  justify-content: space-evenly;
  max-width: 450px;
}

footer > p {
  margin: auto;
  text-align: center;
}
</style>
