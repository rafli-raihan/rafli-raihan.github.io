<script setup lang="ts"></script>

<template>
  <main>
    <img src="../assets/img/profile_pic_bw.png" alt="Profile Picture" class="profile_pic" />
    <div class="about_container">
      <h1>Hi! I'm Rafli,</h1>
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
      <h2>Experiences</h2>
      <div class="experience_content">
        <details open>
          <summary>Computer Repair Techinician | Cahaya Computer</summary>
          <h3>2023 - 2024</h3>
          <ul>
            <li>Repaired, upgraded and maintained personal computer (pc) and laptop devices</li>
            <li>
              Successfully built custom personal computers (pc) for offices and gaming purposes
            </li>
            <li>
              Successfully deployed OSes (e.g. Windows & Linux), installed softwares and drivers on
              personal computer (pc) and laptop devices
            </li>
          </ul>
        </details>

        <hr />
        <details open>
          <summary>High School Student | SMA Negeri 82 Jakarta</summary>
          <h3>2019 - 2022</h3>
          <ul>
            <li>
              Participated in Teenage Scientific Works (Karya Ilmiah Remaja) in electronics division
            </li>
            <li>
              Wrote scientific papers in Microsoft Word, designed presentations in Microsoft
              Powerpoint and presented it
            </li>
            <li>Participated in music extraculicular</li>
          </ul>
        </details>
      </div>
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
