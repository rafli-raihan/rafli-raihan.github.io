<script setup lang="ts"></script>

<template>
  <main class="grid container" id="about_main">
    <img src="../assets/img/profile_pic_bw.png" alt="Profile Picture" class="profile_pic" />
    <div class="about_container">
      <h2>Hi! I'm Rafli,</h2>
      <p>
        IT Student, Freelancer & Musician(sort of) born and raised in Jakarta, Indonesia. Whether
        I'm immersed in my university life or exploring art and the latest of technology, I'm always
        fueled by curiosity and always up to the challenges.
        <br />
        <br />
        When I'm not studying, you can find me doing side hustle and other stuff. Whether it's
        freelancing, programming, writing music, or just simply surfing the web.
        <br />
      </p>
    </div>
  </main>
</template>

<style scoped>
main {
  display: block;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
}

@media screen and (min-width: 768px) {
  main {
    display: flex;
  }
}

.profile_pic {
  margin: 3%;
  border-radius: 15px;
  transition: 500ms;
}

.profile_pic:hover {
  transform: scale(1.03);
}

.about_container {
  padding: 3%;
}

.about_container > h2 {
  font-weight: bold;
}

.about_container > p {
  text-justify: distribute;
}
</style>
