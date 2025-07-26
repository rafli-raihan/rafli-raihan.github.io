<script setup lang="ts"></script>

<template>
  <main>
    <div class="summary">
      <img
        src="https://avatars.githubusercontent.com/u/115336466?v=4"
        alt="Profile Picture"
        class="profile_pic"
      />
      <div class="about_container">
        <h1>Hi! I'm Rafli,</h1>
        <p>
          <b>Tech Enthusiast, Freelancer & Musician(sort of...)</b> born and raised in Jakarta,
          Indonesia. Whether I'm immersed in my university life or exploring art and the latest of
          technology, I'm always fueled by curiosity, always up to the challenges, and really
          passionate to push things to its limit (yes, even myself).
          <br />
          <br />
          You can find me doing anything I can/love/must do every day. Whether it's freelancing,
          programming, writing music, performing in a band, or just simply surfing the web like
          everyone else.
          <br />
        </p>
      </div>
    </div>
    <h2>Experiences</h2>
    <div class="experience_content">
      <details open>
        <summary>Computer Technician | Cahaya Computer</summary>
        <h3>2023 - 2024</h3>
        <ul>
          <li>Successfully repaired, upgraded and maintained PCs and laptops</li>
          <li>Successfully built PCs for office and gaming purposes</li>
          <li>
            Successfully deployed Operating Systems (e.g. Windows & Linux), installed softwares and
            drivers on PCs and laptops
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
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.summary {
  margin: 0 auto;
  padding-bottom: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: stretch;
}

.experience_content {
  width: 100%;
}

@media screen and (min-width: 800px) {
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2%;
  }

  .summary {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    max-width: 1200px;
  }
}

.profile_pic {
  display: flex;
  box-shadow: 0 0 10px rgba(26, 25, 25, 0.699);
  justify-content: center;
  align-self: center;
  margin: 2% auto auto auto;
  border-radius: 25%;
  transition: 500ms;
  max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
  object-fit: contain;
}

.profile_pic:hover {
  transform: scale(1.03);
}

.about_container {
  display: block;
  place-items: center;
  padding: 2%;
}

.about_container > h2 {
  font-weight: bold;
}

.about_container > p {
  text-justify: distribute;
}

@media screen and (min-width: 800px) {
  .summary {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch; /* Make children (img and about_container) the same height */
    max-width: 1200px;
  }

  .profile_pic {
    max-height: 100%;
    max-width: 300px; /* Optional: limit width on large screens */
  }

  .about_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start; /* Align text to the left */
  }
}
</style>
