<script setup lang="ts"></script>

<template>
  <main>
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
}

@media screen and (min-width: 800px) {
  main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
}

.profile_pic {
  display: flex;
  justify-content: center;
  align-self: center;
  margin: 2% auto auto auto;
  border-radius: 15px;
  transition: 500ms;
}

.profile_pic:hover {
  transform: scale(1.03);
}

.about_container {
  display: block;
  place-items: center;
  padding: 3%;
}

.about_container > h2 {
  font-weight: bold;
}

.about_container > p {
  text-justify: distribute;
}
</style>
